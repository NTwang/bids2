(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1180:function(e,t,a){"use strict";var r=a(144);t.a=Object(r.a)("amz_sales",["dashboard_01","dashboard_01/list","dashboard_02","dashboard_02/list","details","details/export","product_lines"],"")},1189:function(e,t,a){"use strict";var r=a(144);t.a=Object(r.a)("reviewOrder",["list","edit","add","batchAdd"],"")},1235:function(e,t,a){"use strict";a.r(t);var r=a(63),n=a.n(r),s=a(24),c=a(1180),d=a(1189);t.default={namespace:"reviewOrder",state:{},reducers:{init:function(e,t){var a=t.payload;return Object(s.a)({},e,a)},update:function(e,t){var a=t.payload;return Object(s.a)({},e,a)}},effects:{queryList:n.a.mark(function e(t,a){var r,s,c;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.call,s=a.put,e.next=3,r(d.a.list,t.payload);case 3:return c=e.sent,e.next=6,s({type:"init",payload:{reviewOrderList:c.content}});case 6:case"end":return e.stop()}},e)}),queryProductLines:n.a.mark(function e(t,a){var r,s,d;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.call,s=a.put,e.next=3,r(c.a.product_lines,t.payload);case 3:return d=e.sent,e.next=6,s({type:"update",payload:{productLines:d.content}});case 6:case"end":return e.stop()}},e)})}}}}]);