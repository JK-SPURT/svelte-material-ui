var d=function(e,r){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])},d(e,r)};function v(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");d(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var y=function(){return y=Object.assign||function(r){for(var t,o=1,a=arguments.length;o<a;o++){t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},y.apply(this,arguments)};function g(e,r,t,o){function a(n){return n instanceof t?n:new t(function(u){u(n)})}return new(t||(t=Promise))(function(n,u){function c(l){try{i(o.next(l))}catch(f){u(f)}}function s(l){try{i(o.throw(l))}catch(f){u(f)}}function i(l){l.done?n(l.value):a(l.value).then(c,s)}i((o=o.apply(e,r||[])).next())})}function _(e,r){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,a,n,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(i){return function(l){return s([i,l])}}function s(i){if(o)throw new TypeError("Generator is already executing.");for(;u&&(u=0,i[0]&&(t=0)),t;)try{if(o=1,a&&(n=i[0]&2?a.return:i[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,i[1])).done)return n;switch(a=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,a=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){t.label=i[1];break}if(i[0]===6&&t.label<n[1]){t.label=n[1],n=i;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(i);break}n[2]&&t.ops.pop(),t.trys.pop();continue}i=r.call(e,t)}catch(l){i=[6,l],a=0}finally{o=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function w(e){var r=typeof Symbol=="function"&&Symbol.iterator,t=r&&e[r],o=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var o=t.call(e),a,n=[],u;try{for(;(r===void 0||r-- >0)&&!(a=o.next()).done;)n.push(a.value)}catch(c){u={error:c}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(u)throw u.error}}return n}function O(e,r,t){if(t||arguments.length===2)for(var o=0,a=r.length,n;o<a;o++)(n||!(o in r))&&(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return e.concat(n||Array.prototype.slice.call(r))}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var j=function(){function e(r){r===void 0&&(r={}),this.adapter=r}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function b(e,r){if(e.closest)return e.closest(r);for(var t=e;t;){if(h(t,r))return t;t=t.parentElement}return null}function h(e,r){var t=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return t.call(e,r)}function p(e){var r=e;if(r.offsetParent!==null)return r.scrollWidth;var t=r.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var o=t.scrollWidth;return document.documentElement.removeChild(t),o}const E=Object.freeze(Object.defineProperty({__proto__:null,closest:b,estimateScrollWidth:p,matches:h},Symbol.toStringTag,{value:"Module"}));function S(e,r,t,o={bubbles:!0},a=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!e)throw new Error("Tried to dipatch event without element.");const n=new CustomEvent(r,Object.assign(Object.assign({},o),{detail:t}));if(e==null||e.dispatchEvent(n),a&&r.startsWith("SMUI")){const u=new CustomEvent(r.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},o),{detail:t}));e==null||e.dispatchEvent(u),u.defaultPrevented&&n.preventDefault()}return n}export{j as M,v as _,y as a,g as b,_ as c,S as d,w as e,m as f,O as g,h as m,E as p};
