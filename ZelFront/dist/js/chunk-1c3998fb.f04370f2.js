(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c3998fb"],{"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return B}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),o=r("a723"),i=r("9b76"),s=r("8690"),l=r("365c"),u=r("d82f"),b=r("cf75"),d=r("d580"),f=r("6197"),O=r("b885");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=Object(b["d"])(Object(u["m"])(g(g({},Object(b["a"])(d["a"],b["f"].bind(null,"footer"))),{},{footer:Object(b["c"])(o["t"]),footerClass:Object(b["c"])(o["e"]),footerHtml:Object(b["c"])(o["t"])})),c["l"]),h=n["default"].extend({name:c["l"],functional:!0,props:m,render:function(t,e){var r,n=e.props,c=e.data,o=e.children,i=n.footerBgVariant,l=n.footerBorderVariant,u=n.footerTextVariant;return t(n.footerTag,Object(a["a"])(c,{staticClass:"card-footer",class:[n.footerClass,(r={},j(r,"bg-".concat(i),i),j(r,"border-".concat(l),l),j(r,"text-".concat(u),u),r)],domProps:o?{}:Object(s["a"])(n.footerHtml,n.footer)}),o)}}),y=r("4918");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){P(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function P(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var k=Object(b["d"])(Object(u["m"])(w(w({},Object(u["k"])(y["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(b["c"])(o["g"],!1),end:Object(b["c"])(o["g"],!1),start:Object(b["c"])(o["g"],!1),top:Object(b["c"])(o["g"],!1)})),c["n"]),x=n["default"].extend({name:c["n"],functional:!0,props:k,render:function(t,e){var r=e.props,n=e.data,c=r.src,o=r.alt,i=r.width,s=r.height,l="card-img";return r.top?l+="-top":r.right||r.end?l+="-right":r.bottom?l+="-bottom":(r.left||r.start)&&(l+="-left"),t("img",Object(a["a"])(n,{class:l,attrs:{src:c,alt:o,width:i,height:s}}))}});function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){S(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function S(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var C=Object(b["a"])(k,b["f"].bind(null,"img"));C.imgSrc.required=!1;var _=Object(b["d"])(Object(u["m"])(R(R(R(R(R(R({},f["b"]),O["b"]),m),C),d["a"]),{},{align:Object(b["c"])(o["t"]),noBody:Object(b["c"])(o["g"],!1)})),c["j"]),B=n["default"].extend({name:c["j"],functional:!0,props:_,render:function(t,e){var r,n=e.props,c=e.data,o=e.slots,u=e.scopedSlots,d=n.imgSrc,p=n.imgLeft,g=n.imgRight,j=n.imgStart,y=n.imgEnd,v=n.imgBottom,w=n.header,P=n.headerHtml,k=n.footer,D=n.footerHtml,R=n.align,_=n.textVariant,B=n.bgVariant,T=n.borderVariant,V=u||{},E=o(),z={},A=t(),N=t();if(d){var L=t(x,{props:Object(b["e"])(C,n,b["h"].bind(null,"img"))});v?N=L:A=L}var q=t(),I=Object(l["a"])(i["p"],V,E);(I||w||P)&&(q=t(O["a"],{props:Object(b["e"])(O["b"],n),domProps:I?{}:Object(s["a"])(P,w)},Object(l["b"])(i["p"],z,V,E)));var G=Object(l["b"])(i["h"],z,V,E);n.noBody||(G=t(f["a"],{props:Object(b["e"])(f["b"],n)},G),n.overlay&&d&&(G=t("div",{staticClass:"position-relative"},[A,G,N]),A=t(),N=t()));var U=t(),H=Object(l["a"])(i["o"],V,E);return(H||k||D)&&(U=t(h,{props:Object(b["e"])(m,n),domProps:I?{}:Object(s["a"])(D,k)},Object(l["b"])(i["o"],z,V,E))),t(n.tag,Object(a["a"])(c,{staticClass:"card",class:(r={"flex-row":p||j,"flex-row-reverse":(g||y)&&!(p||j)},S(r,"text-".concat(R),R),S(r,"bg-".concat(B),B),S(r,"border-".concat(T),T),S(r,"text-".concat(_),_),r)}),[A,q,G,U,N])}})},"2c2c":function(t,e,r){"use strict";r.r(e);var n={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};e["default"]={shortDate:n}},4501:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dl",{staticClass:"row",class:t.classes},[r("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?r("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t.href.length>0?r("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?r("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant,on:{click:function(e){return t.$emit("click")}}},[r("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):r("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},a=[],c=(r("a9e3"),r("aa59")),o={components:{BLink:c["a"]},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},i=o,s=r("2877"),l=Object(s["a"])(i,n,a,!1,null,null,null);e["a"]=l.exports},4918:function(t,e,r){"use strict";r.d(e,"b",(function(){return g})),r.d(e,"a",(function(){return j}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),o=r("a723"),i=r("2326"),s=r("6c06"),l=r("7b1e"),u=r("3a58"),b=r("cf75"),d=r("fa73");function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',p=function(t,e,r){var n=encodeURIComponent(O.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",r));return"data:image/svg+xml;charset=UTF-8,".concat(n)},g=Object(b["d"])({alt:Object(b["c"])(o["t"]),blank:Object(b["c"])(o["g"],!1),blankColor:Object(b["c"])(o["t"],"transparent"),block:Object(b["c"])(o["g"],!1),center:Object(b["c"])(o["g"],!1),fluid:Object(b["c"])(o["g"],!1),fluidGrow:Object(b["c"])(o["g"],!1),height:Object(b["c"])(o["o"]),left:Object(b["c"])(o["g"],!1),right:Object(b["c"])(o["g"],!1),rounded:Object(b["c"])(o["j"],!1),sizes:Object(b["c"])(o["f"]),src:Object(b["c"])(o["t"]),srcset:Object(b["c"])(o["f"]),thumbnail:Object(b["c"])(o["g"],!1),width:Object(b["c"])(o["o"])},c["O"]),j=n["default"].extend({name:c["O"],functional:!0,props:g,render:function(t,e){var r,n=e.props,c=e.data,o=n.alt,b=n.src,O=n.block,g=n.fluidGrow,j=n.rounded,m=Object(u["c"])(n.width)||null,h=Object(u["c"])(n.height)||null,y=null,v=Object(i["b"])(n.srcset).filter(s["a"]).join(","),w=Object(i["b"])(n.sizes).filter(s["a"]).join(",");return n.blank&&(!h&&m?h=m:!m&&h&&(m=h),m||h||(m=1,h=1),b=p(m,h,n.blankColor||"transparent"),v=null,w=null),n.left?y="float-left":n.right?y="float-right":n.center&&(y="mx-auto",O=!0),t("img",Object(a["a"])(c,{attrs:{src:b,alt:o,width:m?Object(d["g"])(m):null,height:h?Object(d["g"])(h):null,srcset:v||null,sizes:w||null},class:(r={"img-thumbnail":n.thumbnail,"img-fluid":n.fluid||g,"w-100":g,rounded:""===j||!0===j},f(r,"rounded-".concat(j),Object(l["m"])(j)&&""!==j),f(r,y,y),f(r,"d-block",O),r)}))}})},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return u}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),o=r("a723"),i=r("cf75"),s=r("fa73"),l=Object(i["d"])({title:Object(i["c"])(o["t"]),titleTag:Object(i["c"])(o["t"],"h4")},c["q"]),u=n["default"].extend({name:c["q"],functional:!0,props:l,render:function(t,e){var r=e.props,n=e.data,c=e.children;return t(r.titleTag,Object(a["a"])(n,{staticClass:"card-title"}),c||Object(s["g"])(r.title))}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return g}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),o=r("a723"),i=r("d82f"),s=r("cf75"),l=r("d580"),u=r("4968"),b=r("ba06");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=Object(s["d"])(Object(i["m"])(f(f(f(f({},u["b"]),b["b"]),Object(s["a"])(l["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(o["e"]),overlay:Object(s["c"])(o["g"],!1)})),c["k"]),g=n["default"].extend({name:c["k"],functional:!0,props:p,render:function(t,e){var r,n=e.props,c=e.data,o=e.children,i=n.bodyBgVariant,l=n.bodyBorderVariant,d=n.bodyTextVariant,f=t();n.title&&(f=t(u["a"],{props:Object(s["e"])(u["b"],n)}));var p=t();return n.subTitle&&(p=t(b["a"],{props:Object(s["e"])(b["b"],n),class:["mb-2"]})),t(n.bodyTag,Object(a["a"])(c,{staticClass:"card-body",class:[(r={"card-img-overlay":n.overlay},O(r,"bg-".concat(i),i),O(r,"border-".concat(l),l),O(r,"text-".concat(d),d),r),n.bodyClass]}),[f,p,o])}})},"9b1c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return""!==t.callResponse.data?r("b-card",{attrs:{title:"Get Benchmarks"}},[t.callResponse.data.status?r("list-entry",{attrs:{title:"Status",data:t.callResponse.data.status}}):t._e(),t.callResponse.data.time?r("list-entry",{attrs:{title:"Time",data:new Date(1e3*t.callResponse.data.time).toLocaleString("en-GB",t.timeoptions.short)}}):t._e(),t.callResponse.data.ipaddress?r("list-entry",{attrs:{title:"IP Address",data:t.callResponse.data.ipaddress}}):t._e(),t.callResponse.data.cores?r("list-entry",{attrs:{title:"CPU Cores",number:t.callResponse.data.cores}}):t._e(),t.callResponse.data.ram?r("list-entry",{attrs:{title:"RAM",data:t.callResponse.data.ram+" GB"}}):t._e(),t.callResponse.data.ssd?r("list-entry",{attrs:{title:"SSD",data:t.callResponse.data.ssd+" GB"}}):t._e(),t.callResponse.data.hdd?r("list-entry",{attrs:{title:"HDD",data:t.callResponse.data.hdd+" GB"}}):t._e(),t.callResponse.data.ddwrite?r("list-entry",{attrs:{title:"Write Speed",data:t.callResponse.data.ddwrite+" MB/s"}}):t._e(),t.callResponse.data.eps?r("list-entry",{attrs:{title:"CPU Speed",data:t.callResponse.data.eps+" eps"}}):t._e(),t.callResponse.data.errors?r("list-entry",{attrs:{title:"Error",data:t.callResponse.data.errors,variant:"danger"}}):t._e()],1):t._e()},a=[],c=r("1da1"),o=(r("96cf"),r("205f")),i=r("14d2"),s=r("4501"),l=r("cc31"),u=r("2c2c"),b={components:{ListEntry:s["a"],BCard:o["a"],ToastificationContent:i["a"]},data:function(){return{timeoptions:u,callResponse:{status:"",data:""}}},mounted:function(){this.daemonGetBenchmarks()},methods:{daemonGetBenchmarks:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getBenchmarks();case 2:r=e.sent,"error"===r.data.status?t.$toast({component:i["a"],props:{title:r.data.data.message||r.data.data,icon:"InfoIcon",variant:"danger"}}):(t.callResponse.status=r.data.status,t.callResponse.data=JSON.parse(r.data.data));case 4:case"end":return e.stop()}}),e)})))()}}},d=b,f=r("2877"),O=Object(f["a"])(d,n,a,!1,null,null,null);e["default"]=O.exports},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return O})),r.d(e,"a",(function(){return p}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),o=r("a723"),i=r("8690"),s=r("d82f"),l=r("cf75"),u=r("d580");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=Object(l["d"])(Object(s["m"])(d(d({},Object(l["a"])(u["a"],l["f"].bind(null,"header"))),{},{header:Object(l["c"])(o["t"]),headerClass:Object(l["c"])(o["e"]),headerHtml:Object(l["c"])(o["t"])})),c["m"]),p=n["default"].extend({name:c["m"],functional:!0,props:O,render:function(t,e){var r,n=e.props,c=e.data,o=e.children,s=n.headerBgVariant,l=n.headerBorderVariant,u=n.headerTextVariant;return t(n.headerTag,Object(a["a"])(c,{staticClass:"card-header",class:[n.headerClass,(r={},f(r,"bg-".concat(s),s),f(r,"border-".concat(l),l),f(r,"text-".concat(u),u),r)],domProps:o?{}:Object(i["a"])(n.headerHtml,n.header)}),o)}})},ba06:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return u}));var n=r("2b0e"),a=r("b42e"),c=r("c637"),o=r("a723"),i=r("cf75"),s=r("fa73"),l=Object(i["d"])({subTitle:Object(i["c"])(o["t"]),subTitleTag:Object(i["c"])(o["t"],"h6"),subTitleTextVariant:Object(i["c"])(o["t"],"muted")},c["o"]),u=n["default"].extend({name:c["o"],functional:!0,props:l,render:function(t,e){var r=e.props,n=e.data,c=e.children;return t(r.subTitleTag,Object(a["a"])(n,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),c||Object(s["g"])(r.subTitle))}})},cc31:function(t,e,r){"use strict";r("99af");var n=r("3ebd");e["a"]={help:function(){return Object(n["a"])().get("/daemon/help")},helpSpecific:function(t){return Object(n["a"])().get("/daemon/help/".concat(t))},getInfo:function(){return Object(n["a"])().get("/daemon/getinfo")},getZelNodeStatus:function(){return Object(n["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(t,e){return Object(n["a"])().get("/daemon/getrawtransaction/".concat(t,"/").concat(e))},listZelNodes:function(){return Object(n["a"])().get("/daemon/listzelnodes")},viewDeterministicZelNodeList:function(){return Object(n["a"])().get("/daemon/viewdeterministiczelnodelist")},getZelNodeCount:function(){return Object(n["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(n["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(n["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(n["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(n["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(n["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(t){return Object(n["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark:function(t){return Object(n["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo:function(){return Object(n["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(n["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(n["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(t,e){return Object(n["a"])().get("/daemon/validateaddress/".concat(e),{headers:{zelidauth:t}})},getWalletInfo:function(t){return Object(n["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listZelNodeConf:function(t){return Object(n["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start:function(t){return Object(n["a"])().get("/daemon/start",{headers:{zelidauth:t}})},restart:function(t){return Object(n["a"])().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon:function(t){return Object(n["a"])().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon:function(t,e){return Object(n["a"])().get("/daemon/rescanblockchain/".concat(e),{headers:{zelidauth:t}})},getBlock:function(t,e){return Object(n["a"])().get("/daemon/getblock/".concat(t,"/").concat(e))},tailDaemonDebug:function(t){return Object(n["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(n["a"])()},cancelToken:function(){return n["b"]}}},d580:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("2b0e"),a=r("c637"),c=r("a723"),o=r("cf75"),i=Object(o["d"])({bgVariant:Object(o["c"])(c["t"]),borderVariant:Object(o["c"])(c["t"]),tag:Object(o["c"])(c["t"],"div"),textVariant:Object(o["c"])(c["t"])},a["j"]);n["default"].extend({props:i})}}]);
//# sourceMappingURL=chunk-1c3998fb.f04370f2.js.map