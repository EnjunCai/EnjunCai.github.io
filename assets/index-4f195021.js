import{d as g,r as u,c as w,a as t,Q as m,R as h,M as S,z as x,P as C,o as E,L as _,J as a,ak as B,al as R}from"./@vue-7d7101e0.js";import{_ as b}from"./index-17eaff15.js";import"./pinia-fe9b4ad3.js";import"./@codemirror-453f4d42.js";import"./@lezer-9e9c314f.js";import"./style-mod-ab9c37a6.js";import"./w3c-keyname-9fb136d3.js";import"./vue-router-c0c516d0.js";import"./element-plus-78da4f18.js";import"./@vueuse-1e9e5a18.js";import"./@element-plus-c6e9947a.js";import"./lodash-es-195107c1.js";import"./@popperjs-c75af06c.js";const z={class:"wrapper"},N=g({__name:"index",props:{wrapperStyle:{type:String},container:{type:String}},setup(n){const y=n,s=u(!1),i=u(),p=u(),k=()=>{var v;let e=p.value,{top:o,left:l}=e.getBoundingClientRect();const c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;if(!s.value){console.log(o,l),e.style.position="fixed",e.style.top=o+"px",e.style.left=l+"px",document.body.style.overflow="hidden";const r=document.createElement("div");r.style.width=e.offsetWidth+"px"||"100px",r.style.height=e.offsetHeight+"px"||"100px",r.id="cloneElement",(v=e.parentNode)==null||v.insertBefore(r,e),e.style.zIndex="1000",i.value.style.zIndex=99,i.value.style.opacity=.5,window.scroll(0,c),setTimeout(()=>{e.dataset.x=l+"px",e.dataset.y=o+"px",e.dataset.w=e.offsetWidth+"px",e.dataset.h=e.offsetHeight+"px",e.style.transition="all 1s",e.style.top="50%",e.style.left="50%",e.style.width="500px",e.style.height="500px",e.style.transform="translate(-50%,-50%)"},0)}s.value=!0},I=()=>{if(s.value){let e=p.value;e.getBoundingClientRect();const o=document.getElementById("cloneElement");console.log(o==null?void 0:o.getBoundingClientRect());const l=o==null?void 0:o.getBoundingClientRect();e.style.transition="all 0.5s",e.style.top=l.top+"px",e.style.left=l.left+"px",e.style.width=l.width+"px",e.style.height=l.height+"px",e.style.transform="translate(0%,0%)",e.style.pointerEvents="none",e.style.zIndex="1",i.value.style.opacity=0,setTimeout(()=>{var c;console.log(o),document.body.style.overflow="auto",o&&((c=o.parentNode)==null||c.removeChild(o)),e.style.zIndex="1",e.style.position="",e.style.pointerEvents="auto",e.style.top="auto",e.style.left="auto",i.value.style.zIndex=-1},700),s.value=!1}};return(e,o)=>(E(),w("div",z,[t("div",{class:"card",style:C([{overflow:s.value?"auto":"hidden"},y.wrapperStyle]),ref_key:"domRef",ref:p,onClick:k},[m(t("div",{class:"close",onClick:S(I,["stop"])},"X",512),[[h,s.value]]),x(e.$slots,"content",{},void 0,!0),m(t("div",null,[x(e.$slots,"detail",{},void 0,!0)],512),[[h,s.value]])],4),t("div",{class:"mask",ref_key:"maskRef",ref:i},null,512)]))}});const f=b(N,[["__scopeId","data-v-944b4b86"]]),d=n=>(B("data-v-bcff1e4c"),n=n(),R(),n),T={class:"flex_wrapper"},$=d(()=>t("div",{class:"card1"},[t("div",null,"title"),t("div")],-1)),H=d(()=>t("div",null,[t("div",null,"title"),t("div",null," 详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息 ")],-1)),D=d(()=>t("div",null,[t("div",null,"点击触发")],-1)),M=d(()=>t("div",null,[t("div",null,"title"),t("div",null," 详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息 ")],-1)),V=d(()=>t("div",{class:"card1"},"123",-1)),W=g({__name:"index",setup(n){return(y,s)=>(E(),w("div",T,[_(f,{container:"123",wrapperStyle:"background:red"},{content:a(()=>[$]),detail:a(()=>[H]),_:1}),_(f,null,{content:a(()=>[D]),detail:a(()=>[M]),_:1}),_(f,null,{default:a(()=>[V]),_:1})]))}});const U=b(W,[["__scopeId","data-v-bcff1e4c"]]);export{U as default};
