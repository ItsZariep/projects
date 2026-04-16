
---
layout: post
title: "Bypass Linux Installer Requirements (Calamares)"
date: 2024-06-19
---

## Why do this?

Some distributions may have requirements that we might consider skippable, such as minimum RAM or requiring an internet connection. Sometimes these are mandatory by design, but other times they’re just there to discourage installing on hardware where the system may not perform optimally. Still, there’s nothing to lose by trying.

## How to do it

The most common way to do this is by editing the Calamares configuration. To do this, open `/etc/calamares/modules/welcome.conf` with `nano`; if nano isn’t available, use `vi` (press `i` to enter insert mode).

When you open the file, it will look something like this:

```yaml
showSupportUrl: true
showKnownIssuesUrl: true
showReleaseNotesUrl: true

requirements:
  requiredStorage: 7.9
  requiredRam: 1.0
  internetCheckUrl: https://manjaro.org
  check:
    - storage
    - ram
    - power
    - internet
    - root
  required:
    - storage
    - ram
    - root

geoip:
  style: "json"
  url: "https://ipapi.co/json"
  selector: "country"
```

The configuration may vary depending on the distribution, but it’s very common to use the `welcome` module and that path.

At this point, you just need to remove the requirement you want to skip. For example, if you want to bypass the RAM requirement, remove all lines that contain `- ram`, resulting in something like this:

```yaml
showSupportUrl: true
showKnownIssuesUrl: true
showReleaseNotesUrl: true

requirements:
  requiredStorage: 7.9
  requiredRam: 1.0
  internetCheckUrl: https://manjaro.org
  check:
    - storage
    - power
    - internet
    - root
  required:
    - storage
    - root

geoip:
  style: "json"
  url: "https://ipapi.co/json"
  selector: "country"
```

> `ram` was removed from `required` section

Finally, just save the file and exit the editor (`Ctrl+S -> Ctrl+X` in nano, `Esc -> : -> wq` in vi). When you reopen the installer, it will no longer enforce those requirements.
