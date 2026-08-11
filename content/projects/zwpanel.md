---
title: zwpanel
section: Other
description: "Lightweight Wayland panel"
releases: false
---

# zwpanel

Lightweight pure wayland (+fcft +pixman +libpng +nanosvg) panel, built on `wlr-layer-shell`

## Features

- **Modules**:
	- clock
	- launcher
	- separator
	- expander
	- command (async shell output),
 	- focused window
	- taskmanager (foreign-toplevel)
	- workspaces (ext-workspace)
	- system tray (StatusNotifierItem)

- **Popup menus**: static TOML-defined menus and live `dbusmenu` menus for tray items
- **Icon lookup**: freedesktop icon theme resolution with PNG and SVG rasterization, plus `.desktop` file lookup for app icons
- **Layout**: horizontal or vertical panel, autohide, per-module rotation, flexible/expander space allocation
- **Config-driven**: single TOML file controls appearance, modules, and per-module behavior (see [CONFIG.md](CONFIG.md))

## Dependencies

- [CMake](https://cmake.org/)
- [wayland-client](https://gitlab.freedesktop.org/wayland/wayland)
- [wlr-layer-shell](https://gitlab.freedesktop.org/wlroots/wlr-protocols) protocol (bundled generated sources)
- [fcft](https://codeberg.org/dnkl/fcft) (font loading/rasterization)
- [pixman](https://www.pixman.org/) (2D compositing)
- [tomlc17](https://github.com/cktan/tomlc17) (bundled in `lib/tomlc17`)
- Optional, `ENABLE_DBUS=ON` (default): [libdbus](https://www.freedesktop.org/wiki/Software/dbus/): required for the system tray and dbusmenu
- Optional, `ENABLE_PNG=ON` (default): [libpng](http://www.libpng.org/pub/png/libpng.html): PNG icon decoding
- Optional, `ENABLE_SVG=ON` (default): [NanoSVG](https://github.com/memononen/nanosvg): SVG icon rasterization

<details>
<summary><strong>Build instructions</strong></summary>

```bash
git clone --recursive https://codeberg.org/ItsZariep/zwpanel
cd zwpanel
```

```
cmake -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build
```

### Build options

| Option        | Default | Effect                                   |
|---------------|---------|-------------------------------------------|
| `ENABLE_DBUS` | `ON`    | System tray + dbusmenu support (needs libdbus) |
| `ENABLE_PNG`  | `ON`    | PNG icon decoding (needs libpng)          |
| `ENABLE_SVG`  | `ON`    | SVG icon rasterization (needs NanoSVG)    |

Disable a feature at configure time, e.g.:

```bash
cmake -B build -DENABLE_DBUS=OFF -DENABLE_SVG=OFF
cmake --build build
```

Check what a built binary was compiled with:

```bash
./build/zwpanel --version
```

</details>

## Configuration

Full configuration reference (panel appearance, modules, actions, menus) lives in [CONFIG.md](CONFIG.md).

## Command-line usage

```
zwpanel --config <path>   Use a specific config file
zwpanel --version         Print version and enabled features
zwpanel --help            Show usage and default config path
```

Default config path: `$HOME/.config/zwpanel/config.toml`