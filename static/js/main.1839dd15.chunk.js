(this["webpackJsonptree-online"]=this["webpackJsonptree-online"]||[]).push([[0],{225:function(e,n,t){e.exports=t(436)},428:function(e,n,t){},429:function(e,n,t){},435:function(e,n,t){},436:function(e,n,t){"use strict";t.r(n);t(226),t(235);var a=t(0),r=t.n(a),o=t(71),i=t(46),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u=t(49),s=t(216),f=t(217),d=t.n(f),h=t(218),p=t.n(h),m=t(97),g=t.n(m),v={ascii:{CHILD:"|- ",LAST_CHILD:"`- ",DIRECTORY:"|  ",EMPTY:"   "},"utf-8":{CHILD:"\u251c\u2500 ",LAST_CHILD:"\u2514\u2500 ",DIRECTORY:"\u2502  ",EMPTY:"   "}},b={charset:"utf-8",trailingDirSlash:!1,rootDot:!0,useIcon:!1},E=function(e,n){var t=v[n.charset];if(!e.parent)return n.rootDot?e.name:null;for(var a=[w(e)?t.LAST_CHILD:t.CHILD,O(e,n)],r=e.parent;r&&r.parent;)a.unshift(w(r)?t.EMPTY:t.DIRECTORY),r=r.parent;return a.join("").substring(n.rootDot?0:t.CHILD.length)},O=function(e,n){var t,a,r=[e.name],o=null!==(t=n.trailingDirSlash)&&void 0!==t&&t,i=e.children.length>0,c=!/\/\s*$/.test(e.name),l=o&&i&&c,u=null!==(a=null===n||void 0===n?void 0:n.useIcon)&&void 0!==a&&a;return(r=r.map((function(e){return function(e){var n=e.value,t=e.addSlash,a=void 0!==t&&t,r=e.useIcon,o=void 0!==r&&r,i=n.indexOf(" # "),c=o?" \ud83d\udcc2":"/";if(-1===i)return a?"".concat(n).concat(c):n;var l=n.substring(0,i),u=n.substring(i);return a?"".concat(l).concat(c).concat(u):"".concat(l).concat(u)}({value:e.replace(/(^|\s)(https?:\/\/[^\s]+)/g,"$1[Link]($2)"),addSlash:l,useIcon:u})}))).join("")},w=function(e){return Boolean(e.parent&&g()(e.parent.children)===e)};var x=t(1),j=/^((\s*)(?:-\s)?)/,C=/^\s*$/,y=/[^\r\n]+/g,S=function(e){var n=e.match(y)||[];return(n=n.filter((function(e){return!C.test(e)}))).map((function(e){var n=j.exec(e);if(!n)throw new Error('Unable to execute leadingWhitespaceAndBulletRegex against string: "'.concat(e,'"'));return{name:e.replace(n[1],""),children:[],indentCount:n[2].length,parent:null}}))},I=t(42);function T(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],a=function(e,n){var t=new RegExp("".concat((n[2]?n[2]:"")+n[0],"|").concat((n[3]?n[3]:"")+n[1]),"g");return e.replace(t,(function(e){return e===n[0]?n[1]:n[0]}))};if(n)for(var r=0;r<t.length;++r)e=a(e,t[r]);else for(var o=t.length;o--;)e=a(e,t[o]);return e}function k(){var e=function(e,n){n||(n=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null}("s");if(e)try{var n=function(e){var n=e.split("\x01"),t=n[0];if(n.length>1){var a,r=n[1],o=Object(x.a)(r);try{for(o.s();!(a=o.n()).done;){var i=a.value,c=t.split(i);t=c.join(c.pop())}}catch(l){o.e(l)}finally{o.f()}}return T(t,0)}(e),t=JSON.parse(n);if("1"!==t.version)return;return delete t.version,t}catch(a){return}}var D=function(e){var n="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname),t=function(e){for(var n=[],t=255;t>32;--t){var a=String.fromCharCode(t);"\\"==a||n.includes(a)||n.push(a)}for(var r=127;--r;)(r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||"-_.!~*'()".includes(String.fromCharCode(r)))&&n.push(String.fromCharCode(r));var o=function(e,n){for(var t=n.length,a="",r=function(e){return encodeURI(encodeURIComponent(e)).replace(/%../g,"i").length},o=function(e){var n=e.charCodeAt(0),t=e.charCodeAt(e.length-1);return n>=56320&&n<=57343||t>=55296&&t<=56319},i={},c=2;c<50;c++)for(var l=0;l<e.length-c;++l){var u=e.substr(l,c);if(!i[u]&&!o(u)){for(var s=1,f=e.indexOf(u,l+c);f>=0;++s)f=e.indexOf(u,f+c);s>1&&(i[u]=s)}}for(;;){for(;t--&&e.includes(n[t]););if(t<0)break;var d=n[t],h=void 0,p=0,m=r(d);for(var g in i){var v=i[g],b=(v-1)*r(g)-(v+1)*m;a.length||(b-=r("\x01")),b<=0?delete i[g]:b>p&&(h=g,p=b)}if(!h)break;e=e.split(h).join(d)+d+h,a=d+a;var E={};for(var O in i){for(var w=O.split(h).join(d),x=0,j=e.indexOf(w);j>=0;++x)j=e.indexOf(w,j+w.length);x>1&&(E[w]=x)}i=E}return{a:e,b:a}}(e=T(e=e.replace(new RegExp("\x01","g"))),n),i=o.a;return o.b.length&&(i+="\x01"+o.b),encodeURIComponent(i)}(JSON.stringify(Object(I.a)({},e,{version:"1"}))),a="".concat("s","=").concat(t);window.history.replaceState(e,"","".concat(n,"?").concat(a))};function R(){var e=function(){var e=localStorage.getItem("SAVED_STATE");if(e)try{var n=JSON.parse(e);if("1"!==n.version)return;return delete n.version,n}catch(t){return}}();return k()||e}var U=function(e){D(e),function(e){localStorage.setItem("SAVED_STATE",JSON.stringify(Object(I.a)({},e,{version:"1"})))}(e)},A=R(),_=A?A.options:{fancy:!0,trailingSlash:!0,rootDot:!0,useIcon:!1};var L={source:"\nEdit me to generate\n  a\n    nice\n      tree\n        diagram!\n        :)\n  Use indentation\n    to indicate\n      file\n      and\n      folder\n      nesting.\n    - You can even\n      - use\n        - markdown\n        - bullets!\n\n".trim()},N=R(),P=N?N.source:L;var M=Object(u.b)({options:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE_FANCY":return Object(I.a)({},e,{fancy:n.newValue});case"UPDATE_USE_ICON":return Object(I.a)({},e,{useIcon:n.newValue});case"UPDATE_TRAILING_SLASH":return Object(I.a)({},e,{trailingSlash:n.newValue});case"UPDATE_ROOT_DOT":return Object(I.a)({},e,{rootDot:n.newValue});default:return e}},source:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE_SOURCE":return Object(I.a)({},e,{source:n.source});default:return e}}}),H=Object(s.a)([function(e){return e.source.source},function(e){return e.options}],(function(e,n){return function e(n,t){var a=d()({},t,b),r=[E(n,a),n.children.map((function(n){return e(n,t)}))];return p()(r).filter((function(e){return null!=e})).join("\n")}(function(e){var n,t=S(e),a={name:".",children:[],indentCount:-1,parent:null},r=[a],o=Object(x.a)(t);try{for(o.s();!(n=o.n()).done;){for(var i=n.value;g()(r).indentCount>=i.indentCount;)r.pop();var c=g()(r);c.children.push(i),i.parent=c,r.push(i)}}catch(l){o.e(l)}finally{o.f()}return a}(e),{charset:n.fancy?"utf-8":"ascii",trailingDirSlash:n.trailingSlash,rootDot:n.rootDot,useIcon:n.useIcon})})),Y=t(81),V=(t(428),t(21)),F=t(73),W=t(74),B=t(76),J=t(78),$=t(219),z=t.n($),G=function(e){Object(J.a)(t,e);var n=Object(B.a)(t);function t(e){var a;Object(F.a)(this,t),(a=n.call(this,e)).state={deploymentStatus:""};var o=z()("2023-05-16T22:48:48Z"),i=o.format("Do [of] MMMM, YYYY \\a\\t HH:mm:ss ZZ"),c=o.fromNow(),l="2829827",u="https://github.com/mortenbroesby/tree-online/commit/".concat(l);return a.state.deploymentStatus=r.a.createElement("span",null,"Last deployed the ",i," (",c,") for commit"," ",r.a.createElement("a",{className:"hide-offline",href:u},l),r.a.createElement("b",{className:"hide-online"},l)),a}return Object(W.a)(t,[{key:"render",value:function(){return this.state.deploymentStatus}}]),t}(r.a.Component),Z=t(220),q=t.n(Z);function K(e){return{type:"UPDATE_SOURCE",source:e}}var Q=t(22);t(429);function X(){var e=Object(V.a)([""]);return X=function(){return e},e}var ee=function(e){Object(J.a)(t,e);var n=Object(B.a)(t);function t(e){var o;return Object(F.a)(this,t),(o=n.call(this,e)).editorRef=void 0,o.highlight=function(e){return r.a.createElement(r.a.Fragment,null,e)},o.editorRef=Object(a.createRef)(),o}return Object(W.a)(t,[{key:"componentDidMount",value:function(){if(this.editorRef.current){var e=this.editorRef.current.querySelector("textarea");e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))}}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.editorRef,className:"input p-2 d-flex rounded-sm ".concat(this.props.className)},r.a.createElement(ne,{value:this.props.source,onValueChange:this.props.updateSource,highlight:this.highlight}))}}]),t}(r.a.Component),ne=Object(Q.a)(q.a)(X()),te=Object(i.b)((function(e){return{source:e.source.source}}),(function(e){return Object(u.a)({updateSource:K},e)}))(ee),ae=t(9),re=t(150),oe=t.n(re),ie=t(440),ce=t(449),le=t(442),ue=t(445),se=t(446),fe=t(59),de=t(443),he=t(448),pe=t(444);function me(e){return{type:"UPDATE_FANCY",newValue:e}}function ge(e){return{type:"UPDATE_USE_ICON",newValue:e}}function ve(e){return{type:"UPDATE_TRAILING_SLASH",newValue:e}}function be(e){return{type:"UPDATE_ROOT_DOT",newValue:e}}var Ee=t(447);function Oe(){var e=Object(ie.a)(!1),n=Object(ae.a)(e,2),t=n[0],a=n[1],o=a.open,i=a.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{opened:t,onClose:i,withCloseButton:!1,centered:!0,size:"auto"},r.a.createElement(se.a,{align:"center"},r.a.createElement(fe.a,{weight:"bold"},"Tips and tricks"),r.a.createElement(Ee.a,{block:!0},"Use a hash/pund sign (#) to add a comment after a folder.\n\nExample:\nlib # Example\n\nBecomes:\n\u251c\u2500 lib/ # Example"),r.a.createElement("a",{href:"https://github.com/mortenbroesby/tree-online#what-is-this",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(pe.a,{variant:"subtle"},"Read more here")))),r.a.createElement(ue.a,{position:"center"},r.a.createElement(pe.a,{variant:"subtle",onClick:o},"Want to know more?")))}function we(){var e=Object(V.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"]);return we=function(){return e},e}function xe(){var e=Object(V.a)(["\n  padding: 12px;\n"]);return xe=function(){return e},e}function je(){var e=Object(V.a)(["\n  padding: 16px;\n  background-color: white;\n  min-width: 200px;\n  border-radius: 8px;\n"]);return je=function(){return e},e}var Ce="Copy to clipboard",ye=Q.a.div(je()),Se=Q.a.div(xe()),Ie=Q.a.div(we()),Te=Object(i.b)((function(e){return{tree:H(e),fancy:e.options.fancy,useIcon:e.options.useIcon,trailingSlash:e.options.trailingSlash,rootDot:e.options.rootDot}}),(function(e){return Object(u.a)({updateFancy:me,updateUseIcon:ge,updateTrailingSlash:ve,updateRootDot:be},e)}))((function(e){var n=Object(a.useState)(Ce),t=Object(ae.a)(n,2),o=t[0],i=t[1],c=Object(a.useState)("Share URL"),l=Object(ae.a)(c,2),u=l[0],s=l[1],f=Object(ie.a)(!1),d=Object(ae.a)(f,2),h=d[0],p=d[1],m=p.open,g=p.close,v=Object(a.useCallback)((function(){i("Copied to clipboard!"),setTimeout((function(){return i(Ce)}),1200)}),[]),b=Object(a.useCallback)((function(){s("URL copied!"),setTimeout((function(){return s("Share URL")}),1200)}),[]),E=Object(a.useCallback)((function(n){e.updateFancy(n.target.checked)}),[e.updateFancy]),O=Object(a.useCallback)((function(n){e.updateUseIcon(n.target.checked)}),[e.updateUseIcon]),w=Object(a.useCallback)((function(n){e.updateTrailingSlash(n.target.checked)}),[e.updateTrailingSlash]),x=Object(a.useCallback)((function(n){e.updateRootDot(n.target.checked)}),[e.updateRootDot]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{opened:h,onClose:g,withCloseButton:!1,centered:!0,size:"auto"},r.a.createElement(ye,null,r.a.createElement(ue.a,{align:"center",spacing:"xl"},r.a.createElement(se.a,{spacing:"sm",align:"center"},r.a.createElement(fe.a,{weight:"bold",underline:!0},"Formatting"),r.a.createElement(se.a,{spacing:"sm",align:"stretch"},r.a.createElement(de.a,{checked:e.fancy,onChange:E,label:"Use fancy format"}),r.a.createElement(de.a,{checked:e.rootDot,onChange:x,label:"Prefix root with dot"}),r.a.createElement(de.a,{checked:e.trailingSlash,onChange:w,label:"Use trailing slash"}),e.trailingSlash&&r.a.createElement(de.a,{checked:e.useIcon,onChange:O,label:"Use folder icons"}))),r.a.createElement(he.a,{orientation:"vertical",variant:"dashed"}),r.a.createElement(se.a,null,r.a.createElement(se.a,{spacing:"sm",role:"group","aria-label":"Copy and share buttons"},r.a.createElement(oe.a,{text:e.tree,onCopy:v},r.a.createElement(pe.a,null,o)),r.a.createElement(oe.a,{text:window.location.href,onCopy:b},r.a.createElement(pe.a,{variant:"light"},u))),r.a.createElement(Oe,null))))),r.a.createElement(Ie,null,r.a.createElement(Se,null,r.a.createElement(ce.a,{opened:h,onClick:m,"aria-label":h?"Close navigation":"Open navigation"}))))}));t(435);function ke(){var e=Object(V.a)(["\n  padding: 12px;\n  white-space: pre;\n\n  font-family: 'Fira code', 'Fira Mono', source-code-pro, Menlo, Monaco,\n    Consolas, 'Courier New', monospace;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n\n  font-size: 14px;\n"]);return ke=function(){return e},e}var De=function(e){Object(J.a)(t,e);var n=Object(B.a)(t);function t(){return Object(F.a)(this,t),n.apply(this,arguments)}return Object(W.a)(t,[{key:"render",value:function(){return r.a.createElement(Re,null,this.props.tree)}}]),t}(r.a.Component),Re=Q.a.div(ke()),Ue=Object(i.b)((function(e){return{tree:H(e)}}))(De),Ae=t(450);function _e(){var e=Object(V.a)(["\n  flex-grow: 1;\n"]);return _e=function(){return e},e}function Le(){var e=Object(V.a)(["\n  flex-grow: 1;\n"]);return Le=function(){return e},e}function Ne(){var e=Object(V.a)(["\n  flex: 1;\n  display: flex;\n  padding-left: 0;\n\n  @media (min-width: ","px) {\n    padding-left: 12px;\n    max-width: 50%;\n  }\n"]);return Ne=function(){return e},e}function Pe(){var e=Object(V.a)(["\n  flex: 1;\n  display: flex;\n\n  @media (min-width: ","px) {\n    max-width: 50%;\n  }\n"]);return Pe=function(){return e},e}function Me(){var e=Object(V.a)(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: ","px) {\n    flex-direction: row;\n  }\n"]);return Me=function(){return e},e}function He(){var e=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 2px;\n\n  @media (min-width: ","px) {\n    margin-top: 0;\n  }\n"]);return He=function(){return e},e}function Ye(){var e=Object(V.a)(["\n  margin-bottom: 2px;\n  padding-right: 0;\n  margin-right: unset;\n  color: #95a5a6 !important;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (min-width: ","px) {\n    margin-right: auto;\n  }\n"]);return Ye=function(){return e},e}function Ve(){var e=Object(V.a)(["\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n  flex-direction: column;\n\n  @media (min-width: ","px) {\n    flex-direction: row;\n    text-align: center;\n  }\n"]);return Ve=function(){return e},e}function Fe(){var e=Object(V.a)(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  margin-bottom: 4px;\n\n  @media (min-width: ","px) {\n    flex-direction: row;\n  }\n"]);return Fe=function(){return e},e}function We(){var e=Object(V.a)(["\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  margin-bottom: 2px;\n"]);return We=function(){return e},e}function Be(){var e=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  width: 100%;\n  min-height: 100vh;\n  padding: 10px;\n  overflow: hidden;\n"]);return Be=function(){return e},e}var Je=Q.a.div(Be()),$e=Q.a.div(We()),ze=Q.a.div(Fe(),900),Ge=Q.a.div(Ve(),900),Ze=Q.a.p(Ye(),900),qe=Q.a.a(He(),900),Ke=Q.a.div(Me(),900),Qe=Q.a.div(Pe(),900),Xe=Q.a.div(Ne(),900),en=Object(Q.a)(te)(Le()),nn=Object(Q.a)(Ue)(_e()),tn=Object(i.b)()((function(){return r.a.createElement(Je,null,r.a.createElement($e,null,r.a.createElement(ze,null,r.a.createElement(Ae.a,{size:"h3"},"tree-online"))),r.a.createElement(Ke,null,r.a.createElement(Qe,null,r.a.createElement(en,null)),r.a.createElement(Xe,null,r.a.createElement(nn,null))),r.a.createElement(Ge,null,r.a.createElement(Ze,null,r.a.createElement(G,null)),r.a.createElement(qe,{href:"https://github.com/mortenbroesby/tree-online"},"View the source on Github")),r.a.createElement(Te,null))})),an=function(){var e,n=Object(u.c)(M);return n.subscribe((function(){e!==(e=n.getState())&&U(e)})),n}();Object(o.render)(r.a.createElement(Y.a,{withGlobalStyles:!0,withNormalizeCSS:!0},r.a.createElement(i.a,{store:an},r.a.createElement(tn,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tree-online",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/tree-online","/service-worker.js");c?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(n,e)}))}}()}},[[225,1,2]]]);
//# sourceMappingURL=main.1839dd15.chunk.js.map