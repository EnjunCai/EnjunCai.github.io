import{n as u}from"./noteList-ba4bba13.js";import{M as a}from"./md-editor-v3-160705a9.js";import{_ as d}from"./index-f0b76a94.js";import"./@vavt-12646459.js";import"./@codemirror-453f4d42.js";import"./@lezer-9e9c314f.js";import"./style-mod-ab9c37a6.js";import"./w3c-keyname-9fb136d3.js";import"./medium-zoom-45da89b9.js";import"./copy-to-clipboard-ca358197.js";import"./toggle-selection-93f4ad84.js";import"./markdown-it-dbab3289.js";import"./mdurl-d7fdfec3.js";import"./uc.micro-ebf5148f.js";import"./entities-52510f6e.js";import"./linkify-it-d33f3af1.js";import"./punycode.js-c41da3d1.js";import"./markdown-it-image-figures-6b4113de.js";import"./markdown-it-task-lists-1295841e.js";import"./markdown-it-xss-e9dc809c.js";import"./xss-a756a250.js";import"./cssfilter-7a290da9.js";import"./lru-cache-b2f61452.js";/* empty css                     */const c={class:"wrapper"},l=Vue.defineComponent({__name:"index",setup(_){const o=VueRouter.useRoute();let t=Vue.ref();const n="preview-"+o.params.id;return console.log(o.params.id),Vue.onMounted(()=>{var m;const i=o.params.id;let e=(m=u.find(r=>r.id===i))==null?void 0:m.detail;console.log(e);let p=e==null?void 0:e.reduce((r,s)=>r+s.raw,"");t.value=e,console.log(p),t.value=p}),(i,e)=>(Vue.openBlock(),Vue.createElementBlock("div",c,[Vue.createVNode(Vue.unref(a),{editorId:n,modelValue:Vue.unref(t)},null,8,["modelValue"])]))}});const F=d(l,[["__scopeId","data-v-cf610ad5"]]);export{F as default};
