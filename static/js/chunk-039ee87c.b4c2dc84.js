(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-039ee87c"],{"0997":function(e,t,a){},"25b0":function(e,t,a){"use strict";a.r(t);var r,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"patents_mobile_Container"},[a("div",{staticClass:"Patents"},e._l(e.patents,(function(t){return a("van-cell",{key:t.index,attrs:{title:t.zlmc,"is-link":""},on:{click:function(a){return e.GetDetail(t)}}})})),1),a("div",{staticClass:"Page"},[a("van-pagination",{attrs:{"total-items":e.total,"items-per-page":10,"force-ellipses":""},on:{change:e.handleCurrentChange},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])},n=[],c=a("1da1"),o=a("ade3"),d=(a("9a83"),a("f564")),i=(a("6a39"),a("f240")),l=(a("c194"),a("7744")),u=(a("66b9"),a("b650")),g=(a("96cf"),a("b0c0"),a("ac1f"),a("1276"),{components:(r={},Object(o["a"])(r,u["a"].name,u["a"]),Object(o["a"])(r,l["a"].name,l["a"]),Object(o["a"])(r,i["a"].name,i["a"]),Object(o["a"])(r,d["a"].name,d["a"]),r),data:function(){return{name:this.$store.state.signed_username,id:this.$store.state.signed_id,patents:[],total:0,currentPage:1,Page_url:"",SearchType:"查询字段",SearchText:""}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.patents=[],a.currentPage=1,a.SearchType="查询字段",a.SearchText="",console.log(e.$store.state),r="/patent/getMyPatentPage?currPage="+a.currentPage+"&size=10&zldyzzgh="+a.id+"&zldyzzxm="+a.name,a.Page_url=r,t.next=10,a.getUserPatent(r);case 10:case"end":return t.stop()}}),t)})))()},getUserPatent:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,a.next=3,r.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),"success"==e.data.status){r.total=e.data.data.total;for(var t=0;t<e.data.data.records.length;t++){var a={};a.index=t+1,a.wid=e.data.data.records[t].wid,a.sqbh=e.data.data.records[t].sqbh,a.zlmc=e.data.data.records[t].zlmc,a.zlh=e.data.data.records[t].zlh,a.zlqr=e.data.data.records[t].zlqr,a.gsdw=e.data.data.records[t].gsdw,a.zhgxsj=e.data.data.records[t].zhgxsj,a.pzrq=e.data.data.records[t].pzrq,a.zldlr=e.data.data.records[t].zldlr,a.zldyzzgh=e.data.data.records[t].zldyzzgh,a.zldyzzxm=e.data.data.records[t].zldyzzxm,a.zlh=e.data.data.records[t].zlh,a.zlmc=e.data.data.records[t].zlmc,null==e.data.data.records[t].transferProcess?a.state="未转换":e.data.data.records[t].transferProcess.isZldyzzConfirm?e.data.data.records[t].transferProcess.isDepartmentConfirm?e.data.data.records[t].transferProcess.isCxyConfirm?e.data.data.records[t].transferProcess.isPublicNotice?r.TimeDiffer(e.data.data.records[t].transferProcess.publicNoticeTime)?null==e.data.data.records[t].transferProcess.contractId?a.state="正在转换：等待上传合同":e.data.data.records[t].transferProcess.isContractSendBack&&null!=e.data.data.records[t].transferProcess.voucherId?null==e.data.data.records[t].transferProcess.checklistId?a.state="正在转换：等待上传认定清单（备案）":null==e.data.data.records[t].transferProcess.invoiceId?a.state="正在转换：等待上传发票":a.state="已转换":a.state="正在转换：等待合同寄回和上传到款凭证":a.state="正在转换：正在公示中":a.state="正在转换：等待公示":a.state="正在转换：等待产学研审批":a.state="正在转换：等待所属单位审批":a.state="正在转换：等待第一作者确认",r.patents.push(a)}Object(d["a"])({type:"success",message:"数据已更新！"})}else Object(d["a"])({type:"success",message:"数据请求失败！"})})).catch((function(e){console.log(e),Object(d["a"])({type:"success",message:"出错了！"})}));case 3:case"end":return a.stop()}}),a)})))()},handleCurrentChange:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,console.log(r.Page_url,e),s=r.Page_url.split("currPage")[0]+"currPage="+e+"&size"+r.Page_url.split("size")[1],console.log(s),r.patents=[],r.currentPage=e,a.next=8,r.getUserPatent(s);case 8:case"end":return a.stop()}}),a)})))()},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,s=t.getDate(),n=t.getHours(),c=t.getMinutes(),o=t.getSeconds(),d=a+"-";return r<10&&(d+="0"),d+=r+"-",s<10&&(d+="0"),d+=s+" ",n<10&&(d+="0"),d+=n+":",c<10&&(d+="0"),d+=c+":",o<10&&(d+="0"),d+=o,d},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),s=(a-r)/1e3,n=parseInt(s/86400);parseInt(s/3600),parseInt(s%3600/60),parseInt(s%60);return n>15},GetDetail:function(e){console.log(e),this.$router.push({path:"/patent_detail",query:e})}}}),f=g,h=(a("7521"),a("2877")),p=Object(h["a"])(f,s,n,!1,null,null,null);t["default"]=p.exports},7521:function(e,t,a){"use strict";a("0997")}}]);