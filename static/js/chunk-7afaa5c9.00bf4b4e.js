(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7afaa5c9"],{1276:function(e,t,a){"use strict";var r=a("d784"),n=a("44e7"),s=a("825a"),l=a("1d80"),o=a("4840"),c=a("8aa5"),i=a("50c4"),u=a("14c3"),d=a("9263"),p=a("d039"),f=[].push,g=Math.min,h=4294967295,v=!p((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var r=String(l(this)),s=void 0===a?h:a>>>0;if(0===s)return[];if(void 0===e)return[r];if(!n(e))return t.call(r,e,s);var o,c,i,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,v=new RegExp(e.source,p+"g");while(o=d.call(v,r)){if(c=v.lastIndex,c>g&&(u.push(r.slice(g,o.index)),o.length>1&&o.index<r.length&&f.apply(u,o.slice(1)),i=o[0].length,g=c,u.length>=s))break;v.lastIndex===o.index&&v.lastIndex++}return g===r.length?!i&&v.test("")||u.push(""):u.push(r.slice(g)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var n=l(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,n,a):r.call(String(n),t,a)},function(e,n){var l=a(r,e,this,n,r!==t);if(l.done)return l.value;var d=s(e),p=String(this),f=o(d,RegExp),m=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),_=new f(v?d:"^(?:"+d.source+")",b),x=void 0===n?h:n>>>0;if(0===x)return[];if(0===p.length)return null===u(_,p)?[p]:[];var w=0,z=0,y=[];while(z<p.length){_.lastIndex=v?z:0;var P,C=u(_,v?p:p.slice(z));if(null===C||(P=g(i(_.lastIndex+(v?0:z)),p.length))===w)z=c(p,z,m);else{if(y.push(p.slice(w,z)),y.length===x)return y;for(var E=1;E<=C.length-1;E++)if(y.push(C[E]),y.length===x)return y;z=w=P}}return y.push(p.slice(w)),y}]}),!v)},"14c3":function(e,t,a){var r=a("c6b6"),n=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var s=a.call(e,t);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},2807:function(e,t,a){},"6b8d":function(e,t,a){"use strict";a("2807")},"8aa5":function(e,t,a){"use strict";var r=a("6547").charAt;e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},9263:function(e,t,a){"use strict";var r=a("ad6d"),n=a("9f7f"),s=RegExp.prototype.exec,l=String.prototype.replace,o=s,c=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),i=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||i;d&&(o=function(e){var t,a,n,o,d=this,p=i&&d.sticky,f=r.call(d),g=d.source,h=0,v=e;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),v=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,h++),a=new RegExp("^(?:"+g+")",f)),u&&(a=new RegExp("^"+g+"$(?!\\s)",f)),c&&(t=d.lastIndex),n=s.call(p?a:d,v),p?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:c&&n&&(d.lastIndex=d.global?n.index+n[0].length:t),u&&n&&n.length>1&&l.call(n[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),e.exports=o},"9f7f":function(e,t,a){"use strict";var r=a("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var r=a("23e7"),n=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,a){"use strict";var r=a("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,a){"use strict";a("ac1f");var r=a("6eeb"),n=a("d039"),s=a("b622"),l=a("9263"),o=a("9112"),c=s("species"),i=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=s("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,d){var g=s(e),h=!n((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),v=h&&!n((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[g]=/./[g]),a.exec=function(){return t=!0,null},a[g](""),!t}));if(!h||!v||"replace"===e&&(!i||!u||p)||"split"===e&&!f){var m=/./[g],b=a(g,""[e],(function(e,t,a,r,n){return t.exec===l?h&&!n?{done:!0,value:m.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),_=b[0],x=b[1];r(String.prototype,e,_),r(RegExp.prototype,g,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}d&&o(RegExp.prototype[g],"sham",!0)}},dcf3:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Handling_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Search"}),a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},[a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.refresh}},[e._v("刷新列表")])],1)])]),a("el-table",{ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"专利号"}},[a("span",[e._v(e._s(t.row.zlh))])]),a("el-form-item",{attrs:{label:"专利名称"}},[a("span",[e._v(e._s(t.row.zlmc))])]),a("el-form-item",{attrs:{label:"授权编号"}},[a("span",[e._v(e._s(t.row.sqbh))])]),a("el-form-item",{attrs:{label:"归属单位"}},[a("span",[e._v(e._s(t.row.gsdw))])]),a("el-form-item",{attrs:{label:"所有权人"}},[a("span",[e._v(e._s(t.row.zlqr))])]),a("el-form-item",{attrs:{label:"立项编号"}},[a("span",[e._v(e._s(t.row.projectCode))])]),a("el-form-item",{attrs:{label:"批准日期"}},[a("span",[e._v(e._s(t.row.pzrq))])]),a("el-form-item",{attrs:{label:"转换状态"}},[a("span",[e._v(e._s(t.row.state))])]),a("el-form-item",{attrs:{label:"专利代理人"}},[a("span",[e._v(e._s(t.row.zldlr))])]),a("el-form-item",{attrs:{label:"专利第一作者姓名"}},[a("span",[e._v(e._s(t.row.zldyzzxm))])]),a("el-form-item",{attrs:{label:"专利第一作者工号"}},[a("span",[e._v(e._s(t.row.zldyzzgh))])]),a("el-form-item",{attrs:{label:"最后更新时间"}},[a("span",[e._v(e._s(t.row.zhgxsj))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),a("el-table-column",{attrs:{prop:"projectCode",label:"立项编号",width:"100"}}),a("el-table-column",{attrs:{prop:"state",label:"转换状态",width:"280"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return["正在转换：等待公示"==t.row.state?a("el-button",{attrs:{icon:"el-icon-link"},on:{click:function(a){return e.GetPublic(t.row)}}},[e._v("生成公示页面")]):e._e(),["正在转换：正在公示","正在转换：等待上传合同"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-document"},on:{click:function(a){return e.Pass(t.row)}}},[e._v("生成合同（模版）")]):e._e(),"正在转换：等待上传合同"==t.row.state?a("el-button",{attrs:{icon:"el-icon-upload2"},on:{click:function(a){return e.Filed(t.row)}}},[e._v("上传合同（pdf）")]):e._e(),["正在转换：等待合同寄回和上传到款凭证","正在转换：等待上传认定清单（备案）","正在转换：等待上传发票"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-download"},on:{click:function(a){return e.Filed(t.row)}}},[e._v("下载合同")]):e._e(),["正在转换：等待上传认定清单（备案）","正在转换：等待上传发票"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-download"},on:{click:function(a){return e.Filed(t.row)}}},[e._v("下载到款凭证")]):e._e(),"正在转换：等待上传发票"==t.row.state?a("el-button",{attrs:{icon:"el-icon-download"},on:{click:function(a){return e.Filed(t.row)}}},[e._v("下载认定清单")]):e._e(),"正在转换：等待合同寄回和上传到款凭证"==t.row.state?a("el-button",{attrs:{icon:"el-icon-upload2"},on:{click:function(a){return e.Filed(t.row)}}},[e._v("上传到款凭证")]):e._e(),"正在转换：等待合同寄回和上传到款凭证"==t.row.state?a("el-button",{attrs:{icon:"el-icon-circle-check"},on:{click:function(a){return e.Filed(t.row)}}},[e._v("确认寄回")]):e._e(),"正在转换：等待上传认定清单（备案）"==t.row.state?a("el-button",{attrs:{icon:"el-icon-document-checked"},on:{click:function(a){return e.Filed(t.row)}}},[e._v("提交认定清单")]):e._e(),"正在转换：等待上传发票"==t.row.state?a("el-button",{attrs:{icon:"el-icon-document-checked"},on:{click:function(a){return e.Filed(t.row)}}},[e._v("提交发票")]):e._e()]}}])})],1),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":10,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1),a("el-dialog",{staticClass:"Public_Dialog",attrs:{visible:e.PublicDialog,width:"50%"},on:{"update:visible":function(t){e.PublicDialog=t}}},[a("el-card",{staticClass:"card",attrs:{shadow:"hover"}},[a("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("公示内容")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.Copy}},[e._v(" 复 制 ")])],1),a("div",{staticClass:"below",attrs:{id:"CopyContent"}},[a("div",[e._v(" 根据《中华人民共和国促进科技成果转化法》相关规定，现对学校拟向外转让的知识产权进行公示。 ")]),a("br"),a("div",{staticStyle:{"margin-top":"20px"}},[a("div",[a("span",[e._v("专利名称：")]),e._v(" "+e._s(e.public_content.zlmc)+" ")]),a("div",{staticStyle:{"margin-top":"8px"}},[a("span",[e._v("专利号：")]),e._v(" "+e._s(e.public_content.zlh)+" ")]),a("div",{staticStyle:{"margin-top":"8px"}},[a("span",[e._v("发明人：")]),e._v(" "+e._s(e.public_content.zldyzzxm)+" ")])]),a("br"),a("div",{staticStyle:{"margin-top":"20px"}},[e._v(" 经双方协商，以上1件专利转让给 "),a("span",[e._v(e._s(e.public_content.transfereeDelegate))]),e._v(" ，转让金额共计人民币 "),a("span",[e._v(e._s(e.public_content.evaluation))]),e._v(" 万元整。该交易不是关联交易。若有异议，请于公告之日起 "),a("span",[e._v("15")]),e._v(" 日内向产学研合作处（技术转移中心）书面实名提出并提供相应的证明材料。 ")]),a("br"),a("div",{staticStyle:{"margin-top":"20px"}},[e._v(" 咨询电话：85866885，E-mail：jszy@njupt.edu.cn ")]),a("br"),a("div",{staticClass:"bottom"},[a("div",[e._v("产学研合作处（技术转移中心）")]),a("div",{staticStyle:{"margin-top":"10px"}},[e._v("公告日：2022年1月13日")])])])])],1)],1)},n=[],s=a("1da1"),l=(a("ac1f"),a("1276"),a("b0c0"),a("96cf"),{data:function(){return{tableData:[],total:0,currentPage:1,Page_url:"",SearchType:"查询字段",SearchText:"",PublicDialog:!1,public_content:{zlmc:"",zlh:"",zldyzzxm:"",transfereeDelegate:"",evaluation:""}}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.tableData=[],a.currentPage=1,a.SearchType="查询字段",a.SearchText="",console.log(e.$store.state),r="/process/getTransferringPatentPage?currPage="+a.currentPage+"&size=10",a.Page_url=r,t.next=10,a.getExam(r);case 10:case"end":return t.stop()}}),t)})))()},getExam:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,a.next=3,r.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),"success"==e.data.status){r.total=e.data.data.total;for(var a=0;a<e.data.data.records.length;a++){var n={};n.index=a+1,n.wid=e.data.data.records[a].wid,n.sqbh=e.data.data.records[a].sqbh,n.zlmc=e.data.data.records[a].zlmc,n.zlh=e.data.data.records[a].zlh,n.zlqr=e.data.data.records[a].zlqr,n.gsdw=e.data.data.records[a].gsdw,n.zhgxsj=e.data.data.records[a].zhgxsj,n.pzrq=e.data.data.records[a].pzrq,n.zldlr=e.data.data.records[a].zldlr,n.zldyzzgh=e.data.data.records[a].zldyzzgh,n.zldyzzxm=e.data.data.records[a].zldyzzxm,n.zlh=e.data.data.records[a].zlh,n.zlmc=e.data.data.records[a].zlmc,null==e.data.data.records[a].transferProcess?(n.state="未转换",n.gmtUpdate=null):(n.gmtUpdate=e.data.data.records[a].transferProcess.gmtUpdate,n.transferProcessId=e.data.data.records[a].transferProcess.transferProcessId,e.data.data.records[a].transferProcess.isZldyzzConfirm?e.data.data.records[a].transferProcess.isZldyzzApproval?e.data.data.records[a].transferProcess.isDepartmentConfirm?e.data.data.records[a].transferProcess.isDepartmentApproval?e.data.data.records[a].transferProcess.isCxyConfirm?e.data.data.records[a].transferProcess.isCxyApproval?(n.projectCode=e.data.data.records[a].transferProcess.projectCode,e.data.data.records[a].transferProcess.isPublicNotice?r.TimeDiffer(e.data.data.records[a].transferProcess.publicNoticeTime)?null==e.data.data.records[a].transferProcess.contractId?n.state="正在转换：等待上传合同":e.data.data.records[a].transferProcess.isContractSendBack&&null!=e.data.data.records[a].transferProcess.voucherId?null==e.data.data.records[a].transferProcess.checklistId?n.state="正在转换：等待上传认定清单（备案）":null==e.data.data.records[a].transferProcess.invoiceId?n.state="正在转换：等待上传发票":n.state="已转换":n.state="正在转换：等待合同寄回和上传到款凭证":n.state="正在转换：正在公示中":n.state="正在转换：等待公示"):n.state="产学研未通过":n.state="正在转换：等待产学研审批":n.state="归属单位未通过":n.state="正在转换：等待归属单位审批":n.state="第一作者未通过":n.state="正在转换：等待第一作者确认"),r.tableData.push(n)}t.$message({message:"数据已更新",type:"success"})}else t.$message({message:"数据请求失败",type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}));case 3:case"end":return a.stop()}}),a)})))()},handleCurrentPage:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,console.log(r.Page_url),n=r.Page_url.split("currPage")[0]+"currPage="+e+"&size"+r.Page_url.split("size")[1],console.log(n),r.tableData=[],r.currentPage=e,a.next=8,r.getExam(n);case 8:case"end":return a.stop()}}),a)})))()},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,n=t.getDate(),s=t.getHours(),l=t.getMinutes(),o=t.getSeconds(),c=a+"-";return r<10&&(c+="0"),c+=r+"-",n<10&&(c+="0"),c+=n+" ",s<10&&(c+="0"),c+=s+":",l<10&&(c+="0"),c+=l+":",o<10&&(c+="0"),c+=o,c},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),n=(a-r)/1e3,s=parseInt(n/86400);parseInt(n/3600),parseInt(n%3600/60),parseInt(n%60);return s>15},handleDropdown:function(e){var t=this;t.SearchType=e},search:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,r="",a.tableData=[],a.currentPage=1,t.t0=a.SearchType,t.next="专利名称"===t.t0?7:"授权编号"===t.t0?10:13;break;case 7:return r="/patent/getPatentPageByZLMC?currPage="+a.currentPage+"&size=10&zldyzzgh="+a.id+"&zldyzzxm="+a.name+"&zlmc="+a.SearchText,a.Page_url=r,t.abrupt("break",14);case 10:return r="/patent/getPatentPageBySQBH?currPage="+a.currentPage+"&size=10&sqbh="+a.SearchText+"&zldyzzgh="+a.id+"&zldyzzxm="+a.name,a.Page_url=r,t.abrupt("break",14);case 13:return t.abrupt("break",14);case 14:console.log(r),a.getExam(r);case 16:case"end":return t.stop()}}),t)})))()},getPatent:function(e){console.log(e),this.$router.push({path:"/patent_detail_pc",query:e})},GetPublic:function(e){var t=this,a=this;this.PublicDialog=!0,console.log(e);var r="/application/getTransferApplicationFormByWID?wid="+e.wid;a.request(r,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.public_content.transfereeDelegate=e.data.data.transfereeDelegate,t.public_content.evaluation=e.data.data.evaluation):t.$message({message:"数据请求失败",type:"error"})})).catch((function(e){console.log(e)})),this.public_content.zlmc=e.zlmc,this.public_content.zlh=e.zlh,this.public_content.zldyzzxm=e.zldyzzxm},Copy:function(){this.$message({message:"已复制",type:"success"}),this.selectElementContents(document.getElementById("CopyContent"))},selectElementContents:function(e){var t,a;document.body;if(document.createRange&&window.getSelection){t=document.createRange(),a=window.getSelection(),a.removeAllRanges();try{t.selectNodeContents(e),a.addRange(t)}catch(r){t.selectNode(e),a.addRange(t)}document.execCommand("copy"),window.getSelection().empty()}}}}),o=l,c=(a("6b8d"),a("2877")),i=Object(c["a"])(o,r,n,!1,null,null,null);t["default"]=i.exports}}]);