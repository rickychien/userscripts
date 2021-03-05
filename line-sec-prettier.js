// ==UserScript==
// @name           LINE Securities Prettier
// @include        line-sec.co.jp
// ==/UserScript==

function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

addStyle(`
:root {
  -webkit-user-select: initial;
  -moz-user-select: initial;
  -ms-user-select: initial;
  user-select: initial;
}
`);

