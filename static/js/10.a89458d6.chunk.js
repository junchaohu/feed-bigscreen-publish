(window["webpackJsonpfeed-bigscreen"]=window["webpackJsonpfeed-bigscreen"]||[]).push([[10],{180:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(20),c=a(22),o=a(21),l=a(23),i=a(0),s=a.n(i),p=a(103),m=a.n(p),h=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return 0===this.props.idx?s.a.createElement("td",{className:"text-center sm"}," ",this.props.col," "):this.props.total&&6===this.props.idx?s.a.createElement("td",{className:"text-center sm"}," ",(100*parseFloat(this.props.col)).toFixed(2)+"%"," "):s.a.createElement("td",{className:"text-center sm"}," ",this.props.col.toFixed(2)," ")}}]),t}(i.Component),u=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("tr",null,this.props.row.map(function(t,a){return s.a.createElement(h,{col:t,idx:a,key:a,total:e.props.total})}))}}]),t}(i.Component),d=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.factory_report,t=this.props.total_report;return s.a.createElement("table",{className:"footable table table-bordered table-hover","data-sort":"false"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"text-center"},"\u7528\u80fd\u5355\u4f4d"),s.a.createElement("th",{className:"text-center"},"\u5b9e\u9645\u80fd\u8017-KWh"),s.a.createElement("th",{className:"text-center"},"\u7406\u8bba\u80fd\u8017-KWh"),s.a.createElement("th",{className:"text-center"},"\u4ea7\u91cf"),s.a.createElement("th",{className:"text-center"},"\u5b9e\u9645\u5355\u8017-KWh"),s.a.createElement("th",{className:"text-center"},"\u7406\u8bba\u5355\u8017-KWh"),s.a.createElement("th",{className:"text-center"},"\u5b9e\u9645\u5355\u8017\u8868\u73b0\u72b6\u6001"))),s.a.createElement("tbody",null,e.map(function(e,t){return s.a.createElement(u,{row:e,key:t})})),s.a.createElement("tfoot",{className:"hide-if-no-paging"},t.map(function(e,t){return s.a.createElement(u,{row:e,key:t,total:!0})})))}}]),t}(i.Component),f=a(7),b=a.n(f),g=a(57),E=a.n(g),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).componentDidMount=function(){a.chartObj=a.chart.current.chart,a.chartObj.showLoading()},a.componentDidUpdate=function(e,t){a.props.loading?a.chartObj.showLoading():a.chartObj.hideLoading()},a.chart=s.a.createRef(),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(E.a,{highcharts:b.a,options:this.props.options,ref:this.chart}))}}]),t}(i.Component),j=a(65),O=a(66),v=400,N=function(){var e=window.innerHeight;v=e>950?450:e>750?400:350},w=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).componentDidMount=function(){a.setState({httpLoading:!0});var e=Object(O.a)();setTimeout(function(){a.setState(function(t,n){return{loading:!1,factory_report:e.factory_report,total_report:e.factory_total,energyChart:a.getMultiBarConfig(e.factory_report,[1,2],e.real_product_count,e.theoretical_product_count),cpuChart:a.getMultiBarConfig(e.factory_report,[4,5])}}),a.setState({httpLoading:!1})},3e3)},a.genSeries=function(e,t,n,r){var c={name:a.nameMap[t[0]],data:e.map(function(e){return e[t[0]]})},o={name:a.nameMap[t[1]],data:e.map(function(e){return e[t[1]]})};return n&&r?[c,o,{name:a.nameMap[9],data:e.map(function(e){return e[0]}).fill(n),type:"line",yAxis:1},{name:a.nameMap[10],data:e.map(function(e){return e[0]}).fill(r),type:"line",yAxis:1}]:[c,o]},a.getMultiBarConfig=function(e,t,n,r,c){var o=Object.assign({},j.d);return o.chart.height=v,o.series=a.genSeries(e,t,n,r),o.xAxis.categories=e.map(function(e){return e[0]}),o},a.nameMap={1:"\u5b9e\u9645\u80fd\u8017",2:"\u7406\u8bba\u80fd\u8017",4:"\u5b9e\u9645\u5355\u8017",5:"\u7406\u8bba\u5355\u8017",9:"\u5b9e\u9645\u4ea7\u91cf",10:"\u7406\u8bba\u4ea7\u91cf"},N();var r=Object.assign({},j.b,{chart:{height:v,backgroundColor:"transparent"}});return a.state={httpLoading:!1,energyTitle:"\u5b9e\u9645\u80fd\u8017-\u7406\u8bba\u80fd\u8017-\u5bf9\u6bd4\u56fe-kwh",cpuTitle:"\u5b9e\u9645\u5355\u8017-\u7406\u8bba\u5355\u8017-\u5bf9\u6bd4\u56fe-kwh",loading:!0,factory_report:[],total_report:[],energyChart:r,cpuChart:r},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(m.a,{show:this.state.httpLoading,color:"#29d"}),s.a.createElement("div",{className:"row chart-box"},s.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12"},s.a.createElement("div",{className:"panel panel-warning dashboard"},s.a.createElement("div",{className:"panel-heading dashboard"},this.state.energyTitle),s.a.createElement("div",{className:"panel-body"},s.a.createElement(y,{options:this.state.energyChart,loading:this.state.loading})))),s.a.createElement("div",{className:"col-lg-offset-4 col-md-offset-4 col-lg-4 col-md-4 col-sm-12"},s.a.createElement("div",{className:"panel panel-warning dashboard"},s.a.createElement("div",{className:"panel-heading dashboard"},this.state.cpuTitle),s.a.createElement("div",{className:"panel-body"},s.a.createElement(y,{options:this.state.cpuChart,loading:this.state.loading}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"panel panel-default"},s.a.createElement("div",{className:"panel-body"},s.a.createElement(d,{factory_report:this.state.factory_report,total_report:this.state.total_report})))))}}]),t}(i.Component);t.default=w}}]);
//# sourceMappingURL=10.a89458d6.chunk.js.map