!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var a=o("6JpON");document.querySelector("form").addEventListener("submit",(function(t){var n=function(t){var n=t+1,r=setInterval((function(){var t,i;(t=n,i=o,new Promise((function(e,n){var r=Math.random()>.3;setTimeout((function(){r?e({position:t,delay:i}):n({position:t,delay:i})}),i)}))).then((function(t){var n=t.position,r=t.delay;e(a).Notify.success(":white_check_mark: Fulfilled promise ".concat(n," in ").concat(o+r*n,"ms"))})).catch((function(t){var n=t.position,r=t.delay;e(a).Notify.failure(":x: Rejected promise ".concat(n," in ").concat(o+r*n,"ms"))})),console.log(u),clearInterval(r)}),Number(o*n))};t.preventDefault(),Number(t.currentTarget.elements.delay.value);for(var r=Number(t.currentTarget.elements.amount.value),o=Number(t.currentTarget.elements.step.value),u=0,i=0;i<r;i++)n(i);t.currentTarget.elements.delay.value="",t.currentTarget.elements.amount.value="",t.currentTarget.elements.step.value=""}))}();
//# sourceMappingURL=03-promises.6e01556b.js.map