!function(){var t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),e=document.body,a=null;function o(e,a){t.disabled=e,n.disabled=a}function l(){null===a?(o(!0,!1),a=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));e.style.backgroundColor=t}),1e3)):(o(!1,!0),clearInterval(a),a=null)}t.addEventListener("click",l),n.addEventListener("click",l)}();
//# sourceMappingURL=01-color-switcher.b6982b32.js.map
