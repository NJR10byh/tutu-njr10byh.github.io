(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4760f6fc"],{"5bab":function(e,t,a){},"63b3":function(e,t,a){"use strict";a("5bab")},fb5f:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Patents_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Type"},[a("el-radio-group",{on:{change:e.type_change},model:{value:e.exam_type,callback:function(t){e.exam_type=t},expression:"exam_type"}},[a("el-radio-button",{attrs:{label:"全部"}}),a("el-radio-button",{attrs:{label:"未通过"}}),a("el-radio-button",{attrs:{label:"已通过"}}),a("el-radio-button",{attrs:{label:"正在转换"}}),a("el-radio-button",{attrs:{label:"已转换"}})],1)],1),["全部"].includes(e.exam_type)?a("div",{staticClass:"Search"},[a("el-dropdown",{staticClass:"Dropdown",on:{command:e.handleDropdown}},[a("el-button",{attrs:{type:"primary"}},[e._v(" 查询字段"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"专利名称"}},[e._v("专利名称")]),a("el-dropdown-item",{attrs:{command:"专利号"}},[e._v("专利号")])],1)],1),a("el-input",{attrs:{placeholder:"请输入需要查询的内容"},model:{value:e.SearchText,callback:function(t){e.SearchText=t},expression:"SearchText"}},[a("template",{slot:"prepend"},[e._v(e._s(e.SearchType))])],2),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")])],1):e._e(),a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},[a("el-button",{attrs:{icon:"el-icon-download"},on:{click:e.export_patents}},[e._v("导出 ")]),a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.refresh}},[e._v("刷新列表 ")])],1)])]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"专利号"}},[a("span",[e._v(e._s(t.row.zlh))])]),a("el-form-item",{attrs:{label:"专利名称"}},[a("span",[e._v(e._s(t.row.zlmc))])]),a("el-form-item",{attrs:{label:"成员名单"}},[a("span",[e._v(e._s(t.row.cymd))])]),a("el-form-item",{attrs:{label:"成员工号"}},[a("span",[e._v(e._s(t.row.cygh))])]),a("el-form-item",{attrs:{label:"专利第一作者姓名"}},[a("span",[e._v(e._s(t.row.zldyzzxm))])]),a("el-form-item",{attrs:{label:"专利第一作者工号"}},[a("span",[e._v(e._s(t.row.zldyzzgh))])]),a("el-form-item",{attrs:{label:"授权编号"}},[a("span",[e._v(e._s(t.row.sqbh))])]),a("el-form-item",{attrs:{label:"授权公共号"}},[a("span",[e._v(e._s(t.row.sqggh))])]),a("el-form-item",{attrs:{label:"转让价格意向（万元）"}},[a("span",[e._v(e._s(t.row.priceIntention))])]),a("el-form-item",{attrs:{label:"许可价格意向（万元）"}},[a("span",[e._v(e._s(t.row.licencePriceIntention))])]),a("el-form-item",{attrs:{label:"归属单位"}},[a("span",[e._v(e._s(t.row.gsdw))])]),a("el-form-item",{attrs:{label:"所有权人"}},[a("span",[e._v(e._s(t.row.zlqr))])]),a("el-form-item",{attrs:{label:"批准日期"}},[a("span",[e._v(e._s(t.row.pzrq))])]),a("el-form-item",{attrs:{label:"转换状态"}},[a("span",[e._v(e._s(t.row.state))])]),a("el-form-item",{attrs:{label:"专利代理人"}},[a("span",[e._v(e._s(t.row.zldlr))])]),a("el-form-item",{attrs:{label:"最后更新日期"}},[a("span",[e._v(e._s(t.row.gmtUpdate))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),a("el-table-column",{attrs:{prop:"state",label:"转换状态"}}),a("el-table-column",{attrs:{prop:"gmtUpdate",label:"最后更新时间",width:"180"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作",width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){return["未转换"==t.row.state?a("el-button",{attrs:{icon:"el-icon-coin"},on:{click:function(a){return e.FillingTransferPrice(t.row)}}},[e._v("转让 ")]):e._e(),"未转换"==t.row.state?a("el-button",{attrs:{icon:"el-icon-coin"},on:{click:function(a){return e.FillingLicencePrice(t.row)}}},[e._v("许可 ")]):e._e(),"未转换"==t.row.state?a("el-button",{attrs:{icon:"el-icon-edit-outline"},on:{click:function(a){return e.handleExam(t.row)}}},[e._v("填写审批 ")]):e._e(),"未转换"!=t.row.state&&"已转换"!=t.row.state&&"产学研未通过"!=t.row.state&&"审批表已撤回"!=t.row.state&&"第一作者未通过"!=t.row.state?a("el-button",{attrs:{icon:"el-icon-document"},on:{click:function(a){return e.getPatent(t.row)}}},[e._v("查看审批表 ")]):e._e(),"等待第一作者确认"==t.row.state?a("el-button",{attrs:{icon:"el-icon-document-delete"},on:{click:function(a){return e.withDraw(t.row)}}},[e._v("撤回 ")]):e._e(),["产学研未通过","审批表已撤回","第一作者未通过"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-edit-outline"},on:{click:function(a){return e.editPatent(t.row)}}},[e._v("修改审批表")]):e._e(),["审批表已撤回"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-document-checked"},on:{click:function(a){return e.resubmit_withdraw(t.row)}}},[e._v("重新提交 ")]):e._e(),["产学研未通过"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-mouse"},on:{click:function(a){return e.getFailedReason_cxy(t.row)}}},[e._v("查看原因 ")]):e._e(),["第一作者未通过"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-mouse"},on:{click:function(a){return e.getFailedReason_teacher(t.row)}}},[e._v("查看原因 ")]):e._e(),["产学研未通过","第一作者未通过","审批表已撤回"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(a){return e.deletePatent(t.row)}}},[e._v("删除 ")]):e._e()]}}])})],1),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":20,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentPage}})],1),a("el-dialog",{staticClass:"Price_Dialog",attrs:{title:"转让价格意向（单位：万元）",visible:e.TransferPriceVisible,width:"30%"},on:{"update:visible":function(t){e.TransferPriceVisible=t}}},[a("div",{staticClass:"price_expect"},[a("el-input",{attrs:{type:"number",placeholder:"转让价格意向（单位：万元）"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.TransferPriceVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.ConfirmTransferPrice()}}},[e._v("确 认")])],1)]),a("el-dialog",{staticClass:"Price_Dialog",attrs:{title:"许可价格意向（单位：万元）",visible:e.LicencePriceVisible,width:"30%"},on:{"update:visible":function(t){e.LicencePriceVisible=t}}},[a("div",{staticClass:"price_expect"},[a("el-input",{attrs:{type:"number",placeholder:"许可价格意向（单位：万元）"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.LicencePriceVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.ConfirmLicencePrice()}}},[e._v("确 认")])],1)]),a("el-dialog",{attrs:{title:"未通过原因",visible:e.dispassDialog,width:"60%"},on:{"update:visible":function(t){e.dispassDialog=t}}},[a("el-table",{attrs:{data:e.dispassData}},[a("el-table-column",{attrs:{prop:"operatorName",label:"姓名"}}),a("el-table-column",{attrs:{prop:"operatorGh",label:"工号"}}),a("el-table-column",{attrs:{prop:"operatorDepartment",label:"工作单位"}}),a("el-table-column",{attrs:{prop:"remarks",label:"未通过原因"}}),a("el-table-column",{attrs:{prop:"gmtCreate",label:"操作时间",width:"180"}})],1)],1)],1)},s=[],o=a("1da1"),n=(a("96cf"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("ac1f"),a("1276"),{data:function(){return{name:this.$store.state.signed_username,id:this.$store.state.signed_id,tableData:[],loading:!0,exam_type:"全部",total:0,currentPage:1,size:20,Page_url:"",SearchType:"查询字段",SearchText:"",TransferPriceVisible:!1,LicencePriceVisible:!1,price:"",price_wid:"",dispassDialog:!1,dispassData:[{operatorName:"",operatorGh:"",operatorDepartment:"",remarks:"",gmtCreate:""}]}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;e.tableData=[],e.currentPage=1,e.SearchType="查询字段",e.SearchText="",console.log(this.$store.state);var t="/teacher/getMyPatentPage?currPage="+e.currentPage+"&size="+e.size+"&userGh="+e.id+"&userName="+e.name;e.Page_url=t,e.getUserPatent(t)},getUserPatent:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,a.next=3,r.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),r.loading=!1,"success"==e.data.status){r.total=e.data.data.total;for(var a=0;a<e.data.data.records.length;a++){var s={};s.index=a+1,s.wid=e.data.data.records[a].wid,s.sqbh=e.data.data.records[a].sqbh,s.sqggh=e.data.data.records[a].sqggh,s.zlmc=e.data.data.records[a].zlmc,s.zlh=e.data.data.records[a].zlh,s.zlqr=e.data.data.records[a].zlqr,s.gsdw=e.data.data.records[a].gsdw,s.priceIntention=null==e.data.data.records[a].priceIntention?"暂无":e.data.data.records[a].priceIntention,s.licencePriceIntention=null==e.data.data.records[a].licencePriceIntention?"暂无":e.data.data.records[a].licencePriceIntention,s.pzrq=e.data.data.records[a].pzrq,s.zldlr=e.data.data.records[a].zldlr,s.zldyzzgh=e.data.data.records[a].zldyzzgh,s.zldyzzxm=e.data.data.records[a].zldyzzxm,s.zlh=e.data.data.records[a].zlh,s.zlmc=e.data.data.records[a].zlmc,s.cymd=e.data.data.records[a].cymd,s.cygh=e.data.data.records[a].cygh,s.transferApplicationFormId=e.data.data.records[a].transferApplicationFormId,s.gmtUpdate=e.data.data.records[a].gmtUpdate,null==e.data.data.records[a].transferProcessId?s.state="未转换":(s.transferProcessId=e.data.data.records[a].transferProcessId,e.data.data.records[a].isWithdraw?s.state="审批表已撤回":e.data.data.records[a].isZldyzzConfirm?e.data.data.records[a].isZldyzzApproval?e.data.data.records[a].isDepartmentConfirm?e.data.data.records[a].isDepartmentApproval?e.data.data.records[a].isComplete?s.state="已转换":e.data.data.records[a].isCxyConfirm?e.data.data.records[a].isCxyApproval?null==e.data.data.records[a].contractInfoId?s.state="等待产学研创建合同":e.data.data.records[a].isPublicNotice?r.TimeDiffer(e.data.data.records[a].publicNoticeTime)?null==e.data.data.records[a].voucherId?s.state="等待上传到款凭证":null==e.data.data.records[a].checklistId?s.state="等待上传认定清单（备案）":null==e.data.data.records[a].accountingInfoId?s.state="等待生成入账通知单":null==e.data.data.records[a].invoiceId?s.state="等待上传发票":e.data.data.records[a].isComplete||(s.state="等待流程结束"):s.state="正在公示中":s.state="等待公示":s.state="产学研未通过":s.state="等待产学研审批":s.state="归属单位未通过":s.state="等待归属单位审批":s.state="第一作者未通过":s.state="等待第一作者确认"),r.tableData.push(s)}t.$message({message:"数据已更新",type:"success"})}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){r.loading=!1,console.log(e),t.$message({message:"出错了！",type:"error"})}));case 3:case"end":return a.stop()}}),a)})))()},type_change:function(e){console.log(e);var t=this;t.loading=!0,t.tableData=[];var a="";switch(e){case"全部":a="/teacher/getMyPatentPage?currPage="+t.currentPage+"&size=20&userGh="+t.id+"&userName="+t.name;break;case"未通过":a="/teacher/getMyPatentPageNotApproval?currPage="+t.currentPage+"&size=20&userGh="+t.id+"&userName="+t.name;break;case"已通过":a="/teacher/getMyPatentPageApproval?currPage="+t.currentPage+"&size=20&userGh="+t.id+"&userName="+t.name;break;case"正在转换":a="/teacher/getMyPatentPageTransferring?currPage="+t.currentPage+"&size=20&userGh="+t.id+"&userName="+t.name;break;case"已转换":a="/teacher/getMyPatentPageTransferred?currPage="+t.currentPage+"&size=20&userGh="+t.id+"&userName="+t.name;break;default:break}t.Page_url=a,t.getUserPatent(a)},export_patents:function(){var e=this,t=this,a="/export/exportAllPatents?userGh="+t.id+"&userName="+t.name;t.request(a,{},"GET",{},"blob").then((function(t){console.log(t);try{console.log(t.data);var a=new Blob([t.data]),r="专利.xls",s=document.createElement("a");s.download=r,s.style.display="none",s.href=URL.createObjectURL(a),document.body.appendChild(s),s.click(),URL.revokeObjectURL(s.href),document.body.removeChild(s),e.$message({type:"success",message:"已准备开始下载！"})}catch(o){console.log(o),e.$message({type:"error",message:"数据请求失败！"})}})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}))},handleCurrentPage:function(e){var t=this;t.loading=!0;var a=t.Page_url.split("currPage")[0]+"currPage="+e+"&size"+t.Page_url.split("size")[1];console.log(a),t.tableData=[],t.currentPage=e,t.getUserPatent(a),t.size>=50&&this.$message({message:"当前页面数据较多，请稍等！",type:"success"})},handleSizeChange:function(e){var t=this;this.size=e,this.tableData=[],t.loading=!0,this.refresh()},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,s=t.getDate(),o=t.getHours(),n=t.getMinutes(),i=t.getSeconds(),c=a+"-";return r<10&&(c+="0"),c+=r+"-",s<10&&(c+="0"),c+=s+" ",o<10&&(c+="0"),c+=o+":",n<10&&(c+="0"),c+=n+":",i<10&&(c+="0"),c+=i,c},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),s=(a-r)/1e3,o=parseInt(s/86400);parseInt(s/3600),parseInt(s%3600/60),parseInt(s%60);return!0},handleDropdown:function(e){var t=this;t.SearchType=e},search:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,a.loading=!0,"查询字段"!=a.SearchType){t.next=6;break}e.$message({message:"请填写查询字段！",type:"warning"}),t.next=24;break;case 6:if(""!=a.SearchText){t.next=10;break}e.$message({message:"请填写查询内容！",type:"warning"}),t.next=24;break;case 10:r="",a.tableData=[],a.currentPage=1,t.t0=a.SearchType,t.next="专利名称"===t.t0?16:"专利号"===t.t0?19:22;break;case 16:return r="/teacher/getPatentPageByZLMC?currPage="+a.currentPage+"&size="+a.size+"&userGh="+a.id+"&userName="+a.name+"&zlmc="+a.SearchText,a.Page_url=r,t.abrupt("break",23);case 19:return r="/teacher/getPatentPageByZLH?currPage="+a.currentPage+"&size="+a.size+"&sqbh="+a.SearchText+"&userGh="+a.id+"&userName="+a.name+"&zlh="+a.SearchText,a.Page_url=r,t.abrupt("break",23);case 22:return t.abrupt("break",23);case 23:a.getUserPatent(r);case 24:case"end":return t.stop()}}),t)})))()},FillingTransferPrice:function(e){var t=this;console.log(e),t.price_wid=e.wid,this.TransferPriceVisible=!0},ConfirmTransferPrice:function(){var e=this,t=this;console.log(t.price_wid),console.log(t.price);var a={operatorDepartment:this.$store.state.signed_department,operatorGh:this.$store.state.signed_id,operatorName:this.$store.state.signed_username,priceIntention:t.price,wid:t.price_wid};t.request("/intention/updateTransferPriceIntention",a,"POST",{}).then((function(a){console.log(a),"success"==a.data.status?(e.$message({type:"success",message:"操作成功！"}),t.TransferPriceVisible=!1,t.refresh()):e.$message({type:"error",message:a.data.data.errMsg})})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})})),this.PriceVisible=!1},FillingLicencePrice:function(e){var t=this;console.log(e),t.price_wid=e.wid,this.LicencePriceVisible=!0},ConfirmLicencePrice:function(){var e=this,t=this;console.log(t.price_wid),console.log(t.price);var a={operatorDepartment:this.$store.state.signed_department,operatorGh:this.$store.state.signed_id,operatorName:this.$store.state.signed_username,licencePriceIntention:t.price,wid:t.price_wid};t.request("/intention/updateLicencePriceIntention",a,"POST",{}).then((function(a){console.log(a),"success"==a.data.status?(e.$message({type:"success",message:"操作成功！"}),t.LicencePriceVisible=!1,t.refresh()):e.$message({type:"error",message:a.data.data.errMsg})})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})})),this.PriceVisible=!1},handleExam:function(e){console.log(e),this.$router.push({path:"/filling_application",query:{wid:e.wid,type:"filling"}})},getPatent:function(e){console.log(e),this.$router.push({path:"/patent_detail_pc",query:{wid:e.wid}})},withDraw:function(e){var t=this;console.log(e);var a=this;this.$confirm("确定撤回吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){var r="/process/withdrawProcessById?transferApplicationFormId="+e.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"撤回成功！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(e){console.log(e),t.$message({type:"info",message:"取消撤回！"})}))},editPatent:function(e){console.log(e),this.$router.push({path:"/filling_application",query:{wid:e.wid,type:"fix"}})},deletePatent:function(e){var t=this,a=this;console.log(e),this.$confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e={};e.operatorName=a.$store.state.signed_username,e.operatorGh=a.$store.state.signed_id,e.operatorDepartment=a.$store.state.signed_department,e.remarks="",objId=rowId,console.log(e),a.request("/process/deleteProcessById",e,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"删除成功！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},resubmit_withdraw:function(e){var t=this;console.log(e);var a=this;this.$confirm("确定重新提交吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){var r="/process/cancelWithdrawalProcessById?transferApplicationFormId="+e.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"提交成功！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(e){console.log(e),t.$message({type:"info",message:"取消撤回！"})}))},getFailedReason_cxy:function(e){var t=this,a=this;console.log(e);var r="/process/getCXYNotApprovalReason?transferApplicationFormId="+e.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"获取成功！"}),a.dispassData[0].operatorName=e.data.data.operatorName,a.dispassData[0].operatorGh=e.data.data.operatorGh,a.dispassData[0].operatorDepartment=e.data.data.operatorDepartment,a.dispassData[0].remarks=e.data.data.remarks,a.dispassData[0].gmtCreate=e.data.data.gmtCreate,a.dispassDialog=!0):t.$message({type:"error",message:e.data.data.errMsg})})).catch((function(e){t.$message({type:"error",message:"出错了！"})}))},getFailedReason_teacher:function(e){var t=this,a=this;console.log(e);var r="/process/getZLDYZZNotApprovalReason?transferApplicationFormId="+e.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"获取成功！"}),a.dispassData[0].operatorName=e.data.data.operatorName,a.dispassData[0].operatorGh=e.data.data.operatorGh,a.dispassData[0].operatorDepartment=e.data.data.operatorDepartment,a.dispassData[0].remarks=e.data.data.remarks,a.dispassData[0].gmtCreate=e.data.data.gmtCreate,a.dispassDialog=!0):t.$message({type:"error",message:e.data.data.errMsg})})).catch((function(e){t.$message({type:"error",message:"出错了！"})}))}}}),i=n,c=(a("63b3"),a("2877")),l=Object(c["a"])(i,r,s,!1,null,null,null);t["default"]=l.exports}}]);