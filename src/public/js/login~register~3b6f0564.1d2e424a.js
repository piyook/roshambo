(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login~register~3b6f0564"],{"503d":function(e,t,r){"use strict";r("e09d")},afad:function(e,t,r){"use strict";r("b0c0");var n=r("7a23"),o=Object(n["J"])("data-v-41be73b5");Object(n["u"])("data-v-41be73b5");var a=Object(n["h"])("Login Error"),i=Object(n["h"])(" Email Or Password Not Recognised."),s=Object(n["i"])("br",null,null,-1),c=Object(n["h"])(" Try Again or Register as a New User? "),u=Object(n["h"])("REGISTER"),l=Object(n["h"])("TRY AGAIN"),d=Object(n["h"])("Registration Error"),b=Object(n["h"])(" Email Taken or Password Not Valid."),m=Object(n["i"])("br",null,null,-1),p=Object(n["h"])(" Go To Login or Try Again? "),f=Object(n["h"])("LOGIN"),O=Object(n["h"])("TRY AGAIN"),j={key:0,class:"form-group"},h=Object(n["i"])("label",{for:"exampleInputEmail1"},"Choose A Public User Name",-1),g=Object(n["i"])("small",{class:"form-text text-muted"},"Only your username is shown in hiscore tables",-1),w={class:"form-group"},E=Object(n["i"])("label",{for:"exampleInputEmail1"},"Email address",-1),v={class:"form-group"},y=Object(n["i"])("label",{for:"exampleInputPassword1"},"Password",-1),R={key:1,class:"form-group"},A=Object(n["i"])("label",{for:"exampleInputPassword1"},"Confirm Password",-1),M=Object(n["i"])("div",{class:"row  justify-content-center"},[Object(n["i"])("button",{type:"submit",class:"btn btn-primary my-5"},"Submit")],-1);Object(n["s"])();var x=o((function(e,t,r,x,I,k){var P=Object(n["z"])("alert-modal");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])(P,{isActive:k.loginErrorModal},{title:o((function(){return[a]})),yesButton:o((function(){return[u]})),cancelButton:o((function(){return[l]})),default:o((function(){return[i,s,c]})),_:1},8,["isActive"]),Object(n["i"])(P,{isActive:k.regErrorModal},{title:o((function(){return[d]})),yesButton:o((function(){return[f]})),cancelButton:o((function(){return[O]})),default:o((function(){return[b,m,p]})),_:1},8,["isActive"]),Object(n["i"])("form",{onSubmit:t[5]||(t[5]=Object(n["I"])((function(){return k.submitForm&&k.submitForm.apply(k,arguments)}),["prevent"]))},[k.formMode?(Object(n["r"])(),Object(n["f"])("div",j,[h,Object(n["H"])(Object(n["i"])("input",{type:"name",class:"form-control","aria-describedby":"nameHelp",placeholder:"Enter a username","onUpdate:modelValue":t[1]||(t[1]=function(e){return I.name=e})},null,512),[[n["E"],I.name]]),g])):Object(n["g"])("",!0),Object(n["i"])("div",w,[E,Object(n["H"])(Object(n["i"])("input",{type:"email",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":t[2]||(t[2]=function(e){return I.email=e})},null,512),[[n["E"],I.email]])]),Object(n["i"])("div",v,[y,Object(n["H"])(Object(n["i"])("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=function(e){return I.password=e})},null,512),[[n["E"],I.password]])]),k.formMode?(Object(n["r"])(),Object(n["f"])("div",R,[A,Object(n["H"])(Object(n["i"])("input",{type:"password",class:"form-control",placeholder:"Retype Password","onUpdate:modelValue":t[4]||(t[4]=function(e){return I.password_confirmation=e})},null,512),[[n["E"],I.password_confirmation]])])):Object(n["g"])("",!0),M],32)])})),I=(r("96cf"),r("1da1")),k=r("2fa3"),P=r("b012"),T=r("68e0"),_={props:["mode"],data:function(){return{name:null,email:null,password:null,password_confirmation:null,error:null}},methods:{submitForm:function(){var e=this,t={name:this.name,email:this.email,password:this.password,password_confirmation:this.password_confirmation};"register"==this.mode&&(this.error=null,P["a"].registerUser(t).then((function(){return e.$router.push({name:"Authorized"})})).catch(function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.error=Object(k["a"])(r),t.next=3,Object(T["a"])("regErrorModal");case 3:if(!t.sent){t.next=5;break}console.log("REG ERROR DETECTED");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),P["a"].login(t).then((function(){e.$store.dispatch("auth/setGuest",{value:!1}),e.$router.push({name:"Authorized"})})).catch(function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.error=Object(k["a"])(r),t.next=3,Object(T["a"])("loginErrorModal");case 3:if(!t.sent){t.next=5;break}e.$router.push({name:"Register"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},computed:{formMode:function(){return"register"===this.mode},loginErrorModal:function(){return"loginErrorModal"===this.$store.getters["modal/isModalVisible"]},regErrorModal:function(){return"regErrorModal"===this.$store.getters["modal/isModalVisible"]}}};r("503d");_.render=x,_.__scopeId="data-v-41be73b5";t["a"]=_},e09d:function(e,t,r){}}]);
//# sourceMappingURL=login~register~3b6f0564.1d2e424a.js.map