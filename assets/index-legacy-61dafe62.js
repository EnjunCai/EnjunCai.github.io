System.register(["./StudyNavbar-legacy-daee9ab0.js","./index-legacy-fda01229.js","./vue-router-legacy-0ecfcb06.js","./pinia-legacy-fa4e704c.js","vue","./@codemirror-legacy-46ff428d.js","./@lezer-legacy-052788e6.js","./style-mod-legacy-6423bec3.js","./w3c-keyname-legacy-f5fec46d.js","./element-plus-legacy-34fb5033.js","./@element-plus-legacy-afd690f1.js"],(function(e,n){"use strict";var t,u,a=document.createElement("style");return a.textContent=".wrapper[data-v-ee87a23f]{display:inline}.menuWrapper[data-v-ee87a23f]{position:fixed;background:#eee;padding:10px;border:1px solid rgba(0,0,0,.0823529412);border-radius:8px;box-shadow:0 14px 40px rgba(109,141,173,.25)}.menuWrapper .menuItem[data-v-ee87a23f]{border-radius:4px;margin:5px 0;padding:2px 4px;transition:all .3s;cursor:pointer}.menuWrapper .menuItem[data-v-ee87a23f]:hover{background:#ccc}.content[data-v-9b3437fd]{gap:10px;display:flex}.content>div[data-v-9b3437fd]{flex:1}.card1[data-v-9b3437fd],.card2[data-v-9b3437fd],.card3[data-v-9b3437fd]{padding:10px;border-radius:10px}.card1[data-v-9b3437fd],.card2[data-v-9b3437fd]{width:100%;position:relative;height:300px;background:pink}.card3[data-v-9b3437fd]{position:absolute;left:200px;top:300px;width:200px;height:100px;background:#bce0c9}\n",document.head.appendChild(a),{setters:[function(e){t=e.S},function(e){u=e._},null,null,null,null,null,null,null,null,null],execute:function(){var n={class:"menu"},a=["onClick"],r=u(Vue.defineComponent({__name:"RightClick",props:{menus:{default:function(){return[]}}},emits:["select"],setup:function(e,t){var u=t.emit,r=Vue.ref(null),l=function(e){var n=Vue.ref(0),t=Vue.ref(0),u=Vue.ref(),a=function(e){e.preventDefault(),e.stopPropagation(),n.value=e.clientX,t.value=e.clientY,u.value=!0},r=function(){u.value=!1};return Vue.onMounted((function(){var n=e.value;null==n||n.addEventListener("contextmenu",a),window.addEventListener("click",r,!0),window.addEventListener("contextmenu",r,!0)})),Vue.onUnmounted((function(){var n=e.value;null==n||n.removeEventListener("contextmenu",a),window.removeEventListener("click",r,!0),window.removeEventListener("contextmenu",r,!0)})),{x:n,y:t,isShow:u}}(r),o=l.x,i=l.y,c=l.isShow,d=u,s=function(e){e.style.height="0"},f=function(e){var n=e;n.style.height="auto";var t=n.clientHeight;n.style.height="0",requestAnimationFrame((function(){n.style.height=t+"px",n.style.overflow="hidden",n.style.transition="all .3s"}))},p=function(e){e.style.transition="none"};return function(e,t){return Vue.openBlock(),Vue.createElementBlock("div",{ref_key:"containerRef",ref:r,class:"wrapper"},[Vue.renderSlot(e.$slots,"default",{},void 0,!0),(Vue.openBlock(),Vue.createBlock(Vue.Teleport,{to:"body"},[Vue.createVNode(Vue.Transition,{onBeforeEnter:s,onEnter:f,onAfterEnter:p},{default:Vue.withCtx((function(){return[Vue.withDirectives(Vue.createElementVNode("div",{class:"menuWrapper",style:Vue.normalizeStyle({left:Vue.unref(o)+"px",top:Vue.unref(i)+"px"})},[Vue.createElementVNode("div",n,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.menus,(function(e,n){return Vue.openBlock(),Vue.createElementBlock("div",{class:"menuItem",onClick:function(n){return t=e.label,c.value=!1,void d("select",t);var t}},Vue.toDisplayString(e.label),9,a)})),256))])],4),[[Vue.vShow,Vue.unref(c)]])]})),_:1})]))],512)}}}),[["__scopeId","data-v-ee87a23f"]]),l=function(e){return Vue.pushScopeId("data-v-9b3437fd"),e=e(),Vue.popScopeId(),e},o={class:"content"},i=l((function(){return Vue.createElementVNode("div",{class:"card1"},"右键试试自定义菜单",-1)})),c=l((function(){return Vue.createElementVNode("div",{class:"card3"},"右键试试自定义菜单3,我是嵌套的",-1)})),d=l((function(){return Vue.createElementVNode("div",{class:"card2"},"右键试试自定义菜单2",-1)}));e("default",u(Vue.defineComponent({__name:"index",setup:function(e){var n=Vue.ref([{label:"复制"},{label:"粘贴"},{label:"我是card1"}]),u=Vue.ref([{label:"复制"},{label:"粘贴"},{label:"我是card2"}]),a=Vue.ref([{label:"复制"},{label:"粘贴"},{label:"我是card3"}]),l=function(e){};return function(e,s){return Vue.openBlock(),Vue.createBlock(t,null,{main:Vue.withCtx((function(){return[Vue.createElementVNode("div",o,[Vue.createElementVNode("div",null,[Vue.createVNode(r,{menus:n.value,onSelect:l},{default:Vue.withCtx((function(){return[i,Vue.createVNode(r,{menus:a.value,onSelect:l},{default:Vue.withCtx((function(){return[c]})),_:1},8,["menus"])]})),_:1},8,["menus"])]),Vue.createVNode(r,{menus:u.value,onSelect:l},{default:Vue.withCtx((function(){return[d]})),_:1},8,["menus"])])]})),_:1})}}}),[["__scopeId","data-v-9b3437fd"]]))}}}));
