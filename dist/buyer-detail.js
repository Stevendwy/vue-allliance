webpackJsonp([8],{113:function(t,e,a){"use strict";function r(t){a(400)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(402),i=a(423),n=a(14),o=r,c=n(s.a,i.a,!1,o,"data-v-5b7b6934",null);e.default=c.exports},400:function(t,e,a){var r=a(401);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(13)("642b2a22",r,!0)},401:function(t,e,a){e=t.exports=a(1)(void 0),e.push([t.i,".order[data-v-5b7b6934]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;height:calc(100% - 32px)}.order .o-title[data-v-5b7b6934]{display:flex;justify-content:center;align-items:center;width:100%;height:60px;background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.24);font-size:20px;color:#ec6337}.order .o-top[data-v-5b7b6934]{margin-top:10px}.order .pay-total-container .pay-total[data-v-5b7b6934]{display:flex;align-items:center;height:112px;width:1024px;padding:0 10px;margin-top:10px;font-size:14px;color:#666;background-color:#fdefeb;justify-content:space-between}.order .pay-total-container .pay-total .pt-pay[data-v-5b7b6934]{display:flex;flex-direction:column;align-items:flex-end}.order .pay-total-container .pay-total .pt-pay span[data-v-5b7b6934]{margin:4px 0}.order .pay-total-container .pay-total .pt-pay .money[data-v-5b7b6934]{color:#ec6337;margin-left:4px}.order .o-top[data-v-5b7b6934]{height:calc(100% - 120px);overflow-y:scroll}.order .o-top .o-list-container[data-v-5b7b6934],.order .o-top[data-v-5b7b6934]{display:flex;flex-direction:column;align-items:center;width:100%}.order .o-footer-container[data-v-5b7b6934]{display:flex;justify-content:center;width:100%;margin-top:10px;background-color:#fff}.order .o-footer-container .o-footer[data-v-5b7b6934]{display:flex;justify-content:flex-end;width:1024px}.order .o-footer-container .o-footer .back[data-v-5b7b6934]{width:110px;padding:10px 20px;background-color:#ec6337;border:1px solid #ec6337}",""])},402:function(t,e,a){"use strict";var r=a(403),s=a(408),i=a(413),n=a(8),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t};e.a={components:{oExpress:r.a,oAddress:s.a,oList:i.a},computed:o({},n.a.mapState("buyer",["detailOrdersData"]),{carriage:function(){return this.detailOrdersData.carriage_unit+this.detailOrdersData.carriage}}),methods:{back:function(){this.$router.history.go(-1)}}}},403:function(t,e,a){"use strict";function r(t){a(404)}var s=a(406),i=a(407),n=a(14),o=r,c=n(s.a,i.a,!1,o,"data-v-50e774a4",null);e.a=c.exports},404:function(t,e,a){var r=a(405);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(13)("29d92220",r,!0)},405:function(t,e,a){e=t.exports=a(1)(void 0),e.push([t.i,".express-container[data-v-50e774a4]{width:1024px}.express-container .title[data-v-50e774a4]{display:flex;align-items:center;width:1024px;height:40px;background-color:#fdefeb;font-size:14px;color:#333}.express-container .title span[data-v-50e774a4]{margin-left:10px}.express-container .express[data-v-50e774a4]{width:1024px;font-size:18px}.express-container .express .e-container[data-v-50e774a4]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;margin-top:10px;background-color:#fff}.express-container .express .e-container .ec-title[data-v-50e774a4]{margin-top:10px;margin-left:10px;font-size:12px;color:#333;white-space:pre}.express-container .express .e-container .ec-title[data-v-50e774a4]:nth-child(4){margin-bottom:10px}.express-container .express .e-container .ec-after[data-v-50e774a4]{display:flex;margin-bottom:10px}.express-container .express .e-container .ec-after .eca-list[data-v-50e774a4]{display:flex;flex-direction:column;width:900px;margin-top:10px}.express-container .express .e-container .ec-after .eca-list .eca-item[data-v-50e774a4]{color:#333;font-size:12px}.express-container .no-info[data-v-50e774a4]{width:100%;line-height:60px;padding-left:10px;font-size:14px;background:#fdefeb}",""])},406:function(t,e,a){"use strict";var r=a(8),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t};e.a={props:["orderStatus"],data:function(){return{expressObj:{}}},computed:s({},r.a.mapState("buyer",["detailOrdersData"]),{list:function(){return this.expressObj.tracing||[]},expressStatusStr:function(){var t="";switch(this.orderStatus){case"created":t="待付款";break;case"paid":t="待发货";break;case"closed":t="已关闭"}return t},carriage:function(){return this.expressObj.carriage_unit+this.expressObj.carriage}}),mounted:function(){this.aList()},methods:{aList:function(){var t=this;u.get("/community/order/logistics/info",{order_id:this.detailOrdersData.order_id}).then(function(e){return t.expressObj=e})}}}},407:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"express-container"},[t.expressObj.waybill_no?a("div",{staticClass:"has-info"},[t._m(0),t._v(" "),a("div",{staticClass:"express"},[a("div",{staticClass:"e-container"},[a("span",{staticClass:"ec-title"},[t._v("物流公司: "+t._s(t.expressObj.logistics))]),t._v(" "),a("span",{staticClass:"ec-title"},[t._v("运单号码: "+t._s(t.expressObj.waybill_no))]),t._v(" "),a("span",{staticClass:"ec-title"},[t._v("备注: "+t._s(t.expressObj.remark))]),t._v(" "),a("span",{staticClass:"ec-title"},[t._v("运费金额: "+t._s(t.carriage))])])])]):a("div",{staticClass:"no-info"},[t._v("\n    当前订单状态："+t._s(t.expressStatusStr)+"\n  ")])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("物流信息")])])}],i={render:r,staticRenderFns:s};e.a=i},408:function(t,e,a){"use strict";function r(t){a(409)}var s=a(411),i=a(412),n=a(14),o=r,c=n(s.a,i.a,!1,o,"data-v-021ccd8b",null);e.a=c.exports},409:function(t,e,a){var r=a(410);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(13)("3a28642c",r,!0)},410:function(t,e,a){e=t.exports=a(1)(void 0),e.push([t.i,".address-container[data-v-021ccd8b]{margin-top:10px;width:1024px}.address-container .title[data-v-021ccd8b]{display:flex;align-items:center;width:1024px;height:40px;background-color:#fdefeb;font-size:14px;color:#333}.address-container .title span[data-v-021ccd8b]{margin-left:10px}.address-container .address[data-v-021ccd8b]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:1024px;height:60px;margin-top:10px;font-size:18px;background-color:#fff}.address-container .address .a-container[data-v-021ccd8b]{width:100%}.address-container .address .a-container .ac-title[data-v-021ccd8b]{margin-left:10px;color:#999}.address-container .address .a-container span[data-v-021ccd8b]{color:#333;font-size:12px;margin-left:64px;white-space:pre}",""])},411:function(t,e,a){"use strict";e.a={props:["addressInfo"],mounted:function(){},methods:{changeAddress:function(){},aList:function(){}}}},412:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address-container"},[t._m(0),t._v(" "),a("div",{staticClass:"address"},[a("div",{staticClass:"a-container"},[a("span",[a("i",{staticClass:"el-icon-service"}),t._v(t._s(" "+(t.addressInfo.receiver||"")))]),t._v(" "),a("span",[a("i",{staticClass:"el-icon-location"}),t._v(t._s(" "+(t.addressInfo.area_cn||"")))]),t._v(" "),a("span",[a("i",{staticClass:"el-icon-location-outline"}),t._v(t._s(" "+(t.addressInfo.address||"")))]),t._v(" "),a("span",[a("i",{staticClass:"el-icon-message"}),t._v(t._s(" "+(t.addressInfo.zip_code||"")))]),t._v(" "),a("span",[a("i",{staticClass:"el-icon-phone-outline"}),t._v(t._s(" "+(t.addressInfo.contact_phone||t.expressRes.contact_tel||"")))])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("订单信息")])])}],i={render:r,staticRenderFns:s};e.a=i},413:function(t,e,a){"use strict";function r(t){a(414)}var s=a(416),i=a(422),n=a(14),o=r,c=n(s.a,i.a,!1,o,"data-v-adf63c16",null);e.a=c.exports},414:function(t,e,a){var r=a(415);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(13)("d801fb8a",r,!0)},415:function(t,e,a){e=t.exports=a(1)(void 0),e.push([t.i,"",""])},416:function(t,e,a){"use strict";var r=a(417),s=a(8),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t};e.a={components:{lTable:r.a},computed:i({},s.a.mapState("buyer",["detailOrdersData"]))}},417:function(t,e,a){"use strict";function r(t){a(418)}var s=a(420),i=a(421),n=a(14),o=r,c=n(s.a,i.a,!1,o,"data-v-71ff35a5",null);e.a=c.exports},418:function(t,e,a){var r=a(419);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(13)("2661c005",r,!0)},419:function(t,e,a){e=t.exports=a(1)(void 0),e.push([t.i,".table[data-v-71ff35a5]{width:1024px;display:flex;flex-direction:column}.table .t-server[data-v-71ff35a5]{display:flex;align-items:center;height:40px;padding-left:10px;font-size:12px;color:#666;white-space:pre}.table .order[data-v-71ff35a5]{display:flex;justify-content:center;align-items:center;color:#333}.table .order[data-v-71ff35a5]:first-child{width:40px}.table .order[data-v-71ff35a5]:nth-child(2){width:140px}.table .order[data-v-71ff35a5]:nth-child(3){width:214px}.table .order[data-v-71ff35a5]:nth-child(4){width:230px}.table .order[data-v-71ff35a5]:nth-child(5){width:80px}.table .order[data-v-71ff35a5]:nth-child(6){width:320px}.table .money[data-v-71ff35a5]{color:#ec6337!important;margin-left:4px}.table .t-box[data-v-71ff35a5]{width:1024px;padding:10px;background-color:#fff}.table .t-box .header[data-v-71ff35a5]{display:flex;height:32px;border:1px solid #d8d8d8;background-color:#d8d8d8}.table .t-box .header .h-order[data-v-71ff35a5]{display:flex;justify-content:center;align-items:center;color:#333;font-size:12px}.table .t-box .header .h-order[data-v-71ff35a5]:first-child{width:40px}.table .t-box .header .h-order[data-v-71ff35a5]:nth-child(2){width:140px}.table .t-box .header .h-order[data-v-71ff35a5]:nth-child(3){width:214px}.table .t-box .header .h-order[data-v-71ff35a5]:nth-child(4){width:230px}.table .t-box .header .h-order[data-v-71ff35a5]:nth-child(5){width:80px}.table .t-box .header .h-order[data-v-71ff35a5]:nth-child(6){width:320px}.table .t-box .content[data-v-71ff35a5]{display:flex;flex-direction:column;border:1px solid #d8d8d8;border-top:0}.table .t-box .content .c-order[data-v-71ff35a5]{display:flex;width:100%;height:40px;background-color:#fff}.table .t-box .content .c-order .c-order[data-v-71ff35a5]{display:flex;justify-content:center;align-items:center;color:#333;font-size:14px}.table .t-box .content .c-order .c-order[data-v-71ff35a5]:first-child{width:40px}.table .t-box .content .c-order .c-order[data-v-71ff35a5]:nth-child(2){width:140px}.table .t-box .content .c-order .c-order[data-v-71ff35a5]:nth-child(3){width:214px}.table .t-box .content .c-order .c-order[data-v-71ff35a5]:nth-child(4){width:230px}.table .t-box .content .c-order .c-order[data-v-71ff35a5]:nth-child(5){width:80px}.table .t-box .content .c-order .c-order[data-v-71ff35a5]:nth-child(6){width:320px}.table .t-box .content .c-order .c-delete[data-v-71ff35a5]{color:#ec6337;cursor:pointer}.table .l-requirement[data-v-71ff35a5]{display:flex;justify-content:space-between;align-items:center;width:1024px;padding:8px 0;background-color:#fff}.table .l-requirement .lr-remind[data-v-71ff35a5]{margin-left:10px;font-size:14px;color:#333;white-space:pre}.table .l-requirement .lr-total[data-v-71ff35a5]{display:flex;flex-direction:column;align-items:flex-end;margin-left:120px;font-size:12px;color:#333}.table .l-requirement .lr-total>span[data-v-71ff35a5]{margin:4px 10px}",""])},420:function(t,e,a){"use strict";var r=a(8),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t};e.a={props:["ordersData"],data:function(){return{headerTitles:["","零件名称","零件号","单价(元)","数量","金额(元)"],allSelected:!1,isIndeterminate:!1}},computed:s({},r.a.mapState("cart",["orders"]),{carriage:function(){return this.ordersData.carriage_unit+this.ordersData.carriage}}),methods:{}}},421:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"t-server"},[t._v("订单号: "+t._s(t.ordersData.order_id)+"  "+t._s(t.ordersData.order_dt)+"  "+t._s(t.ordersData.seller_name))]),t._v(" "),a("div",{staticClass:"t-box"},[a("div",{staticClass:"header"},t._l(t.headerTitles,function(e,r){return a("div",{key:r,staticClass:"h-order"},[a("span",[t._v(t._s(e))])])})),t._v(" "),a("div",{staticClass:"content"},t._l(t.ordersData.data,function(e,r){return a("div",{key:r,staticClass:"c-order"},[a("div",{staticClass:"c-order"}),t._v(" "),a("div",{staticClass:"c-order"},[t._v(t._s(e.label))]),t._v(" "),a("div",{staticClass:"c-order"},[t._v(t._s(e.pid))]),t._v(" "),a("div",{staticClass:"c-order money"},[t._v("¥"+t._s(e.price))]),t._v(" "),a("div",{staticClass:"c-order"},[t._v(t._s(e.quantity))]),t._v(" "),a("div",{staticClass:"c-order money"},[t._v("¥"+t._s(e.money))])])}))]),t._v(" "),a("div",{staticClass:"l-requirement"},[a("div",{staticClass:"lr-remind"},[t._v("备注: "+t._s(t.ordersData.remark))]),t._v(" "),a("div",{staticClass:"lr-total"})])])},s=[],i={render:r,staticRenderFns:s};e.a=i},422:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},[a("l-table",{attrs:{ordersData:t.detailOrdersData}})],1)},s=[],i={render:r,staticRenderFns:s};e.a=i},423:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("div",{staticClass:"o-title"},[t._v("\n    订单详情\n  ")]),t._v(" "),a("div",{staticClass:"o-top"},[a("o-express",{attrs:{orderStatus:t.detailOrdersData.status}}),t._v(" "),a("o-address",{attrs:{addressInfo:t.detailOrdersData.contact}}),t._v(" "),a("div",{staticClass:"o-list-container"},[a("o-list"),t._v(" "),a("div",{staticClass:"pay-total-container"},[a("div",{staticClass:"pay-total"},[a("div",{staticClass:"pt-count"},[t._v("\n            总计:\n            "),a("span",[t._v("货品种类: "+t._s(t.detailOrdersData.total_quantity)+"类")]),t._v(" "),a("span",[t._v("数量总计: "+t._s(t.detailOrdersData.total_quantity)+"件")])]),t._v(" "),a("div",{staticClass:"pt-pay"},[a("span",[t._v("货品总金额: "),a("span",{staticClass:"money"},[t._v("¥"+t._s(t.detailOrdersData.total_money))])]),t._v(" "),a("span",[t._v("运费到付: "),a("span",{staticClass:"money"},[t._v(t._s(t.carriage))])])])])])],1)],1),t._v(" "),a("div",{staticClass:"o-footer-container"},[a("div",{staticClass:"o-footer"},[t._m(0)],1)])])},s=[function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-button",{staticClass:"back",attrs:{type:"primary"},on:{click:t.back}},[t._v("返回")])}],i={render:r,staticRenderFns:s};e.a=i}});