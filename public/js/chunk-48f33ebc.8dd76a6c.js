(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48f33ebc"],{a55b:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"form"},[s("div",{staticClass:"form__logo"},[t._v(" Logo... ")]),t._m(0),s("div",{staticClass:"input-group"},[s("label",[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),s("div",{staticClass:"input-group"},[s("label",[t._v("Пароль")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),s("div",{staticClass:"btn-group"},[s("router-link",{staticClass:"have-account",attrs:{to:"/"}},[t._v("У меня нет аккаунта")]),s("router-link",{staticClass:"btn btn-create",attrs:{to:"/login"}},[s("span",{on:{click:t.loginAccount}},[t._v("Войти")])]),s("div",{staticClass:"right"},[s("router-link",{staticClass:"forget-password",attrs:{to:"/forget"}},[t._v("Забыли пароль?")])],1)],1)]),s("div",{staticClass:"bottom-link-police"},[t._v("Политика конфиденциальности")])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form__text"},[s("h2",{staticClass:"form-title"},[t._v("Вход в учетную запись")])])}],o=s("bc3a"),n=s.n(o),l={name:"Login",data:function(){return{email:"",password:""}},methods:{loginAccount:function(){var t=this,a={email:this.email,password:this.password};n.a.post("/api/login",a).then((function(a){if(200===a.data.status){console.log(a.data);var s={token:a.data.token};t.$store.dispatch("GET_USER",s),t.$router.push("/feed")}else console.log(a)}))}}},r=l,c=(s("d6db"),s("2877")),u=Object(c["a"])(r,e,i,!1,null,null,null);a["default"]=u.exports},d6db:function(t,a,s){"use strict";s("e67a")},e67a:function(t,a,s){}}]);
//# sourceMappingURL=chunk-48f33ebc.8dd76a6c.js.map