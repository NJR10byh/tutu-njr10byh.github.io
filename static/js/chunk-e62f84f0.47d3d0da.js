(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e62f84f0"],{1276:function(e,t,a){"use strict";var r=a("d784"),n=a("44e7"),s=a("825a"),l=a("1d80"),o=a("4840"),i=a("8aa5"),c=a("50c4"),u=a("14c3"),d=a("9263"),p=a("d039"),f=[].push,g=Math.min,h=4294967295,m=!p((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var r=String(l(this)),s=void 0===a?h:a>>>0;if(0===s)return[];if(void 0===e)return[r];if(!n(e))return t.call(r,e,s);var o,i,c,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,m=new RegExp(e.source,p+"g");while(o=d.call(m,r)){if(i=m.lastIndex,i>g&&(u.push(r.slice(g,o.index)),o.length>1&&o.index<r.length&&f.apply(u,o.slice(1)),c=o[0].length,g=i,u.length>=s))break;m.lastIndex===o.index&&m.lastIndex++}return g===r.length?!c&&m.test("")||u.push(""):u.push(r.slice(g)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var n=l(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,n,a):r.call(String(n),t,a)},function(e,n){var l=a(r,e,this,n,r!==t);if(l.done)return l.value;var d=s(e),p=String(this),f=o(d,RegExp),v=d.unicode,x=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),b=new f(m?d:"^(?:"+d.source+")",x),w=void 0===n?h:n>>>0;if(0===w)return[];if(0===p.length)return null===u(b,p)?[p]:[];var _=0,z=0,y=[];while(z<p.length){b.lastIndex=m?z:0;var E,I=u(b,m?p:p.slice(z));if(null===I||(E=g(c(b.lastIndex+(m?0:z)),p.length))===_)z=i(p,z,v);else{if(y.push(p.slice(_,z)),y.length===w)return y;for(var P=1;P<=I.length-1;P++)if(y.push(I[P]),y.length===w)return y;z=_=E}}return y.push(p.slice(_)),y}]}),!m)},"14c3":function(e,t,a){var r=a("c6b6"),n=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var s=a.call(e,t);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"4a46":function(e,t,a){"use strict";a("77b7")},"77b7":function(e,t,a){},"8aa5":function(e,t,a){"use strict";var r=a("6547").charAt;e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},9263:function(e,t,a){"use strict";var r=a("ad6d"),n=a("9f7f"),s=RegExp.prototype.exec,l=String.prototype.replace,o=s,i=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=i||u||c;d&&(o=function(e){var t,a,n,o,d=this,p=c&&d.sticky,f=r.call(d),g=d.source,h=0,m=e;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),m=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(g="(?: "+g+")",m=" "+m,h++),a=new RegExp("^(?:"+g+")",f)),u&&(a=new RegExp("^"+g+"$(?!\\s)",f)),i&&(t=d.lastIndex),n=s.call(p?a:d,m),p?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:i&&n&&(d.lastIndex=d.global?n.index+n[0].length:t),u&&n&&n.length>1&&l.call(n[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),e.exports=o},9535:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Confirming_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Search"}),a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},[a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.refresh}},[e._v(" 刷新列表 ")])],1)])]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",border:"",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"专利号"}},[a("span",[e._v(e._s(t.row.zlh))])]),a("el-form-item",{attrs:{label:"专利名称"}},[a("span",[e._v(e._s(t.row.zlmc))])]),a("el-form-item",{attrs:{label:"授权编号"}},[a("span",[e._v(e._s(t.row.sqbh))])]),a("el-form-item",{attrs:{label:"归属单位"}},[a("span",[e._v(e._s(t.row.gsdw))])]),a("el-form-item",{attrs:{label:"所有权人"}},[a("span",[e._v(e._s(t.row.zlqr))])]),a("el-form-item",{attrs:{label:"立项编号"}},[a("span",[e._v(e._s(t.row.projectCode))])]),a("el-form-item",{attrs:{label:"批准日期"}},[a("span",[e._v(e._s(t.row.pzrq))])]),a("el-form-item",{attrs:{label:"转换状态"}},[a("span",[e._v(e._s(t.row.state))])]),a("el-form-item",{attrs:{label:"专利代理人"}},[a("span",[e._v(e._s(t.row.zldlr))])]),a("el-form-item",{attrs:{label:"专利第一作者姓名"}},[a("span",[e._v(e._s(t.row.zldyzzxm))])]),a("el-form-item",{attrs:{label:"专利第一作者工号"}},[a("span",[e._v(e._s(t.row.zldyzzgh))])]),a("el-form-item",{attrs:{label:"最后更新时间"}},[a("span",[e._v(e._s(t.row.gmtUpdate))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),a("el-table-column",{attrs:{prop:"state",label:"转换状态",width:"280"}}),a("el-table-column",{attrs:{prop:"gmtUpdate",label:"最后更新时间",width:"200"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{icon:"el-icon-document"},on:{click:function(a){return e.getPatent(t.row)}}},[e._v("查看审批表 ")]),["等待第一作者确认","第一作者未通过"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-circle-check"},on:{click:function(a){return e.Pass(t.row)}}},[e._v("通过 ")]):e._e(),"等待第一作者确认"==t.row.state?a("el-button",{attrs:{icon:"el-icon-circle-close"},on:{click:function(a){return e.Failed(t.row)}}},[e._v("不通过 ")]):e._e()]}}])})],1),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":20,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1)],1)},n=[],s=a("1da1"),l=(a("ac1f"),a("1276"),a("96cf"),{data:function(){return{tableData:[],loading:!0,total:0,currentPage:1,Page_url:"",SearchType:"查询字段",SearchText:""}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.tableData=[],a.currentPage=1,a.SearchType="查询字段",a.SearchText="",console.log(e.$store.state),r="/teacher/getZLDYZZConfirmPage?currPage="+a.currentPage+"&size=20&userGh="+e.$store.state.signed_id+"&userName="+e.$store.state.signed_username,a.Page_url=r,t.next=10,a.getExam(r);case 10:case"end":return t.stop()}}),t)})))()},getExam:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,a.next=3,r.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),r.loading=!1,"success"==e.data.status){r.total=e.data.data.total;for(var a=0;a<e.data.data.records.length;a++){var n={};n.index=a+1,n.wid=e.data.data.records[a].wid,n.sqbh=e.data.data.records[a].sqbh,n.zlmc=e.data.data.records[a].zlmc,n.zlh=e.data.data.records[a].zlh,n.zlqr=e.data.data.records[a].zlqr,n.gsdw=e.data.data.records[a].gsdw,n.pzrq=e.data.data.records[a].pzrq,n.zldlr=e.data.data.records[a].zldlr,n.zldyzzgh=e.data.data.records[a].zldyzzgh,n.zldyzzxm=e.data.data.records[a].zldyzzxm,n.zlh=e.data.data.records[a].zlh,n.zlmc=e.data.data.records[a].zlmc,n.transferApplicationFormId=e.data.data.records[a].transferApplicationFormId,n.gmtUpdate=e.data.data.records[a].gmtUpdate,null==e.data.data.records[a].transferProcessId?n.state="未转换":(n.transferProcessId=e.data.data.records[a].transferProcessId,e.data.data.records[a].isWithdraw?n.state="审批表已撤回":e.data.data.records[a].isZldyzzConfirm?e.data.data.records[a].isZldyzzApproval?e.data.data.records[a].isDepartmentConfirm?e.data.data.records[a].isDepartmentApproval?e.data.data.records[a].isComplete?n.state="已转换":e.data.data.records[a].isCxyConfirm?e.data.data.records[a].isCxyApproval?null==e.data.data.records[a].contractInfoId?n.state="等待产学研创建合同":e.data.data.records[a].isPublicNotice?r.TimeDiffer(e.data.data.records[a].publicNoticeTime)?0==e.data.data.records[a].voucherNum?n.state="等待上传到款凭证":null==e.data.data.records[a].checklistId?n.state="等待上传认定清单（备案）":null==e.data.data.records[a].accountingInfoId?n.state="等待生成入账通知单":null==e.data.data.records[a].invoiceId?n.state="等待上传发票":e.data.data.records[a].isComplete||(n.state="等待流程结束"):n.state="正在公示中":n.state="等待公示":n.state="产学研未通过":n.state="等待产学研审批":n.state="归属单位未通过":n.state="等待上传所属部门意见":n.state="第一作者未通过":n.state="等待第一作者确认"),r.tableData.push(n)}t.$message.success("数据已更新！")}else t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),r.loading=!1,t.$message.error("出错了！")}));case 3:case"end":return a.stop()}}),a)})))()},handleCurrentPage:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,r.loading=!0,console.log(r.Page_url),n=r.Page_url.split("currPage")[0]+"currPage="+e+"&size"+r.Page_url.split("size")[1],console.log(n),r.tableData=[],r.currentPage=e,a.next=9,r.getExam(n);case 9:case"end":return a.stop()}}),a)})))()},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,n=t.getDate(),s=t.getHours(),l=t.getMinutes(),o=t.getSeconds(),i=a+"-";return r<10&&(i+="0"),i+=r+"-",n<10&&(i+="0"),i+=n+" ",s<10&&(i+="0"),i+=s+":",l<10&&(i+="0"),i+=l+":",o<10&&(i+="0"),i+=o,i},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),n=(a-r)/1e3,s=parseInt(n/86400);parseInt(n/3600),parseInt(n%3600/60),parseInt(n%60);return!0},handleDropdown:function(e){var t=this;t.SearchType=e},getPatent:function(e){console.log(e),this.$router.push({path:"/exam_detail_pc",query:{wid:e.wid}})},Pass:function(e){var t=this;console.log(e);var a=this;this.$confirm("确认通过吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r="/process/approvalTransferApplicationByZLDYZZ?transferApplicationFormId="+e.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e),"success"==e.data.status?(t.$message.success("已通过！"),a.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))})).catch((function(){t.$message.info("已取消操作！")}))},Failed:function(e){var t=this,a=this;this.$prompt("请填写拒绝原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(r){if(console.log(r.value),null==r.value||""==r.value)t.$notify.warning({title:"提示",content:"拒绝原因不能为空！"});else{var n="/process/notApprovalTransferApplicationByZLDYZZ?remarks="+r.value+"&transferApplicationFormId="+e.transferApplicationFormId;a.request(n,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message.success("已拒绝！"),a.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))}})).catch((function(e){console.log(e),t.$message.info("已取消操作！")}))}}}),o=l,i=(a("4a46"),a("2877")),c=Object(i["a"])(o,r,n,!1,null,null,null);t["default"]=c.exports},"9f7f":function(e,t,a){"use strict";var r=a("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var r=a("23e7"),n=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,a){"use strict";var r=a("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,a){"use strict";a("ac1f");var r=a("6eeb"),n=a("d039"),s=a("b622"),l=a("9263"),o=a("9112"),i=s("species"),c=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=s("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,d){var g=s(e),h=!n((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),m=h&&!n((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[i]=function(){return a},a.flags="",a[g]=/./[g]),a.exec=function(){return t=!0,null},a[g](""),!t}));if(!h||!m||"replace"===e&&(!c||!u||p)||"split"===e&&!f){var v=/./[g],x=a(g,""[e],(function(e,t,a,r,n){return t.exec===l?h&&!n?{done:!0,value:v.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=x[0],w=x[1];r(String.prototype,e,b),r(RegExp.prototype,g,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}d&&o(RegExp.prototype[g],"sham",!0)}}}]);