(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21720053"],{1276:function(e,t,a){"use strict";var r=a("d784"),l=a("44e7"),i=a("825a"),s=a("1d80"),n=a("4840"),c=a("8aa5"),o=a("50c4"),_=a("14c3"),d=a("9263"),u=a("d039"),p=[].push,v=Math.min,g=4294967295,f=!u((function(){return!RegExp(g,"y")}));r("split",2,(function(e,t,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var r=String(s(this)),i=void 0===a?g:a>>>0;if(0===i)return[];if(void 0===e)return[r];if(!l(e))return t.call(r,e,i);var n,c,o,_=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,f=new RegExp(e.source,u+"g");while(n=d.call(f,r)){if(c=f.lastIndex,c>v&&(_.push(r.slice(v,n.index)),n.length>1&&n.index<r.length&&p.apply(_,n.slice(1)),o=n[0].length,v=c,_.length>=i))break;f.lastIndex===n.index&&f.lastIndex++}return v===r.length?!o&&f.test("")||_.push(""):_.push(r.slice(v)),_.length>i?_.slice(0,i):_}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var l=s(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,l,a):r.call(String(l),t,a)},function(e,l){var s=a(r,e,this,l,r!==t);if(s.done)return s.value;var d=i(e),u=String(this),p=n(d,RegExp),m=d.unicode,h=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(f?"y":"g"),F=new p(f?d:"^(?:"+d.source+")",h),C=void 0===l?g:l>>>0;if(0===C)return[];if(0===u.length)return null===_(F,u)?[u]:[];var y=0,x=0,M=[];while(x<u.length){F.lastIndex=f?x:0;var b,P=_(F,f?u:u.slice(x));if(null===P||(b=v(o(F.lastIndex+(f?0:x)),u.length))===y)x=c(u,x,m);else{if(M.push(u.slice(y,x)),M.length===C)return M;for(var E=1;E<=P.length-1;E++)if(M.push(P[E]),M.length===C)return M;x=y=b}}return M.push(u.slice(y)),M}]}),!f)},"14c3":function(e,t,a){var r=a("c6b6"),l=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var i=a.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return l.call(e,t)}},5033:function(e,t,a){},"81ed":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"patent_detail_pc_Container"},[a("div",{staticClass:"application_title"},[e._v(" 南京邮电大学科技成果转化审批表（许可和转让） ")]),a("div",{staticClass:"application_title_info"},[e._v("（双面打印）")]),a("div",{staticClass:"application_table"},[a("div",{staticClass:"cell_1"},[a("div",{staticClass:"cell_1_part_1"},[e._v("成果名称")]),a("div",{staticClass:"cell_1_part_2"},[e._v(" "+e._s(e.patent_info.zlmc)+" ")])]),a("div",{staticClass:"cell_1"},[a("div",{staticClass:"cell_1_part_1"},[e._v("所有权人")]),a("div",{staticClass:"cell_1_part_2"},[e._v(" "+e._s(e.patent_info.zlqr)+" ")])]),a("div",{staticClass:"cell_1 cell_3"},[a("div",{staticClass:"cell_1_part_1"},[e._v("成果完成人")]),a("div",{staticClass:"cell_1_part_2 cell_3_part_2"},[a("div",{staticClass:"cell_3_part_2_1"},[e._v(" "+e._s(e.ruleForm.fzyName)+" ")]),a("div",{staticClass:"cell_3_part_2_2"},[e._v("中介")]),a("div",{staticClass:"cell_3_part_2_3"},[e._v(" "+e._s(e.ruleForm.agency)+" ")]),a("div",{staticClass:"cell_3_part_2_4",staticStyle:{"font-size":"17px"}},[e._v(" 中介费百分比 ")]),a("div",{staticClass:"cell_3_part_2_5",staticStyle:{"padding-left":"10px"}},[e._v(" "+e._s(e.ruleForm.agencyFee)+" ")])])]),a("div",{staticClass:"cell_1 cell_3"},[a("div",{staticClass:"cell_1_part_1"},[e._v("团队负责人")]),a("div",{staticClass:"cell_1_part_2 cell_3_part_2"},[a("div",{staticClass:"cell_3_part_2_1"},[e._v(" "+e._s(e.ruleForm.fzyName)+" ")]),a("div",{staticClass:"cell_3_part_2_2"},[e._v("所在单位")]),a("div",{staticClass:"cell_3_part_2_3"},[e._v(" "+e._s(e.ruleForm.fzyDepartment)+" ")]),a("div",{staticClass:"cell_3_part_2_4"},[e._v("联系方式")]),a("div",{staticClass:"cell_3_part_2_5"},[e._v(" "+e._s(e.ruleForm.fzyPhone)+" ")])])]),a("div",{staticClass:"cell_1 cell_5"},[a("div",{staticClass:"cell_1_part_1"},[e._v("转化方式")]),a("div",{staticClass:"cell_1_part_2 cell_5_part_2"},[e._v(" "+e._s(e.ruleForm.transferMode)+" ")])]),a("div",{staticClass:"cell_1 cell_3 cell_6"},[a("div",{staticClass:"cell_1_part_1"},[e._v("技术受让方")]),a("div",{staticClass:"cell_1_part_2 cell_3_part_2"},[a("div",{staticClass:"cell_3_part_2_1"},[e._v(" "+e._s(e.ruleForm.transfereeDelegate)+" ")]),a("div",{staticClass:"cell_3_part_2_2"},[e._v("单位名称")]),a("div",{staticClass:"cell_3_part_2_3"},[e._v(" "+e._s(e.ruleForm.transfereeName)+" ")]),a("div",{staticClass:"cell_3_part_2_4"},[e._v("联系电话")]),a("div",{staticClass:"cell_3_part_2_5"},[e._v(" "+e._s(e.ruleForm.transfereeDelegatePhone)+" ")])])]),a("div",{staticClass:"cell_1 cell_7"},[a("div",{staticClass:"cell_1_part_1 cell_7_part_1"},[e._v("是否存在关联关系说明")]),a("div",{staticClass:"cell_7_part_2"},[e._v(" "+e._s(e.ruleForm.associationRelationship)+" ")])]),a("div",{staticClass:"cell_1 cell_8"},[a("div",{staticClass:"cell_1_part_1 cell_8_part_1"},[e._v("定价方式")]),a("div",{staticClass:"cell_1_part_2 cell_8_part_2"},[a("div",{staticClass:"cell_8_part_2_1"},[a("div",{staticClass:"cell_8_part_2_1_1"},[a("el-radio-group",{attrs:{disabled:""},model:{value:e.ruleForm.pricingMethod,callback:function(t){e.$set(e.ruleForm,"pricingMethod",t)},expression:"ruleForm.pricingMethod"}},[a("el-radio",{attrs:{label:"评估作价"}})],1)],1),a("div",{staticClass:"cell_8_part_2_1_2"},[e._v("评估公司")]),a("div",{staticClass:"cell_8_part_2_1_3"},[e._v(" "+e._s(e.ruleForm.evaluationCompany)+" ")]),a("div",{staticClass:"cell_8_part_2_1_4"},[e._v("评估价格")]),a("div",{staticClass:"cell_8_part_2_1_5"},[e._v(" "+e._s(e.ruleForm.pricingMethodPrice_pinggu)+" "),"评估作价"==e.ruleForm.pricingMethod?a("span",[e._v(" 万元")]):e._e()])]),a("div",{staticClass:"cell_8_part_2_1 cell_8_part_2_2"},[a("div",{staticClass:"cell_8_part_2_2_1"},[a("el-radio-group",{attrs:{disabled:""},model:{value:e.ruleForm.pricingMethod,callback:function(t){e.$set(e.ruleForm,"pricingMethod",t)},expression:"ruleForm.pricingMethod"}},[a("el-radio",{attrs:{label:"协议定价"}})],1)],1),a("div",{staticClass:"cell_8_part_2_2_2"},[e._v("拟交易价格")]),a("div",{staticClass:"cell_8_part_2_2_3"},[e._v(" "+e._s(e.ruleForm.pricingMethodPrice_xieyi)+" "),"协议定价"==e.ruleForm.pricingMethod?a("span",[e._v(" 万元")]):e._e()])]),a("div",{staticClass:"cell_8_part_2_1 cell_8_part_2_2"},[a("div",{staticClass:"cell_8_part_2_2_1"},[a("el-radio-group",{attrs:{disabled:""},model:{value:e.ruleForm.pricingMethod,callback:function(t){e.$set(e.ruleForm,"pricingMethod",t)},expression:"ruleForm.pricingMethod"}},[a("el-radio",{attrs:{label:"挂牌交易"}})],1)],1),a("div",{staticClass:"cell_8_part_2_2_2"},[e._v("挂牌成交价格")]),a("div",{staticClass:"cell_8_part_2_2_3"},[e._v(" "+e._s(e.ruleForm.pricingMethodPrice_guapai)+" "),"挂牌交易"==e.ruleForm.pricingMethod?a("span",[e._v(" 万元")]):e._e()])]),a("div",{staticClass:"cell_8_part_2_1 cell_8_part_2_2"},[a("div",{staticClass:"cell_8_part_2_2_1"},[a("el-radio-group",{attrs:{disabled:""},model:{value:e.ruleForm.pricingMethod,callback:function(t){e.$set(e.ruleForm,"pricingMethod",t)},expression:"ruleForm.pricingMethod"}},[a("el-radio",{attrs:{label:"拍卖"}})],1)],1),a("div",{staticClass:"cell_8_part_2_2_2"},[e._v("拍卖价格")]),a("div",{staticClass:"cell_8_part_2_2_3"},[e._v(" "+e._s(e.ruleForm.pricingMethodPrice_paimai)+" "),"拍卖"==e.ruleForm.pricingMethod?a("span",[e._v(" 万元")]):e._e()])])])]),a("div",{staticClass:"cell_1"},[a("div",{staticClass:"cell_1_part_1"},[e._v("合同总价（万元）")]),a("div",{staticClass:"cell_1_part_2"},[e._v(e._s(e.ruleForm.patentPrice)+" 万元")])]),a("div",{staticClass:"cell_1 cell_5"},[a("div",{staticClass:"cell_1_part_1"},[e._v("资金去向")]),a("div",{staticClass:"cell_1_part_2 cell_5_part_2"},[e._v(" "+e._s(e.ruleForm.drawMoneyMethod)+" ")])]),"协议定价"==e.ruleForm.pricingMethod?a("div",{staticClass:"cell_1 cell_9"},[a("div",{staticClass:"cell_1_part_1 cell_9_part_1"},[e._v("协议定价价格形成过程")]),a("div",{staticClass:"cell_9_part_2"},[e._v(" "+e._s(e.ruleForm.formationProcess)+" "),"其他"==e.ruleForm.formationProcess?a("span",[e._v(" ："+e._s(e.ruleForm.additionalInstruction))]):e._e()])]):e._e(),e._m(0)]),"examing"==e.patent.type?a("div",{staticClass:"bottom_buttons"},[a("el-button",{on:{click:e.Pass}},[e._v("通 过")]),a("el-button",{on:{click:e.Failed}},[e._v("不通过")])],1):e._e()])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cell_1 cell_10"},[a("div",{staticClass:"cell_10_top"},[a("span",[e._v(" 成果完成人意见：")]),a("p",[e._v(" 团队负责人承诺，该专利转换已经经全体发明人同意，确认该项成果相关信息属实。该项成果转化对我校已签署的合同不会带来任何法律纠纷，对本研究组以后的技术研发、成果申报和推广应用不会产生任何不良影响。如存在关联关系，承诺与关联方的交易符合国家法律法规和学校各项管理规定，保证不从事不公正的关联交易，不损害国家和学校利益。 ")])]),a("div",{staticClass:"cell_10_bottom"},[e._v("年 月 日")])])}],i=(a("ac1f"),a("1276"),{data:function(){return{patent:this.$route.query,fullscreenLoading:!0,ruleForm:{fzyName:"",fzyDepartment:"",fzyPhone:"",fzyGh:"",transferMode:"",transfereeDelegate:"",transfereeName:"",transfereeDelegatePhone:"",associationRelationship:"",pricingMethod:"协议定价",pricingMethodPrice_pinggu:null,pricingMethodPrice_xieyi:null,pricingMethodPrice_guapai:null,pricingMethodPrice_paimai:null,pricingMethodPrice:null,evaluationCompany:"",formationProcess:"参考前期成本投入，与受让方协商形成",additionalInstruction:"",contractSigningDate:"",agency:"",agencyFee:"",patentPrice:0,drawMoneyMethod:"",transferApplicationFormId:""},patent_info:{zlmc:"",zlqr:"",zldyzzxm:"",pzrq:""}}},created:function(){var e=this,t=this;console.log(t.patent);var a="/application/getPatentInfoByWid?wid="+t.patent.wid;t.request(a,{},"GET",{}).then((function(a){console.log(a.data),"success"==a.data.status?(t.patent_info.zlmc=a.data.data.zlmc,t.patent_info.zlqr=a.data.data.zlqr,t.patent_info.zldyzzxm=a.data.data.zldyzzxm,t.patent_info.pzrq=a.data.data.pzrq):e.$message({message:a.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}));var r="/application/getTransferApplicationFormByWID?wid="+t.patent.wid;t.request(r,{},"GET",{}).then((function(a){if(console.log(a),"success"==a.data.status){switch(t.ruleForm.fzyName=a.data.data.fzyName,t.ruleForm.fzyDepartment=a.data.data.fzyDepartment,t.ruleForm.fzyPhone=a.data.data.fzyPhone,t.ruleForm.fzyGh=a.data.data.fzyGh,t.ruleForm.transferMode=a.data.data.transferMode,t.ruleForm.transfereeDelegate=a.data.data.transfereeDelegate,t.ruleForm.transfereeName=a.data.data.transfereeName,t.ruleForm.transfereeDelegatePhone=a.data.data.transfereeDelegatePhone,t.ruleForm.associationRelationship=a.data.data.associationRelationship,t.ruleForm.pricingMethod=a.data.data.pricingMethod,t.ruleForm.associationRelationship=a.data.data.associationRelationship,a.data.data.pricingMethod){case"评估作价":t.ruleForm.pricingMethodPrice_pinggu=a.data.data.pricingMethodPrice;break;case"协议定价":t.ruleForm.pricingMethodPrice_xieyi=a.data.data.pricingMethodPrice;break;case"挂牌交易":t.ruleForm.pricingMethodPrice_guapai=a.data.data.pricingMethodPrice;break;case"拍卖":t.ruleForm.pricingMethodPrice_paimai=a.data.data.pricingMethodPrice;break;default:break}if(t.ruleForm.evaluationCompany=a.data.data.evaluationCompany,t.ruleForm.formationProcess=a.data.data.formationProcess,t.ruleForm.additionalInstruction=a.data.data.additionalInstruction,t.ruleForm.contractSigningDate=t.TimeTransfer(a.data.data.contractSigningDate).split(" ")[0],"无"==a.data.data.agency)t.ruleForm.agency="";else switch(t.ruleForm.agency=a.data.data.agency,a.data.data.agencyFee){case 0:t.ruleForm.agencyFee="";break;case 1:t.ruleForm.agencyFee="1%";break;case 2:t.ruleForm.agencyFee="2%";break;case 3:t.ruleForm.agencyFee="3%";break;case 4:t.ruleForm.agencyFee="4%";break;case 5:t.ruleForm.agencyFee="5%";break;default:break}t.ruleForm.patentPrice=a.data.data.patentPrice,t.ruleForm.drawMoneyMethod=a.data.data.drawMoneyMethod,t.ruleForm.transferApplicationFormId=a.data.data.transferApplicationFormId,e.fullscreenLoading=!1}else e.$message({message:a.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))},methods:{TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,l=t.getDate(),i=t.getHours(),s=t.getMinutes(),n=t.getSeconds(),c=a+"-";return r<10&&(c+="0"),c+=r+"-",l<10&&(c+="0"),c+=l+" ",i<10&&(c+="0"),c+=i+":",s<10&&(c+="0"),c+=s+":",n<10&&(c+="0"),c+=n,c},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),l=(a-r)/1e3;parseInt(l/86400);return!0},Pass:function(){var e=this,t=this;this.$confirm("确认通过吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a="/process/approvalTransferApplication?transferApplicationFormId="+t.ruleForm.transferApplicationFormId;t.request(a,{},"GET",{}).then((function(t){console.log(t),"success"==t.data.status?(e.$message({type:"success",message:"已通过，正在跳转至审批表列表...."}),setTimeout((function(){e.$router.push({path:"/examing"})}),2e3)):e.$message({message:t.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))})).catch((function(){e.$message({type:"info",message:"取消输入"})}))},Failed:function(){var e=this,t=this;this.$prompt("请填写拒绝原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(a){if(console.log(a.value),null==a.value||""==a.value)e.$message({type:"warning",message:"拒绝原因不能为空！"});else{var r="/process/notApprovalTransferApplication?remarks="+a.value+"&transferApplicationFormId="+t.ruleForm.transferApplicationFormId;t.request(r,{},"GET",{}).then((function(t){console.log(t.data),"success"==t.data.status?(e.$message({type:"success",message:"已拒绝，正在跳转至审批表列表...."}),setTimeout((function(){e.$router.push({path:"/examing"})}),2e3)):e.$message({message:t.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))}})).catch((function(t){console.log(t),e.$message({type:"info",message:"已取消！"})}))}}}),s=i,n=(a("b1ef"),a("2877")),c=Object(n["a"])(s,r,l,!1,null,null,null);t["default"]=c.exports},"8aa5":function(e,t,a){"use strict";var r=a("6547").charAt;e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},9263:function(e,t,a){"use strict";var r=a("ad6d"),l=a("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,n=i,c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),o=l.UNSUPPORTED_Y||l.BROKEN_CARET,_=void 0!==/()??/.exec("")[1],d=c||_||o;d&&(n=function(e){var t,a,l,n,d=this,u=o&&d.sticky,p=r.call(d),v=d.source,g=0,f=e;return u&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),f=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(v="(?: "+v+")",f=" "+f,g++),a=new RegExp("^(?:"+v+")",p)),_&&(a=new RegExp("^"+v+"$(?!\\s)",p)),c&&(t=d.lastIndex),l=i.call(u?a:d,f),u?l?(l.input=l.input.slice(g),l[0]=l[0].slice(g),l.index=d.lastIndex,d.lastIndex+=l[0].length):d.lastIndex=0:c&&l&&(d.lastIndex=d.global?l.index+l[0].length:t),_&&l&&l.length>1&&s.call(l[0],a,(function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(l[n]=void 0)})),l}),e.exports=n},"9f7f":function(e,t,a){"use strict";var r=a("d039");function l(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=l("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=l("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var r=a("23e7"),l=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(e,t,a){"use strict";var r=a("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b1ef:function(e,t,a){"use strict";a("5033")},d784:function(e,t,a){"use strict";a("ac1f");var r=a("6eeb"),l=a("d039"),i=a("b622"),s=a("9263"),n=a("9112"),c=i("species"),o=!l((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),_=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),u=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!l((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,d){var v=i(e),g=!l((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),f=g&&!l((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[v]=/./[v]),a.exec=function(){return t=!0,null},a[v](""),!t}));if(!g||!f||"replace"===e&&(!o||!_||u)||"split"===e&&!p){var m=/./[v],h=a(v,""[e],(function(e,t,a,r,l){return t.exec===s?g&&!l?{done:!0,value:m.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:_,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:u}),F=h[0],C=h[1];r(String.prototype,e,F),r(RegExp.prototype,v,2==t?function(e,t){return C.call(e,this,t)}:function(e){return C.call(e,this)})}d&&n(RegExp.prototype[v],"sham",!0)}}}]);