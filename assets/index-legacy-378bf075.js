!function(){function e(e,n){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var l=0,a=function(){};return{s:a,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return o=e.done,e},e:function(e){s=!0,r=e},f:function(){try{o||null==i.return||i.return()}finally{if(s)throw r}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}System.register(["./StudyNavbar-legacy-b250c1c9.js","./index-legacy-1e22448b.js","./@vue-legacy-7c93e293.js","./vue-router-legacy-e17c72e1.js","./pinia-legacy-63ad2c5c.js","./element-plus-legacy-46a37266.js","./lodash-es-legacy-96fdef9f.js","./@vueuse-legacy-5ba7ad67.js","./@element-plus-legacy-5a2a70cb.js","./@popperjs-legacy-876caf52.js","./@ctrl-legacy-33dbca08.js","./dayjs-legacy-81c4e400.js","./async-validator-legacy-aa1fd2de.js","./memoize-one-legacy-599ef04d.js","./normalize-wheel-es-legacy-13d39621.js","./@floating-ui-legacy-942c6808.js"],(function(t,n){"use strict";var i,l,a,r,o,s,d,c,u,f,p,v,y,g,h,m,x,b,j,w,B,O=document.createElement("style");return O.textContent=".titleBox[data-v-4f50229b]{display:flex;align-items:center}.Box[data-v-4f50229b]{padding-left:20px;margin:5px 0}.Box .card[data-v-4f50229b]{background:#fff;padding:20px;border-radius:20px;cursor:pointer;display:flex;justify-content:space-between;flex:1}.Box .list[data-v-4f50229b]{display:grid;grid-template-rows:0fr;transition:all .3s;min-height:0}.Box .list>div[data-v-4f50229b]{overflow:hidden}.content .moduleBox[data-v-7e3ea8f0],.content .lessonBox[data-v-7e3ea8f0],.content .stepBox[data-v-7e3ea8f0]{padding-left:20px;margin:5px 0}.content .moduleBox .card[data-v-7e3ea8f0],.content .lessonBox .card[data-v-7e3ea8f0],.content .stepBox .card[data-v-7e3ea8f0]{background:#fff;padding:20px;border-radius:20px;cursor:pointer;display:flex;justify-content:space-between}.content .stepList[data-v-7e3ea8f0],.content .lessonList[data-v-7e3ea8f0]{display:grid;grid-template-rows:0fr;transition:all .3s;min-height:0}.content .stepList>div[data-v-7e3ea8f0],.content .lessonList>div[data-v-7e3ea8f0]{overflow:hidden}\n",document.head.appendChild(O),{setters:[function(e){i=e.S},function(e){l=e.a,a=e._},function(e){r=e.d,o=e.b,s=e.ah,d=e.o,c=e.c,u=e.a7,f=e.a,p=e.P,v=e.V,y=e.U,g=e.a2,h=e.S,m=e.T,x=e.J,b=e.R,j=e.F,w=e.M,B=e.O},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n={class:"titleBox"},O=["data-id","onClick"],_=a(r({__name:"mTree",props:{options:{default:function(){return[]}}},setup:function(t){var i=o(t.options);return function(t,a){var r=l,o=s("mTree",!0);return d(!0),c(j,null,u(i.value,(function(t,l){return d(),c("div",{key:t.id,class:"Box"},[f("div",n,[p(f("div",null,[y(r,{class:"#icon-xiangsu_xiaoya"})],512),[[v,!!t.isChecked]]),f("div",{class:"card","data-id":t.id,onClick:g((function(n){return function(t){if(t.isOpen)t.isOpen=!1;else{var n,l=e(i.value);try{for(l.s();!(n=l.n()).done;){var a,r=n.value;if(r.isOpen=!1,r.children&&null!==(a=r.children)&&void 0!==a&&a.length){var o,s=e(r.children);try{for(s.s();!(o=s.n()).done;)o.value.isOpen=!1}catch(d){s.e(d)}finally{s.f()}t.children&&(t.children[0].isOpen=!0)}}}catch(d){l.e(d)}finally{l.f()}t.isOpen=!t.isOpen}}(t)}),["stop"])},[h(m(t.title)+" ",1),t.children&&t.children.length?(d(),c("div",{key:0,style:x({transform:t.isOpen?"rotate(180deg)":"rotate(0deg)",transition:"all .3s"})},[y(r,{class:"#icon-quanzhankai"})],4)):b("",!0)],8,O)]),f("div",{class:"list",style:x({"grid-template-rows":t.isOpen?"1fr":"0fr"})},[f("div",null,[y(o,{options:t.children},null,8,["options"])])],4)])})),128)}}}),[["__scopeId","data-v-4f50229b"]]);t("default",a(r({__name:"index",setup:function(e){var t=o({classId:"xcv",moduleList:[{id:"1",title:"module1 ",children:[{id:"1-1",title:"lesson1 "},{id:"1-2",title:"lesson2 ",children:[{id:"1-2-1",title:"step 1"},{id:"1-2-2",title:"step 2"},{id:"1-2-3",title:"step 3"}]}]},{id:"2",title:"module1 ",children:[{id:"2-1",title:"lesson1 ",children:[{id:"2-2-1",title:"step 1",isChecked:!0},{id:"2-2-2",title:"step 2"},{id:"2-2-3",title:"step 3"}]},{id:"2-2",title:"lesson2 ",children:[{id:"2-2-1",title:"step 1"},{id:"2-2-2",title:"step 2"},{id:"2-2-3",title:"step 3"}]}]}]});return function(e,n){return d(),w(i,null,{main:B((function(){return[y(_,{options:t.value.moduleList},null,8,["options"])]})),_:1})}}}),[["__scopeId","data-v-7e3ea8f0"]]))}}}))}();
