(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7689df9c"],{"24bb":function(e,t,o){"use strict";o("4ed6")},"2a79":function(e,t,o){e.exports=o.p+"static/img/file_pdf.1bf2177c.png"},3736:function(e,t,o){"use strict";o("ac1f"),o("1276"),o("caad"),o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d");var i=o("4ec3"),s=o("5c96"),a=o.n(s),n=function(e){var t="/file/downloadFileById?fileId="+e;Object(i["a"])(t,{},"GET",{},"arraybuffer").then((function(e){if(console.log(e),void 0==e.headers["content-disposition"])a.a.Notification({title:"错误",message:"文件可能丢失了！",type:"error"});else{var t="",o=e.headers["content-disposition"].split("fileName=")[1].split(".").length,i=e.headers["content-disposition"].split("fileName=")[1].split(".")[o-1];if(["pdf","png","jpg","jpeg"].includes(i)){switch(i){case"pdf":t="application/pdf";break;case"png":t="image/png";break;case"jpg":t="image/jpeg";break;case"jpeg":t="image/jpeg";break}var s=e.data,n=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);if(window.navigator&&window.navigator.msSaveOrOpenBlob){var c=new Blob([s],{type:t});console.log(n),window.navigator.msSaveOrOpenBlob(c,n)}else{var l=new Blob([s],{type:t}),r=window.URL.createObjectURL(l);console.log(r),window.open(r)}}else a.a.Notification({title:"提示",message:"该文件类型暂不支持在线预览，请下载后查看！",type:"warning"})}})).catch((function(e){console.log(e),a.a.Message({message:"出错了！",type:"error"})}))},c=function(e){Object(i["a"])(e,{},"GET",{},"blob").then((function(t){if(console.log(t),void 0!=t.headers["content-disposition"]){a.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var o=decodeURI(t.headers["content-disposition"].split("fileName=")[1]);try{var s=new Blob([t.data],{type:"application/force-download"}),n=URL.createObjectURL(s),c=document.createElement("a");c.href=n,c.setAttribute("download",o),document.body.appendChild(c),c.click(),document.body.removeChild(c)}catch(l){console.log(l),a.a.Message({message:"数据请求失败！",type:"error"})}}else Object(i["a"])(e,{},"GET",{}).then((function(e){a.a.Message({message:e.data.data.errMsg,type:"error"})}))})).catch((function(e){console.log(e),a.a.Message({message:"出错了！",type:"error"})}))},l=function(e,t){var o="";if(0==t.length)a.a.Notification.warning({title:"提示",message:"文件为空！"});else{if(1==t.length)o="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];else if(t.length>1){o="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];for(var s=1;s<t.length;s++)o=o+"&fileIdList="+t[s]}Object(i["a"])(o,{},"GET",{},"blob").then((function(e){if(void 0!=e.headers["content-disposition"]){a.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var t=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);try{var o=new Blob([e.data],{type:"application/force-download"}),i=URL.createObjectURL(o),s=document.createElement("a");s.href=i,s.setAttribute("download",t),document.body.appendChild(s),s.click(),document.body.removeChild(s)}catch(n){console.log(n),a.a.Message({message:"数据请求失败！",type:"error"})}}else a.a.Message({message:"文件可能丢失了！",type:"error"})})).catch((function(e){console.log(e),a.a.Message({message:"出错了！",type:"error"})}))}};t["a"]={previewFile:n,downloadFiles:c,downloadFilePackage:l}},3881:function(e,t,o){e.exports=o.p+"static/img/filebox.7347b85c.png"},"4ed6":function(e,t,o){},"854e":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"Files_Controller_Container"},[i("div",{staticClass:"top_buttons"},[e.multipleSelection.length>0?i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"el-icon-download"},on:{click:e.List_download}},[e._v(" 打包下载 ")]):e._e()],1),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),i("el-table-column",{attrs:{prop:"file_type",label:"文件名"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("div",{staticClass:"filebox"},[["入账通知单"].includes(t.row.file_type)?i("img",{attrs:{src:o("e931")}}):["合同","认定清单","发票"].includes(t.row.file_type)?i("img",{attrs:{src:o("2a79")}}):i("img",{attrs:{src:o("3881")}}),["合同","入账通知单","认定清单","发票"].includes(t.row.file_type)?i("el-button",{attrs:{type:"text",disabled:""==t.row.fixtime},on:{click:function(o){return e.pdf_preview(t.row)}}},[e._v(" "+e._s(t.row.file_type)+" ")]):e._e(),["专利","到款凭证"].includes(t.row.file_type)?i("el-button",{attrs:{type:"text",disabled:""==t.row.fixtime},on:{click:function(o){return e.seeFiles(t.row)}}},[e._v(" "+e._s(t.row.file_type)+" ")]):e._e()],1)]}}])}),i("el-table-column",{attrs:{prop:"fixtime",label:"修改时间"}}),i("el-table-column",{attrs:{prop:"setting",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("div",{staticClass:"setting"},[["合同"].includes(t.row.file_type)?i("el-button",{attrs:{icon:"el-icon-document",type:"text"},on:{click:e.generateContract}},[e._v(" 生成合同模版 ")]):e._e(),["入账通知单"].includes(t.row.file_type)?i("el-button",{attrs:{icon:"el-icon-document",type:"text"},on:{click:e.getAccountingInfo}},[e._v(" 生成入账通知单 ")]):e._e(),""!=t.row.fixtime&&["合同","认定清单","发票"].includes(t.row.file_type)?i("el-button",{attrs:{icon:"el-icon-download",type:"text"},on:{click:function(o){return e.downloadFiles(t.row)}}},[e._v(" 下载 ")]):e._e(),["合同","到款凭证","认定清单","发票"].includes(t.row.file_type)?i("el-upload",{attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[i("el-button",{attrs:{type:"text",icon:"el-icon-upload2"},on:{click:function(o){return e.get_fileType(t.row.file_type)}}},[e._v("上传")])],1):e._e()],1)]}}])})],1)],1)},s=[],a=o("5530"),n=(o("fb6a"),o("ac1f"),o("1276"),o("b0c0"),o("2f62")),c=o("3736"),l={data:function(){return{tableData:[{file_type:"合同",fixtime:null==this.$store.state.contract_files.contract?"":this.$store.state.contract_files.contract.gmtCreate,fileId:null==this.$store.state.contract_files.contract?"":this.$store.state.contract_files.contract.fileId},{file_type:"到款凭证",fixtime:0==this.$store.state.contract_files.voucherList.length?"":this.$store.state.contract_files.voucherList[this.$store.state.contract_files.voucherList.length-1].gmtCreate},{file_type:"认定清单",fixtime:null==this.$store.state.contract_files.checklist?"":this.$store.state.contract_files.checklist.gmtCreate,fileId:null==this.$store.state.contract_files.checklist?"":this.$store.state.contract_files.checklist.fileId},{file_type:"入账通知单",fixtime:null==this.$store.state.contract_files.accounting?"":this.$store.state.contract_files.accounting.gmtCreate,fileId:null==this.$store.state.contract_files.accounting?"":this.$store.state.contract_files.accounting.fileId},{file_type:"发票",fixtime:null==this.$store.state.contract_files.invoice?"":this.$store.state.contract_files.invoice.gmtCreate,fileId:null==this.$store.state.contract_files.invoice?"":this.$store.state.contract_files.invoice.fileId},{file_type:"专利"}],loading:!0,multipleSelection:[],upload_fileType:"",projectCode:this.$store.state.contract_files.projectCode,contractInfoId:this.$store.state.contract_files.contractInfoId}},created:function(){console.log(null==this.$store.state.contract_files.contract)},methods:Object(a["a"])(Object(a["a"])({},Object(n["c"])(["get_files"])),{},{handleSelectionChange:function(e){this.multipleSelection=e},seeFiles:function(e){switch(console.log(e),e.file_type){case"到款凭证":this.$router.push({path:"./files_voucherList"});break;case"专利":this.$router.push({path:"./files_patents"});break}},get_fileType:function(e){this.upload_fileType=e},Upload:function(e){var t=this,o=this;console.log(e);var i="";switch(this.upload_fileType){case"合同":i="/file/uploadContract";break;case"到款凭证":i="/file/uploadVoucher";break;case"认定清单":i="/file/uploadChecklist";break;case"发票":i="/file/uploadInvoice";break;default:break}if("pdf"!=e.file.name.split(".").slice(-1))this.$message.warning("上传文件只能是pdf格式!");else if(e.file.size/1024/1024>10)this.$message.warning("上传文件大小不得超过10M!");else{var s=new FormData;s.append("file",e.file),s.append("contractInfoId",o.contractInfoId),console.log(s),o.request(i,s,"POST",{}).then((function(e){if(console.log(e),"success"==e.data.status){t.$message({type:"success",message:"上传成功！"});var i="/file/getFileListByContractInfoId?contractInfoId="+o.contractInfoId;o.request(i,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.get_files(e.data.data),sessionStorage.setItem("state",JSON.stringify(t.$store.state)),window.location.reload()):(o.$message.error(e.data.data.errMsg),window.location.reload())})).catch((function(e){console.log(e),o.$message.error("出错了！")}))}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))}},downloadFiles:function(e){var t="/file/downloadFileById?fileId="+e.fileId;c["a"].downloadFiles(t)},List_download:function(){console.log(this.multipleSelection);for(var e=[],t=0;t<this.multipleSelection.length;t++)switch(this.multipleSelection[t].file_type){case"合同":null!=this.$store.state.contract_files.contract&&e.push(this.$store.state.contract_files.contract.fileId);break;case"到款凭证":for(var o=0;o<this.$store.state.contract_files.voucherList.length;o++)e.push(this.$store.state.contract_files.voucherList[o].fileId);break;case"认定清单":null!=this.$store.state.contract_files.checklist&&e.push(this.$store.state.contract_files.checklist.fileId);break;case"入账通知单":null!=this.$store.state.contract_files.accounting&&e.push(this.$store.state.contract_files.accounting.fileId);break;case"发票":null!=this.$store.state.contract_files.invoice&&e.push(this.$store.state.contract_files.invoice.fileId);break;case"专利":for(var i=0;i<this.$store.state.contract_files.patentList.length;i++){var s=this.$store.state.contract_files.patentList[i];null!=s.certificate&&e.push(s.certificate.fileId),null!=s.oa&&e.push(s.oa.fileId),null!=s.tax&&e.push(s.tax.fileId)}break}console.log(e),c["a"].downloadFilePackage(this.projectCode,e)},generateContract:function(){var e="/contract/generateContract?contractInfoId="+this.contractInfoId;c["a"].downloadFiles(e)},getAccountingInfo:function(){var e="/file/generateAccounting?contractInfoId="+this.contractInfoId;c["a"].downloadFiles(e)},pdf_preview:function(e){console.log(e),"入账通知单"==e.file_type?this.$notify.warning({title:"提示",message:"暂不支持预览word文档！"}):c["a"].previewFile(e.fileId)}})},r=l,f=(o("24bb"),o("2877")),d=Object(f["a"])(r,i,s,!1,null,null,null);t["default"]=d.exports},e931:function(e,t,o){e.exports=o.p+"static/img/file_word.cdded0c4.png"},fb6a:function(e,t,o){"use strict";var i=o("23e7"),s=o("861d"),a=o("e8b5"),n=o("23cb"),c=o("50c4"),l=o("fc6a"),r=o("8418"),f=o("b622"),d=o("1dde"),p=o("ae40"),u=d("slice"),h=p("slice",{ACCESSORS:!0,0:0,1:2}),g=f("species"),_=[].slice,b=Math.max;i({target:"Array",proto:!0,forced:!u||!h},{slice:function(e,t){var o,i,f,d=l(this),p=c(d.length),u=n(e,p),h=n(void 0===t?p:t,p);if(a(d)&&(o=d.constructor,"function"!=typeof o||o!==Array&&!a(o.prototype)?s(o)&&(o=o[g],null===o&&(o=void 0)):o=void 0,o===Array||void 0===o))return _.call(d,u,h);for(i=new(void 0===o?Array:o)(b(h-u,0)),f=0;u<h;u++,f++)u in d&&r(i,f,d[u]);return i.length=f,i}})}}]);