---
title: SQLauncher
section: Qt
description: "Simple Qt Application launcher"
releases: false
---

# SQLauncher

Simple QT6 Program Launcher

### Depedencies:
- [`Qt6`](https://github.com/qt/qtbase)
- [`CMake`](https://cmake.org/) (build only)

**Build instructions**:


### Clone the repository

```bash
git clone https://codeberg.org/ItsZariep/SQLauncher
cd SQLauncher
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

