import{_ as s}from"./index-59f3382f.js";import"./pinia-4ab095f9.js";import"vue";import"./@codemirror-453f4d42.js";import"./@lezer-9e9c314f.js";import"./style-mod-ab9c37a6.js";import"./w3c-keyname-9fb136d3.js";/* empty css                     */import"./@element-plus-ffca2e11.js";const l={class:"wrapper"},n=["onClick"],c={class:"card"},u={class:"title"},a={class:"card__content"},d={class:"card__title"},_={class:"card__description"},p=Vue.defineComponent({__name:"index",setup(V){const r=vueRouter.useRouter();vueRouter.useRoute();const i=Vue.reactive([{id:"list1",title:"树结构+手风琴",router:"/tree",text:"一个树结构的展开，主要展示的是高度不确定，从0到自适应高度让transition生效"},{id:"list2",title:"大屏响应式，使用scale实现，简化版本",router:"/resize"},{id:"list3",title:"音乐",router:"/music",text:"自定义音乐播放器（进行中）"},{id:"list4",title:"右键菜单组件",router:"/rightClick",text:"右键菜单组件"},{id:"list5",title:"抽奖",router:"/lotteryDraw",text:"几种抽奖模式"},{id:"list6",title:"移入到图片让背景颜色改变",router:"/imagesChangeBg",text:"用到color-thief这个组件库获取这个图片的所有主要颜色，然后取前几个进行渐变效果设置"},{id:"list7",title:"瀑布流",router:"/waterFullPage",text:"封装瀑布流"},{id:"list8",title:"卡片点击放大效果",router:"/CardExpansion",text:"卡片点击放大效果"},{id:"list10",title:"自定义视频组件(开发中)",router:"/video",text:"自定义视频组件"},{id:"list11",title:"markDown编辑器",router:"/markDown",text:"markDown编辑器(采用组件)"},{id:"list12",title:"three的一些案例",router:"/three",text:"three基础案例"}]);Vue.ref("study");const o=function(t){r.push(t)};return(t,m)=>(Vue.openBlock(),Vue.createElementBlock("div",l,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(i,e=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"card-wrapper",key:e.id,onClick:x=>o(e.router)},[Vue.createElementVNode("div",c,[Vue.createElementVNode("div",u,Vue.toDisplayString(e.title),1),Vue.createElementVNode("div",a,[Vue.createElementVNode("p",d,Vue.toDisplayString(e.title),1),Vue.createElementVNode("p",_,Vue.toDisplayString(e.text),1)])])],8,n))),128))]))}});const C=s(p,[["__scopeId","data-v-6e122b41"]]);export{C as default};
