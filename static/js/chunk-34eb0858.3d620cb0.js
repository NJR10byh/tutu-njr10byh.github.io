(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34eb0858"],{1148:function(e,t,a){"use strict";var r=a("a691"),l=a("1d80");e.exports="".repeat||function(e){var t=String(l(this)),a="",i=r(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(a+=t);return a}},1998:function(e,t,a){e.exports=a.p+"static/img/comments.dd60f7d0.png"},"408a":function(e,t,a){var r=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},5033:function(e,t,a){},"81ed":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"patent_detail_pc_Container"},[1==e.state?r("el-steps",{staticClass:"steps",attrs:{active:e.step,"finish-status":"success"}},[r("el-step",{attrs:{title:"等待所属单位审批",description:""}}),r("el-step",{attrs:{title:"等待产学研审批",description:""}}),r("el-step",{attrs:{title:"等待公示",description:""}}),r("el-step",{attrs:{title:"正在公示中",description:""}}),r("el-step",{attrs:{title:"等待上传合同",description:""}}),r("el-step",{attrs:{title:"等待合同寄回和上传到款凭证",description:""}}),r("el-step",{attrs:{title:"等待上传认定清单",description:""}}),r("el-step",{attrs:{title:"等待上传发票",description:""}}),r("el-step",{attrs:{title:"已转换",description:""}})],1):e._e(),r("el-form",{ref:"ruleForm",staticClass:"ruleForm",attrs:{model:e.ruleForm,"label-position":"left","label-width":"180px"}},[r("el-form-item",{attrs:{label:"成果名称"}},[e._v(" "+e._s(e.patent.zlmc)+" ")]),r("el-form-item",{attrs:{label:"所有权人"}},[e._v(" "+e._s(e.patent.zlqr)+" ")]),r("el-form-item",{attrs:{label:"成果完成人"}},[e._v(" "+e._s(e.patent.zldyzzxm)+" ")]),r("el-form-item",{attrs:{label:"专利授权日"}},[e._v(" "+e._s(e.patent.pzrq)+" ")]),r("el-form-item",{attrs:{label:"团队负责人",prop:"fzyName"}},[e._v(" "+e._s(e.ruleForm.fzyName)+" ")]),r("el-form-item",{attrs:{label:"团队负责人所在单位",prop:"fzyDepartment"}},[e._v(" "+e._s(e.ruleForm.fzyDepartment)+" ")]),r("el-form-item",{attrs:{label:"团队负责人联系方式",prop:"fzyPhone"}},[e._v(" "+e._s(e.ruleForm.fzyPhone)+" ")]),r("el-form-item",{attrs:{label:"转让方式",prop:"transferMode"}},[e._v(" "+e._s(e.ruleForm.transferMode)+" ")]),r("el-form-item",{attrs:{label:"受让方单位名称",prop:"transfereeName"}},[e._v(" "+e._s(e.ruleForm.transfereeName)+" ")]),r("el-form-item",{attrs:{label:"受让方代表人姓名",prop:"transfereeDelegate"}},[e._v(" "+e._s(e.ruleForm.transfereeDelegate)+" ")]),r("el-form-item",{attrs:{label:"受让方代表人联系方式",prop:"transfereeDelegatePhone"}},[e._v(" "+e._s(e.ruleForm.transfereeDelegatePhone)+" ")]),r("el-form-item",{attrs:{label:"是否存在关联关系说明",prop:"ifrelation"}},[e._v(" "+e._s(e.ruleForm.ifrelation)+" ")]),"有"==e.ruleForm.ifrelation?r("el-form-item",{attrs:{label:"关系说明",prop:"associationRelationship"}},[e._v(" "+e._s(e.ruleForm.associationRelationship)+" ")]):e._e(),r("el-form-item",{attrs:{label:"定价方式",prop:"pricingMethod"}},[e._v(" "+e._s(e.ruleForm.pricingMethod)+" ")]),"评估作价"==e.ruleForm.pricingMethod?r("el-form-item",{attrs:{label:"评估公司",prop:"evaluationCompany"}},[e._v(" "+e._s(e.ruleForm.evaluationCompany)+" ")]):e._e(),r("el-form-item",{attrs:{label:"定价估价",prop:"evaluation"}},[e._v(" "+e._s(e.ruleForm.evaluation)+" 万元 ")]),"协议定价"==e.ruleForm.pricingMethod?r("el-form-item",{attrs:{label:"协议定价价格形成过程",prop:"formationProcess"}},[e._v(" "+e._s(e.ruleForm.formationProcess)+" ")]):e._e(),r("el-form-item",{attrs:{label:"合同签订日期",prop:"contractSigningDate"}},[e._v(" "+e._s(e.ruleForm.contractSigningDate)+" ")]),r("el-form-item",{attrs:{label:"中介",prop:"agency"}},[e._v(" "+e._s(e.ruleForm.agency)+" ")]),r("el-form-item",{attrs:{label:"评估费",prop:"assessmentFee"}},[e._v(" "+e._s(e.ruleForm.assessmentFee)+" 万元 ")]),r("el-form-item",{attrs:{label:"拍卖佣金",prop:"auctionCommission"}},[e._v(" "+e._s(e.ruleForm.auctionCommission)+" 万元 ")]),r("el-form-item",{attrs:{label:"税金",prop:"tax"}},[e._v(" "+e._s(e.ruleForm.tax)+" 万元 ")]),r("el-form-item",{attrs:{label:"合同总价",prop:"totalContractPrice"}},[e._v(" "+e._s(e.ruleForm.totalContractPrice)+" 万元 ")]),r("el-form-item",{attrs:{label:"净收益合计"}},[e._v(" "+e._s(e.ruleForm.totalContractPrice-e.ruleForm.assessmentFee-e.ruleForm.auctionCommission-e.ruleForm.tax)+" 万元 "),r("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.distribution()}}},[e._v(" 计算收益分配 ")])],1),r("el-table",{ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",stripe:""}},[r("el-table-column",{attrs:{prop:"fp",label:""}}),r("el-table-column",{attrs:{prop:"fpbl",label:"分配比例"}}),r("el-table-column",{attrs:{prop:"fpje",label:"分配金额（万元）"}})],1),e._l(e.distributionLists,(function(t,a){return r("el-form-item",{key:t.key,staticStyle:{"margin-top":"20px"},attrs:{label:"收益分配方案"+(a+1)}},[r("el-input",{staticStyle:{width:"20%"},attrs:{placeholder:"姓名",disabled:""},model:{value:t.recipientName,callback:function(a){e.$set(t,"recipientName",a)},expression:"distributionLists.recipientName"}}),r("el-input",{staticStyle:{width:"20%","margin-left":"10px"},attrs:{placeholder:"工号",disabled:""},model:{value:t.recipientGh,callback:function(a){e.$set(t,"recipientGh",a)},expression:"distributionLists.recipientGh"}}),r("el-input",{staticStyle:{width:"20%","margin-left":"10px"},attrs:{placeholder:"单位",disabled:""},model:{value:t.recipientDepartment,callback:function(a){e.$set(t,"recipientDepartment",a)},expression:"distributionLists.recipientDepartment"}}),r("el-input",{staticStyle:{width:"20%","margin-left":"10px"},attrs:{type:"number",placeholder:"金额（单位：万元）",disabled:""},model:{value:t.amount,callback:function(a){e.$set(t,"amount",a)},expression:"distributionLists.amount"}})],1)})),r("div",{staticClass:"comments"},[r("img",{attrs:{src:a("1998"),alt:""}})])],2)],1)},l=[],i=(a("b680"),{data:function(){return{patent:this.$route.query,step:0,state:!0,ruleForm:{fzyName:"",fzyDepartment:"",fzyPhone:"",transferMode:"",transfereeDelegate:"",transfereeName:"",transfereeDelegatePhone:"",ifrelation:"",associationRelationship:"",pricingMethod:"协议定价",evaluationCompany:"",evaluation:"",formationProcess:"参考前期成本投入，与受让方协商形成",additionalInstruction:"",contractSigningDate:"",agency:"",assessmentFee:"",auctionCommission:"",tax:"",totalContractPrice:""},distributionLists:[{recipientName:"",recipientGh:"",recipientDepartment:"",amount:""}],tableData:[{fp:"成果完成人",fpbl:"",fpje:""},{fp:"学校",fpbl:"",fpje:""},{fp:"中介",fpbl:"",fpje:""},{fp:"净收益合计",fpbl:"100%",fpje:""}]}},created:function(){var e=this;switch(console.log(e.patent),e.patent.state){case"正在转换：等待所属单位审批":e.step=0;break;case"正在转换：等待产学研审批":e.step=1;break;case"正在转换：等待公示":e.step=2;break;case"正在转换：正在公示中":e.step=3;break;case"正在转换：等待上传合同":e.step=4;break;case"正在转换：等待合同寄回和上传到款凭证":e.step=5;break;case"正在转换：等待上传认定清单（备案）":e.step=6;break;case"正在转换：等待上传发票":e.step=7;break;case"已转换":e.step=8;break;default:e.state=!1;break}var t="/application/getTransferApplicationFormByWID?wid="+e.patent.wid;e.request(t,{},"GET",{}).then((function(t){console.log(t),null!=t.data.data&&(e.ruleForm.fzyName=t.data.data.fzyName,e.ruleForm.fzyDepartment=t.data.data.fzyDepartment,e.ruleForm.fzyPhone=t.data.data.fzyPhone,e.ruleForm.transferMode=t.data.data.transferMode,e.ruleForm.transfereeDelegate=t.data.data.transfereeDelegate,e.ruleForm.transfereeName=t.data.data.transfereeName,e.ruleForm.transfereeDelegatePhone=t.data.data.transfereeDelegatePhone,"无关联关系"==t.data.data.associationRelationship?e.ruleForm.ifrelation="无":e.ruleForm.ifrelation="有",e.ruleForm.associationRelationship=t.data.data.associationRelationship,e.ruleForm.pricingMethod=t.data.data.pricingMethod,e.ruleForm.evaluationCompany=t.data.data.evaluationCompany,e.ruleForm.evaluation=t.data.data.evaluation,e.ruleForm.formationProcess=t.data.data.formationProcess,e.ruleForm.additionalInstruction=t.data.data.additionalInstruction,e.ruleForm.contractSigningDate=t.data.data.contractSigningDate,e.ruleForm.agency=t.data.data.agency,e.ruleForm.assessmentFee=t.data.data.assessmentFee,e.ruleForm.auctionCommission=t.data.data.auctionCommission,e.ruleForm.tax=t.data.data.tax,e.ruleForm.totalContractPrice=t.data.data.totalContractPrice,e.distributionLists=t.data.data.distributionList)}))},methods:{TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,l=t.getDate(),i=t.getHours(),o=t.getMinutes(),s=t.getSeconds(),n=a+"-";return r<10&&(n+="0"),n+=r+"-",l<10&&(n+="0"),n+=l+" ",i<10&&(n+="0"),n+=i+":",o<10&&(n+="0"),n+=o+":",s<10&&(n+="0"),n+=s,n},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),l=(a-r)/1e3,i=parseInt(l/86400);return i<1095},distribution:function(){var e=this,t=e.ruleForm.totalContractPrice-e.ruleForm.assessmentFee-e.ruleForm.auctionCommission-e.ruleForm.tax;if(console.log(e.ruleForm),console.log(t),e.tableData[3].fpje=t,console.log(e.TimeDiffer(e.patent.pzrq)),e.TimeDiffer(e.patent.pzrq))switch(!0){case t>=50:console.log(t),e.tableData[0].fpbl="90%",e.tableData[0].fpje=(.9*t).toFixed(2),e.tableData[1].fpbl="5%",e.tableData[1].fpje=(.05*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;case t>10&&t<50:e.tableData[0].fpbl="85%",e.tableData[0].fpje=(.85*t).toFixed(2),e.tableData[1].fpbl="10%",e.tableData[1].fpje=(.1*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;case t<=10:e.tableData[0].fpbl="80%",e.tableData[0].fpje=(.8*t).toFixed(2),e.tableData[1].fpbl="15%",e.tableData[1].fpje=(.15*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;default:break}else switch(!0){case t>=50:console.log(t),e.tableData[0].fpbl="80%",e.tableData[0].fpje=(.8*t).toFixed(2),e.tableData[1].fpbl="15%",e.tableData[1].fpje=(.15*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;case t>10&&t<50:e.tableData[0].fpbl="75%",e.tableData[0].fpje=(.75*t).toFixed(2),e.tableData[1].fpbl="20%",e.tableData[1].fpje=(.2*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;case t<=10:e.tableData[0].fpbl="70%",e.tableData[0].fpje=(.7*t).toFixed(2),e.tableData[1].fpbl="25%",e.tableData[1].fpje=(.25*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;default:break}}}}),o=i,s=(a("b1ef"),a("2877")),n=Object(s["a"])(o,r,l,!1,null,null,null);t["default"]=n.exports},b1ef:function(e,t,a){"use strict";a("5033")},b680:function(e,t,a){"use strict";var r=a("23e7"),l=a("a691"),i=a("408a"),o=a("1148"),s=a("d039"),n=1..toFixed,p=Math.floor,m=function(e,t,a){return 0===t?a:t%2===1?m(e,t-1,a*e):m(e*e,t/2,a)},c=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},f=n&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){n.call({})}));r({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,a,r,s,n=i(this),f=l(e),u=[0,0,0,0,0,0],d="",b="0",F=function(e,t){var a=-1,r=t;while(++a<6)r+=e*u[a],u[a]=r%1e7,r=p(r/1e7)},D=function(e){var t=6,a=0;while(--t>=0)a+=u[t],u[t]=p(a/e),a=a%e*1e7},h=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==u[e]){var a=String(u[e]);t=""===t?a:t+o.call("0",7-a.length)+a}return t};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return String(n);if(n<0&&(d="-",n=-n),n>1e-21)if(t=c(n*m(2,69,1))-69,a=t<0?n*m(2,-t,1):n/m(2,t,1),a*=4503599627370496,t=52-t,t>0){F(0,a),r=f;while(r>=7)F(1e7,0),r-=7;F(m(10,r,1),0),r=t-1;while(r>=23)D(1<<23),r-=23;D(1<<r),F(1,1),D(2),b=h()}else F(0,a),F(1<<-t,0),b=h()+o.call("0",f);return f>0?(s=b.length,b=d+(s<=f?"0."+o.call("0",f-s)+b:b.slice(0,s-f)+"."+b.slice(s-f))):b=d+b,b}})}}]);