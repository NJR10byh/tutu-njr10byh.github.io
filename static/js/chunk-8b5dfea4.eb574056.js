(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b5dfea4"],{2017:function(e,s,t){"use strict";t("cafe")},"5fa6":function(e,s,t){},"9ed6":function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h1",{staticClass:"title"},[e._v("南京邮电大学专利转让系统")])]),t("el-form-item",{attrs:{prop:"userName"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),t("el-input",{ref:"userName",staticClass:"Sign_input",attrs:{placeholder:"用户名",name:"userName",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.userName,callback:function(s){e.$set(e.loginForm,"userName",s)},expression:"loginForm.userName"}})],1),t("el-form-item",{attrs:{prop:"passWord"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),t("el-input",{key:e.passwordType,ref:"password",staticClass:"Sign_input",attrs:{type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleLogin(s)}},model:{value:e.loginForm.passWord,callback:function(s){e.$set(e.loginForm,"passWord",s)},expression:"loginForm.passWord"}}),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),t("div",{staticClass:"login_register"},[t("el-button",{staticClass:"loginbutton",attrs:{loading:e.loading},on:{click:e.handleLogin}},[e._v(" 登录 ")]),t("el-button",{staticClass:"register"},[e._v(" 注册 ")])],1)],1)],1)},a=[],n=t("1da1"),r=t("5530"),i=(t("96cf"),t("2f62")),l=t("4360"),c={name:"Login",data:function(){var e=function(e,s,t){""==s?t(new Error("请填写用户名！")):t()},s=function(e,s,t){0==s.length?t(new Error("请填写密码！")):t()};return{loginForm:{userName:"",passWord:"123456"},loginRules:{userName:[{required:!0,trigger:"blur",validator:e}],passWord:[{required:!0,trigger:"blur",validator:s}]},loading:!1,passwordType:"password"}},methods:Object(r["a"])(Object(r["a"])({},Object(i["c"])(["get_id","get_autorize"])),{},{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var t,o,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:t=document,o=t.body,console.log(o.getBoundingClientRect().width),o.getBoundingClientRect().width<993?l["a"].dispatch("app/toggleDevice","mobile"):l["a"].dispatch("app/toggleDevice","desktop"),console.log(e.$store.state.app.device),""!=e.loginForm.userName&&""!=e.loginForm.passWord?(a=e,"teacher"==e.loginForm.userName?(e.get_autorize("教师"),a.$message({message:"登录成功，Welcome！",type:"success"}),a.$router.push({path:"/Home"})):"company"==e.loginForm.userName?(e.get_autorize("产学研"),a.$message({message:"登录成功，Welcome！",type:"success"})):a.$message({message:"用户名不存在",type:"error"})):e.$message({message:"请填写用户名或密码",type:"warning"});case 5:case"end":return s.stop()}}),s)})))()}})},p=c,u=(t("2017"),t("cba7"),t("2877")),d=Object(u["a"])(p,o,a,!1,null,"d840a540",null);s["default"]=d.exports},cafe:function(e,s,t){},cba7:function(e,s,t){"use strict";t("5fa6")}}]);