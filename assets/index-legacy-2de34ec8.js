!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t,r,n){var o;return o=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(r,"string"),(r="symbol"==e(o)?o:String(o))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}System.register(["./element-plus-legacy-4fcd9563.js","./@vue-legacy-6698d0e9.js","./index-legacy-0bed469d.js","./@vueuse-legacy-63eb9e40.js","./lodash-es-legacy-6bb5b0af.js","./@element-plus-legacy-88dff321.js","./pinia-legacy-ac174e7b.js","./vue-router-legacy-cc1e3768.js"],(function(e,t){"use strict";var n,o,a,i,l,u,c,f,s,d,p,v,b,y,m,g,h,x,w,j,_=document.createElement("style");return _.textContent=".box_wrapper[data-v-532170bb]{display:flex;align-items:center;width:100%;height:100px;overflow:hidden;position:relative}.box_wrapper .openBoxPending[data-v-532170bb]{display:flex;align-items:center;justify-content:center;word-break:break-all;overflow-wrap:break-word;background:#4e5064;position:absolute;left:0;top:0;width:100%;height:100px;color:#fff;z-index:5}.box_wrapper .pointer[data-v-532170bb]{position:absolute;left:50%;height:100px;width:3px;background:#ffd014;transform:translate(-50%);z-index:2}.box_wrapper .item_wrapper[data-v-532170bb]{display:flex;align-items:center;transition-timing-function:cubic-bezier(.4,0,.2,1)}.box_wrapper .item_wrapper .item[data-v-532170bb]{width:100px;height:100px;flex-shrink:0}.options[data-v-532170bb],.options[data-v-532170bb] span{color:var(--text-color)}\n",document.head.appendChild(_),{setters:[function(e){n=e.b,o=e.c},function(e){a=e.d,i=e.r,l=e.c,u=e.a,c=e.x,f=e.T,s=e.Q,d=e.S,p=e.u,v=e.B,b=e.M,y=e.O,m=e.a3,g=e.a4,h=e.o,x=e.E,w=e.C},function(e){j=e._},null,null,null,null,null],execute:function(){var t={class:"openBoxPending"},_=function(e){return m("data-v-532170bb"),e=e(),g(),e}((function(){return u("div",{class:"pointer"},null,-1)})),O={class:"options"},k=a({__name:"index",setup:function(e){var a=i([]),m=i(),g=i(),j=i(!1),k=i([{id:1,title:"一等奖",color:"pink"},{id:2,title:"二等奖",color:"darkgoldenrod"},{id:3,title:"三等奖",color:"darkturquoise"},{id:4,title:"小玩具",color:"peachpuff"},{id:5,title:"废品",color:"lavender"},{id:6,title:"垃圾",color:"aquamarine"},{id:7,title:"破烂",color:"dimgray"},{id:8,title:"谢谢参与",color:"azure"},{id:9,title:"下次加油",color:"fuchsia"},{id:10,title:"继续努力",color:"red"}]),P=i(-1),S=i();var M=function(){var e=m.value,t=[];for(j.value=!0;t.length<120;){var n=Math.floor(Math.random()*k.value.length);t.push(r({},k.value[n]))}for(var o=t.length-1;o>0;o--){var i=Math.floor(Math.random()*(o+1)),l=[t[i],t[o]];t[o]=l[0],t[i]=l[1]}var u=g.value.offsetWidth/2/100,c=Math.round(100+Math.ceil(u))-1;if(-1!=P.value){var f=k.value.find((function(e){return e.id===P.value}));t[c]=f}else{var s=Math.floor(7*Math.random())+4;[1,2,3].includes(t[c].id)&&(t[c]=k.value[s])}a.value=t,S.value=setTimeout((function(){var t,r,n,o;e.style.transition="all 10s",e.style.transform="translateX(-".concat(1e4+100*(t=u,r=Math.floor(t),o=r+.9,(n=r+.1)+Math.random()*(o-n)-t),"px)")}),1e3)},C=function(){j.value=!1,a.value=[],clearTimeout(S.value);var e=m.value;e.style.transition="none",e.style.transform="translateX(0px)"};return function(e,r){var i=n,k=o;return h(),l("div",null,[u("div",{class:"box_wrapper",ref_key:"boxWrapper",ref:g},[c(u("div",t," 点击按钮抽奖（默认不匹配，永远抽不到前三个奖品） ",512),[[f,!j.value]]),_,u("div",{class:"item_wrapper",ref_key:"itemWrapper",ref:m},[(h(!0),l(s,null,d(p(a),(function(e,t){return h(),l("div",{class:"item",style:x({background:""+e.color}),key:Number(e.id)},w(e.title),5)})),128))],512)],512),c(u("button",{onClick:M},"开始",512),[[f,!j.value]]),c(u("button",{onClick:C},"重置",512),[[f,j.value]]),u("div",O,[v(" 指定一个id必中 "),b(k,{modelValue:P.value,"onUpdate:modelValue":r[0]||(r[0]=function(e){return P.value=e})},{default:y((function(){return[b(i,{value:-1},{default:y((function(){return[v("不匹配")]})),_:1}),b(i,{value:1},{default:y((function(){return[v("一等奖")]})),_:1}),b(i,{value:2},{default:y((function(){return[v("二等奖")]})),_:1}),b(i,{value:3},{default:y((function(){return[v("三等奖")]})),_:1})]})),_:1},8,["modelValue"])])])}}});e("default",j(k,[["__scopeId","data-v-532170bb"]]))}}}))}();
