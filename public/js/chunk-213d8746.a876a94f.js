(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-213d8746"],{"062f":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("ul",{staticClass:"profile__information-ul"},[a("li",{staticClass:"profile__information-li"},[a("h4",{staticClass:"profile__information-text"},[t._v("На сайте: ")]),a("p",{staticClass:"profile__information-date"},[t._v("03.05.2021")])]),a("li",{staticClass:"profile__information-li"},[a("h4",{staticClass:"profile__information-text"},[t._v("Возраст: ")]),a("p",{staticClass:"profile__information-date"},[t._v("160 лет")])])])])}],r={name:"ProfileInfo"},l=r,n=a("2877"),o=Object(n["a"])(l,i,e,!1,null,"05b1dc65",null);s["a"]=o.exports},"26d3":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"main"},[a("div",{staticClass:"sidebar"},[a("div",{staticClass:"sidebar__top"},[t._m(0),a("div",{staticClass:"sidebar__menu"},[a("ul",{staticClass:"sidebar__menu-ul"},[a("li",{staticClass:"sidebar__menu-li"},[a("router-link",{staticClass:"sidebar__menu-link",attrs:{to:"/feed","active-class":"active-link"}},[a("i",{staticClass:"fas fa-home icon"}),a("span",[t._v("Главная")])])],1),a("li",{staticClass:"sidebar__menu-li"},[a("router-link",{staticClass:"sidebar__menu-link",attrs:{to:"/profile"}},[a("i",{staticClass:"fas fa-user icon"}),a("span",[t._v("Профиль")])]),a("router-link",{staticClass:"sidebar__menu-icon",attrs:{to:"/notification"}},[a("i",{staticClass:"fas fa-bell right-icon"})])],1),a("li",{staticClass:"sidebar__menu-li"},[a("router-link",{staticClass:"sidebar__menu-link",attrs:{to:"/messenger"}},[a("i",{staticClass:"fas fa-comments icon"}),a("span",[t._v("Мессенджер")])])],1),a("li",{staticClass:"sidebar__menu-li"},[a("router-link",{staticClass:"sidebar__menu-link",attrs:{to:"/friends","active-class":"active-link"}},[a("i",{staticClass:"fas fa-users icon"}),a("span",[t._v("Друзья")])])],1)])])]),t._m(1)]),a("div",{staticClass:"content"},[a("div",{staticClass:"content__main"},[a("div",{staticClass:"content__header"},[a("div",{staticClass:"content__left"},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"fas fa-arrow-left arrow-back"})]),a("h2",{staticClass:"title"},[t._v("Настройки аккаунта")])],1)]),t._m(2)]),a("div",{staticClass:"content__right"},[a("div",{staticClass:"profile__top"},[a("div",{staticClass:"profile"},[a("ProfileTop",{attrs:{users:t.users}})],1)]),a("div",{staticClass:"profile__stats"},[a("ProfileStats")],1),a("div",{staticClass:"profile__information"},[a("ProfileInfo")],1),a("ProfileController",{attrs:{users:t.users}})],1)])])])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"sidebar-link",attrs:{href:"#"}},[a("img",{staticClass:"sidebar-logo",attrs:{src:"",alt:"Logo..."}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sidebar__bottom"},[a("ul",{staticClass:"authors"},[a("li",{staticClass:"authors__list"},[a("a",{staticClass:"authors-list",attrs:{href:"https://vk.com/herobrine_vova_world_mistik31"}},[t._v("Vova Kotov")])]),a("li",{staticClass:"authors__list"},[a("a",{staticClass:"authors-list",attrs:{href:"https://vk.com/alex_developer"}},[t._v("Алексей Сильвейструк")])])]),a("div",{staticClass:"bottom"},[t._v("2021 © fPlanet")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content__bottom"},[a("div",{staticClass:"user__settings"},[a("h4",[t._v("Основная информация")]),a("div",{staticClass:"form__group-double"},[a("div",{staticClass:"input-group"},[a("label",{attrs:{for:"name"}},[t._v("Ваше имя")]),a("input",{attrs:{type:"text",id:"name"}})]),a("div",{staticClass:"input-group login-field"},[a("label",{attrs:{for:"login"}},[t._v("Логин")]),a("input",{attrs:{type:"text",id:"login"}})])]),a("div",{staticClass:"email"},[a("div",{staticClass:"input-group"},[a("label",{attrs:{for:"email"}},[t._v("E-mail")]),a("input",{attrs:{type:"text",id:"email"}})])]),a("h4",[t._v("Безопасность")]),a("div",{staticClass:"form__group-double"},[a("div",{staticClass:"input-group"},[a("label",{attrs:{for:"password"}},[t._v("Пароль")]),a("input",{attrs:{type:"password",id:"password"}})]),a("div",{staticClass:"input-group"},[a("label",{attrs:{for:"password__confirm"}},[t._v("Подтверждение")]),a("input",{attrs:{type:"password",id:"password__confirm"}})])]),a("div",{staticClass:"btn-right"},[a("a",{staticClass:"btn",attrs:{href:"#"}},[a("span",[t._v("Сохранить")])])])])])}],r=a("bc3a"),l=a.n(r),n=a("62e6"),o=a("2a71"),c=a("062f"),_=a("b176"),u={name:"Friends",components:{ProfileController:_["a"],ProfileInfo:c["a"],ProfileStats:o["a"],ProfileTop:n["a"]},data:function(){return{users:[]}},methods:{fetchUsers:function(){var t=this,s=this.$cookies.get("token");l.a.get("/api/user",{headers:{Authorization:"Bearer ".concat(s)}}).then((function(s){console.log(s.data);var a=s.data;200!==s.status&&"OK"!==s.statusText&&console.log("Проблема с сервером"),t.users.push({currentUser:a})})).catch((function(t){return console.log(t)}))}},mounted:function(){this.fetchUsers()}},f=u,p=(a("3e4b"),a("2877")),v=Object(p["a"])(f,i,e,!1,null,null,null);s["default"]=v.exports},"2a71":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("ul",{staticClass:"profile__stats-ul"},[a("li",{staticClass:"profile__stats-li"},[a("a",{staticClass:"profile__stats-a",attrs:{href:"#"}},[a("h3",[t._v("0")]),a("p",[t._v("подписчиков")])])]),a("li",{staticClass:"profile__stats-li"},[a("a",{staticClass:"profile__stats-a",attrs:{href:"#"}},[a("h3",[t._v("0")]),a("p",[t._v("друзей")])])])])])}],r={name:"ProfileStats"},l=r,n=a("2877"),o=Object(n["a"])(l,i,e,!1,null,"575da482",null);s["a"]=o.exports},"3e4b":function(t,s,a){"use strict";a("bf50")},"62e6":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"profile-top"},[t._m(0),t._l(t.users,(function(s){return a("div",{key:s.currentUser.id,staticClass:"profile__info"},[a("div",{staticClass:"profile-container"},["admin"===s.currentUser.roles?a("div",{staticClass:"profile-verify"},[a("span",{staticClass:"profile-name"},[t._v(t._s(s.currentUser.name))]),a("i",{staticClass:"fas fa-check check"})]):a("span",{staticClass:"profile-name"},[t._v(t._s(s.currentUser.name))]),a("i",{staticClass:"fas fa-pen pen"})]),a("span",{staticClass:"profile-nickname"},[t._v("@"+t._s(s.currentUser.username))])])}))],2)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"profile__avatar"},[i("img",{staticClass:"profile-avatar",attrs:{src:a("cb15"),alt:"user-avatar"}}),i("span",{staticClass:"online"})])}],r={name:"ProfileTop",props:["users"]},l=r,n=a("2877"),o=Object(n["a"])(l,i,e,!1,null,"77f8c516",null);s["a"]=o.exports},b176:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},t._l(t.users,(function(s){return a("div",{key:s.currentUser.id,staticClass:"profile__controller"},[a("router-link",{staticClass:"edit-profile",attrs:{to:"/settings"}},[t._v("Настройки")]),"user"===s.currentUser.roles?a("a",{staticClass:"verify-profile",attrs:{href:"#"}},[t._v("Верификация")]):t._e(),a("a",{staticClass:"logout",attrs:{href:"#"},on:{click:t.logout}},[t._v("Выход")])],1)})),0)},e=[],r=a("bc3a"),l=a.n(r),n={name:"ProfileController",props:["users"],methods:{logout:function(){var t=this;return l.a.get("/api/logout").then((function(s){console.log(s),t.$cookies.set("token",""),t.$router.push("/")})).catch((function(t){return console.log(t)}))}}},o=n,c=a("2877"),_=Object(c["a"])(o,i,e,!1,null,null,null);s["a"]=_.exports},bf50:function(t,s,a){},cb15:function(t,s,a){t.exports=a.p+"img/default-avatar.d961d73a.png"}}]);
//# sourceMappingURL=chunk-213d8746.a876a94f.js.map