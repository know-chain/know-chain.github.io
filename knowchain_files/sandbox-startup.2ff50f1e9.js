!function(e){function t(t){for(var o,a,i=t[0],c=t[1],d=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(u&&u(t);f.length;)f.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={"sandbox-startup":0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=function(e){return a.p+"static/js/"+({}[e]||e)+"."+{4:"f888863f2",5:"7f773faf4"}[e]+".chunk.js"}(e);var c=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",c.name="ChunkLoadError",c.type=o,c.request=s,n[1](c)}r[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://codesandbox.io/",a.oe=function(e){throw console.error(e),e};var i=this.csbJsonP=this.csbJsonP||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;s.push(["./src/sandbox/startup.ts","vendors~app~embed~sandbox~sandbox-startup","vendors~app~embed~sandbox-startup","default~app~embed~sandbox~sandbox-startup"]),n()}({"../../node_modules/worker-loader/dist/cjs.js?publicPath=/&name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.ts":function(e,t){e.exports=function(){return new Worker("/babel-transpiler.2be949ee.worker.js")}},"../sandbox-hooks/console/index.js":function(e,t,n){var o,r,s;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t,n("../../node_modules/@babel/runtime/regenerator/index.js"),n("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),n("../codesandbox-api/dist/codesandbox.es5.js"),n("../../node_modules/console-feed/lib/Hook/index.js"),n("../../node_modules/console-feed/lib/Transform/index.js")],void 0===(s="function"===typeof(o=function(e,t,o,r,s,a){"use strict";var i=n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)(window.console,function(){var e=(0,o.default)(t.default.mark((function e(n){return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iframeHandshake;case 2:(0,r.dispatch)({type:"console",log:n});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,r.listen)((function(e,t){if(t&&"evaluate"===e.type){var n=null,o=!1;try{if(e.command&&"{"===e.command.charAt(0))try{var s="(".concat(e.command,")");new Function(s),e.command=s}catch(i){}n=(0,eval)(e.command)}catch(i){n=i,o=!0}try{(0,r.dispatch)({type:"eval-result",error:o,result:(0,a.Encode)(n)})}catch(i){console.error(i)}}}))},t=i(t),o=i(o),s=i(s)})?o.apply(t,r):o)||(e.exports=s)},"../sandbox-hooks/preview-secret.js":function(e,t,n){var o,r,s;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t,n("../common/lib/utils/url-generator.js")],void 0===(s="function"===typeof(o=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.requestPreviewSecretFromApp=e.listenForPreviewSecret=e.setPreviewSecret=e.getPreviewSecret=void 0;var n=function(){return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)".concat("csb_sandbox_secret","\\s*\\=\\s*([^;]*).*$)|^.*$")),"$1")};e.getPreviewSecret=n;var o=function(e){if(null!==e){var t=n();(t&&!e||e&&!t||t!==e)&&(e?(document.cookie="".concat("csb_sandbox_secret","=").concat(e,";samesite=none;secure;"),setTimeout((function(){location.reload()}),1e3)):document.cookie="".concat("csb_sandbox_secret","=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"))}};function r(){var e={width:1020,height:618},t=e.width,n=e.height,o=function(e){var t=e.width,n=e.height,o=window.screenLeft?window.screenLeft:window.screenX,r=window.screenTop?window.screenTop:window.screenY,s=o+window.innerWidth/2-t/2;return{top:r+window.innerHeight/2-n/2,left:s}}({width:t,height:n}),r=o.top,s=o.left;return"width=".concat(t,",height=").concat(n,",top=").concat(r,",left=").concat(s)}e.setPreviewSecret=o,e.listenForPreviewSecret=function(){var e=function(e){if(e.data&&"preview-secret"===e.data.$type){var t=e.data.previewSecret;o(t)}};return window.addEventListener("message",e),function(){window.removeEventListener("message",e)}},e.requestPreviewSecretFromApp=function(e){var n=(0,t.protocolAndHost)(),s=window.open(n+"/auth/sandbox/"+e,name,"scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no, ".concat(r()));setInterval((function(){s.postMessage({$type:"request-preview-secret"},n)}),500),window.addEventListener("message",(function e(t){t.data&&"preview-secret"===t.data.$type&&(o(t.data.previewSecret),window.removeEventListener("message",e),s.close())}))}})?o.apply(t,r):o)||(e.exports=s)},"../sandbox-hooks/screenshot.js":function(e,t,n){var o,r,s;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t,n("../codesandbox-api/dist/codesandbox.es5.js")],void 0===(s="function"===typeof(o=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e;(0,t.listen)((function(o){"take-screenshot"===o.type?Promise.all([n.e(5),n.e(4)]).then(n.t.bind(null,"../sandbox-hooks/html2canvas-lib/index.js",7)).then((function(e){(0,e.default)(document.documentElement,{useCORS:function(e){return!(o.data.isPrivateSandbox||!e)},proxy:"https://h2c-proxy.csb.dev/",logging:!1,allowTaint:!1}).then((function(e){var n=document.createElement("canvas"),o=document.documentElement.scrollLeft,r=document.documentElement.scrollTop;n.width=e.width-o,n.height=e.height-r,n.getContext("2d").drawImage(e,o,r,n.width,n.height,0,0,n.width,n.height),(0,t.dispatch)({type:"screenshot-generated",screenshot:n.toDataURL()})}))})):"show-screenshot-cursor"===o.type?(e=document.documentElement.style.cursor,document.documentElement.style.cursor='url(\'data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16H0V8Z" fill="%23FF3B30"/></svg>\'), auto'):"hide-screenshot-cursor"===o.type&&(document.documentElement.style.cursor=e)})),window.addEventListener("keydown",(function(e){"s"===e.key&&e.shiftKey&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),(0,t.dispatch)({type:"screenshot-requested-from-preview"}))}))}})?o.apply(t,r):o)||(e.exports=s)},"../sandbox-hooks/url-listeners.js":function(e,t,n){var o,r,s;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t,n("../codesandbox-api/dist/codesandbox.es5.js")],void 0===(s="function"===typeof(o=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return Object.assign(window.history,{go:function(e){var t=r+e;if(t>=0&&t<=o.length-1){var i=o[r=t],c=i.url,d=i.state,u=document.location.href;n.replaceState.call(window.history,d,"",c);var l=document.location.href;a(l),window.dispatchEvent(new PopStateEvent("popstate",{state:d})),-1!==l.indexOf("#")&&(s=!0,window.dispatchEvent(new HashChangeEvent("hashchange",{oldURL:u,newURL:l})))}},back:function(){window.history.go(-1)},forward:function(){window.history.go(1)},pushState:function(e,t,o){n.replaceState.call(window.history,e,t,o),i(o,e),a(document.location.href)},replaceState:function(e,t,s){n.replaceState.call(window.history,e,t,s),o[r]={state:e,url:s},a(document.location.href)}}),Object.defineProperties(window.history,{length:{get:function(){return o.length}},state:{get:function(){return o[r].state}}}),window.addEventListener("hashchange",(function(){s?s=!1:(i(c(document.location),null),a(document.location.href))})),i(c(document.location),null),setTimeout((function(){a(document.location.href)})),(0,t.listen)((function(e,t){t&&("urlback"===e.type?history.back():"urlforward"===e.type?history.forward():"refresh"===e.type&&document.location.reload())}))};var n=window.history.__proto__,o=[],r=-1,s=!1;function a(e){(0,t.dispatch)({type:"urlchange",url:e,back:r>0,forward:r<o.length-1})}function i(e,t){o.splice(r+1),o.push({url:e,state:t}),r=o.length-1}function c(e){return"".concat(e.pathname).concat(e.hash)}})?o.apply(t,r):o)||(e.exports=s)},"./src/sandbox/startup.ts":function(e,t,n){"use strict";n.r(t);var o=n("../../node_modules/worker-loader/dist/cjs.js?publicPath=/&name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.ts"),r=n.n(o),s=n("../sandbox-hooks/console/index.js"),a=n.n(s),i=n("../sandbox-hooks/url-listeners.js"),c=n.n(i),d=n("../sandbox-hooks/screenshot.js"),u=n.n(d),l=n("../sandbox-hooks/preview-secret.js"),f=n("../codesandbox-api/dist/codesandbox.es5.js");!function(e){var t=document.createElement("link");t.href=e,t.rel="prefetch",t.as="script",document.head.appendChild(t)}("".concat("https://codesandbox.io","/static/js/babel.").concat("7.12.12",".min.js"));window.babelworkers=[];for(var p=0;p<3;p++){var h=new r.a;window.babelworkers.push(h)}f.isStandalone||(c()(),a()(),Object(l.listenForPreviewSecret)(),u()())}});
//# sourceMappingURL=sandbox-startup.2ff50f1e9.js.map