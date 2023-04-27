"use strict";(self["webpackChunkagro_commodities_investment"]=self["webpackChunkagro_commodities_investment"]||[]).push([[759],{6357:function(a,e,t){t.r(e),t.d(e,{default:function(){return V}});var l=t(6252),r=t(2262),s=t(5776),o=t(8300),n=t(5557),i=t(5074),c=(t(7658),t(1809)),d=t(9538),u=t(2755),v=t(3101),g=t(1381),b=t(3577);const p={class:"row justify-content-center"},m=["onClick"],f={class:"card-details"},h={class:"card-text"};var _={__name:"CardDetailsProduct",props:{data:Object},emits:["nameOfProduct"],setup(a,{emit:e}){const t=(0,r.iH)(0),s=(0,r.iH)("");function o(a){t.value=parseFloat((a.data[0].value-a.data[1].value)/a.data[1].value).toFixed(3)}function n(a){s.value=parseFloat(a.data[0].value).toFixed(2)}const i=(0,r.Fl)((()=>{let a="";return a=0===t.value?"zero":t.value>0?"positive":"negative",a})),c=(0,r.iH)("");function d(a){c.value=a.name.slice(16)}const u=(0,r.Fl)((()=>{let a="";return a="Wheat"==c.value?"yellow card-title":"Sugar"==c.value?"lightblue card-title":"Cotton"==c.value?"darkblue card-title":"Coffee"==c.value?"lightgreen card-title":"Corn"==c.value?"coral card-title":"black card-title",a})),v=a=>{e("nameOfProduct",a)};return(e,g)=>((0,l.wg)(),(0,l.iD)("div",p,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.data.prodts,(a=>((0,l.wg)(),(0,l.iD)("div",{key:a.name,class:"flex card m2"},[(0,l._)("div",{class:"col card-body",onClick:e=>v(a.name.slice(16))},[(0,l.Uk)((0,b.zw)(o(a))+" "+(0,b.zw)(d(a))+" "+(0,b.zw)(n(a))+" ",1),(0,l._)("h4",{class:(0,b.C_)((0,r.SU)(u))},(0,b.zw)(c.value),3),(0,l._)("div",f,[(0,l._)("p",h," $"+(0,b.zw)(s.value),1),(0,l._)("p",{class:(0,b.C_)((0,r.SU)(i))},(0,b.zw)(t.value)+"% ",3)])],8,m)])))),128))]))}},C=t(3744);const w=(0,C.Z)(_,[["__scopeId","data-v-6f4891de"]]);var y=w;const k=a=>((0,l.dD)("data-v-6b07ac24"),a=a(),(0,l.Cn)(),a),D={class:"pieChartDiv"},x=k((()=>(0,l._)("canvas",{id:"myPieChart"},null,-1))),S=[x];var H={__name:"PieChart",props:{data:Object},setup(a){(0,l.bv)((()=>{const a=new c.ZP(document.getElementById("myPieChart"),r);console.log(a)}));const e=["Wheat","Sugar","Cotton","Coffee","Corn"],t={labels:e,datasets:[{label:"%",data:[10,20,25,5,40],fill:!0,borderColor:["rgba(248, 238, 11, 1)","rgba(27, 169, 234, 1)","rgba(1, 1, 88, 1)","rgba(61, 213, 152, 1)","rgba(252, 90, 90, 1)"],backgroundColor:["rgba(248, 238, 11, 1)","rgba(27, 169, 234, 1)","rgba(1, 1, 88, 1)","rgba(61, 213, 152, 1)","rgba(252, 90, 90, 1)"]}]},r={type:"doughnut",data:t,options:{responsive:!0,maintainAspectRatio:!1,plugins:{tooltip:{enabled:!0,boxPadding:3,callbacks:{label:a=>`${a.parsed}%`}},legend:{labels:{boxWidth:5,usePointStyle:!0,boxHeight:5.5,font:{size:12}}}}}};return(a,e)=>((0,l.wg)(),(0,l.iD)("div",D,S))}};const P=(0,C.Z)(H,[["__scopeId","data-v-6b07ac24"]]);var Z=P;const F=a=>((0,l.dD)("data-v-65e03aef"),a=a(),(0,l.Cn)(),a),W={class:"d-flex justify-content-center pt-4 mt-5"},O={style:{width:"90%"}},j={class:"graphicDropsDiv d-flex flex-row justify-content-left"},U={key:0},z={key:1},I={class:"graphicsDiv d-flex justify-content-around gap-4 align-items-center"},Y=F((()=>(0,l._)("div",{class:"barChartDiv"},[(0,l._)("canvas",{id:"myChart"})],-1)));var A={__name:"BarChart",props:{data:Object},setup(a){const e=a,t=(0,r.iH)("years"),s=a=>{t.value=a,_()};let o=(0,r.iH)("Sugar");const n=a=>{o.value=a,_()},i=(0,r.iH)("bar"),b=a=>{i.value=a,_()},p=(0,r.iH)(2022),m=a=>{p.value=a,_()};let f=(0,r.iH)([2016,2017,2018,2019,2020,2021,2022]),h=a=>{f.value=a,_()};(0,l.bv)((()=>{_()}));let _=()=>{let a;const e=document.getElementById("myChart"),l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r={labels:"months"===t.value?l:f.value,datasets:[{label:o.value+" Price",data:"months"===t.value?C(p.value):w(f.value[0],f.value[f.value.length-1]),fill:"bar"==i.value,borderColor:D(o.value),backgroundColor:D(o.value),tension:0,options:{responsive:!0,maintainAspectRatio:!1}}]},s=c.ZP.getChart("myChart");return void 0!=s&&s.destroy(),a=new c.ZP(e,{type:i.value,data:r}),a},C=a=>{let e=k(o);return e=e.filter((e=>parseInt(e.date.slice(0,4))==a)),e=e.map((a=>parseFloat(a.value).toFixed(2))),e},w=(a,e)=>{let t=k(o),l=0,r=[],s=[],n=[];while(a<e+1){r=t.filter((e=>parseInt(e.date.slice(0,4))==a)),s=r.map((a=>parseFloat(a.value).toFixed(2))),l=0;for(let a=0;a<s.length;a++)l+=parseFloat(s[a]);n.push(l/s.length),a++}return n};function k(a){let t=a.value.slice(0,1);t=t.toLowerCase();let l=t+a.value.slice(1),r=0,s=Object.keys(e.data.prodts),o=Object.values(e.data.prodts),n=!1,i=0;while(!n&&i<s.length)s[i]==l?(r=o[i].data,n=!0):i++;return r}const D=a=>{let e="rgba(0,0,0,1)";switch(a){case"Wheat":e="rgba(248, 238, 11, 1)";break;case"Corn":e="rgba(252, 90, 90, 1)";break;case"Cotton":e="rgba(1, 1, 88, 1)";break;case"Sugar":e="rgba(27, 169, 234, 1)";break;case"Coffee":e="rgba(61, 213, 152, 1)";break;default:break}return e};return(e,o)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(y,{data:a.data,onNameOfProduct:n},null,8,["data"]),(0,l._)("div",W,[(0,l._)("div",O,[(0,l._)("div",j,[(0,l.Wm)(d.Z,{class:"mx-4",onDateSelected:s}),(0,l.Wm)(u.Z,{onTypeSelected:b})]),"years"==t.value?((0,l.wg)(),(0,l.iD)("div",U,[(0,l.Wm)(v.Z,{class:"mx-3",onRangeYears:(0,r.SU)(h)},null,8,["onRangeYears"])])):((0,l.wg)(),(0,l.iD)("div",z,[(0,l.Wm)(g.Z,{onYearOfMonths:m})])),(0,l._)("div",I,[Y,(0,l.Wm)(Z,{data:a.data},null,8,["data"])])])])],64))}};const E=(0,C.Z)(A,[["__scopeId","data-v-65e03aef"]]);var R=E;const q=a=>((0,l.dD)("data-v-292eaa28"),a=a(),(0,l.Cn)(),a),B={class:"col-10 px-5"},J=q((()=>(0,l._)("h1",null,"Agro Commodities Details",-1))),M=q((()=>(0,l._)("p",null,"This page shows the information details about the following commodities:",-1))),L={key:0,src:s,alt:"error"},N={key:1,src:o,alt:"loading"},T={key:2};var $={__name:"DetailsView",setup(a){let e=(0,r.iH)(!0),t=(0,r.iH)((0,l.bv)((async()=>{t.value=await n.Z.getData(),t.value.isLoading||(e.value=!1)})));return(a,s)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(i.Z,{class:"col-2"}),(0,l._)("div",B,[J,M,(0,r.SU)(t).isError?((0,l.wg)(),(0,l.iD)("img",L)):(0,l.kq)("",!0),(0,r.SU)(e)?((0,l.wg)(),(0,l.iD)("img",N)):(0,l.kq)("",!0),(0,r.SU)(t).isError||(0,r.SU)(e)?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",T,[(0,l.Wm)(R,{data:(0,r.SU)(t)},null,8,["data"])]))])],64))}};const K=(0,C.Z)($,[["__scopeId","data-v-292eaa28"]]);var V=K}}]);
//# sourceMappingURL=759.87958260.js.map