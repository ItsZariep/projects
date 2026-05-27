---
title: Dark Mode Manager
section: Web
order: 1
description: "Manage Chromium dark mode"
releases: false
---

# Chromium Dark Mode Manager

Manage Chromium’s native dark mode on a per-site basis using RegExp rules and dark element fixes.

[![Available in the Chrome Web Store](https://i.imgur.com/XBIE9pk.png)](https://chromewebstore.google.com/detail/dark-mode-manager/lfkbgadlebpielicllhpilcojgfhecbn) 

> [!NOTE]
> Since this extension relies on a Chromium feature, it is not available on Firefox-based browsers.

# Features

- Use Chromium's native dark mode
- Manage exclusions with RegExp rules
- Dark element fixes
  - Optionally keep dark scrollbars, inputs, and checkboxes when disabling dark mode
- Sync across browser accounts; import/export is also available

---

## Install and/or Use

### Web Store

Dark Mode Manager is available in the [Chrome Web Store](https://chromewebstore.google.com/detail/dark-mode-manager/lfkbgadlebpielicllhpilcojgfhecbn)

### Manual

- Go to the [Releases](https://codeberg.org/ItsZariep/chromium-dmm/releases) section and download a ZIP file.

### Chromium/Chromium-based browsers

1. Open `chrome://extensions/`
2. Enable `Developer Mode`
3. Drag and drop `chromium-dmm-x.x.zip` from your file manager into the Extensions page
4. Open `chrome://flags/#enable-force-dark` and enable `Auto Dark Mode for Web Contents`

## Usage

0. Go to [chrome://flags/#enable-force-dark](chrome://flags/#enable-force-dark) (copy link) and make sure `Auto Dark Mode for Web Contents` is enabled
1. While browsing, find a webpage that you do not want to use dark mode or one that appears broken in dark mode. You can test [This page](https://itszariep.codeberg.page/chromium-dmm/test/), Other sites that are usually broken are Discord (Channel images) or WhatsApp (Stickers)
2. Click the extension button and, in the popup, click the `Included` button, or add it manually
3. The entry will then appear in the Exclusions list. You can modify its RegExp rule by clicking it, toggle dark/light mode, or enable/disable dark elements