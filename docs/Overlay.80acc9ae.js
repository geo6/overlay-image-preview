parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vbhz":[function(require,module,exports) {

},{}],"b5zK":[function(require,module,exports) {
"use strict";function e(){document.body.style.overflow="hidden";var e=document.createElement("div");e.className="overlay",e.addEventListener("click",function(){o(),document.querySelector("body").style.overflow=""}),document.body.append(e)}function o(){var e=document.querySelector(".overlay");null!==e&&e.remove()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.destroy=exports.create=void 0,exports.create=e,exports.destroy=o;
},{}],"sNz8":[function(require,module,exports) {
"use strict";function e(){var e=document.createElement("div");e.className="overlay-loading",e.innerText="Loading...",document.querySelector(".overlay").append(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"MJT3":[function(require,module,exports) {
"use strict";function e(){var e=document.createElement("div");e.className="overlay-content",document.querySelector(".overlay").append(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"A3nJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./background");function t(e,t,n){var o=Math.max(document.documentElement.clientWidth,window.innerWidth||0),r=Math.max(document.documentElement.clientHeight,window.innerHeight||0);(e>o||t>r)&&(n.style.backgroundSize="contain")}function n(n,o,r){var c=document.createElement("div");c.className="overlay-image",c.style.backgroundImage="url("+n.src+")",c.addEventListener("click",function(){e.destroy(),document.querySelector("body").style.overflow=""}),t(o,r,c),document.querySelector(".overlay-content").append(c)}exports.default=n;
},{"./background":"b5zK"}],"ZyHG":[function(require,module,exports) {
"use strict";function e(e,t){void 0===t&&(t=!1);var n=document.createElement("div");n.className="overlay-caption",!0===t?n.innerHTML=e:n.innerText=e,document.querySelector(".overlay-content").append(n)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"sdFF":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("../sass/overlay.scss");var t=require("./background"),r=e(require("./loading")),a=e(require("./content")),o=e(require("./image")),i=e(require("./caption")),u=function(){function e(e,t){this.element=e,this.captionCallback=t}return e.prototype.open=function(){var e=this,u=this.element.getAttribute("href");document.querySelector("body").style.overflow="hidden",t.create(),r.default(),a.default();var n=new Image;n.src=u,n.onload=function(){var t=n.naturalWidth,r=n.naturalHeight;if(document.querySelector(".overlay-loading").remove(),o.default(n,t,r),void 0!==e.captionCallback){var a=e.captionCallback(e.element);i.default(a,!0)}}},e}();exports.default=u,module.exports=u;
},{"../sass/overlay.scss":"vbhz","./background":"b5zK","./loading":"sNz8","./content":"MJT3","./image":"A3nJ","./caption":"ZyHG"}]},{},["sdFF"], "Overlay")
//# sourceMappingURL=Overlay.80acc9ae.js.map