---
title: QBattIndicator
section: Qt
description: "Monitor battery devices and set actions per percentage"
releases: false
---

# QBattIndicator

Monitor battery devices and set actions per percentage - Simple Qt tray battery monitor for Linux

### Depedencies:
- [`Qt6`](https://github.com/qt/qtbase)
- [`CMake`](https://cmake.org/) (build only)

**Build instructions**:

### Clone the repository

```bash
git clone htps://codeberg.org/ItsZariep/QBattIndicator
cd QBattIndicator
```

### Build with CMake and Ninja

```bash
cmake -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build -- -j$(nproc)
```

### Packaging

`dpkg`/`rpm` packagers can use:

```
cpack -G DEB --config build/CPackConfig.cmake # or -G RPM
```