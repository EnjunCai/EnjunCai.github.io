import{E as u}from"./element-plus-aeaee0da.js";import{W as _}from"./index-38f5b4fc.js";import{d as p,r as c,w,t as h,x as f,c as v,a as E,M as l,O as g,o as x}from"./@vue-43b13839.js";import{_ as W}from"./index-6d5046e4.js";import"./@vueuse-c25a07e1.js";import"./@element-plus-f4c74c42.js";import"./lodash-es-f44eecda.js";import"./pinia-4f00b7fe.js";import"./vue-router-ff7bd7e6.js";const b={class:"wrapper"},y={class:"waterfall-container"},B=p({__name:"index",setup(z){const t=c(5),a=c(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);w(()=>a.value,e=>{e<1024?t.value=2:e<768?t.value=1:t.value=5});const d=(e,o)=>new Promise(i=>{fetch(`https://www.vilipix.com/api/v1/picture/public?limit=${o}&tags=%E7%B2%BE%E7%81%B5%E5%AE%9D%E5%8F%AF%E6%A2%A6&from=pc_web&sort=new&offset=${--e*o}`).then(async s=>{const m=(await s.json()).data.rows.map(n=>({id:n.picture_id,url:n.original_url,height:n.height,width:n.width}));i(m)})});function r(){a.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}return h(()=>{window.addEventListener("resize",r)}),f(()=>{window.removeEventListener("resize",r)}),(e,o)=>{const i=u;return x(),v("div",b,[E("div",y,[l(_,{gap:20,column:t.value,request:d,"page-size":30},{item:g(({item:s})=>[l(i,{src:s.url,alt:"图片",class:"image",lazy:""},null,8,["src"])]),_:1},8,["column"])])])}}});const V=W(B,[["__scopeId","data-v-013bab79"]]);export{V as default};
