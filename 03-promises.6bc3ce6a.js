function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var l=o("7Y9D8");document.querySelector("form").addEventListener("submit",(function(t){t.preventDefault();const r=Number(t.currentTarget.elements.delay.value),n=Number(t.currentTarget.elements.amount.value),o=Number(t.currentTarget.elements.step.value);for(let t=1;t<=n;t++){let n=t,u=1===t?r:r+o*(n-1);setTimeout((()=>{var t,r;(t=n,r=u,new Promise(((e,n)=>{Math.random()>.3?e({position:t,delay:r}):n({position:t,delay:r})}))).then((({position:t,delay:r})=>{e(l).Notify.success(`&#9989 Fulfilled promise ${t} in ${u}ms`)})).catch((({position:t,delay:r})=>{e(l).Notify.failure(`&#10060 Rejected promise ${t} in ${u}ms`)})),console.log(u)}),u)}t.currentTarget.elements.delay.value="",t.currentTarget.elements.amount.value="",t.currentTarget.elements.step.value=""}));
//# sourceMappingURL=03-promises.6bc3ce6a.js.map