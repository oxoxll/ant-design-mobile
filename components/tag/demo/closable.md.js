webpackJsonp([54,158],{10:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function o(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],o=Object.getOwnPropertyDescriptor(a,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):o(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=t(1),r=e(i),f=t(2),k=s(f),d=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,o=a.style,c=a.onClick,l=(0,k["default"])((n={},p(n,""+t,!0),p(n,e,!!e),p(n,t+"-ws"+s,!0),n));return r.createElement("div",{className:l,style:o,onClick:c})},a}(r.Component);a["default"]=d,d.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=a["default"]},11:function(n,a,t){"use strict";t(5),t(12)},12:function(n,a){},15:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function o(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],o=Object.getOwnPropertyDescriptor(a,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):o(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=t(1),r=e(i),f=t(2),k=s(f),d=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,o=a.children,c=a.style,l=(0,k["default"])((n={},p(n,""+t,!0),p(n,e,!!e),p(n,t+"-wb"+s,!0),n));return r.createElement("div",{className:l,style:c},o)},a}(r.Component);a["default"]=d,d.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=a["default"]},16:function(n,a,t){"use strict";t(5),t(17)},17:function(n,a){},183:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function o(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],o=Object.getOwnPropertyDescriptor(a,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):o(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=t(1),r=e(i),f=t(2),k=s(f),d=t(20),g=s(d),b=function(n){function a(t){c(this,a);var s=l(this,n.call(this,t));return s.onClick=function(){var n=s.props,a=n.type,t=n.disabled,e=n.closable,o=n.onChange;"read"===a||t||(e?s.onClose():!function(){var n=s.state.selected;s.setState({selected:!n},function(){o(!n)})}())},s.onClose=function(){var n=s.props,a=n.onClose,t=n.afterClose;a(),s.setState({closed:!0},t)},s.state={selected:t.selected,closed:!1},s}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.children,s=a.className,e=a.prefixCls,o=a.type,c=a.size,l=a.disabled,u=a.closable,i=this.state.selected,f=(0,k["default"])((n={},p(n,s,!!s),p(n,e,!0),p(n,e+"-normal",!i),p(n,e+"-active",(i||u)&&!l&&"read"!==o),p(n,e+"-read","read"===o),p(n,e+"-disabled",l),p(n,e+"-size-small","small"===c),p(n,e+"-size-large","large"===c),n)),d=u&&!l&&"read"!==o&&"large"===c?r.createElement("div",{className:e+"-close"},r.createElement(g["default"],{type:"cross"})):null;return this.state.closed?null:r.createElement("div",{className:f,onClick:this.onClick},r.createElement("div",{className:e+"-text"},t),d)},a}(r.Component);a["default"]=b,b.defaultProps={prefixCls:"am-tag",type:"read",disabled:!1,size:"large",closable:!1,selected:!1,onChange:function(){},onClose:function(){},afterClose:function(){}},n.exports=a["default"]},184:function(n,a,t){"use strict";t(5),t(200)},200:function(n,a){},812:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(16),t(15)),o=s(e),p=(t(184),t(183)),c=s(p),l=(t(11),t(10)),u=s(l),i=t(1),r=s(i),f=t(4);s(f);n.exports={content:[["p","\u6dfb\u52a0 closeable \u5c5e\u6027\u53ef\u4ee5\u8ba9\u6807\u7b7e\u9879\u6d88\u5931\uff0c\u5f53\u624b\u52bf\u70b9\u51fb\u5230\u6574\u4e2a\u6807\u7b7e\u7684\u70ed\u533a\u65f6\uff0c\u8be5\u6807\u7b7e\u9879\u5c31\u88ab\u5220\u9664\u3002"]],meta:{order:3,title:"\u53ef\u5173\u95ed\u6807\u7b7e",filename:"components/tag/demo/closable.md",id:"components-tag-demo-closable"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onClose</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'tag closing\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >afterClose</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'tag closed\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>selected<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`tag selected: </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>selected<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>tag-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>action<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span> <span class="token attr-name" >closable</span><span class="token punctuation" >></span></span>\u53ef\u5173\u95ed\u6807\u7b7e<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span>\n        <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>action<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >closable</span>\n        <span class="token attr-name" >onClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onClose<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >afterClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>afterClose<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\u4e8b\u4ef6<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(){console.log("tag closing")}function a(){console.log("tag closed")}function t(n){console.log("tag selected: "+n)}return r["default"].createElement("div",{className:"tag-container"},r["default"].createElement(u["default"],null),r["default"].createElement(o["default"],{size:20},r["default"].createElement(c["default"],{type:"action",size:"large",closable:!0},"\u53ef\u5173\u95ed\u6807\u7b7e"),r["default"].createElement(u["default"],null),r["default"].createElement(c["default"],{type:"action",size:"large",closable:!0,onClose:n,onChange:t,afterClose:a},"\u4e8b\u4ef6")),r["default"].createElement(u["default"],null))}}}});