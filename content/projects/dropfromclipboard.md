---
title: DropFromClipboard
section: Web
order: 1
description: "Show image from clipboard to Drop into a webpage"
releases: 1
demo: 1
---

# DropFromClipboard

Display images from the clipboard to drop into a webpage.

# Features
- Image history
  - Save up to 64 images in history.
- Change view zoom
  - Useful if you have many images.
- Change history size
  - If you don't need a large history, you can limit it or turn it off.
- Persistent data
  - You can close the browser, and when you reopen it, your images will still be there.

---

> [!NOTE]
> On some webpages, it is not possible to drag and drop images from this extension due to website internal logic. Unfortunately, there isn't much I can do about this. However, since the images are visible in the UI, you can right-click and quickly download the copied image, which is faster than going back and searching for the image source.

## Install and/or Use

### As a browser extension

- Go to [releases](https://codeberg.org/ItsZariep/DropFromClipboard/releases) section and download a zip


### Chromium/Chromium based
1. Open `chrome://extensions/`
2. Enable `Developer Mode`
3. Drag and drop`dropfromclipboard-x-x.zip` from file manager into extensions page

### Firefox/Firefox based
1. Open `about:addons`
2. Click engine icon (Top left)
3. Choose "Install Add-on from file..."  and choose `dropfromclipboard-x.x.zip` in the file selector

Is also possible to drag and drop zip file like in Chromium

> [!NOTE] 
> **This extensions may require external setup in Firefox**: 
> Open `about:config` and set `dom.events.dataTransfer.imageAsFile.enabled` as `true`

### Using the standalone page

If you want to use this on a web panel (e.g Vivaldi or Floorp), you can use [Web Version](https://itszariep.codeberg.page/dropfromclipboard/src//), in basis, it has the same content of this repo.

## Usage

1. Copy an image/image address to your clipboard
2. Go to DropFromClipboard UI and press "Add Image" green button
3. If is a valid image, you will see it on the image box, here you can drag, re-copy or download the image (depending on the web browser right click options)