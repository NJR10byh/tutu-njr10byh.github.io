(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d149bae6"],{"5bab":function(e,t,a){},"63b3":function(e,t,a){"use strict";a("5bab")},af2c:function(e,t,a){"use strict";a("ac1f"),a("1276"),a("caad"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d");var n=a("4ec3"),r=a("5c96"),s=a.n(r),o=function(e){var t="/file/downloadFileById?fileId="+e;Object(n["a"])(t,{},"GET",{},"arraybuffer").then((function(e){if(console.log(e),void 0==e.headers["content-disposition"])s.a.Notification({title:"错误",message:"文件可能丢失了！",type:"error"});else{var t="",a=e.headers["content-disposition"].split("fileName=")[1].split(".").length,n=e.headers["content-disposition"].split("fileName=")[1].split(".")[a-1];if(["pdf","png","jpg","jpeg"].includes(n)){switch(n){case"pdf":t="application/pdf";break;case"png":t="image/png";break;case"jpg":t="image/jpeg";break;case"jpeg":t="image/jpeg";break}var r=e.data,o=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);if(window.navigator&&window.navigator.msSaveOrOpenBlob){var i=new Blob([r],{type:t});console.log(o),window.navigator.msSaveOrOpenBlob(i,o)}else{var c=new Blob([r],{type:t}),l=window.URL.createObjectURL(c);console.log(l),window.open(l)}}else s.a.Notification({title:"提示",message:"该文件类型暂不支持在线预览，请下载后查看！",type:"warning"})}})).catch((function(e){console.log(e),s.a.Message({message:"出错了！",type:"error"})}))},i=function(e){Object(n["a"])(e,{},"GET",{},"blob").then((function(t){if(console.log(t),void 0!=t.headers["content-disposition"]){s.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var a=decodeURI(t.headers["content-disposition"].split("fileName=")[1]);try{var r=new Blob([t.data],{type:"application/force-download"}),o=URL.createObjectURL(r),i=document.createElement("a");i.href=o,i.setAttribute("download",a),document.body.appendChild(i),i.click(),document.body.removeChild(i)}catch(c){console.log(c),s.a.Message({message:"数据请求失败！",type:"error"})}}else Object(n["a"])(e,{},"GET",{}).then((function(e){s.a.Message({message:e.data.data.errMsg,type:"error"})}))})).catch((function(e){console.log(e),s.a.Message({message:"出错了！",type:"error"})}))},c=function(e,t){var a="";if(0==t.length)s.a.Notification.warning({title:"提示",message:"文件为空！"});else{if(1==t.length)a="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];else if(t.length>1){a="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];for(var r=1;r<t.length;r++)a=a+"&fileIdList="+t[r]}Object(n["a"])(a,{},"GET",{},"blob").then((function(e){if(void 0!=e.headers["content-disposition"]){s.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var t=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);try{var a=new Blob([e.data],{type:"application/force-download"}),n=URL.createObjectURL(a),r=document.createElement("a");r.href=n,r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r)}catch(o){console.log(o),s.a.Message({message:"数据请求失败！",type:"error"})}}else s.a.Message({message:"文件可能丢失了！",type:"error"})})).catch((function(e){console.log(e),s.a.Message({message:"出错了！",type:"error"})}))}};t["a"]={previewFile:o,downloadFiles:i,downloadFilePackage:c}},fb5f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Patents_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Type"},[a("el-radio-group",{on:{change:e.type_change},model:{value:e.exam_type,callback:function(t){e.exam_type=t},expression:"exam_type"}},[a("el-radio-button",{attrs:{label:"全部"}}),a("el-radio-button",{attrs:{label:"未通过"}}),a("el-radio-button",{attrs:{label:"已通过"}}),a("el-radio-button",{attrs:{label:"正在转换"}}),a("el-radio-button",{attrs:{label:"已转换"}})],1)],1),["全部"].includes(e.exam_type)&&!e.multiple_check?a("div",{staticClass:"Search"},[a("el-dropdown",{staticClass:"Dropdown",on:{command:e.handleDropdown}},[a("t-button",{attrs:{theme:"primary"}},[e._v(" "+e._s(e.SearchType)+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"专利名称"}},[e._v("专利名称")]),a("el-dropdown-item",{attrs:{command:"专利号"}},[e._v("专利号")])],1)],1),a("el-input",{attrs:{placeholder:"请输入需要查询的内容"},model:{value:e.SearchText,callback:function(t){e.SearchText=t},expression:"SearchText"}}),a("t-button",{attrs:{size:"large"},on:{click:e.search}},[a("t-icon",{attrs:{name:"search"}}),e._v(" 搜索 ")],1)],1):e._e(),a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},[a("t-button",{staticStyle:{"margin-right":"10px"},attrs:{variant:"outline",theme:"warning"},on:{click:e.savedBox}},[a("t-icon",{attrs:{name:"edit"}}),e._v(" 草稿箱 ")],1),e.multiple_check?a("t-button",{staticStyle:{"margin-right":"10px"},attrs:{variant:"outline",theme:"primary"},on:{click:e.multiple_transfer}},[a("t-icon",{attrs:{name:"money-circle"}}),e._v(" 批量填写价格意向（转让） ")],1):e._e(),e.multiple_check?a("t-button",{staticStyle:{"margin-right":"10px"},attrs:{variant:"outline",theme:"primary"},on:{click:e.multiple_licence}},[a("t-icon",{attrs:{name:"money-circle"}}),e._v(" 批量填写价格意向（许可） ")],1):e._e(),a("t-button",{attrs:{variant:"outline",theme:"success"},on:{click:e.copy_site}},[a("t-icon",{attrs:{name:"link"}}),e._v(" 导出引用 ")],1)],1)])]),a("t-table",{staticClass:"t_table_style",attrs:{"row-key":"id",columns:"全部"==e.exam_type?e.columns_select:e.columns,data:e.tableData,"expanded-row-keys":e.expandedRowKeys,"expanded-row":e.expandedRow,expandOnRowClick:!0,expandIcon:!1,"table-layout":"auto","selected-row-keys":e.selectedRowKeys,stripe:"",hover:"",bordered:"",allowResizeColumnWidth:"",loading:e.tableLoading},on:{"expand-change":e.rehandleExpandChange,"select-change":e.rehandleSelectChange},scopedSlots:e._u([{key:"settings",fn:function(t){return[a("div",{staticClass:"settings_buttons"},[t.row.exam_saved||"未转换"!=t.row.state||""==t.row.zlzsxzdz&&null==t.row.certificateId?e._e():a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.handleExam(t.row)}}},[a("t-icon",{attrs:{name:"edit"}}),e._v(" 填写审批 ")],1),!t.row.exam_saved||"未转换"!=t.row.state||""==t.row.zlzsxzdz&&null==t.row.certificateId?e._e():a("t-button",{attrs:{variant:"base",theme:"warning"},on:{click:function(a){return e.handleExam(t.row)}}},[a("t-icon",{attrs:{name:"edit"}}),e._v(" 填写审批 ")],1),"未转换"==t.row.state&&""==t.row.zlzsxzdz&&null==t.row.certificateId?a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.upload(t.row,"certificate")}}},[a("t-icon",{attrs:{name:"cloud-upload"}}),e._v(" 上传专利证书 ")],1)],1):e._e(),t.row.price_filled||"未转换"!=t.row.state?e._e():a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.FillingPrice(t.row)}}},[a("t-icon",{attrs:{name:"money-circle"}}),e._v(" 价格意向 ")],1),t.row.price_filled&&"未转换"==t.row.state?a("t-button",{attrs:{variant:"base",theme:"warning"},on:{click:function(a){return e.FillingPrice(t.row)}}},[a("t-icon",{attrs:{name:"money-circle"}}),e._v(" 价格意向 ")],1):e._e(),"未转换"!=t.row.state&&"产学研未通过"!=t.row.state&&"审批表已撤回"!=t.row.state&&"第一作者未通过"!=t.row.state?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.getPatent(t.row)}}},[a("t-icon",{attrs:{name:"file"}}),e._v(" 查看审批表 ")],1):e._e(),["等待第一作者确认","等待上传学院意见"].includes(t.row.state)?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.withDraw(t.row)}}},[a("t-icon",{attrs:{name:"rollback"}}),e._v(" 撤回 ")],1):e._e(),["产学研未通过","审批表已撤回","第一作者未通过"].includes(t.row.state)?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.editPatent(t.row)}}},[a("t-icon",{attrs:{name:"edit"}}),e._v(" 修改审批表 ")],1):e._e(),["产学研未通过"].includes(t.row.state)?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.getFailedReason_cxy(t.row)}}},[a("t-icon",{attrs:{name:"help-circle"}}),e._v(" 查看原因 ")],1):e._e(),["第一作者未通过"].includes(t.row.state)?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.getFailedReason_teacher(t.row)}}},[a("t-icon",{attrs:{name:"help-circle"}}),e._v(" 查看原因 ")],1):e._e(),["产学研未通过","第一作者未通过","审批表已撤回"].includes(t.row.state)?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.deletePatent(t.row)}}},[a("t-icon",{attrs:{name:"delete"}}),e._v(" 删除 ")],1):e._e(),["等待上传到款凭证"].includes(t.row.state)?a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.upload(t.row,"pdf")}}},[a("t-icon",{attrs:{name:"cloud-upload"}}),e._v(" 到款凭证 ")],1)],1):e._e(),["等待上传学院意见","产学研未通过"].includes(t.row.state)?a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.upload(t.row,"picture")}}},[a("t-icon",{attrs:{name:"cloud-upload"}}),e._v(" 学院意见 ")],1)],1):e._e(),a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.downloadCertificate(t.row)}}},[a("t-icon",{attrs:{name:"download"}}),e._v(" 下载专利证书 ")],1),"已转换"==t.row.state?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.file_manage(t.row)}}},[a("t-icon",{attrs:{name:"file"}}),e._v(" 文件管理 ")],1):e._e()],1)]}}])}),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":20,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentPage}})],1),a("el-dialog",{staticClass:"Price_Dialog",attrs:{title:"价格意向（单位：万元）",visible:e.PriceVisible,width:"30%"},on:{"update:visible":function(t){e.PriceVisible=t}}},[a("div",{staticClass:"price_expect"},[a("div",[e._v("转让：")]),a("div",{staticClass:"input_button"},[a("t-input",{attrs:{type:"number",placeholder:"请填写转让价格"},model:{value:e.transferprice,callback:function(t){e.transferprice=t},expression:"transferprice"}}),null!=e.transferprice?a("t-button",{attrs:{theme:"danger"},on:{click:function(t){return e.deletePrice("transferprice")}}},[e._v("删除")]):e._e()],1),a("div",{staticStyle:{"margin-top":"10px"}},[e._v("许可：")]),a("div",{staticClass:"input_button"},[a("t-input",{attrs:{type:"number",placeholder:"请填写许可价格"},model:{value:e.licenseprice,callback:function(t){e.licenseprice=t},expression:"licenseprice"}}),null!=e.licenseprice?a("t-button",{attrs:{theme:"danger"},on:{click:function(t){return e.deletePrice("licenseprice")}}},[e._v("删除")]):e._e()],1),a("div",{staticStyle:{"margin-top":"10px"}},[e._v("开放许可：")]),a("div",{staticClass:"input_button"},[a("t-input",{attrs:{type:"number",placeholder:"请填写开放许可价格意向"},model:{value:e.openlicenseprice,callback:function(t){e.openlicenseprice=t},expression:"openlicenseprice"}}),null!=e.openlicenseprice?a("t-button",{attrs:{theme:"danger"},on:{click:function(t){return e.deletePrice("openlicenseprice")}}},[e._v("删除")]):e._e()],1)]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("t-button",{staticStyle:{"margin-right":"10px"},attrs:{theme:"default",size:"large"},on:{click:function(t){e.PriceVisible=!1}}},[e._v("取 消")]),a("t-button",{attrs:{theme:"primary",size:"large"},on:{click:function(t){return e.ConfirmPrice()}}},[e._v(" 确 认 ")])],1)]),a("el-dialog",{attrs:{title:"未通过原因",visible:e.dispassDialog,width:"60%"},on:{"update:visible":function(t){e.dispassDialog=t}}},[a("el-table",{attrs:{data:e.dispassData}},[a("el-table-column",{attrs:{prop:"operatorName",label:"姓名"}}),a("el-table-column",{attrs:{prop:"operatorGh",label:"工号"}}),a("el-table-column",{attrs:{prop:"operatorDepartment",label:"工作单位"}}),a("el-table-column",{attrs:{prop:"remarks",label:"未通过原因"}}),a("el-table-column",{attrs:{prop:"gmtCreate",label:"操作时间",width:"180"}})],1)],1),a("el-dialog",{staticClass:"dialogStyle",attrs:{title:"导出引用",visible:e.site_Dialog,width:"55%"},on:{"update:visible":function(t){e.site_Dialog=t}}},[a("div",{staticClass:"column_checkbox",attrs:{id:"CopyContent"},domProps:{innerHTML:e._s(e.site_patent)}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("t-button",{staticStyle:{"margin-right":"10px"},attrs:{theme:"default"},on:{click:function(t){e.site_Dialog=!1}}},[e._v("取 消")]),a("t-button",{attrs:{theme:"primary"},on:{click:e.copy}},[e._v("复 制")])],1)])],1)},r=[],s=a("1da1"),o=a("5530"),i=(a("96cf"),a("ac1f"),a("1276"),a("b0c0"),a("fb6a"),a("caad"),a("2f62")),c=a("af2c"),l={data:function(){this.$createElement;return{name:this.$store.state.signed_username,id:this.$store.state.signed_id,selectedRowKeys:[],columns_select:[{colKey:"row-select",type:"multiple",width:50},{colKey:"id",title:"序号"},{colKey:"zlmc",title:"专利名称"},{colKey:"state",title:"转换状态"},{colKey:"settings",title:"操作"}],columns:[{colKey:"id",title:"序号"},{colKey:"zlmc",title:"专利名称"},{colKey:"state",title:"转换状态"},{colKey:"settings",title:"操作"}],expandedRowKeys:[],expandedRow:function(e,t){var a=t.row;return e("div",[e("b",{style:"color:#99a9bf;"},["专利号:"]),e("span",{style:"margin-left:10px;"},[a.zlh]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["成员名单:"]),e("span",{style:"margin-left:10px;"},[a.cymd]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["成员工号:"]),e("span",{style:"margin-left:10px;"},[a.cygh]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["专利第一作者姓名:"]),e("span",{style:"margin-left:10px;"},[a.zldyzzxm]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["专利第一作者工号:"]),e("span",{style:"margin-left:10px;"},[a.zldyzzgh]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["授权日期:"]),e("span",{style:"margin-left:10px;"},[a.sqrq]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["归属单位:"]),e("span",{style:"margin-left:10px;"},[a.gsdw]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["所有权人:"]),e("span",{style:"margin-left:10px;"},[a.zlqr]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["转换状态:"]),e("span",{style:"margin-left:10px;"},[a.state]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["专利代理人:"]),e("span",{style:"margin-left:10px;"},[a.zldlr]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["最后更新时间:"]),e("span",{style:"margin-left:10px;"},[a.gmtUpdate])])},tableData:[],tableLoading:!0,exam_type:"全部",multiple_check:!1,selected_patents:[],total:0,currentPage:1,size:20,Page_url:"",SearchType:"查询字段",SearchText:"",price_type:"",PriceVisible:!1,price:"",price_wid:"",transferprice:null,licenseprice:null,openlicenseprice:null,dispassDialog:!1,dispassData:[{operatorName:"",operatorGh:"",operatorDepartment:"",remarks:"",gmtCreate:""}],upload_content:{type:"",contractInfoId:"",transferApplicationFormId:""},site_Dialog:!1,site_patent:""}},created:function(){this.refresh()},methods:Object(o["a"])(Object(o["a"])({},Object(i["c"])(["get_files"])),{},{refresh:function(){var e=this;e.tableData=[],e.currentPage=1,e.SearchType="查询字段",e.SearchText="",console.log(this.$store.state);var t="/teacher/getMyPatentPage?currPage="+e.currentPage+"&size="+e.size;e.Page_url=t,e.getUserPatent(t)},getUserPatent:function(e){var t=this,a=this;a.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),a.tableLoading=!1,"success"==e.data.status){a.total=e.data.data.total;for(var n=0;n<e.data.data.records.length;n++){var r={};r.id=n+1,r.wid=e.data.data.records[n].wid,r.certificateId=e.data.data.records[n].certificateId,r.sqrq=e.data.data.records[n].zlsqrq,r.sqbh=e.data.data.records[n].sqbh,r.sqggh=e.data.data.records[n].sqggh,r.zlmc=e.data.data.records[n].zlmc,r.zlh=e.data.data.records[n].zlh,r.zlqr=e.data.data.records[n].zlqr,r.gsdw=e.data.data.records[n].gsdw,r.priceIntention=e.data.data.records[n].priceIntention,r.licencePriceIntention=e.data.data.records[n].licencePriceIntention,r.openLicencePriceIntention=e.data.data.records[n].openLicencePriceIntention,null!=r.priceIntention||null!=r.licencePriceIntention||null!=r.openLicencePriceIntention?r.price_filled=!0:r.price_filled=!1,r.pzrq=e.data.data.records[n].pzrq,r.zldlr=e.data.data.records[n].zldlr,r.zldyzzgh=e.data.data.records[n].zldyzzgh,r.zldyzzxm=e.data.data.records[n].zldyzzxm,r.zlh=e.data.data.records[n].zlh,r.zlmc=e.data.data.records[n].zlmc,r.zlzsxzdz=e.data.data.records[n].zlzsxzdz,r.cymd=e.data.data.records[n].cymd,r.cygh=e.data.data.records[n].cygh,r.transferApplicationFormId=e.data.data.records[n].transferApplicationFormId,r.gmtUpdate=e.data.data.records[n].gmtUpdate,null==e.data.data.records[n].transferProcessId?r.state="未转换":(r.transferProcessId=e.data.data.records[n].transferProcessId,e.data.data.records[n].isWithdraw?r.state="审批表已撤回":e.data.data.records[n].isZldyzzConfirm?e.data.data.records[n].isZldyzzApproval?e.data.data.records[n].isDepartmentConfirm?e.data.data.records[n].isDepartmentApproval?e.data.data.records[n].isComplete?r.state="已转换":e.data.data.records[n].isCxyConfirm?e.data.data.records[n].isCxyApproval?null==e.data.data.records[n].contractInfoId?r.state="等待产学研创建合同":e.data.data.records[n].isPublicNotice?a.TimeDiffer(e.data.data.records[n].publicNoticeTime)?0==e.data.data.records[n].voucherNum?r.state="等待上传到款凭证":null==e.data.data.records[n].checklistId?r.state="等待上传认定清单（备案）":null==e.data.data.records[n].accountingInfoId?r.state="等待生成入账通知单":null==e.data.data.records[n].invoiceId?r.state="等待上传发票":e.data.data.records[n].hasCashReward&&!e.data.data.records[n].isCashRewardPublicNotice?r.state="等待现金奖励公示":e.data.data.records[n].isComplete||(r.state="等待流程结束"):r.state="正在公示中":r.state="等待公示":r.state="产学研未通过":r.state="等待产学研审批":r.state="归属单位未通过":r.state="等待上传学院意见":r.state="第一作者未通过":r.state="等待第一作者确认"),a.tableData.push(r)}t.$message.success("数据已更新！")}else t.$message.error(e.data.data.errMsg)})).catch((function(e){a.tableLoading=!1,console.log(e),t.$message.error("出错了！")}))},type_change:function(e){console.log(e);var t=this;t.tableLoading=!0,t.tableData=[];var a="";switch(e){case"全部":a="/teacher/getMyPatentPage?currPage=1&size=20";break;case"未通过":a="/teacher/getMyPatentPageNotApproval?currPage=1&size=20";break;case"已通过":a="/teacher/getMyPatentPageApproval?currPage=1&size=20";break;case"正在转换":a="/teacher/getMyPatentPageTransferring?currPage=1&size=20";break;case"已转换":a="/teacher/getMyPatentPageTransferred?currPage=1&size=20";break;default:break}t.Page_url=a,t.getUserPatent(a)},rehandleExpandChange:function(e){this.expandedRowKeys=e},rehandleSelectChange:function(e,t){var a=t.selectedRowData;this.expandedRowKeys=[],this.selectedRowKeys=e,this.multiple_check=!0,0==a.length&&(this.multiple_check=!1),this.selected_patents=a},multiple_transfer:function(){var e=this,t=this;console.log(this.selected_patents),this.$prompt("请输入转让价格（单位：万元）","批量转让",{confirmButtonText:"确定",cancelButtonText:"取消",inputPlaceholder:"单位：万元",inputType:"number"}).then((function(a){var n=a.value,r={};r.priceIntention=parseInt(n),r.widList=[];for(var s=0;s<t.selected_patents.length;s++)r.widList.push(t.selected_patents[s].wid);console.log(r),t.request("/intention/batchFillingTransferPriceIntention",r,"POST",{}).then((function(a){console.log(a.data),"success"==a.data.status?(e.$message.success("批量转让成功！"),t.refresh()):e.$message.error(a.data.data.errMsg)})).catch((function(t){console.log(t),e.$message.error("出错了！")}))})).catch((function(t){console.log(t),e.$message.info("已取消操作！！")}))},multiple_licence:function(){var e=this,t=this;console.log(this.selected_patents),this.$prompt("请输入许可价格（单位：万元）","批量许可",{confirmButtonText:"确定",cancelButtonText:"取消",inputPlaceholder:"单位：万元",inputType:"number"}).then((function(a){var n=a.value,r={};r.priceIntention=parseInt(n),r.widList=[];for(var s=0;s<t.selected_patents.length;s++)r.widList.push(t.selected_patents[s].wid);console.log(r),t.request("/intention/batchFillingLicencePriceIntention",r,"POST",{}).then((function(a){console.log(a.data),"success"==a.data.status?(e.$message.success("批量许可成功！"),t.refresh()):e.$message.error(a.data.data.errMsg)})).catch((function(t){console.log(t),e.$message.error("出错了！")}))})).catch((function(t){console.log(t),e.$message.info("已取消操作！！")}))},handleCurrentPage:function(e){var t=this;t.tableLoading=!0;var a=t.Page_url.split("currPage")[0]+"currPage="+e+"&size"+t.Page_url.split("size")[1];console.log(a),t.tableData=[],this.selectedRowKeys=[],t.currentPage=e,t.getUserPatent(a),t.size>=50&&this.$message.success("当前页面数据较多，请稍等！")},handleSizeChange:function(e){var t=this;this.size=e,this.tableData=[],t.tableLoading=!0,this.refresh()},TimeDiffer:function(e){var t=new Date,a=new Date(e),n=(t-a)/1e3,r=parseInt(n/86400);parseInt(n/3600),parseInt(n%3600/60),parseInt(n%60);return!0},handleDropdown:function(e){var t=this;t.SearchType=e},search:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,"查询字段"!=a.SearchType){t.next=5;break}e.$message.warning("请填写查询字段！"),t.next=24;break;case 5:if(""!=a.SearchText){t.next=9;break}e.$message.warning("请填写查询内容！"),t.next=24;break;case 9:a.tableLoading=!0,n="",a.tableData=[],a.currentPage=1,t.t0=a.SearchType,t.next="专利名称"===t.t0?16:"专利号"===t.t0?19:22;break;case 16:return n="/teacher/getPatentPageByZLMC?currPage="+a.currentPage+"&size="+a.size+"&userGh="+a.id+"&userName="+a.name+"&zlmc="+a.SearchText,a.Page_url=n,t.abrupt("break",23);case 19:return n="/teacher/getPatentPageByZLH?currPage="+a.currentPage+"&size="+a.size+"&sqbh="+a.SearchText+"&userGh="+a.id+"&userName="+a.name+"&zlh="+a.SearchText,a.Page_url=n,t.abrupt("break",23);case 22:return t.abrupt("break",23);case 23:a.getUserPatent(n);case 24:case"end":return t.stop()}}),t)})))()},savedBox:function(){this.$router.push({path:"/save_exam"})},copy_site:function(){if(this.selected_patents.length<=0)this.$notify.warning({title:"提示",content:"请选择需要导出引用的专利！"});else{var e="";switch(this.selected_patents[0].zlh.split("")[4]){case"1":e="发明专利";break;case"2":e="实用新型专利";break;case"3":e="外观设计专利";break}var t=this.selected_patents[0].cymd+"、"+this.selected_patents[0].zlmc+"、"+e+"、"+this.selected_patents[0].zlh;if(this.selected_patents.length>1)for(var a=1;a<this.selected_patents.length;a++){switch(this.selected_patents[a].zlh.split("")[4]){case"1":e="发明专利";break;case"2":e="实用新型专利";break;case"3":e="外观设计专利";break}t=t+"<br><br>"+this.selected_patents[a].cymd+"、"+this.selected_patents[a].zlmc+"、"+e+"、"+this.selected_patents[a].zlh}this.site_patent=t,console.log(t),this.site_Dialog=!0}},copy:function(){this.selectElementContents(document.getElementById("CopyContent"))},selectElementContents:function(e){var t,a;document.body;if(document.createRange&&window.getSelection){t=document.createRange(),a=window.getSelection(),a.removeAllRanges();try{t.selectNodeContents(e),a.addRange(t)}catch(n){t.selectNode(e),a.addRange(t)}document.execCommand("copy"),window.getSelection().empty(),this.$message.success("已复制！")}},file_manage:function(e){var t=this;window.event.cancelBubble=!0;var a=this;console.log(e);var n="/file/getFileListByWid?wid="+e.wid;a.request(n,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.get_files(e.data.data),sessionStorage.setItem("state",JSON.stringify(t.$store.state)),t.$router.push({path:"./files_controller"})):a.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),a.$message.error("出错了！")}))},FillingPrice:function(e){window.event.cancelBubble=!0,console.log(e),this.price_wid=e.wid,this.transferprice=e.priceIntention,this.licenseprice=e.licencePriceIntention,this.openlicenseprice=e.openLicencePriceIntention,this.PriceVisible=!0},ConfirmPrice:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.transferprice,e.licenseprice,e.openlicenseprice),null!=e.transferprice||null!=e.licenseprice||null!=e.openlicenseprice){t.next=5;break}e.$notify.warning({title:"提示",content:"请至少填写一项！",duration:2e3}),t.next=26;break;case 5:if(a=e,n={},r="",s=!1,null==e.transferprice){t.next=15;break}return n={priceIntention:a.transferprice,wid:a.price_wid},console.log(n),r="/intention/updateTransferPriceIntention",t.next=15,a.request(r,n,"POST",{}).then((function(t){console.log(t),e.PriceVisible=!1,"success"==t.data.status?(a.price="",s=!0):e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.$message.error("出错了！")}));case 15:if(null==e.licenseprice){t.next=20;break}return n={licencePriceIntention:a.licenseprice,wid:a.price_wid},r="/intention/updateLicencePriceIntention",t.next=20,a.request(r,n,"POST",{}).then((function(t){console.log(t),e.PriceVisible=!1,"success"==t.data.status?(a.price="",s=!0):e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.$message.error("出错了！")}));case 20:if(null==e.openlicenseprice){t.next=25;break}return n={openLicencePriceIntention:a.openlicenseprice,wid:a.price_wid},r="/intention/updateOpenLicencePriceIntention",t.next=25,a.request(r,n,"POST",{}).then((function(t){console.log(t),e.PriceVisible=!1,"success"==t.data.status?(a.price="",s=!0):e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.$message.error("出错了！")}));case 25:s&&(e.$notify.success({title:"成功",content:"操作成功！",duration:2e3}),a.refresh());case 26:case"end":return t.stop()}}),t)})))()},deletePrice:function(e){var t=this;console.log(e),this.$confirm("确认要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a="";switch(e){case"transferprice":a="/intention/deleteTransferPriceIntentionByWid?wid="+t.price_wid;break;case"licenseprice":a="/intention/deleteLicencePriceIntentionByWid?wid="+t.price_wid;break;case"openlicenseprice":a="/intention/deleteOpenLicencePriceIntentionByWid?wid="+t.price_wid;break}t.request(a,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message.success("已删除！"),t.PriceVisible=!1,t.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))})).catch((function(){t.$message.info("已取消操作！")}))},handleExam:function(e){window.event.cancelBubble=!0,console.log(e),this.$router.push({path:"/filling_exam",query:{wid:e.wid,type:"filling"}})},getPatent:function(e){window.event.cancelBubble=!0,console.log(e),this.$router.push({path:"/exam_detail_pc",query:{wid:e.wid}})},withDraw:function(e){var t=this;window.event.cancelBubble=!0,console.log(e);var a=this;this.$confirm("确定撤回吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n="/process/withdrawProcessById?transferApplicationFormId="+e.transferApplicationFormId;a.request(n,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message.success("撤回成功！"),a.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))})).catch((function(){t.$message.info("已取消操作！！")}))},editPatent:function(e){window.event.cancelBubble=!0,console.log(e),this.$router.push({path:"/filling_exam",query:{wid:e.wid,type:"fix"}})},deletePatent:function(e){var t=this;window.event.cancelBubble=!0;var a=this;console.log(e),this.$confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n="/process/deleteProcessById?transferApplicationFormId="+e.transferApplicationFormId;a.request(n,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message.success("删除成功！"),a.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))})).catch((function(){t.$message.info("已取消操作！！")}))},getFailedReason_cxy:function(e){var t=this;window.event.cancelBubble=!0;var a=this;console.log(e);var n="/process/getCXYNotApprovalReason?transferApplicationFormId="+e.transferApplicationFormId;a.request(n,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(a.dispassData[0].operatorName=e.data.data.operatorName,a.dispassData[0].operatorGh=e.data.data.operatorGh,a.dispassData[0].operatorDepartment=e.data.data.operatorDepartment,a.dispassData[0].remarks=e.data.data.remarks,a.dispassData[0].gmtCreate=e.data.data.gmtCreate,a.dispassDialog=!0):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))},getFailedReason_teacher:function(e){var t=this;window.event.cancelBubble=!0;var a=this;console.log(e);var n="/process/getZLDYZZNotApprovalReason?transferApplicationFormId="+e.transferApplicationFormId;a.request(n,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(a.dispassData[0].operatorName=e.data.data.operatorName,a.dispassData[0].operatorGh=e.data.data.operatorGh,a.dispassData[0].operatorDepartment=e.data.data.operatorDepartment,a.dispassData[0].remarks=e.data.data.remarks,a.dispassData[0].gmtCreate=e.data.data.gmtCreate,a.dispassDialog=!0):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))},upload:function(e,t){this.upload_content.type=t,this.upload_content.contractInfoId=e.contractInfoId,this.upload_content.transferApplicationFormId=e.transferApplicationFormId,this.upload_content.wid=e.wid},Upload:function(e){var t=this,a=this;if(console.log(e),console.log(e.file),"picture"==a.upload_content.type)if("image/jpeg"!=e.file.type&&"image/png"!=e.file.type)this.$message.warning("只能上传jpg/png文件，且不超过10M！");else if(e.file.size/1024/1024>10)this.$message.warning("上传文件大小不得超过10M!");else{var n=new FormData;n.append("file",e.file),n.append("transferApplicationFormId",a.upload_content.transferApplicationFormId),a.request("/file/uploadOAResult",n,"POST",{}).then((function(e){console.log(e),"success"==e.data.status?(t.$message.success("上传成功！"),a.file_type_Dialog=!1,a.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))}else if("pdf"==a.upload_content.type)if("pdf"!=e.file.name.split(".").slice(-1))this.$message.warning("上传文件只能是pdf格式，且不超过10M！");else if(e.file.size/1024/1024>10)this.$message.warning("上传文件大小不得超过10M!");else{var r=new FormData;r.append("file",e.file),r.append("contractInfoId",a.upload_content.contractInfoId),console.log(r),a.request("/transferring/uploadVoucher",r,"POST",{}).then((function(e){console.log(e),"success"==e.data.status?(t.$message.success("上传成功！"),a.file_type_Dialog=!1,a.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"}),t.$message.error("出错了！")}))}else if("certificate"==a.upload_content.type)if(console.log(e),["pdf","png","jpg","jpeg"].includes(e.file.name.split(".")[1]))if(e.file.size/1024/1024>10)this.$message.warning("上传文件大小不得超过10M!");else{var s=new FormData;s.append("file",e.file),s.append("wid",a.upload_content.wid),console.log(s),a.request("/file/uploadCertificate",s,"POST",{}).then((function(e){if(console.log(e),"success"==e.data.status){t.$message.success("上传成功！");var n="/file/getFileListByContractInfoId?contractInfoId="+a.contractInfoId;a.request(n,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.get_files(e.data.data),sessionStorage.setItem("state",JSON.stringify(t.$store.state)),window.location.reload()):(t.$message.error(e.data.data.errMsg),window.location.reload())})).catch((function(e){console.log(e),t.$message.error("出错了！")}))}else t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))}else this.$message.warning("上传文件只能是pdf或图片!")},downloadCertificate:function(e){window.event.cancelBubble=!0,console.log(e);var t="/teacher/downloadCertificate?wid="+e.wid;c["a"].downloadFiles(t)}})},d=l,p=(a("63b3"),a("2877")),u=Object(p["a"])(d,n,r,!1,null,null,null);t["default"]=u.exports}}]);