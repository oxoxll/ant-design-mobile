webpackJsonp([42,158],{10:function(n,t,s){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t["default"]=n,t}function p(n,t){for(var s=Object.getOwnPropertyNames(t),a=0;a<s.length;a++){var e=s[a],p=Object.getOwnPropertyDescriptor(t,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,t,s){return t in n?Object.defineProperty(n,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[t]=s,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function u(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=s(1),i=e(r),k=s(2),f=a(k),d=function(n){function t(){return c(this,t),u(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,s=t.prefixCls,a=t.size,e=t.className,p=t.style,c=t.onClick,u=(0,f["default"])((n={},o(n,""+s,!0),o(n,e,!!e),o(n,s+"-ws"+a,!0),n));return i.createElement("div",{className:u,style:p,onClick:c})},t}(i.Component);t["default"]=d,d.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=t["default"]},11:function(n,t,s){"use strict";s(5),s(12)},12:function(n,t){},13:function(n,t,s){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t["default"]=n,t}function p(n,t){for(var s=Object.getOwnPropertyNames(t),a=0;a<s.length;a++){var e=s[a],p=Object.getOwnPropertyDescriptor(t,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,t,s){return t in n?Object.defineProperty(n,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[t]=s,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function u(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}function r(n){return"string"==typeof n}function i(n){return r(n.type)&&P(n.props.children)?y.cloneElement(n,{},n.props.children.split("").join(" ")):r(n)?(P(n)&&(n=n.split("").join(" ")),y.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var k=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(n[a]=s[a])}return n},f=function(){function n(n,t){var s=[],a=!0,e=!1,p=void 0;try{for(var o,c=n[Symbol.iterator]();!(a=(o=c.next()).done)&&(s.push(o.value),!t||s.length!==t);a=!0);}catch(u){e=!0,p=u}finally{try{!a&&c["return"]&&c["return"]()}finally{if(e)throw p}}return s}return function(t,s){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=s(1),y=e(d),g=s(2),b=a(g),m=s(20),h=a(m),v=s(23),w=a(v),O=/^[\u4e00-\u9fa5]{2}$/,P=O.test.bind(O),j=function(n){function t(){c(this,t);for(var s=arguments.length,a=Array(s),e=0;e<s;e++)a[e]=arguments[e];var p=u(this,n.call.apply(n,[this].concat(a)));return p.onClick=function(){p.props.onClick(p)},p}return l(t,n),t.prototype.render=function(){var n,t=(0,w["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),s=f(t,2),a=s[0],e=a.children,p=a.className,c=a.prefixCls,u=a.type,l=a.size,r=a.ghost,d=a.inline,g=a.disabled,m=a.htmlType,v=a.icon,O=a.loading,P=s[1],j=(0,b["default"])((n={},o(n,p,p),o(n,c,!0),o(n,c+"-primary","primary"===u),o(n,c+"-ghost",r),o(n,c+"-warning","warning"===u),o(n,c+"-small","small"===l&&d),o(n,c+"-loading",O),o(n,c+"-inline",d),o(n,c+"-disabled",g),n)),x=O?"loading":v,C=y.Children.map(e,i);return y.createElement("button",k({},P,{type:m||"button",className:j,disabled:g,onClick:this.onClick}),x?y.createElement(h["default"],{type:x}):null,C)},t}(y.Component);t["default"]=j,j.propTypes={prefixCls:d.PropTypes.string,type:d.PropTypes.string,size:d.PropTypes.oneOf(["large","small"]),htmlType:d.PropTypes.oneOf(["submit","button","reset"]),ghost:d.PropTypes.bool,inline:d.PropTypes.bool,disabled:d.PropTypes.bool,loading:d.PropTypes.bool,icon:d.PropTypes.bool,onClick:d.PropTypes.func},j.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=t["default"]},15:function(n,t,s){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t["default"]=n,t}function p(n,t){for(var s=Object.getOwnPropertyNames(t),a=0;a<s.length;a++){var e=s[a],p=Object.getOwnPropertyDescriptor(t,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,t,s){return t in n?Object.defineProperty(n,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[t]=s,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function u(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=s(1),i=e(r),k=s(2),f=a(k),d=function(n){function t(){return c(this,t),u(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,s=t.prefixCls,a=t.size,e=t.className,p=t.children,c=t.style,u=(0,f["default"])((n={},o(n,""+s,!0),o(n,e,!!e),o(n,s+"-wb"+a,!0),n));return i.createElement("div",{className:u,style:c},p)},t}(i.Component);t["default"]=d,d.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=t["default"]},16:function(n,t,s){"use strict";s(5),s(17)},17:function(n,t){},18:function(n,t,s){"use strict";s(5),s(19)},19:function(n,t){},774:function(n,t,s){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var e=(s(16),s(15)),p=a(e),o=(s(71),s(62)),c=a(o),u=(s(18),s(13)),l=a(u),r=(s(11),s(10)),i=a(r),k=(s(873),s(872)),f=a(k),d=s(1),y=a(d),g=s(4);a(g);n.exports={content:[["p","\u57fa\u672c\u529f\u80fd\u5c55\u793a"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/progress/demo/basic.md",id:"components-progress-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Progress<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Flex<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> MyProgress <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      percent<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >increase</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> percent <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >+</span> <span class="token number" >10</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>percent <span class="token operator" >></span> <span class="token number" >100</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      percent <span class="token operator" >=</span> <span class="token number" >100</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> percent<span class="token punctuation" >,</span> status <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >decline</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> percent <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >-</span> <span class="token number" >10</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>percent <span class="token operator" >&lt;</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      percent <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> percent<span class="token punctuation" >,</span> status <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>progress-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >===</span> <span class="token number" >100</span> <span class="token operator" >?</span> <span class="token keyword" >null</span> <span class="token punctuation" >:</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent<span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fixed<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent<span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>normal<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>increase<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span> <span class="token operator" >+</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>decline<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span> <span class="token operator" >-</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>MyProgress</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=y["default"].createClass({displayName:"MyProgress",getInitialState:function(){return{percent:0}},increase:function(){var n=this.state.percent+10;n>100&&(n=100),this.setState({percent:n,status:status})},decline:function(){var n=this.state.percent-10;n<0&&(n=0),this.setState({percent:n,status:status})},render:function(){return y["default"].createElement("div",{className:"progress-container"},100===this.state.percent?null:y["default"].createElement(f["default"],{percent:this.state.percent,position:"fixed"}),y["default"].createElement(f["default"],{percent:this.state.percent,position:"normal"}),y["default"].createElement(i["default"],{size:20}),y["default"].createElement(p["default"],{size:20},y["default"].createElement(c["default"],null,y["default"].createElement(c["default"].Item,null,y["default"].createElement(l["default"],{onClick:this.increase}," + ")),y["default"].createElement(c["default"].Item,null,y["default"].createElement(l["default"],{onClick:this.decline}," - ")))),y["default"].createElement(i["default"],{size:20}))}});return y["default"].createElement(n,null)}}},872:function(n,t,s){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t["default"]=n,t}function p(n,t){for(var s=Object.getOwnPropertyNames(t),a=0;a<s.length;a++){var e=s[a],p=Object.getOwnPropertyDescriptor(t,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,t,s){return t in n?Object.defineProperty(n,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[t]=s,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function u(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=s(1),i=e(r),k=s(2),f=a(k),d=function(n){function t(s){c(this,t);var a=u(this,n.call(this,s));return a.state={},a}return l(t,n),t.prototype.render=function(){var n,t=this.props,s=t.prefixCls,a=t.percent,e=t.position,p={width:a+"%",height:0},c=(0,f["default"])((n={},o(n,s+"-outer",!0),o(n,s+"-fixed-outer","fixed"===e),n));return i.createElement("div",{className:c},i.createElement("div",{className:s+"-bar",style:p}))},t}(i.Component);t["default"]=d,d.propTypes={prefixCls:r.PropTypes.string,position:r.PropTypes.oneOf(["fixed","normal"]),percent:r.PropTypes.number},d.defaultProps={prefixCls:"am-progress",percent:0,position:"fixed"},n.exports=t["default"]},873:function(n,t,s){"use strict";s(5),s(1270)},1270:function(n,t){}});