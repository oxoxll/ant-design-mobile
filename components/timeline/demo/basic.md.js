webpackJsonp([44,158],{10:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function c(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=e(1),i=s(u),f=e(2),d=a(f),k=function(n){function t(){return p(this,t),l(this,n.apply(this,arguments))}return c(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.size,s=t.className,o=t.style,p=t.onClick,l=(0,d["default"])((n={},r(n,""+e,!0),r(n,s,!!s),r(n,e+"-ws"+a,!0),n));return i.createElement("div",{className:l,style:o,onClick:p})},t}(i.Component);t["default"]=k,k.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=t["default"]},11:function(n,t,e){"use strict";e(5),e(12)},12:function(n,t){},15:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function c(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=e(1),i=s(u),f=e(2),d=a(f),k=function(n){function t(){return p(this,t),l(this,n.apply(this,arguments))}return c(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.size,s=t.className,o=t.children,p=t.style,l=(0,d["default"])((n={},r(n,""+e,!0),r(n,s,!!s),r(n,e+"-wb"+a,!0),n));return i.createElement("div",{className:l,style:p},o)},t}(i.Component);t["default"]=k,k.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=t["default"]},16:function(n,t,e){"use strict";e(5),e(17)},17:function(n,t){},246:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function c(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},i=function(){function n(n,t){var e=[],a=!0,s=!1,o=void 0;try{for(var r,p=n[Symbol.iterator]();!(a=(r=p.next()).done)&&(e.push(r.value),!t||e.length!==t);a=!0);}catch(l){s=!0,o=l}finally{try{!a&&p["return"]&&p["return"]()}finally{if(s)throw o}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=e(1),d=s(f),k=e(2),m=a(k),b=e(23),y=a(b),g=function(n){function t(){return p(this,t),l(this,n.apply(this,arguments))}return c(t,n),t.prototype.render=function(){var n,t=(0,y["default"])(this.props,["prefixCls","color","last","children","pending","className"]),e=i(t,2),a=e[0],s=a.prefixCls,o=a.color,p=a.last,l=a.children,c=a.pending,f=a.className,k=e[1],b=(0,m["default"])((n={},r(n,s+"-item",!0),r(n,s+"-item-last",p),r(n,s+"-item-pending",c),r(n,f,f),n));return d.createElement("li",u({},k,{className:b}),d.createElement("div",{className:s+"-item-tail"}),d.createElement("div",{className:s+"-item-head "+s+"-item-head-"+o}),d.createElement("div",{className:s+"-item-content"},l))},t}(d.Component);t["default"]=g,g.defaultProps={prefixCls:"am-timeline",color:"blue",last:!1,pending:!1},n.exports=t["default"]},312:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function c(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},i=function(){function n(n,t){var e=[],a=!0,s=!1,o=void 0;try{for(var r,p=n[Symbol.iterator]();!(a=(r=p.next()).done)&&(e.push(r.value),!t||e.length!==t);a=!0);}catch(l){s=!0,o=l}finally{try{!a&&p["return"]&&p["return"]()}finally{if(s)throw o}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=e(1),d=s(f),k=e(2),m=a(k),b=e(246),y=a(b),g=e(23),h=a(g),v=function(n){function t(){return p(this,t),l(this,n.apply(this,arguments))}return c(t,n),t.prototype.render=function(){var n,t=(0,h["default"])(this.props,["prefixCls","children","pending","className"]),e=i(t,2),a=e[0],s=a.prefixCls,o=a.children,p=a.pending,l=a.className,c=e[1],f="boolean"==typeof p?null:p,k=(0,m["default"])((n={},r(n,s,!0),r(n,s+"-pending",!!p),r(n,l,l),n));return d.createElement("ul",u({},c,{className:k}),d.Children.map(o,function(n,t){return d.cloneElement(n,{last:t===o.length-1})}),p?d.createElement(y["default"],{pending:!!p},f):null)},t}(d.Component);t["default"]=v,v.defaultProps={prefixCls:"am-timeline"},n.exports=t["default"]},313:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=e(312),o=a(s),r=e(246),p=a(r);o["default"].Item=p["default"],t["default"]=o["default"],n.exports=t["default"]},314:function(n,t,e){"use strict";e(5),e(362)},362:function(n,t){},818:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var s=(e(16),e(15)),o=a(s),r=(e(314),e(313)),p=a(r),l=(e(11),e(10)),c=a(l),u=e(1),i=a(u),f=e(4);a(f);n.exports={content:[["p","\u57fa\u672c\u7684\u65f6\u95f4\u8f74\u3002"]],meta:{order:0,title:"\u57fa\u672c\u7528\u6cd5",filename:"components/timeline/demo/basic.md",id:"components-timeline-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Timeline<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >32</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >32</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u521b\u5efa\u670d\u52a1\u73b0\u573a <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38 <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38 <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u7f51\u7edc\u5f02\u5e38\u6b63\u5728\u4fee\u590d <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=i["default"].createClass({displayName:"App",render:function(){return i["default"].createElement("div",null,i["default"].createElement(c["default"],{size:32}),i["default"].createElement(o["default"],{size:32},i["default"].createElement(p["default"],null,i["default"].createElement(p["default"].Item,null,"\u521b\u5efa\u670d\u52a1\u73b0\u573a 2015-09-01"),i["default"].createElement(p["default"].Item,null,"\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38 2015-09-01"),i["default"].createElement(p["default"].Item,null,"\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38 2015-09-01"),i["default"].createElement(p["default"].Item,null,"\u7f51\u7edc\u5f02\u5e38\u6b63\u5728\u4fee\u590d 2015-09-01"))))}});return i["default"].createElement(n,null)},style:"\n  .demo-preview-item * { box-sizing: border-box; }\n"}}});