(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],d=0,l=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},o={app:0},a=[];function c(e){return s.p+"js/"+({"order-queue":"order-queue"}[e]||e)+"."+{"order-queue":"2bf20d2e"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"order-queue":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({"order-queue":"order-queue"}[e]||e)+"."+{"order-queue":"9912720f"}[e]+".css",o=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[e],f.parentNode.removeChild(f),n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"008c":function(e,t,n){},"178a":function(e,t,n){"use strict";n("5395")},2493:function(e,t,n){"use strict";n("008c")},"4e9d":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("d4ec"),i=n("bee2"),o=n("8e27"),a=n.n(o),c=function(){function e(){Object(r["a"])(this,e)}return Object(i["a"])(e,null,[{key:"connectToDrinkList",value:function(){return a()(this.getURL("drink-list"))}},{key:"connectToOrderQueue",value:function(){return a()(this.getURL("order-queue"))}},{key:"getURL",value:function(e){return"/".concat(e)}}]),e}()},5395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=n("2877"),c={},s=Object(a["a"])(c,i,o,!1,null,null,null),u=s.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"header-left"},[e._v("Tropical Drink Night!")]),n("div",{staticClass:"header-right"},[e._v(e._s(e.dateTime))])])]),n("div",{staticClass:"spacer"}),e._l(e.drinkList,(function(e,t){return n("div",{key:t,staticClass:"container"},[n("available-drink-row",{attrs:{drink:e}})],1)})),n("order-drink-modal")],2)},f=[],p=(n("99af"),n("b0c0"),n("4d90"),n("25f0"),n("4e9d")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"drink-item",on:{click:e.orderDrink}},[n("span",{staticClass:"drink-name"},[e._v(e._s(e.drink.name))]),n("div",{staticClass:"ingredients"},e._l(e.drink.ingredients,(function(t,r){return n("span",{key:r},[e._v(" "+e._s(t.name)),r+1!==e.drink.ingredients.length?n("span",[e._v(",")]):e._e()])})),0)])},v=[],m={name:"AvailableDrinkRow",props:["drink"],methods:{orderDrink:function(){this.$parent.$emit("drink-clicked",this.drink)}}},k=m,g=(n("178a"),Object(a["a"])(k,h,v,!1,null,"bf76faa6",null)),b=g.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.active?n("div",[n("div",{staticClass:"modal"},[n("div",{staticClass:"title"},[e._v("Order a "),n("strong",[e._v(e._s(e.drink.name))])]),n("label",{attrs:{for:"name"}},[e._v("Your name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.recipient,expression:"recipient"}],ref:"name",attrs:{type:"text",id:"name"},domProps:{value:e.recipient},on:{input:function(t){t.target.composing||(e.recipient=t.target.value)}}}),n("button",{staticClass:"cancel",on:{click:e.hide}},[e._v("Nevermind")]),n("button",{staticClass:"submit",on:{click:e.submit}},[e._v("Order")])]),n("div",{staticClass:"mask",on:{click:e.hide}})]):e._e()},_=[],O={name:"OrderDrinkModal",data:function(){return{active:!1,drink:{},recipient:""}},created:function(){this.$parent.$on("drink-clicked",this.show),this.$parent.$on("order-complete",this.hide)},methods:{hide:function(){this.active=!1,this.drink={},this.recipient=""},show:function(e){this.drink=e,this.active=!0},submit:function(){this.recipient?(this.drink.recipient=this.recipient,this.$parent.$emit("order-drink",this.drink)):this.$refs.name.focus()}}},w=O,C=(n("2493"),Object(a["a"])(w,y,_,!1,null,"c2d34de2",null)),D=C.exports,T={name:"DrinkList",components:{AvailableDrinkRow:b,OrderDrinkModal:D},data:function(){return{socket:null,drinkList:[],dateTime:""}},created:function(){this.socket=p["a"].connectToDrinkList(),this.registerSocketLifecycleEvents(),this.$on("order-drink",this.emitDrinkOrder),this.startDateTime()},methods:{registerSocketLifecycleEvents:function(){var e=this;this.socket.on("connect",(function(){console.log("socket connect")})),this.socket.on("disconnect",(function(){console.log("socket disconn"),e.drinkList=[]})),this.socket.on("drink list",(function(t){console.log({drinkList:t}),e.drinkList=t}))},emitDrinkOrder:function(e){var t=this;this.socket.emit("add drink order",e,(function(){console.log(e),console.log("".concat(e.recipient," has ordered a ").concat(e.name)),t.$emit("order-complete")}))},startDateTime:function(){var e=this,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=["January","February","March","April","May","June","July","August","September","August","October","November","December"];setInterval((function(){var r=new Date,i=t[r.getDay()],o=n[r.getMonth()],a=r.getDate(),c=r.getHours().toString().padStart(2,"0"),s=r.getMinutes().toString().padStart(2,"0");e.dateTime="".concat(i,", ").concat(o," ").concat(a,", ").concat(c,":").concat(s)}),1e3)}}},L=T,S=(n("87ed"),Object(a["a"])(L,l,f,!1,null,"609b8c58",null)),j=S.exports;r["a"].use(d["a"]);var $=[{path:"/",component:j},{path:"/queue",component:function(){return n.e("order-queue").then(n.bind(null,"4f5d"))}},{path:"*",component:j}],E=new d["a"]({mode:"history",base:"/",routes:$}),x=E;n("845f");r["a"].config.productionTip=!1,new r["a"]({router:x,render:function(e){return e(u)}}).$mount("#app")},"845f":function(e,t,n){},"87ed":function(e,t,n){"use strict";n("f448")},f448:function(e,t,n){}});
//# sourceMappingURL=app.f0b75979.js.map