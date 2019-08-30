(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1177:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(){var e={};try{e=JSON.parse(localStorage.getItem("permission"))}catch(t){console.log(t)}return e[location.hash.replace("#","").split("?")[0]]||{}}},1181:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(21);var n=function(e){var t=[{text:"US",code:"US"},{text:"JP",code:"JP"},{text:"UK",code:"UK"},{text:"AU",code:"AU"},{text:"DE",code:"DE"},{text:"FR",code:"FR"},{text:"IT",code:"IT"},{text:"ES",code:"ES"}];return e?(t.filter(function(t){return t.code==e})[0]||{}).text:t}},1190:function(e,t,a){"use strict";var n=a(144);t.a=Object(n.a)("relevances",["list","edit","add","batchAdd"],"")},1197:function(e,t,a){e.exports=a.p+"static/media/PN-SKU.903019b2.xlsx"},1240:function(e,t,a){"use strict";a.r(t);var n=a(24),l=a(16),i=a(17),o=a(19),r=a(18),s=a(20),c=a(1),m=a.n(c),u=a(39),d=a(21),p=a.n(d),h=a(291),f=a(28),b=a.n(f),E=a(1181),y=a(98),g=a(1197),k=a.n(g),O=a(1190),_=a(1177),v=h.j.create("ModalForm")(function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.handleOk,n=e.handleCancel,l=e.visible,i=e.rowData,o=void 0===i?{}:i,r=!!o.id;return m.a.createElement(h.n,{title:p.a.get("common._EDIT_"),visible:l,maskClosable:!1,onOk:a,onCancel:n,destroyOnClose:!0},m.a.createElement(h.j,{labelCol:{span:5},wrapperCol:{span:12},onSubmit:this.handleSubmit},m.a.createElement(h.m,{label:"PN"},t("pn",{initialValue:o.pn,rules:[{required:!0,message:"Please input your PN!"}]})(m.a.createElement(h.l,{disabled:r,autoComplete:"off",size:"small"}))),m.a.createElement(h.m,{label:"SKU"},t("sku",{initialValue:o.sku,rules:[{required:!0,message:"Please input your SKU!"}]})(m.a.createElement(h.l,{disabled:r,autoComplete:"off",size:"small"}))),m.a.createElement(h.m,{label:p.a.get("oms._CHANNEL_")},t("channel",{initialValue:o.channel})(m.a.createElement(h.l,{autoComplete:"off",size:"small"}))),m.a.createElement(h.m,{label:p.a.get("common._COUNTRY_")},t("country",{initialValue:o.country})(m.a.createElement(h.r,{size:"small"},b.a.map(Object(E.a)(),function(e,t){return m.a.createElement(h.r.Option,{key:t,value:e.code},e.text)}))))))}}]),t}(c.Component)),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).handleEdit=function(e){a.setState(b.a.assign(a.state,{visible:!0,rowData:e}))},a.handleAdd=function(e){a.setState({rowData:{},visible:!0})},a.handleSearch=function(e){e.preventDefault(),a.table.draw()},a.handleCancel=function(){a.setState({visible:!1,rowData:{}})},a.handleOk=function(e){e.preventDefault();var t=a.modalForm.props.form.validateFields,l=a.state.rowData;t(function(e,t){e||(l.id?O.a.edit:O.a.add)(Object(n.a)({},t,{id:l.id})).then(function(e){var t=e.status,n=e.msg;if(!t)return h.w.error(n),!1;a.setState({visible:!1}),setTimeout(a.modalForm.props.form.resetFields,300),a.table.draw()})})},a.handleDownload=function(){var e=a.props.form,t=e.getFieldsValue,l=(e.getFieldValue,Object(n.a)({},t(),{action:"download"}));O.a.list(l).then(function(e){var t=e.status,a=e.msg,n=e.content,l=void 0===n?{}:n;if(!t)return h.w.error(a),!1;Object(y.a)({sheetName:p.a.get("menu._REVIEW_ORDER_"),columns:[{title:p.a.get("common._COUNTRY_"),key:"country"},{title:p.a.get("oms._CHANNEL_"),key:"channel"},{title:"PN",key:"pn"},{title:"SKU",key:"sku"}],list:l.list||[]})})},a.state={visible:!1,rowData:{}},a.permission=Object(_.a)(),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.table.draw()}},{key:"render",value:function(){var e=this,t=this.props.form,a=t.getFieldDecorator,l=t.getFieldsValue,i=this.props.relevances.list;this.columns=[{title:p.a.get("common._COUNTRY_"),dataIndex:"country"},{title:p.a.get("oms._CHANNEL_"),dataIndex:"channel"},{title:"PN",dataIndex:"pn"},{title:"SKU",dataIndex:"sku"},{title:p.a.get("common._EDIT_"),dataIndex:"id",render:function(t,a){return e.permission.edit&&m.a.createElement("a",{href:"javascript:;",onClick:function(){return e.handleEdit(a)}},p.a.get("common._EDIT_"))}}];for(var o=[{title:"Country",key:"country"},{title:"Channel",key:"channel"},{title:"PN",key:"pn"},{title:"SKU",key:"sku"},{title:"ErrMsg",key:"errMsg"}],r={},s=0;s<o.length-2;s++)r[o[s].title]=o[s].key;return m.a.createElement(h.h,null,m.a.createElement(h.d,{onSubmit:this.handleSearch},m.a.createElement(h.k,{label:"SKU",htmlType:a("sku")(m.a.createElement(h.l,{size:"small",autoComplete:"off"}))}),m.a.createElement(h.k,{label:"PN",htmlType:a("pn")(m.a.createElement(h.l,{size:"small",autoComplete:"off"}))}),m.a.createElement(h.k,{label:p.a.get("common._COUNTRY_"),htmlType:a("countries",{initialValue:["US"]})(m.a.createElement(h.r,{size:"small",mode:"multiple",filterOption:function(e,t){var a=t.props;return!!~b.a.toLower(a.children).indexOf(b.a.toLower(e))}},b.a.map(Object(E.a)(),function(e,t){return m.a.createElement(h.r.Option,{size:"small",key:t,value:e.code},e.text)})))}),m.a.createElement(h.k,null,m.a.createElement(h.a,{type:"primary",icon:"search",size:"small",htmlType:"submit"},p.a.get("common._SEARCH_")))),m.a.createElement(h.e,{title:p.a.get("common._LIST_"),ref:function(t){return e.table=t},style:{marginTop:20},columns:this.columns,dataSource:i.list||[],total:i.total,rowKey:function(e){return e.id},actionsTop:[this.permission.edit&&m.a.createElement(h.a,{key:"add",onClick:this.handleAdd,type:"primary",icon:"plus",size:"small",style:{marginRight:10}},p.a.get("common._ADD_")),this.permission.download&&m.a.createElement(h.a,{key:"download",onClick:this.handleDownload,target:"_blank",size:"small",icon:"download",type:"primary",style:{marginRight:10}},p.a.get("common._DOWNLOAD_")),this.permission.edit&&m.a.createElement(h.a,{key:"uploadExcel",href:k.a,target:"_blank",size:"small",icon:"download",type:"primary",style:{marginRight:10}},p.a.get("common._DOWNLOAD_TEMPLATE_")),this.permission.edit&&m.a.createElement(h.t,{key:"uplaod",batchUploadApi:O.a.batchAdd,local:!0,excelHeader:r,errorColumns:o,exportError:!0,fileSubmit:this.fileSubmit,table:this.table,sheetName:"PN-SKU"})],required:{type:"relevances/queryList",formValues:Object(n.a)({},l())}}),m.a.createElement(v,Object.assign({},this.state,{wrappedComponentRef:function(t){e.modalForm=t},handleOk:this.handleOk,handleCancel:this.handleCancel})))}}]),t}(c.Component);t.default=Object(u.connect)(function(e){return e})(h.j.create("search_form")(C))}}]);