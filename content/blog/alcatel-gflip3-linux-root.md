---
layout: post
title: "Rooting Alcatel Go Flip 3 (T-Mobile) (4052W) on Linux"
date: 2024-10-06
---

This guide explains how to root the Alcatel Go Flip 3 (4052W) on Linux, maybe works on other models, not tested.

## 1. Install Dependencies


```bash
pip install pyusb pyserial capstone keystone-engine
```

Alternatively, is possible to install them via `pipx` or your package manager.

## 2. Clone the `edl` Repository

Clone the `edl` tool [from GitHub](https://github.com/andybalholm/edl) and navigate to the repository folder:

```bash
git clone https://github.com/andybalholm/edl/
```
```
cd edl
```

2.1 Download the required [`Gflip3_TMO_NPRG.mbn`](https://raw.githubusercontent.com/programmer-collection/alcatel/refs/heads/master/Gflip3_TMO/Gflip3_TMO_NPRG.mbn) file:

```bash
wget https://raw.githubusercontent.com/programmer-collection/alcatel/refs/heads/master/Gflip3_TMO/Gflip3_TMO_NPRG.mbn
```

Place this file in the `edl` repository folder.

## 3. Modify `modprobe` and `udev` Rules

Run the following commands as root, assuming that you're on the edl folder:

```bash
echo "blacklist qcserial" >> /etc/modprobe.d/blacklist.conf
cp *.rules /etc/udev/rules.d/
```

then reboot your system to refresh changes

## 4. Enter Download Mode on the Phone

1. Remove and reinsert the battery.
2. Connect the charger while holding the volume buttons.
3. Once the prompt appears, release the volume down button.
4. The screen will turn off: release the buttons completely. The phone is now in **Download Mode**.

## 5. Extract the `boot.img`

1. Run the following command to extract `boot.img` from the device:

```bash
python edl.py -r boot boot.img -loader Gflip3_TMO_NPRG.mbn
```

2. After extraction, the phone will exit download mode. It's safe to reboot by pressing the **hang up** button, but don't do this yet, as you'll need download mode again.

> **Optional (Highly Recommended)**: Back up the `boot.img` in case something goes wrong. The next step won't overwrite the file.

## 6. Modify the `boot.img`

1. Download the latest release of the [Android Boot Image Editor](https://github.com/cfig/Android_boot_image_editor/releases)

2. Extract the zip file and open the folder.

3. Copy the `boot.img` from the `edl` folder into the boot editor folder.

4. Unpack the `boot.img`:

```bash
./gradlew unpack
```

## 7. Edit the `boot.img` Files

- **default.prop**: Modify the following lines:
  ```bash
  ro.secure=0
  ro.debuggable=1
  security.perf_harden=0
  ro.adb.secure=0
  ```

- **init.rc**: Comment out this line:
  ```bash
  setprop selinux.reload_policy 1
  ```

- **init.qcom.early_boot.sh**: Add this line at the end:
  ```bash
  setenforce 0
  ```

- **boot.json**: Add the following to the end of the `"cmdline"` line:
  ```bash
  androidboot.selinux=permissive enforcing=0
  ```

- Replace the `sbin/adbd` with [this file](https://gitlab.com/suborg/8k-boot-patcher/-/blob/master/adbd). Note: Executable permissions aren't necessary as they're declared in `filelist.txt`.

> [!note]
> I tried using the Docker method (see references at end), but I ended up without a proper setup. I'm not sure if I did something wrong. Anyway, I find this method faster than using Docker.

## 7.1 Install BusyBox (Optional)

This phone doesn't have Busybox by default, this is necessary to run the terminal app (it's actually very inconvenient, but I want it anyway), but it's not easier than putting in a Busybox, it needs some configuration.

- Download a BusyBox compatible with KaiOS (thanks to [OmniBB](https://gitlab.com/suborg/omnibb/-/raw/master/rsrc/busybox.bin)).

- Copy busybox.bin as `/sbin/busybox`.

- Open `ramdisk.img_filelist.txt` (located in `(booteditorfolder)/build/unzip_boot/`), and add a new entry for `busybox` after `adbd`:

  ```json
  {"name":"sbin/adbd","statMode":33256,"ino":11080778,"note":"REG 100750"}
  {"name":"sbin/busybox","statMode":33256,"ino":11080900,"note":"REG 100750"}
  ```

> This method is kinda insecure because the entries are inode-aware, so although it is possible to load more binaries this way, I think it is not a good idea, in any case, since Busybox provides `busybox ash`, it is a lot better and safer to start ash and put binaries somewhere safe like /data/bin (creating the path because it doesn't exist)

## 8. Flash the Modified `boot.img`

1. After signing the new boot image, copy `boot.img.signed` back into the `edl` folder as `boot.img`.

2. Put the phone in **Download Mode** again.

3. Flash the modified `boot.img`:

```bash
python edl.py -w boot boot.img -loader Gflip3_TMO_NPRG.mbn
```

At this point the cell phone should have root, it is possible to check it by running adb root

```bash
ItsZariep@PC~-> adb root
adbd is already running as root
ItsZariep@PC~-> adb shell
root@gflip3_tmo:/ # 
```

## 9. Handling Forbidden Permissions?

I think this is not necessary as I was able to download omnisd and install wallace toolbox without problems, but in any case there is a situation that locked me out for a second because the phone preferences were greyed out.

1. Download [**Waterfox Classic**](https://classic.waterfox.net) (KaiOS srt doesn't work for me).

2. Navigate to runtime info and click **Request highest permissions**, the phone will reboot.

3. After reboot, device preferences should no longer be greyed out, and you can clear `devtools.apps.forbidden-permission`.

## References

- https://bmndc.github.io/nokia-leo/root
- https://wiki.bananahackers.net/devices/alcatel-4052
