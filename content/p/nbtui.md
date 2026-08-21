---
title: NBTUI
section: CLI/TUI
description: "Ncurses Bluetooth TUI"
releases: false
---

# nbtui - `N`curses `B`luetooth `TUI`

A simple and lightweight TUI Bluetooth manager for BlueZ, built with ncurses.

## Features

- Bluetooth device management
  - Scan nearby devices
  - Pair / remove devices
  - Connect / disconnect
  - Trust / untrust devices
  - Rename devices and adapters
  - Multi-adapter support

- Interactive terminal UI
  - Keyboard-first navigation (vim keys supported)
  - Mouse support (optional / disableable)
  - Clickable controls
  - Tabbed interface

- Lightweight
  - Minimal dependencies
  - ncurses-based
  - BlueZ-native

## Dependencies

- [`BlueZ`](https://www.bluez.org/)
- [`ncurses`](https://invisible-island.net/ncurses/)
- [`GNU Make`](https://www.gnu.org/software/make/) (Build only)

## Build

```sh
git clone https://codeberg.org/itszariep/nbtui
cd nbtui/src
```
```sh
make
```
- Install

```sh
make install # As root
```