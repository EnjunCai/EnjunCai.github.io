import{d as y,r as u,o as l,c as a,a as o,y as A,a3 as D,a4 as N,a5 as S,G as V,w as F,t as T,x as U,u as O,A as k,Q as f,S as E,B as L,D as P,M as g,P as j,a2 as G}from"./@vue-95cd2432.js";import{u as Q,b as q}from"./vue-router-720bc69e.js";import{_ as C}from"./index-a41002a3.js";import"./pinia-14006c30.js";import"./element-plus-eabb2b7a.js";import"./@vueuse-b42f20a6.js";import"./@element-plus-c71a0d13.js";import"./lodash-es-f44eecda.js";const H=s=>(N("data-v-11aa3ae7"),s=s(),S(),s),J={class:"toggle-switch"},K={class:"switch-label"},X=H(()=>o("span",{class:"slider"},null,-1)),Y=y({__name:"CheckTheme",setup(s){const i=u(!0),_=()=>{console.log(i.value),i.value?window.document.documentElement.removeAttribute("data-theme"):window.document.documentElement.setAttribute("data-theme","light")};return(d,r)=>(l(),a("div",J,[o("label",K,[A(o("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":r[0]||(r[0]=v=>i.value=v),onChange:_},null,544),[[D,i.value]]),X])]))}});const W=C(Y,[["__scopeId","data-v-11aa3ae7"]]),B=s=>(N("data-v-42ce4008"),s=s(),S(),s),Z={class:"global_wrapper"},ee={class:"global_nav"},te=B(()=>o("div",{class:"bar bar--top"},null,-1)),oe=B(()=>o("div",{class:"bar bar--middle"},null,-1)),ne=B(()=>o("div",{class:"bar bar--bottom"},null,-1)),se=[te,oe,ne],le={key:1,class:"nav_list"},ae=["onClick"],ie={class:"mobileListUl"},re=["onClick"],ce=y({__name:"NavBar",setup(s){const i=Q(),_=q(),d=u(0),r=u(),v=u(),x=u(),p=u(!1),h=u(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),b=V([{id:1,title:"首页",router:"/home"},{id:2,title:"案例",router:"/study",children:[{title:"11",router:"/resize"},{title:"11",router:"/music"},{title:"11",router:"/tree"},{title:"11",router:"/rightClick"},{title:"11",router:"/fullPage"},{title:"11",router:"/lotteryDraw"},{title:"11",router:"/imagesChangeBg"},{title:"11",router:"/waterFullPage"},{title:"11",router:"/CardExpansion"},{title:"11",router:"/bilibiliMouseMove"}]},{id:4,title:"导航中心",router:"/navigation"},{id:6,title:"其他",router:"/other"}]);F(()=>_.fullPath,(t,n)=>{console.log("当前路由：",t),w()});const I=function(t,n,e){h.value>780?$(n):p.value=!1,d.value=n,i.push(t)},$=t=>{if(t==-1||!v.value)return;let n=v.value.getBoundingClientRect(),e=r.value[t].getBoundingClientRect(),c=n.left-e.left,m=x.value;m.style.left=Math.abs(c)+"px",m.style.width=e.width+"px"},z=()=>{p.value=!p.value},M=(t,n)=>{for(let e=0;e<t.length;e++){if(t[e].router===n)return e;if(t[e].children&&M(t[e].children,n)!==-1)return e}return-1};T(()=>{w(),window.addEventListener("resize",R)});const w=()=>{if(h.value>780){const t=M(b,_.path);d.value=t,$(t)}};function R(){h.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,w()}return U(()=>{window.removeEventListener("resize",R)}),(t,n)=>(l(),a(f,null,[o("div",Z,[o("nav",ee,[o("div",{class:"logo",onClick:n[0]||(n[0]=e=>O(i).push("/home"))},"Enjun blog"),h.value<=780?(l(),a("div",{key:0,class:"mobileBtn",onClick:z},[o("div",{class:k({toggle:!0,toggleActive:p.value})},se,2)])):(l(),a("div",le,[o("ul",{ref_key:"ulParent",ref:v},[o("div",{ref_key:"activeBgRef",ref:x,class:"active_bg"},null,512),(l(!0),a(f,null,E(b,(e,c)=>(l(),a("li",{key:e.id,class:k({active:d.value==c}),onClick:L(m=>I(e.router,c,t.$el),["stop"]),ref_for:!0,ref_key:"listItem",ref:r},P(e.title),11,ae))),128))],512),g(W)]))])]),h.value<=780?(l(),a("div",{key:0,class:k({navMobileList:!0,openMobileList:p.value})},[o("ul",ie,[(l(!0),a(f,null,E(b,(e,c)=>(l(),a("li",{key:e.id,onClick:L(m=>I(e.router,c,t.$el),["stop"])},P(e.title),9,re))),128)),g(W)])],2)):j("",!0)],64))}});const ue=C(ce,[["__scopeId","data-v-42ce4008"]]),de={class:"nav_wrapper"},_e={class:"content_wrapper"},ve=y({__name:"Root",setup(s){return(i,_)=>{const d=ue,r=G("router-view");return l(),a(f,null,[o("div",de,[g(d)]),o("div",_e,[g(r)])],64)}}});const ye=C(ve,[["__scopeId","data-v-d74c6fc4"]]);export{ye as default};
