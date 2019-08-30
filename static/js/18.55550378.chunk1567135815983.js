(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1177:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(){var e={};try{e=JSON.parse(localStorage.getItem("permission"))}catch(t){console.log(t)}return e[location.hash.replace("#","").split("?")[0]]||{}}},1185:function(e,t,a){"use strict";var n=a(144);t.a=Object(n.a)("userPermission",["list","add","edit","delete","detail","detail/save"],"")},1250:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a(16),o=a(17),i=a(19),s=a(18),l=a(20),c=a(1),u=a.n(c),d=a(39),m=a(41),p=a(21),f=a.n(p),h=a(28),v=a.n(h),b=a(291),O=a(1185),E=a(1177),g=b.j.create("ModalForm")(function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.onOk,n=e.onCancel,r=e.visible,o=e.rowData,i=void 0===o?{}:o;i.id;return u.a.createElement(b.n,{title:f.a.get("common._EDIT_"),visible:r,maskClosable:!1,onOk:a,onCancel:n,destroyOnClose:!0},u.a.createElement(b.j,{labelCol:{span:5},wrapperCol:{span:12}},u.a.createElement(b.m,{label:f.a.get("user._ACCOUNT_")},t("account",{initialValue:i.account,rules:[{required:!0,message:"Please input your account!"}]})(u.a.createElement(b.l,{autoComplete:"off",size:"small"}))),u.a.createElement(b.m,{label:f.a.get("user._ROLE_")},t("role",{initialValue:i.roles||[],rules:[{required:!0,message:"Please select your role"}]})(u.a.createElement(b.r,{size:"small",mode:"multiple",filterOption:function(e,t){var a=t.props;return!!~v.a.toLower(a.children).indexOf(v.a.toLower(e))}},v.a.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[{text:"Sales US",code:"salesUS"},{text:"Sales JP",code:"salesJP"},{text:"Sales UK",code:"salesUK"},{text:"Sales AU",code:"salesAU"},{text:"Sales CN",code:"salesCN"},{text:"Sales All",code:"salesAll"},{text:"Marketing",code:"marketing"},{text:"Product",code:"product"},{text:"Purchase",code:"purchase"},{text:"Warehouse",code:"warehouse"},{text:"Logistics",code:"logistics"},{text:"Creative",code:"creative"},{text:"Other",code:"other"}];return e?(t.filter(function(t){return t.code==e})[0]||{}).text:t}(),function(e,t){return u.a.createElement(b.r.Option,{key:t,value:e.code,size:"small"},e.text)}))))))}}]),t}(c.Component)),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).handleDelete=function(e){Object(b.v)({title:f.a.get("common._SURE_DELETE_"),onOk:function(){O.a.delete({id:e}).then(function(e){var t=e.status,n=e.msg;0!=t?(a.setState({visible:!1}),a.table.draw()):b.w.error(n)})}})},a.openAddView=function(e){a.setState({visible:!0,rowData:e})},a.onOk=function(e){e.preventDefault();var t=a.modalForm.props.form.validateFields,r=a.state.rowData;t(function(e,t){e||(r?O.a.edit:O.a.add)(Object(n.a)({},t,{id:r.id})).then(function(e){var t=e.status,n=e.msg;0!=t?(a.setState({visible:!1}),a.table.draw()):b.w.error(n)})})},a.onCancel=function(){a.setState({visible:!1})},a.state={visible:!1,rowData:{}},a.permission=Object(E.a)(),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.table.draw()}},{key:"render",value:function(){var e=this;this.columns=[{title:"Account",dataIndex:"account"},{title:"Role",dataIndex:"roles",render:function(e){return e&&e.join(",")}},{title:f.a.get("common._OPERATION_"),dataIndex:"id",render:function(t,a){var n=[];return e.permission.view&&n.push(u.a.createElement(m.Link,{key:"1",to:{pathname:"UserPermission/detail",state:{id:t}}},f.a.get("user._RIGHTS_PROFILE_"))),e.permission.edit&&n.push(u.a.createElement("span",{key:"2"},u.a.createElement("a",{onClick:function(){return e.openAddView(a)}},f.a.get("common._EDIT_")),u.a.createElement(b.i,{type:"vertical"}),u.a.createElement("a",{onClick:function(){return e.handleDelete(t)}},f.a.get("common._DELETE_")))),2==n.length&&n.splice(1,0,u.a.createElement(b.i,{type:"vertical",key:"3"})),u.a.createElement("span",null,n)}}];var t=this.props.userPermission||{},a=t.userList,n=void 0===a?[]:a,r=t.userListTotal;return u.a.createElement(b.h,null,u.a.createElement(b.e,{title:f.a.get("common._LIST_"),ref:function(t){return e.table=t},columns:this.columns,dataSource:n,total:r,rowKey:function(e){return e.id},actionsTop:[this.permission.edit&&u.a.createElement(b.a,{key:"add",icon:"plus",onClick:function(){return e.openAddView()},type:"primary",size:"small"},f.a.get("common._ADD_"))],required:{type:"userPermission/queryList"}}),u.a.createElement(g,Object.assign({},this.state,{wrappedComponentRef:function(t){return e.modalForm=t},onOk:this.onOk,onCancel:this.onCancel})))}}]),t}(c.Component);t.default=Object(d.connect)(function(e){return e})(b.j.create()(w))}}]);