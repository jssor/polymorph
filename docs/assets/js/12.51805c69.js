(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{158:function(t,e,r){"use strict";r.d(e,"c",function(){return o}),r.d(e,"h",function(){return i}),r.d(e,"g",function(){return a}),r.d(e,"f",function(){return s}),r.d(e,"j",function(){return u}),r.d(e,"l",function(){return c}),r.d(e,"e",function(){return f}),r.d(e,"d",function(){return h}),r.d(e,"k",function(){return p}),r.d(e,"m",function(){return d}),r.d(e,"b",function(){return v}),r.d(e,"i",function(){return g}),r.d(e,"a",function(){return m});var n=Math,o=n.abs,i=n.min,a=n.max,s=n.floor,u=n.round,c=n.sqrt,l=n.pow,f=n.cos,h=n.asin,p=n.sin,d=n.tan,v=n.PI,g=2/3,m=l(2,-52)},159:function(t,e,r){"use strict";r.d(e,"n",function(){return n}),r.d(e,"l",function(){return o}),r.d(e,"e",function(){return i}),r.d(e,"f",function(){return a}),r.d(e,"m",function(){return s}),r.d(e,"g",function(){return u}),r.d(e,"b",function(){return c}),r.d(e,"j",function(){return l}),r.d(e,"i",function(){return f}),r.d(e,"k",function(){return h}),r.d(e,"a",function(){return p}),r.d(e,"c",function(){return d}),r.d(e,"d",function(){return v}),r.d(e,"h",function(){return g});var n=void 0,o="V",i="H",a="L",s="Z",u="M",c="C",l="S",f="Q",h="T",p="A",d=" ",v="fill",g="none"},160:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(159);function o(){throw new Error(Array.prototype.join.call(arguments,n.c))}},161:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(158);function o(t,e,r,o){return Object(n.l)((t-r)*(t-r)+(e-o)*(e-o))}},162:function(t,e,r){"use strict";r(21),r(23),r(83),r(84);var n=r(159);function o(t,e){return t===n.n?e:t}var i=r(160),a=r(158),s=120*a.b/180,u=2*a.b;function c(t,e,r,n,o,i,l,f,h,p,d,v,g){if(r<=0||n<=0)return[t,e,f,h,f,h];var m,y=a.b/180*(+o||0),b=Object(a.e)(y),w=Object(a.k)(y),x=!!p;if(!x){var _=t,k=f,O=((t=_*b-e*-w)-(f=k*b-h*-w))/2,j=((e=_*-w+e*b)-(h=k*-w+h*b))/2,S=O*O/(r*r)+j*j/(n*n);S>1&&(r*=S=Object(a.l)(S),n*=S);var E=(i===l?-1:1)*Object(a.l)(Object(a.c)((r*r*n*n-r*r*j*j-n*n*O*O)/(r*r*j*j+n*n*O*O)));v=E*r*j/n+(t+f)/2,g=E*-n*O/r+(e+h)/2,p=Object(a.d)((e-g)/n),d=Object(a.d)((h-g)/n),t<v&&(p=a.b-p),f<v&&(d=a.b-d),p<0&&(p+=u),d<0&&(d+=u),l&&p>d&&(p-=u),!l&&d>p&&(d-=u)}if(Object(a.c)(d-p)>s){var L=d,P=f,R=h;d=p+s*(l&&d>p?1:-1),m=c(f=v+r*Object(a.e)(d),h=g+n*Object(a.k)(d),r,n,o,0,l,P,R,d,L,v,g)}else m=[];var T=4/3*Object(a.m)((d-p)/4);if(m.splice(0,0,2*t-(t+T*r*Object(a.k)(p)),2*e-(e-T*n*Object(a.e)(p)),f+T*r*Object(a.k)(d),h-T*n*Object(a.e)(d),f,h),!x)for(var F=0,N=m.length;F<N;F+=2){var C=m[F],I=m[F+1];m[F]=C*b-I*w,m[F+1]=C*w+I*b}return m}var l={M:2,H:1,V:1,L:2,Z:0,C:6,S:4,Q:4,T:2,A:7};function f(t,e,r,n,i,a,s){var u=t.x,c=t.y;t.x=o(a,u),t.y=o(s,c),t.p.push(o(e,u),r=o(r,c),n=o(n,u),i=o(i,c),t.x,t.y),t.lc=t.c}function h(t){var e=t.c,r=t.t,o=t.x,i=t.y;if(e===n.l)r[0]+=i;else if(e===n.e)r[0]+=o;else if(e===n.a)r[5]+=o,r[6]+=i;else for(var a=0;a<r.length;a+=2)r[a]+=o,r[a+1]+=i}function p(t){return t.split(n.c).map(d)}function d(t,e){return 0===e?t:+t}function v(t){for(var e={x:0,y:0,s:[]},r=function(t){return t.replace(/[\^\s]*([mhvlzcsqta]|\-?\d*\.?\d+)[,\$\s]*/gi," $1").replace(/([mhvlzcsqta])/gi," $1").trim().split("  ").map(p)}(t),o=0;o<r.length;o++){var s=r[o],u=s[0],d=u.toUpperCase(),v=d!==n.m&&d!==u;e.c=d;var g=l[d],m=s,y=1;do{e.t=1===m.length?m:m.slice(y,y+g),v&&h(e);var b=e.t,w=e.x,x=e.y,_=void 0,k=void 0,O=void 0,j=void 0,S=void 0,E=void 0;if(d===n.g)e.s.push(e.p=[e.x=b[0],e.y=b[1]]);else if(d===n.e)f(e,n.n,n.n,n.n,n.n,b[0],n.n);else if(d===n.l)f(e,n.n,n.n,n.n,n.n,n.n,b[0]);else if(d===n.f)f(e,n.n,n.n,n.n,n.n,b[0],b[1]);else if(d===n.m)f(e,n.n,n.n,n.n,n.n,e.p[0],e.p[1]);else if(d===n.b)f(e,b[0],b[1],b[2],b[3],b[4],b[5]),e.cx=b[2],e.cy=b[3];else if(d===n.j){var L=e.lc!==n.j&&e.lc!==n.b;f(e,_=L?n.n:2*w-e.cx,k=L?n.n:2*x-e.cy,b[0],b[1],b[2],b[3]),e.cx=b[0],e.cy=b[1]}else if(d===n.i){var P=b[0],R=b[1];O=b[2],j=b[3],f(e,w+(P-w)*a.i,x+(R-x)*a.i,O+(P-O)*a.i,j+(R-j)*a.i,O,j),e.cx=P,e.cy=R}else if(d===n.k)O=b[0],j=b[1],e.lc===n.i||e.lc===n.k?(_=w+(2*w-e.cx-w)*a.i,k=x+(2*x-e.cy-x)*a.i,S=O+(2*w-e.cx-O)*a.i,E=j+(2*x-e.cy-j)*a.i):(_=S=w,k=E=x),f(e,_,k,S,E,O,j),e.cx=S,e.cy=E;else if(d===n.a)for(var T=c(w,x,b[0],b[1],b[2],b[3],b[4],b[5],b[6]),F=0;F<T.length;F+=6)f(e,T[F],T[F+1],T[F+2],T[F+3],T[F+4],T[F+5]);else Object(i.a)(e.c," is not supported");y+=g}while(y<m.length)}return e.s}var g=r(161);function m(t){for(var e=t[0],r=t[1],n=r,o=e,i=2;i<t.length;i+=6){var s=t[i+4],u=t[i+5];e=Object(a.h)(e,s),o=Object(a.g)(o,s),r=Object(a.h)(r,u),n=Object(a.g)(n,u)}return{d:t,x:e,y:r,w:o-e,h:n-r,p:function(t){for(var e=t.length,r=t[e-2],n=t[e-1],o=0,i=0;i<e;i+=6)o+=Object(g.a)(t[i],t[i+1],r,n),r=t[i],n=t[i+1];return Object(a.f)(o)}(t)}}function y(t){return{path:t,data:v(t).map(m)}}r.d(e,"a",function(){return y})},163:function(t,e,r){},164:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c="object"==typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{(l=e.regeneratorRuntime=c?t.exports:{}).wrap=w;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={},g={};g[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(T([])));y&&y!==n&&o.call(y,a)&&(g=y);var b=O.prototype=_.prototype=Object.create(g);k.prototype=b.constructor=O,O.constructor=k,O[u]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},j(S.prototype),S.prototype[s]=function(){return this},l.AsyncIterator=S,l.async=function(t,e,r,n){var o=new S(w(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},j(b),b[u]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=T,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new R(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return F()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function k(){}function O(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var s=x(t[r],t,n);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){u.value=t,i(u)},a)}a(s.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},171:function(t,e,r){"use strict";var n=r(163);r.n(n).a},172:function(t,e,r){var n=Date.prototype,o=n.toString,i=n.getTime;new Date(NaN)+""!="Invalid Date"&&r(11)(n,"toString",function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"})},173:function(t,e,r){r(7)&&"g"!=/./g.flags&&r(8).f(RegExp.prototype,"flags",{configurable:!0,get:r(81)})},174:function(t,e,r){"use strict";r(173);var n=r(6),o=r(81),i=r(7),a=/./.toString,s=function(t){r(11)(RegExp.prototype,"toString",t,!0)};r(5)(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?s(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)}):"toString"!=a.name&&s(function(){return a.call(this)})},195:function(t,e,r){"use strict";r.r(e);r(164);function n(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t,e){try{var r=i[t](e),a=r.value}catch(t){return void o(t)}r.done?n(a):Promise.resolve(a).then(s,u)}function s(t){a("next",t)}function u(t){a("throw",t)}s()})}}r(174),r(172),r(21),r(51);var o=r(162);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&s(t.prototype,e),r&&s(t,r),t}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t){return(l="function"==typeof Symbol&&"symbol"===c(Symbol.iterator)?function(t){return c(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":c(t)})(t)}function f(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.getPrototypeOf||function(t){return t.__proto__})(t)}function p(t,e,r){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}r(10),r(16),r(27);var d,v,g=function(){function t(e){var r=this;i(this,t),this._requestId=0,this._pending={},this._url=e,this._worker=new Worker(this._url),this._worker.onmessage=function(t){return r._onMessage(t)}}var e;return u(t,[{key:"release",value:(e=n(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(this._worker&&(this._worker.terminate(),this._worker=null),e=Object.keys(this._pending),r=0;r<e.length;r++)e[r],this._fulfillPending(id,null,new Error("Worker terminated: "+this._url));case 3:case"end":return t.stop()}},t,this)})),function(){return e.apply(this,arguments)})},{key:"_postMessage",value:function(t){this._worker.postMessage(t)}},{key:"_onMessage",value:function(t){t.data.id?this._fulfillPending(t.data.id,t.data.result,t.data.error):console.log("Unexpected message",t)}},{key:"_fulfillPending",value:function(t,e,r){var n=this._pending[t];n?(delete this._pending[t],r?n[1](new Error(r)):n[0](e)):console.log("No resolver for",{id:t,result:e,error:r})}},{key:"_requestResponse",value:function(t){var e=this;return new Promise(function(r,n){t.id=++e._requestId,e._pending[t.id]=[r,n],e._postMessage(t)})}}]),t}(),m=function(){function t(e,r,n){i(this,t),this.text=e,this._compressedSize=null,this._url="",this._blob=null,this.width=r,this.height=n}return u(t,[{key:"_create",value:function(){this._blob=new Blob([this.text],{type:"image/svg+xml"}),this._url=URL.createObjectURL(this._blob)}},{key:"release",value:function(){this._url&&(this._blob=null,URL.revokeObjectURL(this._url))}},{key:"blob",get:function(){return this._blob||this._create(),this._blob}},{key:"url",get:function(){return this._url||this._create(),this._url}}]),t}(),y=function(t){function e(){var t;return i(this,e),(t=f(this,h(e).call(this,"./svgo-worker.js")))._abortOnNextIteration=!1,t._currentJob=Promise.resolve(),t}var r,o,s;return u(e,[{key:"load",value:(s=n(regeneratorRuntime.mark(function t(e){var r,n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._requestResponse({action:"load",data:e});case 2:return r=t.sent,n=r.width,o=r.height,t.abrupt("return",new m(e,n,o));case 6:case"end":return t.stop()}},t,this)})),function(t){return s.apply(this,arguments)})},{key:"process",value:function(t,e){var r=this;return this._currentJob=this.abortCurrent().then(n(regeneratorRuntime.mark(function n(){var o,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r._abortOnNextIteration=!1,n.next=3,r._requestResponse({action:"process",settings:t});case 3:if(o=n.sent,i=new m(o.data,o.dimensions.width,o.dimensions.height),e(i),!t.multipass){n.next=16;break}case 7:return n.next=9,r.nextPass();case 9:if(!(o=n.sent)){n.next=16;break}if(!r._abortOnNextIteration){n.next=12;break}throw Error("abort");case 12:i=new m(o.data,o.dimensions.width,o.dimensions.height),e(i),n.next=7;break;case 16:return n.abrupt("return",i);case 17:case"end":return n.stop()}},n,this)})))}},{key:"nextPass",value:function(){return this._requestResponse({action:"nextPass"})}},{key:"abortCurrent",value:(o=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._abortOnNextIteration=!0,t.next=3,this._currentJob;case 3:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},{key:"release",value:(r=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.abortCurrent();case 2:p(h(e.prototype),"release",this).call(this);case 3:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})}]),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");a(t.prototype,e&&e.prototype),e&&a(t,e)}(e,t),e}(g),b={data:function(){return{svgo:new y,settings:{floatPrecision:2,plugins:{cleanupAttrs:!0,removeXMLProcInst:!0,removeComments:!0,removeMetadata:!0,removeTitle:!0,removeDesc:!0,removeUselessDefs:!0,removeEditorsNSData:!0,removeEmptyAttrs:!0,removeHiddenElems:!0,removeEmptyText:!0,removeEmptyContainers:!0,removeViewBox:!1,cleanupEnableBackground:!0,convertStyleToAttrs:!0,convertColors:!0,convertPathData:!0,convertTransform:!0,removeUnknownsAndDefaults:!0,removeNonInheritableGroupAttrs:!0,removeUselessStrokeAndFill:!1,removeUnusedNS:!0,cleanupIDs:!1,cleanupNumericValues:!0,moveElemsAttrsToGroup:!0,moveGroupAttrsToElems:!0,collapseGroups:!0,removeRasterImages:!1,mergePaths:!0,convertShapeToPath:!0,sortAttrs:!0,removeDimensions:!0}},duration:1e3,progress:500,items:[{label:"A",itemState:"initial",loadState:"initial",errorMessage:"",isOptimized:!0,paths:null},{label:"B",itemState:"initial",loadState:"initial",errorMessage:"",isOptimized:!0,paths:null}]}},computed:{pathData:function(){return this.items.map(function(t){return t.paths}).filter(Boolean)}},methods:{openFile:function(t,e){var r=this;this.beginProcessing(t),this.readFileContents(e).then(function(e){return r.processSvg(t,e)}).catch(function(e){return r.handleError(t,e)})},changeSettings:function(t,e){void 0!==e.isOptimized&&(t.isOptimized=e.isOptimized,t.originalFile&&this.processSvg(t,t.originalFile.text))},beginProcessing:function(t){t.errorMessage="",t.loadState="loading",t.paths=null},endProcessing:function(t){t.itemState=t.originalFile?"edit":"initial"},handleError:function(t,e){t.errorMessage=e.toString(),t.loadState="error",console.error(e)},readFileContents:(v=n(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,r){var n=new FileReader;n.onload=function(e){return t(e.target.result)},n.onerror=r,n.readAsText(e)}));case 1:case"end":return t.stop()}},t,this)})),function(t){return v.apply(this,arguments)}),processSvg:(d=n(regeneratorRuntime.mark(function t(e,r){var n,o,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this._latestCompressJobId=Math.random(),t.next=3,this.svgo.abortCurrent();case 3:if(n==this._latestCompressJobId){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,this.svgo.load(r);case 7:if(o=t.sent,e.originalFile=o,!e.isOptimized){t.next=13;break}return t.next=12,this.svgo.process(this.settings,function(){});case 12:o=t.sent;case 13:e.optimizedFile=o,console.log("finished processing file: ".concat(e.originalFile.text.length," -> ").concat(e.optimizedFile.text.length)),this.$nextTick(function(){return i.parseSVG(e)});case 16:case"end":return t.stop()}},t,this)})),function(t,e){return d.apply(this,arguments)}),parseSVG:function(t){try{var e=document.createElement("div");e.innerHTML=t.optimizedFile.text;var r=e.querySelector(":not(clipPath) > path");t.paths=Object(o.a)(r.getAttribute("d")),this.endProcessing(t)}catch(e){this.handleError(t,e)}}},created:function(){var t=this;"undefined"!=typeof window&&"serviceWorker"in navigator&&(navigator.serviceWorker.controller||navigator.serviceWorker.register("./svgo-worker.js",{scope:"./"}).then(function(e){e.addEventListener("updatefound",function(){return t._onUpdateFound(e)})}))}},w=(r(171),r(0)),x=Object(w.a)(b,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"workbench-app"},[t._l(t.items,function(e){return r("svg-editor",{key:e.label,attrs:{label:e.label,itemState:e.itemState,loadState:e.loadState,errorMessage:e.errorMessage,isOptimized:e.isOptimized,paths:e.paths},on:{open:function(r){t.openFile(e,r)},changeSettings:function(r){t.changeSettings(e,r)}}})}),r("div",{staticClass:"flex-centered"},[r("svg-previewer",{attrs:{pathData:t.pathData,progress:t.progress,duration:t.duration}}),r("div",{staticClass:"preview-scrubber"},[r("label",[t._v("Tween")]),r("input",{attrs:{type:"range",min:"0",max:t.duration,step:"0"},domProps:{value:t.progress},on:{input:function(e){t.progress=+e.currentTarget.value}}})])],1)],2)},[],!1,null,null,null);e.default=x.exports}}]);