import{d as y,r as a,o as r,c,a as o,Q as F,aj as V,ak as W,al as z,w as A,f as O,C as T,u as U,H as k,G as g,a5 as E,M as L,O as N,L as b,F as j,a9 as G}from"./@vue-7d7101e0.js";import{u as H,b as Q}from"./vue-router-c0c516d0.js";import{_ as C}from"./index-17eaff15.js";import"./pinia-fe9b4ad3.js";import"./@codemirror-453f4d42.js";import"./@lezer-9e9c314f.js";import"./style-mod-ab9c37a6.js";import"./w3c-keyname-9fb136d3.js";import"./element-plus-78da4f18.js";import"./@vueuse-1e9e5a18.js";import"./@element-plus-c6e9947a.js";import"./lodash-es-195107c1.js";import"./@popperjs-c75af06c.js";const q=s=>(W("data-v-11aa3ae7"),s=s(),z(),s),J={class:"toggle-switch"},K={class:"switch-label"},X=q(()=>o("span",{class:"slider"},null,-1)),Y=y({__name:"CheckTheme",setup(s){const i=a(!0),l=()=>{console.log(i.value),i.value?window.document.documentElement.removeAttribute("data-theme"):window.document.documentElement.setAttribute("data-theme","light")};return(_,v)=>(r(),c("div",J,[o("label",K,[F(o("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":v[0]||(v[0]=p=>i.value=p),onChange:l},null,544),[[V,i.value]]),X])]))}});const P=C(Y,[["__scopeId","data-v-11aa3ae7"]]),x=s=>(W("data-v-5c9a632e"),s=s(),z(),s),Z={class:"global_wrapper"},ee={class:"global_nav"},te=x(()=>o("div",{class:"bar bar--top"},null,-1)),oe=x(()=>o("div",{class:"bar bar--middle"},null,-1)),ne=x(()=>o("div",{class:"bar bar--bottom"},null,-1)),se=[te,oe,ne],ie={key:1,class:"nav_list"},le=["onClick"],ae={class:"mobileListUl"},re=["onClick"],ce=y({__name:"NavBar",setup(s){const i=H(),l=Q(),_=a(0),v=a(),p=a(),I=a(),h=a(!1),m=a(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),S=a(l.params.id),d=[{id:1,title:"首页",router:"/home"},{id:2,title:"案例",router:"/study",children:[{title:"11",router:"/resize"},{title:"11",router:"/music"},{title:"11",router:"/tree"},{title:"11",router:"/rightClick"},{title:"11",router:"/fullPage"},{title:"11",router:"/lotteryDraw"},{title:"11",router:"/imagesChangeBg"},{title:"11",router:"/waterFullPage"},{title:"11",router:"/CardExpansion"},{title:"11",router:"/bilibiliMouseMove"},{title:"11",router:"/video"},{title:"11",router:"/markDown"},{title:"11",router:"/three"}]},{id:4,title:"导航中心",router:"/navigation"},{id:5,title:"笔记",router:"/note",children:[{title:"11",router:"/noteInfo/"}]},{id:6,title:"其他",router:"/other"}];A(()=>l.fullPath,(t,n)=>{S.value=l.params.id,w()});const B=function(t,n,e){m.value>780?$(n):h.value=!1,_.value=n,i.push(t)},$=t=>{if(t==-1||!p.value)return;let n=p.value.getBoundingClientRect(),e=v.value[t].getBoundingClientRect(),u=n.left-e.left,f=I.value;f.style.left=Math.abs(u)+"px",f.style.width=e.width+"px"},D=()=>{h.value=!h.value},M=(t,n)=>{for(let e=0;e<t.length;e++){if(t[e].router===n)return e;if(t[e].children&&M(t[e].children,n)!==-1)return e}return-1};O(()=>{d.findIndex(t=>t.id===5),w(),window.addEventListener("resize",R)});const w=()=>{if(m.value>780){const t=d.findIndex(e=>e.id===5);d[t].children&&(d[t].children[0].router="/noteInfo/"+l.params.id);const n=M(d,l.path);_.value=n,$(n)}};function R(){m.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,w()}return T(()=>{window.removeEventListener("resize",R)}),(t,n)=>(r(),c(g,null,[o("div",Z,[o("nav",ee,[o("div",{class:"logo",onClick:n[0]||(n[0]=e=>U(i).push("/home"))},"Enjun blog"),m.value<=780?(r(),c("div",{key:0,class:"mobileBtn",onClick:D},[o("div",{class:k({toggle:!0,toggleActive:h.value})},se,2)])):(r(),c("div",ie,[o("ul",{ref_key:"ulParent",ref:p},[o("div",{ref_key:"activeBgRef",ref:I,class:"active_bg"},null,512),(r(),c(g,null,E(d,(e,u)=>o("li",{key:e.id,class:k({active:_.value==u}),onClick:L(f=>B(e.router,u,t.$el),["stop"]),ref_for:!0,ref_key:"listItem",ref:v},N(e.title),11,le)),64))],512),b(P)]))])]),m.value<=780?(r(),c("div",{key:0,class:k({navMobileList:!0,openMobileList:h.value})},[o("ul",ae,[(r(),c(g,null,E(d,(e,u)=>o("li",{key:e.id,onClick:L(f=>B(e.router,u,t.$el),["stop"])},N(e.title),9,re)),64)),b(P)])],2)):j("",!0)],64))}});const de=C(ce,[["__scopeId","data-v-5c9a632e"]]),ue={class:"nav_wrapper"},_e={class:"content_wrapper"},ve=y({__name:"Root",setup(s){return(i,l)=>{const _=G("router-view");return r(),c(g,null,[o("div",ue,[b(de)]),o("div",_e,[b(_)])],64)}}});const $e=C(ve,[["__scopeId","data-v-2890c722"]]);export{$e as default};
