(function(t){function e(e){for(var o,s,c=e[0],r=e[1],u=e[2],l=0,p=[];l<c.length;l++)s=c[l],a[s]&&p.push(a[s][0]),a[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);g&&g(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var r=n[c];0!==a[r]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var g=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07bb":function(t,e,n){},"1af5":function(t,e,n){},"3b07":function(t,e,n){"use strict";var o=n("5cf0"),a=n.n(o);a.a},4045:function(t,e,n){t.exports=n.p+"img/loading.5ee55d12.svg"},4725:function(t,e,n){"use strict";var o=n("1af5"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"logout"}},["connected"===t.status?n("button",{on:{click:t.logout}},[t._v("Logout")]):t._e()]),n("router-view")],1)},i=[],s=(n("a481"),n("cebc")),c=n("2f62"),r=Object(c["b"])("auth"),u=r.mapActions,g=r.mapState,l={name:"app",computed:Object(s["a"])({},g({status:function(t){return t.loginStatus.status}})),methods:Object(s["a"])({},u({logout:function(t){t("logout",this.goToLogin)},getLoginStatus:function(t){t("getLoginStatus",{goToLogin:this.goToLogin,goToPage:this.goToPage})}}),{goToLogin:function(){this.$router.replace("/login")},goToPage:function(){this.$router.replace("/page-list")}}),beforeMount:function(){window.FB||this.$router.replace("/")},mounted:function(){var t=this;window.fbAsyncInit=function(){window.FB.init({appId:"2199770043617605",autoLogAppEvents:!0,xfbml:!0,version:"v3.2"}),window.FB.AppEvents.logPageView(),t.getLoginStatus()}},beforeDestroy:function(){this.logout()}},p=l,d=(n("4725"),n("b0a0"),n("2877")),f=Object(d["a"])(p,a,i,!1,null,"64139d1f",null),m=f.exports,v=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-list"},[n("h2",[t._v("Your Manage Pages")]),n("div",{staticClass:"list"},[t.pageList.length?n("ul",t._l(t.pageList,function(e){return n("li",{key:e.id,staticClass:"item",on:{click:function(n){return t.goToPosts(e.id)}}},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[t._v("Name:")]),t._v(t._s(e.name))]),n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[t._v("ID:")]),t._v(t._s(e.id))])])}),0):t._e(),n("div",{staticClass:"hint"},[t._v("Click the page to manage your posts")])])])},h=[],_=Object(c["b"])("page"),w=_.mapActions,P=_.mapState,L={name:"PageList",methods:Object(s["a"])({},w(["getPageList"]),{goToPosts:function(t){this.$router.push("posts/".concat(t))}}),computed:Object(s["a"])({},P({pageList:function(t){return t.pageList.data||[]}})),mounted:function(){this.getPageList()}},O=L,k=(n("8c40"),Object(d["a"])(O,b,h,!1,null,"622e6000",null)),j=k.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login-page"}},[n("h1",[t._v("Prive")]),n("button",{staticClass:"login-button",on:{click:t.login}},[t._v("Login")])])},I=[],T=Object(c["b"])("auth"),x=T.mapActions,S={methods:Object(s["a"])({},x({login:function(t){t("login",{goToPage:this.goToPage})}}),{goToPage:function(){this.$router.replace("/page-list")}})},y=S,D=(n("3b07"),Object(d["a"])(y,C,I,!1,null,"d6f3cbb4",null)),$=D.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"posts"},[o("h2",[t._v("Page: "+t._s(t.pageMap[t.$route.params.id].name))]),o("div",{staticClass:"container"},[o("h5",[t._v("Posts:")]),t.list.length?o("ul",t._l(t.list,function(e,a){return o("li",{key:e.id,staticClass:"item"},[o("img",{ref:"more",refInFor:!0,staticClass:"more",attrs:{src:n("f51c")},on:{click:function(e){t.dropDownIndex=-1===t.dropDownIndex?a:-1}}}),a===t.dropDownIndex?o("ul",{staticClass:"dropdown-menu"},[o("li",{on:{click:function(n){return t.deletePost(Object.assign({},t.deleteFeedParams,{feedId:e.id}))}}},[t._v("Delete from page")])]):t._e(),o("div",{staticClass:"content"},[o("div",{staticClass:"avatar"},[t._v(t._s(t.pageMap[t.$route.params.id].name[0]))]),o("div",{staticClass:"info"},[o("div",{staticClass:"name"},[t._v(t._s(t.pageMap[t.$route.params.id].name))]),o("div",{staticClass:"create-time"},[t._v(t._s(t.timeFormatString(e.created_time)))])])]),o("div",{staticClass:"content"},[o("div",{staticClass:"message"},[t._v(t._s(e.message))])]),t._m(0,!0)])}),0):o("div",[t._v("No Feeds")])]),o("div",{staticClass:"paging"},[t.paging.previous?o("button",{on:{click:function(e){return t.getPosts({id:t.$route.params.id,before:t.paging.cursors.before})}}},[t._v("Previous")]):t._e(),t.paging.next?o("button",{on:{click:function(e){return t.getPosts({id:t.$route.params.id,after:t.paging.cursors.after})}}},[t._v("Next")]):t._e()]),t.apiLoading?o("img",{staticClass:"loading",attrs:{src:n("4045")}}):t._e()])},F=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"action-panel"},[o("div",{staticClass:"action"},[o("img",{attrs:{src:n("c8e1")}}),o("span",[t._v("Like")])]),o("div",{staticClass:"action"},[o("img",{attrs:{src:n("cf89")}}),o("span",[t._v("Comment")])]),o("div",{staticClass:"action"},[o("img",{attrs:{src:n("6f2b")}}),o("span",[t._v("Share")])])])}],A=Object(c["b"])("post"),M=A.mapActions,B=A.mapState,U=Object(c["b"])("page"),N=U.mapState,R={name:"PostList",data:function(){return{dropDownIndex:-1}},computed:Object(s["a"])({},Object(c["d"])(["apiLoading"]),B({list:"data",paging:"paging"}),N(["pageMap"]),{deleteFeedParams:function(){return{accessToken:this.pageMap[this.$route.params.id].accessToken,pageId:this.$route.params.id}}}),methods:Object(s["a"])({},M(["getPosts","deletePost"]),{timeFormatString:function(t){var e=t.indexOf("+");return t.slice(0,e).replace("T"," ")},clickOutside:function(t){-1===this.dropDownIndex||this.$refs.more[this.dropDownIndex].contains(t.target)||(this.dropDownIndex=-1)}}),mounted:function(){this.getPosts({id:this.$route.params.id}),document.addEventListener("click",this.clickOutside,!0)},beforeDestroy:function(){document.removeEventListener("click",this.clickOutside,!0)}},G=R,J=(n("a948"),Object(d["a"])(G,E,F,!1,null,"f975027e",null)),z=J.exports;o["a"].use(v["a"]);var V=new v["a"]({routes:[{path:"/page-list",component:j},{path:"/login",component:$},{path:"/posts/:id",component:z}]}),W={loginStatus:{}},Y={storeLoginStatus:function(t,e){t.loginStatus=Object(s["a"])({status:e.status},e.authResponse)},clearUserInfo:function(t){t.loginStatus={}}},q={getLoginStatus:function(t,e){var n=t.commit,o=e.goToLogin,a=e.goToPage;window.FB.getLoginStatus(function(t){"connected"===t.status?(n("storeLoginStatus",t),n("setUserID",t.authResponse.userID,{root:!0}),a()):(console.log(t.status,"need login"),o())})},login:function(t,e){var n=t.commit,o=e.goToPage;window.FB.login(function(t){"connected"===t.status&&(n("storeLoginStatus",t),n("setUserID",t.authResponse.userID,{root:!0}),o())},{scope:"public_profile, manage_pages, pages_show_list, publish_pages"})},logout:function(t,e){var n=t.commit;window.FB&&window.FB.logout(function(t){"unknown"===t.status&&(n("clearUserInfo"),n("clearUserID",void 0,{root:!0}),n("post/clearAll",void 0,{root:!0}),n("page/clearAll",void 0,{root:!0}),e())})}},H={namespaced:!0,state:W,mutations:Y,actions:q},K=(n("7f7f"),{pageList:[],pageMap:{}}),Q={storePageList:function(t,e){t.pageList=e,t.pageMap=e.data.reduce(function(t,e){return t[e.id]={accessToken:e.access_token,name:e.name},t},{})},clearAll:function(t){t.pageList=[],t.pageMap={}}},X={getPageList:function(t){var e=t.commit,n=t.rootState;window.FB.api("/".concat(n.userID,"/accounts"),"GET",{},function(t){e("storePageList",t)})}},Z={namespaced:!0,state:K,mutations:Q,actions:X},tt={data:[],paging:{}},et={updatePosts:function(t,e){t.data=e.data,t.paging=e.paging||{}},clearAll:function(t){t.data=[],t.paging={}}},nt={getPosts:function(t,e){var n=t.commit,o=e.id,a=e.after,i=e.before;window.FB.api("/".concat(o,"/feed"),"GET",{limit:5,after:a,before:i},function(t){n("updatePosts",t)})},deletePost:function(t,e){var n=t.dispatch,o=t.commit,a=e.accessToken,i=e.feedId,s=e.pageId;o("toggleApiLoading",!0,{root:!0}),window.FB.api("/".concat(i),"DELETE",{access_token:a},function(t){o("toggleApiLoading",!1,{root:!0}),t.success&&n("getPosts",{id:s})})}},ot={namespaced:!0,state:tt,mutations:et,actions:nt};o["a"].use(c["c"]);var at={setUserID:function(t,e){t.userID=e},clearUserID:function(t){t.userID=""},toggleApiLoading:function(t,e){t.apiLoading=e}},it=new c["a"]({modules:{auth:H,page:Z,post:ot},state:{userID:"",apiLoading:!1},mutations:at});n("9138d");o["a"].config.productionTip=!1,new o["a"]({router:V,store:it,render:function(t){return t(m)}}).$mount("#app")},"5cf0":function(t,e,n){},"6f2b":function(t,e,n){t.exports=n.p+"img/share.65337b03.svg"},"858e":function(t,e,n){},"8c40":function(t,e,n){"use strict";var o=n("858e"),a=n.n(o);a.a},"9138d":function(t,e){(function(t,e,n){var o,a=t.getElementsByTagName(e)[0];t.getElementById(n)||(o=t.createElement(e),o.id=n,o.src="//connect.facebook.net/zh_TW/sdk.js",a.parentNode.insertBefore(o,a))})(document,"script","facebook-jssdk")},a948:function(t,e,n){"use strict";var o=n("bfa0"),a=n.n(o);a.a},b0a0:function(t,e,n){"use strict";var o=n("07bb"),a=n.n(o);a.a},bfa0:function(t,e,n){},c8e1:function(t,e,n){t.exports=n.p+"img/like.6405c898.svg"},cf89:function(t,e,n){t.exports=n.p+"img/comment.e079d1dc.svg"},f51c:function(t,e,n){t.exports=n.p+"img/more.3f2a5848.svg"}});
//# sourceMappingURL=app.16862779.js.map