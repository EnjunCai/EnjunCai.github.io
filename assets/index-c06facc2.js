import{u as _,b as d}from"./vue-router-d1104b17.js";import{d as l,G as p,r as u,c as s,Q as m,S as x,o as i,a as e,C as r}from"./@vue-f3490fa2.js";import{_ as h}from"./index-00ffdc94.js";import"./pinia-119ebc3e.js";import"./element-plus-00c18570.js";import"./@vueuse-e676670b.js";import"./lodash-es-f44eecda.js";import"./@element-plus-5f686192.js";const v={class:"wrapper"},f=["onClick"],g={class:"card"},k={class:"title"},C={class:"card__content"},y={class:"card__title"},B={class:"card__description"},w=l({__name:"index",setup(D){const a=_();d();const c=p([{id:"list1",title:"树结构+手风琴",router:"/tree",text:"一个树结构的展开，主要展示的是高度不确定，从0到自适应高度让transition生效"},{id:"list2",title:"大屏响应式，使用scale实现，简化版本",router:"/resize"},{id:"list3",title:"音乐",router:"/music",text:"自定义音乐播放器（进行中）"},{id:"list4",title:"右键菜单组件",router:"/rightClick",text:"右键菜单组件"},{id:"list5",title:"抽奖",router:"/lotteryDraw",text:"几种抽奖模式"},{id:"list6",title:"移入到图片让背景颜色改变",router:"/imagesChangeBg",text:"用到color-thief这个组件库获取这个图片的所有主要颜色，然后取前几个进行渐变效果设置"}]);u("study");const n=function(o){a.push(o)};return(o,R)=>(i(),s("div",v,[(i(!0),s(m,null,x(c,t=>(i(),s("div",{class:"card-wrapper",key:t.id,onClick:S=>n(t.router)},[e("div",g,[e("div",k,r(t.title),1),e("div",C,[e("p",y,r(t.title),1),e("p",B,r(t.text),1)])])],8,f))),128))]))}});const Q=h(w,[["__scopeId","data-v-c32da2a8"]]);export{Q as default};
