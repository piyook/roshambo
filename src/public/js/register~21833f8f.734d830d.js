(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register~21833f8f"],{"126c":function(e,t,r){"use strict";r("9b5b")},"9b5b":function(e,t,r){},afad:function(e,t,r){"use strict";r("b0c0");var o=r("7a23"),a=Object(o["H"])("data-v-1859cd74");Object(o["u"])("data-v-1859cd74");var n={key:0,class:"form-group"},s=Object(o["i"])("label",{for:"exampleInputEmail1"},"Choose A Public User Name",-1),c=Object(o["i"])("small",{class:"form-text text-muted"},"Only your username is shown in hiscore tables",-1),i={class:"form-group"},u=Object(o["i"])("label",{for:"exampleInputEmail1"},"Email address",-1),l={class:"form-group"},d=Object(o["i"])("label",{for:"exampleInputPassword1"},"Password",-1),b={key:1,class:"form-group"},m=Object(o["i"])("label",{for:"exampleInputPassword1"},"Confirm Password",-1),p=Object(o["i"])("div",{class:"row  justify-content-center"},[Object(o["i"])("button",{type:"submit",class:"btn btn-primary my-5"},"Submit")],-1);Object(o["s"])();var f=a((function(e,t,r,a,f,j){return Object(o["r"])(),Object(o["f"])("form",{onSubmit:t[5]||(t[5]=Object(o["G"])((function(){return j.submitForm&&j.submitForm.apply(j,arguments)}),["prevent"]))},[j.formMode?(Object(o["r"])(),Object(o["f"])("div",n,[s,Object(o["F"])(Object(o["i"])("input",{type:"name",class:"form-control","aria-describedby":"nameHelp",placeholder:"Enter a username","onUpdate:modelValue":t[1]||(t[1]=function(e){return f.name=e})},null,512),[[o["D"],f.name]]),c])):Object(o["g"])("",!0),Object(o["i"])("div",i,[u,Object(o["F"])(Object(o["i"])("input",{type:"email",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":t[2]||(t[2]=function(e){return f.email=e})},null,512),[[o["D"],f.email]])]),Object(o["i"])("div",l,[d,Object(o["F"])(Object(o["i"])("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=function(e){return f.password=e})},null,512),[[o["D"],f.password]])]),j.formMode?(Object(o["r"])(),Object(o["f"])("div",b,[m,Object(o["F"])(Object(o["i"])("input",{type:"password",class:"form-control",placeholder:"Retype Password","onUpdate:modelValue":t[4]||(t[4]=function(e){return f.password_confirmation=e})},null,512),[[o["D"],f.password_confirmation]])])):Object(o["g"])("",!0),p],32)})),j=r("2fa3"),O=r("b012"),h={props:["mode"],data:function(){return{name:null,email:null,password:null,password_confirmation:null,error:null}},methods:{submitForm:function(){var e=this,t={name:this.name,email:this.email,password:this.password,password_confirmation:this.password_confirmation};if("register"==this.mode)return this.error=null,void O["a"].registerUser(t).then((function(){return e.$router.push({name:"Authorized"})})).catch((function(t){return e.error=Object(j["a"])(t)}));O["a"].login(t).then((function(){e.$store.dispatch("auth/setGuest",{value:!1}),e.$router.push({name:"Authorized"})})).catch((function(t){return e.error=Object(j["a"])(t)}))}},computed:{formMode:function(){return"register"===this.mode}}};r("b808");h.render=f,h.__scopeId="data-v-1859cd74";t["a"]=h},b808:function(e,t,r){"use strict";r("d868")},d868:function(e,t,r){},eaff:function(e,t,r){"use strict";r.r(t);var o=r("7a23"),a=Object(o["H"])("data-v-ebb1f272");Object(o["u"])("data-v-ebb1f272");var n={class:"container-sm"},s=Object(o["i"])("h1",{class:"text-center pt-4 pb-4"},"Register Now",-1),c={class:"text-center"},i=Object(o["h"])("Already Registered? Login Here ");Object(o["s"])();var u=a((function(e,t,r,u,l,d){var b=Object(o["z"])("login-form"),m=Object(o["z"])("router-link");return Object(o["r"])(),Object(o["f"])("div",n,[s,Object(o["i"])(b,{mode:"register"}),Object(o["i"])("div",c,[Object(o["i"])(m,{to:"/userlogin"},{default:a((function(){return[i]})),_:1})])])})),l=r("afad"),d={components:{LoginForm:l["a"]}};r("126c");d.render=u,d.__scopeId="data-v-ebb1f272";t["default"]=d}}]);
//# sourceMappingURL=register~21833f8f.734d830d.js.map