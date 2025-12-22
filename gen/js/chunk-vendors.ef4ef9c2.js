"use strict";(self["webpackChunkfreedeliar_app"]=self["webpackChunkfreedeliar_app"]||[]).push([[504],{34:(t,e,n)=>{var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},81:(t,e,n)=>{var r=n(9565),i=n(9306),o=n(8551),s=n(6823),a=n(851),c=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return o(r(n,t));throw new c(s(t)+" is not iterable")}},113:(t,e,n)=>{var r=n(6518),i=n(9213).find,o=n(6469),s="find",a=!0;s in[]&&Array(1)[s](function(){a=!1}),r({target:"Array",proto:!0,forced:a},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},116:(t,e,n)=>{var r=n(6518),i=n(9565),o=n(2652),s=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("find",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{find:function(t){a(this);try{s(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return o(e,function(e,r){if(t(e,n++))return r(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})},173:(t,e,n)=>{function r(t,e){for(var n in e)t[n]=e[n];return t}n.d(e,{Ay:()=>Ee});var i=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,o).replace(s,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function u(t,e,n){void 0===e&&(e={});var r,i=n||h;try{r=i(t||"")}catch(a){r={}}for(var o in e){var s=e[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]}),e):e}function f(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach(function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))}),r.join("&")}return a(e)+"="+a(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=g(o)}catch(a){}var s={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:y(e,i),matched:t?m(t):[]};return n&&(s.redirectedFrom=y(n,i)),Object.freeze(s)}function g(t){if(Array.isArray(t))return t.map(g);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=g(t[n]);return e}return t}var v=p(null,{path:"/"});function m(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var o=e||f;return(n||"/")+o(r)+i}function w(t,e,n){return e===v?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(n||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every(function(n,i){var o=t[n],s=r[i];if(s!==n)return!1;var a=e[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?b(o,a):String(o)===String(a)})}function _(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&E(t.query,e.query)}function E(t,e){for(var n in e)if(!(n in t))return!1;return!0}function I(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var T={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,o=e.parent,s=e.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,f=!1;while(o&&o._routerRoot!==o){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(s.routerViewDepth=h,f){var p=l[c],g=p&&p.component;return g?(p.configProps&&S(g,s,p.route,p.configProps),a(g,s,i)):a()}var v=u.matched[h],m=v&&v.components[c];if(!v||!m)return l[c]=null,a();l[c]={component:m},s.registerRouteInstance=function(t,e){var n=v.instances[c];(e&&n!==t||!e&&n===t)&&(v.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){v.instances[c]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==v.instances[c]&&(v.instances[c]=t.componentInstance),I(u)};var y=v.props&&v.props[c];return y&&(r(l[c],{route:u,configProps:y}),S(m,s,u,y)),a(m,s,i)}};function S(t,e,n,i){var o=e.props=A(n,i);if(o){o=e.props=r({},o);var s=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(s[a]=o[a],delete o[a])}}function A(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function C(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function k(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function x(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var O=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},R=Y,N=F,D=U,P=$,L=Q,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function F(t,e){var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/";while(null!=(n=M.exec(t))){var c=n[0],u=n[1],l=n.index;if(s+=t.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=t[o],f=n[2],d=n[3],p=n[4],g=n[5],v=n[6],m=n[7];s&&(r.push(s),s="");var y=null!=f&&null!=h&&h!==f,w="+"===v||"*"===v,b="?"===v||"*"===v,_=n[2]||a,E=p||g;r.push({name:d||i++,prefix:f||"",delimiter:_,optional:b,repeat:w,partial:y,asterisk:!!m,pattern:E?q(E):m?".*":"[^"+B(_)+"]+?"})}}return o<t.length&&(s+=t.substr(o)),s&&r.push(s),r}function U(t,e){return $(F(t,e),e)}function j(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function V(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function $(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",K(e)));return function(e,r){for(var i="",o=e||{},s=r||{},a=s.pretty?j:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(O(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(l=a(h[f]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===f?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?V(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function K(t){return t&&t.sensitive?"":"i"}function H(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(t,e)}function G(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(Y(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",K(n));return z(o,e)}function W(t,e,n){return Q(F(t,n),e,n)}function Q(t,e,n){O(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<t.length;s++){var a=t[s];if("string"===typeof a)o+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=B(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",z(new RegExp("^"+o,K(n)),e)}function Y(t,e,n){return O(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?H(t,e):O(t)?G(t,e,n):W(t,e,n)}R.parse=N,R.compile=D,R.tokensToFunction=P,R.tokensToRegExp=L;var J=Object.create(null);function X(t,e,n){e=e||{};try{var r=J[t]||(J[t]=R.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Z(t,e,n,i){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){o=r({},t);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&e){o=r({},o),o._normalized=!0;var a=r(r({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=X(c,a,"path "+e.path)}else 0;return o}var l=k(o.path||""),h=e&&e.path||"/",f=l.path?C(l.path,h,n||o.append):h,d=u(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:f,query:d,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,f=null==l?"router-link-active":l,d=null==h?"router-link-exact-active":h,g=null==this.activeClass?f:this.activeClass,v=null==this.exactActiveClass?d:this.exactActiveClass,m=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[v]=w(i,m,this.exactPath),u[g]=this.exact||this.exactPath?u[v]:_(i,m);var y=u[v]?this.ariaCurrentValue:null,b=function(t){ot(t)&&(e.replace?n.replace(s,rt):n.push(s,rt))},E={click:ot};Array.isArray(this.event)?this.event.forEach(function(t){E[t]=b}):E[this.event]=b;var I={class:u},T=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[g],isExactActive:u[v]});if(T){if(1===T.length)return T[0];if(T.length>1||!T.length)return 0===T.length?t():t("span",{},T)}if("a"===this.tag)I.on=E,I.attrs={href:c,"aria-current":y};else{var S=st(this.$slots.default);if(S){S.isStatic=!1;var A=S.data=r({},S.data);for(var C in A.on=A.on||{},A.on){var k=A.on[C];C in E&&(A.on[C]=Array.isArray(k)?k:[k])}for(var x in E)x in A.on?A.on[x].push(E[x]):A.on[x]=b;var O=S.data.attrs=r({},S.data.attrs);O.href=c,O["aria-current"]=y}else I.on=E}return t(this.tag,I,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",T),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ct="undefined"!==typeof window;function ut(t,e,n,r,i){var o=e||[],s=n||Object.create(null),a=r||Object.create(null);t.forEach(function(t){lt(o,s,a,t,i)});for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function lt(t,e,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=ft(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:ht(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach(function(r){var i=o?x(o+"/"+r.path):void 0;lt(t,e,n,r,l,i)}),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],f=0;f<h.length;++f){var d=h[f];0;var p={path:d,children:r.children};lt(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function ht(t,e){var n=R(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:x(e.path+"/"+t)}function dt(t,e){var n=ut(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(t){ut(t,r,i,o)}function a(t,e){var n="object"!==typeof t?o[t]:void 0;ut([e||t],r,i,o,n),n&&n.alias.length&&ut(n.alias.map(function(t){return{path:t,children:[e]}}),r,i,o,n)}function c(){return r.map(function(t){return i[t]})}function u(t,n,s){var a=Z(t,n,!1,e),c=a.name;if(c){var u=o[c];if(!u)return f(null,a);var l=u.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=X(u.path,a.params,'named route "'+c+'"'),f(u,a,s)}if(a.path){a.params={};for(var d=0;d<r.length;d++){var p=r[d],g=i[p];if(pt(g.regex,a.path,a.params))return f(g,a,s)}}return f(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return f(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,d=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,d=s.hasOwnProperty("params")?s.params:d,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:d},void 0,n)}if(c){var g=gt(c,t),v=X(g,d,'redirect route with path "'+g+'"');return u({_normalized:!0,path:v,query:l,hash:h},void 0,n)}return f(null,n)}function h(t,e,n){var r=X(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return e.params=i.params,f(s,e)}return f(null,e)}function f(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=t.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function gt(t,e){return C(t,e.parent?e.parent.path:"/",!0)}var vt=ct&&window.performance&&window.performance.now?window.performance:Date;function mt(){return vt.now().toFixed(3)}var yt=mt();function wt(){return yt}function bt(t){return yt=t}var _t=Object.create(null);function Et(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=wt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",St),function(){window.removeEventListener("popstate",St)}}function It(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick(function(){var o=At(),s=i.call(t,e,n,r?o:null);s&&("function"===typeof s.then?s.then(function(t){Dt(t,o)}).catch(function(t){0}):Dt(s,o))})}}function Tt(){var t=wt();t&&(_t[t]={x:window.pageXOffset,y:window.pageYOffset})}function St(t){Tt(),t.state&&t.state.key&&bt(t.state.key)}function At(){var t=wt();if(t)return _t[t]}function Ct(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function kt(t){return Rt(t.x)||Rt(t.y)}function xt(t){return{x:Rt(t.x)?t.x:window.pageXOffset,y:Rt(t.y)?t.y:window.pageYOffset}}function Ot(t){return{x:Rt(t.x)?t.x:0,y:Rt(t.y)?t.y:0}}function Rt(t){return"number"===typeof t}var Nt=/^#\d/;function Dt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Nt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=Ot(i),e=Ct(r,i)}else kt(t)&&(e=xt(t))}else n&&kt(t)&&(e=xt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Pt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Lt(t,e){Tt();var n=window.history;try{if(e){var i=r({},n.state);i.key=wt(),n.replaceState(i,"",t)}else n.pushState({key:bt(mt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function Mt(t){Lt(t,!0)}var Ft={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ut(t,e){return Bt(t,e,Ft.redirected,'Redirected when going from "'+t.fullPath+'" to "'+zt(e)+'" via a navigation guard.')}function jt(t,e){var n=Bt(t,e,Ft.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Vt(t,e){return Bt(t,e,Ft.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function $t(t,e){return Bt(t,e,Ft.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Bt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var qt=["params","query","hash"];function zt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return qt.forEach(function(n){n in t&&(e[n]=t[n])}),JSON.stringify(e,null,2)}function Kt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Ht(t,e){return Kt(t)&&t._isRouter&&(null==e||t.type===e)}function Gt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],function(){r(i+1)}):r(i+1)};r(0)}function Wt(t){return function(e,n,r){var i=!1,o=0,s=null;Qt(t,function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,o++;var c,u=Zt(function(e){Xt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,o--,o<=0&&r()}),l=Zt(function(t){var e="Failed to resolve async component "+a+": "+t;s||(s=Kt(t)?t:new Error(e),r(s))});try{c=t(u,l)}catch(f){l(f)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}}),i||r()}}function Qt(t,e){return Yt(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function Yt(t){return Array.prototype.concat.apply([],t)}var Jt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Xt(t){return t.__esModule||Jt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Qt(t,function(t,r,i,o){var s=ie(t,e);if(s)return Array.isArray(s)?s.map(function(t){return n(t,r,i,o)}):n(s,r,i,o)});return Yt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function oe(t){return re(t,"beforeRouteLeave",ae,!0)}function se(t){return re(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return re(t,"beforeRouteEnter",function(t,e,n,r){return ue(t,n,r)})}function ue(t,e,n){return function(r,i,o){return t(r,i,function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)})}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(s){throw this.errorCbs.forEach(function(t){t(s)}),s}var o=this.current;this.confirmTransition(r,function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach(function(t){t&&t(r,o)}),i.ready||(i.ready=!0,i.readyCbs.forEach(function(t){t(r)}))},function(t){n&&n(t),t&&!i.ready&&(Ht(t,Ft.redirected)&&o===v||(i.ready=!0,i.readyErrorCbs.forEach(function(e){e(t)})))})},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var o=function(t){!Ht(t)&&Kt(t)&&(r.errorCbs.length?r.errorCbs.forEach(function(e){e(t)}):console.error(t)),n&&n(t)},s=t.matched.length-1,a=i.matched.length-1;if(w(t,i)&&s===a&&t.matched[s]===i.matched[a])return this.ensureURL(),t.hash&&It(this.router,i,t,!1),o(jt(i,t));var c=ne(this.current.matched,t.matched),u=c.updated,l=c.deactivated,h=c.activated,f=[].concat(oe(l),this.router.beforeHooks,se(u),h.map(function(t){return t.beforeEnter}),Wt(h)),d=function(e,n){if(r.pending!==t)return o(Vt(i,t));try{e(t,i,function(e){!1===e?(r.ensureURL(!0),o($t(i,t))):Kt(e)?(r.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o(Ut(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)})}catch(s){o(s)}};Gt(f,d,function(){var n=ce(h),s=n.concat(r.router.resolveHooks);Gt(s,d,function(){if(r.pending!==t)return o(Vt(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick(function(){I(t)})})})},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach(function(t){t()}),this.listeners=[],this.current=v,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(Et());var i=function(){var n=t.current,i=he(t.base);t.current===v&&i===t._startLocation||t.transitionTo(i,function(t){r&&It(e,t,n,!0)})};window.addEventListener("popstate",i),this.listeners.push(function(){window.removeEventListener("popstate",i)})}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,function(t){Lt(x(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,function(t){Mt(x(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)},n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?Lt(e):Mt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(x(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&de(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(Et());var i=function(){var e=t.current;pe()&&t.transitionTo(ge(),function(n){r&&It(t.router,n,e,!0),Pt||ye(n.fullPath)})},o=Pt?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push(function(){window.removeEventListener(o,i)})}},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,function(t){me(t.fullPath),It(r.router,t,o,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,function(t){ye(t.fullPath),It(r.router,t,o,!1),e&&e(t)},n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ge()!==e&&(t?me(e):ye(e))},e.prototype.getCurrentLocation=function(){return ge()},e}(te);function de(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}function pe(){var t=ge();return"/"===t.charAt(0)||(ye("/"+t),!1)}function ge(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ve(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function me(t){Pt?Lt(ve(t)):window.location.hash=t}function ye(t){Pt?Mt(ve(t)):window.location.replace(ve(t))}var we=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)},n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach(function(e){e&&e(r,t)})},function(t){Ht(t,Ft.duplicated)&&(e.index=n)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),be=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=dt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Pt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},_e={currentRoute:{configurable:!0}};be.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},_e.currentRoute.get=function(){return this.history&&this.history.current},be.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()}),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof fe){var r=function(t){var r=n.current,i=e.options.scrollBehavior,o=Pt&&i;o&&"fullPath"in t&&It(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},be.prototype.beforeEach=function(t){return Ie(this.beforeHooks,t)},be.prototype.beforeResolve=function(t){return Ie(this.resolveHooks,t)},be.prototype.afterEach=function(t){return Ie(this.afterHooks,t)},be.prototype.onReady=function(t,e){this.history.onReady(t,e)},be.prototype.onError=function(t){this.history.onError(t)},be.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise(function(e,n){r.history.push(t,e,n)});this.history.push(t,e,n)},be.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise(function(e,n){r.history.replace(t,e,n)});this.history.replace(t,e,n)},be.prototype.go=function(t){this.history.go(t)},be.prototype.back=function(){this.go(-1)},be.prototype.forward=function(){this.go(1)},be.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},be.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Z(t,e,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Te(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},be.prototype.getRoutes=function(){return this.matcher.getRoutes()},be.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},be.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(be.prototype,_e);var Ee=be;function Ie(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Te(t,e,n){var r="hash"===n?"#"+e:e;return t?x(t+"/"+r):r}be.install=at,be.version="3.6.5",be.isNavigationFailure=Ht,be.NavigationFailureType=Ft,be.START_LOCATION=v,ct&&window.Vue&&window.Vue.use(be)},223:(t,e,n)=>{n.d(e,{Wp:()=>r.Wp});var r=n(9928),i="firebase",o="9.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,o,"app")},235:(t,e,n)=>{var r=n(9213).forEach,i=n(4598),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},280:(t,e,n)=>{var r=n(6518),i=n(7751),o=n(6395),s=n(550),a=n(916).CONSTRUCTOR,c=n(3438),u=i("Promise"),l=o&&!a;r({target:"Promise",stat:!0,forced:o||a},{resolve:function(t){return c(l&&this===u?s:this,t)}})},283:(t,e,n)=>{var r=n(9504),i=n(9039),o=n(4901),s=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),v=r("".replace),m=r([].join),y=a&&!i(function(){return 8!==p(function(){},"length",{value:8}).length}),w=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+v(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&s(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return s(r,"source")||(r.source=m(w,"string"==typeof e?e:"")),t};Function.prototype.toString=b(function(){return o(this)&&f(this).source||u(this)},"toString")},287:(t,e,n)=>{var r=n(6518),i=n(2967);r({target:"Object",stat:!0},{setPrototypeOf:i})},298:(t,e,n)=>{var r=n(4576),i=n(5397),o=n(8480).f,s=n(7680),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return s(a)}};t.exports.f=function(t){return a&&"Window"===r(t)?c(t):o(i(t))}},350:(t,e,n)=>{var r=n(3724),i=n(9297),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},373:(t,e,n)=>{var r=n(2195),i=n(7476),o=n(9039),s=n(9306),a=n(4488),c=n(4644),u=n(3709),l=n(3763),h=n(9519),f=n(3607),d=c.aTypedArray,p=c.exportTypedArrayMethod,g=r.Uint16Array,v=g&&i(g.prototype.sort),m=!!v&&!(o(function(){v(new g(2),null)})&&o(function(){v(new g(2),{})})),y=!!v&&!o(function(){if(h)return h<74;if(u)return u<67;if(l)return!0;if(f)return f<602;var t,e,n=new g(516),r=Array(516);for(t=0;t<516;t++)e=t%4,n[t]=515-t,r[t]=t-2*e+3;for(v(n,function(t,e){return(t/4|0)-(e/4|0)}),t=0;t<516;t++)if(n[t]!==r[t])return!0}),w=function(t){return function(e,n){return void 0!==t?+t(e,n)||0:n!==n?-1:e!==e?1:0===e&&0===n?1/e>0&&1/n<0?1:-1:e>n}};p("sort",function(t){return void 0!==t&&s(t),y?v(this,t):a(d(this),w(t))},!y||m)},397:(t,e,n)=>{var r=n(7751);t.exports=r("document","documentElement")},421:t=>{t.exports={}},436:(t,e,n)=>{var r,i,o,s,a=n(6518),c=n(6395),u=n(6193),l=n(2195),h=n(9167),f=n(9565),d=n(6840),p=n(2967),g=n(687),v=n(7633),m=n(9306),y=n(4901),w=n(34),b=n(679),_=n(2293),E=n(9225).set,I=n(1955),T=n(3138),S=n(1103),A=n(8265),C=n(1181),k=n(550),x=n(916),O=n(6043),R="Promise",N=x.CONSTRUCTOR,D=x.REJECTION_EVENT,P=x.SUBCLASSING,L=C.getterFor(R),M=C.set,F=k&&k.prototype,U=k,j=F,V=l.TypeError,$=l.document,B=l.process,q=O.f,z=q,K=!!($&&$.createEvent&&l.dispatchEvent),H="unhandledrejection",G="rejectionhandled",W=0,Q=1,Y=2,J=1,X=2,Z=function(t){var e;return!(!w(t)||!y(e=t.then))&&e},tt=function(t,e){var n,r,i,o=e.value,s=e.state===Q,a=s?t.ok:t.fail,c=t.resolve,u=t.reject,l=t.domain;try{a?(s||(e.rejection===X&&ot(e),e.rejection=J),!0===a?n=o:(l&&l.enter(),n=a(o),l&&(l.exit(),i=!0)),n===t.promise?u(new V("Promise-chain cycle")):(r=Z(n))?f(r,n,c,u):c(n)):u(o)}catch(h){l&&!i&&l.exit(),u(h)}},et=function(t,e){t.notified||(t.notified=!0,I(function(){var n,r=t.reactions;while(n=r.get())tt(n,t);t.notified=!1,e&&!t.rejection&&rt(t)}))},nt=function(t,e,n){var r,i;K?(r=$.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),l.dispatchEvent(r)):r={promise:e,reason:n},!D&&(i=l["on"+t])?i(r):t===H&&T("Unhandled promise rejection",n)},rt=function(t){f(E,l,function(){var e,n=t.facade,r=t.value,i=it(t);if(i&&(e=S(function(){u?B.emit("unhandledRejection",r,n):nt(H,n,r)}),t.rejection=u||it(t)?X:J,e.error))throw e.value})},it=function(t){return t.rejection!==J&&!t.parent},ot=function(t){f(E,l,function(){var e=t.facade;u?B.emit("rejectionHandled",e):nt(G,e,t.value)})},st=function(t,e,n){return function(r){t(e,r,n)}},at=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=Y,et(t,!0))},ct=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw new V("Promise can't be resolved itself");var r=Z(e);r?I(function(){var n={done:!1};try{f(r,e,st(ct,n,t),st(at,n,t))}catch(i){at(n,i,t)}}):(t.value=e,t.state=Q,et(t,!1))}catch(i){at({done:!1},i,t)}}};if(N&&(U=function(t){b(this,j),m(t),f(r,this);var e=L(this);try{t(st(ct,e),st(at,e))}catch(n){at(e,n)}},j=U.prototype,r=function(t){M(this,{type:R,done:!1,notified:!1,parent:!1,reactions:new A,rejection:!1,state:W,value:null})},r.prototype=d(j,"then",function(t,e){var n=L(this),r=q(_(this,U));return n.parent=!0,r.ok=!y(t)||t,r.fail=y(e)&&e,r.domain=u?B.domain:void 0,n.state===W?n.reactions.add(r):I(function(){tt(r,n)}),r.promise}),i=function(){var t=new r,e=L(t);this.promise=t,this.resolve=st(ct,e),this.reject=st(at,e)},O.f=q=function(t){return t===U||t===o?new i(t):z(t)},!c&&y(k)&&F!==Object.prototype)){s=F.then,P||d(F,"then",function(t,e){var n=this;return new U(function(t,e){f(s,n,t,e)}).then(t,e)},{unsafe:!0});try{delete F.constructor}catch(ut){}p&&p(F,j)}a({global:!0,constructor:!0,wrap:!0,forced:N},{Promise:U}),o=h.Promise,g(U,R,!1,!0),v(R)},456:(t,e,n)=>{var r=n(6518),i=n(2195),o=n(9504),s=n(4154),a=n(5169),c=o(1.1.toString),u=i.Uint8Array,l=!u||!u.prototype.toHex||!function(){try{var t=new u([255,255,255,255,255,255,255,255]);return"ffffffffffffffff"===t.toHex()}catch(e){return!1}}();u&&r({target:"Uint8Array",proto:!0,forced:l},{toHex:function(){s(this),a(this.buffer);for(var t="",e=0,n=this.length;e<n;e++){var r=c(this[e],16);t+=1===r.length?"0"+r:r}return t}})},511:(t,e,n)=>{var r=n(9167),i=n(9297),o=n(1951),s=n(4913).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},533:(t,e,n)=>{var r=n(9504),i=n(8014),o=n(655),s=n(2333),a=n(7750),c=r(s),u=r("".slice),l=Math.ceil,h=function(t){return function(e,n,r){var s,h,f=o(a(e)),d=i(n),p=f.length,g=void 0===r?" ":o(r);return d<=p||""===g?f:(s=d-p,h=c(g,l(s/g.length)),h.length>s&&(h=u(h,0,s)),t?f+h:h+f)}};t.exports={start:h(!1),end:h(!0)}},537:(t,e,n)=>{var r=n(550),i=n(4428),o=n(916).CONSTRUCTOR;t.exports=o||!i(function(t){r.all(t).then(void 0,function(){})})},550:(t,e,n)=>{var r=n(2195);t.exports=r.Promise},566:(t,e,n)=>{var r=n(9504),i=n(9306),o=n(34),s=n(9297),a=n(7680),c=n(616),u=Function,l=r([].concat),h=r([].join),f={},d=function(t,e,n){if(!s(f,e)){for(var r=[],i=0;i<e;i++)r[i]="a["+i+"]";f[e]=u("C,a","return new C("+h(r,",")+")")}return f[e](t,n)};t.exports=c?u.bind:function(t){var e=i(this),n=e.prototype,r=a(arguments,1),s=function(){var n=l(r,a(arguments));return this instanceof s?d(e,n.length,n):e.apply(t,n)};return o(n)&&(s.prototype=n),s}},597:(t,e,n)=>{var r=n(9039),i=n(8227),o=n(9519),s=i("species");t.exports=function(t){return o>=51||!r(function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo})}},616:(t,e,n)=>{var r=n(9039);t.exports=!r(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})},655:(t,e,n)=>{var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},679:(t,e,n)=>{var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},684:t=>{t.exports=function(t,e){var n="function"==typeof Iterator&&Iterator.prototype[t];if(n)try{n.call({next:null},e).next()}catch(r){return!0}}},687:(t,e,n)=>{var r=n(4913).f,i=n(9297),o=n(8227),s=o("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!i(t,s)&&r(t,s,{configurable:!0,value:e})}},706:(t,e,n)=>{var r=n(350).PROPER,i=n(9039),o=n(7452),s="​᠎";t.exports=function(t){return i(function(){return!!o[t]()||s[t]()!==s||r&&o[t].name!==t})}},739:(t,e,n)=>{var r=n(6518),i=n(9039),o=n(8981),s=n(2777),a=i(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})});r({target:"Date",proto:!0,arity:1,forced:a},{toJSON:function(t){var e=o(this),n=s(e,"number");return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},741:t=>{var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},747:(t,e,n)=>{var r=n(6699),i=n(8574),o=n(4659),s=Error.captureStackTrace;t.exports=function(t,e,n,a){o&&(s?s(t,e):r(t,"stack",i(n,a)))}},757:(t,e,n)=>{var r=n(7751),i=n(4901),o=n(1625),s=n(7040),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,a(t))}},781:(t,e,n)=>{var r=n(6518),i=n(7240),o=n(3061);r({target:"String",proto:!0,forced:o("italics")},{italics:function(){return i(this,"i","","")}})},788:(t,e,n)=>{var r=n(34),i=n(4576),o=n(8227),s=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"===i(t))}},851:(t,e,n)=>{var r=n(6955),i=n(5966),o=n(4117),s=n(6269),a=n(8227),c=a("iterator");t.exports=function(t){if(!o(t))return i(t,c)||i(t,"@@iterator")||s[r(t)]}},875:(t,e,n)=>{var r=n(6518),i=n(9039),o=n(8981),s=n(2787),a=n(2211),c=i(function(){s(1)});r({target:"Object",stat:!0,forced:c,sham:!a},{getPrototypeOf:function(t){return s(o(t))}})},906:(t,e,n)=>{n(7495);var r=n(6518),i=n(9565),o=n(4901),s=n(8551),a=n(655),c=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),u=/./.test;r({target:"RegExp",proto:!0,forced:!c},{test:function(t){var e=s(this),n=a(t),r=e.exec;if(!o(r))return i(u,e,n);var c=i(r,e,n);return null!==c&&(s(c),!0)}})},916:(t,e,n)=>{var r=n(2195),i=n(550),o=n(4901),s=n(2796),a=n(3706),c=n(8227),u=n(4215),l=n(6395),h=n(9519),f=i&&i.prototype,d=c("species"),p=!1,g=o(r.PromiseRejectionEvent),v=s("Promise",function(){var t=a(i),e=t!==String(i);if(!e&&66===h)return!0;if(l&&(!f["catch"]||!f["finally"]))return!0;if(!h||h<51||!/native code/.test(t)){var n=new i(function(t){t(1)}),r=function(t){t(function(){},function(){})},o=n.constructor={};if(o[d]=r,p=n.then(function(){})instanceof r,!p)return!0}return!e&&("BROWSER"===u||"DENO"===u)&&!g});t.exports={CONSTRUCTOR:v,REJECTION_EVENT:g,SUBCLASSING:p}},926:(t,e,n)=>{var r=n(9306),i=n(8981),o=n(7055),s=n(6198),a=TypeError,c="Reduce of empty array with no initial value",u=function(t){return function(e,n,u,l){var h=i(e),f=o(h),d=s(h);if(r(n),0===d&&u<2)throw new a(c);var p=t?d-1:0,g=t?-1:1;if(u<2)while(1){if(p in f){l=f[p],p+=g;break}if(p+=g,t?p<0:d<=p)throw new a(c)}for(;t?p>=0:d>p;p+=g)p in f&&(l=n(l,f[p],p,h));return l}};t.exports={left:u(!1),right:u(!0)}},944:t=>{var e=TypeError;t.exports=function(t){var n=t&&t.alphabet;if(void 0===n||"base64"===n||"base64url"===n)return n||"base64";throw new e("Incorrect `alphabet` option")}},1034:(t,e,n)=>{var r=n(9565),i=n(9297),o=n(1625),s=n(5213),a=n(7979),c=RegExp.prototype;t.exports=s.correct?function(t){return t.flags}:function(t){return s.correct||!o(c,t)||i(t,"flags")?t.flags:r(a,t)}},1056:(t,e,n)=>{var r=n(4913).f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},1072:(t,e,n)=>{var r=n(1828),i=n(8727);t.exports=Object.keys||function(t){return r(t,i)}},1088:(t,e,n)=>{var r=n(6518),i=n(9565),o=n(6395),s=n(350),a=n(4901),c=n(3994),u=n(2787),l=n(2967),h=n(687),f=n(6699),d=n(6840),p=n(8227),g=n(6269),v=n(7657),m=s.PROPER,y=s.CONFIGURABLE,w=v.IteratorPrototype,b=v.BUGGY_SAFARI_ITERATORS,_=p("iterator"),E="keys",I="values",T="entries",S=function(){return this};t.exports=function(t,e,n,s,p,v,A){c(n,e,s);var C,k,x,O=function(t){if(t===p&&L)return L;if(!b&&t&&t in D)return D[t];switch(t){case E:return function(){return new n(this,t)};case I:return function(){return new n(this,t)};case T:return function(){return new n(this,t)}}return function(){return new n(this)}},R=e+" Iterator",N=!1,D=t.prototype,P=D[_]||D["@@iterator"]||p&&D[p],L=!b&&P||O(p),M="Array"===e&&D.entries||P;if(M&&(C=u(M.call(new t)),C!==Object.prototype&&C.next&&(o||u(C)===w||(l?l(C,w):a(C[_])||d(C,_,S)),h(C,R,!0,!0),o&&(g[R]=S))),m&&p===I&&P&&P.name!==I&&(!o&&y?f(D,"name",I):(N=!0,L=function(){return i(P,this)})),p)if(k={values:O(I),keys:v?L:O(E),entries:O(T)},A)for(x in k)(b||N||!(x in D))&&d(D,x,k[x]);else r({target:e,proto:!0,forced:b||N},k);return o&&!A||D[_]===L||d(D,_,L,{name:p}),g[e]=L,k}},1103:t=>{t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},1108:(t,e,n)=>{var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},1134:(t,e,n)=>{var r=n(4644),i=n(3839).findLastIndex,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLastIndex",function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)})},1181:(t,e,n)=>{var r,i,o,s=n(8622),a=n(2195),c=n(34),u=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,v=a.WeakMap,m=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var w=h.state||(h.state=new v);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw new g(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},o=function(t){return w.has(t)}}else{var b=f("state");d[b]=!0,r=function(t,e){if(l(t,b))throw new g(p);return e.facade=t,u(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},o=function(t){return l(t,b)}}t.exports={set:r,get:i,has:o,enforce:m,getterFor:y}},1240:(t,e,n)=>{var r=n(9504);t.exports=r(1.1.valueOf)},1278:(t,e,n)=>{var r=n(6518),i=n(3724),o=n(5031),s=n(5397),a=n(7347),c=n(2278);r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,e=u[h++]),void 0!==n&&c(l,e,n);return l}})},1291:(t,e,n)=>{var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},1296:(t,e,n)=>{var r=n(4495);t.exports=r&&!!Symbol["for"]&&!!Symbol.keyFor},1385:(t,e,n)=>{var r=n(9539);t.exports=function(t,e,n){for(var i=t.length-1;i>=0;i--)if(void 0!==t[i])try{n=r(t[i].iterator,e,n)}catch(o){e="throw",n=o}if("throw"===e)throw n;return n}},1392:(t,e,n)=>{var r=n(6518),i=n(7476),o=n(7347).f,s=n(8014),a=n(655),c=n(2892),u=n(7750),l=n(1436),h=n(6395),f=i("".slice),d=Math.min,p=l("startsWith"),g=!h&&!p&&!!function(){var t=o(String.prototype,"startsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!g&&!p},{startsWith:function(t){var e=a(u(this));c(t);var n=s(d(arguments.length>1?arguments[1]:void 0,e.length)),r=a(t);return f(e,n,n+r.length)===r}})},1405:(t,e,n)=>{var r=n(2195),i=n(8745),o=n(4644),s=n(9039),a=n(7680),c=r.Int8Array,u=o.aTypedArray,l=o.exportTypedArrayMethod,h=[].toLocaleString,f=!!c&&s(function(){h.call(new c(1))}),d=s(function(){return[1,2].toLocaleString()!==new c([1,2]).toLocaleString()})||!s(function(){c.prototype.toLocaleString.call([1,2])});l("toLocaleString",function(){return i(h,f?a(u(this)):u(this),a(arguments))},d)},1436:(t,e,n)=>{var r=n(8227),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},1469:(t,e,n)=>{var r=n(7433);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},1481:(t,e,n)=>{var r=n(6518),i=n(6043),o=n(916).CONSTRUCTOR;r({target:"Promise",stat:!0,forced:o},{reject:function(t){var e=i.f(this),n=e.reject;return n(t),e.promise}})},1489:(t,e,n)=>{var r=n(5823);r("Uint8",function(t){return function(e,n,r){return t(this,e,n,r)}})},1510:(t,e,n)=>{var r=n(6518),i=n(7751),o=n(9297),s=n(655),a=n(5745),c=n(1296),u=a("string-to-symbol-registry"),l=a("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=s(t);if(o(u,e))return u[e];var n=i("Symbol")(e);return u[e]=n,l[n]=e,n}})},1548:(t,e,n)=>{var r=n(2195),i=n(9039),o=n(9519),s=n(4215),a=r.structuredClone;t.exports=!!a&&!i(function(){if("DENO"===s&&o>92||"NODE"===s&&o>94||"BROWSER"===s&&o>97)return!1;var t=new ArrayBuffer(8),e=a(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength})},1549:(t,e,n)=>{n(6632)},1575:(t,e,n)=>{var r=n(4644),i=n(926).left,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("reduce",function(t){var e=arguments.length;return i(o(this),t,e,e>1?arguments[1]:void 0)})},1625:(t,e,n)=>{var r=n(9504);t.exports=r({}.isPrototypeOf)},1629:(t,e,n)=>{var r=n(6518),i=n(235);r({target:"Array",proto:!0,forced:[].forEach!==i},{forEach:i})},1630:(t,e,n)=>{var r=n(9504),i=n(4644),o=n(7029),s=r(o),a=i.aTypedArray,c=i.exportTypedArrayMethod;c("copyWithin",function(t,e){return s(a(this),t,e,arguments.length>2?arguments[2]:void 0)})},1656:(t,e,n)=>{function r(t,e,n,r,i,o,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,{A:()=>r})},1694:(t,e,n)=>{var r=n(4644),i=n(9213).find,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("find",function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)})},1699:(t,e,n)=>{var r=n(6518),i=n(9504),o=n(2892),s=n(7750),a=n(655),c=n(1436),u=i("".indexOf);r({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~u(a(s(this)),a(o(t)),arguments.length>1?arguments[1]:void 0)}})},1701:(t,e,n)=>{var r=n(6518),i=n(9565),o=n(9306),s=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(9539),h=n(684),f=n(4549),d=n(6395),p=!d&&!h("map",function(){}),g=!d&&!p&&f("map",TypeError),v=d||p||g,m=c(function(){var t=this.iterator,e=s(i(this.next,t)),n=this.done=!!e.done;if(!n)return u(t,this.mapper,[e.value,this.counter++],!0)});r({target:"Iterator",proto:!0,real:!0,forced:v},{map:function(t){s(this);try{o(t)}catch(e){l(this,"throw",e)}return g?i(g,this,t):new m(a(this),{mapper:t})}})},1745:(t,e,n)=>{var r=n(6518),i=n(7476),o=n(9039),s=n(6346),a=n(8551),c=n(5610),u=n(8014),l=s.ArrayBuffer,h=s.DataView,f=h.prototype,d=i(l.prototype.slice),p=i(f.getUint8),g=i(f.setUint8),v=o(function(){return!new l(2).slice(1,void 0).byteLength});r({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:v},{slice:function(t,e){if(d&&void 0===e)return d(a(this),t);var n=a(this).byteLength,r=c(t,n),i=c(void 0===e?n:e,n),o=new l(u(i-r)),s=new h(this),f=new h(o),v=0;while(r<i)g(f,v++,p(s,r++));return o}})},1767:t=>{t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},1828:(t,e,n)=>{var r=n(9504),i=n(9297),o=n(5397),s=n(9617).indexOf,a=n(421),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},1903:(t,e,n)=>{var r=n(4644),i=n(3839).findLast,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLast",function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)})},1920:(t,e,n)=>{var r=n(4644),i=n(9213).filter,o=n(9948),s=r.aTypedArray,a=r.exportTypedArrayMethod;a("filter",function(t){var e=i(s(this),t,arguments.length>1?arguments[1]:void 0);return o(this,e)})},1951:(t,e,n)=>{var r=n(8227);e.f=r},1955:(t,e,n)=>{var r,i,o,s,a,c=n(2195),u=n(3389),l=n(6080),h=n(9225).set,f=n(8265),d=n(9544),p=n(4265),g=n(7860),v=n(6193),m=c.MutationObserver||c.WebKitMutationObserver,y=c.document,w=c.process,b=c.Promise,_=u("queueMicrotask");if(!_){var E=new f,I=function(){var t,e;v&&(t=w.domain)&&t.exit();while(e=E.get())try{e()}catch(n){throw E.head&&r(),n}t&&t.enter()};d||v||g||!m||!y?!p&&b&&b.resolve?(s=b.resolve(void 0),s.constructor=b,a=l(s.then,s),r=function(){a(I)}):v?r=function(){w.nextTick(I)}:(h=l(h,c),r=function(){h(I)}):(i=!0,o=y.createTextNode(""),new m(I).observe(o,{characterData:!0}),r=function(){o.data=i=!i}),_=function(t){E.head||r(),E.add(t)}}t.exports=_},2003:(t,e,n)=>{var r=n(6518),i=n(6395),o=n(916).CONSTRUCTOR,s=n(550),a=n(7751),c=n(4901),u=n(6840),l=s&&s.prototype;if(r({target:"Promise",proto:!0,forced:o,real:!0},{catch:function(t){return this.then(void 0,t)}}),!i&&c(s)){var h=a("Promise").prototype["catch"];l["catch"]!==h&&u(l,"catch",h,{unsafe:!0})}},2008:(t,e,n)=>{var r=n(6518),i=n(9213).filter,o=n(597),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},2010:(t,e,n)=>{var r=n(3724),i=n(350).EXISTS,o=n(9504),s=n(2106),a=Function.prototype,c=o(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),h="name";r&&!i&&s(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},2062:(t,e,n)=>{var r=n(6518),i=n(9213).map,o=n(597),s=o("map");r({target:"Array",proto:!0,forced:!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},2087:(t,e,n)=>{var r=n(34),i=Math.floor;t.exports=Number.isInteger||function(t){return!r(t)&&isFinite(t)&&i(t)===t}},2106:(t,e,n)=>{var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},2140:(t,e,n)=>{var r=n(8227),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},2170:(t,e,n)=>{var r=n(4644),i=n(9213).every,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("every",function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)})},2195:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},2211:(t,e,n)=>{var r=n(9039);t.exports=!r(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})},2259:(t,e,n)=>{var r=n(511);r("iterator")},2278:(t,e,n)=>{var r=n(3724),i=n(4913),o=n(6980);t.exports=function(t,e,n){r?i.f(t,e,o(0,n)):t[e]=n}},2293:(t,e,n)=>{var r=n(8551),i=n(5548),o=n(4117),s=n(8227),a=s("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||o(n=r(s)[a])?e:i(n)}},2303:(t,e,n)=>{var r=n(2195),i=n(9504),o=r.Uint8Array,s=r.SyntaxError,a=r.parseInt,c=Math.min,u=/[^\da-f]/i,l=i(u.exec),h=i("".slice);t.exports=function(t,e){var n=t.length;if(n%2!==0)throw new s("String should be an even number of characters");var r=e?c(e.length,n/2):n/2,i=e||new o(r),f=0,d=0;while(d<r){var p=h(t,f,f+=2);if(l(u,p))throw new s("String should only contain hex characters");i[d++]=a(p,16)}return{bytes:i,read:f}}},2333:(t,e,n)=>{var r=n(1291),i=n(655),o=n(7750),s=RangeError;t.exports=function(t){var e=i(o(this)),n="",a=r(t);if(a<0||a===1/0)throw new s("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(n+=e);return n}},2360:(t,e,n)=>{var r,i=n(8551),o=n(6801),s=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),v=function(){},m=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(m("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(m("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?y(r):w():y(r);var t=s.length;while(t--)delete b[d][s[t]];return b()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(v[d]=i(t),n=new v,v[d]=null,n[g]=t):n=b(),void 0===e?n:o.f(n,e)}},2472:(t,e,n)=>{n.d(e,{A:()=>o});n(2675),n(9463),n(2259),n(6280),n(6918),n(4346),n(6099),n(7764),n(2953),n(3418),n(4782),n(3288),n(2010),n(7495),n(906),n(8781);function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(t){if("string"==typeof t)return r(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,s=t},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(c)throw s}}}}},2478:(t,e,n)=>{var r=n(9504),i=n(8981),o=Math.floor,s=r("".charAt),a=r("".replace),c=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,r,h,f){var d=n+t.length,p=r.length,g=l;return void 0!==h&&(h=i(h),g=u),a(f,g,function(i,a){var u;switch(s(a,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,n);case"'":return c(e,d);case"<":u=h[c(a,1,-1)];break;default:var l=+a;if(0===l)return i;if(l>p){var f=o(l/10);return 0===f?i:f<=p?void 0===r[f-1]?s(a,1):r[f-1]+s(a,1):i}u=r[l-1]}return void 0===u?"":u})}},2489:(t,e,n)=>{var r=n(6518),i=n(9565),o=n(9306),s=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(6395),h=n(9539),f=n(684),d=n(4549),p=!l&&!f("filter",function(){}),g=!l&&!p&&d("filter",TypeError),v=l||p||g,m=c(function(){var t,e,n,r=this.iterator,o=this.predicate,a=this.next;while(1){if(t=s(i(a,r)),e=this.done=!!t.done,e)return;if(n=t.value,u(r,o,[n,this.counter++],!0))return n}});r({target:"Iterator",proto:!0,real:!0,forced:v},{filter:function(t){s(this);try{o(t)}catch(e){h(this,"throw",e)}return g?i(g,this,t):new m(a(this),{predicate:t})}})},2529:t=>{t.exports=function(t,e){return{value:t,done:e}}},2603:(t,e,n)=>{var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},2652:(t,e,n)=>{var r=n(6080),i=n(9565),o=n(8551),s=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),f=n(9539),d=TypeError,p=function(t,e){this.stopped=t,this.result=e},g=p.prototype;t.exports=function(t,e,n){var v,m,y,w,b,_,E,I=n&&n.that,T=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_RECORD),A=!(!n||!n.IS_ITERATOR),C=!(!n||!n.INTERRUPTED),k=r(e,I),x=function(t){return v&&f(v,"normal"),new p(!0,t)},O=function(t){return T?(o(t),C?k(t[0],t[1],x):k(t[0],t[1])):C?k(t,x):k(t)};if(S)v=t.iterator;else if(A)v=t;else{if(m=h(t),!m)throw new d(s(t)+" is not iterable");if(a(m)){for(y=0,w=c(t);w>y;y++)if(b=O(t[y]),b&&u(g,b))return b;return new p(!1)}v=l(t,m)}_=S?t.next:v.next;while(!(E=i(_,v)).done){try{b=O(E.value)}catch(R){f(v,"throw",R)}if("object"==typeof b&&b&&u(g,b))return b}return new p(!1)}},2675:(t,e,n)=>{n(6761),n(1510),n(7812),n(3110),n(9773)},2762:(t,e,n)=>{var r=n(6518),i=n(3802).trim,o=n(706);r({target:"String",proto:!0,forced:o("trim")},{trim:function(){return i(this)}})},2777:(t,e,n)=>{var r=n(9565),i=n(34),o=n(757),s=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,c=s(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||o(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},2787:(t,e,n)=>{var r=n(9297),i=n(4901),o=n(8981),s=n(6119),a=n(2211),c=s("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=o(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},2796:(t,e,n)=>{var r=n(9039),i=n(4901),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},2804:t=>{var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=e+"+/",r=e+"-_",i=function(t){for(var e={},n=0;n<64;n++)e[t.charAt(n)]=n;return e};t.exports={i2c:n,c2i:i(n),i2cUrl:r,c2iUrl:i(r)}},2805:(t,e,n)=>{var r=n(2195),i=n(9039),o=n(4428),s=n(4644).NATIVE_ARRAY_BUFFER_VIEWS,a=r.ArrayBuffer,c=r.Int8Array;t.exports=!s||!i(function(){c(1)})||!i(function(){new c(-1)})||!o(function(t){new c,new c(null),new c(1.5),new c(t)},!0)||i(function(){return 1!==new c(new a(2),1,void 0).length})},2812:t=>{var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},2839:(t,e,n)=>{var r=n(2195),i=r.navigator,o=i&&i.userAgent;t.exports=o?String(o):""},2887:(t,e,n)=>{var r=n(2195),i=n(9039),o=n(9504),s=n(4644),a=n(3792),c=n(8227),u=c("iterator"),l=r.Uint8Array,h=o(a.values),f=o(a.keys),d=o(a.entries),p=s.aTypedArray,g=s.exportTypedArrayMethod,v=l&&l.prototype,m=!i(function(){v[u].call([1])}),y=!!v&&v.values&&v[u]===v.values&&"values"===v.values.name,w=function(){return h(p(this))};g("entries",function(){return d(p(this))},m),g("keys",function(){return f(p(this))},m),g("values",w,m||!y,{name:"values"}),g(u,w,m||!y,{name:"values"})},2892:(t,e,n)=>{var r=n(788),i=TypeError;t.exports=function(t){if(r(t))throw new i("The method doesn't accept regular expressions");return t}},2953:(t,e,n)=>{var r=n(2195),i=n(7400),o=n(9296),s=n(3792),a=n(6699),c=n(687),u=n(8227),l=u("iterator"),h=s.values,f=function(t,e){if(t){if(t[l]!==h)try{a(t,l,h)}catch(r){t[l]=h}if(c(t,e,!0),i[e])for(var n in s)if(t[n]!==s[n])try{a(t,n,s[n])}catch(r){t[n]=s[n]}}};for(var d in i)f(r[d]&&r[d].prototype,d);f(o,"DOMTokenList")},2967:(t,e,n)=>{var r=n(6706),i=n(34),o=n(7750),s=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return o(n),s(r),i(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0)},3061:(t,e,n)=>{var r=n(9039);t.exports=function(t){return r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})}},3063:(t,e,n)=>{var r=n(2839);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},3110:(t,e,n)=>{var r=n(6518),i=n(7751),o=n(8745),s=n(9565),a=n(9504),c=n(9039),u=n(4376),l=n(4901),h=n(5810),f=n(757),d=n(4576),p=n(655),g=n(7680),v=n(8235),m=n(3392),y=n(4495),w=n(7819),b=String,_=i("JSON","stringify"),E=a(/./.exec),I=a("".charAt),T=a("".charCodeAt),S=a("".replace),A=a("".slice),C=a([].push),k=a(1.1.toString),x=/[\uD800-\uDFFF]/g,O=/^[\uD800-\uDBFF]$/,R=/^[\uDC00-\uDFFF]$/,N=m(),D=N.length,P=!y||c(function(){var t=i("Symbol")("stringify detection");return"[null]"!==_([t])||"{}"!==_({a:t})||"{}"!==_(Object(t))}),L=c(function(){return'"\\udf06\\ud834"'!==_("\udf06\ud834")||'"\\udead"'!==_("\udead")}),M=P?function(t,e){var n=g(arguments),r=U(e);if(l(r)||void 0!==t&&!f(t))return n[1]=function(t,e){if(l(r)&&(e=s(r,this,b(t),e)),!f(e))return e},o(_,null,n)}:_,F=function(t,e,n){var r=I(n,e-1),i=I(n,e+1);return E(O,t)&&!E(R,i)||E(R,t)&&!E(O,r)?"\\u"+k(T(t,0),16):t},U=function(t){if(l(t))return t;if(u(t)){for(var e=t.length,n=[],r=0;r<e;r++){var i=t[r];"string"==typeof i?C(n,i):"number"!=typeof i&&"Number"!==d(i)&&"String"!==d(i)||C(n,p(i))}var o=n.length,s=!0;return function(t,e){if(s)return s=!1,e;if(u(this))return e;for(var r=0;r<o;r++)if(n[r]===t)return e}}};_&&r({target:"JSON",stat:!0,arity:3,forced:P||L||!w},{stringify:function(t,e,n){var r=U(e),i=[],o=M(t,function(t,e){var n=l(r)?s(r,this,b(t),e):e;return!w&&h(n)?N+(C(i,n.rawJSON)-1):n},n);if("string"!=typeof o)return o;if(L&&(o=S(o,x,F)),w)return o;for(var a="",c=o.length,u=0;u<c;u++){var f=I(o,u);if('"'===f){var d=v(o,++u).end-1,p=A(o,u,d);a+=A(p,0,D)===N?i[A(p,D)]:'"'+p+'"',u=d}else a+=f}return a}})},3138:t=>{t.exports=function(t,e){try{1===arguments.length?console.error(t):console.error(t,e)}catch(n){}}},3164:(t,e,n)=>{var r=n(7782),i=n(3602),o=Math.abs,s=2220446049250313e-31;t.exports=function(t,e,n,a){var c=+t,u=o(c),l=r(c);if(u<a)return l*i(u/a/e)*a*e;var h=(1+e/s)*u,f=h-(h-u);return f>n||f!==f?l*(1/0):l*f}},3167:(t,e,n)=>{var r=n(4901),i=n(34),o=n(2967);t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},3179:(t,e,n)=>{var r=n(2140),i=n(6955);t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},3206:(t,e,n)=>{var r=n(4644),i=n(9213).forEach,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("forEach",function(t){i(o(this),t,arguments.length>1?arguments[1]:void 0)})},3238:(t,e,n)=>{var r=n(2195),i=n(7811),o=n(7394),s=r.DataView;t.exports=function(t){if(!i||0!==o(t))return!1;try{return new s(t),!1}catch(e){return!0}}},3251:(t,e,n)=>{var r=n(6080),i=n(9565),o=n(5548),s=n(8981),a=n(6198),c=n(81),u=n(851),l=n(4209),h=n(1108),f=n(4644).aTypedArrayConstructor,d=n(5854);t.exports=function(t){var e,n,p,g,v,m,y,w,b=o(this),_=s(t),E=arguments.length,I=E>1?arguments[1]:void 0,T=void 0!==I,S=u(_);if(S&&!l(S)){y=c(_,S),w=y.next,_=[];while(!(m=i(w,y)).done)_.push(m.value)}for(T&&E>2&&(I=r(I,arguments[2])),n=a(_),p=new(f(b))(n),g=h(p),e=0;n>e;e++)v=T?I(_[e],e):_[e],p[e]=g?d(v):+v;return p}},3288:(t,e,n)=>{var r=n(9504),i=n(6840),o=Date.prototype,s="Invalid Date",a="toString",c=r(o[a]),u=r(o.getTime);String(new Date(NaN))!==s&&i(o,a,function(){var t=u(this);return t===t?c(this):s})},3362:(t,e,n)=>{n(436),n(6499),n(2003),n(7743),n(1481),n(280)},3389:(t,e,n)=>{var r=n(2195),i=n(3724),o=Object.getOwnPropertyDescriptor;t.exports=function(t){if(!i)return r[t];var e=o(r,t);return e&&e.value}},3392:(t,e,n)=>{var r=n(9504),i=0,o=Math.random(),s=r(1.1.toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},3418:(t,e,n)=>{var r=n(6518),i=n(7916),o=n(4428),s=!o(function(t){Array.from(t)});r({target:"Array",stat:!0,forced:s},{from:i})},3424:(t,e,n)=>{n.d(e,{$b:()=>i,Vy:()=>u});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},3438:(t,e,n)=>{var r=n(8551),i=n(34),o=n(6043);t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},3463:t=>{var e=TypeError;t.exports=function(t){if("string"==typeof t)return t;throw new e("Argument is not a string")}},3470:t=>{t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}},3500:(t,e,n)=>{var r=n(2195),i=n(7400),o=n(9296),s=n(235),a=n(6699),c=function(t){if(t&&t.forEach!==s)try{a(t,"forEach",s)}catch(e){t.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},3506:(t,e,n)=>{var r=n(3925),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw new o("Can't set "+i(t)+" as a prototype")}},3517:(t,e,n)=>{var r=n(9504),i=n(9039),o=n(4901),s=n(6955),a=n(7751),c=n(3706),u=function(){},l=a("Reflect","construct"),h=/^\s*(?:class|function)\b/,f=r(h.exec),d=!h.test(u),p=function(t){if(!o(t))return!1;try{return l(u,[],t),!0}catch(e){return!1}},g=function(t){if(!o(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!f(h,c(t))}catch(e){return!0}};g.sham=!0,t.exports=!l||i(function(){var t;return p(p.call)||!p(Object)||!p(function(){t=!0})||t})?g:p},3548:(t,e,n)=>{var r=n(3724),i=n(2106),o=n(34),s=n(3925),a=n(8981),c=n(7750),u=Object.getPrototypeOf,l=Object.setPrototypeOf,h=Object.prototype,f="__proto__";if(r&&u&&l&&!(f in h))try{i(h,f,{configurable:!0,get:function(){return u(a(this))},set:function(t){var e=c(this);s(t)&&o(e)&&l(e,t)}})}catch(d){}},3579:(t,e,n)=>{var r=n(6518),i=n(9565),o=n(2652),s=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("some",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{some:function(t){a(this);try{s(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return o(e,function(e,r){if(t(e,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},3602:t=>{var e=2220446049250313e-31,n=1/e;t.exports=function(t){return t+n-n}},3607:(t,e,n)=>{var r=n(2839),i=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},3635:(t,e,n)=>{var r=n(9039),i=n(2195),o=i.RegExp;t.exports=r(function(){var t=o(".","s");return!(t.dotAll&&t.test("\n")&&"s"===t.flags)})},3640:(t,e,n)=>{var r=n(8551),i=n(4270),o=TypeError;t.exports=function(t){if(r(this),"string"===t||"default"===t)t="string";else if("number"!==t)throw new o("Incorrect hint");return i(this,t)}},3684:(t,e,n)=>{var r=n(4644).exportTypedArrayMethod,i=n(9039),o=n(2195),s=n(9504),a=o.Uint8Array,c=a&&a.prototype||{},u=[].toString,l=s([].join);i(function(){u.call({})})&&(u=function(){return l(this)});var h=c.toString!==u;r("toString",u,h)},3706:(t,e,n)=>{var r=n(9504),i=n(4901),o=n(7629),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},3709:(t,e,n)=>{var r=n(2839),i=r.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},3717:(t,e)=>{e.f=Object.getOwnPropertySymbols},3724:(t,e,n)=>{var r=n(9039);t.exports=!r(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})},3763:(t,e,n)=>{var r=n(2839);t.exports=/MSIE|Trident/.test(r)},3792:(t,e,n)=>{var r=n(5397),i=n(6469),o=n(6269),s=n(1181),a=n(4913).f,c=n(1088),u=n(2529),l=n(6395),h=n(3724),f="Array Iterator",d=s.set,p=s.getterFor(f);t.exports=c(Array,"Array",function(t,e){d(this,{type:f,target:r(t),index:0,kind:e})},function(){var t=p(this),e=t.target,n=t.index++;if(!e||n>=e.length)return t.target=null,u(void 0,!0);switch(t.kind){case"keys":return u(n,!1);case"values":return u(e[n],!1)}return u([n,e[n]],!1)},"values");var g=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!l&&h&&"values"!==g.name)try{a(g,"name",{value:"values"})}catch(v){}},3802:(t,e,n)=>{var r=n(9504),i=n(7750),o=n(655),s=n(7452),a=r("".replace),c=RegExp("^["+s+"]+"),u=RegExp("(^|[^"+s+"])["+s+"]+$"),l=function(t){return function(e){var n=o(i(e));return 1&t&&(n=a(n,c,"")),2&t&&(n=a(n,u,"$1")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},3839:(t,e,n)=>{var r=n(6080),i=n(7055),o=n(8981),s=n(6198),a=function(t){var e=1===t;return function(n,a,c){var u,l,h=o(n),f=i(h),d=s(f),p=r(a,c);while(d-- >0)if(u=f[d],l=p(u,d,h),l)switch(t){case 0:return u;case 1:return d}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},3851:(t,e,n)=>{var r=n(6518),i=n(9039),o=n(5397),s=n(7347).f,a=n(3724),c=!a||i(function(){s(1)});r({target:"Object",stat:!0,forced:c,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},3904:(t,e,n)=>{var r=n(2195),i=n(9039),o=n(9504),s=n(655),a=n(3802).trim,c=n(7452),u=o("".charAt),l=r.parseFloat,h=r.Symbol,f=h&&h.iterator,d=1/l(c+"-0")!==-1/0||f&&!i(function(){l(Object(f))});t.exports=d?function(t){var e=a(s(t)),n=l(e);return 0===n&&"-"===u(e,0)?-0:n}:l},3925:(t,e,n)=>{var r=n(34);t.exports=function(t){return r(t)||null===t}},3972:(t,e,n)=>{var r=n(34),i=String,o=TypeError;t.exports=function(t){if(void 0===t||r(t))return t;throw new o(i(t)+" is not an object or undefined")}},3994:(t,e,n)=>{var r=n(7657).IteratorPrototype,i=n(2360),o=n(6980),s=n(687),a=n(6269),c=function(){return this};t.exports=function(t,e,n,u){var l=e+" Iterator";return t.prototype=i(r,{next:o(+!u,n)}),s(t,l,!1,!0),a[l]=c,t}},4055:(t,e,n)=>{var r=n(2195),i=n(34),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},4114:(t,e,n)=>{var r=n(6518),i=n(8981),o=n(6198),s=n(4527),a=n(6837),c=n(9039),u=c(function(){return 4294967297!==[].push.call({length:4294967296},1)}),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=o(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return s(e,n),n}})},4117:t=>{t.exports=function(t){return null===t||void 0===t}},4154:(t,e,n)=>{var r=n(6955),i=TypeError;t.exports=function(t){if("Uint8Array"===r(t))return t;throw new i("Argument is not an Uint8Array")}},4170:(t,e,n)=>{var r=n(6518),i=n(566);r({target:"Function",proto:!0,forced:Function.bind!==i},{bind:i})},4185:(t,e,n)=>{var r=n(6518),i=n(3724),o=n(4913).f;r({target:"Object",stat:!0,forced:Object.defineProperty!==o,sham:!i},{defineProperty:o})},4209:(t,e,n)=>{var r=n(8227),i=n(6269),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},4213:(t,e,n)=>{var r=n(3724),i=n(9504),o=n(9565),s=n(9039),a=n(1072),c=n(3717),u=n(8773),l=n(8981),h=n(7055),f=Object.assign,d=Object.defineProperty,p=i([].concat);t.exports=!f||s(function(){if(r&&1!==f({b:1},f(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol("assign detection"),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!==f({},t)[n]||a(f({},e)).join("")!==i})?function(t,e){var n=l(t),i=arguments.length,s=1,f=c.f,d=u.f;while(i>s){var g,v=h(arguments[s++]),m=f?p(a(v),f(v)):a(v),y=m.length,w=0;while(y>w)g=m[w++],r&&!o(d,v,g)||(n[g]=v[g])}return n}:f},4215:(t,e,n)=>{var r=n(2195),i=n(2839),o=n(4576),s=function(t){return i.slice(0,t.length)===t};t.exports=function(){return s("Bun/")?"BUN":s("Cloudflare-Workers")?"CLOUDFLARE":s("Deno/")?"DENO":s("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===o(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},4226:(t,e,n)=>{var r=n(6518),i=n(2195),o=n(3463),s=n(4154),a=n(5169),c=n(2303);i.Uint8Array&&r({target:"Uint8Array",proto:!0},{setFromHex:function(t){s(this),o(t),a(this.buffer);var e=c(t,this).read;return{read:e,written:e/2}}})},4265:(t,e,n)=>{var r=n(2839);t.exports=/ipad|iphone|ipod/i.test(r)&&"undefined"!=typeof Pebble},4270:(t,e,n)=>{var r=n(9565),i=n(4901),o=n(34),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!o(a=r(n,t)))return a;if(i(n=t.valueOf)&&!o(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!o(a=r(n,t)))return a;throw new s("Can't convert object to primitive value")}},4346:(t,e,n)=>{var r=n(6518),i=n(4376);r({target:"Array",stat:!0},{isArray:i})},4359:(t,e,n)=>{var r=n(6518),i=n(6346),o=n(7811);r({global:!0,constructor:!0,forced:!o},{DataView:i.DataView})},4373:(t,e,n)=>{var r=n(8981),i=n(5610),o=n(6198);t.exports=function(t){var e=r(this),n=o(e),s=arguments.length,a=i(s>1?arguments[1]:void 0,n),c=s>2?arguments[2]:void 0,u=void 0===c?n:i(c,n);while(u>a)e[a++]=t;return e}},4376:(t,e,n)=>{var r=n(4576);t.exports=Array.isArray||function(t){return"Array"===r(t)}},4423:(t,e,n)=>{var r=n(6518),i=n(9617).includes,o=n(9039),s=n(6469),a=o(function(){return!Array(1).includes()});r({target:"Array",proto:!0,forced:a},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},4428:(t,e,n)=>{var r=n(8227),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,function(){throw 2})}catch(c){}t.exports=function(t,e){try{if(!e&&!o)return!1}catch(c){return!1}var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},4483:(t,e,n)=>{var r,i,o,s,a=n(2195),c=n(9429),u=n(1548),l=a.structuredClone,h=a.ArrayBuffer,f=a.MessageChannel,d=!1;if(u)d=function(t){l(t,{transfer:[t]})};else if(h)try{f||(r=c("worker_threads"),r&&(f=r.MessageChannel)),f&&(i=new f,o=new h(2),s=function(t){i.port1.postMessage(null,[t])},2===o.byteLength&&(s(o),0===o.byteLength&&(d=s)))}catch(p){}t.exports=d},4488:(t,e,n)=>{var r=n(7680),i=Math.floor,o=function(t,e){var n=t.length;if(n<8){var s,a,c=1;while(c<n){a=c,s=t[c];while(a&&e(t[a-1],s)>0)t[a]=t[--a];a!==c++&&(t[a]=s)}}else{var u=i(n/2),l=o(r(t,0,u),e),h=o(r(t,u),e),f=l.length,d=h.length,p=0,g=0;while(p<f||g<d)t[p+g]=p<f&&g<d?e(l[p],h[g])<=0?l[p++]:h[g++]:p<f?l[p++]:h[g++]}return t};t.exports=o},4495:(t,e,n)=>{var r=n(9519),i=n(9039),o=n(2195),s=o.String;t.exports=!!Object.getOwnPropertySymbols&&!i(function(){var t=Symbol("symbol detection");return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41})},4496:(t,e,n)=>{var r=n(4644),i=n(9617).includes,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("includes",function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)})},4527:(t,e,n)=>{var r=n(3724),i=n(4376),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!s(t,"length").writable)throw new o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4549:(t,e,n)=>{var r=n(2195);t.exports=function(t,e){var n=r.Iterator,i=n&&n.prototype,o=i&&i[t],s=!1;if(o)try{o.call({next:function(){return{done:!0}},return:function(){s=!0}},-1)}catch(a){a instanceof e||(s=!1)}if(!s)return o}},4554:(t,e,n)=>{var r=n(6518),i=n(8981),o=n(5610),s=n(1291),a=n(6198),c=n(4527),u=n(6837),l=n(1469),h=n(2278),f=n(4606),d=n(597),p=d("splice"),g=Math.max,v=Math.min;r({target:"Array",proto:!0,forced:!p},{splice:function(t,e){var n,r,d,p,m,y,w=i(this),b=a(w),_=o(t,b),E=arguments.length;for(0===E?n=r=0:1===E?(n=0,r=b-_):(n=E-2,r=v(g(s(e),0),b-_)),u(b+n-r),d=l(w,r),p=0;p<r;p++)m=_+p,m in w&&h(d,p,w[m]);if(d.length=r,n<r){for(p=_;p<b-r;p++)m=p+r,y=p+n,m in w?w[y]=w[m]:f(w,y);for(p=b;p>b-r+n;p--)f(w,p-1)}else if(n>r)for(p=b-r;p>_;p--)m=p+r-1,y=p+n-1,m in w?w[y]=w[m]:f(w,y);for(p=0;p<n;p++)w[p+_]=arguments[p+2];return c(w,b-r+n),d}})},4576:(t,e,n)=>{var r=n(9504),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},4598:(t,e,n)=>{var r=n(9039);t.exports=function(t,e){var n=[][t];return!!n&&r(function(){n.call(null,e||function(){return 1},1)})}},4599:(t,e,n)=>{var r=n(6518),i=n(2195),o=n(9472),s=o(i.setTimeout,!0);r({global:!0,bind:!0,forced:i.setTimeout!==s},{setTimeout:s})},4601:(t,e,n)=>{var r=n(7751),i=n(9297),o=n(6699),s=n(1625),a=n(2967),c=n(7740),u=n(1056),l=n(3167),h=n(2603),f=n(7584),d=n(747),p=n(3724),g=n(6395);t.exports=function(t,e,n,v){var m="stackTraceLimit",y=v?2:1,w=t.split("."),b=w[w.length-1],_=r.apply(null,w);if(_){var E=_.prototype;if(!g&&i(E,"cause")&&delete E.cause,!n)return _;var I=r("Error"),T=e(function(t,e){var n=h(v?e:t,void 0),r=v?new _(t):new _;return void 0!==n&&o(r,"message",n),d(r,T,r.stack,2),this&&s(E,this)&&l(r,this,T),arguments.length>y&&f(r,arguments[y]),r});if(T.prototype=E,"Error"!==b?a?a(T,I):c(T,I,{name:!0}):p&&m in _&&(u(T,_,m),u(T,_,"prepareStackTrace")),c(T,_),!g)try{E.name!==b&&o(E,"name",b),E.constructor=T}catch(S){}return T}}},4606:(t,e,n)=>{var r=n(6823),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw new i("Cannot delete property "+r(e)+" of "+r(t))}},4634:(t,e,n)=>{n.d(e,{A:()=>i});n(6099);function r(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,c,"next",t)}function c(t){r(s,i,o,a,c,"throw",t)}a(void 0)})}}},4644:(t,e,n)=>{var r,i,o,s=n(7811),a=n(3724),c=n(2195),u=n(4901),l=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),v=n(2106),m=n(1625),y=n(2787),w=n(2967),b=n(8227),_=n(3392),E=n(1181),I=E.enforce,T=E.get,S=c.Int8Array,A=S&&S.prototype,C=c.Uint8ClampedArray,k=C&&C.prototype,x=S&&y(S),O=A&&y(A),R=Object.prototype,N=c.TypeError,D=b("toStringTag"),P=_("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=s&&!!w&&"Opera"!==f(c.opera),F=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},j={BigInt64Array:8,BigUint64Array:8},V=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(U,e)||h(j,e)},$=function(t){var e=y(t);if(l(e)){var n=T(e);return n&&h(n,L)?n[L]:$(e)}},B=function(t){if(!l(t))return!1;var e=f(t);return h(U,e)||h(j,e)},q=function(t){if(B(t))return t;throw new N("Target is not a typed array")},z=function(t){if(u(t)&&(!w||m(x,t)))return t;throw new N(d(t)+" is not a typed array constructor")},K=function(t,e,n,r){if(a){if(n)for(var i in U){var o=c[i];if(o&&h(o.prototype,t))try{delete o.prototype[t]}catch(s){try{o.prototype[t]=e}catch(u){}}}O[t]&&!n||g(O,t,n?e:M&&A[t]||e,r)}},H=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in U)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(o){}if(x[t]&&!n)return;try{return g(x,t,n?e:M&&x[t]||e)}catch(o){}}for(r in U)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in U)i=c[r],o=i&&i.prototype,o?I(o)[L]=i:M=!1;for(r in j)i=c[r],o=i&&i.prototype,o&&(I(o)[L]=i);if((!M||!u(x)||x===Function.prototype)&&(x=function(){throw new N("Incorrect invocation")},M))for(r in U)c[r]&&w(c[r],x);if((!M||!O||O===R)&&(O=x.prototype,M))for(r in U)c[r]&&w(c[r].prototype,O);if(M&&y(k)!==O&&w(k,O),a&&!h(O,D))for(r in F=!0,v(O,D,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),U)c[r]&&p(c[r],P,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&P,aTypedArray:q,aTypedArrayConstructor:z,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:H,getTypedArrayConstructor:$,isView:V,isTypedArray:B,TypedArray:x,TypedArrayPrototype:O}},4659:(t,e,n)=>{var r=n(9039),i=n(6980);t.exports=!r(function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)})},4732:(t,e,n)=>{var r=n(4644),i=n(9504),o=n(9306),s=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",function(t){void 0!==t&&o(t);var e=a(this),n=s(c(e),e);return l(n,t)})},4743:(t,e,n)=>{var r=n(6518),i=n(2195),o=n(6346),s=n(7633),a="ArrayBuffer",c=o[a],u=i[a];r({global:!0,constructor:!0,forced:u!==c},{ArrayBuffer:c}),s(a)},4782:(t,e,n)=>{var r=n(6518),i=n(4376),o=n(3517),s=n(34),a=n(5610),c=n(6198),u=n(5397),l=n(2278),h=n(8227),f=n(597),d=n(7680),p=f("slice"),g=h("species"),v=Array,m=Math.max;r({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var n,r,h,f=u(this),p=c(f),y=a(t,p),w=a(void 0===e?p:e,p);if(i(f)&&(n=f.constructor,o(n)&&(n===v||i(n.prototype))?n=void 0:s(n)&&(n=n[g],null===n&&(n=void 0)),n===v||void 0===n))return d(f,y,w);for(r=new(void 0===n?v:n)(m(w-y,0)),h=0;y<w;y++,h++)y in f&&l(r,h,f[y]);return r.length=h,r}})},4901:t=>{var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},4913:(t,e,n)=>{var r=n(3724),i=n(5917),o=n(8686),s=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?o?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},5031:(t,e,n)=>{var r=n(7751),i=n(9504),o=n(8480),s=n(3717),a=n(8551),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},5044:(t,e,n)=>{var r=n(4644),i=n(4373),o=n(5854),s=n(6955),a=n(9565),c=n(9504),u=n(9039),l=r.aTypedArray,h=r.exportTypedArrayMethod,f=c("".slice),d=u(function(){var t=0;return new Int8Array(2).fill({valueOf:function(){return t++}}),1!==t});h("fill",function(t){var e=arguments.length;l(this);var n="Big"===f(s(this),0,3)?o(t):+t;return a(i,this,n,e>1?arguments[1]:void 0,e>2?arguments[2]:void 0)},d)},5086:(t,e,n)=>{var r=n(6518),i=n(9213).some,o=n(4598),s=o("some");r({target:"Array",proto:!0,forced:!s},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5125:(t,e,n)=>{n.d(e,{h1:()=>u,uA:()=>i});var r=n(6743);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5169:(t,e,n)=>{var r=n(3238),i=TypeError;t.exports=function(t){if(r(t))throw new i("ArrayBuffer is detached");return t}},5213:(t,e,n)=>{var r=n(2195),i=n(9039),o=r.RegExp,s=!i(function(){var t=!0;try{o(".","d")}catch(u){t=!1}var e={},n="",r=t?"dgimsy":"gimsy",i=function(t,r){Object.defineProperty(e,t,{get:function(){return n+=r,!0}})},s={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(s.hasIndices="d"),s)i(a,s[a]);var c=Object.getOwnPropertyDescriptor(o.prototype,"flags").get.call(e);return c!==r||n!==r});t.exports={correct:s}},5276:(t,e,n)=>{var r=n(6518),i=n(7476),o=n(9617).indexOf,s=n(4598),a=i([].indexOf),c=!!a&&1/a([1],1,-0)<0,u=c||!s("indexOf");r({target:"Array",proto:!0,forced:u},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return c?a(this,t,e)||0:o(this,t,e)}})},5370:(t,e,n)=>{var r=n(6198);t.exports=function(t,e,n){var i=0,o=arguments.length>2?n:r(e),s=new t(o);while(o>i)s[i]=e[i++];return s}},5397:(t,e,n)=>{var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},5440:(t,e,n)=>{var r=n(8745),i=n(9565),o=n(9504),s=n(9228),a=n(9039),c=n(8551),u=n(4901),l=n(34),h=n(1291),f=n(8014),d=n(655),p=n(7750),g=n(7829),v=n(5966),m=n(2478),y=n(1034),w=n(6682),b=n(8227),_=b("replace"),E=Math.max,I=Math.min,T=o([].concat),S=o([].push),A=o("".indexOf),C=o("".slice),k=function(t){return void 0===t?t:String(t)},x=function(){return"$0"==="a".replace(/./,"$0")}(),O=function(){return!!/./[_]&&""===/./[_]("a","$0")}(),R=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")});s("replace",function(t,e,n){var o=O?"$":"$0";return[function(t,n){var r=p(this),o=l(t)?v(t,_):void 0;return o?i(o,t,r,n):i(e,d(r),t,n)},function(t,i){var s=c(this),a=d(t);if("string"==typeof i&&-1===A(i,o)&&-1===A(i,"$<")){var l=n(e,s,a,i);if(l.done)return l.value}var p=u(i);p||(i=d(i));var v,b=d(y(s)),_=-1!==A(b,"g");_&&(v=-1!==A(b,"u"),s.lastIndex=0);var x,O=[];while(1){if(x=w(s,a),null===x)break;if(S(O,x),!_)break;var R=d(x[0]);""===R&&(s.lastIndex=g(a,f(s.lastIndex),v))}for(var N="",D=0,P=0;P<O.length;P++){x=O[P];for(var L,M=d(x[0]),F=E(I(h(x.index),a.length),0),U=[],j=1;j<x.length;j++)S(U,k(x[j]));var V=x.groups;if(p){var $=T([M],U,F,a);void 0!==V&&S($,V),L=d(r(i,void 0,$))}else L=m(M,a,F,U,V,i);F>=D&&(N+=C(a,D,F)+L,D=F+M.length)}return N+C(a,D)}]},!R||!x||O)},5471:(t,e,n)=>{n.d(e,{Ay:()=>Xr});
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
var r=Object.freeze({}),i=Array.isArray;function o(t){return void 0===t||null===t}function s(t){return void 0!==t&&null!==t}function a(t){return!0===t}function c(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function d(t){return"[object Object]"===f.call(t)}function p(t){return"[object RegExp]"===f.call(t)}function g(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function v(t){return s(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function m(t){return null==t?"":Array.isArray(t)||d(t)&&t.toString===f?JSON.stringify(t,y,2):String(t)}function y(t,e){return e&&e.__v_isRef?e.value:e}function w(t){var e=parseFloat(t);return isNaN(e)?t:e}function b(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}b("slot,component",!0);var _=b("key,ref,slot,slot-scope,is");function E(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var I=Object.prototype.hasOwnProperty;function T(t,e){return I.call(t,e)}function S(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var A=/-(\w)/g,C=S(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),k=S(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),x=/\B([A-Z])/g,O=S(function(t){return t.replace(x,"-$1").toLowerCase()});function R(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function N(t,e){return t.bind(e)}var D=Function.prototype.bind?N:R;function P(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function L(t,e){for(var n in e)t[n]=e[n];return t}function M(t){for(var e={},n=0;n<t.length;n++)t[n]&&L(e,t[n]);return e}function F(t,e,n){}var U=function(t,e,n){return!1},j=function(t){return t};function V(t,e){if(t===e)return!0;var n=h(t),r=h(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return V(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every(function(n){return V(t[n],e[n])})}catch(c){return!1}}function $(t,e){for(var n=0;n<t.length;n++)if(V(t[n],e))return n;return-1}function B(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function q(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var z="data-server-rendered",K=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],G={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:U,isReservedAttr:U,isUnknownElement:U,getTagNamespace:F,parsePlatformTagName:j,mustUseProp:U,async:!0,_lifecycleHooks:H},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function Y(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var J=new RegExp("[^".concat(W.source,".$_\\d]"));function X(t){if(!J.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Z="__proto__"in{},tt="undefined"!==typeof window,et=tt&&window.navigator.userAgent.toLowerCase(),nt=et&&/msie|trident/.test(et),rt=et&&et.indexOf("msie 9.0")>0,it=et&&et.indexOf("edge/")>0;et&&et.indexOf("android");var ot=et&&/iphone|ipad|ipod|ios/.test(et);et&&/chrome\/\d+/.test(et),et&&/phantomjs/.test(et);var st,at=et&&et.match(/firefox\/(\d+)/),ct={}.watch,ut=!1;if(tt)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){ut=!0}}),window.addEventListener("test-passive",null,lt)}catch(Zs){}var ht=function(){return void 0===st&&(st=!tt&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),st},ft=tt&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function dt(t){return"function"===typeof t&&/native code/.test(t.toString())}var pt,gt="undefined"!==typeof Symbol&&dt(Symbol)&&"undefined"!==typeof Reflect&&dt(Reflect.ownKeys);pt="undefined"!==typeof Set&&dt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var vt=null;function mt(t){void 0===t&&(t=null),t||vt&&vt._scope.off(),vt=t,t&&t._scope.on()}var yt=function(){function t(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),wt=function(t){void 0===t&&(t="");var e=new yt;return e.text=t,e.isComment=!0,e};function bt(t){return new yt(void 0,void 0,void 0,String(t))}function _t(t){var e=new yt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}"function"===typeof SuppressedError&&SuppressedError;var Et=0,It=[],Tt=function(){for(var t=0;t<It.length;t++){var e=It[t];e.subs=e.subs.filter(function(t){return t}),e._pending=!1}It.length=0},St=function(){function t(){this._pending=!1,this.id=Et++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,It.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter(function(t){return t});for(var n=0,r=e.length;n<r;n++){var i=e[n];0,i.update()}},t}();St.target=null;var At=[];function Ct(t){At.push(t),St.target=t}function kt(){At.pop(),St.target=At[At.length-1]}var xt=Array.prototype,Ot=Object.create(xt),Rt=["push","pop","shift","unshift","splice","sort","reverse"];Rt.forEach(function(t){var e=xt[t];Y(Ot,t,function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o})});var Nt=Object.getOwnPropertyNames(Ot),Dt={},Pt=!0;function Lt(t){Pt=t}var Mt={notify:F,depend:F,addSub:F,removeSub:F},Ft=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Mt:new St,this.vmCount=0,Y(t,"__ob__",this),i(t)){if(!n)if(Z)t.__proto__=Ot;else for(var r=0,o=Nt.length;r<o;r++){var s=Nt[r];Y(t,s,Ot[s])}e||this.observeArray(t)}else{var a=Object.keys(t);for(r=0;r<a.length;r++){s=a[r];jt(t,s,Dt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ut(t[e],!1,this.mock)},t}();function Ut(t,e,n){return t&&T(t,"__ob__")&&t.__ob__ instanceof Ft?t.__ob__:!Pt||!n&&ht()||!i(t)&&!d(t)||!Object.isExtensible(t)||t.__v_skip||Ht(t)||t instanceof yt?void 0:new Ft(t,e,n)}function jt(t,e,n,r,o,s,a){void 0===a&&(a=!1);var c=new St,u=Object.getOwnPropertyDescriptor(t,e);if(!u||!1!==u.configurable){var l=u&&u.get,h=u&&u.set;l&&!h||n!==Dt&&2!==arguments.length||(n=t[e]);var f=o?n&&n.__ob__:Ut(n,!1,s);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=l?l.call(t):n;return St.target&&(c.depend(),f&&(f.dep.depend(),i(e)&&Bt(e))),Ht(e)&&!o?e.value:e},set:function(e){var r=l?l.call(t):n;if(q(r,e)){if(h)h.call(t,e);else{if(l)return;if(!o&&Ht(r)&&!Ht(e))return void(r.value=e);n=e}f=o?e&&e.__ob__:Ut(e,!1,s),c.notify()}}}),c}}function Vt(t,e,n){if(!Kt(t)){var r=t.__ob__;return i(t)&&g(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),r&&!r.shallow&&r.mock&&Ut(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||r&&r.vmCount?n:r?(jt(r.value,e,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(t[e]=n,n)}}function $t(t,e){if(i(t)&&g(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||Kt(t)||T(t,e)&&(delete t[e],n&&n.dep.notify())}}function Bt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),i(e)&&Bt(e)}function qt(t){return zt(t,!0),Y(t,"__v_isShallow",!0),t}function zt(t,e){if(!Kt(t)){Ut(t,e,ht());0}}function Kt(t){return!(!t||!t.__v_isReadonly)}function Ht(t){return!(!t||!0!==t.__v_isRef)}function Gt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Ht(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Ht(r)&&!Ht(t)?r.value=t:e[n]=t}})}var Wt="watcher";"".concat(Wt," callback"),"".concat(Wt," getter"),"".concat(Wt," cleanup");var Qt;var Yt=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qt,!t&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Qt;try{return Qt=this,t()}finally{Qt=e}}else 0},t.prototype.on=function(){Qt=this},t.prototype.off=function(){Qt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Jt(t,e){void 0===e&&(e=Qt),e&&e.active&&e.effects.push(t)}function Xt(){return Qt}function Zt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var te=S(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function ee(t,e){function n(){var t=n.fns;if(!i(t))return Je(t,null,arguments,e,"v-on handler");for(var r=t.slice(),o=0;o<r.length;o++)Je(r[o],null,arguments,e,"v-on handler")}return n.fns=t,n}function ne(t,e,n,r,i,s){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=te(c),o(u)||(o(l)?(o(u.fns)&&(u=t[c]=ee(u,s)),a(h.once)&&(u=t[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)o(t[c])&&(h=te(c),r(h.name,e[c],h.capture))}function re(t,e,n){var r;t instanceof yt&&(t=t.data.hook||(t.data.hook={}));var i=t[e];function c(){n.apply(this,arguments),E(r.fns,c)}o(i)?r=ee([c]):s(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=ee([i,c]),r.merged=!0,t[e]=r}function ie(t,e,n){var r=e.options.props;if(!o(r)){var i={},a=t.attrs,c=t.props;if(s(a)||s(c))for(var u in r){var l=O(u);oe(i,c,u,l,!0)||oe(i,a,u,l,!1)}return i}}function oe(t,e,n,r,i){if(s(e)){if(T(e,n))return t[n]=e[n],i||delete e[n],!0;if(T(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function se(t){for(var e=0;e<t.length;e++)if(i(t[e]))return Array.prototype.concat.apply([],t);return t}function ae(t){return u(t)?[bt(t)]:i(t)?ue(t):void 0}function ce(t){return s(t)&&s(t.text)&&c(t.isComment)}function ue(t,e){var n,r,c,l,h=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=ue(r,"".concat(e||"","_").concat(n)),ce(r[0])&&ce(l)&&(h[c]=bt(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?ce(l)?h[c]=bt(l.text+r):""!==r&&h.push(bt(r)):ce(r)&&ce(l)?h[c]=bt(l.text+r.text):(a(t._isVList)&&s(r.tag)&&o(r.key)&&s(e)&&(r.key="__vlist".concat(e,"_").concat(n,"__")),h.push(r)));return h}function le(t,e){var n,r,o,a,c=null;if(i(t)||"string"===typeof t)for(c=new Array(t.length),n=0,r=t.length;n<r;n++)c[n]=e(t[n],n);else if("number"===typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(h(t))if(gt&&t[Symbol.iterator]){c=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)c.push(e(l.value,c.length)),l=u.next()}else for(o=Object.keys(t),c=new Array(o.length),n=0,r=o.length;n<r;n++)a=o[n],c[n]=e(t[a],a,n);return s(c)||(c=[]),c._isVList=!0,c}function he(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=L(L({},r),n)),i=o(n)||(l(e)?e():e)):i=this.$slots[t]||(l(e)?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function fe(t){return Sr(this.$options,"filters",t,!0)||j}function de(t,e){return i(t)?-1===t.indexOf(e):t!==e}function pe(t,e,n,r,i){var o=G.keyCodes[e]||n;return i&&r&&!G.keyCodes[e]?de(i,r):o?de(o,t):r?O(r)!==e:void 0===t}function ge(t,e,n,r,o){if(n)if(h(n)){i(n)&&(n=M(n));var s=void 0,a=function(i){if("class"===i||"style"===i||_(i))s=t;else{var a=t.attrs&&t.attrs.type;s=r||G.mustUseProp(e,a,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=C(i),u=O(i);if(!(c in s)&&!(u in s)&&(s[i]=n[i],o)){var l=t.on||(t.on={});l["update:".concat(i)]=function(t){n[i]=t}}};for(var c in n)a(c)}else;return t}function ve(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),ye(r,"__static__".concat(t),!1)),r}function me(t,e,n){return ye(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function ye(t,e,n){if(i(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&we(t[r],"".concat(e,"_").concat(r),n);else we(t,e,n)}function we(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function be(t,e){if(e)if(d(e)){var n=t.on=t.on?L({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function _e(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var s=t[o];i(s)?_e(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function Ee(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ie(t,e){return"string"===typeof t?e+t:t}function Te(t){t._o=me,t._n=w,t._s=m,t._l=le,t._t=he,t._q=V,t._i=$,t._m=ve,t._f=fe,t._k=pe,t._b=ge,t._v=bt,t._e=wt,t._u=_e,t._g=be,t._d=Ee,t._p=Ie}function Se(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Ae)&&delete n[u];return n}function Ae(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ce(t){return t.isComment&&t.asyncFactory}function ke(t,e,n,i){var o,s=Object.keys(n).length>0,a=e?!!e.$stable:!s,c=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&i&&i!==r&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var u in o={},e)e[u]&&"$"!==u[0]&&(o[u]=xe(t,n,u,e[u]))}else o={};for(var l in n)l in o||(o[l]=Oe(n,l));return e&&Object.isExtensible(e)&&(e._normalized=o),Y(o,"$stable",a),Y(o,"$key",c),Y(o,"$hasNormal",s),o}function xe(t,e,n,r){var o=function(){var e=vt;mt(t);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:ae(n);var o=n&&n[0];return mt(e),n&&(!o||1===n.length&&o.isComment&&!Ce(o))?void 0:n};return r.proxy&&Object.defineProperty(e,n,{get:o,enumerable:!0,configurable:!0}),o}function Oe(t,e){return function(){return t[e]}}function Re(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=Ne(t);mt(t),Ct();var i=Je(n,null,[t._props||qt({}),r],t,"setup");if(kt(),mt(),l(i))e.render=i;else if(h(i))if(t._setupState=i,i.__sfc){var o=t._setupProxy={};for(var s in i)"__sfc"!==s&&Gt(o,i,s)}else for(var s in i)Q(s)||Gt(t,i,s);else 0}}function Ne(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};Y(e,"_v_attr_proxy",!0),De(e,t.$attrs,r,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};De(e,t.$listeners,r,t,"$listeners")}return t._listenersProxy},get slots(){return Le(t)},emit:D(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach(function(n){return Gt(t,e,n)})}}}function De(t,e,n,r,i){var o=!1;for(var s in e)s in t?e[s]!==n[s]&&(o=!0):(o=!0,Pe(t,s,r,i));for(var s in t)s in e||(o=!0,delete t[s]);return o}function Pe(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function Le(t){return t._slotsProxy||Me(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function Me(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Fe(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=Se(e._renderChildren,i),t.$scopedSlots=n?ke(t.$parent,n.data.scopedSlots,t.$slots):r,t._c=function(e,n,r,i){return He(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return He(t,e,n,r,i,!0)};var o=n&&n.data;jt(t,"$attrs",o&&o.attrs||r,null,!0),jt(t,"$listeners",e._parentListeners||r,null,!0)}var Ue=null;function je(t){Te(t.prototype),t.prototype.$nextTick=function(t){return ln(t,this)},t.prototype._render=function(){var t=this,e=t.$options,n=e.render,r=e._parentVnode;r&&t._isMounted&&(t.$scopedSlots=ke(t.$parent,r.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Me(t._slotsProxy,t.$scopedSlots)),t.$vnode=r;var o,s=vt,a=Ue;try{mt(t),Ue=t,o=n.call(t._renderProxy,t.$createElement)}catch(Zs){Ye(Zs,t,"render"),o=t._vnode}finally{Ue=a,mt(s)}return i(o)&&1===o.length&&(o=o[0]),o instanceof yt||(o=wt()),o.parent=r,o}}function Ve(t,e){return(t.__esModule||gt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function $e(t,e,n,r,i){var o=wt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function Be(t,e){if(a(t.error)&&s(t.errorComp))return t.errorComp;if(s(t.resolved))return t.resolved;var n=Ue;if(n&&s(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&s(t.loadingComp))return t.loadingComp;if(n&&!s(t.owners)){var r=t.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",function(){return E(r,n)});var l=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},f=B(function(n){t.resolved=Ve(n,e),i?r.length=0:l(!0)}),d=B(function(e){s(t.errorComp)&&(t.error=!0,l(!0))}),p=t(f,d);return h(p)&&(v(p)?o(t.resolved)&&p.then(f,d):v(p.component)&&(p.component.then(f,d),s(p.error)&&(t.errorComp=Ve(p.error,e)),s(p.loading)&&(t.loadingComp=Ve(p.loading,e),0===p.delay?t.loading=!0:c=setTimeout(function(){c=null,o(t.resolved)&&o(t.error)&&(t.loading=!0,l(!1))},p.delay||200)),s(p.timeout)&&(u=setTimeout(function(){u=null,o(t.resolved)&&d(null)},p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function qe(t){if(i(t))for(var e=0;e<t.length;e++){var n=t[e];if(s(n)&&(s(n.componentOptions)||Ce(n)))return n}}var ze=1,Ke=2;function He(t,e,n,r,o,s){return(i(n)||u(n))&&(o=r,r=n,n=void 0),a(s)&&(o=Ke),Ge(t,e,n,r,o)}function Ge(t,e,n,r,o){if(s(n)&&s(n.__ob__))return wt();if(s(n)&&s(n.is)&&(e=n.is),!e)return wt();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===Ke?r=ae(r):o===ze&&(r=se(r)),"string"===typeof e){var u=void 0;c=t.$vnode&&t.$vnode.ns||G.getTagNamespace(e),a=G.isReservedTag(e)?new yt(G.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!s(u=Sr(t.$options,"components",e))?new yt(e,n,r,void 0,void 0,t):cr(u,n,t,r,e)}else a=cr(e,n,t,r);return i(a)?a:s(a)?(s(c)&&We(a,c),s(n)&&Qe(n),a):wt()}function We(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),s(t.children))for(var r=0,i=t.children.length;r<i;r++){var c=t.children[r];s(c.tag)&&(o(c.ns)||a(n)&&"svg"!==c.tag)&&We(c,e,n)}}function Qe(t){h(t.style)&&gn(t.style),h(t.class)&&gn(t.class)}function Ye(t,e,n){Ct();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(Zs){Xe(Zs,r,"errorCaptured hook")}}}Xe(t,e,n)}finally{kt()}}function Je(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&v(o)&&!o._handled&&(o.catch(function(t){return Ye(t,r,i+" (Promise/async)")}),o._handled=!0)}catch(Zs){Ye(Zs,r,i)}return o}function Xe(t,e,n){if(G.errorHandler)try{return G.errorHandler.call(null,t,e,n)}catch(Zs){Zs!==t&&Ze(Zs,null,"config.errorHandler")}Ze(t,e,n)}function Ze(t,e,n){if(!tt||"undefined"===typeof console)throw t;console.error(t)}var tn,en=!1,nn=[],rn=!1;function on(){rn=!1;var t=nn.slice(0);nn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&dt(Promise)){var sn=Promise.resolve();tn=function(){sn.then(on),ot&&setTimeout(F)},en=!0}else if(nt||"undefined"===typeof MutationObserver||!dt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())tn="undefined"!==typeof setImmediate&&dt(setImmediate)?function(){setImmediate(on)}:function(){setTimeout(on,0)};else{var an=1,cn=new MutationObserver(on),un=document.createTextNode(String(an));cn.observe(un,{characterData:!0}),tn=function(){an=(an+1)%2,un.data=String(an)},en=!0}function ln(t,e){var n;if(nn.push(function(){if(t)try{t.call(e)}catch(Zs){Ye(Zs,e,"nextTick")}else n&&n(e)}),rn||(rn=!0,tn()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}function hn(t){return function(e,n){if(void 0===n&&(n=vt),n)return fn(n,t,e)}}function fn(t,e,n){var r=t.$options;r[e]=mr(r[e],n)}hn("beforeMount"),hn("mounted"),hn("beforeUpdate"),hn("updated"),hn("beforeDestroy"),hn("destroyed"),hn("activated"),hn("deactivated"),hn("serverPrefetch"),hn("renderTracked"),hn("renderTriggered"),hn("errorCaptured");var dn="2.7.16";var pn=new pt;function gn(t){return vn(t,pn),pn.clear(),t}function vn(t,e){var n,r,o=i(t);if(!(!o&&!h(t)||t.__v_skip||Object.isFrozen(t)||t instanceof yt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(o){n=t.length;while(n--)vn(t[n],e)}else if(Ht(t))vn(t.value,e);else{r=Object.keys(t),n=r.length;while(n--)vn(t[r[n]],e)}}}var mn,yn=0,wn=function(){function t(t,e,n,r,i){Jt(this,Qt&&!Qt._vm?Qt:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++yn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pt,this.newDepIds=new pt,this.expression="",l(e)?this.getter=e:(this.getter=X(e),this.getter||(this.getter=F)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;Ct(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Zs){if(!this.user)throw Zs;Ye(Zs,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&gn(t),kt(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Jn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Je(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&E(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function bn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Tn(t,e)}function _n(t,e){mn.$on(t,e)}function En(t,e){mn.$off(t,e)}function In(t,e){var n=mn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function Tn(t,e,n){mn=t,ne(e,n||{},_n,En,In,t),mn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(i(t))for(var o=0,s=t.length;o<s;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var s,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var c=a.length;while(c--)if(s=a[c],s===e||s.fn===e){a.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?P(n):n;for(var r=P(arguments,1),i='event handler for "'.concat(t,'"'),o=0,s=n.length;o<s;o++)Je(n[o],e,r,e,i)}return e}}var An=null;function Cn(t){var e=An;return An=t,function(){An=e}}function kn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function xn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=Cn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var s=n;while(s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode)s.$parent.$el=s.$el,s=s.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Ln(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||E(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Ln(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function On(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=wt),Ln(t,"beforeMount"),r=function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&Ln(t,"beforeUpdate")}};new wn(t,r,F,i,!0),n=!1;var o=t._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==t.$vnode&&(t._isMounted=!0,Ln(t,"mounted")),t}function Rn(t,e,n,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c),l=t.$vnode;t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o;var h=i.data.attrs||r;t._attrsProxy&&De(t._attrsProxy,h,l.data&&l.data.attrs||r,t,"$attrs")&&(u=!0),t.$attrs=h,n=n||r;var f=t.$options._parentListeners;if(t._listenersProxy&&De(t._listenersProxy,n,f||r,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,Tn(t,n,f),e&&t.$options.props){Lt(!1);for(var d=t._props,p=t.$options._propKeys||[],g=0;g<p.length;g++){var v=p[g],m=t.$options.props;d[v]=Ar(v,m,e,t)}Lt(!0),t.$options.propsData=e}u&&(t.$slots=Se(o,i.context),t.$forceUpdate())}function Nn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,Nn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Ln(t,"activated")}}function Pn(t,e){if((!e||(t._directInactive=!0,!Nn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);Ln(t,"deactivated")}}function Ln(t,e,n,r){void 0===r&&(r=!0),Ct();var i=vt,o=Xt();r&&mt(t);var s=t.$options[e],a="".concat(e," hook");if(s)for(var c=0,u=s.length;c<u;c++)Je(s[c],t,n||null,t,a);t._hasHookEvent&&t.$emit("hook:"+e),r&&(mt(i),o&&o.on()),kt()}var Mn=[],Fn=[],Un={},jn=!1,Vn=!1,$n=0;function Bn(){$n=Mn.length=Fn.length=0,Un={},jn=Vn=!1}var qn=0,zn=Date.now;if(tt&&!nt){var Kn=window.performance;Kn&&"function"===typeof Kn.now&&zn()>document.createEvent("Event").timeStamp&&(zn=function(){return Kn.now()})}var Hn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Gn(){var t,e;for(qn=zn(),Vn=!0,Mn.sort(Hn),$n=0;$n<Mn.length;$n++)t=Mn[$n],t.before&&t.before(),e=t.id,Un[e]=null,t.run();var n=Fn.slice(),r=Mn.slice();Bn(),Yn(n),Wn(r),Tt(),ft&&G.devtools&&ft.emit("flush")}function Wn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Ln(r,"updated")}}function Qn(t){t._inactive=!1,Fn.push(t)}function Yn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function Jn(t){var e=t.id;if(null==Un[e]&&(t!==St.target||!t.noRecurse)){if(Un[e]=!0,Vn){var n=Mn.length-1;while(n>$n&&Mn[n].id>t.id)n--;Mn.splice(n+1,0,t)}else Mn.push(t);jn||(jn=!0,ln(Gn))}}function Xn(t){var e=t.$options.provide;if(e){var n=l(e)?e.call(t):e;if(!h(n))return;for(var r=Zt(t),i=gt?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Zn(t){var e=tr(t.$options.inject,t);e&&(Lt(!1),Object.keys(e).forEach(function(n){jt(t,n,e[n])}),Lt(!0))}function tr(t,e){if(t){for(var n=Object.create(null),r=gt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from;if(s in e._provided)n[o]=e._provided[s];else if("default"in t[o]){var a=t[o].default;n[o]=l(a)?a.call(e):a}else 0}}return n}}function er(t,e,n,o,s){var c,u=this,l=s.options;T(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var h=a(l._compiled),f=!h;this.data=t,this.props=e,this.children=n,this.parent=o,this.listeners=t.on||r,this.injections=tr(l.inject,o),this.slots=function(){return u.$slots||ke(o,t.scopedSlots,u.$slots=Se(n,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(o,t.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=ke(o,t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,r){var s=He(c,t,e,n,r,f);return s&&!i(s)&&(s.fnScopeId=l._scopeId,s.fnContext=o),s}:this._c=function(t,e,n,r){return He(c,t,e,n,r,f)}}function nr(t,e,n,o,a){var c=t.options,u={},l=c.props;if(s(l))for(var h in l)u[h]=Ar(h,l,e||r);else s(n.attrs)&&ir(u,n.attrs),s(n.props)&&ir(u,n.props);var f=new er(n,u,a,o,t),d=c.render.call(null,f._c,f);if(d instanceof yt)return rr(d,n,f.parent,c,f);if(i(d)){for(var p=ae(d)||[],g=new Array(p.length),v=0;v<p.length;v++)g[v]=rr(p[v],n,f.parent,c,f);return g}}function rr(t,e,n,r,i){var o=_t(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function ir(t,e){for(var n in e)t[C(n)]=e[n]}function or(t){return t.name||t.__name||t._componentTag}Te(er.prototype);var sr={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;sr.prepatch(n,n)}else{var r=t.componentInstance=ur(t,An);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Rn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Ln(n,"mounted")),t.data.keepAlive&&(e._isMounted?Qn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pn(e,!0):e.$destroy())}},ar=Object.keys(sr);function cr(t,e,n,r,i){if(!o(t)){var c=n.$options._base;if(h(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(o(t.cid)&&(u=t,t=Be(u,c),void 0===t))return $e(u,e,n,r,i);e=e||{},Yr(t),s(e.model)&&fr(t.options,e);var l=ie(e,t,i);if(a(t.options.functional))return nr(t,l,e,n,r);var f=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}lr(e);var p=or(t.options)||i,g=new yt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:f,tag:i,children:r},u);return g}}}function ur(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function lr(t){for(var e=t.hook||(t.hook={}),n=0;n<ar.length;n++){var r=ar[n],i=e[r],o=sr[r];i===o||i&&i._merged||(e[r]=i?hr(o,i):o)}}function hr(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function fr(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],c=e.model.callback;s(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(o[r]=[c].concat(a)):o[r]=c}var dr=F,pr=G.optionMergeStrategies;function gr(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var r,i,o,s=gt?Reflect.ownKeys(e):Object.keys(e),a=0;a<s.length;a++)r=s[a],"__ob__"!==r&&(i=t[r],o=e[r],n&&T(t,r)?i!==o&&d(i)&&d(o)&&gr(i,o):Vt(t,r,o));return t}function vr(t,e,n){return n?function(){var r=l(e)?e.call(n,n):e,i=l(t)?t.call(n,n):t;return r?gr(r,i):i}:e?t?function(){return gr(l(e)?e.call(this,this):e,l(t)?t.call(this,this):t)}:e:t}function mr(t,e){var n=e?t?t.concat(e):i(e)?e:[e]:t;return n?yr(n):n}function yr(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function wr(t,e,n,r){var i=Object.create(t||null);return e?L(i,e):i}pr.data=function(t,e,n){return n?vr(t,e,n):e&&"function"!==typeof e?t:vr(t,e)},H.forEach(function(t){pr[t]=mr}),K.forEach(function(t){pr[t+"s"]=wr}),pr.watch=function(t,e,n,r){if(t===ct&&(t=void 0),e===ct&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var s in L(o,t),e){var a=o[s],c=e[s];a&&!i(a)&&(a=[a]),o[s]=a?a.concat(c):i(c)?c:[c]}return o},pr.props=pr.methods=pr.inject=pr.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return L(i,t),e&&L(i,e),i},pr.provide=function(t,e){return t?function(){var n=Object.create(null);return gr(n,l(t)?t.call(this):t),e&&gr(n,l(e)?e.call(this):e,!1),n}:e};var br=function(t,e){return void 0===e?t:e};function _r(t,e){var n=t.props;if(n){var r,o,s,a={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(s=C(o),a[s]={type:null})}else if(d(n))for(var c in n)o=n[c],s=C(c),a[s]=d(o)?o:{type:o};else 0;t.props=a}}function Er(t,e){var n=t.inject;if(n){var r=t.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(d(n))for(var s in n){var a=n[s];r[s]=d(a)?L({from:s},a):{from:a}}else 0}}function Ir(t){var e=t.directives;if(e)for(var n in e){var r=e[n];l(r)&&(e[n]={bind:r,update:r})}}function Tr(t,e,n){if(l(e)&&(e=e.options),_r(e,n),Er(e,n),Ir(e),!e._base&&(e.extends&&(t=Tr(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Tr(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)T(t,o)||a(o);function a(r){var i=pr[r]||br;s[r]=i(t[r],e[r],n,r)}return s}function Sr(t,e,n,r){if("string"===typeof n){var i=t[e];if(T(i,n))return i[n];var o=C(n);if(T(i,o))return i[o];var s=k(o);if(T(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Ar(t,e,n,r){var i=e[t],o=!T(n,t),s=n[t],a=Rr(Boolean,i.type);if(a>-1)if(o&&!T(i,"default"))s=!1;else if(""===s||s===O(t)){var c=Rr(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Cr(r,i,t);var u=Pt;Lt(!0),Ut(s),Lt(u)}return s}function Cr(t,e,n){if(T(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:l(r)&&"Function"!==xr(e.type)?r.call(t):r}}var kr=/^\s*function (\w+)/;function xr(t){var e=t&&t.toString().match(kr);return e?e[1]:""}function Or(t,e){return xr(t)===xr(e)}function Rr(t,e){if(!i(e))return Or(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Or(e[n],t))return n;return-1}var Nr={enumerable:!0,configurable:!0,get:F,set:F};function Dr(t,e,n){Nr.get=function(){return this[e][n]},Nr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Nr)}function Pr(t){var e=t.$options;if(e.props&&Lr(t,e.props),Re(t),e.methods&&qr(t,e.methods),e.data)Mr(t);else{var n=Ut(t._data={});n&&n.vmCount++}e.computed&&jr(t,e.computed),e.watch&&e.watch!==ct&&zr(t,e.watch)}function Lr(t,e){var n=t.$options.propsData||{},r=t._props=qt({}),i=t.$options._propKeys=[],o=!t.$parent;o||Lt(!1);var s=function(o){i.push(o);var s=Ar(o,e,n,t);jt(r,o,s,void 0,!0),o in t||Dr(t,"_props",o)};for(var a in e)s(a);Lt(!0)}function Mr(t){var e=t.$options.data;e=t._data=l(e)?Fr(e,t):e||{},d(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&T(r,o)||Q(o)||Dr(t,"_data",o)}var s=Ut(e);s&&s.vmCount++}function Fr(t,e){Ct();try{return t.call(e,e)}catch(Zs){return Ye(Zs,e,"data()"),{}}finally{kt()}}var Ur={lazy:!0};function jr(t,e){var n=t._computedWatchers=Object.create(null),r=ht();for(var i in e){var o=e[i],s=l(o)?o:o.get;0,r||(n[i]=new wn(t,s||F,F,Ur)),i in t||Vr(t,i,o)}}function Vr(t,e,n){var r=!ht();l(n)?(Nr.get=r?$r(e):Br(n),Nr.set=F):(Nr.get=n.get?r&&!1!==n.cache?$r(e):Br(n.get):F,Nr.set=n.set||F),Object.defineProperty(t,e,Nr)}function $r(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),St.target&&e.depend(),e.value}}function Br(t){return function(){return t.call(this,this)}}function qr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?F:D(e[n],t)}function zr(t,e){for(var n in e){var r=e[n];if(i(r))for(var o=0;o<r.length;o++)Kr(t,n,r[o]);else Kr(t,n,r)}}function Kr(t,e,n,r){return d(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Hr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Vt,t.prototype.$delete=$t,t.prototype.$watch=function(t,e,n){var r=this;if(d(e))return Kr(r,t,e,n);n=n||{},n.user=!0;var i=new wn(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');Ct(),Je(e,r,[i.value],r,o),kt()}return function(){i.teardown()}}}var Gr=0;function Wr(t){t.prototype._init=function(t){var e=this;e._uid=Gr++,e._isVue=!0,e.__v_skip=!0,e._scope=new Yt(!0),e._scope.parent=void 0,e._scope._vm=!0,t&&t._isComponent?Qr(e,t):e.$options=Tr(Yr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,kn(e),bn(e),Fe(e),Ln(e,"beforeCreate",void 0,!1),Zn(e),Pr(e),Xn(e),Ln(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Qr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Yr(t){var e=t.options;if(t.super){var n=Yr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Jr(t);i&&L(t.extendOptions,i),e=t.options=Tr(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Jr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Xr(t){this._init(t)}function Zr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),l(t.install)?t.install.apply(t,n):l(t)&&t.apply(null,n),e.push(t),this}}function ti(t){t.mixin=function(t){return this.options=Tr(this.options,t),this}}function ei(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=or(t)||or(n.options);var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Tr(n.options,t),s["super"]=n,s.options.props&&ni(s),s.options.computed&&ri(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,K.forEach(function(t){s[t]=n[t]}),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=L({},s.options),i[r]=s,s}}function ni(t){var e=t.options.props;for(var n in e)Dr(t.prototype,"_props",n)}function ri(t){var e=t.options.computed;for(var n in e)Vr(t.prototype,n,e[n])}function ii(t){K.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&d(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&l(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function oi(t){return t&&(or(t.Ctor.options)||t.tag)}function si(t,e){return i(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function ai(t,e){var n=t.cache,r=t.keys,i=t._vnode,o=t.$vnode;for(var s in n){var a=n[s];if(a){var c=a.name;c&&!e(c)&&ci(n,s,r,i)}}o.componentOptions.children=void 0}function ci(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,E(n,e)}Wr(Xr),Hr(Xr),Sn(Xr),xn(Xr),je(Xr);var ui=[String,RegExp,Array],li={name:"keep-alive",abstract:!0,props:{include:ui,exclude:ui,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:oi(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&ci(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)ci(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",function(e){ai(t,function(t){return si(e,t)})}),this.$watch("exclude",function(e){ai(t,function(t){return!si(e,t)})})},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=qe(t),n=e&&e.componentOptions;if(n){var r=oi(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!si(o,r))||s&&r&&si(s,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,E(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},hi={KeepAlive:li};function fi(t){var e={get:function(){return G}};Object.defineProperty(t,"config",e),t.util={warn:dr,extend:L,mergeOptions:Tr,defineReactive:jt},t.set=Vt,t.delete=$t,t.nextTick=ln,t.observable=function(t){return Ut(t),t},t.options=Object.create(null),K.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,L(t.options.components,hi),Zr(t),ti(t),ei(t),ii(t)}fi(Xr),Object.defineProperty(Xr.prototype,"$isServer",{get:ht}),Object.defineProperty(Xr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Xr,"FunctionalRenderContext",{value:er}),Xr.version=dn;var di=b("style,class"),pi=b("input,textarea,option,select,progress"),gi=function(t,e,n){return"value"===n&&pi(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},vi=b("contenteditable,draggable,spellcheck"),mi=b("events,caret,typing,plaintext-only"),yi=function(t,e){return Ii(e)||"false"===e?"false":"contenteditable"===t&&mi(e)?e:"true"},wi=b("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),bi="http://www.w3.org/1999/xlink",_i=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Ei=function(t){return _i(t)?t.slice(6,t.length):""},Ii=function(t){return null==t||!1===t};function Ti(t){var e=t.data,n=t,r=t;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Si(r.data,e));while(s(n=n.parent))n&&n.data&&(e=Si(e,n.data));return Ai(e.staticClass,e.class)}function Si(t,e){return{staticClass:Ci(t.staticClass,e.staticClass),class:s(t.class)?[t.class,e.class]:e.class}}function Ai(t,e){return s(t)||s(e)?Ci(t,ki(e)):""}function Ci(t,e){return t?e?t+" "+e:t:e||""}function ki(t){return Array.isArray(t)?xi(t):h(t)?Oi(t):"string"===typeof t?t:""}function xi(t){for(var e,n="",r=0,i=t.length;r<i;r++)s(e=ki(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Oi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Ni=b("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Di=b("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Pi=function(t){return Ni(t)||Di(t)};function Li(t){return Di(t)?"svg":"math"===t?"math":void 0}var Mi=Object.create(null);function Fi(t){if(!tt)return!0;if(Pi(t))return!1;if(t=t.toLowerCase(),null!=Mi[t])return Mi[t];var e=document.createElement(t);return t.indexOf("-")>-1?Mi[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Mi[t]=/HTMLUnknownElement/.test(e.toString())}var Ui=b("text,number,password,search,email,tel,url");function ji(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Vi(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function $i(t,e){return document.createElementNS(Ri[t],e)}function Bi(t){return document.createTextNode(t)}function qi(t){return document.createComment(t)}function zi(t,e,n){t.insertBefore(e,n)}function Ki(t,e){t.removeChild(e)}function Hi(t,e){t.appendChild(e)}function Gi(t){return t.parentNode}function Wi(t){return t.nextSibling}function Qi(t){return t.tagName}function Yi(t,e){t.textContent=e}function Ji(t,e){t.setAttribute(e,"")}var Xi=Object.freeze({__proto__:null,createElement:Vi,createElementNS:$i,createTextNode:Bi,createComment:qi,insertBefore:zi,removeChild:Ki,appendChild:Hi,parentNode:Gi,nextSibling:Wi,tagName:Qi,setTextContent:Yi,setStyleScope:Ji}),Zi={create:function(t,e){to(e)},update:function(t,e){t.data.ref!==e.data.ref&&(to(t,!0),to(e))},destroy:function(t){to(t,!0)}};function to(t,e){var n=t.data.ref;if(s(n)){var r=t.context,o=t.componentInstance||t.elm,a=e?null:o,c=e?void 0:o;if(l(n))Je(n,r,[a],r,"template ref function");else{var u=t.data.refInFor,h="string"===typeof n||"number"===typeof n,f=Ht(n),d=r.$refs;if(h||f)if(u){var p=h?d[n]:n.value;e?i(p)&&E(p,o):i(p)?p.includes(o)||p.push(o):h?(d[n]=[o],eo(r,n,d[n])):n.value=[o]}else if(h){if(e&&d[n]!==o)return;d[n]=c,eo(r,n,a)}else if(f){if(e&&n.value!==o)return;n.value=a}else 0}}}function eo(t,e,n){var r=t._setupState;r&&T(r,e)&&(Ht(r[e])?r[e].value=n:r[e]=n)}var no=new yt("",{},[]),ro=["create","activate","update","remove","destroy"];function io(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&s(t.data)===s(e.data)&&oo(t,e)||a(t.isAsyncPlaceholder)&&o(e.asyncFactory.error))}function oo(t,e){if("input"!==t.tag)return!0;var n,r=s(n=t.data)&&s(n=n.attrs)&&n.type,i=s(n=e.data)&&s(n=n.attrs)&&n.type;return r===i||Ui(r)&&Ui(i)}function so(t,e,n){var r,i,o={};for(r=e;r<=n;++r)i=t[r].key,s(i)&&(o[i]=r);return o}function ao(t){var e,n,r={},c=t.modules,l=t.nodeOps;for(e=0;e<ro.length;++e)for(r[ro[e]]=[],n=0;n<c.length;++n)s(c[n][ro[e]])&&r[ro[e]].push(c[n][ro[e]]);function h(t){return new yt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=l.parentNode(t);s(e)&&l.removeChild(e,t)}function p(t,e,n,r,i,o,c){if(s(t.elm)&&s(o)&&(t=o[c]=_t(t)),t.isRootInsert=!i,!g(t,e,n,r)){var u=t.data,h=t.children,f=t.tag;s(f)?(t.elm=t.ns?l.createElementNS(t.ns,f):l.createElement(f,t),I(t),w(t,h,e),s(u)&&E(t,e),y(n,t.elm,r)):a(t.isComment)?(t.elm=l.createComment(t.text),y(n,t.elm,r)):(t.elm=l.createTextNode(t.text),y(n,t.elm,r))}}function g(t,e,n,r){var i=t.data;if(s(i)){var o=s(t.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(t,!1),s(t.componentInstance))return v(t,e),y(n,t.elm,r),a(o)&&m(t,e,n,r),!0}}function v(t,e){s(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,_(t)?(E(t,e),I(t)):(to(t),e.push(t))}function m(t,e,n,i){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](no,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){s(t)&&(s(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function w(t,e,n){if(i(e)){0;for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0,e,r)}else u(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function _(t){while(t.componentInstance)t=t.componentInstance._vnode;return s(t.tag)}function E(t,n){for(var i=0;i<r.create.length;++i)r.create[i](no,t);e=t.data.hook,s(e)&&(s(e.create)&&e.create(no,t),s(e.insert)&&n.push(t))}function I(t){var e;if(s(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)s(e=n.context)&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}s(e=An)&&e!==t.context&&e!==t.fnContext&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function T(t,e,n,r,i,o){for(;r<=i;++r)p(n[r],o,t,e,!1,n,r)}function S(t){var e,n,i=t.data;if(s(i))for(s(e=i.hook)&&s(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(s(e=t.children))for(n=0;n<t.children.length;++n)S(t.children[n])}function A(t,e,n){for(;e<=n;++e){var r=t[e];s(r)&&(s(r.tag)?(C(r),S(r)):d(r.elm))}}function C(t,e){if(s(e)||s(t.data)){var n,i=r.remove.length+1;for(s(e)?e.listeners+=i:e=f(t.elm,i),s(n=t.componentInstance)&&s(n=n._vnode)&&s(n.data)&&C(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);s(n=t.data.hook)&&s(n=n.remove)?n(t,e):e()}else d(t.elm)}function k(t,e,n,r,i){var a,c,u,h,f=0,d=0,g=e.length-1,v=e[0],m=e[g],y=n.length-1,w=n[0],b=n[y],_=!i;while(f<=g&&d<=y)o(v)?v=e[++f]:o(m)?m=e[--g]:io(v,w)?(O(v,w,r,n,d),v=e[++f],w=n[++d]):io(m,b)?(O(m,b,r,n,y),m=e[--g],b=n[--y]):io(v,b)?(O(v,b,r,n,y),_&&l.insertBefore(t,v.elm,l.nextSibling(m.elm)),v=e[++f],b=n[--y]):io(m,w)?(O(m,w,r,n,d),_&&l.insertBefore(t,m.elm,v.elm),m=e[--g],w=n[++d]):(o(a)&&(a=so(e,f,g)),c=s(w.key)?a[w.key]:x(w,e,f,g),o(c)?p(w,r,t,v.elm,!1,n,d):(u=e[c],io(u,w)?(O(u,w,r,n,d),e[c]=void 0,_&&l.insertBefore(t,u.elm,v.elm)):p(w,r,t,v.elm,!1,n,d)),w=n[++d]);f>g?(h=o(n[y+1])?null:n[y+1].elm,T(t,h,n,d,y,r)):d>y&&A(e,f,g)}function x(t,e,n,r){for(var i=n;i<r;i++){var o=e[i];if(s(o)&&io(t,o))return i}}function O(t,e,n,i,c,u){if(t!==e){s(e.elm)&&s(i)&&(e=i[c]=_t(e));var h=e.elm=t.elm;if(a(t.isAsyncPlaceholder))s(e.asyncFactory.resolved)?D(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;s(d)&&s(f=d.hook)&&s(f=f.prepatch)&&f(t,e);var p=t.children,g=e.children;if(s(d)&&_(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);s(f=d.hook)&&s(f=f.update)&&f(t,e)}o(e.text)?s(p)&&s(g)?p!==g&&k(h,p,g,n,u):s(g)?(s(t.text)&&l.setTextContent(h,""),T(h,null,g,0,g.length-1,n)):s(p)?A(p,0,p.length-1):s(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),s(d)&&s(f=d.hook)&&s(f=f.postpatch)&&f(t,e)}}}function R(t,e,n){if(a(n)&&s(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var N=b("attrs,class,staticClass,staticStyle,key");function D(t,e,n,r){var i,o=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,a(e.isComment)&&s(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(e,!0),s(i=e.componentInstance)))return v(e,n),!0;if(s(o)){if(s(u))if(t.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!D(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(e,u,n);if(s(c)){var d=!1;for(var p in c)if(!N(p)){d=!0,E(e,n);break}!d&&c["class"]&&gn(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,i){if(!o(e)){var c=!1,u=[];if(o(t))c=!0,p(e,u);else{var f=s(t.nodeType);if(!f&&io(t,e))O(t,e,u,null,null,i);else{if(f){if(1===t.nodeType&&t.hasAttribute(z)&&(t.removeAttribute(z),n=!0),a(n)&&D(t,e,u))return R(e,u,!0),t;t=h(t)}var d=t.elm,g=l.parentNode(d);if(p(e,u,d._leaveCb?null:g,l.nextSibling(d)),s(e.parent)){var v=e.parent,m=_(e);while(v){for(var y=0;y<r.destroy.length;++y)r.destroy[y](v);if(v.elm=e.elm,m){for(var w=0;w<r.create.length;++w)r.create[w](no,v);var b=v.data.hook.insert;if(b.merged)for(var E=b.fns.slice(1),I=0;I<E.length;I++)E[I]()}else to(v);v=v.parent}}s(g)?A([t],0,0):s(t.tag)&&S(t)}}return R(e,u,c),e.elm}s(t)&&S(t)}}var co={create:uo,update:uo,destroy:function(t){uo(t,no)}};function uo(t,e){(t.data.directives||e.data.directives)&&lo(t,e)}function lo(t,e){var n,r,i,o=t===no,s=e===no,a=fo(t.data.directives,t.context),c=fo(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,go(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(go(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)go(u[n],"inserted",e,t)};o?re(e,"insert",h):h()}if(l.length&&re(e,"postpatch",function(){for(var n=0;n<l.length;n++)go(l[n],"componentUpdated",e,t)}),!o)for(n in a)c[n]||go(a[n],"unbind",t,t,s)}var ho=Object.create(null);function fo(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if(r=t[n],r.modifiers||(r.modifiers=ho),i[po(r)]=r,e._setupState&&e._setupState.__sfc){var o=r.def||Sr(e,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||Sr(e.$options,"directives",r.name,!0)}return i}function po(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function go(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Zs){Ye(Zs,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var vo=[Zi,co];function mo(t,e){var n=e.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(t.data.attrs)||!o(e.data.attrs))){var r,i,c,u=e.elm,l=t.data.attrs||{},h=e.data.attrs||{};for(r in(s(h.__ob__)||a(h._v_attr_proxy))&&(h=e.data.attrs=L({},h)),h)i=h[r],c=l[r],c!==i&&yo(u,r,i,e.data.pre);for(r in(nt||it)&&h.value!==l.value&&yo(u,"value",h.value),l)o(h[r])&&(_i(r)?u.removeAttributeNS(bi,Ei(r)):vi(r)||u.removeAttribute(r))}}function yo(t,e,n,r){r||t.tagName.indexOf("-")>-1?wo(t,e,n):wi(e)?Ii(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):vi(e)?t.setAttribute(e,yi(e,n)):_i(e)?Ii(n)?t.removeAttributeNS(bi,Ei(e)):t.setAttributeNS(bi,e,n):wo(t,e,n)}function wo(t,e,n){if(Ii(n))t.removeAttribute(e);else{if(nt&&!rt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var bo={create:mo,update:mo};function _o(t,e){var n=e.elm,r=e.data,i=t.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var a=Ti(e),c=n._transitionClasses;s(c)&&(a=Ci(a,ki(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Eo,Io={create:_o,update:_o},To="__r",So="__c";function Ao(t){if(s(t[To])){var e=nt?"change":"input";t[e]=[].concat(t[To],t[e]||[]),delete t[To]}s(t[So])&&(t.change=[].concat(t[So],t.change||[]),delete t[So])}function Co(t,e,n){var r=Eo;return function i(){var o=e.apply(null,arguments);null!==o&&Oo(t,i,n,r)}}var ko=en&&!(at&&Number(at[1])<=53);function xo(t,e,n,r){if(ko){var i=qn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Eo.addEventListener(t,e,ut?{capture:n,passive:r}:n)}function Oo(t,e,n,r){(r||Eo).removeEventListener(t,e._wrapper||e,n)}function Ro(t,e){if(!o(t.data.on)||!o(e.data.on)){var n=e.data.on||{},r=t.data.on||{};Eo=e.elm||t.elm,Ao(n),ne(n,r,xo,Oo,Co,e.context),Eo=void 0}}var No,Do={create:Ro,update:Ro,destroy:function(t){return Ro(t,no)}};function Po(t,e){if(!o(t.data.domProps)||!o(e.data.domProps)){var n,r,i=e.elm,c=t.data.domProps||{},u=e.data.domProps||{};for(n in(s(u.__ob__)||a(u._v_attr_proxy))&&(u=e.data.domProps=L({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=o(r)?"":String(r);Lo(i,l)&&(i.value=l)}else if("innerHTML"===n&&Di(i.tagName)&&o(i.innerHTML)){No=No||document.createElement("div"),No.innerHTML="<svg>".concat(r,"</svg>");var h=No.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Zs){}}}}function Lo(t,e){return!t.composing&&("OPTION"===t.tagName||Mo(t,e)||Fo(t,e))}function Mo(t,e){var n=!0;try{n=document.activeElement!==t}catch(Zs){}return n&&t.value!==e}function Fo(t,e){var n=t.value,r=t._vModifiers;if(s(r)){if(r.number)return w(n)!==w(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var Uo={create:Po,update:Po},jo=S(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Vo(t){var e=$o(t.style);return t.staticStyle?L(t.staticStyle,e):e}function $o(t){return Array.isArray(t)?M(t):"string"===typeof t?jo(t):t}function Bo(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=Vo(i.data))&&L(r,n)}(n=Vo(t.data))&&L(r,n);var o=t;while(o=o.parent)o.data&&(n=Vo(o.data))&&L(r,n);return r}var qo,zo=/^--/,Ko=/\s*!important$/,Ho=function(t,e,n){if(zo.test(e))t.style.setProperty(e,n);else if(Ko.test(n))t.style.setProperty(O(e),n.replace(Ko,""),"important");else{var r=Wo(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},Go=["Webkit","Moz","ms"],Wo=S(function(t){if(qo=qo||document.createElement("div").style,t=C(t),"filter"!==t&&t in qo)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Go.length;n++){var r=Go[n]+e;if(r in qo)return r}});function Qo(t,e){var n=e.data,r=t.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,a,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,f=$o(e.data.style)||{};e.data.normalizedStyle=s(f.__ob__)?L({},f):f;var d=Bo(e,!0);for(a in h)o(d[a])&&Ho(c,a,"");for(a in d)i=d[a],Ho(c,a,null==i?"":i)}}var Yo={create:Qo,update:Qo},Jo=/\s+/;function Xo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Jo).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Zo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Jo).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function ts(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&L(e,es(t.name||"v")),L(e,t),e}return"string"===typeof t?es(t):void 0}}var es=S(function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}}),ns=tt&&!rt,rs="transition",is="animation",os="transition",ss="transitionend",as="animation",cs="animationend";ns&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(os="WebkitTransition",ss="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(as="WebkitAnimation",cs="webkitAnimationEnd"));var us=tt?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function ls(t){us(function(){us(t)})}function hs(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Xo(t,e))}function fs(t,e){t._transitionClasses&&E(t._transitionClasses,e),Zo(t,e)}function ds(t,e,n){var r=gs(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===rs?ss:cs,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=s&&u()};setTimeout(function(){c<s&&u()},o+1),t.addEventListener(a,l)}var ps=/\b(transform|all)(,|$)/;function gs(t,e){var n,r=window.getComputedStyle(t),i=(r[os+"Delay"]||"").split(", "),o=(r[os+"Duration"]||"").split(", "),s=vs(i,o),a=(r[as+"Delay"]||"").split(", "),c=(r[as+"Duration"]||"").split(", "),u=vs(a,c),l=0,h=0;e===rs?s>0&&(n=rs,l=s,h=o.length):e===is?u>0&&(n=is,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?rs:is:null,h=n?n===rs?o.length:c.length:0);var f=n===rs&&ps.test(r[os+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:f}}function vs(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return ms(e)+ms(t[n])}))}function ms(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function ys(t,e){var n=t.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=ts(t.data.transition);if(!o(r)&&!s(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,f=r.enterActiveClass,d=r.appearClass,p=r.appearToClass,g=r.appearActiveClass,v=r.beforeEnter,m=r.enter,y=r.afterEnter,b=r.enterCancelled,_=r.beforeAppear,E=r.appear,I=r.afterAppear,T=r.appearCancelled,S=r.duration,A=An,C=An.$vnode;while(C&&C.parent)A=C.context,C=C.parent;var k=!A._isMounted||!t.isRootInsert;if(!k||E||""===E){var x=k&&d?d:c,O=k&&g?g:f,R=k&&p?p:u,N=k&&_||v,D=k&&l(E)?E:m,P=k&&I||y,L=k&&T||b,M=w(h(S)?S.enter:S);0;var F=!1!==i&&!rt,U=_s(D),j=n._enterCb=B(function(){F&&(fs(n,R),fs(n,O)),j.cancelled?(F&&fs(n,x),L&&L(n)):P&&P(n),n._enterCb=null});t.data.show||re(t,"insert",function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),D&&D(n,j)}),N&&N(n),F&&(hs(n,x),hs(n,O),ls(function(){fs(n,x),j.cancelled||(hs(n,R),U||(bs(M)?setTimeout(j,M):ds(n,a,j)))})),t.data.show&&(e&&e(),D&&D(n,j)),F||U||j()}}}function ws(t,e){var n=t.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=ts(t.data.transition);if(o(r)||1!==n.nodeType)return e();if(!s(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,f=r.beforeLeave,d=r.leave,p=r.afterLeave,g=r.leaveCancelled,v=r.delayLeave,m=r.duration,y=!1!==i&&!rt,b=_s(d),_=w(h(m)?m.leave:m);0;var E=n._leaveCb=B(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),y&&(fs(n,u),fs(n,l)),E.cancelled?(y&&fs(n,c),g&&g(n)):(e(),p&&p(n)),n._leaveCb=null});v?v(I):I()}function I(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),y&&(hs(n,c),hs(n,l),ls(function(){fs(n,c),E.cancelled||(hs(n,u),b||(bs(_)?setTimeout(E,_):ds(n,a,E)))})),d&&d(n,E),y||b||E())}}function bs(t){return"number"===typeof t&&!isNaN(t)}function _s(t){if(o(t))return!1;var e=t.fns;return s(e)?_s(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Es(t,e){!0!==e.data.show&&ys(e)}var Is=tt?{create:Es,activate:Es,remove:function(t,e){!0!==t.data.show?ws(t,e):e()}}:{},Ts=[bo,Io,Do,Uo,Yo,Is],Ss=Ts.concat(vo),As=ao({nodeOps:Xi,modules:Ss});rt&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Ps(t,"input")});var Cs={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?re(n,"postpatch",function(){Cs.componentUpdated(t,e,n)}):ks(t,e,n.context),t._vOptions=[].map.call(t.options,Rs)):("textarea"===n.tag||Ui(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",Ns),t.addEventListener("compositionend",Ds),t.addEventListener("change",Ds),rt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){ks(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,Rs);if(i.some(function(t,e){return!V(t,r[e])})){var o=t.multiple?e.value.some(function(t){return Os(t,i)}):e.value!==e.oldValue&&Os(e.value,i);o&&Ps(t,"change")}}}};function ks(t,e,n){xs(t,e,n),(nt||it)&&setTimeout(function(){xs(t,e,n)},0)}function xs(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=$(r,Rs(s))>-1,s.selected!==o&&(s.selected=o);else if(V(Rs(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function Os(t,e){return e.every(function(e){return!V(e,t)})}function Rs(t){return"_value"in t?t._value:t.value}function Ns(t){t.target.composing=!0}function Ds(t){t.target.composing&&(t.target.composing=!1,Ps(t.target,"input"))}function Ps(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Ls(t){return!t.componentInstance||t.data&&t.data.transition?t:Ls(t.componentInstance._vnode)}var Ms={bind:function(t,e,n){var r=e.value;n=Ls(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,ys(n,function(){t.style.display=o})):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=Ls(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?ys(n,function(){t.style.display=t.__vOriginalDisplay}):ws(n,function(){t.style.display="none"})):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},Fs={model:Cs,show:Ms},Us={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function js(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?js(qe(e.children)):t}function Vs(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[C(r)]=i[r];return e}function $s(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Bs(t){while(t=t.parent)if(t.data.transition)return!0}function qs(t,e){return e.key===t.key&&e.tag===t.tag}var zs=function(t){return t.tag||Ce(t)},Ks=function(t){return"show"===t.name},Hs={name:"transition",props:Us,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(zs),n.length)){0;var r=this.mode;0;var i=n[0];if(Bs(this.$vnode))return i;var o=js(i);if(!o)return i;if(this._leaving)return $s(t,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:u(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=Vs(this),c=this._vnode,l=js(c);if(o.data.directives&&o.data.directives.some(Ks)&&(o.data.show=!0),l&&l.data&&!qs(o,l)&&!Ce(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=L({},a);if("out-in"===r)return this._leaving=!0,re(h,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),$s(t,i);if("in-out"===r){if(Ce(o))return c;var f,d=function(){f()};re(a,"afterEnter",d),re(a,"enterCancelled",d),re(h,"delayLeave",function(t){f=t})}}return i}}},Gs=L({tag:String,moveClass:String},Us);delete Gs.mode;var Ws={props:Gs,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Cn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=Vs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Qs),t.forEach(Ys),t.forEach(Js),this._reflow=document.body.offsetHeight,t.forEach(function(t){if(t.data.moved){var n=t.elm,r=n.style;hs(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(ss,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(ss,t),n._moveCb=null,fs(n,e))})}}))},methods:{hasMove:function(t,e){if(!ns)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){Zo(n,t)}),Xo(n,e),n.style.display="none",this.$el.appendChild(n);var r=gs(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Qs(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Ys(t){t.data.newPos=t.elm.getBoundingClientRect()}function Js(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Xs={Transition:Hs,TransitionGroup:Ws};Xr.config.mustUseProp=gi,Xr.config.isReservedTag=Pi,Xr.config.isReservedAttr=di,Xr.config.getTagNamespace=Li,Xr.config.isUnknownElement=Fi,L(Xr.options.directives,Fs),L(Xr.options.components,Xs),Xr.prototype.__patch__=tt?As:F,Xr.prototype.$mount=function(t,e){return t=t&&tt?ji(t):void 0,On(this,t,e)},tt&&setTimeout(function(){G.devtools&&ft&&ft.emit("init",Xr)},0)},5548:(t,e,n)=>{var r=n(3517),i=n(6823),o=TypeError;t.exports=function(t){if(r(t))return t;throw new o(i(t)+" is not a constructor")}},5575:(t,e,n)=>{var r=n(6518),i=n(2195),o=n(9472),s=o(i.setInterval,!0);r({global:!0,bind:!0,forced:i.setInterval!==s},{setInterval:s})},5610:(t,e,n)=>{var r=n(1291),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5617:(t,e,n)=>{var r=n(3164),i=1.1920928955078125e-7,o=34028234663852886e22,s=11754943508222875e-54;t.exports=Math.fround||function(t){return r(t,i,o,s)}},5623:(t,e,n)=>{n(456)},5636:(t,e,n)=>{var r=n(2195),i=n(9504),o=n(6706),s=n(7696),a=n(5169),c=n(7394),u=n(4483),l=n(1548),h=r.structuredClone,f=r.ArrayBuffer,d=r.DataView,p=Math.min,g=f.prototype,v=d.prototype,m=i(g.slice),y=o(g,"resizable","get"),w=o(g,"maxByteLength","get"),b=i(v.getInt8),_=i(v.setInt8);t.exports=(l||u)&&function(t,e,n){var r,i=c(t),o=void 0===e?i:s(e),g=!y||!y(t);if(a(t),l&&(t=h(t,{transfer:[t]}),i===o&&(n||g)))return t;if(i>=o&&(!n||g))r=m(t,0,o);else{var v=n&&!g&&w?{maxByteLength:w(t)}:void 0;r=new f(o,v);for(var E=new d(t),I=new d(r),T=p(o,i),S=0;S<T;S++)_(I,S,b(E,S))}return l||u(t),r}},5700:(t,e,n)=>{var r=n(511),i=n(8242);r("toPrimitive"),i()},5745:(t,e,n)=>{var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},5746:(t,e,n)=>{var r=n(9565),i=n(9228),o=n(8551),s=n(34),a=n(7750),c=n(3470),u=n(655),l=n(5966),h=n(6682);i("search",function(t,e,n){return[function(e){var n=a(this),i=s(e)?l(e,t):void 0;return i?r(i,e,n):new RegExp(e)[t](u(n))},function(t){var r=o(this),i=u(t),s=n(e,r,i);if(s.done)return s.value;var a=r.lastIndex;c(a,0)||(r.lastIndex=0);var l=h(r,i);return c(r.lastIndex,a)||(r.lastIndex=a),null===l?-1:l.index}]})},5810:(t,e,n)=>{var r=n(34),i=n(1181).get;t.exports=function(t){if(!r(t))return!1;var e=i(t);return!!e&&"RawJSON"===e.type}},5823:(t,e,n)=>{var r=n(6518),i=n(2195),o=n(9565),s=n(3724),a=n(2805),c=n(4644),u=n(6346),l=n(679),h=n(6980),f=n(6699),d=n(2087),p=n(8014),g=n(7696),v=n(8229),m=n(8319),y=n(6969),w=n(9297),b=n(6955),_=n(34),E=n(757),I=n(2360),T=n(1625),S=n(2967),A=n(8480).f,C=n(3251),k=n(9213).forEach,x=n(7633),O=n(2106),R=n(4913),N=n(7347),D=n(5370),P=n(1181),L=n(3167),M=P.get,F=P.set,U=P.enforce,j=R.f,V=N.f,$=i.RangeError,B=u.ArrayBuffer,q=B.prototype,z=u.DataView,K=c.NATIVE_ARRAY_BUFFER_VIEWS,H=c.TYPED_ARRAY_TAG,G=c.TypedArray,W=c.TypedArrayPrototype,Q=c.isTypedArray,Y="BYTES_PER_ELEMENT",J="Wrong length",X=function(t,e){O(t,e,{configurable:!0,get:function(){return M(this)[e]}})},Z=function(t){var e;return T(q,t)||"ArrayBuffer"===(e=b(t))||"SharedArrayBuffer"===e},tt=function(t,e){return Q(t)&&!E(e)&&e in t&&d(+e)&&e>=0},et=function(t,e){return e=y(e),tt(t,e)?h(2,t[e]):V(t,e)},nt=function(t,e,n){return e=y(e),!(tt(t,e)&&_(n)&&w(n,"value"))||w(n,"get")||w(n,"set")||n.configurable||w(n,"writable")&&!n.writable||w(n,"enumerable")&&!n.enumerable?j(t,e,n):(t[e]=n.value,t)};s?(K||(N.f=et,R.f=nt,X(W,"buffer"),X(W,"byteOffset"),X(W,"byteLength"),X(W,"length")),r({target:"Object",stat:!0,forced:!K},{getOwnPropertyDescriptor:et,defineProperty:nt}),t.exports=function(t,e,n){var s=t.match(/\d+/)[0]/8,c=t+(n?"Clamped":"")+"Array",u="get"+t,h="set"+t,d=i[c],y=d,w=y&&y.prototype,b={},E=function(t,e){var n=M(t);return n.view[u](e*s+n.byteOffset,!0)},T=function(t,e,r){var i=M(t);i.view[h](e*s+i.byteOffset,n?m(r):r,!0)},O=function(t,e){j(t,e,{get:function(){return E(this,e)},set:function(t){return T(this,e,t)},enumerable:!0})};K?a&&(y=e(function(t,e,n,r){return l(t,w),L(function(){return _(e)?Z(e)?void 0!==r?new d(e,v(n,s),r):void 0!==n?new d(e,v(n,s)):new d(e):Q(e)?D(y,e):o(C,y,e):new d(g(e))}(),t,y)}),S&&S(y,G),k(A(d),function(t){t in y||f(y,t,d[t])}),y.prototype=w):(y=e(function(t,e,n,r){l(t,w);var i,a,c,u=0,h=0;if(_(e)){if(!Z(e))return Q(e)?D(y,e):o(C,y,e);i=e,h=v(n,s);var f=e.byteLength;if(void 0===r){if(f%s)throw new $(J);if(a=f-h,a<0)throw new $(J)}else if(a=p(r)*s,a+h>f)throw new $(J);c=a/s}else c=g(e),a=c*s,i=new B(a);F(t,{buffer:i,byteOffset:h,byteLength:a,length:c,view:new z(i)});while(u<c)O(t,u++)}),S&&S(y,G),w=y.prototype=I(W)),w.constructor!==y&&f(w,"constructor",y),U(w).TypedArrayConstructor=y,H&&f(w,H,c);var R=y!==d;b[c]=y,r({global:!0,constructor:!0,forced:R,sham:!K},b),Y in y||f(y,Y,s),Y in w||f(w,Y,s),x(c)}):t.exports=function(){}},5854:(t,e,n)=>{var r=n(2777),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},5917:(t,e,n)=>{var r=n(3724),i=n(9039),o=n(4055);t.exports=!r&&!i(function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a})},5929:(t,e,n)=>{n.d(e,{A:()=>r});n(2675),n(9463),n(2259),n(6099),n(7764),n(2953);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}},5966:(t,e,n)=>{var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},6031:(t,e,n)=>{n(5575),n(4599)},6043:(t,e,n)=>{var r=n(9306),i=TypeError,o=function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw new i("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},6072:(t,e,n)=>{var r=n(4644),i=n(926).right,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("reduceRight",function(t){var e=arguments.length;return i(o(this),t,e,e>1?arguments[1]:void 0)})},6080:(t,e,n)=>{var r=n(7476),i=n(9306),o=n(616),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}}},6099:(t,e,n)=>{var r=n(2140),i=n(6840),o=n(3179);r||i(Object.prototype,"toString",o,{unsafe:!0})},6119:(t,e,n)=>{var r=n(5745),i=n(3392),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},6193:(t,e,n)=>{var r=n(4215);t.exports="NODE"===r},6198:(t,e,n)=>{var r=n(8014);t.exports=function(t){return r(t.length)}},6269:t=>{t.exports={}},6279:(t,e,n)=>{var r=n(6840);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},6280:(t,e,n)=>{var r=n(6518),i=n(2195),o=n(8745),s=n(4601),a="WebAssembly",c=i[a],u=7!==new Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=s(t,e,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=s(a+"."+t,e,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};l("Error",function(t){return function(e){return o(t,this,arguments)}}),l("EvalError",function(t){return function(e){return o(t,this,arguments)}}),l("RangeError",function(t){return function(e){return o(t,this,arguments)}}),l("ReferenceError",function(t){return function(e){return o(t,this,arguments)}}),l("SyntaxError",function(t){return function(e){return o(t,this,arguments)}}),l("TypeError",function(t){return function(e){return o(t,this,arguments)}}),l("URIError",function(t){return function(e){return o(t,this,arguments)}}),h("CompileError",function(t){return function(e){return o(t,this,arguments)}}),h("LinkError",function(t){return function(e){return o(t,this,arguments)}}),h("RuntimeError",function(t){return function(e){return o(t,this,arguments)}})},6319:(t,e,n)=>{var r=n(8551),i=n(9539);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(s){i(t,"throw",s)}}},6346:(t,e,n)=>{var r=n(2195),i=n(9504),o=n(3724),s=n(7811),a=n(350),c=n(6699),u=n(2106),l=n(6279),h=n(9039),f=n(679),d=n(1291),p=n(8014),g=n(7696),v=n(5617),m=n(8490),y=n(2787),w=n(2967),b=n(4373),_=n(7680),E=n(3167),I=n(7740),T=n(687),S=n(1181),A=a.PROPER,C=a.CONFIGURABLE,k="ArrayBuffer",x="DataView",O="prototype",R="Wrong length",N="Wrong index",D=S.getterFor(k),P=S.getterFor(x),L=S.set,M=r[k],F=M,U=F&&F[O],j=r[x],V=j&&j[O],$=Object.prototype,B=r.Array,q=r.RangeError,z=i(b),K=i([].reverse),H=m.pack,G=m.unpack,W=function(t){return[255&t]},Q=function(t){return[255&t,t>>8&255]},Y=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},J=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},X=function(t){return H(v(t),23,4)},Z=function(t){return H(t,52,8)},tt=function(t,e,n){u(t[O],e,{configurable:!0,get:function(){return n(this)[e]}})},et=function(t,e,n,r){var i=P(t),o=g(n),s=!!r;if(o+e>i.byteLength)throw new q(N);var a=i.bytes,c=o+i.byteOffset,u=_(a,c,c+e);return s?u:K(u)},nt=function(t,e,n,r,i,o){var s=P(t),a=g(n),c=r(+i),u=!!o;if(a+e>s.byteLength)throw new q(N);for(var l=s.bytes,h=a+s.byteOffset,f=0;f<e;f++)l[h+f]=c[u?f:e-f-1]};if(s){var rt=A&&M.name!==k;h(function(){M(1)})&&h(function(){new M(-1)})&&!h(function(){return new M,new M(1.5),new M(NaN),1!==M.length||rt&&!C})?rt&&C&&c(M,"name",k):(F=function(t){return f(this,U),E(new M(g(t)),this,F)},F[O]=U,U.constructor=F,I(F,M)),w&&y(V)!==$&&w(V,$);var it=new j(new F(2)),ot=i(V.setInt8);it.setInt8(0,2147483648),it.setInt8(1,2147483649),!it.getInt8(0)&&it.getInt8(1)||l(V,{setInt8:function(t,e){ot(this,t,e<<24>>24)},setUint8:function(t,e){ot(this,t,e<<24>>24)}},{unsafe:!0})}else F=function(t){f(this,U);var e=g(t);L(this,{type:k,bytes:z(B(e),0),byteLength:e}),o||(this.byteLength=e,this.detached=!1)},U=F[O],j=function(t,e,n){f(this,V),f(t,U);var r=D(t),i=r.byteLength,s=d(e);if(s<0||s>i)throw new q("Wrong offset");if(n=void 0===n?i-s:p(n),s+n>i)throw new q(R);L(this,{type:x,buffer:t,byteLength:n,byteOffset:s,bytes:r.bytes}),o||(this.buffer=t,this.byteLength=n,this.byteOffset=s)},V=j[O],o&&(tt(F,"byteLength",D),tt(j,"buffer",P),tt(j,"byteLength",P),tt(j,"byteOffset",P)),l(V,{getInt8:function(t){return et(this,1,t)[0]<<24>>24},getUint8:function(t){return et(this,1,t)[0]},getInt16:function(t){var e=et(this,2,t,arguments.length>1&&arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=et(this,2,t,arguments.length>1&&arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return J(et(this,4,t,arguments.length>1&&arguments[1]))},getUint32:function(t){return J(et(this,4,t,arguments.length>1&&arguments[1]))>>>0},getFloat32:function(t){return G(et(this,4,t,arguments.length>1&&arguments[1]),23)},getFloat64:function(t){return G(et(this,8,t,arguments.length>1&&arguments[1]),52)},setInt8:function(t,e){nt(this,1,t,W,e)},setUint8:function(t,e){nt(this,1,t,W,e)},setInt16:function(t,e){nt(this,2,t,Q,e,arguments.length>2&&arguments[2])},setUint16:function(t,e){nt(this,2,t,Q,e,arguments.length>2&&arguments[2])},setInt32:function(t,e){nt(this,4,t,Y,e,arguments.length>2&&arguments[2])},setUint32:function(t,e){nt(this,4,t,Y,e,arguments.length>2&&arguments[2])},setFloat32:function(t,e){nt(this,4,t,X,e,arguments.length>2&&arguments[2])},setFloat64:function(t,e){nt(this,8,t,Z,e,arguments.length>2&&arguments[2])}});T(F,k),T(j,x),t.exports={ArrayBuffer:F,DataView:j}},6395:t=>{t.exports=!1},6430:(t,e,n)=>{n.d(e,{gS:()=>wf,rJ:()=>ch,H9:()=>uh,x7:()=>gf,GG:()=>mf,aU:()=>fh,AB:()=>Zh,My:()=>Jh,P:()=>Hh,HM:()=>ef,mZ:()=>yf,_M:()=>Wh});var r,i=n(9928),o=n(5125),s=n(3424),a=n(6743),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function d(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function m(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?m:y,w.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function E(){this.s=this.s,this.o=this.o}var I=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==I)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function A(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function C(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",()=>{},e),h.removeEventListener("test",()=>{},e)}catch(n){}return t}();function x(t){return/^[\s\xa0]*$/.test(t)}function O(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function R(t){return-1!=O().indexOf(t)}function N(t){return N[" "](t),t}function D(t,e){var n=br;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}N[" "]=function(){};var P,L,M=R("Opera"),F=R("Trident")||R("MSIE"),U=R("Edge"),j=U||F,V=R("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!R("Edge"))&&!(R("Trident")||R("MSIE"))&&!R("Edge"),$=-1!=O().toLowerCase().indexOf("webkit")&&!R("Edge");function B(){var t=h.document;return t?t.documentMode:void 0}t:{var q="",z=function(){var t=O();return V?/rv:([^\);]+)(\)|;)/.exec(t):U?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):$?/WebKit\/(\S+)/.exec(t):M?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(z&&(q=z?z[1]:""),F){var K=B();if(null!=K&&K>parseFloat(q)){P=String(K);break t}}P=q}if(h.document&&F){var H=B();L=H||(parseInt(P,10)||void 0)}else L=void 0;var G=L;function W(t,e){if(C.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(V){t:{try{N(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Q[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&W.$.h.call(this)}}_(W,C);var Q={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),J=0;function X(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++J,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<rt.length;e++)n=rt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ot(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=T(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==r)return i}return-1}ot.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=at(t,e,r,i);return-1<s?(e=t[s],n||(e.ia=!1)):(e=new X(e,this.src,o,!!r,i),e.ia=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)lt(t,e[o],n,r,i);return null}return n=bt(n),t&&t[Y]?t.O(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=d(i)?!!i.capture:!!i,a=yt(t);if(a||(t[ct]=a=new ot(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)k||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(vt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=mt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)dt(t,e[o],n,r,i);return null}return n=bt(n),t&&t[Y]?t.P(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)pt(t,e[o],n,r,i);else r=d(r)?!!r.capture:!!r,n=bt(n),t&&t[Y]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=at(o,n,r,i),-1<n&&(Z(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=yt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Y])st(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yt(e))?(st(n,t),0==n.h&&(n.src=null,e[ct]=null)):Z(t)}}}function vt(t){return t in ut?ut[t]:ut[t]="on"+t}function mt(t,e){if(t.fa)t=!0;else{e=new W(e,this);var n=t.listener,r=t.la||t.src;t.ia&&gt(t),t=n.call(r,e)}return t}function yt(t){return t=t[ct],t instanceof ot?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function bt(t){return"function"===typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function _t(){E.call(this),this.i=new ot(this),this.S=this,this.J=null}function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new C(e,t);else if(e instanceof C)e.target=e.target||t;else{var i=e;e=new C(r,t),it(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=It(s,r,!0,e)&&i}if(s=e.g=t,i=It(s,r,!0,e)&&i,i=It(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=It(s,r,!1,e)&&i}function It(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,c=s.la||s.src;s.ia&&st(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}_(_t,E),_t.prototype[Y]=!0,_t.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},_t.prototype.N=function(){if(_t.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.J=null},_t.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},_t.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Tt=h.JSON.stringify;class St{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function At(){var t=Pt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ct{constructor(){this.h=this.g=null}add(t,e){const n=kt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var kt=new St(()=>new xt,t=>t.reset());class xt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ot(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Rt(t){h.setTimeout(()=>{throw t},0)}let Nt,Dt=!1,Pt=new Ct,Lt=()=>{const t=h.Promise.resolve(void 0);Nt=()=>{t.then(Mt)}};var Mt=()=>{for(var t;t=At();){try{t.h.call(t.g)}catch(n){Rt(n)}var e=kt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dt=!1};function Ft(t,e){_t.call(this),this.h=t||1,this.g=e||h,this.j=w(this.qb,this),this.l=Date.now()}function Ut(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function jt(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Vt(t){t.g=jt(()=>{t.g=null,t.i&&(t.i=!1,Vt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Ft,_t),r=Ft.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(Ut(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ft.$.N.call(this),Ut(this),delete this.g};class $t extends E{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Vt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bt(t){E.call(this),this.h=t,this.g={}}_(Bt,E);var qt=[];function zt(t,e,n,r){Array.isArray(n)||(n&&(qt[0]=n.toString()),n=qt);for(var i=0;i<n.length;i++){var o=lt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Kt(t){tt(t.g,function(t,e){this.g.hasOwnProperty(e)&&gt(t)},t),t.g={}}function Ht(){this.g=!0}function Gt(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s})}function Wt(t,e,n,r,i,o,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s})}function Qt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Jt(t,n)+(r?" "+r:"")})}function Yt(t,e){t.info(function(){return"TIMEOUT: "+e})}function Jt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Tt(n)}catch(a){return e}}Bt.prototype.N=function(){Bt.$.N.call(this),Kt(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ht.prototype.Ea=function(){this.g=!1},Ht.prototype.info=function(){};var Xt={},Zt=null;function te(){return Zt=Zt||new _t}function ee(t){C.call(this,Xt.Ta,t)}function ne(t){const e=te();Et(e,new ee(e))}function re(t,e){C.call(this,Xt.STAT_EVENT,t),this.stat=e}function ie(t){const e=te();Et(e,new re(e,t))}function oe(t,e){C.call(this,Xt.Ua,t),this.size=e}function se(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){t()},e)}Xt.Ta="serverreachability",_(ee,C),Xt.STAT_EVENT="statevent",_(re,C),Xt.Ua="timingevent",_(oe,C);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ce={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ue(){}function le(t){return t.h||(t.h=t.i())}function he(){}ue.prototype.h=null;var fe,de={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pe(){C.call(this,"d")}function ge(){C.call(this,"c")}function ve(){}function me(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Bt(this),this.P=we,t=j?125:void 0,this.V=new Ft(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ye}function ye(){this.i=null,this.g="",this.h=!1}_(pe,C),_(ge,C),_(ve,ue),ve.prototype.g=function(){return new XMLHttpRequest},ve.prototype.i=function(){return{}},fe=new ve;var we=45e3,be={},_e={};function Ee(t,e,n){t.L=1,t.v=ze(je(e)),t.s=n,t.S=!0,Ie(t,null)}function Ie(t,e){t.G=Date.now(),Ce(t),t.A=je(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ye,t.g=ur(t.l,n?e:null,!t.s),0<t.O&&(t.M=new $t(w(t.Pa,t,t.g),t.O)),zt(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ne(),Gt(t.j,t.u,t.A,t.m,t.W,t.s)}function Te(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Se(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=Ae(t,n),r==_e){4==e&&(t.o=4,ie(14),i=!1),Qt(t.j,t.m,null,"[Incomplete Response]");break}if(r==be){t.o=4,ie(15),Qt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Qt(t.j,t.m,r,null),Ne(t,r)}Te(t)&&r!=_e&&r!=be&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ie(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),er(e),e.M=!0,ie(11))):(Qt(t.j,t.m,n,"[Invalid Chunked Response]"),Re(t),Oe(t))}function Ae(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?_e:(n=Number(e.substring(n,r)),isNaN(n)?be:(r+=1,r+n>e.length?_e:(e=e.slice(r,r+n),t.C=r+n,e)))}function Ce(t){t.Y=Date.now()+t.P,ke(t,t.P)}function ke(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=se(w(t.lb,t),e)}function xe(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Oe(t){0==t.l.H||t.J||ir(t.l,t)}function Re(t){xe(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ut(t.V),Kt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ne(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||fn(n.i,t)))if(!t.K&&fn(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;rr(n),Hn(n)}tr(n),ie(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=se(w(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else sr(n,11)}else if((t.K||n.g==t)&&rr(n),!x(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.i;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(dn(o,o.h),o.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,qe(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=t;if(r.wa=cr(r,r.J?r.pa:null,r.Y),s.K){pn(r.i,s);var a=s,c=r.L;c&&a.setTimeout(c),a.B&&(xe(a),Ce(a)),r.g=s}else Zn(r);0<n.j.length&&Wn(n)}else"stop"!=u[0]&&"close"!=u[0]||sr(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?sr(n,7):Kn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}ne(4)}catch(u){}}function De(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Pe(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Le(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Pe(t),r=De(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}r=me.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==Un(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const l=Un(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>l)&&(3!=l||j||this.g&&(this.h.h||this.g.ja()||jn(this.g)))){this.J||4!=l||7==e||ne(8==e||0>=f?3:2),xe(this);var n=this.g.da();this.ca=n;e:if(Te(this)){var r=jn(this.g);t="";var i=r.length,o=4==Un(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Re(this),Oe(this);var s="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=200==n,Wt(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ie(12),Re(this),Oe(this);break t}Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ne(this,n)}this.S?(Se(this,l,s),j&&this.i&&3==l&&(zt(this.U,this.V,"tick",this.mb),this.V.start())):(Qt(this.j,this.m,s,null),Ne(this,s)),4==l&&Re(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,Ce(this)))}else Vn(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.o=3,ie(12)):(this.o=0,ie(13)),Re(this),Oe(this)}}}catch(l){}},r.mb=function(){if(this.g){var t=Un(this.g),e=this.g.ja();this.C<e.length&&(xe(this),Se(this,t,e),this.i&&4!=t&&Ce(this))}},r.cancel=function(){this.J=!0,Re(this)},r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Yt(this.j,this.A),2!=this.L&&(ne(),ie(17)),Re(this),this.o=2,Oe(this)):ke(this,this.Y-t)};var Me=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ue(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ue){this.h=t.h,Ve(this,t.j),this.s=t.s,this.g=t.g,$e(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Be(this,n),this.o=t.o}else t&&(e=String(t).match(Me))?(this.h=!1,Ve(this,e[1]||"",!0),this.s=Ke(e[2]||""),this.g=Ke(e[3]||"",!0),$e(this,e[4]),this.l=Ke(e[5]||"",!0),Be(this,e[6]||"",!0),this.o=Ke(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function je(t){return new Ue(t)}function Ve(t,e,n){t.j=n?Ke(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $e(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Be(t,e,n){e instanceof Ze?(t.i=e,sn(t.i,t.h)):(n||(e=He(e,Je)),t.i=new Ze(e,t.h))}function qe(t,e,n){t.i.set(e,n)}function ze(t){return qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ke(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function He(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ge),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ge(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ue.prototype.toString=function(){var t=[],e=this.j;e&&t.push(He(e,We,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(He(e,We,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(He(n,"/"==n.charAt(0)?Ye:Qe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",He(n,Xe)),t.join("")};var We=/[#\/\?@]/g,Qe=/[#\?:]/g,Ye=/[#\?]/g,Je=/[#\?@]/g,Xe=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Fe(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function en(t,e){tn(t),e=on(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=on(t,e),t.g.has(e)}function rn(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(on(t,e),S(n)),t.h+=n.length)}function on(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function sn(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),rn(this,n,t))},t)),t.j=e}r=Ze.prototype,r.add=function(t,e){tn(this),this.i=null,t=on(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){tn(this),this.g.forEach(function(n,r){n.forEach(function(n){t.call(e,n,r,this)},this)},this)},r.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(on(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return tn(this),this.i=null,t=on(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function cn(t){this.l=t||un,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function ln(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hn(t){return t.h?1:t.g?t.g.size:0}function fn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function dn(t,e){t.g?t.g.add(e):t.h=e}function pn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function gn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return S(t.i)}cn.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var vn=class{stringify(t){return h.JSON.stringify(t,void 0)}parse(t){return h.JSON.parse(t,void 0)}};function mn(){this.g=new vn}function yn(t,e,n){const r=n||"";try{Le(t,function(t,n){let i=t;d(t)&&(i=Tt(t)),e.push(r+n+"="+encodeURIComponent(i))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function wn(t,e){const n=new Ht;if(h.Image){const r=new Image;r.onload=b(bn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=b(bn,n,r,"TestLoadImage: error",!1,e),r.onabort=b(bn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=b(bn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function bn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function _n(t){this.l=t.fc||null,this.j=t.ob||!1}function En(t,e){_t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=In,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_(_n,ue),_n.prototype.g=function(){return new En(this.l,this.j)},_n.prototype.i=function(t){return function(){return t}}({}),_(En,_t);var In=0;function Tn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,An(t)}function An(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=En.prototype,r.open=function(t,e){if(this.readyState!=In)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,An(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sn(this)),this.readyState=In},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):An(this),3==this.readyState&&Tn(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,Sn(this))},r.Ya=function(t){this.g&&(this.response=t,Sn(this))},r.ka=function(){this.g&&Sn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Cn=h.JSON.parse;function kn(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=xn,this.L=this.M=!1}_(kn,_t);var xn="",On=/^https?$/i,Rn=["POST","PUT"];function Nn(t){return F&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Dn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pn(t),Mn(t)}function Pn(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}function Ln(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Un(t)||2!=t.da()))if(t.v&&4==Un(t))jt(t.La,0,t);else if(Et(t,"readystatechange"),4==Un(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.I).match(Me)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!On.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var o=2<Un(t)?t.g.statusText:""}catch(s){o=""}t.j=o+" ["+t.da()+"]",Pn(t)}}finally{Mn(t)}}}function Mn(t,e){if(t.g){Fn(t);const r=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Fn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Un(t){return t.g?t.g.readyState:0}function jn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case xn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Wr){return null}}function Vn(t){const e={};t=(t.g&&2<=Un(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(x(t[r]))continue;var n=Ot(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}et(e,function(t){return t.join(", ")})}function $n(t){let e="";return tt(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function Bn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=$n(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):qe(t,e,n))}function qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zn(t){this.Ga=0,this.j=[],this.l=new Ht,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qn("baseRetryDelayMs",5e3,t),this.hb=qn("retryDelaySeedMs",1e4,t),this.eb=qn("forwardChannelMaxRetries",2,t),this.xa=qn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(t&&t.concurrentRequestLimit),this.Ja=new mn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Kn(t){if(Gn(t),3==t.H){var e=t.W++,n=je(t.I);if(qe(n,"SID",t.K),qe(n,"RID",e),qe(n,"TYPE","terminate"),Jn(t,n),e=new me(t,t.l,e),e.L=2,e.v=ze(je(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=ur(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ce(e)}ar(t)}function Hn(t){t.g&&(er(t),t.g.cancel(),t.g=null)}function Gn(t){Hn(t),t.u&&(h.clearTimeout(t.u),t.u=null),rr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Wn(t){if(!ln(t.i)&&!t.m){t.m=!0;var e=t.Na;Nt||Lt(),Dt||(Nt(),Dt=!0),Pt.add(e,t),t.C=0}}function Qn(t,e){return!(hn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=se(w(t.Na,t,e),or(t,t.C)),t.C++,!0))}function Yn(t,e){var n;n=e?e.m:t.W++;const r=je(t.I);qe(r,"SID",t.K),qe(r,"RID",n),qe(r,"AID",t.V),Jn(t,r),t.o&&t.s&&Bn(r,t.o,t.s),n=new me(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Xn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),dn(t.i,n),Ee(n,r,e)}function Jn(t,e){t.na&&tt(t.na,function(t,n){qe(e,n,t)}),t.h&&Le({},function(t,n){qe(e,n,t)})}function Xn(t,e,n){n=Math.min(t.j.length,n);var r=t.h?w(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=i[s].g;const a=i[s].map;if(n-=e,0>n)e=Math.max(0,i[s].g-100),o=!1;else try{yn(a,t,"req"+n+"_")}catch(oi){r&&r(a)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Nt||Lt(),Dt||(Nt(),Dt=!0),Pt.add(e,t),t.A=0}}function tr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=se(w(t.Ma,t),or(t,t.A)),t.A++,!0)}function er(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function nr(t){t.g=new me(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=je(t.wa);qe(e,"RID","rpc"),qe(e,"SID",t.K),qe(e,"AID",t.V),qe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&qe(e,"TO",t.qa),qe(e,"TYPE","xmlhttp"),Jn(t,e),t.o&&t.s&&Bn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ze(je(e)),n.s=null,n.S=!0,Ie(n,t)}function rr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ir(t,e){var n=null;if(t.g==e){rr(t),er(t),t.g=null;var r=2}else{if(!fn(t.i,e))return;n=e.F,pn(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=te(),Et(r,new oe(r,n)),Wn(t)}else Zn(t);else if(i=e.o,3==i||0==i&&0<e.ca||!(1==r&&Qn(t,e)||2==r&&tr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:sr(t,5);break;case 4:sr(t,10);break;case 3:sr(t,6);break;default:sr(t,2)}}function or(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function sr(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=w(t.pb,t);n||(n=new Ue("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ve(n,"https"),ze(n)),wn(n.toString(),r)}else ie(2);t.H=0,t.h&&t.h.za(e),ar(t),Gn(t)}function ar(t){if(t.H=0,t.ma=[],t.h){const e=gn(t.i);0==e.length&&0==t.j.length||(A(t.ma,e),A(t.ma,t.j),t.i.i.length=0,S(t.j),t.j.length=0),t.h.ya()}}function cr(t,e,n){var r=n instanceof Ue?je(n):new Ue(n);if(""!=r.g)e&&(r.g=e+"."+r.g),$e(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new Ue(null);r&&Ve(o,r),e&&(o.g=e),i&&$e(o,i),n&&(o.l=n),r=o}return n=t.F,e=t.Da,n&&e&&qe(r,n,e),qe(r,"VER",t.ra),Jn(t,r),r}function ur(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new kn(new _n({ob:!0})):new kn(t.va),e.Oa(t.J),e}function lr(){}function hr(){if(F&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function fr(t,e){_t.call(this),this.g=new zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gr(this)}function dr(t){pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function pr(){ge.call(this),this.status=1}function gr(t){this.g=t}function vr(){this.blockSize=-1}function mr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function yr(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function wr(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=0|t[i];r&&o==e||(n[i]=o,r=!1)}this.g=n}r=kn.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fe.g(),this.C=this.u?le(this.u):le(fe),this.g.onreadystatechange=w(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(o){return void Dn(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),i=h.FormData&&t instanceof h.FormData,!(0<=T(Rn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=Nn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.ua,this)):this.A=jt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Dn(this,o)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Mn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),kn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Ln(this):this.kb())},r.kb=function(){Ln(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Un(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Cn(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zn.prototype,r.ra=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new me(this,this.l,t);let o=this.s;if(this.U&&(o?(o=nt(o),it(o,this.U)):o=this.U),null!==this.o||this.O||(i.I=o,o=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Xn(this,i,e),n=je(this.I),qe(n,"RID",t),qe(n,"CVER",22),this.F&&qe(n,"X-HTTP-Session-Id",this.F),Jn(this,n),o&&(this.O?e="headers="+encodeURIComponent(String($n(o)))+"&"+e:this.o&&Bn(n,this.o,o)),dn(this.i,i),this.bb&&qe(n,"TYPE","init"),this.P?(qe(n,"$req",e),qe(n,"SID","null"),i.aa=!0,Ee(i,n,null)):Ee(i,n,e),this.H=2}}else 3==this.H&&(t?Yn(this,t):0==this.j.length||ln(this.i)||Yn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=se(w(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ie(10),Hn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Hn(this),tr(this),ie(19))},r.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ie(2)):(this.l.info("Failed to ping google.com"),ie(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(t,e){return new fr(t,e)},_(fr,_t),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ie(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=cr(t,null,t.Y),Wn(t)},fr.prototype.close=function(){Kn(this.g)},fr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tt(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Wn(e)},fr.prototype.N=function(){this.g.h=null,delete this.j,Kn(this.g),delete this.g,fr.$.N.call(this)},_(dr,pe),_(pr,ge),_(gr,lr),gr.prototype.Ba=function(){Et(this.g,"a")},gr.prototype.Aa=function(t){Et(this.g,new dr(t))},gr.prototype.za=function(t){Et(this.g,new pr)},gr.prototype.ya=function(){Et(this.g,"b")},_(mr,vr),mr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},mr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,o=0;o<e;){if(0==i)for(;o<=n;)yr(this,t,o),o+=this.blockSize;if("string"===typeof t){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){yr(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){yr(this,r),i=0;break}}this.h=i,this.i+=e},mr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var br={};function _r(t){return-128<=t&&128>t?D(t,function(t){return new wr([0|t],0>t?-1:0)}):new wr([0|t],0>t?-1:0)}function Er(t){if(isNaN(t)||!isFinite(t))return Sr;if(0>t)return Or(Er(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Tr;return new wr(e,0)}function Ir(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Or(Ir(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(e,8)),r=Sr,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=Er(Math.pow(e,o)),r=r.R(o).add(Er(s))):(r=r.R(n),r=r.add(Er(s)))}return r}var Tr=4294967296,Sr=_r(0),Ar=_r(1),Cr=_r(16777216);function kr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function xr(t){return-1==t.h}function Or(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new wr(n,~t.h).add(Ar)}function Rr(t,e){return t.add(Or(e))}function Nr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Dr(t,e){this.g=t,this.h=e}function Pr(t,e){if(kr(e))throw Error("division by zero");if(kr(t))return new Dr(Sr,Sr);if(xr(t))return e=Pr(Or(t),e),new Dr(Or(e.g),Or(e.h));if(xr(e))return e=Pr(t,Or(e)),new Dr(Or(e.g),e.h);if(30<t.g.length){if(xr(t)||xr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ar,r=e;0>=r.X(t);)n=Lr(n),r=Lr(r);var i=Mr(n,1),o=Mr(r,1);for(r=Mr(r,2),n=Mr(n,2);!kr(r);){var s=o.add(r);0>=s.X(t)&&(i=i.add(n),o=s),r=Mr(r,1),n=Mr(n,1)}return e=Rr(t,i.R(e)),new Dr(i,e)}for(i=Sr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=Er(n),s=o.R(e);xr(s)||0<s.X(t);)n-=r,o=Er(n),s=o.R(e);kr(o)&&(o=Ar),i=i.add(o),t=Rr(t,s)}return new Dr(i,t)}function Lr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new wr(n,t.h)}function Mr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new wr(i,t.h)}r=wr.prototype,r.ea=function(){if(xr(this))return-Or(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Tr+r)*e,e*=Tr}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kr(this))return"0";if(xr(this))return"-"+Or(this).toString(t);for(var e=Er(Math.pow(t,6)),n=this,r="";;){var i=Pr(n,e).g;n=Rr(n,i.R(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,kr(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=Rr(this,t),xr(t)?-1:kr(t)?0:1},r.abs=function(){return xr(this)?Or(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(65535&this.D(i))+(65535&t.D(i)),s=(o>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new wr(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(kr(this)||kr(t))return Sr;if(xr(this))return xr(t)?Or(this).R(Or(t)):Or(Or(this).R(t));if(xr(t))return Or(this.R(Or(t)));if(0>this.X(Cr)&&0>t.X(Cr))return Er(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.D(r)>>>16,s=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=s*c,Nr(n,2*r+2*i),n[2*r+2*i+1]+=o*c,Nr(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,Nr(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,Nr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new wr(n,0)},r.gb=function(t){return Pr(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new wr(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new wr(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new wr(n,this.h^t.h)},hr.prototype.createWebChannel=hr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ce.COMPLETE="complete",he.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",_t.prototype.listen=_t.prototype.O,kn.prototype.listenOnce=kn.prototype.P,kn.prototype.getLastError=kn.prototype.Sa,kn.prototype.getLastErrorCode=kn.prototype.Ia,kn.prototype.getStatus=kn.prototype.da,kn.prototype.getResponseJson=kn.prototype.Wa,kn.prototype.getResponseText=kn.prototype.ja,kn.prototype.send=kn.prototype.ha,kn.prototype.setWithCredentials=kn.prototype.Oa,mr.prototype.digest=mr.prototype.l,mr.prototype.reset=mr.prototype.reset,mr.prototype.update=mr.prototype.j,wr.prototype.add=wr.prototype.add,wr.prototype.multiply=wr.prototype.R,wr.prototype.modulo=wr.prototype.gb,wr.prototype.compare=wr.prototype.X,wr.prototype.toNumber=wr.prototype.ea,wr.prototype.toString=wr.prototype.toString,wr.prototype.getBits=wr.prototype.D,wr.fromNumber=Er,wr.fromString=Ir;var Fr=u.createWebChannelTransport=function(){return new hr},Ur=u.getStatEventTarget=function(){return te()},jr=u.ErrorCode=ae,Vr=u.EventType=ce,$r=u.Event=Xt,Br=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qr=u.FetchXmlHttpFactory=_n,zr=u.WebChannel=he,Kr=u.XhrIo=kn,Hr=u.Md5=mr,Gr=u.Integer=wr;const Wr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qr.UNAUTHENTICATED=new Qr(null),Qr.GOOGLE_CREDENTIALS=new Qr("google-credentials-uid"),Qr.FIRST_PARTY=new Qr("first-party-uid"),Qr.MOCK_USER=new Qr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Yr="9.23.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new s.Vy("@firebase/firestore");function Xr(){return Jr.logLevel}function Zr(t,...e){if(Jr.logLevel<=s.$b.DEBUG){const n=e.map(ni);Jr.debug(`Firestore (${Yr}): ${t}`,...n)}}function ti(t,...e){if(Jr.logLevel<=s.$b.ERROR){const n=e.map(ni);Jr.error(`Firestore (${Yr}): ${t}`,...n)}}function ei(t,...e){if(Jr.logLevel<=s.$b.WARN){const n=e.map(ni);Jr.warn(`Firestore (${Yr}): ${t}`,...n)}}function ni(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t="Unexpected state"){const e=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+t;throw ti(e),new Error(e)}function ii(t,e){t||ri()}function oi(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ai extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class li{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Qr.UNAUTHENTICATED))}shutdown(){}}class hi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class fi{constructor(t){this.t=t,this.currentUser=Qr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ci,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},s=t=>{Zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(t=>s(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(Zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ci)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(Zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ii("string"==typeof e.accessToken),new ui(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ii(null===t||"string"==typeof t),new Qr(t)}}class di{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Qr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class pi{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new di(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(Qr.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vi{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&Zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,Zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{Zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?r(t):Zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(ii("string"==typeof t.token),this.T=t.token,new gi(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=mi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function wi(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ai(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ai(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ai(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ai(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return _i.fromMillis(Date.now())}static fromDate(t){return _i.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new _i(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?wi(this.nanoseconds,t.nanoseconds):wi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ei(t)}static min(){return new Ei(new _i(0,0))}static max(){return new Ei(new _i(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e,n){void 0===e?e=0:e>t.length&&ri(),void 0===n?n=t.length-e:n>t.length-e&&ri(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ii.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ii?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ti extends Ii{construct(t,e,n){return new Ti(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ai(si.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new Ti(e)}static emptyPath(){return new Ti([])}}const Si=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ai extends Ii{construct(t,e,n){return new Ai(t,e,n)}static isValidIdentifier(t){return Si.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ai.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ai(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ai(si.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ai(si.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ai(si.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new ai(si.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ai(e)}static emptyPath(){return new Ai([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t){this.path=t}static fromPath(t){return new Ci(Ti.fromString(t))}static fromName(t){return new Ci(Ti.fromString(t).popFirst(5))}static empty(){return new Ci(Ti.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ti.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ti.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ci(new Ti(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ki.UNKNOWN_ID=-1;function xi(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ei.fromTimestamp(1e9===r?new _i(n+1,0):new _i(n,r));return new Ri(i,Ci.empty(),e)}function Oi(t){return new Ri(t.readTime,t.key,-1)}class Ri{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ri(Ei.min(),Ci.empty(),-1)}static max(){return new Ri(Ei.max(),Ci.empty(),-1)}}function Ni(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Ci.comparator(t.documentKey,e.documentKey),0!==n?n:wi(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const Di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t){if(t.code!==si.FAILED_PRECONDITION||t.message!==Di)throw t;Zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ri(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Mi((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Mi?e:Mi.resolve(e)}catch(t){return Mi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Mi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Mi.reject(e)}static resolve(t){return new Mi((e,n)=>{e(t)})}static reject(t){return new Mi((e,n)=>{n(t)})}static waitFor(t){return new Mi((e,n)=>{let r=0,i=0,o=!1;t.forEach(t=>{++r,t.next(()=>{++i,o&&i===r&&e()},t=>n(t))}),o=!0,i===r&&e()})}static or(t){let e=Mi.resolve(!1);for(const n of t)e=e.next(t=>t?Mi.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new Mi((n,r)=>{const i=t.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next(t=>{o[c]=t,++s,s===i&&n(o)},t=>r(t))}})}static doWhile(t,e){return new Mi((n,r)=>{const i=()=>{!0===t()?e().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function ji(t){return null==t}function Vi(t){return 0===t&&1/t==-1/0}function $i(t){return"number"==typeof t&&Number.isInteger(t)&&!Vi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ui.ct=-1;const Bi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],qi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zi=qi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ki(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t,e){this.comparator=t,this.root=e||Yi.EMPTY}insert(t,e){return new Wi(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Yi.BLACK,null,null))}remove(t){return new Wi(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Yi.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qi(this.root,t,this.comparator,!0)}}class Qi{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Yi{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Yi.RED,this.left=null!=r?r:Yi.EMPTY,this.right=null!=i?i:Yi.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Yi(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Yi.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Yi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Yi.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Yi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ri();if(this.right.isRed())throw ri();const t=this.left.check();if(t!==this.right.check())throw ri();return t+(this.isRed()?0:1)}}Yi.EMPTY=null,Yi.RED=!0,Yi.BLACK=!1,Yi.EMPTY=new class{constructor(){this.size=0}get key(){throw ri()}get value(){throw ri()}get color(){throw ri()}get left(){throw ri()}get right(){throw ri()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Yi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(t){this.comparator=t,this.data=new Wi(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(t){return new Xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ji))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ji(this.comparator);return e.data=t,e}}class Xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(t){this.fields=t,t.sort(Ai.comparator)}static empty(){return new Zi([])}unionWith(t){let e=new Ji(Ai.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Zi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return bi(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new to("Invalid base64 string: "+t):t}}(t);return new eo(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new eo(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return wi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}eo.EMPTY_BYTE_STRING=new eo("");const no=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ro(t){if(ii(!!t),"string"==typeof t){let e=0;const n=no.exec(t);if(ii(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:io(t.seconds),nanos:io(t.nanos)}}function io(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function oo(t){return"string"==typeof t?eo.fromBase64String(t):eo.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ao(t){const e=t.mapValue.fields.__previous_value__;return so(e)?ao(e):e}function co(t){const e=ro(t.mapValue.fields.__local_write_time__.timestampValue);return new _i(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e,n,r,i,o,s,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=c}}class lo{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new lo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof lo&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?so(t)?4:Co(t)?9007199254740991:10:ri()}function po(t,e){if(t===e)return!0;const n=fo(t);if(n!==fo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return co(t).isEqual(co(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ro(t.timestampValue),r=ro(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return oo(t.bytesValue).isEqual(oo(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return io(t.geoPointValue.latitude)===io(e.geoPointValue.latitude)&&io(t.geoPointValue.longitude)===io(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return io(t.integerValue)===io(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=io(t.doubleValue),r=io(e.doubleValue);return n===r?Vi(n)===Vi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],po);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Ki(n)!==Ki(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!po(n[i],r[i])))return!1;return!0}(t,e);default:return ri()}}function go(t,e){return void 0!==(t.values||[]).find(t=>po(t,e))}function vo(t,e){if(t===e)return 0;const n=fo(t),r=fo(e);if(n!==r)return wi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return wi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=io(t.integerValue||t.doubleValue),r=io(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return mo(t.timestampValue,e.timestampValue);case 4:return mo(co(t),co(e));case 5:return wi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=oo(t),r=oo(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=wi(n[i],r[i]);if(0!==t)return t}return wi(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=wi(io(t.latitude),io(e.latitude));return 0!==n?n:wi(io(t.longitude),io(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=vo(n[i],r[i]);if(t)return t}return wi(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===ho.mapValue&&e===ho.mapValue)return 0;if(t===ho.mapValue)return 1;if(e===ho.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=wi(r[s],o[s]);if(0!==t)return t;const e=vo(n[r[s]],i[o[s]]);if(0!==e)return e}return wi(r.length,o.length)}(t.mapValue,e.mapValue);default:throw ri()}}function mo(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return wi(t,e);const n=ro(t),r=ro(e),i=wi(n.seconds,r.seconds);return 0!==i?i:wi(n.nanos,r.nanos)}function yo(t){return wo(t)}function wo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ro(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?oo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ci.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=wo(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${wo(t.fields[i])}`;return n+"}"}(t.mapValue):ri();var e,n}function bo(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _o(t){return!!t&&"integerValue"in t}function Eo(t){return!!t&&"arrayValue"in t}function Io(t){return!!t&&"nullValue"in t}function To(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function So(t){return!!t&&"mapValue"in t}function Ao(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hi(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Ao(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ao(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Co(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ko{constructor(t){this.value=t}static empty(){return new ko({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!So(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ao(e)}setAll(t){let e=Ai.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Ao(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());So(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return po(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];So(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Hi(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new ko(Ao(this.value))}}function xo(t){const e=[];return Hi(t.fields,(t,n)=>{const r=new Ai([t]);if(So(n)){const t=xo(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new Zi(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Oo{constructor(t,e,n,r,i,o,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(t){return new Oo(t,0,Ei.min(),Ei.min(),Ei.min(),ko.empty(),0)}static newFoundDocument(t,e,n,r){return new Oo(t,1,e,Ei.min(),n,r,0)}static newNoDocument(t,e){return new Oo(t,2,e,Ei.min(),Ei.min(),ko.empty(),0)}static newUnknownDocument(t,e){return new Oo(t,3,e,Ei.min(),Ei.min(),ko.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ei.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ko.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ko.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ei.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Oo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Oo(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,e){this.position=t,this.inclusive=e}}function No(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?Ci.comparator(Ci.fromName(s.referenceValue),n.key):vo(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function Do(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!po(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t,e="asc"){this.field=t,this.dir=e}}function Lo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{}class Fo extends Mo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ko(t,e,n):"array-contains"===e?new Qo(t,n):"in"===e?new Yo(t,n):"not-in"===e?new Jo(t,n):"array-contains-any"===e?new Xo(t,n):new Fo(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ho(t,n):new Go(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(vo(e,this.value)):null!==e&&fo(this.value)===fo(e)&&this.matchesComparison(vo(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ri()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Uo extends Mo{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new Uo(t,e)}matches(t){return jo(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(t=>t.isInequality());return null!==t?t.field:null}ft(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function jo(t){return"and"===t.op}function Vo(t){return $o(t)&&jo(t)}function $o(t){for(const e of t.filters)if(e instanceof Uo)return!1;return!0}function Bo(t){if(t instanceof Fo)return t.field.canonicalString()+t.op.toString()+yo(t.value);if(Vo(t))return t.filters.map(t=>Bo(t)).join(",");{const e=t.filters.map(t=>Bo(t)).join(",");return`${t.op}(${e})`}}function qo(t,e){return t instanceof Fo?function(t,e){return e instanceof Fo&&t.op===e.op&&t.field.isEqual(e.field)&&po(t.value,e.value)}(t,e):t instanceof Uo?function(t,e){return e instanceof Uo&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&qo(n,e.filters[r]),!0)}(t,e):void ri()}function zo(t){return t instanceof Fo?function(t){return`${t.field.canonicalString()} ${t.op} ${yo(t.value)}`}(t):t instanceof Uo?function(t){return t.op.toString()+" {"+t.getFilters().map(zo).join(" ,")+"}"}(t):"Filter"}class Ko extends Fo{constructor(t,e,n){super(t,e,n),this.key=Ci.fromName(n.referenceValue)}matches(t){const e=Ci.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ho extends Fo{constructor(t,e){super(t,"in",e),this.keys=Wo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Go extends Fo{constructor(t,e){super(t,"not-in",e),this.keys=Wo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Wo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>Ci.fromName(t.referenceValue))}class Qo extends Fo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Eo(e)&&go(e.arrayValue,this.value)}}class Yo extends Fo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&go(this.value.arrayValue,e)}}class Jo extends Fo{constructor(t,e){super(t,"not-in",e)}matches(t){if(go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!go(this.value.arrayValue,e)}}class Xo extends Fo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Eo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>go(this.value.arrayValue,t))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.dt=null}}function ts(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Zo(t,e,n,r,i,o,s)}function es(t){const e=oi(t);if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Bo(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),ji(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>yo(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>yo(t)).join(",")),e.dt=t}return e.dt}function ns(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Lo(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qo(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Do(t.startAt,e.startAt)&&Do(t.endAt,e.endAt)}function rs(t){return Ci.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class is{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function os(t,e,n,r,i,o,s,a){return new is(t,e,n,r,i,o,s,a)}function ss(t){return new is(t)}function as(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function cs(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function us(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function ls(t){return null!==t.collectionGroup}function hs(t){const e=oi(t);if(null===e.wt){e.wt=[];const t=us(e),n=cs(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new Po(t)),e.wt.push(new Po(Ai.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Po(Ai.keyField(),t))}}}return e.wt}function fs(t){const e=oi(t);if(!e._t)if("F"===e.limitType)e._t=ts(e.path,e.collectionGroup,hs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of hs(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Po(i.field,e))}const n=e.endAt?new Ro(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ro(e.startAt.position,e.startAt.inclusive):null;e._t=ts(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function ds(t,e){e.getFirstInequalityField(),us(t);const n=t.filters.concat([e]);return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ps(t,e,n){return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gs(t,e){return ns(fs(t),fs(e))&&t.limitType===e.limitType}function vs(t){return`${es(fs(t))}|lt:${t.limitType}`}function ms(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>zo(t)).join(", ")}]`),ji(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>yo(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>yo(t)).join(",")),`Target(${e})`}(fs(t))}; limitType=${t.limitType})`}function ys(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ci.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of hs(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=No(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,hs(t),e))&&!(t.endAt&&!function(t,e,n){const r=No(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,hs(t),e))}(t,e)}function ws(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bs(t){return(e,n)=>{let r=!1;for(const i of hs(t)){const t=_s(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function _s(t,e,n){const r=t.field.isKeyField()?Ci.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?vo(r,i):ri()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ri()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Hi(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return Gi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Wi(Ci.comparator);function Ts(){return Is}const Ss=new Wi(Ci.comparator);function As(...t){let e=Ss;for(const n of t)e=e.insert(n.key,n);return e}function Cs(t){let e=Ss;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function ks(){return Os()}function xs(){return Os()}function Os(){return new Es(t=>t.toString(),(t,e)=>t.isEqual(e))}const Rs=new Wi(Ci.comparator),Ns=new Ji(Ci.comparator);function Ds(...t){let e=Ns;for(const n of t)e=e.add(n);return e}const Ps=new Ji(wi);function Ls(){return Ps}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(e)?"-0":e}}function Fs(t){return{integerValue:""+t}}function Us(t,e){return $i(e)?Fs(e):Ms(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this._=void 0}}function Vs(t,e,n){return t instanceof qs?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&so(e)&&(e=ao(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof zs?Ks(t,e):t instanceof Hs?Gs(t,e):function(t,e){const n=Bs(t,e),r=Qs(n)+Qs(t.gt);return _o(n)&&_o(t.gt)?Fs(r):Ms(t.serializer,r)}(t,e)}function $s(t,e,n){return t instanceof zs?Ks(t,e):t instanceof Hs?Gs(t,e):n}function Bs(t,e){return t instanceof Ws?_o(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class qs extends js{}class zs extends js{constructor(t){super(),this.elements=t}}function Ks(t,e){const n=Ys(e);for(const r of t.elements)n.some(t=>po(t,r))||n.push(r);return{arrayValue:{values:n}}}class Hs extends js{constructor(t){super(),this.elements=t}}function Gs(t,e){let n=Ys(e);for(const r of t.elements)n=n.filter(t=>!po(t,r));return{arrayValue:{values:n}}}class Ws extends js{constructor(t,e){super(),this.serializer=t,this.gt=e}}function Qs(t){return io(t.integerValue||t.doubleValue)}function Ys(t){return Eo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof zs&&e instanceof zs||t instanceof Hs&&e instanceof Hs?bi(t.elements,e.elements,po):t instanceof Ws&&e instanceof Ws?po(t.gt,e.gt):t instanceof qs&&e instanceof qs}(t.transform,e.transform)}class Xs{constructor(t,e){this.version=t,this.transformResults=e}}class Zs{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zs}static exists(t){return new Zs(void 0,t)}static updateTime(t){return new Zs(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ta(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ea{}function na(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new fa(t.key,Zs.none()):new aa(t.key,t.data,Zs.none());{const n=t.data,r=ko.empty();let i=new Ji(Ai.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new ca(t.key,r,new Zi(i.toArray()),Zs.none())}}function ra(t,e,n){t instanceof aa?function(t,e,n){const r=t.value.clone(),i=la(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ca?function(t,e,n){if(!ta(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=la(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ua(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ia(t,e,n,r){return t instanceof aa?function(t,e,n,r){if(!ta(t.precondition,e))return n;const i=t.value.clone(),o=ha(t.fieldTransforms,r,e);return i.setAll(o),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof ca?function(t,e,n,r){if(!ta(t.precondition,e))return n;const i=ha(t.fieldTransforms,r,e),o=e.data;return o.setAll(ua(t)),o.setAll(i),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return ta(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function oa(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Bs(r.transform,t||null);null!=i&&(null===n&&(n=ko.empty()),n.set(r.field,i))}return n||null}function sa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&bi(t,e,(t,e)=>Js(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class aa extends ea{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ca extends ea{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ua(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function la(t,e,n){const r=new Map;ii(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,$s(s,a,n[i]))}return r}function ha(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,Vs(t,o,e))}return r}class fa extends ea{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class da extends ea{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&ra(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ia(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ia(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=xs();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=e.has(r.key)?null:s;const a=na(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(Ei.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Ds())}isEqual(t){return this.batchId===t.batchId&&bi(this.mutations,t.mutations,(t,e)=>sa(t,e))&&bi(this.baseMutations,t.baseMutations,(t,e)=>sa(t,e))}}class ga{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){ii(t.mutations.length===n.length);let r=Rs;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new ga(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ma{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ya,wa;function ba(t){switch(t){default:return ri();case si.CANCELLED:case si.UNKNOWN:case si.DEADLINE_EXCEEDED:case si.RESOURCE_EXHAUSTED:case si.INTERNAL:case si.UNAVAILABLE:case si.UNAUTHENTICATED:return!1;case si.INVALID_ARGUMENT:case si.NOT_FOUND:case si.ALREADY_EXISTS:case si.PERMISSION_DENIED:case si.FAILED_PRECONDITION:case si.ABORTED:case si.OUT_OF_RANGE:case si.UNIMPLEMENTED:case si.DATA_LOSS:return!0}}function _a(t){if(void 0===t)return ti("GRPC error has no .code"),si.UNKNOWN;switch(t){case ya.OK:return si.OK;case ya.CANCELLED:return si.CANCELLED;case ya.UNKNOWN:return si.UNKNOWN;case ya.DEADLINE_EXCEEDED:return si.DEADLINE_EXCEEDED;case ya.RESOURCE_EXHAUSTED:return si.RESOURCE_EXHAUSTED;case ya.INTERNAL:return si.INTERNAL;case ya.UNAVAILABLE:return si.UNAVAILABLE;case ya.UNAUTHENTICATED:return si.UNAUTHENTICATED;case ya.INVALID_ARGUMENT:return si.INVALID_ARGUMENT;case ya.NOT_FOUND:return si.NOT_FOUND;case ya.ALREADY_EXISTS:return si.ALREADY_EXISTS;case ya.PERMISSION_DENIED:return si.PERMISSION_DENIED;case ya.FAILED_PRECONDITION:return si.FAILED_PRECONDITION;case ya.ABORTED:return si.ABORTED;case ya.OUT_OF_RANGE:return si.OUT_OF_RANGE;case ya.UNIMPLEMENTED:return si.UNIMPLEMENTED;case ya.DATA_LOSS:return si.DATA_LOSS;default:return ri()}}(wa=ya||(ya={}))[wa.OK=0]="OK",wa[wa.CANCELLED=1]="CANCELLED",wa[wa.UNKNOWN=2]="UNKNOWN",wa[wa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",wa[wa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",wa[wa.NOT_FOUND=5]="NOT_FOUND",wa[wa.ALREADY_EXISTS=6]="ALREADY_EXISTS",wa[wa.PERMISSION_DENIED=7]="PERMISSION_DENIED",wa[wa.UNAUTHENTICATED=16]="UNAUTHENTICATED",wa[wa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",wa[wa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",wa[wa.ABORTED=10]="ABORTED",wa[wa.OUT_OF_RANGE=11]="OUT_OF_RANGE",wa[wa.UNIMPLEMENTED=12]="UNIMPLEMENTED",wa[wa.INTERNAL=13]="INTERNAL",wa[wa.UNAVAILABLE=14]="UNAVAILABLE",wa[wa.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ea{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ia}static getOrCreateInstance(){return null===Ia&&(Ia=new Ea),Ia}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(e=>e(t))}}let Ia=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Gr([4294967295,4294967295],0);function Aa(t){const e=Ta().encode(t),n=new Hr;return n.update(e),new Uint8Array(n.digest())}function Ca(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([i,o],0)]}class ka{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new xa(`Invalid padding: ${e}`);if(n<0)throw new xa(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new xa(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new xa(`Invalid padding when bitmap length is 0: ${e}`);this.It=8*t.length-e,this.Tt=Gr.fromNumber(this.It)}Et(t,e,n){let r=t.add(e.multiply(Gr.fromNumber(n)));return 1===r.compare(Sa)&&(r=new Gr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}vt(t){if(0===this.It)return!1;const e=Aa(t),[n,r]=Ca(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,r,i);if(!this.At(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new ka(i,r,e);return n.forEach(t=>o.insert(t)),o}insert(t){if(0===this.It)return;const e=Aa(t),[n,r]=Ca(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,r,i);this.Rt(t)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Ra.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Oa(Ei.min(),r,new Wi(wi),Ts(),Ds())}}class Ra{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Ra(n,e,Ds(),Ds(),Ds())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e,n,r){this.Pt=t,this.removedTargetIds=e,this.key=n,this.bt=r}}class Da{constructor(t,e){this.targetId=t,this.Vt=e}}class Pa{constructor(t,e,n=eo.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class La{constructor(){this.St=0,this.Dt=Ua(),this.Ct=eo.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=Ds(),e=Ds(),n=Ds();return this.Dt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:ri()}}),new Ra(this.Ct,this.xt,t,e,n)}Ft(){this.Nt=!1,this.Dt=Ua()}Bt(t,e){this.Nt=!0,this.Dt=this.Dt.insert(t,e)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Ma{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=Ts(),this.zt=Fa(),this.Wt=new Wi(wi)}Ht(t){for(const e of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(e,t.bt):this.Yt(e,t.key,t.bt);for(const e of t.removedTargetIds)this.Yt(e,t.key,t.bt)}Xt(t){this.forEachTarget(t,e=>{const n=this.Zt(e);switch(t.state){case 0:this.te(e)&&n.$t(t.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(t.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(e);break;case 3:this.te(e)&&(n.Kt(),n.$t(t.resumeToken));break;case 4:this.te(e)&&(this.ee(e),n.$t(t.resumeToken));break;default:ri()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qt.forEach((t,n)=>{this.te(n)&&e(n)})}ne(t){var e;const n=t.targetId,r=t.Vt.count,i=this.se(n);if(i){const o=i.target;if(rs(o))if(0===r){const t=new Ci(o.path);this.Yt(n,t,Oo.newNoDocument(t,Ei.min()))}else ii(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(t,i);if(0!==r){this.ee(n);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,t)}null===(e=Ea.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var r,i,o,s,a,c;const u={localCacheCount:e,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===t,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(s=null===(o=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===o?void 0:o.length)&&void 0!==s?s:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,t.Vt))}}}}re(t,e){const{unchangedNames:n,count:r}=t.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:s=0}=n;let a,c;try{a=oo(i).toUint8Array()}catch(t){if(t instanceof to)return ei("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new ka(a,o,s)}catch(t){return ei(t instanceof xa?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.It?1:r!==e-this.oe(t.targetId,c)?2:0}oe(t,e){const n=this.Gt.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.Gt.ue(),o=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.vt(o)||(this.Yt(t,n,null),r++)}),r}ce(t){const e=new Map;this.Qt.forEach((n,r)=>{const i=this.se(r);if(i){if(n.current&&rs(i.target)){const e=new Ci(i.target.path);null!==this.jt.get(e)||this.ae(r,e)||this.Yt(r,e,Oo.newNoDocument(e,t))}n.Mt&&(e.set(r,n.Ot()),n.Ft())}});let n=Ds();this.zt.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.se(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.jt.forEach((e,n)=>n.setReadTime(t));const r=new Oa(t,e,this.Wt,this.jt,n);return this.jt=Ts(),this.zt=Fa(),this.Wt=new Wi(wi),r}Jt(t,e){if(!this.te(t))return;const n=this.ae(t,e.key)?2:0;this.Zt(t).Bt(e.key,n),this.jt=this.jt.insert(e.key,e),this.zt=this.zt.insert(e.key,this.he(e.key).add(t))}Yt(t,e,n){if(!this.te(t))return;const r=this.Zt(t);this.ae(t,e)?r.Bt(e,1):r.Lt(e),this.zt=this.zt.insert(e,this.he(e).delete(t)),n&&(this.jt=this.jt.insert(e,n))}removeTarget(t){this.Qt.delete(t)}ie(t){const e=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let e=this.Qt.get(t);return e||(e=new La,this.Qt.set(t,e)),e}he(t){let e=this.zt.get(t);return e||(e=new Ji(wi),this.zt=this.zt.insert(t,e)),e}te(t){const e=null!==this.se(t);return e||Zr("WatchChangeAggregator","Detected inactive target",t),e}se(t){const e=this.Qt.get(t);return e&&e.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new La),this.Gt.getRemoteKeysForTarget(t).forEach(e=>{this.Yt(t,e,null)})}ae(t,e){return this.Gt.getRemoteKeysForTarget(t).has(e)}}function Fa(){return new Wi(Ci.comparator)}function Ua(){return new Wi(Ci.comparator)}const ja=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Va=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),$a=(()=>{const t={and:"AND",or:"OR"};return t})();class Ba{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function qa(t,e){return t.useProto3Json||ji(e)?e:{value:e}}function za(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ka(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ha(t,e){return za(t,e.toTimestamp())}function Ga(t){return ii(!!t),Ei.fromTimestamp(function(t){const e=ro(t);return new _i(e.seconds,e.nanos)}(t))}function Wa(t,e){return function(t){return new Ti(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Qa(t){const e=Ti.fromString(t);return ii(yc(e)),e}function Ya(t,e){return Wa(t.databaseId,e.path)}function Ja(t,e){const n=Qa(e);if(n.get(1)!==t.databaseId.projectId)throw new ai(si.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ai(si.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ci(ec(n))}function Xa(t,e){return Wa(t.databaseId,e)}function Za(t){const e=Qa(t);return 4===e.length?Ti.emptyPath():ec(e)}function tc(t){return new Ti(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ec(t){return ii(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function nc(t,e,n){return{name:Ya(t,e),fields:n.value.mapValue.fields}}function rc(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ri()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(ii(void 0===e||"string"==typeof e),eo.fromBase64String(e||"")):(ii(void 0===e||e instanceof Uint8Array),eo.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?si.UNKNOWN:_a(t.code);return new ai(e,t.message||"")}(s);n=new Pa(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ja(t,r.document.name),o=Ga(r.document.updateTime),s=r.document.createTime?Ga(r.document.createTime):Ei.min(),a=new ko({mapValue:{fields:r.document.fields}}),c=Oo.newFoundDocument(i,o,s,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Na(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ja(t,r.document),o=r.readTime?Ga(r.readTime):Ei.min(),s=Oo.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Na([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ja(t,r.document),o=r.removedTargetIds||[];n=new Na([],o,i,null)}else{if(!("filter"in e))return ri();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,o=new ma(r,i),s=t.targetId;n=new Da(s,o)}}return n}function ic(t,e){let n;if(e instanceof aa)n={update:nc(t,e.key,e.value)};else if(e instanceof fa)n={delete:Ya(t,e.key)};else if(e instanceof ca)n={update:nc(t,e.key,e.data),updateMask:mc(e.fieldMask)};else{if(!(e instanceof da))return ri();n={verify:Ya(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof qs)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof zs)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Hs)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ws)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw ri()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ha(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ri()}(t,e.precondition)),n}function oc(t,e){return t&&t.length>0?(ii(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Ga(t.updateTime):Ga(e);return n.isEqual(Ei.min())&&(n=Ga(e)),new Xs(n,t.transformResults||[])}(t,e))):[]}function sc(t,e){return{documents:[Xa(t,e.path)]}}function ac(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Xa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return vc(Uo.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:pc(t.field),direction:hc(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=qa(t,e.limit);var a;return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function cc(t){let e=Za(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ii(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=function(t){const e=lc(t);return e instanceof Uo&&Vo(e)?e.getFilters():[e]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(t=>function(t){return new Po(gc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ji(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ro(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Ro(n,e)}(n.endAt)),os(e,i,s,o,a,"F",c,u)}function uc(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ri()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function lc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=gc(t.unaryFilter.field);return Fo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=gc(t.unaryFilter.field);return Fo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=gc(t.unaryFilter.field);return Fo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=gc(t.unaryFilter.field);return Fo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ri()}}(t):void 0!==t.fieldFilter?function(t){return Fo.create(gc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ri()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Uo.create(t.compositeFilter.filters.map(t=>lc(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ri()}}(t.compositeFilter.op))}(t):ri()}function hc(t){return ja[t]}function fc(t){return Va[t]}function dc(t){return $a[t]}function pc(t){return{fieldPath:t.canonicalString()}}function gc(t){return Ai.fromServerFormat(t.fieldPath)}function vc(t){return t instanceof Fo?function(t){if("=="===t.op){if(To(t.value))return{unaryFilter:{field:pc(t.field),op:"IS_NAN"}};if(Io(t.value))return{unaryFilter:{field:pc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(To(t.value))return{unaryFilter:{field:pc(t.field),op:"IS_NOT_NAN"}};if(Io(t.value))return{unaryFilter:{field:pc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pc(t.field),op:fc(t.op),value:t.value}}}(t):t instanceof Uo?function(t){const e=t.getFilters().map(t=>vc(t));return 1===e.length?e[0]:{compositeFilter:{op:dc(t.op),filters:e}}}(t):ri()}function mc(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e,n,r,i=Ei.min(),o=Ei.min(),s=eo.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s,this.expectedCount=a}withSequenceNumber(t){return new wc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new wc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new wc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new wc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){this.fe=t}}function _c(t){const e=cc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ps(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ec{constructor(){}_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(io(t.integerValue));else if("doubleValue"in t){const n=io(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),Vi(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(oo(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?Co(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):ri()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){const n=t.fields||{};this.ye(e,55);for(const r of Object.keys(n))this.Te(r,e),this.me(n[r],e)}Pe(t,e){const n=t.values||[];this.ye(e,50);for(const r of n)this.me(r,e)}ve(t,e){this.ye(e,37),Ci.fromName(t).path.forEach(t=>{this.ye(e,60),this.be(t,e)})}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}}Ec.Ve=new Ec;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(){this.rn=new Tc}addToCollectionParentIndex(t,e){return this.rn.add(e),Mi.resolve()}getCollectionParents(t,e){return Mi.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return Mi.resolve()}deleteFieldIndex(t,e){return Mi.resolve()}getDocumentsMatchingTarget(t,e){return Mi.resolve(null)}getIndexType(t,e){return Mi.resolve(0)}getFieldIndexes(t,e){return Mi.resolve([])}getNextCollectionGroupToUpdate(t){return Mi.resolve(null)}getMinOffset(t,e){return Mi.resolve(Ri.min())}getMinOffsetFromCollectionGroup(t,e){return Mi.resolve(Ri.min())}updateCollectionGroup(t,e,n){return Mi.resolve()}updateIndexEntries(t,e){return Mi.resolve()}}class Tc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ji(Ti.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ji(Ti.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Sc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Sc(t,Sc.DEFAULT_COLLECTION_PERCENTILE,Sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sc.DEFAULT_COLLECTION_PERCENTILE=10,Sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Sc.DEFAULT=new Sc(41943040,Sc.DEFAULT_COLLECTION_PERCENTILE,Sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Sc.DISABLED=new Sc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Ac(0)}static Mn(){return new Ac(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(){this.changes=new Es(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Oo.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Mi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&ia(n.mutation,t,Zi.empty(),_i.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,Ds()).next(()=>e))}getLocalViewOfDocuments(t,e,n=Ds()){const r=ks();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=As();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=ks();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Ds()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let i=Ts();const o=Os(),s=Os();return e.forEach((t,e)=>{const s=n.get(e.key);r.has(e.key)&&(void 0===s||s.mutation instanceof ca)?i=i.insert(e.key,e):void 0!==s?(o.set(e.key,s.mutation.getFieldMask()),ia(s.mutation,e,s.mutation.getFieldMask(),_i.now())):o.set(e.key,Zi.empty())}),this.recalculateAndSaveOverlays(t,i).next(t=>(t.forEach((t,e)=>o.set(t,e)),e.forEach((t,e)=>{var n;return s.set(t,new kc(e,null!==(n=o.get(t))&&void 0!==n?n:null))}),s))}recalculateAndSaveOverlays(t,e){const n=Os();let r=new Wi((t,e)=>t-e),i=Ds();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const i of t)i.keys().forEach(t=>{const o=e.get(t);if(null===o)return;let s=n.get(t)||Zi.empty();s=i.applyToLocalView(o,s),n.set(t,s);const a=(r.get(i.batchId)||Ds()).add(t);r=r.insert(i.batchId,a)})}).next(()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,c=r.value,u=xs();c.forEach(t=>{if(!i.has(t)){const r=na(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}}),o.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Mi.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return function(t){return Ci.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ls(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Mi.resolve(ks());let s=-1,a=i;return o.next(e=>Mi.forEach(e,(e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(e)?Mi.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,i)).next(()=>this.computeViews(t,a,e,Ds())).next(t=>({batchId:s,changes:Cs(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Ci(e)).next(t=>{let e=As();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=As();return this.indexManager.getCollectionParents(t,r).next(o=>Mi.forEach(o,o=>{const s=function(t,e){return new is(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,s,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r))).next(t=>{r.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Oo.newInvalidDocument(r)))});let n=As();return t.forEach((t,i)=>{const o=r.get(t);void 0!==o&&ia(o.mutation,i,Zi.empty(),_i.now()),ys(e,i)&&(n=n.insert(t,i))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return Mi.resolve(this.cs.get(e))}saveBundleMetadata(t,e){var n;return this.cs.set(e.id,{id:(n=e).id,version:n.version,createTime:Ga(n.createTime)}),Mi.resolve()}getNamedQuery(t,e){return Mi.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,function(t){return{name:t.name,query:_c(t.bundledQuery),readTime:Ga(t.readTime)}}(e)),Mi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.overlays=new Wi(Ci.comparator),this.ls=new Map}getOverlay(t,e){return Mi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ks();return Mi.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.we(t,e,r)}),Mi.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.ls.delete(n)),Mi.resolve()}getOverlaysForCollection(t,e,n){const r=ks(),i=e.length+1,o=new Ci(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Mi.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Wi((t,e)=>t-e);const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=ks(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=ks(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>s.set(t,e)),s.size()>=r)break;return Mi.resolve(s)}we(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new va(e,n));let i=this.ls.get(e);void 0===i&&(i=Ds(),this.ls.set(e,i)),this.ls.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.fs=new Ji(Dc.ds),this.ws=new Ji(Dc._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){const n=new Dc(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.ys(new Dc(t,e))}ps(t,e){t.forEach(t=>this.removeReference(t,e))}Is(t){const e=new Ci(new Ti([])),n=new Dc(e,t),r=new Dc(e,t+1),i=[];return this.ws.forEachInRange([n,r],t=>{this.ys(t),i.push(t.key)}),i}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const e=new Ci(new Ti([])),n=new Dc(e,t),r=new Dc(e,t+1);let i=Ds();return this.ws.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Dc(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Dc{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return Ci.comparator(t.key,e.key)||wi(t.As,e.As)}static _s(t,e){return wi(t.As,e.As)||Ci.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new Ji(Dc.ds)}checkEmpty(t){return Mi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pa(i,e,n,r);this.mutationQueue.push(o);for(const s of r)this.Rs=this.Rs.add(new Dc(s.key,i)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return Mi.resolve(o)}lookupMutationBatch(t,e){return Mi.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.bs(n),i=r<0?0:r;return Mi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Mi.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return Mi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Dc(e,0),r=new Dc(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],t=>{const e=this.Ps(t.As);i.push(e)}),Mi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ji(wi);return e.forEach(t=>{const e=new Dc(t,0),r=new Dc(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,r],t=>{n=n.add(t.As)})}),Mi.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Ci.isDocumentKey(i)||(i=i.child(""));const o=new Dc(new Ci(i),0);let s=new Ji(wi);return this.Rs.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.As)),!0)},o),Mi.resolve(this.Vs(s))}Vs(t){const e=[];return t.forEach(t=>{const n=this.Ps(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){ii(0===this.Ss(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Mi.forEach(e.mutations,r=>{const i=new Dc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Rs=n})}Cn(t){}containsKey(t,e){const n=new Dc(e,0),r=this.Rs.firstAfterOrEqual(n);return Mi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Mi.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){const e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this.Ds=t,this.docs=new Wi(Ci.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Mi.resolve(n?n.document.mutableCopy():Oo.newInvalidDocument(e))}getEntries(t,e){let n=Ts();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Oo.newInvalidDocument(t))}),Mi.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Ts();const o=e.path,s=new Ci(o.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:t,value:{document:s}}=a.getNext();if(!o.isPrefixOf(t.path))break;t.path.length>o.length+1||Ni(Oi(s),n)<=0||(r.has(s.key)||ys(e,s))&&(i=i.insert(s.key,s.mutableCopy()))}return Mi.resolve(i)}getAllFromCollectionGroup(t,e,n,r){ri()}Cs(t,e){return Mi.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Mc(this)}getSize(t){return Mi.resolve(this.size)}}class Mc extends Cc{constructor(t){super(),this.os=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.os.addEntry(t,r)):this.os.removeEntry(n)}),Mi.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t){this.persistence=t,this.xs=new Es(t=>es(t),ns),this.lastRemoteSnapshotVersion=Ei.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Nc,this.targetCount=0,this.Ms=Ac.kn()}forEachTarget(t,e){return this.xs.forEach((t,n)=>e(n)),Mi.resolve()}getLastRemoteSnapshotVersion(t){return Mi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Mi.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),Mi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),Mi.resolve()}Fn(t){this.xs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ms=new Ac(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,Mi.resolve()}updateTargetData(t,e){return this.Fn(e),Mi.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,Mi.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.xs.forEach((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)}),Mi.waitFor(i).next(()=>r)}getTargetCount(t){return Mi.resolve(this.targetCount)}getTargetData(t,e){const n=this.xs.get(e)||null;return Mi.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),Mi.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),Mi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),Mi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ks.Es(e);return Mi.resolve(n)}containsKey(t,e){return Mi.resolve(this.ks.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e){this.$s={},this.overlays={},this.Os=new Ui(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Fc(this),this.indexManager=new Ic,this.remoteDocumentCache=function(t){return new Lc(t)}(t=>this.referenceDelegate.Ls(t)),this.serializer=new bc(e),this.qs=new Oc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Rc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new Pc(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){Zr("MemoryPersistence","Starting transaction:",t);const r=new jc(this.Os.next());return this.referenceDelegate.Us(),n(r).next(t=>this.referenceDelegate.Ks(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Gs(t,e){return Mi.or(Object.values(this.$s).map(n=>()=>n.containsKey(t,e)))}}class jc extends Pi{constructor(t){super(),this.currentSequenceNumber=t}}class Vc{constructor(t){this.persistence=t,this.Qs=new Nc,this.js=null}static zs(t){return new Vc(t)}get Ws(){if(this.js)return this.js;throw ri()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),Mi.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),Mi.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),Mi.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach(t=>this.Ws.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Ws.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Us(){this.js=new Set}Ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Mi.forEach(this.Ws,n=>{const r=Ci.fromPath(n);return this.Hs(t,r).next(t=>{t||e.removeEntry(r,Ei.min())})}).next(()=>(this.js=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hs(t,e).next(t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())})}Ls(t){return 0}Hs(t,e){return Mi.or([()=>Mi.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $c{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=r}static Li(t,e){let n=Ds(),r=Ds();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new $c(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ki(t,e).next(i=>i||this.Gi(t,e,r,n)).next(n=>n||this.Qi(t,e))}Ki(t,e){if(as(e))return Mi.resolve(null);let n=fs(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=ps(e,null,"F"),n=fs(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const i=Ds(...r);return this.Ui.getDocuments(t,i).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const o=this.ji(e,r);return this.zi(e,o,i,n.readTime)?this.Ki(t,ps(e,null,"F")):this.Wi(t,o,e,n)}))})))}Gi(t,e,n,r){return as(e)||r.isEqual(Ei.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next(i=>{const o=this.ji(e,i);return this.zi(e,o,n,r)?this.Qi(t,e):(Xr()<=s.$b.DEBUG&&Zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ms(e)),this.Wi(t,o,e,xi(r,-1)))})}ji(t,e){let n=new Ji(bs(t));return e.forEach((e,r)=>{ys(t,r)&&(n=n.add(r))}),n}zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(t,e){return Xr()<=s.$b.DEBUG&&Zr("QueryEngine","Using full collection scan to execute query:",ms(e)),this.Ui.getDocumentsMatchingQuery(t,e,Ri.min())}Wi(t,e,n,r){return this.Ui.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t,e,n,r){this.persistence=t,this.Hi=e,this.serializer=r,this.Ji=new Wi(wi),this.Yi=new Es(t=>es(t),ns),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xc(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}function zc(t,e,n,r){return new qc(t,e,n,r)}async function Kc(t,e){const n=oi(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const i=[],o=[];let s=Ds();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next(t=>({er:t,removedBatchIds:i,addedBatchIds:o}))})})}function Hc(t,e){const n=oi(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=Mi.resolve();return o.forEach(t=>{s=s.next(()=>r.getEntry(e,t)).next(e=>{const o=n.docVersions.get(t);ii(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),s.next(()=>t.mutationQueue.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ds();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}function Gc(t){const e=oi(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function Wc(t,e){const n=oi(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const s=[];e.targetChanges.forEach((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.Bs.removeMatchingKeys(t,o.removedDocuments,a).next(()=>n.Bs.addMatchingKeys(t,o.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(eo.EMPTY_BYTE_STRING,Ei.min()).withLastLimboFreeSnapshotVersion(Ei.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,o)&&s.push(n.Bs.updateTargetData(t,u))});let a=Ts(),c=Ds();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),s.push(Qc(t,o,e.documentUpdates).next(t=>{a=t.nr,c=t.sr})),!r.isEqual(Ei.min())){const e=n.Bs.getLastRemoteSnapshotVersion(t).next(e=>n.Bs.setTargetsMetadata(t,t.currentSequenceNumber,r));s.push(e)}return Mi.waitFor(s).next(()=>o.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.Ji=i,t))}function Qc(t,e,n){let r=Ds(),i=Ds();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=Ts();return n.forEach((n,o)=>{const s=t.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(Ei.min())?(e.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(o),r=r.insert(n,o)):Zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)}),{nr:r,sr:i}})}function Yc(t,e){const n=oi(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function Jc(t,e){const n=oi(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Bs.getTargetData(t,e).next(i=>i?(r=i,Mi.resolve(r)):n.Bs.allocateTargetId(t).next(i=>(r=new wc(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Bs.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Ji.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t})}async function Xc(t,e,n){const r=oi(t),i=r.Ji.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Fi(t))throw t;Zr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Zc(t,e,n){const r=oi(t);let i=Ei.min(),o=Ds();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=oi(t),i=r.Yi.get(n);return void 0!==i?Mi.resolve(r.Ji.get(i)):r.Bs.getTargetData(e,n)}(r,t,fs(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{o=t})}).next(()=>r.Hi.getDocumentsMatchingQuery(t,e,n?i:Ei.min(),n?o:Ds())).next(t=>(tu(r,ws(e),t),{documents:t,ir:o})))}function tu(t,e,n){let r=t.Xi.get(e)||Ei.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Xi.set(e,r)}class eu{constructor(){this.activeTargetIds=Ls()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nu{constructor(){this.Hr=new eu,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new eu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{Yr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){Zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou=null;function su(){return null===ou?ou=268435456+Math.round(2147483648*Math.random()):ou++,"0x"+ou.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const au={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="WebChannelConnection";class lu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,n,r,i){const o=su(),s=this.To(t,e);Zr("RestConnection",`Sending RPC '${t}' ${o}:`,s,n);const a={};return this.Eo(a,r,i),this.Ao(t,s,a,n).then(e=>(Zr("RestConnection",`Received RPC '${t}' ${o}: `,e),e),e=>{throw ei("RestConnection",`RPC '${t}' ${o} failed with error: `,e,"url: ",s,"request:",n),e})}vo(t,e,n,r,i,o){return this.Io(t,e,n,r,i)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Yr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}To(t,e){const n=au[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,r){const i=su();return new Promise((o,s)=>{const a=new Kr;a.setWithCredentials(!0),a.listenOnce(Vr.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case jr.NO_ERROR:const e=a.getResponseJson();Zr(uu,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),o(e);break;case jr.TIMEOUT:Zr(uu,`RPC '${t}' ${i} timed out`),s(new ai(si.DEADLINE_EXCEEDED,"Request time out"));break;case jr.HTTP_ERROR:const n=a.getStatus();if(Zr(uu,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(si).indexOf(e)>=0?e:si.UNKNOWN}(e.status);s(new ai(t,e.message))}else s(new ai(si.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new ai(si.UNAVAILABLE,"Connection failed."));break;default:ri()}}finally{Zr(uu,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(r);Zr(uu,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)})}Ro(t,e,n){const r=su(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Fr(),s=Ur(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new qr({})),this.Eo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Zr(uu,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=o.createWebChannel(u,a);let h=!1,f=!1;const d=new cu({ro:e=>{f?Zr(uu,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(Zr(uu,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),Zr(uu,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},oo:()=>l.close()}),p=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return p(l,zr.EventType.OPEN,()=>{f||Zr(uu,`RPC '${t}' stream ${r} transport opened.`)}),p(l,zr.EventType.CLOSE,()=>{f||(f=!0,Zr(uu,`RPC '${t}' stream ${r} transport closed`),d.wo())}),p(l,zr.EventType.ERROR,e=>{f||(f=!0,ei(uu,`RPC '${t}' stream ${r} transport errored:`,e),d.wo(new ai(si.UNAVAILABLE,"The operation could not be completed")))}),p(l,zr.EventType.MESSAGE,e=>{var n;if(!f){const i=e.data[0];ii(!!i);const o=i,s=o.error||(null===(n=o[0])||void 0===n?void 0:n.error);if(s){Zr(uu,`RPC '${t}' stream ${r} received error:`,s);const e=s.status;let n=function(t){const e=ya[t];if(void 0!==e)return _a(e)}(e),i=s.message;void 0===n&&(n=si.INTERNAL,i="Unknown error status: "+e+" with message "+s.message),f=!0,d.wo(new ai(n,i)),l.close()}else Zr(uu,`RPC '${t}' stream ${r} received:`,i),d._o(i)}}),p(s,$r.STAT_EVENT,e=>{e.stat===Br.PROXY?Zr(uu,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===Br.NOPROXY&&Zr(uu,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.fo()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t){return new Ba(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,e,n=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,e-n);r>0&&Zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,e,n,r,i,o,s,a){this.ii=t,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new du(t,e)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===si.RESOURCE_EXHAUSTED?(ti(e.toString()),ti("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===si.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Fo===e&&this.Zo(t,n)},e=>{t(()=>{const t=new ai(si.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)})})}Zo(t,e){const n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo(()=>{n(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(t=>{n(()=>this.tu(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return Zr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget(()=>this.Fo===t?e():(Zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gu extends pu{constructor(t,e,n,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.serializer=i}eu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.qo.reset();const e=rc(this.serializer,t),n=function(t){if(!("targetChange"in t))return Ei.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ei.min():e.readTime?Ga(e.readTime):Ei.min()}(t);return this.listener.nu(e,n)}su(t){const e={};e.database=tc(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=rs(r)?{documents:sc(t,r)}:{query:ac(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Ka(t,e.resumeToken);const r=qa(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Ei.min())>0){n.readTime=za(t,e.snapshotVersion.toTimestamp());const r=qa(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=uc(this.serializer,t);n&&(e.labels=n),this.Wo(e)}iu(t){const e={};e.database=tc(this.serializer),e.removeTarget=t,this.Wo(e)}}class vu extends pu{constructor(t,e,n,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){if(ii(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const e=oc(t.writeResults,t.commitTime),n=Ga(t.commitTime);return this.listener.cu(n,e)}return ii(!t.writeResults||0===t.writeResults.length),this.ru=!0,this.listener.au()}hu(){const t={};t.database=tc(this.serializer),this.Wo(t)}uu(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>ic(this.serializer,t))};this.Wo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new ai(si.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(si.UNKNOWN,t.toString())})}vo(t,e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(t,e,n,i,o,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(si.UNKNOWN,t.toString())})}terminate(){this.lu=!0}}class yu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ti(e),this.mu=!1):Zr("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(t=>{n.enqueueAndForget(async()=>{ku(this)&&(Zr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=oi(t);e.vu.add(4),await _u(e),e.bu.set("Unknown"),e.vu.delete(4),await bu(e)}(this))})}),this.bu=new yu(n,r)}}async function bu(t){if(ku(t))for(const e of t.Ru)await e(!0)}async function _u(t){for(const e of t.Ru)await e(!1)}function Eu(t,e){const n=oi(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Cu(n)?Au(n):Hu(n).Ko()&&Tu(n,e))}function Iu(t,e){const n=oi(t),r=Hu(n);n.Au.delete(e),r.Ko()&&Su(n,e),0===n.Au.size&&(r.Ko()?r.jo():ku(n)&&n.bu.set("Unknown"))}function Tu(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ei.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hu(t).su(e)}function Su(t,e){t.Vu.qt(e),Hu(t).iu(e)}function Au(t){t.Vu=new Ma({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Hu(t).start(),t.bu.gu()}function Cu(t){return ku(t)&&!Hu(t).Uo()&&t.Au.size>0}function ku(t){return 0===oi(t).vu.size}function xu(t){t.Vu=void 0}async function Ou(t){t.Au.forEach((e,n)=>{Tu(t,e)})}async function Ru(t,e){xu(t),Cu(t)?(t.bu.Iu(e),Au(t)):t.bu.set("Unknown")}async function Nu(t,e,n){if(t.bu.set("Online"),e instanceof Pa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Au.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Au.delete(r),t.Vu.removeTarget(r))}(t,e)}catch(n){Zr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Du(t,n)}else if(e instanceof Na?t.Vu.Ht(e):e instanceof Da?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(Ei.min()))try{const e=await Gc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Vu.ce(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Au.get(r);i&&t.Au.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const r=t.Au.get(e);if(!r)return;t.Au.set(e,r.withResumeToken(eo.EMPTY_BYTE_STRING,r.snapshotVersion)),Su(t,e);const i=new wc(r.target,e,n,r.sequenceNumber);Tu(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Zr("RemoteStore","Failed to raise snapshot:",e),await Du(t,e)}}async function Du(t,e,n){if(!Fi(e))throw e;t.vu.add(1),await _u(t),t.bu.set("Offline"),n||(n=()=>Gc(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Zr("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await bu(t)})}function Pu(t,e){return e().catch(n=>Du(t,n,e))}async function Lu(t){const e=oi(t),n=Gu(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Mu(e);)try{const t=await Yc(e.localStore,r);if(null===t){0===e.Eu.length&&n.jo();break}r=t.batchId,Fu(e,t)}catch(t){await Du(e,t)}Uu(e)&&ju(e)}function Mu(t){return ku(t)&&t.Eu.length<10}function Fu(t,e){t.Eu.push(e);const n=Gu(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Uu(t){return ku(t)&&!Gu(t).Uo()&&t.Eu.length>0}function ju(t){Gu(t).start()}async function Vu(t){Gu(t).hu()}async function $u(t){const e=Gu(t);for(const n of t.Eu)e.uu(n.mutations)}async function Bu(t,e,n){const r=t.Eu.shift(),i=ga.from(r,e,n);await Pu(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Lu(t)}async function qu(t,e){e&&Gu(t).ou&&await async function(t,e){if(n=e.code,ba(n)&&n!==si.ABORTED){const n=t.Eu.shift();Gu(t).Qo(),await Pu(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Lu(t)}var n}(t,e),Uu(t)&&ju(t)}async function zu(t,e){const n=oi(t);n.asyncQueue.verifyOperationInProgress(),Zr("RemoteStore","RemoteStore received new credentials");const r=ku(n);n.vu.add(3),await _u(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await bu(n)}async function Ku(t,e){const n=oi(t);e?(n.vu.delete(2),await bu(n)):e||(n.vu.add(2),await _u(n),n.bu.set("Unknown"))}function Hu(t){return t.Su||(t.Su=function(t,e,n){const r=oi(t);return r.fu(),new gu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{uo:Ou.bind(null,t),ao:Ru.bind(null,t),nu:Nu.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Cu(t)?Au(t):t.bu.set("Unknown")):(await t.Su.stop(),xu(t))})),t.Su}function Gu(t){return t.Du||(t.Du=function(t,e,n){const r=oi(t);return r.fu(),new vu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{uo:Vu.bind(null,t),ao:qu.bind(null,t),au:$u.bind(null,t),cu:Bu.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Lu(t)):(await t.Du.stop(),t.Eu.length>0&&(Zr("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Wu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Wu(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ai(si.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qu(t,e){if(ti("AsyncQueue",`${e}: ${t}`),Fi(t))return new ai(si.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ci.comparator(e.key,n.key):(t,e)=>Ci.comparator(t.key,e.key),this.keyedMap=As(),this.sortedSet=new Wi(this.comparator)}static emptySet(t){return new Yu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Yu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Yu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.Cu=new Wi(Ci.comparator)}track(t){const e=t.doc.key,n=this.Cu.get(e);n?0!==t.type&&3===n.type?this.Cu=this.Cu.insert(e,t):3===t.type&&1!==n.type?this.Cu=this.Cu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Cu=this.Cu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Cu=this.Cu.remove(e):1===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):ri():this.Cu=this.Cu.insert(e,t)}xu(){const t=[];return this.Cu.inorderTraversal((e,n)=>{t.push(n)}),t}}class Xu{constructor(t,e,n,r,i,o,s,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const o=[];return e.forEach(t=>{o.push({type:0,doc:t})}),new Xu(t,e,Yu.emptySet(e),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&gs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this.Nu=void 0,this.listeners=[]}}class tl{constructor(){this.queries=new Es(t=>vs(t),gs),this.onlineState="Unknown",this.ku=new Set}}async function el(t,e){const n=oi(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Zu),i)try{o.Nu=await n.onListen(r)}catch(t){const n=Qu(t,`Initialization of query '${ms(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.Mu(n.onlineState),o.Nu&&e.$u(o.Nu)&&ol(n)}async function nl(t,e){const n=oi(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function rl(t,e){const n=oi(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.$u(i)&&(r=!0);e.Nu=i}}r&&ol(n)}function il(t,e,n){const r=oi(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function ol(t){t.ku.forEach(t=>{t.next()})}class sl{constructor(t,e,n){this.query=t,this.Ou=e,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Xu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),e=!0):this.qu(t,this.onlineState)&&(this.Uu(t),e=!0),this.Bu=t,e}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let e=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),e=!0),e}qu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Lu(t){if(t.docChanges.length>0)return!0;const e=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Uu(t){t=Xu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class al{constructor(t){this.key=t}}class cl{constructor(t){this.key=t}}class ul{constructor(t,e){this.query=t,this.Yu=e,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Ds(),this.mutatedKeys=Ds(),this.tc=bs(t),this.ec=new Yu(this.tc)}get nc(){return this.Yu}sc(t,e){const n=e?e.ic:new Ju,r=e?e.ec:this.ec;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=ys(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.rc(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(s=!0)),d&&(l?(o=o.add(l),i=f?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))}),null!==this.query.limit)for(;o.size>this.query.limit;){const t="F"===this.query.limitType?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ec:o,ic:n,zi:s,mutatedKeys:i}}rc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ri()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.tc(t.doc,e.doc)),this.oc(n);const o=e?this.uc():[],s=0===this.Zu.size&&this.current?1:0,a=s!==this.Xu;return this.Xu=s,0!==i.length||a?{snapshot:new Xu(this.query,t.ec,r,i,t.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Ju,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=Ds(),this.ec.forEach(t=>{this.ac(t.key)&&(this.Zu=this.Zu.add(t.key))});const e=[];return t.forEach(t=>{this.Zu.has(t)||e.push(new cl(t))}),this.Zu.forEach(n=>{t.has(n)||e.push(new al(n))}),e}hc(t){this.Yu=t.ir,this.Zu=Ds();const e=this.sc(t.documents);return this.applyChanges(e,!0)}lc(){return Xu.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class ll{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class hl{constructor(t){this.key=t,this.fc=!1}}class fl{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Es(t=>vs(t),gs),this._c=new Map,this.mc=new Set,this.gc=new Wi(Ci.comparator),this.yc=new Map,this.Ic=new Nc,this.Tc={},this.Ec=new Map,this.Ac=Ac.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function dl(t,e){const n=Nl(t);let r,i;const o=n.wc.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.lc();else{const t=await Jc(n.localStore,fs(e)),o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await pl(n,e,r,"current"===o,t.resumeToken),n.isPrimaryClient&&Eu(n.remoteStore,t)}return i}async function pl(t,e,n,r,i){t.Rc=(e,n,r)=>async function(t,e,n,r){let i=e.view.sc(n);i.zi&&(i=await Zc(t.localStore,e.query,!1).then(({documents:t})=>e.view.sc(t,i)));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return Al(t,e.targetId,s.cc),s.snapshot}(t,e,n,r);const o=await Zc(t.localStore,e,!0),s=new ul(e,o.ir),a=s.sc(o.documents),c=Ra.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=s.applyChanges(a,t.isPrimaryClient,c);Al(t,n,u.cc);const l=new ll(e,n,s);return t.wc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function gl(t,e){const n=oi(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(t=>!gs(t,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Iu(n.remoteStore,r.targetId),Tl(n,r.targetId)}).catch(Li)):(Tl(n,r.targetId),await Xc(n.localStore,r.targetId,!0))}async function vl(t,e,n){const r=Dl(t);try{const t=await function(t,e){const n=oi(t),r=_i.now(),i=e.reduce((t,e)=>t.add(e.key),Ds());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=Ts(),c=Ds();return n.Zi.getEntries(t,i).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(i=>{o=i;const s=[];for(const t of e){const e=oa(t,o.get(t.key).overlayedDocument);null!=e&&s.push(new ca(t.key,e,xo(e.value.mapValue),Zs.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,s,e)}).next(e=>{s=e;const r=e.applyToLocalDocumentSet(o,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:s.batchId,changes:Cs(o)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Tc[t.currentUser.toKey()];r||(r=new Wi(wi)),r=r.insert(e,n),t.Tc[t.currentUser.toKey()]=r}(r,t.batchId,n),await xl(r,t.changes),await Lu(r.remoteStore)}catch(t){const e=Qu(t,"Failed to persist write");n.reject(e)}}async function ml(t,e){const n=oi(t);try{const t=await Wc(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.yc.get(e);r&&(ii(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.fc=!0:t.modifiedDocuments.size>0?ii(r.fc):t.removedDocuments.size>0&&(ii(r.fc),r.fc=!1))}),await xl(n,t,e)}catch(t){await Li(t)}}function yl(t,e,n){const r=oi(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.wc.forEach((n,r)=>{const i=r.view.Mu(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=oi(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.Mu(e)&&(r=!0)}),r&&ol(n)}(r.eventManager,e),t.length&&r.dc.nu(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wl(t,e,n){const r=oi(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),o=i&&i.key;if(o){let t=new Wi(Ci.comparator);t=t.insert(o,Oo.newNoDocument(o,Ei.min()));const n=Ds().add(o),i=new Oa(Ei.min(),new Map,new Wi(wi),t,n);await ml(r,i),r.gc=r.gc.remove(o),r.yc.delete(e),kl(r)}else await Xc(r.localStore,e,!1).then(()=>Tl(r,e,n)).catch(Li)}async function bl(t,e){const n=oi(t),r=e.batch.batchId;try{const t=await Hc(n.localStore,e);Il(n,r,null),El(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xl(n,t)}catch(t){await Li(t)}}async function _l(t,e,n){const r=oi(t);try{const t=await function(t,e){const n=oi(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(ii(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);Il(r,e,n),El(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xl(r,t)}catch(n){await Li(n)}}function El(t,e){(t.Ec.get(e)||[]).forEach(t=>{t.resolve()}),t.Ec.delete(e)}function Il(t,e,n){const r=oi(t);let i=r.Tc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Tl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(e=>{t.Ic.containsKey(e)||Sl(t,e)})}function Sl(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);null!==n&&(Iu(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),kl(t))}function Al(t,e,n){for(const r of n)r instanceof al?(t.Ic.addReference(r.key,e),Cl(t,r)):r instanceof cl?(Zr("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||Sl(t,r.key)):ri()}function Cl(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(Zr("SyncEngine","New document in limbo: "+n),t.mc.add(r),kl(t))}function kl(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new Ci(Ti.fromString(e)),r=t.Ac.next();t.yc.set(r,new hl(n)),t.gc=t.gc.insert(n,r),Eu(t.remoteStore,new wc(fs(ss(n.path)),r,"TargetPurposeLimboResolution",Ui.ct))}}async function xl(t,e,n){const r=oi(t),i=[],o=[],s=[];r.wc.isEmpty()||(r.wc.forEach((t,a)=>{s.push(r.Rc(a,e,n).then(t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=$c.Li(a.targetId,t);o.push(e)}}))}),await Promise.all(s),r.dc.nu(i),await async function(t,e){const n=oi(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Mi.forEach(e,e=>Mi.forEach(e.Fi,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Mi.forEach(e.Bi,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Fi(t))throw t;Zr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,i)}}}(r.localStore,o))}async function Ol(t,e){const n=oi(t);if(!n.currentUser.isEqual(e)){Zr("SyncEngine","User change. New user:",e.toKey());const t=await Kc(n.localStore,e);n.currentUser=e,function(t,e){t.Ec.forEach(t=>{t.forEach(t=>{t.reject(new ai(si.CANCELLED,e))})}),t.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await xl(n,t.er)}}function Rl(t,e){const n=oi(t),r=n.yc.get(e);if(r&&r.fc)return Ds().add(r.key);{let t=Ds();const r=n._c.get(e);if(!r)return t;for(const e of r){const r=n.wc.get(e);t=t.unionWith(r.view.nc)}return t}}function Nl(t){const e=oi(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ml.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wl.bind(null,e),e.dc.nu=rl.bind(null,e.eventManager),e.dc.Pc=il.bind(null,e.eventManager),e}function Dl(t){const e=oi(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_l.bind(null,e),e}class Pl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=fu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return zc(this.persistence,new Bc,t.initialUser,this.serializer)}createPersistence(t){return new Uc(Vc.zs,this.serializer)}createSharedClientState(t){return new nu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ll{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>yl(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ol.bind(null,this.syncEngine),await Ku(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new tl}createDatastore(t){const e=fu(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new lu(r));var r;return function(t,e,n,r){return new mu(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>yl(this.syncEngine,t,0),o=iu.D()?new iu:new ru,new wu(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new fl(t,e,n,r,i,o);return s&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=oi(t);Zr("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await _u(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ml{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):ti("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Qr.UNAUTHENTICATED,this.clientId=yi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{Zr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(Zr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ai(si.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Qu(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ul(t,e){t.asyncQueue.verifyOperationInProgress(),Zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Kc(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $l(t);Zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>zu(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>zu(e.remoteStore,n)),t._onlineComponents=e}function Vl(t){return"FirebaseError"===t.name?t.code===si.FAILED_PRECONDITION||t.code===si.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function $l(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Zr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Vl(n))throw n;ei("Error using user provided cache. Falling back to memory cache: "+n),await Ul(t,new Pl)}}else Zr("FirestoreClient","Using default OfflineComponentProvider"),await Ul(t,new Pl);return t._offlineComponents}async function Bl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Zr("FirestoreClient","Using user provided OnlineComponentProvider"),await jl(t,t._uninitializedComponentsProvider._online)):(Zr("FirestoreClient","Using default OnlineComponentProvider"),await jl(t,new Ll))),t._onlineComponents}function ql(t){return Bl(t).then(t=>t.syncEngine)}async function zl(t){const e=await Bl(t),n=e.eventManager;return n.onListen=dl.bind(null,e.syncEngine),n.onUnlisten=gl.bind(null,e.syncEngine),n}function Kl(t,e,n={}){const r=new ci;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new Ml({next:o=>{e.enqueueAndForget(()=>nl(t,s));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new ai(si.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new ai(si.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:t=>i.reject(t)}),s=new sl(ss(n.path),o,{includeMetadataChanges:!0,Ku:!0});return el(t,s)}(await zl(t),t.asyncQueue,e,n,r)),r.promise}function Hl(t,e,n={}){const r=new ci;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new Ml({next:n=>{e.enqueueAndForget(()=>nl(t,s)),n.fromCache&&"server"===r.source?i.reject(new ai(si.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),s=new sl(n,o,{includeMetadataChanges:!0,Ku:!0});return el(t,s)}(await zl(t),t.asyncQueue,e,n,r)),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gl(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Wl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t,e,n){if(!n)throw new ai(si.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Yl(t,e,n,r){if(!0===e&&!0===r)throw new ai(si.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jl(t){if(!Ci.isDocumentKey(t))throw new ai(si.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xl(t){if(Ci.isDocumentKey(t))throw new ai(si.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ri()}function th(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ai(si.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zl(t);throw new ai(si.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function eh(t,e){if(e<=0)throw new ai(si.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ai(si.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ai(si.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Yl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gl(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ai(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ai(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ai(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class rh{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ai(si.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ai(si.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nh(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new li;switch(t.type){case"firstParty":return new pi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ai(si.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Wl.get(t);e&&(Zr("ComponentProvider","Removing Datastore"),Wl.delete(t),e.terminate())}(this),Promise.resolve()}}function ih(t,e,n,r={}){var i;const o=(t=th(t,rh))._getSettings(),s=`${e}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==s&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Qr.MOCK_USER;else{e=(0,a.Fy)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new ai(si.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Qr(o)}t._authCredentials=new hi(new ui(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ah(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new oh(this.firestore,t,this._key)}}class sh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new sh(this.firestore,t,this._query)}}class ah extends sh{constructor(t,e,n){super(t,e,ss(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new oh(this.firestore,null,new Ci(t))}withConverter(t){return new ah(this.firestore,t,this._path)}}function ch(t,e,...n){if(t=(0,a.Ku)(t),Ql("collection","path",e),t instanceof rh){const r=Ti.fromString(e,...n);return Xl(r),new ah(t,null,r)}{if(!(t instanceof oh||t instanceof ah))throw new ai(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ti.fromString(e,...n));return Xl(r),new ah(t.firestore,null,r)}}function uh(t,e,...n){if(t=(0,a.Ku)(t),1===arguments.length&&(e=yi.A()),Ql("doc","path",e),t instanceof rh){const r=Ti.fromString(e,...n);return Jl(r),new oh(t,null,new Ci(r))}{if(!(t instanceof oh||t instanceof ah))throw new ai(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ti.fromString(e,...n));return Jl(r),new oh(t.firestore,t instanceof ah?t.converter:null,new Ci(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lh{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new du(this,"async_queue_retry"),this.Xc=()=>{const t=hu();t&&Zr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const t=hu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=hu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const e=new ci;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Fi(t))throw t;Zr("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const e=this.Gc.then(()=>(this.Hc=!0,t().catch(t=>{this.Wc=t,this.Hc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw ti("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Hc=!1,t))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const r=Wu.createAndSchedule(this,t,e,n,t=>this.na(t));return this.zc.push(r),r}Zc(){this.Wc&&ri()}verifyOperationInProgress(){}async sa(){let t;do{t=this.Gc,await t}while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.zc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}}class hh extends rh{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new lh,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ph(this),this._firestoreClient.terminate()}}function fh(t,e){const n="object"==typeof t?t:(0,i.Sx)(),r="string"==typeof t?t:e||"(default)",o=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const t=(0,a.yU)("firestore");t&&ih(o,...t)}return o}function dh(t){return t._firestoreClient||ph(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ph(t){var e,n,r;const i=t._freezeSettings(),o=function(t,e,n,r){return new uo(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Gl(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Fl(t._authCredentials,t._appCheckCredentials,t._queue,o),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new gh(eo.fromBase64String(t))}catch(t){throw new ai(si.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new gh(eo.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ai(si.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ai(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mh{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ai(si.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ai(si.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return wi(this._lat,t._lat)||wi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=/^__.*__$/;class bh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ca(t,this.data,this.fieldMask,e,this.fieldTransforms):new aa(t,this.data,e,this.fieldTransforms)}}class _h{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ca(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Eh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ri()}}class Ih{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new Ih(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.fa(t),r}da(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.ua(),r}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Uh(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(Eh(this.ca)&&wh.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class Th{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||fu(t)}ya(t,e,n,r=!1){return new Ih({ca:t,methodName:e,ga:n,path:Ai.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sh(t){const e=t._freezeSettings(),n=fu(t._databaseId);return new Th(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ah(t,e,n,r,i,o={}){const s=t.ya(o.merge||o.mergeFields?2:0,e,n,i);Ph("Data must be an object, but it was:",s,r);const a=Nh(r,s);let c,u;if(o.merge)c=new Zi(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=Lh(e,r,n);if(!s.contains(i))throw new ai(si.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);jh(t,i)||t.push(i)}c=new Zi(t),u=s.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=s.fieldTransforms;return new bh(new ko(a),c,u)}class Ch extends mh{_toFieldTransform(t){if(2!==t.ca)throw 1===t.ca?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ch}}function kh(t,e,n,r){const i=t.ya(1,e,n);Ph("Data must be an object, but it was:",i,r);const o=[],s=ko.empty();Hi(r,(t,r)=>{const c=Fh(e,t,n);r=(0,a.Ku)(r);const u=i.da(c);if(r instanceof Ch)o.push(c);else{const t=Rh(r,u);null!=t&&(o.push(c),s.set(c,t))}});const c=new Zi(o);return new _h(s,c,i.fieldTransforms)}function xh(t,e,n,r,i,o){const s=t.ya(1,e,n),c=[Lh(e,r,n)],u=[i];if(o.length%2!=0)throw new ai(si.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<o.length;a+=2)c.push(Lh(e,o[a])),u.push(o[a+1]);const l=[],h=ko.empty();for(let d=c.length-1;d>=0;--d)if(!jh(l,c[d])){const t=c[d];let e=u[d];e=(0,a.Ku)(e);const n=s.da(t);if(e instanceof Ch)l.push(t);else{const r=Rh(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new Zi(l);return new _h(h,f,s.fieldTransforms)}function Oh(t,e,n,r=!1){return Rh(n,t.ya(r?4:3,e))}function Rh(t,e){if(Dh(t=(0,a.Ku)(t)))return Ph("Unsupported field value:",e,t),Nh(t,e);if(t instanceof mh)return function(t,e){if(!Eh(e.ca))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&4!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Rh(i,e.wa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Us(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=_i.fromDate(t);return{timestampValue:za(e.serializer,n)}}if(t instanceof _i){const n=new _i(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:za(e.serializer,n)}}if(t instanceof yh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof gh)return{bytesValue:Ka(e.serializer,t._byteString)};if(t instanceof oh){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Wa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${Zl(t)}`)}(t,e)}function Nh(t,e){const n={};return Gi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hi(t,(t,r)=>{const i=Rh(r,e.ha(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Dh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof _i||t instanceof yh||t instanceof gh||t instanceof oh||t instanceof mh)}function Ph(t,e,n){if(!Dh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Zl(n);throw"an object"===r?e._a(t+" a custom object"):e._a(t+" "+r)}}function Lh(t,e,n){if((e=(0,a.Ku)(e))instanceof vh)return e._internalPath;if("string"==typeof e)return Fh(t,e);throw Uh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Mh=new RegExp("[~\\*/\\[\\]]");function Fh(t,e,n){if(e.search(Mh)>=0)throw Uh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vh(...e.split("."))._internalPath}catch(r){throw Uh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Uh(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new ai(si.INVALID_ARGUMENT,a+t+c)}function jh(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new oh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new $h(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Bh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class $h extends Vh{data(){return super.data()}}function Bh(t,e){return"string"==typeof e?Fh(t,e):e instanceof vh?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ai(si.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zh{}class Kh extends zh{}function Hh(t,e,...n){let r=[];e instanceof zh&&r.push(e),r=r.concat(n),function(t){const e=t.filter(t=>t instanceof Qh).length,n=t.filter(t=>t instanceof Gh).length;if(e>1||e>0&&n>0)throw new ai(si.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)t=i._apply(t);return t}class Gh extends Kh{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Gh(t,e,n)}_apply(t){const e=this._parse(t);return sf(t._query,e),new sh(t.firestore,t.converter,ds(t._query,e))}_parse(t){const e=Sh(t.firestore),n=function(t,e,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new ai(si.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){of(s,o);const e=[];for(const n of s)e.push(rf(r,t,n));a={arrayValue:{values:e}}}else a=rf(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||of(s,o),a=Oh(n,e,s,"in"===o||"not-in"===o);return Fo.create(i,o,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function Wh(t,e,n){const r=e,i=Bh("where",t);return Gh._create(i,r,n)}class Qh extends zh{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Qh(t,e)}_parse(t){const e=this._queryConstraints.map(e=>e._parse(t)).filter(t=>t.getFilters().length>0);return 1===e.length?e[0]:Uo.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)sf(n,i),n=ds(n,i)}(t._query,e),new sh(t.firestore,t.converter,ds(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Yh extends Kh{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Yh(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new ai(si.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ai(si.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Po(e,n);return function(t,e){if(null===cs(t)){const n=us(t);null!==n&&af(t,n,e.field)}}(t,r),r}(t._query,this._field,this._direction);return new sh(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new is(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Jh(t,e="asc"){const n=e,r=Bh("orderBy",t);return Yh._create(r,n)}class Xh extends Kh{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Xh(t,e,n)}_apply(t){return new sh(t.firestore,t.converter,ps(t._query,this._limit,this._limitType))}}function Zh(t){return eh("limit",t),Xh._create("limit",t,"F")}class tf extends Kh{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new tf(t,e,n)}_apply(t){const e=nf(t,this.type,this._docOrFields,this._inclusive);return new sh(t.firestore,t.converter,function(t,e){return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function ef(...t){return tf._create("startAfter",t,!1)}function nf(t,e,n,r){if(n[0]=(0,a.Ku)(n[0]),n[0]instanceof Vh)return function(t,e,n,r,i){if(!r)throw new ai(si.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const o=[];for(const s of hs(t))if(s.field.isKeyField())o.push(bo(e,r.key));else{const t=r.data.field(s.field);if(so(t))throw new ai(si.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+s.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=s.field.canonicalString();throw new ai(si.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}o.push(t)}return new Ro(o,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Sh(t.firestore);return function(t,e,n,r,i,o){const s=t.explicitOrderBy;if(i.length>s.length)throw new ai(si.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const o=i[c];if(s[c].field.isKeyField()){if("string"!=typeof o)throw new ai(si.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof o}`);if(!ls(t)&&-1!==o.indexOf("/"))throw new ai(si.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${o}' contains a slash.`);const n=t.path.child(Ti.fromString(o));if(!Ci.isDocumentKey(n))throw new ai(si.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Ci(n);a.push(bo(e,i))}else{const t=Oh(n,r,o);a.push(t)}}return new Ro(a,o)}(t._query,t.firestore._databaseId,i,e,n,r)}}function rf(t,e,n){if("string"==typeof(n=(0,a.Ku)(n))){if(""===n)throw new ai(si.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ls(e)&&-1!==n.indexOf("/"))throw new ai(si.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ti.fromString(n));if(!Ci.isDocumentKey(r))throw new ai(si.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bo(t,new Ci(r))}if(n instanceof oh)return bo(t,n._key);throw new ai(si.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zl(n)}.`)}function of(t,e){if(!Array.isArray(t)||0===t.length)throw new ai(si.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sf(t,e){if(e.isInequality()){const n=us(t),r=e.field;if(null!==n&&!n.isEqual(r))throw new ai(si.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=cs(t);null!==i&&af(t,r,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ai(si.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ai(si.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function af(t,e,n){if(!n.isEqual(e))throw new ai(si.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class cf{convertValue(t,e="none"){switch(fo(t)){case 0:return null;case 1:return t.booleanValue;case 2:return io(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(oo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ri()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Hi(t,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new yh(io(t.latitude),io(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ao(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(co(t));default:return null}}convertTimestamp(t){const e=ro(t);return new _i(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ti.fromString(t);ii(yc(n));const r=new lo(n.get(1),n.get(3)),i=new Ci(n.popFirst(5));return r.isEqual(e)||ti(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lf{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hf extends Vh{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ff(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Bh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ff extends hf{data(t={}){return super.data(t)}}class df{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new lf(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ff(this._firestore,this._userDataWriter,n.key,n,new lf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ai(si.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const r=new ff(t._firestore,t._userDataWriter,n.doc.key,n.doc,new lf(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new ff(t._firestore,t._userDataWriter,e.doc.key,e.doc,new lf(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,o=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),o=n.indexOf(e.doc.key)),{type:pf(e.type),doc:r,oldIndex:i,newIndex:o}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function pf(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ri()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gf(t){t=th(t,oh);const e=th(t.firestore,hh);return Kl(dh(e),t._key).then(n=>_f(e,t,n))}class vf extends cf{constructor(t){super(),this.firestore=t}convertBytes(t){return new gh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new oh(this.firestore,null,e)}}function mf(t){t=th(t,sh);const e=th(t.firestore,hh),n=dh(e),r=new vf(e);return qh(t._query),Hl(n,t._query).then(n=>new df(e,r,t,n))}function yf(t,e,n,...r){t=th(t,oh);const i=th(t.firestore,hh),o=Sh(i);let s;return s="string"==typeof(e=(0,a.Ku)(e))||e instanceof vh?xh(o,"updateDoc",t._key,e,n,r):kh(o,"updateDoc",t._key,e),bf(i,[s.toMutation(t._key,Zs.exists(!0))])}function wf(t,e){const n=th(t.firestore,hh),r=uh(t),i=uf(t.converter,e);return bf(n,[Ah(Sh(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Zs.exists(!1))]).then(()=>r)}function bf(t,e){return function(t,e){const n=new ci;return t.asyncQueue.enqueueAndForget(async()=>vl(await ql(t),e,n)),n.promise}(dh(t),e)}function _f(t,e,n){const r=n.docs.get(e._key),i=new vf(t);return new hf(t,i,e._key,r,new lf(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Yr=t}(i.MF),(0,i.om)(new o.uA("firestore",(t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new hh(new fi(t.getProvider("auth-internal")),new vi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ai(si.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(Wr,"3.13.0",t),(0,i.KO)(Wr,"3.13.0","esm2017")}()},6469:(t,e,n)=>{var r=n(8227),i=n(2360),o=n(4913).f,s=r("unscopables"),a=Array.prototype;void 0===a[s]&&o(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},6499:(t,e,n)=>{var r=n(6518),i=n(9565),o=n(9306),s=n(6043),a=n(1103),c=n(2652),u=n(537);r({target:"Promise",stat:!0,forced:u},{all:function(t){var e=this,n=s.f(e),r=n.resolve,u=n.reject,l=a(function(){var n=o(e.resolve),s=[],a=0,l=1;c(t,function(t){var o=a++,c=!1;l++,i(n,e,t).then(function(t){c||(c=!0,s[o]=t,--l||r(s))},u)}),--l||r(s)});return l.error&&u(l.value),n.promise}})},6518:(t,e,n)=>{var r=n(2195),i=n(7347).f,o=n(6699),s=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,v=t.global,m=t.stat;if(l=v?r:m?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(v?h:g+(m?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},6573:(t,e,n)=>{var r=n(3724),i=n(2106),o=n(3238),s=ArrayBuffer.prototype;r&&!("detached"in s)&&i(s,"detached",{configurable:!0,get:function(){return o(this)}})},6614:(t,e,n)=>{var r=n(4644),i=n(8014),o=n(5610),s=r.aTypedArray,a=r.getTypedArrayConstructor,c=r.exportTypedArrayMethod;c("subarray",function(t,e){var n=s(this),r=n.length,c=o(t,r),u=a(n);return new u(n.buffer,n.byteOffset+c*n.BYTES_PER_ELEMENT,i((void 0===e?r:o(e,r))-c))})},6632:(t,e,n)=>{var r=n(6518),i=n(2195),o=n(9143),s=n(4154),a=i.Uint8Array,c=!a||!a.prototype.setFromBase64||!function(){var t=new a([255,255,255,255,255]);try{return void t.setFromBase64("",null)}catch(e){}try{return void t.setFromBase64("a")}catch(e){}try{t.setFromBase64("MjYyZg===")}catch(e){return 50===t[0]&&54===t[1]&&50===t[2]&&255===t[3]&&255===t[4]}}();a&&r({target:"Uint8Array",proto:!0,forced:c},{setFromBase64:function(t){s(this);var e=o(t,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:e.read,written:e.written}}})},6651:(t,e,n)=>{var r=n(4644),i=n(9617).indexOf,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("indexOf",function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)})},6682:(t,e,n)=>{var r=n(9565),i=n(8551),o=n(4901),s=n(4576),a=n(7323),c=TypeError;t.exports=function(t,e){var n=t.exec;if(o(n)){var u=r(n,t,e);return null!==u&&i(u),u}if("RegExp"===s(t))return r(a,t,e);throw new c("RegExp#exec called on incompatible receiver")}},6699:(t,e,n)=>{var r=n(3724),i=n(4913),o=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},6706:(t,e,n)=>{var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(o){}}},6743:(t,e,n)=>{n.d(e,{Am:()=>U,FA:()=>N,Fy:()=>b,I9:()=>j,Im:()=>L,Ku:()=>K,T9:()=>m,Tj:()=>g,Uj:()=>c,XA:()=>y,ZQ:()=>_,bD:()=>M,cY:()=>w,eX:()=>x,g:()=>R,hp:()=>V,jZ:()=>E,lT:()=>A,lV:()=>S,nr:()=>C,sr:()=>T,tD:()=>$,u:()=>u,yU:()=>v,zW:()=>k});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,a=o?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new s;const f=e<<2|a>>4;if(r.push(f),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return o.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyDWccDcB7ZbJYlj1qqIZng1slt0S8pD1VE",VUE_APP_FIREBASE_AUTH_DOMAIN:"deliar-unchained.firebaseapp.com",VUE_APP_FIREBASE_PROJECT_ID:"deliar-unchained",VUE_APP_FIREBASE_STORAGE_BUCKET:"deliar-unchained.firebasestorage.app",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"1037032599148",VUE_APP_FIREBASE_APP_ID:"1:1037032599148:web:a9068c69796d6fc3a53249",VUE_APP_FIREBASE_MEASUREMENT_ID:"G-3MS7RP1XJ6",BASE_URL:"/gen/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},v=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},m=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},y=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function I(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function T(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function A(){const t=_();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function C(){return!I()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k(){try{return"object"===typeof indexedDB}catch(t){return!1}}function x(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class R extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=O,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?D(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new R(r,s,n);return a}}function D(t,e){return t.replace(P,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function M(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(F(n)&&F(o)){if(!M(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function j(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function V(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e){const n=new B(t,e);return n.subscribe.bind(n)}class B{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=q(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(t){return t&&t._delegate?t._delegate:t}},6761:(t,e,n)=>{var r=n(6518),i=n(2195),o=n(9565),s=n(9504),a=n(6395),c=n(3724),u=n(4495),l=n(9039),h=n(9297),f=n(1625),d=n(8551),p=n(5397),g=n(6969),v=n(655),m=n(6980),y=n(2360),w=n(1072),b=n(8480),_=n(298),E=n(3717),I=n(7347),T=n(4913),S=n(6801),A=n(8773),C=n(6840),k=n(2106),x=n(5745),O=n(6119),R=n(421),N=n(3392),D=n(8227),P=n(1951),L=n(511),M=n(8242),F=n(687),U=n(1181),j=n(9213).forEach,V=O("hidden"),$="Symbol",B="prototype",q=U.set,z=U.getterFor($),K=Object[B],H=i.Symbol,G=H&&H[B],W=i.RangeError,Q=i.TypeError,Y=i.QObject,J=I.f,X=T.f,Z=_.f,tt=A.f,et=s([].push),nt=x("symbols"),rt=x("op-symbols"),it=x("wks"),ot=!Y||!Y[B]||!Y[B].findChild,st=function(t,e,n){var r=J(K,e);r&&delete K[e],X(t,e,n),r&&t!==K&&X(K,e,r)},at=c&&l(function(){return 7!==y(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a})?st:X,ct=function(t,e){var n=nt[t]=y(G);return q(n,{type:$,tag:t,description:e}),c||(n.description=e),n},ut=function(t,e,n){t===K&&ut(rt,e,n),d(t);var r=g(e);return d(n),h(nt,r)?(n.enumerable?(h(t,V)&&t[V][r]&&(t[V][r]=!1),n=y(n,{enumerable:m(0,!1)})):(h(t,V)||X(t,V,m(1,y(null))),t[V][r]=!0),at(t,r,n)):X(t,r,n)},lt=function(t,e){d(t);var n=p(e),r=w(n).concat(gt(n));return j(r,function(e){c&&!o(ft,n,e)||ut(t,e,n[e])}),t},ht=function(t,e){return void 0===e?y(t):lt(y(t),e)},ft=function(t){var e=g(t),n=o(tt,this,e);return!(this===K&&h(nt,e)&&!h(rt,e))&&(!(n||!h(this,e)||!h(nt,e)||h(this,V)&&this[V][e])||n)},dt=function(t,e){var n=p(t),r=g(e);if(n!==K||!h(nt,r)||h(rt,r)){var i=J(n,r);return!i||!h(nt,r)||h(n,V)&&n[V][r]||(i.enumerable=!0),i}},pt=function(t){var e=Z(p(t)),n=[];return j(e,function(t){h(nt,t)||h(R,t)||et(n,t)}),n},gt=function(t){var e=t===K,n=Z(e?rt:p(t)),r=[];return j(n,function(t){!h(nt,t)||e&&!h(K,t)||et(r,nt[t])}),r};u||(H=function(){if(f(G,this))throw new Q("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,e=N(t),n=function(t){var r=void 0===this?i:this;r===K&&o(n,rt,t),h(r,V)&&h(r[V],e)&&(r[V][e]=!1);var s=m(1,t);try{at(r,e,s)}catch(a){if(!(a instanceof W))throw a;st(r,e,s)}};return c&&ot&&at(K,e,{configurable:!0,set:n}),ct(e,t)},G=H[B],C(G,"toString",function(){return z(this).tag}),C(H,"withoutSetter",function(t){return ct(N(t),t)}),A.f=ft,T.f=ut,S.f=lt,I.f=dt,b.f=_.f=pt,E.f=gt,P.f=function(t){return ct(D(t),t)},c&&(k(G,"description",{configurable:!0,get:function(){return z(this).description}}),a||C(K,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,constructor:!0,wrap:!0,forced:!u,sham:!u},{Symbol:H}),j(w(it),function(t){L(t)}),r({target:$,stat:!0,forced:!u},{useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!c},{create:ht,defineProperty:ut,defineProperties:lt,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:pt}),M(),F(H,$),R[V]=!0},6801:(t,e,n)=>{var r=n(3724),i=n(8686),o=n(4913),s=n(8551),a=n(5397),c=n(1072);e.f=r&&!i?Object.defineProperties:function(t,e){s(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)o.f(t,n=i[l++],r[n]);return t}},6812:(t,e,n)=>{var r=n(4644),i=n(8745),o=n(8379),s=r.aTypedArray,a=r.exportTypedArrayMethod;a("lastIndexOf",function(t){var e=arguments.length;return i(o,s(this),e>1?[t,arguments[1]]:[t])})},6823:t=>{var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},6837:t=>{var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},6840:(t,e,n)=>{var r=n(4901),i=n(4913),o=n(283),s=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&o(n,u,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},6918:(t,e,n)=>{var r=n(6840),i=n(7536),o=Error.prototype;o.toString!==i&&r(o,"toString",i)},6955:(t,e,n)=>{var r=n(2140),i=n(4901),o=n(4576),s=n(8227),a=s("toStringTag"),c=Object,u="Arguments"===o(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?o(e):"Object"===(r=o(e))&&i(e.callee)?"Arguments":r}},6969:(t,e,n)=>{var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},6980:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7029:(t,e,n)=>{var r=n(8981),i=n(5610),o=n(6198),s=n(4606),a=Math.min;t.exports=[].copyWithin||function(t,e){var n=r(this),c=o(n),u=i(t,c),l=i(e,c),h=arguments.length>2?arguments[2]:void 0,f=a((void 0===h?c:i(h,c))-l,c-u),d=1;l<u&&u<l+f&&(d=-1,l+=f-1,u+=f-1);while(f-- >0)l in n?n[u]=n[l]:s(n,u),u+=d,l+=d;return n}},7040:(t,e,n)=>{var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7055:(t,e,n)=>{var r=n(9504),i=n(9039),o=n(4576),s=Object,a=r("".split);t.exports=i(function(){return!s("z").propertyIsEnumerable(0)})?function(t){return"String"===o(t)?a(t,""):s(t)}:s},7240:(t,e,n)=>{var r=n(9504),i=n(7750),o=n(655),s=/"/g,a=r("".replace);t.exports=function(t,e,n,r){var c=o(i(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+a(o(r),s,"&quot;")+'"'),u+">"+c+"</"+e+">"}},7301:(t,e,n)=>{var r=n(4644),i=n(9213).some,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("some",function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)})},7323:(t,e,n)=>{var r=n(9565),i=n(9504),o=n(655),s=n(7979),a=n(8429),c=n(5745),u=n(2360),l=n(1181).get,h=n(3635),f=n(8814),d=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,v=i("".charAt),m=i("".indexOf),y=i("".replace),w=i("".slice),b=function(){var t=/a/,e=/b*/g;return r(p,t,"a"),r(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),_=a.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],I=b||E||_||h||f;I&&(g=function(t){var e,n,i,a,c,h,f,I=this,T=l(I),S=o(t),A=T.raw;if(A)return A.lastIndex=I.lastIndex,e=r(g,A,S),I.lastIndex=A.lastIndex,e;var C=T.groups,k=_&&I.sticky,x=r(s,I),O=I.source,R=0,N=S;if(k&&(x=y(x,"y",""),-1===m(x,"g")&&(x+="g"),N=w(S,I.lastIndex),I.lastIndex>0&&(!I.multiline||I.multiline&&"\n"!==v(S,I.lastIndex-1))&&(O="(?: "+O+")",N=" "+N,R++),n=new RegExp("^(?:"+O+")",x)),E&&(n=new RegExp("^"+O+"$(?!\\s)",x)),b&&(i=I.lastIndex),a=r(p,k?n:I,N),k?a?(a.input=w(a.input,R),a[0]=w(a[0],R),a.index=I.lastIndex,I.lastIndex+=a[0].length):I.lastIndex=0:b&&a&&(I.lastIndex=I.global?a.index+a[0].length:i),E&&a&&a.length>1&&r(d,a[0],n,function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)}),a&&C)for(a.groups=h=u(null),c=0;c<C.length;c++)f=C[c],h[f[0]]=a[f[1]];return a}),t.exports=g},7347:(t,e,n)=>{var r=n(3724),i=n(9565),o=n(8773),s=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},7391:(t,e,n)=>{n.d(e,{HF:()=>pe,xI:()=>Mr,hg:()=>Ae,df:()=>An,CI:()=>Ce});var r=n(6743),i=n(9928);function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=n(3424),a=n(5125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.FA("auth","Firebase",c()),h=new s.Vy("@firebase/auth");function f(t,...e){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${i.MF}): ${t}`,...e)}function d(t,...e){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${i.MF}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw y(t,...e)}function g(t,...e){return y(t,...e)}function v(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),o=new r.FA("auth","Firebase",i);return o.create(e,{appName:t.name})}function m(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&p(t,"argument-error"),v(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function y(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function w(t,e,...n){if(!t)throw y(e,...n)}function b(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function _(t,e){t||b(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function I(){return"http:"===T()||"https:"===T()}function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,e){this.shortDelay=t,this.longDelay=e,_(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){_(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},R=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function D(t,e,n,i,o={}){return P(t,o,async()=>{let o={},s={};i&&("GET"===e?s=i:o={body:JSON.stringify(i)});const a=(0,r.Am)(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),x.fetch()(M(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function P(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},O),e);try{const e=new F(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw U(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw U(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw U(t,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw v(t,a,s);p(t,a)}}catch(o){if(o instanceof r.g)throw o;p(t,"network-request-failed",{message:String(o)})}}async function L(t,e,n,r,i={}){const o=await D(t,e,n,r,i);return"mfaPendingCredential"in o&&p(t,"multi-factor-auth-required",{_serverResponse:o}),o}function M(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?k(t.config,i):`${t.config.apiScheme}://${i}`}class F{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(g(this.auth,"network-request-failed")),R.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(t,e){return D(t,"POST","/v1/accounts:delete",e)}async function V(t,e){return D(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e=!1){const n=(0,r.Ku)(t),i=await n.getIdToken(e),o=z(i);w(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:$(q(o.auth_time)),issuedAtTime:$(q(o.iat)),expirationTime:$(q(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function q(t){return 1e3*Number(t)}function z(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.u)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function K(t){const e=z(t);return w(e,"internal-error"),w("undefined"!==typeof e.exp,"internal-error"),w("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.g&&G(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function G({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){var e;const n=t.auth,r=await t.getIdToken(),i=await H(t,V(n,{idToken:r}));w(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?Z(o.providerUserInfo):[],a=X(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Q(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function J(t){const e=(0,r.Ku)(t);await Y(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function Z(t){return t.map(t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t,e){const n=await P(t,{},async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=M(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){w(t.idToken,"internal-error"),w("undefined"!==typeof t.idToken,"internal-error"),w("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):K(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return w(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await tt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new et;return n&&(w("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(w("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(w("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new et,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){w("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class rt{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new W(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await H(this,this.stsTokenManager.getToken(this.auth,t));return w(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return B(this,t)}reload(){return J(this)}_assign(t){this!==t&&(w(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new rt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await H(this,j(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=e.createdAt)&&void 0!==c?c:void 0,m=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:E,stsTokenManager:I}=e;w(y&&I,t,"internal-error");const T=et.fromJSON(this.name,I);w("string"===typeof y,t,"internal-error"),nt(l,t.name),nt(h,t.name),w("boolean"===typeof b,t,"internal-error"),w("boolean"===typeof _,t,"internal-error"),nt(f,t.name),nt(d,t.name),nt(p,t.name),nt(g,t.name),nt(v,t.name),nt(m,t.name);const S=new rt({uid:y,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:_,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:v,lastLoginAt:m});return E&&Array.isArray(E)&&(S.providerData=E.map(t=>Object.assign({},t))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new et;r.updateFromServerResponse(e);const i=new rt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Map;function ot(t){_(t instanceof Function,"Expected a class definition");let e=it.get(t);return e?(_(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,it.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}st.type="NONE";const at=st;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(ot(at),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||ot(at);const o=ct(n,t.config.apiKey,t.name);let s=null;for(const u of e)try{const e=await u._get(o);if(e){const n=rt._fromJSON(t,e);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(o)}catch(c){}})),new ut(i,t,n)):new ut(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vt(e))return"Blackberry";if(mt(e))return"Webos";if(ft(e))return"Safari";if((e.includes("chrome/")||dt(e))&&!e.includes("edge/"))return"Chrome";if(gt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,r.ZQ)()){return/firefox\//i.test(t)}function ft(t=(0,r.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dt(t=(0,r.ZQ)()){return/crios\//i.test(t)}function pt(t=(0,r.ZQ)()){return/iemobile/i.test(t)}function gt(t=(0,r.ZQ)()){return/android/i.test(t)}function vt(t=(0,r.ZQ)()){return/blackberry/i.test(t)}function mt(t=(0,r.ZQ)()){return/webos/i.test(t)}function yt(t=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wt(t=(0,r.ZQ)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return(0,r.lT)()&&10===document.documentMode}function _t(t=(0,r.ZQ)()){return yt(t)||gt(t)||mt(t)||vt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e=[]){let n;switch(t){case"Browser":n=lt((0,r.ZQ)());break;case"Worker":n=`${lt((0,r.ZQ)())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.MF}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(t,e){return D(t,"GET","/v2/recaptchaConfig",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){return void 0!==t&&void 0!==t.enterprise}class At{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function kt(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Ct().appendChild(r)})}function xt(t){return`__${t}${Math.floor(1e6*Math.random())}`}const Ot="https://www.google.com/recaptcha/enterprise.js?render=",Rt="recaptcha-enterprise",Nt="NO_RECAPTCHA";class Dt{constructor(t){this.type=Rt,this.auth=Ft(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise(async(e,n)=>{Tt(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new At(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(t=>{n(t)})})}function r(e,n,r){const i=window.grecaptcha;St(i)?i.enterprise.ready(()=>{i.enterprise.execute(e,{action:t}).then(t=>{n(t)}).catch(()=>{n(Nt)})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((t,i)=>{n(this.auth).then(n=>{if(!e&&St(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));kt(Ot+n).then(()=>{r(n,t,i)}).catch(t=>{i(t)})}}).catch(t=>{i(t)})})}}async function Pt(t,e,n,r=!1){const i=new Dt(t);let o;try{o=await i.verify(n)}catch(a){o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}});n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ut(this),this.idTokenSubscription=new Ut(this),this.beforeStateQueue=new Lt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ot(e)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Y(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.Ku)(t):null;return e&&w(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&w(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(t))})}async initializeRecaptchaConfig(){const t=await Tt(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new At(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){const t=new Dt(this);t.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ot(t)||this._popupRedirectResolver;w(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[ot(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=It(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&f(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Ft(t){return(0,r.Ku)(t)}class Ut{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.tD)(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,e){const n=(0,i.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.bD)(i,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const o=n.initialize({options:e});return o}function Vt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ot);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function $t(t,e,n){const r=Ft(t);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Bt(e),{host:s,port:a}=qt(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Kt()}function Bt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qt(t){const e=Bt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:zt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:zt(e)}}}function zt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Kt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return b("not implemented")}_getIdTokenResponse(t){return b("not implemented")}_linkToIdToken(t,e){return b("not implemented")}_getReauthenticationResolver(t){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(t,e){return D(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wt(t,e){return L(t,"POST","/v1/accounts:signInWithPassword",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qt(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}async function Yt(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ht{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Jt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Jt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await Pt(t,n,"signInWithPassword");return Wt(t,e)}return Wt(t,n).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Pt(t,n,"signInWithPassword");return Wt(t,e)}return Promise.reject(e)});case"emailLink":return Qt(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Gt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Yt(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(t,e){return L(t,"POST","/v1/accounts:signInWithIdp",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="http://localhost";class te extends Ht{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new te(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new te(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return Xt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Xt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Xt(t,e)}buildRequest(){const t={requestUri:Zt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.Am)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(t,e){return D(t,"POST","/v1/accounts:sendVerificationCode",N(t,e))}async function ne(t,e){return L(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e))}async function re(t,e){const n=await L(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e));if(n.temporaryProof)throw U(t,"account-exists-with-different-credential",n);return n}const ie={["USER_NOT_FOUND"]:"user-not-found"};async function oe(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return L(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,n),ie)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Ht{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new se({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new se({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ne(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return re(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return oe(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new se({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ce(t){const e=(0,r.I9)((0,r.hp)(t))["link"],n=e?(0,r.I9)((0,r.hp)(e))["deep_link_id"]:null,i=(0,r.I9)((0,r.hp)(t))["deep_link_id"],o=i?(0,r.I9)((0,r.hp)(i))["link"]:null;return o||i||n||e||t}class ue{constructor(t){var e,n,i,o,s,a;const c=(0,r.I9)((0,r.hp)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ae(null!==(i=c["mode"])&&void 0!==i?i:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ce(t);try{return new ue(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(){this.providerId=le.PROVIDER_ID}static credential(t,e){return Jt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ue.parseLink(e);return w(n,"argument-error"),Jt._fromEmailAndCode(t,n.code,n.tenantId)}}le.PROVIDER_ID="password",le.EMAIL_PASSWORD_SIGN_IN_METHOD="password",le.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends he{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de extends fe{constructor(){super("facebook.com")}static credential(t){return te._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return de.credentialFromTaggedObject(t)}static credentialFromError(t){return de.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return de.credential(t.oauthAccessToken)}catch(e){return null}}}de.FACEBOOK_SIGN_IN_METHOD="facebook.com",de.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe extends fe{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return te._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return pe.credential(e,n)}catch(r){return null}}}pe.GOOGLE_SIGN_IN_METHOD="google.com",pe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge extends fe{constructor(){super("github.com")}static credential(t){return te._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ge.credentialFromTaggedObject(t)}static credentialFromError(t){return ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ge.credential(t.oauthAccessToken)}catch(e){return null}}}ge.GITHUB_SIGN_IN_METHOD="github.com",ge.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve extends fe{constructor(){super("twitter.com")}static credential(t,e){return te._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ve.credentialFromTaggedObject(t)}static credentialFromError(t){return ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ve.credential(e,n)}catch(r){return null}}}ve.TWITTER_SIGN_IN_METHOD="twitter.com",ve.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await rt._fromIdTokenResponse(t,n,r),o=ye(n),s=new me({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ye(n);return new me({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ye(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we extends r.g{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,we.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new we(t,e,n,r)}}function be(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw we._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(t,e,n=!1){const r=await H(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return me._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ee(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await H(t,be(r,i,e,t),n);w(o.idToken,r,"internal-error");const s=z(o.idToken);w(s,r,"internal-error");const{sub:a}=s;return w(t.uid===a,r,"user-mismatch"),me._forOperation(t,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(t,e,n=!1){const r="signIn",i=await be(t,r,e),o=await me._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function Te(t,e,n,i){return(0,r.Ku)(t).onIdTokenChanged(e,n,i)}function Se(t,e,n){return(0,r.Ku)(t).beforeAuthStateChanged(e,n)}function Ae(t,e,n,i){return(0,r.Ku)(t).onAuthStateChanged(e,n,i)}function Ce(t){return(0,r.Ku)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ke(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}function xe(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",N(t,e))}function Oe(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}function Re(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",N(t,e))}new WeakMap;const Ne="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ne,"1"),this.storage.removeItem(Ne),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){const t=(0,r.ZQ)();return ft(t)||yt(t)}const Le=1e3,Me=10;class Fe extends De{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pe()&&Et(),this.fallbackToPolling=_t(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);bt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Me):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},Le)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Fe.type="LOCAL";const Ue=Fe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends De{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}je.type="SESSION";const Ve=je;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new Be(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async t=>t(e.origin,i)),a=await $e(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be.receivers=[];class ze{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=qe("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function He(t){Ke().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return"undefined"!==typeof Ke()["WorkerGlobalScope"]&&"function"===typeof Ke()["importScripts"]}async function We(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Qe(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ye(){return Ge()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="firebaseLocalStorageDb",Xe=1,Ze="firebaseLocalStorage",tn="fbase_key";class en{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function nn(t,e){return t.transaction([Ze],e?"readwrite":"readonly").objectStore(Ze)}function rn(){const t=indexedDB.deleteDatabase(Je);return new en(t).toPromise()}function on(){const t=indexedDB.open(Je,Xe);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Ze,{keyPath:tn})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Ze)?e(n):(n.close(),await rn(),e(await on()))})})}async function sn(t,e,n){const r=nn(t,!0).put({[tn]:e,value:n});return new en(r).toPromise()}async function an(t,e){const n=nn(t,!1).get(e),r=await new en(n).toPromise();return void 0===r?null:r.value}function cn(t,e){const n=nn(t,!0).delete(e);return new en(n).toPromise()}const un=800,ln=3;class hn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await on()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>ln)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ge()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Be._getInstance(Ye()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await We(),!this.activeServiceWorker)return;this.sender=new ze(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Qe()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await on();return await sn(t,Ne,"1"),await cn(t,Ne),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sn(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>an(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>cn(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=nn(t,!1).getAll();return new en(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),un)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}hn.type="LOCAL";const fn=hn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:start",N(t,e))}function pn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",N(t,e))}function gn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xt("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn="recaptcha";async function mn(t,e,n){var r;const i=await n.verify();try{let o;if(w("string"===typeof i,t,"argument-error"),w(n.type===vn,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){w("enroll"===e.type,t,"internal-error");const n=await ke(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{w("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;w(n,t,"missing-multi-factor-info");const s=await dn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await ee(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn{constructor(t){this.providerId=yn.PROVIDER_ID,this.auth=Ft(t)}verifyPhoneNumber(t,e){return mn(this.auth,t,(0,r.Ku)(e))}static credential(t,e){return se._fromVerification(t,e)}static credentialFromResult(t){const e=t;return yn.credentialFromTaggedObject(e)}static credentialFromError(t){return yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?se._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wn(t,e){return e?ot(e):(w(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.PROVIDER_ID="phone",yn.PHONE_SIGN_IN_METHOD="phone";class bn extends Ht{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Xt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Xt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Xt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function _n(t){return Ie(t.auth,new bn(t),t.bypassAuthState)}function En(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Ee(n,new bn(t),t.bypassAuthState)}async function In(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),_e(n,new bn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return _n;case"linkViaPopup":case"linkViaRedirect":return In;case"reauthViaPopup":case"reauthViaRedirect":return En;default:p(this.auth,"internal-error")}}resolve(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new C(2e3,1e4);async function An(t,e,n){const r=Ft(t);m(t,e,he);const i=wn(r,n),o=new Cn(r,"signInViaPopup",e,i);return o.executeNotNull()}class Cn extends Tn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Cn.currentPopupAction&&Cn.currentPopupAction.cancel(),Cn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return w(t,this.auth,"internal-error"),t}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const t=qe();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(t,Sn.get())};t()}}Cn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kn="pendingRedirect",xn=new Map;class On extends Tn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=xn.get(this.auth._key());if(!t){try{const e=await Rn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}xn.set(this.auth._key(),t)}return this.bypassAuthState||xn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Rn(t,e){const n=Pn(e),r=Dn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Nn(t,e){xn.set(t._key(),e)}function Dn(t){return ot(t._redirectPersistence)}function Pn(t){return ct(kn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e,n=!1){const r=Ft(t),i=wn(r,e),o=new On(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mn=6e5;class Fn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Vn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!jn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Mn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Un(t))}saveEventToCache(t){this.cachedEventUids.add(Un(t)),this.lastProcessedEventTime=Date.now()}}function Un(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function jn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Vn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(t,e={}){return D(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qn=/^https?/;async function zn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $n(t);for(const r of e)try{if(Kn(r))return}catch(n){}p(t,"unauthorized-domain")}function Kn(t){const e=E(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!qn.test(n))return!1;if(Bn.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new C(3e4,6e4);function Gn(){const t=Ke().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Wn(t){return new Promise((e,n)=>{var r,i,o;function s(){Gn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gn(),n(g(t,"network-request-failed"))},timeout:Hn.get()})}if(null===(i=null===(r=Ke().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Ke().gapi)||void 0===o?void 0:o.load)){const e=xt("iframefcb");return Ke()[e]=()=>{gapi.load?s():n(g(t,"network-request-failed"))},kt(`https://apis.google.com/js/api.js?onload=${e}`).catch(t=>n(t))}s()}}).catch(t=>{throw Qn=null,t})}let Qn=null;function Yn(t){return Qn=Qn||Wn(t),Qn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new C(5e3,15e3),Xn="__/auth/iframe",Zn="emulator/auth/iframe",tr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},er=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nr(t){const e=t.config;w(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?k(e,Zn):`https://${t.config.authDomain}/${Xn}`,o={apiKey:e.apiKey,appName:t.name,v:i.MF},s=er.get(t.config.apiHost);s&&(o.eid=s);const a=t._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.Am)(o).slice(1)}`}async function rr(t){const e=await Yn(t),n=Ke().gapi;return w(n,t,"internal-error"),e.open({where:document.body,url:nr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tr,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=g(t,"network-request-failed"),o=Ke().setTimeout(()=>{r(i)},Jn.get());function s(){Ke().clearTimeout(o),n(e)}e.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},or=500,sr=600,ar="_blank",cr="http://localhost";class ur{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function lr(t,e,n,i=or,o=sr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},ir),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.ZQ)().toLowerCase();n&&(c=dt(l)?ar:n),ht(l)&&(e=e||cr,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(wt(l)&&"_self"!==c)return hr(e||"",c),new ur(null);const f=window.open(e||"",c,h);w(f,t,"popup-blocked");try{f.focus()}catch(d){}return new ur(f)}function hr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="__/auth/handler",dr="emulator/auth/handler",pr=encodeURIComponent("fac");async function gr(t,e,n,o,s,a){w(t.config.authDomain,t,"auth-domain-config-required"),w(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:i.MF,eventId:s};if(e instanceof he){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.Im)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof fe){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await t._getAppCheckToken(),h=l?`#${pr}=${encodeURIComponent(l)}`:"";return`${vr(t)}?${(0,r.Am)(u).slice(1)}${h}`}function vr({config:t}){return t.emulator?k(t,dr):`https://${t.authDomain}/${fr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="webStorageSupport";class yr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ve,this._completeRedirectFn=Ln,this._overrideRedirectResult=Nn}async _openPopup(t,e,n,r){var i;_(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await gr(t,e,n,E(),r);return lr(t,o,qe())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await gr(t,e,n,E(),r);return He(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await rr(t),n=new Fn(t);return e.register("authEvent",e=>{w(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(mr,{type:mr},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[mr];void 0!==i&&e(!!i),p(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=zn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return _t()||ft()||yt()}}const wr=yr;class br{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return b("unexpected MultiFactorSessionType")}}}class _r extends br{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new _r(t)}_finalizeEnroll(t,e,n){return xe(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return pn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Er{constructor(){}static assertion(t){return _r._fromCredential(t)}}Er.FACTOR_ID="phone";class Ir{static assertionForEnrollment(t,e){return Tr._fromSecret(t,e)}static assertionForSignIn(t,e){return Tr._fromEnrollmentId(t,e)}static async generateSecret(t){const e=t;w("undefined"!==typeof e.auth,"internal-error");const n=await Oe(e.auth,{idToken:e.credential,totpEnrollmentInfo:{}});return Sr._fromStartTotpMfaEnrollmentResponse(n,e.auth)}}Ir.FACTOR_ID="totp";class Tr extends br{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Tr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Tr(e,t)}async _finalizeEnroll(t,e,n){return w("undefined"!==typeof this.secret,t,"argument-error"),Re(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){w(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return gn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Sr{constructor(t,e,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Sr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(Ar(t)||Ar(e))&&(r=!0),r&&(Ar(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ar(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ar(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Cr="@firebase/auth",kr="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Rr(t){(0,i.om)(new a.uA("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;w(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:It(t)},u=new Mt(r,i,o,c);return Vt(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),(0,i.om)(new a.uA("auth-internal",t=>{const e=Ft(t.getProvider("auth").getImmediate());return(t=>new xr(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)(Cr,kr,Or(t)),(0,i.KO)(Cr,kr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=300,Dr=(0,r.XA)("authIdTokenMaxAge")||Nr;let Pr=null;const Lr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Dr)return;const i=null===n||void 0===n?void 0:n.token;Pr!==i&&(Pr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Mr(t=(0,i.Sx)()){const e=(0,i.j6)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jt(t,{popupRedirectResolver:wr,persistence:[fn,Ue,Ve]}),o=(0,r.XA)("authTokenSyncURL");if(o){const t=Lr(o);Se(n,t,()=>t(n.currentUser)),Te(n,e=>t(e))}const s=(0,r.Tj)("auth");return s&&$t(n,`http://${s}`),n}Rr("Browser")},7394:(t,e,n)=>{var r=n(2195),i=n(6706),o=n(4576),s=r.ArrayBuffer,a=r.TypeError;t.exports=s&&i(s.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==o(t))throw new a("ArrayBuffer expected");return t.byteLength}},7400:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},7433:(t,e,n)=>{var r=n(4376),i=n(3517),o=n(34),s=n(8227),a=s("species"),c=Array;t.exports=function(t){var e;return r(t)&&(e=t.constructor,i(e)&&(e===c||r(e.prototype))?e=void 0:o(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?c:e}},7452:t=>{t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},7467:(t,e,n)=>{var r=n(7628),i=n(4644),o=i.aTypedArray,s=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;s("toReversed",function(){return r(o(this),a(this))})},7476:(t,e,n)=>{var r=n(4576),i=n(9504);t.exports=function(t){if("Function"===r(t))return i(t)}},7495:(t,e,n)=>{var r=n(6518),i=n(7323);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},7536:(t,e,n)=>{var r=n(3724),i=n(9039),o=n(8551),s=n(2603),a=Error.prototype.toString,c=i(function(){if(r){var t=Object.create(Object.defineProperty({},"name",{get:function(){return this===t}}));if("true"!==a.call(t))return!0}return"2: 1"!==a.call({message:1,name:2})||"Error"!==a.call({})});t.exports=c?function(){var t=o(this),e=s(t.name,"Error"),n=s(t.message);return e?n?e+": "+n:e:n}:a},7547:(t,e,n)=>{var r=n(6198),i=n(1291),o=RangeError;t.exports=function(t,e,n,s){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new o("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===u?s:t[h];return l}},7584:(t,e,n)=>{var r=n(34),i=n(6699);t.exports=function(t,e){r(e)&&"cause"in e&&i(t,"cause",e.cause)}},7588:(t,e,n)=>{var r=n(6518),i=n(9565),o=n(2652),s=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("forEach",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{forEach:function(t){a(this);try{s(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;o(e,function(e){t(e,n++)},{IS_RECORD:!0})}})},7628:(t,e,n)=>{var r=n(6198);t.exports=function(t,e){for(var n=r(t),i=new e(n),o=0;o<n;o++)i[o]=t[n-o-1];return i}},7629:(t,e,n)=>{var r=n(6395),i=n(2195),o=n(9433),s="__core-js_shared__",a=t.exports=i[s]||o(s,{});(a.versions||(a.versions=[])).push({version:"3.47.0",mode:r?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",license:"https://github.com/zloirock/core-js/blob/v3.47.0/LICENSE",source:"https://github.com/zloirock/core-js"})},7633:(t,e,n)=>{var r=n(7751),i=n(2106),o=n(8227),s=n(3724),a=o("species");t.exports=function(t){var e=r(t);s&&e&&!e[a]&&i(e,a,{configurable:!0,get:function(){return this}})}},7657:(t,e,n)=>{var r,i,o,s=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),f=n(8227),d=n(6395),p=f("iterator"),g=!1;[].keys&&(o=[].keys(),"next"in o?(i=l(l(o)),i!==Object.prototype&&(r=i)):g=!0);var v=!c(r)||s(function(){var t={};return r[p].call(t)!==t});v?r={}:d&&(r=u(r)),a(r[p])||h(r,p,function(){return this}),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},7680:(t,e,n)=>{var r=n(9504);t.exports=r([].slice)},7696:(t,e,n)=>{var r=n(1291),i=n(8014),o=RangeError;t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw new o("Wrong length or index");return n}},7740:(t,e,n)=>{var r=n(9297),i=n(5031),o=n(7347),s=n(4913);t.exports=function(t,e,n){for(var a=i(e),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},7743:(t,e,n)=>{var r=n(6518),i=n(9565),o=n(9306),s=n(6043),a=n(1103),c=n(2652),u=n(537);r({target:"Promise",stat:!0,forced:u},{race:function(t){var e=this,n=s.f(e),r=n.reject,u=a(function(){var s=o(e.resolve);c(t,function(t){i(s,e,t).then(n.resolve,r)})});return u.error&&r(u.value),n.promise}})},7750:(t,e,n)=>{var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},7751:(t,e,n)=>{var r=n(2195),i=n(4901),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},7764:(t,e,n)=>{var r=n(8183).charAt,i=n(655),o=n(1181),s=n(1088),a=n(2529),c="String Iterator",u=o.set,l=o.getterFor(c);s(String,"String",function(t){u(this,{type:c,string:i(t),index:0})},function(){var t,e=l(this),n=e.string,i=e.index;return i>=n.length?a(void 0,!0):(t=r(n,i),e.index+=t.length,a(t,!1))})},7782:t=>{t.exports=Math.sign||function(t){var e=+t;return 0===e||e!==e?e:e<0?-1:1}},7811:t=>{t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7812:(t,e,n)=>{var r=n(6518),i=n(9297),o=n(757),s=n(6823),a=n(5745),c=n(1296),u=a("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{keyFor:function(t){if(!o(t))throw new TypeError(s(t)+" is not a symbol");if(i(u,t))return u[t]}})},7819:(t,e,n)=>{var r=n(9039);t.exports=!r(function(){var t="9007199254740993",e=JSON.rawJSON(t);return!JSON.isRawJSON(e)||JSON.stringify(e)!==t})},7829:(t,e,n)=>{var r=n(8183).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},7860:(t,e,n)=>{var r=n(2839);t.exports=/web0s(?!.*chrome)/i.test(r)},7916:(t,e,n)=>{var r=n(6080),i=n(9565),o=n(8981),s=n(6319),a=n(4209),c=n(3517),u=n(6198),l=n(2278),h=n(81),f=n(851),d=Array;t.exports=function(t){var e=o(t),n=c(this),p=arguments.length,g=p>1?arguments[1]:void 0,v=void 0!==g;v&&(g=r(g,p>2?arguments[2]:void 0));var m,y,w,b,_,E,I=f(e),T=0;if(!I||this===d&&a(I))for(m=u(e),y=n?new this(m):d(m);m>T;T++)E=v?g(e[T],T):e[T],l(y,T,E);else for(y=n?new this:[],b=h(e,I),_=b.next;!(w=i(_,b)).done;T++)E=v?s(b,g,[w.value,T],!0):w.value,l(y,T,E);return y.length=T,y}},7936:(t,e,n)=>{var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},7945:(t,e,n)=>{var r=n(6518),i=n(3724),o=n(6801).f;r({target:"Object",stat:!0,forced:Object.defineProperties!==o,sham:!i},{defineProperties:o})},7979:(t,e,n)=>{var r=n(8551);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},8014:(t,e,n)=>{var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8100:(t,e,n)=>{var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},8111:(t,e,n)=>{var r=n(6518),i=n(2195),o=n(679),s=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(2278),h=n(9039),f=n(9297),d=n(8227),p=n(7657).IteratorPrototype,g=n(3724),v=n(6395),m="constructor",y="Iterator",w=d("toStringTag"),b=TypeError,_=i[y],E=v||!a(_)||_.prototype!==p||!h(function(){_({})}),I=function(){if(o(this,p),c(this)===p)throw new b("Abstract class Iterator not directly constructable")},T=function(t,e){g?u(p,t,{configurable:!0,get:function(){return e},set:function(e){if(s(this),this===p)throw new b("You can't redefine this property");f(this,t)?this[t]=e:l(this,t,e)}}):p[t]=e};f(p,w)||T(w,y),!E&&f(p,m)&&p[m]!==Object||T(m,I),I.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:I})},8126:(t,e,n)=>{var r=n(6518),i=n(7240),o=n(3061);r({target:"String",proto:!0,forced:o("bold")},{bold:function(){return i(this,"b","","")}})},8130:(t,e,n)=>{var r=n(6518),i=n(6395),o=n(3724),s=n(2195),a=n(9167),c=n(9504),u=n(2796),l=n(9297),h=n(3167),f=n(1625),d=n(757),p=n(2777),g=n(9039),v=n(8480).f,m=n(7347).f,y=n(4913).f,w=n(1240),b=n(3802).trim,_="Number",E=s[_],I=a[_],T=E.prototype,S=s.TypeError,A=c("".slice),C=c("".charCodeAt),k=function(t){var e=p(t,"number");return"bigint"==typeof e?e:x(e)},x=function(t){var e,n,r,i,o,s,a,c,u=p(t,"number");if(d(u))throw new S("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=b(u),e=C(u,0),43===e||45===e){if(n=C(u,2),88===n||120===n)return NaN}else if(48===e){switch(C(u,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(o=A(u,2),s=o.length,a=0;a<s;a++)if(c=C(o,a),c<48||c>i)return NaN;return parseInt(o,r)}return+u},O=u(_,!E(" 0o1")||!E("0b1")||E("+0x1")),R=function(t){return f(T,t)&&g(function(){w(t)})},N=function(t){var e=arguments.length<1?0:E(k(t));return R(this)?h(Object(e),this,N):e};N.prototype=T,O&&!i&&(T.constructor=N),r({global:!0,constructor:!0,wrap:!0,forced:O},{Number:N});var D=function(t,e){for(var n,r=o?v(e):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),i=0;r.length>i;i++)l(e,n=r[i])&&!l(t,n)&&y(t,n,m(e,n))};i&&I&&D(a[_],I),(O||i)&&D(a[_],E)},8140:(t,e,n)=>{var r=n(4644),i=n(6198),o=n(1291),s=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",function(t){var e=s(this),n=i(e),r=o(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]})},8156:(t,e,n)=>{var r=n(6518),i=n(533).start,o=n(3063);r({target:"String",proto:!0,forced:o},{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},8183:(t,e,n)=>{var r=n(9504),i=n(1291),o=n(655),s=n(7750),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(t){return function(e,n){var r,l,h=o(s(e)),f=i(n),d=h.length;return f<0||f>=d?t?"":void 0:(r=c(h,f),r<55296||r>56319||f+1===d||(l=c(h,f+1))<56320||l>57343?t?a(h,f):r:t?u(h,f,f+2):l-56320+(r-55296<<10)+65536)}};t.exports={codeAt:l(!1),charAt:l(!0)}},8227:(t,e,n)=>{var r=n(2195),i=n(5745),o=n(9297),s=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||s;t.exports=function(t){return o(l,t)||(l[t]=a&&o(u,t)?u[t]:h("Symbol."+t)),l[t]}},8229:(t,e,n)=>{var r=n(9590),i=RangeError;t.exports=function(t,e){var n=r(t);if(n%e)throw new i("Wrong offset");return n}},8235:(t,e,n)=>{var r=n(9504),i=n(9297),o=SyntaxError,s=parseInt,a=String.fromCharCode,c=r("".charAt),u=r("".slice),l=r(/./.exec),h={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":"\n","\\r":"\r","\\t":"\t"},f=/^[\da-f]{4}$/i,d=/^[\u0000-\u001F]$/;t.exports=function(t,e){var n=!0,r="";while(e<t.length){var p=c(t,e);if("\\"===p){var g=u(t,e,e+2);if(i(h,g))r+=h[g],e+=2;else{if("\\u"!==g)throw new o('Unknown escape sequence: "'+g+'"');e+=2;var v=u(t,e,e+4);if(!l(f,v))throw new o("Bad Unicode escape at: "+e);r+=a(s(v,16)),e+=4}}else{if('"'===p){n=!1,e++;break}if(l(d,p))throw new o("Bad control character in string literal at: "+e);r+=p,e++}}if(n)throw new o("Unterminated string at: "+e);return{value:r,end:e}}},8242:(t,e,n)=>{var r=n(9565),i=n(7751),o=n(8227),s=n(6840);t.exports=function(){var t=i("Symbol"),e=t&&t.prototype,n=e&&e.valueOf,a=o("toPrimitive");e&&!e[a]&&s(e,a,function(t){return r(n,this)},{arity:1})}},8265:t=>{var e=function(){this.head=null,this.tail=null};e.prototype={add:function(t){var e={item:t,next:null},n=this.tail;n?n.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t){var e=this.head=t.next;return null===e&&(this.tail=null),t.item}}},t.exports=e},8309:(t,e,n)=>{n(4359)},8319:t=>{var e=Math.round;t.exports=function(t){var n=e(t);return n<0?0:n>255?255:255&n}},8335:(t,e,n)=>{n(9112)},8379:(t,e,n)=>{var r=n(8745),i=n(5397),o=n(1291),s=n(6198),a=n(4598),c=Math.min,u=[].lastIndexOf,l=!!u&&1/[1].lastIndexOf(1,-0)<0,h=a("lastIndexOf"),f=l||!h;t.exports=f?function(t){if(l)return r(u,this,arguments)||0;var e=i(this),n=s(e);if(0===n)return-1;var a=n-1;for(arguments.length>1&&(a=c(a,o(arguments[1]))),a<0&&(a=n+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}:u},8429:(t,e,n)=>{var r=n(9039),i=n(2195),o=i.RegExp,s=r(function(){var t=o("a","y");return t.lastIndex=2,null!==t.exec("abcd")}),a=s||r(function(){return!o("a","y").sticky}),c=s||r(function(){var t=o("^r","gy");return t.lastIndex=2,null!==t.exec("str")});t.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:s}},8459:(t,e,n)=>{var r=n(6518),i=n(3904);r({global:!0,forced:parseFloat!==i},{parseFloat:i})},8480:(t,e,n)=>{var r=n(1828),i=n(8727),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},8490:t=>{var e=Array,n=Math.abs,r=Math.pow,i=Math.floor,o=Math.log,s=Math.LN2,a=function(t,a,c){var u,l,h,f=e(c),d=8*c-a-1,p=(1<<d)-1,g=p>>1,v=23===a?r(2,-24)-r(2,-77):0,m=t<0||0===t&&1/t<0?1:0,y=0;t=n(t),t!==t||t===1/0?(l=t!==t?1:0,u=p):(u=i(o(t)/s),h=r(2,-u),t*h<1&&(u--,h*=2),t+=u+g>=1?v/h:v*r(2,1-g),t*h>=2&&(u++,h/=2),u+g>=p?(l=0,u=p):u+g>=1?(l=(t*h-1)*r(2,a),u+=g):(l=t*r(2,g-1)*r(2,a),u=0));while(a>=8)f[y++]=255&l,l/=256,a-=8;u=u<<a|l,d+=a;while(d>0)f[y++]=255&u,u/=256,d-=8;return f[y-1]|=128*m,f},c=function(t,e){var n,i=t.length,o=8*i-e-1,s=(1<<o)-1,a=s>>1,c=o-7,u=i-1,l=t[u--],h=127&l;l>>=7;while(c>0)h=256*h+t[u--],c-=8;n=h&(1<<-c)-1,h>>=-c,c+=e;while(c>0)n=256*n+t[u--],c-=8;if(0===h)h=1-a;else{if(h===s)return n?NaN:l?-1/0:1/0;n+=r(2,e),h-=a}return(l?-1:1)*n*r(2,h-e)};t.exports={pack:a,unpack:c}},8551:(t,e,n)=>{var r=n(34),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw new o(i(t)+" is not an object")}},8574:(t,e,n)=>{var r=n(9504),i=Error,o=r("".replace),s=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=o(t,a,"");return t}},8598:(t,e,n)=>{var r=n(6518),i=n(9504),o=n(7055),s=n(5397),a=n(4598),c=i([].join),u=o!==Object,l=u||!a("join",",");r({target:"Array",proto:!0,forced:l},{join:function(t){return c(s(this),void 0===t?",":t)}})},8622:(t,e,n)=>{var r=n(2195),i=n(4901),o=r.WeakMap;t.exports=i(o)&&/native code/.test(String(o))},8643:(t,e,n)=>{n.d(e,{A:()=>c});n(2675),n(2008),n(1629),n(4114),n(8111),n(2489),n(7588),n(7945),n(4185),n(3851),n(1278),n(9432),n(6099),n(3500);var r=n(5929);n(5700),n(6280),n(6918),n(9572),n(8130);function i(t,e){if("object"!=(0,r.A)(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=(0,r.A)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function o(t){var e=i(t,"string");return"symbol"==(0,r.A)(e)?e:e+""}function s(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){s(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}},8686:(t,e,n)=>{var r=n(3724),i=n(9039);t.exports=r&&i(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},8706:(t,e,n)=>{var r=n(6518),i=n(9039),o=n(4376),s=n(34),a=n(8981),c=n(6198),u=n(6837),l=n(2278),h=n(1469),f=n(597),d=n(8227),p=n(9519),g=d("isConcatSpreadable"),v=p>=51||!i(function(){var t=[];return t[g]=!1,t.concat()[0]!==t}),m=function(t){if(!s(t))return!1;var e=t[g];return void 0!==e?!!e:o(t)},y=!v||!f("concat");r({target:"Array",proto:!0,arity:1,forced:y},{concat:function(t){var e,n,r,i,o,s=a(this),f=h(s,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?s:arguments[e],m(o))for(i=c(o),u(d+i),n=0;n<i;n++,d++)n in o&&l(f,d,o[n]);else u(d+1),l(f,d++,o);return f.length=d,f}})},8727:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8745:(t,e,n)=>{var r=n(616),i=Function.prototype,o=i.apply,s=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},8747:(t,e,n)=>{var r=n(4644),i=r.aTypedArray,o=r.exportTypedArrayMethod,s=Math.floor;o("reverse",function(){var t,e=this,n=i(e).length,r=s(n/2),o=0;while(o<r)t=e[o],e[o++]=e[--n],e[n]=t;return e})},8773:(t,e)=>{var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},8781:(t,e,n)=>{var r=n(350).PROPER,i=n(6840),o=n(8551),s=n(655),a=n(9039),c=n(1034),u="toString",l=RegExp.prototype,h=l[u],f=a(function(){return"/a/b"!==h.call({source:"a",flags:"b"})}),d=r&&h.name!==u;(f||d)&&i(l,u,function(){var t=o(this),e=s(t.source),n=s(c(t));return"/"+e+"/"+n},{unsafe:!0})},8814:(t,e,n)=>{var r=n(9039),i=n(2195),o=i.RegExp;t.exports=r(function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})},8845:(t,e,n)=>{var r=n(2195),i=n(9565),o=n(4644),s=n(6198),a=n(8229),c=n(8981),u=n(9039),l=r.RangeError,h=r.Int8Array,f=h&&h.prototype,d=f&&f.set,p=o.aTypedArray,g=o.exportTypedArrayMethod,v=!u(function(){var t=new Uint8ClampedArray(2);return i(d,t,{length:1,0:3},1),3!==t[1]}),m=v&&o.NATIVE_ARRAY_BUFFER_VIEWS&&u(function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]});g("set",function(t){p(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(v)return i(d,this,n,e);var r=this.length,o=s(n),u=0;if(o+e>r)throw new l("Wrong length");while(u<o)this[e+u]=n[u++]},!v||m)},8980:(t,e,n)=>{var r=n(6518),i=n(9213).findIndex,o=n(6469),s="findIndex",a=!0;s in[]&&Array(1)[s](function(){a=!1}),r({target:"Array",proto:!0,forced:a},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},8981:(t,e,n)=>{var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},8995:(t,e,n)=>{var r=n(4644),i=n(9213).map,o=r.aTypedArray,s=r.getTypedArrayConstructor,a=r.exportTypedArrayMethod;a("map",function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0,function(t,e){return new(s(t))(e)})})},9039:t=>{t.exports=function(t){try{return!!t()}catch(e){return!0}}},9085:(t,e,n)=>{var r=n(6518),i=n(4213);r({target:"Object",stat:!0,arity:2,forced:Object.assign!==i},{assign:i})},9089:(t,e,n)=>{var r=n(6518),i=n(9504),o=Date,s=i(o.prototype.getTime);r({target:"Date",stat:!0},{now:function(){return s(new o)}})},9112:(t,e,n)=>{var r=n(6518),i=n(3724),o=n(2195),s=n(7751),a=n(9504),c=n(9565),u=n(4901),l=n(34),h=n(4376),f=n(9297),d=n(655),p=n(6198),g=n(2278),v=n(9039),m=n(8235),y=n(4495),w=o.JSON,b=o.Number,_=o.SyntaxError,E=w&&w.parse,I=s("Object","keys"),T=Object.getOwnPropertyDescriptor,S=a("".charAt),A=a("".slice),C=a(/./.exec),k=a([].push),x=/^\d$/,O=/^[1-9]$/,R=/^[\d-]$/,N=/^[\t\n\r ]$/,D=0,P=1,L=function(t,e){t=d(t);var n=new j(t,0,""),r=n.parse(),i=r.value,o=n.skip(N,r.end);if(o<t.length)throw new _('Unexpected extra character: "'+S(t,o)+'" after the parsed data at: '+o);return u(e)?M({"":i},"",e,r):i},M=function(t,e,n,r){var i,o,s,a,u,d=t[e],g=r&&d===r.value,v=g&&"string"==typeof r.source?{source:r.source}:{};if(l(d)){var m=h(d),y=g?r.nodes:m?[]:{};if(m)for(i=y.length,s=p(d),a=0;a<s;a++)F(d,a,M(d,""+a,n,a<i?y[a]:void 0));else for(o=I(d),s=p(o),a=0;a<s;a++)u=o[a],F(d,u,M(d,u,n,f(y,u)?y[u]:void 0))}return c(n,t,e,d,v)},F=function(t,e,n){if(i){var r=T(t,e);if(r&&!r.configurable)return}void 0===n?delete t[e]:g(t,e,n)},U=function(t,e,n,r){this.value=t,this.end=e,this.source=n,this.nodes=r},j=function(t,e){this.source=t,this.index=e};j.prototype={fork:function(t){return new j(this.source,t)},parse:function(){var t=this.source,e=this.skip(N,this.index),n=this.fork(e),r=S(t,e);if(C(R,r))return n.number();switch(r){case"{":return n.object();case"[":return n.array();case'"':return n.string();case"t":return n.keyword(!0);case"f":return n.keyword(!1);case"n":return n.keyword(null)}throw new _('Unexpected character: "'+r+'" at: '+e)},node:function(t,e,n,r,i){return new U(e,r,t?null:A(this.source,n,r),i)},object:function(){var t=this.source,e=this.index+1,n=!1,r={},i={};while(e<t.length){if(e=this.until(['"',"}"],e),"}"===S(t,e)&&!n){e++;break}var o=this.fork(e).string(),s=o.value;e=o.end,e=this.until([":"],e)+1,e=this.skip(N,e),o=this.fork(e).parse(),g(i,s,o),g(r,s,o.value),e=this.until([",","}"],o.end);var a=S(t,e);if(","===a)n=!0,e++;else if("}"===a){e++;break}}return this.node(P,r,this.index,e,i)},array:function(){var t=this.source,e=this.index+1,n=!1,r=[],i=[];while(e<t.length){if(e=this.skip(N,e),"]"===S(t,e)&&!n){e++;break}var o=this.fork(e).parse();if(k(i,o),k(r,o.value),e=this.until([",","]"],o.end),","===S(t,e))n=!0,e++;else if("]"===S(t,e)){e++;break}}return this.node(P,r,this.index,e,i)},string:function(){var t=this.index,e=m(this.source,this.index+1);return this.node(D,e.value,t,e.end)},number:function(){var t=this.source,e=this.index,n=e;if("-"===S(t,n)&&n++,"0"===S(t,n))n++;else{if(!C(O,S(t,n)))throw new _("Failed to parse number at: "+n);n=this.skip(x,n+1)}if("."===S(t,n)&&(n=this.skip(x,n+1)),"e"===S(t,n)||"E"===S(t,n)){n++,"+"!==S(t,n)&&"-"!==S(t,n)||n++;var r=n;if(n=this.skip(x,n),r===n)throw new _("Failed to parse number's exponent value at: "+n)}return this.node(D,b(A(t,e,n)),e,n)},keyword:function(t){var e=""+t,n=this.index,r=n+e.length;if(A(this.source,n,r)!==e)throw new _("Failed to parse value at: "+n);return this.node(D,t,n,r)},skip:function(t,e){for(var n=this.source;e<n.length;e++)if(!C(t,S(n,e)))break;return e},until:function(t,e){e=this.skip(N,e);for(var n=S(this.source,e),r=0;r<t.length;r++)if(t[r]===n)return e;throw new _('Unexpected character: "'+n+'" at: '+e)}};var V=v(function(){var t,e="9007199254740993";return E(e,function(e,n,r){t=r.source}),t!==e}),$=y&&!v(function(){return 1/E("-0 \t")!==-1/0});r({target:"JSON",stat:!0,forced:V},{parse:function(t,e){return $&&!u(e)?E(t):L(t,e)}})},9143:(t,e,n)=>{var r=n(2195),i=n(9504),o=n(3972),s=n(3463),a=n(9297),c=n(2804),u=n(944),l=n(5169),h=c.c2i,f=c.c2iUrl,d=r.SyntaxError,p=r.TypeError,g=i("".charAt),v=function(t,e){for(var n=t.length;e<n;e++){var r=g(t,e);if(" "!==r&&"\t"!==r&&"\n"!==r&&"\f"!==r&&"\r"!==r)break}return e},m=function(t,e,n){var r=t.length;r<4&&(t+=2===r?"AA":"A");var i=(e[g(t,0)]<<18)+(e[g(t,1)]<<12)+(e[g(t,2)]<<6)+e[g(t,3)],o=[i>>16&255,i>>8&255,255&i];if(2===r){if(n&&0!==o[1])throw new d("Extra bits");return[o[0]]}if(3===r){if(n&&0!==o[2])throw new d("Extra bits");return[o[0],o[1]]}return o},y=function(t,e,n){for(var r=e.length,i=0;i<r;i++)t[n+i]=e[i];return n+r};t.exports=function(t,e,n,r){s(t),o(e);var i="base64"===u(e)?h:f,c=e?e.lastChunkHandling:void 0;if(void 0===c&&(c="loose"),"loose"!==c&&"strict"!==c&&"stop-before-partial"!==c)throw new p("Incorrect `lastChunkHandling` option");n&&l(n.buffer);var w=t.length,b=n||[],_=0,E=0,I="",T=0;if(r)while(1){if(T=v(t,T),T===w){if(I.length>0){if("stop-before-partial"===c)break;if("loose"!==c)throw new d("Missing padding");if(1===I.length)throw new d("Malformed padding: exactly one additional character");_=y(b,m(I,i,!1),_)}E=w;break}var S=g(t,T);if(++T,"="===S){if(I.length<2)throw new d("Padding is too early");if(T=v(t,T),2===I.length){if(T===w){if("stop-before-partial"===c)break;throw new d("Malformed padding: only one =")}"="===g(t,T)&&(++T,T=v(t,T))}if(T<w)throw new d("Unexpected character after padding");_=y(b,m(I,i,"strict"===c),_),E=w;break}if(!a(i,S))throw new d("Unexpected character");var A=r-_;if(1===A&&2===I.length||2===A&&3===I.length)break;if(I+=S,4===I.length&&(_=y(b,m(I,i,!1),_),I="",E=T,_===r))break}return{bytes:b,read:E,written:_}}},9167:(t,e,n)=>{var r=n(2195);t.exports=r},9213:(t,e,n)=>{var r=n(6080),i=n(9504),o=n(7055),s=n(8981),a=n(6198),c=n(1469),u=i([].push),l=function(t){var e=1===t,n=2===t,i=3===t,l=4===t,h=6===t,f=7===t,d=5===t||h;return function(p,g,v,m){for(var y,w,b=s(p),_=o(b),E=a(_),I=r(g,v),T=0,S=m||c,A=e?S(p,E):n||f?S(p,0):void 0;E>T;T++)if((d||T in _)&&(y=_[T],w=I(y,T,b),t))if(e)A[T]=w;else if(w)switch(t){case 3:return!0;case 5:return y;case 6:return T;case 2:u(A,y)}else switch(t){case 4:return!1;case 7:u(A,y)}return h?-1:i||l?l:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},9217:(t,e,n)=>{n.d(e,{A:()=>i});n(2675),n(9463),n(6280),n(6918),n(4170),n(9904),n(875),n(3548),n(287),n(6099),n(4185);function r(t,e,n,i){var o=Object.defineProperty;try{o({},"",{})}catch(t){o=0}r=function(t,e,n,i){function s(e,n){r(t,e,function(t){return this._invoke(e,n,t)})}e?o?o(t,e,{value:n,enumerable:!i,configurable:!i,writable:!i}):t[e]=n:(s("next",0),s("throw",1),s("return",2))},r(t,e,n,i)}function i(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
var t,e,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",s=n.toStringTag||"@@toStringTag";function a(n,i,o,s){var a=i&&i.prototype instanceof u?i:u,l=Object.create(a.prototype);return r(l,"_invoke",function(n,r,i){var o,s,a,u=0,l=i||[],h=!1,f={p:0,n:0,v:t,a:d,f:d.bind(t,4),d:function(e,n){return o=e,s=0,a=t,f.n=n,c}};function d(n,r){for(s=n,a=r,e=0;!h&&u&&!i&&e<l.length;e++){var i,o=l[e],d=f.p,p=o[2];n>3?(i=p===r)&&(a=o[(s=o[4])?5:(s=3,3)],o[4]=o[5]=t):o[0]<=d&&((i=n<2&&d<o[1])?(s=0,f.v=r,f.n=o[1]):d<p&&(i=n<3||o[0]>r||r>p)&&(o[4]=n,o[5]=r,f.n=p,s=0))}if(i||n>1)return c;throw h=!0,r}return function(i,l,p){if(u>1)throw TypeError("Generator is already running");for(h&&1===l&&d(l,p),s=l,a=p;(e=s<2?t:a)||!h;){o||(s?s<3?(s>1&&(f.n=-1),d(s,a)):f.n=a:f.v=a);try{if(u=2,o){if(s||(i="next"),e=o[i]){if(!(e=e.call(o,a)))throw TypeError("iterator result is not an object");if(!e.done)return e;a=e.value,s<2&&(s=0)}else 1===s&&(e=o["return"])&&e.call(o),s<2&&(a=TypeError("The iterator does not provide a '"+i+"' method"),s=1);o=t}else if((e=(h=f.n<0)?a:n.call(r,f))!==c)break}catch(e){o=t,s=1,a=e}finally{u=1}}return{value:e,done:h}}}(n,o,s),!0),l}var c={};function u(){}function l(){}function h(){}e=Object.getPrototypeOf;var f=[][o]?e(e([][o]())):(r(e={},o,function(){return this}),e),d=h.prototype=u.prototype=Object.create(f);function p(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,r(t,s,"GeneratorFunction")),t.prototype=Object.create(d),t}return l.prototype=h,r(d,"constructor",h),r(h,"constructor",l),l.displayName="GeneratorFunction",r(h,s,"GeneratorFunction"),r(d),r(d,s,"Generator"),r(d,o,function(){return this}),r(d,"toString",function(){return"[object Generator]"}),(i=function(){return{w:a,m:p}})()}},9225:(t,e,n)=>{var r,i,o,s,a=n(2195),c=n(8745),u=n(6080),l=n(4901),h=n(9297),f=n(9039),d=n(397),p=n(7680),g=n(4055),v=n(2812),m=n(9544),y=n(6193),w=a.setImmediate,b=a.clearImmediate,_=a.process,E=a.Dispatch,I=a.Function,T=a.MessageChannel,S=a.String,A=0,C={},k="onreadystatechange";f(function(){r=a.location});var x=function(t){if(h(C,t)){var e=C[t];delete C[t],e()}},O=function(t){return function(){x(t)}},R=function(t){x(t.data)},N=function(t){a.postMessage(S(t),r.protocol+"//"+r.host)};w&&b||(w=function(t){v(arguments.length,1);var e=l(t)?t:I(t),n=p(arguments,1);return C[++A]=function(){c(e,void 0,n)},i(A),A},b=function(t){delete C[t]},y?i=function(t){_.nextTick(O(t))}:E&&E.now?i=function(t){E.now(O(t))}:T&&!m?(o=new T,s=o.port2,o.port1.onmessage=R,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(N)?(i=N,a.addEventListener("message",R,!1)):i=k in g("script")?function(t){d.appendChild(g("script"))[k]=function(){d.removeChild(this),x(t)}}:function(t){setTimeout(O(t),0)}),t.exports={set:w,clear:b}},9228:(t,e,n)=>{n(7495);var r=n(9565),i=n(6840),o=n(7323),s=n(9039),a=n(8227),c=n(6699),u=a("species"),l=RegExp.prototype;t.exports=function(t,e,n,h){var f=a(t),d=!s(function(){var e={};return e[f]=function(){return 7},7!==""[t](e)}),p=d&&!s(function(){var e=!1,n=/a/;if("split"===t){var r={};r[u]=function(){return n},n={constructor:r,flags:""},n[f]=/./[f]}return n.exec=function(){return e=!0,null},n[f](""),!e});if(!d||!p||n){var g=/./[f],v=e(f,""[t],function(t,e,n,i,s){var a=e.exec;return a===o||a===l.exec?d&&!s?{done:!0,value:r(g,e,n,i)}:{done:!0,value:r(t,n,e,i)}:{done:!1}});i(String.prototype,t,v[0]),i(l,f,v[1])}h&&c(l[f],"sham",!0)}},9296:(t,e,n)=>{var r=n(4055),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;t.exports=o===Object.prototype?void 0:o},9297:(t,e,n)=>{var r=n(9504),i=n(8981),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},9306:(t,e,n)=>{var r=n(4901),i=n(6823),o=TypeError;t.exports=function(t){if(r(t))return t;throw new o(i(t)+" is not a function")}},9369:(t,e,n)=>{var r=n(4644),i=n(9504),o=r.aTypedArray,s=r.exportTypedArrayMethod,a=i([].join);s("join",function(t){return a(o(this),t)})},9391:(t,e,n)=>{var r=n(6518),i=n(6395),o=n(550),s=n(9039),a=n(7751),c=n(4901),u=n(2293),l=n(3438),h=n(6840),f=o&&o.prototype,d=!!o&&s(function(){f["finally"].call({then:function(){}},function(){})});if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then(function(){return n})}:t,n?function(n){return l(e,t()).then(function(){throw n})}:t)}}),!i&&c(o)){var p=a("Promise").prototype["finally"];f["finally"]!==p&&h(f,"finally",p,{unsafe:!0})}},9423:(t,e,n)=>{var r=n(4644),i=n(9039),o=n(7680),s=r.aTypedArray,a=r.getTypedArrayConstructor,c=r.exportTypedArrayMethod,u=i(function(){new Int8Array(1).slice()});c("slice",function(t,e){var n=o(s(this),t,e),r=a(this),i=0,c=n.length,u=new r(c);while(c>i)u[i]=n[i++];return u},u)},9429:(t,e,n)=>{var r=n(2195),i=n(6193);t.exports=function(t){if(i){try{return r.process.getBuiltinModule(t)}catch(e){}try{return Function('return require("'+t+'")')()}catch(e){}}}},9432:(t,e,n)=>{var r=n(6518),i=n(8981),o=n(1072),s=n(9039),a=s(function(){o(1)});r({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},9433:(t,e,n)=>{var r=n(2195),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9462:(t,e,n)=>{var r=n(9565),i=n(2360),o=n(6699),s=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),f=n(9539),d=n(1385),p=a("toStringTag"),g="IteratorHelper",v="WrapForValidIterator",m="normal",y="throw",w=c.set,b=function(t){var e=c.getterFor(t?v:g);return s(i(l),{next:function(){var n=e(this);if(t)return n.nextHandler();if(n.done)return h(void 0,!0);try{var r=n.nextHandler();return n.returnHandlerResult?r:h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=e(this),i=n.iterator;if(n.done=!0,t){var o=u(i,"return");return o?r(o,i):h(void 0,!0)}if(n.inner)try{f(n.inner.iterator,m)}catch(s){return f(i,y,s)}if(n.openIters)try{d(n.openIters,m)}catch(s){return f(i,y,s)}return i&&f(i,m),h(void 0,!0)}})},_=b(!0),E=b(!1);o(E,p,"Iterator Helper"),t.exports=function(t,e,n){var r=function(r,i){i?(i.iterator=r.iterator,i.next=r.next):i=r,i.type=e?v:g,i.returnHandlerResult=!!n,i.nextHandler=t,i.counter=0,i.done=!1,w(this,i)};return r.prototype=e?_:E,r}},9463:(t,e,n)=>{var r=n(6518),i=n(3724),o=n(2195),s=n(9504),a=n(9297),c=n(4901),u=n(1625),l=n(655),h=n(2106),f=n(7740),d=o.Symbol,p=d&&d.prototype;if(i&&c(d)&&(!("description"in p)||void 0!==d().description)){var g={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(p,this)?new d(t):void 0===t?d():d(t);return""===t&&(g[e]=!0),e};f(v,d),v.prototype=p,p.constructor=v;var m="Symbol(description detection)"===String(d("description detection")),y=s(p.valueOf),w=s(p.toString),b=/^Symbol\((.*)\)[^)]+$/,_=s("".replace),E=s("".slice);h(p,"description",{configurable:!0,get:function(){var t=y(this);if(a(g,t))return"";var e=w(t),n=m?E(e,7,-1):_(e,b,"$1");return""===n?void 0:n}}),r({global:!0,constructor:!0,forced:!0},{Symbol:v})}},9472:(t,e,n)=>{var r=n(2195),i=n(8745),o=n(4901),s=n(4215),a=n(2839),c=n(7680),u=n(2812),l=r.Function,h=/MSIE .\./.test(a)||"BUN"===s&&function(){var t=r.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}();t.exports=function(t,e){var n=e?2:1;return h?function(r,s){var a=u(arguments.length,1)>n,h=o(r)?r:l(r),f=a?c(arguments,n):[],d=a?function(){i(h,this,f)}:h;return e?t(d,s):t(d)}:t}},9486:(t,e,n)=>{var r=n(6518),i=n(2195),o=n(9504),s=n(3972),a=n(4154),c=n(5169),u=n(2804),l=n(944),h=u.i2c,f=u.i2cUrl,d=o("".charAt),p=i.Uint8Array,g=!p||!p.prototype.toBase64||!function(){try{var t=new p;t.toBase64(null)}catch(e){return!0}}();p&&r({target:"Uint8Array",proto:!0,forced:g},{toBase64:function(){var t=a(this),e=arguments.length?s(arguments[0]):void 0,n="base64"===l(e)?h:f,r=!!e&&!!e.omitPadding;c(this.buffer);for(var i,o="",u=0,p=t.length,g=function(t){return d(n,i>>6*t&63)};u+2<p;u+=3)i=(t[u]<<16)+(t[u+1]<<8)+t[u+2],o+=g(3)+g(2)+g(1)+g(0);return u+2===p?(i=(t[u]<<16)+(t[u+1]<<8),o+=g(3)+g(2)+g(1)+(r?"":"=")):u+1===p&&(i=t[u]<<16,o+=g(3)+g(2)+(r?"":"==")),o}})},9504:(t,e,n)=>{var r=n(616),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);t.exports=r?s:function(t){return function(){return o.apply(t,arguments)}}},9519:(t,e,n)=>{var r,i,o=n(2195),s=n(2839),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},9539:(t,e,n)=>{var r=n(9565),i=n(8551),o=n(5966);t.exports=function(t,e,n){var s,a;i(t);try{if(s=o(t,"return"),!s){if("throw"===e)throw n;return n}s=r(s,t)}catch(c){a=!0,s=c}if("throw"===e)throw n;if(a)throw s;return i(s),n}},9544:(t,e,n)=>{var r=n(2839);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},9558:(t,e,n)=>{n.d(e,{A:()=>i});n(2675),n(9463),n(2259),n(6280),n(6918),n(6099),n(7764),n(2953);var r=n(5929);function i(t){if(null!=t){var e=t["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],n=0;if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}throw new TypeError((0,r.A)(t)+" is not iterable")}},9565:(t,e,n)=>{var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},9572:(t,e,n)=>{var r=n(9297),i=n(6840),o=n(3640),s=n(8227),a=s("toPrimitive"),c=Date.prototype;r(c,a)||i(c,a,o)},9577:(t,e,n)=>{var r=n(7547),i=n(4644),o=n(1108),s=n(1291),a=n(5854),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}(),f=h&&function(){try{new Int8Array(1)["with"](-.5,1)}catch(t){return!0}}();l("with",{with:function(t,e){var n=c(this),i=s(t),l=o(n)?a(e):+e;return r(n,u(n),i,l)}}["with"],!h||f)},9590:(t,e,n)=>{var r=n(1291),i=RangeError;t.exports=function(t){var e=r(t);if(e<0)throw new i("The argument can't be less than 0");return e}},9617:(t,e,n)=>{var r=n(5397),i=n(5610),o=n(6198),s=function(t){return function(e,n,s){var a=r(e),c=o(a);if(0===c)return!t&&-1;var u,l=i(s,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},9631:(t,e,n)=>{n(9486)},9773:(t,e,n)=>{var r=n(6518),i=n(4495),o=n(9039),s=n(3717),a=n(8981),c=!i||o(function(){s.f(1)});r({target:"Object",stat:!0,forced:c},{getOwnPropertySymbols:function(t){var e=s.f;return e?e(a(t)):[]}})},9797:(t,e,n)=>{n(4226)},9868:(t,e,n)=>{var r=n(6518),i=n(9504),o=n(1291),s=n(1240),a=n(2333),c=n(9039),u=RangeError,l=String,h=Math.floor,f=i(a),d=i("".slice),p=i(1.1.toFixed),g=function(t,e,n){return 0===e?n:e%2===1?g(t,e-1,n*t):g(t*t,e/2,n)},v=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},m=function(t,e,n){var r=-1,i=n;while(++r<6)i+=e*t[r],t[r]=i%1e7,i=h(i/1e7)},y=function(t,e){var n=6,r=0;while(--n>=0)r+=t[n],t[n]=h(r/e),r=r%e*1e7},w=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var r=l(t[e]);n=""===n?r:n+f("0",7-r.length)+r}return n},b=c(function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)})||!c(function(){p({})});r({target:"Number",proto:!0,forced:b},{toFixed:function(t){var e,n,r,i,a=s(this),c=o(t),h=[0,0,0,0,0,0],p="",b="0";if(c<0||c>20)throw new u("Incorrect fraction digits");if(a!==a)return"NaN";if(a<=-1e21||a>=1e21)return l(a);if(a<0&&(p="-",a=-a),a>1e-21)if(e=v(a*g(2,69,1))-69,n=e<0?a*g(2,-e,1):a/g(2,e,1),n*=4503599627370496,e=52-e,e>0){m(h,0,n),r=c;while(r>=7)m(h,1e7,0),r-=7;m(h,g(10,r,1),0),r=e-1;while(r>=23)y(h,1<<23),r-=23;y(h,1<<r),m(h,1,1),y(h,2),b=w(h)}else m(h,0,n),m(h,1<<-e,0),b=w(h)+f("0",c);return c>0?(i=b.length,b=p+(i<=c?"0."+f("0",c-i)+b:d(b,0,i-c)+"."+d(b,i-c))):b=p+b,b}})},9904:(t,e,n)=>{var r=n(6518),i=n(3724),o=n(2360);r({target:"Object",stat:!0,sham:!i},{create:o})},9928:(t,e,n)=>{n.d(e,{MF:()=>gt,j6:()=>ht,om:()=>lt,Sx:()=>mt,Wp:()=>vt,KO:()=>yt});var r=n(5125),i=n(3424),o=n(6743);const s=(t,e)=>e.some(e=>t instanceof e);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function v(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(E(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(e=>{e instanceof IDBCursor&&h.set(e,t)}).catch(()=>{}),g.set(e,t),e}function m(t){if(f.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){y=t(y)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(I(this),e),E(h.get(this))}:function(...e){return E(t.apply(I(this),e))}:function(e,...n){const r=t.call(I(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&m(t),s(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return v(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const I=t=>g.get(t);function T(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=E(s);return r&&s.addEventListener("upgradeneeded",t=>{r(E(s.result),t.oldVersion,t.newVersion,E(s.transaction),t)}),n&&s.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{o&&t.addEventListener("close",()=>o()),i&&t.addEventListener("versionchange",t=>i(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}const S=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],C=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return C.set(e,o),o}w(t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",N="0.9.13",D=new i.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",j="@firebase/auth",V="@firebase/auth-compat",$="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",K="@firebase/installations",H="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.23.0",ot="[DEFAULT]",st={[R]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[j]:"fire-auth",[V]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[K]:"fire-iid",[H]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new o.FA("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=it;function vt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:ot,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!==typeof s||!s)throw dt.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.T9)()),!n)throw dt.create("no-options");const a=at.get(s);if(a){if((0,o.bD)(n,a.options)&&(0,o.bD)(i,a.config))return a;throw dt.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const r of ct.values())c.addComponent(r);const u=new pt(n,i,c);return at.set(s,u),u}function mt(t=ot){const e=at.get(t);if(!e&&t===ot&&(0,o.T9)())return vt();if(!e)throw dt.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let o=null!==(i=st[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}lt(new r.uA(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",bt=1,_t="firebase-heartbeat-store";let Et=null;function It(){return Et||(Et=T(wt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch(t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})})),Et}async function Tt(t){try{const e=await It(),n=await e.transaction(_t).objectStore(_t).get(At(t));return n}catch(e){if(e instanceof o.g)D.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});D.warn(t.message)}}}async function St(t,e){try{const n=await It(),r=n.transaction(_t,"readwrite"),i=r.objectStore(_t);await i.put(e,At(t)),await r.done}catch(n){if(n instanceof o.g)D.warn(n.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(t.message)}}}function At(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=1024,kt=2592e6;class xt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Ot();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(t=>t.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ot(),{heartbeatsToSend:e,unsentEntries:n}=Rt(this._heartbeatsCache.heartbeats),r=(0,o.Uj)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ot(){const t=new Date;return t.toISOString().substring(0,10)}function Rt(t,e=Ct){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),Dt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.zW)()&&(0,o.eX)().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Tt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Dt(t){return(0,o.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){lt(new r.uA("platform-logger",t=>new x(t),"PRIVATE")),lt(new r.uA("heartbeat",t=>new xt(t),"PRIVATE")),yt(R,N,t),yt(R,N,"esm2017"),yt("fire-js","")}Pt("")},9948:(t,e,n)=>{var r=n(5370),i=n(4644).getTypedArrayConstructor;t.exports=function(t,e){return r(i(t),e)}},9955:(t,e,n)=>{var r=n(4644),i=n(9213).findIndex,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findIndex",function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)})}}]);
//# sourceMappingURL=chunk-vendors.ef4ef9c2.js.map