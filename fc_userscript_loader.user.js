// ==UserScript==
// @name           Frozen Cookies
// @version        github-latest
// @description    Userscript to load Frozen Cookies written by Icehawk78, forked by Lordshinjo
// @author         Lordshinjo
// @homepage       https://github.com/sebushi113/FrozenCookies
// @include        http://orteil.dashnet.org/cookieclicker/
// @include        https://orteil.dashnet.org/cookieclicker/
// @updateURL      https://sebushi113.github.io/FrozenCookies/fc_userscript_loader.user.js
// @downloadURL    https://sebushi113.github.io/FrozenCookies/fc_userscript_loader.user.js
// @run-at         document-start
// ==/UserScript==

// Dev:       https://github.com/sebushi113/FrozenCookies/development/
// Master:    https://github.com/sebushi113/FrozenCookies/master/
// Github.io: http://lordshinjo.github.io/FrozenCookies/

function LoadFrozenCookies() {
    Game.LoadMod('https://sebushi113.github.io/FrozenCookies/frozen_cookies.js');
}

window.addEventListener("load", LoadFrozenCookies, false);
// It's not the best way but Chrome doesn't work with addEventListener... :(
// Delay load by 5 seconds to allow the site to load itself first.)
window.setTimeout(LoadFrozenCookies, 5000);
