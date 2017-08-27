## Transparent theme for cinnamon __3.4__
---
_Transparent version of [Numix-Cinnamon Theme](https://github.com/zagortenay333/numix-cinnamon) with shorter window list's tab_

### Preview
<img src="https://raw.githubusercontent.com/edoz90/numix-cinnamon-transparent/master/NumixTransparent.png" />

(conky: [conky_dodo](https://github.com/edoz90/conky_dodo))

### Installation

**Arch Linux** (Thanks to BZaidan)

https://aur.archlinux.org/packages/numix-cinnamon-transparent-git/
<pre>yaourt -S numix-cinnamon-transparent-git</pre>

**Manual**

<pre>cd ~ && git clone https://github.com/edoz90/numix-cinnamon-transparent.git</pre>
<pre>cd numix-cinnamon-transparent && cp -r Numix-Cinnamon-Transparent ~/.themes/</pre>
<pre>gsettings set org.cinnamon.theme name "Numix-Cinnamon-Transparent"</pre>

### Changelog (since forking date) from [zagortenay333](https://github.com/zagortenay333)

Update 27.08.2017
    general refactoring from zagortenay333 (thank you! <3)

Update 13.01.2017

    improve some view on OSD, calendar
    update commits from zagortenay333

Update 05.01.2017

    update for cinnamon 3.2 from zagortenay333

Update 25.11.2016
    
    Support for cinnamon 3.2 (fix popup menu, search icon)
    Tweak font size in OSD
    TODO: add support for arrow in popup menus

Update 08.01.2016

    Fix keyboard layout applet height
    Fix link color in notifications
    Tweak run dialog completion box
    Fix window list attention assets
    Fix check-box names
    Add right/left padding to date label
    Add min-height to notifs with images
    Add hover state for sound applet btn
    Fix OSD notification (sound, brightness) padding (edoz90)

Update 15.11.2015

    Remove accent-color-edit file
    Style battery info
    Remove padding-left from submenu items
    fix slider padding in popup-submenu
    
Update 30.10.2015

    All fixes for desklets, applets.
    Refactoring some modules.
    Uptaded some modules.
    Added some applets styles.
    Gulp compiling and reloading.
	
Update 29.04.2015

    Completely rewritten in sass.
    Renamed various asset folders.
    Tweaked various assets.
    Various fixes and tweaks.

Update 04.06.2015

    OSD slider fix
    Updated to 2.6
