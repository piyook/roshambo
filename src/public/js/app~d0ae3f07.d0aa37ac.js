(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={"app~d0ae3f07":0},a={"app~d0ae3f07":0},c=[];function u(e){return i.p+"js/"+({"Register~f71cff67":"Register~f71cff67","authorized~e439fdde":"authorized~e439fdde","login~31ecd969":"login~31ecd969","register~31ecd969":"register~31ecd969"}[e]||e)+"."+{"Register~f71cff67":"7e399055","authorized~e439fdde":"33e04246","login~31ecd969":"e344da47","register~31ecd969":"b30c7a16"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"Register~f71cff67":1,"login~31ecd969":1,"register~31ecd969":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({"Register~f71cff67":"Register~f71cff67","authorized~e439fdde":"authorized~e439fdde","login~31ecd969":"login~31ecd969","register~31ecd969":"register~31ecd969"}[e]||e)+"."+{"Register~f71cff67":"7f143caa","authorized~e439fdde":"31d6cfe0","login~31ecd969":"23fe9784","register~31ecd969":"23fe9784"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],d=s.getAttribute("data-href");if(d===r||d===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],l.parentNode.removeChild(l),n(c)},l.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(l)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;c.push([0,"chunk-vendors~0f485567","chunk-vendors~5ea1a303","chunk-vendors~e4173fa2","chunk-vendors~42d1a2d3","chunk-vendors~d939e436","chunk-vendors~f9ca8911"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2fa3":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){var t="API Error, please try again.";return e.response?e.response.data&&e.response.data.errors?e.response.data.errors:t:(console.error("API ".concat(e.config.url," not found")),t)}},4360:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"namespaced",(function(){return f})),n.d(r,"state",(function(){return l})),n.d(r,"mutations",(function(){return g})),n.d(r,"actions",(function(){return p})),n.d(r,"getters",(function(){return h}));var o=n("5502"),a={},c={checkLogStatus:function(e){return e.isLoggedIn}},u={login:function(e,t){console.log("logging in"),console.log(t.data.email)},register:function(e,t){console.log("registering"),console.log(t.data.email)}},i=n("a18c"),s=n("2fa3"),d=n("b012"),f=!0,l={user:null,loading:!1,error:null},g={SET_USER:function(e,t){e.user=t},SET_LOADING:function(e,t){e.loading=t},SET_ERROR:function(e,t){e.error=t}},p={logout:function(e){var t=e.commit;return d["a"].logout().then((function(){t("SET_USER",null),window.localStorage.setItem("guest",!0)})).then((function(){i["a"].push({path:"/login"})})).catch((function(e){t("SET_ERROR",Object(s["a"])(e))}))},getAuthUser:function(e){var t=e.commit;return t("SET_LOADING",!0),d["a"].getAuthUser().then((function(e){t("SET_USER",e.data.data),t("SET_LOADING",!1)})).catch((function(e){t("SET_LOADING",!1),t("SET_USER",null),t("SET_ERROR",Object(s["a"])(e))}))},setGuest:function(e,t){var n=t.value;window.localStorage.setItem("guest",n)}},h={authUser:function(e){return e.user},isAdmin:function(e){return!!e.user&&e.user.isAdmin},error:function(e){return e.error},loading:function(e){return e.loading},loggedIn:function(e){return!!e.user},guest:function(){return JSON.parse(window.localStorage.getItem("guest"))}};t["a"]=Object(o["a"])({state:{isLoggedIn:!1},getters:c,mutations:a,actions:u,modules:{auth:r}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav",class:"text-center mt-2"},a=Object(r["f"])("About"),c=Object(r["f"])(" | "),u=Object(r["f"])("Play");function i(e,t){var n=Object(r["v"])("router-link"),i=Object(r["v"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",o,[Object(r["g"])(n,{to:"/"},{default:Object(r["A"])((function(){return[a]})),_:1}),c,Object(r["g"])(n,{to:"/about"},{default:Object(r["A"])((function(){return[u]})),_:1})]),Object(r["g"])(i)],64)}n("abdf");const s={};s.render=i;var d=s,f=n("a18c"),l=n("4360");n("435e");Object(r["c"])(d).use(l["a"]).use(f["a"]).mount("#app")},"8e8c":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var r=n("5530"),o=n("6c02"),a=n("4360"),c=n("7a23"),u=Object(c["D"])("data-v-dbcc89d4");Object(c["s"])("data-v-dbcc89d4");var i={class:"container"};Object(c["q"])();var s=u((function(e,t,n,r,o,a){var u=Object(c["v"])("home-hero"),s=Object(c["v"])("home-intro");return Object(c["p"])(),Object(c["d"])("div",i,[Object(c["g"])(u),Object(c["g"])(s)])})),d=Object(c["D"])("data-v-66fa05fc");Object(c["s"])("data-v-66fa05fc");var f={class:"text-center p-4 mt-4 border border-primary"},l=Object(c["g"])("h1",{class:"display-5 text-primary"},"Rock, Paper, Scissors, Lizzard, Spock",-1),g=Object(c["g"])("div",{class:"display-4"}," A Simple Vue/Laravel Demo App ",-1);Object(c["q"])();var p=d((function(e,t){return Object(c["p"])(),Object(c["d"])("section",f,[l,g])}));n("eb4b");const h={};h.render=p,h.__scopeId="data-v-66fa05fc";var b=h,v=Object(c["D"])("data-v-eab62350");Object(c["s"])("data-v-eab62350");var m={class:"text-center pt-5"},O=Object(c["g"])("div",null,[Object(c["g"])("h1",null," ABOUT "),Object(c["g"])("div",{class:"text-info"},[Object(c["f"])(" This is a demo app coded in Vue-3, Laravel-8 using Bootswatch Styling (Superhero)."),Object(c["g"])("br"),Object(c["f"])(" Laravel is used as a backend microservice."),Object(c["g"])("br"),Object(c["f"])(" The App has been Dockerized and is served on AWS on a EC2 instance. ")])],-1),j=Object(c["g"])("div",{class:"pt-3"},[Object(c["g"])("h1",null," OBJECTIVES "),Object(c["g"])("div",{class:"text-info"},[Object(c["f"])(" The objectives are ... "),Object(c["g"])("ul",null,[Object(c["g"])("li",null," Make it Quick "),Object(c["g"])("li",null," Combine Vue and Laravel ")])])],-1);Object(c["q"])();var w=v((function(e,t){return Object(c["p"])(),Object(c["d"])("section",m,[O,j])}));const y={};y.render=w,y.__scopeId="data-v-eab62350";var S=y,E={components:{HomeHero:b,HomeIntro:S}};E.render=s,E.__scopeId="data-v-dbcc89d4";var R=E;function _(e){var t=e.next,n=e.store;n.getters["auth/guest"]||n.getters["auth/authUser"]?t():n.dispatch("auth/getAuthUser").then((function(){n.getters["auth/authUser"]?t({name:"dashboard"}):(n.dispatch("auth/setGuest",{value:!0}),t())}))}function x(e){var t=e.to,n=e.next,r=e.store,o={path:"/login",query:{redirect:t.fullPath}};r.getters["auth/authUser"]?n():r.dispatch("auth/getAuthUser").then((function(){r.getters["auth/authUser"]?n():n(o)}))}function A(e,t,n){var o=t[n];return o?function(){o(Object(r["a"])(Object(r["a"])({},e),{},{next:A(e,t,n+1)}))}:e.next}var k=[{path:"/",name:"Home",component:R},{path:"/userlogin",name:"Login",meta:{middleware:[_]},component:function(){return n.e("login~31ecd969").then(n.bind(null,"62cc"))}},{path:"/userregister",name:"Register",meta:{middleware:[_]},component:function(){return n.e("register~31ecd969").then(n.bind(null,"eaff"))}},{path:"/userauthorized",name:"Authorized",meta:{middleware:[x]},component:function(){return n.e("authorized~e439fdde").then(n.bind(null,"5893"))}},{path:"/:pathMatch(.*)*",name:"notfound",component:function(){return n.e("Register~f71cff67").then(n.bind(null,"ee5d"))}}],T=Object(o["a"])({history:Object(o["b"])("/"),routes:k});T.beforeEach((function(e,t,n){var o=e.meta.middleware,c={to:e,from:t,next:n,store:a["a"]};if(!o)return n();o[0](Object(r["a"])(Object(r["a"])({},c),{},{next:A(c,o,1)}))}));t["a"]=T},abdf:function(e,t,n){"use strict";n("e45c")},b012:function(e,t,n){"use strict";n("d3b7"),n("96cf");var r=n("1da1"),o=n("bc3a"),a=n.n(o),c=n("4360"),u=a.a.create({baseURL:"http://127.0.0.1:8000",withCredentials:!0});u.interceptors.response.use((function(e){return e}),(function(e){return!e.response||401!==e.response.status&&419!==e.response.status||c["a"].getters["auth/guest"]||c["a"].dispatch("auth/logout"),Promise.reject(e)})),t["a"]={login:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.get("/sanctum/csrf-cookie");case 2:return t.next=4,u.post("/login",e);case 4:case"end":return t.stop()}}),t)})))()},logout:function(){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.post("/logout");case 2:case"end":return e.stop()}}),e)})))()},registerUser:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.get("/sanctum/csrf-cookie");case 2:return t.next=4,u.post("/register",e);case 4:case"end":return t.stop()}}),t)})))()}}},e45c:function(e,t,n){},eb4b:function(e,t,n){"use strict";n("8e8c")}});
//# sourceMappingURL=app~d0ae3f07.d0aa37ac.js.map