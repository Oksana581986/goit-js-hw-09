function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("7Y9D8");const l=parseInt(document.querySelector('[name="delay"]').value),a=parseInt(document.querySelector('[name="step"]').value),s=parseInt(document.querySelector('[name="amount"]').value);function u(e,n){return new Promise(((o,t)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}isNaN(l)||isNaN(a)||isNaN(s)?e(r).Notify.failure("Please fill in all fields with valid numbers."):function(){for(let n=1;n<=s;n++)u(n,l+(n-1)*a).then((({position:n,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${n} in ${o}ms`)})).catch((({position:n,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${n} in ${o}ms`)}))}();
//# sourceMappingURL=03-promises.44aa8765.js.map