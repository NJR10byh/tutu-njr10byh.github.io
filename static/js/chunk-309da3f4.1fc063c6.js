(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-309da3f4"],{1276:function(e,t,a){"use strict";var r=a("d784"),l=a("44e7"),i=a("825a"),s=a("1d80"),o=a("4840"),n=a("8aa5"),c=a("50c4"),p=a("14c3"),u=a("9263"),d=a("d039"),m=[].push,_=Math.min,f=4294967295,h=!d((function(){return!RegExp(f,"y")}));r("split",2,(function(e,t,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var r=String(s(this)),i=void 0===a?f:a>>>0;if(0===i)return[];if(void 0===e)return[r];if(!l(e))return t.call(r,e,i);var o,n,c,p=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),_=0,h=new RegExp(e.source,d+"g");while(o=u.call(h,r)){if(n=h.lastIndex,n>_&&(p.push(r.slice(_,o.index)),o.length>1&&o.index<r.length&&m.apply(p,o.slice(1)),c=o[0].length,_=n,p.length>=i))break;h.lastIndex===o.index&&h.lastIndex++}return _===r.length?!c&&h.test("")||p.push(""):p.push(r.slice(_)),p.length>i?p.slice(0,i):p}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var l=s(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,l,a):r.call(String(l),t,a)},function(e,l){var s=a(r,e,this,l,r!==t);if(s.done)return s.value;var u=i(e),d=String(this),m=o(u,RegExp),g=u.unicode,y=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(h?"y":"g"),v=new m(h?u:"^(?:"+u.source+")",y),b=void 0===l?f:l>>>0;if(0===b)return[];if(0===d.length)return null===p(v,d)?[d]:[];var F=0,w=0,C=[];while(w<d.length){v.lastIndex=h?w:0;var x,D=p(v,h?d:d.slice(w));if(null===D||(x=_(c(v.lastIndex+(h?0:w)),d.length))===F)w=n(d,w,g);else{if(C.push(d.slice(F,w)),C.length===b)return C;for(var z=1;z<=D.length-1;z++)if(C.push(D[z]),C.length===b)return C;w=F=x}}return C.push(d.slice(F)),C}]}),!h)},"14c3":function(e,t,a){var r=a("c6b6"),l=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var i=a.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return l.call(e,t)}},"194a":function(e,t,a){},"1e4b":function(e,t,a){"use strict";a("194a")},"8aa5":function(e,t,a){"use strict";var r=a("6547").charAt;e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},9263:function(e,t,a){"use strict";var r=a("ad6d"),l=a("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,o=i,n=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=l.UNSUPPORTED_Y||l.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],u=n||p||c;u&&(o=function(e){var t,a,l,o,u=this,d=c&&u.sticky,m=r.call(u),_=u.source,f=0,h=e;return d&&(m=m.replace("y",""),-1===m.indexOf("g")&&(m+="g"),h=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(_="(?: "+_+")",h=" "+h,f++),a=new RegExp("^(?:"+_+")",m)),p&&(a=new RegExp("^"+_+"$(?!\\s)",m)),n&&(t=u.lastIndex),l=i.call(d?a:u,h),d?l?(l.input=l.input.slice(f),l[0]=l[0].slice(f),l.index=u.lastIndex,u.lastIndex+=l[0].length):u.lastIndex=0:n&&l&&(u.lastIndex=u.global?l.index+l[0].length:t),p&&l&&l.length>1&&s.call(l[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(l[o]=void 0)})),l}),e.exports=o},"9f7f":function(e,t,a){"use strict";var r=a("d039");function l(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=l("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=l("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,a){"use strict";var r=a("23e7"),l=a("23cb"),i=a("a691"),s=a("50c4"),o=a("7b0b"),n=a("65f0"),c=a("8418"),p=a("1dde"),u=a("ae40"),d=p("splice"),m=u("splice",{ACCESSORS:!0,0:0,1:2}),_=Math.max,f=Math.min,h=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!m},{splice:function(e,t){var a,r,p,u,d,m,y=o(this),v=s(y.length),b=l(e,v),F=arguments.length;if(0===F?a=r=0:1===F?(a=0,r=v-b):(a=F-2,r=f(_(i(t),0),v-b)),v+a-r>h)throw TypeError(g);for(p=n(y,r),u=0;u<r;u++)d=b+u,d in y&&c(p,u,y[d]);if(p.length=r,a<r){for(u=b;u<v-r;u++)d=u+r,m=u+a,d in y?y[m]=y[d]:delete y[m];for(u=v;u>v-r+a;u--)delete y[u-1]}else if(a>r)for(u=v-r;u>b;u--)d=u+r-1,m=u+a-1,d in y?y[m]=y[d]:delete y[m];for(u=0;u<a;u++)y[u+b]=arguments[u+2];return y.length=v-r+a,p}})},ac1f:function(e,t,a){"use strict";var r=a("23e7"),l=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(e,t,a){"use strict";var r=a("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c9a5:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filling_application_Container"},[a("div",{staticClass:"application_title"},[e._v(" 南京邮电大学科技成果转化审批表（许可和转让） ")]),a("div",{staticClass:"application_table"},[a("el-form",{ref:"applicationForm",attrs:{model:e.ruleForm,rules:e.formRules}},[a("div",{staticClass:"cell_1"},[a("div",{staticClass:"cell_1_part_1"},[e._v("成果名称")]),a("div",{staticClass:"cell_1_part_2 cell_part_display"},[e._v(" "+e._s(e.patent_info.zlmc)+" ")])]),a("div",{staticClass:"cell_2"},[a("div",{staticClass:"cell_2_part_1 cell_part_display"},[e._v("所有权人")]),a("div",{staticClass:"cell_2_part_2 cell_part_display"},[e._v(" "+e._s(e.patent_info.zlqr)+" ")]),a("div",{staticClass:"cell_2_part_3 cell_part_display"},[e._v("专利证书编号")]),a("div",{staticClass:"cell_2_part_4 cell_part_display"},[a("el-form-item",{attrs:{prop:"certificateNumber"}},[a("el-input",{attrs:{type:"text",placeholder:"专利证书编号"},model:{value:e.ruleForm.certificateNumber,callback:function(t){e.$set(e.ruleForm,"certificateNumber",t)},expression:"ruleForm.certificateNumber"}})],1)],1)]),a("div",{staticClass:"cell_3"},[a("div",{staticClass:"cell_3_part_1"},[e._v("成果完成人")]),a("div",{staticClass:"cell_3_part_2 cell_part_display"},[e._v(" "+e._s(e.ruleForm.fzyName)+" ")]),a("div",{staticClass:"cell_3_part_3 cell_part_display"},[e._v("中介")]),a("div",{staticClass:"cell_3_part_4 cell_part_display"},[a("el-form-item",[a("el-input",{attrs:{type:"text",placeholder:"中介名称"},model:{value:e.ruleForm.agency,callback:function(t){e.$set(e.ruleForm,"agency",t)},expression:"ruleForm.agency"}})],1)],1)]),a("div",{staticClass:"cell_4"},[a("div",{staticClass:"cell_4_part_1"},[e._v("团队负责人")]),a("div",{staticClass:"cell_4_part_2 cell_part_display"},[e._v(" "+e._s(e.ruleForm.fzyName)+" ")]),a("div",{staticClass:"cell_4_part_3 cell_part_display"},[e._v("所在单位")]),a("div",{staticClass:"cell_4_part_4 cell_part_display"},[e._v(" "+e._s(e.ruleForm.fzyDepartment)+" ")]),a("div",{staticClass:"cell_4_part_5 cell_part_display"},[e._v("联系电话")]),a("div",{staticClass:"cell_4_part_6 cell_part_display"},[a("el-form-item",{attrs:{prop:"fzyPhone"}},[a("el-input",{attrs:{type:"text",placeholder:"团队负责人联系电话"},model:{value:e.ruleForm.fzyPhone,callback:function(t){e.$set(e.ruleForm,"fzyPhone",t)},expression:"ruleForm.fzyPhone"}})],1)],1)]),a("div",{staticClass:"cell_5"},[a("div",{staticClass:"cell_5_part_1"},[e._v("转化方式")]),a("div",{staticClass:"cell_5_part_2 cell_part_display"},[a("el-form-item",{attrs:{prop:"contractType"}},[a("el-radio-group",{model:{value:e.ruleForm.contractType,callback:function(t){e.$set(e.ruleForm,"contractType",t)},expression:"ruleForm.contractType"}},[a("el-radio",{attrs:{label:"专利实施许可转让"}},[e._v("普通实施许可")]),a("el-radio",{attrs:{label:"排他许可"}}),a("el-radio",{attrs:{label:"独占许可"}}),a("el-radio",{attrs:{label:"专利权转让"}},[e._v("转让")])],1)],1)],1)]),a("div",{staticClass:"cell_6"},[a("div",{staticClass:"cell_6_part_1"},[e._v("受让方负责人")]),a("div",{staticClass:"cell_6_part_2 cell_part_display"},[a("el-form-item",{attrs:{prop:"transfereeDelegate"}},[a("el-input",{attrs:{type:"text",placeholder:"受让方负责人"},model:{value:e.ruleForm.transfereeDelegate,callback:function(t){e.$set(e.ruleForm,"transfereeDelegate",t)},expression:"ruleForm.transfereeDelegate"}})],1)],1),a("div",{staticClass:"cell_4_part_3 cell_part_display"},[e._v("单位名称")]),a("div",{staticClass:"cell_4_part_4 cell_part_display"},[a("el-form-item",{attrs:{prop:"transfereeName"}},[a("el-autocomplete",{attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"受让方单位"},on:{select:e.selectDepartment},model:{value:e.ruleForm.transfereeName,callback:function(t){e.$set(e.ruleForm,"transfereeName",t)},expression:"ruleForm.transfereeName"}})],1)],1),a("div",{staticClass:"cell_4_part_5 cell_part_display"},[e._v("联系电话")]),a("div",{staticClass:"cell_4_part_6 cell_part_display"},[a("el-form-item",{attrs:{prop:"transfereeDelegatePhone"}},[a("el-input",{attrs:{type:"number",placeholder:"受让方联系电话"},model:{value:e.ruleForm.transfereeDelegatePhone,callback:function(t){e.$set(e.ruleForm,"transfereeDelegatePhone",t)},expression:"ruleForm.transfereeDelegatePhone"}})],1)],1)]),a("div",{staticClass:"cell_7"},[a("div",{staticClass:"cell_7_part_1"},[e._v("是否存在关联关系说明")]),a("div",{staticClass:"cell_7_part_2"},[a("div",{staticClass:"cell_7_part_2_top"},[a("el-form-item",{attrs:{prop:"associationRelationship"}},[a("el-radio-group",{on:{change:e.relation},model:{value:e.ruleForm.associationRelationship,callback:function(t){e.$set(e.ruleForm,"associationRelationship",t)},expression:"ruleForm.associationRelationship"}},[a("el-radio",{attrs:{label:0}},[e._v("无关联关系")])],1)],1)],1),a("div",{staticClass:"cell_7_part_2_bottom"},[a("el-form-item",{attrs:{prop:"associationRelationship"}},[a("el-radio-group",{on:{change:e.relation},model:{value:e.ruleForm.associationRelationship,callback:function(t){e.$set(e.ruleForm,"associationRelationship",t)},expression:"ruleForm.associationRelationship"}},[a("el-radio",{attrs:{label:1}},[e._v(" 与受让方的自然人有亲属关系（包括配偶关系、直系血亲关系、三代以内旁系血亲关系或者姻亲关系） ")]),a("br"),a("el-radio",{attrs:{label:2}},[e._v(" 本人或亲属在受让方任职或兼职")]),a("br"),a("el-radio",{attrs:{label:3}},[e._v(" 本人或亲属（直接或间接、单独或联合）在受让方持有股份，未控股 ")]),a("br"),a("el-radio",{attrs:{label:4}},[e._v(" 本人或亲属（直接或间接、单独或联合）在受让方持有股份，并控股 ")]),a("br"),a("el-radio",{attrs:{label:5}},[e._v(" 本人或亲属通过协议等形式对受让方实施控制或施加重大影响 ")]),a("br"),a("el-radio",{attrs:{label:6}},[e._v(" 其他可能影响交易公正性的关系")])],1)],1)],1)])]),a("div",{staticClass:"cell_8"},[a("div",{staticClass:"cell_8_part_1"},[e._v("定价方式")]),a("div",{staticClass:"cell_8_part_2 cell_part_display"},[a("el-form-item",{attrs:{prop:"pricingMethod"}},[a("el-radio-group",{on:{change:e.pricing_method},model:{value:e.ruleForm.pricingMethod,callback:function(t){e.$set(e.ruleForm,"pricingMethod",t)},expression:"ruleForm.pricingMethod"}},[a("el-radio",{attrs:{label:"评估作价",disabled:null==e.ruleForm.associationRelationship}}),a("el-radio",{attrs:{label:"协议定价",disabled:0!=e.ruleForm.associationRelationship}}),a("el-radio",{attrs:{label:"挂牌交易",disabled:0!=e.ruleForm.associationRelationship}}),a("el-radio",{attrs:{label:"拍卖",disabled:0!=e.ruleForm.associationRelationship}})],1)],1)],1),"评估作价"==e.ruleForm.pricingMethod?a("div",{staticClass:"cell_8_part_3 cell_part_display"},[e._v(" 评估公司 ")]):e._e(),"评估作价"==e.ruleForm.pricingMethod?a("div",{staticClass:"cell_8_part_4 cell_part_display"},[a("el-form-item",{attrs:{prop:"evaluationCompany"}},[a("el-input",{attrs:{type:"text",placeholder:"评估公司",disabled:"评估作价"!=e.ruleForm.pricingMethod},model:{value:e.ruleForm.evaluationCompany,callback:function(t){e.$set(e.ruleForm,"evaluationCompany",t)},expression:"ruleForm.evaluationCompany"}})],1)],1):e._e()]),a("div",{staticClass:"cell_9"},[a("div",{staticClass:"cell_9_part_1"},[e._v("价格（万元）")]),a("div",{staticClass:"cell_9_part_2 cell_part_display"},[a("el-form-item",{attrs:{prop:"patentPrice"}},[a("el-input",{attrs:{type:"number",placeholder:"请填写价格（单位：万元）"},model:{value:e.ruleForm.patentPrice,callback:function(t){e.$set(e.ruleForm,"patentPrice",t)},expression:"ruleForm.patentPrice"}})],1)],1),a("div",{staticClass:"cell_9_part_3 cell_part_display"},[e._v("收益分配方式")]),a("div",{staticClass:"cell_9_part_4 cell_part_display"},[a("el-form-item",{attrs:{prop:"drawMoneyMethod"}},[a("el-radio-group",{model:{value:e.ruleForm.drawMoneyMethod,callback:function(t){e.$set(e.ruleForm,"drawMoneyMethod",t)},expression:"ruleForm.drawMoneyMethod"}},[a("el-radio",{attrs:{label:"横向科研发展基金"}}),a("el-radio",{attrs:{label:"现金奖励（暂不填写）"}}),a("el-radio",{attrs:{label:"现金奖励"}})],1)],1)],1)]),"现金奖励"==e.ruleForm.drawMoneyMethod?a("div",{staticClass:"cell_9_expand"},[a("div",{staticClass:"cell_9_1"},[a("p",[e._v("奖励人员信息")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addPerson}},[e._v("添加数据")])],1),"现金奖励"==e.ruleForm.drawMoneyMethod?a("div",{staticClass:"cell_9_2"},[a("el-table",{staticClass:"money_table",attrs:{data:e.money_tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"index",label:"序号",width:"55"}}),a("el-table-column",{attrs:{label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入姓名",loading:e.selectname_loading},model:{value:t.row.recipientName,callback:function(a){e.$set(t.row,"recipientName",a)},expression:"scope.row.recipientName"}},e._l(e.name_options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}],null,!1,3933190586)}),a("el-table-column",{attrs:{label:"工号"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"工号"},model:{value:t.row.recipientGh,callback:function(a){e.$set(t.row,"recipientGh",a)},expression:"scope.row.recipientGh"}})]}}],null,!1,212131782)}),a("el-table-column",{attrs:{label:"单位"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"单位"},model:{value:t.row.recipientDepartment,callback:function(a){e.$set(t.row,"recipientDepartment",a)},expression:"scope.row.recipientDepartment"}})]}}],null,!1,3443861127)}),a("el-table-column",{attrs:{label:"身份证号",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form-item",{attrs:{prop:"idCard"}},[a("el-input",{attrs:{placeholder:"身份证号"},model:{value:t.row.idCard,callback:function(a){e.$set(t.row,"idCard",a)},expression:"scope.row.idCard"}})],1)]}}],null,!1,1497278577)}),a("el-table-column",{attrs:{label:"分配金额(万元)"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{type:"number",placeholder:"分配金额(万元)"},model:{value:t.row.amount,callback:function(a){e.$set(t.row,"amount",a)},expression:"scope.row.amount"}})]}}],null,!1,1521921059)}),a("el-table-column",{attrs:{label:"操作",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(a){return e.deletePerson(t.$index)}}},[a("i",{staticClass:"el-icon-delete",attrs:{"aria-hidden":"true"}})])]}}],null,!1,1157551202)})],1)],1):e._e()]):e._e(),a("div",{staticClass:"cell_10"},[a("div",{staticClass:"cell_10_top"},[a("span",[e._v(" 成果完成人意见：")]),a("p",[e._v(" 团队负责人承诺，该专利转换 "),a("b",[a("i",[e._v("已经经全体发明人同意")])]),e._v(" ， 确认该项成果相关信息属实。该项成果转化对我校已签署的合同不会带来任何法律纠纷，对本研究组以后的技术研发、成果申报和推广应用不会产生任何不良影响。如存在关联关系，承诺与关联方的交易符合国家法律法规和学校各项管理规定，保证不从事不公正的关联交易，不损害国家和学校利益。 ")])])])])],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{on:{click:e.back}},[e._v("返回")]),"filling"==e.patent.type?a("el-button",{attrs:{type:"primary"},on:{click:e.save_Form}},[e._v(" 保存审批 ")]):e._e(),"fix"==e.patent.type?a("el-button",{attrs:{type:"primary"},on:{click:e.resave}},[e._v(" 保存审批 ")]):e._e(),"filling"==e.patent.type?a("el-button",{attrs:{type:"success",disabled:e.submitDisabled},on:{click:function(t){return e.submitForm("applicationForm")}}},[e._v(" 提交审批 ")]):e._e()],1)])},l=[],i=(a("ac1f"),a("1276"),a("a434"),a("61f7")),s={data:function(){return{patent:this.$route.query,ruleForm:{fzyName:this.$store.state.signed_username,fzyDepartment:this.$store.state.signed_department,fzyPhone:"3213213",fzyGh:this.$store.state.signed_id,certificateNumber:"00000001",contractType:"专利权转让",transfereeDelegate:"负责人",transfereeName:"南京xx公司",transfereeDelegatePhone:"19805180000",associationRelationship:2,pricingMethod:"协议定价",evaluationCompany:"评估公司",agency:"中介",patentPrice:12,drawMoneyMethod:"",distributionList:[]},formRules:{certificateNumber:[{required:!0,message:"请填写专利证书编号",trigger:"blur"}],fzyPhone:[{required:!0,validator:i["d"],trigger:"blur"}],contractType:[{required:!0,message:"请选择转化方式",trigger:"change"}],transfereeDelegate:[{required:!0,message:"请填写受让方负责人",trigger:"blur"}],transfereeName:[{required:!0,message:"请填写受让方单位",trigger:"blur"}],transfereeDelegatePhone:[{required:!0,validator:i["d"],trigger:"blur"}],associationRelationship:[{required:!0,message:"请选择关联关系说明",trigger:"change"}],pricingMethod:[{required:!0,message:"请选择定价方式",trigger:"change"}],patentPrice:[{required:!0,validator:i["f"],trigger:"blur"}],drawMoneyMethod:[{required:!0,message:"请选择收益分配方式",trigger:"change"}],idCard:[{required:!0,validator:i["c"],trigger:"blur"}]},departmantOptions:[],name_options:[],selectname_loading:!1,gh_options:[],patent_info:{zlmc:"",zlqr:"",zldyzzxm:"",pzrq:""},money_tableData:[],willpost_save:{fzyName:"",fzyDepartment:"",fzyPhone:"",fzyGh:"",certificateNumber:"",contractType:"",transfereeDelegate:"",transfereeName:"",transfereeDelegatePhone:"",associationRelationship:null,pricingMethod:"协议定价",evaluationCompany:"",agency:"",patentPrice:0,drawMoneyMethod:"",distributionList:[]},willpost_submit:{fzyName:"",fzyDepartment:"",fzyPhone:"",fzyGh:"",certificateNumber:"",contractType:"",transfereeDelegate:"",transfereeName:"",transfereeDelegatePhone:"",associationRelationship:null,pricingMethod:"协议定价",evaluationCompany:"",agency:"",patentPrice:0,drawMoneyMethod:"",distributionList:[],wid:"",transferApplicationFormId:null,processCreatorName:this.$store.state.signed_username,processCreatorGh:this.$store.state.signed_id,processCreatorDepartment:this.$store.state.signed_department},willpost_resave:{fzyName:"",fzyDepartment:"",fzyPhone:"",fzyGh:"",certificateNumber:"",contractType:"",transfereeDelegate:"",transfereeName:"",transfereeDelegatePhone:"",associationRelationship:null,pricingMethod:"协议定价",evaluationCompany:"",agency:"",patentPrice:0,drawMoneyMethod:"",distributionList:[]},submitDisabled:!1}},created:function(){var e=this,t=this;console.log(t.patent),console.log(this.$store.state);var a="/application/getPatentInfoByWid?wid="+t.patent.wid;t.request(a,{},"GET",{}).then((function(a){if(console.log(a.data),"success"==a.data.status){t.patent_info.zlmc=a.data.data.zlmc,t.patent_info.zlqr=a.data.data.zlqr,t.patent_info.zldyzzxm=a.data.data.zldyzzxm,t.patent_info.pzrq=a.data.data.pzrq,console.log(a.data.data.cymd.split(","));for(var r=0;r<a.data.data.cymd.split(",").length;r++){var l={};l.value=a.data.data.cymd.split(",")[r],l.label=a.data.data.cymd.split(",")[r],t.name_options.push(l)}for(var i=0;i<a.data.data.cygh.split(",").length;i++)t.gh_options.push(a.data.data.cygh.split(",")[i])}else"数据不存在"!=a.data.data.errMsg&&e.$message({message:a.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}));var r="";"filling"==t.patent.type?r="/application/getTransferApplicationFormSaveByWID?wid="+t.patent.wid:"fix"==t.patent.type&&(r="/application/getTransferApplicationFormByWID?wid="+t.patent.wid),t.request(r,{},"GET",{}).then((function(a){if(console.log(a.data),"success"==a.data.status){if(null!=a.data.data){if(t.ruleForm.fzyName=a.data.data.fzyName,t.ruleForm.fzyDepartment=a.data.data.fzyDepartment,t.ruleForm.fzyPhone=a.data.data.fzyPhone,t.ruleForm.fzyGh=a.data.data.fzyGh,t.ruleForm.certificateNumber=a.data.data.certificateNumber,t.ruleForm.contractType=a.data.data.contractType,t.ruleForm.transfereeDelegate=a.data.data.transfereeDelegate,t.ruleForm.transfereeName=a.data.data.transfereeName,t.ruleForm.transfereeDelegatePhone=a.data.data.transfereeDelegatePhone,t.ruleForm.associationRelationship=a.data.data.associationRelationship,t.ruleForm.pricingMethod=a.data.data.pricingMethod,t.ruleForm.associationRelationship=a.data.data.associationRelationship,t.ruleForm.evaluationCompany=a.data.data.evaluationCompany,t.ruleForm.agency="无"==a.data.data.agency?"":a.data.data.agency,t.ruleForm.patentPrice=a.data.data.patentPrice,t.ruleForm.drawMoneyMethod=a.data.data.drawMoneyMethod,"现金奖励"==a.data.data.drawMoneyMethod&&0!=a.data.data.distributionList)for(var r=0;r<a.data.data.distributionList.length;r++){var l={};l.index=r+1,l.amount=a.data.data.distributionList[r].amount,l.idCard=a.data.data.distributionList[r].idCard,l.recipientDepartment=a.data.data.distributionList[r].recipientDepartment,l.recipientGh=a.data.data.distributionList[r].recipientGh,l.recipientName=a.data.data.distributionList[r].recipientName,t.money_tableData.push(l)}t.willpost_resave.transferApplicationFormId=a.data.data.transferApplicationFormId,t.willpost_submit.transferApplicationFormId=a.data.data.transferApplicationFormId}}else"文件未找到"!=a.data.data.errMsg&&e.$message({message:a.data.data.errMsg,type:"warning"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))},methods:{querySearchAsync:function(e,t){var a=this,r=this;r.departmantOptions=[];var l="/company/searchCompanyByName?companyName="+e;r.request(l,{},"GET",{}).then((function(l){if(console.log(l.data),l.data.status="success")if(0==l.data.data.length)a.ruleForm.transfereeName=e,a.ruleForm.transfereeDelegate="",a.ruleForm.transfereeDelegatePhone="";else{for(var i=0;i<l.data.data.length;i++){var s={};s.value=l.data.data[i].companyName,s.companyContactPerson=l.data.data[i].companyContactPerson,s.companyContactPhone=l.data.data[i].companyContactPhone,r.departmantOptions.push(s)}t(r.departmantOptions)}else a.$message({message:l.data.data.errMsg,type:"warning"})})).catch((function(e){console.log(e),a.$message({message:"出错了！",type:"error"})}))},selectDepartment:function(e){console.log(e),this.ruleForm.transfereeName=e.value,this.ruleForm.transfereeDelegate=e.companyContactPerson,this.ruleForm.transfereeDelegatePhone=e.companyContactPhone},relation:function(e){console.log(e),0!=e?this.ruleForm.pricingMethod="评估作价":(this.ruleForm.pricingMethod="协议定价",this.ruleForm.evaluationCompany="")},pricing_method:function(){this.ruleForm.evaluationCompany=""},addPerson:function(){this.money_tableData.push({index:this.money_tableData.length+1})},deletePerson:function(e){console.log(e),console.log(this.money_tableData.length),this.money_tableData.splice(e,1);for(var t=e;t<this.money_tableData.length;t++)this.money_tableData[t].index--},back:function(){this.$router.push({path:"/patents"})},resave:function(){var e=this,t=this;t.willpost_resave.fzyName=t.ruleForm.fzyName,t.willpost_resave.fzyDepartment=t.ruleForm.fzyDepartment,t.willpost_resave.fzyPhone=t.ruleForm.fzyPhone,t.willpost_resave.fzyGh=t.ruleForm.fzyGh,t.willpost_resave.certificateNumber=t.ruleForm.certificateNumber,t.willpost_resave.contractType=t.ruleForm.contractType,t.willpost_resave.transfereeDelegate=t.ruleForm.transfereeDelegate,t.willpost_resave.transfereeName=t.ruleForm.transfereeName,t.willpost_resave.transfereeDelegatePhone=t.ruleForm.transfereeDelegatePhone,t.willpost_resave.associationRelationship=t.ruleForm.associationRelationship,t.willpost_resave.pricingMethod=t.ruleForm.pricingMethod,t.willpost_resave.evaluationCompany=t.ruleForm.evaluationCompany,t.willpost_resave.agency=""!=t.ruleForm.agency?t.ruleForm.agency:"无",t.willpost_resave.patentPrice=parseInt(t.ruleForm.patentPrice),t.willpost_resave.drawMoneyMethod=t.ruleForm.drawMoneyMethod,t.willpost_resave.distributionList=t.money_tableData,t.willpost_resave.wid=t.patent.wid,console.log(t.willpost_resave),t.request("/application/updateTransferApplicationForm",t.willpost_resave,"POST",{}).then((function(t){console.log(t),"success"==t.data.status?(e.$message({type:"success",message:"保存成功，即将跳转至专利列表！"}),setTimeout((function(){e.$router.push({path:"/patents"})}),1200)):e.$message({type:"error",message:t.data.data.errMsg})})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}))},save_Form:function(){var e=this,t=this;console.log(t.ruleForm),console.log(t.money_tableData),t.willpost_save.fzyName=t.ruleForm.fzyName,t.willpost_save.fzyDepartment=t.ruleForm.fzyDepartment,t.willpost_save.fzyPhone=t.ruleForm.fzyPhone,t.willpost_save.fzyGh=t.ruleForm.fzyGh,t.willpost_save.certificateNumber=t.ruleForm.certificateNumber,t.willpost_save.contractType=t.ruleForm.contractType,t.willpost_save.transfereeDelegate=t.ruleForm.transfereeDelegate,t.willpost_save.transfereeName=t.ruleForm.transfereeName,t.willpost_save.transfereeDelegatePhone=t.ruleForm.transfereeDelegatePhone,t.willpost_save.associationRelationship=t.ruleForm.associationRelationship,t.willpost_save.pricingMethod=t.ruleForm.pricingMethod,t.willpost_save.evaluationCompany=t.ruleForm.evaluationCompany,t.willpost_save.agency=""!=t.ruleForm.agency?t.ruleForm.agency:"无",t.willpost_save.patentPrice=parseInt(t.ruleForm.patentPrice),t.willpost_save.drawMoneyMethod=t.ruleForm.drawMoneyMethod,t.willpost_save.distributionList=t.money_tableData,t.willpost_save.wid=t.patent.wid,console.log(t.willpost_save),t.request("/application/saveTransferApplicationForm",t.willpost_save,"POST",{}).then((function(t){console.log(t),"success"==t.data.status?(e.$message({type:"success",message:"保存成功，即将跳转至专利列表！"}),setTimeout((function(){e.$router.push({path:"/patents"})}),1200)):e.$message({type:"error",message:t.data.data.errMsg})})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}))},submitForm:function(e){var t=this,a=this;console.log(a.money_tableData),this.$refs[e].validate((function(e){if(e){a.willpost_submit.fzyName=a.ruleForm.fzyName,a.willpost_submit.fzyDepartment=a.ruleForm.fzyDepartment,a.willpost_submit.fzyPhone=a.ruleForm.fzyPhone,a.willpost_submit.fzyGh=a.ruleForm.fzyGh,a.willpost_submit.certificateNumber=a.ruleForm.certificateNumber,a.willpost_submit.contractType=a.ruleForm.contractType,a.willpost_submit.transfereeDelegate=a.ruleForm.transfereeDelegate,a.willpost_submit.transfereeName=a.ruleForm.transfereeName,a.willpost_submit.transfereeDelegatePhone=a.ruleForm.transfereeDelegatePhone,a.willpost_submit.associationRelationship=a.ruleForm.associationRelationship,a.willpost_submit.pricingMethod=a.ruleForm.pricingMethod,a.willpost_submit.evaluationCompany=a.ruleForm.evaluationCompany,a.willpost_submit.agency=""!=a.ruleForm.agency?a.ruleForm.agency:"无",a.willpost_submit.patentPrice=parseInt(a.ruleForm.patentPrice),a.willpost_submit.drawMoneyMethod=a.ruleForm.drawMoneyMethod;for(var r=0;r<a.money_tableData.length;r++){var l={};l.amount=a.money_tableData[r].amount,l.idCard=a.money_tableData[r].idCard,l.recipientDepartment=a.money_tableData[r].recipientDepartment,l.recipientGh=a.money_tableData[r].recipientGh,l.recipientName=a.money_tableData[r].recipientName,a.ruleForm.distributionList.push(l)}a.willpost_submit.distributionList=a.ruleForm.distributionList,a.willpost_submit.wid=a.patent.wid,console.log(a.willpost_submit),t.$confirm("确认提交吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.request("/application/submitTransferApplicationForm",a.willpost_submit,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(a.submitDisabled=!0,t.$message({type:"success",message:"提交成功，即将跳转至专利列表！"}),setTimeout((function(){t.$router.push({path:"/patents"})}),1200)):t.$message({type:"error",message:e.data.data.errMsg})})).catch((function(e){console.log(e),t.$message({type:"error",message:"出错了！"})}))})).catch((function(){t.$message({type:"info",message:"已取消！"})}))}else console.log("error submit!!")}))}}},o=s,n=(a("1e4b"),a("2877")),c=Object(n["a"])(o,r,l,!1,null,null,null);t["default"]=c.exports},d784:function(e,t,a){"use strict";a("ac1f");var r=a("6eeb"),l=a("d039"),i=a("b622"),s=a("9263"),o=a("9112"),n=i("species"),c=!l((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),p=function(){return"$0"==="a".replace(/./,"$0")}(),u=i("replace"),d=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),m=!l((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,u){var _=i(e),f=!l((function(){var t={};return t[_]=function(){return 7},7!=""[e](t)})),h=f&&!l((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[n]=function(){return a},a.flags="",a[_]=/./[_]),a.exec=function(){return t=!0,null},a[_](""),!t}));if(!f||!h||"replace"===e&&(!c||!p||d)||"split"===e&&!m){var g=/./[_],y=a(_,""[e],(function(e,t,a,r,l){return t.exec===s?f&&!l?{done:!0,value:g.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),v=y[0],b=y[1];r(String.prototype,e,v),r(RegExp.prototype,_,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}u&&o(RegExp.prototype[_],"sham",!0)}}}]);