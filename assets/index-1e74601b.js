import{_ as V}from"./index-c5cfced5.js";import"./pinia-4ab095f9.js";import"vue";import"./@codemirror-453f4d42.js";import"./@lezer-9e9c314f.js";import"./style-mod-ab9c37a6.js";import"./w3c-keyname-9fb136d3.js";import"./vue-router-63e5be85.js";/* empty css                     */import"./@element-plus-ffca2e11.js";const f={class:"wrapper"},v=Vue.defineComponent({__name:"index",props:{wrapperStyle:{type:String},container:{type:String}},setup(n){const u=n,o=Vue.ref(!1),s=Vue.ref(),c=Vue.ref(),_=()=>{var p;let e=c.value,{top:t,left:l}=e.getBoundingClientRect();const i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;if(!o.value){console.log(t,l),e.style.position="fixed",e.style.top=t+"px",e.style.left=l+"px",document.body.style.overflow="hidden";const a=document.createElement("div");a.style.width=e.offsetWidth+"px"||"100px",a.style.height=e.offsetHeight+"px"||"100px",a.id="cloneElement",(p=e.parentNode)==null||p.insertBefore(a,e),e.style.zIndex="1000",s.value.style.zIndex=99,s.value.style.opacity=.5,window.scroll(0,i),setTimeout(()=>{e.dataset.x=l+"px",e.dataset.y=t+"px",e.dataset.w=e.offsetWidth+"px",e.dataset.h=e.offsetHeight+"px",e.style.transition="all 1s",e.style.top="50%",e.style.left="50%",e.style.width="500px",e.style.height="500px",e.style.transform="translate(-50%,-50%)"},0)}o.value=!0},m=()=>{if(o.value){let e=c.value;e.getBoundingClientRect();const t=document.getElementById("cloneElement");console.log(t==null?void 0:t.getBoundingClientRect());const l=t==null?void 0:t.getBoundingClientRect();e.style.transition="all 0.5s",e.style.top=l.top+"px",e.style.left=l.left+"px",e.style.width=l.width+"px",e.style.height=l.height+"px",e.style.transform="translate(0%,0%)",e.style.pointerEvents="none",e.style.zIndex="1",s.value.style.opacity=0,setTimeout(()=>{var i;console.log(t),document.body.style.overflow="auto",t&&((i=t.parentNode)==null||i.removeChild(t)),e.style.zIndex="1",e.style.position="",e.style.pointerEvents="auto",e.style.top="auto",e.style.left="auto",s.value.style.zIndex=-1},700),o.value=!1}};return(e,t)=>(Vue.openBlock(),Vue.createElementBlock("div",f,[Vue.createElementVNode("div",{class:"card",style:Vue.normalizeStyle([{overflow:o.value?"auto":"hidden"},u.wrapperStyle]),ref_key:"domRef",ref:c,onClick:_},[Vue.withDirectives(Vue.createElementVNode("div",{class:"close",onClick:Vue.withModifiers(m,["stop"])},"X",512),[[Vue.vShow,o.value]]),Vue.renderSlot(e.$slots,"content",{},void 0,!0),Vue.withDirectives(Vue.createElementVNode("div",null,[Vue.renderSlot(e.$slots,"detail",{},void 0,!0)],512),[[Vue.vShow,o.value]])],4),Vue.createElementVNode("div",{class:"mask",ref_key:"maskRef",ref:s},null,512)]))}});const r=V(v,[["__scopeId","data-v-944b4b86"]]),d=n=>(Vue.pushScopeId("data-v-bcff1e4c"),n=n(),Vue.popScopeId(),n),y={class:"flex_wrapper"},h=d(()=>Vue.createElementVNode("div",{class:"card1"},[Vue.createElementVNode("div",null,"title"),Vue.createElementVNode("div")],-1)),x=d(()=>Vue.createElementVNode("div",null,[Vue.createElementVNode("div",null,"title"),Vue.createElementVNode("div",null," 详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息 ")],-1)),g=d(()=>Vue.createElementVNode("div",null,[Vue.createElementVNode("div",null,"点击触发")],-1)),E=d(()=>Vue.createElementVNode("div",null,[Vue.createElementVNode("div",null,"title"),Vue.createElementVNode("div",null," 详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息 ")],-1)),w=d(()=>Vue.createElementVNode("div",{class:"card1"},"123",-1)),N=Vue.defineComponent({__name:"index",setup(n){return(u,o)=>(Vue.openBlock(),Vue.createElementBlock("div",y,[Vue.createVNode(r,{container:"123",wrapperStyle:"background:red"},{content:Vue.withCtx(()=>[h]),detail:Vue.withCtx(()=>[x]),_:1}),Vue.createVNode(r,null,{content:Vue.withCtx(()=>[g]),detail:Vue.withCtx(()=>[E]),_:1}),Vue.createVNode(r,null,{default:Vue.withCtx(()=>[w]),_:1})]))}});const D=V(N,[["__scopeId","data-v-bcff1e4c"]]);export{D as default};
