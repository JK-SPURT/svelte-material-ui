import{S as K,i as Q,s as v,L as x,V as P,k as pe,l as ge,m as he,h as F,W as w,b as Se,E as L,X as W,M as $,N as ee,O as te,Y as se,Z as Ee,g as U,d as N,_ as ye,$ as j,a0 as oe,F as ne,a3 as Be,j as Pe,a1 as ae,a4 as Ie,H as Te,w as le,y as Oe,z as Ae,A as Me,a2 as je,B as ze,a6 as Ce}from"./index.036e2946.js";import{r as He,w as Re}from"./index.63003bc5.js";import{c as z,u as ke,f as re}from"./useActions.a6f71942.js";import{P as De}from"./Subtitle.c561fecb.js";const{window:Z}=Te;function Ue(t){let e,o,l,r,s,f,m;const g=t[19].default,c=x(g,t,t[18],null);let d=[{class:o=z({[t[1]]:!0,"smui-bottom-app-bar":!0,"smui-bottom-app-bar--standard":t[3]==="standard","smui-bottom-app-bar--fixed":t[3]==="fixed"})},{style:l=Object.entries(t[5]).map(J).concat([t[2]]).join(" ")},t[10]],b={};for(let a=0;a<d.length;a+=1)b=P(b,d[a]);return{c(){e=pe("div"),c&&c.c(),this.h()},l(a){e=ge(a,"DIV",{class:!0,style:!0});var i=he(e);c&&c.l(i),i.forEach(F),this.h()},h(){w(e,b)},m(a,i){Se(a,e,i),c&&c.m(e,null),t[20](e),s=!0,f||(m=[L(Z,"scroll",t[8]),L(Z,"resize",t[9]),W(r=ke.call(null,e,t[0])),W(t[6].call(null,e))],f=!0)},p(a,i){c&&c.p&&(!s||i[0]&262144)&&$(c,g,a,a[18],s?te(g,a[18],i,null):ee(a[18]),null),w(e,b=se(d,[(!s||i[0]&10&&o!==(o=z({[a[1]]:!0,"smui-bottom-app-bar":!0,"smui-bottom-app-bar--standard":a[3]==="standard","smui-bottom-app-bar--fixed":a[3]==="fixed"})))&&{class:o},(!s||i[0]&36&&l!==(l=Object.entries(a[5]).map(J).concat([a[2]]).join(" ")))&&{style:l},i[0]&1024&&a[10]])),r&&Ee(r.update)&&i[0]&1&&r.update.call(null,a[0])},i(a){s||(U(c,a),s=!0)},o(a){N(c,a),s=!1},d(a){a&&F(e),c&&c.d(a),t[20](null),f=!1,ye(m)}}}const X=100;function G(){const t=window,e=window;return t.pageYOffset!==void 0?t.pageYOffset:e.scrollTop}const J=([t,e])=>`${t}: ${e};`;function Ne(t,e,o){const l=["use","class","style","color","variant","getPropStore","getElement"];let r=j(e,l),s,{$$slots:f={},$$scope:m}=e;const g=re(oe());let{use:c=[]}=e,{class:d=""}=e,{style:b=""}=e,{color:a="primary"}=e,{variant:i="standard"}=e,_,h={};const y=Re(a);ne(t,y,n=>o(29,s=n));let u=!1,B=0;Be("SMUI:bottom-app-bar:color",y);let I,ie=He({withFab:u,adjustOffset:B,variant:i},n=>{o(16,I=n)});Pe(()=>{(i==="standard"||i==="fixed")&&o(14,u=_.querySelector(".mdc-fab")!=null)});function T(n,S){h[n]!=S&&(S===""||S==null?(delete h[n],o(5,h)):o(5,h[n]=S,h))}let O=!0,V=!0,p=0,C=!1,H=0,R,E,A=0;function Y(){return _.getBoundingClientRect().height}let M=null;function k(){if(i!=="standard")return;const n=Math.max(G(),0),S=n-R;R=n,C||(p-=S,p>0?p=0:Math.abs(p)>E&&(p=-E),ce())}function ue(){i==="standard"&&(H||(H=setTimeout(()=>{H=0,me()},X)),C=!0,A&&clearTimeout(A),A=setTimeout(()=>{k(),C=!1,A=0},X))}function fe(){const n=-E,S=p<0,D=p>n,q=S&&D;if(q)O=!1;else if(O){if(V!==D)return V=D,!0}else return O=!0,!0;return q}function ce(){if(fe()){let n=p;T("--smui-bottom-app-bar--fab-offset",n*.75+"px"),T("bottom",n+"px"),o(15,B=n),u&&o(15,B-=+n*.75)}}function me(){const n=Y();E!==n&&(O=!1,p-=E-n,E=n),k()}function de(){return ie}function be(){return _}function _e(n){le[n?"unshift":"push"](()=>{_=n,o(4,_)})}return t.$$set=n=>{e=P(P({},e),ae(n)),o(10,r=j(e,l)),"use"in n&&o(0,c=n.use),"class"in n&&o(1,d=n.class),"style"in n&&o(2,b=n.style),"color"in n&&o(11,a=n.color),"variant"in n&&o(3,i=n.variant),"$$scope"in n&&o(18,m=n.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&2048&&Ie(y,s=a,s),t.$$.dirty[0]&131096&&_&&i!==M&&(i==="standard"?(R=G(),E=Y()):M==="standard"&&(T("bottom",""),T("--smui-bottom-app-bar--fab-offset","0px"),o(15,B=0)),o(17,M=i)),t.$$.dirty[0]&114696&&I&&I({withFab:u,adjustOffset:B,variant:i})},[c,d,b,i,_,h,g,y,k,ue,r,a,de,be,u,B,I,M,m,f,_e]}class Ze extends K{constructor(e){super(),Q(this,e,Ne,Ue,v,{use:0,class:1,style:2,color:11,variant:3,getPropStore:12,getElement:13},null,[-1,-1])}get getPropStore(){return this.$$.ctx[12]}get getElement(){return this.$$.ctx[13]}}function Ve(t){let e;const o=t[9].default,l=x(o,t,t[11],null);return{c(){l&&l.c()},l(r){l&&l.l(r)},m(r,s){l&&l.m(r,s),e=!0},p(r,s){l&&l.p&&(!e||s&2048)&&$(l,o,r,r[11],e?te(o,r[11],s,null):ee(r[11]),null)},i(r){e||(U(l,r),e=!0)},o(r){N(l,r),e=!1},d(r){l&&l.d(r)}}}function Ye(t){let e,o;const l=[{use:t[3]},{class:z({[t[0]]:!0,"smui-bottom-app-bar__section":!0,"smui-bottom-app-bar__section--fab-inset":t[1]})},{color:t[4]},{variant:"unelevated"},{square:!0},t[6]];let r={$$slots:{default:[Ve]},$$scope:{ctx:t}};for(let s=0;s<l.length;s+=1)r=P(r,l[s]);return e=new De({props:r}),t[10](e),{c(){Oe(e.$$.fragment)},l(s){Ae(e.$$.fragment,s)},m(s,f){Me(e,s,f),o=!0},p(s,[f]){const m=f&91?se(l,[f&8&&{use:s[3]},f&3&&{class:z({[s[0]]:!0,"smui-bottom-app-bar__section":!0,"smui-bottom-app-bar__section--fab-inset":s[1]})},f&16&&{color:s[4]},l[3],l[4],f&64&&je(s[6])]):{};f&2048&&(m.$$scope={dirty:f,ctx:s}),e.$set(m)},i(s){o||(U(e.$$.fragment,s),o=!0)},o(s){N(e.$$.fragment,s),o=!1},d(s){t[10](null),ze(e,s)}}}function qe(t,e,o){let l;const r=["use","class","fabInset","getElement"];let s=j(e,r),f,{$$slots:m={},$$scope:g}=e;const c=re(oe());let{use:d=[]}=e,{class:b=""}=e,{fabInset:a=!1}=e,i;const _=Ce("SMUI:bottom-app-bar:color");ne(t,_,u=>o(4,f=u));function h(){return i.getElement()}function y(u){le[u?"unshift":"push"](()=>{i=u,o(2,i)})}return t.$$set=u=>{e=P(P({},e),ae(u)),o(6,s=j(e,r)),"use"in u&&o(7,d=u.use),"class"in u&&o(0,b=u.class),"fabInset"in u&&o(1,a=u.fabInset),"$$scope"in u&&o(11,g=u.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&o(3,l=[c,...d])},[b,a,i,l,f,_,s,d,h,m,y,g]}class Xe extends K{constructor(e){super(),Q(this,e,qe,Ye,v,{use:7,class:0,fabInset:1,getElement:8})}get getElement(){return this.$$.ctx[8]}}export{Ze as B,Xe as S};
