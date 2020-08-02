var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function d(){return i(" ")}function f(){return i("")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function b(t){m=t}const $=[],w=[],y=[],v=[],x=Promise.resolve();let O=!1;function j(t){y.push(t)}function _(t){v.push(t)}let k=!1;const N=new Set;function E(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];b(e),T(e.$$)}for($.length=0;w.length;)w.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];N.has(e)||(N.add(e),e())}y.length=0}while($.length);for(;v.length;)v.pop()();O=!1,k=!1,N.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const S=new Set;let A;function C(){A={r:0,c:[],p:A}}function L(){A.r||o(A.c),A=A.p}function F(t,e){t&&t.i&&(S.delete(t),t.i(e))}function H(t,e,n,o){if(t&&t.o){if(S.has(t))return;S.add(t),A.c.push(()=>{S.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function I(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function J(t){t&&t.c()}function P(t,n,l){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,l),j(()=>{const n=c.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(j)}function z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&($.push(t),O||(O=!0,x.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(e,r,l,s,c,u,i=[-1]){const d=m;b(e);const f=r.props||{},p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:i};let h=!1;if(p.ctx=l?l(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(p.bound[t]&&p.bound[t](r),h&&B(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();r.intro&&F(e.$$.fragment),P(e,r.target,r.anchor),E()}b(d)}class U{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function V(e){let n,r,l,f,m,b,$,w;return{c(){n=u("div"),r=u("label"),l=i(e[1]),f=d(),m=u("input"),h(r,"class","font-bold text-gray-700 block mb-2"),h(m,"type",e[3]),m.value=e[0],h(m,"class",b="block appearance-none w-full bg-white border border-gray-400\r\n    hover:border-gray-600 px-2 py-2 rounded shadow outline-none "+(""===e[0]&&e[4]?"border-red-400":"border-gray-400")),h(m,"placeholder",e[2]),h(n,"class","mb-4")},m(t,o){c(t,n,o),s(n,r),s(r,l),s(n,f),s(n,m),$||(w=[p(m,"blur",e[5]),p(m,"input",e[6]),p(m,"change",e[6])],$=!0)},p(t,[e]){2&e&&g(l,t[1]),8&e&&h(m,"type",t[3]),1&e&&m.value!==t[0]&&(m.value=t[0]),17&e&&b!==(b="block appearance-none w-full bg-white border border-gray-400\r\n    hover:border-gray-600 px-2 py-2 rounded shadow outline-none "+(""===t[0]&&t[4]?"border-red-400":"border-gray-400"))&&h(m,"class",b),4&e&&h(m,"placeholder",t[2])},i:t,o:t,d(t){t&&a(n),$=!1,o(w)}}}function q(t,e,n){let{label:o}=e,{placeholder:r=o}=e,{type:l="text"}=e,{value:s=""}=e,c=!1;return t.$set=t=>{"label"in t&&n(1,o=t.label),"placeholder"in t&&n(2,r=t.placeholder),"type"in t&&n(3,l=t.type),"value"in t&&n(0,s=t.value)},[s,o,r,l,c,()=>{n(4,c=!0)},t=>{n(0,s="checkbox"===t.target.type?t.target.checked:t.target.value)}]}class D extends U{constructor(t){super(),M(this,t,q,V,l,{label:1,placeholder:2,type:3,value:0})}}function W(e){let n;return{c(){n=u("div"),n.innerHTML='<img class="h-full py-2" src="assests/hive.svg" alt="Logo, of a bee hive"> \n  <p class="lg:text-4xl md:text-3xl text-xl px-2 font-bold text-gray-800">Hiveman</p>',h(n,"class","w-full h-full flex justify-center items-center")},m(t,e){c(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}class X extends U{constructor(t){super(),M(this,t,null,W,l,{})}}const G=[];const K=(t,e)=>{let n=JSON.parse(window.localStorage.getItem(t));return n||e},Q=(t,e)=>{window.localStorage.setItem(t,JSON.stringify(e))},R=function(e,n=t){let o;const r=[];function s(t){if(l(e,t)&&(e=t,o)){const t=!G.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),G.push(n,e)}if(t){for(let t=0;t<G.length;t+=2)G[t][0](G[t+1]);G.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(l,c=t){const a=[l,c];return r.push(a),1===r.length&&(o=n(s)||t),l(e),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}(K("auth",{}));R.subscribe(t=>{let e=!1;0===Object.keys(K("auth",{})).length&&Object.keys(t).length&&(e=!0),Q("auth",t),e&&location.reload()});let Y;R.subscribe(t=>{Y=t});function Z(t,e,n,o){return o=Object.assign(o||{},{"Content-Type":"application/vnd.alertme.zoo-6.1+json",Accept:"application/vnd.alertme.zoo-6.1+json","X-Omnia-Client":"Hive Web Dashboard"}),Object.keys(Y).length&&(o=Object.assign(o,{"X-Omnia-Access-Token":Y.sessionId})),fetch("https://api.prod.bgchprod.info:443/omnia"+t,{method:e,headers:o,body:n}).then(t=>{if(!t.ok&&401===t.status)throw R.set({}),new Error("Not authorised, check authdetails: "+R);return t}).then(t=>t.json())}function tt(t,e){return Z("/auth/sessions","POST",JSON.stringify({sessions:[{username:t,password:e,caller:"WEB"}]})).then(t=>(R.set(t.sessions[0]),t))}function et(){return Z("/nodes","GET").then(t=>t.nodes.filter(t=>["node.class.light.json","node.class.colour.tunable.light.json","node.class.smartplug.json"].some(e=>t.attributes.nodeType.reportedValue.includes(e))))}function nt(t,e){return Z("/nodes/"+t,"PUT",JSON.stringify({nodes:[{attributes:e}]})).then(t=>t)}function ot(t){nt(t,{state:{targetValue:"ON"}}).then(t=>t)}function rt(t){nt(t,{state:{targetValue:"OFF"}}).then(t=>t)}var lt=Object.freeze({__proto__:null,request:Z,login:tt,nodes:et,modify:nt,turnOn:ot,turnOff:rt});function st(t){let e,n,o,r,l,i,f,g,m,b,$,y,v,x,O,j;function k(e){t[3].call(null,e)}o=new X({});let N={label:"Username"};function E(e){t[4].call(null,e)}void 0!==t[0]&&(N.value=t[0]),f=new D({props:N}),w.push(()=>I(f,"value",k));let T={label:"Password",type:"password"};return void 0!==t[1]&&(T.value=t[1]),b=new D({props:T}),w.push(()=>I(b,"value",E)),{c(){e=u("div"),n=u("div"),J(o.$$.fragment),r=d(),l=u("div"),i=u("form"),J(f.$$.fragment),m=d(),J(b.$$.fragment),y=d(),v=u("div"),v.innerHTML='<button class="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2\n          px-4 rounded">Login</button>',h(n,"class","h-16 sm:h-24 md:h-32 my-4"),h(v,"class","flex items-center justify-between"),h(l,"class","border-yellow-600 p-8 border-t-8 bg-white mb-6 rounded-lg shadow-lg"),h(e,"class","w-10/12 lg:w-8/12 xl:w-5/12")},m(a,u){var d;c(a,e,u),s(e,n),P(o,n,null),s(e,r),s(e,l),s(l,i),P(f,i,null),s(i,m),P(b,i,null),s(i,y),s(i,v),x=!0,O||(j=p(i,"submit",(d=t[2],function(t){return t.preventDefault(),d.call(this,t)})),O=!0)},p(t,[e]){const n={};!g&&1&e&&(g=!0,n.value=t[0],_(()=>g=!1)),f.$set(n);const o={};!$&&2&e&&($=!0,o.value=t[1],_(()=>$=!1)),b.$set(o)},i(t){x||(F(o.$$.fragment,t),F(f.$$.fragment,t),F(b.$$.fragment,t),x=!0)},o(t){H(o.$$.fragment,t),H(f.$$.fragment,t),H(b.$$.fragment,t),x=!1},d(t){t&&a(e),z(o),z(f),z(b),O=!1,j()}}}function ct(t,e,n){let o,r;return[o,r,function(){o&&r?tt(o,r):console.error("No login data supplied")},function(t){o=t,n(0,o)},function(t){r=t,n(1,r)}]}class at extends U{constructor(t){super(),M(this,t,ct,st,l,{})}}function ut(t){let e,n,o,r,l,i,f,g,m,b,$,w,y;return l=new X({}),{c(){e=u("header"),n=u("div"),o=d(),r=u("div"),J(l.$$.fragment),i=d(),f=u("div"),g=u("div"),m=u("img"),h(n,"class","w-1/4 md:w-1/6 lg:w-1/12"),h(r,"class","w-1/2"),h(m,"class","h-8 mx-6 absolute right-0 rounded-full shadow-md\r\n          hover:scale-105 transform transition-transform ease-in-out\r\n          duration-500"),m.src!==(b="https://www.gravatar.com/avatar/"+t[1]+"?d=identicon")&&h(m,"src",b),h(m,"alt","User avatar"),h(g,"class","py-4"),h(f,"class","w-1/4 md:w-1/6 lg:w-1/12"),h(e,"class","bg-yellow-600 h-16 flex justify-between shadow-md")},m(a,u){c(a,e,u),s(e,n),s(e,o),s(e,r),P(l,r,null),s(e,i),s(e,f),s(f,g),s(g,m),$=!0,w||(y=p(f,"click",t[2]),w=!0)},p(t,e){(!$||2&e&&m.src!==(b="https://www.gravatar.com/avatar/"+t[1]+"?d=identicon"))&&h(m,"src",b)},i(t){$||(F(l.$$.fragment,t),$=!0)},o(t){H(l.$$.fragment,t),$=!1},d(t){t&&a(e),z(l),w=!1,y()}}}function it(t){let e,n,o=t[0].username&&ut(t);return{c(){o&&o.c(),e=f()},m(t,r){o&&o.m(t,r),c(t,e,r),n=!0},p(t,[n]){t[0].username?o?(o.p(t,n),1&n&&F(o,1)):(o=ut(t),o.c(),F(o,1),o.m(e.parentNode,e)):o&&(C(),H(o,1,1,()=>{o=null}),L())},i(t){n||(F(o),n=!0)},o(t){H(o),n=!1},d(t){o&&o.d(t),t&&a(e)}}}function dt(t,e,n){let o={},r="";R.subscribe(t=>{n(0,o=t),n(1,r=md5(o.username||""))});return[o,r,()=>{R.set({})}]}class ft extends U{constructor(t){super(),M(this,t,dt,it,l,{})}}function pt(e){let n,r,l,f,m,b,$,w,y,v,x,O=e[0].name+"";return{c(){n=u("div"),r=u("div"),l=u("p"),f=i(O),m=d(),b=u("button"),b.textContent="ON",$=d(),w=u("button"),w.textContent="OFF",h(l,"class","text-lg pb-2 font-medium"),h(b,"class","bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4\r\n      rounded"),h(w,"class","bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4\r\n      rounded"),h(r,"class",""),h(n,"id",y=e[0].id),h(n,"class","w-64 h-64 md:w-64 m-4 p-4 mx-auto bg-yellow-100 rounded shadow")},m(t,o){c(t,n,o),s(n,r),s(r,l),s(l,f),s(r,m),s(r,b),s(r,$),s(r,w),v||(x=[p(b,"click",e[1]),p(w,"click",e[2])],v=!0)},p(t,[e]){1&e&&O!==(O=t[0].name+"")&&g(f,O),1&e&&y!==(y=t[0].id)&&h(n,"id",y)},i:t,o:t,d(t){t&&a(n),v=!1,o(x)}}}function ht(t,e,n){let{node:o}=e;return t.$set=t=>{"node"in t&&n(0,o=t.node)},[o,function(){ot(o.id)},function(){rt(o.id)}]}class gt extends U{constructor(t){super(),M(this,t,ht,pt,l,{node:0})}}function mt(t,e,n){const o=t.slice();return o[1]=e[n],o}function bt(t){let e,n;return e=new gt({props:{node:t[1]}}),{c(){J(e.$$.fragment)},m(t,o){P(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.node=t[1]),e.$set(o)},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function $t(t){let e,n,o,r;e=new ft({});let l=t[0],s=[];for(let e=0;e<l.length;e+=1)s[e]=bt(mt(t,l,e));const i=t=>H(s[t],1,1,()=>{s[t]=null});return{c(){J(e.$$.fragment),n=d(),o=u("div");for(let t=0;t<s.length;t+=1)s[t].c();h(o,"class","flex flex-wrap")},m(t,l){P(e,t,l),c(t,n,l),c(t,o,l);for(let t=0;t<s.length;t+=1)s[t].m(o,null);r=!0},p(t,[e]){if(1&e){let n;for(l=t[0],n=0;n<l.length;n+=1){const r=mt(t,l,n);s[n]?(s[n].p(r,e),F(s[n],1)):(s[n]=bt(r),s[n].c(),F(s[n],1),s[n].m(o,null))}for(C(),n=l.length;n<s.length;n+=1)i(n);L()}},i(t){if(!r){F(e.$$.fragment,t);for(let t=0;t<l.length;t+=1)F(s[t]);r=!0}},o(t){H(e.$$.fragment,t),s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)H(s[t]);r=!1},d(t){z(e,t),t&&a(n),t&&a(o),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(s,t)}}}function wt(t,e,n){window.api=lt;let o=[];return et().then(t=>{n(0,o=t)}),[o]}class yt extends U{constructor(t){super(),M(this,t,wt,$t,l,{})}}function vt(t){let e,n;return e=new yt({}),{c(){J(e.$$.fragment)},m(t,o){P(e,t,o),n=!0},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function xt(t){let e,n,o;return n=new at({}),{c(){e=u("div"),J(n.$$.fragment),h(e,"class","container mx-auto my-16 xl:my-32 flex justify-center items-center")},m(t,r){c(t,e,r),P(n,e,null),o=!0},i(t){o||(F(n.$$.fragment,t),o=!0)},o(t){H(n.$$.fragment,t),o=!1},d(t){t&&a(e),z(n)}}}function Ot(t){let e,n,o,r;const l=[xt,vt],s=[];function u(t,e){return t[0]?1:0}return e=u(t),n=s[e]=l[e](t),{c(){n.c(),o=f()},m(t,n){s[e].m(t,n),c(t,o,n),r=!0},p(t,[r]){let c=e;e=u(t),e!==c&&(C(),H(s[c],1,1,()=>{s[c]=null}),L(),n=s[e],n||(n=s[e]=l[e](t),n.c()),F(n,1),n.m(o.parentNode,o))},i(t){r||(F(n),r=!0)},o(t){H(n),r=!1},d(t){s[e].d(t),t&&a(o)}}}function jt(t,e,n){let o=!1;R.subscribe(t=>{n(0,o=!!t.sessionId)});return[o]}return new class extends U{constructor(t){super(),M(this,t,jt,Ot,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
