(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{234:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(78),o=t.n(r),s=(t(91),t(4)),i=t(5),c=t(7),d=t(6),m=t(8),u=t(2),b=t(83),p=t(16),h=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={dataFirstChart:{labels:["1","2","3","4","5"],datasets:[{label:"Videos Made",backgroundColor:"rgba(191, 63, 63, 0.8)",data:[40,5,1,10,32,2,12]},{label:"Subscriptions",backgroundColor:"rgba(63, 63, 191, 0.6)",data:[14,15,21,0,12,4,1]}]},optionsFirstChart:{legend:{position:"right"},responsive:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]},tooltips:{mode:"nearest",intersect:!1}},dataSecondChart:{labels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],datasets:[{label:"May 2017",data:[71,84,330,60,82,97,46,37,47,315,298,180,298,61,333,258,88,68,84,76,78,165,330,362,287,358,386,80,83,398,70],borderWidth:1,backgroundColor:"rgba(0,0,0,0.1)"},{label:"April 2017",data:[83,375,390,272,356,363,426,383,312,94,317,98,104,233,119,111,254,441,406,374,426,260,409,111,377,367,215,104,379,266],borderWidth:2,backgroundColor:"rgba(247,205,101,1)"}]},optionsSecondChart:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},tooltips:{mode:"nearest",intersect:!1},legend:{position:"bottom",labels:{fontFamily:"'Lato', sans-serif",fontSize:15}}},chartData_3:{labels:["D\xe9cembre 2016","Janvier 2017","F\xe9vrier 2017","Mars 2017","Avril 2017"],datasets:[{label:"Total",data:[6275,5199,3846,5510,8425],borderWidth:.5,backgroundColor:"rgba(0,0,0,0.1)"},{label:"Avions hauts",data:[1647,1472,1626,1908,2729],borderWidth:.5,backgroundColor:"rgba(169,110,143,1)"},{label:"Avions bas",data:[4628,3727,2220,3602,5696],borderWidth:.5,backgroundColor:"rgba(219,160,193,1)"}]},chartOptions_3:{legend:{position:"bottom",labels:{fontFamily:"'Lato', sans-serif",fontSize:15,fontColor:"#FFFFFF"}}},chartData_4:{labels:["Q3-2013","Q4-2013","Q1-2014","Q2-2014","Q3-2014","Q4-2014","Q1-2015","Q2-2015","Q3-2015","Q4-2015","Q1-2016","Q2-2016","Q3-2016"],datasets:[{type:"line",label:"Data 1",yAxisID:"y-axis-1",backgroundColor:"#5B89C1",borderColor:"#5B89C1",pointBorderColor:"#5B89C1",pointBackgroundColor:"#FFF",pointHoverBackgroundColor:"#FFF",pointStyle:"rectRot",pointRadius:8,pointHoverRadius:9,data:[3.4,3.35,3.2,3.6,3.1,3.2,3.35,3.45,3.4,3.4,3.25,3.3,3.45]},{type:"line",label:"Data 2",yAxisID:"y-axis-1",backgroundColor:"#262626",borderColor:"#262626",fill:!1,pointBorderColor:"#262626",pointBackgroundColor:"#FFF",pointHoverBackgroundColor:"#FFF",data:[3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5]}]},chartOptions_4:{title:{display:!0,text:"Chart Header for Sample 2"},legend:{position:"bottom"},hover:{mode:"point",intersect:"true"},responsive:!0,scales:{xAxes:[{stacked:!0}],label:[{fontStyle:"initial"}],yAxes:[{stacked:!1,position:"left",id:"y-axis-1",gridLines:{drawOnChartArea:!0},ticks:{max:3.7,min:2.8,stepSize:.1}}]}}},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"Linechart Page"),n.a.createElement(u.d,{options:this.state.optionsFirstChart,data:this.state.dataFirstChart}),n.a.createElement("h3",null,"Line Chart 2"),n.a.createElement(u.d,{options:this.state.optionsSecondChart,data:this.state.dataSecondChart}),n.a.createElement("h3",null,"Line Chart 3"),n.a.createElement(u.d,{options:this.state.chartOptions_3,data:this.state.chartData_3}),n.a.createElement("h3",null,"Line Chart 4"),n.a.createElement(u.d,{options:this.state.chartOptions_4,data:this.state.chartData_4}))}}]),a}(l.Component),g=t(80),E=t.n(g),f=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",{className:"collection "+e.navBarStyles},n.a.createElement("a",{href:"/",className:"collection-item"},n.a.createElement("span",{className:e.navSpanStyle+" center"},"Home/ Overview")),n.a.createElement("a",{href:"/line",className:"collection-item"},n.a.createElement("i",{className:"material-icons"},"insert_chart"),"Line Chart"),n.a.createElement("a",{href:"/Bar",className:"collection-item"},n.a.createElement("i",{className:"material-icons"},"bar_chart"),n.a.createElement("span",null,"Bar")),n.a.createElement("a",{href:"/horizontal-bar",className:"collection-item"},n.a.createElement("i",{className:"material-icons"},"bar_chart"),n.a.createElement("span",null,"Horizontal Bar")),n.a.createElement("a",{href:"/pie",className:"collection-item"},n.a.createElement("i",{className:"material-icons"},"bar_chart"),n.a.createElement("span",null,"Pie")),n.a.createElement("a",{href:"/moch-dashboard",className:"collection-item"},n.a.createElement("span",null,"Analytics Dashboard")))}}]),a}(l.Component),v=E()({navBarStyles:{color:"#000",position:"fixed",width:"20%","& a":{fontFamily:"Sanserif",color:"#efe"}},navSpanStyle:{verticalAlign:"middle"}})(f),C=t(10),y=t.n(C),k=(t(231),function(e){function a(e){var t;function l(e,a){return Math.floor(Math.random()*(a-e+1))+e}return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={data:{labels:["1","2","3","4","5"],datasets:[{label:"Videos Made",backgroundColor:"rgb(191, 63, 63)",data:[l(50,200),l(20,50),27,10,32,2,12]},{label:"Subscriptions",backgroundColor:"rgb(63, 63, 191)",data:[159,l(50,200),10,12,4,1]}]},options:{responsive:!0,tooltips:{enabled:!1},label:{scaleLabel:!1},plugins:{labels:{fontSize:0}}},chart2Data:{labels:["2011","2012","2013","2014","2015","2016","2017"],datasets:[{label:"Label 1",data:[1550,1570,2300,5e3,7e3,8e3,2e4],backgroundColor:"#074F57"},{label:"Label 2",data:[0,3630,28200,48809,73700,110700,160791],backgroundColor:"#077187"},{label:"Label 3",data:[0,0,0,0,0,20100,22e3],backgroundColor:"#7FB069"}]},chart2Options:{tooltips:{enabled:!1},responsive:!0,legend:{position:"bottom",fullWidth:!0,labels:{boxWidth:20,padding:50,fontSize:20,fontFamily:"Lato"}},scales:{xAxes:[{barPercentage:.8,gridLines:{display:!0,drawTicks:!0,drawOnChartArea:!1},ticks:{fontSize:16,fontFamily:"Lato"},stacked:!0}],yAxes:[{gridLines:{display:!0,drawTicks:!0,tickMarkLength:5,drawOnChartArea:!1},ticks:{padding:10,beginAtZero:!0,fontSize:16,fontFamily:"Lato",callback:function(e,a,t){return e/1e3}},scaleLabel:{display:!0,padding:20,fontColor:"#555759",fontSize:18,fontFamily:"Lato",fontStyle:700,labelString:"Scale Label"},stacked:!0}]},animation:{onComplete:function(){var e=this.chart,a=e.ctx;a.font=y.a.helpers.fontString(y.a.defaults.global.defaultFontSize,y.a.defaults.global.defaultFontStyle,y.a.defaults.global.defaultFontFamily),a.textAlign="center",a.textBaseline="bottom";var t=[0,0,0,0,0,0,0];this.data.datasets.forEach(function(l,n){e.controller.getDatasetMeta(n).data.forEach(function(e,r){var o=l.data[r];if(t[r]+=o,2===n&&r>2){var s="$"+Math.floor(t[r]/1e3);t[r]>1e6?s+=" Billion":s+=" Million",a.fillText(s,e._model.x,e._model.y-5)}})})}},plugins:{labels:{fontSize:0}}},chart3Data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"",data:[5,6,4.5,5.5,3,6,4.5,6,8,3,5.5,4],backgroundColor:"#4c84ff"}]},chart3Option:{legend:{display:!1},scales:{xAxes:[{gridLines:{drawBorder:!1,display:!1},ticks:{display:!1,beginAtZero:!1},barPercentage:1.8,categoryPercentage:.2}],yAxes:[{gridLines:{drawBorder:!1,display:!1},ticks:{display:!1,beginAtZero:!0}}]},tooltips:{enabled:!1},plugins:{labels:{fontSize:0}}}},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"Barchart Page"),n.a.createElement(u.a,{options:this.state.options,data:this.state.data}),n.a.createElement("h3",null,"Barchart 2"),n.a.createElement(u.a,{options:this.state.chart2Options,data:this.state.chart2Data}),n.a.createElement("h3",null,"Barchart 3"),n.a.createElement("p",null,"Completely clean"),n.a.createElement(u.a,{options:this.state.chart3Option,data:this.state.chart3Data}))}}]),a}(l.Component)),N=function(e){function a(e){var t,l,n;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={data:{labels:["1","2","3","4","5"],datasets:[{label:"Videos Made",backgroundColor:"rgb(191, 63, 63)",data:[(l=50,n=200,Math.floor(Math.random()*(n-l+1))+l),5,1,10,32,2,12]},{label:"Subscriptions",backgroundColor:"rgb(63, 63, 191)",data:[14,15,21,0,12,4,1]}]},options:{responsive:!0,tooltips:{enabled:!1}},chart2Data:{labels:["Agent Name A","Agent Name B","Agent Name C","Agent Name D","Agent Name E","Agent Name F","Agent Name G"],datasets:[{label:"In Progress",data:[65,59,80,81,56,55,40],backgroundColor:"#22495d"},{label:"Application Lodged",data:[28,48,40,19,86,27,90],backgroundColor:"#547b8f"},{label:"New",data:[65,59,80,81,56,55,40],backgroundColor:"#7fb2cc"},{label:"Letter of Offer Declined",data:[28,48,40,19,86,27,90],backgroundColor:"#a8559d"},{label:"Letter of Offer Confirmed",data:[65,59,80,81,56,55,40],backgroundColor:"#76316d"}]},chart2Options:{scales:{xAxes:[{stacked:!0,gridLines:{display:!1}}],yAxes:[{barPercentage:.5,stacked:!0,gridLines:{display:!1}}]},title:{display:!0,fontsize:14,text:"Applications 2100"},legend:{display:!0,position:"bottom"},tooltips:{enabled:!0,mode:"nearest"}}},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h3",null,"Horizontal Bar Chart "),n.a.createElement(u.c,{options:this.state.options,data:this.state.data}),n.a.createElement("h3",null,"Horizontal Bar Chart 2 "),n.a.createElement(u.c,{options:this.state.chart2Options,data:this.state.chart2Data}))}}]),a}(l.Component),O=function(e){function a(e){var t;function l(e,a){return Math.floor(Math.random()*(a-e+1))+e}return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={data:{labels:["1","2","3","4","5","6","7"],datasets:[{label:"Videos Made",backgroundColor:"rgb(191, 63, 63)",data:[10,5,1,10,32,2,12]},{label:"Subscriptions",backgroundColor:"rgb(63, 63, 191)",data:[14,15,21,0,12,4,1]}]},options:{responsive:!0,tooltips:{enabled:!0},labels:{display:!0},plugins:{labels:{render:"value",fontSize:25,fontColor:"#fff"}}},chart2Data:{labels:["In Progress","Application Lodged","New","Letter of Offer Declined","Letter of Offer Confirmed"],datasets:[{label:"Videos Made",data:[12,12,8,20,38],backgroundColor:["#22495d","#547b8f","#7fb2cc","#a8559d","#76316d"]}]},chart2Options:{tooltips:{mode:"label",callbacks:{label:function(e,a){return a.datasets[0].data[e.index]+"%"}}},maintainAspectRatio:!0,responsive:!0,title:{display:!0,fontsize:14,text:"Applications 2100"},legend:{display:!0,position:"bottom"},plugins:{labels:{render:"label",fontSize:20,fontColor:"#000",position:"outside"}}},chart3Data:{labels:["February","March","April"],datasets:[{label:"Videos Made",data:[l(1,20),l(1,10),l(1,20)],backgroundColor:["#ffce56","#ff6384","#36a2eb"]}]},chart3Options:{responsive:!0,tooltips:{enabled:!1},labels:{display:!0},plugins:{labels:[{render:"percentage",fontSize:25,fontColor:"#fff"},{render:"label",fontSize:25,fontColor:"#000",position:"outside",segment:!0,arc:!0}]}}},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h3",null,"Chart 1"),n.a.createElement(u.e,{options:this.state.options,data:this.state.data}),n.a.createElement("h3",null,"Chart 2"),n.a.createElement(u.e,{options:this.state.chart2Options,data:this.state.chart2Data}),n.a.createElement("h3",null,"Chart 3"),n.a.createElement(u.e,{options:this.state.chart3Options,data:this.state.chart3Data}))}}]),a}(l.Component),S=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={chart1Data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"",data:[5,6,4.5,5.5,3,6,4.5,6,8,3,5.5,4],backgroundColor:"#4c84ff"}]},chart1Option:{legend:{display:!1},scales:{xAxes:[{gridLines:{drawBorder:!1,display:!1},ticks:{display:!1,beginAtZero:!1},barPercentage:1.8,categoryPercentage:.2}],yAxes:[{gridLines:{drawBorder:!1,display:!1},ticks:{display:!1,beginAtZero:!0}}]},tooltips:{enabled:!0},plugins:{labels:{fontSize:0}}},chart2Data:{labels:["Fri","Sat","Sun","Mon","Tue","Wed","Thu"],datasets:[{label:"My First dataset",pointRadius:4,pointBackgroundColor:"rgba(255,255,255,1)",pointBorderWidth:2,fill:!1,backgroundColor:"transparent",borderColor:"#fdc506",data:[0,4,3,5.5,3,4.7,0]},{label:"My Second dataset",fill:!1,pointRadius:4,pointBackgroundColor:"rgba(255,255,255,1)",pointBorderWidth:2,backgroundColor:"transparent",borderColor:"#4c84ff",data:[0,2,4.3,3.8,5.2,1.8,2.2]}]},chart2Options:{legend:{display:!1},scales:{xAxes:[{gridLines:{drawBorder:!1,display:!1},ticks:{display:!1,beginAtZero:!0},barPercentage:1.8,categoryPercentage:.2}],yAxes:[{gridLines:{drawBorder:!1,display:!1},ticks:{display:!1,beginAtZero:!0}}]},tooltips:{enabled:!1}},chart3Data:{labels:["Fri","Sat","Sun","Mon","Tue","Wed","Thu"],datasets:[{label:"My First dataset",pointRadius:0,fill:!0,backgroundColor:"rgba(76, 132, 255, 0.9)",borderColor:"rgba(76, 132, 255, 0.9)",data:[0,4,2,6.5,3,4.7,0]},{label:"My Second dataset",pointRadius:0,fill:!0,backgroundColor:"rgba(253, 197, 6, 0.9)",borderColor:"rgba(253, 197, 6, 1)",data:[0,2,4.3,3.8,5.2,1.8,2.2]}]},chart4Data:{}},t.data=function(e){var a=e.getContext("2d").createLinearGradient(0,10,1e3,20);return a.addColorStop(0,"rgba(41,204,151,0.10196)"),a.addColorStop(1,"rgba(41,204,151,0.30196)"),{labels:["Fri","Sat","Sun","Mon","Tue","Wed","Thu"],datasets:[{label:"My First dataset",lineTension:0,pointRadius:4,pointBackgroundColor:"rgba(255,255,255,1)",pointBorderWidth:2,fill:!0,backgroundColor:a,borderColor:"#29cc97",borderWidth:2,data:[0,4,3,5.5,3,4.7,1]}]}},t.data2=function(e){var a=e.getContext("2d").createLinearGradient(0,600,0,0);return a.addColorStop(0,"rgba(0,0,255,0.3)"),a.addColorStop(1,"rgba(0,0,255,0.8)"),{labels:["January","February","March","April","May","June","July","August"],datasets:[{label:"My First dataset",lineTension:.5,pointRadius:4,pointBackgroundColor:"rgb(66,136,253)",pointBorderWidth:2,fill:!0,backgroundColor:a,borderWidth:5,data:[0,4,3,5.5,3,4.7,1,7]}]}},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("p",null,"Hello from dashboard"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s3"},n.a.createElement("div",{className:"card-panel white"},n.a.createElement("h5",null,"71, 503"),n.a.createElement("p",null,"Online Signups"),n.a.createElement(u.a,{data:this.state.chart1Data,options:this.state.chart1Option}))),n.a.createElement("div",{className:"col s3"},n.a.createElement("div",{className:"card-panel white lighten-2"},n.a.createElement("h5",null,"71, 503"),n.a.createElement("p",null,"Online Signups"),n.a.createElement(u.d,{data:this.state.chart2Data,options:this.state.chart2Options}))),n.a.createElement("div",{className:"col s3"},n.a.createElement("div",{className:"card-panel green"},n.a.createElement("h5",null,"71, 503"),n.a.createElement("p",null,"Online Signups"),n.a.createElement(u.d,{data:this.state.chart3Data,options:this.state.chart2Options}))),n.a.createElement("div",{className:"col s3"},n.a.createElement("div",{className:"card-panel white"},n.a.createElement("h5",null,"71, 503"),n.a.createElement("p",null,"Online Signups"),n.a.createElement(u.d,{data:this.data,options:this.state.chart2Options})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"},n.a.createElement("div",{className:"card-panel white"},n.a.createElement("div",{className:"icon-box"},n.a.createElement("span",null,n.a.createElement("i",{className:"material-icons"},"insert_chart"),"Subscribers"),n.a.createElement("span",null,"2,543")))),n.a.createElement("div",{className:"col s4"},n.a.createElement("div",{className:"card-panel white"},n.a.createElement("div",{className:"icon-box"},n.a.createElement("span",null,n.a.createElement("i",{className:"material-icons"},"thumb_up"),"Likes"),n.a.createElement("span",null,"2,543")))),n.a.createElement("div",{className:"col s4"},n.a.createElement("div",{className:"card-panel white"},n.a.createElement("div",{className:"icon-box"},n.a.createElement("span",null,n.a.createElement("i",{className:"material-icons"},"speaker_notes"),"Comments"),n.a.createElement("span",null,"2,543"))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},n.a.createElement("div",{className:"card-panel white"},n.a.createElement(u.d,{data:this.data2})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s3"},n.a.createElement("div",{className:"card-panel white"},n.a.createElement("h5",null,"Quick Tip"),n.a.createElement("p",null,"Lourem ipsum test text for you see and never read"))),n.a.createElement("div",{className:"col s3"},n.a.createElement("div",{className:"card-panel white"},n.a.createElement("h5",null,"Monthly Revenue"),n.a.createElement("p",null,"Lourem ipsum test text for you see and never read"))),n.a.createElement("div",{className:"col s6"},n.a.createElement("div",{className:"card-panel white"},n.a.createElement("h5",null,"Recent Uploads"),n.a.createElement("p",null,"Lourem ipsum test text for you see and never read")))))}}]),a}(l.Component),A=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).getChartData=function(e){return t.state.data},t.state={data:{labels:["1","2","3","4","5"],datasets:[{label:"Videos Made",backgroundColor:"rgba(166,61,91, 0.7)",data:[4,5,1,10,32,2,12]},{label:"Subscriptions",backgroundColor:"rgba(255,115,64,0.7)",data:[14,15,21,0,12,4,1]}]},options:{responsive:!0,tooltips:{mode:"nearest",intersect:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(b.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{exact:!0,path:"/",render:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s3 offset-s2"},n.a.createElement(v,null)),n.a.createElement("div",{className:"col s6"},n.a.createElement("div",{style:x},n.a.createElement("h2",null,"Charts Js Samples"),n.a.createElement("h4",null,"Line Chart"),n.a.createElement(u.d,{options:e.options,data:e.getChartData}),n.a.createElement("h4",null,"Bar Chart"),n.a.createElement(u.a,{options:e.options,data:e.getChartData}),n.a.createElement("h4",null,"Horizontal Bar Chart"),n.a.createElement(u.c,{options:e.options,data:e.getChartData}),n.a.createElement("h4",null,"Doughnut Chart"),n.a.createElement(u.b,{options:e.options,data:e.getChartData}))))}}),n.a.createElement(p.a,{exact:!0,path:"/line",render:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s3 offset-s2"},n.a.createElement(v,null)),n.a.createElement("div",{className:"col s6"},n.a.createElement(h,null)))}}),n.a.createElement(p.a,{exact:!0,path:"/bar",render:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s3 offset-s2"},n.a.createElement(v,null)),n.a.createElement("div",{className:"col s6"},n.a.createElement(k,null)))}}),n.a.createElement(p.a,{exact:!0,path:"/horizontal-bar",render:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s3 offset-s2"},n.a.createElement(v,null)),n.a.createElement("div",{className:"col s6"},n.a.createElement("h3",null,"Horizontal Bar Chart"),n.a.createElement("div",{className:"ibox-content"},n.a.createElement(N,null))))}}),n.a.createElement(p.a,{exact:!0,path:"/pie",render:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s3 offset-s2"},n.a.createElement(v,null)),n.a.createElement("div",{className:"col s6"},n.a.createElement("h3",null,"Pie Chart"),n.a.createElement("div",{className:"ibox-content"},n.a.createElement(O,null))))}}),n.a.createElement(p.a,{exact:!0,path:"/moch-dashboard",render:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s1"},n.a.createElement(v,null)),n.a.createElement("div",{className:"col s8 offset-s2"},n.a.createElement("h3",null,"Dashboard Overview"),n.a.createElement(S,null)))}})))}}]),a}(l.Component),x={position:"relative",width:600,height:550,textAlign:"-webkit-center"},w=A;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,a,t){e.exports=t(234)},91:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.9bd24569.chunk.js.map