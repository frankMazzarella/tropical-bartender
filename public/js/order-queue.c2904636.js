(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order-queue"],{"0124":function(e,t,r){"use strict";r("053f")},"053f":function(e,t,r){},"1ee6":function(e,t,r){"use strict";r("5476")},2532:function(e,t,r){"use strict";var i=r("23e7"),n=r("5a34"),s=r("1d80"),o=r("ab13");i({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~String(s(this)).indexOf(n(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,r){var i=r("861d"),n=r("c6b6"),s=r("b622"),o=s("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},"4f5d":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("bartender-header",[e._v("Order Queue")]),i("div",{staticClass:"container"},e._l(e.orderQueue,(function(e,t){return i("div",{key:t},[i("drink-order-row",{attrs:{order:e}})],1)})),0),0===e.orderQueue.length?i("div",{staticClass:"no-orders"},[i("inline-svg",{attrs:{src:r("e616"),fill:"#eee",width:"100px"}}),i("div",[e._v("no orders")])],1):e._e()],1)},n=[],s=r("6d5e"),o=r.n(s),c=r("4e9d"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",class:{active:e.isActive},on:{click:e.toggleActive}},[r("div",{staticClass:"row"},[r("div",{staticClass:"top-left"},[e._v(e._s(e.order.name))]),r("div",{staticClass:"top-right"},[e._v(e._s(e.age))])]),e.isActive?e._e():r("div",{staticClass:"row"},[r("div",{staticClass:"bottom-left"},[e._v("for "+e._s(e.order.recipient.toLowerCase()))]),r("div",{staticClass:"bottom-right"},[e._v("+ tap to expand")])]),e.isActive?r("div",{staticClass:"ingredient-container"},e._l(e.order.ingredients,(function(t,i){return r("div",{key:i,staticClass:"ingredient"},[r("div",{staticClass:"ingredient-name"},[e._v(e._s(t.name))]),r("div",{staticClass:"ingredient-amount"},[e._v("- "+e._s(t.amount))])])})),0):e._e(),e.isActive?r("div",{staticClass:"row"},[r("div",{staticClass:"drink-information"},[r("div",[e._v("serve as "+e._s(e.order.type))]),r("div",[e._v("deliver to "+e._s(e.order.recipient.toLowerCase()))])]),r("button",{staticClass:"complete-button",on:{click:e.complete}},[e._v("Complete")])]):e._e()])},d=[],u={name:"OrderDrinkRow",props:["order"],data:function(){return{age:"",isActive:!1}},created:function(){this.startOrderAgeInterval(),this.$parent.$on("close-drink-order-row",this.close)},methods:{startOrderAgeInterval:function(){var e=this;this.updateOrderAge(),setInterval((function(){return e.updateOrderAge()}),1e3)},updateOrderAge:function(){var e=this.getOrderAgeInMinutes();this.age=0===e?"ordered just now":1===e?"1 minute ago":"".concat(e," minutes ago")},getOrderAgeInMinutes:function(){var e=new Date,t=6e4;return Math.floor((e.getTime()-this.order.timestamp)/t)},toggleActive:function(){this.isActive?this.$parent.$emit("drink-order-row-closed"):this.$parent.$emit("drink-order-row-opened"),this.isActive=!this.isActive},complete:function(){this.$parent.$emit("complete-order",this.order.id)},close:function(){this.isActive&&(this.isActive=!1)}}},l=u,v=(r("1ee6"),r("2877")),f=Object(v["a"])(l,a,d,!1,null,"bd0397a6",null),h=f.exports,p=r("e315"),g={name:"OrderQueue",components:{BartenderHeader:p["a"],DrinkOrderRow:h,InlineSvg:o.a},data:function(){return{socket:null,orderQueue:[],isAnyDrinkOrderRowOpen:!1}},created:function(){this.socket=c["a"].connectToOrderQueue(),this.registerSocketLifecycleEvents(),this.$on("complete-order",this.emitDeleteDrinkOrder),this.$on("drink-order-row-opened",this.drinkOrderRowOpened),this.$on("drink-order-row-closed",this.drinkOrderRowClosed)},destroyed:function(){this.socket.disconnect()},methods:{registerSocketLifecycleEvents:function(){var e=this;this.socket.on("connect",(function(){console.log("socket connect")})),this.socket.on("disconnect",(function(){console.log("socket disconn"),e.orderQueue=[]})),this.socket.on("queue update",(function(t){console.log({orderQueue:t}),e.orderQueue=t}))},emitDeleteDrinkOrder:function(e){this.socket.emit("delete drink order",e,(function(){console.log("drink ".concat(e," was deleted"))}))},drinkOrderRowOpened:function(){this.isAnyDrinkOrderRowOpen&&this.$emit("close-drink-order-row"),this.isAnyDrinkOrderRowOpen=!0},drinkOrderRowClosed:function(){this.isAnyDrinkOrderRowOpen=!1}}},m=g,k=(r("0124"),Object(v["a"])(m,i,n,!1,null,"6150bf88",null));t["default"]=k.exports},5476:function(e,t,r){},"5a34":function(e,t,r){var i=r("44e7");e.exports=function(e){if(i(e))throw TypeError("The method doesn't accept regular expressions");return e}},7705:function(e,t,r){"use strict";r("dc88")},ab13:function(e,t,r){var i=r("b622"),n=i("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,"/./"[e](t)}catch(i){}}return!1}},caad:function(e,t,r){"use strict";var i=r("23e7"),n=r("4d64").includes,s=r("44d2");i({target:"Array",proto:!0},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")},dc88:function(e,t,r){},e315:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"header",on:{click:e.togglePage}},[r("div",{staticClass:"container"},[r("div",{staticClass:"header-left"},[e._t("default")],2),r("div",{staticClass:"header-right"},[e._v(e._s(e.time))])])]),r("div",{staticClass:"spacer"})])},n=[],s=(r("4d90"),r("d3b7"),r("25f0"),r("99af"),r("caad"),r("2532"),{name:"BartenderHeader",data:function(){return{time:""}},created:function(){this.startTimeUpdateInterval()},methods:{startTimeUpdateInterval:function(){var e=this;this.updateTime(),setInterval((function(){return e.updateTime()}),1e3)},updateTime:function(){var e=new Date,t=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");this.time="".concat(t,":").concat(r)},togglePage:function(){var e=this.$router.currentRoute.path;e.includes("list")&&this.$router.push({name:"drinkadmin"}),e.includes("admin")&&this.$router.push({name:"orderqueue"})}}}),o=s,c=(r("7705"),r("2877")),a=Object(c["a"])(o,i,n,!1,null,"9c334dac",null);t["a"]=a.exports},e616:function(e,t,r){e.exports=r.p+"img/cocktail.26b6a9b6.svg"}}]);
//# sourceMappingURL=order-queue.c2904636.js.map