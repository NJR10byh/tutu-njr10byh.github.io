(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-138a52f0"],{2807:function(e,t,a){},"6b8d":function(e,t,a){"use strict";a("2807")},dcf3:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Handling_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Search"}),a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},[a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.refresh}},[e._v("刷新列表")])],1)])]),a("el-table",{ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"专利号"}},[a("span",[e._v(e._s(t.row.zlh))])]),a("el-form-item",{attrs:{label:"专利名称"}},[a("span",[e._v(e._s(t.row.zlmc))])]),a("el-form-item",{attrs:{label:"授权编号"}},[a("span",[e._v(e._s(t.row.sqbh))])]),a("el-form-item",{attrs:{label:"归属单位"}},[a("span",[e._v(e._s(t.row.gsdw))])]),a("el-form-item",{attrs:{label:"所有权人"}},[a("span",[e._v(e._s(t.row.zlqr))])]),a("el-form-item",{attrs:{label:"立项编号"}},[a("span",[e._v(e._s(t.row.projectCode))])]),a("el-form-item",{attrs:{label:"批准日期"}},[a("span",[e._v(e._s(t.row.pzrq))])]),a("el-form-item",{attrs:{label:"转换状态"}},[a("span",[e._v(e._s(t.row.state))])]),a("el-form-item",{attrs:{label:"专利代理人"}},[a("span",[e._v(e._s(t.row.zldlr))])]),a("el-form-item",{attrs:{label:"专利第一作者姓名"}},[a("span",[e._v(e._s(t.row.zldyzzxm))])]),a("el-form-item",{attrs:{label:"专利第一作者工号"}},[a("span",[e._v(e._s(t.row.zldyzzgh))])]),a("el-form-item",{attrs:{label:"最后更新时间"}},[a("span",[e._v(e._s(t.row.zhgxsj))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),a("el-table-column",{attrs:{prop:"projectCode",label:"立项编号",width:"100"}}),a("el-table-column",{attrs:{prop:"state",label:"转换状态",width:"280"}}),a("el-table-column",{attrs:{prop:"zhgxsj",label:"最后更新时间",width:"180"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"settings"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"查看审批表",placement:"bottom"}},["未转换"!=t.row.state&&"已转换"!=t.row.state?a("el-button",{attrs:{icon:"el-icon-document"},on:{click:function(a){return e.getPatent(t.row)}}}):e._e()],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"生成公示页面",placement:"bottom"}},["正在转换：等待公示"==t.row.state?a("el-button",{attrs:{icon:"el-icon-link"},on:{click:function(a){return e.GetPublic(t.row)}}}):e._e()],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"已开始公示",placement:"bottom"}},["正在转换：等待公示"==t.row.state?a("el-button",{attrs:{icon:"el-icon-reading"},on:{click:function(a){return e.BeginPublic(t.row)}}}):e._e()],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"生成合同模版",placement:"bottom"}},[["正在转换：正在公示中","正在转换：等待上传合同"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-tickets"},on:{click:e.GetTemplate}}):e._e()],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"上传合同（pdf）",placement:"bottom"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[["正在转换：正在公示中","正在转换：等待上传合同"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-upload2"},on:{click:function(a){return e.upload(t.row,"Contract")}}}):e._e()],1)],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下载合同",placement:"bottom"}},[["正在转换：等待合同寄回和上传到款凭证","正在转换：等待上传认定清单（备案）","正在转换：等待上传发票","等待流程结束"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-s-order"},on:{click:function(a){return e.downloadPdf(t.row,"Contract")}}}):e._e()],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下载到款凭证",placement:"bottom"}},[["正在转换：等待上传认定清单（备案）","正在转换：等待上传发票","等待流程结束"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-s-finance"},on:{click:function(a){return e.downloadPdf(t.row,"Voucher")}}}):e._e()],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下载认定清单",placement:"bottom"}},[["正在转换：等待上传发票","等待流程结束"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-s-claim"},on:{click:function(a){return e.downloadPdf(t.row,"Checklist")}}}):e._e()],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"上传到款凭证",placement:"bottom"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[["正在转换：等待合同寄回和上传到款凭证","正在转换：等待上传到款凭证"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-upload2"},on:{click:function(a){return e.upload(t.row,"Voucher")}}}):e._e()],1)],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"确认寄回",placement:"bottom"}},[["正在转换：等待合同寄回和上传到款凭证","正在转换：等待合同寄回"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-circle-check"},on:{click:function(a){return e.confirmBack(t.row)}}}):e._e()],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"提交认定清单",placement:"bottom"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},["正在转换：等待上传认定清单（备案）"==t.row.state?a("el-button",{attrs:{icon:"el-icon-document-checked"},on:{click:function(a){return e.upload(t.row,"Checklist")}}}):e._e()],1)],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"提交发票",placement:"bottom"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},["正在转换：等待上传发票"==t.row.state?a("el-button",{attrs:{icon:"el-icon-tickets"},on:{click:function(a){return e.upload(t.row,"Invoice")}}}):e._e()],1)],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下载发票",placement:"bottom"}},["等待流程结束"==t.row.state?a("el-button",{attrs:{icon:"el-icon-s-check"},on:{click:function(a){return e.downloadPdf(t.row,"Invoice")}}}):e._e()],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"确认流程结束",placement:"bottom"}},["等待流程结束"==t.row.state?a("el-button",{attrs:{icon:"el-icon-circle-check"},on:{click:function(a){return e.ConfirmEnd(t.row)}}}):e._e()],1)],1)]}}])})],1),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":10,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1),a("el-dialog",{staticClass:"Public_Dialog",attrs:{visible:e.PublicDialog,width:"50%"},on:{"update:visible":function(t){e.PublicDialog=t}}},[a("el-card",{staticClass:"card",attrs:{shadow:"hover"}},[a("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("公示内容")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.Copy}},[e._v(" 复 制 ")])],1),a("div",{staticClass:"below",attrs:{id:"CopyContent"}},[a("div",[e._v(" 知识产权转让公示（"),a("span",[e._v(e._s(e.public_content.projectCode)+" ")]),e._v("） ")]),a("br"),a("div",[e._v(" 根据《中华人民共和国促进科技成果转化法》相关规定，现对学校拟向外转让的知识产权进行公示。 ")]),a("br"),a("div",[a("div",[a("span",[e._v("专利名称：")]),e._v(" "+e._s(e.public_content.zlmc)+" ")]),a("div",{staticStyle:{"margin-top":"8px"}},[a("span",[e._v("专利号：")]),e._v(" "+e._s(e.public_content.zlh)+" ")]),a("div",{staticStyle:{"margin-top":"8px"}},[a("span",[e._v("发明人：")]),e._v(" "+e._s(e.public_content.zldyzzxm)+" ")])]),a("br"),a("div",[e._v(" 经双方协商，以上1件专利转让给 "),a("span",[e._v(e._s(e.public_content.transfereeDelegate))]),e._v(" ，转让金额共计人民币 "),a("span",[e._v(e._s(e.public_content.evaluation))]),e._v(" 万元整。该交易不是关联交易。若有异议，请于公告之日起 "),a("span",[e._v("15")]),e._v(" 日内向产学研合作处（技术转移中心）书面实名提出并提供相应的证明材料。 ")]),a("br"),a("div",[e._v("咨询电话：85866885，E-mail：jszy@njupt.edu.cn")]),a("br"),a("div",{staticClass:"bottom"},[a("div",[e._v("产学研合作处（技术转移中心）")]),a("div",{staticStyle:{"margin-top":"10px"}},[e._v("公告日：2022年1月13日")])])])])],1)],1)},s=[],o=a("1da1"),n=(a("ac1f"),a("1276"),a("b0c0"),a("fb6a"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),{data:function(){return{tableData:[],total:0,currentPage:1,Page_url:"",SearchType:"查询字段",SearchText:"",PublicDialog:!1,public_content:{projectCode:"",zlmc:"",zlh:"",zldyzzxm:"",transfereeDelegate:"",evaluation:""},upload_content:{type:"",operatorName:"",operatorGh:"",operatorDepartment:"",remarks:"",transferProcessId:""}}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.tableData=[],a.currentPage=1,a.SearchType="查询字段",a.SearchText="",console.log(e.$store.state),r="/process/getTransferringPatentPage?currPage="+a.currentPage+"&size=10",a.Page_url=r,t.next=10,a.getExam(r);case 10:case"end":return t.stop()}}),t)})))()},getExam:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,a.next=3,r.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),"success"==e.data.status){r.total=e.data.data.total;for(var a=0;a<e.data.data.records.length;a++){var s={};s.index=a+1,s.wid=e.data.data.records[a].wid,s.sqbh=e.data.data.records[a].sqbh,s.zlmc=e.data.data.records[a].zlmc,s.zlh=e.data.data.records[a].zlh,s.zlqr=e.data.data.records[a].zlqr,s.gsdw=e.data.data.records[a].gsdw,s.zhgxsj=null==e.data.data.records[a].transferProcess?e.data.data.records[a].zhgxsj:e.data.data.records[a].transferProcess.gmtUpdate,s.pzrq=e.data.data.records[a].pzrq,s.zldlr=e.data.data.records[a].zldlr,s.zldyzzgh=e.data.data.records[a].zldyzzgh,s.zldyzzxm=e.data.data.records[a].zldyzzxm,s.zlh=e.data.data.records[a].zlh,s.zlmc=e.data.data.records[a].zlmc,null==e.data.data.records[a].transferProcess?s.gmtUpdate=null:s.gmtUpdate=e.data.data.records[a].transferProcess.gmtUpdate,null==e.data.data.records[a].transferProcess?s.state="未转换":(s.transferProcessId=e.data.data.records[a].transferProcess.transferProcessId,e.data.data.records[a].transferProcess.isWithdraw?s.state="审批表已撤回":e.data.data.records[a].transferProcess.isZldyzzConfirm?e.data.data.records[a].transferProcess.isZldyzzApproval?e.data.data.records[a].transferProcess.isDepartmentConfirm?e.data.data.records[a].transferProcess.isDepartmentApproval?e.data.data.records[a].transferProcess.isComplete?(s.state="已转换",s.projectCode=e.data.data.records[a].transferProcess.projectCode):e.data.data.records[a].transferProcess.isCxyConfirm?e.data.data.records[a].transferProcess.isCxyApproval?(s.projectCode=e.data.data.records[a].transferProcess.projectCode,e.data.data.records[a].transferProcess.isPublicNotice?r.TimeDiffer(e.data.data.records[a].transferProcess.publicNoticeTime)?null==e.data.data.records[a].transferProcess.contractId?s.state="正在转换：等待上传合同":e.data.data.records[a].transferProcess.isContractSendBack||null!=e.data.data.records[a].transferProcess.voucherId?e.data.data.records[a].transferProcess.isContractSendBack&&null==e.data.data.records[a].transferProcess.voucherId?s.state="正在转换：等待上传到款凭证":e.data.data.records[a].transferProcess.isContractSendBack||null==e.data.data.records[a].transferProcess.voucherId?null==e.data.data.records[a].transferProcess.checklistId?s.state="正在转换：等待上传认定清单（备案）":null==e.data.data.records[a].transferProcess.invoiceId?s.state="正在转换：等待上传发票":e.data.data.records[a].transferProcess.isComplete||(s.state="等待流程结束"):s.state="正在转换：等待合同寄回":s.state="正在转换：等待合同寄回和上传到款凭证":s.state="正在转换：正在公示中":s.state="正在转换：等待公示"):s.state="产学研未通过":s.state="正在转换：等待产学研审批":s.state="归属单位未通过":s.state="正在转换：等待归属单位审批":s.state="第一作者未通过":s.state="正在转换：等待第一作者确认"),r.tableData.push(s)}t.$message({message:"数据已更新",type:"success"})}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}));case 3:case"end":return a.stop()}}),a)})))()},handleCurrentPage:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,console.log(r.Page_url),s=r.Page_url.split("currPage")[0]+"currPage="+e+"&size"+r.Page_url.split("size")[1],console.log(s),r.tableData=[],r.currentPage=e,a.next=8,r.getExam(s);case 8:case"end":return a.stop()}}),a)})))()},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,s=t.getDate(),o=t.getHours(),n=t.getMinutes(),c=t.getSeconds(),l=a+"-";return r<10&&(l+="0"),l+=r+"-",s<10&&(l+="0"),l+=s+" ",o<10&&(l+="0"),l+=o+":",n<10&&(l+="0"),l+=n+":",c<10&&(l+="0"),l+=c,l},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),s=(a-r)/1e3,o=parseInt(s/86400);parseInt(s/3600),parseInt(s%3600/60),parseInt(s%60);return!0},handleDropdown:function(e){var t=this;t.SearchType=e},search:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,r="",a.tableData=[],a.currentPage=1,t.t0=a.SearchType,t.next="专利名称"===t.t0?7:"授权编号"===t.t0?10:13;break;case 7:return r="/patent/getPatentPageByZLMC?currPage="+a.currentPage+"&size=10&zldyzzgh="+a.id+"&zldyzzxm="+a.name+"&zlmc="+a.SearchText,a.Page_url=r,t.abrupt("break",14);case 10:return r="/patent/getPatentPageBySQBH?currPage="+a.currentPage+"&size=10&sqbh="+a.SearchText+"&zldyzzgh="+a.id+"&zldyzzxm="+a.name,a.Page_url=r,t.abrupt("break",14);case 13:return t.abrupt("break",14);case 14:console.log(r),a.getExam(r);case 16:case"end":return t.stop()}}),t)})))()},getPatent:function(e){console.log(e),this.$router.push({path:"/patent_detail_pc",query:e})},GetPublic:function(e){var t=this,a=this;this.PublicDialog=!0,console.log(e);var r="/application/getTransferApplicationFormByWID?wid="+e.wid;a.request(r,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.public_content.transfereeDelegate=e.data.data.transfereeDelegate,t.public_content.evaluation=e.data.data.evaluation):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e)})),this.public_content.projectCode=e.projectCode,this.public_content.zlmc=e.zlmc,this.public_content.zlh=e.zlh,this.public_content.zldyzzxm=e.zldyzzxm},Copy:function(){this.selectElementContents(document.getElementById("CopyContent"))},selectElementContents:function(e){var t,a;document.body;if(document.createRange&&window.getSelection){t=document.createRange(),a=window.getSelection(),a.removeAllRanges();try{t.selectNodeContents(e),a.addRange(t)}catch(r){t.selectNode(e),a.addRange(t)}document.execCommand("copy"),window.getSelection().empty(),this.$message({message:"已复制",type:"success"})}},BeginPublic:function(e){var t=this,a=this;console.log(e),this.$confirm("确认已经开始公示了吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r={};r.operatorName=a.$store.state.signed_username,r.operatorGh=a.$store.state.signed_id,r.operatorDepartment=a.$store.state.signed_department,r.remarks="",r.transferProcessId=e.transferProcessId,console.log(r),a.request("/transferring/makePublicNotice",r,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"开始公示！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"已取消操作！"})}))},upload:function(e,t){this.upload_content.type=t,this.upload_content.operatorName=this.$store.state.signed_username,this.upload_content.operatorGh=this.$store.state.signed_id,this.upload_content.operatorDepartment=this.$store.state.signed_department,this.upload_content.remarks="",this.upload_content.transferProcessId=e.transferProcessId},Upload:function(e){var t=this,a=this;console.log(e);var r="";switch(a.upload_content.type){case"Contract":r="/transferring/uploadContract";break;case"Voucher":r="/transferring/uploadVoucher";break;case"Invoice":r="/transferring/uploadInvoice";break;case"Checklist":r="/transferring/uploadChecklist";break;default:break}if("pdf"!=e.file.name.split(".").slice(-1))this.$message.warning("上传文件只能是pdf格式!");else{var s=new FormData;s.append("file",e.file),s.append("operatorName",a.upload_content.operatorName),s.append("operatorGh",a.upload_content.operatorGh),s.append("operatorDepartment",a.upload_content.operatorDepartment),s.append("remarks",a.upload_content.remarks),s.append("transferProcessId",a.upload_content.transferProcessId),console.log(s),a.request(r,s,"POST",{}).then((function(e){console.log(e),"success"==e.data.status?(t.$message({type:"success",message:"上传成功！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))}},GetTemplate:function(){var e=this,t=this;t.request("/transferring/downloadContractTemplate",{},"GET",{},"blob").then((function(t){console.log(t);try{console.log(t.data);var a=new Blob([t.data]),r="合同模版.doc",s=document.createElement("a");s.download=r,s.style.display="none",s.href=URL.createObjectURL(a),document.body.appendChild(s),s.click(),URL.revokeObjectURL(s.href),document.body.removeChild(s),e.$message({type:"success",message:"已开始下载！"})}catch(o){console.log(o),e.$message({type:"error",message:"数据请求失败！"})}})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}))},downloadPdf:function(e,t){var a=this,r=this,s="",o="";switch(t){case"Contract":s="/transferring/downloadContract?transferProcessId="+e.transferProcessId,o="合同.pdf";break;case"Voucher":s="/transferring/downloadVoucher?transferProcessId="+e.transferProcessId,o="到款凭证.pdf";break;case"Checklist":s="/transferring/downloadChecklist?transferProcessId="+e.transferProcessId,o="备案清单.pdf";break;case"Invoice":s="/transferring/downloadInvoice?transferProcessId="+e.transferProcessId,o="发票.pdf";break;default:break}r.request(s,{},"GET",{},"blob").then((function(e){if(console.log(e),"application/json"==e.data.type)a.$message({message:"文件获取失败！",type:"error"});else try{console.log(e.data);var t=new Blob([e.data]),r=document.createElement("a");r.download=o,r.style.display="none",r.href=URL.createObjectURL(t),document.body.appendChild(r),r.click(),URL.revokeObjectURL(r.href),document.body.removeChild(r),a.$message({message:"已开始下载！",type:"success"})}catch(s){console.log(s),a.$message({message:"数据请求失败！",type:"error"})}})).catch((function(e){console.log(e),a.$message({message:"出错了！",type:"error"})}))},confirmBack:function(e){var t=this,a=this;this.$confirm("确定寄回了吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r={};r.operatorName=t.$store.state.signed_username,r.operatorGh=t.$store.state.signed_id,r.operatorDepartment=t.$store.state.signed_department,r.remarks="",r.transferProcessId=e.transferProcessId,a.request("/transferring/contractSendBack",r,"POST",{}).then((function(e){"success"==e.data.status?(t.$message({message:"已确认寄回！",type:"success"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},ConfirmEnd:function(e){var t=this,a=this;this.$confirm("确认要结束流程吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r={};r.operatorName=t.$store.state.signed_username,r.operatorGh=t.$store.state.signed_id,r.operatorDepartment=t.$store.state.signed_department,r.remarks="",r.transferProcessId=e.transferProcessId,a.request("/transferring/processComplete",r,"POST",{}).then((function(e){"success"==e.data.status?(t.$message({message:"流程已结束！",type:"success"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}}),c=n,l=(a("6b8d"),a("2877")),i=Object(l["a"])(c,r,s,!1,null,null,null);t["default"]=i.exports},fb6a:function(e,t,a){"use strict";var r=a("23e7"),s=a("861d"),o=a("e8b5"),n=a("23cb"),c=a("50c4"),l=a("fc6a"),i=a("8418"),d=a("b622"),u=a("1dde"),p=a("ae40"),f=u("slice"),m=p("slice",{ACCESSORS:!0,0:0,1:2}),g=d("species"),h=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!f||!m},{slice:function(e,t){var a,r,d,u=l(this),p=c(u.length),f=n(e,p),m=n(void 0===t?p:t,p);if(o(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?s(a)&&(a=a[g],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return h.call(u,f,m);for(r=new(void 0===a?Array:a)(b(m-f,0)),d=0;f<m;f++,d++)f in u&&i(r,d,u[f]);return r.length=d,r}})}}]);