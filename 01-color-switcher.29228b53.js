const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.body;let l=null;function a(n,l){t.disabled=n,e.disabled=l}function o(){null===l?(a(!0,!1),l=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;n.style.backgroundColor=t}),1e3)):(a(!1,!0),clearInterval(l),l=null)}t.addEventListener("click",o),e.addEventListener("click",o);
//# sourceMappingURL=01-color-switcher.29228b53.js.map