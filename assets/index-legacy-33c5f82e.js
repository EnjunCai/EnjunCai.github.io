!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t,r,n){var o;return o=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(r,"string"),(r="symbol"==e(o)?o:String(o))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}System.register(["./element-plus-legacy-618ff473.js","./@vue-legacy-f395a227.js","./index-legacy-fd0b46d7.js","./@vueuse-legacy-542b347c.js","./@element-plus-legacy-9b7b0435.js","./lodash-es-legacy-c5df5acc.js","./@popperjs-legacy-876caf52.js","./pinia-legacy-6794422a.js","./@codemirror-legacy-46ff428d.js","./@lezer-legacy-052788e6.js","./style-mod-legacy-6423bec3.js","./w3c-keyname-legacy-f5fec46d.js","./vue-router-legacy-a8e91f8f.js"],(function(e,t){"use strict";var n,o,a,l,i,u,c,s,d,f,p,v,b,y,m,g,h,x,w,j,_=document.createElement("style");return _.textContent='@charset "UTF-8";.container[data-v-f87d90c1]{width:300px;height:300px;background-color:red;border-radius:50%;display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden}.container .wheel[data-v-f87d90c1]{width:300px;height:300px;background-color:bisque;position:absolute;left:50%;top:-50%;border:1px solid red;transform-origin:0% 100%}.box_wrapper[data-v-427b5756]{display:flex;align-items:center;width:100%;height:100px;overflow:hidden;position:relative}.box_wrapper .openBoxPending[data-v-427b5756]{display:flex;align-items:center;justify-content:center;word-break:break-all;overflow-wrap:break-word;background:#4e5064;position:absolute;left:0;top:0;width:100%;height:100px;color:#fff;z-index:5}.box_wrapper .pointer[data-v-427b5756]{position:absolute;left:50%;height:100px;width:3px;background:#ffd014;transform:translate(-50%);z-index:2}.box_wrapper .item_wrapper[data-v-427b5756]{display:flex;align-items:center;transition-timing-function:cubic-bezier(.4,0,.2,1)}.box_wrapper .item_wrapper .item[data-v-427b5756]{width:100px;height:100px;flex-shrink:0}.options[data-v-427b5756],.options[data-v-427b5756] span{color:var(--text-color)}\n',document.head.appendChild(_),{setters:[function(e){n=e.b,o=e.c},function(e){a=e.d,l=e.r,i=e.o,u=e.c,c=e.a,s=e.G,d=e.a5,f=e.P,p=e.O,v=e.ak,b=e.al,y=e.Q,m=e.R,g=e.u,h=e.a1,x=e.L,w=e.J},function(e){j=e._},null,null,null,null,null,null,null,null,null,null],execute:function(){var t={class:"container"},_={class:"section"},k=function(e){return v("data-v-f87d90c1"),e=e(),b(),e}((function(){return c("div",{class:"pointer"},null,-1)})),O=a({__name:"turntable",setup:function(e){var r=["奖品1","奖品2","奖品3","奖品4","奖品5","奖品6","奖品7"],n=l(0),o=!1,a=function(){if(!o){o=!0;var e=360*Math.random()+1800;n.value+=e,o=!1}};return function(e,n){return i(),u(s,null,[c("div",t,[(i(),u(s,null,d(r,(function(e,t){return c("div",{class:"wheel",key:t,style:f({transform:"rotate("+360/r.length*t+"deg) skewY(-".concat(360/r.length,"deg)")})},[c("div",_,p(e),1)],4)})),64)),k]),c("button",{onClick:a},"抽奖")],64)}}}),P=j(O,[["__scopeId","data-v-f87d90c1"]]),M={class:"openBoxPending"},S=function(e){return v("data-v-427b5756"),e=e(),b(),e}((function(){return c("div",{class:"pointer"},null,-1)})),z={class:"options"},C={style:{"margin-top":"100px"}},q=a({__name:"index",setup:function(e){var t=l([]),a=l(),v=l(),b=l(!1),j=l([{id:1,title:"一等奖",color:"pink"},{id:2,title:"二等奖",color:"darkgoldenrod"},{id:3,title:"三等奖",color:"darkturquoise"},{id:4,title:"小玩具",color:"peachpuff"},{id:5,title:"废品",color:"lavender"},{id:6,title:"垃圾",color:"aquamarine"},{id:7,title:"破烂",color:"dimgray"},{id:8,title:"谢谢参与",color:"azure"},{id:9,title:"下次加油",color:"fuchsia"},{id:10,title:"继续努力",color:"red"}]),_=l(-1),k=l();var O=function(){var e=a.value,n=[];for(b.value=!0;n.length<120;){var o=Math.floor(Math.random()*j.value.length);n.push(r({},j.value[o]))}for(var l=n.length-1;l>0;l--){var i=Math.floor(Math.random()*(l+1)),u=[n[i],n[l]];n[l]=u[0],n[i]=u[1]}var c=v.value.offsetWidth/2/100,s=Math.round(100+Math.ceil(c))-1;if(-1!=_.value){var d=j.value.find((function(e){return e.id===_.value}));n[s]=d}else{var f=Math.floor(7*Math.random())+4;[1,2,3].includes(n[s].id)&&(n[s]=j.value[f])}t.value=n,k.value=setTimeout((function(){var t,r,n,o;e.style.transition="all 10s",e.style.transform="translateX(-".concat(1e4+100*(t=c,r=Math.floor(t),o=r+.9,(n=r+.1)+Math.random()*(o-n)-t),"px)")}),1e3)},q=function(){b.value=!1,t.value=[],clearTimeout(k.value);var e=a.value;e.style.transition="none",e.style.transform="translateX(0px)"};return function(e,r){var l=n,j=o;return i(),u(s,null,[c("div",null,[c("div",{class:"box_wrapper",ref_key:"boxWrapper",ref:v},[y(c("div",M," 点击按钮抽奖（默认不匹配，永远抽不到前三个奖品） ",512),[[m,!b.value]]),S,c("div",{class:"item_wrapper",ref_key:"itemWrapper",ref:a},[(i(!0),u(s,null,d(g(t),(function(e,t){return i(),u("div",{class:"item",style:f({background:""+e.color}),key:Number(e.id)},p(e.title),5)})),128))],512)],512),y(c("button",{onClick:O},"开始",512),[[m,!b.value]]),y(c("button",{onClick:q},"重置",512),[[m,b.value]]),c("div",z,[h(" 指定一个id必中 "),x(j,{modelValue:_.value,"onUpdate:modelValue":r[0]||(r[0]=function(e){return _.value=e})},{default:w((function(){return[x(l,{value:-1},{default:w((function(){return[h("不匹配")]})),_:1}),x(l,{value:1},{default:w((function(){return[h("一等奖")]})),_:1}),x(l,{value:2},{default:w((function(){return[h("二等奖")]})),_:1}),x(l,{value:3},{default:w((function(){return[h("三等奖")]})),_:1})]})),_:1},8,["modelValue"])])]),c("div",C,[x(P)])],64)}}});e("default",j(q,[["__scopeId","data-v-427b5756"]]))}}}))}();
