import{d as y,b as c,Z as k,i as w,o as _,c as l,a as s,F as b,a7 as x,I as R,a2 as C,T as N,ax as $,ay as S,U as g,ah as L}from"./@vue-ee9ac256.js";import{u as M,b as P}from"./vue-router-0778c5e0.js";import{_ as B}from"./index-d6ecb64f.js";import"./pinia-968138a6.js";import"./element-plus-d4753d18.js";import"./lodash-es-2c2c875c.js";import"./@vueuse-3546ab4e.js";import"./@element-plus-06231f2d.js";import"./@popperjs-c75af06c.js";import"./@ctrl-4c9502e5.js";import"./dayjs-d2465c63.js";import"./async-validator-bf8f818c.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-da39869e.js";const E=a=>($("data-v-28ca7756"),a=a(),S(),a),F={class:"global_wrapper"},V={class:"global_nav"},j=E(()=>s("div",{class:"logo"},"Enjun blog",-1)),z={class:"nav_list"},D=["onClick"],T=y({__name:"NavBar",setup(a){const u=M(),d=P(),n=c(0),r=c(),v=c(),m=c(),f=k([{id:1,title:"首页",router:"/home"},{id:3,title:"案例",router:"/study"},{id:4,title:"学习",router:"/study"},{id:2,title:"其他",router:"/other"}]),I=function(t,e,o){h(e),n.value=e,u.push(t)},h=t=>{let e=v.value.getBoundingClientRect(),o=r.value[t].getBoundingClientRect();console.log(e);let i=e.left-o.left,p=m.value;p.style.left=Math.abs(i)+"px",p.style.width=o.width+"px"};return w(()=>{const t=f.findIndex(e=>e.router===d.path);n.value=t,h(t)}),(t,e)=>(_(),l("div",F,[s("nav",V,[j,s("div",z,[s("ul",{ref_key:"ulParent",ref:v},[s("div",{ref_key:"activeBgRef",ref:m,class:"active_bg"},null,512),(_(!0),l(b,null,x(f,(o,i)=>(_(),l("li",{key:o.id,class:R({active:n.value==i}),onClick:C(p=>I(o.router,i,t.$el),["stop"]),ref_for:!0,ref_key:"listItem",ref:r},N(o.title),11,D))),128))],512)])])]))}});const U=B(T,[["__scopeId","data-v-28ca7756"]]),Z={class:"nav_wrapper"},q={class:"content_wrapper"},A=y({__name:"Root",setup(a){return(u,d)=>{const n=U,r=L("router-view");return _(),l(b,null,[s("div",Z,[g(n)]),s("div",q,[g(r)])],64)}}});const rt=B(A,[["__scopeId","data-v-9810f3b9"]]);export{rt as default};
