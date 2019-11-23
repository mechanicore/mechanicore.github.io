webpackJsonp([1],{"7eZq":function(t,e){},"9B0R":function(t,e){},"9gPR":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{src:n("vqYj")}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("9B0R")},null,null).exports,i=n("/ocq"),s=n("Dd8w"),u=n.n(s),c=n("NYxO"),m={name:"Home",data:function(){return{msg:"Home - Vuex Demo"}},computed:u()({},Object(c.e)(["pilotName","mechName","totalCount"]),Object(c.c)(["isMax"])),methods:u()({},Object(c.d)(["addCount","deductCount","updateName","updateMech"]),Object(c.b)(["loadPilotData"]),{updateUserName:function(){this.$refs.username.value&&this.updateName(this.$refs.username.value)},updateMechaName:function(){this.$refs.gundam.value&&this.updateMech(this.$refs.gundam.value)},incrementCount:function(){this.isMax&&alert("MAX count reached!"),this.addCount()}})},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("span",[t._v(" | ")]),n("router-link",{attrs:{to:"/admin"}},[t._v("Admin")]),n("span",[t._v(" | ")]),n("router-link",{attrs:{to:"/info"}},[t._v("Information")]),n("p",[t._v("Total Count: "+t._s(t.totalCount))]),n("p",[t._v("Pilot Name: "+t._s(t.pilotName))]),n("p",[t._v("Mech Name: "+t._s(t.mechName))]),n("br"),n("h3",[t._v("Getters")]),n("p",[t._v("Max Count: "+t._s(t.isMax))]),n("br"),n("h3",[t._v("Mutations")]),n("span",[t._v("Add/Subtract  ")]),n("button",{on:{click:t.incrementCount}},[t._v("+")]),n("span",[t._v(" ")]),n("button",{on:{click:t.deductCount}},[t._v("-")]),n("br"),n("br"),n("input",{ref:"username",attrs:{placeholder:"Enter new pilot name"}}),n("button",{on:{click:t.updateUserName}},[t._v("Update Name")]),n("br"),n("br"),n("input",{ref:"gundam",attrs:{placeholder:"Enter new mecha name"}}),n("button",{on:{click:t.updateMechaName}},[t._v("Update Mecha")]),n("br"),n("br"),n("h3",[t._v("Actions")]),n("button",{on:{click:t.loadPilotData}},[t._v("Load Pilot Data")])],1)},staticRenderFns:[]};var d=n("VU/8")(m,l,!1,function(t){n("9gPR")},"data-v-7c8baca6",null).exports,p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("span",[t._v(" | ")]),n("router-link",{attrs:{to:"/admin"}},[t._v("Admin")]),n("span",[t._v(" | ")]),n("router-link",{attrs:{to:"/info"}},[t._v("Information")])],1)},staticRenderFns:[]};var v=n("VU/8")({name:"Admin",data:function(){return{msg:"Admin"}}},p,!1,function(t){n("7eZq")},"data-v-44d724e2",null).exports,f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("span",[t._v(" | ")]),n("router-link",{attrs:{to:"/admin"}},[t._v("Admin")]),n("span",[t._v(" | ")]),n("router-link",{attrs:{to:"/info"}},[t._v("Information")])],1)},staticRenderFns:[]};var _=n("VU/8")({name:"Info",data:function(){return{msg:"Information"}}},f,!1,function(t){n("l8qx")},"data-v-8834d360",null).exports;a.a.use(i.a);var h=new i.a({mode:"history",routes:[{path:"/",name:"Home",component:d},{path:"/admin",name:"Admin",component:v},{path:"/info",name:"Info",component:_}]}),b=n("mtWM"),N=n.n(b);a.a.use(c.a);var g=new c.a.Store({state:{maxItems:5,totalCount:0,pilotName:"Trowa",mechName:"Heavy Arms"},getters:{isMax:function(t,e){return t.totalCount>=5}},mutations:{addCount:function(t){t.totalCount++},deductCount:function(t){t.totalCount--},updateName:function(t,e){t.pilotName=e},updateMech:function(t,e){t.mechName=e},setPilotData:function(t,e){t.pilotName=e.name,t.mechName=e.gundam}},actions:{loadPilotData:function(t,e){N.a.get("/static/pilotdata.json").then(function(e){console.log(e.data),t.commit("setPilotData",e.data[1])}).catch(function(t){console.log("error: "+t)})}}});a.a.config.productionTip=!1,a.a.prototype.$http=N.a,new a.a({el:"#app",store:g,router:h,components:{App:r},template:"<App/>"})},l8qx:function(t,e){},vqYj:function(t,e,n){t.exports=n.p+"static/img/heavyarms.6bd00a4.png"}},["NHnr"]);
//# sourceMappingURL=app.356255a6cc678b4241bd.js.map