(function(e){function t(t){for(var n,i,a=t[0],o=t[1],u=t[2],l=0,d=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var a=r[i];0!==c[a]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={"app~d0ae3f07":0},c={"app~d0ae3f07":0},s=[];function a(e){return o.p+"js/"+({"Register~f71cff67":"Register~f71cff67","authorized~31ecd969":"authorized~31ecd969","login~register~3b6f0564":"login~register~3b6f0564","login~634b0cac":"login~634b0cac","register~88d25dc5":"register~88d25dc5"}[e]||e)+"."+{"Register~f71cff67":"07ba8bf9","authorized~31ecd969":"9e659982","login~register~3b6f0564":"1d2e424a","login~634b0cac":"4adc2d19","register~88d25dc5":"0ab747d8"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r={"Register~f71cff67":1,"authorized~31ecd969":1,"login~register~3b6f0564":1,"login~634b0cac":1,"register~88d25dc5":1};i[e]?t.push(i[e]):0!==i[e]&&r[e]&&t.push(i[e]=new Promise((function(t,r){for(var n="css/"+({"Register~f71cff67":"Register~f71cff67","authorized~31ecd969":"authorized~31ecd969","login~register~3b6f0564":"login~register~3b6f0564","login~634b0cac":"login~634b0cac","register~88d25dc5":"register~88d25dc5"}[e]||e)+"."+{"Register~f71cff67":"7f143caa","authorized~31ecd969":"839e2367","login~register~3b6f0564":"3da928f3","login~634b0cac":"2ec02e27","register~88d25dc5":"343eb515"}[e]+".css",c=o.p+n,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var u=s[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===c))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===n||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[e],f.parentNode.removeChild(f),r(s)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){i[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=a(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,r[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;s.push([0,"chunk-vendors~0f485567","chunk-vendors~5ea1a303","chunk-vendors~e4173fa2","chunk-vendors~42d1a2d3","chunk-vendors~d939e436","chunk-vendors~f9ca8911"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1e90":function(e,t,r){"use strict";r("aac6")},"1fb9":function(e,t,r){"use strict";r("6173")},"2fa3":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){var t="API Error, please try again.";return e.response?e.response.data&&e.response.data.errors?e.response.data.errors:t:(console.error("API ".concat(e.config.url," not found")),t)}},"357e":function(e,t,r){"use strict";r("8215")},4360:function(e,t,r){"use strict";var n=r("5502"),i={updateLoadingStatus:function(e,t){e.isLoading=t.status}},c={checkLogStatus:function(e){return e.isLoggedIn}},s={},a=(r("b0c0"),r("a18c")),o=r("2fa3"),u=r("b012"),l={namespaced:!0,state:function(){return{user:!1,userId:!1,loading:!1,error:null}},mutations:{SET_USER:function(e,t){e.user=t},SET_USERID:function(e,t){e.userId=t},SET_LOADING:function(e,t){e.loading=t},SET_ERROR:function(e,t){e.error=t}},actions:{logout:function(e){var t=e.commit;return u["a"].logout().then((function(){t("SET_USER",!1),window.localStorage.setItem("guest",!0)})).then((function(){a["a"].push({path:"/userlogin"})})).catch((function(e){t("SET_ERROR",Object(o["a"])(e))}))},getAuthUser:function(e){var t=e.commit;return t("SET_LOADING",!0),u["a"].getAuthUser().then((function(e){t("SET_USER",e.data.name),t("SET_USERID",e.data.id),t("SET_LOADING",!1)})).catch((function(e){t("SET_LOADING",!1),t("SET_USER",!1),t("SET_ERROR",Object(o["a"])(e))}))},setGuest:function(e,t){var r=t.value;window.localStorage.setItem("guest",r)}},getters:{authUser:function(e){return e.user},error:function(e){return e.error},loading:function(e){return e.loading},loggedIn:function(e){return!!e.user},guest:function(){return JSON.parse(window.localStorage.getItem("guest"))},getUserId:function(e){return e.userId}}},d=(r("96cf"),r("1da1")),f=(r("d3b7"),r("bc3a")),b=r.n(f),p=r("68e0"),g=b.a.create({baseURL:"http://localhost:8000",withCredentials:!0});g.interceptors.response.use((function(e){return e}),function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["a"])("errorModal");case 2:return!t.response||401!==t.response.status&&419!==t.response.status||j.getters["auth/guest"]||j.dispatch("auth/logout"),e.abrupt("return",Promise.reject(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var h={game:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.get("/sanctum/csrf-cookie");case 2:return t.next=4,g.post("/api/game",{userGuess:e.userGuess,userStake:e.userStake});case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})))()},getScore:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.get("/sanctum/csrf-cookie");case 2:return t.next=4,g.get("/api/hiscores/"+e.userId);case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})))()},getHiscores:function(){return Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.get("/sanctum/csrf-cookie");case 2:return e.next=4,g.get("/api/hiscores");case 4:return t=e.sent,e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})))()},bankReset:function(){return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.get("/sanctum/csrf-cookie");case 2:return e.next=4,g.post("/api/hiscores");case 4:case"end":return e.stop()}}),e)})))()}},m={namespaced:!0,state:function(){return{userChoice:"scissors",isAiTurn:!1,wins:0,losses:0,draws:0,userBank:100,sessionWinnings:0,hiScores:[]}},getters:{getUserChoice:function(e){return e.userChoice},getIsAiTurn:function(e){return e.isAiTurn},getScores:function(e){return[e.wins,e.losses,e.draws]},getUserBank:function(e){return e.userBank},getSessionWinnings:function(e){return e.sessionWinnings},getHiScores:function(e){return e.hiScores}},mutations:{updateChoice:function(e,t){e.userChoice=t.userChoice},updateAiTurn:function(e,t){e.isAiTurn=t.status},updateWin:function(e){e.wins++},updateLosses:function(e){e.losses++},updateDraws:function(e){e.draws++},updateSessionWinnings:function(e,t){var r=e.sessionWinnings+t.stake;e.sessionWinnings=r},resetSessionWinnings:function(e){e.sessionWinnings=0}},actions:{getAPIGuess:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.game(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},loadHiScores:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.getHiscores();case 2:return r=t.sent,e.hiScores=r,t.abrupt("return",e.hiScores);case 5:case"end":return t.stop()}}),t)})))()},getUserBank:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={userId:e.rootGetters["auth/getUserId"]},t.next=3,h.getScore(r);case 3:n=t.sent,e.state.userBank=n;case 5:case"end":return t.stop()}}),t)})))()},resetBank:function(){return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.bankReset();case 2:case"end":return e.stop()}}),e)})))()},updateUserChoice:function(e,t){e.commit("updateChoice",t)}}},O={namespaced:!0,state:function(){return{modalPromise:null,modalVisibility:!1}},getters:{isModalVisible:function(e){return e.modalVisibility}},mutations:{setModal:function(e,t){e.modalPromise=t.modalPromise},modalResponse:function(e,t){e.modalPromise(t.response)},modalVisibility:function(e,t){e.modalVisibility=t.isModalVisible}},actions:{awaitModalResponse:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return e.commit("setModal",{modalPromise:t})}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}}},j=t["a"]=Object(n["a"])({state:function(){return{isLoading:!1}},getters:c,mutations:i,actions:s,modules:{auth:l,api:m,modal:O}})},"4bac":function(e,t,r){"use strict";r("9b56")},"4f52":function(e,t,r){},"522f":function(e,t,r){e.exports=r.p+"img/piyook_logo.fc500f8d.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function i(e,t,r,i,c,s){var a=Object(n["z"])("header-comp"),o=Object(n["z"])("router-view");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])(a),Object(n["i"])(o,null,{default:Object(n["G"])((function(e){return[Object(n["i"])(n["c"],{name:"route",mode:"out-in"},{default:Object(n["G"])((function(){return[(Object(n["r"])(),Object(n["f"])(Object(n["A"])(e.Component)))]})),_:2},1024)]})),_:1})])}var c=r("522f"),s=r.n(c),a=Object(n["J"])("data-v-79311446");Object(n["u"])("data-v-79311446");var o=Object(n["h"])("SERVER ERROR"),u=Object(n["h"])(" There Was An Error Connecting To The Server."),l=Object(n["i"])("br",null,null,-1),d=Object(n["h"])(" Please Try Again Later "),f=Object(n["h"])("OK"),b=Object(n["h"])("CANCEL"),p=Object(n["i"])("img",{src:s.a},null,-1),g=Object(n["i"])("h5",{class:"text-center"}," Rock, Paper, Scissors, Lizard, Spock ",-1),h={key:0,id:"nav",class:"text-center mt-2"},m=Object(n["h"])("Home"),O=Object(n["h"])(" | "),j=Object(n["h"])("About"),v={key:1,id:"nav",class:"text-center mt-2"},k=Object(n["h"])("Home"),w=Object(n["h"])(" | "),y=Object(n["h"])("About"),R={key:2,class:"text-right mr-5 mt-4 fixed-top userDetails"},S={id:"userName"};Object(n["s"])();var x=a((function(e,t,r,i,c,s){var x=Object(n["z"])("alert-modal"),C=Object(n["z"])("router-link");return Object(n["r"])(),Object(n["f"])("section",null,[Object(n["i"])(x,{isActive:s.errorModal},{title:a((function(){return[o]})),yesButton:a((function(){return[f]})),cancelButton:a((function(){return[b]})),default:a((function(){return[u,l,d]})),_:1},8,["isActive"]),p,g,e.authUser?(Object(n["r"])(),Object(n["f"])("div",v,[Object(n["i"])(C,{to:"/userhome"},{default:a((function(){return[k]})),_:1}),w,Object(n["i"])(C,{to:"/about"},{default:a((function(){return[y]})),_:1})])):(Object(n["r"])(),Object(n["f"])("div",h,[Object(n["i"])(C,{to:"/"},{default:a((function(){return[m]})),_:1}),O,Object(n["i"])(C,{to:"/about"},{default:a((function(){return[j]})),_:1})])),e.authUser?(Object(n["r"])(),Object(n["f"])("div",R,[Object(n["i"])("p",S," Player: "+Object(n["C"])(e.authUser),1),Object(n["i"])("button",{type:"button",class:"btn btn-secondary",onClick:t[1]||(t[1]=function(){return s.logout&&s.logout.apply(s,arguments)})},"Logout")])):Object(n["g"])("",!0)])})),C=r("5530"),E=r("5502"),A={computed:Object(C["a"])(Object(C["a"])({},Object(E["b"])("auth",["authUser"])),{},{errorModal:function(){return"errorModal"===this.$store.getters["modal/isModalVisible"]}}),methods:{logout:function(){this.$store.dispatch("auth/logout")}}};r("1e90");A.render=x,A.__scopeId="data-v-79311446";var _=A,M={components:{HeaderComp:_}};r("7aec");M.render=i;var z=M,I=r("a18c"),L=r("4360"),P=(r("435e"),Object(n["J"])("data-v-13fd3e24"));Object(n["u"])("data-v-13fd3e24");var U={id:"title"},T={id:"body"},H=Object(n["h"])("OK"),B=Object(n["h"])("CANCEL");Object(n["s"])();var D=P((function(e,t,r,i,c,s){return Object(n["r"])(),Object(n["f"])(n["b"],{to:"body"},[Object(n["i"])(n["c"],{name:"modal"},{default:P((function(){return[r.isActive?(Object(n["r"])(),Object(n["f"])("div",{key:0,class:"modal",onClick:t[4]||(t[4]=Object(n["I"])((function(){return s.closeModal&&s.closeModal.apply(s,arguments)}),["stop"]))},[Object(n["i"])("div",{id:"modalBox",onClick:t[3]||(t[3]=Object(n["I"])((function(){return s.blankEvent&&s.blankEvent.apply(s,arguments)}),["stop"]))},[Object(n["i"])("div",U,[Object(n["y"])(e.$slots,"title")]),Object(n["i"])("div",T,[Object(n["y"])(e.$slots,"default")]),Object(n["i"])("div",null,[s.isModalActive?(Object(n["r"])(),Object(n["f"])("button",{key:0,onClick:t[1]||(t[1]=Object(n["I"])((function(){return s.confirmModal&&s.confirmModal.apply(s,arguments)}),["stop"]))},[Object(n["y"])(e.$slots,"yesButton",{},(function(){return[H]}))])):Object(n["g"])("",!0),s.isModalActive?(Object(n["r"])(),Object(n["f"])("button",{key:1,onClick:t[2]||(t[2]=Object(n["I"])((function(){return s.closeModal&&s.closeModal.apply(s,arguments)}),["stop"]))},[Object(n["y"])(e.$slots,"cancelButton",{},(function(){return[B]}))])):Object(n["g"])("",!0)])])])):Object(n["g"])("",!0)]})),_:1})])})),V={props:["isActive"],methods:{closeModal:function(){this.$store.commit("modal/modalResponse",{response:!1})},confirmModal:function(){this.$store.commit("modal/modalResponse",{response:!0})},blankEvent:function(){}},computed:{isModalActive:function(){return this.isActive}}};r("357e");V.render=D,V.__scopeId="data-v-13fd3e24";var G=V,N=Object(n["J"])("data-v-146b3020");Object(n["u"])("data-v-146b3020");var W={class:"spinner"},J=Object(n["i"])("div",{class:"lds-roller"},[Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div")],-1);Object(n["s"])();var $=N((function(e,t){return Object(n["r"])(),Object(n["f"])("div",W,[J])}));r("d881");const K={};K.render=$,K.__scopeId="data-v-146b3020";var q=K,F=Object(n["e"])(z);F.use(L["a"]).use(I["a"]).component("alert-modal",G).component("load-spinner",q),F.mount("#app")},6173:function(e,t,r){},"68e0":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r("96cf");var n=r("1da1"),i=r("4360"),c=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i["a"].commit("modal/modalVisibility",{isModalVisible:t}),document.documentElement.style.overflow="hidden",e.next=4,i["a"].dispatch("modal/awaitModalResponse");case 4:return r=e.sent,i["a"].commit("modal/modalVisibility",{isModalVisible:!1}),document.documentElement.style.overflow="visible",e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"7aec":function(e,t,r){"use strict";r("4f52")},8215:function(e,t,r){},"8b5c":function(e,t,r){"use strict";var n=r("7a23"),i=Object(n["J"])("data-v-0406c2c5");Object(n["u"])("data-v-0406c2c5");var c={class:"text-center p-4 mt-4 border border-primary mb-5"},s=Object(n["i"])("h2",{class:"text-center mt-2 mb-3"},"RULES",-1),a=Object(n["i"])("p",{class:"mb-3"},[Object(n["h"])(" Start with 100 tokens in your bank and gamble a stake each turn."),Object(n["i"])("br"),Object(n["i"])("span",{class:"win"},"Win"),Object(n["h"])(" to get the stake added to your bank. "),Object(n["i"])("br"),Object(n["i"])("span",{class:"lose"},"Lose"),Object(n["h"])(" and the stake is taken from your bank."),Object(n["i"])("br"),Object(n["h"])(" Draw and your stake is returned."),Object(n["i"])("br"),Object(n["h"])(" If your tokens reach zero then the game is over ")],-1),o={id:"imageDeck"},u=Object(n["i"])("h2",{class:"display-5 text-primary"},"Rock",-1),l=Object(n["i"])("img",{src:"/img/rock.png"},null,-1),d=Object(n["i"])("h2",{class:"display-5 text-primary"},"Paper",-1),f=Object(n["i"])("img",{src:"/img/paper.png"},null,-1),b=Object(n["i"])("h2",{class:"display-5 text-primary"},"Scissors",-1),p=Object(n["i"])("img",{src:"/img/scissors.png"},null,-1),g=Object(n["i"])("h2",{class:"text-primary"},"Lizard",-1),h=Object(n["i"])("img",{src:"/img/lizard.png"},null,-1),m=Object(n["i"])("h2",{class:"display-5 text-primary"},"Spock",-1),O=Object(n["i"])("img",{src:"/img/spock.png"},null,-1),j={id:"rulesCard",class:"mt-3"},v={class:"list-group rulesList"},k={class:"list-group rulesList"};Object(n["s"])();var w=i((function(e,t,r,i,w,y){return Object(n["r"])(),Object(n["f"])("section",c,[s,a,Object(n["i"])("div",o,[Object(n["i"])("div",{class:["itemCard",y.isHighlighted(["icon","rock"])],onMouseover:t[1]||(t[1]=function(e){return y.changeClass("rock")}),onMouseleave:t[2]||(t[2]=function(e){return y.changeClass(null)})},[u,l],34),Object(n["i"])("div",{class:["itemCard",y.isHighlighted(["icon","paper"])],onMouseover:t[3]||(t[3]=function(e){return y.changeClass("paper")}),onMouseleave:t[4]||(t[4]=function(e){return y.changeClass(null)})},[d,f],34),Object(n["i"])("div",{class:["itemCard",y.isHighlighted(["icon","scissors"])],onMouseover:t[5]||(t[5]=function(e){return y.changeClass("scissors")}),onMouseleave:t[6]||(t[6]=function(e){return y.changeClass(null)})},[b,p],34),Object(n["i"])("div",{class:["itemCard",y.isHighlighted(["icon","lizard"])],onMouseover:t[7]||(t[7]=function(e){return y.changeClass("lizard")}),onMouseleave:t[8]||(t[8]=function(e){return y.changeClass(null)})},[g,h],34),Object(n["i"])("div",{class:["itemCard",y.isHighlighted(["icon","spock"])],onMouseover:t[9]||(t[9]=function(e){return y.changeClass("spock")}),onMouseleave:t[10]||(t[10]=function(e){return y.changeClass(null)})},[m,O],34)]),Object(n["i"])("div",null,[Object(n["i"])("div",j,[Object(n["i"])("ul",v,[Object(n["i"])("li",{class:["list-group-item",y.isHighlighted(["scissors","paper"])]}," Scissors Cuts Paper ",2),Object(n["i"])("li",{class:["list-group-item rock",y.isHighlighted(["paper","rock"])]}," Paper Covers Rock ",2),Object(n["i"])("li",{class:["list-group-item",y.isHighlighted(["rock","lizard"])]}," Rock Crushes Lizard ",2),Object(n["i"])("li",{class:["list-group-item",y.isHighlighted(["lizard","spock"])]}," Lizard Poisons Spock ",2),Object(n["i"])("li",{class:["list-group-item",y.isHighlighted(["spock","scissors"])]}," Spock Smashes Scissors ",2)]),Object(n["i"])("ul",k,[Object(n["i"])("li",{class:["list-group-item",y.isHighlighted(["scissors","lizard"])]}," Scissors Stab Lizard ",2),Object(n["i"])("li",{class:["list-group-item",y.isHighlighted(["lizard","paper"])]}," Lizard Eats Paper ",2),Object(n["i"])("li",{class:["list-group-item",y.isHighlighted(["paper","spock"])]}," Paper Disproves Spock ",2),Object(n["i"])("li",{class:["list-group-item rock",y.isHighlighted(["spock","rock"])]}," Spock Vaporizes Rock ",2),Object(n["i"])("li",{class:["list-group-item rock",y.isHighlighted(["rock","scissors"])]}," Rock Blunts Scissors ",2)])])])])})),y=(r("caad"),r("2532"),{data:function(){return{activeClass:null}},computed:{},methods:{changeClass:function(e){this.activeClass=e},isHighlighted:function(e){return"icon"===e[0]?e[1]===this.activeClass&&"iconSelected":!!e.includes(this.activeClass)&&(e[0]===this.activeClass?"win":"lose")}}});r("1fb9");y.render=w,y.__scopeId="data-v-0406c2c5";t["a"]=y},"9b56":function(e,t,r){},a18c:function(e,t,r){"use strict";r("d3b7");var n=r("5530"),i=r("6c02"),c=r("4360"),s=r("7a23"),a=Object(s["J"])("data-v-5dc04d19");Object(s["u"])("data-v-5dc04d19");var o={class:"container"};Object(s["s"])();var u=a((function(e,t,r,n,i,c){var a=Object(s["z"])("home-hero"),u=Object(s["z"])("home-rules");return Object(s["r"])(),Object(s["f"])("div",o,[Object(s["i"])(a),Object(s["i"])(u)])})),l=Object(s["J"])("data-v-48947f78");Object(s["u"])("data-v-48947f78");var d={class:"text-center p-4 mt-4 border border-primary"},f=Object(s["i"])("h1",{class:"display-5 text-primary"},"Rock, Paper, Scissors, Lizard, Spock",-1),b=Object(s["i"])("div",{class:"display-4"}," A Simple Vue/Laravel Demo App ",-1);Object(s["s"])();var p=l((function(e,t,r,n,i,c){return Object(s["r"])(),Object(s["f"])("section",d,[f,b,Object(s["i"])("button",{type:"button",class:"btn btn-primary btn-lg m-3",onClick:t[1]||(t[1]=Object(s["I"])((function(){return c.login&&c.login.apply(c,arguments)}),["prevent"]))}," Play now ")])})),g={methods:{login:function(){this.$router.push({name:"Authorized"})}}};r("4bac");g.render=p,g.__scopeId="data-v-48947f78";var h=g,m=r("8b5c"),O={components:{HomeHero:h,HomeRules:m["a"]}};O.render=u,O.__scopeId="data-v-5dc04d19";var j=O;function v(e){var t=e.next,r=e.store;r.getters["auth/guest"]||r.getters["auth/authUser"]?t():r.dispatch("auth/getAuthUser").then((function(){r.getters["auth/authUser"]?t({name:"Authorized"}):(r.dispatch("auth/setGuest",{value:!0}),t())}))}function k(e){var t=e.next,r=e.store;r.getters["auth/authUser"]?t():r.dispatch("auth/getAuthUser").then((function(){r.getters["auth/authUser"]?t():t("/userlogin")}))}function w(e,t,r){var i=t[r];return i?function(){i(Object(n["a"])(Object(n["a"])({},e),{},{next:w(e,t,r+1)}))}:e.next}var y=[{path:"/",name:"Home",meta:{middleware:[v]},component:j},{path:"/userlogin",name:"Login",meta:{middleware:[v]},component:function(){return Promise.all([r.e("login~register~3b6f0564"),r.e("login~634b0cac")]).then(r.bind(null,"62cc"))}},{path:"/userregister",name:"Register",meta:{middleware:[v]},component:function(){return Promise.all([r.e("login~register~3b6f0564"),r.e("register~88d25dc5")]).then(r.bind(null,"eaff"))}},{path:"/userhome",name:"Authorized",meta:{middleware:[k]},component:function(){return r.e("authorized~31ecd969").then(r.bind(null,"5893"))}},{path:"/about",name:"About",meta:{middleware:[v]},component:function(){return r.e("authorized~31ecd969").then(r.bind(null,"478b"))}},{path:"/game",name:"Game",meta:{middleware:[k]},component:function(){return r.e("authorized~31ecd969").then(r.bind(null,"a233"))}},{path:"/:pathMatch(.*)*",name:"notfound",component:function(){return r.e("Register~f71cff67").then(r.bind(null,"ee5d"))}}],R=Object(i["a"])({history:Object(i["b"])("/"),routes:y});R.beforeEach((function(e,t,r){var i=e.meta.middleware,s={to:e,from:t,next:r,store:c["a"]};if(!i)return r();i[0](Object(n["a"])(Object(n["a"])({},s),{},{next:w(s,i,1)}))}));t["a"]=R},aac6:function(e,t,r){},b012:function(e,t,r){"use strict";r("d3b7"),r("ac1f"),r("466d"),r("96cf");var n=r("1da1"),i=r("bc3a"),c=r.n(i),s=r("4360"),a=r("68e0"),o=c.a.create({baseURL:"http://localhost:8000",withCredentials:!0});o.interceptors.response.use((function(e){return e}),function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.response||401!==t.response.status&&419!==t.response.status){e.next=3;break}return s["a"].getters["auth/guest"]||s["a"].dispatch("auth/logout"),e.abrupt("return");case 3:if(!t.response||!String(t.response.status).match(/^[5]/g)){e.next=7;break}return e.next=6,Object(a["a"])("errorModal");case 6:return e.abrupt("return");case 7:return e.abrupt("return",Promise.reject(t));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t["a"]={login:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.get("/sanctum/csrf-cookie");case 2:return t.next=4,o.post("/login",e);case 4:case"end":return t.stop()}}),t)})))()},logout:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].commit("api/resetSessionWinnings");case 2:return e.next=4,o.post("/logout");case 4:case"end":return e.stop()}}),e)})))()},getAuthUser:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.get("/api/users/auth");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},registerUser:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.get("/sanctum/csrf-cookie");case 2:return t.next=4,o.post("/register",e);case 4:case"end":return t.stop()}}),t)})))()}}},d881:function(e,t,r){"use strict";r("fdd4")},fdd4:function(e,t,r){}});
//# sourceMappingURL=app~d0ae3f07.1c3f1341.js.map