(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-374abea0"],{"2ab0":function(t,e,a){"use strict";a("5e67")},"5e67":function(t,e,a){},9633:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"load",rawName:"v-load",value:t.loading,expression:"loading"}],staticClass:"contract_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Type"},[a("el-radio-group",{on:{change:t.type_change},model:{value:t.contract_type,callback:function(e){t.contract_type=e},expression:"contract_type"}},[a("el-radio-button",{attrs:{label:"进行中"}}),a("el-radio-button",{attrs:{label:"已完成"}})],1)],1),["已完成"].includes(t.contract_type)?a("div",{staticClass:"Search"},[a("el-dropdown",{staticClass:"Dropdown",on:{command:t.handleDropdown}},[a("el-button",{attrs:{type:"primary"}},[t._v(" 查询字段"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"项目编号"}},[t._v("项目编号")]),a("el-dropdown-item",{attrs:{command:"项目名称"}},[t._v("项目名称")])],1)],1),a("el-input",{attrs:{placeholder:"请输入需要查询的内容"},model:{value:t.SearchText,callback:function(e){t.SearchText=e},expression:"SearchText"}},[a("template",{slot:"prepend"},[t._v(t._s(t.SearchType))])],2),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")])],1):t._e(),a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},[a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:t.refresh}},[t._v("刷新列表 ")])],1)])]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:t.tableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"项目名称"}},[a("span",[t._v(t._s(e.row.projectName))])]),a("el-form-item",{attrs:{label:"合同编号"}},[a("span",[t._v(t._s(e.row.projectCode))])]),a("el-form-item",{attrs:{label:"受让方"}},[a("span",[t._v(t._s(e.row.paName))])]),a("el-form-item",{attrs:{label:"转让总金额"}},[a("span",[t._v(t._s(e.row.totalTransferAmount)+" 万元")])]),a("el-form-item",{attrs:{label:"转化状态"}},[a("span",[t._v(t._s(e.row.state))])]),null!=e.row.publicNoticeTime?a("el-form-item",{attrs:{label:"公示信息"}},[a("span",[t._v("已经公示 "+t._s(e.row.publicNoticeTime)+" 天")])]):t._e(),a("el-form-item",{attrs:{label:"更新时间"}},[a("span",[t._v(t._s(e.row.gmtUpdate))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"projectName",label:"项目名称"}}),a("el-table-column",{attrs:{prop:"projectCode",label:"合同编号"}}),a("el-table-column",{attrs:{prop:"paName",label:"受让方"}}),a("el-table-column",{attrs:{prop:"state",label:"转化状态"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"settings"},["等待上传合同"==e.row.state?a("el-button",{attrs:{icon:"el-icon-document"},on:{click:function(a){return t.seeContract(e.row)}}},[t._v(" 查看 ")]):t._e(),"等待上传合同"==e.row.state?a("el-button",{attrs:{icon:"el-icon-printer"},on:{click:function(a){return t.generateContract(e.row)}}},[t._v(" 生成 ")]):t._e(),"等待上传合同"==e.row.state?a("el-button",{attrs:{icon:"el-icon-edit-outline"},on:{click:function(a){return t.editContract(e.row)}}},[t._v(" 修改 ")]):t._e(),"等待上传合同"==e.row.state?a("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(a){return t.deleteContract(e.row)}}},[t._v(" 删除 ")]):t._e(),"等待公"==e.row.state?a("el-button",{attrs:{icon:"el-icon-link"},on:{click:function(a){return t.GetPublic(e.row)}}},[t._v("生成公示页面 ")]):t._e(),"等待公示"==e.row.state?a("el-button",{attrs:{icon:"el-icon-reading"},on:{click:function(a){return t.BeginPublic(e.row)}}},[t._v("开始公示 ")]):t._e(),["等待生成入账通知单"].includes(e.row.state)?a("el-button",{attrs:{icon:"el-icon-receiving"},on:{click:function(a){return t.getAccountingInfo(e.row)}}},[t._v("生成入账通知单")]):t._e(),"等待流程结束"==e.row.state?a("el-button",{attrs:{icon:"el-icon-circle-check"},on:{click:function(a){return t.ConfirmEnd(e.row)}}},[t._v("确认流程结束 ")]):t._e(),["等待上传到款凭证","等待上传认定清单（备案）","等待生成入账通知单","等待上传发票","等待流程结束","流程已结束"].includes(e.row.state)?a("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleCommand_download}},[a("el-button",{staticClass:"dropdown_button",attrs:{icon:"el-icon-download"},on:{click:function(a){return t.download_button(e.row)}}},[t._v(" 下载文件 ")]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[["等待上传到款凭证","等待上传认定清单（备案）","等待生成入账通知单","等待上传发票","等待流程结束","流程已结束"].includes(e.row.state)?a("el-dropdown-item",{attrs:{command:"Contract"}},[t._v("合同 ")]):t._e(),["等待上传认定清单（备案）","等待生成入账通知单","等待上传发票","等待流程结束","流程已结束"].includes(e.row.state)?a("el-dropdown-item",{attrs:{command:"Voucher"}},[t._v("到款凭证 ")]):t._e(),["等待生成入账通知单","等待上传发票","等待流程结束","流程已结束"].includes(e.row.state)?a("el-dropdown-item",{attrs:{command:"Checklist"}},[t._v("认定清单 ")]):t._e(),["等待上传发票","等待流程结束","流程已结束"].includes(e.row.state)?a("el-dropdown-item",{attrs:{command:"AccountingInfo"}},[t._v("入账通知单 ")]):t._e(),["等待流程结束","流程已结束"].includes(e.row.state)?a("el-dropdown-item",{attrs:{command:"Invoice"}},[t._v("发票 ")]):t._e()],1)],1):t._e(),["等待上传合同","等待上传到款凭证","等待上传认定清单（备案）","等待生成入账通知单","等待上传发票","等待流程结束"].includes(e.row.state)?a("el-button",{staticClass:"dropdown_button",attrs:{slot:"reference",icon:"el-icon-upload2"},on:{click:function(a){return t.upload_file(e.row)}},slot:"reference"},[t._v("上传文件 ")]):t._e()],1)]}}])})],1),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:t.currentPage,"page-size":10,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentPage}})],1),a("el-dialog",{staticClass:"Public_Dialog",attrs:{visible:t.PublicDialog,width:"50%"},on:{"update:visible":function(e){t.PublicDialog=e}}},[a("el-card",{staticClass:"card",attrs:{shadow:"hover"}},[a("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("公示内容")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:t.Copy}},[t._v(" 复 制 ")])],1),a("div",{staticClass:"below",attrs:{id:"CopyContent"}},[a("div",[t._v(" 知识产权转让公示（"),a("span",[t._v(t._s(t.public_content.projectCode)+" ")]),t._v("） ")]),a("br"),a("div",[t._v(" 根据《中华人民共和国促进科技成果转化法》相关规定，现对学校拟向外转让的知识产权进行公示。 ")]),a("br"),a("div",[a("table",{attrs:{border:"1",cellspacing:"0",id:"patent_table"}},[a("tr",[a("th",[t._v("专利名称")]),a("th",[t._v("发明人")]),a("th",[t._v("专利号")])])])]),a("br"),a("div",[t._v(" 经双方协商，以上1件专利转让给 "),a("span",[t._v(t._s(t.public_content.paName))]),t._v(" ，转让金额共计人民币 "),a("span",[t._v(t._s(t.public_content.totalTransferAmount))]),t._v(" 万元整。该交易不是关联交易。若有异议，请于公告之日起 "),a("span",[t._v("15")]),t._v(" 日内向产学研合作处（技术转移中心）书面实名提出并提供相应的证明材料。 ")]),a("br"),a("div",[t._v("咨询电话：85866885，E-mail：jszy@njupt.edu.cn")]),a("br"),a("div",{staticClass:"bottom"},[a("div",[t._v("产学研合作处（技术转移中心）")]),a("div",{staticStyle:{"margin-top":"10px"}},[t._v("公告日：2022年1月13日")])])])])],1),a("el-dialog",{attrs:{title:"选择上传文件类型",visible:t.file_type_Dialog,width:"40%"},on:{"update:visible":function(e){t.file_type_Dialog=e}}},[a("div",{staticClass:"uploads"},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":t.Upload}},[a("el-button",{attrs:{icon:"el-icon-tickets"},on:{click:function(e){return t.upload(t.upload_row,"Contract")}}},[t._v("合同 ")])],1),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":t.Upload}},[a("el-button",{attrs:{icon:"el-icon-tickets"},on:{click:function(e){return t.upload(t.upload_row,"Voucher")}}},[t._v("到款凭证 ")])],1),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":t.Upload}},[a("el-button",{attrs:{icon:"el-icon-tickets"},on:{click:function(e){return t.upload(t.upload_row,"Checklist")}}},[t._v("认定清单 ")])],1),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":t.Upload}},[a("el-button",{attrs:{icon:"el-icon-tickets"},on:{click:function(e){return t.upload(t.upload_row,"Invoice")}}},[t._v("发票 ")])],1)],1)])],1)},n=[],r=a("1da1"),c=(a("ac1f"),a("1276"),a("fb6a"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),{data:function(){return{tableData:[],loading:!0,contract_type:"进行中",total:0,currentPage:1,Page_url:"",SearchType:"查询字段",SearchText:"",choose_Dialog:!1,choose_Data:[],choose_loading:!0,choosed_patents:[],download_row:{},file_type_Dialog:!1,upload_row:{},upload_content:{type:"",contractInfoId:""},PublicDialog:!1,public_content:{projectCode:"",paName:"",totalTransferAmount:0}}},created:function(){this.refresh()},methods:{refresh:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,a.tableData=[],a.currentPage=1,a.SearchType="查询字段",a.SearchText="",console.log(t.$store.state),o="/contract/getContractPage?currPage="+a.currentPage+"&size=20",a.Page_url=o,e.next=10,a.getContract(o);case 10:case"end":return e.stop()}}),e)})))()},getContract:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=e,o.tableData=[],a.next=4,o.request(t,{},"GET",{}).then((function(t){if(console.log(t.data),o.loading=!1,"success"==t.data.status){o.total=t.data.data.total;for(var a=0;a<t.data.data.records.length;a++){var n={};n.index=a+1,n.arbitrationCommission=t.data.data.records[a].arbitrationCommission,n.contractInfoId=t.data.data.records[a].contractInfoId,n.contractSigningDate=t.data.data.records[a].contractSigningDate,n.disputeSettlementMethod=t.data.data.records[a].disputeSettlementMethod,n.gmtUpdate=t.data.data.records[a].gmtUpdate,n.invoicingEnterprise=t.data.data.records[a].invoicingEnterprise,n.paAddress=t.data.data.records[a].paAddress,n.paContactEmail=t.data.data.records[a].paContactEmail,n.paContactPerson=t.data.data.records[a].paContactPerson,n.paContactPhone=t.data.data.records[a].paContactPhone,n.paMailingAddress=t.data.data.records[a].paMailingAddress,n.paName=t.data.data.records[a].paName,n.paRepresentative=t.data.data.records[a].paRepresentative,n.patentNum=t.data.data.records[a].patentNum,n.paymentMethod=t.data.data.records[a].paymentMethod,n.pbContactPerson=t.data.data.records[a].pbContactPerson,n.pbImplPatentRight=t.data.data.records[a].pbImplPatentRight,n.pbLicensedPatentRight=t.data.data.records[a].pbLicensedPatentRight,n.projectCode=t.data.data.records[a].projectCode,n.projectName=t.data.data.records[a].projectName,n.publicNoticeTime=t.data.data.records[a].isPublicNotice?n.publicNoticeTime=o.TimeDiffer(t.data.data.records[a].publicNoticeTime):null,n.taxpayerCode=t.data.data.records[a].taxpayerCode,n.totalTransferAmount=t.data.data.records[a].totalTransferAmount,t.data.data.records[a].isPublicNotice?null==t.data.data.records[a].contractFileId?n.state="等待上传合同":null==t.data.data.records[a].voucherId?n.state="等待上传到款凭证":null==t.data.data.records[a].checklistId?n.state="等待上传认定清单（备案）":null==t.data.data.records[a].accountingInfoId?n.state="等待生成入账通知单":null==t.data.data.records[a].invoiceId?n.state="等待上传发票":t.data.data.records[a].isComplete?n.state="流程已结束":n.state="等待流程结束":n.state="等待公示",o.tableData.push(n)}e.$message({message:"数据已更新！",type:"success"})}else e.$message({message:t.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),o.loading=!1,e.$message({message:"出错了！",type:"error"})}));case 4:case"end":return a.stop()}}),a)})))()},handleCurrentPage:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var o,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=e,o.loading=!0,console.log(o.Page_url),n=o.Page_url.split("currPage")[0]+"currPage="+t+"&size"+o.Page_url.split("size")[1],console.log(n),o.tableData=[],o.currentPage=t,a.next=9,o.getContract(n);case 9:case"end":return a.stop()}}),a)})))()},type_change:function(t){console.log(t);var e=this;e.loading=!0,e.tableData=[];var a="";switch(t){case"进行中":a="/contract/getTransferringContractPage?currPage="+e.currentPage+"&size=20";break;case"已完成":a="/contract/getTransferredContractPage?currPage="+e.currentPage+"&size=20";break;default:break}e.Page_url=a,e.getContract(a)},TimeTransfer:function(t){var e=new Date(t),a=e.getFullYear(),o=e.getMonth()+1,n=e.getDate(),r=e.getHours(),c=e.getMinutes(),s=e.getSeconds(),l=a+"-";return o<10&&(l+="0"),l+=o+"-",n<10&&(l+="0"),l+=n+" ",r<10&&(l+="0"),l+=r+":",c<10&&(l+="0"),l+=c+":",s<10&&(l+="0"),l+=s,l},TimeDiffer:function(t){var e=this.TimeTransfer(t),a=new Date,o=new Date(e),n=(a-o)/1e3,r=parseInt(n/86400);parseInt(n/3600),parseInt(n%3600/60),parseInt(n%60);return r},handleDropdown:function(t){var e=this;e.SearchType=t},search:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t,a.loading=!0,"查询字段"!=a.SearchType){e.next=6;break}t.$message({message:"请填写查询字段！",type:"warning"}),e.next=24;break;case 6:if(""!=a.SearchText){e.next=10;break}t.$message({message:"请填写查询内容！",type:"warning"}),e.next=24;break;case 10:o="",a.tableData=[],a.currentPage=1,e.t0=a.SearchType,e.next="项目编号"===e.t0?16:"项目名称"===e.t0?19:22;break;case 16:return o="/contract/getTransferredContractPageByProjectCode?currPage="+a.currentPage+"&size=20&projectCode="+a.SearchText,a.Page_url=o,e.abrupt("break",23);case 19:return o="/contract/getTransferredContractPageByProjectName?currPage="+a.currentPage+"&size=20&projectName="+a.SearchText,a.Page_url=o,e.abrupt("break",23);case 22:return e.abrupt("break",23);case 23:a.getContract(o);case 24:case"end":return e.stop()}}),e)})))()},seeContract:function(t){console.log(t),this.$router.push({path:"/contract_detail",query:{contractInfoId:t.contractInfoId}})},upload:function(t,e){this.upload_content.type=e,this.upload_content.contractInfoId=t.contractInfoId,console.log(this.upload_content)},Upload:function(t){var e=this,a=this;console.log(t);var o="";switch(a.upload_content.type){case"Contract":o="/transferring/uploadContract";break;case"Voucher":o="/transferring/uploadVoucher";break;case"Checklist":o="/transferring/uploadChecklist";break;case"Invoice":o="/transferring/uploadInvoice";break;default:break}if("pdf"!=t.file.name.split(".").slice(-1))this.$message.warning("上传文件只能是pdf格式!");else{var n=new FormData;n.append("file",t.file),n.append("contractInfoId",a.upload_content.contractInfoId),console.log(n),a.request(o,n,"POST",{}).then((function(t){console.log(t),"success"==t.data.status?(e.$message({type:"success",message:"上传成功！"}),a.file_type_Dialog=!1,a.refresh()):e.$message({message:t.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))}},generateContract:function(t){var e=this,a=this;console.log(t);var o="/contract/generateContract?contractInfoId="+t.contractInfoId;a.request(o,{},"GET",{},"blob").then((function(t){console.log(t);try{console.log(t.data);var a=new Blob([t.data]),o="合同.doc",n=document.createElement("a");n.download=o,n.style.display="none",n.href=URL.createObjectURL(a),document.body.appendChild(n),n.click(),URL.revokeObjectURL(n.href),document.body.removeChild(n)}catch(r){console.log(r),e.$message({message:"数据请求失败！",type:"error"})}})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))},editContract:function(t){console.log(t),this.$router.push({path:"/filling_contract",query:{contractInfoId:t.contractInfoId,type:"edit"}})},deleteContract:function(t){var e=this;console.log(t),this.$confirm("确认要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a="/contract/deleteContract?contractInfoId="+t.contractInfoId;that.request(a,{},"GET",{}).then((function(t){console.log(t.data),"success"==t.data.status?(e.$message({type:"success",message:"删除成功！"}),that.refresh()):e.$message({message:t.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))})).catch((function(){e.$message({type:"info",message:"已取消操作！"})}))},GetPublic:function(t){var e=this,a=this;console.log(t);var o="/contract/getContractById?contractInfoId="+t.contractInfoId;a.request(o,{},"GET",{}).then((function(t){if(console.log(t.data),"success"==t.data.status){e.public_content.paName=t.data.data.paName,e.public_content.totalTransferAmount=t.data.data.totalTransferAmount;var a=document.getElementById("patent_table");console.log(a.rows.length);for(var o=a.rows.length-1;o>0;o--)a.deleteRow(o);for(var n=0;n<t.data.data.patentInfo.length;n++){var r=a.insertRow(n+1);r.insertCell(0).innerHTML=t.data.data.patentInfo[n].zlmc,r.insertCell(1).innerHTML=t.data.data.patentInfo[n].zldyzzxm,r.insertCell(2).innerHTML=t.data.data.patentInfo[n].sqggh}}else e.$message({message:t.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t)})),this.public_content.projectCode=t.projectCode,this.PublicDialog=!0},Copy:function(){this.selectElementContents(document.getElementById("CopyContent"))},selectElementContents:function(t){var e,a;document.body;if(document.createRange&&window.getSelection){e=document.createRange(),a=window.getSelection(),a.removeAllRanges();try{e.selectNodeContents(t),a.addRange(e)}catch(o){e.selectNode(t),a.addRange(e)}document.execCommand("copy"),window.getSelection().empty(),this.$message({message:"已复制",type:"success"})}},BeginPublic:function(t){var e=this,a=this;console.log(t),a.loading=!0,this.$confirm("确认已经开始公示了吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o="/transferring/makePublicNotice?contractInfoId="+t.contractInfoId;a.request(o,{},"GET",{}).then((function(t){console.log(t.data),a.loading=!1,"success"==t.data.status?(e.$message({type:"success",message:"开始公示！"}),a.refresh()):e.$message({message:t.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))})).catch((function(){e.$message({type:"info",message:"已取消操作！"})}))},download:function(t,e){var a=this,o=this,n="",r="",c="";switch(e){case"Contract":n="/transferring/downloadContract?contractInfoId="+t.contractInfoId,r="合同.pdf",c="pdf";break;case"Voucher":n="/transferring/downloadVoucher?contractInfoId="+t.contractInfoId,r="到款凭证.pdf",c="pdf";break;case"Checklist":n="/transferring/downloadChecklist?contractInfoId="+t.contractInfoId,r="备案清单.pdf",c="pdf";break;case"AccountingInfo":n="/transferring/downloadAccounting?contractInfoId="+t.contractInfoId,r="入账通知单.doc",c="doc";break;case"Invoice":n="/transferring/downloadInvoice?contractInfoId="+t.contractInfoId,r="发票.pdf",c="pdf";break;default:break}"doc"==c?o.request(n,{},"GET",{},"blob").then((function(t){console.log(t);try{console.log(t.data);var e=new Blob([t.data]),o=document.createElement("a");o.download=r,o.style.display="none",o.href=URL.createObjectURL(e),document.body.appendChild(o),o.click(),URL.revokeObjectURL(o.href),document.body.removeChild(o)}catch(n){console.log(n),a.$message({message:"数据请求失败！",type:"error"})}})).catch((function(t){console.log(t),a.$message({message:"出错了！",type:"error"})})):"pdf"==c&&o.request(n,{},"GET",{},"blob").then((function(t){console.log(t);try{var e=new Blob([t.data],{type:"application/pdf"}),o=URL.createObjectURL(e),n=document.createElement("a");n.href=o,n.setAttribute("download",r),document.body.appendChild(n),n.click(),document.body.removeChild(n)}catch(c){console.log(c),a.$message({message:"数据请求失败！",type:"error"})}})).catch((function(t){console.log(t),a.$message({message:"出错了！",type:"error"})}))},upload_file:function(t){console.log(t),this.upload_row=t,this.file_type_Dialog=!0},download_button:function(t){console.log(t),this.download_row=t},handleCommand_download:function(t){console.log(t),this.download(this.download_row,t)},handleCommand_upload:function(t){console.log(t)},getAccountingInfo:function(t){var e=this;console.log(t);var a="/transferring/generateAccounting?contractInfoId="+t.contractInfoId;e.request(a,{},"GET",{}).then((function(a){console.log(a.data),"success"==a.data.status?e.download(t,"AccountingInfo"):e.$message({message:a.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))},ConfirmEnd:function(t){var e=this,a=this;this.$confirm("确认要结束流程吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o="/transferring/processComplete?contractInfoId="+t.contractInfoId;a.request(o,{},"GET",{}).then((function(t){"success"==t.data.status?(e.$message({message:"流程已结束！",type:"success"}),a.refresh()):e.$message({message:t.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}}),s=c,l=(a("2ab0"),a("2877")),i=Object(l["a"])(s,o,n,!1,null,null,null);e["default"]=i.exports},fb6a:function(t,e,a){"use strict";var o=a("23e7"),n=a("861d"),r=a("e8b5"),c=a("23cb"),s=a("50c4"),l=a("fc6a"),i=a("8418"),d=a("b622"),u=a("1dde"),p=a("ae40"),g=u("slice"),f=p("slice",{ACCESSORS:!0,0:0,1:2}),m=d("species"),h=[].slice,b=Math.max;o({target:"Array",proto:!0,forced:!g||!f},{slice:function(t,e){var a,o,d,u=l(this),p=s(u.length),g=c(t,p),f=c(void 0===e?p:e,p);if(r(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?n(a)&&(a=a[m],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return h.call(u,g,f);for(o=new(void 0===a?Array:a)(b(f-g,0)),d=0;g<f;g++,d++)g in u&&i(o,d,u[g]);return o.length=d,o}})}}]);