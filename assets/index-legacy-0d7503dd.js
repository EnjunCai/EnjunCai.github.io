System.register(["./element-plus-legacy-618ff473.js","./three-legacy-abe3679e.js","./@vue-legacy-f395a227.js","./index-legacy-86fa469c.js","./@vueuse-legacy-542b347c.js","./@element-plus-legacy-9b7b0435.js","./lodash-es-legacy-c5df5acc.js","./@popperjs-legacy-876caf52.js","./pinia-legacy-6794422a.js","./@codemirror-legacy-46ff428d.js","./@lezer-legacy-052788e6.js","./style-mod-legacy-6423bec3.js","./w3c-keyname-legacy-f5fec46d.js","./vue-router-legacy-a8e91f8f.js"],(function(e,n){"use strict";var l,a,t,r,u,o,c,d,i,s,f,v,p,w,y,m,h,g,j,S,_,x,b,C,k,z,T,I=document.createElement("style");return I.textContent=".three-wrapper[data-v-c289a9ba]{padding:40px}\n",document.head.appendChild(I),{setters:[function(e){l=e.d,a=e.e},function(e){t=e.S,r=e.P,u=e.W,o=e.C,c=e.A,d=e.a,i=e.M,s=e.b,f=e.B,v=e.c,p=e.D,w=e.d},function(e){y=e.d,m=e.r,h=e.f,g=e.o,j=e.c,S=e.m,_=e.L,x=e.J,b=e.I,C=e.K,k=e.G,z=e.a5},function(e){T=e._},null,null,null,null,null,null,null,null,null,null],execute:function(){var n=y({__name:"index",setup:function(e){var n=m(),l=new t,a=new r(45,1.25,.1,1e3);a.position.set(-30,40,30),a.lookAt(l.position);var p=new u;p.setClearColor(new o("#ccc")),p.setSize(1e3,800);var w=new c(20);l.add(w);var y=new d(10,10),S=new i({color:"#fcfcfc"}),_=new s(y,S);_.rotation.x=-.4*Math.PI,l.add(_);var x=new f(4,4,4),b=new i({color:"#fcfcfc"}),C=new s(x,b);C.position.z=20,l.add(C);var k=new v(4),z=new i({color:"#fcfcfc",wireframe:!0}),T=new s(k,z);return T.position.x=20,l.add(T),h((function(){var e;null===(e=n.value)||void 0===e||e.appendChild(p.domElement),p.render(l,a)})),function(e,l){return g(),j("div",{ref_key:"containerRef",ref:n},null,512)}}}),I=y({__name:"index",setup:function(e){var n=m(),l=new t,a=new r(45,1.25,.1,1e3);a.position.set(-30,40,30),a.lookAt(l.position);var d=new u;d.setClearColor(new o("#ccc")),d.setSize(1e3,800);var i=new c(20);l.add(i);var y=new p(16777215,1);y.position.set(-10,10,-2),y.castShadow=!0,l.add(y);var S=new f(4,4,4),_=new w({color:"#fcfcfc"}),x=new s(S,_);x.castShadow=!0,x.position.set(2,2,2),l.add(x);var b=new v(4),C=new w({color:"#fcfcfc"}),k=new s(b,C);return k.position.set(12,2,2),l.add(k),h((function(){var e;null===(e=n.value)||void 0===e||e.appendChild(d.domElement),d.render(l,a)})),function(e,l){return g(),j("div",{ref_key:"containerRef",ref:n},null,512)}}}),A={class:"three-wrapper"};e("default",T(y({__name:"index",setup:function(e){var t=m("ThreeStudy1"),r=[{value:"ThreeStudy1",label:"案例1-圆球，立方体，平面"},{value:"ThreeStudy2",label:"案例2-光照以及材质"}],u=S((function(){switch(t.value){case"ThreeStudy1":return n;case"ThreeStudy2":return I;default:return null}}));return function(e,n){var o=l,c=a;return g(),j("div",A,[_(c,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return t.value=e}),placeholder:"Select",size:"large",style:{"margin-bottom":"20px",width:"300px"}},{default:x((function(){return[(g(),j(k,null,z(r,(function(e){return _(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),64))]})),_:1},8,["modelValue"]),(g(),b(C(u.value)))])}}}),[["__scopeId","data-v-c289a9ba"]]))}}}));
