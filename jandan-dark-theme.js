// ==UserScript==
// @name         煎蛋暗黑模式
// @namespace    https://github.com/EdwardZhanghk/jandan-dark-theme
// @version      0.1.0
// @description  一个对调了煎蛋网文字和背景颜色的脚本，让煎蛋网拥有暗黑模式，妈妈再也不用担心我半夜摸鱼看煎蛋亮瞎眼了
// @author       EdwardZhanghk
// @match        http://jandan.net/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    let css=`
        body{
            background:#111;
            color:#fff
        }
    `
 
    GM_addStyle(css)
    // Your code here...
    
})();
