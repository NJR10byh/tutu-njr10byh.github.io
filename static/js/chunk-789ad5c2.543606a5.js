(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-789ad5c2"],{1276:function(e,t,a){"use strict";var r=a("d784"),n=a("44e7"),s=a("825a"),o=a("1d80"),c=a("4840"),l=a("8aa5"),i=a("50c4"),u=a("14c3"),d=a("9263"),p=a("d039"),g=[].push,h=Math.min,f=4294967295,m=!p((function(){return!RegExp(f,"y")}));r("split",2,(function(e,t,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var r=String(o(this)),s=void 0===a?f:a>>>0;if(0===s)return[];if(void 0===e)return[r];if(!n(e))return t.call(r,e,s);var c,l,i,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,m=new RegExp(e.source,p+"g");while(c=d.call(m,r)){if(l=m.lastIndex,l>h&&(u.push(r.slice(h,c.index)),c.length>1&&c.index<r.length&&g.apply(u,c.slice(1)),i=c[0].length,h=l,u.length>=s))break;m.lastIndex===c.index&&m.lastIndex++}return h===r.length?!i&&m.test("")||u.push(""):u.push(r.slice(h)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var n=o(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,n,a):r.call(String(n),t,a)},function(e,n){var o=a(r,e,this,n,r!==t);if(o.done)return o.value;var d=s(e),p=String(this),g=c(d,RegExp),x=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),b=new g(m?d:"^(?:"+d.source+")",v),_=void 0===n?f:n>>>0;if(0===_)return[];if(0===p.length)return null===u(b,p)?[p]:[];var y=0,w=0,P=[];while(w<p.length){b.lastIndex=m?w:0;var z,T=u(b,m?p:p.slice(w));if(null===T||(z=h(i(b.lastIndex+(m?0:w)),p.length))===y)w=l(p,w,x);else{if(P.push(p.slice(y,w)),P.length===_)return P;for(var k=1;k<=T.length-1;k++)if(P.push(T[k]),P.length===_)return P;w=y=z}}return P.push(p.slice(y)),P}]}),!m)},"14c3":function(e,t,a){var r=a("c6b6"),n=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var s=a.call(e,t);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"4c22":function(e,t,a){},"8aa5":function(e,t,a){"use strict";var r=a("6547").charAt;e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},9263:function(e,t,a){"use strict";var r=a("ad6d"),n=a("9f7f"),s=RegExp.prototype.exec,o=String.prototype.replace,c=s,l=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),i=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||i;d&&(c=function(e){var t,a,n,c,d=this,p=i&&d.sticky,g=r.call(d),h=d.source,f=0,m=e;return p&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),m=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(h="(?: "+h+")",m=" "+m,f++),a=new RegExp("^(?:"+h+")",g)),u&&(a=new RegExp("^"+h+"$(?!\\s)",g)),l&&(t=d.lastIndex),n=s.call(p?a:d,m),p?n?(n.input=n.input.slice(f),n[0]=n[0].slice(f),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:l&&n&&(d.lastIndex=d.global?n.index+n[0].length:t),u&&n&&n.length>1&&o.call(n[0],a,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(n[c]=void 0)})),n}),e.exports=c},"9f7f":function(e,t,a){"use strict";var r=a("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var r=a("23e7"),n=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,a){"use strict";var r=a("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,a){"use strict";a("ac1f");var r=a("6eeb"),n=a("d039"),s=a("b622"),o=a("9263"),c=a("9112"),l=s("species"),i=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=s("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),g=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,d){var h=s(e),f=!n((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),m=f&&!n((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[h]=/./[h]),a.exec=function(){return t=!0,null},a[h](""),!t}));if(!f||!m||"replace"===e&&(!i||!u||p)||"split"===e&&!g){var x=/./[h],v=a(h,""[e],(function(e,t,a,r,n){return t.exec===o?f&&!n?{done:!0,value:x.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=v[0],_=v[1];r(String.prototype,e,b),r(RegExp.prototype,h,2==t?function(e,t){return _.call(e,this,t)}:function(e){return _.call(e,this)})}d&&c(RegExp.prototype[h],"sham",!0)}},de39:function(e,t,a){"use strict";a("4c22")},e71e:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Examing_Container"},[a("div",{staticClass:"head_btn"},[a("div",{staticClass:"Type"},[a("el-radio-group",{on:{change:e.type_change},model:{value:e.exam_type,callback:function(t){e.exam_type=t},expression:"exam_type"}},[a("el-radio-button",{attrs:{label:"待审批"}}),a("el-radio-button",{attrs:{label:"未通过"}}),a("el-radio-button",{attrs:{label:"已通过"}}),a("el-radio-button",{attrs:{label:"正在转换"}}),a("el-radio-button",{attrs:{label:"已转换"}})],1)],1),["待审批","正在转换","已转换"].includes(e.exam_type)?a("div",{staticClass:"Search"},[a("el-dropdown",{staticClass:"Dropdown",on:{command:e.handleDropdown}},[a("el-button",{attrs:{type:"primary"}},[e._v(" 查询字段"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"姓名"}},[e._v("姓名")]),a("el-dropdown-item",{attrs:{command:"专利名称"}},[e._v("专利名称")])],1)],1),a("el-input",{attrs:{placeholder:"请输入需要查询的内容"},model:{value:e.SearchText,callback:function(t){e.SearchText=t},expression:"SearchText"}},[a("template",{slot:"prepend"},[e._v(e._s(e.SearchType))])],2),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")])],1):e._e(),a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},["已通过"==e.exam_type?a("el-button",{attrs:{icon:"el-icon-plus"},on:{click:e.addContract}},[e._v("创建合同 ")]):e._e(),a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.refresh}},[e._v("刷新列表 ")])],1)])]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",stripe:""},on:{"selection-change":e.handleSelectionChange}},["已通过"==e.exam_type?a("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),a("el-table-column",{attrs:{type:"expand",label:"详情",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"专利号"}},[a("span",[e._v(e._s(t.row.zlh))])]),a("el-form-item",{attrs:{label:"专利名称"}},[a("span",[e._v(e._s(t.row.zlmc))])]),a("el-form-item",{attrs:{label:"授权编号"}},[a("span",[e._v(e._s(t.row.sqbh))])]),a("el-form-item",{attrs:{label:"归属单位"}},[a("span",[e._v(e._s(t.row.gsdw))])]),a("el-form-item",{attrs:{label:"所有权人"}},[a("span",[e._v(e._s(t.row.zlqr))])]),a("el-form-item",{attrs:{label:"立项编号"}},[a("span",[e._v(e._s(t.row.projectCode))])]),a("el-form-item",{attrs:{label:"批准日期"}},[a("span",[e._v(e._s(t.row.pzrq))])]),a("el-form-item",{attrs:{label:"转换状态"}},[a("span",[e._v(e._s(t.row.state))])]),a("el-form-item",{attrs:{label:"专利代理人"}},[a("span",[e._v(e._s(t.row.zldlr))])]),a("el-form-item",{attrs:{label:"专利第一作者姓名"}},[a("span",[e._v(e._s(t.row.zldyzzxm))])]),a("el-form-item",{attrs:{label:"专利第一作者工号"}},[a("span",[e._v(e._s(t.row.zldyzzgh))])]),a("el-form-item",{attrs:{label:"最后更新时间"}},[a("span",[e._v(e._s(t.row.gmtUpdate))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),a("el-table-column",{attrs:{prop:"state",label:"转换状态",width:"280"}}),a("el-table-column",{attrs:{prop:"gmtUpdate",label:"最后更新时间",width:"200"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{icon:"el-icon-document"},on:{click:function(a){return e.getPatent(t.row)}}},[e._v("查看审批表 ")]),["等待产学研审批","产学研未通过"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-circle-check"},on:{click:function(a){return e.Pass(t.row)}}},[e._v("通过 ")]):e._e(),"等待产学研审批"==t.row.state?a("el-button",{attrs:{icon:"el-icon-circle-close"},on:{click:function(a){return e.Failed(t.row)}}},[e._v("不通过 ")]):e._e(),a("el-radio",{staticStyle:{"margin-left":"10px"},attrs:{label:t.row.wid},model:{value:e.top_patent,callback:function(t){e.top_patent=t},expression:"top_patent"}},[e._v("置顶")])]}}])})],1),"已通过"!=e.exam_type?a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":20,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1):e._e()],1)},n=[],s=a("1da1"),o=(a("ac1f"),a("1276"),a("96cf"),{data:function(){return{tableData:[],loading:!0,exam_type:"待审批",total:0,currentPage:1,Page_url:"",SearchType:"查询字段",SearchText:"",choose_loading:!0,choose_Dialog:!1,choose_Data:[],choosed_patents:[],widList:[],top_patent:""}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.tableData=[],a.currentPage=1,a.SearchType="查询字段",a.SearchText="",a.exam_type="待审批",console.log(e.$store.state),r="/cxy/getTransferApplicationFromPage?currPage="+a.currentPage+"&size=20",a.Page_url=r,t.next=11,a.getExam(r);case 11:case"end":return t.stop()}}),t)})))()},getExam:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,a.next=3,r.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),r.loading=!1,"success"==e.data.status){r.total=e.data.data.total;for(var a=0;a<e.data.data.records.length;a++){var n={};n.index=a+1,n.wid=e.data.data.records[a].wid,n.sqbh=e.data.data.records[a].sqbh,n.zlmc=e.data.data.records[a].zlmc,n.zlh=e.data.data.records[a].zlh,n.zlqr=e.data.data.records[a].zlqr,n.gsdw=e.data.data.records[a].gsdw,n.pzrq=e.data.data.records[a].pzrq,n.zldlr=e.data.data.records[a].zldlr,n.zldyzzgh=e.data.data.records[a].zldyzzgh,n.zldyzzxm=e.data.data.records[a].zldyzzxm,n.zlh=e.data.data.records[a].zlh,n.zlmc=e.data.data.records[a].zlmc,n.transferApplicationFormId=e.data.data.records[a].transferApplicationFormId,n.gmtUpdate=e.data.data.records[a].gmtUpdate,null==e.data.data.records[a].transferProcessId?n.state="未转换":(n.transferProcessId=e.data.data.records[a].transferProcessId,e.data.data.records[a].isWithdraw?n.state="审批表已撤回":e.data.data.records[a].isZldyzzConfirm?e.data.data.records[a].isZldyzzApproval?e.data.data.records[a].isDepartmentConfirm?e.data.data.records[a].isDepartmentApproval?e.data.data.records[a].isComplete?n.state="已转换":e.data.data.records[a].isCxyConfirm?e.data.data.records[a].isCxyApproval?null==e.data.data.records[a].contractInfoId?n.state="等待产学研创建合同":e.data.data.records[a].isPublicNotice?r.TimeDiffer(e.data.data.records[a].publicNoticeTime)?null==e.data.data.records[a].voucherId?n.state="等待上传到款凭证":null==e.data.data.records[a].checklistId?n.state="等待上传认定清单（备案）":null==e.data.data.records[a].accountingInfoId?n.state="等待生成入账通知单":null==e.data.data.records[a].invoiceId?n.state="等待上传发票":e.data.data.records[a].isComplete||(n.state="等待流程结束"):n.state="正在公示中":n.state="等待公示":n.state="产学研未通过":n.state="等待产学研审批":n.state="归属单位未通过":n.state="等待归属单位审批":n.state="第一作者未通过":n.state="等待第一作者确认"),r.tableData.push(n)}t.$message({message:"数据已更新！",type:"success"})}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),r.loading=!1,t.$message({message:"出错了！",type:"error"})}));case 3:case"end":return a.stop()}}),a)})))()},handleCurrentPage:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,r.loading=!0,console.log(r.Page_url),n=r.Page_url.split("currPage")[0]+"currPage="+e+"&size"+r.Page_url.split("size")[1],console.log(n),r.tableData=[],r.currentPage=e,a.next=9,r.getExam(n);case 9:case"end":return a.stop()}}),a)})))()},addContract:function(){var e=this;if(console.log(this.top_patent),0==this.choosed_patents.length)this.$message({message:"请选择至少一个专利！",type:"warning"});else{if(""!=this.top_patent){this.widList.push(this.top_patent);for(var t=0;t<this.choosed_patents.length;t++)this.choosed_patents[t].wid!=this.top_patent&&this.widList.push(this.choosed_patents[t].wid)}else for(var a=0;a<this.choosed_patents.length;a++)this.widList.push(this.choosed_patents[a].wid);this.$message.success("正在跳转......"),setTimeout((function(){e.$router.push({path:"/filling_contract",query:{widList:e.widList,type:"filling"}})}),2e3)}},handleSelectionChange:function(e){console.log(e),this.choosed_patents=e},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,n=t.getDate(),s=t.getHours(),o=t.getMinutes(),c=t.getSeconds(),l=a+"-";return r<10&&(l+="0"),l+=r+"-",n<10&&(l+="0"),l+=n+" ",s<10&&(l+="0"),l+=s+":",o<10&&(l+="0"),l+=o+":",c<10&&(l+="0"),l+=c,l},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),n=(a-r)/1e3,s=parseInt(n/86400);parseInt(n/3600),parseInt(n%3600/60),parseInt(n%60);return!0},handleDropdown:function(e){var t=this;t.SearchType=e},search:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,a.loading=!0,"查询字段"!=a.SearchType){t.next=6;break}e.$message({message:"请填写查询字段！",type:"warning"}),t.next=39;break;case 6:if(""!=a.SearchText){t.next=10;break}e.$message({message:"请填写查询内容！",type:"warning"}),t.next=39;break;case 10:if(r="",a.tableData=[],a.currentPage=1,"姓名"!=a.SearchType){t.next=26;break}t.t0=a.exam_type,t.next="待审批"===t.t0?17:"正在转换"===t.t0?19:"已转换"===t.t0?21:23;break;case 17:return r="/cxy/getTransferApplicationFromPageByProcessCreatorName?currPage="+a.currentPage+"&size=20&processCreatorName="+a.SearchText,t.abrupt("break",24);case 19:return r="/cxy/getTransferringPatentPageByProcessCreatorName?currPage="+a.currentPage+"&size=20&processCreatorName="+a.SearchText,t.abrupt("break",24);case 21:return r="/cxy/getTransferredPatentPageByProcessCreatorName?currPage="+a.currentPage+"&size=20&processCreatorName="+a.SearchText,t.abrupt("break",24);case 23:return t.abrupt("break",24);case 24:t.next=37;break;case 26:if("专利名称"!=a.SearchType){t.next=37;break}t.t1=a.exam_type,t.next="待审批"===t.t1?30:"正在转换"===t.t1?32:"已转换"===t.t1?34:36;break;case 30:return r="/cxy/getTransferApplicationFromPageByZLMC?currPage="+a.currentPage+"&size=20&zlmc="+a.SearchText,t.abrupt("break",37);case 32:return r="/cxy/getTransferringPatentPageByZLMC?currPage="+a.currentPage+"&size=20&zlmc="+a.SearchText,t.abrupt("break",37);case 34:return r="/cxy/getTransferredPatentPageByZLMC?currPage="+a.currentPage+"&size=20&zlmc="+a.SearchText,t.abrupt("break",37);case 36:return t.abrupt("break",37);case 37:a.Page_url=r,a.getExam(r);case 39:case"end":return t.stop()}}),t)})))()},type_change:function(e){console.log(e);var t=this;t.loading=!0,t.tableData=[];var a="";switch(e){case"待审批":a="/cxy/getTransferApplicationFromPage?currPage="+t.currentPage+"&size=20";break;case"未通过":a="/cxy/getNotApprovalTransferApplicationFromPage?currPage="+t.currentPage+"&size=20";break;case"已通过":a="/cxy/getApprovalTransferApplicationFromPage?currPage="+t.currentPage+"&size=20";break;case"正在转换":a="/cxy/getTransferringPatentPage?currPage="+t.currentPage+"&size=20";break;case"已转换":a="/cxy/getTransferredPatentPage?currPage="+t.currentPage+"&size=20";break;default:break}t.Page_url=a,t.getExam(a)},getPatent:function(e){console.log(e),this.$router.push({path:"/patent_detail_pc",query:{wid:e.wid,type:"examing"}})},Pass:function(e){var t=this;console.log(e);var a=this;this.$confirm("确认通过吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r="/process/approvalTransferApplication?transferApplicationFormId="+e.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e),"success"==e.data.status?(t.$message({type:"success",message:"已通过！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"取消输入"})}))},Failed:function(e){var t=this,a=this;this.$prompt("请填写拒绝原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(r){if(console.log(r.value),null==r.value||""==r.value)t.$message({type:"warning",message:"拒绝原因不能为空！"});else{var n="/process/notApprovalTransferApplication?remarks="+r.value+"&transferApplicationFormId="+e.transferApplicationFormId;a.request(n,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"已拒绝！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))}})).catch((function(e){console.log(e),t.$message({type:"info",message:"已取消！"})}))}}}),c=o,l=(a("de39"),a("2877")),i=Object(l["a"])(c,r,n,!1,null,null,null);t["default"]=i.exports}}]);