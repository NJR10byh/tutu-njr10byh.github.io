(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-789ad5c2"],{1276:function(e,t,r){"use strict";var a=r("d784"),n=r("44e7"),s=r("825a"),o=r("1d80"),c=r("4840"),l=r("8aa5"),i=r("50c4"),u=r("14c3"),d=r("9263"),p=r("d039"),f=[].push,g=Math.min,h=4294967295,m=!p((function(){return!RegExp(h,"y")}));a("split",2,(function(e,t,r){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var a=String(o(this)),s=void 0===r?h:r>>>0;if(0===s)return[];if(void 0===e)return[a];if(!n(e))return t.call(a,e,s);var c,l,i,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,m=new RegExp(e.source,p+"g");while(c=d.call(m,a)){if(l=m.lastIndex,l>g&&(u.push(a.slice(g,c.index)),c.length>1&&c.index<a.length&&f.apply(u,c.slice(1)),i=c[0].length,g=l,u.length>=s))break;m.lastIndex===c.index&&m.lastIndex++}return g===a.length?!i&&m.test("")||u.push(""):u.push(a.slice(g)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var n=o(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,n,r):a.call(String(n),t,r)},function(e,n){var o=r(a,e,this,n,a!==t);if(o.done)return o.value;var d=s(e),p=String(this),f=c(d,RegExp),v=d.unicode,x=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),b=new f(m?d:"^(?:"+d.source+")",x),P=void 0===n?h:n>>>0;if(0===P)return[];if(0===p.length)return null===u(b,p)?[p]:[];var z=0,w=0,y=[];while(w<p.length){b.lastIndex=m?w:0;var _,E=u(b,m?p:p.slice(w));if(null===E||(_=g(i(b.lastIndex+(m?0:w)),p.length))===z)w=l(p,w,v);else{if(y.push(p.slice(z,w)),y.length===P)return y;for(var T=1;T<=E.length-1;T++)if(y.push(E[T]),y.length===P)return y;w=z=_}}return y.push(p.slice(z)),y}]}),!m)},"14c3":function(e,t,r){var a=r("c6b6"),n=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var s=r.call(e,t);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"4c22":function(e,t,r){},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},9263:function(e,t,r){"use strict";var a=r("ad6d"),n=r("9f7f"),s=RegExp.prototype.exec,o=String.prototype.replace,c=s,l=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),i=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||i;d&&(c=function(e){var t,r,n,c,d=this,p=i&&d.sticky,f=a.call(d),g=d.source,h=0,m=e;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),m=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(g="(?: "+g+")",m=" "+m,h++),r=new RegExp("^(?:"+g+")",f)),u&&(r=new RegExp("^"+g+"$(?!\\s)",f)),l&&(t=d.lastIndex),n=s.call(p?r:d,m),p?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:l&&n&&(d.lastIndex=d.global?n.index+n[0].length:t),u&&n&&n.length>1&&o.call(n[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(n[c]=void 0)})),n}),e.exports=c},"9f7f":function(e,t,r){"use strict";var a=r("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,r){"use strict";var a=r("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var a=r("6eeb"),n=r("d039"),s=r("b622"),o=r("9263"),c=r("9112"),l=s("species"),i=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=s("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var g=s(e),h=!n((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),m=h&&!n((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return t=!0,null},r[g](""),!t}));if(!h||!m||"replace"===e&&(!i||!u||p)||"split"===e&&!f){var v=/./[g],x=r(g,""[e],(function(e,t,r,a,n){return t.exec===o?h&&!n?{done:!0,value:v.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=x[0],P=x[1];a(String.prototype,e,b),a(RegExp.prototype,g,2==t?function(e,t){return P.call(e,this,t)}:function(e){return P.call(e,this)})}d&&c(RegExp.prototype[g],"sham",!0)}},de39:function(e,t,r){"use strict";r("4c22")},e71e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Examing_Container"},[r("div",{staticClass:"head-btn"},[r("div",{staticClass:"Search"}),r("div",{staticClass:"newin_refresh"},[r("div",{staticClass:"refresh"},[r("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.refresh}},[e._v("刷新列表")])],1)])]),r("el-table",{ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",stripe:""}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[r("el-form-item",{attrs:{label:"专利号"}},[r("span",[e._v(e._s(t.row.zlh))])]),r("el-form-item",{attrs:{label:"专利名称"}},[r("span",[e._v(e._s(t.row.zlmc))])]),r("el-form-item",{attrs:{label:"授权编号"}},[r("span",[e._v(e._s(t.row.sqbh))])]),r("el-form-item",{attrs:{label:"归属单位"}},[r("span",[e._v(e._s(t.row.gsdw))])]),r("el-form-item",{attrs:{label:"所有权人"}},[r("span",[e._v(e._s(t.row.zlqr))])]),r("el-form-item",{attrs:{label:"批准日期"}},[r("span",[e._v(e._s(t.row.pzrq))])]),r("el-form-item",{attrs:{label:"转换状态"}},[r("span",[e._v(e._s(t.row.state))])]),r("el-form-item",{attrs:{label:"专利代理人"}},[r("span",[e._v(e._s(t.row.zldlr))])]),r("el-form-item",{attrs:{label:"专利第一作者姓名"}},[r("span",[e._v(e._s(t.row.zldyzzxm))])]),r("el-form-item",{attrs:{label:"专利第一作者工号"}},[r("span",[e._v(e._s(t.row.zldyzzgh))])]),r("el-form-item",{attrs:{label:"最后更新时间"}},[r("span",[e._v(e._s(t.row.zhgxsj))])])],1)]}}])}),r("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),r("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),r("el-table-column",{attrs:{prop:"sqbh",label:"授权编号",width:"160"}}),r("el-table-column",{attrs:{prop:"state",label:"转换状态",width:"280"}}),r("el-table-column",{attrs:{prop:"setting",label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return["未转换"!=t.row.state&&"已转换"!=t.row.state?r("el-button",{attrs:{icon:"el-icon-document"},on:{click:function(r){return e.getPatent(t.row)}}},[e._v("查看审批表 ")]):e._e(),"正在转换：等待产学研审批"==t.row.state?r("el-button",{attrs:{icon:"el-icon-circle-check"},on:{click:function(r){return e.Pass(t.row)}}},[e._v("通过 ")]):e._e(),"正在转换：等待产学研审批"==t.row.state?r("el-button",{attrs:{icon:"el-icon-circle-close"},on:{click:function(r){return e.Failed(t.row)}}},[e._v("不通过")]):e._e()]}}])})],1),r("div",{staticClass:"PagesCurb"},[r("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":10,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1)],1)},n=[],s=r("1da1"),o=(r("ac1f"),r("1276"),r("b0c0"),r("96cf"),{data:function(){return{tableData:[],total:0,currentPage:1,Page_url:"",SearchType:"查询字段",SearchText:""}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,r.tableData=[],r.currentPage=1,r.SearchType="查询字段",r.SearchText="",console.log(e.$store.state),a="/process/getTransferApplicationFromPage?currPage="+r.currentPage+"&size=10",r.Page_url=a,t.next=10,r.getExam(a);case 10:case"end":return t.stop()}}),t)})))()},getExam:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t,r.next=3,a.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),"success"==e.data.status){a.total=e.data.data.total;for(var r=0;r<e.data.data.records.length;r++){var n={};n.index=r+1,n.wid=e.data.data.records[r].wid,n.sqbh=e.data.data.records[r].sqbh,n.zlmc=e.data.data.records[r].zlmc,n.zlh=e.data.data.records[r].zlh,n.zlqr=e.data.data.records[r].zlqr,n.gsdw=e.data.data.records[r].gsdw,n.zhgxsj=e.data.data.records[r].zhgxsj,n.pzrq=e.data.data.records[r].pzrq,n.zldlr=e.data.data.records[r].zldlr,n.zldyzzgh=e.data.data.records[r].zldyzzgh,n.zldyzzxm=e.data.data.records[r].zldyzzxm,n.zlh=e.data.data.records[r].zlh,n.zlmc=e.data.data.records[r].zlmc,null==e.data.data.records[r].transferProcess?(n.state="未转换",n.gmtUpdate=null):(n.gmtUpdate=e.data.data.records[r].transferProcess.gmtUpdate,n.transferProcessId=e.data.data.records[r].transferProcess.transferProcessId,e.data.data.records[r].transferProcess.isZldyzzConfirm?e.data.data.records[r].transferProcess.isZldyzzApproval?e.data.data.records[r].transferProcess.isDepartmentConfirm?e.data.data.records[r].transferProcess.isDepartmentApproval?e.data.data.records[r].transferProcess.isCxyConfirm?e.data.data.records[r].transferProcess.isCxyApproval?e.data.data.records[r].transferProcess.isPublicNotice?a.TimeDiffer(e.data.data.records[r].transferProcess.publicNoticeTime)?null==e.data.data.records[r].transferProcess.contractId?n.state="正在转换：等待上传合同":e.data.data.records[r].transferProcess.isContractSendBack&&null!=e.data.data.records[r].transferProcess.voucherId?null==e.data.data.records[r].transferProcess.checklistId?n.state="正在转换：等待上传认定清单（备案）":null==e.data.data.records[r].transferProcess.invoiceId?n.state="正在转换：等待上传发票":n.state="已转换":n.state="正在转换：等待合同寄回和上传到款凭证":n.state="正在转换：正在公示中":n.state="正在转换：等待公示":n.state="产学研未通过":n.state="正在转换：等待产学研审批":n.state="归属单位未通过":n.state="正在转换：等待归属单位审批":n.state="第一作者未通过":n.state="正在转换：等待第一作者确认"),a.tableData.push(n)}t.$message({message:"数据已更新",type:"success"})}else t.$message({message:"数据请求失败",type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}));case 3:case"end":return r.stop()}}),r)})))()},handleCurrentPage:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t,console.log(a.Page_url),n=a.Page_url.split("currPage")[0]+"currPage="+e+"&size"+a.Page_url.split("size")[1],console.log(n),a.tableData=[],a.currentPage=e,r.next=8,a.getExam(n);case 8:case"end":return r.stop()}}),r)})))()},TimeTransfer:function(e){var t=new Date(e),r=t.getFullYear(),a=t.getMonth()+1,n=t.getDate(),s=t.getHours(),o=t.getMinutes(),c=t.getSeconds(),l=r+"-";return a<10&&(l+="0"),l+=a+"-",n<10&&(l+="0"),l+=n+" ",s<10&&(l+="0"),l+=s+":",o<10&&(l+="0"),l+=o+":",c<10&&(l+="0"),l+=c,l},TimeDiffer:function(e){var t=this.TimeTransfer(e),r=new Date,a=new Date(t),n=(r-a)/1e3,s=parseInt(n/86400);parseInt(n/3600),parseInt(n%3600/60),parseInt(n%60);return s>15},handleDropdown:function(e){var t=this;t.SearchType=e},search:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e,a="",r.tableData=[],r.currentPage=1,t.t0=r.SearchType,t.next="专利名称"===t.t0?7:"授权编号"===t.t0?10:13;break;case 7:return a="/patent/getPatentPageByZLMC?currPage="+r.currentPage+"&size=10&zldyzzgh="+r.id+"&zldyzzxm="+r.name+"&zlmc="+r.SearchText,r.Page_url=a,t.abrupt("break",14);case 10:return a="/patent/getPatentPageBySQBH?currPage="+r.currentPage+"&size=10&sqbh="+r.SearchText+"&zldyzzgh="+r.id+"&zldyzzxm="+r.name,r.Page_url=a,t.abrupt("break",14);case 13:return t.abrupt("break",14);case 14:console.log(a),r.getExam(a);case 16:case"end":return t.stop()}}),t)})))()},getPatent:function(e){console.log(e),this.$router.push({path:"/patent_detail_pc",query:e})},Pass:function(e){var t=this,r=this;this.$prompt("备注","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(a){var n={};n.operatorName=r.$store.state.signed_username,n.operatorGh=r.$store.state.signed_id,n.operatorDepartment=r.$store.state.signed_department,n.remarks=a.value,n.transferProcessId=e.transferProcessId,console.log(n),r.request("/process/approvalTransferApplication",n,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"已通过！"}),r.refresh()):t.$message({message:"数据请求失败！",type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"取消输入"})}))},Failed:function(e){var t=this,r=this;this.$prompt("请填写拒绝原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(a){if(console.log(a.value),null==a.value||""==a.value)t.$message({type:"warning",message:"拒绝原因不能为空！"});else{var n={};n.operatorName=r.$store.state.signed_username,n.operatorGh=r.$store.state.signed_id,n.operatorDepartment=r.$store.state.signed_department,n.remarks=a.value,n.transferProcessId=e.transferProcessId,console.log(n),r.request("/process/notApprovalTransferApplication",n,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"已拒绝！"}),r.refresh()):t.$message({message:"数据请求失败！",type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))}})).catch((function(e){console.log(e),t.$message({type:"info",message:"取消输入"})}))}}}),c=o,l=(r("de39"),r("2877")),i=Object(l["a"])(c,a,n,!1,null,null,null);t["default"]=i.exports}}]);