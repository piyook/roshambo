(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register~31ecd969"],{"1ce0":function(e,t,r){},9861:function(e,t,r){"use strict";r("1ce0")},afad:function(e,t,r){"use strict";r("b0c0");var o=r("7a23"),n=Object(o["D"])("data-v-3b85a408");Object(o["s"])("data-v-3b85a408");var a={class:"form-group"},c=Object(o["g"])("label",{for:"exampleInputEmail1"},"Name",-1),s={class:"form-group"},i=Object(o["g"])("label",{for:"exampleInputEmail1"},"Email address",-1),u={class:"form-group"},l=Object(o["g"])("label",{for:"exampleInputPassword1"},"Password",-1),d={key:0,class:"form-group"},m=Object(o["g"])("label",{for:"exampleInputPassword1"},"Confirm Password",-1),p=Object(o["g"])("button",{type:"submit",class:"btn btn-primary mt-5"},"Submit",-1);Object(o["q"])();var b=n((function(e,t,r,n,b,f){return Object(o["p"])(),Object(o["d"])("form",{onSubmit:t[5]||(t[5]=Object(o["C"])((function(){return f.submitForm&&f.submitForm.apply(f,arguments)}),["prevent"]))},[Object(o["g"])("div",a,[c,Object(o["B"])(Object(o["g"])("input",{type:"name",class:"form-control","aria-describedby":"nameHelp",placeholder:"Enter your name","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.name=e})},null,512),[[o["y"],b.name]])]),Object(o["g"])("div",s,[i,Object(o["B"])(Object(o["g"])("input",{type:"email",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":t[2]||(t[2]=function(e){return b.email=e})},null,512),[[o["y"],b.email]])]),Object(o["g"])("div",u,[l,Object(o["B"])(Object(o["g"])("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=function(e){return b.password=e})},null,512),[[o["y"],b.password]])]),f.formMode?(Object(o["p"])(),Object(o["d"])("div",d,[m,Object(o["B"])(Object(o["g"])("input",{type:"password",class:"form-control",placeholder:"Retype Password","onUpdate:modelValue":t[4]||(t[4]=function(e){return b.password_confirmation=e})},null,512),[[o["y"],b.password_confirmation]])])):Object(o["e"])("",!0),p],32)})),f=r("2fa3"),j=r("b012"),O={props:["mode"],data:function(){return{name:null,email:null,password:null,password_confirmation:null,error:null}},methods:{submitForm:function(){var e=this,t={name:this.name,email:this.email,password:this.password,password_confirmation:this.password_confirmation};if("register"==this.mode)return this.error=null,void j["a"].registerUser(t).then((function(){return e.$router.push("Authorized")})).catch((function(t){return e.error=Object(f["a"])(t)}));j["a"].login(t).then((function(){e.$store.dispatch("auth/setGuest",{value:!1}),e.$router.push("Authorized")})).catch((function(t){return e.error=Object(f["a"])(t)}))}},computed:{formMode:function(){return"register"===this.mode}}};r("9861");O.render=b,O.__scopeId="data-v-3b85a408";t["a"]=O},b0c0:function(e,t,r){var o=r("83ab"),n=r("9bf2").f,a=Function.prototype,c=a.toString,s=/^\s*function ([^ (]*)/,i="name";o&&!(i in a)&&n(a,i,{configurable:!0,get:function(){try{return c.call(this).match(s)[1]}catch(e){return""}}})},eaff:function(e,t,r){"use strict";r.r(t);var o=r("7a23"),n={class:"container-sm"},a=Object(o["g"])("h1",{class:"text-center pt-4 pb-4"},"Register Now",-1);function c(e,t,r,c,s,i){var u=Object(o["v"])("login-form");return Object(o["p"])(),Object(o["d"])("div",n,[a,Object(o["g"])(u,{mode:"register"})])}var s=r("afad"),i={components:{LoginForm:s["a"]}};i.render=c;t["default"]=i}}]);
//# sourceMappingURL=register~31ecd969.2686b5a3.js.map