---
title: QXCapIndicator
section: Qt
description: "Caps/Num lock key indicator in tray"
releases: false
demo: 1
---

# QXCapIndicator

**QXCapIndicator** is a simple tool for indicating the status of Caps Lock and Num Lock keys in the system tray.

## Features

- [x] Monitor Caps Lock and Num Lock keys
- [x] Toggle Caps Lock and Num Lock with an on-screen button
- [x] Hideable indicators
- [x] Adjustable update rate
- [x] Wayland support (with `Evdev`)


## Installation

### Clone this repository

```
git clone https://codeberg.org/itszariep/qxcapindicator
cd qxcapindicator
```

### Choose the backend you want to use:

- With Evdev Backend

```ini
cmake -DWITHX11=OFF -B build
```

- With X11 Backend

```ini
cmake -DWITHX11=ON .. -B build
```

## Backend Differences

QXCapIndicator supports two backends for fetching key status: X11 and Evdev. Each backend has its own capabilities and limitations.

### X11 Backend
- Uses `XkbGetState` to fetch the key status.
- Checks cannot be done in real time without generating high CPU usage.
- Some options are not available:
  - **Initial Visual State**: Cannot set the initial visual state of Caps Lock/Num Lock (unnecessary with XkbGetState).

### Evdev Backend
- Uses `libinput_event_get_keyboard_event` to fetch the key status.
- Checks can be real time without high CPU Usage
- Some options are not available:
  - **Update Rate**: Cannot change update rate because polling intercepts events (and is not really necessary because there is no CPU usage penalty).
  - **Toggle**: Can't be implemented without root access.

## Configuration

You can configure QXCapIndicator with the integrated GUI (`settings` in indicator menu) or by editing` $HOME/.config/qxcapindicator` using the following options:

| Item        | Description                          | Possible Values | Default Value | Example     | Scope   |
|-------------|--------------------------------------|-----------------|---------------|-------------|---------|
| `showcap`   | Enables the Caps Lock key indicator  | `0`, `1`        | `1`           | `showcap=1` | All     |
| `shownum`   | Enables the Num Lock key indicator   | `0`, `1`        | `1`           | `shownum=1` | All     |
| `updrate`   | Sets the update rate                 | (Number)        | `0`           | `updrate=0` | X11     |
| `vcapstate` | Sets the initial visual state of Caps Lock | `0`, `1`   | `0`           | `vcapstate=0` | Evdev   |
| `vnumstate` | Sets the initial visual state of Num Lock  | `0`, `1`   | `0`           | `vnumstate=0` | Evdev   |
