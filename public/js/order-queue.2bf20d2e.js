(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order-queue"],{3516:function(e,n,r){"use strict";r("5054")},"4f5d":function(e,n,r){"use strict";r.r(n);var t=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"about"},[r("h1",[e._v("Open Drink Orders: "+e._s(e.orderQueue.length))]),e._l(e.orderQueue,(function(e,n){return r("div",{key:n},[r("drink-order-row",{attrs:{order:e}})],1)}))],2)},o=[],c=r("4e9d"),s=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"order"},[e._v(" "+e._s(e.order.name)+" for "+e._s(e.order.recipient)+" ")])},u=[],i={name:"OrderDrinkRow",props:["order"]},d=i,l=(r("3516"),r("2877")),a=Object(l["a"])(d,s,u,!1,null,"055e68a8",null),f=a.exports,k={name:"OrderQueue",components:{DrinkOrderRow:f},data:function(){return{socket:null,orderQueue:[]}},created:function(){this.socket=c["a"].connectToOrderQueue(),this.registerSocketLifecycleEvents()},methods:{registerSocketLifecycleEvents:function(){var e=this;this.socket.on("connect",(function(){console.log("socket connect")})),this.socket.on("disconnect",(function(){console.log("socket disconn"),e.orderQueue=[]})),this.socket.on("queue update",(function(n){console.log({orderQueue:n}),e.orderQueue=n}))}}},p=k,h=Object(l["a"])(p,t,o,!1,null,null,null);n["default"]=h.exports},5054:function(e,n,r){}}]);
//# sourceMappingURL=order-queue.2bf20d2e.js.map