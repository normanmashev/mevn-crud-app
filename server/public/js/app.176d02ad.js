(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2f243183":"87e33914","chunk-366c3c79":"b09ab7fe","chunk-40a57f95":"04499640","chunk-57f1ba1e":"8f49726e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-366c3c79":1,"chunk-40a57f95":1,"chunk-57f1ba1e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2f243183":"31d6cfe0","chunk-366c3c79":"04be9a08","chunk-40a57f95":"3b1fe027","chunk-57f1ba1e":"a645e1ef"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view"),n("Footer")],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar"},[n("div",{staticClass:"wrapper"},[n("router-link",{staticClass:"logo",attrs:{tag:"div",to:"/"}},[e._v("Список")]),n("ul",e._l(e.links,(function(t){return n("router-link",{key:t.id,attrs:{tag:"li",to:t.to}},[e._v(e._s(t.title))])})),1)],1)])},c=[],i={name:"Navbar",data:function(){return{links:[{id:1,to:"/",title:"Все посты"},{id:2,to:"/create",title:"Создать"}]}}},l=i,s=(n("61a0"),n("2877")),f=Object(s["a"])(l,u,c,!1,null,"6af22708",null),p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"copyright"},[e._v(" © "+e._s((new Date).getFullYear())+" - Nariman Imashev. ")]),e._m(0)])])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"more",attrs:{href:"https://github.com/normanmashev"}},[n("i",{staticClass:"fab fa-github"}),e._v(" "),n("span",[e._v("Github")])])}],v={name:"Footer"},m=v,b=(n("928c"),Object(s["a"])(m,d,h,!1,null,"db1b350e",null)),g=b.exports,y={name:"App",components:{Navbar:p,Footer:g}},k=y,_=(n("5c0b"),Object(s["a"])(k,a,o,!1,null,null,null)),w=_.exports,C=(n("d3b7"),n("8c4f"));r["a"].use(C["a"]);var O=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-2f243183"),n.e("chunk-40a57f95")]).then(n.bind(null,"bb51"))}},{path:"/create",name:"Create",component:function(){return Promise.all([n.e("chunk-2f243183"),n.e("chunk-57f1ba1e")]).then(n.bind(null,"d879"))}},{path:"/:id",name:"Post",component:function(){return Promise.all([n.e("chunk-2f243183"),n.e("chunk-366c3c79")]).then(n.bind(null,"37d3"))}}],j=new C["a"]({mode:"history",base:"/",routes:O}),P=j;n("4de4"),n("4d90");function E(e){var t=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],n=new Date(e),r=t[n.getMonth()],a=String(n.getDate()).padStart(2,"0"),o=n.getFullYear(),u=r+"\n"+a+", "+o;return u}function S(e){var t=e.length>40?e.substring(0,40)+"...":e;return t}var x={install:function(e){e.filter("dateFilter",E),e.filter("descriptionFilter",S)}},N=n("5886");r["a"].config.productionTip=!1,r["a"].use(N["default"]),r["a"].use(x),new r["a"]({router:P,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"61a0":function(e,t,n){"use strict";n("824b")},"824b":function(e,t,n){},"86d1":function(e,t,n){},"928c":function(e,t,n){"use strict";n("86d1")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.176d02ad.js.map