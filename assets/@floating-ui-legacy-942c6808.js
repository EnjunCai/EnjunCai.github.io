!function(){var t=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],e=["mainAxis","crossAxis","limiter"];function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function c(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",f=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new D(r||[]);return o(a,"_invoke",{value:A(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function b(){}function x(){}function w(){}var O={};s(O,a,(function(){return this}));var k=Object.getPrototypeOf,E=k&&k(k(F([])));E&&E!==n&&r.call(E,a)&&(O=E);var L=w.prototype=b.prototype=Object.create(O);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(o,i,a,c){var l=h(t[o],t,i);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==u(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function A(e,n,r){var o=d;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=P(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var l=h(e,n,r);if("normal"===l.type){if(o=r.done?m:v,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function P(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=h(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(u(e)+" is not iterable")}return x.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:x,configurable:!0}),x.displayName=s(w,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,f,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},S(T.prototype),s(T.prototype,l,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new T(p(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(L),s(L,f,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=F,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:F(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){l(i,r,o,a,c,"next",t)}function c(t){l(i,r,o,a,c,"throw",t)}a(void 0)}))}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){var r;return r=function(t,e){if("object"!=u(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==u(r)?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}System.register([],(function(o,i){"use strict";return{execute:function(){o({b:function(t,e,o,a){void 0===a&&(a={});var c=a,u=c.ancestorScroll,f=void 0===u||u,s=c.ancestorResize,h=void 0===s||s,v=c.elementResize,y=void 0===v?"function"==typeof ResizeObserver:v,m=c.layoutShift,g=void 0===m?"function"==typeof IntersectionObserver:m,b=c.animationFrame,x=void 0!==b&&b,w=rt(t),O=f||h?[].concat(r(w?et(w):[]),r(et(e))):[];O.forEach((function(t){f&&t.addEventListener("scroll",o,{passive:!0}),h&&t.addEventListener("resize",o)}));var k,E=w&&g?function(t,e){var n,r=null,o=M(t);function a(){var t;clearTimeout(n),null==(t=r)||t.disconnect(),r=null}function c(u,f){void 0===u&&(u=!1),void 0===f&&(f=1),a();var s=t.getBoundingClientRect(),h=s.left,v=s.top,y=s.width,m=s.height;if(u||e(),y&&m){var g={rootMargin:-d(v)+"px "+-d(o.clientWidth-(h+y))+"px "+-d(o.clientHeight-(v+m))+"px "+-d(h)+"px",threshold:l(0,i(1,f))||1},b=!0;try{r=new IntersectionObserver(x,p(p({},g),{},{root:o.ownerDocument}))}catch(w){r=new IntersectionObserver(x,g)}r.observe(t)}function x(t){var e=t[0].intersectionRatio;if(e!==f){if(!b)return c();e?c(!1,e):n=setTimeout((function(){c(!1,1e-7)}),100)}b=!1}}return c(!0),a}(w,o):null,L=-1,S=null;y&&(S=new ResizeObserver((function(t){var r=n(t,1)[0];r&&r.target===w&&S&&(S.unobserve(e),cancelAnimationFrame(L),L=requestAnimationFrame((function(){var t;null==(t=S)||t.observe(e)}))),o()})),w&&!x&&S.observe(w),S.observe(e));var T=x?ct(t):null;x&&function e(){var n=ct(t);!T||n.x===T.x&&n.y===T.y&&n.width===T.width&&n.height===T.height||o();T=n,k=requestAnimationFrame(e)}();return o(),function(){var t;O.forEach((function(t){f&&t.removeEventListener("scroll",o),h&&t.removeEventListener("resize",o)})),null==E||E(),null==(t=S)||t.disconnect(),S=null,x&&cancelAnimationFrame(k)}},d:C});var i=Math.min,l=Math.max,s=Math.round,d=Math.floor,v=function(t){return{x:t,y:t}},y={left:"right",right:"left",bottom:"top",top:"bottom"},m={start:"end",end:"start"};function g(t,e,n){return l(t,i(e,n))}function b(t,e){return"function"==typeof t?t(e):t}function x(t){return t.split("-")[0]}function w(t){return t.split("-")[1]}function O(t){return"x"===t?"y":"x"}function k(t){return"y"===t?"height":"width"}function E(t){return["top","bottom"].includes(x(t))?"y":"x"}function L(t){return O(E(t))}function S(t,e,n){void 0===n&&(n=!1);var r=w(t),o=L(t),i=k(o),a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[i]>e.floating[i]&&(a=j(a)),[a,j(a)]}function T(t){var e=j(t);return[A(t),e,A(e)]}function A(t){return t.replace(/start|end/g,(function(t){return m[t]}))}function P(t,e,n,r){var o=w(t),i=function(t,e,n){var r=["left","right"],o=["right","left"];switch(t){case"top":case"bottom":return n?e?o:r:e?r:o;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(x(t),"start"===n,r);return o&&(i=i.map((function(t){return t+"-"+o})),e&&(i=i.concat(i.map(A)))),i}function j(t){return t.replace(/left|right|bottom|top/g,(function(t){return y[t]}))}function R(t){return"number"!=typeof t?function(t){return p({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function D(t){return p(p({},t),{},{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function F(t,e,n){var r,o=t.reference,i=t.floating,a=E(e),c=L(e),u=k(c),l=x(e),f="y"===a,s=o.x+o.width/2-i.width/2,p=o.y+o.height/2-i.height/2,h=o[u]/2-i[u]/2;switch(l){case"top":r={x:s,y:o.y-i.height};break;case"bottom":r={x:s,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:p};break;case"left":r={x:o.x-i.width,y:p};break;default:r={x:o.x,y:o.y}}switch(w(e)){case"start":r[c]-=h*(n&&f?-1:1);break;case"end":r[c]+=h*(n&&f?-1:1)}return r}var _=function(){var t=f(c().mark((function t(e,n,r){var o,i,a,l,f,s,d,v,y,m,g,b,x,w,O,k,E,L,S,T,A,P,j,R,D,_;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.placement,i=void 0===o?"bottom":o,a=r.strategy,l=void 0===a?"absolute":a,f=r.middleware,s=void 0===f?[]:f,d=r.platform,v=s.filter(Boolean),t.next=4,null==d.isRTL?void 0:d.isRTL(n);case 4:return y=t.sent,t.next=7,d.getElementRects({reference:e,floating:n,strategy:l});case 7:m=t.sent,g=F(m,i,y),b=g.x,x=g.y,w=i,O={},k=0,E=0;case 13:if(!(E<v.length)){t.next=45;break}return L=v[E],S=L.name,T=L.fn,t.next=17,T({x:b,y:x,initialPlacement:i,placement:w,strategy:l,middlewareData:O,rects:m,platform:d,elements:{reference:e,floating:n}});case 17:if(A=t.sent,P=A.x,j=A.y,R=A.data,D=A.reset,b=null!=P?P:b,x=null!=j?j:x,O=p(p({},O),{},h({},S,p(p({},O[S]),R))),!(D&&k<=50)){t.next=42;break}if(k++,"object"!==u(D)){t.next=41;break}if(D.placement&&(w=D.placement),!D.rects){t.next=38;break}if(!0!==D.rects){t.next=36;break}return t.next=33,d.getElementRects({reference:e,floating:n,strategy:l});case 33:t.t0=t.sent,t.next=37;break;case 36:t.t0=D.rects;case 37:m=t.t0;case 38:_=F(m,w,y),b=_.x,x=_.y;case 41:E=-1;case 42:E++,t.next=13;break;case 45:return t.abrupt("return",{x:b,y:x,placement:w,strategy:l,middlewareData:O});case 46:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();function C(t,e){return N.apply(this,arguments)}function N(){return N=f(c().mark((function t(e,n){var r,o,i,a,u,l,f,s,h,d,v,y,m,g,x,w,O,k,E,L,S,T,A,P,j;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===n&&(n={}),o=e.x,i=e.y,a=e.platform,u=e.rects,l=e.elements,f=e.strategy,s=b(n,e),h=s.boundary,d=void 0===h?"clippingAncestors":h,v=s.rootBoundary,y=void 0===v?"viewport":v,m=s.elementContext,g=void 0===m?"floating":m,x=s.altBoundary,w=void 0!==x&&x,O=s.padding,k=R(void 0===O?0:O),E="floating"===g?"reference":"floating",L=l[w?E:g],t.t0=D,t.t1=a,t.next=10,null==a.isElement?void 0:a.isElement(L);case 10:if(t.t2=r=t.sent,null==t.t2){t.next=15;break}t.t3=r,t.next=16;break;case 15:t.t3=!0;case 16:if(!t.t3){t.next=20;break}t.t4=L,t.next=26;break;case 20:if(t.t5=L.contextElement,t.t5){t.next=25;break}return t.next=24,null==a.getDocumentElement?void 0:a.getDocumentElement(l.floating);case 24:t.t5=t.sent;case 25:t.t4=t.t5;case 26:return t.t6=t.t4,t.t7=d,t.t8=y,t.t9=f,t.t10={element:t.t6,boundary:t.t7,rootBoundary:t.t8,strategy:t.t9},t.next=33,t.t1.getClippingRect.call(t.t1,t.t10);case 33:return t.t11=t.sent,S=(0,t.t0)(t.t11),T="floating"===g?p(p({},u.floating),{},{x:o,y:i}):u.reference,t.next=38,null==a.getOffsetParent?void 0:a.getOffsetParent(l.floating);case 38:return A=t.sent,t.next=41,null==a.isElement?void 0:a.isElement(A);case 41:if(!t.sent){t.next=50;break}return t.next=44,null==a.getScale?void 0:a.getScale(A);case 44:if(t.t13=t.sent,t.t13){t.next=47;break}t.t13={x:1,y:1};case 47:t.t12=t.t13,t.next=51;break;case 50:t.t12={x:1,y:1};case 51:if(P=t.t12,t.t14=D,!a.convertOffsetParentRelativeRectToViewportRelativeRect){t.next=59;break}return t.next=56,a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:T,offsetParent:A,strategy:f});case 56:t.t15=t.sent,t.next=60;break;case 59:t.t15=T;case 60:return t.t16=t.t15,j=(0,t.t14)(t.t16),t.abrupt("return",{top:(S.top-j.top+k.top)/P.y,bottom:(j.bottom-S.bottom+k.bottom)/P.y,left:(S.left-j.left+k.left)/P.x,right:(j.right-S.right+k.right)/P.x});case 63:case"end":return t.stop()}}),t)}))),N.apply(this,arguments)}function I(t,e){return H.apply(this,arguments)}function H(){return H=f(c().mark((function t(e,n){var r,o,i,a,u,l,f,s,h,d,v,y,m,g;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.placement,o=e.platform,i=e.elements,t.next=3,null==o.isRTL?void 0:o.isRTL(i.floating);case 3:return a=t.sent,u=x(r),l=w(r),f="y"===E(r),s=["left","top"].includes(u)?-1:1,h=a&&f?-1:1,d=b(n,e),v="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:p({mainAxis:0,crossAxis:0,alignmentAxis:null},d),y=v.mainAxis,m=v.crossAxis,g=v.alignmentAxis,l&&"number"==typeof g&&(m="end"===l?-1*g:g),t.abrupt("return",f?{x:m*h,y:y*s}:{x:y*s,y:m*h});case 13:case"end":return t.stop()}}),t)}))),H.apply(this,arguments)}o("o",(function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn:function(e){return f(c().mark((function n(){var r,o,i,a,u,l,f;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e.x,a=e.y,u=e.placement,l=e.middlewareData,n.next=3,I(e,t);case 3:if(f=n.sent,u!==(null==(r=l.offset)?void 0:r.placement)||null==(o=l.arrow)||!o.alignmentOffset){n.next=6;break}return n.abrupt("return",{});case 6:return n.abrupt("return",{x:i+f.x,y:a+f.y,data:p(p({},f),{},{placement:u})});case 7:case"end":return n.stop()}}),n)})))()}}}));function W(t){return V(t)?(t.nodeName||"").toLowerCase():"#document"}function B(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function M(t){var e;return null==(e=(V(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function V(t){return t instanceof Node||t instanceof B(t).Node}function G(t){return t instanceof Element||t instanceof B(t).Element}function z(t){return t instanceof HTMLElement||t instanceof B(t).HTMLElement}function Y(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof B(t).ShadowRoot)}function $(t){var e=K(t),n=e.overflow,r=e.overflowX,o=e.overflowY,i=e.display;return/auto|scroll|overlay|hidden|clip/.test(n+o+r)&&!["inline","contents"].includes(i)}function q(t){return["table","td","th"].includes(W(t))}function X(t){var e=U(),n=K(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((function(t){return(n.willChange||"").includes(t)}))||["paint","layout","strict","content"].some((function(t){return(n.contain||"").includes(t)}))}function U(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function J(t){return["html","body","#document"].includes(W(t))}function K(t){return B(t).getComputedStyle(t)}function Q(t){return G(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Z(t){if("html"===W(t))return t;var e=t.assignedSlot||t.parentNode||Y(t)&&t.host||M(t);return Y(e)?e.host:e}function tt(t){var e=Z(t);return J(e)?t.ownerDocument?t.ownerDocument.body:t.body:z(e)&&$(e)?e:tt(e)}function et(t,e,n){var r;void 0===e&&(e=[]),void 0===n&&(n=!0);var o=tt(t),i=o===(null==(r=t.ownerDocument)?void 0:r.body),a=B(o);return i?e.concat(a,a.visualViewport||[],$(o)?o:[],a.frameElement&&n?et(a.frameElement):[]):e.concat(o,et(o,[],n))}function nt(t){var e=K(t),n=parseFloat(e.width)||0,r=parseFloat(e.height)||0,o=z(t),i=o?t.offsetWidth:n,a=o?t.offsetHeight:r,c=s(n)!==i||s(r)!==a;return c&&(n=i,r=a),{width:n,height:r,$:c}}function rt(t){return G(t)?t:t.contextElement}function ot(t){var e=rt(t);if(!z(e))return v(1);var n=e.getBoundingClientRect(),r=nt(e),o=r.width,i=r.height,a=r.$,c=(a?s(n.width):n.width)/o,u=(a?s(n.height):n.height)/i;return c&&Number.isFinite(c)||(c=1),u&&Number.isFinite(u)||(u=1),{x:c,y:u}}var it=v(0);function at(t){var e=B(t);return U()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:it}function ct(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=!1);var o=t.getBoundingClientRect(),i=rt(t),a=v(1);e&&(r?G(r)&&(a=ot(r)):a=ot(t));var c=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==B(t))&&e}(i,n,r)?at(i):v(0),u=(o.left+c.x)/a.x,l=(o.top+c.y)/a.y,f=o.width/a.x,s=o.height/a.y;if(i)for(var p=B(i),h=r&&G(r)?B(r):r,d=p,y=d.frameElement;y&&r&&h!==d;){var m=ot(y),g=y.getBoundingClientRect(),b=K(y),x=g.left+(y.clientLeft+parseFloat(b.paddingLeft))*m.x,w=g.top+(y.clientTop+parseFloat(b.paddingTop))*m.y;u*=m.x,l*=m.y,f*=m.x,s*=m.y,u+=x,l+=w,y=(d=B(y)).frameElement}return D({width:f,height:s,x:u,y:l})}var ut=[":popover-open",":modal"];function lt(t){return ut.some((function(e){try{return t.matches(e)}catch(n){return!1}}))}function ft(t){return ct(M(t)).left+Q(t).scrollLeft}function st(t,e,n){var r;if("viewport"===e)r=function(t,e){var n=B(t),r=M(t),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,c=0,u=0;if(o){i=o.width,a=o.height;var l=U();(!l||l&&"fixed"===e)&&(c=o.offsetLeft,u=o.offsetTop)}return{width:i,height:a,x:c,y:u}}(t,n);else if("document"===e)r=function(t){var e=M(t),n=Q(t),r=t.ownerDocument.body,o=l(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),i=l(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+ft(t),c=-n.scrollTop;return"rtl"===K(r).direction&&(a+=l(e.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:c}}(M(t));else if(G(e))r=function(t,e){var n=ct(t,!0,"fixed"===e),r=n.top+t.clientTop,o=n.left+t.clientLeft,i=z(t)?ot(t):v(1);return{width:t.clientWidth*i.x,height:t.clientHeight*i.y,x:o*i.x,y:r*i.y}}(e,n);else{var o=at(t);r=p(p({},e),{},{x:e.x-o.x,y:e.y-o.y})}return D(r)}function pt(t,e){var n=Z(t);return!(n===e||!G(n)||J(n))&&("fixed"===K(n).position||pt(n,e))}function ht(t,e,n){var r=z(e),o=M(e),i="fixed"===n,a=ct(t,!0,i,e),c={scrollLeft:0,scrollTop:0},u=v(0);if(r||!r&&!i)if(("body"!==W(e)||$(o))&&(c=Q(e)),r){var l=ct(e,!0,i,e);u.x=l.x+e.clientLeft,u.y=l.y+e.clientTop}else o&&(u.x=ft(o));return{x:a.left+c.scrollLeft-u.x,y:a.top+c.scrollTop-u.y,width:a.width,height:a.height}}function dt(t,e){return z(t)&&"fixed"!==K(t).position?e?e(t):t.offsetParent:null}function vt(t,e){var n=B(t);if(!z(t)||lt(t))return n;for(var r=dt(t,e);r&&q(r)&&"static"===K(r).position;)r=dt(r,e);return r&&("html"===W(r)||"body"===W(r)&&"static"===K(r).position&&!X(r))?n:r||function(t){for(var e=Z(t);z(e)&&!J(e);){if(X(e))return e;e=Z(e)}return null}(t)||n}var yt=function(){var t=f(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.getOffsetParent||vt,r=this.getDimensions,t.t0=ht,t.t1=e.reference,t.next=6,n(e.floating);case 6:return t.t2=t.sent,t.t3=e.strategy,t.t4=(0,t.t0)(t.t1,t.t2,t.t3),t.t5=p,t.t6={x:0,y:0},t.next=13,r(e.floating);case 13:return t.t7=t.sent,t.t8=(0,t.t5)(t.t6,t.t7),t.abrupt("return",{reference:t.t4,floating:t.t8});case 16:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}();var mt={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){var e=t.elements,n=t.rect,r=t.offsetParent,o="fixed"===t.strategy,i=M(r),a=!!e&&lt(e.floating);if(r===i||a&&o)return n;var c={scrollLeft:0,scrollTop:0},u=v(1),l=v(0),f=z(r);if((f||!f&&!o)&&(("body"!==W(r)||$(i))&&(c=Q(r)),z(r))){var s=ct(r);u=ot(r),l.x=s.x+r.clientLeft,l.y=s.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+l.x,y:n.y*u.y-c.scrollTop*u.y+l.y}},getDocumentElement:M,getClippingRect:function(t){var e=t.element,n=t.boundary,o=t.rootBoundary,a=t.strategy,c="clippingAncestors"===n?function(t,e){var n=e.get(t);if(n)return n;for(var r=et(t,[],!1).filter((function(t){return G(t)&&"body"!==W(t)})),o=null,i="fixed"===K(t).position,a=i?Z(t):t;G(a)&&!J(a);){var c=K(a),u=X(a);u||"fixed"!==c.position||(o=null),(i?!u&&!o:!u&&"static"===c.position&&o&&["absolute","fixed"].includes(o.position)||$(a)&&!u&&pt(t,a))?r=r.filter((function(t){return t!==a})):o=c,a=Z(a)}return e.set(t,r),r}(e,this._c):[].concat(n),u=[].concat(r(c),[o]),f=u[0],s=u.reduce((function(t,n){var r=st(e,n,a);return t.top=l(r.top,t.top),t.right=i(r.right,t.right),t.bottom=i(r.bottom,t.bottom),t.left=l(r.left,t.left),t}),st(e,f,a));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:vt,getElementRects:yt,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){var e=nt(t);return{width:e.width,height:e.height}},getScale:ot,isElement:G,isRTL:function(t){return"rtl"===K(t).direction}};o("s",(function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn:function(n){return f(c().mark((function r(){var o,i,u,l,f,s,d,v,y,m,w,k,L,S,T,A,P,j,R,D,F,_,N,I;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=n.x,i=n.y,u=n.placement,l=b(t,n),f=l.mainAxis,s=void 0===f||f,d=l.crossAxis,v=void 0!==d&&d,y=l.limiter,m=void 0===y?{fn:function(t){return{x:t.x,y:t.y}}}:y,w=a(l,e),k={x:o,y:i},r.next=5,C(n,w);case 5:return L=r.sent,S=E(x(u)),T=O(S),A=k[T],P=k[S],s&&(j="y"===T?"bottom":"right",R=A+L["y"===T?"top":"left"],D=A-L[j],A=g(R,A,D)),v&&(F="y"===S?"bottom":"right",_=P+L["y"===S?"top":"left"],N=P-L[F],P=g(_,P,N)),I=m.fn(p(p({},n),{},h(h({},T,A),S,P))),r.abrupt("return",p(p({},I),{},{data:{x:I.x-o,y:I.y-i}}));case 14:case"end":return r.stop()}}),r)})))()}}})),o("f",(function(e){return void 0===e&&(e={}),{name:"flip",options:e,fn:function(n){return f(c().mark((function o(){var i,u,l,f,s,p,h,d,v,y,m,g,w,O,k,E,L,A,R,D,F,_,N,I,H,W,B,M,V,G,z,Y,$,q,X,U,J;return c().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(l=n.placement,f=n.middlewareData,s=n.rects,p=n.initialPlacement,h=n.platform,d=n.elements,v=b(e,n),y=v.mainAxis,m=void 0===y||y,g=v.crossAxis,w=void 0===g||g,O=v.fallbackPlacements,k=v.fallbackStrategy,E=void 0===k?"bestFit":k,L=v.fallbackAxisSideDirection,A=void 0===L?"none":L,R=v.flipAlignment,D=void 0===R||R,F=a(v,t),null==(i=f.arrow)||!i.alignmentOffset){o.next=4;break}return o.abrupt("return",{});case 4:return _=x(l),N=x(p)===p,o.next=8,null==h.isRTL?void 0:h.isRTL(d.floating);case 8:return I=o.sent,H=O||(N||!D?[j(p)]:T(p)),O||"none"===A||H.push.apply(H,r(P(p,D,A,I))),W=[p].concat(r(H)),o.next=14,C(n,F);case 14:if(B=o.sent,M=[],V=(null==(u=f.flip)?void 0:u.overflows)||[],m&&M.push(B[_]),w&&(G=S(l,s,I),M.push(B[G[0]],B[G[1]])),V=[].concat(r(V),[{placement:l,overflows:M}]),M.every((function(t){return t<=0}))){o.next=37;break}if($=((null==(z=f.flip)?void 0:z.index)||0)+1,!(q=W[$])){o.next=25;break}return o.abrupt("return",{data:{index:$,overflows:V},reset:{placement:q}});case 25:if(X=null==(Y=V.filter((function(t){return t.overflows[0]<=0})).sort((function(t,e){return t.overflows[1]-e.overflows[1]}))[0])?void 0:Y.placement){o.next=35;break}o.t0=E,o.next="bestFit"===o.t0?30:"initialPlacement"===o.t0?33:35;break;case 30:return J=null==(U=V.map((function(t){return[t.placement,t.overflows.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0)]})).sort((function(t,e){return t[1]-e[1]}))[0])?void 0:U[0],J&&(X=J),o.abrupt("break",35);case 33:return X=p,o.abrupt("break",35);case 35:if(l===X){o.next=37;break}return o.abrupt("return",{reset:{placement:X}});case 37:return o.abrupt("return",{});case 38:case"end":return o.stop()}}),o)})))()}}})),o("a",(function(t){return{name:"arrow",options:t,fn:function(e){return f(c().mark((function n(){var r,o,a,u,l,f,s,d,v,y,m,x,O,E,S,T,A,P,j,D,F,_,C,N,I,H,W,B,M,V,G,z,Y,$;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.x,o=e.y,a=e.placement,u=e.rects,l=e.platform,f=e.elements,s=e.middlewareData,d=b(t,e)||{},v=d.element,y=d.padding,m=void 0===y?0:y,null!=v){n.next=4;break}return n.abrupt("return",{});case 4:return x=R(m),O={x:r,y:o},E=L(a),S=k(E),n.next=10,l.getDimensions(v);case 10:return T=n.sent,P=(A="y"===E)?"top":"left",j=A?"bottom":"right",D=A?"clientHeight":"clientWidth",F=u.reference[S]+u.reference[E]-O[E]-u.floating[S],_=O[E]-u.reference[E],n.next=19,null==l.getOffsetParent?void 0:l.getOffsetParent(v);case 19:if(C=n.sent,N=C?C[D]:0,n.t0=!N,n.t0){n.next=26;break}return n.next=25,null==l.isElement?void 0:l.isElement(C);case 25:n.t0=!n.sent;case 26:if(!n.t0){n.next=28;break}N=f.floating[D]||u.floating[S];case 28:return I=F/2-_/2,H=N/2-T[S]/2-1,W=i(x[P],H),B=i(x[j],H),M=W,V=N-T[S]-B,G=N/2-T[S]/2+I,z=g(M,G,V),Y=!s.arrow&&null!=w(a)&&G!==z&&u.reference[S]/2-(G<M?W:B)-T[S]/2<0,$=Y?G<M?G-M:G-V:0,n.abrupt("return",h(h(h({},E,O[E]+$),"data",p(h(h({},E,z),"centerOffset",G-z-$),Y&&{alignmentOffset:$})),"reset",Y));case 39:case"end":return n.stop()}}),n)})))()}}})),o("c",(function(t,e,n){var r=new Map,o=p({platform:mt},n),i=p(p({},o.platform),{},{_c:r});return _(t,e,p(p({},o),{},{platform:i}))}))}}}))}();
