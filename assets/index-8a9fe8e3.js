import{S as v,P as x,W as y,C,A as b,a as M,M as w,b as i,B as k,c as B,D as S,d as h}from"./three-6a8ba1e2.js";import{_ as G}from"./index-f0b76a94.js";import"./@codemirror-453f4d42.js";import"./@lezer-9e9c314f.js";import"./style-mod-ab9c37a6.js";import"./w3c-keyname-9fb136d3.js";/* empty css                     */const g=Vue.defineComponent({__name:"index",setup(V){const t=Vue.ref(),e=new v,c=new x(45,1e3/800,.1,1e3);c.position.set(-30,40,30),c.lookAt(e.position);const n=new y;n.setClearColor(new C("#ccc")),n.setSize(1e3,800);const a=new b(20);e.add(a);const r=new M(10,10),s=new w({color:"#fcfcfc"}),o=new i(r,s);o.rotation.x=-.4*Math.PI,e.add(o);const l=new k(4,4,4),m=new w({color:"#fcfcfc"}),d=new i(l,m);d.position.z=20,e.add(d);const p=new B(4),u=new w({color:"#fcfcfc",wireframe:!0}),_=new i(p,u);return _.position.x=20,e.add(_),Vue.onMounted(()=>{var f;(f=t.value)==null||f.appendChild(n.domElement),n.render(e,c)}),(f,z)=>(Vue.openBlock(),Vue.createElementBlock("div",{ref_key:"containerRef",ref:t},null,512))}}),E=Vue.defineComponent({__name:"index",setup(V){const t=Vue.ref(),e=new v,c=new x(45,1e3/800,.1,1e3);c.position.set(-30,40,30),c.lookAt(e.position);const n=new y;n.setClearColor(new C("#ccc")),n.setSize(1e3,800);const a=new b(20);e.add(a);const r=new S(16777215,1);r.position.set(-10,10,-2),r.castShadow=!0,e.add(r);const s=new k(4,4,4),o=new h({color:"#fcfcfc"}),l=new i(s,o);l.castShadow=!0,l.position.set(2,2,2),e.add(l);const m=new B(4),d=new h({color:"#fcfcfc"}),p=new i(m,d);return p.position.set(12,2,2),e.add(p),Vue.onMounted(()=>{var u;(u=t.value)==null||u.appendChild(n.domElement),n.render(e,c)}),(u,_)=>(Vue.openBlock(),Vue.createElementBlock("div",{ref_key:"containerRef",ref:t},null,512))}}),R={class:"three-wrapper"},T=Vue.defineComponent({__name:"index",setup(V){const t=Vue.ref("ThreeStudy1"),e=[{value:"ThreeStudy1",label:"案例1-圆球，立方体，平面"},{value:"ThreeStudy2",label:"案例2-光照以及材质"}],c=Vue.computed(()=>{switch(t.value){case"ThreeStudy1":return g;case"ThreeStudy2":return E;default:return null}});return(n,a)=>{const r=Vue.resolveComponent("el-option"),s=Vue.resolveComponent("el-select");return Vue.openBlock(),Vue.createElementBlock("div",R,[Vue.createVNode(s,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=o=>t.value=o),placeholder:"Select",size:"large",style:{"margin-bottom":"20px",width:"300px"}},{default:Vue.withCtx(()=>[(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e,o=>Vue.createVNode(r,{key:o.value,label:o.label,value:o.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(c.value)))])}}});const $=G(T,[["__scopeId","data-v-c289a9ba"]]);export{$ as default};
