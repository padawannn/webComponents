"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function _CustomElement(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}();Object.setPrototypeOf(_CustomElement.prototype,HTMLElement.prototype),Object.setPrototypeOf(_CustomElement,HTMLElement),customElements.define("geo-logo",function(t){function e(t){_classCallCheck(this,e);var r=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),o=r.attachShadow({mode:"open"}),n=document.currentScript?document.currentScript.ownerDocument:document,i=n.querySelector("#geo-logo-template"),a=i.content.cloneNode(!0);return o.appendChild(a),r}return _inherits(e,t),_createClass(e,[{key:"attributeChangedCallback",value:function(t,e,r){if("animated"==t)this._animated(1500);else if("width"==t)this.shadowRoot.querySelector("svg").setAttribute("width",r);else if("height"==t)this.shadowRoot.querySelector("svg").setAttribute("height",r);else if("interval"==t&&this._interval)clearInterval(this._interval),this._animated(r);else if("duration"==t){var o=this.shadowRoot.querySelectorAll("animateTransform"),n=!0,i=!1,a=void 0;try{for(var l,y=o[Symbol.iterator]();!(n=(l=y.next()).done);n=!0){var u=l.value;u.setAttribute("dur",parseFloat(r))}}catch(s){i=!0,a=s}finally{try{!n&&y["return"]&&y["return"]()}finally{if(i)throw a}}}}},{key:"_animated",value:function(t){var e=[{G:{x:-16,y:-16},E:{x:0,y:-16},O:{x:16,y:0},G_2:{x:0,y:0},R:{x:16,y:0},A:{x:16,y:0},P:{x:-16,y:0},H:{x:0,y:0},I:{x:16,y:16},C:{x:0,y:16},A_2:{x:16,y:16},point:{x:16,y:16}},{G:{x:-16,y:-16},E:{x:-16,y:-16},O:{x:0,y:-16},G_2:{x:-16,y:-16},R:{x:0,y:-16},A:{x:16,y:-16},P:{x:-16,y:-16},H:{x:-16,y:-16},I:{x:-16,y:-16},C:{x:0,y:-16},A_2:{x:16,y:-16},point:{x:16,y:0}},{G:{x:-16,y:-16},E:{x:0,y:0},O:{x:16,y:0},G_2:{x:0,y:0},R:{x:0,y:0},A:{x:0,y:0},P:{x:-16,y:0},H:{x:0,y:16},I:{x:16,y:16},C:{x:16,y:16},A_2:{x:16,y:16},point:{x:16,y:16}},{G:{x:0,y:0},E:{x:0,y:0},O:{x:0,y:0},G_2:{x:0,y:0},R:{x:0,y:0},A:{x:0,y:0},P:{x:0,y:0},H:{x:0,y:0},I:{x:0,y:0},C:{x:0,y:0},A_2:{x:0,y:0},point:{x:0,y:0}}],r=this.shadowRoot.querySelectorAll("[letter]"),o=0;this._interval=setInterval(function(){for(var t=0;t<r.length;t++){var n=r[t].querySelector("animateTransform");n.setAttribute("from",n.getAttribute("to")),n.setAttribute("to",e[o][r[t].getAttribute("letter")].x+" "+e[o][r[t].getAttribute("letter")].y),n.beginElement()}o=o==e.length-1?0:o+1},t)}}],[{key:"observedAttributes",get:function(){return["animated","width","height","interval","duration"]}}]),e}(_CustomElement));