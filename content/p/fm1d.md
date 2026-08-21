---
title: fm1d
section: Other
description: lightweight org.freedesktop.FileManager1 daemon
releases: false
---

# fm1d

`fm1d` is a lightweight D-Bus service that implements the `org.freedesktop.FileManager1` interface and forwards file manager requests to a configurable file manager.

It is designed to act as a minimal file manager handler for desktop environments and applications that rely on the standard FileManager1 D-Bus API, this is useful for environments where File Manager is not running as background (like WMs).

## Features

- Implements `org.freedesktop.FileManager1`
- Handles:
  - `ShowItems`
  - `ShowFolders`
  - `ShowItemProperties`
- Spawns a file manager for requested paths
- Prevents infinite D-Bus recursion loops
- Supports custom file manager and arguments
- Uses the system default file manager if none is specified

## Usage

Run the program directly:

```sh
fm1d [options]
```

### Options

- `--fm=<command>`
  Override the file manager executable (e.g. `thunar`, `nautilus`, `pcmanfm`).

- `--args="<args>"`
  Additional arguments passed to the file manager before the path.

- `--basepath`
  If the requested URI is a file, open its parent directory instead.

### Examples

```sh
fm1d --fm=nautilus --args="--select"
```
```sh
fm1d --fm=pcmanfm-qt --basepath
```

You can see more functional examples in [fm1d wiki](https://codeberg.org/ItsZariep/fm1d/wiki/Setup-with-different-file-managers).

## Build


### Dependencies

- `libdbus`
- GNU `Make` (Build)


```sh
git clone https://codeberg.org/itszariep/fm1d
cd
```

```
make
```

- install (optional)
```
sudo make install #or doas
```


## How It Works

1. Registers itself as `org.freedesktop.FileManager1` on the session D-Bus
2. Listens for file manager method calls
3. Decodes `file://` URIs
4. Launches the configured file manager with the requested path
5. Ignores requests originating from file managers it spawned