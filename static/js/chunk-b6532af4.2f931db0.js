(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6532af4"],{"0473":function(e,t,a){"use strict";a("1d6e")},"1d6e":function(e,t,a){},"79ce":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.fullScreenloading,expression:"fullScreenloading"}],staticClass:"contract_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Type"},[a("el-radio-group",{model:{value:e.contract_type,callback:function(t){e.contract_type=t},expression:"contract_type"}},[a("el-radio-button",{attrs:{label:"进行中"}})],1)],1),a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},[a("el-button",{attrs:{icon:"el-icon-document"},on:{click:e.savedContracts}},[e._v(" 草稿箱 ")]),a("el-button",{attrs:{icon:"el-icon-delete"},on:{click:e.deletedContracts}},[e._v(" 垃圾箱 ")])],1)])]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{type:"expand",label:"详情",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"合同名称"}},[a("span",[e._v(e._s(t.row.projectName))])]),a("el-form-item",{attrs:{label:"合同编号"}},[a("span",[e._v(e._s(t.row.projectCode))])]),a("el-form-item",{attrs:{label:"合同类别"}},[a("span",[e._v(e._s(t.row.contractType))])]),a("el-form-item",{attrs:{label:"受让方"}},[a("span",[e._v(e._s(t.row.paName))])]),a("el-form-item",{attrs:{label:"转让总金额"}},[a("span",[e._v(e._s(t.row.totalTransferAmount)+" 万元")])]),a("el-form-item",{attrs:{label:"转化状态"}},[a("span",[e._v(e._s(t.row.state))])]),null!=t.row.publicNoticeTime?a("el-form-item",{attrs:{label:"公示信息"}},[a("span",[e._v("已经公示 "+e._s(t.row.publicNoticeTime)+" 天")])]):e._e(),a("el-form-item",{attrs:{label:"更新时间"}},[a("span",[e._v(e._s(t.row.gmtUpdate))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"projectName",label:"合同名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{on:{click:function(a){return e.seeContract(t.row)}}},[e._v(e._s(t.row.projectName))])]}}])}),a("el-table-column",{attrs:{prop:"projectCode",label:"合同编号",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{on:{click:function(a){return e.seeContract(t.row)}}},[e._v(e._s(t.row.projectCode))])]}}])}),a("el-table-column",{attrs:{prop:"paName",label:"受让方单位"}}),a("el-table-column",{attrs:{prop:"state",label:"转化状态",width:"160"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"settings"},[["等待上传合同"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-reading"},on:{click:e.getPublicNotice_detail}},[e._v(" 公示页 ")]):e._e(),["等待上传合同","等待公示"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-edit-outline"},on:{click:function(a){return e.editContract(t.row)}}},[e._v(" 修改 ")]):e._e(),"等待上传合同"==t.row.state?a("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(a){return e.deleteContract(t.row)}}},[e._v(" 删除 ")]):e._e(),"等待公示"==t.row.state?a("el-button",{attrs:{icon:"el-icon-reading"},on:{click:function(a){return e.BeginPublic(t.row)}}},[e._v("开始公示 ")]):e._e(),null!=t.row.contractFilingNo&&t.row.hasCashReward&&0==t.row.isCashRewardPublicNotice?a("el-button",{attrs:{icon:"el-icon-reading"},on:{click:function(a){return e.rewordPublic(t.row)}}},[e._v("现金奖励公示 ")]):e._e(),"等待流程结束"==t.row.state?a("el-button",{attrs:{icon:"el-icon-circle-check"},on:{click:function(a){return e.ConfirmEnd(t.row)}}},[e._v("确认流程结束 ")]):e._e(),["等待上传合同","等待上传到款凭证","等待上传认定清单（备案）","等待生成入账通知单","等待财务处上传发票","等待流程结束"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-folder-opened"},on:{click:function(a){return e.file_manage(t.row)}}},[e._v("文件管理 ")]):e._e(),a("el-button",{attrs:{slot:"reference",icon:"el-icon-edit-outline"},on:{click:function(a){return e.edit_contractCode(t.row)}},slot:"reference"},[e._v("修改合同编号 ")])],1)]}}])})],1),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":20,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1),a("el-dialog",{attrs:{title:"修改合同编号",visible:e.edit_contractCode_dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.edit_contractCode_dialogFormVisible=t}}},[a("el-form",{ref:"edit_contractCodeForm",attrs:{model:e.edit_contractCode_form,rules:e.edit_contractCode_rules}},[a("el-form-item",{attrs:{label:"合同编号",prop:"projectCode"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.edit_contractCode_form.projectCode,callback:function(t){e.$set(e.edit_contractCode_form,"projectCode",t)},expression:"edit_contractCode_form.projectCode"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.edit_contractCode_dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm_projectCode}},[e._v("确 定")])],1)],1)],1)},n=[],r=a("1da1"),c=a("5530"),s=(a("ac1f"),a("1276"),a("caad"),a("96cf"),a("2f62")),i=(a("af2c"),{data:function(){return{fullScreenloading:!0,tableData:[],loading:!0,contract_type:"进行中",edit_contractCode_dialogFormVisible:!1,edit_contractCode_form:{contractInfoId:"",projectCode:""},edit_contractCode_rules:{projectCode:[{required:!0,message:"请填写合同编号",trigger:"blur"}]},total:0,currentPage:1,Page_url:"",file_list:{accounting:{fileDisplayName:"",fileId:"",fileName:"",fileType:"",gmtCreate:""},checklist:{fileDisplayName:"",fileId:"",fileName:"",fileType:"",gmtCreate:""},contract:{fileDisplayName:"",fileId:"",fileName:"",fileType:"",gmtCreate:""},invoice:{fileDisplayName:"",fileId:"",fileName:"",fileType:"",gmtCreate:""},patentList:[],voucherList:[]}}},created:function(){this.refresh()},methods:Object(c["a"])(Object(c["a"])({},Object(s["c"])(["get_files"])),{},{refresh:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.tableData=[],a.currentPage=1,a.SearchType="",a.SearchType_prepend="查询字段",a.SearchText="",a.contract_type="进行中",console.log(e.$store.state),o="/contract/getTransferringContractPage?currPage="+a.currentPage+"&size=20",a.Page_url=o,t.next=12,a.getContract(o);case 12:case"end":return t.stop()}}),t)})))()},getContract:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=t,o.tableData=[],a.next=4,o.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),o.loading=!1,"success"==e.data.status){o.total=e.data.data.total;for(var a=0;a<e.data.data.records.length;a++){var n={};n.index=a+1,n.arbitrationCommission=e.data.data.records[a].arbitrationCommission,n.contractInfoId=e.data.data.records[a].contractInfoId,n.contractSigningDate=e.data.data.records[a].contractSigningDate,n.contractType=e.data.data.records[a].contractType,n.contractFilingNo=e.data.data.records[a].contractFilingNo,n.disputeSettlementMethod=e.data.data.records[a].disputeSettlementMethod,n.gmtUpdate=e.data.data.records[a].gmtUpdate,n.hasCashReward=e.data.data.records[a].hasCashReward,n.invoicingEnterprise=e.data.data.records[a].invoicingEnterprise,n.isCashRewardPublicNotice=e.data.data.records[a].isCashRewardPublicNotice,n.paAddress=e.data.data.records[a].paAddress,n.paContactEmail=e.data.data.records[a].paContactEmail,n.paContactPerson=e.data.data.records[a].paContactPerson,n.paContactPhone=e.data.data.records[a].paContactPhone,n.paMailingAddress=e.data.data.records[a].paMailingAddress,n.paName=e.data.data.records[a].paName,n.paRepresentative=e.data.data.records[a].paRepresentative,n.patentNum=e.data.data.records[a].patentNum,n.paymentMethod=e.data.data.records[a].paymentMethod,n.pbContactPerson=e.data.data.records[a].pbContactPerson,n.pbImplPatentRight=e.data.data.records[a].pbImplPatentRight,n.pbLicensedPatentRight=e.data.data.records[a].pbLicensedPatentRight,n.projectCode=e.data.data.records[a].projectCode,n.projectName=e.data.data.records[a].projectName,n.publicNoticeTime=e.data.data.records[a].isPublicNotice?n.publicNoticeTime=o.TimeDiffer(e.data.data.records[a].publicNoticeTime):null,n.taxpayerCode=e.data.data.records[a].taxpayerCode,n.totalTransferAmount=e.data.data.records[a].totalTransferAmount,e.data.data.records[a].isPublicNotice?null==e.data.data.records[a].contractFileId?n.state="等待上传合同":0==e.data.data.records[a].voucherNum?n.state="等待上传到款凭证":null==e.data.data.records[a].checklistId?n.state="等待上传认定清单（备案）":null==e.data.data.records[a].accountingInfoId?n.state="等待生成入账通知单":null==e.data.data.records[a].invoiceId?n.state="等待财务处上传发票":e.data.data.records[a].hasCashReward&&!e.data.data.records[a].isCashRewardPublicNotice?n.state="等待现金奖励公示":e.data.data.records[a].isComplete?n.state="流程已结束":n.state="等待流程结束":n.state="等待公示",o.tableData.push(n)}t.$message({message:"数据已更新！",type:"success"}),t.fullScreenloading=!1}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),o.loading=!1,t.$message({message:"出错了！",type:"error"})}));case 4:case"end":return a.stop()}}),a)})))()},handleCurrentPage:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var o,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=t,o.loading=!0,console.log(o.Page_url),n=o.Page_url.split("currPage")[0]+"currPage="+e+"&size"+o.Page_url.split("size")[1],console.log(n),o.tableData=[],o.currentPage=e,a.next=9,o.getContract(n);case 9:case"end":return a.stop()}}),a)})))()},savedContracts:function(){this.$router.push("/save_contract")},deletedContracts:function(){this.$router.push("/delete_contract")},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),o=t.getMonth()+1,n=t.getDate(),r=t.getHours(),c=t.getMinutes(),s=t.getSeconds(),i=a+"-";return o<10&&(i+="0"),i+=o+"-",n<10&&(i+="0"),i+=n+" ",r<10&&(i+="0"),i+=r+":",c<10&&(i+="0"),i+=c+":",s<10&&(i+="0"),i+=s,i},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,o=new Date(t),n=(a-o)/1e3,r=parseInt(n/86400);parseInt(n/3600),parseInt(n%3600/60),parseInt(n%60);return r},seeContract:function(e){console.log(e),"专利权转让"==e.contractType?this.$router.push({path:"/transfer_contract_detail",query:{contractInfoId:e.contractInfoId}}):this.$router.push({path:"/licence_contract_detail",query:{contractInfoId:e.contractInfoId}})},getPublicNotice_detail:function(){window.open("http://cxy.njupt.edu.cn/_s366/gs/list.psp")},editContract:function(e){console.log(e),["专利权转让"].includes(e.contractType)?this.$router.push({path:"/filling_contract_transfer",query:{contractInfoId:e.contractInfoId,type:"edit"}}):this.$router.push({path:"/filling_contract_license",query:{contractInfoId:e.contractInfoId,type:"edit"}})},deleteContract:function(e){var t=this,a=this;console.log(e),this.$confirm("确认要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o="/contract/logicDeleteContract?contractInfoId="+e.contractInfoId;a.request(o,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$notify.success({title:"成功",message:"已移至垃圾箱！"}),window.location.reload()):t.$notify.error({title:"错误",message:e.data.data.errMsg})})).catch((function(e){console.log(e),t.$notify.error({title:"错误",message:"出错了！"})}))})).catch((function(){t.$message({type:"info",message:"已取消操作！"})}))},BeginPublic:function(e){var t=this,a=this;console.log(e),a.loading=!0,this.$confirm("确认要开始公示了吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o="/transferring/makePublicNotice?contractInfoId="+e.contractInfoId;a.request(o,{},"GET",{}).then((function(e){console.log(e.data),a.loading=!1,"success"==e.data.status?(t.$message({type:"success",message:"开始公示！"}),window.location.reload()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"已取消操作！"})}))},rewordPublic:function(e){var t=this,a="/transferring/makeCashRewardPublicNotice?contractInfoId="+e.contractInfoId;this.fullScreenloading=!0,this.request(a,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$notify.success({title:"成功",message:"现金奖励公示成功"}),t.fullScreenloading=!1,t.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))},file_manage:function(e){var t=this,a=this;console.log(e);var o="/file/getFileListByContractInfoId?contractInfoId="+e.contractInfoId;a.request(o,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.get_files(e.data.data),sessionStorage.setItem("state",JSON.stringify(t.$store.state)),t.$router.push({path:"./files_controller"})):a.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),a.$message.error("出错了！")}))},edit_contractCode:function(e){console.log(e),this.edit_contractCode_form.contractInfoId=e.contractInfoId,this.edit_contractCode_form.projectCode=e.projectCode,this.edit_contractCode_dialogFormVisible=!0},confirm_projectCode:function(){var e=this,t=this;this.$confirm("确认要修改吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a="/contract/updateProjectCode?contractInfoId="+e.edit_contractCode_form.contractInfoId+"&projectCode="+e.edit_contractCode_form.projectCode;t.request(a,{},"GET",{}).then((function(a){console.log(a.data),"success"==a.data.status?(e.$notify.success({title:"成功",message:"修改成功！"}),t.edit_contractCode_dialogFormVisible=!1,t.edit_contractCode_form.contractInfoId="",t.edit_contractCode_form.projectCode="",window.location.reload()):e.$notify.error({title:"错误",message:a.data.data.errMsg})})).catch((function(t){console.log(t),e.$notify.error({title:"错误",message:"出错了！"})}))})).catch((function(){e.$message({type:"info",message:"已取消操作！"})}))},ConfirmEnd:function(e){var t=this,a=this;this.$confirm("确认要结束流程吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o="/transferring/processComplete?contractInfoId="+e.contractInfoId;a.request(o,{},"GET",{}).then((function(e){"success"==e.data.status?(t.$message({message:"流程已结束！",type:"success"}),window.location.reload()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}})}),l=i,d=(a("0473"),a("2877")),u=Object(d["a"])(l,o,n,!1,null,null,null);t["default"]=u.exports},af2c:function(e,t,a){"use strict";a("ac1f"),a("1276"),a("caad"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d");var o=a("4ec3"),n=a("5c96"),r=a.n(n),c=function(e){var t="/file/downloadFileById?fileId="+e;Object(o["a"])(t,{},"GET",{},"arraybuffer").then((function(e){if(console.log(e),void 0==e.headers["content-disposition"])r.a.Notification({title:"错误",message:"文件可能丢失了！",type:"error"});else{var t="",a=e.headers["content-disposition"].split("fileName=")[1].split(".").length,o=e.headers["content-disposition"].split("fileName=")[1].split(".")[a-1];if(["pdf","png","jpg","jpeg"].includes(o)){switch(o){case"pdf":t="application/pdf";break;case"png":t="image/png";break;case"jpg":t="image/jpeg";break;case"jpeg":t="image/jpeg";break}var n=e.data,c=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);if(window.navigator&&window.navigator.msSaveOrOpenBlob){var s=new Blob([n],{type:t});console.log(c),window.navigator.msSaveOrOpenBlob(s,c)}else{var i=new Blob([n],{type:t}),l=window.URL.createObjectURL(i);console.log(l),window.open(l)}}else r.a.Notification({title:"提示",message:"该文件类型暂不支持在线预览，请下载后查看！",type:"warning"})}})).catch((function(e){console.log(e),r.a.Message({message:"出错了！",type:"error"})}))},s=function(e){Object(o["a"])(e,{},"GET",{},"blob").then((function(t){if(console.log(t),void 0!=t.headers["content-disposition"]){r.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var a=decodeURI(t.headers["content-disposition"].split("fileName=")[1]);try{var n=new Blob([t.data],{type:"application/force-download"}),c=URL.createObjectURL(n),s=document.createElement("a");s.href=c,s.setAttribute("download",a),document.body.appendChild(s),s.click(),document.body.removeChild(s)}catch(i){console.log(i),r.a.Message({message:"数据请求失败！",type:"error"})}}else Object(o["a"])(e,{},"GET",{}).then((function(e){r.a.Message({message:e.data.data.errMsg,type:"error"})}))})).catch((function(e){console.log(e),r.a.Message({message:"出错了！",type:"error"})}))},i=function(e,t){var a="";if(0==t.length)r.a.Notification.warning({title:"提示",message:"文件为空！"});else{if(1==t.length)a="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];else if(t.length>1){a="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];for(var n=1;n<t.length;n++)a=a+"&fileIdList="+t[n]}Object(o["a"])(a,{},"GET",{},"blob").then((function(e){if(void 0!=e.headers["content-disposition"]){r.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var t=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);try{var a=new Blob([e.data],{type:"application/force-download"}),o=URL.createObjectURL(a),n=document.createElement("a");n.href=o,n.setAttribute("download",t),document.body.appendChild(n),n.click(),document.body.removeChild(n)}catch(c){console.log(c),r.a.Message({message:"数据请求失败！",type:"error"})}}else r.a.Message({message:"文件可能丢失了！",type:"error"})})).catch((function(e){console.log(e),r.a.Message({message:"出错了！",type:"error"})}))}};t["a"]={previewFile:c,downloadFiles:s,downloadFilePackage:i}}}]);