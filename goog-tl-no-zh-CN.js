// ==UserScript==
// @name           Google Translate without Chinese Simplified
// @include        https://translate.google.com/*
// ==/UserScript==

document.querySelector(".tl-wrap #sugg-item-zh-CN")?.remove();

document
  .querySelectorAll(".language_list_tl_list .language_list_item_wrapper-zh-CN")
  .forEach((node) => node.remove());
