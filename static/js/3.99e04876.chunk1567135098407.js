(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1177:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(){var e={};try{e=JSON.parse(localStorage.getItem("permission"))}catch(t){console.log(t)}return e[location.hash.replace("#","").split("?")[0]]||{}}},1181:function(e,t,a){"use strict";a.d(t,"a",function(){return r});a(21);var r=function(e){var t=[{text:"US",code:"US"},{text:"JP",code:"JP"},{text:"UK",code:"UK"},{text:"AU",code:"AU"},{text:"DE",code:"DE"},{text:"FR",code:"FR"},{text:"IT",code:"IT"},{text:"ES",code:"ES"}];return e?(t.filter(function(t){return t.code==e})[0]||{}).text:t}},1188:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return n}),a.d(t,"c",function(){return i});a(21);var r=function(e){var t=[{text:"\u81ea\u6709\u8d26\u53f7",code:"ownAccount"},{text:"Reviewer",code:"reviewer"},{text:"\u670d\u52a1\u5546",code:"serviceProvider"},{text:"FB Ads",code:"FB Ads"}];return e?(t.filter(function(t){return t.code==e})[0]||{}).text:t},n=function(e){var t={US:"US",JP:"JP",UK:"UK",AU:"AU"};return e?t.key||e:t},i=function(e){var t={Marine:"Marine","Airline+Express":"Airline+Express",Express:"Express",Railway:"Railway","Marine+Express":"Marine+Express"};return e?t.key||e:t}},1189:function(e,t,a){"use strict";var r=a(144);t.a=Object(r.a)("reviewOrder",["list","edit","add","batchAdd"],"")},1195:function(e,t,a){e.exports=a.p+"static/media/reviewOrder.c08b999e.xlsx"},1234:function(e,t,a){"use strict";a.r(t);var r=a(24),n=a(16),i=a(17),l=a(19),o=a(18),s=a(20),c=a(1),d=a.n(c),m=a(39),u=a(21),p=a.n(u),f=a(291),E=a(15),k=a.n(E),v=a(1181),h=a(28),b=a.n(h),y=a(1188),w=a(1189),O=a(98),g=a(1195),_=a.n(g),x=a(1177),R=Object(y.b)(),D=f.j.create("ModalForm")(function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.handleOk,r=e.handleCancel,n=e.visible,i=e.rowData,l=void 0===i?{}:i,o=!!l.id;return d.a.createElement(f.n,{title:p.a.get("common._EDIT_"),visible:n,maskClosable:!1,onOk:a,onCancel:r,destroyOnClose:!0},d.a.createElement(f.j,{labelCol:{span:5},wrapperCol:{span:12}},d.a.createElement(f.m,{label:"Market"},t("market",{initialValue:l.market,rules:[{required:!0,message:"Please input your market!"}]})(d.a.createElement(f.r,{size:"small",disabled:o,filterOption:function(e,t){var a=t.props;return!!~b.a.toLower(a.children).indexOf(b.a.toLower(e))}},b.a.map(Object(v.a)(),function(e,t){return d.a.createElement(f.r.Option,{size:"small",key:t,value:e.code},e.text)})))),d.a.createElement(f.m,{label:"Source"},t("source",{initialValue:l.source,rules:[{required:!0,message:"Please select your Source!"}]})(d.a.createElement(f.r,{size:"small",disabled:o},b.a.map(R,function(e,t){return d.a.createElement(f.r.Option,{key:t,value:e.code},e.text)})))),d.a.createElement(f.m,{label:"OrderNo"},t("orderNo",{initialValue:l.orderNo,rules:[{required:!0,message:"Please input your orderNo!"}]})(d.a.createElement(f.l,{disabled:o,autoComplete:"off",size:"small"}))),d.a.createElement(f.m,{label:"SKU"},t("sku",{initialValue:l.sku,rules:[{required:!0,message:"Please input your SKU!"}]})(d.a.createElement(f.l,{autoComplete:"off",size:"small"}))),d.a.createElement(f.m,{label:"Cost"},t("cost",{initialValue:l.cost})(d.a.createElement(f.l,{autoComplete:"off",size:"small"}))),d.a.createElement(f.m,{label:"Reviewer"},t("reviewer",{initialValue:l.reviewer})(d.a.createElement(f.l,{size:"small",autoComplete:"off"}))),d.a.createElement(f.m,{label:"Review"},t("review",{initialValue:l.review})(d.a.createElement(f.l.TextArea,{size:"small"}))),d.a.createElement(f.m,{label:p.a.get("common._REMARK_")},t("remark",{initialValue:l.remark})(d.a.createElement(f.l.TextArea,{size:"small"})))))}}]),t}(c.Component)),S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).handleEdit=function(e){a.setState(b.a.assign(a.state,{visible:!0,rowData:e}))},a.handleAdd=function(e){a.setState({rowData:{},visible:!0})},a.handleSearch=function(e){e.preventDefault(),a.table.draw()},a.handleCancel=function(){a.setState({visible:!1,rowData:{}})},a.handleOk=function(e){e.preventDefault();var t=a.modalForm.props.form.validateFields,n=a.state.rowData;t(function(e,t){e||(n.id?w.a.edit:w.a.add)(Object(r.a)({},t,{id:n.id})).then(function(e){var t=e.status,r=e.msg;if(!t)return f.w.error(r),!1;a.setState({visible:!1}),setTimeout(a.modalForm.props.form.resetFields,300),a.table.draw()})})},a.handleDownload=function(){var e=a.props.form,t=e.getFieldsValue,n=e.getFieldValue,i=Object(r.a)({},b.a.omit(t(),"date"),{startDate:n("date")[0]&&k()(n("date")[0]).format(a.format),endDate:n("date")[1]&&k()(n("date")[1]).format(a.format),action:"download"});w.a.list(i).then(function(e){var t=e.status,a=e.msg,r=e.content,n=void 0===r?{}:r;if(!t)return f.w.error(a),!1;Object(O.a)({sheetName:p.a.get("menu._REVIEW_ORDER_"),columns:[{title:p.a.get("common._DATE_"),key:"date"},{title:p.a.get("oms._MARKET_"),key:"market"},{title:"Product Line",key:"productLine"},{title:p.a.get("oms._SOURCE_"),key:"source"},{title:p.a.get("oms._ORDER_ID_"),key:"orderNo"},{title:"Sku",key:"sku"},{title:p.a.get("oms._REVENUE_"),key:"revenue"},{title:"Cost",key:"cost"},{title:"Reviewer",key:"reviewer"},{title:"Review",key:"review"},{title:"Feedback",key:"feedback"},{title:"Remark",key:"remark"}],list:n.list||[]})})},a.state={visible:!1,rowData:{},columns:[]},a.dispatch=a.props.dispatch,a.format="YYYY-MM-DD",a.permission=Object(x.a)(),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.table.draw(),this.dispatch({type:"reviewOrder/queryProductLines",payload:{}})}},{key:"componentWillReceiveProps",value:function(){var e=this;this.columns=[{title:p.a.get("common._DATE_"),dataIndex:"date",align:"center",sorter:!0,defaultSortOrder:"descend"},{title:p.a.get("oms._MARKET_"),dataIndex:"market"},{title:"Product Line",dataIndex:"productLine",visible:!1},{title:p.a.get("oms._SOURCE_"),dataIndex:"source",render:function(e){return e&&Object(y.b)(e)}},{title:p.a.get("oms._ORDER_ID_"),dataIndex:"orderNo"},{title:"SKU",dataIndex:"sku"},{title:p.a.get("oms._REVENUE_"),dataIndex:"revenue",sorter:!0},{title:p.a.get("oms._COST_"),dataIndex:"cost",sorter:!0},{title:"Reviewer",dataIndex:"reviewer"},{title:"Review",dataIndex:"review"},{title:"Feedback",dataIndex:"feedback"},{title:p.a.get("common._REMARK_"),dataIndex:"remark"},{title:p.a.get("common._OPERATION_"),dataIndex:"id",render:function(t,a){return e.permission.edit&&d.a.createElement("a",{onClick:function(){return e.handleEdit(a)}},p.a.get("common._EDIT_"))},visible:"fixed"}]}},{key:"render",value:function(){for(var e=this,t=this.props.form,a=t.getFieldDecorator,n=t.getFieldValue,i=t.getFieldsValue,l=this.props.reviewOrder,o=l.reviewOrderList,s=void 0===o?{}:o,c=l.productLines,m=void 0===c?{}:c,u=[{title:"Market",key:"market"},{title:"Source",key:"source"},{title:"OrderNo",key:"orderNo"},{title:"SKU",key:"sku"},{title:"Cost",key:"cost"},{title:"Reviewer",key:"reviewer"},{title:"Review",key:"review"},{title:"Remark",key:"remark"},{title:"ErrMsg",key:"errMsg"}],E={},h=0;h<u.length-2;h++)E[u[h].title]=u[h].key;return d.a.createElement(f.h,null,d.a.createElement(f.d,{layout:"inline",onSubmit:this.handleSearch},d.a.createElement(f.k,{label:"Product Line",htmlType:a("productLines")(d.a.createElement(f.r,{size:"small",mode:"multiple",filterOption:function(e,t){var a=t.props;return!!~b.a.toLower(a.children).indexOf(b.a.toLower(e))}},b.a.map(m.list||[],function(e,t){return d.a.createElement(f.r.Option,{key:t,value:e.code},e.name)})))}),d.a.createElement(f.k,{label:"SKU",htmlType:a("sku")(d.a.createElement(f.l,{size:"small",autoComplete:"off"}))}),d.a.createElement(f.k,{label:"Market",htmlType:a("countries",{initialValue:["US"]})(d.a.createElement(f.r,{size:"small",mode:"multiple",filterOption:function(e,t){var a=t.props;return!!~b.a.toLower(a.children).indexOf(b.a.toLower(e))}},b.a.map(Object(v.a)(),function(e,t){return d.a.createElement(f.r.Option,{size:"small",key:t,value:e.code},e.text)})))}),d.a.createElement(f.k,{label:"Source",htmlType:a("source")(d.a.createElement(f.r,{size:"small",mode:"multiple",filterOption:function(e,t){var a=t.props;return!!~b.a.toLower(a.children).indexOf(b.a.toLower(e))}},b.a.map(R,function(e,t){return d.a.createElement(f.r.Option,{key:t,value:e.code},e.text)})))}),d.a.createElement(f.k,{label:p.a.get("oms._ORDER_ID_"),htmlType:a("orderNo")(d.a.createElement(f.l,{size:"small",autoComplete:"off"}))}),d.a.createElement(f.k,{label:"Reviewer",htmlType:a("reviewer")(d.a.createElement(f.l,{size:"small",autoComplete:"off"}))}),d.a.createElement(f.k,{label:p.a.get("common._TIME_"),htmlType:a("date",{initialValue:[void 0,void 0]})(d.a.createElement(f.o,{size:"small",ranges:{"\u4eca\u5929":[k()(),k()()],"\u672c\u5468":[k()().startOf("week"),k()().endOf("week")],"\u5f53\u6708":[k()().startOf("month"),k()().endOf("month")]}}))}),d.a.createElement(f.b,{align:"right"},d.a.createElement(f.a,{htmlType:"submit",type:"primary",size:"small",icon:"search"},p.a.get("common._SEARCH_")))),d.a.createElement(f.e,{title:p.a.get("common._LIST_"),columns:this.columns,ref:function(t){return e.table=t},dataSource:s.list||[],rowKey:function(e){return e.id},total:s.total,style:{marginTop:20},cVisible:!0,actionsTop:[this.permission.edit&&d.a.createElement(f.a,{key:"add",onClick:this.handleAdd,type:"primary",icon:"plus",size:"small",style:{marginRight:10}},p.a.get("common._ADD_")),this.permission.download&&d.a.createElement(f.a,{key:"download",onClick:this.handleDownload,target:"_blank",size:"small",icon:"download",type:"primary",style:{marginRight:10}},p.a.get("common._DOWNLOAD_")),this.permission.edit&&d.a.createElement(f.a,{key:"uploadExcel",href:_.a,target:"_blank",size:"small",icon:"download",type:"primary",style:{marginRight:10}},p.a.get("common._DOWNLOAD_TEMPLATE_")),this.permission.edit&&d.a.createElement(f.t,{key:"uplaod",local:!0,excelHeader:O.a,exportError:!0,errorColumns:u,batchUploadApi:w.a.batchAdd,table:this.table})],required:{type:"reviewOrder/queryList",formValues:Object(r.a)({},b.a.omit(i(),["date"]),{startDate:n("date")[0]&&k()(n("date")[0]).format(this.format),endDate:n("date")[1]&&k()(n("date")[1]).format(this.format),sort:{column:"date",order:"descend"}})}}),d.a.createElement(D,Object.assign({},this.state,{wrappedComponentRef:function(t){e.modalForm=t},handleOk:this.handleOk,handleCancel:this.handleCancel})))}}]),t}(c.Component);t.default=Object(m.connect)(function(e){return e})(f.j.create()(S))}}]);