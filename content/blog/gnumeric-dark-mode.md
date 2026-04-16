---
layout: post
title: "How to use Gnumeric in dark mode"
date: 2024-09-03
---

## Gnumeric problem

Gnumeric doesn’t have an option to set the grid to dark colors, which can cause readability issues for people with vision problems when using light themes.

## Procedure

1. Open Gnumeric’s CSS stylesheet with a text editor:

Linux:

```
$HOME/.config/gtk-3.0/gtk.css
```

Windows:

```
C:\Users\YourUser\AppData\Roaming\gtk-3.0\gtk.css
```

At the end of the file, add the following:

```
/* Cell background */ 
GnmItemGrid,
GnmPreviewGrid,
GocCanvas {
	background-image: none;
	background-color: #1A1A1A; /* Choose your desired background color */ 
	color: #91a666;
	padding: 0;
	border-style: none;
	border-width: 0;
}

/* Cell borders */

GnmItemGrid.grid,
GnmPreviewGrid.grid {
	color: #a6a6a6;
}

/* Cursor (selected cell) */
GnmItemCursor.normal {
  color: #eeeeee;
}

/* Colors when editing a cell directly */
GnmItemEdit {
  background-color: #3a3a3a;

  /* This doesn't seem to kick in. We seem to get the color from the
     style. */
  color: #a6a6a6;
}

/* Entire column/row selected */
button:active.itembar, button:active.itembar * {
    color: white;
    font-weight: bold;
}

/* Partial column/row selection */
button:hover.itembar, button:hover.itembar * {
  color: white;
  font-weight: bold;
}
```

With this, GTK3 will override several interface values in Gnumeric. Thanks to the fact that Gnumeric has independent internal components, these changes do not affect other GTK3-based programs.

## Text Color

The only issue I couldn’t solve is the text color. No matter what I changed, the text remained black. So the only workaround with this method is to select all the cells in the document and set their text color to white. If anyone knows a solution, please let me know as an [issue](https://codeberg.org/ItsZariep/pages/issues)
