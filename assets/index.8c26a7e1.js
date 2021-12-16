import{r as h,o as u,c as _,a as t,w as d,b as L,d as a,t as $,u as l,e as P,f as j,g as O,h as A,F as m,i as g,j as I,S as N,k as B,n as R,l as V,m as D,p as F}from"./vendor.dd7f5744.js";const H=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerpolicy&&(c.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?c.credentials="include":e.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(e){if(e.ep)return;e.ep=!0;const c=n(e);fetch(e.href,c)}};H();var b=(s,r)=>{const n=s.__vccOpts||s;for(const[o,e]of r)n[o]=e;return n};const T={class:"pt-2 pb-1.5"},W={class:"mt-1.5 text-xs"},q={props:{href:String,text:String},setup(s){return(r,n)=>{const o=h("router-link");return u(),_("div",T,[t(o,{to:s.href,class:"text-red-200"},{default:d(()=>[L(r.$slots,"default",{},void 0,!0),a("p",W,$(s.text),1)]),_:3},8,["to"])])}}};var f=b(q,[["__scopeId","data-v-456a3790"]]);const z={class:"md:hidden fixed bottom-0 px-3 pb-3 w-full"},K={class:"flex justify-evenly bg-red-900 rounded"},G={setup(s){return(r,n)=>(u(),_("div",z,[a("div",K,[t(f,{href:"/",text:"Home"},{default:d(()=>[t(l(P),{class:"mx-auto w-6 h-6"})]),_:1}),t(f,{href:"/catalogue",text:"Catalogue"},{default:d(()=>[t(l(j),{class:"mx-auto w-6 h-6"})]),_:1}),t(f,{href:"/cart",text:"Cart"},{default:d(()=>[t(l(O),{class:"mx-auto w-6 h-6"})]),_:1}),t(f,{href:"/contact",text:"Contact"},{default:d(()=>[t(l(A),{class:"mx-auto w-6 h-6"})]),_:1})])]))}};var w="/assets/logo.4ebe3a6c.svg";const J={class:"mx-6"},M={class:"text-lg text-red-800"},p={props:{href:String,text:String},setup(s){return(r,n)=>{const o=h("router-link");return u(),_("div",J,[t(o,{to:s.href},{default:d(()=>[a("span",M,$(s.text),1)]),_:1},8,["to"])])}}},Q=a("div",{class:"md:hidden w-full"},[a("div",{class:"flex justify-center py-3 mx-auto"},[a("img",{class:"w-24",src:w,alt:"hana floristry logo"})])],-1),U={class:"hidden md:block w-full"},X={class:"container flex justify-between items-center px-6 py-9 mx-auto"},Y=a("div",null,[a("img",{class:"w-28",src:w,alt:"hana floristry logo"})],-1),Z={class:"flex justify-between"},ee={setup(s){return(r,n)=>(u(),_(m,null,[Q,a("div",U,[a("div",X,[Y,a("div",Z,[t(p,{href:"/",text:"Home"}),t(p,{href:"/catalogue",text:"Catalogue"}),t(p,{href:"/contact",text:"Contact"})]),a("div",null,[t(p,{href:"/cart",text:"Cart"})])])])],64))}};var te="/assets/wa-logo.a649f67c.svg";const se={},re={class:"hidden md:block fixed bottom-6 right-6"},oe=a("img",{class:"w-12",src:te},null,-1),ne=[oe];function ae(s,r){return u(),_("div",re,ne)}var ce=b(se,[["render",ae]]);const le={setup(s){return(r,n)=>{const o=h("router-view");return u(),_(m,null,[t(ee),t(o),t(G),t(ce)],64)}}},ie="modulepreload",k={},ue="/",x=function(r,n){return!n||n.length===0?r():Promise.all(n.map(o=>{if(o=`${ue}${o}`,o in k)return;k[o]=!0;const e=o.endsWith(".css"),c=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":ie,e||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),e)return new Promise((S,E)=>{i.addEventListener("load",S),i.addEventListener("error",E)})})).then(()=>r())},_e=["src"],C={props:{images:Array,imgClass:Array},setup(s){const r={type:"loop",breakpoints:{639:{arrows:!1}}};return(n,o)=>(u(),g(l(N),{options:r},{default:d(()=>[(u(!0),_(m,null,I(s.images,e=>(u(),g(l(B),{key:e},{default:d(()=>[a("img",{class:R(s.imgClass),src:e},null,10,_e)]),_:2},1024))),128))]),_:1}))}};var v="/assets/placeholder-5-2.b1ed4025.png",y="/assets/placeholder-1-1.56c51787.png";const de={setup(s){return(r,n)=>(u(),_(m,null,[t(C,{class:"hidden md:block",images:[l(v),l(v),l(v)],"img-class":["mx-auto w-full"]},null,8,["images"]),t(C,{class:"md:hidden",images:[l(y),l(y),l(y)],"img-class":["mx-auto w-full"]},null,8,["images"])],64))}},me={setup(s){return(r,n)=>(u(),g(de))}},fe=[{name:"contact",path:"/contact",component:()=>x(()=>import("./contact.0262f9b6.js"),["assets/contact.0262f9b6.js","assets/vendor.dd7f5744.js"]),props:!0},{name:"catalogue",path:"/catalogue",component:()=>x(()=>import("./catalogue.08172a98.js"),["assets/catalogue.08172a98.js","assets/vendor.dd7f5744.js"]),props:!0},{name:"cart",path:"/cart",component:()=>x(()=>import("./cart.67d20bc0.js"),["assets/cart.67d20bc0.js","assets/vendor.dd7f5744.js"]),props:!0},{name:"index",path:"/",component:me,props:!0}],pe=V({history:D("/"),routes:fe});F(le).use(pe).mount("#app");export{b as _};
