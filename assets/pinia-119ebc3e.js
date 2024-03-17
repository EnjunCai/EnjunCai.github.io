import{J as F,r as H,I as V,m as M,w as Q,G as U,n as k,X as D,Y as $,Z as A,g as T,b as tt,D as et,H as st,k as nt}from"./@vue-f3490fa2.js";var ot=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let J;const E=t=>J=t,B=Symbol();function I(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var C;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(C||(C={}));function ht(){const t=F(!0),o=t.run(()=>H({}));let s=[],e=[];const r=V({install(u){E(r),r._a=u,u.provide(B,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ot?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const N=()=>{};function O(t,o,s,e=N){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&T()&&tt(r),r}function P(t,...o){t.slice().forEach(s=>{s(...o)})}const ct=t=>t();function R(t,o){t instanceof Map&&o instanceof Map&&o.forEach((s,e)=>t.set(e,s)),t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];I(r)&&I(e)&&t.hasOwnProperty(s)&&!k(e)&&!D(e)?t[s]=R(r,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!I(t)||!t.hasOwnProperty(rt)}const{assign:v}=Object;function at(t){return!!(k(t)&&t.effect)}function ft(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let g;function b(){a||(s.state.value[t]=r?r():{});const y=st(s.state.value[t]);return v(y,u,Object.keys(f||{}).reduce((d,m)=>(d[m]=V(nt(()=>{E(s);const _=s._s.get(t);return f[m].call(_,_)})),d),{}))}return g=X(t,b,o,s,e,!0),g}function X(t,o,s={},e,r,u){let f;const a=v({actions:{}},s),g={deep:!0};let b,y,d=[],m=[],_;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),H({});let L;function W(c){let n;b=y=!1,typeof c=="function"?(c(e.state.value[t]),n={type:C.patchFunction,storeId:t,events:_}):(R(e.state.value[t],c),n={type:C.patchObject,payload:c,storeId:t,events:_});const h=L=Symbol();et().then(()=>{L===h&&(b=!0)}),y=!0,P(d,n,e.state.value[t])}const Y=u?function(){const{state:n}=s,h=n?n():{};this.$patch(S=>{v(S,h)})}:N;function Z(){f.stop(),d=[],m=[],e._s.delete(t)}function q(c,n){return function(){E(e);const h=Array.from(arguments),S=[],w=[];function G(i){S.push(i)}function K(i){w.push(i)}P(m,{args:h,name:c,store:l,after:G,onError:K});let x;try{x=n.apply(this&&this.$id===t?this:l,h)}catch(i){throw P(w,i),i}return x instanceof Promise?x.then(i=>(P(S,i),i)).catch(i=>(P(w,i),Promise.reject(i))):(P(S,x),x)}}const z={_p:e,$id:t,$onAction:O.bind(null,m),$patch:W,$reset:Y,$subscribe(c,n={}){const h=O(d,c,n.detached,()=>S()),S=f.run(()=>Q(()=>e.state.value[t],w=>{(n.flush==="sync"?y:b)&&c({storeId:t,type:C.direct,events:_},w)},v({},g,n)));return h},$dispose:Z},l=U(z);e._s.set(t,l);const p=(e._a&&e._a.runWithContext||ct)(()=>e._e.run(()=>(f=F()).run(o)));for(const c in p){const n=p[c];if(k(n)&&!at(n)||D(n))u||(j&&ut(n)&&(k(n)?n.value=j[c]:R(n,j[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const h=q(c,n);p[c]=h,a.actions[c]=n}}return v(l,p),v($(l),p),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{W(n=>{v(n,c)})}}),e._p.forEach(c=>{v(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,y=!0,l}function bt(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,g){const b=A();return a=a||(b?M(B,null):null),a&&E(a),a=J,a._s.has(e)||(u?X(e,o,r,a):ft(e,r,a)),a._s.get(e)}return f.$id=e,f}export{ht as c,bt as d};
