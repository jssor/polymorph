(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{156:function(e,t,r){},166:function(e,t,r){"use strict";var n=r(156);r.n(n).a},187:function(e,t,r){"use strict";r.r(t);r(21),r(173),r(171),r(161);var n=r(160),i=(r(169),r(167),r(22),r(79),r(80),void 0),s="V",a="H",o="L",c="Z",u="M",l="C",h="S",p="Q",f="T",d="A",v=" ";function m(e,t){return e===i?t:e}function g(){throw new Error(Array.prototype.join.call(arguments,v))}var b=Math,x=b.abs,_=b.min,w=b.max,y=b.floor,k=(b.round,b.sqrt),O=b.pow,S=b.cos,j=b.asin,R=b.sin,P=b.tan,C=b.PI,M=2/3,A=(O(2,-52),120*C/180),E=2*C;function z(e,t,r,n,i,s,a,o,c,u,l,h,p){if(r<=0||n<=0)return[e,t,o,c,o,c];var f,d=C/180*(+i||0),v=S(d),m=R(d),g=!!u;if(!g){var b=e,_=o,w=((e=b*v-t*-m)-(o=_*v-c*-m))/2,y=((t=b*-m+t*v)-(c=_*-m+c*v))/2,O=w*w/(r*r)+y*y/(n*n);O>1&&(r*=O=k(O),n*=O);var M=(s===a?-1:1)*k(x((r*r*n*n-r*r*y*y-n*n*w*w)/(r*r*y*y+n*n*w*w)));h=M*r*y/n+(e+o)/2,u=j((t-(p=M*-n*w/r+(t+c)/2))/n),l=j((c-p)/n),e<h&&(u=C-u),o<h&&(l=C-l),u<0&&(u+=E),l<0&&(l+=E),a&&u>l&&(u-=E),!a&&l>u&&(l-=E)}if(x(l-u)>A){var F=l,I=o,T=c;f=z(o=h+r*S(l=u+A*(a&&l>u?1:-1)),c=p+n*R(l),r,n,i,0,a,I,T,l,F,h,p)}else f=[];var q=4/3*P((l-u)/4);if(f.splice(0,0,2*e-(e+q*r*R(u)),2*t-(t-q*n*S(u)),o+q*r*R(l),c-q*n*S(l),o,c),!g)for(var U=0,N=f.length;U<N;U+=2){var L=f[U],D=f[U+1];f[U]=L*v-D*m,f[U+1]=L*m+D*v}return f}var F={M:2,H:1,V:1,L:2,Z:0,C:6,S:4,Q:4,T:2,A:7};function I(e,t,r,n,i,s,a){var o=e.x,c=e.y;e.x=m(s,o),e.y=m(a,c),e.p.push(m(t,o),r=m(r,c),n=m(n,o),i=m(i,c),e.x,e.y),e.lc=e.c}function T(e){var t=e.c,r=e.t,n=e.x,i=e.y;if(t===s)r[0]+=i;else if(t===a)r[0]+=n;else if(t===d)r[5]+=n,r[6]+=i;else for(var o=0;o<r.length;o+=2)r[o]+=n,r[o+1]+=i}function q(e){return e.split(v).map(U)}function U(e,t){return 0===t?e:+e}function N(e){for(var t={x:0,y:0,s:[]},r=function(e){return e.replace(/[\^\s]*([mhvlzcsqta]|\-?\d*\.?\d+)[,\$\s]*/gi," $1").replace(/([mhvlzcsqta])/gi," $1").trim().split("  ").map(q)}(e),n=0;n<r.length;n++){var v=r[n],m=v[0],b=m.toUpperCase(),x=b!==c&&b!==m;t.c=b;var _=F[b],w=v,y=1;do{t.t=1===w.length?w:w.slice(y,y+_),x&&T(t);var k=t.t,O=t.x,S=t.y,j=void 0,R=void 0,P=void 0,C=void 0,A=void 0,E=void 0;if(b===u)t.s.push(t.p=[t.x=k[0],t.y=k[1]]);else if(b===a)I(t,i,i,i,i,k[0],i);else if(b===s)I(t,i,i,i,i,i,k[0]);else if(b===o)I(t,i,i,i,i,k[0],k[1]);else if(b===c)I(t,i,i,i,i,t.p[0],t.p[1]);else if(b===l)I(t,k[0],k[1],k[2],k[3],k[4],k[5]),t.cx=k[2],t.cy=k[3];else if(b===h){var U=t.lc!==h&&t.lc!==l;I(t,j=U?i:2*O-t.cx,R=U?i:2*S-t.cy,k[0],k[1],k[2],k[3]),t.cx=k[0],t.cy=k[1]}else if(b===p){var N=k[0],L=k[1];P=k[2],C=k[3],I(t,O+(N-O)*M,S+(L-S)*M,P+(N-P)*M,C+(L-C)*M,P,C),t.cx=N,t.cy=L}else if(b===f)P=k[0],C=k[1],t.lc===p||t.lc===f?(j=O+(2*O-t.cx-O)*M,R=S+(2*S-t.cy-S)*M,A=P+(2*O-t.cx-P)*M,E=C+(2*S-t.cy-C)*M):(j=A=O,R=E=S),I(t,j,R,A,E,P,C),t.cx=A,t.cy=E;else if(b===d)for(var D=z(O,S,k[0],k[1],k[2],k[3],k[4],k[5],k[6]),J=0;J<D.length;J+=6)I(t,D[J],D[J+1],D[J+2],D[J+3],D[J+4],D[J+5]);else g(t.c," is not supported");y+=_}while(y<w.length)}return t.s}function L(e,t,r,n){return k((e-r)*(e-r)+(t-n)*(t-n))}function D(e){for(var t=e[0],r=e[1],n=r,i=t,s=2;s<e.length;s+=6){var a=e[s+4],o=e[s+5];t=_(t,a),i=w(i,a),r=_(r,o),n=w(n,o)}return{d:e,x:t,y:r,w:i-t,h:n-r,p:function(e){for(var t=e.length,r=e[t-2],n=e[t-1],i=0,s=0;s<t;s+=6)i+=L(e[s],e[s+1],r,n),r=e[s],n=e[s+1];return y(i)}(e)}}var J,G,V=r(159),$=r(164),B=r(158),H=r(165),Q=r(157),W=r(163),Z=(r(11),r(16),r(23),function(){function e(t){var r=this;Object(V.a)(this,e),this._requestId=0,this._pending={},this._url=t,this._worker=new Worker(this._url),this._worker.onmessage=function(e){return r._onMessage(e)}}var t;return Object(B.a)(e,[{key:"release",value:(t=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(this._worker&&(this._worker.terminate(),this._worker=null),t=Object.keys(this._pending),r=0;r<t.length;r++)t[r],this._fulfillPending(id,null,new Error("Worker terminated: "+this._url));case 3:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{key:"_postMessage",value:function(e){this._worker.postMessage(e)}},{key:"_onMessage",value:function(e){e.data.id?this._fulfillPending(e.data.id,e.data.result,e.data.error):console.log("Unexpected message",e)}},{key:"_fulfillPending",value:function(e,t,r){var n=this._pending[e];n?(delete this._pending[e],r?n[1](new Error(r)):n[0](t)):console.log("No resolver for",{id:e,result:t,error:r})}},{key:"_requestResponse",value:function(e){var t=this;return new Promise(function(r,n){e.id=++t._requestId,t._pending[e.id]=[r,n],t._postMessage(e)})}}]),e}()),X=function(){function e(t,r,n){Object(V.a)(this,e),this.text=t,this._compressedSize=null,this._url="",this._blob=null,this.width=r,this.height=n}return Object(B.a)(e,[{key:"_create",value:function(){this._blob=new Blob([this.text],{type:"image/svg+xml"}),this._url=URL.createObjectURL(this._blob)}},{key:"release",value:function(){this._url&&(this._blob=null,URL.revokeObjectURL(this._url))}},{key:"blob",get:function(){return this._blob||this._create(),this._blob}},{key:"url",get:function(){return this._url||this._create(),this._url}}]),e}(),K=new(function(e){function t(){var e;return Object(V.a)(this,t),(e=Object(H.a)(this,Object(Q.a)(t).call(this,"./svgo-worker.js")))._abortOnNextIteration=!1,e._currentJob=Promise.resolve(),e}var r,i,s;return Object(B.a)(t,[{key:"load",value:(s=Object(n.a)(regeneratorRuntime.mark(function e(t){var r,n,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._requestResponse({action:"load",data:t});case 2:return r=e.sent,n=r.width,i=r.height,e.abrupt("return",new X(t,n,i));case 6:case"end":return e.stop()}},e,this)})),function(e){return s.apply(this,arguments)})},{key:"process",value:function(e,t){var r=this;return this._currentJob=this.abortCurrent().then(Object(n.a)(regeneratorRuntime.mark(function n(){var i,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r._abortOnNextIteration=!1,n.next=3,r._requestResponse({action:"process",settings:e});case 3:if(i=n.sent,s=new X(i.data,i.dimensions.width,i.dimensions.height),t(s),!e.multipass){n.next=16;break}case 7:return n.next=9,r.nextPass();case 9:if(!(i=n.sent)){n.next=16;break}if(!r._abortOnNextIteration){n.next=12;break}throw Error("abort");case 12:s=new X(i.data,i.dimensions.width,i.dimensions.height),t(s),n.next=7;break;case 16:return n.abrupt("return",s);case 17:case"end":return n.stop()}},n,this)})))}},{key:"nextPass",value:function(){return this._requestResponse({action:"nextPass"})}},{key:"abortCurrent",value:(i=Object(n.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._abortOnNextIteration=!0,e.next=3,this._currentJob;case 3:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"release",value:(r=Object(n.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.abortCurrent();case 2:Object(W.a)(Object(Q.a)(t.prototype),"release",this).call(this);case 3:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)})}]),Object($.a)(t,e),t}(Z)),Y={floatPrecision:2,plugins:{cleanupAttrs:!0,removeXMLProcInst:!0,removeComments:!0,removeMetadata:!0,removeTitle:!0,removeDesc:!0,removeUselessDefs:!0,removeEditorsNSData:!0,removeEmptyAttrs:!0,removeHiddenElems:!0,removeEmptyText:!0,removeEmptyContainers:!0,removeViewBox:!1,cleanupEnableBackground:!0,convertStyleToAttrs:!0,convertColors:!0,convertPathData:!0,convertTransform:!0,removeUnknownsAndDefaults:!0,removeNonInheritableGroupAttrs:!0,removeUselessStrokeAndFill:!1,removeUnusedNS:!0,cleanupIDs:!1,cleanupNumericValues:!0,moveElemsAttrsToGroup:!0,moveGroupAttrsToElems:!0,collapseGroups:!0,removeRasterImages:!1,mergePaths:!0,convertShapeToPath:!0,sortAttrs:!0,removeDimensions:!0}},ee={data:function(){return{items:[{label:"A",itemState:"initial",loadState:"initial",errorMessage:"",isOptimized:!0,paths:[],svgContents:""},{label:"B",itemState:"initial",loadState:"initial",errorMessage:"",isOptimized:!0,paths:[],svgContents:""}]}},methods:{openFile:function(e,t){var r=this;this.beginProcessing(e),this.readFileContents(t).then(function(t){return r.processSvg(e,t)}).catch(function(t){return r.handleError(e,t)})},changeSettings:function(e,t){void 0!==t.isOptimized&&(e.isOptimized=t.isOptimized,e.originalFile&&this.processSvg(e,e.originalFile.text))},beginProcessing:function(e){e.errorMessage="",e.loadState="loading",e.paths=[]},endProcessing:function(e){e.itemState=e.originalFile?"edit":"initial"},handleError:function(e,t){e.errorMessage=t.toString(),e.loadState="error",console.error(t)},readFileContents:(G=Object(n.a)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,r){var n=new FileReader;n.onload=function(t){return e(t.target.result)},n.onerror=r,n.readAsText(t)}));case 1:case"end":return e.stop()}},e,this)})),function(e){return G.apply(this,arguments)}),processSvg:(J=Object(n.a)(regeneratorRuntime.mark(function e(t,r){var n,i,s=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this._latestCompressJobId=Math.random(),e.next=3,K.abortCurrent();case 3:if(n==this._latestCompressJobId){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,K.load(r);case 7:if(i=e.sent,t.originalFile=i,!t.isOptimized){e.next=13;break}return e.next=12,K.process(Y,function(){});case 12:i=e.sent;case 13:t.optimizedFile=i,console.log("finished processing file: ".concat(t.originalFile.text.length," -> ").concat(t.optimizedFile.text.length)),this.$nextTick(function(){return s.parseSVG(t)});case 16:case"end":return e.stop()}},e,this)})),function(e,t){return J.apply(this,arguments)}),parseSVG:function(e){try{var t=document.createElement("div");t.innerHTML=e.optimizedFile.text;var r=Array.from(t.querySelectorAll(":not(clipPath) > path"));e.paths=r.map(function(e,t){return{el:e,index:t,path:(r=e.getAttribute("d"),{path:r,data:N(r).map(D)})};var r}),this.endProcessing(e)}catch(t){this.handleError(e,t)}}}},te=(r(166),r(0)),re=Object(te.a)(ee,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"workbench-app"},[e._l(e.items,function(t){return r("svg-editor",{attrs:{label:t.label,itemState:t.itemState,loadState:t.loadState,errorMessage:t.errorMessage,isOptimized:t.isOptimized,paths:t.paths,svgContents:t.optimizedFile&&t.optimizedFile.text||""},on:{open:function(r){e.openFile(t,r)},changeSettings:function(r){e.changeSettings(t,r)}}})}),r("div",{staticClass:"flex-centered"},[e._v("Preview")])],2)},[],!1,null,null,null);t.default=re.exports}}]);