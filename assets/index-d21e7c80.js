import{W as l}from"./index-68c8633c.js";import{_ as d}from"./index-59f3382f.js";import"./pinia-4ab095f9.js";import"vue";import"./@codemirror-453f4d42.js";import"./@lezer-9e9c314f.js";import"./style-mod-ab9c37a6.js";import"./w3c-keyname-9fb136d3.js";/* empty css                     */import"./@element-plus-ffca2e11.js";const m={class:"wrapper"},_={class:"waterfall-container"},p=Vue.defineComponent({__name:"index",setup(h){const t=Vue.ref(5),c=Vue.ref(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);Vue.watch(()=>c.value,e=>{e<1024?t.value=2:e<768?t.value=1:t.value=5});const u=(e,o)=>new Promise(i=>{fetch(`/api/v1/picture/public?limit=${o}&tags=%E7%B2%BE%E7%81%B5%E5%AE%9D%E5%8F%AF%E6%A2%A6&from=pc_web&sort=new&offset=${--e*o}`).then(async r=>{const a=(await r.json()).data.rows.map(n=>({id:n.picture_id,url:n.original_url,height:n.height,width:n.width}));i(a)})});function s(){c.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}return Vue.onMounted(()=>{window.addEventListener("resize",s)}),Vue.onUnmounted(()=>{window.removeEventListener("resize",s)}),(e,o)=>{const i=Vue.resolveComponent("el-image");return Vue.openBlock(),Vue.createElementBlock("div",m,[Vue.createElementVNode("div",_,[Vue.createVNode(l,{gap:20,column:t.value,request:u,"page-size":30},{item:Vue.withCtx(({item:r})=>[Vue.createVNode(i,{src:r.url,alt:"图片",class:"image",lazy:""},null,8,["src"])]),_:1},8,["column"])])])}}});const z=d(p,[["__scopeId","data-v-e3bcb841"]]);export{z as default};
