(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f89641f"],{"0961":function(e,t,a){"use strict";a("4ad8")},"4ad8":function(e,t,a){},"4eb3":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Examing_Transfer_Container"},[a("div",{staticClass:"head_btn"},[a("div",{staticClass:"Type"},[a("el-radio-group",{on:{change:e.type_change},model:{value:e.exam_type,callback:function(t){e.exam_type=t},expression:"exam_type"}},[a("el-radio-button",{attrs:{label:"待审批"}}),a("el-radio-button",{attrs:{label:"未通过"}}),a("el-radio-button",{attrs:{label:"已通过"}}),a("el-radio-button",{attrs:{label:"正在转换"}}),a("el-radio-button",{attrs:{label:"已转换"}})],1)],1),["待审批","正在转换","已转换"].includes(e.exam_type)?a("div",{staticClass:"Search"},[a("el-dropdown",{staticClass:"Dropdown",on:{command:e.handleDropdown}},[a("el-button",{attrs:{type:"primary"}},[e._v(" "+e._s(e.SearchType_prepend)+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"专利名称"}},[e._v("专利名称")]),a("el-dropdown-item",{attrs:{command:"专利第一作者"}},[e._v(" 专利第一作者 ")]),a("el-dropdown-item",{attrs:{command:"成员名单"}},[e._v("成员名单")]),a("el-dropdown-item",{attrs:{command:"所属学院"}},[e._v("所属学院")])],1)],1),a("el-input",{attrs:{placeholder:"请输入需要查询的内容"},model:{value:e.SearchText,callback:function(t){e.SearchText=t},expression:"SearchText"}}),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")])],1):e._e(),"已通过"==e.exam_type?a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},[a("el-button",{attrs:{icon:"el-icon-plus"},on:{click:e.addContract}},[e._v("创建合同 ")])],1)]):e._e()]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",stripe:""},on:{"selection-change":e.handleSelectionChange}},["已通过"==e.exam_type?a("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),a("el-table-column",{attrs:{type:"expand",label:"详情",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"专利号"}},[a("span",[e._v(e._s(t.row.zlh))])]),a("el-form-item",{attrs:{label:"专利名称"}},[a("span",[e._v(e._s(t.row.zlmc))])]),a("el-form-item",{attrs:{label:"授权编号"}},[a("span",[e._v(e._s(t.row.sqbh))])]),a("el-form-item",{attrs:{label:"归属单位"}},[a("span",[e._v(e._s(t.row.gsdw))])]),a("el-form-item",{attrs:{label:"所有权人"}},[a("span",[e._v(e._s(t.row.zlqr))])]),a("el-form-item",{attrs:{label:"立项编号"}},[a("span",[e._v(e._s(t.row.projectCode))])]),a("el-form-item",{attrs:{label:"批准日期"}},[a("span",[e._v(e._s(t.row.pzrq))])]),a("el-form-item",{attrs:{label:"转换状态"}},[a("span",[e._v(e._s(t.row.state))])]),a("el-form-item",{attrs:{label:"专利代理人"}},[a("span",[e._v(e._s(t.row.zldlr))])]),a("el-form-item",{attrs:{label:"专利第一作者姓名"}},[a("span",[e._v(e._s(t.row.zldyzzxm))])]),a("el-form-item",{attrs:{label:"专利第一作者工号"}},[a("span",[e._v(e._s(t.row.zldyzzgh))])]),a("el-form-item",{attrs:{label:"最后更新时间"}},[a("span",[e._v(e._s(t.row.gmtUpdate))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),a("el-table-column",{attrs:{prop:"state",label:"转换状态",width:"160"}}),a("el-table-column",{attrs:{prop:"paName",label:"受让方单位"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[["已通过","正在转换","已转换"].includes(e.exam_type)?a("el-button",{attrs:{icon:"el-icon-document"},on:{click:function(a){return e.getPatent(t.row)}}},[e._v("查看审批表 ")]):e._e(),["待审批","未通过"].includes(e.exam_type)?a("el-button",{attrs:{icon:"el-icon-document"},on:{click:function(a){return e.getPatent_opreate(t.row)}}},[e._v("查看审批表 ")]):e._e(),["等待产学研审批","产学研未通过"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-circle-check"},on:{click:function(a){return e.Pass(t.row)}}},[e._v("通过 ")]):e._e(),"等待产学研审批"==t.row.state?a("el-button",{attrs:{icon:"el-icon-circle-close"},on:{click:function(a){return e.Failed(t.row)}}},[e._v("不通过 ")]):e._e(),"已通过"==e.exam_type&&-1!=e.choosed_patents.indexOf(t.row.wid)?a("el-radio",{staticStyle:{"margin-left":"10px"},attrs:{label:t.row.wid},nativeOn:{click:function(a){return a.preventDefault(),e.radio_cancelChoose(t.row.wid)}},model:{value:e.top_patent,callback:function(t){e.top_patent=t},expression:"top_patent"}},[e._v("置顶 ")]):e._e()]}}])})],1),"已通过"!=e.exam_type?a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":20,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1):e._e()],1)},o=[],n=a("1da1"),s=(a("ac1f"),a("1276"),a("96cf"),a("af2c"),a("4ec3")),c=(a("5c96"),{data:function(){return{tableData:[],loading:!0,exam_type:"待审批",total:0,currentPage:1,Page_url:"",SearchType:"",SearchType_prepend:"查询字段",SearchText:"",choose_loading:!0,choose_Dialog:!1,choose_Data:[],choosed_patents:[],widList:[],top_patent:""}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.tableData=[],a.currentPage=1,a.SearchType="",a.SearchType_prepend="查询字段",a.SearchText="",a.exam_type="待审批",console.log(e.$store.state),r="/cxy/getTransferApplicationFromByCondition?contractType=0&currPage="+a.currentPage+"&size=20&search=0&patentState=5",a.Page_url=r,t.next=12,a.getExam(r);case 12:case"end":return t.stop()}}),t)})))()},getExam:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,a.next=3,r.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),r.loading=!1,"success"==e.data.status){r.total=e.data.data.total;for(var a=0;a<e.data.data.records.length;a++){var o={};o.index=a+1,o.wid=e.data.data.records[a].wid,o.sqbh=e.data.data.records[a].sqbh,o.zlmc=e.data.data.records[a].zlmc,o.zlh=e.data.data.records[a].zlh,o.zlqr=e.data.data.records[a].zlqr,o.gsdw=e.data.data.records[a].gsdw,o.pzrq=e.data.data.records[a].pzrq,o.zldlr=e.data.data.records[a].zldlr,o.zldyzzgh=e.data.data.records[a].zldyzzgh,o.zldyzzxm=e.data.data.records[a].zldyzzxm,o.zlh=e.data.data.records[a].zlh,o.zlmc=e.data.data.records[a].zlmc,o.paName=e.data.data.records[a].paName,o.transferApplicationFormId=e.data.data.records[a].transferApplicationFormId,o.gmtUpdate=e.data.data.records[a].gmtUpdate,null==e.data.data.records[a].transferProcessId?o.state="未转换":(o.transferProcessId=e.data.data.records[a].transferProcessId,e.data.data.records[a].isWithdraw?o.state="审批表已撤回":e.data.data.records[a].isZldyzzConfirm?e.data.data.records[a].isZldyzzApproval?e.data.data.records[a].isDepartmentConfirm?e.data.data.records[a].isDepartmentApproval?e.data.data.records[a].isComplete?o.state="已转换":e.data.data.records[a].isCxyConfirm?e.data.data.records[a].isCxyApproval?null==e.data.data.records[a].contractInfoId?o.state="等待产学研创建合同":e.data.data.records[a].isPublicNotice?r.TimeDiffer(e.data.data.records[a].publicNoticeTime)?0==e.data.data.records[a].voucherNum?o.state="等待上传到款凭证":null==e.data.data.records[a].checklistId?o.state="等待上传认定清单（备案）":null==e.data.data.records[a].accountingInfoId?o.state="等待生成入账通知单":null==e.data.data.records[a].invoiceId?o.state="等待财务处上传发票":e.data.data.records[a].hasCashReward&&!e.data.data.records[a].isCashRewardPublicNotice?o.state="等待现金奖励公示":e.data.data.records[a].isComplete||(o.state="等待流程结束"):o.state="正在公示中":o.state="等待公示":o.state="产学研未通过":o.state="等待产学研审批":o.state="归属单位未通过":o.state="等待上传所属部门意见":o.state="第一作者未通过":o.state="等待第一作者确认"),r.tableData.push(o)}t.$message({message:"数据已更新！",type:"success"})}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),r.loading=!1,t.$message({message:"出错了！",type:"error"})}));case 3:case"end":return a.stop()}}),a)})))()},handleCurrentPage:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,r.loading=!0,console.log(r.Page_url),o=r.Page_url.split("currPage")[0]+"currPage="+e+"&size"+r.Page_url.split("size")[1],console.log(o),r.tableData=[],r.currentPage=e,a.next=9,r.getExam(o);case 9:case"end":return a.stop()}}),a)})))()},radio_cancelChoose:function(e){e===this.top_patent?this.top_patent="":this.top_patent=e},handleSelectionChange:function(e){this.top_patent="";var t=[];console.log(e);for(var a=0;a<e.length;a++)t.push(e[a].wid);this.choosed_patents=t},addContract:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,o,n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e,console.log(e.top_patent),0==e.choosed_patents.length)e.$notify.warning({title:"提示",message:"请选择至少一个专利！"});else{if(e.widList=[],""!=e.top_patent)for(e.widList.push(e.top_patent),a=0;a<e.choosed_patents.length;a++)e.choosed_patents[a]!=e.top_patent&&e.widList.push(e.choosed_patents[a]);else for(r=0;r<e.choosed_patents.length;r++)e.widList.push(e.choosed_patents[r]);for(o="",o+=e.widList[0],n=1;n<e.widList.length;n++)o=o+"&widList="+e.widList[n];c="/contract/checkPatentList?widList="+o,console.log(c),Object(s["a"])(c,{},"GET",{}).then((function(t){console.log(t),"success"==t.data.status?"OK"==t.data.data&&(e.$notify.success({title:"成功",message:"正在跳转...",duration:2e3}),setTimeout((function(){e.$router.push({path:"/filling_contract_transfer",query:{widList:e.widList,type:"filling"}})}),2e3)):e.$message({message:t.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))}case 3:case"end":return t.stop()}}),t)})))()},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,o=t.getDate(),n=t.getHours(),s=t.getMinutes(),c=t.getSeconds(),i=a+"-";return r<10&&(i+="0"),i+=r+"-",o<10&&(i+="0"),i+=o+" ",n<10&&(i+="0"),i+=n+":",s<10&&(i+="0"),i+=s+":",c<10&&(i+="0"),i+=c,i},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),o=(a-r)/1e3,n=parseInt(o/86400);parseInt(o/3600),parseInt(o%3600/60),parseInt(o%60);return!0},handleDropdown:function(e){console.log(e);var t=this;switch(t.SearchType_prepend=e,e){case"专利名称":t.SearchType=1;break;case"专利第一作者":t.SearchType=2;break;case"成员名单":t.SearchType=3;break;case"所属学院":t.SearchType=4;break;default:break}},search:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,a.loading=!0,"查询字段"!=a.SearchType_prepend){t.next=6;break}e.$message({message:"请填写查询字段！",type:"warning"}),t.next=26;break;case 6:if(""!=a.SearchText){t.next=10;break}e.$message({message:"请填写查询内容！",type:"warning"}),t.next=26;break;case 10:r="",a.tableData=[],a.currentPage=1,t.t0=a.exam_type,t.next="待审批"===t.t0?16:"正在转换"===t.t0?18:"已转换"===t.t0?20:22;break;case 16:return r="/cxy/getTransferApplicationFromByCondition?contractType=0&patentState=5&currPage=1&size=20&search="+a.SearchType+"&condition="+a.SearchText,t.abrupt("break",23);case 18:return r="/cxy/getTransferApplicationFromByCondition?contractType=0&patentState=2&currPage=1&size=20&search="+a.SearchType+"&condition="+a.SearchText,t.abrupt("break",23);case 20:return r="/cxy/getTransferApplicationFromByCondition?contractType=0&patentState=3&currPage=1&size=20&search="+a.SearchType+"&condition="+a.SearchText,t.abrupt("break",23);case 22:return t.abrupt("break",23);case 23:console.log(r),a.Page_url=r,a.getExam(r);case 26:case"end":return t.stop()}}),t)})))()},type_change:function(e){console.log(e);var t=this;t.loading=!0,t.tableData=[];var a="";switch(e){case"待审批":a="/cxy/getTransferApplicationFromByCondition?contractType=0&currPage=1&size=20&search=0&patentState=5";break;case"未通过":a="/cxy/getTransferApplicationFromByCondition?contractType=0&currPage=1&size=20&search=0&patentState=4";break;case"已通过":a="/cxy/getTransferApplicationFromByCondition?contractType=0&currPage=1&size=20&search=0&patentState=1";break;case"正在转换":a="/cxy/getTransferApplicationFromByCondition?contractType=0&currPage=1&size=20&search=0&patentState=2";break;case"已转换":a="/cxy/getTransferApplicationFromByCondition?contractType=0&currPage=1&size=20&search=0&patentState=3";break;default:break}t.Page_url=a,t.getExam(a)},getPatent_opreate:function(e){console.log(e),this.$router.push({path:"/exam_detail_pc",query:{wid:e.wid,type:"examing_opreate"}})},getPatent:function(e){console.log(e),this.$router.push({path:"/exam_detail_pc",query:{wid:e.wid,type:"examing"}})},Pass:function(e){var t=this;console.log(e);var a=this;this.$confirm("确认通过吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r="/process/approvalTransferApplication?transferApplicationFormId="+e.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e),"success"==e.data.status?(t.$message({type:"success",message:"已通过！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"取消输入"})}))},Failed:function(e){var t=this,a=this;this.$prompt("请填写拒绝原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(r){if(console.log(r.value),null==r.value||""==r.value)t.$message({type:"warning",message:"拒绝原因不能为空！"});else{var o="/process/notApprovalTransferApplication?remarks="+r.value+"&transferApplicationFormId="+e.transferApplicationFormId;a.request(o,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"已拒绝！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))}})).catch((function(e){console.log(e),t.$message({type:"info",message:"已取消！"})}))}}}),i=c,l=(a("0961"),a("2877")),d=Object(l["a"])(i,r,o,!1,null,null,null);t["default"]=d.exports},af2c:function(e,t,a){"use strict";a("ac1f"),a("1276"),a("caad"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d");var r=a("4ec3"),o=a("5c96"),n=a.n(o),s=function(e){var t="/file/downloadFileById?fileId="+e;Object(r["a"])(t,{},"GET",{},"arraybuffer").then((function(e){if(console.log(e),void 0==e.headers["content-disposition"])n.a.Notification({title:"错误",message:"文件可能丢失了！",type:"error"});else{var t="",a=e.headers["content-disposition"].split("fileName=")[1].split(".").length,r=e.headers["content-disposition"].split("fileName=")[1].split(".")[a-1];if(["pdf","png","jpg","jpeg"].includes(r)){switch(r){case"pdf":t="application/pdf";break;case"png":t="image/png";break;case"jpg":t="image/jpeg";break;case"jpeg":t="image/jpeg";break}var o=e.data,s=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);if(window.navigator&&window.navigator.msSaveOrOpenBlob){var c=new Blob([o],{type:t});console.log(s),window.navigator.msSaveOrOpenBlob(c,s)}else{var i=new Blob([o],{type:t}),l=window.URL.createObjectURL(i);console.log(l),window.open(l)}}else n.a.Notification({title:"提示",message:"该文件类型暂不支持在线预览，请下载后查看！",type:"warning"})}})).catch((function(e){console.log(e),n.a.Message({message:"出错了！",type:"error"})}))},c=function(e){Object(r["a"])(e,{},"GET",{},"blob").then((function(t){if(console.log(t),void 0!=t.headers["content-disposition"]){n.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var a=decodeURI(t.headers["content-disposition"].split("fileName=")[1]);try{var o=new Blob([t.data],{type:"application/force-download"}),s=URL.createObjectURL(o),c=document.createElement("a");c.href=s,c.setAttribute("download",a),document.body.appendChild(c),c.click(),document.body.removeChild(c)}catch(i){console.log(i),n.a.Message({message:"数据请求失败！",type:"error"})}}else Object(r["a"])(e,{},"GET",{}).then((function(e){n.a.Message({message:e.data.data.errMsg,type:"error"})}))})).catch((function(e){console.log(e),n.a.Message({message:"出错了！",type:"error"})}))},i=function(e,t){var a="";if(0==t.length)n.a.Notification.warning({title:"提示",message:"文件为空！"});else{if(1==t.length)a="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];else if(t.length>1){a="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];for(var o=1;o<t.length;o++)a=a+"&fileIdList="+t[o]}Object(r["a"])(a,{},"GET",{},"blob").then((function(e){if(void 0!=e.headers["content-disposition"]){n.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var t=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);try{var a=new Blob([e.data],{type:"application/force-download"}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.setAttribute("download",t),document.body.appendChild(o),o.click(),document.body.removeChild(o)}catch(s){console.log(s),n.a.Message({message:"数据请求失败！",type:"error"})}}else n.a.Message({message:"文件可能丢失了！",type:"error"})})).catch((function(e){console.log(e),n.a.Message({message:"出错了！",type:"error"})}))}};t["a"]={previewFile:s,downloadFiles:c,downloadFilePackage:i}}}]);