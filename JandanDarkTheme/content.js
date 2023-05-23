'use strict';

var css = '\
    body, html {\
        background:#111;\
        color:#B4B4B4;\
    }\
    #content .title,\
    #content .post blockquote,\
    #sidebar form,\
    #sidebar h3,\
    #sidebar ul,\
    .tucao-author,\
    .tucao-content,\
    .tucao-hot-title,\
    .tucao-row,\
    .jandan-tucao,\
    .tucao-hot,\
    .acv_author,\
    .wp-pagenavi a,\
    .topic-content,\
    .topic-author,\
    .topic-function,\
    .reply,\
    .acv_comment {\
        background-color: #222;\
    }\
    #sidebar form input,\
    #commentform input {\
        background-color: #9F9F9F;\
    }\
    #sidebar form {\
        border-bottom:#e5e5e5;\
    }\
    .hot-tabs .hot-tab {\
        background-color: #222;\
    }\
    #commentform textarea,\
    #content textarea,\
    button {\
        background-color: #222;\
        color: #fff;\
    }\
    #commentform #submit {\
        background-color: #222;\
        border: 1px solid #222;\
        color: #fff;\
    }\
    a, a:link, a:visited {\
        color: #B4B4B4;\
    }\
    .tucao-author,\
    .tucao-content {\
        color: #B4B4B4;\
    }\
';

var style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
