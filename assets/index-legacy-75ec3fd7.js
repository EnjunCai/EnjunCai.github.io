System.register(["./StudyNavbar-legacy-69a1e26c.js","./@vue-legacy-f395a227.js","./index-legacy-a22002f9.js","./vue-router-legacy-a8e91f8f.js","./pinia-legacy-6794422a.js","./@codemirror-legacy-46ff428d.js","./@lezer-legacy-052788e6.js","./style-mod-legacy-6423bec3.js","./w3c-keyname-legacy-f5fec46d.js","./element-plus-legacy-618ff473.js","./@vueuse-legacy-542b347c.js","./@element-plus-legacy-9b7b0435.js","./lodash-es-legacy-c5df5acc.js","./@popperjs-legacy-876caf52.js"],(function(e,n){"use strict";var t,a,l,r,u,i,c,o,d,s,f,v,p,m,b,g,x,y,h,w,j,_,k,E,S=document.createElement("style");return S.textContent=".wrapper[data-v-ee87a23f]{display:inline}.menuWrapper[data-v-ee87a23f]{position:fixed;background:#eee;padding:10px;border:1px solid rgba(0,0,0,.0823529412);border-radius:8px;box-shadow:0 14px 40px rgba(109,141,173,.25)}.menuWrapper .menuItem[data-v-ee87a23f]{border-radius:4px;margin:5px 0;padding:2px 4px;transition:all .3s;cursor:pointer}.menuWrapper .menuItem[data-v-ee87a23f]:hover{background:#ccc}.content[data-v-9b3437fd]{gap:10px;display:flex}.content>div[data-v-9b3437fd]{flex:1}.card1[data-v-9b3437fd],.card2[data-v-9b3437fd],.card3[data-v-9b3437fd]{padding:10px;border-radius:10px}.card1[data-v-9b3437fd],.card2[data-v-9b3437fd]{width:100%;position:relative;height:300px;background:pink}.card3[data-v-9b3437fd]{position:absolute;left:200px;top:300px;width:200px;height:100px;background:#bce0c9}\n",document.head.appendChild(S),{setters:[function(e){t=e.S},function(e){a=e.r,l=e.f,r=e.C,u=e.d,i=e.o,c=e.c,o=e.z,d=e.I,s=e.L,f=e.J,v=e.Q,p=e.R,m=e.u,b=e.a,g=e.G,x=e.a5,y=e.O,h=e.P,w=e.T,j=e.Z,_=e.ak,k=e.al},function(e){E=e._},null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n={class:"menu"},S=["onClick"],L=E(u({__name:"RightClick",props:{menus:{default:function(){return[]}}},emits:["select"],setup:function(e,t){var u=t.emit,_=a(null),k=function(e){var n=a(0),t=a(0),u=a(),i=function(e){e.preventDefault(),e.stopPropagation(),n.value=e.clientX,t.value=e.clientY,u.value=!0},c=function(){u.value=!1};return l((function(){var n=e.value;null==n||n.addEventListener("contextmenu",i),window.addEventListener("click",c,!0),window.addEventListener("contextmenu",c,!0)})),r((function(){var n=e.value;null==n||n.removeEventListener("contextmenu",i),window.removeEventListener("click",c,!0),window.removeEventListener("contextmenu",c,!0)})),{x:n,y:t,isShow:u}}(_),E=k.x,L=k.y,C=k.isShow,I=u,W=function(e){e.style.height="0"},R=function(e){var n=e;n.style.height="auto";var t=n.clientHeight;n.style.height="0",requestAnimationFrame((function(){n.style.height=t+"px",n.style.overflow="hidden",n.style.transition="all .3s"}))},z=function(e){e.style.transition="none"};return function(e,t){return i(),c("div",{ref_key:"containerRef",ref:_,class:"wrapper"},[o(e.$slots,"default",{},void 0,!0),(i(),d(j,{to:"body"},[s(w,{onBeforeEnter:W,onEnter:R,onAfterEnter:z},{default:f((function(){return[v(b("div",{class:"menuWrapper",style:h({left:m(E)+"px",top:m(L)+"px"})},[b("div",n,[(i(!0),c(g,null,x(e.menus,(function(e,n){return i(),c("div",{class:"menuItem",onClick:function(n){return t=e.label,C.value=!1,void I("select",t);var t}},y(e.label),9,S)})),256))])],4),[[p,m(C)]])]})),_:1})]))],512)}}}),[["__scopeId","data-v-ee87a23f"]]),C=function(e){return _("data-v-9b3437fd"),e=e(),k(),e},I={class:"content"},W=C((function(){return b("div",{class:"card1"},"右键试试自定义菜单",-1)})),R=C((function(){return b("div",{class:"card3"},"右键试试自定义菜单3,我是嵌套的",-1)})),z=C((function(){return b("div",{class:"card2"},"右键试试自定义菜单2",-1)}));e("default",E(u({__name:"index",setup:function(e){var n=a([{label:"复制"},{label:"粘贴"},{label:"我是card1"}]),l=a([{label:"复制"},{label:"粘贴"},{label:"我是card2"}]),r=a([{label:"复制"},{label:"粘贴"},{label:"我是card3"}]),u=function(e){};return function(e,a){return i(),d(t,null,{main:f((function(){return[b("div",I,[b("div",null,[s(L,{menus:n.value,onSelect:u},{default:f((function(){return[W,s(L,{menus:r.value,onSelect:u},{default:f((function(){return[R]})),_:1},8,["menus"])]})),_:1},8,["menus"])]),s(L,{menus:l.value,onSelect:u},{default:f((function(){return[z]})),_:1},8,["menus"])])]})),_:1})}}}),[["__scopeId","data-v-9b3437fd"]]))}}}));
