webpackJsonp([25],{105:function(t,e,i){"use strict";function r(t){i(327)}Object.defineProperty(e,"__esModule",{value:!0});var d=i(329),a=i(330),c=i(14),l=r,s=c(d.a,a.a,!1,l,null,null);e.default=s.exports},327:function(t,e,i){var r=i(328);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(13)("0681d5ab",r,!0)},328:function(t,e,i){e=t.exports=i(1)(void 0),e.push([t.i,".record{width:100%;height:100%}.record .title{margin-top:20px;margin-left:40px;font-size:14px;color:#666;font-weight:800}.record .title .money{color:#ec6337}.record .table{width:804px;height:344px;margin:10px 0 0 10px;border:1px solid #d8d8d8}.record .table .row{display:flex;height:40px}.record .table .row .item{display:flex;flex-direction:column;justify-content:center;color:#666;font-size:12px}.record .table .row .item:first-child{width:90px;padding-left:10px}.record .table .row .item:nth-child(2){width:70px}.record .table .row .item:nth-child(3){width:242px}.record .table .row .item:nth-child(4){width:150px}.record .table .row .item:nth-child(5){width:80px}.record .table .row .item:nth-child(6){width:70px}.record .table .row .item:nth-child(7){width:100px;padding-right:10px}.record .table .header{display:flex;height:40px;background:#f6f6f6}.record .table .header .item{display:flex;flex-direction:column;justify-content:center;color:#666;font-size:12px}.record .table .header .item:first-child{width:90px;padding-left:10px}.record .table .header .item:nth-child(2){width:70px}.record .table .header .item:nth-child(3){width:242px}.record .table .header .item:nth-child(4){width:150px}.record .table .header .item:nth-child(5){width:80px}.record .table .header .item:nth-child(6){width:70px}.record .table .header .item:nth-child(7){width:100px;padding-right:10px}.record .table .content{height:304px;overflow-y:scroll}.record .table .c-row{display:flex;height:40px;min-height:58px;border-top:1px solid #d8d8d8}.record .table .c-row .item{display:flex;flex-direction:column;justify-content:center;color:#666;font-size:12px}.record .table .c-row .item:first-child{width:90px;padding-left:10px}.record .table .c-row .item:nth-child(2){width:70px}.record .table .c-row .item:nth-child(3){width:242px}.record .table .c-row .item:nth-child(4){width:150px}.record .table .c-row .item:nth-child(5){width:80px}.record .table .c-row .item:nth-child(6){width:70px}.record .table .c-row .item:nth-child(7){width:100px;padding-right:10px}",""])},329:function(t,e,i){"use strict";e.a={props:["balance"],data:function(){return{items:[]}},mounted:function(){this.aHistory()},methods:{aHistory:function(){var t=this;u.get("/account/balance/history").then(function(e){t.items=e.data||[]})}}}},330:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"record"},[i("div",{staticClass:"title"},[t._v("账户管理")]),t._v(" "),i("div",{staticClass:"title"},[t._v("账户余额："),i("span",{staticClass:"money"},[t._v("¥"+t._s(t.balance.total_balance))])]),t._v(" "),i("div",{staticClass:"table"},[t._m(0),t._v(" "),i("div",{staticClass:"content"},t._l(t.items,function(e,r){return i("div",{key:r,staticClass:"c-row"},[i("div",{staticClass:"item"},[t._v(t._s(e.create_time))]),t._v(" "),i("div",{staticClass:"item"},[t._v(t._s(e.reason_str))]),t._v(" "),i("div",{staticClass:"item"},[e.order_id?i("div",[t._v("订单号："+t._s(e.order_id))]):t._e(),t._v(" "),i("div",[t._v("流水号："+t._s(e.serial))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",[t._v(t._s(e.name))]),t._v(" "),i("div",[t._v(t._s(e.bank_info))])]),t._v(" "),i("div",{staticClass:"item"},[t._v(t._s(e.amount))]),t._v(" "),i("div",{staticClass:"item"},[t._v(t._s(e.status))]),t._v(" "),i("div",{staticClass:"item"},[t._v(t._s(e.enable_time))])])}))])])},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"item"},[t._v("申请时间")]),t._v(" "),i("div",{staticClass:"item"},[t._v("内容")]),t._v(" "),i("div",{staticClass:"item"},[t._v("订单号|流水号")]),t._v(" "),i("div",{staticClass:"item"},[t._v("对方")]),t._v(" "),i("div",{staticClass:"item"},[t._v("金额|明细")]),t._v(" "),i("div",{staticClass:"item"},[t._v("状态")]),t._v(" "),i("div",{staticClass:"item"},[t._v("完成时间")])])}],a={render:r,staticRenderFns:d};e.a=a}});