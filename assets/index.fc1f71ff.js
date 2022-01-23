import{r as _,o as l,c as x,w as p,a as t,b as $,t as v,d as i,e as r,u as m,f as B,g as S,h as F,F as u,i as w,S as V,j as D,k as g,l as j,m as L,n as N,p as Y}from"./vendor.a031fbed.js";const H=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerpolicy&&(c.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?c.credentials="include":e.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(e){if(e.ep)return;e.ep=!0;const c=n(e);fetch(e.href,c)}};H();var f=(a,s)=>{const n=a.__vccOpts||a;for(const[o,e]of s)n[o]=e;return n};const E={class:"pt-2 pb-1.5"},P={class:"mt-1.5 text-sm text-center"},z=["href"],R={class:"pt-2 pb-1.5"},W={class:"mt-1.5 text-sm text-center"},q={props:{external:Boolean,href:String,text:String},setup(a){return(s,n)=>{const o=_("router-link");return a.external?(l(),i("a",{key:1,class:"basis-1/3 text-red-200",href:a.href},[t("div",R,[$(s.$slots,"default",{},void 0,!0),t("p",W,v(a.text),1)])],8,z)):(l(),x(o,{key:0,class:"basis-1/3 text-red-200",to:a.href},{default:p(()=>[t("div",E,[$(s.$slots,"default",{},void 0,!0),t("p",P,v(a.text),1)])]),_:3},8,["to"]))}}};var y=f(q,[["__scopeId","data-v-61daf284"]]);const T={class:"md:hidden fixed bottom-0 z-50 px-3 pb-3 w-full"},K={class:"flex bg-red-900 rounded"},J={setup(a){return(s,n)=>(l(),i("div",T,[t("div",K,[r(y,{href:"/",text:"Home"},{default:p(()=>[r(m(B),{class:"mx-auto w-6 h-6"})]),_:1}),r(y,{href:"/catalogue",text:"Catalogue"},{default:p(()=>[r(m(S),{class:"mx-auto w-6 h-6"})]),_:1}),r(y,{external:"true",href:"https://api.whatsapp.com/send?phone=628153898399",text:"Contact"},{default:p(()=>[r(m(F),{class:"mx-auto w-6 h-6"})]),_:1})])]))}},Q={},U={class:"container pt-12 pb-32 px-3 mx-auto text-red-800"},X=t("p",{class:"text-xl"}," \xA9 2022 HANA Floristry. All rights reserved. ",-1),G=[X];function M(a,s){return l(),i("div",U,G)}var Z=f(Q,[["render",M]]),tt="/assets/logo-light.2f7ed7e7.svg",et="/assets/logo-dark.4ebe3a6c.svg";const st={class:"mx-6"},at={class:"text-xl text-red-800"},h={props:{href:String,text:String},setup(a){return(s,n)=>{const o=_("router-link");return l(),i("div",st,[r(o,{to:a.href},{default:p(()=>[t("span",at,v(a.text),1)]),_:1},8,["to"])])}}},rt=t("div",{class:"sticky top-0 z-10 md:hidden w-full bg-red-900"},[t("div",{class:"flex justify-center py-3 mx-auto"},[t("img",{class:"w-24",src:tt,alt:"hana floristry logo"})])],-1),ot={class:"hidden md:block w-full"},nt={class:"container flex justify-between items-center px-6 py-9 mx-auto"},lt=t("div",null,[t("img",{class:"w-28",src:et,alt:"hana floristry logo"})],-1),ct={class:"flex justify-between"},it={setup(a){return(s,n)=>(l(),i(u,null,[rt,t("div",ot,[t("div",nt,[lt,t("div",ct,[r(h,{href:"/",text:"Home"}),r(h,{href:"/catalogue",text:"Catalogue"}),r(h,{href:"/contact",text:"Contact"})]),t("div",null,[r(h,{class:"hidden",href:"/cart",text:"Cart"})])])])],64))}};var dt="/assets/wa-logo.a649f67c.svg";const pt={},mt={class:"hidden md:block fixed bottom-3 right-3"},_t=t("a",{href:"https://api.whatsapp.com/send?phone=628153898399",rel:"noreferrer",target:"_blank"},[t("img",{alt:"whatsapp icon",class:"w-12",src:dt})],-1),ut=[_t];function gt(a,s){return l(),i("div",mt,ut)}var ft=f(pt,[["render",gt]]);const ht={setup(a){return(s,n)=>{const o=_("router-view");return l(),i(u,null,[r(it),r(o),r(J),r(Z),r(ft)],64)}}},xt="modulepreload",k={},vt="/",C=function(s,n){return!n||n.length===0?s():Promise.all(n.map(o=>{if(o=`${vt}${o}`,o in k)return;k[o]=!0;const e=o.endsWith(".css"),c=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const d=document.createElement("link");if(d.rel=e?"stylesheet":xt,e||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),e)return new Promise((A,O)=>{d.addEventListener("load",A),d.addEventListener("error",O)})})).then(()=>s())};var wt="/assets/cny-2.f844b166.jpg",yt="/assets/cny-3.3626019c.jpg",bt="/assets/cny-4.2b6c69ac.jpg";const $t={class:"text-center"},jt=["src"],b={props:{images:Array,options:Object},setup(a){return(s,n)=>(l(),i("div",$t,[r(m(D),{options:a.options},{default:p(()=>[(l(!0),i(u,null,w(a.images,o=>(l(),x(m(V),{key:o},{default:p(()=>[t("img",{alt:"placeholder flower image",class:"mx-auto",src:o},null,8,jt)]),_:2},1024))),128))]),_:1},8,["options"])]))}},kt={class:"container lg:flex gap-12 px-6 mx-auto"},Ct={class:"mb-12 lg:mb-24 w-full lg:w-2/5"},It=t("h1",{class:"mb-6 text-5xl md:text-7xl text-red-800"},[g(" Flowers of "),t("span",{class:"font-bold text-red-600"},"Prosperity")],-1),At=t("p",{class:"mb-6 font-lexend text-lg md:text-2xl text-red-800"}," Auspicious decorative flowers for your Chinese New Year celebrations ",-1),Ot=g(" Browse "),Bt={setup(a){const s=[wt,yt,bt],n={type:"fade",rewind:!0,autoHeight:!0,arrows:!1,pagination:!1,autoplay:!0,interval:2400,pauseOnHover:!1,pauseOnFocus:!1};return(o,e)=>{const c=_("router-link");return l(),i("div",kt,[t("div",Ct,[It,At,r(c,{class:"px-6 py-2 text-lg md:text-2xl text-red-100 bg-red-900 rounded-md",to:"/catalogue"},{default:p(()=>[Ot]),_:1})]),r(b,{class:"mx-auto lg:ml-auto lg:mr-0 w-fit",images:s,options:n})])}}};var St="/assets/instagram-logo.09eb1de2.svg",Ft="/assets/img-01.c31e9641.jpg",Vt="/assets/img-02.66716107.jpg",Dt="/assets/img-03.7ba9a40e.jpg",Lt="/assets/img-04.136e681f.jpg",Nt="/assets/img-05.a1888892.jpg",Yt="/assets/img-06.1042ad1b.jpg",Ht="/assets/img-07.2296140f.jpg",Et="/assets/img-08.62d030ac.jpg",Pt="/assets/img-09.9379a949.jpg",zt="/assets/img-10.70d8ef01.jpg",I=["https://www.instagram.com/p/CYsbzIjBJ2F","https://www.instagram.com/p/CYsazyyBox1","https://www.instagram.com/p/CYsaTAyh3VD","https://www.instagram.com/p/CYsZWKAh-1E","https://www.instagram.com/p/CYsYRh3BBIX","https://www.instagram.com/p/CYqbsmlBp5f","https://www.instagram.com/p/CYqL2eOhPaF","https://www.instagram.com/p/CYp7olRh9w9","https://www.instagram.com/p/CYp7fLVhhuQ","https://www.instagram.com/p/CYp7aDjB3G6","https://www.instagram.com/p/CYp7W84hp4V","https://www.instagram.com/p/CYp7VO1BQvX"];const Rt={class:"container mx-auto"},Wt=j('<div class="flex justify-center items-center mb-3 md:mb-9"><img alt="instagram logo" class="mr-3 md:mr-6 w-12 md:w-20" loading="lazy" src="'+St+'"><a href="https://instagram.com/hana.floristry/" rel="noreferrer" target="_blank"><div class="flex flex-col text-red-800"><p class="text-lg md:text-2xl text-center"> Follow us on Instagram </p><p class="text-xl md:text-3xl text-center"> @hana.floristry </p></div></a></div>',1),qt={class:"hidden md:grid grid-cols-5 grid-rows-2"},Tt=["href"],Kt=["src"],Jt={class:"grid md:hidden grid-cols-3 grid-rows-3"},Qt=["href"],Ut=["src"],Xt={setup(a){const s=[Ft,Vt,Dt,Lt,Nt,Yt,Ht,Et,Pt,zt];return(n,o)=>(l(),i("div",Rt,[Wt,t("div",qt,[(l(),i(u,null,w(10,e=>t("div",{class:"hover:brightness-50 transition-all duration-300",key:e},[t("a",{href:m(I)[e-1],rel:"noreferrer",target:"_blank"},[t("img",{alt:"flower image",loading:"lazy",src:s[e-1]},null,8,Kt)],8,Tt)])),64))]),t("div",Jt,[(l(),i(u,null,w(9,e=>t("div",{class:"hover:brightness-50 transition-all duration-300",key:e},[t("a",{href:m(I)[e-1],rel:"noreferrer",target:"_blank"},[t("img",{alt:"flower image",loading:"lazy",src:s[e-1]},null,8,Ut)],8,Qt)])),64))])]))}},Gt={},Mt={class:"container block md:flex gap-6 px-3 mx-auto lg:max-w-screen-lg"},Zt=j('<div class="mb-4 w-full lg:w-1/2 text-lg text-red-800"><p class="font-cormorant text-3xl"> \u{1F4CD}Find Us </p><p class="p-3 pb-0 font-linotte"> HANA Floristry </p><p class="p-3 pt-0 font-lexend"> Jl. Boulevard Timur No.28d <br> Komplek Cemara Asri <br> Sumatera Utara 20371, Indonesia </p><p class="p-3 pb-0 font-linotte"> Contact </p><p class="p-3 pt-0 font-lexend"> contact@hana.florist <br> 08153898399 </p><p class="p-3 pb-0 font-linotte"> Operating Hours </p><p class="p-3 pt-0 font-lexend"> Mon - Sat <br> 08:30 - 17:00 </p></div><iframe class="w-full sm:max-w-full h-80" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15927.192225871584!2d98.7045368!3d3.6335252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5243c0b93ddcbd4a!2sHANA%20Floristry!5e0!3m2!1sen!2ssg!4v1640790795083!5m2!1sen!2ssg" title="google maps embed"></iframe>',2),te=[Zt];function ee(a,s){return l(),i("div",Mt,te)}var se=f(Gt,[["render",ee]]),ae="/assets/display-1.4e0606ea.jpg",re="/assets/display-2.dd308175.jpg",oe="/assets/display-3.87b8bf56.jpg",ne="/assets/display-4.888813a9.jpg",le="/assets/display-5.12153120.jpg",ce="/assets/display-6.aa97f7bf.jpg",ie="/assets/display-7.7442e6ce.jpg",de="/assets/display-8.45aa36de.jpg";const pe={setup(a){const s=[ae,re,oe,ne,le,ce,ie,de],n={type:"loop",autoWidth:!0,focus:"center",gap:"3rem",arrows:!0,pagination:!1,autoplay:!0,interval:3600,pauseOnHover:!1,pauseOnFocus:!1,breakpoints:{767:{arrows:!1,pagination:!0}}};return(o,e)=>(l(),x(b,{images:s,options:n}))}};var me="/assets/valentine-1.b304d04f.jpg",_e="/assets/valentine-3.59291960.jpg",ue="/assets/valentine-5.453718d5.jpg";const ge={class:"container lg:flex gap-12 px-6 mx-auto"},fe={class:"mb-12 lg:mb-24 w-full lg:w-2/5 lg:text-right"},he=t("h1",{class:"mb-6 text-5xl md:text-7xl text-red-800"},[t("span",{class:"font-bold text-red-600"},"Love"),g(" Is in the Air ")],-1),xe=t("p",{class:"mb-6 font-lexend text-lg md:text-2xl text-red-800"}," Endearing bouquets and ornaments to surprise your special someone on Valentine's Day ",-1),ve=g(" Browse "),we={setup(a){const s=[me,_e,ue],n={type:"fade",rewind:!0,autoHeight:!0,arrows:!1,pagination:!1,autoplay:!0,interval:2400,pauseOnHover:!1,pauseOnFocus:!1};return(o,e)=>{const c=_("router-link");return l(),i("div",ge,[t("div",fe,[he,xe,r(c,{class:"px-6 py-2 text-lg md:text-2xl text-red-100 bg-red-900 rounded-md",to:"/catalogue"},{default:p(()=>[ve]),_:1})]),r(b,{class:"order-first mx-auto lg:ml-0 lg:mr-auto w-fit",images:s,options:n})])}}},ye={class:"flex flex-col gap-24"},be={setup(a){return(s,n)=>(l(),i("div",ye,[r(pe),r(Bt),r(we),r(Xt),r(se)]))}},$e=[{name:"catalogue",path:"/catalogue",component:()=>C(()=>import("./catalogue.b1b9a1b8.js"),["assets/catalogue.b1b9a1b8.js","assets/vendor.a031fbed.js"]),props:!0},{name:"index",path:"/",component:be,props:!0},{name:"all",path:"/:all(.*)*",component:()=>C(()=>import("./_...all_.9937a7ac.js"),["assets/_...all_.9937a7ac.js","assets/vendor.a031fbed.js"]),props:!0}],je=L({history:N("/"),routes:$e});Y(ht).use(je).mount("#app");export{wt as C,me as V,yt as a,bt as b,_e as c,ue as d};
