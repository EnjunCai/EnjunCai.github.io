!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(r){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),u=new N(n||[]);return a(i,"_invoke",{value:j(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var v="suspendedStart",d="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function x(){}var L={};s(L,c,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(T([])));S&&S!==o&&i.call(S,c)&&(L=S);var V=x.prototype=w.prototype=Object.create(L);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,r){function n(o,a,u,c){var l=p(e[o],e,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==t(s)&&i.call(s,"__await")?r.resolve(s.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function j(t,e,n){var o=v;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=O(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=p(t,e,n);if("normal"===l.type){if(o=n.done?m:d,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function O(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function W(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=x,a(V,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=s(x,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,f,"GeneratorFunction")),t.prototype=Object.create(V),t},n.awrap=function(t){return{__await:t}},_(k.prototype),s(k.prototype,l,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new k(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(V),s(V,f,"Generator"),s(V,c,(function(){return this})),s(V,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(W),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),W(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;W(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}System.register(["./index-legacy-2d517bbc.js"],(function(t,n){"use strict";var i,a=document.createElement("style");return a.textContent=".fs-waterfall-container[data-v-e3a3dcfb]{width:100%;height:100%}.fs-waterfall-content[data-v-e3a3dcfb]{width:100%;height:100%;overflow-y:scroll}.fs-waterfall-list[data-v-e3a3dcfb]{width:100%;position:relative}.fs-waterfall-item[data-v-e3a3dcfb]{position:absolute;top:0;left:0;box-sizing:border-box;transition:all .3s}\n",document.head.appendChild(a),{setters:[function(t){i=t._}],execute:function(){var n={class:"fs-waterfall-container"},a={class:"fs-waterfall-list"},u=Vue.defineComponent({__name:"index",props:{gap:{},column:{},pageSize:{},request:{type:Function},isScroll:{type:Boolean}},setup:function(t){var i,u,c=t,l=Vue.ref(),f=Vue.ref([]),s=Vue.ref([]),h=Vue.reactive({loading:!1,isfinish:!1,page:1,imageWidth:0,imageList:[]}),p=Vue.computed((function(){for(var t=-1,e=1/0,r=0;r<f.value.length;r++){var n=f.value[r];n<e&&(t=r,e=n)}return{minIndex:t,minHeight:e}})),v=function(){var t,n=(t=e().mark((function t(n,o,i){var a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!h.isfinish){t.next=2;break}return t.abrupt("return");case 2:return h.loading=!0,t.next=5,c.request(n,o);case 5:if(a=t.sent,h.page++,a.length){t.next=10;break}return h.isfinish=!0,t.abrupt("return");case 10:d(a,i),h.imageList=[].concat(r(h.imageList),r(a)),h.loading=!1;case 13:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function u(t){o(a,n,i,u,c,"next",t)}function c(t){o(a,n,i,u,c,"throw",t)}u(void 0)}))});return function(t,e,r){return n.apply(this,arguments)}}(),d=function(t,e){t.forEach((function(t,r){var n=Math.floor(t.height*h.imageWidth/t.width);if(e&&r<c.column)s.value.push({x:r%c.column!=0?r*h.imageWidth+c.gap*r:r*h.imageWidth,y:0}),f.value.push(n+c.gap);else{var o=p.value,i=o.minIndex,a=o.minHeight;s.value.push({x:i%c.column!=0?i*h.imageWidth+c.gap*i:i*h.imageWidth,y:a}),f.value[i]+=n+c.gap}}))},y=(i=function(){var t=l.value,e=t.scrollTop,r=t.clientHeight;t.scrollHeight-r-e<=100&&!h.loading&&v(h.page,c.pageSize,!1)},u=!1,function(){for(var t=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];u||(u=!0,window.requestAnimationFrame((function(){i.apply(t,r),u=!1})))}),m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,r=null;return function(){for(var n=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];r&&clearTimeout(r),r=setTimeout((function(){t.apply(n,i)}),e)}}((function(){l.value&&(h.imageWidth=(l.value.clientWidth-(c.column-1)*c.gap)/c.column,s.value=[],f.value=[],d(h.imageList,!0))}),300);return Vue.onMounted((function(){l.value&&(h.imageWidth=(l.value.clientWidth-(c.column-1)*c.gap)/c.column,v(h.page,c.pageSize,!0),l.value.addEventListener("scroll",y),window.addEventListener("resize",m))})),Vue.onUnmounted((function(){l.value&&l.value.removeEventListener("scroll",y),window.removeEventListener("resize",m)})),function(t,e){var r=Vue.resolveDirective("loading");return Vue.withDirectives((Vue.openBlock(),Vue.createElementBlock("div",n,[Vue.createElementVNode("div",{class:"fs-waterfall-content",style:Vue.normalizeStyle({overflowY:c.isScroll?"inherit":"scroll"}),ref_key:"contentRef",ref:l},[Vue.createElementVNode("div",a,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(h.imageList,(function(e,r){return Vue.openBlock(),Vue.createElementBlock("div",{class:"fs-waterfall-item",key:e.id,style:Vue.normalizeStyle({width:"".concat(h.imageWidth,"px"),transform:"translate3d(".concat(s.value[r].x,"px, ").concat(s.value[r].y,"px, 0)")})},[Vue.renderSlot(t.$slots,"item",{item:e},void 0,!0)],4)})),128))])],4)])),[[r,h.loading]])}}});t("W",i(u,[["__scopeId","data-v-e3a3dcfb"]]))}}}))}();
