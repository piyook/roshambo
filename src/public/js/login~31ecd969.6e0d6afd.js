(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login~31ecd969"],{"62cc":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),o={class:"container"},a=Object(n["g"])("h1",{class:"text-center pt-4 pb-4"},"Login To Start",-1);function c(e,t,r,c,s,i){var u=Object(n["v"])("login-form");return Object(n["p"])(),Object(n["d"])("div",o,[a,Object(n["g"])(u,{mode:"login"})])}var s=r("afad"),i={components:{LoginForm:s["a"]}};i.render=c;t["default"]=i},afad:function(e,t,r){"use strict";r("b0c0");var n=r("7a23"),o=Object(n["D"])("data-v-5a9b96f8");Object(n["s"])("data-v-5a9b96f8");var a={class:"form-group"},c=Object(n["g"])("label",{for:"exampleInputEmail1"},"Name",-1),s={class:"form-group"},i=Object(n["g"])("label",{for:"exampleInputEmail1"},"Email address",-1),u={class:"form-group"},l=Object(n["g"])("label",{for:"exampleInputPassword1"},"Password",-1),d={key:0,class:"form-group"},m=Object(n["g"])("label",{for:"exampleInputPassword1"},"Confirm Password",-1),p=Object(n["g"])("button",{type:"submit",class:"btn btn-primary mt-5"},"Submit",-1);Object(n["q"])();var b=o((function(e,t,r,o,b,f){return Object(n["p"])(),Object(n["d"])("form",{onSubmit:t[5]||(t[5]=Object(n["C"])((function(){return f.submitForm&&f.submitForm.apply(f,arguments)}),["prevent"]))},[Object(n["g"])("div",a,[c,Object(n["B"])(Object(n["g"])("input",{type:"name",class:"form-control","aria-describedby":"nameHelp",placeholder:"Enter your name","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.name=e})},null,512),[[n["y"],b.name]])]),Object(n["g"])("div",s,[i,Object(n["B"])(Object(n["g"])("input",{type:"email",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":t[2]||(t[2]=function(e){return b.email=e})},null,512),[[n["y"],b.email]])]),Object(n["g"])("div",u,[l,Object(n["B"])(Object(n["g"])("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=function(e){return b.password=e})},null,512),[[n["y"],b.password]])]),f.formMode?(Object(n["p"])(),Object(n["d"])("div",d,[m,Object(n["B"])(Object(n["g"])("input",{type:"password",class:"form-control",placeholder:"Retype Password","onUpdate:modelValue":t[4]||(t[4]=function(e){return b.password_confirmation=e})},null,512),[[n["y"],b.password_confirmation]])])):Object(n["e"])("",!0),p],32)})),f=r("2fa3"),j=r("b012"),O={props:["mode"],data:function(){return{name:null,email:null,password:null,password_confirmation:null,error:null}},methods:{submitForm:function(){var e=this,t={name:this.name,email:this.email,password:this.password,password_confirmation:this.password_confirmation};if("register"==this.mode)return this.error=null,void j["a"].registerUser(t).then((function(){return e.$router.push({name:"Authorized"})})).catch((function(t){return e.error=Object(f["a"])(t)}));j["a"].login(t).then((function(){e.$store.dispatch("auth/setGuest",{value:!1}),e.$router.push({name:"Authorized"})})).catch((function(t){return e.error=Object(f["a"])(t)}))}},computed:{formMode:function(){return"register"===this.mode}}};r("b00c");O.render=b,O.__scopeId="data-v-5a9b96f8";t["a"]=O},b00c:function(e,t,r){"use strict";r("f012")},b0c0:function(e,t,r){var n=r("83ab"),o=r("9bf2").f,a=Function.prototype,c=a.toString,s=/^\s*function ([^ (]*)/,i="name";n&&!(i in a)&&o(a,i,{configurable:!0,get:function(){try{return c.call(this).match(s)[1]}catch(e){return""}}})},f012:function(e,t,r){}}]);
//# sourceMappingURL=login~31ecd969.6e0d6afd.js.map