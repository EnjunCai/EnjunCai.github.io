!function(){function e(e,n){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var i=0,l=function(){};return{s:l,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){s=!0,r=e},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw r}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}System.register(["./StudyNavbar-legacy-f9e2f75c.js","./index-legacy-86fa469c.js","./@vue-legacy-f395a227.js","./vue-router-legacy-a8e91f8f.js","./pinia-legacy-6794422a.js","./@codemirror-legacy-46ff428d.js","./@lezer-legacy-052788e6.js","./style-mod-legacy-6423bec3.js","./w3c-keyname-legacy-f5fec46d.js","./element-plus-legacy-618ff473.js","./@vueuse-legacy-542b347c.js","./@element-plus-legacy-9b7b0435.js","./lodash-es-legacy-c5df5acc.js","./@popperjs-legacy-876caf52.js"],(function(t,n){"use strict";var a,i,l,r,o,s,d,c,u,p,f,v,y,g,m,h,x,b,j,w,B,O=document.createElement("style");return O.textContent=".titleBox[data-v-376dc34b]{display:flex;align-items:center}.Box[data-v-376dc34b]{padding-left:20px;margin:12px 0}.Box .card[data-v-376dc34b]{box-shadow:0 4px 10px rgba(109,141,173,.25);background:#fff;padding:20px;border-radius:20px;cursor:pointer;display:flex;justify-content:space-between;flex:1}.Box .list[data-v-376dc34b]{display:grid;grid-template-rows:0fr;transition:all .3s;min-height:0}.Box .list>div[data-v-376dc34b]{overflow:hidden}.content .moduleBox[data-v-6825aa3a],.content .lessonBox[data-v-6825aa3a],.content .stepBox[data-v-6825aa3a]{padding-left:20px;margin:0 5px}.content .moduleBox .card[data-v-6825aa3a],.content .lessonBox .card[data-v-6825aa3a],.content .stepBox .card[data-v-6825aa3a]{background:#fff;padding:20px;border-radius:20px;cursor:pointer;display:flex;justify-content:space-between}.content .stepList[data-v-6825aa3a],.content .lessonList[data-v-6825aa3a]{display:grid;grid-template-rows:0fr;transition:all .3s;min-height:0}.content .stepList>div[data-v-6825aa3a],.content .lessonList>div[data-v-6825aa3a]{overflow:hidden}\n",document.head.appendChild(O),{setters:[function(e){a=e.S},function(e){i=e.a,l=e._},function(e){r=e.d,o=e.r,s=e.a9,d=e.o,c=e.c,u=e.a5,p=e.a,f=e.Q,v=e.R,y=e.L,g=e.M,m=e.a1,h=e.O,x=e.P,b=e.F,j=e.G,w=e.I,B=e.J},null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n={class:"titleBox"},O=["data-id","onClick"],_=l(r({__name:"mTree",props:{options:{default:function(){return[]}}},setup:function(t){var a=o(t.options);return function(t,l){var r=i,o=s("mTree",!0);return d(!0),c(j,null,u(a.value,(function(t,i){return d(),c("div",{key:t.id,class:"Box"},[p("div",n,[f(p("div",null,[y(r,{class:"#icon-xiangsu_xiaoya"})],512),[[v,!!t.isChecked]]),p("div",{class:"card","data-id":t.id,onClick:g((function(n){return function(t){if(t.isOpen)t.isOpen=!1;else{var n,i=e(a.value);try{for(i.s();!(n=i.n()).done;){var l,r=n.value;if(r.isOpen=!1,r.children&&null!==(l=r.children)&&void 0!==l&&l.length){var o,s=e(r.children);try{for(s.s();!(o=s.n()).done;)o.value.isOpen=!1}catch(d){s.e(d)}finally{s.f()}t.children&&(t.children[0].isOpen=!0)}}}catch(d){i.e(d)}finally{i.f()}t.isOpen=!t.isOpen}}(t)}),["stop"])},[m(h(t.title)+" ",1),t.children&&t.children.length?(d(),c("div",{key:0,style:x({transform:t.isOpen?"rotate(180deg)":"rotate(0deg)",transition:"all .3s"})},[y(r,{class:"#icon-quanzhankai"})],4)):b("",!0)],8,O)]),p("div",{class:"list",style:x({"grid-template-rows":t.isOpen?"1fr":"0fr"})},[p("div",null,[y(o,{options:t.children},null,8,["options"])])],4)])})),128)}}}),[["__scopeId","data-v-376dc34b"]]);t("default",l(r({__name:"index",setup:function(e){var t=o({classId:"xcv",moduleList:[{id:"1",title:"module1 ",children:[{id:"1-1",title:"lesson1 "},{id:"1-2",title:"lesson2 ",children:[{id:"1-2-1",title:"step 1"},{id:"1-2-2",title:"step 2"},{id:"1-2-3",title:"step 3"},{id:"1-2-4",title:"step 4"},{id:"1-2-5",title:"step 5"},{id:"1-2-6",title:"step 6"}]}]},{id:"2",title:"module1 ",children:[{id:"2-1",title:"lesson1 ",children:[{id:"2-2-1",title:"step 1我是默认展开",isChecked:!0},{id:"2-2-2",title:"step 2"},{id:"2-2-3",title:"step 3"}]},{id:"2-2",title:"lesson2 ",children:[{id:"2-2-1",title:"step 1"},{id:"2-2-2",title:"step 2"},{id:"2-2-3",title:"step 3"}]}]}]});return function(e,n){return d(),w(a,null,{main:B((function(){return[y(_,{options:t.value.moduleList},null,8,["options"])]})),_:1})}}}),[["__scopeId","data-v-6825aa3a"]]))}}}))}();
