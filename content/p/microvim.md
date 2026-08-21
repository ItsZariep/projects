---
title: MicroVim
section: Other
description: "Micro style for vim"
releases: false
---

# micro-vim
Micro style for nvim

❌ : Not Started
✅ : Done
🔄 : In Progress

| to do: | ❓ | Notes |
| --- | --- | --- |
| Remap keys | 🔄 | Some keybinds may missing |
| Create optional conf in lua | ✅ | May differ from vimscript equivalent |
| Direct replace when selecting | 🔄 | Needs pressing twice if direct typing, pasting works properly |
| See find on realtime (insert mode) | ✅ | Esc return to original position, enter keeps search position |
| Get micro-like GUI | ✅ |  |
| Get micro-like statusbar | ✅ |  |
| Select all on (insert) Visual to no press "i" after this | 🔄 | needs pressing twice |


## Installation
### Lua (Nvim)
- Copy `micro.lua` to `~/.config/nvim/lua/micro.lua`
- add `require("micro")` to your `init.lua`
### Vimscript (Vim/Nvim)
- Copy `micro.vim` to:
  - `~/.config/nvim/plugin/micro.vim` if using **nvim**
  - `~/.vim/plugin/micro.vim` if using **vim**
 
## Available Keybinds

Keybind| Do           | Vim Keybind|
-------| ------------ | -   |
Ctrl+C | Copy         | Y   |
Ctrl+X | Cut          | D   |
Ctrl+V | Paste        | P   |
Ctrl+Z | Undo         | U   |
Ctrl+Y | Redo         | Ctrl+R  |
Ctrl+F | Find         | /   |
Ctrl+F | Find and replace | :s  |
Ctrl+A | Select all   | ggVG (only normal mode)  |
Ctrl+E | Command      | :   |
Ctrl+Left | Col Nav Left | H   |
Ctrl+Right | Col Nav Right | L   |
Ctrl+D | Duplicate Line | :t.|
Ctrl+K | Delete Line  | :.d |
Ctrl+P | Insert File  | P   |
Ctrl+O | Open File    | :e  |
Ctrl+S | Save File    | :x  |
Ctrl+Q | Quit (ask to save)| :wq, :q, :q! |
Ctrl+/ | Go to line   | :# (:64 for example) |
Alt+\  | Go to Firt Line | gg |
Alt+/  | Go to Last Line | G |
Alt+Left | Word Nav Left | B |
Alt+Right | Word Nav Right | w |

## Unchanged Keybinds

Keybind| Do           |
-------| ------------ |
Esc    | Exit mode    |
I      | Insert Mode  |
V      | Visual Mode  |
