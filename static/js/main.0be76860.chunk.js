(this["webpackJsonptree-online"]=this["webpackJsonptree-online"]||[]).push([[0],{191:function(e,t,n){e.exports=n(406)},394:function(e,t,n){},395:function(e,t,n){},396:function(e,t,n){},404:function(e,t,n){},405:function(e,t,n){},406:function(e,t,n){"use strict";n.r(t);n(192),n(201);var a=n(1),r=n.n(a),o=n(86),i=n(34),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=n(40),u=n(186),f=n(187),m=n.n(f),h=n(188),d=n.n(h),p=n(70),g=n.n(p),v={ascii:{CHILD:"|-- ",LAST_CHILD:"`-- ",DIRECTORY:"|   ",EMPTY:"    "},"utf-8":{CHILD:"\u251c\u2500\u2500 ",LAST_CHILD:"\u2514\u2500\u2500 ",DIRECTORY:"\u2502   ",EMPTY:"    "}},b={charset:"utf-8",trailingDirSlash:!1,rootDot:!0},w=function(e,t){var n=v[t.charset];if(!e.parent)return t.rootDot?e.name:null;for(var a=[y(e)?n.LAST_CHILD:n.CHILD,E(e,t)],r=e.parent;r&&r.parent;)a.unshift(y(r)?n.EMPTY:n.DIRECTORY),r=r.parent;return a.join("").substring(t.rootDot?0:n.CHILD.length)},E=function(e,t){var n,a=[e.name],r=null!==(n=t.trailingDirSlash)&&void 0!==n&&n,o=e.children.length>0,i=!/\/\s*$/.test(e.name),c=r&&o&&i;return(a=a.map((function(e){return function(e){var t=e.value,n=e.addSlash,a=void 0!==n&&n,r=t.indexOf(" # ");if(-1===r)return a?"".concat(t,"/"):t;var o=t.substring(0,r),i=t.substring(r);return a?"".concat(o,"/").concat(i):"".concat(o).concat(i)}({value:e,addSlash:c})}))).join("")},y=function(e){return Boolean(e.parent&&g()(e.parent.children)===e)};var x=n(87),S=/^((\s*)(?:-\s)?)/,C=/^\s*$/,O=/[^\r\n]+/g,T=function(e){var t=e.match(O)||[];return(t=t.filter((function(e){return!C.test(e)}))).map((function(e){var t=S.exec(e);if(!t)throw new Error('Unable to execute leadingWhitespaceAndBulletRegex against string: "'.concat(e,'"'));var n=e.replace(t[1],"");return{name:n.replace(/(^|\s)(https?:\/\/[^\s]+)/g,"$1[Link]($2)"),children:[],indentCount:t[2].length,parent:null}}))};var N=n(37);function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],a=function(e,t){var n=new RegExp("".concat((t[2]?t[2]:"")+t[0],"|").concat((t[3]?t[3]:"")+t[1]),"g");return e.replace(n,(function(e){return e===t[0]?t[1]:t[0]}))};if(t)for(var r=0;r<n.length;++r)e=a(e,n[r]);else for(var o=n.length;o--;)e=a(e,n[o]);return e}function D(){var e=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("s");if(e)try{var t=function(e){var t=e.split("\x01"),n=t[0];if(t.length>1){var a,r=t[1],o=Object(x.a)(r);try{for(o.s();!(a=o.n()).done;){var i=a.value,c=n.split(i);n=c.join(c.pop())}}catch(l){o.e(l)}finally{o.f()}}return j(n,0)}(e),n=JSON.parse(t);if("1"!==n.version)return;return delete n.version,n}catch(a){return}}var R=function(e){var t="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname),n=function(e){for(var t=[],n=255;n>32;--n){var a=String.fromCharCode(n);"\\"==a||t.includes(a)||t.push(a)}for(var r=127;--r;)(r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||"-_.!~*'()".includes(String.fromCharCode(r)))&&t.push(String.fromCharCode(r));var o=function(e,t){for(var n=t.length,a="",r=function(e){return encodeURI(encodeURIComponent(e)).replace(/%../g,"i").length},o=function(e){var t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t>=56320&&t<=57343||n>=55296&&n<=56319},i={},c=2;c<50;c++)for(var l=0;l<e.length-c;++l){var s=e.substr(l,c);if(!i[s]&&!o(s)){for(var u=1,f=e.indexOf(s,l+c);f>=0;++u)f=e.indexOf(s,f+c);u>1&&(i[s]=u)}}for(;;){for(;n--&&e.includes(t[n]););if(n<0)break;var m=t[n],h=void 0,d=0,p=r(m);for(var g in i){var v=i[g],b=(v-1)*r(g)-(v+1)*p;a.length||(b-=r("\x01")),b<=0?delete i[g]:b>d&&(h=g,d=b)}if(!h)break;e=e.split(h).join(m)+m+h,a=m+a;var w={};for(var E in i){for(var y=E.split(h).join(m),x=0,S=e.indexOf(y);S>=0;++x)S=e.indexOf(y,S+y.length);x>1&&(w[y]=x)}i=w}return{a:e,b:a}}(e=j(e=e.replace(new RegExp("\x01","g"))),t),i=o.a;return o.b.length&&(i+="\x01"+o.b),encodeURIComponent(i)}(JSON.stringify(Object(N.a)({},e,{version:"1"}))),a="".concat("s","=").concat(n);window.history.replaceState(e,"","".concat(t,"?").concat(a))};function k(){var e=function(){var e=localStorage.getItem("SAVED_STATE");if(e)try{var t=JSON.parse(e);if("1"!==t.version)return;return delete t.version,t}catch(n){return}}();return D()||e}var A=function(e){R(e),function(e){localStorage.setItem("SAVED_STATE",JSON.stringify(Object(N.a)({},e,{version:"1"})))}(e)},I=k(),_=I?I.options:{fancy:!0,trailingSlash:!0,rootDot:!0};var L={source:"\nEdit me to generate\n  a\n    nice\n      tree\n        diagram!\n        :)\n  Use indentation\n    to indicate\n      file\n      and\n      folder\n      nesting.\n    - You can even\n      - use\n        - markdown\n        - bullets!\n\n".trim()},U=k(),P=U?U.source:L;var H=Object(s.b)({options:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FANCY":return Object(N.a)({},e,{fancy:t.newValue});case"UPDATE_TRAILING_SLASH":return Object(N.a)({},e,{trailingSlash:t.newValue});case"UPDATE_ROOT_DOT":return Object(N.a)({},e,{rootDot:t.newValue});default:return e}},source:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SOURCE":return Object(N.a)({},e,{source:t.source});default:return e}}}),B=Object(u.a)([function(e){return e.source.source},function(e){return e.options}],(function(e,t){return function e(t,n){var a=m()({},n,b),r=[w(t,a),t.children.map((function(t){return e(t,n)}))];return d()(r).filter((function(e){return null!=e})).join("\n")}(function(e){var t,n=T(e),a={name:".",children:[],indentCount:-1,parent:null},r=[a],o=Object(x.a)(n);try{for(o.s();!(t=o.n()).done;){for(var i=t.value;g()(r).indentCount>=i.indentCount;)r.pop();var c=g()(r);c.children.push(i),i.parent=c,r.push(i)}}catch(l){o.e(l)}finally{o.f()}return a}(e),{charset:t.fancy?"utf-8":"ascii",trailingDirSlash:t.trailingSlash,rootDot:t.rootDot})})),M=(n(393),n(394),n(32)),Y=n(33),V=n(35),W=n(36),F=(n(395),n(189)),J=n.n(F),$=function(e){Object(W.a)(n,e);var t=Object(V.a)(n);function n(e){var a;Object(M.a)(this,n),(a=t.call(this,e)).state={deploymentStatus:""};var o=J()("%%%GITHUB_CI_TIMESTAMP%%%"),i=o.format("Do [of] MMMM, YYYY \\a\\t HH:mm:ss ZZ"),c=o.fromNow(),l="db6fd3f",s="https://github.com/mortenbroesby/tree-online/commit/".concat(l);return a.state.deploymentStatus=r.a.createElement("span",null,"Last deployed the ",i," (",c,") for commit"," ",r.a.createElement("a",{className:"hide-offline",href:s},l),r.a.createElement("b",{className:"hide-online"},l)),a}return Object(Y.a)(n,[{key:"render",value:function(){return this.state.deploymentStatus}}]),n}(r.a.Component),G=n(190),Z=n.n(G);function q(e){return{type:"UPDATE_SOURCE",source:e}}n(396);var z=function(e){Object(W.a)(n,e);var t=Object(V.a)(n);function n(e){var o;return Object(M.a)(this,n),(o=t.call(this,e)).editorRef=void 0,o.highlight=function(e){return r.a.createElement(r.a.Fragment,null,e)},o.editorRef=Object(a.createRef)(),o}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){if(this.editorRef.current){var e=this.editorRef.current.querySelector("textarea");e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))}}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.editorRef,className:"input p-2 d-flex rounded-sm ".concat(this.props.className)},r.a.createElement(Z.a,{className:"flex-grow-1",value:this.props.source,onValueChange:this.props.updateSource,highlight:this.highlight}))}}]),n}(r.a.Component),K=Object(i.b)((function(e){return{source:e.source.source}}),(function(e){return Object(s.a)({updateSource:q},e)}))(z),Q=n(120),X=n.n(Q),ee=n(88),te=n.n(ee);function ne(e){return{type:"UPDATE_FANCY",newValue:e}}function ae(e){return{type:"UPDATE_TRAILING_SLASH",newValue:e}}function re(e){return{type:"UPDATE_ROOT_DOT",newValue:e}}n(404);var oe=function(e){Object(W.a)(n,e);var t=Object(V.a)(n);function n(){var e;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={copyButtonText:"Copy",shareButtonText:"Share"},e.onCopy=function(){e.setState({copyButtonText:"Copied!"}),setTimeout((function(){e.setState({copyButtonText:"Copy"})}),1200)},e.onShare=function(){e.setState({shareButtonText:"URL copied!"}),setTimeout((function(){e.setState({shareButtonText:"Share"})}),1200)},e.onFancyChanged=function(t){e.props.updateFancy(t.target.checked)},e.onTrailingSlashChanged=function(t){e.props.updateTrailingSlash(t.target.checked)},e.onRootDotChanged=function(t){e.props.updateRootDot(t.target.checked)},e}return Object(Y.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu align-items-center ".concat(this.props.className," flex-column flex-sm-row")},r.a.createElement("div",{className:"btn-group mr-0 mr-sm-4 align-self-stretch align-self-md-center",role:"group","aria-label":"Copy and share buttons"},r.a.createElement(X.a,{text:this.props.tree,onCopy:this.onCopy},r.a.createElement("button",{className:"btn btn-success copy-button py-3 py-sm-0"},r.a.createElement("b",null,this.state.copyButtonText))),r.a.createElement(X.a,{text:window.location.href,onCopy:this.onShare},r.a.createElement("button",{className:"btn btn-secondary share-button"},this.state.shareButtonText))),r.a.createElement("div",{className:"d-flex align-items-center flex-wrap mt-4 mt-sm-0"},r.a.createElement("label",{className:"d-flex align-items-center my-1 mr-3"},r.a.createElement(te.a,{className:"mr-1 options-toggle",defaultChecked:this.props.fancy,onChange:this.onFancyChanged,icons:!1}),r.a.createElement("span",{className:"no-wrap"},"Fancy")),r.a.createElement("label",{className:"d-flex align-items-center my-1 mr-3"},r.a.createElement(te.a,{className:"mr-1 options-toggle",defaultChecked:this.props.trailingSlash,onChange:this.onTrailingSlashChanged,icons:!1}),r.a.createElement("span",{className:"no-wrap"},"Trailing /")),r.a.createElement("label",{className:"d-flex align-items-center my-1"},r.a.createElement(te.a,{className:"mr-1 options-toggle",defaultChecked:this.props.rootDot,onChange:this.onRootDotChanged,icons:!1}),r.a.createElement("span",{className:"no-wrap"},"Root ."))))}}]),n}(r.a.Component),ie=Object(i.b)((function(e){return{tree:B(e),fancy:e.options.fancy,trailingSlash:e.options.trailingSlash,rootDot:e.options.rootDot}}),(function(e){return Object(s.a)({updateFancy:ne,updateTrailingSlash:ae,updateRootDot:re},e)}))(oe),ce=(n(405),function(e){Object(W.a)(n,e);var t=Object(V.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(Y.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"tree p-2 rounded-sm ".concat(this.props.className)},this.props.tree)}}]),n}(r.a.Component)),le=Object(i.b)((function(e){return{tree:B(e)}}))(ce),se=function(e){Object(W.a)(n,e);var t=Object(V.a)(n);function n(){var e;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={networkStatus:window.navigator.onLine?"online":"offline"},e}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("offline",(function(){return e.setState({networkStatus:"offline"})})),window.addEventListener("online",(function(){return e.setState({networkStatus:"online"})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app px-3 pt-2 d-flex w-100 min-vh-100 position-absolute flex-column ".concat(this.state.networkStatus)},r.a.createElement("div",{className:"flex-grow-0 flex-shrink-0 d-flex align-items-center mb-2"},r.a.createElement("div",{className:"flex-even d-flex align-items-center flex-column flex-sm-row"},r.a.createElement("h1",{className:"mr-4 mb-0"},"tree.nathanfriend.io"),r.a.createElement("a",{className:"my-2 my-sm-0 hide-offline",href:"https://gitlab.com/nfriend/tree-online#what-is-this",target:"_blank",rel:"noopener noreferrer"},"What is this?")),r.a.createElement(ie,{className:"flex-even pl-4 d-none d-lg-flex"})),r.a.createElement("div",{className:"flex-grow-1 d-flex flex-column flex-lg-row"},r.a.createElement("div",{className:"flex-even d-flex mr-0 mr-lg-2"},r.a.createElement(K,{className:"flex-grow-1"})),r.a.createElement("div",{className:"flex-even"},r.a.createElement(le,{className:"flex-grow-1"})),r.a.createElement(ie,{className:"d-flex d-lg-none pt-2 pb-5"})),r.a.createElement("div",{className:"flex-grow-0 flex-shrink-0 d-flex align-items-center align-items-sm-start mt-2 flex-column flex-md-row"},r.a.createElement("p",{className:"text-muted text-center text-sm-left mb-2 pr-0 pr-sm-4 mr-auto"},r.a.createElement($,null)),r.a.createElement("div",{className:"d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-2 mt-md-0"},r.a.createElement("a",{className:"pr-0 pr-sm-4 view-source-on-github-link no-wrap hide-offline",href:"https://github.com/mortenbroesby/tree-online"},"View the source on Github"))))}}]),n}(r.a.Component),ue=Object(i.b)()(se),fe=function(){var e,t=Object(s.c)(H);return t.subscribe((function(){e!==(e=t.getState())&&A(e)})),t}();Object(o.render)(r.a.createElement(i.a,{store:fe},r.a.createElement(ue,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tree-online",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/tree-online","/service-worker.js");c?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()}},[[191,1,2]]]);
//# sourceMappingURL=main.0be76860.chunk.js.map