!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="//g.alicdn.com/aliyun/developer-aliyun-com-fe/1.0.1/",n(n.s=1921)}({1921:function(e,t,n){e.exports=n(1922)},1922:function(e,t){function n(e){window.GLOBAL_CONFIG.wechat_disable&&-1!==e.target.className.indexOf("wechat-disable")&&(e&&e.stopPropagation?e.stopPropagation():window.event.cancelBubble=!0,e&&e.preventDefault?e.preventDefault():window.event.returnValue=!1)}function o(){document.addEventListener("click",n,!0)}window.addEventListener("DOMContentLoaded",function(){window.GLOBAL_CONFIG.wechat_disable&&(o(),document.querySelectorAll(".wechat-disable").forEach(function(e){e.classList+=" wechat-disable-color"}))}),window.weChatDisableFn=o}});