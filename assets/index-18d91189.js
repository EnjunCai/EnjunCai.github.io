import{B as x}from"./Back-265ac57e.js";import{i as y}from"./echarts-be659289.js";import{d as l,r as S,f as p,o as r,c,ak as f,al as w,a as e,S as $,m as k,C as g,z as I,P as z,u as B,x as C,L as t,J as E}from"./@vue-7d7101e0.js";import{_ as h}from"./index-f032f291.js";import{d as M}from"./lodash-925c7ea3.js";import{u as N}from"./vue-router-c0c516d0.js";import"./tslib-54e39b60.js";import"./zrender-dc562378.js";import"./pinia-fe9b4ad3.js";import"./@codemirror-453f4d42.js";import"./@lezer-9e9c314f.js";import"./style-mod-ab9c37a6.js";import"./w3c-keyname-9fb136d3.js";import"./element-plus-78da4f18.js";import"./@vueuse-1e9e5a18.js";import"./@element-plus-c6e9947a.js";import"./lodash-es-195107c1.js";import"./@popperjs-c75af06c.js";import"./copy-to-clipboard-ca358197.js";import"./toggle-selection-93f4ad84.js";const d=l({__name:"BarChart",setup(s){const a=S();return p(()=>{var n=y(a.value);window.addEventListener("resize",()=>{n.resize()});var o={tooltip:{},legend:{data:["销量"],top:"20",textStyle:{color:"#fff"}},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],axisLabel:{color:"#fff"}},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]};n.setOption(o)}),(n,o)=>(r(),c("div",{ref_key:"main",ref:a,style:{width:"100%",height:"100%"}},null,512))}});const X={},_=s=>(f("data-v-17bda324"),s=s(),w(),s),Y={width:"540",height:"310",class:"dv-border-svg-container"},j=_(()=>e("path",{"data-v-461bd178":"",fill:"transparent",stroke:"#6586ec",d:`\r
            M 5 20 L 5 10 L 12 3  L 60 3 L 68 10\r
            L 520 10 L 535 25\r
            L 535 305 L 20 305\r
            L 5 290 L 5 20\r
        `},null,-1)),A=_(()=>e("path",{"data-v-461bd178":"",fill:"transparent","stroke-width":"3","stroke-linecap":"round","stroke-dasharray":"10, 5",stroke:"#6586ec",d:"M 16 9 L 61 9"},null,-1)),O=_(()=>e("path",{"data-v-461bd178":"",fill:"transparent",stroke:"{mergedColor[1]}",d:"M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"},null,-1)),V=_(()=>e("path",{"data-v-461bd178":"",fill:"transparent",stroke:"#2cf7fe",d:"M 535 280 L 535 305 L 510 305"},null,-1)),W=[j,A,O,V];function H(s,a){return r(),c("svg",Y,W)}const i=h(X,[["render",H],["__scopeId","data-v-17bda324"]]),J=l({__name:"Screen",props:{height:{type:Number,default:1080},width:{type:Number,default:1920}},setup(s){const{height:a,width:n}=s;console.log(a,n);let o=$({width:1920,height:1080,scaleX:null,scaleY:null}),L=k(()=>({transform:`scale(${o.scaleX},${o.scaleY}) translate(-50%, -50%)`,WebkitTransform:`scale(${o.scaleX},${o.scaleY}) translate(-50%, -50%)`,width:n+"px",height:a+"px"}));const m=()=>{o.scaleX=window.innerWidth/n,o.scaleY=window.innerHeight/a},u=M(()=>{m()},500);return p(()=>{m(),window.addEventListener("resize",u)}),g(()=>{window.addEventListener("resize",u)}),(v,de)=>(r(),c("div",{style:z(B(L)),class:"scale-box"},[I(v.$slots,"default",{},void 0,!0)],4))}});const P=h(J,[["__scopeId","data-v-ce21244b"]]),b=s=>(f("data-v-e557ce82"),s=s(),w(),s),R={class:"resize_wrapper"},T={class:"back_class"},U={style:{height:"100vh",width:"100vw",overflow:"hidden"}},q={class:"content_wrapper"},D=b(()=>e("div",{class:"header"},"可视化大屏",-1)),F={class:"content"},G={class:"left"},K={class:"top"},Q={class:"middle"},Z={class:"bottom"},ee=b(()=>e("div",{class:"center"},null,-1)),te={class:"right"},se={class:"top"},oe={class:"middle"},ae={class:"bottom"},ne=l({__name:"index",setup(s){return N(),C(()=>{document.documentElement.style.overflow="hidden",console.log()}),p(()=>{}),g(()=>{document.documentElement.style.overflow=""}),(a,n)=>(r(),c("div",R,[e("div",T,[t(x)]),e("div",U,[t(P,{width:1920,height:1080},{default:E(()=>[e("div",q,[D,e("div",F,[e("div",G,[e("div",K,[t(i),t(d)]),e("div",Q,[t(i),t(d)]),e("div",Z,[t(i),t(d)])]),ee,e("div",te,[e("div",se,[t(i),t(d)]),e("div",oe,[t(i),t(d)]),e("div",ae,[t(i),t(d)])])])])]),_:1})])]))}});const Ie=h(ne,[["__scopeId","data-v-e557ce82"]]);export{Ie as default};
