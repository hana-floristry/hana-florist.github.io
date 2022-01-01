import{r as f,o as c,c as m,a as s,w as p,b as A,d as r,t as y,u as l,e as P,f as E,g as L,h as N,F as u,i as h,j as $,k,S as O,n as X,l as F,m as H,p as V,q as W}from"./vendor.b50c3e78.js";const D=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};D();var x=(a,e)=>{const n=a.__vccOpts||a;for(const[o,t]of e)n[o]=t;return n};const R={class:"basis-1/4 pt-2 pb-1.5"},z={class:"basis-1/4 mt-1.5 text-sm text-center"},J={props:{href:String,text:String},setup(a){return(e,n)=>{const o=f("router-link");return c(),m("div",R,[s(o,{to:a.href,class:"text-red-200"},{default:p(()=>[A(e.$slots,"default",{},void 0,!0),r("p",z,y(a.text),1)]),_:3},8,["to"])])}}};var _=x(J,[["__scopeId","data-v-c7b48214"]]);const M={class:"md:hidden fixed bottom-0 px-3 pb-3 w-full"},T={class:"flex bg-red-900 rounded"},q={setup(a){return(e,n)=>(c(),m("div",M,[r("div",T,[s(_,{href:"/",text:"Home"},{default:p(()=>[s(l(P),{class:"mx-auto w-6 h-6"})]),_:1}),s(_,{href:"/catalogue",text:"Catalogue"},{default:p(()=>[s(l(E),{class:"mx-auto w-6 h-6"})]),_:1}),s(_,{href:"/cart",text:"Cart"},{default:p(()=>[s(l(L),{class:"mx-auto w-6 h-6"})]),_:1}),s(_,{href:"/contact",text:"Contact"},{default:p(()=>[s(l(N),{class:"mx-auto w-6 h-6"})]),_:1})])]))}};var K="/assets/logo-light.2f7ed7e7.svg",Q="/assets/logo-dark.4ebe3a6c.svg";const U={class:"mx-6"},Y={class:"text-xl text-red-800"},g={props:{href:String,text:String},setup(a){return(e,n)=>{const o=f("router-link");return c(),m("div",U,[s(o,{to:a.href},{default:p(()=>[r("span",Y,y(a.text),1)]),_:1},8,["to"])])}}},G=r("div",{class:"sticky top-0 z-10 md:hidden w-full bg-red-900"},[r("div",{class:"flex justify-center py-3 mx-auto"},[r("img",{class:"w-24",src:K,alt:"hana floristry logo"})])],-1),Z={class:"hidden md:block w-full"},tt={class:"container flex justify-between items-center px-6 py-9 mx-auto"},et=r("div",null,[r("img",{class:"w-28",src:Q,alt:"hana floristry logo"})],-1),st={class:"flex justify-between"},rt={setup(a){return(e,n)=>(c(),m(u,null,[G,r("div",Z,[r("div",tt,[et,r("div",st,[s(g,{href:"/",text:"Home"}),s(g,{href:"/catalogue",text:"Catalogue"}),s(g,{href:"/contact",text:"Contact"})]),r("div",null,[s(g,{href:"/cart",text:"Cart"})])])])],64))}};var at="/assets/wa-logo.a649f67c.svg";const ot={},nt={class:"hidden md:block fixed bottom-6 right-6"},ct=r("img",{alt:"whatsapp icon",class:"w-12",src:at},null,-1),lt=[ct];function it(a,e){return c(),m("div",nt,lt)}var mt=x(ot,[["render",it]]);const dt={setup(a){return(e,n)=>{const o=f("router-view");return c(),m(u,null,[s(rt),s(o),s(q),s(mt)],64)}}},pt="modulepreload",C={},ut="/",v=function(e,n){return!n||n.length===0?e():Promise.all(n.map(o=>{if(o=`${ut}${o}`,o in C)return;C[o]=!0;const t=o.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const d=document.createElement("link");if(d.rel=t?"stylesheet":pt,t||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),t)return new Promise((S,B)=>{d.addEventListener("load",S),d.addEventListener("error",B)})})).then(()=>e())};var _t="/assets/instagram-logo.09eb1de2.svg",gt="/assets/img-01.c89ce81a.jpg",ft="/assets/img-02.352123d5.jpg",ht="/assets/img-03.1f257962.jpg",xt="/assets/img-04.2daeb092.jpg",vt="/assets/img-05.106cec85.jpg",wt="/assets/img-06.aaf87b5c.jpg",bt="/assets/img-07.227610cf.jpg",yt="/assets/img-08.1d3087e0.jpg",$t="/assets/img-09.7ac36951.jpg",kt="/assets/img-10.6b1359d7.jpg",I=["https://www.instagram.com/p/CX7thVJhBF8","https://www.instagram.com/p/CX7tPu6BI93","https://www.instagram.com/p/CX7tJV_Bs1S","https://www.instagram.com/p/CX2kzwWBxkW","https://www.instagram.com/p/CX2kuMHBPMj","https://www.instagram.com/p/CX2ki-JhhEQ","https://www.instagram.com/p/CX2kb5ABh3l","https://www.instagram.com/p/CX2kWcaBNpo","https://www.instagram.com/p/CX2kQP8h-Ib","https://www.instagram.com/p/CX2kMsoBrY3","https://www.instagram.com/p/CX2kG7ABSii","https://www.instagram.com/p/CX2kDsuBY8W"];const Ct={class:"container mx-auto mb-12 md:mb-24"},It=$('<div class="flex justify-center items-center my-3 md:my-9"><img alt="instagram logo" class="mr-3 md:mr-6 w-12 md:w-20" src="'+_t+'"><a href="https://instagram.com/hana.floristry/" rel="noreferrer" target="_blank"><div class="flex flex-col text-red-800"><p class="text-lg md:text-2xl text-center"> Follow us on Instagram </p><p class="text-xl md:text-3xl text-center"> @hana.floristry </p></div></a></div>',1),jt={class:"hidden md:grid grid-cols-5 grid-rows-2"},St=["href"],Bt=["src"],At={class:"grid md:hidden grid-cols-3 grid-rows-3"},Pt=["href"],Et=["src"],Lt={setup(a){const e=[gt,ft,ht,xt,vt,wt,bt,yt,$t,kt];return(n,o)=>(c(),m("div",Ct,[It,r("div",jt,[(c(),m(u,null,h(10,t=>r("div",{class:"hover:brightness-50 transition-all duration-300",key:t},[r("a",{href:l(I)[t-1],rel:"noreferrer",target:"_blank"},[r("img",{alt:"flower image",src:e[t-1]},null,8,Bt)],8,St)])),64))]),r("div",At,[(c(),m(u,null,h(9,t=>r("div",{class:"hover:brightness-50 transition-all duration-300",key:t},[r("a",{href:l(I)[t-1],rel:"noreferrer",target:"_blank"},[r("img",{alt:"flower image",src:e[t-1]},null,8,Et)],8,Pt)])),64))])]))}},Nt={},Ot={class:"container block md:flex gap-6 px-3 mx-auto mb-12 md:mb-24 lg:max-w-screen-lg"},Xt=$('<div class="mb-4 w-full lg:w-1/2 text-lg text-red-800"><p class="font-cormorant text-3xl"> \u{1F4CD}Find Us </p><p class="p-3 pb-0 font-linotte"> HANA Floristry </p><p class="p-3 pt-0 font-lexend"> Jl. Boulevard Timur No.28d <br> Komplek Cemara Asri <br> Sumatera Utara 20371, Indonesia </p><p class="p-3 pb-0 font-linotte"> Contact </p><p class="p-3 pt-0 font-lexend"> contact@hana.florist <br> 08153898399 </p><p class="p-3 pb-0 font-linotte"> Operating Hours </p><p class="p-3 pt-0 font-lexend"> Mon - Sat <br> 08:30 - 17:00 </p></div><iframe class="w-full sm:max-w-full h-80" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15927.192225871584!2d98.7045368!3d3.6335252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5243c0b93ddcbd4a!2sHANA%20Floristry!5e0!3m2!1sen!2ssg!4v1640790795083!5m2!1sen!2ssg" title="google maps embed"></iframe>',2),Ft=[Xt];function Ht(a,e){return c(),m("div",Ot,Ft)}var Vt=x(Nt,[["render",Ht]]);const Wt=["src"],j={props:{images:Array,imgClass:Array},setup(a){const e={type:"loop",arrows:!0,pagination:!1,autoplay:!0,interval:3600,pauseOnHover:!1,pauseOnFocus:!1,breakpoints:{767:{arrows:!1,pagination:!0,autoplay:!1}}};return(n,o)=>(c(),k(l(F),{options:e},{default:p(()=>[(c(!0),m(u,null,h(a.images,t=>(c(),k(l(O),{key:t},{default:p(()=>[r("img",{alt:"placeholder flower image",class:X(a.imgClass),src:t},null,10,Wt)]),_:2},1024))),128))]),_:1}))}};var w="/assets/placeholder-21-9.3bb52ca9.svg",b="/assets/placeholder-1-1.f012c6d0.svg";const Dt={setup(a){return(e,n)=>(c(),m(u,null,[s(j,{class:"hidden md:block mb-12 md:mb-24",images:[l(w),l(w),l(w)],"img-class":["mx-auto w-full"]},null,8,["images"]),s(j,{class:"md:hidden mb-12 md:mb-24",images:[l(b),l(b),l(b)],"img-class":["mx-auto w-full"]},null,8,["images"])],64))}},Rt={setup(a){return(e,n)=>(c(),m(u,null,[s(Dt),s(Lt),s(Vt)],64))}},zt=[{name:"contact",path:"/contact",component:()=>v(()=>import("./contact.ac4b352d.js"),["assets/contact.ac4b352d.js","assets/vendor.b50c3e78.js"]),props:!0},{name:"catalogue",path:"/catalogue",component:()=>v(()=>import("./catalogue.5211429a.js"),["assets/catalogue.5211429a.js","assets/vendor.b50c3e78.js"]),props:!0},{name:"cart",path:"/cart",component:()=>v(()=>import("./cart.30f87987.js"),["assets/cart.30f87987.js","assets/vendor.b50c3e78.js"]),props:!0},{name:"index",path:"/",component:Rt,props:!0}],Jt=H({history:V("/"),routes:zt});W(dt).use(Jt).mount("#app");export{x as _};