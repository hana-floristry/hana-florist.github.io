import{r as _,o as l,c as f,w as p,a as t,b as $,t as g,d as c,e as o,u as m,f as O,g as S,h as F,F as u,i as w,S as V,j as D,k as h,l as j,m as L,n as N,p as Y}from"./vendor.a031fbed.js";const H=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}};H();var x=(s,a)=>{const n=s.__vccOpts||s;for(const[r,e]of a)n[r]=e;return n};const E={class:"pt-2 pb-1.5"},P={class:"mt-1.5 text-sm text-center"},z=["href"],R={class:"pt-2 pb-1.5"},W={class:"mt-1.5 text-sm text-center"},q={props:{external:Boolean,href:String,text:String},setup(s){return(a,n)=>{const r=_("router-link");return s.external?(l(),c("a",{key:1,class:"basis-1/3 text-red-200",href:s.href},[t("div",R,[$(a.$slots,"default",{},void 0,!0),t("p",W,g(s.text),1)])],8,z)):(l(),f(r,{key:0,class:"basis-1/3 text-red-200",to:s.href},{default:p(()=>[t("div",E,[$(a.$slots,"default",{},void 0,!0),t("p",P,g(s.text),1)])]),_:3},8,["to"]))}}};var y=x(q,[["__scopeId","data-v-61daf284"]]);const T={class:"md:hidden fixed bottom-0 z-50 px-3 pb-3 w-full"},K={class:"flex bg-red-900 rounded"},J={setup(s){return(a,n)=>(l(),c("div",T,[t("div",K,[o(y,{href:"/",text:"Home"},{default:p(()=>[o(m(O),{class:"mx-auto w-6 h-6"})]),_:1}),o(y,{href:"/catalogue",text:"Catalogue"},{default:p(()=>[o(m(S),{class:"mx-auto w-6 h-6"})]),_:1}),o(y,{external:!0,href:"https://api.whatsapp.com/send?phone=628153898399",text:"Contact"},{default:p(()=>[o(m(F),{class:"mx-auto w-6 h-6"})]),_:1})])]))}},Q={},U={class:"container pt-20 pb-36 px-3 mx-auto text-red-800"},X=t("p",{class:"text-xl"}," \xA9 2022 HANA Floristry. All rights reserved. ",-1),G=[X];function M(s,a){return l(),c("div",U,G)}var Z=x(Q,[["render",M]]),tt="/assets/logo-light.2f7ed7e7.svg",et="/assets/logo-dark.4ebe3a6c.svg";const st={class:"mx-6"},at={class:"text-xl text-red-800"},rt=["href"],ot={class:"text-xl text-red-800"},v={props:{external:Boolean,href:String,text:String},setup(s){return(a,n)=>{const r=_("router-link");return l(),c("div",st,[s.external?(l(),c("a",{key:1,href:s.href},[t("span",ot,g(s.text),1)],8,rt)):(l(),f(r,{key:0,to:s.href},{default:p(()=>[t("span",at,g(s.text),1)]),_:1},8,["to"]))])}}},nt=t("div",{class:"sticky top-0 z-10 md:hidden w-full bg-red-900"},[t("div",{class:"flex justify-center py-3 mx-auto"},[t("img",{class:"w-24",src:tt,alt:"hana floristry logo"})])],-1),lt={class:"hidden md:block w-full"},it={class:"container flex justify-between items-center px-6 py-9 mx-auto"},ct=t("div",null,[t("img",{class:"w-28",src:et,alt:"hana floristry logo"})],-1),dt={class:"flex justify-between"},pt={setup(s){return(a,n)=>(l(),c(u,null,[nt,t("div",lt,[t("div",it,[ct,t("div",dt,[o(v,{href:"/",text:"Home"}),o(v,{href:"/catalogue",text:"Catalogue"}),o(v,{external:!0,href:"https://api.whatsapp.com/send?phone=628153898399",text:"Contact"})]),t("div",null,[o(v,{class:"hidden",href:"/cart",text:"Cart"})])])])],64))}};var mt="/assets/wa-logo.a649f67c.svg";const _t={},ut={class:"hidden md:block fixed bottom-3 right-3"},ft=t("a",{href:"https://api.whatsapp.com/send?phone=628153898399",rel:"noreferrer",target:"_blank"},[t("img",{alt:"whatsapp icon",class:"w-12",src:mt})],-1),gt=[ft];function ht(s,a){return l(),c("div",ut,gt)}var xt=x(_t,[["render",ht]]);const vt={setup(s){return(a,n)=>{const r=_("router-view");return l(),c(u,null,[o(pt),o(r),o(J),o(Z),o(xt)],64)}}},wt="modulepreload",k={},yt="/",C=function(a,n){return!n||n.length===0?a():Promise.all(n.map(r=>{if(r=`${yt}${r}`,r in k)return;k[r]=!0;const e=r.endsWith(".css"),i=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const d=document.createElement("link");if(d.rel=e?"stylesheet":wt,e||(d.as="script",d.crossOrigin=""),d.href=r,document.head.appendChild(d),e)return new Promise((A,B)=>{d.addEventListener("load",A),d.addEventListener("error",B)})})).then(()=>a())};var bt="/assets/cny-2.f844b166.jpg",$t="/assets/cny-3.3626019c.jpg",jt="/assets/cny-4.2b6c69ac.jpg";const kt={class:"text-center"},Ct=["src"],b={props:{images:Array,options:Object},setup(s){return(a,n)=>(l(),c("div",kt,[o(m(D),{options:s.options},{default:p(()=>[(l(!0),c(u,null,w(s.images,r=>(l(),f(m(V),{key:r},{default:p(()=>[t("img",{alt:"placeholder flower image",class:"mx-auto",src:r},null,8,Ct)]),_:2},1024))),128))]),_:1},8,["options"])]))}},It={class:"container lg:flex gap-12 px-6 mx-auto"},At={class:"mb-12 lg:mb-24 w-full lg:w-2/5"},Bt=t("h1",{class:"mb-6 text-5xl md:text-7xl text-red-800"},[h(" Flowers of "),t("span",{class:"font-bold text-red-600"},"Prosperity")],-1),Ot=t("p",{class:"mb-6 font-lexend text-lg md:text-2xl text-red-800"}," Auspicious decorative flowers for your Chinese New Year celebrations ",-1),St=h(" Browse "),Ft={setup(s){const a=[bt,$t,jt],n={type:"fade",rewind:!0,autoHeight:!0,arrows:!1,pagination:!1,autoplay:!0,interval:2400,pauseOnHover:!1,pauseOnFocus:!1};return(r,e)=>{const i=_("router-link");return l(),c("div",It,[t("div",At,[Bt,Ot,o(i,{class:"px-6 py-2 text-lg md:text-2xl text-red-100 bg-red-900 rounded-md",to:"/catalogue"},{default:p(()=>[St]),_:1})]),o(b,{class:"mx-auto lg:ml-auto lg:mr-0 w-fit",images:a,options:n})])}}};var Vt="/assets/instagram-logo.09eb1de2.svg",Dt="/assets/img-01.c31e9641.jpg",Lt="/assets/img-02.66716107.jpg",Nt="/assets/img-03.7ba9a40e.jpg",Yt="/assets/img-04.136e681f.jpg",Ht="/assets/img-05.a1888892.jpg",Et="/assets/img-06.1042ad1b.jpg",Pt="/assets/img-07.2296140f.jpg",zt="/assets/img-08.62d030ac.jpg",Rt="/assets/img-09.9379a949.jpg",Wt="/assets/img-10.70d8ef01.jpg",I=["https://www.instagram.com/p/CYsbzIjBJ2F","https://www.instagram.com/p/CYsazyyBox1","https://www.instagram.com/p/CYsaTAyh3VD","https://www.instagram.com/p/CYsZWKAh-1E","https://www.instagram.com/p/CYsYRh3BBIX","https://www.instagram.com/p/CYqbsmlBp5f","https://www.instagram.com/p/CYqL2eOhPaF","https://www.instagram.com/p/CYp7olRh9w9","https://www.instagram.com/p/CYp7fLVhhuQ","https://www.instagram.com/p/CYp7aDjB3G6","https://www.instagram.com/p/CYp7W84hp4V","https://www.instagram.com/p/CYp7VO1BQvX"];const qt={class:"container mx-auto"},Tt=j('<div class="flex justify-center items-center mb-3 md:mb-9"><img alt="instagram logo" class="mr-3 md:mr-6 w-12 md:w-20" loading="lazy" src="'+Vt+'"><a href="https://instagram.com/hana.floristry/" rel="noreferrer" target="_blank"><div class="flex flex-col text-red-800"><p class="text-lg md:text-2xl text-center"> Follow us on Instagram </p><p class="text-xl md:text-3xl text-center"> @hana.floristry </p></div></a></div>',1),Kt={class:"hidden md:grid grid-cols-5 grid-rows-2"},Jt=["href"],Qt=["src"],Ut={class:"grid md:hidden grid-cols-3 grid-rows-3"},Xt=["href"],Gt=["src"],Mt={setup(s){const a=[Dt,Lt,Nt,Yt,Ht,Et,Pt,zt,Rt,Wt];return(n,r)=>(l(),c("div",qt,[Tt,t("div",Kt,[(l(),c(u,null,w(10,e=>t("div",{class:"hover:brightness-50 transition-all duration-300",key:e},[t("a",{href:m(I)[e-1],rel:"noreferrer",target:"_blank"},[t("img",{alt:"flower image",loading:"lazy",src:a[e-1]},null,8,Qt)],8,Jt)])),64))]),t("div",Ut,[(l(),c(u,null,w(9,e=>t("div",{class:"hover:brightness-50 transition-all duration-300",key:e},[t("a",{href:m(I)[e-1],rel:"noreferrer",target:"_blank"},[t("img",{alt:"flower image",loading:"lazy",src:a[e-1]},null,8,Gt)],8,Xt)])),64))])]))}},Zt={},te={class:"container block md:flex gap-6 px-3 mx-auto lg:max-w-screen-lg"},ee=j('<div class="mb-4 w-full lg:w-1/2 text-lg text-red-800"><p class="font-cormorant text-3xl"> \u{1F4CD}Find Us </p><p class="p-3 pb-0 font-linotte"> HANA Floristry </p><p class="p-3 pt-0 font-lexend"> Jl. Boulevard Timur No.28d <br> Komplek Cemara Asri <br> Sumatera Utara 20371, Indonesia </p><p class="p-3 pb-0 font-linotte"> Contact </p><p class="p-3 pt-0 font-lexend"> contact@hana.florist <br> 08153898399 </p><p class="p-3 pb-0 font-linotte"> Operating Hours </p><p class="p-3 pt-0 font-lexend"> Mon - Sat <br> 08:30 - 17:00 </p></div><iframe class="w-full sm:max-w-full h-80" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15927.192225871584!2d98.7045368!3d3.6335252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5243c0b93ddcbd4a!2sHANA%20Floristry!5e0!3m2!1sen!2ssg!4v1640790795083!5m2!1sen!2ssg" title="google maps embed"></iframe>',2),se=[ee];function ae(s,a){return l(),c("div",te,se)}var re=x(Zt,[["render",ae]]),oe="/assets/display-1.4e0606ea.jpg",ne="/assets/display-2.dd308175.jpg",le="/assets/display-3.87b8bf56.jpg",ie="/assets/display-4.888813a9.jpg",ce="/assets/display-5.12153120.jpg",de="/assets/display-6.aa97f7bf.jpg",pe="/assets/display-7.7442e6ce.jpg",me="/assets/display-8.45aa36de.jpg";const _e={setup(s){const a=[oe,ne,le,ie,ce,de,pe,me],n={type:"loop",autoWidth:!0,focus:"center",gap:"3rem",arrows:!0,pagination:!1,autoplay:!0,interval:3600,pauseOnHover:!1,pauseOnFocus:!1,breakpoints:{767:{arrows:!1,pagination:!0}}};return(r,e)=>(l(),f(b,{images:a,options:n}))}};var ue="/assets/valentine-01.b304d04f.jpg",fe="/assets/valentine-03.59291960.jpg",ge="/assets/valentine-05.453718d5.jpg";const he={class:"container lg:flex gap-12 px-6 mx-auto"},xe={class:"mb-12 lg:mb-24 w-full lg:w-2/5 lg:text-right"},ve=t("h1",{class:"mb-6 text-5xl md:text-7xl text-red-800"},[t("span",{class:"font-bold text-red-600"},"Love"),h(" Is in the Air ")],-1),we=t("p",{class:"mb-6 font-lexend text-lg md:text-2xl text-red-800"}," Endearing bouquets and ornaments to surprise your special someone on Valentine's Day ",-1),ye=h(" Browse "),be={setup(s){const a=[ue,fe,ge],n={type:"fade",rewind:!0,autoHeight:!0,arrows:!1,pagination:!1,autoplay:!0,interval:2400,pauseOnHover:!1,pauseOnFocus:!1};return(r,e)=>{const i=_("router-link");return l(),c("div",he,[t("div",xe,[ve,we,o(i,{class:"px-6 py-2 text-lg md:text-2xl text-red-100 bg-red-900 rounded-md",to:"/catalogue"},{default:p(()=>[ye]),_:1})]),o(b,{class:"order-first mx-auto lg:ml-0 lg:mr-auto w-fit",images:a,options:n})])}}},$e={class:"flex flex-col gap-24"},je={setup(s){return(a,n)=>(l(),c("div",$e,[o(_e),o(Ft),o(be),o(Mt),o(re)]))}},ke=[{name:"catalogue",path:"/catalogue",component:()=>C(()=>import("./catalogue.2d45a279.js"),["assets/catalogue.2d45a279.js","assets/vendor.a031fbed.js"]),props:!0},{name:"index",path:"/",component:je,props:!0},{name:"all",path:"/:all(.*)*",component:()=>C(()=>import("./_...all_.9937a7ac.js"),["assets/_...all_.9937a7ac.js","assets/vendor.a031fbed.js"]),props:!0}],Ce=L({history:N("/"),routes:ke});Y(vt).use(Ce).mount("#app");export{bt as C,ue as V,$t as a,jt as b,fe as c,ge as d};
