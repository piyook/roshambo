(function(e){function t(t){for(var n,a,u=t[0],i=t[1],s=t[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==c[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={"app~d0ae3f07":0},c={"app~d0ae3f07":0},o=[];function u(e){return i.p+"js/"+({"Register~f71cff67":"Register~f71cff67","authorized~e439fdde":"authorized~e439fdde","login~31ecd969":"login~31ecd969","register~31ecd969":"register~31ecd969"}[e]||e)+"."+{"Register~f71cff67":"7e399055","authorized~e439fdde":"33e04246","login~31ecd969":"4739beb8","register~31ecd969":"1e2bde7b"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"Register~f71cff67":1,"login~31ecd969":1,"register~31ecd969":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({"Register~f71cff67":"Register~f71cff67","authorized~e439fdde":"authorized~e439fdde","login~31ecd969":"login~31ecd969","register~31ecd969":"register~31ecd969"}[e]||e)+"."+{"Register~f71cff67":"7f143caa","authorized~e439fdde":"31d6cfe0","login~31ecd969":"1d3062fd","register~31ecd969":"1d3062fd"}[e]+".css",c=i.p+n,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],d=s.getAttribute("data-href");if(d===n||d===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],l.parentNode.removeChild(l),r(o)},l.href=c;var g=document.getElementsByTagName("head")[0];g.appendChild(l)})).then((function(){a[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;o.push([0,"chunk-vendors~0f485567","chunk-vendors~5ea1a303","chunk-vendors~e4173fa2","chunk-vendors~42d1a2d3","chunk-vendors~d939e436","chunk-vendors~f9ca8911"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2fa3":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){var t="API Error, please try again.";return e.response?e.response.data&&e.response.data.errors?e.response.data.errors:t:(console.error("API ".concat(e.config.url," not found")),t)}},4360:function(e,t,r){"use strict";var n=r("5502"),a={},c={checkLogStatus:function(e){return e.isLoggedIn}},o={},u=r("a18c"),i=r("2fa3"),s=r("b012"),d={namespaced:!0,state:function(){return{user:null,loading:!1,error:null}},mutations:{SET_USER:function(e,t){e.user=t},SET_LOADING:function(e,t){e.loading=t},SET_ERROR:function(e,t){e.error=t}},actions:{logout:function(e){var t=e.commit;return s["a"].logout().then((function(){t("SET_USER",null),window.localStorage.setItem("guest",!0)})).then((function(){u["a"].push({path:"/login"})})).catch((function(e){t("SET_ERROR",Object(i["a"])(e))}))},getAuthUser:function(e){var t=e.commit;return t("SET_LOADING",!0),s["a"].getAuthUser().then((function(e){alert(e.data.id),t("SET_USER",e.data.data),t("SET_LOADING",!1)})).catch((function(e){t("SET_LOADING",!1),t("SET_USER",null),t("SET_ERROR",Object(i["a"])(e))}))},setGuest:function(e,t){var r=t.value;window.localStorage.setItem("guest",r)}},getters:{authUser:function(e){return e.user},isAdmin:function(e){return!!e.user&&e.user.isAdmin},error:function(e){return e.error},loading:function(e){return e.loading},loggedIn:function(e){return!!e.user},guest:function(){return JSON.parse(window.localStorage.getItem("guest"))}}};t["a"]=Object(n["a"])({state:{isLoggedIn:!1},getters:c,mutations:a,actions:o,modules:{auth:d}})},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={id:"nav",class:"text-center mt-2"},c=Object(n["f"])("About"),o=Object(n["f"])(" | "),u=Object(n["f"])("Play");function i(e,t){var r=Object(n["v"])("router-link"),i=Object(n["v"])("router-view");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",a,[Object(n["g"])(r,{to:"/"},{default:Object(n["A"])((function(){return[c]})),_:1}),o,Object(n["g"])(r,{to:"/about"},{default:Object(n["A"])((function(){return[u]})),_:1})]),Object(n["g"])(i)],64)}r("abdf");const s={};s.render=i;var d=s,f=r("a18c"),l=r("4360");r("435e");Object(n["c"])(d).use(l["a"]).use(f["a"]).mount("#app")},"8e8c":function(e,t,r){},a18c:function(e,t,r){"use strict";r("d3b7");var n=r("5530"),a=r("6c02"),c=r("4360"),o=r("7a23"),u=Object(o["D"])("data-v-dbcc89d4");Object(o["s"])("data-v-dbcc89d4");var i={class:"container"};Object(o["q"])();var s=u((function(e,t,r,n,a,c){var u=Object(o["v"])("home-hero"),s=Object(o["v"])("home-intro");return Object(o["p"])(),Object(o["d"])("div",i,[Object(o["g"])(u),Object(o["g"])(s)])})),d=Object(o["D"])("data-v-66fa05fc");Object(o["s"])("data-v-66fa05fc");var f={class:"text-center p-4 mt-4 border border-primary"},l=Object(o["g"])("h1",{class:"display-5 text-primary"},"Rock, Paper, Scissors, Lizzard, Spock",-1),g=Object(o["g"])("div",{class:"display-4"}," A Simple Vue/Laravel Demo App ",-1);Object(o["q"])();var p=d((function(e,t){return Object(o["p"])(),Object(o["d"])("section",f,[l,g])}));r("eb4b");const h={};h.render=p,h.__scopeId="data-v-66fa05fc";var b=h,v=Object(o["D"])("data-v-eab62350");Object(o["s"])("data-v-eab62350");var m={class:"text-center pt-5"},O=Object(o["g"])("div",null,[Object(o["g"])("h1",null," ABOUT "),Object(o["g"])("div",{class:"text-info"},[Object(o["f"])(" This is a demo app coded in Vue-3, Laravel-8 using Bootswatch Styling (Superhero)."),Object(o["g"])("br"),Object(o["f"])(" Laravel is used as a backend microservice."),Object(o["g"])("br"),Object(o["f"])(" The App has been Dockerized and is served on AWS on a EC2 instance. ")])],-1),j=Object(o["g"])("div",{class:"pt-3"},[Object(o["g"])("h1",null," OBJECTIVES "),Object(o["g"])("div",{class:"text-info"},[Object(o["f"])(" The objectives are ... "),Object(o["g"])("ul",null,[Object(o["g"])("li",null," Make it Quick "),Object(o["g"])("li",null," Combine Vue and Laravel ")])])],-1);Object(o["q"])();var w=v((function(e,t){return Object(o["p"])(),Object(o["d"])("section",m,[O,j])}));const y={};y.render=w,y.__scopeId="data-v-eab62350";var S=y,E={components:{HomeHero:b,HomeIntro:S}};E.render=s,E.__scopeId="data-v-dbcc89d4";var R=E;function x(e){var t=e.next,r=e.store;r.getters["auth/guest"]||r.getters["auth/authUser"]?t():r.dispatch("auth/getAuthUser").then((function(){r.getters["auth/authUser"]?t({name:"Authorized"}):(r.dispatch("auth/setGuest",{value:!0}),t())}))}function A(e){var t=e.to,r=e.next,n=e.store,a={path:"/login",query:{redirect:t.fullPath}};n.getters["auth/authUser"]?r():n.dispatch("auth/getAuthUser").then((function(){n.getters["auth/authUser"]?r():r(a)}))}function _(e,t,r){var a=t[r];return a?function(){a(Object(n["a"])(Object(n["a"])({},e),{},{next:_(e,t,r+1)}))}:e.next}var k=[{path:"/",name:"Home",component:R},{path:"/userlogin",name:"Login",meta:{middleware:[x]},component:function(){return r.e("login~31ecd969").then(r.bind(null,"62cc"))}},{path:"/userregister",name:"Register",meta:{middleware:[x]},component:function(){return r.e("register~31ecd969").then(r.bind(null,"eaff"))}},{path:"/userauthorized",name:"Authorized",meta:{middleware:[A]},component:function(){return r.e("authorized~e439fdde").then(r.bind(null,"5893"))}},{path:"/:pathMatch(.*)*",name:"notfound",component:function(){return r.e("Register~f71cff67").then(r.bind(null,"ee5d"))}}],T=Object(a["a"])({history:Object(a["b"])("/"),routes:k});T.beforeEach((function(e,t,r){var a=e.meta.middleware,o={to:e,from:t,next:r,store:c["a"]};if(!a)return r();a[0](Object(n["a"])(Object(n["a"])({},o),{},{next:_(o,a,1)}))}));t["a"]=T},abdf:function(e,t,r){"use strict";r("e45c")},b012:function(e,t,r){"use strict";r("d3b7"),r("96cf");var n=r("1da1"),a=r("bc3a"),c=r.n(a),o=r("4360"),u=c.a.create({baseURL:"http://localhost:8000",withCredentials:!0});u.interceptors.response.use((function(e){return e}),(function(e){return!e.response||401!==e.response.status&&419!==e.response.status||o["a"].getters["auth/guest"]||o["a"].dispatch("auth/logout"),Promise.reject(e)})),t["a"]={login:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.get("/sanctum/csrf-cookie");case 2:return t.next=4,u.post("/login",e);case 4:case"end":return t.stop()}}),t)})))()},logout:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.post("/logout");case 2:case"end":return e.stop()}}),e)})))()},getAuthUser:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.get("/api/users/auth");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},registerUser:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.get("/sanctum/csrf-cookie");case 2:return t.next=4,u.post("/register",e);case 4:case"end":return t.stop()}}),t)})))()}}},e45c:function(e,t,r){},eb4b:function(e,t,r){"use strict";r("8e8c")}});
//# sourceMappingURL=app~d0ae3f07.90620480.js.map