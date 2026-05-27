---
title: QRunSvMgr
section: Qt
description: "Runit service manager GUI"
releases: false
---

# qrunsvmgr

> System service manager GUI (Qt6)

`qrunsvmgr` is a lightweight graphical interface for managing system services. It provides a simple way to start, stop, and monitor your system services.


## Features:

- [x] Start, stop, and restart services
- [x] Enable and disable services
- [x] View service logs
- [x] refresh status monitoring
- [x] Search and filter services
- [x] Manage user services
- [x] View services status
- [x] Different backends

## Building

```
git clone https://codeberg.org/itszariep/qrunsvmgr
cd qrunsvmgr/src
```
```
mkdir build
cd build
```
```
cmake ..
```
```
cmake --build .
```

 You will have: `qrunsvmgr-qt`, `qrunsvmgr-helper-runit`/`qrunsvmgr-helper-dinit` and `qrunsvgr`. use the last for easily launching the program, with --{init} as argument, for example:
 
 ```
 qrunsvmgr --runit
 ```
 or
 ```
 qrunsvmgr --dinit
 ```
 
## Backends

Originally, QRunsvMgr was going to be exclusively for `runit`, however, due to the IPC structure I created, I realized that I could make the backend run in a different way and the GUI would still be compatible.

- [x] Runit
- [x] Dinit (requires [libdinitctl](https://github.com/chimera-linux/libdinitctl))

> [!NOTE]
> If you have written a backend, please make me know as an issue (linking your repository), or as a PR if you are OK with being part of qrunsvmgr code

> [!NOTE]
> This program does NOT rely in system `sv` command for runit, It includes an alternate implementation for managing Runit services directly.

If you want to disable/enable a backend, modify CMakeLists.txt or use `-DBUILD_RUNIT_HELPER=OFF` or `-DBUILD_DINIT_HELPER=OFF` arguments for `cmake`

## Setting up

You need to configure Runit service paths according to how your system is configured, see [Runit paths](https://codeberg.org/ItsZariep/qrunsvmgr/wiki/Runit) for more information.
