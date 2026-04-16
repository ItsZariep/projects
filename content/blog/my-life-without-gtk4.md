---
layout: post
title: "My Life without GTK4"
date: 2024-10-09
---

GTK4 was released in 2020 as an update to the already controversial GTK3. I was initially excited,until I saw how many traditional concepts were abandoned simply because the GNOME team decided they were "no longer useful."

Unfortunately, GTK4 apps look terrible in environments like IceWM, KDE Plasma, and Wayfire (which I use). 

Is worse with `libadwaita`, where customization is nearly impossible,outside of setting the `GTK_THEME` environment variable.

To make matters worse, most GTK4 apps rely on poor Client-Side Decoration (CSD) designs that feel completely out of place outside GNOME.

These and other issues made me refuse to use GTK4-based applications. Instead, I've chosen to stick with software that still uses GTK3,or in some cases, apps that don’t use GTK at all but are still worth mentioning due to their quality and usability.

While I do use Qt6 (and have no issues with it), I’ll avoid listing Qt-based applications here since I know many people in this space aren’t fans of that toolkit.

---

## Projects Still Using GTK3

Here are some key projects that continue to use GTK3. I’ll reference these later when listing specific apps:

* [MATE Desktop](https://mate-desktop.org): A continuation of the GNOME 2 desktop, updated to use GTK3. Most of their apps integrate well into non-GNOME environments.
* [XFCE](https://www.xfce.org): A lightweight GTK3-based desktop. While there's talk of migrating to GTK4, it’s still mostly GTK3 for now. Notably, their apps use CSD, but there's also [Xfce-Classic](https://github.com/realh/Xfce-Classic/) and [`libxfce4ui-nocsd`](https://github.com/realh/libxfce4ui-nocsd) for those who prefer SSD.
* [X-Apps](https://linuxmint-developer-guide.readthedocs.io/en/latest/xapps.html): A Linux Mint project that provides GTK3 versions of essential desktop tools.
* [nwg-piotr](https://github.com/nwg-piotr): A developer focused on Wayland-compatible GTK3 tools with minimal dependencies.

> [!Note]
> If you know of other GTK3-based projects worth including, let me know,I’ll update the list.

---

## Software

### Basic Tools

#### File Management

* [Nemo](https://github.com/linuxmint/nemo): File manager from Cinnamon (X-Apps)
* [Caja](https://mate-desktop.org): File manager for MATE
* [Thunar](https://docs.xfce.org/xfce/thunar/start): Lightweight XFCE file manager
* [Engrampa](https://mate-desktop.org): MATE’s file archiver

#### Text Editors and IDEs

* [Pluma](https://mate-desktop.org): Lightweight MATE text editor
* [Xed](https://github.com/linuxmint/xed): Simple text editor from X-Apps
* [Geany](https://www.geany.org): Fast and lightweight GTK3 IDE

#### Office

* [LibreOffice](https://www.libreoffice.org): Cross-platform office suite
* [Gnumeric](https://www.gnumeric.org): Spreadsheet editor
* [Qalculate! (GTK)](https://qalculate.github.io): Powerful calculator
* [MATE Calculator](https://github.com/mate-desktop/mate-calc): MATE calculator

### Multimedia

#### Image Viewers

* [Xviewer](https://github.com/linuxmint/xviewer): X-Apps image viewer
* [Pix](https://github.com/linuxmint/pix): X-Apps image organizer
* [Eye of MATE](https://mate-desktop.org): Basic image viewer from MATE
* [Ristretto](https://docs.xfce.org/apps/ristretto/start): XFCE image viewer
* [nsxiv](https://github.com/nsxiv/nsxiv): Neo Simple X Image Viewer (imlib2-based, not GTK)
* [feh](https://feh.finalrewind.org/): Ultra-light image viewer (also imlib2-based)

#### Video and Audio Players

* [mpv](https://mpv.io/): Minimalist and powerful media player (not GTK)
* [Xplayer](https://github.com/linuxmint/xplayer): X-Apps video player
* [Parole](https://docs.xfce.org/apps/parole/start): XFCE’s lightweight video player

* [Pragha](https://github.com/pragha-music-player/pragha): Lightweight Music Player
* [Audacious](https://github.com/audacious-media-player/audacious): Lightweight and versatile audio player (Requires build it with GTK3)

* [SongRec](https://github.com/marin-m/SongRec): An open-source Shazam client 


#### Image edition:

* [GIMP 3.0](https://www.gimp.org): The Free & Open Source Image Editor
* [Inkscape](https://inkscape.org): Vector drawing program

> [!NOTE]
> Sadly i don't know a good gtk video editor (Pitivi is too simple), but i can recommend Kdenlive (Qt6/KDE) or Openshot (Qt5)


#### System Management

* [GParted](https://gparted.org/): Partition editor using GTK3
* [MATE Disk usage analyzer](https://github.com/mate-desktop/mate-utils): Disk usage analyzer (part of mate-utils)

* [LXAppearance](https://github.com/lxde/lxappearance): LXDE Appearance setting tool (doesn't support gsettings)
* [NWG-Look](https://github.com/nwg-piotr/nwg-look): NWG Appearance setting tool

* [SGRandr](https://codeberg.org/itzariep/sgrandr): Simple GTK Output manager
* [Pavucontrol-qt](https://github.com/lxqt/pavucontrol-qt) Lxqt port of pavucontrol (Pavucontrol migrated to GTK4 in 6.0)
* [Pavoldcontrol](https://github.com/itszariep/pavoldcontrol) Pavucontrol fork that still uses GTK3 and backport features/bugfixes from mainstream

* [Mate system monitor](https://github.com/mate-desktop/mate-system-monitor): Mate task manager
#### Internet

* [Claws Mail](https://www.claws-mail.org/): Lightweight and fast GTK email client
* [Deluge](https://deluge-torrent.org/): BitTorrent client

#### Terminals

* [MATE Terminal](https://mate-desktop.org): Terminal emulator for MATE
* [Xfce Terminal](https://docs.xfce.org/apps/terminal/start): Simple but capable
* [Sakura](https://github.com/dabisu/sakura): Simple GTK/VTE based terminal emulator
* [Foot](https://codeberg.org/dnkl/foot): A fast, lightweight and minimalistic Wayland terminal emulator (Is not GTK/any toolkit but is still very good)

> [!Note]
> If you know of other GTK3-based projects worth including, let me know,I’ll update the list.