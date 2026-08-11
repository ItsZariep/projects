---
title: OpenNavBar
section: Android
description: "Feature-rich Android navigation bar replacement"
---

# OpenNavBar

Open source alternative navigation bar for Android.

[![LiberaPay](https://liberapay.com/assets/widgets/donate.svg)](https://liberapay.com/zariep/donate)
<a href='https://ko-fi.com/C0C1MBGAV' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a> 

## Download

<a href="https://codeberg.org/ItsZariep/OpenNavBar/releases/latest">
  <img class=".hidden" src="https://codeberg.org/Codeberg/GetItOnCodeberg/media/branch/main/get-it-on-white-on-black.png"
       alt="Get It on Codeberg"
       height="60">
</a>

<a href="https://apt.izzysoft.de/packages/com.zariep.opennavbar">
  <img class=".hidden" src="https://gitlab.com/IzzyOnDroid/repo/-/raw/master/assets/IzzyOnDroidButtonGreyBorder_nofont.png"
       alt="Get it at IzzyOnDroid"
       height="60">
</a>

<a href="http://apps.obtainium.imranr.dev/redirect.html?r=obtainium://add/https://codeberg.org/itszariep/opennavbar">
  <img class=".hidden" src="https://github.com/ImranR98/Obtainium/raw/main/assets/graphics/badge_obtainium.png"
       alt="Get it on Obtainium"
       height="60">
</a>

## Features

- Auto-hide
- Custom images (you can download some from [ONB Wiki](https://codeberg.org/ItsZariep/OpenNavBar/wiki/Button-themes-%2F-Images))
- Custom long-press actions
- Custom width, height and colors
- Low resource and storage usage

[See Full feature list](https://codeberg.org/ItsZariep/OpenNavBar/wiki/OpenNavBar-Feature-list)

## Requirements

- **Android 7.0** or above
- **4 MB storage**

> Monet theming is supported on Android 12 and above.

> Some actions may require highest android versions (unsupported actions are hidden) (See [Android version differences](https://codeberg.org/ItsZariep/OpenNavBar/wiki/Android-version-differences)).


## Recommended Installation Steps

If your device does not have a fully functional navigation bar, follow these steps to set up the app:

1. **Download the APK:** Download the latest version using an [Option](#download) listed above.
2. **Install the App:** Open the downloaded file and follow the installation prompts.
3. **Request Permissions:** Open the app and attempt to grant the required permissions. If you are on **Android 13 or higher**, you may find certain toggle switches "greyed out" (Restricted Settings).
4. **Enable Restricted Settings:**
    - Return to the app and tap the **"Go to App Info"** button.
    - Tap the **three-dot menu** (top-right corner) and select **"Allow restricted settings."**
    - Use the back button to return to the app.
5. **Activate Services:** Grant the **Notification** and **Accessibility** permissions as prompted.
6. **Enable the Bar:** Toggle the main switch to activate the navigation service.


# Build

<details>

## Prerequisites

- **Java Development Kit (JDK):** Version 17
- **Android SDK:** API Level 35
- **Gradle** 

## 1. Generate a Signing Key

Before you can create a production build, you need a Keystore file (`.jks`). Run the following command in your terminal to generate one:

<details>

```bash
keytool -genkey -v -keystore app/my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias zariep

```

> [!IMPORTANT]
> This command will prompt you for a password. Set a password and keep note of the **Alias** you choose.

> The file `my-release-key.jks` will be created in the **root directory**

## 2. Configure Secrets (`local.properties`)

To keep your passwords out of version control, place your secrets in the `local.properties` file. Create a file named `local.properties` in the **root directory** of the project and add the following lines:

```properties
RELEASE_STORE_PASSWORD=111111
RELEASE_KEY_PASSWORD=111111
RELEASE_KEY_ALIAS=zariep
```
> Replace `111111` with your password and `zariep` with your alias

> `local.properties` and `*.jks` are excluded from version control by default

</details>

## Build

### Debug Build (For Development)

> This target doesn't actually require any of the steps described above.

To build an APK for testing on your own device:

```bash
./gradlew assembleDebug
```

**Output:** `app/build/outputs/apk/debug/app-debug.apk`

### Production Release Build (Stripped & Signed)

> This target **requires** the steps described above.

To generate the final, optimized, and signed production APK:

```bash
./gradlew assembleRelease
```

**Output:** `app/build/outputs/apk/release/app-release.apk`

</details>