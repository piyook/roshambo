(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register~31ecd969"],{a159:function(e,t,r){"use strict";r("dee0")},afad:function(e,t,r){"use strict";r("b0c0");var a=r("7a23"),o=Object(a["D"])("data-v-8e38d97a");Object(a["s"])("data-v-8e38d97a");var n={class:"form-group"},s=Object(a["g"])("label",{for:"exampleInputEmail1"},"Name",-1),c={class:"form-group"},i=Object(a["g"])("label",{for:"exampleInputEmail1"},"Email address",-1),u={class:"form-group"},l=Object(a["g"])("label",{for:"exampleInputPassword1"},"Password",-1),d={key:0,class:"form-group"},m=Object(a["g"])("label",{for:"exampleInputPassword1"},"Confirm Password",-1),p=Object(a["g"])("button",{type:"submit",class:"btn btn-primary mt-5"},"Register",-1);Object(a["q"])();var b=o((function(e,t,r,o,b,f){return Object(a["p"])(),Object(a["d"])("form",{onSubmit:t[5]||(t[5]=Object(a["C"])((function(){return f.submitForm&&f.submitForm.apply(f,arguments)}),["prevent"]))},[Object(a["g"])("div",n,[s,Object(a["B"])(Object(a["g"])("input",{type:"name",class:"form-control","aria-describedby":"nameHelp",placeholder:"Enter your name","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.name=e})},null,512),[[a["y"],b.name]])]),Object(a["g"])("div",c,[i,Object(a["B"])(Object(a["g"])("input",{type:"email",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":t[2]||(t[2]=function(e){return b.email=e})},null,512),[[a["y"],b.email]])]),Object(a["g"])("div",u,[l,Object(a["B"])(Object(a["g"])("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=function(e){return b.password=e})},null,512),[[a["y"],b.password]])]),f.formMode?(Object(a["p"])(),Object(a["d"])("div",d,[m,Object(a["B"])(Object(a["g"])("input",{type:"password",class:"form-control",placeholder:"Retype Password","onUpdate:modelValue":t[4]||(t[4]=function(e){return b.passwordConfirm=e})},null,512),[[a["y"],b.passwordConfirm]])])):Object(a["e"])("",!0),p],32)})),f=r("2fa3"),j=r("b012"),O={props:["mode"],data:function(){return{name:null,email:null,password:null,passwordConfirm:null,error:null}},methods:{submitForm:function(){var e=this,t={name:this.name,email:this.email,password:this.password,passwordConfirm:this.passwordConfirm};if("register"==this.mode)return this.error=null,void j["a"].registerUser(t).then((function(){return e.$router.push("/authhome")})).catch((function(t){return e.error=Object(f["a"])(t)}));j["a"].login(t).then((function(){e.$store.dispatch("auth/setGuest",{value:!1}),e.$router.push("/authhome")})).catch((function(t){return e.error=Object(f["a"])(t)}))}},computed:{formMode:function(){return"register"===this.mode}}};r("a159");O.render=b,O.__scopeId="data-v-8e38d97a";t["a"]=O},b0c0:function(e,t,r){var a=r("83ab"),o=r("9bf2").f,n=Function.prototype,s=n.toString,c=/^\s*function ([^ (]*)/,i="name";a&&!(i in n)&&o(n,i,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(e){return""}}})},dee0:function(e,t,r){},eaff:function(e,t,r){"use strict";r.r(t);var a=r("7a23"),o={class:"container-sm"},n=Object(a["g"])("h1",{class:"text-center pt-4 pb-4"},"Register Now",-1);function s(e,t,r,s,c,i){var u=Object(a["v"])("login-form");return Object(a["p"])(),Object(a["d"])("div",o,[n,Object(a["g"])(u,{mode:"register"})])}var c=r("afad"),i={components:{LoginForm:c["a"]}};i.render=s;t["default"]=i}}]);
//# sourceMappingURL=register~31ecd969.b30c7a16.js.map