webpackJsonp([5],{"./app/containers/BoardElement/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"Box",function(){return v});var l=n("./node_modules/react/react.js"),a=n.n(l),s=n("./node_modules/prop-types/index.js"),c=(n.n(s),n("./node_modules/react-redux/es/index.js")),p=n("./node_modules/reselect/es/index.js"),d=n("./node_modules/redux/es/index.js"),f=n("./node_modules/styled-components/dist/styled-components.es.js"),b=n("./app/colors.js"),y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,u=arguments.length-3;if(n||0===u||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===u)n.children=r;else if(u>1){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+3];n.children=a}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=f.a.div.withConfig({displayName:"BoardElement__BoardElementDiv"})(["margin: 2px;background-color: ",";height: 100px;width: 100px;color:white;font-weight:bold;font-size: 3em;border-radius: 10px;text-align: center;padding-top: 15px;"],b.a.BoardElementBackgroundColor),v=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),m(t,[{key:"render",value:function(){return y(h,{},void 0,y("center",{},void 0,0===this.props.value?"":this.props.value))}}]),t}(a.a.Component),_=Object(p.b)({}),j=Object(c.b)(_,u);t.default=Object(d.c)(j)(v)}});