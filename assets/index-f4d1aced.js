import{E as u}from"./element-plus-78da4f18.js";import{W as p}from"./index-f697a61f.js";import{d as _,r as c,w as h,f as w,C as f,c as v,a as E,L as l,J as g,o as W}from"./@vue-7d7101e0.js";import{_ as b}from"./index-17eaff15.js";import"./@vueuse-1e9e5a18.js";import"./@element-plus-c6e9947a.js";import"./lodash-es-195107c1.js";import"./@popperjs-c75af06c.js";import"./pinia-fe9b4ad3.js";import"./@codemirror-453f4d42.js";import"./@lezer-9e9c314f.js";import"./style-mod-ab9c37a6.js";import"./w3c-keyname-9fb136d3.js";import"./vue-router-c0c516d0.js";const x={class:"wrapper"},y={class:"waterfall-container"},B=_({__name:"index",setup(z){const t=c(5),r=c(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);h(()=>r.value,e=>{e<1024?t.value=2:e<768?t.value=1:t.value=5});const d=(e,n)=>new Promise(i=>{fetch(`/api/v1/picture/public?limit=${n}&tags=%E7%B2%BE%E7%81%B5%E5%AE%9D%E5%8F%AF%E6%A2%A6&from=pc_web&sort=new&offset=${--e*n}`).then(async s=>{const m=(await s.json()).data.rows.map(o=>({id:o.picture_id,url:o.original_url,height:o.height,width:o.width}));i(m)})});function a(){r.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}return w(()=>{window.addEventListener("resize",a)}),f(()=>{window.removeEventListener("resize",a)}),(e,n)=>{const i=u;return W(),v("div",x,[E("div",y,[l(p,{gap:20,column:t.value,request:d,"page-size":30},{item:g(({item:s})=>[l(i,{src:s.url,alt:"图片",class:"image",lazy:""},null,8,["src"])]),_:1},8,["column"])])])}}});const R=b(B,[["__scopeId","data-v-e3bcb841"]]);export{R as default};
