"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function _CustomElement(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();Object.setPrototypeOf(_CustomElement.prototype,HTMLElement.prototype),Object.setPrototypeOf(_CustomElement,HTMLElement),customElements.define("geo-logo",function(t){function e(t){_classCallCheck(this,e);var r=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),n=r.attachShadow({mode:"open"}),o=document.currentScript?document.currentScript.ownerDocument:document,i=o.querySelector("#geo-logo-template"),l=i.content.cloneNode(!0);return n.appendChild(l),n.querySelector("svg").addEventListener("mouseover",function(t){clearInterval(r._interval),r._animate(r.positions[r.positions.length-1])}),n.querySelector("svg").addEventListener("mouseout",function(t){r._interval&&null!=r.getAttribute("move")&&r._animated(r.getAttribute("interval")&&""!=r.getAttribute("interval")?r.getAttribute("interval"):3500)}),r}return _inherits(e,t),_createClass(e,[{key:"attributeChangedCallback",value:function(t,e,r){if("move"==t)null!=r?this._animated(3500):this._interval&&(clearInterval(this._interval),this._animate(this.positions[this.positions.length-1]));else if("width"==t)this.shadowRoot.querySelector("svg").setAttribute("width",r);else if("height"==t)this.shadowRoot.querySelector("svg").setAttribute("height",r);else if("interval"==t&&this._interval)clearInterval(this._interval),this._animated(r);else if("duration"==t){var n=this.shadowRoot.querySelectorAll("animateTransform"),o=!0,i=!1,l=void 0;try{for(var a,s=n[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var u=a.value;u.setAttribute("dur",parseFloat(r))}}catch(y){i=!0,l=y}finally{try{!o&&s["return"]&&s["return"]()}finally{if(i)throw l}}}else if("white"==t){var c=this.shadowRoot.querySelectorAll("path[fill],rect[fill]"),f=!0,h=!1,x=void 0;try{for(var p,v=c[Symbol.iterator]();!(f=(p=v.next()).done);f=!0){var _=p.value;_.setAttribute("fill","#fff")}}catch(y){h=!0,x=y}finally{try{!f&&v["return"]&&v["return"]()}finally{if(h)throw x}}}}},{key:"_animated",value:function(t){var e=this,r=0;this._interval=setInterval(function(){e._animate(e.positions[r]),r=r==e.positions.length-1?0:r+1},t)}},{key:"_animate",value:function(t){for(var e=this.shadowRoot.querySelectorAll("[letter]"),r=0;r<e.length;r++){var n=e[r].querySelector("animateTransform");n.setAttribute("from",n.getAttribute("to")),n.setAttribute("to",t[e[r].getAttribute("letter")].x+" "+t[e[r].getAttribute("letter")].y),n.beginElement()}}},{key:"positions",get:function(){return[{G:{x:-16,y:-16},E:{x:0,y:-16},O:{x:16,y:0},G_2:{x:0,y:0},R:{x:16,y:0},A:{x:16,y:0},P:{x:-16,y:0},H:{x:0,y:0},I:{x:16,y:16},C:{x:0,y:16},A_2:{x:16,y:16},point:{x:16,y:16}},{G:{x:-16,y:-16},E:{x:-16,y:-16},O:{x:0,y:-16},G_2:{x:-16,y:-16},R:{x:0,y:-16},A:{x:16,y:-16},P:{x:-16,y:-16},H:{x:-16,y:-16},I:{x:-16,y:-16},C:{x:0,y:-16},A_2:{x:16,y:-16},point:{x:16,y:0}},{G:{x:-16,y:-16},E:{x:0,y:0},O:{x:16,y:0},G_2:{x:0,y:0},R:{x:0,y:0},A:{x:0,y:0},P:{x:-16,y:0},H:{x:0,y:16},I:{x:16,y:16},C:{x:16,y:16},A_2:{x:16,y:16},point:{x:16,y:16}},{G:{x:0,y:0},E:{x:0,y:0},O:{x:0,y:0},G_2:{x:0,y:0},R:{x:0,y:0},A:{x:0,y:0},P:{x:0,y:0},H:{x:0,y:0},I:{x:0,y:0},C:{x:0,y:0},A_2:{x:0,y:0},point:{x:0,y:0}}]}}],[{key:"observedAttributes",get:function(){return["move","width","height","interval","duration","white"]}}]),e}(_CustomElement));