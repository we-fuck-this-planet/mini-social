(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d8be76e"],{"062f":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("ul",{staticClass:"profile__information-ul"},[a("li",{staticClass:"profile__information-li"},[a("h4",{staticClass:"profile__information-text"},[t._v("На сайте: ")]),a("p",{staticClass:"profile__information-date"},[t._v("03.05.2021")])]),a("li",{staticClass:"profile__information-li"},[a("h4",{staticClass:"profile__information-text"},[t._v("Возраст: ")]),a("p",{staticClass:"profile__information-date"},[t._v("160 лет")])])])])}],r={name:"ProfileInfo"},l=r,n=a("2877"),o=Object(n["a"])(l,e,i,!1,null,"05b1dc65",null);s["a"]=o.exports},"2a71":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("ul",{staticClass:"profile__stats-ul"},[a("li",{staticClass:"profile__stats-li"},[a("a",{staticClass:"profile__stats-a",attrs:{href:"#"}},[a("h3",[t._v("0")]),a("p",[t._v("подписчиков")])])]),a("li",{staticClass:"profile__stats-li"},[a("a",{staticClass:"profile__stats-a",attrs:{href:"#"}},[a("h3",[t._v("0")]),a("p",[t._v("друзей")])])])])])}],r={name:"ProfileStats"},l=r,n=a("2877"),o=Object(n["a"])(l,e,i,!1,null,"575da482",null);s["a"]=o.exports},"34c8":function(t,s,a){"use strict";a("66e1")},4787:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"main"},[a("div",{staticClass:"sidebar"},[a("div",{staticClass:"sidebar__top"},[t._m(0),a("div",{staticClass:"sidebar__menu"},[a("ul",{staticClass:"sidebar__menu-ul"},[a("li",{staticClass:"sidebar__menu-li"},[a("router-link",{staticClass:"sidebar__menu-link",attrs:{to:"/feed","active-class":"active-link"}},[a("i",{staticClass:"fas fa-home icon"}),a("span",[t._v("Главная")])])],1),a("li",{staticClass:"sidebar__menu-li"},[a("router-link",{staticClass:"sidebar__menu-link",attrs:{to:"/profile"}},[a("i",{staticClass:"fas fa-user icon"}),a("span",[t._v("Профиль")])]),a("router-link",{staticClass:"sidebar__menu-icon",attrs:{to:"/notification"}},[a("i",{staticClass:"fas fa-bell right-icon"})])],1),a("li",{staticClass:"sidebar__menu-li"},[a("router-link",{staticClass:"sidebar__menu-link",attrs:{to:"/messenger"}},[a("i",{staticClass:"fas fa-comments icon"}),a("span",[t._v("Мессенджер")])])],1),a("li",{staticClass:"sidebar__menu-li"},[a("router-link",{staticClass:"sidebar__menu-link",attrs:{to:"/friends"}},[a("i",{staticClass:"fas fa-users icon"}),a("span",[t._v("Друзья")])])],1)])])]),t._m(1)]),a("div",{staticClass:"content"},[a("div",{staticClass:"content__main"},[t._m(2),a("div",{staticClass:"content__bottom"},t._l(t.posts,(function(s,e){return a("div",{key:e,staticClass:"articles"},t._l(s,(function(s){return a("div",{key:s._id,staticClass:"article"},[a("div",{staticClass:"article__top"},[t._m(3,!0),a("div",{staticClass:"article__date"},[a("p",[t._v(t._s(s.createdAt))]),t._m(4,!0)])]),a("div",{staticClass:"article__body"},[a("span",[t._v(t._s(s.text))])]),t._m(5,!0)])})),0)})),0)]),a("div",{staticClass:"content__right"},[a("div",{staticClass:"profile__top"},[a("div",{staticClass:"profile"},[a("ProfileTop",{attrs:{users:t.users}})],1)]),a("div",{staticClass:"profile__stats"},[a("ProfileStats")],1),a("div",{staticClass:"profile__information"},[a("ProfileInfo")],1),a("ProfileController",{attrs:{users:t.users}})],1)])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"sidebar-link",attrs:{href:"#"}},[a("img",{staticClass:"sidebar-logo",attrs:{src:"",alt:"Logo..."}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sidebar__bottom"},[a("ul",{staticClass:"authors"},[a("li",{staticClass:"authors__list"},[a("a",{staticClass:"authors-list",attrs:{href:"https://vk.com/herobrine_vova_world_mistik31"}},[t._v("Vova Kotov")])]),a("li",{staticClass:"authors__list"},[a("a",{staticClass:"authors-list",attrs:{href:"https://vk.com/alex_developer"}},[t._v("Алексей Сильвейструк")])])]),a("div",{staticClass:"bottom"},[t._v("2021 © fPlanet")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content__header"},[a("div",{staticClass:"content__title"},[a("h2",{staticClass:"content-title"},[t._v("Новости")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"#"}},[e("div",{staticClass:"article__avatar-owner"},[e("img",{attrs:{src:a("cb15"),alt:"avatar"}}),e("span",{staticClass:"online"})]),e("h4",[t._v("UserName")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"article__controller"},[a("i",{staticClass:"fas fa-ellipsis-h"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"article__bottom"},[a("ul",[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fas fa-heart"}),a("span",[t._v("0")])])])])])}],r=a("bc3a"),l=a.n(r),n=a("62e6"),o=a("2a71"),c=a("062f"),_=a("b176"),u={name:"Feed",components:{ProfileController:_["a"],ProfileInfo:c["a"],ProfileStats:o["a"],ProfileTop:n["a"]},data:function(){return{users:[],user:[],posts:[],selectedItem:null}},methods:{fetchUsers:function(){var t=this,s=this.$cookies.get("token");l.a.get("/api/user",{headers:{Authorization:"Bearer ".concat(s)}}).then((function(s){console.log(s.data);var a=s.data;200!==s.status&&"OK"!==s.statusText&&console.log("Проблема с сервером"),t.users.push({currentUser:a})})).catch((function(t){return console.log(t)})),l.a.get("/api/users").then((function(s){var a=s.data;t.user.push(a)})).catch((function(t){return console.log(t)}))},fetchPosts:function(){var t=this;l.a.get("/api/posts").then((function(s){var a=s.data;t.posts.push(a),console.log(t.posts)})).catch((function(t){return console.log(t)}))},clickOnUser:function(t){this.selectedItem=this.$route.params.id=t,console.log(this.selectedItem)}},mounted:function(){this.fetchUsers(),this.fetchPosts()}},f=u,v=(a("34c8"),a("2877")),p=Object(v["a"])(f,e,i,!1,null,null,null);s["default"]=p.exports},"62e6":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"profile-top"},[t._m(0),t._l(t.users,(function(s){return a("div",{key:s.currentUser.id,staticClass:"profile__info"},[a("div",{staticClass:"profile-container"},["admin"===s.currentUser.roles?a("div",{staticClass:"profile-verify"},[a("span",{staticClass:"profile-name"},[t._v(t._s(s.currentUser.name))]),a("i",{staticClass:"fas fa-check check"})]):a("span",{staticClass:"profile-name"},[t._v(t._s(s.currentUser.name))]),a("i",{staticClass:"fas fa-pen pen"})]),a("span",{staticClass:"profile-nickname"},[t._v("@"+t._s(s.currentUser.username))])])}))],2)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"profile__avatar"},[e("img",{staticClass:"profile-avatar",attrs:{src:a("cb15"),alt:"user-avatar"}}),e("span",{staticClass:"online"})])}],r={name:"ProfileTop",props:["users"]},l=r,n=a("2877"),o=Object(n["a"])(l,e,i,!1,null,"77f8c516",null);s["a"]=o.exports},"66e1":function(t,s,a){},b176:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},t._l(t.users,(function(s){return a("div",{key:s.currentUser.id,staticClass:"profile__controller"},[a("router-link",{staticClass:"edit-profile",attrs:{to:"/settings"}},[t._v("Настройки")]),"user"===s.currentUser.roles?a("a",{staticClass:"verify-profile",attrs:{href:"#"}},[t._v("Верификация")]):t._e(),a("a",{staticClass:"logout",attrs:{href:"#"},on:{click:t.logout}},[t._v("Выход")])],1)})),0)},i=[],r=a("bc3a"),l=a.n(r),n={name:"ProfileController",props:["users"],methods:{logout:function(){var t=this;return l.a.get("/api/logout").then((function(s){console.log(s),t.$cookies.set("token",""),t.$router.push("/")})).catch((function(t){return console.log(t)}))}}},o=n,c=a("2877"),_=Object(c["a"])(o,e,i,!1,null,null,null);s["a"]=_.exports},cb15:function(t,s,a){t.exports=a.p+"img/default-avatar.d961d73a.png"}}]);
//# sourceMappingURL=chunk-9d8be76e.f7dab745.js.map