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
        body,html{
            background:#111;
            color:#B4B4B4;
        }
        #content .title {
            background-color: #111;
        }
        #content .post blockquote {
            background-color: #111;
            color:#B4B4B4;
        }
        #sidebar form input{
            background-color: #9F9F9F;
        }
        #sidebar form{
            border-bottom:#e5e5e5;
            background-color: #111;
        }
        .hot-tabs .hot-tab {
            background-color: #222;
        }
        #sidebar h3 {
            background-color: #222;
        }
        #sidebar ul {
            background-color: #222;
        }
        .tucao-author, .tucao-{
            background-color: #222;
        }
        .tucao-content{
            background-color: #222;
            color:#B4B4B4;
        }
        .tucao-hot-title {
            background-color: #222;
        }
        .tucao-row{
           background-color: #222;
        }
        .jandan-tucao{
            background-color: #222;
        }
        .tucao-hot{
           background-color: #222;

        }
        .acv_author{
            background-color: #222;
            color:#9f9f9f
        } 
        .wp-pagenavi a {
            background-color: #222;
            color:#9f9f9f
        }
        #commentform textarea{
            background-color: #222;
            color:#fff;
        }
        #commentform input{
            background-color: #9F9F9F;
        }
        #commentform #submit{
            background-color: #222;
            border: 1px solid #222;
            color:#fff
        }
        a, a:link, a:visited{
            color:#B4B4B4;
        }
    `
 
    GM_addStyle(css)
    // Your code here...
    
})();
