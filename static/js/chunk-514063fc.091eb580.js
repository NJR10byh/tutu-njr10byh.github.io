(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-514063fc"],{2017:function(e,t,s){"use strict";s("cafe")},"49b2":function(e,t,s){"use strict";s("6be8")},"4d26":function(e,t,s){e.exports=s.p+"static/img/NJUPT.e827660f.png"},"6be8":function(e,t,s){},"9ed6":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"Login_Container"},["desktop"==this.$store.state.app.device?s("div",{staticClass:"login_container_desktop"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h1",{staticClass:"title"},[e._v("南京邮电大学专利转让系统")])]),s("el-form-item",{attrs:{prop:"userName"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"userName",staticClass:"Sign_input",attrs:{placeholder:"请输入姓名",name:"userName",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1),s("el-form-item",{attrs:{prop:"passWord"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"password",staticClass:"Sign_input",attrs:{type:e.passwordType,placeholder:"请输入工号",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.passWord,callback:function(t){e.$set(e.loginForm,"passWord",t)},expression:"loginForm.passWord"}}),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),s("div",{staticClass:"login_register"},[s("el-button",{staticClass:"loginbutton",attrs:{loading:e.loading},on:{click:e.handleLogin}},[e._v(" 登录 ")]),s("el-button",{staticClass:"register"},[e._v(" 注册 ")])],1)],1)],1):e._e(),"mobile"==this.$store.state.app.device?s("div",{staticClass:"mobile_login_container"},[e._m(0),s("div",{staticClass:"box"},[e._m(1),s("div",{staticClass:"user"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"username"},[s("el-form-item",{attrs:{prop:"userName"}},[s("el-input",{attrs:{placeholder:"请输入姓名","prefix-icon":"el-icon-s-custom"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1)],1),s("div",{staticClass:"password"},[s("el-form-item",{attrs:{prop:"passWord"}},[s("el-input",{attrs:{placeholder:"请输入工号","prefix-icon":"el-icon-lock"},model:{value:e.loginForm.passWord,callback:function(t){e.$set(e.loginForm,"passWord",t)},expression:"loginForm.passWord"}})],1)],1),s("div",{staticClass:"LoginButton"},[s("el-button",{attrs:{type:"primary"},on:{click:e.handleLogin}},[e._v("登录")]),s("el-button",[e._v("注册")])],1)])],1)])]):e._e()])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text"},[s("p",[e._v("专利转让系统")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"njuptlogo"},[o("img",{attrs:{src:s("4d26"),alt:"NJUPT",width:"180px",height:"180px"}})])}],r=s("1da1"),i=s("5530"),n=(s("96cf"),s("2f62")),l={name:"Login",mounted:function(){console.log(this.$store.state.app.device)},data:function(){var e=function(e,t,s){""==t?s(new Error("请填写姓名！")):s()},t=function(e,t,s){0==t.length?s(new Error("请填写工号！")):s()};return{loginForm:{userName:"",passWord:""},loginRules:{userName:[{required:!0,trigger:"blur",validator:e}],passWord:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password"}},methods:Object(i["a"])(Object(i["a"])({},Object(n["c"])(["get_id","get_username","get_department","get_autorize"])),{},{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:""!=e.loginForm.userName&&""!=e.loginForm.passWord?(s=e,"徐小龙"==e.loginForm.userName&&"20020056"==e.loginForm.passWord?(e.get_id("20020056"),e.get_username("徐小龙"),e.get_department("南京邮电大学"),e.get_autorize("教师"),sessionStorage.setItem("state",JSON.stringify(e.$store.state)),s.$message({message:"登录成功，Welcome！",type:"success"}),"desktop"==e.$store.state.app.device?s.$router.push({path:"/home"}):"mobile"==e.$store.state.app.device?s.$router.push({path:"/home_mobile"}):s.$router.push({path:"/404"})):"包宇豪"==e.loginForm.userName&&"B18030316"==e.loginForm.passWord?(e.get_id("B18030316"),e.get_username("包宇豪"),e.get_autorize("产学研"),sessionStorage.setItem("state",JSON.stringify(e.$store.state)),s.$message({message:"登录成功，Welcome！",type:"success"}),"desktop"==e.$store.state.app.device?s.$router.push({path:"/home"}):"mobile"==e.$store.state.app.device?s.$router.push({path:"/home_mobile"}):s.$router.push({path:"/404"})):s.$message({message:"姓名或工号不正确",type:"error"})):e.$message({message:"请填写姓名或工号",type:"warning"});case 1:case"end":return t.stop()}}),t)})))()}})},c=l,p=(s("2017"),s("be15"),s("49b2"),s("2877")),u=Object(p["a"])(c,o,a,!1,null,"91548ed4",null);t["default"]=u.exports},b86b:function(e,t,s){},be15:function(e,t,s){"use strict";s("b86b")},cafe:function(e,t,s){}}]);