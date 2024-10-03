import{cy as Q,cz as U,cA as X,ee as Y}from"./otyn7m3v4o5hjv1m.js";import{bS as _,c0 as W}from"./g98o1hu13svzcy4j.js";import{z as j,J as S}from"./guixxmttrchqsmhb.js";import{k as b,a as K}from"./n8ljlp21wilt13tf.js";import{T as ee}from"./lw3rrnnb5dxcyypl.js";function p(){}p.prototype={diff:function(e,r){var t,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=u.callback;typeof u=="function"&&(o=u,u={});var i=this;function l(v){return v=i.postProcess(v,u),o?(setTimeout(function(){o(v)},0),!0):v}e=this.castInput(e,u),r=this.castInput(r,u),e=this.removeEmpty(this.tokenize(e,u)),r=this.removeEmpty(this.tokenize(r,u));var f=r.length,s=e.length,a=1,c=f+s;u.maxEditLength!=null&&(c=Math.min(c,u.maxEditLength));var h=(t=u.timeout)!==null&&t!==void 0?t:1/0,C=Date.now()+h,m=[{oldPos:-1,lastComponent:void 0}],g=this.extractCommon(m[0],r,e,0,u);if(m[0].oldPos+1>=s&&g+1>=f)return l(B(i,m[0].lastComponent,r,e,i.useLongestToken));var y=-1/0,T=1/0;function z(){for(var v=Math.max(y,-a);v<=Math.min(T,a);v+=2){var d=void 0,w=m[v-1],E=m[v+1];w&&(m[v-1]=void 0);var q=!1;if(E){var F=E.oldPos-v;q=E&&0<=F&&F<f}var V=w&&w.oldPos+1<s;if(!q&&!V){m[v]=void 0;continue}if(!V||q&&w.oldPos<E.oldPos?d=i.addToPath(E,!0,!1,0,u):d=i.addToPath(w,!1,!0,1,u),g=i.extractCommon(d,r,e,v,u),d.oldPos+1>=s&&g+1>=f)return l(B(i,d.lastComponent,r,e,i.useLongestToken));m[v]=d,d.oldPos+1>=s&&(T=Math.min(T,v-1)),g+1>=f&&(y=Math.max(y,v+1))}a++}if(o)(function v(){setTimeout(function(){if(a>c||Date.now()>C)return o();z()||v()},0)})();else for(;a<=c&&Date.now()<=C;){var D=z();if(D)return D}},addToPath:function(e,r,t,u,o){var i=e.lastComponent;return i&&!o.oneChangePerToken&&i.added===r&&i.removed===t?{oldPos:e.oldPos+u,lastComponent:{count:i.count+1,added:r,removed:t,previousComponent:i.previousComponent}}:{oldPos:e.oldPos+u,lastComponent:{count:1,added:r,removed:t,previousComponent:i}}},extractCommon:function(e,r,t,u,o){for(var i=r.length,l=t.length,f=e.oldPos,s=f-u,a=0;s+1<i&&f+1<l&&this.equals(t[f+1],r[s+1],o);)s++,f++,a++,o.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return a&&!o.oneChangePerToken&&(e.lastComponent={count:a,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=f,s},equals:function(e,r,t){return t.comparator?t.comparator(e,r):e===r||t.ignoreCase&&e.toLowerCase()===r.toLowerCase()},removeEmpty:function(e){for(var r=[],t=0;t<e.length;t++)e[t]&&r.push(e[t]);return r},castInput:function(e){return e},tokenize:function(e){return Array.from(e)},join:function(e){return e.join("")},postProcess:function(e){return e}};function B(n,e,r,t,u){for(var o=[],i;e;)o.push(e),i=e.previousComponent,delete e.previousComponent,e=i;o.reverse();for(var l=0,f=o.length,s=0,a=0;l<f;l++){var c=o[l];if(c.removed)c.value=n.join(t.slice(a,a+c.count)),a+=c.count;else{if(!c.added&&u){var h=r.slice(s,s+c.count);h=h.map(function(C,m){var g=t[a+m];return g.length>C.length?g:C}),c.value=n.join(h)}else c.value=n.join(r.slice(s,s+c.count));s+=c.count,c.added||(a+=c.count)}}return o}function H(n,e){var r;for(r=0;r<n.length&&r<e.length;r++)if(n[r]!=e[r])return n.slice(0,r);return n.slice(0,r)}function P(n,e){var r;if(!n||!e||n[n.length-1]!=e[e.length-1])return"";for(r=0;r<n.length&&r<e.length;r++)if(n[n.length-(r+1)]!=e[e.length-(r+1)])return n.slice(-r);return n.slice(-r)}function A(n,e,r){if(n.slice(0,e.length)!=e)throw Error("string ".concat(JSON.stringify(n)," doesn't start with prefix ").concat(JSON.stringify(e),"; this is a bug"));return r+n.slice(e.length)}function N(n,e,r){if(!e)return n+r;if(n.slice(-e.length)!=e)throw Error("string ".concat(JSON.stringify(n)," doesn't end with suffix ").concat(JSON.stringify(e),"; this is a bug"));return n.slice(0,-e.length)+r}function L(n,e){return A(n,e,"")}function x(n,e){return N(n,e,"")}function Z(n,e){return e.slice(0,ne(n,e))}function ne(n,e){var r=0;n.length>e.length&&(r=n.length-e.length);var t=e.length;n.length<e.length&&(t=n.length);var u=Array(t),o=0;u[0]=0;for(var i=1;i<t;i++){for(e[i]==e[o]?u[i]=u[o]:u[i]=o;o>0&&e[i]!=e[o];)o=u[o];e[i]==e[o]&&o++}o=0;for(var l=r;l<n.length;l++){for(;o>0&&n[l]!=e[o];)o=u[o];n[l]==e[o]&&o++}return o}var I="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",re=new RegExp("[".concat(I,"]+|\\s+|[^").concat(I,"]"),"ug"),O=new p;O.equals=function(n,e,r){return r.ignoreCase&&(n=n.toLowerCase(),e=e.toLowerCase()),n.trim()===e.trim()};O.tokenize=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;if(e.intlSegmenter){if(e.intlSegmenter.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');r=Array.from(e.intlSegmenter.segment(n),function(o){return o.segment})}else r=n.match(re)||[];var t=[],u=null;return r.forEach(function(o){/\s/.test(o)?u==null?t.push(o):t.push(t.pop()+o):/\s/.test(u)?t[t.length-1]==u?t.push(t.pop()+o):t.push(u+o):t.push(o),u=o}),t};O.join=function(n){return n.map(function(e,r){return r==0?e:e.replace(/^\s+/,"")}).join("")};O.postProcess=function(n,e){if(!n||e.oneChangePerToken)return n;var r=null,t=null,u=null;return n.forEach(function(o){o.added?t=o:o.removed?u=o:((t||u)&&G(r,u,t,o),r=o,t=null,u=null)}),(t||u)&&G(r,u,t,null),n};function G(n,e,r,t){if(e&&r){var u=e.value.match(/^\s*/)[0],o=e.value.match(/\s*$/)[0],i=r.value.match(/^\s*/)[0],l=r.value.match(/\s*$/)[0];if(n){var f=H(u,i);n.value=N(n.value,i,f),e.value=L(e.value,f),r.value=L(r.value,f)}if(t){var s=P(o,l);t.value=A(t.value,l,s),e.value=x(e.value,s),r.value=x(r.value,s)}}else if(r)n&&(r.value=r.value.replace(/^\s*/,"")),t&&(t.value=t.value.replace(/^\s*/,""));else if(n&&t){var a=t.value.match(/^\s*/)[0],c=e.value.match(/^\s*/)[0],h=e.value.match(/\s*$/)[0],C=H(a,c);e.value=L(e.value,C);var m=P(L(a,C),h);e.value=x(e.value,m),t.value=A(t.value,a,m),n.value=N(n.value,a,a.slice(0,a.length-m.length))}else if(t){var g=t.value.match(/^\s*/)[0],y=e.value.match(/\s*$/)[0],T=Z(y,g);e.value=x(e.value,T)}else if(n){var z=n.value.match(/\s*$/)[0],D=e.value.match(/^\s*/)[0],v=Z(z,D);e.value=L(e.value,v)}}var oe=new p;oe.tokenize=function(n){var e=new RegExp("(\\r?\\n)|[".concat(I,"]+|[^\\S\\n\\r]+|[^").concat(I,"]"),"ug");return n.match(e)||[]};var M=new p;M.tokenize=function(n,e){e.stripTrailingCr&&(n=n.replace(/\r\n/g,`
`));var r=[],t=n.split(/(\n|\r\n)/);t[t.length-1]||t.pop();for(var u=0;u<t.length;u++){var o=t[u];u%2&&!e.newlineIsToken?r[r.length-1]+=o:r.push(o)}return r};M.equals=function(n,e,r){return r.ignoreWhitespace?((!r.newlineIsToken||!n.includes(`
`))&&(n=n.trim()),(!r.newlineIsToken||!e.includes(`
`))&&(e=e.trim())):r.ignoreNewlineAtEof&&!r.newlineIsToken&&(n.endsWith(`
`)&&(n=n.slice(0,-1)),e.endsWith(`
`)&&(e=e.slice(0,-1))),p.prototype.equals.call(this,n,e,r)};function ce(n,e,r){return M.diff(n,e,r)}var te=new p;te.tokenize=function(n){return n.split(/(\S.+?[.!?])(?=\s+|$)/)};var ue=new p;ue.tokenize=function(n){return n.split(/([{}:;,]|\s+)/)};function $(n){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(n)}var k=new p;k.useLongestToken=!0;k.tokenize=M.tokenize;k.castInput=function(n,e){var r=e.undefinedReplacement,t=e.stringifyReplacer,u=t===void 0?function(o,i){return typeof i>"u"?r:i}:t;return typeof n=="string"?n:JSON.stringify(R(n,null,null,u),u,"  ")};k.equals=function(n,e,r){return p.prototype.equals.call(k,n.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"),r)};function R(n,e,r,t,u){e=e||[],r=r||[],t&&(n=t(u,n));var o;for(o=0;o<e.length;o+=1)if(e[o]===n)return r[o];var i;if(Object.prototype.toString.call(n)==="[object Array]"){for(e.push(n),i=new Array(n.length),r.push(i),o=0;o<n.length;o+=1)i[o]=R(n[o],e,r,t,u);return e.pop(),r.pop(),i}if(n&&n.toJSON&&(n=n.toJSON()),$(n)==="object"&&n!==null){e.push(n),i={},r.push(i);var l=[],f;for(f in n)Object.prototype.hasOwnProperty.call(n,f)&&l.push(f);for(l.sort(),o=0;o<l.length;o+=1)f=l[o],i[f]=R(n[f],e,r,t,f);e.pop(),r.pop()}else i=n;return i}var J=new p;J.tokenize=function(n){return n.slice()};J.join=J.removeEmpty=function(n){return n};function ve(n){const e=b(),r=j(n),t=K(n)??e.id,u=S({clientThreadId:n});return async function(o){const i=new _,l=ee.getThreadCurrentLeafId(n),f=performance.now(),s=await Q(),[a,c,h]=await Promise.all([U.getEnforcementToken(s),W.getEnforcementToken(s),X.getEnforcementToken(s)]);u({model:t,completionType:Y.Next,parentNodeId:l,metadata:{eventSource:"mouse"},completionMetadata:{conversationMode:r},chatReq:s,arkoseToken:a??null,turnstileToken:c??null,proofToken:h??null,preflightTime:performance.now()-f,appendMessages:o,turnTracker:i})}}export{ce as d,ve as u};
//# sourceMappingURL=lgurp74lva79vttt.js.map
