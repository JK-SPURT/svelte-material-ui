import{S as j,i as q,s as W,V as C,k as B,l as Y,m as Z,h as b,W as M,b as x,X as O,v as z,d as S,f as J,g as L,Y as K,Z as Q,_ as w,$ as P,a0 as $,o as ee,a1 as te,w as se,q as ne,r as ie,u as re,I as H,L as le,M as ae,N as oe,O as ue}from"./index.036e2946.js";import{c as D,u as de,f as fe}from"./useActions.a6f71942.js";import{_ as ce,a as y,M as _e,d as v}from"./dispatch.22ec8f60.js";/**
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
 */var f={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},_={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+f.ROOT};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var he=function(r){ce(e,r);function e(t){return r.call(this,y(y({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return _},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(_.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(f.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(f.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(f.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(f.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(f.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(f.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(_.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var i=this.adapter.hasClass(f.HELPER_TEXT_PERSISTENT),a=this.adapter.hasClass(f.HELPER_TEXT_VALIDATION_MSG),o=a&&!t;o?(this.showToScreenReader(),this.adapter.getAttr(_.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(_.ROLE,"alert")):this.adapter.removeAttr(_.ROLE),!i&&!o&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(_.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(_.ROLE),requestAnimationFrame(function(){t.adapter.setAttr(_.ROLE,"alert")})},e}(_e);function pe(r){let e;return{c(){e=ne(r[8])},l(t){e=ie(t,r[8])},m(t,i){x(t,e,i)},p(t,i){i&256&&re(e,t[8])},i:H,o:H,d(t){t&&b(e)}}}function Ee(r){let e;const t=r[13].default,i=le(t,r,r[12],null);return{c(){i&&i.c()},l(a){i&&i.l(a)},m(a,o){i&&i.m(a,o),e=!0},p(a,o){i&&i.p&&(!e||o&4096)&&ae(i,t,a,a[12],e?ue(t,a[12],o,null):oe(a[12]),null)},i(a){e||(L(i,a),e=!0)},o(a){S(i,a),e=!1},d(a){i&&i.d(a)}}}function Te(r){let e,t,i,a,o,p,c,T,I;const E=[Ee,pe],u=[];function R(n,l){return n[8]==null?0:1}t=R(r),i=u[t]=E[t](r);let h=[{class:a=D({[r[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":r[3],"mdc-text-field-helper-text--validation-msg":r[4],...r[6]})},{"aria-hidden":o=r[3]?void 0:"true"},{id:r[2]},r[7],r[10]],d={};for(let n=0;n<h.length;n+=1)d=C(d,h[n]);return{c(){e=B("div"),i.c(),this.h()},l(n){e=Y(n,"DIV",{class:!0,"aria-hidden":!0,id:!0});var l=Z(e);i.l(l),l.forEach(b),this.h()},h(){M(e,d)},m(n,l){x(n,e,l),u[t].m(e,null),r[14](e),c=!0,T||(I=[O(p=de.call(null,e,r[0])),O(r[9].call(null,e))],T=!0)},p(n,[l]){let m=t;t=R(n),t===m?u[t].p(n,l):(z(),S(u[m],1,1,()=>{u[m]=null}),J(),i=u[t],i?i.p(n,l):(i=u[t]=E[t](n),i.c()),L(i,1),i.m(e,null)),M(e,d=K(h,[(!c||l&90&&a!==(a=D({[n[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":n[3],"mdc-text-field-helper-text--validation-msg":n[4],...n[6]})))&&{class:a},(!c||l&8&&o!==(o=n[3]?void 0:"true"))&&{"aria-hidden":o},(!c||l&4)&&{id:n[2]},l&128&&n[7],l&1024&&n[10]])),p&&Q(p.update)&&l&1&&p.update.call(null,n[0])},i(n){c||(L(i),c=!0)},o(n){S(i),c=!1},d(n){n&&b(e),u[t].d(),r[14](null),T=!1,w(I)}}}let me=0;function ge(r,e,t){const i=["use","class","id","persistent","validationMsg","getElement"];let a=P(e,i),{$$slots:o={},$$scope:p}=e;const c=fe($());let{use:T=[]}=e,{class:I=""}=e,{id:E="SMUI-textfield-helper-text-"+me++}=e,{persistent:u=!1}=e,{validationMsg:R=!1}=e,h,d,n={},l={},m;ee(()=>(d=new he({addClass:V,removeClass:k,hasClass:N,getAttr:X,setAttr:F,removeAttr:G,setContent:s=>{t(8,m=s)}}),E.startsWith("SMUI-textfield-helper-text-")&&v(g(),"SMUITextfieldHelperText:id",E),v(g(),"SMUITextfieldHelperText:mount",d),d.init(),()=>{v(g(),"SMUITextfieldHelperText:unmount",d),d.destroy()}));function N(s){return s in n?n[s]:g().classList.contains(s)}function V(s){n[s]||t(6,n[s]=!0,n)}function k(s){(!(s in n)||n[s])&&t(6,n[s]=!1,n)}function X(s){var A;return s in l?(A=l[s])!==null&&A!==void 0?A:null:g().getAttribute(s)}function F(s,A){l[s]!==A&&t(7,l[s]=A,l)}function G(s){(!(s in l)||l[s]!=null)&&t(7,l[s]=void 0,l)}function g(){return h}function U(s){se[s?"unshift":"push"](()=>{h=s,t(5,h)})}return r.$$set=s=>{e=C(C({},e),te(s)),t(10,a=P(e,i)),"use"in s&&t(0,T=s.use),"class"in s&&t(1,I=s.class),"id"in s&&t(2,E=s.id),"persistent"in s&&t(3,u=s.persistent),"validationMsg"in s&&t(4,R=s.validationMsg),"$$scope"in s&&t(12,p=s.$$scope)},[T,I,E,u,R,h,n,l,m,c,a,g,p,o,U]}class ve extends j{constructor(e){super(),q(this,e,ge,Te,W,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}export{ve as H};
