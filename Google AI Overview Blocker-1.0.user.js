// ==UserScript==
// @name         Google AI Overview Blocker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Скрывает ИИ-обзоры (AI Overview) в результатах поиска Google
// @author       UXImprover
// @match        https://www.google.com/*
// @grant        none
// @icon         https://i.ibb.co/jPTdQPvj/istockphoto-1468514478-612x612-1.jpg
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const hideAIO = () => {
        const aiBlocks = document.querySelectorAll('div[jscontroller="EYwa3d"]');
        aiBlocks.forEach(el => {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
        });
    };


    hideAIO();

    const observer = new MutationObserver(hideAIO);
    observer.observe(document.body, { childList: true, subtree: true });
})();
