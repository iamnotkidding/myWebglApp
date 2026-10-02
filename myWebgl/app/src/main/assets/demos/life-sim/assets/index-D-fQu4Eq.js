var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return T(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function D(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+D(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+D(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+D(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&D(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function te(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&D(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(te)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=te,E=function(){re.postMessage(null)}}else E=function(){_(te,0)};function D(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,D(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),D=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=D&&e[D]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A={pending:!1,data:null,method:null,action:null},j=[],ce=-1;function M(e){return{current:e}}function le(e){0>ce||(e.current=j[ce],j[ce]=null,ce--)}function N(e,t){ce++,j[ce]=e.current,e.current=t}var ue=M(null),de=M(null),fe=M(null),pe=M(null);function me(e,t){switch(N(fe,t),N(de,e),N(ue,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}le(ue),N(ue,e)}function he(){le(ue),le(de),le(fe)}function ge(e){e.memoizedState!==null&&N(pe,e);var t=ue.current,n=Hd(t,e.type);t!==n&&(N(de,e),N(ue,n))}function _e(e){de.current===e&&(le(ue),le(de)),pe.current===e&&(le(pe),Qf._currentValue=A)}var ve,ye;function be(e){if(ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||``,ye=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ve+e+ye}var xe=!1;function Se(e,t){if(!e||xe)return``;xe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{xe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?be(n):``}function Ce(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be(`Lazy`);case 13:return e.child!==t&&t!==null?be(`Suspense Fallback`):be(`Suspense`);case 19:return be(`SuspenseList`);case 0:case 15:return Se(e.type,!1);case 11:return Se(e.type.render,!1);case 1:return Se(e.type,!0);case 31:return be(`Activity`);default:return``}}function we(e){try{var t=``,n=null;do t+=Ce(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Te=Object.prototype.hasOwnProperty,Ee=t.unstable_scheduleCallback,De=t.unstable_cancelCallback,P=t.unstable_shouldYield,Oe=t.unstable_requestPaint,ke=t.unstable_now,Ae=t.unstable_getCurrentPriorityLevel,je=t.unstable_ImmediatePriority,Me=t.unstable_UserBlockingPriority,Ne=t.unstable_NormalPriority,Pe=t.unstable_LowPriority,F=t.unstable_IdlePriority,Fe=t.log,Ie=t.unstable_setDisableYieldValue,Le=null,Re=null;function ze(e){if(typeof Fe==`function`&&Ie(e),Re&&typeof Re.setStrictMode==`function`)try{Re.setStrictMode(Le,e)}catch{}}var Be=Math.clz32?Math.clz32:Ue,Ve=Math.log,He=Math.LN2;function Ue(e){return e>>>=0,e===0?32:31-(Ve(e)/He|0)|0}var We=256,Ge=262144,Ke=4194304;function qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Je(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=qe(n))):i=qe(o):i=qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=qe(n))):i=qe(o)):i=qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ye(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var e=Ke;return Ke<<=1,!(Ke&62914560)&&(Ke=4194304),e}function Qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $e(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function et(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Be(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&tt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function tt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Be(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function I(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function nt(e,t){var n=t&-t;return n=n&42?1:rt(n),(n&(e.suspendedLanes|t))===0?n:0}function rt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function L(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function it(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function at(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var ot=Math.random().toString(36).slice(2),st=`__reactFiber$`+ot,ct=`__reactProps$`+ot,lt=`__reactContainer$`+ot,ut=`__reactEvents$`+ot,dt=`__reactListeners$`+ot,ft=`__reactHandles$`+ot,pt=`__reactResources$`+ot,mt=`__reactMarker$`+ot;function ht(e){delete e[st],delete e[ct],delete e[ut],delete e[dt],delete e[ft]}function gt(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[st])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function _t(e){if(e=e[st]||e[lt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function vt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function yt(e){var t=e[pt];return t||=e[pt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function bt(e){e[mt]=!0}var xt=new Set,St={};function Ct(e,t){wt(e,t),wt(e+`Capture`,t)}function wt(e,t){for(St[e]=t,e=0;e<t.length;e++)xt.add(t[e])}var Tt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Et={},Dt={};function Ot(e){return Te.call(Dt,e)?!0:Te.call(Et,e)?!1:Tt.test(e)?Dt[e]=!0:(Et[e]=!0,!1)}function kt(e,t,n){if(Ot(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function At(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function jt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Mt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Nt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Pt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function R(e){if(!e._valueTracker){var t=Nt(e)?`checked`:`value`;e._valueTracker=Pt(e,t,``+e[t])}}function Ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Nt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function It(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Rt(e){return e.replace(Lt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Mt(t)):e.value!==``+Mt(t)&&(e.value=``+Mt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Vt(e,o,Mt(n)):Vt(e,o,Mt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Mt(s):e.removeAttribute(`name`)}function Bt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){R(e);return}n=n==null?``:``+Mt(n),t=t==null?n:``+Mt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),R(e)}function Vt(e,t,n){t===`number`&&It(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ut(e,t,n){if(t!=null&&(t=``+Mt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Mt(n)}function Wt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Mt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),R(e)}function Gt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Kt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Jt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&qt(e,o,t[o])}function Yt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qt(e){return Zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function $t(){}var en=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nn=null,rn=null;function z(e){var t=_t(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;a:switch(e=t.stateNode,t.type){case`input`:if(zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Rt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ct]||null;if(!a)throw Error(i(90));zt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ft(r)}break a;case`textarea`:Ut(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}}}var an=!1;function on(e,t,n){if(an)return e(t,n);an=!0;try{return e(t)}finally{if(an=!1,(nn!==null||rn!==null)&&(vu(),nn&&(t=nn,e=rn,rn=nn=null,z(t),e)))for(t=0;t<e.length;t++)z(e[t])}}function sn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ct]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var cn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),ln=!1;if(cn)try{var un={};Object.defineProperty(un,"passive",{get:function(){ln=!0}}),window.addEventListener(`test`,un,un),window.removeEventListener(`test`,un,un)}catch{ln=!1}var dn=null,fn=null,pn=null;function mn(){if(pn)return pn;var e,t=fn,n=t.length,r,i=`value`in dn?dn.value:dn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return pn=i.slice(e,1<r?1-r:void 0)}function hn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gn(){return!0}function _n(){return!1}function vn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?gn:_n,this.isPropagationStopped=_n,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},B=vn(yn),bn=h({},yn,{view:0,detail:0}),xn=vn(bn),Sn,Cn,wn,Tn=h({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:In,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==wn&&(wn&&e.type===`mousemove`?(Sn=e.screenX-wn.screenX,Cn=e.screenY-wn.screenY):Cn=Sn=0,wn=e),Sn)},movementY:function(e){return`movementY`in e?e.movementY:Cn}}),En=vn(Tn),Dn=vn(h({},Tn,{dataTransfer:0})),On=vn(h({},bn,{relatedTarget:0})),kn=vn(h({},yn,{animationName:0,elapsedTime:0,pseudoElement:0})),An=vn(h({},yn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),jn=vn(h({},yn,{data:0})),Mn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Nn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Pn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pn[e])?!!t[e]:!1}function In(){return Fn}var Ln=vn(h({},bn,{key:function(e){if(e.key){var t=Mn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=hn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Nn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:In,charCode:function(e){return e.type===`keypress`?hn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?hn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Rn=vn(h({},Tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=vn(h({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:In})),Bn=vn(h({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Vn=vn(h({},Tn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Hn=vn(h({},yn,{newState:0,oldState:0})),Un=[9,13,27,32],Wn=cn&&`CompositionEvent`in window,Gn=null;cn&&`documentMode`in document&&(Gn=document.documentMode);var Kn=cn&&`TextEvent`in window&&!Gn,qn=cn&&(!Wn||Gn&&8<Gn&&11>=Gn),Jn=` `,Yn=!1;function Xn(e,t){switch(e){case`keyup`:return Un.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Zn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Qn=!1;function $n(e,t){switch(e){case`compositionend`:return Zn(t);case`keypress`:return t.which===32?(Yn=!0,Jn):null;case`textInput`:return e=t.data,e===Jn&&Yn?null:e;default:return null}}function er(e,t){if(Qn)return e===`compositionend`||!Wn&&Xn(e,t)?(e=mn(),pn=fn=dn=null,Qn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return qn&&t.locale!==`ko`?null:t.data;default:return null}}var tr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!tr[e.type]:t===`textarea`}function rr(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,t=Td(t,`onChange`),0<t.length&&(n=new B(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ir=null,ar=null;function or(e){vd(e,0)}function sr(e){if(Ft(vt(e)))return e}function cr(e,t){if(e===`change`)return t}var lr=!1;if(cn){var ur;if(cn){var dr=`oninput`in document;if(!dr){var fr=document.createElement(`div`);fr.setAttribute(`oninput`,`return;`),dr=typeof fr.oninput==`function`}ur=dr}else ur=!1;lr=ur&&(!document.documentMode||9<document.documentMode)}function pr(){ir&&(ir.detachEvent(`onpropertychange`,mr),ar=ir=null)}function mr(e){if(e.propertyName===`value`&&sr(ar)){var t=[];rr(t,ar,e,tn(e)),on(or,t)}}function hr(e,t,n){e===`focusin`?(pr(),ir=t,ar=n,ir.attachEvent(`onpropertychange`,mr)):e===`focusout`&&pr()}function gr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return sr(ar)}function _r(e,t){if(e===`click`)return sr(t)}function vr(e,t){if(e===`input`||e===`change`)return sr(t)}function yr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var br=typeof Object.is==`function`?Object.is:yr;function xr(e,t){if(br(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Te.call(t,i)||!br(e[i],t[i]))return!1}return!0}function Sr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cr(e,t){var n=Sr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Sr(n)}}function wr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=It(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=It(e.document)}return t}function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Dr=cn&&`documentMode`in document&&11>=document.documentMode,Or=null,kr=null,Ar=null,jr=!1;function Mr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jr||Or==null||Or!==It(r)||(r=Or,`selectionStart`in r&&Er(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&xr(Ar,r)||(Ar=r,r=Td(kr,`onSelect`),0<r.length&&(t=new B(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Or)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Pr={animationend:Nr(`Animation`,`AnimationEnd`),animationiteration:Nr(`Animation`,`AnimationIteration`),animationstart:Nr(`Animation`,`AnimationStart`),transitionrun:Nr(`Transition`,`TransitionRun`),transitionstart:Nr(`Transition`,`TransitionStart`),transitioncancel:Nr(`Transition`,`TransitionCancel`),transitionend:Nr(`Transition`,`TransitionEnd`)},Fr={},Ir={};cn&&(Ir=document.createElement(`div`).style,`AnimationEvent`in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),`TransitionEvent`in window||delete Pr.transitionend.transition);function Lr(e){if(Fr[e])return Fr[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ir)return Fr[e]=t[n];return e}var Rr=Lr(`animationend`),zr=Lr(`animationiteration`),Br=Lr(`animationstart`),Vr=Lr(`transitionrun`),Hr=Lr(`transitionstart`),Ur=Lr(`transitioncancel`),Wr=Lr(`transitionend`),Gr=new Map,Kr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Kr.push(`scrollEnd`);function qr(e,t){Gr.set(e,t),Ct(t,[e])}var Jr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Yr=[],Xr=0,Zr=0;function Qr(){for(var e=Xr,t=Zr=Xr=0;t<e;){var n=Yr[t];Yr[t++]=null;var r=Yr[t];Yr[t++]=null;var i=Yr[t];Yr[t++]=null;var a=Yr[t];if(Yr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ni(n,i,a)}}function $r(e,t,n,r){Yr[Xr++]=e,Yr[Xr++]=t,Yr[Xr++]=n,Yr[Xr++]=r,Zr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ei(e,t,n,r){return $r(e,t,n,r),ri(e)}function ti(e,t){return $r(e,null,null,t),ri(e)}function ni(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Be(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ri(e){if(50<lu)throw lu=0,uu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ii={};function ai(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,t,n,r){return new ai(e,t,n,r)}function si(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ci(e,t){var n=e.alternate;return n===null?(n=oi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function li(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ui(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)si(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ue.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=oi(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return di(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=oi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=oi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=oi(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case te:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=oi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function di(e,t,n,r){return e=oi(7,e,r,t),e.lanes=n,e}function fi(e,t,n){return e=oi(6,e,null,t),e.lanes=n,e}function pi(e){var t=oi(18,null,null,0);return t.stateNode=e,t}function mi(e,t,n){return t=oi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hi=new WeakMap;function gi(e,t){if(typeof e==`object`&&e){var n=hi.get(e);return n===void 0?(t={value:e,source:t,stack:we(t)},hi.set(e,t),t):n}return{value:e,source:t,stack:we(t)}}var _i=[],vi=0,yi=null,bi=0,xi=[],Si=0,Ci=null,wi=1,Ti=``;function Ei(e,t){_i[vi++]=bi,_i[vi++]=yi,yi=e,bi=t}function Di(e,t,n){xi[Si++]=wi,xi[Si++]=Ti,xi[Si++]=Ci,Ci=e;var r=wi;e=Ti;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var a=32-Be(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wi=1<<32-Be(t)+i|n<<i|r,Ti=a+e}else wi=1<<a|n<<i|r,Ti=e}function Oi(e){e.return!==null&&(Ei(e,1),Di(e,1,0))}function ki(e){for(;e===yi;)yi=_i[--vi],_i[vi]=null,bi=_i[--vi],_i[vi]=null;for(;e===Ci;)Ci=xi[--Si],xi[Si]=null,Ti=xi[--Si],xi[Si]=null,wi=xi[--Si],xi[Si]=null}function Ai(e,t){xi[Si++]=wi,xi[Si++]=Ti,xi[Si++]=Ci,wi=t.id,Ti=t.overflow,Ci=e}var ji=null,Mi=null,V=!1,Ni=null,Pi=!1,Fi=Error(i(519));function Ii(e){throw Hi(gi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Fi}function Li(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[st]=e,t[ct]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)$(gd[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),Wt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Ii(e,!0)}function Ri(e){for(ji=e.return;ji;)switch(ji.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:ji=ji.return}}function zi(e){if(e!==ji)return!1;if(!V)return Ri(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Mi&&Ii(e),Ri(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Mi=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Mi=uf(e)}else t===27?(t=Mi,Zd(e.type)?(e=lf,lf=null,Mi=e):Mi=t):Mi=ji?cf(e.stateNode.nextSibling):null;return!0}function Bi(){Mi=ji=null,V=!1}function Vi(){var e=Ni;return e!==null&&(Yl===null?Yl=e:Yl.push.apply(Yl,e),Ni=null),e}function Hi(e){Ni===null?Ni=[e]:Ni.push(e)}var Ui=M(null),Wi=null,Gi=null;function Ki(e,t,n){N(Ui,t._currentValue),t._currentValue=n}function qi(e){e._currentValue=Ui.current,le(Ui)}function Ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Yi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ji(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ji(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function H(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;br(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===pe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Yi(t,e,n,r),t.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!br(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zi(e){Wi=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qi(e){return ea(Wi,e)}function $i(e,t){return Wi===null&&Zi(e),ea(e,t)}function ea(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gi===null){if(e===null)throw Error(i(308));Gi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gi=Gi.next=t;return n}var ta=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},na=t.unstable_scheduleCallback,ra=t.unstable_NormalPriority,ia={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function aa(){return{controller:new ta,data:new Map,refCount:0}}function oa(e){e.refCount--,e.refCount===0&&na(ra,function(){e.controller.abort()})}var sa=null,ca=0,la=0,ua=null;function da(e,t){if(sa===null){var n=sa=[];ca=0,la=ud(),ua={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ca++,t.then(fa,fa),t}function fa(){if(--ca===0&&sa!==null){ua!==null&&(ua.status=`fulfilled`);var e=sa;sa=null,la=0,ua=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function pa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ma=O.S;O.S=function(e,t){Ql=ke(),typeof t==`object`&&t&&typeof t.then==`function`&&da(e,t),ma!==null&&ma(e,t)};var ha=M(null);function ga(){var e=ha.current;return e===null?Fl.pooledCache:e}function _a(e,t){t===null?N(ha,ha.current):N(ha,t.pool)}function va(){var e=ga();return e===null?null:{parent:ia._currentValue,pool:e}}var ya=Error(i(460)),ba=Error(i(474)),xa=Error(i(542)),Sa={then:function(){}};function Ca(e){return e=e.status,e===`fulfilled`||e===`rejected`}function wa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($t,$t),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then($t,$t);else{if(e=Fl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ea=t,ya}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ea=e,ya):e}}var Ea=null;function U(){if(Ea===null)throw Error(i(459));var e=Ea;return Ea=null,e}function Da(e){if(e===ya||e===xa)throw Error(i(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),wa(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function W(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ma(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ci(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=fi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&Ta(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=ui(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=mi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=di(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=fi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ui(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case v:return t=mi(t,e.mode,n),t.return=e,t;case E:return t=Ta(t),f(e,t,n)}if(se(t)||ie(t))return t=di(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===C)return f(e,$i(e,t),n);W(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=Ta(n),p(e,t,n,r)}if(se(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===C)return p(e,t,$i(e,n),r);W(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=Ta(r),m(e,t,n,r,i)}if(se(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===C)return m(e,t,n,$i(t,r),i);W(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Ei(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Ei(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Ei(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Ei(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Ei(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Ei(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&Ta(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=di(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ui(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=mi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=Ta(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ie(o)){if(l=ie(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===C)return b(e,r,$i(e,o),c);W(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=fi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===ya||t===xa)throw t;var a=oi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Na=Ma(!0),Pa=Ma(!1),Fa=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ri(e),ni(e,null,n),t}return $r(e,r,t,n),ri(e)}function Ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,I(e,n)}}function Va(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ha=!1;function Ua(){if(Ha){var e=ua;if(e!==null)throw e}}function Wa(e,t,n,r){Ha=!1;var i=e.updateQueue;Fa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Q&f)===f:(r&f)===f){f!==0&&f===la&&(Ha=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Fa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Ul|=o,e.lanes=o,e.memoizedState=d}}function Ga(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ka(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ga(n[e],t)}var qa=M(null),Ja=M(0);function Ya(e,t){e=Vl,N(Ja,e),N(qa,t),Vl=e|t.baseLanes}function G(){N(Ja,Vl),N(qa,qa.current)}function Xa(){Vl=Ja.current,le(qa),le(Ja)}var Za=M(null),Qa=null;function $a(e){var t=e.alternate;N(io,io.current&1),N(Za,e),Qa===null&&(t===null||qa.current!==null||t.memoizedState!==null)&&(Qa=e)}function eo(e){N(io,io.current),N(Za,e),Qa===null&&(Qa=e)}function to(e){e.tag===22?(N(io,io.current),N(Za,e),Qa===null&&(Qa=e)):no(e)}function no(){N(io,io.current),N(Za,Za.current)}function ro(e){le(Za),Qa===e&&(Qa=null),le(io)}var io=M(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oo=0,K=null,q=null,so=null,co=!1,lo=!1,uo=!1,fo=0,po=0,mo=null,ho=0;function go(){throw Error(i(321))}function _o(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!br(e[n],t[n]))return!1;return!0}function vo(e,t,n,r,i,a){return oo=a,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Ns:Ps,uo=!1,a=n(r,i),uo=!1,lo&&(a=bo(t,n,r,i)),yo(e),a}function yo(e){O.H=Ms;var t=q!==null&&q.next!==null;if(oo=0,so=q=K=null,co=!1,po=0,mo=null,t)throw Error(i(300));e===null||Zs||(e=e.dependencies,e!==null&&Xi(e)&&(Zs=!0))}function bo(e,t,n,r){K=e;var a=0;do{if(lo&&(mo=null),po=0,lo=!1,25<=a)throw Error(i(301));if(a+=1,so=q=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Fs,o=t(n,r)}while(lo);return o}function xo(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Oo(t):t,e=e.useState()[0],(q===null?null:q.memoizedState)!==e&&(K.flags|=1024),t}function So(){var e=fo!==0;return fo=0,e}function Co(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function wo(e){if(co){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}co=!1}oo=0,so=q=K=null,lo=!1,po=fo=0,mo=null}function To(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return so===null?K.memoizedState=so=e:so=so.next=e,so}function Eo(){if(q===null){var e=K.alternate;e=e===null?null:e.memoizedState}else e=q.next;var t=so===null?K.memoizedState:so.next;if(t!==null)so=t,q=e;else{if(e===null)throw K.alternate===null?Error(i(467)):Error(i(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},so===null?K.memoizedState=so=e:so=so.next=e}return so}function Do(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oo(e){var t=po;return po+=1,mo===null&&(mo=[]),e=wa(mo,e,t),t=K,(so===null?t.memoizedState:so.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Ns:Ps),e}function ko(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Oo(e);if(e.$$typeof===C)return Qi(e)}throw Error(i(438,String(e)))}function Ao(e){var t=null,n=K.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=K.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Do(),K.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function jo(e,t){return typeof t==`function`?t(e):t}function Mo(e){return No(Eo(),q,e)}function No(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(oo&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===la&&(d=!0);else if((oo&p)===p){u=u.next,p===la&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,K.lanes|=p,Ul|=p;f=u.action,uo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,K.lanes|=f,Ul|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!br(o,e.memoizedState)&&(Zs=!0,d&&(n=ua,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Po(e){var t=Eo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);br(o,t.memoizedState)||(Zs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function J(e,t,n){var r=K,a=Eo(),o=V;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!br((q||a).memoizedState,n);if(s&&(a.memoizedState=n,Zs=!0),a=a.queue,is(Lo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||so!==null&&so.memoizedState.tag&1){if(r.flags|=2048,$o(9,{destroy:void 0},Io.bind(null,r,a,n,t),null),Fl===null)throw Error(i(349));o||oo&127||Fo(r,t,n)}return n}function Fo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t=Do(),K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Io(e,t,n,r){t.value=n,t.getSnapshot=r,Ro(t)&&zo(e)}function Lo(e,t,n){return n(function(){Ro(t)&&zo(e)})}function Ro(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!br(e,n)}catch{return!0}}function zo(e){var t=ti(e,2);t!==null&&pu(t,e,2)}function Bo(e){var t=To();if(typeof e==`function`){var n=e;if(e=n(),uo){ze(!0);try{n()}finally{ze(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:e},t}function Vo(e,t,n,r){return e.baseState=n,No(e,q,typeof r==`function`?r:jo)}function Ho(e,t,n,r,a){if(ks(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Uo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Uo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Wo(e,t,s)}catch(n){Ko(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Wo(e,t,a)}catch(n){Ko(e,t,n)}}function Wo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Go(e,t,n)},function(n){return Ko(e,t,n)}):Go(e,t,n)}function Go(e,t,n){t.status=`fulfilled`,t.value=n,qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Uo(e,n)))}function Ko(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,qo(t),t=t.next;while(t!==r)}e.action=null}function qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Jo(e,t){return t}function Yo(e,t){if(V){var n=Fl.formState;if(n!==null){a:{var r=K;if(V){if(Mi){b:{for(var i=Mi,a=Pi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Mi=cf(i.nextSibling),r=i.data===`F!`;break a}}Ii(r)}r=!1}r&&(t=n[0])}}return n=To(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},n.queue=r,n=Es.bind(null,K,r),r.dispatch=n,r=Bo(!1),a=Os.bind(null,K,!1,r.queue),r=To(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ho.bind(null,K,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Xo(e){return Zo(Eo(),q,e)}function Zo(e,t,n){if(t=No(e,t,Jo)[0],e=Mo(jo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Oo(t)}catch(e){throw e===ya?xa:e}else r=t;t=Eo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(K.flags|=2048,$o(9,{destroy:void 0},Y.bind(null,i,n),null)),[r,a,e]}function Y(e,t){e.action=t}function Qo(e){var t=Eo(),n=q;if(n!==null)return Zo(t,n,e);Eo(),t=t.memoizedState,n=Eo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function $o(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=K.updateQueue,t===null&&(t=Do(),K.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function es(){return Eo().memoizedState}function ts(e,t,n,r){var i=To();K.flags|=e,i.memoizedState=$o(1|t,{destroy:void 0},n,r===void 0?null:r)}function ns(e,t,n,r){var i=Eo();r=r===void 0?null:r;var a=i.memoizedState.inst;q!==null&&r!==null&&_o(r,q.memoizedState.deps)?i.memoizedState=$o(t,a,n,r):(K.flags|=e,i.memoizedState=$o(1|t,a,n,r))}function rs(e,t){ts(8390656,8,e,t)}function is(e,t){ns(2048,8,e,t)}function as(e){K.flags|=4;var t=K.updateQueue;if(t===null)t=Do(),K.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function os(e){var t=Eo().memoizedState;return as({ref:t,nextImpl:e}),function(){if(X&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ss(e,t){return ns(4,2,e,t)}function cs(e,t){return ns(4,4,e,t)}function ls(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function us(e,t,n){n=n==null?null:n.concat([e]),ns(4,4,ls.bind(null,t,e),n)}function ds(){}function fs(e,t){var n=Eo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&_o(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ps(e,t){var n=Eo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&_o(t,r[1]))return r[0];if(r=e(),uo){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r}function ms(e,t,n){return n===void 0||oo&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=fu(),K.lanes|=e,Ul|=e,n)}function hs(e,t,n,r){return br(n,t)?n:qa.current===null?!(oo&42)||oo&1073741824&&!(Q&261930)?(Zs=!0,e.memoizedState=n):(e=fu(),K.lanes|=e,Ul|=e,t):(e=ms(e,n,r),br(e,t)||(Zs=!0),e)}function gs(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Os(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ds(e,t,pa(c,r),du(e)):Ds(e,t,r,du(e))}catch(n){Ds(e,t,{then:function(){},status:`rejected`,reason:n},du())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function _s(){}function vs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ys(e).queue;gs(e,a,t,A,n===null?_s:function(){return bs(e),n(r)})}function ys(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:A,baseState:A,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:A},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bs(e){var t=ys(e);t.next===null&&(t=e.alternate.memoizedState),Ds(e,t.next.queue,{},du())}function xs(){return Qi(Qf)}function Ss(){return Eo().memoizedState}function Cs(){return Eo().memoizedState}function ws(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=du();e=Ra(n);var r=za(t,e,n);r!==null&&(pu(r,t,n),Ba(r,t,n)),t={cache:aa()},e.payload=t;return}t=t.return}}function Ts(e,t,n){var r=du();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ks(e)?As(t,n):(n=ei(e,t,n,r),n!==null&&(pu(n,e,r),js(n,t,r)))}function Es(e,t,n){Ds(e,t,n,du())}function Ds(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ks(e))As(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,br(s,o))return $r(e,t,i,0),Fl===null&&Qr(),!1}catch{}if(n=ei(e,t,i,r),n!==null)return pu(n,e,r),js(n,t,r),!0}return!1}function Os(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ks(e)){if(t)throw Error(i(479))}else t=ei(e,n,r,2),t!==null&&pu(t,e,2)}function ks(e){var t=e.alternate;return e===K||t!==null&&t===K}function As(e,t){lo=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function js(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,I(e,n)}}var Ms={readContext:Qi,use:ko,useCallback:go,useContext:go,useEffect:go,useImperativeHandle:go,useLayoutEffect:go,useInsertionEffect:go,useMemo:go,useReducer:go,useRef:go,useState:go,useDebugValue:go,useDeferredValue:go,useTransition:go,useSyncExternalStore:go,useId:go,useHostTransitionStatus:go,useFormState:go,useActionState:go,useOptimistic:go,useMemoCache:go,useCacheRefresh:go};Ms.useEffectEvent=go;var Ns={readContext:Qi,use:ko,useCallback:function(e,t){return To().memoizedState=[e,t===void 0?null:t],e},useContext:Qi,useEffect:rs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ts(4194308,4,ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){ts(4,2,e,t)},useMemo:function(e,t){var n=To();t=t===void 0?null:t;var r=e();if(uo){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=To();if(n!==void 0){var i=n(t);if(uo){ze(!0);try{n(t)}finally{ze(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ts.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=To();return e={current:e},t.memoizedState=e},useState:function(e){e=Bo(e);var t=e.queue,n=Es.bind(null,K,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ds,useDeferredValue:function(e,t){return ms(To(),e,t)},useTransition:function(){var e=Bo(!1);return e=gs.bind(null,K,e.queue,!0,!1),To().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=K,a=To();if(V){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Fl===null)throw Error(i(349));Q&127||Fo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,rs(Lo.bind(null,r,o,e),[e]),r.flags|=2048,$o(9,{destroy:void 0},Io.bind(null,r,o,n,t),null),n},useId:function(){var e=To(),t=Fl.identifierPrefix;if(V){var n=Ti,r=wi;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=fo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=ho++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:xs,useFormState:Yo,useActionState:Yo,useOptimistic:function(e){var t=To();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Os.bind(null,K,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ao,useCacheRefresh:function(){return To().memoizedState=ws.bind(null,K)},useEffectEvent:function(e){var t=To(),n={impl:e};return t.memoizedState=n,function(){if(X&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ps={readContext:Qi,use:ko,useCallback:fs,useContext:Qi,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Mo,useRef:es,useState:function(){return Mo(jo)},useDebugValue:ds,useDeferredValue:function(e,t){return hs(Eo(),q.memoizedState,e,t)},useTransition:function(){var e=Mo(jo)[0],t=Eo().memoizedState;return[typeof e==`boolean`?e:Oo(e),t]},useSyncExternalStore:J,useId:Ss,useHostTransitionStatus:xs,useFormState:Xo,useActionState:Xo,useOptimistic:function(e,t){return Vo(Eo(),q,e,t)},useMemoCache:Ao,useCacheRefresh:Cs};Ps.useEffectEvent=os;var Fs={readContext:Qi,use:ko,useCallback:fs,useContext:Qi,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Po,useRef:es,useState:function(){return Po(jo)},useDebugValue:ds,useDeferredValue:function(e,t){var n=Eo();return q===null?ms(n,e,t):hs(n,q.memoizedState,e,t)},useTransition:function(){var e=Po(jo)[0],t=Eo().memoizedState;return[typeof e==`boolean`?e:Oo(e),t]},useSyncExternalStore:J,useId:Ss,useHostTransitionStatus:xs,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){var n=Eo();return q===null?(n.baseState=e,[e,n.queue.dispatch]):Vo(n,q,e,t)},useMemoCache:Ao,useCacheRefresh:Cs};Fs.useEffectEvent=os;function Is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ls={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=du(),i=Ra(r);i.payload=t,n!=null&&(i.callback=n),t=za(e,i,r),t!==null&&(pu(t,e,r),Ba(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=du(),i=Ra(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=za(e,i,r),t!==null&&(pu(t,e,r),Ba(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=du(),r=Ra(n);r.tag=2,t!=null&&(r.callback=t),t=za(e,r,n),t!==null&&(pu(t,e,n),Ba(t,e,n))}};function Rs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!xr(n,r)||!xr(i,a):!0}function zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ls.enqueueReplaceState(t,t.state,null)}function Bs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Vs(e){Jr(e)}function Hs(e){console.error(e)}function Us(e){Jr(e)}function Ws(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Gs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ks(e,t,n){return n=Ra(n),n.tag=3,n.payload={element:null},n.callback=function(){Ws(e,t)},n}function qs(e){return e=Ra(e),e.tag=3,e}function Js(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Gs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Gs(t,n,r),typeof i!=`function`&&(tu===null?tu=new Set([this]):tu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Ys(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&H(t,n,a,!0),n=Za.current,n!==null){switch(n.tag){case 31:case 13:return Qa===null?Tu():n.alternate===null&&Hl===0&&(Hl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Sa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,a)),!1;case 22:return n.flags|=65536,r===Sa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,a)),!1}throw Error(i(435,n.tag))}return Wu(e,r,a),Tu(),!1}if(V)return t=Za.current,t===null?(r!==Fi&&(t=Error(i(423),{cause:r}),Hi(gi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=gi(r,n),a=Ks(e.stateNode,r,a),Va(e,a),Hl!==4&&(Hl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Fi&&(e=Error(i(422),{cause:r}),Hi(gi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=gi(o,n),Jl===null?Jl=[o]:Jl.push(o),Hl!==4&&(Hl=2),t===null)return!0;r=gi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ks(n.stateNode,r,e),Va(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(tu===null||!tu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=qs(a),Js(a,e,n,r),Va(n,a),!1}n=n.return}while(n!==null);return!1}var Xs=Error(i(461)),Zs=!1;function Qs(e,t,n,r){t.child=e===null?Pa(t,null,n,r):Na(t,e.child,n,r)}function $s(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Zi(t),r=vo(e,t,n,o,a,i),s=So(),e!==null&&!Zs?(Co(e,t,i),Cc(e,t,i)):(V&&s&&Oi(t),t.flags|=1,Qs(e,t,r,i),t.child)}function ec(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!si(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,tc(e,t,a,r,i)):(e=ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!wc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?xr:n,n(o,r)&&e.ref===t.ref)return Cc(e,t,i)}return t.flags|=1,e=ci(a,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(xr(a,r)&&e.ref===t.ref)if(Zs=!1,t.pendingProps=r=a,wc(e,i))e.flags&131072&&(Zs=!0);else return t.lanes=e.lanes,Cc(e,t,i)}return lc(e,t,n,r,i)}function nc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ic(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_a(t,a===null?null:a.cachePool),a===null?G():Ya(t,a),to(t);else return r=t.lanes=536870912,ic(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&_a(t,null),G(),no(t)):(_a(t,a.cachePool),Ya(t,a),no(t),t.memoizedState=null);return Qs(e,t,i,n),t.child}function rc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ic(e,t,n,r,i){var a=ga();return a=a===null?null:{parent:ia._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&_a(t,null),G(),to(t),e!==null&&H(e,t,r,!0),t.childLanes=i,null}function ac(e,t){return t=vc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function oc(e,t,n){return Na(t,e.child,null,n),e=ac(t,t.pendingProps),e.flags|=2,ro(t),t.memoizedState=null,e}function sc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=ac(t,r),t.lanes=536870912,rc(null,e);if(eo(t),(e=Mi)?(e=rf(e,Pi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ci===null?null:{id:wi,overflow:Ti},retryLane:536870912,hydrationErrors:null},n=pi(e),n.return=t,t.child=n,ji=t,Mi=null)):e=null,e===null)throw Ii(t);return t.lanes=536870912,null}return ac(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(eo(t),a)if(t.flags&256)t.flags&=-257,t=oc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(Zs||H(e,t,n,!1),a=(n&e.childLanes)!==0,Zs||a){if(r=Fl,r!==null&&(s=nt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ti(e,s),pu(r,e,s),Xs;Tu(),t=oc(e,t,n)}else e=o.treeContext,Mi=cf(s.nextSibling),ji=t,V=!0,Ni=null,Pi=!1,e!==null&&Ai(t,e),t=ac(t,r),t.flags|=4096;return t}return e=ci(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lc(e,t,n,r,i){return Zi(t),n=vo(e,t,n,r,void 0,i),r=So(),e!==null&&!Zs?(Co(e,t,i),Cc(e,t,i)):(V&&r&&Oi(t),t.flags|=1,Qs(e,t,n,i),t.child)}function uc(e,t,n,r,i,a){return Zi(t),t.updateQueue=null,n=bo(t,r,n,i),yo(e),r=So(),e!==null&&!Zs?(Co(e,t,a),Cc(e,t,a)):(V&&r&&Oi(t),t.flags|=1,Qs(e,t,n,a),t.child)}function dc(e,t,n,r,i){if(Zi(t),t.stateNode===null){var a=ii,o=n.contextType;typeof o==`object`&&o&&(a=Qi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ls,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ia(t),o=n.contextType,a.context=typeof o==`object`&&o?Qi(o):ii,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Is(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ls.enqueueReplaceState(a,a.state,null),Wa(t,r,a,i),Ua(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Bs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ii,typeof u==`object`&&u&&(o=Qi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&zs(t,a,r,o),Fa=!1;var f=t.memoizedState;a.state=f,Wa(t,r,a,i),Ua(),l=t.memoizedState,s||f!==l||Fa?(typeof d==`function`&&(Is(t,n,d,r),l=t.memoizedState),(c=Fa||Rs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,La(e,t),o=t.memoizedProps,u=Bs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ii,typeof l==`object`&&l&&(c=Qi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&zs(t,a,r,c),Fa=!1,f=t.memoizedState,a.state=f,Wa(t,r,a,i),Ua();var p=t.memoizedState;o!==d||f!==p||Fa||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof s==`function`&&(Is(t,n,s,r),p=t.memoizedState),(u=Fa||Rs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,cc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Na(t,e.child,null,i),t.child=Na(t,null,n,i)):Qs(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Cc(e,t,i),e}function fc(e,t,n,r){return Bi(),t.flags|=256,Qs(e,t,n,r),t.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mc(e){return{baseLanes:e,cachePool:va()}}function hc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Kl),e}function gc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(io.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(V){if(a?$a(t):no(t),(e=Mi)?(e=rf(e,Pi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ci===null?null:{id:wi,overflow:Ti},retryLane:536870912,hydrationErrors:null},n=pi(e),n.return=t,t.child=n,ji=t,Mi=null)):e=null,e===null)throw Ii(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(no(t),a=t.mode,c=vc({mode:`hidden`,children:c},a),r=di(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(null,r)):($a(t),_c(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?($a(t),t.flags&=-257,t=yc(e,t,n)):t.memoizedState===null?(no(t),c=r.fallback,a=t.mode,r=vc({mode:`visible`,children:r.children},a),c=di(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Na(t,e.child,null,n),r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,t=rc(null,r)):(no(t),t.child=e.child,t.flags|=128,t=null);else if($a(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Hi({value:r,source:null,stack:null}),t=yc(e,t,n)}else if(Zs||H(e,t,n,!1),s=(n&e.childLanes)!==0,Zs||s){if(s=Fl,s!==null&&(r=nt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ti(e,r),pu(s,e,r),Xs;af(c)||Tu(),t=yc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Mi=cf(c.nextSibling),ji=t,V=!0,Ni=null,Pi=!1,e!==null&&Ai(t,e),t=_c(t,r.children),t.flags|=4096);return t}return a?(no(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ci(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=di(c,a,n,null),c.flags|=2):c=ci(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,rc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=mc(n):(a=c.cachePool,a===null?a=va():(l=ia._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(e.child,r)):($a(t),n=e.child,e=n.sibling,n=ci(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function _c(e,t){return t=vc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function vc(e,t){return e=oi(22,e,null,t),e.lanes=0,e}function yc(e,t,n){return Na(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ji(e.return,t,n)}function xc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Sc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=io.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,N(io,o),Qs(e,t,r,n),r=V?bi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ao(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xc(t,!0,n,null,a,r);break;case`together`:xc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Cc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ul|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(H(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ci(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ci(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Xi(e))):!0}function Tc(e,t,n){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),Ki(t,ia,e.memoizedState.cache),Bi();break;case 27:case 5:ge(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:Ki(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,eo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?($a(t),e=Cc(e,t,n),e===null?null:e.sibling):gc(e,t,n):($a(t),t.flags|=128,null);$a(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(H(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Sc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),N(io,io.current),r)break;return null;case 22:return t.lanes=0,nc(e,t,n,t.pendingProps);case 24:Ki(t,ia,e.memoizedState.cache)}return Cc(e,t,n)}function Ec(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Zs=!0;else{if(!wc(e,n)&&!(t.flags&128))return Zs=!1,Tc(e,t,n);Zs=!!(e.flags&131072)}else Zs=!1,V&&t.flags&1048576&&Di(t,bi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e==`function`)si(e)?(r=Bs(e,r),t.tag=1,t=dc(null,t,e,r,n)):(t.tag=0,t=lc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=$s(null,t,e,r,n);break a}else if(a===te){t.tag=14,t=ec(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return lc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Bs(r,t.pendingProps),dc(e,t,r,a,n);case 3:a:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,La(e,t),Wa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ki(t,ia,r),r!==o.cache&&Yi(t,[ia],n,!0),Ua(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=fc(e,t,r,n);break a}else if(r!==a){a=gi(Error(i(424)),t),Hi(a),t=fc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Mi=cf(e.firstChild),ji=t,V=!0,Ni=null,Pi=!0,n=Pa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bi(),r===a){t=Cc(e,t,n);break a}Qs(e,t,r,n)}t=t.child}return t;case 26:return cc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(n=t.type,e=t.pendingProps,r=Bd(fe.current).createElement(n),r[st]=t,r[ct]=e,Pd(r,n,e),bt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ge(t),e===null&&V&&(r=t.stateNode=ff(t.type,t.pendingProps,fe.current),ji=t,Pi=!0,a=Mi,Zd(t.type)?(lf=a,Mi=cf(r.firstChild)):Mi=a),Qs(e,t,t.pendingProps.children,n),cc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((a=r=Mi)&&(r=tf(r,t.type,t.pendingProps,Pi),r===null?a=!1:(t.stateNode=r,ji=t,Mi=cf(r.firstChild),Pi=!1,a=!0)),a||Ii(t)),ge(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=vo(e,t,xo,null,null,n),Qf._currentValue=a),cc(e,t),Qs(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=Mi)&&(n=nf(n,t.pendingProps,Pi),n===null?e=!1:(t.stateNode=n,ji=t,Mi=null,e=!0)),e||Ii(t)),null;case 13:return gc(e,t,n);case 4:return me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Na(t,null,r,n):Qs(e,t,r,n),t.child;case 11:return $s(e,t,t.type,t.pendingProps,n);case 7:return Qs(e,t,t.pendingProps,n),t.child;case 8:return Qs(e,t,t.pendingProps.children,n),t.child;case 12:return Qs(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ki(t,t.type,r.value),Qs(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Zi(t),a=Qi(a),r=r(a),t.flags|=1,Qs(e,t,r,n),t.child;case 14:return ec(e,t,t.type,t.pendingProps,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 19:return Sc(e,t,n);case 31:return sc(e,t,n);case 22:return nc(e,t,n,t.pendingProps);case 24:return Zi(t),r=Qi(ia),e===null?(a=ga(),a===null&&(a=Fl,o=aa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ia(t),Ki(t,ia,a)):((e.lanes&n)!==0&&(La(e,t),Wa(t,null,null,n),Ua()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ki(t,ia,r),r!==a.cache&&Yi(t,[ia],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ki(t,ia,r))),Qs(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Dc(e){e.flags|=4}function Oc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Su())e.flags|=8192;else throw Ea=Sa,ba}else e.flags&=-16777217}function kc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Su())e.flags|=8192;else throw Ea=Sa,ba}function Ac(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ze(),e.lanes|=t,ql|=t)}function jc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Mc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nc(e,t,n){var r=t.pendingProps;switch(ki(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mc(t),null;case 1:return Mc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),qi(ia),he(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zi(t)?Dc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vi())),Mc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Dc(t),o===null?(Mc(t),Oc(t,a,null,r,n)):(Mc(t),kc(t,o))):o?o===e.memoizedState?(Mc(t),t.flags&=-16777217):(Dc(t),Mc(t),kc(t,o)):(e=e.memoizedProps,e!==r&&Dc(t),Mc(t),Oc(t,a,e,r,n)),null;case 27:if(_e(t),n=fe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Mc(t),null}e=ue.current,zi(t)?Li(t,e):(e=ff(a,r,n),t.stateNode=e,Dc(t))}return Mc(t),null;case 5:if(_e(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Mc(t),null}if(o=ue.current,zi(t))Li(t,o);else{var s=Bd(fe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[st]=t,o[ct]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Dc(t)}}return Mc(t),Oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=fe.current,zi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ji,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||Ii(t,!0)}else e=Bd(e).createTextNode(r),e[st]=t,t.stateNode=e}return Mc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=zi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[st]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),e=!1}else n=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ro(t),t):(ro(t),null);if(t.flags&128)throw Error(i(558))}return Mc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[st]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),a=!1}else a=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ro(t),t):(ro(t),null)}return ro(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ac(t,t.updateQueue),Mc(t),null);case 4:return he(),e===null&&xd(t.stateNode.containerInfo),Mc(t),null;case 10:return qi(t.type),Mc(t),null;case 19:if(le(io),r=t.memoizedState,r===null)return Mc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)jc(r,!1);else{if(Hl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ao(e),o!==null){for(t.flags|=128,jc(r,!1),e=o.updateQueue,t.updateQueue=e,Ac(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)li(n,e),n=n.sibling;return N(io,io.current&1|2),V&&Ei(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&ke()>$l&&(t.flags|=128,a=!0,jc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ao(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ac(t,e),jc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!V)return Mc(t),null}else 2*ke()-r.renderingStartTime>$l&&n!==536870912&&(t.flags|=128,a=!0,jc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Mc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ke(),e.sibling=null,n=io.current,N(io,a?n&1|2:n&1),V&&Ei(t,r.treeForkCount),e);case 22:case 23:return ro(t),Xa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Mc(t),t.subtreeFlags&6&&(t.flags|=8192)):Mc(t),n=t.updateQueue,n!==null&&Ac(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&le(ha),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qi(ia),Mc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Pc(e,t){switch(ki(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qi(ia),he(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _e(t),null;case 31:if(t.memoizedState!==null){if(ro(t),t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ro(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(io),null;case 4:return he(),null;case 10:return qi(t.type),null;case 22:case 23:return ro(t),Xa(),e!==null&&le(ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qi(ia),null;case 25:return null;default:return null}}function Fc(e,t){switch(ki(t),t.tag){case 3:qi(ia),he();break;case 26:case 27:case 5:_e(t);break;case 4:he();break;case 31:t.memoizedState!==null&&ro(t);break;case 13:ro(t);break;case 19:le(io);break;case 10:qi(t.type);break;case 22:case 23:ro(t),Xa(),e!==null&&le(ha);break;case 24:qi(ia)}}function Ic(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Uu(t,t.return,e)}}function Lc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Uu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Uu(t,t.return,e)}}function Rc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ka(t,n)}catch(t){Uu(e,e.return,t)}}}function zc(e,t,n){n.props=Bs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Uu(e,t,n)}}function Bc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Uu(e,t,n)}}function Vc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Uu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Uu(e,t,n)}else n.current=null}function Hc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Uu(e,e.return,t)}}function Uc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ct]=t}catch(t){Uu(e,e.return,t)}}function Wc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Gc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$t));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Jc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[st]=e,t[ct]=n}catch(t){Uu(e,e.return,t)}}var Yc=!1,Xc=!1,Zc=!1,Qc=typeof WeakSet==`function`?WeakSet:Set,$c=null;function el(e,t){if(e=e.containerInfo,Rd=sp,e=Tr(e),Er(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,$c=t;$c!==null;)if(t=$c,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,$c=e;else for(;$c!==null;){switch(t=$c,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Bs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Uu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,$c=e;break}$c=t.return}}function tl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:gl(e,n),r&4&&Ic(5,n);break;case 1:if(gl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Uu(n,n.return,e)}else{var i=Bs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Uu(n,n.return,e)}}r&64&&Rc(n),r&512&&Bc(n,n.return);break;case 3:if(gl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ka(e,t)}catch(e){Uu(n,n.return,e)}}break;case 27:t===null&&r&4&&Jc(n);case 26:case 5:gl(e,n),t===null&&r&4&&Hc(n),r&512&&Bc(n,n.return);break;case 12:gl(e,n);break;case 31:gl(e,n),r&4&&sl(e,n);break;case 13:gl(e,n),r&4&&cl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Yc,!r){t=t!==null&&t.memoizedState!==null||Xc,i=Yc;var a=Xc;Yc=r,(Xc=t)&&!a?vl(e,n,(n.subtreeFlags&8772)!=0):gl(e,n),Yc=i,Xc=a}break;case 30:break;default:gl(e,n)}}function nl(e){var t=e.alternate;t!==null&&(e.alternate=null,nl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ht(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rl=null,il=!1;function al(e,t,n){for(n=n.child;n!==null;)ol(e,t,n),n=n.sibling}function ol(e,t,n){if(Re&&typeof Re.onCommitFiberUnmount==`function`)try{Re.onCommitFiberUnmount(Le,n)}catch{}switch(n.tag){case 26:Xc||Vc(n,t),al(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xc||Vc(n,t);var r=rl,i=il;Zd(n.type)&&(rl=n.stateNode,il=!1),al(e,t,n),pf(n.stateNode),rl=r,il=i;break;case 5:Xc||Vc(n,t);case 6:if(r=rl,i=il,rl=null,al(e,t,n),rl=r,il=i,rl!==null)if(il)try{(rl.nodeType===9?rl.body:rl.nodeName===`HTML`?rl.ownerDocument.body:rl).removeChild(n.stateNode)}catch(e){Uu(n,t,e)}else try{rl.removeChild(n.stateNode)}catch(e){Uu(n,t,e)}break;case 18:rl!==null&&(il?(e=rl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(rl,n.stateNode));break;case 4:r=rl,i=il,rl=n.stateNode.containerInfo,il=!0,al(e,t,n),rl=r,il=i;break;case 0:case 11:case 14:case 15:Lc(2,n,t),Xc||Lc(4,n,t),al(e,t,n);break;case 1:Xc||(Vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&zc(n,t,r)),al(e,t,n);break;case 21:al(e,t,n);break;case 22:Xc=(r=Xc)||n.memoizedState!==null,al(e,t,n),Xc=r;break;default:al(e,t,n)}}function sl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Uu(t,t.return,e)}}}function cl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Uu(t,t.return,e)}}function ll(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qc),t;default:throw Error(i(435,e.tag))}}function ul(e,t){var n=ll(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ju.bind(null,e,t);t.then(r,r)}})}function dl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){rl=c.stateNode,il=!1;break a}break;case 5:rl=c.stateNode,il=!1;break a;case 3:case 4:rl=c.stateNode.containerInfo,il=!0;break a}c=c.return}if(rl===null)throw Error(i(160));ol(o,s,a),rl=null,il=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pl(t,e),t=t.sibling}var fl=null;function pl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dl(t,e),ml(e),r&4&&(Lc(3,e,e.return),Ic(3,e),Lc(5,e,e.return));break;case 1:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&64&&Yc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=fl;if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[mt]||o[st]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[st]=e,bt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[st]=e,bt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Uc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),n!==null&&r&4&&Uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),e.flags&32){a=e.stateNode;try{Gt(a,``)}catch(t){Uu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Uc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Zc=!0);break;case 6:if(dl(t,e),ml(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Uu(e,e.return,t)}}break;case 3:if(Bf=null,a=fl,fl=gf(t.containerInfo),dl(t,e),fl=a,ml(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Uu(e,e.return,t)}Zc&&(Zc=!1,hl(e));break;case 4:r=fl,fl=gf(e.stateNode.containerInfo),dl(t,e),ml(e),fl=r;break;case 12:dl(t,e),ml(e);break;case 31:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 13:dl(t,e),ml(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zl=ke()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Yc,d=Xc;if(Yc=u||a,Xc=d||l,dl(t,e),Xc=d,Yc=u,ml(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Yc||Xc||_l(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Uu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Uu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Uu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ul(e,n))));break;case 19:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 30:break;case 21:break;default:dl(t,e),ml(e)}}function ml(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Wc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;qc(e,Gc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Gt(o,``),n.flags&=-33),qc(e,Gc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Kc(e,Gc(e),s);break;default:throw Error(i(161))}}catch(t){Uu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function gl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tl(e,t.alternate,t),t=t.sibling}function _l(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Lc(4,t,t.return),_l(t);break;case 1:Vc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&zc(t,t.return,n),_l(t);break;case 27:pf(t.stateNode);case 26:case 5:Vc(t,t.return),_l(t);break;case 22:t.memoizedState===null&&_l(t);break;case 30:_l(t);break;default:_l(t)}e=e.sibling}}function vl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:vl(i,a,n),Ic(4,a);break;case 1:if(vl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Uu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ga(c[i],s)}catch(e){Uu(r,r.return,e)}}n&&o&64&&Rc(a),Bc(a,a.return);break;case 27:Jc(a);case 26:case 5:vl(i,a,n),n&&r===null&&o&4&&Hc(a),Bc(a,a.return);break;case 12:vl(i,a,n);break;case 31:vl(i,a,n),n&&o&4&&sl(i,a);break;case 13:vl(i,a,n),n&&o&4&&cl(i,a);break;case 22:a.memoizedState===null&&vl(i,a,n),Bc(a,a.return);break;case 30:break;default:vl(i,a,n)}t=t.sibling}}function yl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&oa(n))}function bl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oa(e))}function xl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sl(e,t,n,r),t=t.sibling}function Sl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:xl(e,t,n,r),i&2048&&Ic(9,t);break;case 1:xl(e,t,n,r);break;case 3:xl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oa(e)));break;case 12:if(i&2048){xl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Uu(t,t.return,e)}}else xl(e,t,n,r);break;case 31:xl(e,t,n,r);break;case 13:xl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?xl(e,t,n,r):(a._visibility|=2,Cl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?xl(e,t,n,r):wl(e,t),i&2048&&yl(o,t);break;case 24:xl(e,t,n,r),i&2048&&bl(t.alternate,t);break;default:xl(e,t,n,r)}}function Cl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Cl(a,o,s,c,i),Ic(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Cl(a,o,s,c,i)):u._visibility&2?Cl(a,o,s,c,i):wl(a,o),i&&l&2048&&yl(o.alternate,o);break;case 24:Cl(a,o,s,c,i),i&&l&2048&&bl(o.alternate,o);break;default:Cl(a,o,s,c,i)}t=t.sibling}}function wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:wl(n,r),i&2048&&yl(r.alternate,r);break;case 24:wl(n,r),i&2048&&bl(r.alternate,r);break;default:wl(n,r)}t=t.sibling}}var Tl=8192;function El(e,t,n){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)Dl(e,t,n),e=e.sibling}function Dl(e,t,n){switch(e.tag){case 26:El(e,t,n),e.flags&Tl&&e.memoizedState!==null&&Gf(n,fl,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,n);break;case 3:case 4:var r=fl;fl=gf(e.stateNode.containerInfo),El(e,t,n),fl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Tl,Tl=16777216,El(e,t,n),Tl=r):El(e,t,n));break;default:El(e,t,n)}}function Ol(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Al(e),e=e.sibling}function Al(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&Lc(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,jl(e)):kl(e);break;default:kl(e)}}function jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Lc(8,t,t.return),jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,jl(t));break;default:jl(t)}e=e.sibling}}function Ml(e,t){for(;$c!==null;){var n=$c;switch(n.tag){case 0:case 11:case 15:Lc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:oa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,$c=r;else a:for(n=e;$c!==null;){r=$c;var i=r.sibling,a=r.return;if(nl(r),r===n){$c=null;break a}if(i!==null){i.return=a,$c=i;break a}$c=a}}}var Nl={getCacheForType:function(e){var t=Qi(ia),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Qi(ia).controller.signal}},Pl=typeof WeakMap==`function`?WeakMap:Map,X=0,Fl=null,Z=null,Q=0,Il=0,Ll=null,Rl=!1,zl=!1,Bl=!1,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=null,Yl=null,Xl=!1,Zl=0,Ql=0,$l=1/0,eu=null,tu=null,nu=0,ru=null,iu=null,au=0,ou=0,su=null,cu=null,lu=0,uu=null;function du(){return X&2&&Q!==0?Q&-Q:O.T===null?it():ud()}function fu(){if(Kl===0)if(!(Q&536870912)||V){var e=Ge;Ge<<=1,!(Ge&3932160)&&(Ge=262144),Kl=e}else Kl=536870912;return e=Za.current,e!==null&&(e.flags|=32),Kl}function pu(e,t,n){(e===Fl&&(Il===2||Il===9)||e.cancelPendingCommit!==null)&&(bu(e,0),_u(e,Q,Kl,!1)),$e(e,n),(!(X&2)||e!==Fl)&&(e===Fl&&(!(X&2)&&(Wl|=n),Hl===4&&_u(e,Q,Kl,!1)),nd(e))}function mu(e,t,n){if(X&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ye(e,t),a=r?Ou(e,t):Eu(e,t,!0),o=r;do{if(a===0){zl&&!r&&_u(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!gu(n)){a=Eu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Jl;var l=c.current.memoizedState.isDehydrated;if(l&&(bu(c,s).flags|=256),s=Eu(c,s,!1),s!==2){if(Bl&&!l){c.errorRecoveryDisabledLanes|=o,Wl|=o,a=4;break a}o=Yl,Yl=a,o!==null&&(Yl===null?Yl=o:Yl.push.apply(Yl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){bu(e,0),_u(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:_u(r,t,Kl,!Rl);break a;case 2:Yl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Zl+300-ke(),10<a)){if(_u(r,t,Kl,!Rl),Je(r,0,!0)!==0)break a;au=t,r.timeoutHandle=Kd(hu.bind(null,r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,`Throttled`,-0,0),a);break a}hu(r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,null,-0,0)}}break}while(1);nd(e)}function hu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Dl(t,a,d);var m=(a&62914560)===a?Zl-ke():(a&4194048)===a?Ql-ke():0;if(m=qf(d,m),m!==null){au=a,e.cancelPendingCommit=m(Fu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),_u(e,a,o,!l);return}}Fu(e,t,a,n,r,i,o,s,c)}function gu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!br(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _u(e,t,n,r){t&=~Gl,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Be(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&tt(e,n,t)}function vu(){return X&6?!0:(rd(0,!1),!1)}function yu(){if(Z!==null){if(Il===0)var e=Z.return;else e=Z,Gi=Wi=null,wo(e),Oa=null,ka=0,e=Z;for(;e!==null;)Fc(e.alternate,e),e=e.return;Z=null}}function bu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),au=0,yu(),Fl=e,Z=n=ci(e.current,null),Q=t,Il=0,Ll=null,Rl=!1,zl=Ye(e,t),Bl=!1,ql=Kl=Gl=Wl=Ul=Hl=0,Yl=Jl=null,Xl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Be(r),a=1<<i;t|=e[i],r&=~a}return Vl=t,Qr(),n}function xu(e,t){K=null,O.H=Ms,t===ya||t===xa?(t=U(),Il=3):t===ba?(t=U(),Il=4):Il=t===Xs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ll=t,Z===null&&(Hl=1,Ws(e,gi(t,e.current)))}function Su(){var e=Za.current;return e===null?!0:(Q&4194048)===Q?Qa===null:(Q&62914560)===Q||Q&536870912?e===Qa:!1}function Cu(){var e=O.H;return O.H=Ms,e===null?Ms:e}function wu(){var e=O.A;return O.A=Nl,e}function Tu(){Hl=4,Rl||(Q&4194048)!==Q&&Za.current!==null||(zl=!0),!(Ul&134217727)&&!(Wl&134217727)||Fl===null||_u(Fl,Q,Kl,!1)}function Eu(e,t,n){var r=X;X|=2;var i=Cu(),a=wu();(Fl!==e||Q!==t)&&(eu=null,bu(e,t)),t=!1;var o=Hl;a:do try{if(Il!==0&&Z!==null){var s=Z,c=Ll;switch(Il){case 8:yu(),o=6;break a;case 3:case 2:case 9:case 6:Za.current===null&&(t=!0);var l=Il;if(Il=0,Ll=null,Mu(e,s,c,l),n&&zl){o=0;break a}break;default:l=Il,Il=0,Ll=null,Mu(e,s,c,l)}}Du(),o=Hl;break}catch(t){xu(e,t)}while(1);return t&&e.shellSuspendCounter++,Gi=Wi=null,X=r,O.H=i,O.A=a,Z===null&&(Fl=null,Q=0,Qr()),o}function Du(){for(;Z!==null;)Au(Z)}function Ou(e,t){var n=X;X|=2;var r=Cu(),a=wu();Fl!==e||Q!==t?(eu=null,$l=ke()+500,bu(e,t)):zl=Ye(e,t);a:do try{if(Il!==0&&Z!==null){t=Z;var o=Ll;b:switch(Il){case 1:Il=0,Ll=null,Mu(e,t,o,1);break;case 2:case 9:if(Ca(o)){Il=0,Ll=null,ju(t);break}t=function(){Il!==2&&Il!==9||Fl!==e||(Il=7),nd(e)},o.then(t,t);break a;case 3:Il=7;break a;case 4:Il=5;break a;case 7:Ca(o)?(Il=0,Ll=null,ju(t)):(Il=0,Ll=null,Mu(e,t,o,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var c=Z;if(s?Wf(s):c.stateNode.complete){Il=0,Ll=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Nu(u))}break b}}Il=0,Ll=null,Mu(e,t,o,5);break;case 6:Il=0,Ll=null,Mu(e,t,o,6);break;case 8:yu(),Hl=6;break a;default:throw Error(i(462))}}ku();break}catch(t){xu(e,t)}while(1);return Gi=Wi=null,O.H=r,O.A=a,X=n,Z===null?(Fl=null,Q=0,Qr(),Hl):0}function ku(){for(;Z!==null&&!P();)Au(Z)}function Au(e){var t=Ec(e.alternate,e,Vl);e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=uc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=uc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:wo(t);default:Fc(n,t),t=Z=li(t,Vl),t=Ec(n,t,Vl)}e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function Mu(e,t,n,r){Gi=Wi=null,wo(t),Oa=null,ka=0;var i=t.return;try{if(Ys(e,i,t,n,Q)){Hl=1,Ws(e,gi(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;Hl=1,Ws(e,gi(n,e.current)),Z=null;return}t.flags&32768?(V||r===1?e=!0:zl||Q&536870912?e=!1:(Rl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Za.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pu(t,e)):Nu(t)}function Nu(e){var t=e;do{if(t.flags&32768){Pu(t,Rl);return}e=t.return;var n=Nc(t.alternate,t,Vl);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);Hl===0&&(Hl=5)}function Pu(e,t){do{var n=Pc(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);Hl=6,Z=null}function Fu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Bu();while(nu!==0);if(X&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Zr,et(e,n,o,s,c,l),e===Fl&&(Z=Fl=null,Q=0),iu=t,ru=e,au=n,ou=o,su=a,cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Yu(Ne,function(){return Vu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=X,X|=4;try{el(e,t,n)}finally{X=s,k.p=a,O.T=r}}nu=1,Iu(),Lu(),Ru()}}function Iu(){if(nu===1){nu=0;var e=ru,t=iu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=X;X|=4;try{pl(t,e);var a=zd,o=Tr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&wr(s.ownerDocument.documentElement,s)){if(c!==null&&Er(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Cr(s,h),v=Cr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{X=i,k.p=r,O.T=n}}e.current=t,nu=2}}function Lu(){if(nu===2){nu=0;var e=ru,t=iu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=X;X|=4;try{tl(e,t.alternate,t)}finally{X=i,k.p=r,O.T=n}}nu=3}}function Ru(){if(nu===4||nu===3){nu=0,Oe();var e=ru,t=iu,n=au,r=cu;t.subtreeFlags&10256||t.flags&10256?nu=5:(nu=0,iu=ru=null,zu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(tu=null),L(n),t=t.stateNode,Re&&typeof Re.onCommitFiberRoot==`function`)try{Re.onCommitFiberRoot(Le,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}au&3&&Bu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===uu?lu++:(lu=0,uu=e):lu=0,rd(0,!1)}}function zu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,oa(t)))}function Bu(){return Iu(),Lu(),Ru(),Vu()}function Vu(){if(nu!==5)return!1;var e=ru,t=ou;ou=0;var n=L(au),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=su,su=null;var o=ru,s=au;if(nu=0,iu=ru=null,au=0,X&6)throw Error(i(331));var c=X;if(X|=4,Al(o.current),Sl(o,o.current,s,n),X=c,rd(0,!1),Re&&typeof Re.onPostCommitFiberRoot==`function`)try{Re.onPostCommitFiberRoot(Le,o)}catch{}return!0}finally{k.p=a,O.T=r,zu(e,t)}}function Hu(e,t,n){t=gi(n,t),t=Ks(e.stateNode,t,2),e=za(e,t,2),e!==null&&($e(e,2),nd(e))}function Uu(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(tu===null||!tu.has(r))){e=gi(n,e),n=qs(2),r=za(t,n,2),r!==null&&(Js(n,r,t,e),$e(r,2),nd(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Bl=!0,i.add(n),e=Gu.bind(null,e,t,n),t.then(e,e))}function Gu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fl===e&&(Q&n)===n&&(Hl===4||Hl===3&&(Q&62914560)===Q&&300>ke()-Zl?!(X&2)&&bu(e,0):Gl|=n,ql===Q&&(ql=0)),nd(e)}function Ku(e,t){t===0&&(t=Ze()),e=ti(e,t),e!==null&&($e(e,t),nd(e))}function qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function Ju(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ku(e,n)}function Yu(e,t){return Ee(e,t)}var Xu=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Xu=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Xu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Be(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=Q,a=Je(r,r===Fl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ye(r,a)||(n=!0,cd(r,a));r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Gd()&&(e=td);for(var t=ke(),n=null,r=Xu;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Xu=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}nu!==0&&nu!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Be(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Xe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Fl,n=Q,n=Je(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Il===2||Il===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&De(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ye(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&De(r),L(n)){case 2:case 8:n=Me;break;case 32:n=Ne;break;case 268435456:n=F;break;default:n=Ne}return r=sd.bind(null,e),n=Ee(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&De(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(nu!==0&&nu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bu()&&e.callbackNode!==n)return null;var r=Q;return r=Je(e,e===Fl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(mu(e,r,t),od(e,ke()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Bu())return null;mu(e,t,!0)}function ld(){Yd(function(){X&6?Ee(je,id):ad()})}function ud(){if(td===0){var e=la;e===0&&(e=We,We<<=1,!(We&261888)&&(We=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Qt(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[ct]||null).action),o=r.submitter;o&&(t=(t=o[ct]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new B(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);vs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),vs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<Kr.length;md++){var hd=Kr[md];qr(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}qr(Rr,`onAnimationEnd`),qr(zr,`onAnimationIteration`),qr(Br,`onAnimationStart`),qr(`dblclick`,`onDoubleClick`),qr(`focusin`,`onFocus`),qr(`focusout`,`onBlur`),qr(Vr,`onTransitionRun`),qr(Hr,`onTransitionStart`),qr(Ur,`onTransitionCancel`),qr(Wr,`onTransitionEnd`),wt(`onMouseEnter`,[`mouseout`,`mouseover`]),wt(`onMouseLeave`,[`mouseout`,`mouseover`]),wt(`onPointerEnter`,[`pointerout`,`pointerover`]),wt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ct(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ct(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ct(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ct(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Jr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Jr(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[ut];n===void 0&&(n=t[ut]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,xt.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!ln||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=gt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}on(function(){var r=a,i=tn(n),s=[];a:{var c=Gr.get(e);if(c!==void 0){var l=B,u=e;switch(e){case`keypress`:if(hn(n)===0)break a;case`keydown`:case`keyup`:l=Ln;break;case`focusin`:u=`focus`,l=On;break;case`focusout`:u=`blur`,l=On;break;case`beforeblur`:case`afterblur`:l=On;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=En;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Dn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=zn;break;case Rr:case zr:case Br:l=kn;break;case Wr:l=Bn;break;case`scroll`:case`scrollend`:l=xn;break;case`wheel`:l=Vn;break;case`copy`:case`cut`:case`paste`:l=An;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Rn;break;case`toggle`:case`beforetoggle`:l=Hn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=sn(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(gt(u)||u[lt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?gt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=En,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Rn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:vt(l),h=u==null?c:vt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,gt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?vt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=cr;else if(nr(c))if(lr)v=vr;else{v=gr;var y=hr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Yt(r.elementType)&&(v=cr):v=_r;if(v&&=v(e,r)){rr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Vt(c,`number`,c.value)}switch(y=r?vt(r):window,e){case`focusin`:(nr(y)||y.contentEditable===`true`)&&(Or=y,kr=r,Ar=null);break;case`focusout`:Ar=kr=Or=null;break;case`mousedown`:jr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:jr=!1,Mr(s,n,i);break;case`selectionchange`:if(Dr)break;case`keydown`:case`keyup`:Mr(s,n,i)}var b;if(Wn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Qn?Xn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(qn&&n.locale!==`ko`&&(Qn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Qn&&(b=mn()):(dn=i,fn=`value`in dn?dn.value:dn.textContent,Qn=!0)),y=Td(r,x),0<y.length&&(x=new jn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Zn(n),b!==null&&(x.data=b)))),(b=Kn?$n(e,n):er(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new jn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),pd(s,e,r,n,i)}vd(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=sn(e,n),i!=null&&r.unshift(wd(e,i,a)),i=sn(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=sn(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=sn(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Gt(e,``+r);break;case`className`:At(e,`class`,r);break;case`tabIndex`:At(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:At(e,n,r);break;case`style`:Jt(e,r,o);break;case`data`:if(t!==`object`){At(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),kt(e,`popover`,r);break;case`xlinkActuate`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:kt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Xt.get(n)||n,kt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Jt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Gt(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!St.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ct]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):kt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}Bt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ht(e,!!r,n,!0):Ht(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}Wt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)$(gd[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(Yt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}zt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ht(e,!!n,n?[]:``,!1):Ht(e,!!n,t,!0)):Ht(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}Ut(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(Yt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[mt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),ht(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[mt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ht(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=vu();return e||t}function yf(e){var t=_t(e);t!==null&&t.tag===5&&t.type===`form`?bs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Rt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Rt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Rt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Rt(n.imageSizes)+`"]`)):i+=`[href="`+Rt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Rt(r)+`"][href="`+Rt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),bt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=yt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);bt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=yt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),bt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=yt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),bt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=fe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=yt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=yt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=yt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Rt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),bt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Rt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Rt(n.href)+`"]`);if(r)return t.instance=r,bt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),bt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,bt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),bt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,bt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),bt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[mt]||a[st]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,bt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),bt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:A,_currentValue2:A,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=oi(3,null,null,t),e.current=a,a.stateNode=e,t=aa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ia(a),e}function tp(e){return e?(e=ii,e):ii}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ra(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=za(e,r,t),n!==null&&(pu(n,e,t),Ba(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ti(e,67108864);t!==null&&pu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=du();t=rt(t);var n=ti(e,t);n!==null&&pu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=_t(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Be(o);s.entanglements[1]|=c,o&=~c}nd(a),!(X&6)&&($l=ke()+500,rd(0,!1))}}break;case 31:case 13:s=ti(a,2),s!==null&&pu(s,a,2),vu(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=tn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=gt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ae()){case je:return 2;case Me:return 8;case Ne:case Pe:return 32;case F:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=_t(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=gt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null}else return t=_t(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=_t(n);a!==null&&(e.splice(t,3),t-=3,vs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ct]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ct]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,du(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),vu(),t[lt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=it();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Le=zp.inject(Rp),Re=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Vs,s=Hs,c=Us;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[lt]=t.current,xd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`{\r
  "name": "Default",\r
  "presetId": "shimmer-orb",\r
  "displayMode": "live",\r
  "controls": {\r
    "bloomStrength": 0.32,\r
    "bloomThreshold": 1.55,\r
    "bloomRadius": 2.15,\r
    "colorSaturation": 1.16,\r
    "colorContrast": 1.13,\r
    "chromaticAberration": 0.14945051940405926,\r
    "vignetteStrength": 0.64,\r
    "vignetteSoftness": 0.5,\r
    "streakStrength": 0.18,\r
    "streakLength": 0.31,\r
    "streakVertical": 0.45,\r
    "flareHeight": 0,\r
    "flareCutoff": 1,\r
    "ribbonFraction": 0,\r
    "exposure": 1.35,\r
    "fov": 94.70866141732283,\r
    "aperture": 0.5653028338961303,\r
    "focusDistance": 0.54,\r
    "dofBlur": 1,\r
    "dofEnabled": false,\r
    "dofDebug": false,\r
    "sceneBrightness": 2.6,\r
    "rayResolution": 1560,\r
    "particleSizePx": 2.071428376126385,\r
    "particleOpacity": 0.02,\r
    "particleBrightness": 4.342904549675189,\r
    "particleColorMode": "velocity",\r
    "particleVelocityStretch": true,\r
    "particleStretch": 0.7,\r
    "particleStretchMin": 0,\r
    "particleStretchSpeed": 0.004,\r
    "particleSpeedCutoff": 0,\r
    "particleSlowCutoff": 0,\r
    "particleGlowCore": 1,\r
    "particleHotCore": 0.01,\r
    "particleBlendMode": "additive",\r
    "particleDensityCutoff": 0,\r
    "particleDensityRadius": 0,\r
    "particleDensityNormalize": 0,\r
    "particleDensitySoftness": 0.44,\r
    "particleSupportMask": 1,\r
    "particleSupportRadius": 0.35,\r
    "particleSupportNeighbors": 24,\r
    "particleSupportFlow": 0.18,\r
    "fastParticleRender": true,\r
    "fastNoBloomPost": true,\r
    "particleTint": "#00ff88",\r
    "renderLayer": "particles",\r
    "cameraYaw": 0.4415181210932708,\r
    "cameraPitch": 0.28,\r
    "cameraDistance": 1.647244094488189,\r
    "cameraPanX": -0.16685526196151437,\r
    "cameraPanY": 0.03172750722982695,\r
    "variationMaster": 1,\r
    "variationDrift": 0.8,\r
    "variationNoiseMix": 0.76,\r
    "variationFreq": 11.25,\r
    "variationOctaves": 4,\r
    "variationGain": 0.75,\r
    "variationLacunarity": 2.7,\r
    "variationSizeAmount": 0.83,\r
    "variationSizeCurve": 5.931873235199999,\r
    "variationSizeMin": 1.27,\r
    "variationSizeMax": 3,\r
    "variationBrightAmount": 0.88,\r
    "variationBrightCurve": 2,\r
    "variationBrightMin": 0.75,\r
    "variationBrightMax": 2.7,\r
    "variationOpacityAmount": 1,\r
    "variationOpacityCurve": 0.3,\r
    "variationOpacityMin": 0.64,\r
    "variationOpacityMax": 1.28,\r
    "variationColorAmount": 0,\r
    "variationColorCurve": 6,\r
    "variationColorMin": -0.08,\r
    "variationColorMax": 0.5\r
  },\r
  "liveConfig": {\r
    "seed": 2771361799,\r
    "simulationSpeed": 1,\r
    "width": 96,\r
    "height": 96,\r
    "depth": 96,\r
    "particleCount": 3399680,\r
    "dt": 1,\r
    "sensorGain": 0.7795275590551181,\r
    "sensorAngle": -0.8,\r
    "sensorDistance": -3,\r
    "mutationScale": 0.38515748031496067,\r
    "globalForceMult": 1.3016535433070866,\r
    "drag": 0.24835155821217786,\r
    "strafePower": 0.3280335001135245,\r
    "axialForce": 0.3700787401574803,\r
    "lateralForce": 0.32283464566929143,\r
    "hazardRate": 0.006782057737000286,\r
    "trailPersistence": 0.999,\r
    "trailDiffusion": 1,\r
    "depositRadius": 0.014852362204724408,\r
    "depositTapRadius": 1,\r
    "depositMass": 2,\r
    "sigma": 0.005049803149606299,\r
    "pulseDepth": 0.15,\r
    "pulseRate": 3.71,\r
    "cohorts": 25,\r
    "ruleSeed": 0.4155617116484791,\r
    "hueSensitivity": -0.84,\r
    "colorByCohort": true,\r
    "symmetryAxes": 2,\r
    "absoluteOrientation": 3,\r
    "orientationMix": 0.47244094488188976,\r
    "initialConditions": 5,\r
    "boundaryMode": 5,\r
    "domainShape": 0,\r
    "rule": [\r
      0.2723119259,\r
      0.2353467047,\r
      -0.3603444695,\r
      -0.09512524307,\r
      0.6235610247,\r
      3.013402939,\r
      0.02889615297,\r
      0.6329693794,\r
      1.528497815,\r
      -1.931068063,\r
      -0.8994591236,\r
      -2.652257919,\r
      -0.7968136072,\r
      -0.4519242346,\r
      -1.252381325,\r
      0.9024071097,\r
      0.6202709079,\r
      -3.089233398,\r
      2.700178146,\r
      1.030089855,\r
      0.2612487674,\r
      0.7132430077,\r
      -0.5218821764,\r
      2.613840342,\r
      1.409879804,\r
      2.794755459,\r
      -2.923718929,\r
      -1.810302138,\r
      -0.2040163279,\r
      -0.01136101782,\r
      1.589127541,\r
      0.389028132,\r
      -0.3837513328,\r
      -1.525727987,\r
      -1.321027994,\r
      -1.264946699,\r
      1.761325479,\r
      1.837681055,\r
      -0.4041278362,\r
      0.1539973617,\r
      0.08247791231,\r
      0.6491791606,\r
      0.3635686338,\r
      -0.3440827131,\r
      -1.007892013,\r
      1.137264013,\r
      -0.3193916082,\r
      -2.485742092,\r
      0.334392488,\r
      0.7741389275,\r
      -1.851560354,\r
      0.2410325259,\r
      0.4511550665,\r
      0.6353343725,\r
      -0.4594263434,\r
      -1.390197515,\r
      0.6367928386,\r
      0.1399131566,\r
      1.607939243,\r
      1.305648565,\r
      -0.5525392294,\r
      -2.501020193,\r
      1.342517853,\r
      1.339195728,\r
      -0.3298691511,\r
      -0.1836149991,\r
      0.0783386901,\r
      0.3052905798,\r
      0.4855825305,\r
      -0.991615355,\r
      -2.480074883,\r
      1.52519834,\r
      -0.2139547765,\r
      0.07011644542,\r
      0.3962416351,\r
      0.3858237863,\r
      -1.673520684,\r
      2.782539606,\r
      0.1734578609,\r
      2.216310978\r
    ],\r
    "recycleCutoff": 0,\r
    "recycleEnabled": false\r
  },\r
  "ui": {\r
    "playing": true,\r
    "overlay": false,\r
    "viewLocked": false,\r
    "demoMode": false,\r
    "frameCap": 60,\r
    "cameraOrbit": {\r
      "enabled": true,\r
      "speed": 0.0762992125984252\r
    },\r
    "timeline": {\r
      "enabled": false,\r
      "state": {\r
        "currentFrame": 3599,\r
        "playing": true,\r
        "loopIn": 0,\r
        "loopOut": 3599,\r
        "playbackSpeed": 1\r
      }\r
    },\r
    "trackingControls": {\r
      "follow": false,\r
      "look": false,\r
      "followSpeed": 3,\r
      "followSmoothing": 1,\r
      "lookSpeed": 4,\r
      "lookSmoothing": 1,\r
      "followDistance": 3.15,\r
      "followHeight": 0,\r
      "cohesion": 0.5\r
    }\r
  },\r
  "audio": {\r
    "panel": {\r
      "enabled": true,\r
      "buckets": {\r
        "low": {\r
          "gain": 0.75,\r
          "exponent": 8,\r
          "attackMs": 2,\r
          "decayMs": 75\r
        },\r
        "mid": {\r
          "gain": 0.75,\r
          "exponent": 5,\r
          "attackMs": 11,\r
          "decayMs": 37\r
        },\r
        "high": {\r
          "gain": 1,\r
          "exponent": 1,\r
          "attackMs": 1,\r
          "decayMs": 1\r
        }\r
      }\r
    },\r
    "sliders": {\r
      "p-bright": {\r
        "min": 0,\r
        "max": 6.35,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "sim-speed-slider": {\r
        "min": 0.1,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "trail-amount-slider": {\r
        "min": 0.05,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "particle-size-slider": {\r
        "min": 1.1,\r
        "max": 2.4,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "trail-radius-slider": {\r
        "min": 0.0015,\r
        "max": 0.1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "mutation": {\r
        "min": 0,\r
        "max": 0.2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "fov-slider": {\r
        "min": 20,\r
        "max": 188,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "orbit-speed-slider": {\r
        "min": -1.5,\r
        "max": 1.5,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "lateral": {\r
        "min": -1,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "mix": {\r
        "min": 0,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "axial": {\r
        "min": -1,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "particle-color-mode-slider": {\r
        "min": 0,\r
        "max": 6,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "initial-conditions-slider": {\r
        "min": 0,\r
        "max": 3,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "boundary-mode-slider": {\r
        "min": 0,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "absolute-orientation-slider": {\r
        "min": 0,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "force": {\r
        "min": 0,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "pitch": {\r
        "min": -1.32,\r
        "max": 1.32,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "drag": {\r
        "min": -0.2,\r
        "max": 0.4,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "sensor": {\r
        "min": 0,\r
        "max": 10,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "angle": {\r
        "min": -1,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "distance": {\r
        "min": 0,\r
        "max": 3,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "camera-zoom-slider": {\r
        "min": 0,\r
        "max": 25,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "trail-diffusion-slider": {\r
        "min": 0,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "chromatic-aberration-slider": {\r
        "min": 0,\r
        "max": 0.2,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      }\r
    }\r
  },\r
  "version": 2\r
}\r
`,b=`{\r
  "name": "Electric Current",\r
  "presetId": "shimmer-orb",\r
  "displayMode": "live",\r
  "controls": {\r
    "bloomStrength": 0.32,\r
    "bloomThreshold": 1.55,\r
    "bloomRadius": 2.15,\r
    "colorSaturation": 1.16,\r
    "colorContrast": 1.13,\r
    "chromaticAberration": 0.07974748937990173,\r
    "vignetteStrength": 0.64,\r
    "vignetteSoftness": 0.5,\r
    "streakStrength": 0.18,\r
    "streakLength": 0.31,\r
    "streakVertical": 0.45,\r
    "flareHeight": 0,\r
    "flareCutoff": 1,\r
    "ribbonFraction": 0,\r
    "exposure": 1.35,\r
    "fov": 100,\r
    "aperture": 0.5653028338961303,\r
    "focusDistance": 0.54,\r
    "dofBlur": 1,\r
    "dofEnabled": false,\r
    "dofDebug": false,\r
    "sceneBrightness": 2.6,\r
    "rayResolution": 1560,\r
    "particleSizePx": 1.618358680969361,\r
    "particleOpacity": 0.02,\r
    "particleBrightness": 4.342904549675189,\r
    "particleColorMode": "velocity",\r
    "particleVelocityStretch": true,\r
    "particleStretch": 0.7,\r
    "particleStretchMin": 0,\r
    "particleStretchSpeed": 0.004,\r
    "particleSpeedCutoff": 0,\r
    "particleSlowCutoff": 0,\r
    "particleGlowCore": 1,\r
    "particleHotCore": 0.01,\r
    "particleBlendMode": "additive",\r
    "particleDensityCutoff": 0,\r
    "particleDensityRadius": 0,\r
    "particleDensityNormalize": 0,\r
    "particleDensitySoftness": 0.44,\r
    "particleSupportMask": 1,\r
    "particleSupportRadius": 0.35,\r
    "particleSupportNeighbors": 24,\r
    "particleSupportFlow": 0.18,\r
    "fastParticleRender": true,\r
    "fastNoBloomPost": true,\r
    "particleTint": "#00ff88",\r
    "renderLayer": "particles",\r
    "cameraYaw": -0.004881878906690673,\r
    "cameraPitch": 0.08680000000000007,\r
    "cameraDistance": 2,\r
    "cameraPanX": 0.005683681729576841,\r
    "cameraPanY": 0.03787245004029527,\r
    "variationMaster": 1,\r
    "variationDrift": 0.8,\r
    "variationNoiseMix": 0.76,\r
    "variationFreq": 11.25,\r
    "variationOctaves": 4,\r
    "variationGain": 0.75,\r
    "variationLacunarity": 2.7,\r
    "variationSizeAmount": 0.83,\r
    "variationSizeCurve": 5.931873235199999,\r
    "variationSizeMin": 1.27,\r
    "variationSizeMax": 3,\r
    "variationBrightAmount": 0.88,\r
    "variationBrightCurve": 2,\r
    "variationBrightMin": 0.75,\r
    "variationBrightMax": 2.7,\r
    "variationOpacityAmount": 1,\r
    "variationOpacityCurve": 0.3,\r
    "variationOpacityMin": 0.64,\r
    "variationOpacityMax": 1.28,\r
    "variationColorAmount": 0,\r
    "variationColorCurve": 6,\r
    "variationColorMin": -0.08,\r
    "variationColorMax": 0.5\r
  },\r
  "liveConfig": {\r
    "seed": 2771361799,\r
    "simulationSpeed": 1,\r
    "width": 96,\r
    "height": 96,\r
    "depth": 96,\r
    "particleCount": 3399680,\r
    "dt": 1,\r
    "sensorGain": 0.7795275590551181,\r
    "sensorAngle": -0.8,\r
    "sensorDistance": -3,\r
    "mutationScale": 0.38515748031496067,\r
    "globalForceMult": 1.3016535433070866,\r
    "drag": 0.03924246813970517,\r
    "strafePower": 0.3280335001135245,\r
    "axialForce": 0.3700787401574803,\r
    "lateralForce": 0.32283464566929143,\r
    "hazardRate": 0.006782057737000286,\r
    "trailPersistence": 0.999,\r
    "trailDiffusion": 1,\r
    "depositRadius": 0.014852362204724408,\r
    "depositTapRadius": 1,\r
    "depositMass": 2,\r
    "sigma": 0.005049803149606299,\r
    "pulseDepth": 0.15,\r
    "pulseRate": 3.71,\r
    "cohorts": 25,\r
    "ruleSeed": 0.4155617116484791,\r
    "hueSensitivity": -0.84,\r
    "colorByCohort": true,\r
    "symmetryAxes": 2,\r
    "absoluteOrientation": 3,\r
    "orientationMix": 0.47244094488188976,\r
    "initialConditions": 5,\r
    "boundaryMode": 5,\r
    "domainShape": 0,\r
    "rule": [\r
      0.2723119259,\r
      0.2353467047,\r
      -0.3603444695,\r
      -0.09512524307,\r
      0.6235610247,\r
      3.013402939,\r
      0.02889615297,\r
      0.6329693794,\r
      1.528497815,\r
      -1.931068063,\r
      -0.8994591236,\r
      -2.652257919,\r
      -0.7968136072,\r
      -0.4519242346,\r
      -1.252381325,\r
      0.9024071097,\r
      0.6202709079,\r
      -3.089233398,\r
      2.700178146,\r
      1.030089855,\r
      0.2612487674,\r
      0.7132430077,\r
      -0.5218821764,\r
      2.613840342,\r
      1.409879804,\r
      2.794755459,\r
      -2.923718929,\r
      -1.810302138,\r
      -0.2040163279,\r
      -0.01136101782,\r
      1.589127541,\r
      0.389028132,\r
      -0.3837513328,\r
      -1.525727987,\r
      -1.321027994,\r
      -1.264946699,\r
      1.761325479,\r
      1.837681055,\r
      -0.4041278362,\r
      0.1539973617,\r
      0.08247791231,\r
      0.6491791606,\r
      0.3635686338,\r
      -0.3440827131,\r
      -1.007892013,\r
      1.137264013,\r
      -0.3193916082,\r
      -2.485742092,\r
      0.334392488,\r
      0.7741389275,\r
      -1.851560354,\r
      0.2410325259,\r
      0.4511550665,\r
      0.6353343725,\r
      -0.4594263434,\r
      -1.390197515,\r
      0.6367928386,\r
      0.1399131566,\r
      1.607939243,\r
      1.305648565,\r
      -0.5525392294,\r
      -2.501020193,\r
      1.342517853,\r
      1.339195728,\r
      -0.3298691511,\r
      -0.1836149991,\r
      0.0783386901,\r
      0.3052905798,\r
      0.4855825305,\r
      -0.991615355,\r
      -2.480074883,\r
      1.52519834,\r
      -0.2139547765,\r
      0.07011644542,\r
      0.3962416351,\r
      0.3858237863,\r
      -1.673520684,\r
      2.782539606,\r
      0.1734578609,\r
      2.216310978\r
    ],\r
    "recycleCutoff": 0,\r
    "recycleEnabled": false\r
  },\r
  "ui": {\r
    "playing": true,\r
    "overlay": false,\r
    "viewLocked": false,\r
    "demoMode": false,\r
    "frameCap": 60,\r
    "cameraOrbit": {\r
      "enabled": false,\r
      "speed": 0.0762992125984252\r
    },\r
    "timeline": {\r
      "enabled": false,\r
      "state": {\r
        "currentFrame": 3053,\r
        "playing": true,\r
        "loopIn": 0,\r
        "loopOut": 3599,\r
        "playbackSpeed": 1\r
      }\r
    },\r
    "trackingControls": {\r
      "follow": false,\r
      "look": false,\r
      "followSpeed": 3,\r
      "followSmoothing": 1,\r
      "lookSpeed": 4,\r
      "lookSmoothing": 1,\r
      "followDistance": 3.15,\r
      "followHeight": 0,\r
      "cohesion": 0.5\r
    }\r
  },\r
  "audio": {\r
    "panel": {\r
      "enabled": true,\r
      "buckets": {\r
        "low": {\r
          "gain": 0.75,\r
          "exponent": 8,\r
          "attackMs": 2,\r
          "decayMs": 75\r
        },\r
        "mid": {\r
          "gain": 0.75,\r
          "exponent": 5,\r
          "attackMs": 11,\r
          "decayMs": 37\r
        },\r
        "high": {\r
          "gain": 1,\r
          "exponent": 1,\r
          "attackMs": 1,\r
          "decayMs": 1\r
        }\r
      }\r
    },\r
    "sliders": {\r
      "p-bright": {\r
        "min": 0,\r
        "max": 6.35,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "sim-speed-slider": {\r
        "min": 0.1,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "trail-amount-slider": {\r
        "min": 0.05,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "particle-size-slider": {\r
        "min": 1.1,\r
        "max": 2.4,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "trail-radius-slider": {\r
        "min": 0.0015,\r
        "max": 0.1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "mutation": {\r
        "min": 0,\r
        "max": 0.2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "fov-slider": {\r
        "min": 20,\r
        "max": 188,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "orbit-speed-slider": {\r
        "min": -1.5,\r
        "max": 1.5,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "lateral": {\r
        "min": -1,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "mix": {\r
        "min": 0,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "axial": {\r
        "min": -1,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "particle-color-mode-slider": {\r
        "min": 0,\r
        "max": 6,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "initial-conditions-slider": {\r
        "min": 0,\r
        "max": 3,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "boundary-mode-slider": {\r
        "min": 0,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "absolute-orientation-slider": {\r
        "min": 0,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "force": {\r
        "min": 0,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "pitch": {\r
        "min": -1.32,\r
        "max": 1.32,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "drag": {\r
        "min": -0.2,\r
        "max": 0.4,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "sensor": {\r
        "min": 0,\r
        "max": 10,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "angle": {\r
        "min": -1,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "distance": {\r
        "min": 0,\r
        "max": 3,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "camera-zoom-slider": {\r
        "min": 0,\r
        "max": 25,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "trail-diffusion-slider": {\r
        "min": 0,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "chromatic-aberration-slider": {\r
        "min": 0,\r
        "max": 0.2,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      }\r
    }\r
  },\r
  "version": 2\r
}\r
`,x=`{\r
  "version": 2,\r
  "id": "file-ar10-json",\r
  "name": "Ice Flower",\r
  "createdAt": "2026-06-07T21:17:59.603Z",\r
  "updatedAt": "2026-07-06T21:27:59.616Z",\r
  "presetId": "shimmer-orb",\r
  "displayMode": "live",\r
  "controls": {\r
    "bloomStrength": 0.32,\r
    "bloomThreshold": 1.55,\r
    "bloomRadius": 2.15,\r
    "colorSaturation": 1.16,\r
    "colorContrast": 1.13,\r
    "chromaticAberration": 5.869437065775357E-306,\r
    "vignetteStrength": 0.64,\r
    "vignetteSoftness": 0.5,\r
    "streakStrength": 0.18,\r
    "streakLength": 0.31,\r
    "streakVertical": 0.45,\r
    "flareHeight": 0,\r
    "flareCutoff": 1,\r
    "ribbonFraction": 0,\r
    "ribbonWidth": 0.85,\r
    "ribbonTaper": 1,\r
    "ribbonLength": 8,\r
    "ribbonJoints": 10,\r
    "ribbonFadeStart": 0.5,\r
    "ribbonEdgeFade": 0.5,\r
    "density": 1.1,\r
    "exposure": 1.35,\r
    "fov": 88,\r
    "aperture": 0.5653028338961303,\r
    "focusDistance": 0.54,\r
    "dofBlur": 1,\r
    "dofEnabled": false,\r
    "dofDebug": false,\r
    "sceneBrightness": 2.6,\r
    "raySteps": 64,\r
    "rayResolution": 1560,\r
    "fogTemporal": false,\r
    "fogRenderScale": 0.25,\r
    "fogStepScale": 0.45,\r
    "fogTemporalBlend": 0,\r
    "fogBlueNoise": false,\r
    "fieldTextureSampling": true,\r
    "emptySpaceSkipping": true,\r
    "emptySpaceThreshold": 0.085,\r
    "emptySpaceStride": 2,\r
    "particleSizePx": 1.1,\r
    "particleMinPx": 2.7,\r
    "particleMaxPx": 12.6,\r
    "particleOpacity": 0.02,\r
    "particleBrightness": 4.342904549675189,\r
    "particleColorMode": "audio-ice",\r
    "particleVelocityStretch": true,\r
    "particleStretch": 0.7,\r
    "particleStretchMin": 0,\r
    "particleStretchSpeed": 0.004,\r
    "particleSpeedCutoff": 0,\r
    "particleSlowCutoff": 0,\r
    "particleGlowCore": 1,\r
    "particleHotCore": 0.01,\r
    "particleExponent": 1,\r
    "particleBrightnessBoost": 1,\r
    "particleSupportSmoothing": 0,\r
    "particleHazeCull": 0,\r
    "particleDespeckle": 0,\r
    "particleBlendMode": "additive",\r
    "particleDensityCutoff": 0,\r
    "particleDensityRadius": 0,\r
    "particleDensityNormalize": 0,\r
    "particleDensitySoftness": 0.44,\r
    "particleSupportMask": 1,\r
    "particleSupportRadius": 0.35,\r
    "particleSupportNeighbors": 24,\r
    "particleSupportFlow": 0.18,\r
    "fastParticleRender": true,\r
    "fastNoBloomPost": true,\r
    "particleCutoffPrepass": false,\r
    "densityLargeHalfRes": false,\r
    "densityPassStrength": 0,\r
    "densitySmallScale": 0.25,\r
    "densityLargeScale": 1,\r
    "densityLargeThreshold": 1.63,\r
    "densityContrastGain": 0,\r
    "densityContrastBalance": 0,\r
    "densityEmissionPower": 5,\r
    "densityOcclusion": 0,\r
    "accumulationStrength": 3.6,\r
    "accumulationRadius": 1.05,\r
    "accumulationCurve": 2.2,\r
    "accumulationMemory": 0.72,\r
    "accumulationNoiseReject": 0.35,\r
    "trailOpacity": 0.75,\r
    "fogBrightness": 1.18,\r
    "trailThreshold": 0.014723410815931858,\r
    "trailColorMode": "thermal",\r
    "fogTint": "#1e008a",\r
    "particleTint": "#00ff88",\r
    "renderLayer": "particles",\r
    "palette": "ember",\r
    "filament": 0.34,\r
    "cameraYaw": -1.0914782177804803,\r
    "cameraPitch": 0.08680000000000007,\r
    "cameraDistance": 1.2,\r
    "cameraPanX": 0.005683681729576841,\r
    "cameraPanY": 0.03787245004029527,\r
    "variationMaster": 1,\r
    "variationDrift": 0.8,\r
    "variationNoiseMix": 0.76,\r
    "variationFreq": 11.25,\r
    "variationOctaves": 4,\r
    "variationGain": 0.75,\r
    "variationLacunarity": 2.7,\r
    "variationSizeAmount": 0.83,\r
    "variationSizeCurve": 5.931873235199999,\r
    "variationSizeMin": 1.27,\r
    "variationSizeMax": 3,\r
    "variationBrightAmount": 0.88,\r
    "variationBrightCurve": 2,\r
    "variationBrightMin": 0.75,\r
    "variationBrightMax": 2.7,\r
    "variationOpacityAmount": 1,\r
    "variationOpacityCurve": 0.3,\r
    "variationOpacityMin": 0.64,\r
    "variationOpacityMax": 1.28,\r
    "variationColorAmount": 0,\r
    "variationColorCurve": 6,\r
    "variationColorMin": -0.08,\r
    "variationColorMax": 0.5\r
  },\r
  "liveConfig": {\r
    "seed": 2771361799,\r
    "simulationSpeed": 1,\r
    "width": 96,\r
    "height": 96,\r
    "depth": 96,\r
    "particleCount": 2399232,\r
    "dt": 1,\r
    "sensorGain": 1,\r
    "sensorAngle": -0.8,\r
    "sensorDistance": -0.6585511811023623,\r
    "mutationScale": 0.19468503937007875,\r
    "globalForceMult": 1.629448818897638,\r
    "drag": -0.2,\r
    "strafePower": 0.3280335001135245,\r
    "strafeMomentum": 0,\r
    "axialForce": 0.4173228346456692,\r
    "lateralForce": 0.21259842519685046,\r
    "hazardRate": 0.006782057737000286,\r
    "trailPersistence": 0.999,\r
    "trailDiffusion": 0.9921259842519685,\r
    "depositRadius": 0.024690944881889762,\r
    "depositTapRadius": 1,\r
    "depositMass": 0.787007874015748,\r
    "sigma": 0.00839492125984252,\r
    "pulseDepth": 0.15,\r
    "pulseRate": 3.71,\r
    "restlessness": 0,\r
    "cohorts": 25,\r
    "ruleSeed": 0.4155617116484791,\r
    "hueSensitivity": -0.84,\r
    "colorByCohort": true,\r
    "symmetryAxes": 2,\r
    "absoluteOrientation": 4,\r
    "orientationMix": 0.28346456692913385,\r
    "initialConditions": 2,\r
    "boundaryMode": 4,\r
    "domainShape": 0,\r
    "rule": [\r
      0.2723119259,\r
      0.2353467047,\r
      -0.3603444695,\r
      -0.09512524307,\r
      0.6235610247,\r
      3.013402939,\r
      0.02889615297,\r
      0.6329693794,\r
      1.528497815,\r
      -1.931068063,\r
      -0.8994591236,\r
      -2.652257919,\r
      -0.7968136072,\r
      -0.4519242346,\r
      -1.252381325,\r
      0.9024071097,\r
      0.6202709079,\r
      -3.089233398,\r
      2.700178146,\r
      1.030089855,\r
      0.2612487674,\r
      0.7132430077,\r
      -0.5218821764,\r
      2.613840342,\r
      1.409879804,\r
      2.794755459,\r
      -2.923718929,\r
      -1.810302138,\r
      -0.2040163279,\r
      -0.01136101782,\r
      1.589127541,\r
      0.389028132,\r
      -0.3837513328,\r
      -1.525727987,\r
      -1.321027994,\r
      -1.264946699,\r
      1.761325479,\r
      1.837681055,\r
      -0.4041278362,\r
      0.1539973617,\r
      0.08247791231,\r
      0.6491791606,\r
      0.3635686338,\r
      -0.3440827131,\r
      -1.007892013,\r
      1.137264013,\r
      -0.3193916082,\r
      -2.485742092,\r
      0.334392488,\r
      0.7741389275,\r
      -1.851560354,\r
      0.2410325259,\r
      0.4511550665,\r
      0.6353343725,\r
      -0.4594263434,\r
      -1.390197515,\r
      0.6367928386,\r
      0.1399131566,\r
      1.607939243,\r
      1.305648565,\r
      -0.5525392294,\r
      -2.501020193,\r
      1.342517853,\r
      1.339195728,\r
      -0.3298691511,\r
      -0.1836149991,\r
      0.0783386901,\r
      0.3052905798,\r
      0.4855825305,\r
      -0.991615355,\r
      -2.480074883,\r
      1.52519834,\r
      -0.2139547765,\r
      0.07011644542,\r
      0.3962416351,\r
      0.3858237863,\r
      -1.673520684,\r
      2.782539606,\r
      0.1734578609,\r
      2.216310978\r
    ],\r
    "recycleCutoff": 0,\r
    "recycleEnabled": false,\r
    "mips": 0,\r
    "anisoFollow": 0,\r
    "flockAlign": 0,\r
    "flockSeparate": 0,\r
    "chemotaxis": 0,\r
    "quorumStrength": 0,\r
    "quorumThreshold": 0.5,\r
    "leniaStrength": 0,\r
    "leniaCenter": 0.15,\r
    "leniaWidth": 0.015,\r
    "speciesForce": 0,\r
    "predator": 0,\r
    "alarm": 0,\r
    "grayScott": 0,\r
    "gsFeed": 0.037,\r
    "gsKill": 0.06,\r
    "energy": 0,\r
    "energyDrain": 0.5\r
  },\r
  "ui": {\r
    "playing": true,\r
    "overlay": false,\r
    "viewLocked": false,\r
    "demoMode": false,\r
    "frameCap": 60,\r
    "cameraOrbit": {\r
      "enabled": true,\r
      "speed": 0.24\r
    },\r
    "timeline": {\r
      "enabled": false,\r
      "state": {\r
        "currentFrame": 1752,\r
        "playing": true,\r
        "loopIn": 0,\r
        "loopOut": 3599,\r
        "playbackSpeed": 1\r
      }\r
    },\r
    "trackingControls": {\r
      "follow": false,\r
      "look": false,\r
      "followSpeed": 3,\r
      "followSmoothing": 1,\r
      "lookSpeed": 4,\r
      "lookSmoothing": 1,\r
      "followDistance": 3.15,\r
      "followHeight": 0,\r
      "cohesion": 0.5\r
    }\r
  },\r
  "audio": {\r
    "panel": {\r
      "enabled": true,\r
      "buckets": {\r
        "low": {\r
          "gain": 0.75,\r
          "exponent": 8,\r
          "attackMs": 2,\r
          "decayMs": 75\r
        },\r
        "mid": {\r
          "gain": 0.75,\r
          "exponent": 5,\r
          "attackMs": 11,\r
          "decayMs": 37\r
        },\r
        "high": {\r
          "gain": 1,\r
          "exponent": 1,\r
          "attackMs": 1,\r
          "decayMs": 1\r
        }\r
      }\r
    },\r
    "sliders": {\r
      "p-bright": {\r
        "min": 0,\r
        "max": 6.35,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "sim-speed-slider": {\r
        "min": 0.1,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "trail-amount-slider": {\r
        "min": 0.05,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "particle-size-slider": {\r
        "min": 1.1,\r
        "max": 2.4,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "trail-radius-slider": {\r
        "min": 0.0015,\r
        "max": 0.1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "mutation": {\r
        "min": 0,\r
        "max": 0.2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "fov-slider": {\r
        "min": 20,\r
        "max": 188,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "orbit-speed-slider": {\r
        "min": -1.5,\r
        "max": 1.5,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "lateral": {\r
        "min": -1,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "mix": {\r
        "min": 0,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "axial": {\r
        "min": -1,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "particle-color-mode-slider": {\r
        "min": 0,\r
        "max": 6,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "initial-conditions-slider": {\r
        "min": 0,\r
        "max": 3,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "boundary-mode-slider": {\r
        "min": 0,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "absolute-orientation-slider": {\r
        "min": 0,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "force": {\r
        "min": 0,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "pitch": {\r
        "min": -1.32,\r
        "max": 1.32,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "drag": {\r
        "min": -0.2,\r
        "max": 0.4,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "sensor": {\r
        "min": 0,\r
        "max": 10,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "angle": {\r
        "min": -1,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "distance": {\r
        "min": 0,\r
        "max": 3,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "camera-zoom-slider": {\r
        "min": 0,\r
        "max": 25,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "trail-diffusion-slider": {\r
        "min": 0,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "chromatic-aberration-slider": {\r
        "min": 0,\r
        "max": 0.2,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      }\r
    }\r
  }\r
}\r
`,S=`{\r
  "name": "Viridian Aurora",\r
  "presetId": "shimmer-orb",\r
  "displayMode": "live",\r
  "controls": {\r
    "bloomStrength": 0.32,\r
    "bloomThreshold": 1.55,\r
    "bloomRadius": 2.15,\r
    "colorSaturation": 1.16,\r
    "colorContrast": 1.13,\r
    "chromaticAberration": 0.14988091115327273,\r
    "vignetteStrength": 0.64,\r
    "vignetteSoftness": 0.5,\r
    "streakStrength": 0.18,\r
    "streakLength": 0.31,\r
    "streakVertical": 0.45,\r
    "flareHeight": 0,\r
    "flareCutoff": 1,\r
    "ribbonFraction": 0,\r
    "exposure": 1.35,\r
    "fov": 97,\r
    "aperture": 0.5653028338961303,\r
    "focusDistance": 0.54,\r
    "dofBlur": 1,\r
    "dofEnabled": false,\r
    "dofDebug": false,\r
    "sceneBrightness": 2.6,\r
    "rayResolution": 1560,\r
    "particleSizePx": 2.0742259224962725,\r
    "particleOpacity": 0.02,\r
    "particleBrightness": 4.342904549675189,\r
    "particleColorMode": "audio-viridis",\r
    "particleVelocityStretch": true,\r
    "particleStretch": 0.7,\r
    "particleStretchMin": 0,\r
    "particleStretchSpeed": 0.004,\r
    "particleSpeedCutoff": 0,\r
    "particleSlowCutoff": 0,\r
    "particleGlowCore": 1,\r
    "particleHotCore": 0.01,\r
    "particleBlendMode": "additive",\r
    "particleDensityCutoff": 0,\r
    "particleDensityRadius": 0,\r
    "particleDensityNormalize": 0,\r
    "particleDensitySoftness": 0.44,\r
    "particleSupportMask": 1,\r
    "particleSupportRadius": 0.35,\r
    "particleSupportNeighbors": 24,\r
    "particleSupportFlow": 0.18,\r
    "fastParticleRender": true,\r
    "fastNoBloomPost": true,\r
    "particleTint": "#00ff88",\r
    "renderLayer": "particles",\r
    "cameraYaw": 0.3162269138928604,\r
    "cameraPitch": 0.28,\r
    "cameraDistance": 1.6380000000000001,\r
    "cameraPanX": -0.16685526196151437,\r
    "cameraPanY": 0.03172750722982695,\r
    "variationMaster": 1,\r
    "variationDrift": 0.8,\r
    "variationNoiseMix": 0.76,\r
    "variationFreq": 11.25,\r
    "variationOctaves": 4,\r
    "variationGain": 0.75,\r
    "variationLacunarity": 2.7,\r
    "variationSizeAmount": 0.83,\r
    "variationSizeCurve": 5.931873235199999,\r
    "variationSizeMin": 1.27,\r
    "variationSizeMax": 3,\r
    "variationBrightAmount": 0.88,\r
    "variationBrightCurve": 2,\r
    "variationBrightMin": 0.75,\r
    "variationBrightMax": 2.7,\r
    "variationOpacityAmount": 1,\r
    "variationOpacityCurve": 0.3,\r
    "variationOpacityMin": 0.64,\r
    "variationOpacityMax": 1.28,\r
    "variationColorAmount": 0,\r
    "variationColorCurve": 6,\r
    "variationColorMin": -0.08,\r
    "variationColorMax": 0.5\r
  },\r
  "liveConfig": {\r
    "seed": 2771361799,\r
    "simulationSpeed": 1,\r
    "width": 96,\r
    "height": 96,\r
    "depth": 96,\r
    "particleCount": 3399680,\r
    "dt": 1,\r
    "sensorGain": 0.8500000000000001,\r
    "sensorAngle": -0.8,\r
    "sensorDistance": -1.45,\r
    "mutationScale": 0.335,\r
    "globalForceMult": 0.6685420492794356,\r
    "drag": 0.24964273345981824,\r
    "strafePower": 0.3280335001135245,\r
    "axialForce": 0.24,\r
    "lateralForce": 0.9,\r
    "hazardRate": 0.006782057737000286,\r
    "trailPersistence": 0.999,\r
    "trailDiffusion": 0.62,\r
    "depositRadius": 0.019,\r
    "depositTapRadius": 1,\r
    "depositMass": 1.8,\r
    "sigma": 0.0064600000000000005,\r
    "pulseDepth": 0.15,\r
    "pulseRate": 3.71,\r
    "cohorts": 25,\r
    "ruleSeed": 0.4155617116484791,\r
    "hueSensitivity": -0.84,\r
    "colorByCohort": true,\r
    "symmetryAxes": 2,\r
    "absoluteOrientation": 3,\r
    "orientationMix": 0.36,\r
    "initialConditions": 0,\r
    "boundaryMode": 2,\r
    "domainShape": 0,\r
    "rule": [\r
      0.2723119259,\r
      0.2353467047,\r
      -0.3603444695,\r
      -0.09512524307,\r
      0.6235610247,\r
      3.013402939,\r
      0.02889615297,\r
      0.6329693794,\r
      1.528497815,\r
      -1.931068063,\r
      -0.8994591236,\r
      -2.652257919,\r
      -0.7968136072,\r
      -0.4519242346,\r
      -1.252381325,\r
      0.9024071097,\r
      0.6202709079,\r
      -3.089233398,\r
      2.700178146,\r
      1.030089855,\r
      0.2612487674,\r
      0.7132430077,\r
      -0.5218821764,\r
      2.613840342,\r
      1.409879804,\r
      2.794755459,\r
      -2.923718929,\r
      -1.810302138,\r
      -0.2040163279,\r
      -0.01136101782,\r
      1.589127541,\r
      0.389028132,\r
      -0.3837513328,\r
      -1.525727987,\r
      -1.321027994,\r
      -1.264946699,\r
      1.761325479,\r
      1.837681055,\r
      -0.4041278362,\r
      0.1539973617,\r
      0.08247791231,\r
      0.6491791606,\r
      0.3635686338,\r
      -0.3440827131,\r
      -1.007892013,\r
      1.137264013,\r
      -0.3193916082,\r
      -2.485742092,\r
      0.334392488,\r
      0.7741389275,\r
      -1.851560354,\r
      0.2410325259,\r
      0.4511550665,\r
      0.6353343725,\r
      -0.4594263434,\r
      -1.390197515,\r
      0.6367928386,\r
      0.1399131566,\r
      1.607939243,\r
      1.305648565,\r
      -0.5525392294,\r
      -2.501020193,\r
      1.342517853,\r
      1.339195728,\r
      -0.3298691511,\r
      -0.1836149991,\r
      0.0783386901,\r
      0.3052905798,\r
      0.4855825305,\r
      -0.991615355,\r
      -2.480074883,\r
      1.52519834,\r
      -0.2139547765,\r
      0.07011644542,\r
      0.3962416351,\r
      0.3858237863,\r
      -1.673520684,\r
      2.782539606,\r
      0.1734578609,\r
      2.216310978\r
    ],\r
    "recycleCutoff": 0,\r
    "recycleEnabled": false\r
  },\r
  "ui": {\r
    "playing": true,\r
    "overlay": false,\r
    "viewLocked": false,\r
    "demoMode": true,\r
    "frameCap": 60,\r
    "cameraOrbit": {\r
      "enabled": true,\r
      "speed": 0.24\r
    },\r
    "timeline": {\r
      "enabled": false,\r
      "state": {\r
        "currentFrame": 3599,\r
        "playing": true,\r
        "loopIn": 0,\r
        "loopOut": 3599,\r
        "playbackSpeed": 1\r
      }\r
    },\r
    "trackingControls": {\r
      "follow": false,\r
      "look": false,\r
      "followSpeed": 3,\r
      "followSmoothing": 1,\r
      "lookSpeed": 4,\r
      "lookSmoothing": 1,\r
      "followDistance": 3.15,\r
      "followHeight": 0,\r
      "cohesion": 0.5\r
    }\r
  },\r
  "audio": {\r
    "panel": {\r
      "enabled": true,\r
      "buckets": {\r
        "low": {\r
          "gain": 0.75,\r
          "exponent": 8,\r
          "attackMs": 5,\r
          "decayMs": 147\r
        },\r
        "mid": {\r
          "gain": 0.75,\r
          "exponent": 5,\r
          "attackMs": 11,\r
          "decayMs": 37\r
        },\r
        "high": {\r
          "gain": 1,\r
          "exponent": 1,\r
          "attackMs": 1,\r
          "decayMs": 1\r
        }\r
      }\r
    },\r
    "sliders": {\r
      "p-bright": {\r
        "min": 0,\r
        "max": 6.35,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "sim-speed-slider": {\r
        "min": 0.1,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "trail-amount-slider": {\r
        "min": 0.05,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "particle-size-slider": {\r
        "min": 1.1,\r
        "max": 2.4,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "trail-radius-slider": {\r
        "min": 0.0015,\r
        "max": 0.1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "mutation": {\r
        "min": 0,\r
        "max": 0.2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "fov-slider": {\r
        "min": 20,\r
        "max": 188,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "orbit-speed-slider": {\r
        "min": -1.5,\r
        "max": 1.5,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "lateral": {\r
        "min": -1,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "mix": {\r
        "min": 0,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "axial": {\r
        "min": -1,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "particle-color-mode-slider": {\r
        "min": 0,\r
        "max": 6,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "initial-conditions-slider": {\r
        "min": 0,\r
        "max": 3,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "boundary-mode-slider": {\r
        "min": 0,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "absolute-orientation-slider": {\r
        "min": 0,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "force": {\r
        "min": -2,\r
        "max": 2,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "pitch": {\r
        "min": -1.32,\r
        "max": 1.32,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "drag": {\r
        "min": -0.2,\r
        "max": 0.4,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "sensor": {\r
        "min": 0,\r
        "max": 10,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "angle": {\r
        "min": -1,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "distance": {\r
        "min": 0,\r
        "max": 3,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "camera-zoom-slider": {\r
        "min": 0,\r
        "max": 25,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "trail-diffusion-slider": {\r
        "min": 0,\r
        "max": 1,\r
        "buckets": {\r
          "low": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      },\r
      "chromatic-aberration-slider": {\r
        "min": 0,\r
        "max": 0.2,\r
        "buckets": {\r
          "low": {\r
            "enabled": true,\r
            "gain": 1\r
          },\r
          "mid": {\r
            "enabled": false,\r
            "gain": 1\r
          },\r
          "high": {\r
            "enabled": false,\r
            "gain": 1\r
          }\r
        }\r
      }\r
    }\r
  },\r
  "version": 2\r
}\r
`;function C(e){return Number.isFinite(e)?e<0?0:e>1?1:e:0}function w(e,t,n,r){let i=C(e),a=r===1?i:i**+r;return t+(n-t)*a}function ee(e,t,n,r){if(n<=t)return 0;let i=C((e-t)/(n-t));return r===1?i:i**(1/r)}var T=`rgba16float`,te=`display-p3`,E=`extended`;function ne(e,t){let n=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC;if(re()){let r=navigator.gpu.getPreferredCanvasFormat();return e.configure({device:t,format:r,alphaMode:`opaque`,colorSpace:`srgb`,usage:n}),D(e,r,!0)}let r={device:t,format:T,alphaMode:`opaque`,colorSpace:te,toneMapping:{mode:E},usage:n};try{return e.configure(r),D(e,T,!1)}catch(r){console.warn(`HDR WebGPU canvas configuration failed, falling back to preferred canvas format`,r);let i=navigator.gpu.getPreferredCanvasFormat();return e.configure({device:t,format:i,alphaMode:`opaque`,colorSpace:te,toneMapping:{mode:E},usage:n}),D(e,i,!0)}}function re(){return typeof window>`u`?!1:new URLSearchParams(window.location.search).get(`sdrCanvas`)===`1`}function D(e,t,n){let r=e.getConfiguration(),i=r?.colorSpace??`display-p3`,a=r?.toneMapping?.mode;return{format:t,colorSpace:i,toneMappingMode:a??`standard`,hdr:t===`rgba16float`&&i===`display-p3`&&a===`extended`,fallback:n}}var ie={powerPreference:`high-performance`};function ae(e){return e.requestAdapter(ie)}function oe(e){let t=e.info,n=[t?.description,t?.vendor,t?.architecture,t?.device].filter(e=>typeof e==`string`&&e.trim().length>0);return n.length>0?[...new Set(n)].join(` / `):`adapter-present`}async function se(){let e=navigator.gpu;if(!e)return{checked:!0,available:!1,adapterOk:!1,deviceOk:!1,bufferRoundtripOk:!1,adapterInfo:`navigator.gpu unavailable`,error:`navigator.gpu unavailable`};try{let t=await ae(e);if(!t)return{checked:!0,available:!0,adapterOk:!1,deviceOk:!1,bufferRoundtripOk:!1,adapterInfo:`no adapter returned`,error:`no adapter returned`};let n=await t.requestDevice(),r=new Uint32Array([1179995972,7,11,13]),i=n.createBuffer({size:r.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),a=n.createBuffer({size:r.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});n.queue.writeBuffer(i,0,r);let o=n.createCommandEncoder();o.copyBufferToBuffer(i,0,a,0,r.byteLength),n.queue.submit([o.finish()]),await a.mapAsync(GPUMapMode.READ);let s=new Uint32Array(a.getMappedRange().slice(0));return a.unmap(),{checked:!0,available:!0,adapterOk:!0,deviceOk:!0,bufferRoundtripOk:s.every((e,t)=>e===r[t]),adapterInfo:oe(t)}}catch(e){return{checked:!0,available:!0,adapterOk:!1,deviceOk:!1,bufferRoundtripOk:!1,adapterInfo:`probe failed`,error:e instanceof Error?e.message:String(e)}}}var O={seed:3405691582,width:4,height:4,depth:4,particleCount:8,steps:2,dt:1,speed:.72,turn:.38,sensorDistance:2.25,diffusion:.055,decay:.025,depositRadius:2.2,depositMass:.04,sigma:1.05},k={fieldMeanAbsError:.035,fieldMaxAbsError:.75,particlePositionMeanError:.08,particlePositionMaxError:.32};async function A(e=O){let t=j(e);if(!navigator.gpu)return de(e,t,`navigator.gpu unavailable`,`unavailable`);try{let n=await ae(navigator.gpu);if(!n)return de(e,t,`no WebGPU adapter returned`,`unavailable`);let r=await n.requestDevice(),i=await De(N(r,e),1e4,`WebGPU 3D compute timed out`),a=ue(e,t,i);return r.destroy(),{...a,gpuField:Array.from(i.field),cpuField:Array.from(t.field)}}catch(n){return de(e,t,n instanceof Error?n.message:String(n),`failed`)}}function j(e=O){let t=M(e);for(let n=0;n<e.steps;n+=1)t=le(t,e);return t}function ce(e){let{gpuField:t,cpuField:n,...r}=e;return r}function M(e){let t=new Float32Array(e.particleCount*8),n=new Float32Array(e.width*e.height*e.depth);for(let n=0;n<e.particleCount;n+=1){let r=we(e.seed,n,0,0,0,e.width),i=we(e.seed,n,0,1,0,e.height),a=we(e.seed,n,0,2,0,e.depth),o=we(e.seed,n,0,3,0,Math.PI*2),s=we(e.seed,n,0,4,-.42,.42),c=Math.sqrt(Math.max(.05,1-s*s)),l=n*8;t[l]=P(r),t[l+1]=P(i),t[l+2]=P(a),t[l+3]=n%3,t[l+4]=P(Math.cos(o)*c),t[l+5]=P(Math.sin(o)*c),t[l+6]=P(s),t[l+7]=n}return{particles:t,field:n}}function le(e,t){let n=new Float32Array(e.particles.length);for(let r=0;r<t.particleCount;r+=1){let i=r*8,a=[e.particles[i],e.particles[i+1],e.particles[i+2]],o=e.particles[i+3],s=Ce([e.particles[i+4],e.particles[i+5],e.particles[i+6]]),c=Ce(Se(s,[.37,.71,.13])),l=Ce(Se(c,s)),u=he(e.field,t,be(a,xe(c,t.sensorDistance))),d=he(e.field,t,be(a,xe(c,-t.sensorDistance))),f=he(e.field,t,be(a,xe(l,t.sensorDistance))),p=P((u-d+(o-1)*.025)*t.turn),m=P((f-(u+d)*.5)*t.turn*.35),h=Ce(be(s,be(xe(c,p),xe(l,m)))),g=[ve(a[0]+h[0]*t.speed*t.dt,t.width),ve(a[1]+h[1]*t.speed*t.dt,t.height),ve(a[2]+h[2]*t.speed*t.dt,t.depth)];n[i]=P(g[0]),n[i+1]=P(g[1]),n[i+2]=P(g[2]),n[i+3]=o,n[i+4]=P(h[0]),n[i+5]=P(h[1]),n[i+6]=P(h[2]),n[i+7]=e.particles[i+7]}let r=new Float32Array(e.field.length);for(let i=0;i<t.depth;i+=1)for(let a=0;a<t.height;a+=1)for(let o=0;o<t.width;o+=1){let s=ge(o,a,i,t),c=e.field[s],l=e.field[ge(o-1,a,i,t)]+e.field[ge(o+1,a,i,t)]+e.field[ge(o,a-1,i,t)]+e.field[ge(o,a+1,i,t)]+e.field[ge(o,a,i-1,t)]+e.field[ge(o,a,i+1,t)],u=Math.max(0,(1-6*t.diffusion)*c+t.diffusion*l)*(1-t.decay),d=[o+.5,a+.5,i+.5];for(let e=0;e<t.particleCount;e+=1){let r=e*8,i=ye(d[0],n[r],t.width),a=ye(d[1],n[r+1],t.height),o=ye(d[2],n[r+2],t.depth),s=i*i+a*a+o*o;s<=t.depositRadius*t.depositRadius&&(u+=t.depositMass*Math.exp(-s/(2*t.sigma*t.sigma)))}r[s]=P(u)}return{particles:n,field:r}}async function N(e,t){let n=M(t),r=n.particles.byteLength,i=n.field.byteLength,a=[fe(e,r,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC),fe(e,r,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC)],o=[fe(e,i,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC),fe(e,i,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC)];e.queue.writeBuffer(a[0],0,n.particles),e.queue.writeBuffer(o[0],0,n.field);let s=fe(e,64,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),c=e.createComputePipeline({layout:`auto`,compute:{module:e.createShaderModule({code:ke}),entryPoint:`update_particles`}}),l=e.createComputePipeline({layout:`auto`,compute:{module:e.createShaderModule({code:Ae}),entryPoint:`deposit_diffuse_field`}}),u=0,d=1;for(let n=0;n<t.steps;n+=1){e.queue.writeBuffer(s,0,pe(t,n));let r=e.createBindGroup({layout:c.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:a[u]}},{binding:1,resource:{buffer:o[u]}},{binding:2,resource:{buffer:a[d]}},{binding:3,resource:{buffer:s}}]}),i=e.createBindGroup({layout:l.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:a[d]}},{binding:1,resource:{buffer:o[u]}},{binding:2,resource:{buffer:o[d]}},{binding:3,resource:{buffer:s}}]}),f=e.createCommandEncoder(),p=f.beginComputePass();p.setPipeline(c),p.setBindGroup(0,r),p.dispatchWorkgroups(Math.ceil(t.particleCount/64)),p.end();let m=f.beginComputePass();m.setPipeline(l),m.setBindGroup(0,i),m.dispatchWorkgroups(Math.ceil(t.width*t.height*t.depth/64)),m.end(),e.queue.submit([f.finish()]),await e.queue.onSubmittedWorkDone(),[u,d]=[d,u]}let f=await me(e,a[u],r),p=await me(e,o[u],i);return{particles:new Float32Array(f),field:new Float32Array(p)}}function ue(e,t,n){let r=0,i=0,a=0,o=0,s=0;for(let e=0;e<t.field.length;e+=1){let c=t.field[e],l=n.field[e],u=Math.abs(c-l);r+=u,i=Math.max(i,u),a+=c,o+=l,l>1e-4&&(s+=1)}let c=0,l=0;for(let r=0;r<e.particleCount;r+=1){let i=r*8,a=ye(t.particles[i],n.particles[i],e.width),o=ye(t.particles[i+1],n.particles[i+1],e.height),s=ye(t.particles[i+2],n.particles[i+2],e.depth),u=Math.hypot(a,o,s);c+=u,l=Math.max(l,u)}let u=r/Math.max(1,t.field.length),d=c/Math.max(1,e.particleCount);return{available:!0,passed:u<=k.fieldMeanAbsError&&i<=k.fieldMaxAbsError&&d<=k.particlePositionMeanError&&l<=k.particlePositionMaxError&&o>1&&s>10,mode:`webgpu-compute-3d`,width:e.width,height:e.height,depth:e.depth,particleCount:e.particleCount,steps:e.steps,cpuFieldSum:a,gpuFieldSum:o,gpuNonzeroVoxels:s,fieldMeanAbsError:u,fieldMaxAbsError:i,particlePositionMeanError:d,particlePositionMaxError:l,tolerances:k}}function de(e,t,n,r){return{available:!1,passed:!1,mode:r,width:e.width,height:e.height,depth:e.depth,particleCount:e.particleCount,steps:e.steps,cpuFieldSum:Ee(t.field),gpuFieldSum:0,gpuNonzeroVoxels:0,fieldMeanAbsError:1/0,fieldMaxAbsError:1/0,particlePositionMeanError:1/0,particlePositionMaxError:1/0,tolerances:k,error:n,gpuField:[],cpuField:Array.from(t.field)}}function fe(e,t,n){return e.createBuffer({size:t,usage:n})}function pe(e,t){let n=new ArrayBuffer(64),r=new Uint32Array(n),i=new Float32Array(n);return r[0]=e.width,r[1]=e.height,r[2]=e.depth,r[3]=e.particleCount,i[4]=e.dt,i[5]=e.speed,i[6]=e.turn,i[7]=e.sensorDistance,i[8]=e.diffusion,i[9]=e.decay,i[10]=e.depositRadius,i[11]=e.depositMass,i[12]=e.sigma,i[13]=t,n}async function me(e,t,n){let r=e.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),i=e.createCommandEncoder();i.copyBufferToBuffer(t,0,r,0,n),e.queue.submit([i.finish()]),await r.mapAsync(GPUMapMode.READ);let a=r.getMappedRange().slice(0);return r.unmap(),r.destroy(),a}function he(e,t,n){return e[ge(Math.floor(n[0]),Math.floor(n[1]),Math.floor(n[2]),t)]}function ge(e,t,n,r){let i=_e(e,r.width),a=_e(t,r.height);return(_e(n,r.depth)*r.height+a)*r.width+i}function _e(e,t){return(e%t+t)%t}function ve(e,t){return P(e-Math.floor(e/t)*t)}function ye(e,t,n){let r=e-t;return r-=Math.round(r/n)*n,r}function be(e,t){return[P(e[0]+t[0]),P(e[1]+t[1]),P(e[2]+t[2])]}function xe(e,t){return[P(e[0]*t),P(e[1]*t),P(e[2]*t)]}function Se(e,t){return[P(e[1]*t[2]-e[2]*t[1]),P(e[2]*t[0]-e[0]*t[2]),P(e[0]*t[1]-e[1]*t[0])]}function Ce(e){let t=Math.hypot(e[0],e[1],e[2]);return t<=1e-6?[1,0,0]:[P(e[0]/t),P(e[1]/t),P(e[2]/t)]}function we(e,t,n,r,i,a){return i+(a-i)*Te(e,t,n,r)}function Te(e,t,n,r){let i=(e^Math.imul(t+1,2654435761)^Math.imul(n+1,2246822507)^Math.imul(r+1,3266489909))>>>0;return i^=i>>>16,i=Math.imul(i,2146121005)>>>0,i^=i>>>15,i=Math.imul(i,2221713035)>>>0,i^=i>>>16,(i>>>0)/4294967295}function Ee(e){let t=0;for(let n of e)t+=n;return t}function De(e,t,n){return new Promise((r,i)=>{let a=window.setTimeout(()=>i(Error(n)),t);e.then(e=>{window.clearTimeout(a),r(e)},e=>{window.clearTimeout(a),i(e)})})}function P(e){return Math.fround(e)}var Oe=`
struct Particle {
  pos_species: vec4f,
  vel_id: vec4f,
};

struct Config {
  width: u32,
  height: u32,
  depth: u32,
  particle_count: u32,
  dt: f32,
  speed: f32,
  turn: f32,
  sensor_distance: f32,
  diffusion: f32,
  decay: f32,
  deposit_radius: f32,
  deposit_mass: f32,
  sigma: f32,
  step_index: f32,
  _pad0: f32,
  _pad1: f32,
};
`,ke=`
${Oe}

@group(0) @binding(0) var<storage, read> particles_in: array<Particle>;
@group(0) @binding(1) var<storage, read> field_in: array<f32>;
@group(0) @binding(2) var<storage, read_write> particles_out: array<Particle>;
@group(0) @binding(3) var<uniform> config: Config;

fn wrap_i(value: i32, size: u32) -> u32 {
  let s = i32(size);
  return u32(((value % s) + s) % s);
}

fn wrap_f(value: f32, size: f32) -> f32 {
  return value - floor(value / size) * size;
}

fn index_xyz(x: i32, y: i32, z: i32) -> u32 {
  let ix = wrap_i(x, config.width);
  let iy = wrap_i(y, config.height);
  let iz = wrap_i(z, config.depth);
  return (iz * config.height + iy) * config.width + ix;
}

fn sample_field(position: vec3f) -> f32 {
  return field_in[index_xyz(i32(floor(position.x)), i32(floor(position.y)), i32(floor(position.z)))];
}

fn safe_normalize(v: vec3f) -> vec3f {
  let len = length(v);
  if (len <= 0.000001) {
    return vec3f(1.0, 0.0, 0.0);
  }
  return v / len;
}

@compute @workgroup_size(64)
fn update_particles(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.x;
  if (i >= config.particle_count) {
    return;
  }
  let p = particles_in[i];
  let position = p.pos_species.xyz;
  let species = p.pos_species.w;
  let forward = safe_normalize(p.vel_id.xyz);
  let side = safe_normalize(cross(forward, vec3f(0.37, 0.71, 0.13)));
  let up = safe_normalize(cross(side, forward));
  let left = sample_field(position + side * config.sensor_distance);
  let right = sample_field(position - side * config.sensor_distance);
  let upper = sample_field(position + up * config.sensor_distance);
  let steer = (left - right + (species - 1.0) * 0.025) * config.turn;
  let lift = (upper - (left + right) * 0.5) * config.turn * 0.35;
  let velocity = safe_normalize(forward + side * steer + up * lift);
  let next = position + velocity * config.speed * config.dt;
  let wrapped = vec3f(
    wrap_f(next.x, f32(config.width)),
    wrap_f(next.y, f32(config.height)),
    wrap_f(next.z, f32(config.depth))
  );
  particles_out[i].pos_species = vec4f(wrapped, species);
  particles_out[i].vel_id = vec4f(velocity, p.vel_id.w);
}
`,Ae=`
${Oe}

@group(0) @binding(0) var<storage, read> particles_in: array<Particle>;
@group(0) @binding(1) var<storage, read> field_in: array<f32>;
@group(0) @binding(2) var<storage, read_write> field_out: array<f32>;
@group(0) @binding(3) var<uniform> config: Config;

fn wrap_i(value: i32, size: u32) -> u32 {
  let s = i32(size);
  return u32(((value % s) + s) % s);
}

fn index_xyz(x: i32, y: i32, z: i32) -> u32 {
  let ix = wrap_i(x, config.width);
  let iy = wrap_i(y, config.height);
  let iz = wrap_i(z, config.depth);
  return (iz * config.height + iy) * config.width + ix;
}

fn periodic_delta(a: f32, b: f32, size: f32) -> f32 {
  var delta = a - b;
  delta = delta - round(delta / size) * size;
  return delta;
}

@compute @workgroup_size(64)
fn deposit_diffuse_field(@builtin(global_invocation_id) gid: vec3u) {
  let flat = gid.x;
  let voxel_count = config.width * config.height * config.depth;
  if (flat >= voxel_count) {
    return;
  }
  let x = flat % config.width;
  let y = (flat / config.width) % config.height;
  let z = flat / (config.width * config.height);
  let center = field_in[flat];
  let neighbors =
    field_in[index_xyz(i32(x) - 1, i32(y), i32(z))] +
    field_in[index_xyz(i32(x) + 1, i32(y), i32(z))] +
    field_in[index_xyz(i32(x), i32(y) - 1, i32(z))] +
    field_in[index_xyz(i32(x), i32(y) + 1, i32(z))] +
    field_in[index_xyz(i32(x), i32(y), i32(z) - 1)] +
    field_in[index_xyz(i32(x), i32(y), i32(z) + 1)];
  var value = max(0.0, (1.0 - 6.0 * config.diffusion) * center + config.diffusion * neighbors) * (1.0 - config.decay);
  let voxel = vec3f(f32(x) + 0.5, f32(y) + 0.5, f32(z) + 0.5);
  let radius2 = config.deposit_radius * config.deposit_radius;
  let sigma2 = 2.0 * config.sigma * config.sigma;
  for (var i = 0u; i < config.particle_count; i = i + 1u) {
    let particle = particles_in[i].pos_species.xyz;
    let dx = periodic_delta(voxel.x, particle.x, f32(config.width));
    let dy = periodic_delta(voxel.y, particle.y, f32(config.height));
    let dz = periodic_delta(voxel.z, particle.z, f32(config.depth));
    let d2 = dx * dx + dy * dy + dz * dz;
    if (d2 <= radius2) {
      value = value + config.deposit_mass * exp(-d2 / sigma2);
    }
  }
  field_out[flat] = value;
}
`,je=2160,Me=1080;function Ne(e){return Math.round(Math.min(je,Math.max(360,Number.isFinite(e)?e:Me))/120)*120}function Pe(e,t,n){let r=e.getBoundingClientRect(),i=Math.max(1,r.width||e.clientWidth||e.width||1),a=Math.max(1,r.height||e.clientHeight||e.height||1),o=Math.max(1,window.devicePixelRatio||1),s=i<=8||a<=8,c=n&&n>0?n:i/a,l=s&&!(n&&n>0)?Math.max(1,Math.round(a*o)):Ne(t),u=s&&!(n&&n>0)?Math.max(1,Math.round(i*o)):Math.max(1,Math.round(l*c));return e.width!==u&&(e.width=u),e.height!==l&&(e.height=l),[u,l]}var F={seed:3405691582,simulationSpeed:1,width:64,height:64,depth:64,particleCount:8192,dt:1,sensorGain:1.369,sensorAngle:-.141,sensorDistance:1.013,mutationScale:.095,globalForceMult:.94,drag:.125,strafePower:.169,strafeMomentum:0,axialForce:.022,lateralForce:-.186,hazardRate:0,trailPersistence:.943,trailDiffusion:1,depositRadius:.07,depositTapRadius:2,depositMass:.78,sigma:.024,pulseDepth:0,pulseRate:1,restlessness:0,cohorts:6,ruleSeed:.6633918167161669,hueSensitivity:.5,colorByCohort:!0,symmetryAxes:2,absoluteOrientation:1,orientationMix:0,initialConditions:0,boundaryMode:2,domainShape:0,rule:[],recycleCutoff:0,recycleEnabled:!1,mips:0,anisoFollow:0,flockAlign:0,flockSeparate:0,chemotaxis:0,quorumStrength:0,quorumThreshold:.5,leniaStrength:0,leniaCenter:.15,leniaWidth:.015,speciesForce:0,predator:0,alarm:0,grayScott:0,gsFeed:.037,gsKill:.06,energy:0,energyDrain:.5},Fe={densitySum:0,flowSum:0,nonzeroVoxels:0,maxDensity:0,maxDensitySignal:0,densitySignalMean:0,densitySignalP90:0},Ie=8,Le=256,Re=32,ze=256,Be=`rgba16float`,Ve=`rgba16float`,He=`rgba16float`,Ue=128,We=32,Ge=24e4,Ke=48,qe=512,Je=260,Ye=new Uint32Array([4,0,0,0]);function Xe(e){let t=(e&32768)>>15,n=(e&31744)>>10,r=e&1023;return n===0?(t?-1:1)*2**-14*(r/1024):n===31?r?NaN:t?-1/0:1/0:(t?-1:1)*2**(n-15)*(1+r/1024)}var Ze=class e{device;context;format;canvasColor;config=F;audioLevels={low:0,mid:0,high:0};colorBlendFromMode=0;colorBlendToMode=0;colorBlend=1;colorBlendLastMs=0;particleChunks=[];fieldBuffers=[];visualFieldBuffers=[];brushBuffer;ruleBuffer;simUniformBuffer;chunkSimUniformBuffers=[];renderUniformBuffer;fogRenderUniformBuffer;particleSupportGridBuffer;particleSupportGridSize=Ue;clearBrushPipeline;initParticlePipeline;depositPipeline;visualDepositPipeline;updatePipeline;trailBuffer;ribbonUniformBuffer;trailAppendPipeline;ribbonRenderPipeline;ribbonFrame=0;fieldPipeline;fieldTexturePipeline;particleSupportClearPipeline;particleSupportBuildPipeline;particleSupportResolvePipeline;cutoffPrepassPipeline;fieldRenderPipeline;fieldFogRenderPipeline;fogCompositePipeline;postPipeline;postNoBloomPipeline;bloomPrefilterPipeline;bloomDownsamplePipeline;bloomUpsamplePipeline;densitySmallPipeline;densityLargePipeline;densityCompositePipeline;accumulationSplatPipeline;accumulationCompositePipeline;volumeDensityClearPipeline;volumeDensityDepositPipeline;volumeDensityResolvePipeline;volumeDensityBlurXPipeline;volumeDensityBlurYPipeline;volumeDensityBlurZPipeline;volumeDensityDownsamplePipeline;volumeDensityBlurXHalfPipeline;volumeDensityBlurYHalfPipeline;volumeDensityBlurZHalfPipeline;volumeDensityRenderPipeline;bloomTextures=[];postUniformBuffer;sceneTexture;sceneTextureSize=[0,0];finalTexture;finalTextureSize=[0,0];captureFinalHDR=!1;hdrCaptureHeadroom=3;aspectOverride=0;postSampler;densitySmallTexture;densityLargeTexture;densityEmptyFogTexture;densityTextureSize=[0,0];densitySampler;densitySplatBindGroups=[];densityCompositeBindGroup;densityCompositeFogTexture;accumulationCurrentTexture;accumulationHistoryTextures=[];accumulationTextureSize=[0,0];accumulationSampler;accumulationSplatBindGroups=[];accumulationHistoryReadIndex=0;accumulationHistoryKey=``;accumulationHistoryPrepared=!1;volumeDensityAccumBuffer;volumeDensitySmallBuffer;volumeDensityBlurTempBuffer;volumeDensityLargeBuffer;volumeDensitySmallTexture;volumeDensityLargeTexture;volumeDensitySmallHalfBuffer;volumeDensityBlurTempHalfBuffer;volumeDensityLargeHalfBuffer;volumeDensityLargeTextureHalf;volumeDensitySampler;volumeDensityResourceSize=[0,0,0];volumeDensityClearBindGroup;volumeDensityDepositBindGroups=[];volumeDensityResolveBindGroup;volumeDensityBlurXBindGroup;volumeDensityBlurYBindGroup;volumeDensityBlurZBindGroup;volumeDensityDownsampleBindGroup;volumeDensityBlurXHalfBindGroup;volumeDensityBlurYHalfBindGroup;volumeDensityBlurZHalfBindGroup;volumeDensityRenderBindGroup;volumeDensityRenderHalfBindGroup;volumeDensityPreparedKey=``;volumeDensityPrepared=!1;particleRenderPipelines={};particleFastRenderPipelines={};splatPreparePipeline;splatDrawPipelines={};splatPrepareBindGroups=[];splatDrawBindGroups={};splatAccumPipeline;splatResolvePipeline;splatAccumBuffer;splatAccumBindGroups=[];splatResolveBindGroup;updateTexturePipeline;updateTextureBindGroups=[];ecologyFieldBuffer;ecologyBrushBuffer;ecologyDepositPipeline;ecologyUpdatePipeline;ecologyParticlePipeline;ecologyClearBindGroup;ecologyUpdateBindGroup;ecologyDepositBindGroups=[];ecologyParticleBindGroups=[];fieldSimSampler;visualFieldSmoothPipeline;float32FilterableSupported=!1;sortHistogramPipeline;sortScanPipeline;sortScatterPipeline;sortApplyPipeline;sortHistBuffer;sortHistBindGroups=[];sortScanBindGroup;sortScatterBindGroups=[];sortApplyBindGroups=[];ribbonsActive=!1;fieldTextureDirty=!1;particleRenderBindGroupLayout;overlayPipeline;timestampQueriesSupported=!1;timestampQuerySet;timestampResolveBuffer;timestampReadBuffer;timestampFrame=0;lastGpuPassTimings=null;clearBindGroup;particleInitializationPending=!1;depositBindGroups=[];visualDepositBindGroups=[];updateBindGroups=[];particleSupportClearBindGroup;particleSupportBuildBindGroups=[];particleSupportResolveBindGroups=[];fieldBindGroups=[];visualFieldBindGroups=[];fieldTextureBindGroups=[];fieldRenderBindGroups=[];particleRenderBindGroups={};overlayBindGroup;fieldTexture;fieldTextureSampler;fogCurrentTexture;fogHistoryTextures=[];fogSampler;fogTextureSize=[0,0];fogHistoryReadIndex=0;lastFogHistoryView;fogHistoryResetFrames=0;readIndex=0;writeIndex=1;visualFieldReadIndex=0;timestep=0;simulationTime=0;simStepAccumulator=0;renderLerpT=1;visualFieldLerpT=0;visualFieldPrepared=!1;visualFieldActiveLastFrame=!1;renderFrame=0;failed=!1;renderValidationChecked=!1;lastFieldStats=Fe;targetParticleDensityReference=0;smoothedParticleDensityReference=0;fieldStatsReadPending=!1;fieldStatsReadGeneration=0;ruleEvidence=zt(F);async reset(){await this.waitForSubmittedWorkDone(),this.destroyBuffers(),this.timestep=0,this.simulationTime=0,this.simStepAccumulator=0,this.morphStepsRemaining=0,this.renderLerpT=1,this.visualFieldLerpT=0,this.renderFrame=0,this.readIndex=0,this.writeIndex=1,this.visualFieldReadIndex=0,this.visualFieldPrepared=!1,this.visualFieldActiveLastFrame=!1,this.renderValidationChecked=!1,this.lastFieldStats=Fe,this.targetParticleDensityReference=0,this.smoothedParticleDensityReference=0,this.fieldStatsReadPending=!1,this.fieldStatsReadGeneration+=1,this.timestampFrame=0,this.lastGpuPassTimings=null,this.lastFogHistoryView=void 0,this.fogHistoryResetFrames=0}async waitForSubmittedWorkDone(){let e=this.device?.queue;if(e)try{await e.onSubmittedWorkDone()}catch{}}recover(){this.destroyDeviceResources(),this.context=void 0,this.format=void 0,this.canvasColor=void 0,this.failed=!1,this.timestep=0,this.simulationTime=0,this.simStepAccumulator=0,this.renderLerpT=1,this.renderFrame=0,this.readIndex=0,this.writeIndex=1,this.renderValidationChecked=!1,this.lastFieldStats=Fe,this.targetParticleDensityReference=0,this.smoothedParticleDensityReference=0,this.fieldStatsReadPending=!1,this.fieldStatsReadGeneration+=1,this.timestampFrame=0,this.lastGpuPassTimings=null,this.lastFogHistoryView=void 0,this.fogHistoryResetFrames=0}get currentTimestep(){return this.timestep}async advanceSteps(e,t,n){if(n<=0)return;await this.ensureInitialized(e,t),await this.ensureEcologyResources();let r=this.device;for(let e=0;e<n;e+=1){let e=r.createCommandEncoder();this.shouldSortAtCurrentStep()&&this.encodeSortPass(e),this.encodeStepPasses(e,!1,1),r.queue.submit([e.finish()]),[this.readIndex,this.writeIndex]=[this.writeIndex,this.readIndex],this.timestep+=1,this.simulationTime+=1}this.simStepAccumulator=0,this.renderLerpT=1,await r.queue.onSubmittedWorkDone()}resetPipelines(){this.clearBrushPipeline=void 0,this.initParticlePipeline=void 0,this.depositPipeline=void 0,this.visualDepositPipeline=void 0,this.updatePipeline=void 0,this.ecologyDepositPipeline=void 0,this.ecologyUpdatePipeline=void 0,this.ecologyParticlePipeline=void 0,this.ecologyClearBindGroup=void 0,this.ecologyUpdateBindGroup=void 0,this.ecologyDepositBindGroups=[],this.ecologyParticleBindGroups=[],this.trailAppendPipeline=void 0,this.ribbonRenderPipeline=void 0,this.fieldPipeline=void 0,this.fieldTexturePipeline=void 0,this.particleSupportClearPipeline=void 0,this.particleSupportBuildPipeline=void 0,this.particleSupportResolvePipeline=void 0,this.cutoffPrepassPipeline=void 0,this.fieldRenderPipeline=void 0,this.fieldFogRenderPipeline=void 0,this.fogCompositePipeline=void 0,this.postNoBloomPipeline=void 0,this.bloomPrefilterPipeline=void 0,this.bloomDownsamplePipeline=void 0,this.bloomUpsamplePipeline=void 0,this.densitySmallPipeline=void 0,this.densityLargePipeline=void 0,this.densityCompositePipeline=void 0,this.accumulationSplatPipeline=void 0,this.accumulationCompositePipeline=void 0,this.densitySplatBindGroups=[],this.accumulationSplatBindGroups=[],this.densityCompositeBindGroup=void 0,this.densityCompositeFogTexture=void 0,this.volumeDensityClearPipeline=void 0,this.volumeDensityDepositPipeline=void 0,this.volumeDensityResolvePipeline=void 0,this.volumeDensityBlurXPipeline=void 0,this.volumeDensityBlurYPipeline=void 0,this.volumeDensityBlurZPipeline=void 0,this.volumeDensityDownsamplePipeline=void 0,this.volumeDensityBlurXHalfPipeline=void 0,this.volumeDensityBlurYHalfPipeline=void 0,this.volumeDensityBlurZHalfPipeline=void 0,this.volumeDensityRenderPipeline=void 0,this.postPipeline=void 0,this.particleRenderPipelines={},this.particleFastRenderPipelines={},this.splatPreparePipeline=void 0,this.splatDrawPipelines={},this.splatPrepareBindGroups=[],this.splatDrawBindGroups={},this.splatAccumPipeline=void 0,this.splatResolvePipeline=void 0,this.splatAccumBindGroups=[],this.splatResolveBindGroup=void 0,this.updateTexturePipeline=void 0,this.updateTextureBindGroups=[],this.visualFieldSmoothPipeline=void 0,this.sortHistogramPipeline=void 0,this.sortScanPipeline=void 0,this.sortScatterPipeline=void 0,this.sortApplyPipeline=void 0,this.sortHistBindGroups=[],this.sortScanBindGroup=void 0,this.sortScatterBindGroups=[],this.sortApplyBindGroups=[],this.particleRenderBindGroupLayout=void 0,this.overlayPipeline=void 0,this.clearBindGroup=void 0,this.particleInitializationPending=!1,this.depositBindGroups=[],this.visualDepositBindGroups=[],this.updateBindGroups=[],this.particleSupportClearBindGroup=void 0,this.particleSupportBuildBindGroups=[],this.particleSupportResolveBindGroups=[],this.fieldBindGroups=[],this.visualFieldBindGroups=[],this.fieldTextureBindGroups=[],this.fieldRenderBindGroups=[],this.particleRenderBindGroups={},this.densitySplatBindGroups=[],this.overlayBindGroup=void 0,this.destroyDensityTextures(),this.destroyAccumulationTextures(),this.destroyVolumeDensityResources(),this.destroyFogTextures()}setAudioLevels(e,t,n){this.audioLevels.low=e,this.audioLevels.mid=t,this.audioLevels.high=n}async render(e,t,n,r,i=F,a=!1){let o=performance.now(),s=performance.now(),c=Pe(e,t.rayResolution,this.aspectOverride),l=c[1]/je,u={resizeMs:performance.now()-s,ensureMs:0,encodeStepMs:0,clearBrushEncodeMs:0,depositEncodeMs:0,particleUpdateEncodeMs:0,fieldUpdateEncodeMs:0,visualSmoothEncodeMs:0,renderPassEncodeMs:0,submitMs:0,gpuQueueWaitMs:0,timestampReadMs:0,gpuPassMs:this.lastGpuPassTimings,statsReadMs:0};if(this.failed)throw Error(`live WebGPU renderer previously failed`);let d=performance.now();await this.ensureInitialized(e,i),r&&await this.ensureEcologyResources(),u.ensureMs=performance.now()-d;let f=t.renderLayer,p=this.device,m=this.context;r&&(this.renderFrame+=1),this.timestampFrame+=1;let h=t.renderLayer===`both`||t.renderLayer===`trails`,g=t.renderLayer===`volume-density`,_=t.renderLayer===`accumulation`,v=t.renderLayer===`both`||t.renderLayer===`density`,y=t.densityPassStrength>0&&v,b=h&&t.fogTemporal&&t.fogTemporalBlend>0,x=g&&t.densityPassStrength>0,S=_,C=g&&t.densityPassStrength>0&&this.shouldRebuildVolumeDensity(t,r),w=this.usesParticleSupportCompaction(t),ee=t.renderLayer!==`particles`,T=a&&this.timestampQueriesSupported&&!!this.timestampQuerySet&&this.shouldSampleTimestamps(r),te=y?6:0,E=w?6:0,ne=h?(b?6:4)+te:x?r||C?14:2:S?4:y?8:2,re=r?8:0,D=re+E,ie=D+ne,ae=(r?8:0)+E+ne+2,oe=!this.renderValidationChecked;oe&&p.pushErrorScope(`validation`);let se=0,O=0,k=[];if(r){let e=this.stepSimulation(T);se=e.steps,O=e.timeAdvance,k=e.stepScales;let{steps:t,stepScales:n,timeAdvance:r,...i}=e;Object.assign(u,i)}let A=p.createCommandEncoder();t.ribbonFraction>1e-4&&this.ribbonRenderPipeline&&(this.ensureTrailBuffer(),r&&se>0&&(this.ribbonFrame+=1),this.writeRibbonUniform(t),r&&se>0&&this.encodeRibbonAppend(A));let j=r&&this.shouldUseVisualFieldSmoothing(t),ce=j?this.renderLerpT:1,M=j&&se>0,le=it(this.readIndex,this.writeIndex,M),N=j&&this.visualFieldActiveLastFrame&&this.visualFieldPrepared&&!M&&ce>=this.visualFieldLerpT,ue=j&&!N,de=j?Math.max(0,ue?ce:ce-this.visualFieldLerpT):0;j?(u.visualSmoothEncodeMs=this.encodeVisualFieldSmoothing(A,ue,le,de,ce),this.visualFieldLerpT=ce,this.visualFieldActiveLastFrame=!0):(this.visualFieldLerpT=0,this.visualFieldActiveLastFrame=!1);let fe=j?this.visualFieldBuffers[this.visualFieldReadIndex]:this.fieldBuffers[this.readIndex],pe=r?ee?j?this.renderLerpT:0:this.renderLerpT:1,me=L(this.readIndex,pe),he=t.fieldTextureSampling&&h&&!j;he&&(r||p.queue.writeBuffer(this.simUniformBuffer,0,nt(this.config,this.timestep,0)),this.encodeFieldTextureUpdate(A));let ge=h?lt(t.fogRenderScale,.25,1):1,_e=Math.max(1,Math.round(e.width*ge)),ve=Math.max(1,Math.round(e.height*ge)),ye=h?dt(t.raySteps*t.fogStepScale):t.raySteps;(b?this.shouldResetFogHistory(t,_e,ve,ye,he):this.clearFogHistoryView())&&(this.fogHistoryResetFrames=Math.max(this.fogHistoryResetFrames,12));let be=b&&this.fogHistoryResetFrames>0,xe=b&&!be?t.fogTemporalBlend:0,Se=t.fogBlueNoise&&xe>0?this.renderFrame:0,Ce=this.advanceParticleDensityReference(),we=i.colorByCohort?0:i.hueSensitivity,Te=pt(t.particleColorMode),Ee=this.resolveColorBlend(Te),De={resolution:[e.width,e.height],dimensions:[this.config.width,this.config.height,this.config.depth],particleCount:this.config.particleCount,voxelCount:this.voxelCount(),timestep:this.timestep,density:t.density,exposure:t.exposure,focusDistance:t.focusDistance,aperture:t.aperture,focalK:1/Math.tan(lt(t.fov,10,170)*Math.PI/360),dofBlur:t.dofBlur,dofDebug:+!!t.dofDebug,dofEnabled:+!!t.dofEnabled,renderLerpT:pe,sceneBrightness:t.sceneBrightness,overlay:+!!n,palette:t.palette===`aurora`?0:t.palette===`ember`?1:2,filament:t.filament,yaw:t.cameraYaw,pitch:t.cameraPitch,yawCos:Math.cos(t.cameraYaw),yawSin:Math.sin(t.cameraYaw),pitchCos:Math.cos(t.cameraPitch),pitchSin:Math.sin(t.cameraPitch),distance:t.cameraDistance,raySteps:t.raySteps,fogStepScale:t.fogStepScale,fogTemporalBlend:xe,fogBlueNoise:+!!t.fogBlueNoise,fogFrame:Se,fieldTextureMode:+!!he,emptySpaceSkip:+!!t.emptySpaceSkipping,emptySpaceThreshold:t.emptySpaceThreshold,emptySpaceStride:t.emptySpaceStride,particleSizePx:t.particleSizePx*l,particleMinPx:t.particleMinPx*l,particleMaxPx:t.particleMaxPx*l,particleOpacity:t.particleOpacity,particleBrightness:t.particleBrightness,particleColorMode:Te,particleColorModeFrom:Ee.from,particleColorBlend:Ee.blend,particleCutoffPrepass:+!!t.particleCutoffPrepass,particleVelocityStretch:+!!t.particleVelocityStretch,particleStretch:t.particleStretch,particleStretchMin:t.particleStretchMin,particleStretchSpeed:t.particleStretchSpeed,particleSpeedCutoff:t.particleSpeedCutoff,particleSlowCutoff:t.particleSlowCutoff,particleGlowCore:t.particleGlowCore,particleHotCore:t.particleHotCore,particleExponent:t.particleExponent,particleBrightnessBoost:t.particleBrightnessBoost,particleSupportSmoothing:t.particleSupportSmoothing,particleHazeCull:t.particleHazeCull,particleGradientSensitivity:we,cohorts:i.cohorts,domainShape:i.domainShape,particleBlendMode:gt(t.particleBlendMode),particleDensityCutoff:t.particleDensityCutoff,particleDensityRadius:t.particleDensityRadius,particleDensityNormalize:t.particleDensityNormalize,particleDensitySoftness:t.particleDensitySoftness,particleDensityReference:Ce,particleSupportMask:t.particleSupportMask,particleSupportRadius:t.particleSupportRadius,particleSupportNeighbors:t.particleSupportNeighbors,particleSupportFlow:t.particleSupportFlow,particleSupportGridSize:this.particleSupportGridSize,trailOpacity:t.trailOpacity,fogBrightness:t.fogBrightness,trailThreshold:t.trailThreshold,renderLayer:ct(t.renderLayer),trailColorMode:ft(t.trailColorMode),cameraPanX:t.cameraPanX,cameraPanY:t.cameraPanY,fogTint:mt(t.fogTint),particleTint:mt(t.particleTint),densityPassStrength:t.densityPassStrength,densitySmallScale:t.densitySmallScale,densityLargeScale:t.densityLargeScale,densityLargeThreshold:t.densityLargeThreshold,densityContrastGain:t.densityContrastGain,densityContrastBalance:t.densityContrastBalance,densityEmissionPower:t.densityEmissionPower,densityOcclusion:t.densityOcclusion,accumulationStrength:t.accumulationStrength,accumulationRadius:t.accumulationRadius,accumulationCurve:t.accumulationCurve,accumulationMemory:t.accumulationMemory,accumulationNoiseReject:t.accumulationNoiseReject,variationMaster:t.variationMaster,variationTime:this.renderFrame/60,variationDrift:t.variationDrift,variationNoiseMix:t.variationNoiseMix,variationFreq:t.variationFreq,variationOctaves:t.variationOctaves,variationGain:t.variationGain,variationLacunarity:t.variationLacunarity,variationSizeAmount:t.variationSizeAmount,variationSizeCurve:t.variationSizeCurve,variationSizeMin:t.variationSizeMin,variationSizeMax:t.variationSizeMax,variationBrightAmount:t.variationBrightAmount,variationBrightCurve:t.variationBrightCurve,variationBrightMin:t.variationBrightMin,variationBrightMax:t.variationBrightMax,variationOpacityAmount:t.variationOpacityAmount,variationOpacityCurve:t.variationOpacityCurve,variationOpacityMin:t.variationOpacityMin,variationOpacityMax:t.variationOpacityMax,variationColorAmount:t.variationColorAmount,variationColorCurve:t.variationColorCurve,variationColorMin:t.variationColorMin,variationColorMax:t.variationColorMax,audioLow:this.audioLevels.low,audioMid:this.audioLevels.mid,audioHigh:this.audioLevels.high},P={...De,resolution:[_e,ve],raySteps:ye};p.queue.writeBuffer(this.renderUniformBuffer,0,st(De)),p.queue.writeBuffer(this.fogRenderUniformBuffer,0,st(P));let Oe=performance.now();this.encodeParticleSupportMask(A,t,me,T&&w?re:void 0),this.encodeCutoffPrepass(A,t,fe),this.encodeSplatPrepare(A,t);let ke=m.getCurrentTexture(),Ae=ke.createView();this.ensureSceneTexture(e.width,e.height),this.encodeSplatAccumulate(A,t);let Me=this.sceneTexture.createView();if(h){this.ensureFogTextures(_e,ve);let e=1-this.fogHistoryReadIndex,r=A.beginRenderPass({colorAttachments:[{view:this.fogCurrentTexture.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}],...T?{timestampWrites:this.timestampWrites(D,D+1)}:{}});r.setPipeline(this.fieldFogRenderPipeline),r.setBindGroup(0,this.createFieldRenderBindGroup(this.fogRenderUniformBuffer,this.fieldFogRenderPipeline,fe)),r.draw(3),r.end();let i=b?this.fogHistoryTextures[e]:this.fogCurrentTexture;if(b){let t=A.beginRenderPass({colorAttachments:[{view:this.fogHistoryTextures[e].createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}],...T?{timestampWrites:this.timestampWrites(D+2,D+3)}:{}});t.setPipeline(this.fogCompositePipeline),t.setBindGroup(0,this.createFogCompositeBindGroup(this.fogCurrentTexture,this.fogHistoryTextures[this.fogHistoryReadIndex],this.fogRenderUniformBuffer)),t.draw(3),t.end()}let a=A.beginRenderPass({colorAttachments:[{view:Me,clearValue:{r:.004,g:.006,b:.008,a:1},loadOp:`clear`,storeOp:`store`}],...T?{timestampWrites:this.timestampWrites(b?D+4:D+2,b?D+5:D+3)}:{}});a.setPipeline(this.fogCompositePipeline),a.setBindGroup(0,this.createFogCompositeBindGroup(i,i,this.renderUniformBuffer)),a.draw(3),this.drawParticlesAndOverlay(a,t,n,fe),a.end(),this.renderDensityLayer(A,t,i,T&&y?D+(b?6:4):void 0,!1,fe),b&&(this.fogHistoryReadIndex=e),this.fogHistoryResetFrames>0&&--this.fogHistoryResetFrames}else if(_)this.renderAccumulationLayer(A,t,n,T&&S?D:void 0);else if(g)this.renderVolumeDensityLayer(A,t,n,C,T?D:void 0);else{let e=A.beginRenderPass({colorAttachments:[{view:Me,clearValue:{r:.004,g:.006,b:.008,a:1},loadOp:`clear`,storeOp:`store`}],...T?{timestampWrites:this.timestampWrites(D,D+1)}:{}});t.renderLayer!==`particles`&&t.renderLayer!==`density`&&t.renderLayer!==`volume-density`&&t.renderLayer!==`accumulation`&&(e.setPipeline(this.fieldRenderPipeline),e.setBindGroup(0,this.createFieldRenderBindGroup(this.renderUniformBuffer,this.fieldRenderPipeline,fe)),e.draw(t.renderLayer===`debug-voxels`?this.voxelCount()*6:3)),this.drawParticlesAndOverlay(e,t,n,fe),e.end(),this.renderDensityLayer(A,t,void 0,T&&y?D+2:void 0,!1,fe)}let Ne=t.bloomStrength>1e-4,Fe=!Ne&&t.fastNoBloomPost,Le=Ne?this.bloomTextures:[],Re=at(Le.length,t.bloomRadius);if(p.queue.writeBuffer(this.postUniformBuffer,0,ot({bloomStrength:t.bloomStrength,bloomThreshold:t.bloomThreshold,bloomRadius:t.bloomRadius,colorSaturation:t.colorSaturation,colorContrast:t.colorContrast,tint:[1,1,1],levelCount:Le.length,weights:Re,chromaticAberration:t.chromaticAberration,vignetteStrength:t.vignetteStrength,vignetteSoftness:t.vignetteSoftness,streakStrength:t.streakStrength,streakLength:t.streakLength,streakVertical:t.streakVertical,flareHeight:t.flareHeight,flareCutoff:t.flareCutoff,despeckle:t.particleDespeckle,hdrGain:this.captureFinalHDR?Math.max(1e-4,this.hdrCaptureHeadroom):0})),Ne&&Le.length>0){let e=A.beginRenderPass({colorAttachments:[{view:Le[0].createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}]});e.setPipeline(this.bloomPrefilterPipeline),e.setBindGroup(0,this.createBloomBindGroup(this.bloomPrefilterPipeline,this.sceneTexture)),e.draw(3),e.end();for(let e=0;e<Le.length-1;e+=1){let t=A.beginRenderPass({colorAttachments:[{view:Le[e+1].createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}]});t.setPipeline(this.bloomDownsamplePipeline),t.setBindGroup(0,this.createBloomBindGroup(this.bloomDownsamplePipeline,Le[e])),t.draw(3),t.end()}}let ze=A.beginRenderPass({colorAttachments:[{view:Ae,clearValue:{r:0,g:0,b:0,a:1},loadOp:`clear`,storeOp:`store`}],...T?{timestampWrites:this.timestampWrites(ie,ie+1)}:{}});ze.setPipeline(Fe?this.postNoBloomPipeline:this.postPipeline),ze.setBindGroup(0,Fe?this.createPostNoBloomBindGroup(this.sceneTexture):this.createPostBindGroup(this.sceneTexture,Le)),ze.draw(3),ze.end(),this.captureFinalHDR&&(this.ensureFinalTexture(ke.width,ke.height),A.copyTextureToTexture({texture:ke},{texture:this.finalTexture},{width:ke.width,height:ke.height})),u.renderPassEncodeMs=performance.now()-Oe,T&&(A.resolveQuerySet(this.timestampQuerySet,0,ae,this.timestampResolveBuffer,0),A.copyBufferToBuffer(this.timestampResolveBuffer,0,this.timestampReadBuffer,0,ae*BigUint64Array.BYTES_PER_ELEMENT));let Be=performance.now();p.queue.submit([A.finish()]),u.submitMs=performance.now()-Be;let Ve=performance.now()-o;if(a){let e=performance.now();await p.queue.onSubmittedWorkDone(),u.gpuQueueWaitMs=performance.now()-e}let He=performance.now()-o;if(T){let e=performance.now();this.lastGpuPassTimings=await this.readGpuPassTimings(r,h,b,x,C,y,S,w),u.gpuPassMs=this.lastGpuPassTimings,u.timestampReadMs=performance.now()-e}if(oe){this.renderValidationChecked=!0;let e=await p.popErrorScope();if(e)throw Error(`live WebGPU render validation failed: ${e.message}`)}let Ue=t.particleDensityNormalize>1e-4&&this.usesParticleSplatLayer(t),We=Ue?this.config.particleCount>=1048576?96:this.config.particleCount>=262144?48:16:this.config.particleCount>=1048576?512:this.config.particleCount>=262144?128:this.config.particleCount>=16384?64:16,Ge=Ue&&Ce<=0,Ke=(Ue||t.renderLayer!==`particles`)&&this.lastFieldStats.nonzeroVoxels<=0,qe=Ue||t.renderLayer!==`particles`;if(!a&&r&&(Ge||Ke&&this.timestep<=2||qe&&this.timestep%We===0)){let e=performance.now();this.scheduleFieldStatsRead(),u.statsReadMs=performance.now()-e}return{renderer:`webgpu-live-3d`,webgpu:!0,rulePort:`fluoddity-core-fourier`,fieldKind:`vector-volume`,adaptation:`two-plane-3d`,renderMode:t.renderLayer===`debug-voxels`?`debug-voxel-splats`:t.renderLayer===`density`?`screen-space-density`:t.renderLayer===`volume-density`?`volume-density-raymarch`:t.renderLayer===`accumulation`?`accumulation`:t.renderLayer===`particles`?`particle-splats`:`volume-raymarch+particle-splats`,depositMode:`particle-atomic-fixed-point`,particleColorModel:t.particleColorMode,particleSizeModel:`perspective-3d`,trailColorMode:t.trailColorMode,sceneBrightness:t.sceneBrightness,particleBrightness:t.particleBrightness,fogBrightness:t.fogBrightness,particleVelocityStretch:t.particleVelocityStretch,particleStretch:t.particleStretch,particleStretchMin:t.particleStretchMin,particleStretchSpeed:t.particleStretchSpeed,particleSpeedCutoff:t.particleSpeedCutoff,particleSlowCutoff:t.particleSlowCutoff,particleGradientSensitivity:we,simulationSpeed:i.simulationSpeed,simulationTime:this.simulationTime,simulationTimeAdvance:O,simulationStepScales:k,depositTaps:(this.config.depositTapRadius*2+1)**3,depositScale:Lt(this.config),sensorModel:`fluoddity-core-two-sensor-two-plane-3d`,pheromoneModel:`vector-current-density-volume`,particleCount:this.config.particleCount,voxelCount:this.voxelCount(),particleBufferBytes:this.config.particleCount*Ie*Float32Array.BYTES_PER_ELEMENT,fieldBufferBytes:this.voxelCount()*4*Float32Array.BYTES_PER_ELEMENT,requestedRenderLayer:f,effectiveRenderLayer:t.renderLayer,deviceLimits:{maxBufferSize:p.limits.maxBufferSize,maxStorageBufferBindingSize:p.limits.maxStorageBufferBindingSize},particleBlendMode:t.particleBlendMode,particleDensityCutoff:t.particleDensityCutoff,particleDensityRadius:t.particleDensityRadius,particleDensityNormalize:t.particleDensityNormalize,particleDensitySoftness:t.particleDensitySoftness,particleDensityReference:Ce,particleDensityReferenceTarget:this.targetParticleDensityReference,statsReadPending:this.fieldStatsReadPending,particleSupportMask:t.particleSupportMask,particleSupportRadius:t.particleSupportRadius,particleSupportNeighbors:t.particleSupportNeighbors,particleSupportFlow:t.particleSupportFlow,particleSupportGridSize:this.particleSupportGridSize,particleSupportSourceBufferIndex:me,fastParticleRender:this.usesFastParticlePipeline(t),cutoffPrepassActive:this.usesCutoffPrepass(t),densityLargeHalfResActive:t.densityLargeHalfRes&&t.renderLayer===`volume-density`,splatPath:this.usesComputeSplat(t)?`compute`:this.usesPreparedSplatPath(t)?`prepared`:`classic`,lastSortTimestep:this.lastSortTimestep,fastNoBloomPost:Fe,timestep:this.timestep,renderFrame:this.renderFrame,renderLerpT:pe,visualFieldSmoothing:j,visualFieldStepScale:de,visualFieldCorrection:0,visualFieldPhaseReset:M,visualFieldSourceBufferIndex:le,fogNoiseFrame:Se,frameTimeMs:He,cpuFrameTimeMs:Ve,profileGpu:a,timestampQueries:this.timestampQueriesSupported,timings:u,renderResolution:c,particleResolutionScale:l,canvasColor:this.canvasColor,raySteps:t.raySteps,effectiveFogSteps:ye,fogTemporal:b,fogRenderScale:ge,fogTemporalBlend:xe,fogHistoryReset:be,fieldTextureSampling:he,emptySpaceSkipping:t.emptySpaceSkipping,emptySpaceThreshold:t.emptySpaceThreshold,emptySpaceStride:t.emptySpaceStride,dimensions:[this.config.width,this.config.height,this.config.depth],fieldStats:this.lastFieldStats,ruleEvidence:this.ruleEvidence,camera:{yaw:t.cameraYaw,pitch:t.cameraPitch,distance:t.cameraDistance,panX:t.cameraPanX,panY:t.cameraPanY}}}morphStepsRemaining=0;async ensureInitialized(e,t){if(!navigator.gpu)throw this.failed=!0,Error(`navigator.gpu unavailable`);let n=this.config;if(n!==t&&JSON.stringify(n)!==JSON.stringify(t)&&(this.config=t,this.ruleEvidence=zt(t),vt(n,t)?await this.reset():(this.particleChunks.length>0&&n.initialConditions!==t.initialConditions&&(this.morphStepsRemaining=bt),this.ruleBuffer&&!Ot(n.rule,t.rule)&&this.device.queue.writeBuffer(this.ruleBuffer,0,_t(t.rule)))),!this.device){let e=await ae(navigator.gpu);if(!e)throw this.failed=!0,Error(`No WebGPU adapter`);let t=e.features.has(`timestamp-query`)?[`timestamp-query`]:[];this.timestampQueriesSupported=t.length>0,this.float32FilterableSupported=e.features.has(`float32-filterable`),this.float32FilterableSupported&&t.push(`float32-filterable`);let n={};t.length>0&&(n.requiredFeatures=t),this.device=await e.requestDevice(n)}if(this.timestampQueriesSupported&&!this.timestampQuerySet&&this.createTimestampResources(),!this.context){let t=e.getContext(`webgpu`);if(!t)throw this.failed=!0,Error(`No WebGPU canvas context`);this.context=t}let r=ne(this.context,this.device);this.format&&this.format!==r.format&&this.resetPipelines(),this.format=r.format,this.canvasColor=r,this.particleChunks.length===0&&this.createBuffers(),this.updatePipeline||await this.createPipelines(),this.particleInitializationPending&&this.initializeParticleBuffers()}createBuffers(){let e=this.device,t=new Float32Array(this.voxelCount()*4),n=wt(this.config),r=t.byteLength,i=n>St,a=Dt(e.limits);this.particleSupportGridSize=Et(e.limits),this.particleChunks=[];for(let t=0;t<this.config.particleCount;t+=a){let n=Math.min(a,this.config.particleCount-t),r=wt({particleCount:n});this.particleChunks.push({offset:t,count:n,buffers:[e.createBuffer({size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),e.createBuffer({size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})],supportBuffer:e.createBuffer({size:n*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),cutoffSignalBuffer:e.createBuffer({size:n*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),activeIndexBuffer:e.createBuffer({size:n*Uint32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE}),activeDrawBuffer:e.createBuffer({size:4*Uint32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.INDIRECT|GPUBufferUsage.COPY_DST}),splatRecordBuffer:e.createBuffer({size:n*32,usage:GPUBufferUsage.STORAGE}),sortIdBuffer:e.createBuffer({size:n*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),sortScratchBuffer:e.createBuffer({size:wt({particleCount:n}),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),sortScratchIdBuffer:e.createBuffer({size:n*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),sortMapBuffer:e.createBuffer({size:n*4,usage:GPUBufferUsage.STORAGE})});let i=new Uint32Array(n);for(let e=0;e<n;e+=1)i[e]=t+e;e.queue.writeBuffer(this.particleChunks[this.particleChunks.length-1].sortIdBuffer,0,i)}if(this.fieldBuffers=[e.createBuffer({size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),e.createBuffer({size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})],this.visualFieldBuffers=[e.createBuffer({size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),e.createBuffer({size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})],this.particleSupportGridBuffer=e.createBuffer({size:Tt(this.particleSupportGridSize),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.fieldTexture=e.createTexture({size:{width:this.config.width,height:this.config.height,depthOrArrayLayers:this.config.depth},dimension:`3d`,format:this.fieldTextureFormat(),usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.fieldTextureSampler=e.createSampler({magFilter:`linear`,minFilter:`linear`}),this.fieldSimSampler=e.createSampler({magFilter:`linear`,minFilter:`linear`,addressModeU:`repeat`,addressModeV:`repeat`,addressModeW:`repeat`}),this.brushBuffer=e.createBuffer({size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ruleBuffer=e.createBuffer({size:80*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),i)this.particleInitializationPending=!0;else for(let t of this.particleChunks){let n=kt(this.config,t.offset,t.count);e.queue.writeBuffer(t.buffers[0],0,n),e.queue.writeBuffer(t.buffers[1],0,n)}e.queue.writeBuffer(this.fieldBuffers[0],0,t),e.queue.writeBuffer(this.fieldBuffers[1],0,t),this.fieldTextureDirty=!0,e.queue.writeBuffer(this.visualFieldBuffers[0],0,t),e.queue.writeBuffer(this.visualFieldBuffers[1],0,t),e.queue.writeBuffer(this.ruleBuffer,0,_t(this.config.rule)),this.simUniformBuffer=e.createBuffer({size:Le,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.chunkSimUniformBuffers=this.particleChunks.map(()=>e.createBuffer({size:Le,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),this.renderUniformBuffer=e.createBuffer({size:qe,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.fogRenderUniformBuffer=e.createBuffer({size:qe,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}destroyBuffers(){for(let e of[...this.particleChunks.flatMap(e=>e.buffers),...this.fieldBuffers,...this.visualFieldBuffers])e.destroy();for(let e of this.particleChunks)e.supportBuffer.destroy(),e.cutoffSignalBuffer.destroy(),e.activeIndexBuffer.destroy(),e.activeDrawBuffer.destroy(),e.splatRecordBuffer.destroy(),e.sortIdBuffer.destroy(),e.sortScratchBuffer.destroy(),e.sortScratchIdBuffer.destroy(),e.sortMapBuffer.destroy();this.particleSupportGridBuffer?.destroy(),this.trailBuffer?.destroy(),this.trailBuffer=void 0,this.ribbonUniformBuffer?.destroy(),this.ribbonUniformBuffer=void 0,this.brushBuffer?.destroy(),this.ruleBuffer?.destroy(),this.ecologyFieldBuffer?.destroy(),this.ecologyBrushBuffer?.destroy(),this.ecologyFieldBuffer=void 0,this.ecologyBrushBuffer=void 0,this.ecologyClearBindGroup=void 0,this.ecologyUpdateBindGroup=void 0,this.ecologyDepositBindGroups=[],this.ecologyParticleBindGroups=[],this.simUniformBuffer?.destroy();for(let e of this.chunkSimUniformBuffers)e.destroy();this.renderUniformBuffer?.destroy(),this.fogRenderUniformBuffer?.destroy(),this.destroyFogTextures(),this.destroyAccumulationTextures(),this.destroyVolumeDensityResources(),this.particleChunks=[],this.fieldBuffers=[],this.visualFieldBuffers=[],this.brushBuffer=void 0,this.ruleBuffer=void 0,this.simUniformBuffer=void 0,this.chunkSimUniformBuffers=[],this.renderUniformBuffer=void 0,this.fogRenderUniformBuffer=void 0,this.particleSupportGridBuffer=void 0,this.particleSupportGridSize=Ue,this.clearBindGroup=void 0,this.particleInitializationPending=!1,this.depositBindGroups=[],this.visualDepositBindGroups=[],this.updateBindGroups=[],this.particleSupportClearBindGroup=void 0,this.particleSupportBuildBindGroups=[],this.particleSupportResolveBindGroups=[],this.fieldBindGroups=[],this.visualFieldBindGroups=[],this.fieldTextureBindGroups=[],this.fieldRenderBindGroups=[],this.particleRenderBindGroups={},this.splatPrepareBindGroups=[],this.splatDrawBindGroups={},this.splatAccumBuffer?.destroy(),this.splatAccumBuffer=void 0,this.splatAccumBindGroups=[],this.splatResolveBindGroup=void 0,this.sortHistBuffer?.destroy(),this.sortHistBuffer=void 0,this.sortHistBindGroups=[],this.sortScanBindGroup=void 0,this.sortScatterBindGroups=[],this.sortApplyBindGroups=[],this.particleRenderBindGroupLayout=void 0,this.densitySplatBindGroups=[],this.accumulationSplatBindGroups=[],this.densityCompositeBindGroup=void 0,this.densityCompositeFogTexture=void 0,this.overlayBindGroup=void 0,this.fieldTexture?.destroy(),this.fieldTexture=void 0,this.fieldTextureSampler=void 0,this.fieldSimSampler=void 0,this.updateTextureBindGroups=[],this.fieldStatsReadPending=!1,this.fieldStatsReadGeneration+=1,this.visualFieldReadIndex=0,this.visualFieldLerpT=0,this.visualFieldPrepared=!1,this.visualFieldActiveLastFrame=!1}destroyDeviceResources(){this.destroyBuffers(),this.destroyPostResources(),this.timestampQuerySet?.destroy(),this.timestampResolveBuffer?.destroy(),this.timestampReadBuffer?.destroy(),this.timestampQuerySet=void 0,this.timestampResolveBuffer=void 0,this.timestampReadBuffer=void 0,this.resetPipelines(),this.device?.destroy(),this.device=void 0,this.timestampQueriesSupported=!1}destroyPostResources(){this.sceneTexture?.destroy();for(let e of this.bloomTextures)e.destroy();this.destroyDensityTextures(),this.destroyAccumulationTextures(),this.postUniformBuffer?.destroy(),this.sceneTexture=void 0,this.sceneTextureSize=[0,0],this.bloomTextures=[],this.postUniformBuffer=void 0,this.postSampler=void 0}destroyDensityTextures(){this.densitySmallTexture?.destroy(),this.densityLargeTexture?.destroy(),this.densityEmptyFogTexture?.destroy(),this.densitySmallTexture=void 0,this.densityLargeTexture=void 0,this.densityEmptyFogTexture=void 0,this.densityTextureSize=[0,0],this.densitySampler=void 0,this.densitySplatBindGroups=[],this.densityCompositeBindGroup=void 0,this.densityCompositeFogTexture=void 0}destroyAccumulationTextures(){this.accumulationCurrentTexture?.destroy();for(let e of this.accumulationHistoryTextures)e.destroy();this.accumulationCurrentTexture=void 0,this.accumulationHistoryTextures=[],this.accumulationTextureSize=[0,0],this.accumulationSampler=void 0,this.accumulationSplatBindGroups=[],this.accumulationHistoryReadIndex=0,this.accumulationHistoryKey=``,this.accumulationHistoryPrepared=!1}destroyVolumeDensityResources(){this.volumeDensityAccumBuffer?.destroy(),this.volumeDensitySmallBuffer?.destroy(),this.volumeDensityBlurTempBuffer?.destroy(),this.volumeDensityLargeBuffer?.destroy(),this.volumeDensitySmallTexture?.destroy(),this.volumeDensityLargeTexture?.destroy(),this.volumeDensitySmallHalfBuffer?.destroy(),this.volumeDensityBlurTempHalfBuffer?.destroy(),this.volumeDensityLargeHalfBuffer?.destroy(),this.volumeDensityLargeTextureHalf?.destroy(),this.volumeDensityAccumBuffer=void 0,this.volumeDensitySmallBuffer=void 0,this.volumeDensityBlurTempBuffer=void 0,this.volumeDensityLargeBuffer=void 0,this.volumeDensitySmallTexture=void 0,this.volumeDensityLargeTexture=void 0,this.volumeDensitySmallHalfBuffer=void 0,this.volumeDensityBlurTempHalfBuffer=void 0,this.volumeDensityLargeHalfBuffer=void 0,this.volumeDensityLargeTextureHalf=void 0,this.volumeDensitySampler=void 0,this.volumeDensityResourceSize=[0,0,0],this.volumeDensityClearBindGroup=void 0,this.volumeDensityDepositBindGroups=[],this.volumeDensityResolveBindGroup=void 0,this.volumeDensityBlurXBindGroup=void 0,this.volumeDensityBlurYBindGroup=void 0,this.volumeDensityBlurZBindGroup=void 0,this.volumeDensityDownsampleBindGroup=void 0,this.volumeDensityBlurXHalfBindGroup=void 0,this.volumeDensityBlurYHalfBindGroup=void 0,this.volumeDensityBlurZHalfBindGroup=void 0,this.volumeDensityRenderBindGroup=void 0,this.volumeDensityRenderHalfBindGroup=void 0,this.volumeDensityPreparedKey=``,this.volumeDensityPrepared=!1}createTimestampResources(){let e=this.device;this.timestampQuerySet=e.createQuerySet({type:`timestamp`,count:Re}),this.timestampResolveBuffer=e.createBuffer({size:ze,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.timestampReadBuffer=e.createBuffer({size:ze,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}async createPipelines(){let e=this.device,t=[];t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:Zt}),entryPoint:`clear_brush`}}).then(e=>{this.clearBrushPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:Qt}),entryPoint:`init_particles`}}).then(e=>{this.initParticlePipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:$t}),entryPoint:`deposit_particles`}}).then(e=>{this.depositPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:en}),entryPoint:`deposit_visual_particles`}}).then(e=>{this.visualDepositPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:tn(!1)}),entryPoint:`update_particles`}}).then(e=>{this.updatePipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:tn(!0)}),entryPoint:`update_particles`}}).then(e=>{this.updateTexturePipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:on(!0,this.fieldTextureFormat())}),entryPoint:`update_field`}}).then(e=>{this.fieldPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:on(!1)}),entryPoint:`update_field`}}).then(e=>{this.visualFieldSmoothPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:sn(this.fieldTextureFormat())}),entryPoint:`update_field_texture`}}).then(e=>{this.fieldTexturePipeline=e}));let n=e.createShaderModule({code:ln});t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:n,entryPoint:`clear_particle_support_grid`}}).then(e=>{this.particleSupportClearPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:n,entryPoint:`build_particle_support_grid`}}).then(e=>{this.particleSupportBuildPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:n,entryPoint:`resolve_particle_support`}}).then(e=>{this.particleSupportResolvePipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:gn}),entryPoint:`cutoff_prepass`}}).then(e=>{this.cutoffPrepassPipeline=e}));let r=e.createShaderModule({code:dn}),i=e.createShaderModule({code:_n}),a=e.createShaderModule({code:Dn}),o=e.createShaderModule({code:On}),s=e.createShaderModule({code:kn}),c=e.createShaderModule({code:An}),l=e.createShaderModule({code:jn}),u=e.createShaderModule({code:Mn}),d=e.createShaderModule({code:fn}),f=e.createShaderModule({code:pn}),p=e.createShaderModule({code:Nn});this.particleRenderBindGroupLayout=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:`read-only-storage`}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:`uniform`}},{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:`read-only-storage`}},{binding:3,visibility:GPUShaderStage.VERTEX,buffer:{type:`read-only-storage`}},{binding:4,visibility:GPUShaderStage.VERTEX,buffer:{type:`read-only-storage`}},{binding:5,visibility:GPUShaderStage.VERTEX,buffer:{type:`read-only-storage`}},{binding:6,visibility:GPUShaderStage.VERTEX,buffer:{type:`read-only-storage`}},{binding:7,visibility:GPUShaderStage.VERTEX,buffer:{type:`read-only-storage`}}]});let m=e.createPipelineLayout({bindGroupLayouts:[this.particleRenderBindGroupLayout]}),h={color:{srcFactor:`one`,dstFactor:`one`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}},g={color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}};t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:r,entryPoint:`field_vs`},fragment:{module:r,entryPoint:`volume_fs`,targets:[{format:this.format,blend:h}]},primitive:{topology:`triangle-list`}}).then(e=>{this.fieldRenderPipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:r,entryPoint:`field_vs`},fragment:{module:r,entryPoint:`volume_fs`,targets:[{format:this.format}]},primitive:{topology:`triangle-list`}}).then(e=>{this.fieldFogRenderPipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:d,entryPoint:`fullscreen_vs`},fragment:{module:d,entryPoint:`fog_composite_fs`,targets:[{format:this.format}]},primitive:{topology:`triangle-list`}}).then(e=>{this.fogCompositePipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:a,entryPoint:`density_small_vs`},fragment:{module:a,entryPoint:`density_splat_fs`,targets:[{format:Ve,blend:h}]},primitive:{topology:`triangle-list`}}).then(e=>{this.densitySmallPipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:a,entryPoint:`density_large_vs`},fragment:{module:a,entryPoint:`density_splat_fs`,targets:[{format:Ve,blend:h}]},primitive:{topology:`triangle-list`}}).then(e=>{this.densityLargePipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:o,entryPoint:`fullscreen_vs`},fragment:{module:o,entryPoint:`density_composite_fs`,targets:[{format:this.format,blend:h}]},primitive:{topology:`triangle-list`}}).then(e=>{this.densityCompositePipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:s,entryPoint:`accumulation_vs`},fragment:{module:s,entryPoint:`accumulation_splat_fs`,targets:[{format:He,blend:h}]},primitive:{topology:`triangle-list`}}).then(e=>{this.accumulationSplatPipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:c,entryPoint:`fullscreen_vs`},fragment:{module:c,entryPoint:`accumulation_composite_fs`,targets:[{format:this.format,blend:h},{format:He}]},primitive:{topology:`triangle-list`}}).then(e=>{this.accumulationCompositePipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:l,entryPoint:`clear_volume_density`}}).then(e=>{this.volumeDensityClearPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:l,entryPoint:`deposit_volume_density`}}).then(e=>{this.volumeDensityDepositPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:l,entryPoint:`resolve_volume_density`}}).then(e=>{this.volumeDensityResolvePipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:l,entryPoint:`blur_volume_density_x`}}).then(e=>{this.volumeDensityBlurXPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:l,entryPoint:`blur_volume_density_y`}}).then(e=>{this.volumeDensityBlurYPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:l,entryPoint:`blur_volume_density_z`}}).then(e=>{this.volumeDensityBlurZPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:l,entryPoint:`downsample_volume_small`}}).then(e=>{this.volumeDensityDownsamplePipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:l,entryPoint:`blur_volume_density_x_half`}}).then(e=>{this.volumeDensityBlurXHalfPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:l,entryPoint:`blur_volume_density_y_half`}}).then(e=>{this.volumeDensityBlurYHalfPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:l,entryPoint:`blur_volume_density_z_half`}}).then(e=>{this.volumeDensityBlurZHalfPipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:u,entryPoint:`volume_density_vs`},fragment:{module:u,entryPoint:`volume_density_fs`,targets:[{format:this.format,blend:h}]},primitive:{topology:`triangle-list`}}).then(e=>{this.volumeDensityRenderPipeline=e}));let _={format:this.format},v={format:this.format,blend:{color:{srcFactor:`one`,dstFactor:`one`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one`,operation:`add`}}};t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:f,entryPoint:`fullscreen_vs`},fragment:{module:f,entryPoint:`prefilter_fs`,targets:[_]},primitive:{topology:`triangle-list`}}).then(e=>{this.bloomPrefilterPipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:f,entryPoint:`fullscreen_vs`},fragment:{module:f,entryPoint:`downsample_fs`,targets:[_]},primitive:{topology:`triangle-list`}}).then(e=>{this.bloomDownsamplePipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:f,entryPoint:`fullscreen_vs`},fragment:{module:f,entryPoint:`upsample_fs`,targets:[v]},primitive:{topology:`triangle-list`}}).then(e=>{this.bloomUpsamplePipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:f,entryPoint:`fullscreen_vs`},fragment:{module:f,entryPoint:`composite_fs`,targets:[_]},primitive:{topology:`triangle-list`}}).then(e=>{this.postPipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:f,entryPoint:`fullscreen_vs`},fragment:{module:f,entryPoint:`composite_no_bloom_fs`,targets:[_]},primitive:{topology:`triangle-list`}}).then(e=>{this.postNoBloomPipeline=e}));let y={additive:{format:this.format,blend:h},alpha:{format:this.format,blend:g},opaque:{format:this.format}};for(let n of ht)t.push(()=>e.createRenderPipelineAsync({layout:m,vertex:{module:i,entryPoint:`particle_vs`},fragment:{module:i,entryPoint:`splat_fs`,targets:[y[n]]},primitive:{topology:`triangle-strip`}}).then(e=>{this.particleRenderPipelines[n]=e})),t.push(()=>e.createRenderPipelineAsync({layout:m,vertex:{module:i,entryPoint:`particle_fast_vs`},fragment:{module:i,entryPoint:`splat_fs`,targets:[y[n]]},primitive:{topology:`triangle-strip`}}).then(e=>{this.particleFastRenderPipelines[n]=e}));let b=e.createShaderModule({code:yn});for(let n of ht)t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:b,entryPoint:`particle_record_vs`},fragment:{module:b,entryPoint:`splat_fs`,targets:[y[n]]},primitive:{topology:`triangle-strip`}}).then(e=>{this.splatDrawPipelines[n]=e}));t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:vn}),entryPoint:`prepare_splats`}}).then(e=>{this.splatPreparePipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:bn}),entryPoint:`accumulate_splats`}}).then(e=>{this.splatAccumPipeline=e}));let x=e.createShaderModule({code:Cn});t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:x,entryPoint:`sort_histogram`}}).then(e=>{this.sortHistogramPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:x,entryPoint:`sort_scan`}}).then(e=>{this.sortScanPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:x,entryPoint:`sort_scatter`}}).then(e=>{this.sortScatterPipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:wn}),entryPoint:`sort_apply_map`}}).then(e=>{this.sortApplyPipeline=e}));let S=e.createShaderModule({code:xn});if(t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:S,entryPoint:`splat_resolve_vs`},fragment:{module:S,entryPoint:`splat_resolve_fs`,targets:[y.additive]},primitive:{topology:`triangle-list`}}).then(e=>{this.splatResolvePipeline=e})),t.push(()=>e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:Tn}),entryPoint:`append_trail`}}).then(e=>{this.trailAppendPipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:e.createShaderModule({code:En}),entryPoint:`ribbon_vs`},fragment:{module:e.createShaderModule({code:En}),entryPoint:`ribbon_fs`,targets:[{format:this.format,blend:h}]},primitive:{topology:`triangle-strip`}}).then(e=>{this.ribbonRenderPipeline=e})),t.push(()=>e.createRenderPipelineAsync({layout:`auto`,vertex:{module:p,entryPoint:`fullscreen_vs`},fragment:{module:p,entryPoint:`overlay_fs`,targets:[{format:this.format,blend:h}]},primitive:{topology:`triangle-list`}}).then(e=>{this.overlayPipeline=e})),this.parallelPipelineCompile)await Promise.all(t.map(e=>e()));else for(let e of t)await e()}initializeParticleBuffers(){let e=this.device;if(!(!this.initParticlePipeline||!this.simUniformBuffer||this.particleChunks.length===0)){for(let t of this.particleChunks){e.queue.writeBuffer(this.simUniformBuffer,0,nt(this.config,0,0,t.offset,t.count));let n=e.createCommandEncoder(),r=t.buffers[0],i=n.beginComputePass();i.setPipeline(this.initParticlePipeline),i.setBindGroup(0,e.createBindGroup({layout:this.initParticlePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:{buffer:this.simUniformBuffer}}]})),i.dispatchWorkgroups(Math.ceil(t.count/256)),i.end(),n.copyBufferToBuffer(r,0,t.buffers[1],0,wt({particleCount:t.count})),e.queue.submit([n.finish()])}this.particleInitializationPending=!1}}stepSimulation(e){let t=this.device,n={encodeStepMs:0,clearBrushEncodeMs:0,depositEncodeMs:0,particleUpdateEncodeMs:0,fieldUpdateEncodeMs:0},r=rt(this.simStepAccumulator,this.config.simulationSpeed);this.simStepAccumulator=r.accumulator,this.renderLerpT=r.renderLerpT;for(let i=0;i<r.stepScales.length;i+=1){let a=r.stepScales[i],o=t.createCommandEncoder();this.shouldSortAtCurrentStep()&&this.encodeSortPass(o);let s=this.encodeStepPasses(o,e&&i===0,a);t.queue.submit([o.finish()]),[this.readIndex,this.writeIndex]=[this.writeIndex,this.readIndex],this.timestep+=1,this.simulationTime+=a,n.encodeStepMs+=s.encodeStepMs,n.clearBrushEncodeMs+=s.clearBrushEncodeMs,n.depositEncodeMs+=s.depositEncodeMs,n.particleUpdateEncodeMs+=s.particleUpdateEncodeMs,n.fieldUpdateEncodeMs+=s.fieldUpdateEncodeMs}return{...n,steps:r.steps,stepScales:r.stepScales,timeAdvance:r.timeAdvance}}encodeStepPasses(e,t,n){let r=performance.now(),i={encodeStepMs:0,clearBrushEncodeMs:0,depositEncodeMs:0,particleUpdateEncodeMs:0,fieldUpdateEncodeMs:0},a=this.device,o=this.morphStepsRemaining>0?yt:0;if(this.morphStepsRemaining>0&&--this.morphStepsRemaining,a.queue.writeBuffer(this.simUniformBuffer,0,nt(this.config,this.timestep,n)),this.fieldTextureDirty&&this.usesFieldTextureSensing()&&this.fieldTexturePipeline){let t=e.beginComputePass();t.setPipeline(this.fieldTexturePipeline),t.setBindGroup(0,this.createFieldTextureBindGroup()),t.dispatchWorkgroups(Math.ceil(this.config.width/4),Math.ceil(this.config.height/4),Math.ceil(this.config.depth/4)),t.end(),this.fieldTextureDirty=!1}let s=performance.now(),c=e.beginComputePass(t?{timestampWrites:this.timestampWrites(0,1)}:void 0);c.setPipeline(this.clearBrushPipeline),c.setBindGroup(0,this.getClearBindGroup()),c.dispatchWorkgroups(Math.ceil(this.voxelCount()*4/256)),c.end(),i.clearBrushEncodeMs=performance.now()-s;for(let e=0;e<this.particleChunks.length;e+=1){let t=this.particleChunks[e];a.queue.writeBuffer(this.chunkSimUniformBuffers[e],0,nt(this.config,this.timestep,n,t.offset,t.count,n,o))}s=performance.now();let l=e.beginComputePass(t?{timestampWrites:this.timestampWrites(2,3)}:void 0);l.setPipeline(this.depositPipeline);for(let e=0;e<this.particleChunks.length;e+=1){let t=this.particleChunks[e],n=this.getParticleStepBindGroups(e);l.setBindGroup(0,n.deposit),l.dispatchWorkgroups(Math.ceil(t.count/256))}l.end(),i.depositEncodeMs=performance.now()-s;let u=this.ecologyReady();if(u){let t=e.beginComputePass();t.setPipeline(this.clearBrushPipeline),t.setBindGroup(0,this.getEcologyClearBindGroup()),t.dispatchWorkgroups(Math.ceil(this.voxelCount()*4/256)),t.end();let n=e.beginComputePass();n.setPipeline(this.ecologyDepositPipeline);for(let e=0;e<this.particleChunks.length;e+=1){let t=this.particleChunks[e];n.setBindGroup(0,this.getEcologyDepositBindGroup(e)),n.dispatchWorkgroups(Math.ceil(t.count/256))}n.end();let r=e.beginComputePass();r.setPipeline(this.ecologyUpdatePipeline),r.setBindGroup(0,this.getEcologyUpdateBindGroup()),r.dispatchWorkgroups(Math.ceil(this.voxelCount()/256)),r.end()}s=performance.now();let d=e.beginComputePass(t?{timestampWrites:this.timestampWrites(4,5)}:void 0);d.setPipeline(u?this.ecologyParticlePipeline:this.usesFieldTextureSensing()?this.updateTexturePipeline:this.updatePipeline);for(let e=0;e<this.particleChunks.length;e+=1){let t=this.particleChunks[e],n=u?this.getEcologyParticleBindGroup(e):this.getParticleStepBindGroups(e).update;d.setBindGroup(0,n),d.dispatchWorkgroups(Math.ceil(t.count/256))}d.end(),i.particleUpdateEncodeMs=performance.now()-s,a.queue.writeBuffer(this.simUniformBuffer,0,nt(this.config,this.timestep,n)),s=performance.now();let f=e.beginComputePass(t?{timestampWrites:this.timestampWrites(6,7)}:void 0);return f.setPipeline(this.fieldPipeline),f.setBindGroup(0,this.getFieldStepBindGroup()),f.dispatchWorkgroups(Math.ceil(this.voxelCount()/256)),f.end(),i.fieldUpdateEncodeMs=performance.now()-s,i.encodeStepMs=performance.now()-r,i}shouldUseVisualFieldSmoothing(e){return e.renderLayer===`particles`?e.particleDensityCutoff>0||e.particleDensityNormalize>1e-4:!1}encodeVisualFieldSmoothing(e,t,n,r,i){let a=performance.now(),o=this.device,s=this.voxelCount()*4*Float32Array.BYTES_PER_ELEMENT;if(!this.visualFieldPrepared||t){let t=n===0?0:1;e.copyBufferToBuffer(this.fieldBuffers[t],0,this.visualFieldBuffers[0],0,s),e.copyBufferToBuffer(this.fieldBuffers[t],0,this.visualFieldBuffers[1],0,s),this.visualFieldReadIndex=0,this.visualFieldPrepared=!0}let c=lt(r,0,1);if(c<=0)return performance.now()-a;let l=e.beginComputePass();l.setPipeline(this.clearBrushPipeline),l.setBindGroup(0,this.getClearBindGroup()),l.dispatchWorkgroups(Math.ceil(this.voxelCount()*4/256)),l.end();for(let t=0;t<this.particleChunks.length;t+=1){let n=this.particleChunks[t];o.queue.writeBuffer(this.chunkSimUniformBuffers[t],0,nt(this.config,this.timestep,c,n.offset,n.count,i));let r=e.beginComputePass();r.setPipeline(this.visualDepositPipeline),r.setBindGroup(0,this.getVisualDepositBindGroup(t)),r.dispatchWorkgroups(Math.ceil(n.count/256)),r.end()}o.queue.writeBuffer(this.simUniformBuffer,0,nt(this.config,this.timestep,c,0,this.config.particleCount,i));let u=e.beginComputePass();return u.setPipeline(this.visualFieldSmoothPipeline),u.setBindGroup(0,this.getVisualFieldBindGroup()),u.dispatchWorkgroups(Math.ceil(this.voxelCount()/256)),u.end(),this.visualFieldReadIndex=+(this.visualFieldReadIndex===0),performance.now()-a}timestampWrites(e,t){return{querySet:this.timestampQuerySet,beginningOfPassWriteIndex:e,endOfPassWriteIndex:t}}encodeFieldTextureUpdate(e){let t=e.beginComputePass();t.setPipeline(this.fieldTexturePipeline),t.setBindGroup(0,this.createFieldTextureBindGroup()),t.dispatchWorkgroups(Math.ceil(this.config.width/4),Math.ceil(this.config.height/4),Math.ceil(this.config.depth/4)),t.end()}shouldSampleTimestamps(e){return this.lastGpuPassTimings?e?this.timestep%24==0:this.timestampFrame%24==0:!0}async readGpuPassTimings(e,t,n,r,i,a,o,s){let c=this.timestampReadBuffer;if(!c)return null;await c.mapAsync(GPUMapMode.READ);let l=new BigUint64Array(c.getMappedRange().slice(0));c.unmap();let u=(e,t)=>l.length<=t||l[t]<l[e]?0:Number(l[t]-l[e])/1e6,d=e=>a?{densitySmallMs:u(e,e+1),densityLargeMs:u(e+2,e+3),densityCompositeMs:u(e+4,e+5)}:{densitySmallMs:0,densityLargeMs:0,densityCompositeMs:0},f={accumulationSplatMs:0,accumulationCompositeMs:0},p={particleSupportClearMs:0,particleSupportBuildMs:0,particleSupportResolveMs:0},m=e?8:0,h=s?{particleSupportClearMs:u(m,m+1),particleSupportBuildMs:u(m+2,m+3),particleSupportResolveMs:u(m+4,m+5)}:p,g=h.particleSupportClearMs+h.particleSupportBuildMs+h.particleSupportResolveMs,_=m+(s?6:0),v=_+(t?(n?6:4)+(a?6:0):r?e||i?14:2:o?4:a?8:2),y=u(v,v+1);if(!e){if(o){let e=u(_,_+1),t=u(_+2,_+3),n=e+t;return{clearBrushMs:0,depositMs:0,particleUpdateMs:0,fieldUpdateMs:0,...h,densitySmallMs:0,densityLargeMs:0,densityCompositeMs:0,accumulationSplatMs:e,accumulationCompositeMs:t,volumeDensityClearMs:0,volumeDensityDepositMs:0,volumeDensityResolveMs:0,volumeDensityBlurMs:0,volumeDensityRaymarchMs:0,fogCompositeMs:0,fogPresentMs:0,renderMs:n,postMs:y,totalMeasuredMs:g+n+y}}if(r){if(!i){let e=u(_,_+1);return{clearBrushMs:0,depositMs:0,particleUpdateMs:0,fieldUpdateMs:0,...h,densitySmallMs:0,densityLargeMs:0,densityCompositeMs:0,...f,volumeDensityClearMs:0,volumeDensityDepositMs:0,volumeDensityResolveMs:0,volumeDensityBlurMs:0,volumeDensityRaymarchMs:e,fogCompositeMs:0,fogPresentMs:0,renderMs:e,postMs:y,totalMeasuredMs:g+e+y}}let e=u(_,_+1),t=u(_+2,_+3),n=u(_+4,_+5),r=u(_+6,_+7)+u(_+8,_+9)+u(_+10,_+11),a=u(_+12,_+13),o=e+t+n+r+a;return{clearBrushMs:0,depositMs:0,particleUpdateMs:0,fieldUpdateMs:0,...h,densitySmallMs:0,densityLargeMs:0,densityCompositeMs:0,...f,volumeDensityClearMs:e,volumeDensityDepositMs:t,volumeDensityResolveMs:n,volumeDensityBlurMs:r,volumeDensityRaymarchMs:a,fogCompositeMs:0,fogPresentMs:0,renderMs:o,postMs:y,totalMeasuredMs:g+o+y}}let e=u(_,_+1),a=t&&n?u(_+2,_+3):0,s=t?u(_+(n?4:2),_+(n?5:3)):0,c=d(_+(t?n?6:4:2)),l=c.densitySmallMs+c.densityLargeMs+c.densityCompositeMs,p=e+a+s+l;return{clearBrushMs:0,depositMs:0,particleUpdateMs:0,fieldUpdateMs:0,...h,...c,...f,volumeDensityClearMs:0,volumeDensityDepositMs:0,volumeDensityResolveMs:0,volumeDensityBlurMs:0,volumeDensityRaymarchMs:0,fogCompositeMs:a,fogPresentMs:s,renderMs:p,postMs:y,totalMeasuredMs:g+p+y}}let b=u(0,1),x=u(2,3),S=u(4,5),C=u(6,7);if(o){let e=u(_,_+1),t=u(_+2,_+3),n=e+t;return{clearBrushMs:b,depositMs:x,particleUpdateMs:S,fieldUpdateMs:C,...h,densitySmallMs:0,densityLargeMs:0,densityCompositeMs:0,accumulationSplatMs:e,accumulationCompositeMs:t,volumeDensityClearMs:0,volumeDensityDepositMs:0,volumeDensityResolveMs:0,volumeDensityBlurMs:0,volumeDensityRaymarchMs:0,fogCompositeMs:0,fogPresentMs:0,renderMs:n,postMs:y,totalMeasuredMs:b+x+S+C+g+n+y}}if(r){let e=u(_,_+1),t=u(_+2,_+3),n=u(_+4,_+5),r=u(_+6,_+7)+u(_+8,_+9)+u(_+10,_+11),i=u(_+12,_+13),a=e+t+n+r+i;return{clearBrushMs:b,depositMs:x,particleUpdateMs:S,fieldUpdateMs:C,...h,densitySmallMs:0,densityLargeMs:0,densityCompositeMs:0,...f,volumeDensityClearMs:e,volumeDensityDepositMs:t,volumeDensityResolveMs:n,volumeDensityBlurMs:r,volumeDensityRaymarchMs:i,fogCompositeMs:0,fogPresentMs:0,renderMs:a,postMs:y,totalMeasuredMs:b+x+S+C+g+a+y}}let w=u(_,_+1),ee=t&&n?u(_+2,_+3):0,T=t?u(_+(n?4:2),_+(n?5:3)):0,te=d(_+(t?n?6:4:2)),E=te.densitySmallMs+te.densityLargeMs+te.densityCompositeMs,ne=w+ee+T+E;return{clearBrushMs:b,depositMs:x,particleUpdateMs:S,fieldUpdateMs:C,...h,...te,...f,volumeDensityClearMs:0,volumeDensityDepositMs:0,volumeDensityResolveMs:0,volumeDensityBlurMs:0,volumeDensityRaymarchMs:0,fogCompositeMs:ee,fogPresentMs:T,renderMs:ne,postMs:y,totalMeasuredMs:b+x+S+C+g+ne+y}}async readCanvasHDR(){let e=this.device,t=this.context;if(!e||!t)return null;let n;try{n=t.getCurrentTexture()}catch{return null}return this.readRgba16FloatTexture(n,n.width,n.height)}async readSceneHDR(){return!this.sceneTexture||this.sceneTextureSize[0]<=0||this.sceneTextureSize[1]<=0?null:this.readRgba16FloatTexture(this.sceneTexture,this.sceneTextureSize[0],this.sceneTextureSize[1])}async readFinalHDR(){return!this.finalTexture||this.finalTextureSize[0]<=0||this.finalTextureSize[1]<=0?null:this.readRgba16FloatTexture(this.finalTexture,this.finalTextureSize[0],this.finalTextureSize[1])}async readFinalHDRRaw(){if(!this.finalTexture||this.finalTextureSize[0]<=0||this.finalTextureSize[1]<=0)return null;let e=this.device,t=this.finalTextureSize[0],n=this.finalTextureSize[1],r=Math.ceil(t*8/256)*256,i=e.createBuffer({size:r*n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),a=e.createCommandEncoder();a.copyTextureToBuffer({texture:this.finalTexture},{buffer:i,bytesPerRow:r},{width:t,height:n}),e.queue.submit([a.finish()]),await i.mapAsync(GPUMapMode.READ);let o=new Uint8Array(i.getMappedRange()).slice();return i.unmap(),i.destroy(),{width:t,height:n,bytesPerRow:r,data:o}}ensureFinalTexture(e,t){this.finalTexture&&this.finalTextureSize[0]===e&&this.finalTextureSize[1]===t||(this.finalTexture?.destroy(),this.finalTexture=this.device.createTexture({size:{width:e,height:t},format:this.format,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING}),this.finalTextureSize=[e,t])}async readRgba16FloatTexture(e,t,n){let r=this.device,i=Math.ceil(t*8/256)*256,a=r.createBuffer({size:i*n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),o=r.createCommandEncoder();o.copyTextureToBuffer({texture:e},{buffer:a,bytesPerRow:i},{width:t,height:n}),r.queue.submit([o.finish()]),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange(),c=new DataView(s),l=new Float32Array(t*n*4);for(let e=0;e<n;e++){let n=e*i;for(let r=0;r<t;r++){let i=n+r*8,a=(e*t+r)*4;l[a+0]=Xe(c.getUint16(i+0,!0)),l[a+1]=Xe(c.getUint16(i+2,!0)),l[a+2]=Xe(c.getUint16(i+4,!0)),l[a+3]=Xe(c.getUint16(i+6,!0))}}return a.unmap(),a.destroy(),{width:t,height:n,pixels:l}}setParticleBufferData(e){let t=this.device;if(!t||this.particleChunks.length===0)return;let n=this.config.particleCount*Ie*Float32Array.BYTES_PER_ELEMENT;if(e.byteLength!==n)throw Error(`setParticleBufferData: expected ${n} bytes, got ${e.byteLength}`);for(let n of this.particleChunks){let r=n.offset*Ie,i=r+n.count*Ie,a=e.subarray(r,i);t.queue.writeBuffer(n.buffers[0],0,a),t.queue.writeBuffer(n.buffers[1],0,a)}this.volumeDensityPrepared=!1,this.volumeDensityPreparedKey=``,this.accumulationHistoryPrepared=!1,this.accumulationHistoryKey=``,this.fieldStatsReadGeneration+=1,this.fieldStatsReadPending=!1,this.lastFieldStats=Fe,this.targetParticleDensityReference=0,this.smoothedParticleDensityReference=0}clearField(){let e=this.device;if(!e||this.fieldBuffers.length===0)return;let t=new Float32Array(this.voxelCount()*4);e.queue.writeBuffer(this.fieldBuffers[0],0,t),e.queue.writeBuffer(this.fieldBuffers[1],0,t),this.fieldTextureDirty=!0,this.volumeDensityPrepared=!1,this.volumeDensityPreparedKey=``,this.accumulationHistoryPrepared=!1,this.accumulationHistoryKey=``}setFieldBufferData(e){let t=this.device;if(!t||this.fieldBuffers.length===0)return;let n=this.voxelCount()*4*Float32Array.BYTES_PER_ELEMENT;if(e.byteLength!==n)throw Error(`setFieldBufferData: expected ${n} bytes, got ${e.byteLength}`);t.queue.writeBuffer(this.fieldBuffers[0],0,e),t.queue.writeBuffer(this.fieldBuffers[1],0,e),this.fieldTextureDirty=!0,this.fieldStatsReadGeneration+=1,this.fieldStatsReadPending=!1,this.applyFieldStats(Qe(e)),this.volumeDensityPrepared=!1,this.volumeDensityPreparedKey=``,this.accumulationHistoryPrepared=!1,this.accumulationHistoryKey=``}async captureState(){if(!this.device||this.fieldBuffers.length===0||this.particleChunks.length===0)return null;let e=await this.readBackF32(this.fieldBuffers[this.readIndex],this.voxelCount()*4),t=await this.captureParticles();return t?{field:e,particles:t,voxelCount:this.voxelCount(),particleCount:this.config.particleCount,width:this.config.width,height:this.config.height,depth:this.config.depth}:null}async captureParticles(e=this.config.particleCount){if(!this.device||this.particleChunks.length===0)return null;let t=Math.max(0,Math.min(this.config.particleCount,Math.floor(e))),n=new Float32Array(t*Ie),r=0,i=0,a=0;for(let e=0;e<this.particleChunks.length;e+=1){let o=this.particleChunks[e];if(r>=t)break;a+=o.count;let s=e===this.particleChunks.length-1?t:Math.round(a/Math.max(1,this.config.particleCount)*t),c=Math.min(o.count,Math.max(0,s-i),t-r);if(i+=c,c===0)continue;let l=await this.readBackF32(o.buffers[this.readIndex],c*Ie);n.set(l,r*Ie),r+=c}return n}get liveParticleCount(){return this.config.particleCount}async readBackF32(e,t){let n=this.device,r=t*Float32Array.BYTES_PER_ELEMENT,i=n.createBuffer({size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),a=n.createCommandEncoder();a.copyBufferToBuffer(e,0,i,0,r),n.queue.submit([a.finish()]),await i.mapAsync(GPUMapMode.READ);let o=new Float32Array(i.getMappedRange().slice(0));return i.unmap(),i.destroy(),o}ribbonStride(e){return Math.max(1,Math.round(1/Math.max(1e-4,e.ribbonFraction)))}ribbonActiveCount(e){return Math.min(Ge,Math.ceil(this.config.particleCount/this.ribbonStride(e)))}ensureTrailBuffer(){this.trailBuffer||=this.device.createBuffer({size:Ge*We*4*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE}),this.ribbonUniformBuffer||=this.device.createBuffer({size:Ke,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}ribbonJointCount(e){return Math.max(2,Math.min(We,Math.round(e.ribbonJoints)))}writeRibbonUniform(e){let t=new ArrayBuffer(Ke),n=new Uint32Array(t),r=new Float32Array(t);n[0]=this.ribbonStride(e),n[1]=Ge,n[2]=this.ribbonFrame>>>0,n[3]=Math.max(2,Math.min(We,Math.round(e.ribbonLength))),n[4]=this.ribbonJointCount(e),r[5]=e.ribbonWidth,r[6]=e.ribbonTaper,r[7]=e.ribbonFadeStart,r[8]=e.ribbonEdgeFade,this.device.queue.writeBuffer(this.ribbonUniformBuffer,0,t)}encodeRibbonAppend(e){let t=e.beginComputePass();t.setPipeline(this.trailAppendPipeline);for(let e=0;e<this.particleChunks.length;e+=1){let n=this.particleChunks[e];t.setBindGroup(0,this.device.createBindGroup({layout:this.trailAppendPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:n.buffers[this.readIndex]}},{binding:1,resource:{buffer:this.trailBuffer}},{binding:2,resource:{buffer:this.chunkSimUniformBuffers[e]}},{binding:3,resource:{buffer:this.ribbonUniformBuffer}}]})),t.dispatchWorkgroups(Math.ceil(n.count/256))}t.end()}drawRibbons(e,t){!this.trailBuffer||!this.ribbonRenderPipeline||(e.setPipeline(this.ribbonRenderPipeline),e.setBindGroup(0,this.device.createBindGroup({layout:this.ribbonRenderPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.trailBuffer}},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:{buffer:this.ribbonUniformBuffer}}]})),e.draw(this.ribbonJointCount(t)*2,this.ribbonActiveCount(t)))}drawParticlesAndOverlay(e,t,n,r=this.fieldBuffers[this.readIndex]){if(this.ribbonsActive=t.ribbonFraction>1e-4,this.ribbonsActive&&this.drawRibbons(e,t),this.usesParticleSplatLayer(t)){let n=t.particleBlendMode;if(this.usesComputeSplat(t))e.setPipeline(this.splatResolvePipeline),e.setBindGroup(0,this.createSplatResolveBindGroup()),e.draw(3);else if(this.usesPreparedSplatPath(t)&&this.splatDrawPipelines[n]){e.setPipeline(this.splatDrawPipelines[n]);for(let t=0;t<this.particleChunks.length;t+=1){let r=this.particleChunks[t];e.setBindGroup(0,this.createSplatDrawBindGroup(n,t)),e.draw(4,r.count)}}else{let i=this.usesFastParticlePipeline(t)?this.particleFastRenderPipelines:this.particleRenderPipelines;e.setPipeline(i[n]??i.additive);let a=this.usesParticleSupportCompaction(t);for(let t=0;t<this.particleChunks.length;t+=1){let i=this.particleChunks[t];e.setBindGroup(0,this.createParticleRenderBindGroup(n,t,r)),a?e.drawIndirect(i.activeDrawBuffer,0):e.draw(4,i.count)}}}n&&(e.setPipeline(this.overlayPipeline),e.setBindGroup(0,this.createOverlayBindGroup()),e.draw(3))}usesParticleSplatLayer(e){return e.renderLayer===`both`||e.renderLayer===`particles`||e.renderLayer===`debug-voxels`}usesParticleSupportCompaction(e){return e.particleSupportMask>1e-4&&this.usesParticleSplatLayer(e)&&!!this.particleSupportGridBuffer}usesFastParticlePipeline(e){return e.fastParticleRender&&e.particleDensityCutoff<=0&&e.particleDensityNormalize<=1e-4&&!e.dofEnabled&&!e.dofDebug}usesCutoffPrepass(e){return e.particleCutoffPrepass&&(e.particleDensityCutoff>0||e.particleDensityNormalize>1e-4)&&this.usesParticleSplatLayer(e)&&!!this.cutoffPrepassPipeline}createCutoffPrepassBindGroup(e,t){let n=this.particleChunks[e];return this.device.createBindGroup({layout:this.cutoffPrepassPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:n.buffers[this.readIndex]}},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:{buffer:n.buffers[+(this.readIndex===0)]}},{binding:3,resource:{buffer:t}},{binding:8,resource:{buffer:n.cutoffSignalBuffer}}]})}encodeCutoffPrepass(e,t,n){if(!this.usesCutoffPrepass(t))return;let r=e.beginComputePass();r.setPipeline(this.cutoffPrepassPipeline);for(let e=0;e<this.particleChunks.length;e+=1){let t=this.particleChunks[e];r.setBindGroup(0,this.createCutoffPrepassBindGroup(e,n)),r.dispatchWorkgroups(Math.ceil(t.count/256))}r.end()}encodeParticleSupportMask(e,t,n,r){if(t.particleSupportMask<=1e-4||!this.usesParticleSplatLayer(t)||!this.particleSupportGridBuffer)return;e.clearBuffer(this.particleSupportGridBuffer),r!==void 0&&e.beginComputePass({timestampWrites:this.timestampWrites(r,r+1)}).end();let i=e.beginComputePass(r===void 0?void 0:{timestampWrites:this.timestampWrites(r+2,r+3)});i.setPipeline(this.particleSupportBuildPipeline);for(let e=0;e<this.particleChunks.length;e+=1){let t=this.particleChunks[e];i.setBindGroup(0,this.createParticleSupportBuildBindGroup(e,n)),i.dispatchWorkgroups(Math.ceil(t.count/256))}i.end();for(let e of this.particleChunks)this.device.queue.writeBuffer(e.activeDrawBuffer,0,Ye);let a=e.beginComputePass(r===void 0?void 0:{timestampWrites:this.timestampWrites(r+4,r+5)});a.setPipeline(this.particleSupportResolvePipeline);for(let e=0;e<this.particleChunks.length;e+=1){let t=this.particleChunks[e];a.setBindGroup(0,this.createParticleSupportResolveBindGroup(e,n)),a.dispatchWorkgroups(Math.ceil(t.count/256))}a.end()}renderDensityLayer(e,t,n,r,i=!1,a=this.fieldBuffers[this.readIndex]){if(t.densityPassStrength<=0||!i&&t.renderLayer!==`both`&&t.renderLayer!==`density`)return;this.ensureDensityTextures(this.sceneTextureSize[0],this.sceneTextureSize[1]),this.drawDensitySplatPass(e,this.densitySmallPipeline,this.densitySmallTexture,r,a),this.drawDensitySplatPass(e,this.densityLargePipeline,this.densityLargeTexture,r===void 0?void 0:r+2,a);let o=e.beginRenderPass({colorAttachments:[{view:this.sceneTexture.createView(),loadOp:`load`,storeOp:`store`}],...r===void 0?{}:{timestampWrites:this.timestampWrites(r+4,r+5)}});o.setPipeline(this.densityCompositePipeline),o.setBindGroup(0,this.createDensityCompositeBindGroup(n??this.ensureDensityEmptyFogTexture())),o.draw(3),o.end()}renderAccumulationLayer(e,t,n,r){this.ensureAccumulationTextures(this.sceneTextureSize[0],this.sceneTextureSize[1]),this.shouldResetAccumulationHistory(t,this.sceneTextureSize[0],this.sceneTextureSize[1])&&this.clearAccumulationHistory(e),this.drawAccumulationSplatPass(e,r);let i=1-this.accumulationHistoryReadIndex,a=e.beginRenderPass({colorAttachments:[{view:this.sceneTexture.createView(),clearValue:{r:.004,g:.006,b:.008,a:1},loadOp:`clear`,storeOp:`store`},{view:this.accumulationHistoryTextures[i].createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}],...r===void 0?{}:{timestampWrites:this.timestampWrites(r+2,r+3)}});if(a.setPipeline(this.accumulationCompositePipeline),a.setBindGroup(0,this.createAccumulationCompositeBindGroup(this.accumulationHistoryTextures[this.accumulationHistoryReadIndex])),a.draw(3),a.end(),this.accumulationHistoryReadIndex=i,this.accumulationHistoryPrepared=!0,n){let t=e.beginRenderPass({colorAttachments:[{view:this.sceneTexture.createView(),loadOp:`load`,storeOp:`store`}]});t.setPipeline(this.overlayPipeline),t.setBindGroup(0,this.createOverlayBindGroup()),t.draw(3),t.end()}}renderVolumeDensityLayer(e,t,n,r,i){if(this.ensureVolumeDensityResources(),t.densityPassStrength>0&&r){let n=e.beginComputePass(i===void 0?void 0:{timestampWrites:this.timestampWrites(i+0,i+1)});n.setPipeline(this.volumeDensityClearPipeline),n.setBindGroup(0,this.createVolumeDensityClearBindGroup()),n.dispatchWorkgroups(Math.ceil(this.voxelCount()*4/256)),n.end();for(let e=0;e<this.particleChunks.length;e+=1){let t=this.particleChunks[e];this.device.queue.writeBuffer(this.chunkSimUniformBuffers[e],0,nt(this.config,this.timestep,1,t.offset,t.count))}let r=e.beginComputePass(i===void 0?void 0:{timestampWrites:this.timestampWrites(i+2,i+3)});r.setPipeline(this.volumeDensityDepositPipeline);for(let e=0;e<this.particleChunks.length;e+=1){let t=this.particleChunks[e];r.setBindGroup(0,this.createVolumeDensityDepositBindGroup(e)),r.dispatchWorkgroups(Math.ceil(t.count/256))}r.end();let a=e.beginComputePass(i===void 0?void 0:{timestampWrites:this.timestampWrites(i+4,i+5)});if(a.setPipeline(this.volumeDensityResolvePipeline),a.setBindGroup(0,this.createVolumeDensityResolveBindGroup()),a.dispatchWorkgroups(Math.ceil(this.config.width/4),Math.ceil(this.config.height/4),Math.ceil(this.config.depth/4)),a.end(),t.densityLargeHalfRes){let t=Math.max(1,Math.ceil(this.config.width/2)),n=Math.max(1,Math.ceil(this.config.height/2)),r=Math.max(1,Math.ceil(this.config.depth/2)),a=t*n*r,o=e.beginComputePass();o.setPipeline(this.volumeDensityDownsamplePipeline),o.setBindGroup(0,this.createVolumeDownsampleBindGroup()),o.dispatchWorkgroups(Math.ceil(t/4),Math.ceil(n/4),Math.ceil(r/4)),o.end();let s=e.beginComputePass(i===void 0?void 0:{timestampWrites:this.timestampWrites(i+6,i+7)});s.setPipeline(this.volumeDensityBlurXHalfPipeline),s.setBindGroup(0,this.createVolumeBlurHalfBindGroup(this.volumeDensityBlurXHalfPipeline,this.volumeDensitySmallHalfBuffer,this.volumeDensityBlurTempHalfBuffer)),s.dispatchWorkgroups(Math.ceil(a/256)),s.end();let c=e.beginComputePass(i===void 0?void 0:{timestampWrites:this.timestampWrites(i+8,i+9)});c.setPipeline(this.volumeDensityBlurYHalfPipeline),c.setBindGroup(0,this.createVolumeBlurHalfBindGroup(this.volumeDensityBlurYHalfPipeline,this.volumeDensityBlurTempHalfBuffer,this.volumeDensityLargeHalfBuffer)),c.dispatchWorkgroups(Math.ceil(a/256)),c.end();let l=e.beginComputePass(i===void 0?void 0:{timestampWrites:this.timestampWrites(i+10,i+11)});l.setPipeline(this.volumeDensityBlurZHalfPipeline),l.setBindGroup(0,this.createVolumeBlurZHalfBindGroup()),l.dispatchWorkgroups(Math.ceil(t/4),Math.ceil(n/4),Math.ceil(r/4)),l.end()}else{let t=e.beginComputePass(i===void 0?void 0:{timestampWrites:this.timestampWrites(i+6,i+7)});t.setPipeline(this.volumeDensityBlurXPipeline),t.setBindGroup(0,this.createVolumeDensityBlurBindGroup(this.volumeDensityBlurXPipeline,this.volumeDensitySmallBuffer,this.volumeDensityBlurTempBuffer)),t.dispatchWorkgroups(Math.ceil(this.voxelCount()/256)),t.end();let n=e.beginComputePass(i===void 0?void 0:{timestampWrites:this.timestampWrites(i+8,i+9)});n.setPipeline(this.volumeDensityBlurYPipeline),n.setBindGroup(0,this.createVolumeDensityBlurBindGroup(this.volumeDensityBlurYPipeline,this.volumeDensityBlurTempBuffer,this.volumeDensityLargeBuffer)),n.dispatchWorkgroups(Math.ceil(this.voxelCount()/256)),n.end();let r=e.beginComputePass(i===void 0?void 0:{timestampWrites:this.timestampWrites(i+10,i+11)});r.setPipeline(this.volumeDensityBlurZPipeline),r.setBindGroup(0,this.createVolumeDensityBlurZBindGroup()),r.dispatchWorkgroups(Math.ceil(this.config.width/4),Math.ceil(this.config.height/4),Math.ceil(this.config.depth/4)),r.end()}this.volumeDensityPreparedKey=this.volumeDensityCacheKey(t),this.volumeDensityPrepared=!0}let a=e.beginRenderPass({colorAttachments:[{view:this.sceneTexture.createView(),clearValue:{r:.004,g:.006,b:.008,a:1},loadOp:`clear`,storeOp:`store`}],...i===void 0?{}:{timestampWrites:t.densityPassStrength>0&&r?this.timestampWrites(i+12,i+13):this.timestampWrites(i,i+1)}});if(t.densityPassStrength>0&&(a.setPipeline(this.volumeDensityRenderPipeline),a.setBindGroup(0,this.createVolumeDensityRenderBindGroup(t.densityLargeHalfRes)),a.draw(3)),a.end(),this.renderDensityLayer(e,t,void 0,void 0,!0),n){let t=e.beginRenderPass({colorAttachments:[{view:this.sceneTexture.createView(),loadOp:`load`,storeOp:`store`}]});t.setPipeline(this.overlayPipeline),t.setBindGroup(0,this.createOverlayBindGroup()),t.draw(3),t.end()}}shouldRebuildVolumeDensity(e,t){return t||!this.volumeDensityPrepared?!0:this.volumeDensityPreparedKey!==this.volumeDensityCacheKey(e)}volumeDensityCacheKey(e){let t=mt(e.particleTint);return[e.densityLargeHalfRes?`half`:`full`,this.config.width,this.config.height,this.config.depth,this.config.particleCount,this.timestep,this.readIndex,e.particleOpacity.toFixed(5),e.particleSpeedCutoff.toFixed(5),e.particleSlowCutoff.toFixed(5),e.particleDensityCutoff.toFixed(6),e.particleDensityRadius.toFixed(5),e.densitySmallScale.toFixed(4),e.densityLargeScale.toFixed(4),e.particleColorMode,t.map(e=>e.toFixed(4)).join(`,`),this.config.hueSensitivity.toFixed(5)].join(`|`)}drawDensitySplatPass(e,t,n,r,i=this.fieldBuffers[this.readIndex]){let a=e.beginRenderPass({colorAttachments:[{view:n.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}],...r===void 0?{}:{timestampWrites:this.timestampWrites(r,r+1)}});a.setPipeline(t);for(let e=0;e<this.particleChunks.length;e+=1){let n=this.particleChunks[e];a.setBindGroup(0,this.createDensitySplatBindGroup(t,e,i)),a.draw(n.count*6)}a.end()}drawAccumulationSplatPass(e,t){let n=e.beginRenderPass({colorAttachments:[{view:this.accumulationCurrentTexture.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}],...t===void 0?{}:{timestampWrites:this.timestampWrites(t,t+1)}});n.setPipeline(this.accumulationSplatPipeline);for(let e=0;e<this.particleChunks.length;e+=1){let t=this.particleChunks[e];n.setBindGroup(0,this.createAccumulationSplatBindGroup(e)),n.draw(t.count*6)}n.end()}createFieldRenderBindGroup(e,t,n=this.fieldBuffers[this.readIndex]){let r=this.fieldBuffers[this.readIndex];return e!==this.renderUniformBuffer||n!==r?this.device.createBindGroup({layout:t.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:{buffer:e}},{binding:2,resource:this.fieldTexture.createView()},{binding:3,resource:this.fieldTextureSampler}]}):(this.fieldRenderBindGroups[this.readIndex]??=this.device.createBindGroup({layout:t.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:{buffer:e}},{binding:2,resource:this.fieldTexture.createView()},{binding:3,resource:this.fieldTextureSampler}]}),this.fieldRenderBindGroups[this.readIndex])}ensureSceneTexture(e,t){if(this.postSampler??=this.device.createSampler({magFilter:`linear`,minFilter:`linear`}),this.postUniformBuffer??=this.device.createBuffer({size:128,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sceneTexture&&this.sceneTextureSize[0]===e&&this.sceneTextureSize[1]===t)return;this.sceneTexture?.destroy();for(let e of this.bloomTextures)e.destroy();this.sceneTexture=this.device.createTexture({size:{width:e,height:t},format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),this.splatAccumBuffer?.destroy(),this.splatAccumBuffer=this.device.createBuffer({size:e*t*3*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.splatAccumBindGroups=[],this.splatResolveBindGroup=void 0,this.bloomTextures=[];let n=Math.max(1,Math.floor(e/2)),r=Math.max(1,Math.floor(t/2));for(let e=0;e<8&&n>2&&r>2;e+=1)this.bloomTextures.push(this.device.createTexture({size:{width:n,height:r},format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING})),n=Math.max(1,Math.floor(n/2)),r=Math.max(1,Math.floor(r/2));this.sceneTextureSize=[e,t]}ensureDensityTextures(e,t){if(this.densitySampler??=this.device.createSampler({magFilter:`linear`,minFilter:`linear`}),this.densitySmallTexture&&this.densityLargeTexture&&this.densityTextureSize[0]===e&&this.densityTextureSize[1]===t)return;this.densitySmallTexture?.destroy(),this.densityLargeTexture?.destroy();let n={size:{width:e,height:t},format:Ve,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING};this.densitySmallTexture=this.device.createTexture(n),this.densityLargeTexture=this.device.createTexture(n),this.densityTextureSize=[e,t],this.densityCompositeBindGroup=void 0,this.densityCompositeFogTexture=void 0}ensureAccumulationTextures(e,t){if(this.accumulationCurrentTexture&&this.accumulationHistoryTextures.length===2&&this.accumulationTextureSize[0]===e&&this.accumulationTextureSize[1]===t)return;this.destroyAccumulationTextures();let n={size:{width:e,height:t},format:He,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING};this.accumulationCurrentTexture=this.device.createTexture(n),this.accumulationHistoryTextures=[this.device.createTexture(n),this.device.createTexture(n)],this.accumulationSampler=this.device.createSampler({magFilter:`linear`,minFilter:`linear`}),this.accumulationTextureSize=[e,t],this.accumulationHistoryReadIndex=0,this.accumulationHistoryPrepared=!1}clearAccumulationHistory(e){for(let t of this.accumulationHistoryTextures)e.beginRenderPass({colorAttachments:[{view:t.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}]}).end();this.accumulationHistoryReadIndex=0,this.accumulationHistoryPrepared=!1}shouldResetAccumulationHistory(e,t,n){let r=this.accumulationHistoryCacheKey(e,t,n),i=!this.accumulationHistoryPrepared||this.accumulationHistoryKey!==r;return this.accumulationHistoryKey=r,i}accumulationHistoryCacheKey(e,t,n){let r=mt(e.particleTint);return[t,n,this.config.width,this.config.height,this.config.depth,this.config.particleCount,e.cameraYaw.toFixed(6),e.cameraPitch.toFixed(6),e.cameraDistance.toFixed(5),e.cameraPanX.toFixed(5),e.cameraPanY.toFixed(5),e.particleColorMode,r.map(e=>e.toFixed(4)).join(`,`),this.config.hueSensitivity.toFixed(5),e.particleOpacity.toFixed(5),e.particleBrightness.toFixed(5),e.particleSpeedCutoff.toFixed(5),e.particleSlowCutoff.toFixed(5),e.particleDensityCutoff.toFixed(6),e.particleDensityRadius.toFixed(5),e.accumulationRadius.toFixed(4),e.accumulationNoiseReject.toFixed(4)].join(`|`)}ensureVolumeDensityResources(){let e=this.config.width,t=this.config.height,n=this.config.depth;if(this.volumeDensitySampler??=this.device.createSampler({magFilter:`linear`,minFilter:`linear`}),this.volumeDensityAccumBuffer&&this.volumeDensitySmallBuffer&&this.volumeDensityBlurTempBuffer&&this.volumeDensityLargeBuffer&&this.volumeDensitySmallTexture&&this.volumeDensityLargeTexture&&this.volumeDensityLargeTextureHalf&&this.volumeDensityResourceSize[0]===e&&this.volumeDensityResourceSize[1]===t&&this.volumeDensityResourceSize[2]===n)return;this.destroyVolumeDensityResources();let r=this.voxelCount(),i=r*4*Int32Array.BYTES_PER_ELEMENT,a=r*4*Float32Array.BYTES_PER_ELEMENT;this.volumeDensityAccumBuffer=this.device.createBuffer({size:i,usage:GPUBufferUsage.STORAGE}),this.volumeDensitySmallBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.STORAGE}),this.volumeDensityBlurTempBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.STORAGE}),this.volumeDensityLargeBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.STORAGE});let o={size:{width:e,height:t,depthOrArrayLayers:n},dimension:`3d`,format:`rgba16float`,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING};this.volumeDensitySmallTexture=this.device.createTexture(o),this.volumeDensityLargeTexture=this.device.createTexture(o);let s=Math.max(1,Math.ceil(e/2)),c=Math.max(1,Math.ceil(t/2)),l=Math.max(1,Math.ceil(n/2)),u=s*c*l*4*Float32Array.BYTES_PER_ELEMENT;this.volumeDensitySmallHalfBuffer=this.device.createBuffer({size:u,usage:GPUBufferUsage.STORAGE}),this.volumeDensityBlurTempHalfBuffer=this.device.createBuffer({size:u,usage:GPUBufferUsage.STORAGE}),this.volumeDensityLargeHalfBuffer=this.device.createBuffer({size:u,usage:GPUBufferUsage.STORAGE}),this.volumeDensityLargeTextureHalf=this.device.createTexture({size:{width:s,height:c,depthOrArrayLayers:l},dimension:`3d`,format:`rgba16float`,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.volumeDensitySampler=this.device.createSampler({magFilter:`linear`,minFilter:`linear`}),this.volumeDensityResourceSize=[e,t,n]}ensureDensityEmptyFogTexture(){return this.densityEmptyFogTexture?this.densityEmptyFogTexture:(this.densityEmptyFogTexture=this.device.createTexture({size:{width:1,height:1},format:Be,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.device.queue.writeTexture({texture:this.densityEmptyFogTexture},new Uint8Array(256),{bytesPerRow:256,rowsPerImage:1},{width:1,height:1}),this.densityEmptyFogTexture)}createBloomBindGroup(e,t){return this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:[{binding:0,resource:t.createView()},{binding:1,resource:this.postSampler},{binding:2,resource:{buffer:this.postUniformBuffer}}]})}createPostBindGroup(e,t){let n=t[0]??e,r=e=>t[e]??n;return this.device.createBindGroup({layout:this.postPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:e.createView()},{binding:1,resource:this.postSampler},{binding:2,resource:{buffer:this.postUniformBuffer}},{binding:3,resource:n.createView()},{binding:4,resource:r(1).createView()},{binding:5,resource:r(2).createView()},{binding:6,resource:r(3).createView()},{binding:7,resource:r(4).createView()},{binding:8,resource:r(5).createView()},{binding:9,resource:r(6).createView()},{binding:10,resource:r(7).createView()}]})}createPostNoBloomBindGroup(e){return this.device.createBindGroup({layout:this.postNoBloomPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:e.createView()},{binding:1,resource:this.postSampler},{binding:2,resource:{buffer:this.postUniformBuffer}}]})}ensureFogTextures(e,t){if(this.fogCurrentTexture&&this.fogTextureSize[0]===e&&this.fogTextureSize[1]===t){this.fogSampler=this.device.createSampler({magFilter:`linear`,minFilter:`linear`});return}this.destroyFogTextures();let n={size:{width:e,height:t},format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING};this.fogCurrentTexture=this.device.createTexture(n),this.fogHistoryTextures=[this.device.createTexture(n),this.device.createTexture(n)],this.fogSampler=this.device.createSampler({magFilter:`linear`,minFilter:`linear`}),this.fogTextureSize=[e,t],this.fogHistoryReadIndex=0,this.lastFogHistoryView=void 0,this.fogHistoryResetFrames=0}destroyFogTextures(){this.fogCurrentTexture?.destroy();for(let e of this.fogHistoryTextures)e.destroy();this.fogCurrentTexture=void 0,this.fogHistoryTextures=[],this.fogTextureSize=[0,0],this.fogHistoryReadIndex=0,this.lastFogHistoryView=void 0,this.fogHistoryResetFrames=0,this.fogSampler=void 0}clearFogHistoryView(){return this.lastFogHistoryView=void 0,this.fogHistoryResetFrames=0,!1}shouldResetFogHistory(e,t,n,r,i){let a={width:t,height:n,steps:r,layer:ct(e.renderLayer),fieldTextureMode:+!!i,emptySpaceSkip:+!!e.emptySpaceSkipping,emptySpaceThreshold:e.emptySpaceThreshold,emptySpaceStride:e.emptySpaceStride,density:e.density,exposure:e.exposure,sceneBrightness:e.sceneBrightness,trailOpacity:e.trailOpacity,fogBrightness:e.fogBrightness,trailThreshold:e.trailThreshold,trailColorMode:ft(e.trailColorMode),palette:e.palette===`aurora`?0:e.palette===`ember`?1:2,filament:e.filament,fogTint:mt(e.fogTint),yaw:e.cameraYaw,pitch:e.cameraPitch,distance:e.cameraDistance,panX:e.cameraPanX,panY:e.cameraPanY},o=this.lastFogHistoryView;return this.lastFogHistoryView=a,!o||o.width!==a.width||o.height!==a.height||o.steps!==a.steps||o.layer!==a.layer||o.fieldTextureMode!==a.fieldTextureMode||o.emptySpaceSkip!==a.emptySpaceSkip||ut(o.emptySpaceThreshold,a.emptySpaceThreshold)||ut(o.emptySpaceStride,a.emptySpaceStride)||ut(o.density,a.density)||ut(o.exposure,a.exposure)||ut(o.sceneBrightness,a.sceneBrightness)||ut(o.trailOpacity,a.trailOpacity)||ut(o.fogBrightness,a.fogBrightness)||ut(o.trailThreshold,a.trailThreshold)||o.trailColorMode!==a.trailColorMode||o.palette!==a.palette||ut(o.filament,a.filament)||ut(o.fogTint[0],a.fogTint[0])||ut(o.fogTint[1],a.fogTint[1])||ut(o.fogTint[2],a.fogTint[2])||ut(o.yaw,a.yaw)||ut(o.pitch,a.pitch)||ut(o.distance,a.distance)||ut(o.panX,a.panX)||ut(o.panY,a.panY)}createFogCompositeBindGroup(e,t,n){return this.device.createBindGroup({layout:this.fogCompositePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:e.createView()},{binding:1,resource:t.createView()},{binding:2,resource:this.fogSampler},{binding:3,resource:{buffer:n}}]})}createParticleRenderBindGroup(e,t,n=this.fieldBuffers[this.readIndex]){let r=this.particleRenderPipelines[e]??this.particleFastRenderPipelines[e]??this.particleRenderPipelines.additive??this.particleFastRenderPipelines.additive,i=this.particleRenderBindGroupLayout??r?.getBindGroupLayout(0);if(!i)throw Error(`particle render pipeline unavailable`);let a=this.particleChunks[t];if(!a)throw Error(`particle chunk unavailable`);let o=this.fieldBuffers[this.readIndex];if(n!==o)return this.device.createBindGroup({layout:i,entries:[{binding:0,resource:{buffer:a.buffers[this.readIndex]}},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:{buffer:a.buffers[+(this.readIndex===0)]}},{binding:3,resource:{buffer:n}},{binding:4,resource:{buffer:a.supportBuffer}},{binding:5,resource:{buffer:a.activeIndexBuffer}},{binding:6,resource:{buffer:a.cutoffSignalBuffer}},{binding:7,resource:{buffer:a.sortIdBuffer}}]});let s=this.particleRenderBindGroups[e]??(this.particleRenderBindGroups[e]=[]),c=s[t]??(s[t]=[]);return c[this.readIndex]??=this.device.createBindGroup({layout:i,entries:[{binding:0,resource:{buffer:a.buffers[this.readIndex]}},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:{buffer:a.buffers[+(this.readIndex===0)]}},{binding:3,resource:{buffer:o}},{binding:4,resource:{buffer:a.supportBuffer}},{binding:5,resource:{buffer:a.activeIndexBuffer}},{binding:6,resource:{buffer:a.cutoffSignalBuffer}},{binding:7,resource:{buffer:a.sortIdBuffer}}]}),c[this.readIndex]}createSplatPrepareBindGroup(e){let t=this.particleChunks[e];if(!t)throw Error(`particle chunk unavailable`);let n=this.splatPrepareBindGroups[e]??(this.splatPrepareBindGroups[e]=[]);return n[this.readIndex]??=this.device.createBindGroup({layout:this.splatPreparePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:t.buffers[this.readIndex]}},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:{buffer:t.buffers[+(this.readIndex===0)]}},{binding:3,resource:{buffer:this.fieldBuffers[this.readIndex]}},{binding:4,resource:{buffer:t.supportBuffer}},{binding:6,resource:{buffer:t.splatRecordBuffer}},{binding:7,resource:{buffer:t.sortIdBuffer}}]}),n[this.readIndex]}createSplatDrawBindGroup(e,t){let n=this.particleChunks[t];if(!n)throw Error(`particle chunk unavailable`);let r=this.splatDrawBindGroups[e]??(this.splatDrawBindGroups[e]=[]);return r[t]??=this.device.createBindGroup({layout:this.splatDrawPipelines[e].getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:6,resource:{buffer:n.splatRecordBuffer}}]}),r[t]}encodeSplatPrepare(e,t){if(!this.usesPreparedSplatPath(t)||!this.splatPreparePipeline)return;let n=e.beginComputePass();n.setPipeline(this.splatPreparePipeline);for(let e=0;e<this.particleChunks.length;e+=1){let t=this.particleChunks[e];n.setBindGroup(0,this.createSplatPrepareBindGroup(e)),n.dispatchWorkgroups(Math.ceil(t.count/256))}n.end()}splatPrepassEnabled=!0;computeSplatEnabled=!0;parallelPipelineCompile=!1;usesPreparedSplatPath(e){return this.splatPrepassEnabled&&this.usesFastParticlePipeline(e)&&this.usesParticleSplatLayer(e)&&e.renderLayer!==`debug-voxels`}usesComputeSplat(e){return this.computeSplatEnabled&&e.particleBlendMode===`additive`&&this.usesPreparedSplatPath(e)&&!!this.splatAccumPipeline&&!!this.splatResolvePipeline&&!!this.splatAccumBuffer}createSplatAccumBindGroup(e){let t=this.particleChunks[e];if(!t)throw Error(`particle chunk unavailable`);return this.splatAccumBindGroups[e]??=this.device.createBindGroup({layout:this.splatAccumPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:6,resource:{buffer:t.splatRecordBuffer}},{binding:7,resource:{buffer:this.splatAccumBuffer}}]}),this.splatAccumBindGroups[e]}createSplatResolveBindGroup(){return this.splatResolveBindGroup??=this.device.createBindGroup({layout:this.splatResolvePipeline.getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:6,resource:{buffer:this.splatAccumBuffer}}]}),this.splatResolveBindGroup}encodeSplatAccumulate(e,t){if(!this.usesComputeSplat(t))return;e.clearBuffer(this.splatAccumBuffer);let n=e.beginComputePass();n.setPipeline(this.splatAccumPipeline);for(let e=0;e<this.particleChunks.length;e+=1){let t=this.particleChunks[e];n.setBindGroup(0,this.createSplatAccumBindGroup(e)),n.dispatchWorkgroups(Math.ceil(t.count/256))}n.end()}createParticleSupportClearBindGroup(){return this.particleSupportClearBindGroup??=this.device.createBindGroup({layout:this.particleSupportClearPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:{buffer:this.particleSupportGridBuffer}}]}),this.particleSupportClearBindGroup}createParticleSupportBuildBindGroup(e,t){let n=this.particleChunks[e],r=t===0?0:1,i=this.particleSupportBuildBindGroups[e]??(this.particleSupportBuildBindGroups[e]=[]);return i[r]??=this.device.createBindGroup({layout:this.particleSupportBuildPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:n.buffers[r]}},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:{buffer:this.particleSupportGridBuffer}}]}),i[r]}createParticleSupportResolveBindGroup(e,t){let n=this.particleChunks[e],r=t===0?0:1,i=this.particleSupportResolveBindGroups[e]??(this.particleSupportResolveBindGroups[e]=[]);return i[r]??=this.device.createBindGroup({layout:this.particleSupportResolvePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:n.buffers[r]}},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:{buffer:this.particleSupportGridBuffer}},{binding:3,resource:{buffer:n.supportBuffer}},{binding:4,resource:{buffer:n.activeIndexBuffer}},{binding:5,resource:{buffer:n.activeDrawBuffer}}]}),i[r]}createDensitySplatBindGroup(e,t,n=this.fieldBuffers[this.readIndex]){let r=this.particleChunks[t];if(!r)throw Error(`particle chunk unavailable`);let i=this.fieldBuffers[this.readIndex];if(n!==i)return this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:r.buffers[this.readIndex]}},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:{buffer:r.buffers[+(this.readIndex===0)]}},{binding:3,resource:{buffer:n}}]});let a=e===this.densitySmallPipeline?0:1,o=this.densitySplatBindGroups[a]??(this.densitySplatBindGroups[a]=[]),s=o[t]??(o[t]=[]);return s[this.readIndex]??=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:r.buffers[this.readIndex]}},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:{buffer:r.buffers[+(this.readIndex===0)]}},{binding:3,resource:{buffer:i}}]}),s[this.readIndex]}createDensityCompositeBindGroup(e){return this.densityCompositeBindGroup&&this.densityCompositeFogTexture===e?this.densityCompositeBindGroup:(this.densityCompositeBindGroup=this.device.createBindGroup({layout:this.densityCompositePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.densitySmallTexture.createView()},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:this.densityLargeTexture.createView()},{binding:3,resource:e.createView()},{binding:4,resource:this.densitySampler}]}),this.densityCompositeFogTexture=e,this.densityCompositeBindGroup)}createAccumulationSplatBindGroup(e){let t=this.particleChunks[e];if(!t)throw Error(`particle chunk unavailable`);let n=this.accumulationSplatBindGroups[e]??(this.accumulationSplatBindGroups[e]=[]);return n[this.readIndex]??=this.device.createBindGroup({layout:this.accumulationSplatPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:t.buffers[this.readIndex]}},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:{buffer:t.buffers[+(this.readIndex===0)]}},{binding:3,resource:{buffer:this.fieldBuffers[this.readIndex]}}]}),n[this.readIndex]}createAccumulationCompositeBindGroup(e){return this.device.createBindGroup({layout:this.accumulationCompositePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.accumulationCurrentTexture.createView()},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:e.createView()},{binding:3,resource:this.accumulationSampler}]})}createVolumeDensityClearBindGroup(){return this.volumeDensityClearBindGroup??=this.device.createBindGroup({layout:this.volumeDensityClearPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.volumeDensityAccumBuffer}},{binding:1,resource:{buffer:this.renderUniformBuffer}}]}),this.volumeDensityClearBindGroup}createVolumeDensityDepositBindGroup(e){let t=this.particleChunks[e];if(!t)throw Error(`particle chunk unavailable`);let n=this.volumeDensityDepositBindGroups[e]??(this.volumeDensityDepositBindGroups[e]=[]);return n[this.readIndex]??=this.device.createBindGroup({layout:this.volumeDensityDepositPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.volumeDensityAccumBuffer}},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:{buffer:t.buffers[this.readIndex]}},{binding:3,resource:{buffer:t.buffers[+(this.readIndex===0)]}},{binding:9,resource:{buffer:this.chunkSimUniformBuffers[e]}},{binding:10,resource:{buffer:this.fieldBuffers[this.readIndex]}}]}),n[this.readIndex]}createVolumeDensityResolveBindGroup(){return this.volumeDensityResolveBindGroup??=this.device.createBindGroup({layout:this.volumeDensityResolvePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.volumeDensityAccumBuffer}},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:4,resource:{buffer:this.volumeDensitySmallBuffer}},{binding:5,resource:this.volumeDensitySmallTexture.createView()}]}),this.volumeDensityResolveBindGroup}createVolumeDensityBlurBindGroup(e,t,n){let r=e===this.volumeDensityBlurXPipeline?this.volumeDensityBlurXBindGroup:this.volumeDensityBlurYBindGroup;if(r)return r;let i=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:6,resource:{buffer:t}},{binding:7,resource:{buffer:n}}]});return e===this.volumeDensityBlurXPipeline?this.volumeDensityBlurXBindGroup=i:this.volumeDensityBlurYBindGroup=i,i}createVolumeDensityBlurZBindGroup(){return this.volumeDensityBlurZBindGroup??=this.device.createBindGroup({layout:this.volumeDensityBlurZPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:6,resource:{buffer:this.volumeDensityLargeBuffer}},{binding:8,resource:this.volumeDensityLargeTexture.createView()}]}),this.volumeDensityBlurZBindGroup}createVolumeDownsampleBindGroup(){return this.volumeDensityDownsampleBindGroup??=this.device.createBindGroup({layout:this.volumeDensityDownsamplePipeline.getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:6,resource:{buffer:this.volumeDensitySmallBuffer}},{binding:7,resource:{buffer:this.volumeDensitySmallHalfBuffer}}]}),this.volumeDensityDownsampleBindGroup}createVolumeBlurHalfBindGroup(e,t,n){let r=e===this.volumeDensityBlurXHalfPipeline?this.volumeDensityBlurXHalfBindGroup:this.volumeDensityBlurYHalfBindGroup;if(r)return r;let i=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:6,resource:{buffer:t}},{binding:7,resource:{buffer:n}}]});return e===this.volumeDensityBlurXHalfPipeline?this.volumeDensityBlurXHalfBindGroup=i:this.volumeDensityBlurYHalfBindGroup=i,i}createVolumeBlurZHalfBindGroup(){return this.volumeDensityBlurZHalfBindGroup??=this.device.createBindGroup({layout:this.volumeDensityBlurZHalfPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:6,resource:{buffer:this.volumeDensityLargeHalfBuffer}},{binding:8,resource:this.volumeDensityLargeTextureHalf.createView()}]}),this.volumeDensityBlurZHalfBindGroup}createVolumeDensityRenderBindGroup(e){return e?(this.volumeDensityRenderHalfBindGroup??=this.device.createBindGroup({layout:this.volumeDensityRenderPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.volumeDensitySmallTexture.createView()},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:this.volumeDensityLargeTextureHalf.createView()},{binding:3,resource:this.volumeDensitySampler}]}),this.volumeDensityRenderHalfBindGroup):(this.volumeDensityRenderBindGroup??=this.device.createBindGroup({layout:this.volumeDensityRenderPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.volumeDensitySmallTexture.createView()},{binding:1,resource:{buffer:this.renderUniformBuffer}},{binding:2,resource:this.volumeDensityLargeTexture.createView()},{binding:3,resource:this.volumeDensitySampler}]}),this.volumeDensityRenderBindGroup)}createOverlayBindGroup(){return this.overlayBindGroup??=this.device.createBindGroup({layout:this.overlayPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.renderUniformBuffer}}]}),this.overlayBindGroup}createFieldTextureBindGroup(){return this.fieldTextureBindGroups[this.readIndex]??=this.device.createBindGroup({layout:this.fieldTexturePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.fieldBuffers[this.readIndex]}},{binding:1,resource:this.fieldTexture.createView()},{binding:2,resource:{buffer:this.simUniformBuffer}}]}),this.fieldTextureBindGroups[this.readIndex]}getClearBindGroup(){let e=this.device;return this.clearBindGroup??=e.createBindGroup({layout:this.clearBrushPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.brushBuffer}},{binding:1,resource:{buffer:this.simUniformBuffer}}]}),this.clearBindGroup}particleSortEnabled=!0;static SORT_INTERVAL_STEPS=16;shouldSortAtCurrentStep(){return this.particleSortEnabled&&!this.ribbonsActive&&this.timestep>0&&this.timestep%e.SORT_INTERVAL_STEPS===0&&!!this.sortHistogramPipeline&&!!this.sortScanPipeline&&!!this.sortScatterPipeline&&!!this.sortApplyPipeline}lastSortTimestep=-1;encodeSortPass(e){this.lastSortTimestep=this.timestep;let t=this.device;this.sortHistBuffer??=t.createBuffer({size:Sn**3*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});let n=this.readIndex,r=+(n===0);for(let i=0;i<this.particleChunks.length;i+=1){let a=this.particleChunks[i],o=this.sortHistBindGroups[i]??(this.sortHistBindGroups[i]=[]);o[n]??=t.createBindGroup({layout:this.sortHistogramPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:a.buffers[n]}},{binding:1,resource:{buffer:this.sortHistBuffer}}]}),this.sortScanBindGroup??=t.createBindGroup({layout:this.sortScanPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:this.sortHistBuffer}}]});let s=this.sortScatterBindGroups[i]??(this.sortScatterBindGroups[i]=[]);s[n]??=t.createBindGroup({layout:this.sortScatterPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:a.buffers[n]}},{binding:1,resource:{buffer:this.sortHistBuffer}},{binding:2,resource:{buffer:a.sortIdBuffer}},{binding:3,resource:{buffer:a.sortScratchBuffer}},{binding:4,resource:{buffer:a.sortScratchIdBuffer}},{binding:5,resource:{buffer:a.sortMapBuffer}}]});let c=this.sortApplyBindGroups[i]??(this.sortApplyBindGroups[i]=[]);c[n]??=t.createBindGroup({layout:this.sortApplyPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:a.buffers[r]}},{binding:1,resource:{buffer:a.sortMapBuffer}},{binding:2,resource:{buffer:a.sortScratchBuffer}}]});let l=Math.ceil(a.count/256);e.clearBuffer(this.sortHistBuffer);let u=e.beginComputePass();u.setPipeline(this.sortHistogramPipeline),u.setBindGroup(0,o[n]),u.dispatchWorkgroups(l),u.end();let d=e.beginComputePass();d.setPipeline(this.sortScanPipeline),d.setBindGroup(0,this.sortScanBindGroup),d.dispatchWorkgroups(1),d.end();let f=e.beginComputePass();f.setPipeline(this.sortScatterPipeline),f.setBindGroup(0,s[n]),f.dispatchWorkgroups(l),f.end();let p=a.count*32;e.copyBufferToBuffer(a.sortScratchBuffer,0,a.buffers[n],0,p),e.copyBufferToBuffer(a.sortScratchIdBuffer,0,a.sortIdBuffer,0,a.count*4);let m=e.beginComputePass();m.setPipeline(this.sortApplyPipeline),m.setBindGroup(0,c[n]),m.dispatchWorkgroups(l),m.end(),e.copyBufferToBuffer(a.sortScratchBuffer,0,a.buffers[r],0,p)}}getParticleStepBindGroups(e){let t=this.device,n=this.particleChunks[e];if(!n)throw Error(`particle chunk unavailable`);let r=this.readIndex,i=this.writeIndex,a=this.depositBindGroups[e]??(this.depositBindGroups[e]=[]),o=this.updateBindGroups[e]??(this.updateBindGroups[e]=[]);if(a[r]??=t.createBindGroup({layout:this.depositPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:n.buffers[r]}},{binding:1,resource:{buffer:this.brushBuffer}},{binding:2,resource:{buffer:this.chunkSimUniformBuffers[e]}},{binding:4,resource:{buffer:n.sortIdBuffer}}]}),o[r]??=t.createBindGroup({layout:this.updatePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:n.buffers[r]}},{binding:1,resource:{buffer:this.fieldBuffers[r]}},{binding:2,resource:{buffer:n.buffers[i]}},{binding:3,resource:{buffer:this.chunkSimUniformBuffers[e]}},{binding:4,resource:{buffer:this.ruleBuffer}},{binding:5,resource:{buffer:n.sortIdBuffer}}]}),this.usesFieldTextureSensing()){let o=this.updateTextureBindGroups[e]??(this.updateTextureBindGroups[e]=[]);return o[r]??=t.createBindGroup({layout:this.updateTexturePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:n.buffers[r]}},{binding:1,resource:this.fieldTexture.createView()},{binding:2,resource:{buffer:n.buffers[i]}},{binding:3,resource:{buffer:this.chunkSimUniformBuffers[e]}},{binding:4,resource:{buffer:this.ruleBuffer}},{binding:5,resource:{buffer:n.sortIdBuffer}}]}),{deposit:a[r],update:o[r]}}return{deposit:a[r],update:o[r]}}fieldTextureSensingEnabled=!0;usesFieldTextureSensing(){return this.fieldTextureSensingEnabled&&this.float32FilterableSupported&&!!this.updateTexturePipeline&&!!this.fieldTexture}fieldTextureFormat(){return this.float32FilterableSupported?`rgba32float`:`rgba16float`}getVisualDepositBindGroup(e){let t=this.device,n=this.particleChunks[e];if(!n)throw Error(`particle chunk unavailable`);let r=this.visualDepositBindGroups[e]??(this.visualDepositBindGroups[e]=[]);return r[this.readIndex]??=t.createBindGroup({layout:this.visualDepositPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:n.buffers[this.readIndex]}},{binding:1,resource:{buffer:this.brushBuffer}},{binding:2,resource:{buffer:this.chunkSimUniformBuffers[e]}},{binding:3,resource:{buffer:n.buffers[+(this.readIndex===0)]}},{binding:4,resource:{buffer:n.sortIdBuffer}}]}),r[this.readIndex]}getFieldStepBindGroup(){let e=this.device,t=this.readIndex,n=this.writeIndex;return this.fieldBindGroups[t]??=e.createBindGroup({layout:this.fieldPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.fieldBuffers[t]}},{binding:1,resource:{buffer:this.brushBuffer}},{binding:2,resource:{buffer:this.fieldBuffers[n]}},{binding:3,resource:{buffer:this.simUniformBuffer}},{binding:4,resource:this.fieldTexture.createView()}]}),this.fieldBindGroups[t]}ecologyActive(){return this.config.speciesForce>0||this.config.predator>0||this.config.alarm>0}async ensureEcologyResources(){let e=this.device;if(!e||!this.ecologyActive())return;let t=this.voxelCount()*4*Float32Array.BYTES_PER_ELEMENT;this.ecologyFieldBuffer||=e.createBuffer({size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.ecologyBrushBuffer||=e.createBuffer({size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.ecologyDepositPipeline||=await e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:rn}),entryPoint:`ecology_deposit`}}),this.ecologyUpdatePipeline||=await e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:z}),entryPoint:`ecology_update`}}),this.ecologyParticlePipeline||=await e.createComputePipelineAsync({layout:`auto`,compute:{module:e.createShaderModule({code:an(!1)}),entryPoint:`update_particles`}})}ecologyReady(){return this.ecologyActive()&&!!this.ecologyFieldBuffer&&!!this.ecologyBrushBuffer&&!!this.ecologyDepositPipeline&&!!this.ecologyUpdatePipeline&&!!this.ecologyParticlePipeline}getEcologyClearBindGroup(){return this.ecologyClearBindGroup??=this.device.createBindGroup({layout:this.clearBrushPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.ecologyBrushBuffer}},{binding:1,resource:{buffer:this.simUniformBuffer}}]}),this.ecologyClearBindGroup}getEcologyDepositBindGroup(e){let t=this.particleChunks[e],n=this.ecologyDepositBindGroups[e]??(this.ecologyDepositBindGroups[e]=[]);return n[this.readIndex]??=this.device.createBindGroup({layout:this.ecologyDepositPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:t.buffers[this.readIndex]}},{binding:1,resource:{buffer:this.ecologyBrushBuffer}},{binding:2,resource:{buffer:this.chunkSimUniformBuffers[e]}}]}),n[this.readIndex]}getEcologyUpdateBindGroup(){return this.ecologyUpdateBindGroup??=this.device.createBindGroup({layout:this.ecologyUpdatePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.ecologyBrushBuffer}},{binding:1,resource:{buffer:this.ecologyFieldBuffer}},{binding:2,resource:{buffer:this.simUniformBuffer}}]}),this.ecologyUpdateBindGroup}getEcologyParticleBindGroup(e){let t=this.particleChunks[e],n=this.ecologyParticleBindGroups[e]??(this.ecologyParticleBindGroups[e]=[]);return n[this.readIndex]??=this.device.createBindGroup({layout:this.ecologyParticlePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:t.buffers[this.readIndex]}},{binding:1,resource:{buffer:this.fieldBuffers[this.readIndex]}},{binding:2,resource:{buffer:t.buffers[this.writeIndex]}},{binding:3,resource:{buffer:this.chunkSimUniformBuffers[e]}},{binding:4,resource:{buffer:this.ruleBuffer}},{binding:5,resource:{buffer:t.sortIdBuffer}},{binding:6,resource:{buffer:this.ecologyFieldBuffer}}]}),n[this.readIndex]}getVisualFieldBindGroup(){let e=this.device,t=this.visualFieldReadIndex,n=+(t===0);return this.visualFieldBindGroups[t]??=e.createBindGroup({layout:this.visualFieldSmoothPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.visualFieldBuffers[t]}},{binding:1,resource:{buffer:this.brushBuffer}},{binding:2,resource:{buffer:this.visualFieldBuffers[n]}},{binding:3,resource:{buffer:this.simUniformBuffer}}]}),this.visualFieldBindGroups[t]}advanceParticleDensityReference(){return this.targetParticleDensityReference<=0&&(this.targetParticleDensityReference=tt(this.lastFieldStats)),this.smoothedParticleDensityReference=I(this.smoothedParticleDensityReference,this.targetParticleDensityReference),this.smoothedParticleDensityReference}resolveColorBlend(e){let t=performance.now(),n=this.colorBlendLastMs===0?0:Math.max(0,t-this.colorBlendLastMs);return this.colorBlendLastMs=t,e!==this.colorBlendToMode&&(this.colorBlend>=1&&(this.colorBlendFromMode=this.colorBlendToMode,this.colorBlend=0),this.colorBlendToMode=e),this.colorBlend<1&&(this.colorBlend=Math.min(1,this.colorBlend+n/Je)),{from:this.colorBlendFromMode,blend:this.colorBlend}}applyFieldStats(e){this.lastFieldStats=e;let t=tt(e);t>0&&(this.targetParticleDensityReference=t,this.smoothedParticleDensityReference<=0&&(this.smoothedParticleDensityReference=t))}scheduleFieldStatsRead(){let e=this.device,t=this.fieldBuffers[this.readIndex];if(!e||!t||this.fieldStatsReadPending)return;let n=this.fieldStatsReadGeneration;this.fieldStatsReadPending=!0,this.readFieldStatsFromBuffer(t,n).then(e=>{n===this.fieldStatsReadGeneration&&this.applyFieldStats(e)}).catch(()=>{}).finally(()=>{n===this.fieldStatsReadGeneration&&(this.fieldStatsReadPending=!1)})}async readFieldStats(){let e=this.fieldBuffers[this.readIndex];return e?this.readFieldStatsFromBuffer(e,this.fieldStatsReadGeneration):this.lastFieldStats}async readFieldStatsFromBuffer(e,t){let n=this.device,r=this.voxelCount()*4*Float32Array.BYTES_PER_ELEMENT,i=n.createBuffer({size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),a=n.createCommandEncoder();a.copyBufferToBuffer(e,0,i,0,r),n.queue.submit([a.finish()]);try{return await i.mapAsync(GPUMapMode.READ),t===this.fieldStatsReadGeneration?Qe(new Float32Array(i.getMappedRange().slice(0))):this.lastFieldStats}finally{i.mapState===`mapped`&&i.unmap(),i.destroy()}}voxelCount(){return this.config.width*this.config.height*this.config.depth}};function Qe(e){let t=0,n=0,r=0,i=0,a=0,o=0;for(let s=0;s<e.length;s+=4){let c=Math.hypot(e[s],e[s+1],e[s+2]),l=Math.max(0,e[s+3]),u=$e(l,c);t+=l,n+=c,i=Math.max(i,l),a=Math.max(a,u),u>1e-4&&(r+=1,o+=u)}let s=r>0?o/r:0;return{densitySum:t,flowSum:n,nonzeroVoxels:r,maxDensity:i,maxDensitySignal:a,densitySignalMean:s,densitySignalP90:et(e,a,r,.9)}}function $e(e,t){return Math.max(0,e+t*.25)}function et(e,t,n,r){if(t<=0||n<=0)return 0;let i=new Uint32Array(128),a=127/t;for(let t=0;t<e.length;t+=4){let n=Math.hypot(e[t],e[t+1],e[t+2]),r=$e(Math.max(0,e[t+3]),n);if(r>1e-4){let e=Math.min(127,Math.floor(r*a));i[e]+=1}}let o=Math.max(1,Math.ceil(n*lt(r,0,1))),s=0;for(let e=0;e<128;e+=1)if(s+=i[e],s>=o)return(e+.5)/a;return t}function tt(e){return e.densitySignalP90>0?e.densitySignalP90:e.densitySignalMean>0?e.densitySignalMean:e.maxDensitySignal}function I(e,t,n=.04){if(t<=0)return e>0?e:0;if(e<=0)return t;let r=lt(n,0,1);return e+(t-e)*r}function nt(e,t,n,r=0,i=e.particleCount,a=n,o=0){let s=new ArrayBuffer(Le),c=new Uint32Array(s),l=new Float32Array(s),u=lt(n,0,1);return c[0]=e.width,c[1]=e.height,c[2]=e.depth,c[3]=e.particleCount,c[4]=t,c[5]=e.seed>>>0,c[6]=e.cohorts,c[7]=e.boundaryMode,l[8]=e.dt*u,l[9]=e.sensorGain,l[10]=e.sensorAngle,l[11]=e.sensorDistance,l[12]=e.mutationScale,l[13]=e.globalForceMult,l[14]=e.drag,l[15]=e.strafePower,l[16]=e.axialForce,l[17]=e.lateralForce,l[18]=e.hazardRate,l[19]=e.trailPersistence,l[20]=e.trailDiffusion,l[21]=e.depositRadius,l[22]=e.depositMass,l[23]=e.sigma,l[24]=e.ruleSeed,l[25]=e.orientationMix,c[26]=e.symmetryAxes>>>0&7,c[27]=e.absoluteOrientation,c[28]=e.initialConditions,c[29]=Math.max(0,Math.min(6,Math.round(e.depositTapRadius))),l[30]=e.hueSensitivity,c[31]=+!!e.colorByCohort,l[32]=u,l[33]=lt(a,0,1),l[34]=e.recycleCutoff,c[35]=+!!e.recycleEnabled,c[36]=Math.max(0,Math.floor(r)),c[37]=Math.max(0,Math.floor(i)),c[38]=e.domainShape,l[38]=lt(o,0,1),l[40]=e.pulseDepth,l[41]=e.pulseRate,l[42]=e.restlessness,l[43]=e.mips,l[44]=e.anisoFollow,l[45]=e.flockAlign,l[46]=e.flockSeparate,l[47]=e.chemotaxis,l[48]=e.quorumStrength,l[49]=e.quorumThreshold,l[50]=e.leniaStrength,l[51]=e.leniaCenter,l[52]=e.leniaWidth,l[53]=e.speciesForce,l[54]=e.predator,l[55]=e.alarm,l[56]=e.grayScott,l[57]=e.gsFeed,l[58]=e.gsKill,l[59]=e.energy,l[60]=e.energyDrain,l[61]=lt(Number.isFinite(e.strafeMomentum)?e.strafeMomentum:0,0,1),s}function rt(e,t){let n=lt(t,0,4);if(n<=0)return{steps:0,accumulator:0,stepScales:[],timeAdvance:0,renderLerpT:1};let r=e+n,i=Math.floor(r);r-=i;let a=[];for(let e=0;e<i;e+=1)a.push(1);return{steps:a.length,accumulator:r,stepScales:a,timeAdvance:a.length,renderLerpT:n<1?r:1}}function L(e,t){let n=e===0?0:1;return t<=1e-6?1-n:n}function it(e,t,n){return n?t===0?0:1:e===0?0:1}function at(e,t){let n=[0,0,0,0,0,0,0,0],r=.02,i=.006*Math.max(.05,t),a=0;for(let t=0;t<e&&t<8;t+=1){let e=2**(t+1),o=e*i,s=20.91/(o+r)**3,c=72.37/(o+r)**2,l=(.478*s+.138*c)*e*e*e;n[t]=l,a+=l}if(a>0)for(let e=0;e<8;e+=1)n[e]/=a;return n}function ot(e){let t=new ArrayBuffer(128),n=new Float32Array(t);n[0]=e.bloomStrength,n[1]=e.bloomThreshold,n[2]=e.bloomRadius,n[3]=e.levelCount,n[4]=e.tint[0],n[5]=e.tint[1],n[6]=e.tint[2],n[8]=e.colorSaturation,n[9]=e.colorContrast,n[11]=e.hdrGain??0;for(let t=0;t<4;t+=1)n[12+t]=e.weights[t]??0;for(let t=0;t<4;t+=1)n[16+t]=e.weights[4+t]??0;return n[20]=e.chromaticAberration??0,n[21]=e.vignetteStrength??0,n[22]=e.vignetteSoftness??.5,n[24]=e.streakStrength??0,n[25]=e.streakLength??.6,n[26]=e.streakVertical??0,n[28]=e.flareHeight??.3,n[29]=e.flareCutoff??0,n[30]=Number.isFinite(e.despeckle)?e.despeckle:0,n[31]=0,t}function st(e){let t=new ArrayBuffer(qe),n=new Float32Array(t),r=new Uint32Array(t);return n[0]=e.resolution[0],n[1]=e.resolution[1],r[2]=e.dimensions[0],r[3]=e.dimensions[1],r[4]=e.dimensions[2],r[5]=e.particleCount,r[6]=e.voxelCount,r[7]=e.timestep,n[8]=e.density,n[9]=e.exposure,n[10]=e.focusDistance,n[11]=e.aperture,r[12]=e.overlay,r[13]=e.palette,n[14]=e.filament,n[15]=e.yawCos,n[16]=e.yawSin,n[17]=e.pitchCos,n[18]=e.pitchSin,n[19]=e.distance,r[20]=e.raySteps,n[21]=e.fogStepScale,n[22]=e.fogTemporalBlend,r[23]=e.fogBlueNoise,r[24]=e.fogFrame,r[25]=e.fieldTextureMode,r[26]=e.emptySpaceSkip,n[27]=e.emptySpaceThreshold,n[28]=e.emptySpaceStride,n[29]=e.particleSizePx,n[30]=e.particleMinPx,n[31]=e.particleMaxPx,n[32]=e.particleOpacity,r[33]=e.particleBlendMode,n[34]=e.particleDensityCutoff,n[35]=e.particleDensityRadius,n[36]=e.trailOpacity,n[37]=e.trailThreshold,r[38]=e.renderLayer,n[39]=e.cameraPanX,n[40]=e.cameraPanY,r[41]=e.trailColorMode,n[42]=e.fogTint[0],n[43]=e.fogTint[1],n[44]=e.fogTint[2],n[45]=e.particleTint[0],n[46]=e.particleTint[1],n[47]=e.particleTint[2],n[48]=e.sceneBrightness,n[49]=e.particleBrightness,n[50]=e.fogBrightness,r[51]=e.particleColorMode,r[52]=e.particleVelocityStretch,n[53]=e.particleStretch,n[54]=e.particleGradientSensitivity,n[55]=e.focalK,n[56]=e.dofBlur,r[57]=e.dofDebug,n[58]=e.renderLerpT,r[59]=e.dofEnabled,n[60]=e.densityPassStrength,n[61]=e.densitySmallScale,n[62]=e.densityLargeScale,n[63]=e.densityLargeThreshold,n[64]=e.densityContrastGain,n[65]=e.densityContrastBalance,n[66]=e.densityEmissionPower,n[67]=e.densityOcclusion,r[68]=Math.max(1,Math.round(e.cohorts)),n[69]=e.particleSlowCutoff,n[70]=e.particleGlowCore,n[71]=e.particleHotCore,n[72]=e.accumulationStrength,n[73]=e.accumulationRadius,n[74]=e.accumulationCurve,n[75]=e.accumulationMemory,n[76]=e.accumulationNoiseReject,n[77]=e.particleDensityReference,n[78]=e.particleDensityNormalize,n[79]=e.particleDensitySoftness,n[80]=e.particleSupportMask,n[81]=e.particleSupportRadius,n[82]=e.particleSupportNeighbors,n[83]=e.particleSupportFlow,r[84]=Math.max(1,Math.round(e.particleSupportGridSize)),n[85]=e.particleStretchMin,n[86]=e.particleStretchSpeed,n[87]=e.particleSpeedCutoff,n[88]=e.variationMaster,n[89]=e.variationTime,n[90]=e.variationDrift,n[91]=e.variationNoiseMix,n[92]=e.variationFreq,r[93]=Math.max(1,Math.round(e.variationOctaves)),n[94]=e.variationGain,n[95]=e.variationLacunarity,n[96]=e.variationSizeAmount,n[97]=e.variationSizeCurve,n[98]=e.variationSizeMin,n[99]=e.variationSizeMax,n[100]=e.variationBrightAmount,n[101]=e.variationBrightCurve,n[102]=e.variationBrightMin,n[103]=e.variationBrightMax,n[104]=e.variationOpacityAmount,n[105]=e.variationOpacityCurve,n[106]=e.variationOpacityMin,n[107]=e.variationOpacityMax,n[108]=e.variationColorAmount,n[109]=e.variationColorCurve,n[110]=e.variationColorMin,n[111]=e.variationColorMax,r[112]=e.domainShape,n[113]=e.audioLow,n[114]=e.audioMid,n[115]=e.audioHigh,r[116]=e.particleColorModeFrom,n[117]=e.particleColorBlend,r[118]=e.particleCutoffPrepass,n[124]=Number.isFinite(e.particleExponent)?e.particleExponent:1,n[125]=Number.isFinite(e.particleBrightnessBoost)?e.particleBrightnessBoost:1,n[126]=Number.isFinite(e.particleSupportSmoothing)?e.particleSupportSmoothing:0,n[127]=Number.isFinite(e.particleHazeCull)?e.particleHazeCull:0,t}function ct(e){return e===`particles`?1:e===`trails`?2:e===`debug-voxels`?3:e===`density`?4:e===`volume-density`?5:e===`accumulation`?6:0}function lt(e,t,n){return Math.min(n,Math.max(t,Number.isFinite(e)?e:t))}function ut(e,t,n=1e-6){return Math.abs(e-t)>n}function dt(e){return Math.round(lt(e,8,512)/8)*8}function ft(e){return e===`flow`?1:e===`thermal`?2:e===`tint`?3:0}function pt(e){return e===`gradient-inferno`?1:e===`gradient-magma`?2:e===`gradient-viridis`?3:e===`gradient-turbo`?4:e===`gradient-rainbow`?5:e===`gradient-spectral`?6:e===`gradient-plasma`?7:e===`gradient-cosmic`?8:e===`gradient-ice`?9:e===`gradient-ember`?10:e===`velocity`?11:e===`cohort`?12:e===`audio`?13:e===`velocity-inferno`?14:e===`velocity-viridis`?15:e===`velocity-spectral`?16:e===`velocity-cosmic`?17:e===`velocity-ice`?18:e===`audio-magma`?19:e===`audio-viridis`?20:e===`audio-turbo`?21:e===`audio-cosmic`?22:e===`audio-ice`?23:e===`audio-ember`?24:e===`audio-plasma`?25:0}function mt(e){let t=/^#([0-9a-f]{6})$/i.exec(e);if(!t)return[1,1,1];let n=t[1];return[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255]}var ht=[`additive`,`alpha`,`opaque`];function gt(e){return e===`alpha`?1:e===`opaque`?2:0}function _t(e=[]){let t=new Float32Array(80);for(let n=0;n<Math.min(80,e.length);n+=1)t[n]=Math.fround(e[n]);return t}function vt(e,t){return e.width!==t.width||e.height!==t.height||e.depth!==t.depth||e.particleCount!==t.particleCount||e.seed!==t.seed||e.cohorts!==t.cohorts||!Ot(e.rule,t.rule)}var yt=.13,bt=64,xt=134217728,St=268435456,Ct=Ie*Float32Array.BYTES_PER_ELEMENT;function wt(e){return e.particleCount*Ct}function Tt(e){return e*e*e*4*Int32Array.BYTES_PER_ELEMENT}function Et(e){let t=Math.min(e.maxBufferSize||St,e.maxStorageBufferBindingSize||xt);for(let e of[128,96,64])if(Tt(e)<=t)return e;return 32}function Dt(e){let t=Math.max(Ct,Math.min(e.maxBufferSize||St,e.maxStorageBufferBindingSize||xt));return Math.max(1,Math.floor(t/Ct))}function Ot(e=[],t=[]){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(Math.fround(e[n])!==Math.fround(t[n]))return!1;return!0}function kt(e,t=0,n=e.particleCount){let r=new Float32Array(n*Ie);for(let i=0;i<n;i+=1){let n=t+i,a=Nt(n,e);a.position=Mt(a.position,e.domainShape);let o=Math.floor(e.cohorts*n/Math.max(1,e.particleCount)),s=At(o,e),c=i*Ie;r[c]=Math.fround(a.position[0]),r[c+1]=Math.fround(a.position[1]),r[c+2]=Math.fround(a.position[2]),r[c+3]=o,r[c+4]=Math.fround(a.velocity[0]),r[c+5]=Math.fround(a.velocity[1]),r[c+6]=Math.fround(a.velocity[2]),r[c+7]=Math.fround(s[0])}return r}function At(e,t){let n=t.colorByCohort?qt(Math.floor(e),Math.floor(e)):0;return[Math.fround(n),.8,1,.045]}function jt(e,t){if(t===1)return Math.hypot(e[0],e[1],e[2])-1;if(t===2){let t=Math.hypot(e[0],e[2])-1,n=Math.abs(e[1])-1;return Math.hypot(Math.max(t,0),Math.max(n,0))+Math.min(Math.max(t,n),0)}if(t===3){let t=(1-e[1])*.5;return Math.max(Math.max(-1-e[1],Math.abs(e[0])-t),Math.abs(e[2])-t)}let n=Math.abs(e[0])-1,r=Math.abs(e[1])-1,i=Math.abs(e[2])-1;return Math.hypot(Math.max(n,0),Math.max(r,0),Math.max(i,0))+Math.min(Math.max(n,r,i),0)}function Mt(e,t){if(t===0)return e;let n=jt(e,t);if(n<=0)return e;let r=.0015,i=jt([e[0]+r,e[1],e[2]],t)-jt([e[0]-r,e[1],e[2]],t),a=jt([e[0],e[1]+r,e[2]],t)-jt([e[0],e[1]-r,e[2]],t),o=jt([e[0],e[1],e[2]+r],t)-jt([e[0],e[1],e[2]-r],t),s=(n+5e-4)/(Math.hypot(i,a,o)||1);return[e[0]-i*s,e[1]-a*s,e[2]-o*s]}function Nt(e,t){let n=R(t.seed,e,0,0,0,Math.PI*2),r=t.cohorts*e/Math.max(1,t.particleCount);R(t.seed,e,0,5,-.045,.045);let i=R(t.seed,e,0,6,-5e-5,5e-5),a=R(t.seed,e,0,7,-5e-5,5e-5),o=R(t.seed,e,0,8,-5e-5,5e-5);if(t.initialConditions===0){let n=Math.ceil(Math.cbrt(Math.max(1,t.cohorts))),s=Math.floor(r),c=s%n,l=Math.floor(s/n)%n,u=Math.floor(s/(n*n))%n,d=n>1?1.55/(n-1):0,f=[-.775+c*d,-.775+l*d,-.775+u*d];return{position:[It(f[0]+R(t.seed,e,0,9,-.055,.055)),It(f[1]+R(t.seed,e,0,10,-.055,.055)),It(f[2]+R(t.seed,e,0,11,-.055,.055))],velocity:[i,a,o]}}if(t.initialConditions===1)return{position:[R(t.seed,e,0,1,-.86,.86),R(t.seed,e,0,2,-.86,.86),R(t.seed,e,0,3,-.86,.86)],velocity:[i,a,o]};if(t.initialConditions===3){let t=Pt(e);return{position:t.position,velocity:t.velocity}}let s=e/Math.max(1,t.particleCount);if(t.initialConditions===4){let n=s*4*Math.PI*2+e%2*Math.PI;return{position:[.55*Math.cos(n)+R(t.seed,e,0,12,-.04,.04),.55*Math.sin(n)+R(t.seed,e,0,13,-.04,.04),-.82+1.64*s],velocity:[-Math.sin(n)*.02+i,Math.cos(n)*.02+a,.004+o]}}if(t.initialConditions===5){let n=R(t.seed,e,0,12,0,Math.PI*2),r=Math.sqrt(R(t.seed,e,0,13,0,1))*.82;return{position:[Math.cos(n)*r,Math.sin(n)*r,R(t.seed,e,0,14,-.03,.03)],velocity:[i,a,o]}}if(t.initialConditions===6){let n=e%2,r=n===0?-.45:.45,s=n=>(R(t.seed,e,0,n,0,1)+R(t.seed,e,0,n+3,0,1)-1)*.22;return{position:[r+s(12),s(13),s(14)],velocity:[(n===0?.01:-.01)+i,a,o]}}if(t.initialConditions===7){let n=Math.min(5,Math.floor(R(t.seed,e,0,12,0,6))),r=n>>1,s=n&1?.86:-.86,c=R(t.seed,e,0,13,-.86,.86),l=R(t.seed,e,0,14,-.86,.86),u=r===0?[s,c,l]:r===1?[c,s,l]:[c,l,s],d=.006/Math.max(1e-4,Math.hypot(u[0],u[1],u[2]));return{position:u,velocity:[-u[0]*d+i,-u[1]*d+a,-u[2]*d+o]}}if(t.initialConditions===8){let n=s*Math.PI*2,r=R(t.seed,e,0,12,0,Math.PI*2),c=.55+.18*Math.cos(r);return{position:[c*Math.cos(n),c*Math.sin(n),.18*Math.sin(r)],velocity:[-Math.sin(n)*.018+i,Math.cos(n)*.018+a,o]}}let c=R(t.seed,e,0,1,-.82,.82),l=Math.sqrt(Math.max(.01,1-c*c)),u=R(t.seed,e,0,2,.08,1)**.55,d=R(t.seed,e,0,3,-.18,.18);return{position:[Math.cos(n)*l*u*.72,Math.sin(n)*l*u*.72,It((c+d)*u*.72)],velocity:[-Math.sin(n)*l*.032+i,Math.cos(n)*l*.032+a,R(t.seed,e,0,4,-.018,.018)]}}function Pt(e){let t=[{position:[-.72,-.45,0],velocity:[.009,0,0]},{position:[-.72,0,0],velocity:[.009,0,0]},{position:[-.72,.45,0],velocity:[.009,0,0]},{position:[.72,-.25,0],velocity:[-.009,0,0]},{position:[0,-.72,0],velocity:[0,.009,0]},{position:[0,.72,0],velocity:[0,-.009,0]},{position:[-.42,-.42,0],velocity:[.0065,.0065,0]},{position:[.42,.42,0],velocity:[-.0065,-.0065,0]}];return t[e%t.length]}function R(e,t,n,r,i,a){return i+(a-i)*Ft(e,t,n,r)}function Ft(e,t,n,r){let i=(e^Math.imul(t+1,2654435761)^Math.imul(n+1,2246822507)^Math.imul(r+1,3266489909))>>>0;return i^=i>>>16,i=Math.imul(i,2146121005)>>>0,i^=i>>>15,i=Math.imul(i,2221713035)>>>0,i^=i>>>16,(i>>>0)/4294967295}function It(e){return Math.fround(2*(Rt(e/2-.5)-.5))}function Lt(e){let t=2/Math.max(1,e.width),n=Math.max(1,e.depositRadius/t),r=Math.max(1,n**3*8),i=e.width*e.height*e.depth;return Math.min(1,i/Math.max(1,e.particleCount*r))}function Rt(e){return e-Math.floor(e)}function zt(e=F){let t=Bt(e.ruleSeed,0,e.mutationScale,e.rule),n=Bt(e.ruleSeed,0,e.mutationScale,e.rule),r=Bt(e.ruleSeed,Math.max(1,Math.min(e.cohorts-1,2)),e.mutationScale,e.rule);return{nonzero:Math.abs(t)>.001,cohortDependent:Math.abs(t-r)>.001,stable:t===n,firstSignature:t,secondSignature:r}}function Bt(e,t,n,r){let i=r.some(e=>Math.abs(e)>1e-6)?_t(r):Vt(e+Math.floor(t));Ht(i,n,e+Math.floor(t));let a=0;for(let e=0;e<i.length;e+=1)a=Math.fround(a+Math.fround(i[e]*Math.sin(e+1)));return a}function Vt(e){let t=new Float32Array(80);for(let n=0;n<10;n+=1){let r=Math.fround(1+2*Ut(e,n*8)**2);for(let i=0;i<4;i+=1)t[n*8+i]=Math.fround((Ut(e,n*8+i)*2-1)*r);for(let r=0;r<4;r+=1)t[n*8+4+r]=Math.fround(Ut(e,n*8+4+r)*2-1)}return t}function Ht(e,t,n){let r=qt(e[32]+e[61]+e[10],e[33]+e[60]+e[11])+n;for(let n=0;n<10;n+=1){let i=qt(-.5-n+r,-.5+n),a=qt(.5+n-r,5.5-n),o=qt(n-100,r+100),s=qt(25-n,25-r);e[n*8+4]=Math.fround(e[n*8+4]+t*(-1+2*i)),e[n*8+5]=Math.fround(e[n*8+5]+t*(-1+2*a)),e[n*8+6]=Math.fround(e[n*8+6]+t*(-1+2*o)),e[n*8+7]=Math.fround(e[n*8+7]+t*(-1+2*s));let c=Math.fround(1+t*.5*(qt(r,n)-.5));for(let t=0;t<4;t+=1)e[n*8+t]=Math.fround(e[n*8+t]*c)}}function Ut(e,t){return qt(e,t)}var Wt=new ArrayBuffer(4),Gt=new Float32Array(Wt),Kt=new Uint32Array(Wt);function qt(e,t){return Yt((Jt(e)^Yt(Jt(t)))>>>0)/4294967295}function Jt(e){return Gt[0]=Math.fround(e),Kt[0]>>>0}function Yt(e){let t=Math.imul(e>>>0,747796405)+2891336453>>>0,n=(t>>>28)+4>>>0,r=Math.imul((t>>>n^t)>>>0,277803737)>>>0;return r=(r>>>22^r)>>>0,r}var Xt=`
const PI = 3.141592653589793;
const DOMAIN_SIZE = 2.0;
// Half-saturation density for the emergent behaviors that read the (small ~1e-4) w/density channel.
// Used as a scale-robust Hill normalization d/(d+DENSITY_HALF) so MIPS/quorum/Lenia respond to
// relative crowding regardless of the absolute deposit scale, instead of a fragile linear threshold.
const DENSITY_HALF = 0.0001;
// Per-step density a fully-on Lenia growth term adds (a few x the natural deposit so it can build
// visible self-organising structure without instantly saturating the field clamp).
const LENIA_RATE = 0.0006;
// Hard speed ceiling applied only while an emergent steering behavior is active. The field-following
// terms add velocity proportional to the current speed along the deposited current, which can compound
// at low drag; this bounds it. Far above normal sim speeds, so it only ever catches a runaway.
const EMERGENT_VMAX = 0.5;
// Per-step strafe-slip budget in grid cells (CFL-style). Beyond this a slip outruns the field structure
// it senses in one step; for a position-derived orientation that is the runaway driving the 2-cycle
// jitter, so the update_particles anti-oscillation override drops such slips. Only ever trips on the
// degenerate runaway (~10-24 cells at the bug preset's density); normal motion stays well under it.
const STRAFE_MAX_CELLS = 2.0;
// FIX-S strafe-into-velocity gain. The sensing strafe is folded into velocity (not applied raw to position)
// when strafe_momentum is enabled; this gain keeps the velocity path in the same visual scale as the classic
// per-step position slip while drag supplies damping.
const STRAFE_VELOCITY_GAIN = 0.25;

struct Particle {
  pos_cohort: vec4f,  // xyz = position, w = cohort
  vel_id: vec4f,      // xyz = velocity, w = hue (was particle id; id is derivable from index)
};

struct SimConfig {
  width: u32,
  height: u32,
  depth: u32,
  particle_count: u32,
  timestep: u32,
  seed: u32,
  cohorts: u32,
  boundary_mode: u32,
  dt: f32,
  sensor_gain: f32,
  sensor_angle: f32,
  sensor_distance: f32,
  mutation_scale: f32,
  global_force_mult: f32,
  drag: f32,
  strafe_power: f32,
  axial_force: f32,
  lateral_force: f32,
  hazard_rate: f32,
  trail_persistence: f32,
  trail_diffusion: f32,
  deposit_radius: f32,
  deposit_mass: f32,
  sigma: f32,
  rule_seed: f32,
  orientation_mix: f32,
  symmetry_axes: u32,
  absolute_orientation: u32,
  initial_conditions: u32,
  deposit_tap_radius: u32,
  hue_sensitivity: f32,
  color_by_cohort: u32,
  step_time_scale: f32,
  visual_lerp_t: f32,
  recycle_cutoff: f32,
  recycle_enabled: u32,
  particle_offset: u32,
  active_particle_count: u32,
  domain_shape: u32,
  morph_alpha: f32,
  pulse_depth: f32,
  pulse_rate: f32,
  restlessness: f32,
  // Emergent behaviors (slots 43..60, same order as encodeSimUniforms). 0 = off = byte-identical.
  mips: f32,
  aniso_follow: f32,
  flock_align: f32,
  flock_separate: f32,
  chemotaxis: f32,
  quorum_strength: f32,
  quorum_threshold: f32,
  lenia_strength: f32,
  lenia_center: f32,
  lenia_width: f32,
  species_force: f32,
  predator: f32,
  alarm: f32,
  gray_scott: f32,
  gs_feed: f32,
  gs_kill: f32,
  energy: f32,
  energy_drain: f32,
  // Strafe momentum blend (slot 61). 0 = classic strafe-to-position; 1 = strafe folded into velocity.
  strafe_momentum: f32,
};

struct FourierCenter {
  frequency: vec4f,
  amplitude: vec4f,
};

struct Rule {
  centers: array<FourierCenter, 10>,
};

struct PlaneBehavior {
  force: vec3f,
  strafe: vec3f,
  color: vec2f,
};

fn pcg_hash(seed: u32) -> u32 {
  let state = seed * 747796405u + 2891336453u;
  let word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
  return (word >> 22u) ^ word;
}

fn hash(co: vec2f) -> f32 {
  let u = vec2u(bitcast<u32>(co.x), bitcast<u32>(co.y));
  let h = pcg_hash(u.x ^ pcg_hash(u.y));
  return f32(h) / 4294967295.0;
}

fn hash4(co: vec2f) -> vec4f {
  return vec4f(
    hash(co),
    hash(co * -1.0 + vec2f(5.0)),
    hash(co.yx - vec2f(100.0)),
    hash(co.yx * -1.0 + vec2f(25.0))
  );
}

fn fourier_noise(rule: Rule, signals: vec4f) -> vec4f {
  var result = vec4f(0.0);
  for (var i = 0u; i < 10u; i = i + 1u) {
    let phase = dot(signals, rule.centers[i].frequency);
    let phase_offset = 2.0 * f32(i) * 0.6283 + rule.centers[i].amplitude.w * 3.14159;
    let basis = vec4f(
      sin(phase + phase_offset),
      cos(phase + phase_offset * 0.7),
      sin(phase * 2.0 + phase_offset * 1.3),
      cos(phase * 2.0 + phase_offset * 0.5)
    );
    result = result + rule.centers[i].amplitude * basis;
  }
  return result;
}

fn generate_random_centers(seed: f32) -> Rule {
  var rule: Rule;
  for (var i = 0u; i < 10u; i = i + 1u) {
    let base = f32(i * 8u);
    let freq_scale = 1.0 + 2.0 * pow(hash(vec2f(seed, base)), 2.0);
    rule.centers[i].frequency = vec4f(
      (hash(vec2f(seed, base + 0.0)) * 2.0 - 1.0) * freq_scale,
      (hash(vec2f(seed, base + 1.0)) * 2.0 - 1.0) * freq_scale,
      (hash(vec2f(seed, base + 2.0)) * 2.0 - 1.0) * freq_scale,
      (hash(vec2f(seed, base + 3.0)) * 2.0 - 1.0) * freq_scale
    );
    rule.centers[i].amplitude = vec4f(
      hash(vec2f(seed, base + 4.0)) * 2.0 - 1.0,
      hash(vec2f(seed, base + 5.0)) * 2.0 - 1.0,
      hash(vec2f(seed, base + 6.0)) * 2.0 - 1.0,
      hash(vec2f(seed, base + 7.0)) * 2.0 - 1.0
    );
  }
  return rule;
}

fn mutate_rule(rule_in: Rule, amount: f32, cohort: f32) -> Rule {
  var rule = rule_in;
  let seed = hash(rule.centers[4].frequency.xy + rule.centers[7].amplitude.yx + rule.centers[1].frequency.zw) + cohort;
  for (var i = 0u; i < 10u; i = i + 1u) {
    let amp_mutation = amount * (-1.0 + 2.0 * hash4(-0.5 + vec2f(-f32(i) + seed, f32(i))));
    rule.centers[i].amplitude = rule.centers[i].amplitude + amp_mutation;
    rule.centers[i].frequency = rule.centers[i].frequency * (1.0 + amount * 0.5 * (hash(vec2f(seed, f32(i))) - 0.5));
  }
  return rule;
}

fn y_reflect(p: vec2f) -> vec2f {
  return p * vec2f(1.0, -1.0);
}

// Per-axis in-plane reflection for the XYZ symmetry modes. flip_fwd flips the forward (axial)
// component, flip_lat flips the lateral component. Note y_reflect(p) == reflect2(p, false, true).
fn reflect2(p: vec2f, flip_fwd: bool, flip_lat: bool) -> vec2f {
  return p * vec2f(select(1.0, -1.0, flip_fwd), select(1.0, -1.0, flip_lat));
}

fn black_box(left_signal: vec2f, right_signal: vec2f, rule: Rule) -> vec4f {
  return fourier_noise(rule, vec4f(left_signal, right_signal));
}

fn safe_normalize(v: vec3f) -> vec3f {
  let len = length(v);
  if (len <= 0.000001) {
    return vec3f(1.0, 0.0, 0.0);
  }
  return v / len;
}

fn guard_velocity_reversal(previous_velocity: vec3f, candidate_velocity: vec3f) -> vec3f {
  let previous_speed = length(previous_velocity);
  if (previous_speed <= 0.00001) {
    return candidate_velocity;
  }
  let previous_dir = previous_velocity / previous_speed;
  let forward_speed = dot(candidate_velocity, previous_dir);
  if (forward_speed >= 0.0) {
    return candidate_velocity;
  }
  let sideways_velocity = candidate_velocity - previous_dir * forward_speed;
  return sideways_velocity + previous_dir * max(0.00001, previous_speed * 0.02);
}

fn sim_time_scale(config: SimConfig) -> f32 {
  return clamp(config.step_time_scale, 0.0, 1.0);
}

fn velocity_drag_factor(drag: f32, time_scale: f32) -> f32 {
  if (drag >= 0.0) {
    return pow(clamp(drag, 0.0, 1.0), time_scale);
  }
  // Negative drag is a deliberately discrete sign-flip effect, so there is no
  // real-valued fractional step that composes exactly. Keep it finite and match
  // the authored full-step value when time_scale reaches 1.
  return 1.0 + (drag - 1.0) * time_scale;
}

fn velocity_force_factor(drag: f32, drag_factor: f32, time_scale: f32) -> f32 {
  if (drag >= 0.0 && abs(1.0 - drag) > 0.000001) {
    return (1.0 - drag_factor) / max(0.000001, 1.0 - drag);
  }
  return time_scale;
}

fn wrap_domain_scalar(value: f32) -> f32 {
  return 2.0 * (fract(value / 2.0 - 0.5) - 0.5);
}

fn wrap_domain_vec(value: vec3f) -> vec3f {
  return vec3f(
    wrap_domain_scalar(value.x),
    wrap_domain_scalar(value.y),
    wrap_domain_scalar(value.z)
  );
}

// Procedural domain shapes inscribed in the [-1,1] cube. domain_sdf < 0 inside, > 0 outside.
// shape: 0 Cube, 1 Sphere, 2 Cylinder (vertical Y axis), 3 Pyramid (base at y=-1, apex at +y).
fn domain_sdf(p: vec3f, shape: u32) -> f32 {
  if (shape == 1u) {
    return length(p) - 1.0;
  }
  if (shape == 2u) {
    let d_radial = length(p.xz) - 1.0;
    let d_cap = abs(p.y) - 1.0;
    let outside = length(max(vec2f(d_radial, d_cap), vec2f(0.0)));
    let inside = min(max(d_radial, d_cap), 0.0);
    return outside + inside;
  }
  if (shape == 3u) {
    let half_w = (1.0 - p.y) * 0.5;
    let d_base = -1.0 - p.y;
    return max(max(d_base, abs(p.x) - half_w), abs(p.z) - half_w);
  }
  let q = abs(p) - vec3f(1.0);
  return length(max(q, vec3f(0.0))) + min(max(q.x, max(q.y, q.z)), 0.0);
}

fn domain_sdf_normal(p: vec3f, shape: u32) -> vec3f {
  let e = 0.0015;
  let dx = domain_sdf(p + vec3f(e, 0.0, 0.0), shape) - domain_sdf(p - vec3f(e, 0.0, 0.0), shape);
  let dy = domain_sdf(p + vec3f(0.0, e, 0.0), shape) - domain_sdf(p - vec3f(0.0, e, 0.0), shape);
  let dz = domain_sdf(p + vec3f(0.0, 0.0, e), shape) - domain_sdf(p - vec3f(0.0, 0.0, e), shape);
  return safe_normalize(vec3f(dx, dy, dz));
}

// Pull a point onto/just inside the shape surface if it has left the shape; no-op for the cube.
fn clamp_into_shape(p: vec3f, shape: u32) -> vec3f {
  if (shape == 0u) {
    return p;
  }
  let d = domain_sdf(p, shape);
  if (d <= 0.0) {
    return p;
  }
  return p - domain_sdf_normal(p, shape) * (d + 0.0005);
}

fn wrap_i(value: i32, size: u32) -> u32 {
  let s = i32(size);
  return u32(((value % s) + s) % s);
}

fn index_xyz(x: i32, y: i32, z: i32, config: SimConfig) -> u32 {
  let ix = wrap_i(x, config.width);
  let iy = wrap_i(y, config.height);
  let iz = wrap_i(z, config.depth);
  return (iz * config.height + iy) * config.width + ix;
}

fn grid_to_world(x: u32, y: u32, z: u32, config: SimConfig) -> vec3f {
  return vec3f(
    ((f32(x) + 0.5) / f32(config.width)) * 2.0 - 1.0,
    ((f32(y) + 0.5) / f32(config.height)) * 2.0 - 1.0,
    ((f32(z) + 0.5) / f32(config.depth)) * 2.0 - 1.0
  );
}

fn periodic_delta(a: f32, b: f32) -> f32 {
  var delta = a - b;
  delta = delta - round(delta / DOMAIN_SIZE) * DOMAIN_SIZE;
  return delta;
}

fn rotate_sensor(forward: vec3f, lateral: vec3f, angle: f32, dist: f32) -> vec3f {
  return (forward * cos(angle) + lateral * sin(angle)) * dist;
}

fn build_frame(velocity: vec3f) -> mat3x3f {
  let forward = safe_normalize(velocity);
  // Branchless orthonormal basis: keeps the sensor frame continuous as velocity
  // passes near world-up/world-down instead of swapping reference axes.
  let sign = select(-1.0, 1.0, forward.z >= 0.0);
  let a = -1.0 / (sign + forward.z);
  let b = forward.x * forward.y * a;
  let left = safe_normalize(vec3f(1.0 + sign * forward.x * forward.x * a, sign * b, -sign * forward.x));
  let up = safe_normalize(vec3f(b, sign + forward.y * forward.y * a, -forward.y));
  return mat3x3f(forward, left, up);
}

fn calculate_plane_behavior(left_sample_3d: vec3f, right_sample_3d: vec3f, forward: vec3f, lateral: vec3f, rule: Rule, config: SimConfig) -> PlaneBehavior {
  let left_sample = vec2f(dot(left_sample_3d, forward), dot(left_sample_3d, lateral));
  let right_sample = vec2f(dot(right_sample_3d, forward), dot(right_sample_3d, lateral));
  let baseterm = black_box(left_sample, right_sample, rule);
  var local_force = baseterm.xy;
  var local_strafe = baseterm.zw;
  var color = baseterm.xy;
  // XYZ symmetry: each enabled axis adds an independent reflected rule term, generalizing the old
  // single y-reflection. Bit 0 = X (forward flip), bit 1 = Y (lateral flip -- reproduces the legacy
  // symmetry exactly), bit 2 = Z (both / point reflection). symmetry_axes == 0u => no mirror.
  let sym = config.symmetry_axes;
  if ((sym & 1u) != 0u) {
    let m = black_box(reflect2(right_sample, true, false), reflect2(left_sample, true, false), rule);
    local_force = local_force + reflect2(m.xy, true, false);
    local_strafe = local_strafe + reflect2(m.zw, true, false);
    color = color + m.xy;
  }
  if ((sym & 2u) != 0u) {
    let m = black_box(reflect2(right_sample, false, true), reflect2(left_sample, false, true), rule);
    local_force = local_force + reflect2(m.xy, false, true);
    local_strafe = local_strafe + reflect2(m.zw, false, true);
    color = color + m.xy;
  }
  if ((sym & 4u) != 0u) {
    let m = black_box(reflect2(right_sample, true, true), reflect2(left_sample, true, true), rule);
    local_force = local_force + reflect2(m.xy, true, true);
    local_strafe = local_strafe + reflect2(m.zw, true, true);
    color = color + m.xy;
  }
  return PlaneBehavior(
    forward * local_force.x * config.axial_force + lateral * local_force.y * config.lateral_force,
    forward * local_strafe.x * config.axial_force + lateral * local_strafe.y * config.lateral_force,
    color
  );
}

fn initial_particle_color(cohort: f32, config: SimConfig) -> vec4f {
  var hue = 0.0;
  if (config.color_by_cohort == 1u) {
    hue = hash(vec2f(floor(cohort), floor(cohort)));
  }
  return vec4f(hue, 0.8, 1.0, 0.045);
}

fn orientation_axis(position: vec3f, velocity: vec3f, config: SimConfig) -> vec3f {
  var axis = safe_normalize(velocity);
  let mix_amount = min(1.0, f32(config.absolute_orientation)) * clamp(config.orientation_mix, 0.0, 1.0);
  if (config.absolute_orientation == 1u) {
    axis = safe_normalize(mix(axis, vec3f(0.0, 1.0, 0.0), mix_amount));
  } else if (config.absolute_orientation == 2u) {
    axis = safe_normalize(mix(axis, -safe_normalize(position), mix_amount));
  } else if (config.absolute_orientation == 3u) {
    // Outward: orient away from the origin (opposite of Radial) -> spreading / exploding flows.
    axis = safe_normalize(mix(axis, safe_normalize(position), mix_amount));
  } else if (config.absolute_orientation == 4u) {
    // Swirl: orient tangent to the world-Y axis -> a global vortex.
    let radial = position - vec3f(0.0, position.y, 0.0);
    let tangent = safe_normalize(cross(vec3f(0.0, 1.0, 0.0), radial));
    axis = safe_normalize(mix(axis, tangent, mix_amount));
  } else if (config.absolute_orientation == 5u) {
    // Noise-aligned: orient along a hash-based vector field -> turbulent marbling.
    let n = vec3f(
      hash(vec2f(position.x * 3.1 + 11.0, position.y * 3.1 - 7.0)) - 0.5,
      hash(vec2f(position.y * 3.1 + 5.0, position.z * 3.1 + 2.0)) - 0.5,
      hash(vec2f(position.z * 3.1 - 9.0, position.x * 3.1 + 4.0)) - 0.5
    );
    axis = safe_normalize(mix(axis, safe_normalize(n), mix_amount));
  }
  return axis;
}

fn reset_particle_raw(id: u32, config: SimConfig) -> Particle {
  let cohort = floor(f32(config.cohorts) * f32(id) / max(1.0, f32(config.particle_count)));
  let jitter = vec3f(
    hash(vec2f(f32(config.seed), f32(id) + 9.0)) * 0.11 - 0.055,
    hash(vec2f(f32(config.seed), f32(id) + 10.0)) * 0.11 - 0.055,
    hash(vec2f(f32(config.seed), f32(id) + 11.0)) * 0.11 - 0.055
  );
  let random_velocity = vec3f(
    hash(vec2f(f32(config.seed), f32(id) + 6.0)) * 0.0001 - 0.00005,
    hash(vec2f(f32(config.seed), f32(id) + 7.0)) * 0.0001 - 0.00005,
    hash(vec2f(f32(config.seed), f32(id) + 8.0)) * 0.0001 - 0.00005
  );
  if (config.initial_conditions == 0u) {
    let side = u32(ceil(pow(max(1.0, f32(config.cohorts)), 1.0 / 3.0)));
    let c = u32(cohort);
    let gx = c % side;
    let gy = (c / side) % side;
    let gz = c / max(1u, side * side);
    var cell = 0.0;
    if (side > 1u) {
      cell = 1.55 / f32(side - 1u);
    }
    let center = vec3f(-0.775 + f32(gx) * cell, -0.775 + f32(gy) * cell, -0.775 + f32(gz) * cell);
    return Particle(vec4f(wrap_domain_vec(center + jitter), cohort), vec4f(random_velocity, initial_particle_color(cohort, config).x));
  }
  if (config.initial_conditions == 1u) {
    let pos = vec3f(
      hash(vec2f(f32(config.seed), f32(id) + 1.0)) * 1.72 - 0.86,
      hash(vec2f(f32(config.seed), f32(id) + 2.0)) * 1.72 - 0.86,
      hash(vec2f(f32(config.seed), f32(id) + 3.0)) * 1.72 - 0.86
    );
    return Particle(vec4f(pos, cohort), vec4f(random_velocity, initial_particle_color(cohort, config).x));
  }
  if (config.initial_conditions == 3u) {
    let slot = id % 8u;
    var pos = vec3f(-0.72, -0.45, 0.0);
    var vel = vec3f(0.009, 0.0, 0.0);
    if (slot == 1u) {
      pos = vec3f(-0.72, 0.0, 0.0);
      vel = vec3f(0.009, 0.0, 0.0);
    } else if (slot == 2u) {
      pos = vec3f(-0.72, 0.45, 0.0);
      vel = vec3f(0.009, 0.0, 0.0);
    } else if (slot == 3u) {
      pos = vec3f(0.72, -0.25, 0.0);
      vel = vec3f(-0.009, 0.0, 0.0);
    } else if (slot == 4u) {
      pos = vec3f(0.0, -0.72, 0.0);
      vel = vec3f(0.0, 0.009, 0.0);
    } else if (slot == 5u) {
      pos = vec3f(0.0, 0.72, 0.0);
      vel = vec3f(0.0, -0.009, 0.0);
    } else if (slot == 6u) {
      pos = vec3f(-0.42, -0.42, 0.0);
      vel = vec3f(0.0065, 0.0065, 0.0);
    } else if (slot == 7u) {
      pos = vec3f(0.42, 0.42, 0.0);
      vel = vec3f(-0.0065, -0.0065, 0.0);
    }
    return Particle(vec4f(pos, cohort), vec4f(vel, initial_particle_color(cohort, config).x));
  }
  let u_frac = f32(id) / max(1.0, f32(config.particle_count));
  if (config.initial_conditions == 4u) {
    let angle = u_frac * 4.0 * PI * 2.0 + f32(id % 2u) * PI;
    let pos = vec3f(
      0.55 * cos(angle) + (hash(vec2f(f32(config.seed), f32(id) + 12.0)) * 0.08 - 0.04),
      0.55 * sin(angle) + (hash(vec2f(f32(config.seed), f32(id) + 13.0)) * 0.08 - 0.04),
      -0.82 + 1.64 * u_frac
    );
    let vel = vec3f(-sin(angle) * 0.02, cos(angle) * 0.02, 0.004) + random_velocity;
    return Particle(vec4f(pos, cohort), vec4f(vel, initial_particle_color(cohort, config).x));
  }
  if (config.initial_conditions == 5u) {
    let ang = hash(vec2f(f32(config.seed), f32(id) + 12.0)) * PI * 2.0;
    let rad = sqrt(hash(vec2f(f32(config.seed), f32(id) + 13.0))) * 0.82;
    let pos = vec3f(cos(ang) * rad, sin(ang) * rad, hash(vec2f(f32(config.seed), f32(id) + 14.0)) * 0.06 - 0.03);
    return Particle(vec4f(pos, cohort), vec4f(random_velocity, initial_particle_color(cohort, config).x));
  }
  if (config.initial_conditions == 6u) {
    let side = id % 2u;
    let cx = select(0.45, -0.45, side == 0u);
    let ox = (hash(vec2f(f32(config.seed), f32(id) + 12.0)) + hash(vec2f(f32(config.seed), f32(id) + 15.0)) - 1.0) * 0.22;
    let oy = (hash(vec2f(f32(config.seed), f32(id) + 13.0)) + hash(vec2f(f32(config.seed), f32(id) + 16.0)) - 1.0) * 0.22;
    let oz = (hash(vec2f(f32(config.seed), f32(id) + 14.0)) + hash(vec2f(f32(config.seed), f32(id) + 17.0)) - 1.0) * 0.22;
    let pos = vec3f(cx + ox, oy, oz);
    let vel = vec3f(select(-0.01, 0.01, side == 0u), 0.0, 0.0) + random_velocity;
    return Particle(vec4f(pos, cohort), vec4f(vel, initial_particle_color(cohort, config).x));
  }
  if (config.initial_conditions == 7u) {
    let f = min(5u, u32(floor(hash(vec2f(f32(config.seed), f32(id) + 12.0)) * 6.0)));
    let axis = f >> 1u;
    let sgn = select(-0.86, 0.86, (f & 1u) == 1u);
    let a = hash(vec2f(f32(config.seed), f32(id) + 13.0)) * 1.72 - 0.86;
    let b = hash(vec2f(f32(config.seed), f32(id) + 14.0)) * 1.72 - 0.86;
    var pos = vec3f(sgn, a, b);
    if (axis == 1u) { pos = vec3f(a, sgn, b); }
    else if (axis == 2u) { pos = vec3f(a, b, sgn); }
    let vel = -safe_normalize(pos) * 0.006 + random_velocity;
    return Particle(vec4f(pos, cohort), vec4f(vel, initial_particle_color(cohort, config).x));
  }
  if (config.initial_conditions == 8u) {
    let phi = u_frac * PI * 2.0;
    let psi = hash(vec2f(f32(config.seed), f32(id) + 12.0)) * PI * 2.0;
    let ring = 0.55 + 0.18 * cos(psi);
    let pos = vec3f(ring * cos(phi), ring * sin(phi), 0.18 * sin(psi));
    let vel = vec3f(-sin(phi) * 0.018, cos(phi) * 0.018, 0.0) + random_velocity;
    return Particle(vec4f(pos, cohort), vec4f(vel, initial_particle_color(cohort, config).x));
  }
  let theta = hash(vec2f(f32(config.seed), f32(id) + 0.0)) * PI * 2.0;
  let z = hash(vec2f(f32(config.seed), f32(id) + 1.0)) * 1.64 - 0.82;
  let radial = sqrt(max(0.01, 1.0 - z * z));
  let radius = pow(hash(vec2f(f32(config.seed), f32(id) + 2.0)) * 0.92 + 0.08, 0.55);
  let wobble = hash(vec2f(f32(config.seed), f32(id) + 3.0)) * 0.36 - 0.18;
  let pos = vec3f(cos(theta) * radial * radius * 0.72, sin(theta) * radial * radius * 0.72, (z + wobble) * radius * 0.72);
  let vel = vec3f(-sin(theta) * radial * 0.032, cos(theta) * radial * 0.032, hash(vec2f(f32(config.seed), f32(id) + 4.0)) * 0.036 - 0.018) + random_velocity;
  return Particle(vec4f(wrap_domain_vec(pos), cohort), vec4f(vel, initial_particle_color(cohort, config).x));
}

// Wrapper: confine every spawn/respawn to the active domain shape (no-op for the cube).
fn reset_particle(id: u32, config: SimConfig) -> Particle {
  var particle = reset_particle_raw(id, config);
  particle.pos_cohort = vec4f(clamp_into_shape(particle.pos_cohort.xyz, config.domain_shape), particle.pos_cohort.w);
  return particle;
}
`,Zt=`
${Xt}

@group(0) @binding(0) var<storage, read_write> brush_out: array<atomic<i32>>;
@group(0) @binding(1) var<uniform> config: SimConfig;

@compute @workgroup_size(256)
fn clear_brush(@builtin(global_invocation_id) gid: vec3u) {
  let flat = gid.x;
  let lane_count = config.width * config.height * config.depth * 4u;
  if (flat >= lane_count) {
    return;
  }
  atomicStore(&brush_out[flat], 0);
}
`,Qt=`
${Xt}

@group(0) @binding(0) var<storage, read_write> particles_out: array<Particle>;
@group(0) @binding(1) var<uniform> config: SimConfig;

@compute @workgroup_size(256)
fn init_particles(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.x;
  if (i >= config.active_particle_count) {
    return;
  }
  particles_out[i] = reset_particle(i + config.particle_offset, config);
}
`,$t=`
${Xt}

const BRUSH_SCALE = 65536.0;
const FLOW_DEPOSIT_GAIN = 48.0;

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> brush_out: array<atomic<i32>>;
@group(0) @binding(2) var<uniform> config: SimConfig;
@group(0) @binding(4) var<storage, read> particle_ids: array<u32>;

fn add_brush(voxel: u32, component: u32, value: f32) {
  let scaled = i32(round(clamp(value, -4096.0, 4096.0) * BRUSH_SCALE));
  if (scaled != 0) {
    atomicAdd(&brush_out[voxel * 4u + component], scaled);
  }
}

fn safe_direction(value: vec3f, fallback_seed: f32) -> vec3f {
  let len_value = length(value);
  if (len_value > 0.000001) {
    return value / len_value;
  }
  let theta = hash(vec2f(fallback_seed, 17.0)) * PI * 2.0;
  let z = hash(vec2f(fallback_seed, 19.0)) * 2.0 - 1.0;
  let r = sqrt(max(0.0, 1.0 - z * z));
  return vec3f(cos(theta) * r, sin(theta) * r, z);
}

fn deposit_scale(config: SimConfig) -> f32 {
  let voxel_size = 2.0 / max(1.0, f32(config.width));
  let radius_cells = max(1.0, config.deposit_radius / voxel_size);
  let footprint = max(1.0, pow(radius_cells, 3.0) * 8.0);
  let voxels = config.width * config.height * config.depth;
  return min(1.0, f32(voxels) / max(1.0, f32(config.particle_count) * footprint));
}

fn smoothstep_range(edge0: f32, edge1: f32, value: f32) -> f32 {
  let t = clamp((value - edge0) / max(0.000001, edge1 - edge0), 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}

fn cell_weight(offset: i32, fraction: f32) -> f32 {
  if (offset == 0i) {
    return 1.0 - fraction;
  }
  if (offset == 1i) {
    return fraction;
  }
  return 0.0;
}

// Workgroup deposit tile: with spatially sorted particles a 256-thread workgroup touches a
// handful of neighboring field cells, so per-tap contributions are first accumulated in an
// 8^3-cell shared-memory tile (one i32 lane per cell component) and flushed to the global
// brush once per lane. Integer adds are associative, so the final sums are bit-identical to
// per-tap global atomics. Taps outside the tile (unsorted startup, huge radius) fall back to
// direct global atomics, keeping the kernel correct regardless of ordering.
const DEPOSIT_TILE_DIM = 8i;
const DEPOSIT_TILE_LANES = 2048u; // 8^3 cells x 4 components
var<workgroup> deposit_tile: array<atomic<i32>, DEPOSIT_TILE_LANES>;
var<workgroup> deposit_corner_x: atomic<i32>;
var<workgroup> deposit_corner_y: atomic<i32>;
var<workgroup> deposit_corner_z: atomic<i32>;

fn deposit_tap(unwrapped: vec3i, corner: vec3i, component: u32, value: f32) {
  let scaled = i32(round(clamp(value, -4096.0, 4096.0) * BRUSH_SCALE));
  if (scaled == 0) {
    return;
  }
  let rel = unwrapped - corner;
  if (all(rel >= vec3i(0)) && all(rel < vec3i(DEPOSIT_TILE_DIM))) {
    let cell = u32((rel.z * DEPOSIT_TILE_DIM + rel.y) * DEPOSIT_TILE_DIM + rel.x);
    atomicAdd(&deposit_tile[cell * 4u + component], scaled);
    return;
  }
  let x = wrap_i(unwrapped.x, config.width);
  let y = wrap_i(unwrapped.y, config.height);
  let z = wrap_i(unwrapped.z, config.depth);
  let flat = (z * config.height + y) * config.width + x;
  atomicAdd(&brush_out[flat * 4u + component], scaled);
}

@compute @workgroup_size(256)
fn deposit_particles(@builtin(global_invocation_id) gid: vec3u, @builtin(local_invocation_index) lid: u32) {
  let i = gid.x;
  let is_active = i < config.active_particle_count;
  if (lid == 0u) {
    atomicStore(&deposit_corner_x, 2147483647);
    atomicStore(&deposit_corner_y, 2147483647);
    atomicStore(&deposit_corner_z, 2147483647);
  }
  for (var lane = lid; lane < DEPOSIT_TILE_LANES; lane = lane + 256u) {
    atomicStore(&deposit_tile[lane], 0);
  }
  workgroupBarrier();
  // Out-of-range tail threads read robustness-clamped garbage; is_active guards every use.
  let particle = particles[i];
  let particle_id = particle_ids[i];
  let sigma2 = max(0.000001, 2.0 * config.sigma * config.sigma);
  let dims = vec3f(f32(config.width), f32(config.height), f32(config.depth));
  let grid = (particle.pos_cohort.xyz + vec3f(1.0)) * 0.5 * dims - vec3f(0.5);
  let base = vec3i(floor(grid));
  let fraction = fract(grid);
  let center = vec3i(round(grid));
  let radius_cells = i32(clamp(config.deposit_tap_radius, 0u, 6u));
  if (is_active) {
    atomicMin(&deposit_corner_x, center.x - radius_cells);
    atomicMin(&deposit_corner_y, center.y - radius_cells);
    atomicMin(&deposit_corner_z, center.z - radius_cells);
  }
  workgroupBarrier();
  let tile_corner = vec3i(
    atomicLoad(&deposit_corner_x),
    atomicLoad(&deposit_corner_y),
    atomicLoad(&deposit_corner_z)
  );
  // Pulse: oscillatory cytoplasmic streaming. Radial traveling waves of deposit intensity emanate
  // through the volume -- the network breathes/throbs instead of just flowing. pulse_depth (0 = off)
  // is amplitude; pulse_rate is temporal frequency. The phase is stateless (agent position + global
  // frame counter), so this costs only ALU and is hidden behind the deposit pass's per-particle
  // memory latency -- effectively free on this I/O-bound pass.
  let pulse_phase = length(particle.pos_cohort.xyz) * 9.0 - f32(config.timestep) * config.pulse_rate * 0.08;
  let pulse = max(0.0, 1.0 + config.pulse_depth * sin(pulse_phase));
  let emission = config.deposit_mass * deposit_scale(config) * pulse;
  let voxel_size = 2.0 / max(1.0, f32(config.width));
  let anti_alias = 1.0 - smoothstep_range(0.45, 1.2, config.deposit_radius / voxel_size);
  var flow_velocity = particle.vel_id.xyz;
  if (length(flow_velocity) < 0.000001) {
    flow_velocity = safe_direction(flow_velocity, f32(config.seed ^ particle_id)) * 0.00001;
  }
  if (is_active) {
    for (var dz = -radius_cells; dz <= radius_cells; dz = dz + 1i) {
      for (var dy = -radius_cells; dy <= radius_cells; dy = dy + 1i) {
        for (var dx = -radius_cells; dx <= radius_cells; dx = dx + 1i) {
          let unwrapped = center + vec3i(dx, dy, dz);
          let x = wrap_i(unwrapped.x, config.width);
          let y = wrap_i(unwrapped.y, config.height);
          let z = wrap_i(unwrapped.z, config.depth);
          let voxel = grid_to_world(x, y, z, config);
          let delta = vec3f(
            periodic_delta(voxel.x, particle.pos_cohort.x),
            periodic_delta(voxel.y, particle.pos_cohort.y),
            periodic_delta(voxel.z, particle.pos_cohort.z)
          );
          let d2 = dot(delta, delta);
          let gaussian_kernel = exp(-d2 / sigma2);
          let cell_offset = unwrapped - base;
          let linear_kernel =
            cell_weight(cell_offset.x, fraction.x) *
            cell_weight(cell_offset.y, fraction.y) *
            cell_weight(cell_offset.z, fraction.z);
          let shape = mix(gaussian_kernel, linear_kernel, anti_alias);
          let kernel = emission * shape;
          if (kernel > 0.0000005) {
            let flow = flow_velocity * kernel * FLOW_DEPOSIT_GAIN;
            deposit_tap(unwrapped, tile_corner, 0u, flow.x);
            deposit_tap(unwrapped, tile_corner, 1u, flow.y);
            deposit_tap(unwrapped, tile_corner, 2u, flow.z);
            deposit_tap(unwrapped, tile_corner, 3u, kernel * 0.01);
          }
        }
      }
    }
  }
  workgroupBarrier();
  // Flush the shared tile: one global atomic per touched lane for the whole workgroup.
  for (var lane = lid; lane < DEPOSIT_TILE_LANES; lane = lane + 256u) {
    let value = atomicLoad(&deposit_tile[lane]);
    if (value != 0) {
      let cell = lane / 4u;
      let component = lane % 4u;
      let rel = vec3i(
        i32(cell % 8u),
        i32((cell / 8u) % 8u),
        i32(cell / 64u)
      );
      let unwrapped = tile_corner + rel;
      let x = wrap_i(unwrapped.x, config.width);
      let y = wrap_i(unwrapped.y, config.height);
      let z = wrap_i(unwrapped.z, config.depth);
      let flat = (z * config.height + y) * config.width + x;
      atomicAdd(&brush_out[flat * 4u + component], value);
    }
  }
}
`,en=$t.replace(`@group(0) @binding(2) var<uniform> config: SimConfig;`,`@group(0) @binding(2) var<uniform> config: SimConfig;
@group(0) @binding(3) var<storage, read> previous_particles: array<Particle>;

const VISUAL_INTERP_SNAP_DISTANCE = 0.35;

fn visual_shortest_delta(previous: vec3f, current: vec3f) -> vec3f {
  var delta = current - previous;
  if (delta.x > 1.0) {
    delta.x = delta.x - 2.0;
  } else if (delta.x < -1.0) {
    delta.x = delta.x + 2.0;
  }
  if (delta.y > 1.0) {
    delta.y = delta.y - 2.0;
  } else if (delta.y < -1.0) {
    delta.y = delta.y + 2.0;
  }
  if (delta.z > 1.0) {
    delta.z = delta.z - 2.0;
  } else if (delta.z < -1.0) {
    delta.z = delta.z + 2.0;
  }
  return delta;
}

fn visual_wrap_crossed(previous: vec3f, current: vec3f) -> bool {
  let raw_delta = current - previous;
  return abs(raw_delta.x) > 1.0 || abs(raw_delta.y) > 1.0 || abs(raw_delta.z) > 1.0;
}

fn visual_lerp_amount(previous: vec3f, current: vec3f, requested_t: f32) -> f32 {
  let t = clamp(requested_t, 0.0, 1.0);
  if (visual_wrap_crossed(previous, current)) {
    return 1.0;
  }
  if (length(visual_shortest_delta(previous, current)) > VISUAL_INTERP_SNAP_DISTANCE) {
    return 1.0;
  }
  return t;
}`).replace(`fn deposit_particles(@builtin(global_invocation_id) gid: vec3u, @builtin(local_invocation_index) lid: u32)`,`fn deposit_visual_particles(@builtin(global_invocation_id) gid: vec3u, @builtin(local_invocation_index) lid: u32)`).replace(`let particle = particles[i];`,`var particle = particles[i];
  let previous_particle = previous_particles[i];
  let visual_t = visual_lerp_amount(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, config.visual_lerp_t);
  particle.pos_cohort = vec4f(wrap_domain_vec(previous_particle.pos_cohort.xyz + visual_shortest_delta(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz) * visual_t), particle.pos_cohort.w);
  particle.vel_id = vec4f(mix(previous_particle.vel_id.xyz, particle.vel_id.xyz, visual_t), particle.vel_id.w);`),tn=e=>`
${Xt}

@group(0) @binding(0) var<storage, read> particles_in: array<Particle>;
${e?`@group(0) @binding(1) var field_texture_in: texture_3d<f32>;`:`@group(0) @binding(1) var<storage, read> field_in: array<vec4f>;`}
@group(0) @binding(2) var<storage, read_write> particles_out: array<Particle>;
@group(0) @binding(3) var<uniform> config: SimConfig;
@group(0) @binding(4) var<storage, read> config_rule: array<vec4f>;
@group(0) @binding(5) var<storage, read> particle_ids: array<u32>;

${e?`fn sample_field(position_in: vec3f) -> vec4f {
  let position = wrap_domain_vec(position_in);
  let dims = vec3f(f32(config.width), f32(config.height), f32(config.depth));
  let grid = (position + vec3f(1.0)) * 0.5 * dims - vec3f(0.5);
  let base = vec3i(floor(grid));
  let t = fract(grid);
  var accum = vec4f(0.0);
  for (var dz = 0i; dz <= 1i; dz = dz + 1i) {
    for (var dy = 0i; dy <= 1i; dy = dy + 1i) {
      for (var dx = 0i; dx <= 1i; dx = dx + 1i) {
        let weight = mix(1.0 - t.x, t.x, f32(dx)) * mix(1.0 - t.y, t.y, f32(dy)) * mix(1.0 - t.z, t.z, f32(dz));
        let coords = vec3i(
          i32(wrap_i(base.x + dx, config.width)),
          i32(wrap_i(base.y + dy, config.height)),
          i32(wrap_i(base.z + dz, config.depth))
        );
        accum = accum + textureLoad(field_texture_in, coords, 0) * weight;
      }
    }
  }
  return accum;
}`:`fn sample_field(position_in: vec3f) -> vec4f {
  let position = wrap_domain_vec(position_in);
  let dims = vec3f(f32(config.width), f32(config.height), f32(config.depth));
  let grid = (position + vec3f(1.0)) * 0.5 * dims - vec3f(0.5);
  let base = vec3i(floor(grid));
  let t = fract(grid);
  var accum = vec4f(0.0);
  for (var dz = 0i; dz <= 1i; dz = dz + 1i) {
    for (var dy = 0i; dy <= 1i; dy = dy + 1i) {
      for (var dx = 0i; dx <= 1i; dx = dx + 1i) {
        let weight = mix(1.0 - t.x, t.x, f32(dx)) * mix(1.0 - t.y, t.y, f32(dy)) * mix(1.0 - t.z, t.z, f32(dz));
        accum = accum + field_in[index_xyz(base.x + dx, base.y + dy, base.z + dz, config)] * weight;
      }
    }
  }
  return accum;
}`}

fn load_config_rule() -> Rule {
  var rule: Rule;
  for (var i = 0u; i < 10u; i = i + 1u) {
    rule.centers[i].frequency = config_rule[i * 2u];
    rule.centers[i].amplitude = config_rule[i * 2u + 1u];
  }
  return rule;
}

@compute @workgroup_size(256)
fn update_particles(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.x;
  if (i >= config.active_particle_count) {
    return;
  }
  let particle_id = particle_ids[i];
  var particle = particles_in[i];
  // Initial-condition morph: instead of a hard reseed, ease every particle toward its spawn target
  // for the new pattern (reset_particle is a pure function of id + config), skipping physics so the
  // layout transition reads as a smooth migration rather than a flash.
  if (config.morph_alpha > 0.0) {
    let morph_target = reset_particle(particle_id, config);
    particles_out[i].pos_cohort = vec4f(mix(particle.pos_cohort.xyz, morph_target.pos_cohort.xyz, config.morph_alpha), particle.pos_cohort.w);
    particles_out[i].vel_id = vec4f(mix(particle.vel_id.xyz, morph_target.vel_id.xyz, config.morph_alpha), particle.vel_id.w);
    return;
  }
  let time_scale = sim_time_scale(config);
  let hazard = config.hazard_rate * time_scale > hash(vec2f(f32(particle_id) / max(1.0, f32(config.particle_count)), f32(config.timestep)));
  if (hazard) {
    particles_out[i] = reset_particle(particle_id, config);
    return;
  }
  // Recycle: a particle that has drifted into a sub-cutoff (empty) region is reset back into the
  // spawn distribution instead of wandering the fringe -- it rejoins the active core and
  // concentrates density there. Checked before the expensive sensing so it also saves that work.
  if (config.recycle_enabled == 1u && config.recycle_cutoff > 0.0) {
    let here = sample_field(particle.pos_cohort.xyz);
    if (max(0.0, here.w + length(here.xyz) * 0.25) < config.recycle_cutoff) {
      particles_out[i] = reset_particle(particle_id, config);
      return;
    }
  }
  // Shared center-voxel sample for every field-reading emergent behavior (energy, the steering block,
  // and the gradient base). Computed at most once and only when something needs it, so the off-path
  // adds no field sample and stays byte-identical. want_field/want_grad are reused below.
  let want_field = config.mips > 0.0 || config.aniso_follow > 0.0 || config.flock_align > 0.0 || config.quorum_strength > 0.0;
  let want_grad = config.flock_separate > 0.0 || abs(config.chemotaxis) > 0.0;
  let need_center = config.energy > 0.0 || want_field || want_grad;
  var center_field = vec4f(0.0);
  if (need_center) {
    center_field = sample_field(particle.pos_cohort.xyz);
  }
  // Energy / metabolism: stateless density-gated lifecycle. A particle "feeds" on the local trail
  // density; in starved (sparse) regions it dies and respawns into the seed distribution, so the
  // swarm concentrates on its food, depletes the fringe, and pulses through boom/bust cycles. The
  // death roll is hashed from (id, timestep) so replays stay bit-exact, and the whole branch is
  // skipped when energy == 0 (byte-identical to the classic engine).
  if (config.energy > 0.0) {
    let fed = center_field.w / (center_field.w + DENSITY_HALF);
    let starve = (1.0 - fed) * config.energy * config.energy_drain;
    if (hash(vec2f(f32(particle_id), f32(config.timestep) * 1.3 + 0.5)) < starve * 0.05 * time_scale) {
      particles_out[i] = reset_particle(particle_id, config);
      return;
    }
  }
  let cohort = floor(particle.pos_cohort.w);
  var rule = load_config_rule();
  if (all(rule.centers[0].frequency == vec4f(0.0)) && all(rule.centers[5].amplitude == vec4f(0.0))) {
    rule = generate_random_centers(config.rule_seed + cohort);
  }
  rule = mutate_rule(rule, config.mutation_scale * time_scale, config.rule_seed + cohort);
  let frame = build_frame(orientation_axis(particle.pos_cohort.xyz, particle.vel_id.xyz, config));
  let forward = frame[0];
  let left = frame[1];
  let up = frame[2];
  let angle = config.sensor_angle * PI;
  let sample_dist = config.sensor_distance * 0.01;
  let horizontal_left_offset = rotate_sensor(forward, left, angle, sample_dist);
  let horizontal_right_offset = rotate_sensor(forward, left, -angle, sample_dist);
  let vertical_up_offset = rotate_sensor(forward, up, angle, sample_dist);
  let vertical_down_offset = rotate_sensor(forward, up, -angle, sample_dist);
  let sensor_scaling = 19.4275 * config.sensor_gain;
  let ltap = sample_field(particle.pos_cohort.xyz + horizontal_left_offset).xyz * sensor_scaling;
  let rtap = sample_field(particle.pos_cohort.xyz + horizontal_right_offset).xyz * sensor_scaling;
  let utap = sample_field(particle.pos_cohort.xyz + vertical_up_offset).xyz * sensor_scaling;
  let dtap = sample_field(particle.pos_cohort.xyz + vertical_down_offset).xyz * sensor_scaling;
  let horizontal = calculate_plane_behavior(ltap, rtap, forward, left, rule, config);
  let vertical = calculate_plane_behavior(utap, dtap, forward, up, rule, config);
  let force = (horizontal.force + vertical.force) * 0.5 * config.global_force_mult / 200.0;
  let strafe = (horizontal.strafe + vertical.strafe) * 0.5 * config.global_force_mult / 10.0;
  let color_params = (horizontal.color + vertical.color) * 0.5;
  var hue = config.hue_sensitivity * color_params.x;
  if (config.color_by_cohort == 1u) {
    hue = hash(vec2f(floor(cohort), floor(cohort)));
  }
  let hue_blend = clamp(time_scale * 0.08, 0.0, 1.0);
  var new_hue = mix(particle.vel_id.w, hue, hue_blend);
  let drag_factor = velocity_drag_factor(config.drag, time_scale);
  let force_factor = velocity_force_factor(config.drag, drag_factor, time_scale);
  var velocity = particle.vel_id.xyz * drag_factor + force * force_factor;
  // Strafe momentum blend (config.strafe_momentum, 0..1). The sensing strafe steers sideways. Applied raw
  // to position (the classic path, momentum=0) it has no inertia; folded into velocity (momentum=1) it gains
  // inertia + drag damping and avoids the low-speed per-step position 2-cycle.
  velocity = velocity + strafe * config.strafe_power * STRAFE_VELOCITY_GAIN * config.strafe_momentum;
  velocity = guard_velocity_reversal(particle.vel_id.xyz, velocity);
  if (length(velocity) < 0.00001) {
    velocity = forward * 0.00001;
  }
  // Stall rescue: structures that lock into a self-reinforcing field pattern freeze with
  // near-zero velocity (stuck starfish arms, static bipolar oscillators). When restlessness
  // is on, particles below the stall speed get a small deterministic pseudorandom kick
  // (hashed from persistent id + timestep, so timeline replays stay bit-exact) scaled by how
  // stalled they are; the random-walk jitter persists until field sensing re-engages them.
  // Moving particles are untouched and 0 disables the branch entirely.
  if (config.restlessness > 0.0) {
    let stall_speed = 0.008;
    let speed_now = length(velocity);
    if (speed_now < stall_speed) {
      let deficit = 1.0 - speed_now / stall_speed;
      let kick_seed = f32(particle_id % 1048576u) * 0.6180339887 + f32(config.timestep % 16384u) * 7.5625 + f32(config.seed % 65536u) * 0.001;
      let kick_theta = hash(vec2f(kick_seed, 23.0)) * PI * 2.0;
      let kick_z = hash(vec2f(kick_seed, 29.0)) * 2.0 - 1.0;
      let kick_r = sqrt(max(0.0, 1.0 - kick_z * kick_z));
      let kick_dir = vec3f(cos(kick_theta) * kick_r, sin(kick_theta) * kick_r, kick_z);
      velocity = velocity + kick_dir * (config.restlessness * 0.004 * deficit * time_scale);
    }
  }
  // --- Emergent behaviors: field-driven velocity steering + quorum ignition. Reuses center_field
  // (sampled once above). want_field/want_grad were computed above; when both are false nothing here
  // runs, so velocity/hue/displacement are untouched and the step is byte-identical. ---
  if (want_field || want_grad) {
    let epos = particle.pos_cohort.xyz;
    let local_density = center_field.w;
    let speed0 = length(velocity);
    if (config.mips > 0.0) {
      // Motility-induced phase separation: self-propelled particles slow in crowds. With no
      // attraction at all, this alone makes a dense droplet phase separate from a dilute gas.
      let crowd = local_density / (local_density + DENSITY_HALF);
      velocity = velocity * (1.0 - config.mips * crowd * 0.85);
    }
    if (config.aniso_follow > 0.0) {
      // Follow the deposited current's *direction* (the field already stores velocity). Polarizes
      // trails into one-way highways and self-sustaining vortex rings.
      let current = center_field.xyz;
      let cmag = length(current);
      if (cmag > 0.0001) {
        velocity = velocity + (current / cmag) * speed0 * config.aniso_follow * 0.25;
      }
    }
    if (config.flock_align > 0.0) {
      // Couzin/Vicsek alignment: rotate velocity toward the local mean flow -> schooling/murmuration.
      let flow = center_field.xyz;
      let fmag = length(flow);
      if (fmag > 0.0001 && speed0 > 0.0001) {
        velocity = mix(velocity, (flow / fmag) * speed0, clamp(config.flock_align * 0.5, 0.0, 1.0));
      }
    }
    if (config.quorum_strength > 0.0) {
      // Quorum sensing / bioluminescent ignition: above a local-density threshold the particle
      // "ignites" (hue flash) and surges along the local stream, concentrating it further so the
      // ignition spreads as a contagious wave.
      let dens_norm = local_density / (local_density + DENSITY_HALF);
      let ignite = smoothstep(config.quorum_threshold, config.quorum_threshold + 0.1, dens_norm);
      new_hue = mix(new_hue, 0.08, clamp(ignite * config.quorum_strength, 0.0, 1.0));
      let cur = center_field.xyz;
      let cmag2 = length(cur);
      if (cmag2 > 0.0001 && ignite > 0.0) {
        velocity = velocity + (cur / cmag2) * speed0 * ignite * config.quorum_strength * 0.4;
      }
    }
    if (want_grad) {
      // Forward-difference gradient: reuse center_field as the base, so 3 extra samples instead of 6.
      let h = 2.0 / max(1.0, f32(config.width));
      let grad = vec3f(
        sample_field(epos + vec3f(h, 0.0, 0.0)).w - local_density,
        sample_field(epos + vec3f(0.0, h, 0.0)).w - local_density,
        sample_field(epos + vec3f(0.0, 0.0, h)).w - local_density
      );
      let gmag = length(grad);
      if (gmag > 0.000001) {
        let gdir = grad / gmag;
        if (config.flock_separate > 0.0) {
          // Steer down the density gradient -> spacing / collision avoidance.
          velocity = velocity - gdir * speed0 * config.flock_separate * 0.3;
        }
        if (abs(config.chemotaxis) > 0.0) {
          // Climb (+) or descend (-) the density gradient.
          velocity = velocity + gdir * speed0 * config.chemotaxis * 0.3;
        }
      }
    }
  }
  // __ECOLOGY_FORCES__ (replaced with species/predator/alarm steering in the ecology shader variant)
  // Runaway guard: the field-following terms add velocity along the deposited current and can compound
  // when stacked at low drag. Bound the final speed whenever any emergent steering is active (gated so
  // the off-path is untouched / byte-identical). Covers both this base shader and the ecology variant
  // (ecology forces are injected just above at the marker).
  if (want_field || want_grad || config.species_force > 0.0 || config.predator > 0.0 || config.alarm > 0.0) {
    let vmag = length(velocity);
    if (vmag > EMERGENT_VMAX) {
      velocity = velocity * (EMERGENT_VMAX / vmag);
    }
  }
  let displacement = guard_velocity_reversal(
    particle.vel_id.xyz * config.dt,
    velocity * config.dt + strafe * config.strafe_power * config.dt * (1.0 - config.strafe_momentum)
  );
  var position = particle.pos_cohort.xyz + displacement;
  // Anti-oscillation override. Strafe is a per-step sideways slip applied straight to position along the
  // orientation axis; for a position-derived orientation (absoluteOrientation = Radial/Outward/Swirl/
  // Noise = >= 2) a large negative axialForce can make the slip leap the particle clear across the
  // origin in one step, flipping that axis so the slip flips with it -- a degenerate per-step position
  // 2-cycle (the "switching between two configurations" jitter; the renderer derives speed/color/stretch
  // from per-frame displacement, so these read as big/fast/red). Velocity-aligned orientations (0/1)
  // cannot flip that way, so this is gated off for them and they stay byte-identical. On the gated path,
  // a slip larger than the cell budget is super-CFL -- it outruns the field structure it senses and is
  // the runaway that drives the cycle -- so redo the step without it; the particle coasts on its
  // velocity and the cloud gracefully relaxes to a drift instead of flickering. Dropping it every step
  // (not every other step) is what keeps it calm rather than trading one oscillation for another.
  if (config.absolute_orientation >= 2u) {
    // Derive the slip from the already-computed displacement so this guard sees the same raw position slip
    // that will be applied this step.
    let slip = displacement - velocity * config.dt;
    let strafe_cell = DOMAIN_SIZE / f32(max(1u, min(min(config.width, config.height), config.depth)));
    if (length(slip) > STRAFE_MAX_CELLS * strafe_cell) {
      position = particle.pos_cohort.xyz + guard_velocity_reversal(
        particle.vel_id.xyz * config.dt,
        velocity * config.dt
      );
    }
  }
  if (config.domain_shape == 0u) {
  if (config.boundary_mode == 0u) {
    if (position.x < -1.0 || position.x > 1.0) {
      velocity.x = -velocity.x;
      position.x = clamp(position.x, -1.0, 1.0);
    }
    if (position.y < -1.0 || position.y > 1.0) {
      velocity.y = -velocity.y;
      position.y = clamp(position.y, -1.0, 1.0);
    }
    if (position.z < -1.0 || position.z > 1.0) {
      velocity.z = -velocity.z;
      position.z = clamp(position.z, -1.0, 1.0);
    }
  } else if (config.boundary_mode == 1u) {
    if (any(position < vec3f(-1.0)) || any(position > vec3f(1.0))) {
      particles_out[i] = reset_particle(particle_id, config);
      return;
    }
  } else if (config.boundary_mode == 3u) {
    // Per-axis: wrap horizontally (X/Y), bounce off floor/ceiling (Z) -> endless tube.
    position.x = wrap_domain_scalar(position.x);
    position.y = wrap_domain_scalar(position.y);
    if (position.z < -1.0 || position.z > 1.0) {
      velocity.z = -velocity.z;
      position.z = clamp(position.z, -1.0, 1.0);
    }
  } else if (config.boundary_mode == 4u) {
    // Sticky/absorb: particles that reach the wall freeze onto it (a crust forms).
    if (any(position < vec3f(-1.0)) || any(position > vec3f(1.0))) {
      position = clamp(position, vec3f(-1.0), vec3f(1.0));
      velocity = vec3f(0.0);
    }
  } else if (config.boundary_mode == 5u) {
    // Soft wall: a spring force cushions particles back inside past 0.95 (rounded dome).
    let over = max(vec3f(0.0), abs(position) - vec3f(0.95));
    velocity = velocity - sign(position) * over * 0.5;
    position = clamp(position, vec3f(-1.0), vec3f(1.0));
  } else if (config.boundary_mode == 6u) {
    // Portal: leaving one side re-injects on the opposite side with a lateral shear (wormhole).
    if (any(position < vec3f(-1.0)) || any(position > vec3f(1.0))) {
      position = wrap_domain_vec(position + vec3f(0.37, -0.19, 0.0));
    }
  } else {
    position = wrap_domain_vec(position);
  }
  } else {
    // Non-cube domain: confine to the shape via its SDF, honoring the boundary mode.
    let d = domain_sdf(position, config.domain_shape);
    if (d > 0.0) {
      if (config.boundary_mode == 1u) {
        particles_out[i] = reset_particle(particle_id, config);
        return;
      }
      let n = domain_sdf_normal(position, config.domain_shape);
      if (config.boundary_mode == 0u) {
        velocity = reflect(velocity, n);
        position = position - n * (d + 0.0005);
      } else if (config.boundary_mode == 4u) {
        position = position - n * (d + 0.0005);
        velocity = vec3f(0.0);
      } else if (config.boundary_mode == 5u) {
        velocity = velocity - n * d * 0.5;
        position = position - n * (d + 0.0005);
      } else {
        // Wrap/portal/tube have no clean analogue on a curved domain — fall back to a bounce so
        // the cloud is actually contained by (and takes the form of) the selected shape.
        velocity = reflect(velocity, n);
        position = position - n * (d + 0.0005);
      }
    }
  }
  particles_out[i].pos_cohort = vec4f(position, cohort);
  particles_out[i].vel_id = vec4f(velocity, new_hue);
}
`,nn=65536,rn=`
${Xt}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> eco_brush: array<atomic<i32>>;
@group(0) @binding(2) var<uniform> config: SimConfig;

@compute @workgroup_size(256)
fn ecology_deposit(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.x;
  if (i >= config.active_particle_count) {
    return;
  }
  let particle = particles[i];
  let dims = vec3f(f32(config.width), f32(config.height), f32(config.depth));
  let grid = (particle.pos_cohort.xyz + vec3f(1.0)) * 0.5 * dims - vec3f(0.5);
  let center = vec3i(round(grid));
  let idx = index_xyz(center.x, center.y, center.z, config);
  let species = u32(floor(particle.pos_cohort.w)) % 3u;
  let amount = i32(config.deposit_mass * 0.02 * ${nn});
  atomicAdd(&eco_brush[idx * 4u + species], amount);
  // Species 0 is the predator group: it also lays a scent trail into channel w that prey flee.
  if (species == 0u) {
    atomicAdd(&eco_brush[idx * 4u + 3u], amount);
  }
}
`,z=`
${Xt}

@group(0) @binding(0) var<storage, read> eco_brush: array<i32>;
@group(0) @binding(1) var<storage, read_write> eco_field: array<vec4f>;
@group(0) @binding(2) var<uniform> config: SimConfig;

@compute @workgroup_size(256)
fn ecology_update(@builtin(global_invocation_id) gid: vec3u) {
  let flat = gid.x;
  let voxel_count = config.width * config.height * config.depth;
  if (flat >= voxel_count) {
    return;
  }
  // Clamp the fixed-point brush to a sane non-negative range before folding in: a pathological
  // pile-up of tens of thousands of particles into one voxel could otherwise overflow the i32 atomic
  // and wrap negative. clamp(>=0) absorbs that without affecting normal densities.
  let brush = clamp(vec4f(
    f32(eco_brush[flat * 4u + 0u]) / ${nn},
    f32(eco_brush[flat * 4u + 1u]) / ${nn},
    f32(eco_brush[flat * 4u + 2u]) / ${nn},
    f32(eco_brush[flat * 4u + 3u]) / ${nn}
  ), vec4f(0.0), vec4f(64.0));
  let decay = 0.9;
  eco_field[flat] = min(eco_field[flat] * decay + brush, vec4f(16.0));
}
`,an=e=>tn(e).replace(`@group(0) @binding(5) var<storage, read> particle_ids: array<u32>;`,`@group(0) @binding(5) var<storage, read> particle_ids: array<u32>;
@group(0) @binding(6) var<storage, read> eco_field: array<vec4f>;

fn sample_ecology(position_in: vec3f) -> vec4f {
  let position = wrap_domain_vec(position_in);
  let dims = vec3f(f32(config.width), f32(config.height), f32(config.depth));
  let grid = (position + vec3f(1.0)) * 0.5 * dims - vec3f(0.5);
  let c = vec3i(round(grid));
  return eco_field[index_xyz(c.x, c.y, c.z, config)];
}

// Asymmetric inter-species affinity matrix derived from the rule seed: positive = attract species j,
// negative = repel. Asymmetry (M[i][j] != M[j][i]) is what produces chasing/orbiting particle-life cells.
fn species_affinity(i: u32, j: u32, seed: f32) -> f32 {
  return hash(vec2f(f32(i * 3u + j) + 0.5, seed * 97.13 + 3.0)) * 2.0 - 1.0;
}`).replace(`  // __ECOLOGY_FORCES__ (replaced with species/predator/alarm steering in the ecology shader variant)`,`  if (config.species_force > 0.0 || config.predator > 0.0 || config.alarm > 0.0) {
    let epos2 = particle.pos_cohort.xyz;
    let myspec = u32(floor(particle.pos_cohort.w)) % 3u;
    let h2 = 2.0 / max(1.0, f32(config.width));
    let exp_p = sample_ecology(epos2 + vec3f(h2, 0.0, 0.0));
    let exp_m = sample_ecology(epos2 - vec3f(h2, 0.0, 0.0));
    let eyp = sample_ecology(epos2 + vec3f(0.0, h2, 0.0));
    let eym = sample_ecology(epos2 - vec3f(0.0, h2, 0.0));
    let ezp = sample_ecology(epos2 + vec3f(0.0, 0.0, h2));
    let ezm = sample_ecology(epos2 - vec3f(0.0, 0.0, h2));
    let grad0 = vec3f(exp_p.x - exp_m.x, eyp.x - eym.x, ezp.x - ezm.x);
    let grad1 = vec3f(exp_p.y - exp_m.y, eyp.y - eym.y, ezp.y - ezm.y);
    let grad2 = vec3f(exp_p.z - exp_m.z, eyp.z - eym.z, ezp.z - ezm.z);
    let grad_scent = vec3f(exp_p.w - exp_m.w, eyp.w - eym.w, ezp.w - ezm.w);
    let eco_speed = length(velocity);
    if (config.species_force > 0.0) {
      let f = grad0 * species_affinity(myspec, 0u, config.rule_seed)
        + grad1 * species_affinity(myspec, 1u, config.rule_seed)
        + grad2 * species_affinity(myspec, 2u, config.rule_seed);
      let fl = length(f);
      if (fl > 0.00000001) { velocity = velocity + (f / fl) * eco_speed * config.species_force * 0.3; }
    }
    if (config.predator > 0.0 && myspec == 0u) {
      let prey = grad1 + grad2;
      let pl = length(prey);
      if (pl > 0.00000001) { velocity = velocity + (prey / pl) * eco_speed * config.predator * 0.4; }
    }
    if (config.alarm > 0.0 && myspec != 0u) {
      let al = length(grad_scent);
      if (al > 0.00000001) { velocity = velocity - (grad_scent / al) * eco_speed * config.alarm * 0.4; }
    }
  }`),on=(e,t=`rgba32float`)=>`
${Xt}

const BRUSH_SCALE = 65536.0;

@group(0) @binding(0) var<storage, read> field_in: array<vec4f>;
@group(0) @binding(1) var<storage, read_write> brush: array<atomic<i32>>;
@group(0) @binding(2) var<storage, read_write> field_out: array<vec4f>;
@group(0) @binding(3) var<uniform> config: SimConfig;
${e?`@group(0) @binding(4) var field_texture_out: texture_storage_3d<${t}, write>;`:``}

@compute @workgroup_size(256)
fn update_field(@builtin(global_invocation_id) gid: vec3u) {
  let flat = gid.x;
  let voxel_count = config.width * config.height * config.depth;
  if (flat >= voxel_count) {
    return;
  }
  let x = flat % config.width;
  let y = (flat / config.width) % config.height;
  let z = flat / (config.width * config.height);
  let center = field_in[flat];
  var canvas_color = center;
  let time_scale = sim_time_scale(config);
  let diffusion = clamp(config.trail_diffusion, 0.0, 1.0);
  if (diffusion > 0.0) {
    let k_slider = max(0.001, diffusion * diffusion);
    let k = 6.0 / (pow(5.0, k_slider) - 1.0);
    let neighbors =
      field_in[index_xyz(i32(x) - 1, i32(y), i32(z), config)] +
      field_in[index_xyz(i32(x) + 1, i32(y), i32(z), config)] +
      field_in[index_xyz(i32(x), i32(y) - 1, i32(z), config)] +
      field_in[index_xyz(i32(x), i32(y) + 1, i32(z), config)] +
      field_in[index_xyz(i32(x), i32(y), i32(z) - 1, config)] +
      field_in[index_xyz(i32(x), i32(y), i32(z) + 1, config)];
    let diffused_color = (center * k + neighbors) / (6.0 + k);
    canvas_color = mix(center, diffused_color, time_scale);
  }
  let persistence = pow(clamp(config.trail_persistence, 0.0, 0.999), time_scale);
  let brush_value = vec4f(
    f32(atomicLoad(&brush[flat * 4u + 0u])) / BRUSH_SCALE,
    f32(atomicLoad(&brush[flat * 4u + 1u])) / BRUSH_SCALE,
    f32(atomicLoad(&brush[flat * 4u + 2u])) / BRUSH_SCALE,
    f32(atomicLoad(&brush[flat * 4u + 3u])) / BRUSH_SCALE
  );
  let mixed = canvas_color * persistence + brush_value * (1.0 - persistence);
  var w_final = mixed.w;
  // Lenia-style continuous-CA growth on the density channel. A smooth growth function of the local
  // neighbourhood mean grows the field where density sits near the kernel centre and erodes it
  // elsewhere -> self-organising blobs/gliders the particles ride. 0 strength = no extra reads,
  // w_final == mixed.w, byte-identical to the classic field update.
  // Lenia growth + single-channel reaction-diffusion both read the 6-neighbour mean of the density
  // channel; compute it once when either is active. Both are 0-gated -> byte-identical when off.
  if (config.lenia_strength > 0.0 || config.gray_scott > 0.0) {
    let n6 =
      field_in[index_xyz(i32(x) - 1, i32(y), i32(z), config)] +
      field_in[index_xyz(i32(x) + 1, i32(y), i32(z), config)] +
      field_in[index_xyz(i32(x), i32(y) - 1, i32(z), config)] +
      field_in[index_xyz(i32(x), i32(y) + 1, i32(z), config)] +
      field_in[index_xyz(i32(x), i32(y), i32(z) - 1, config)] +
      field_in[index_xyz(i32(x), i32(y), i32(z) + 1, config)];
    let local_mean = (center.w + n6.w) / 7.0;
    // Normalize the small (~1e-4) density to 0..1 so the slider params are meaningful ranges.
    let mean_norm = local_mean / (local_mean + DENSITY_HALF);
    let u_norm = w_final / (w_final + DENSITY_HALF);
    if (config.lenia_strength > 0.0) {
      // Lenia: smooth growth function of the neighbourhood mean -> self-organising blobs/gliders.
      let sigma = max(0.001, config.lenia_width);
      let delta_u = mean_norm - config.lenia_center;
      let growth = 2.0 * exp(-(delta_u * delta_u) / (2.0 * sigma * sigma)) - 1.0;
      w_final = max(0.0, w_final + config.lenia_strength * growth * time_scale * LENIA_RATE);
    }
    if (config.gray_scott > 0.0) {
      // Single-channel reaction-diffusion (Nagumo/Allen-Cahn bistable): diffusion smooths the
      // normalised density while a cubic reaction pushes it toward 0 or 1 about a threshold,
      // forming Turing-like spots and labyrinths. gs_feed scales diffusion, gs_kill sets the
      // threshold. (One-channel approximation of Gray-Scott; no extra field buffer.)
      let lap = mean_norm - u_norm;
      let diff = clamp(config.gs_feed * 10.0, 0.0, 1.0);
      let a = clamp(config.gs_kill * 10.0, 0.05, 0.95);
      let reaction = u_norm * (1.0 - u_norm) * (u_norm - a);
      let du = diff * lap + reaction;
      w_final = max(0.0, w_final + config.gray_scott * du * time_scale * LENIA_RATE * 4.0);
    }
  }
  let result = vec4f(clamp(mixed.xyz, vec3f(-8.0), vec3f(8.0)), min(w_final, 8.0));
  field_out[flat] = result;
  ${e?`textureStore(field_texture_out, vec3i(i32(x), i32(y), i32(z)), result);`:``}
}
`,sn=e=>`
${Xt}

@group(0) @binding(0) var<storage, read> field_values: array<vec4f>;
@group(0) @binding(1) var field_texture: texture_storage_3d<${e}, write>;
@group(0) @binding(2) var<uniform> config: SimConfig;

@compute @workgroup_size(4, 4, 4)
fn update_field_texture(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= config.width || gid.y >= config.height || gid.z >= config.depth) {
    return;
  }
  let flat = (gid.z * config.height + gid.y) * config.width + gid.x;
  textureStore(field_texture, vec3i(gid), field_values[flat]);
}
`,cn=`
const PI = 3.141592653589793;

// View depth (along the camera axis) at which a splat sits exactly on the near plane.
// Anything at or in front of the camera by less than this is behind the viewer and culled.
const PARTICLE_NEAR = 0.05;
// Soft density cutoff: instead of hard-culling particles below particle_density_cutoff, the
// splat scales down to zero size as the neighborhood density falls from this multiple of the
// cutoff down to the cutoff itself, so the cloud edge dissolves instead of popping.
const PARTICLE_CUTOFF_FADE = 2.25;
// If a particle jumps farther than this between two whole-step states, treat it as a reset or
// extreme aliasing event and snap to the current state instead of drawing an interpolation streak.
const PARTICLE_INTERP_SNAP_DISTANCE = 0.35;
// Legacy focal (1.85*0.92). The FOV slider feeds uniforms.focal_k; at this value the
// projection is identical to the verified default.
const DEFAULT_FOCAL_K = 1.702;
// Reference view depth at which particle_size_px renders at its literal pixel value. This is
// the default camera distance, so at default framing sizes match the slider; nearer particles
// grow and farther ones shrink with true perspective.
const PARTICLE_SIZE_REF_DEPTH = 3.15;

struct Particle {
  pos_cohort: vec4f,  // xyz = position, w = cohort
  vel_id: vec4f,      // xyz = velocity, w = hue (was particle id; id is derivable from index)
};

struct RenderUniforms {
  resolution: vec2f,
  width: u32,
  height: u32,
  depth: u32,
  particle_count: u32,
  voxel_count: u32,
  timestep: u32,
  density: f32,
  exposure: f32,
  focus_distance: f32,
  aperture: f32,
  overlay: u32,
  palette: u32,
  filament: f32,
  yaw_cos: f32,
  yaw_sin: f32,
  pitch_cos: f32,
  pitch_sin: f32,
  distance: f32,
  ray_steps: u32,
  fog_step_scale: f32,
  fog_temporal_blend: f32,
  fog_blue_noise: u32,
  fog_frame: u32,
  field_texture_mode: u32,
  empty_space_skip: u32,
  empty_space_threshold: f32,
  empty_space_stride: f32,
  particle_size_px: f32,
  particle_min_px: f32,
  particle_max_px: f32,
  particle_opacity: f32,
  particle_blend_mode: u32,
  particle_density_cutoff: f32,
  particle_density_radius: f32,
  trail_opacity: f32,
  trail_threshold: f32,
  render_layer: u32,
  camera_pan_x: f32,
  camera_pan_y: f32,
  trail_color_mode: u32,
  fog_tint_r: f32,
  fog_tint_g: f32,
  fog_tint_b: f32,
  particle_tint_r: f32,
  particle_tint_g: f32,
  particle_tint_b: f32,
  scene_brightness: f32,
  particle_brightness: f32,
  fog_brightness: f32,
  particle_color_mode: u32,
  particle_velocity_stretch: u32,
  particle_stretch: f32,
  particle_gradient_sensitivity: f32,
  focal_k: f32,
  dof_blur: f32,
  dof_debug: u32,
  render_lerp_t: f32,
  dof_enabled: u32,
  density_pass_strength: f32,
  density_small_scale: f32,
  density_large_scale: f32,
  density_large_threshold: f32,
  density_contrast_gain: f32,
  density_contrast_balance: f32,
  density_emission_power: f32,
  density_occlusion: f32,
  cohorts: u32,
  particle_slow_cutoff: f32,
  particle_glow_core: f32,
  particle_hot_core: f32,
  accumulation_strength: f32,
  accumulation_radius: f32,
  accumulation_curve: f32,
  accumulation_memory: f32,
  accumulation_noise_reject: f32,
  particle_density_reference: f32,
  particle_density_normalize: f32,
  particle_density_softness: f32,
  particle_support_mask: f32,
  particle_support_radius: f32,
  particle_support_neighbors: f32,
  particle_support_flow: f32,
  particle_support_grid_size: u32,
  particle_stretch_min: f32,
  particle_stretch_speed: f32,
  particle_speed_cutoff: f32,
  variation_master: f32,
  variation_time: f32,
  variation_drift: f32,
  variation_noise_mix: f32,
  variation_freq: f32,
  variation_octaves: u32,
  variation_gain: f32,
  variation_lacunarity: f32,
  variation_size_amount: f32,
  variation_size_curve: f32,
  variation_size_min: f32,
  variation_size_max: f32,
  variation_bright_amount: f32,
  variation_bright_curve: f32,
  variation_bright_min: f32,
  variation_bright_max: f32,
  variation_opacity_amount: f32,
  variation_opacity_curve: f32,
  variation_opacity_min: f32,
  variation_opacity_max: f32,
  variation_color_amount: f32,
  variation_color_curve: f32,
  variation_color_min: f32,
  variation_color_max: f32,
  domain_shape: u32,
  audio_low: f32,
  audio_mid: f32,
  audio_high: f32,
  particle_color_mode_from: u32,
  particle_color_blend: f32,
  particle_cutoff_prepass: u32,
  _reserved_119: u32,
  _reserved_120: u32,
  _reserved_121: u32,
  _reserved_122: u32,
  _reserved_123: u32,
  // Particle haze/contrast controls (slots 124-127). Defaults are visual no-ops.
  particle_exponent: f32,
  particle_brightness_boost: f32,
  particle_support_smoothing: f32,
  particle_haze_cull: f32,
};

@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;

// ---- Per-particle variation + fractal noise -------------------------------------------------
// Self-contained (this shared chunk has no PRNG of its own). Each particle draws stable,
// per-index randomness ("frozen identity") optionally blended with slow time drift, and/or a
// coherent fBm field sampled at the particle's world position so neighbours vary together.
const VARIATION_MAX_OCTAVES: u32 = 4u;
const VARIATION_DRIFT_RATE: f32 = 0.05;
const VARIATION_FIELD_DRIFT: f32 = 0.08;

fn var_pcg_hash(seed: u32) -> u32 {
  let state = seed * 747796405u + 2891336453u;
  let word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
  return (word >> 22u) ^ word;
}

fn var_hash_u(seed: u32) -> f32 {
  return f32(var_pcg_hash(seed)) / 4294967295.0;
}

fn var_hash3i(p: vec3i) -> f32 {
  let ux = bitcast<u32>(p.x);
  let uy = bitcast<u32>(p.y);
  let uz = bitcast<u32>(p.z);
  let h = var_pcg_hash((ux * 73856093u) ^ var_pcg_hash((uy * 19349663u) ^ var_pcg_hash(uz * 83492791u)));
  return f32(h) / 4294967295.0;
}

fn var_value_noise3(p: vec3f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let w = f * f * (3.0 - 2.0 * f);
  let bi = vec3i(i);
  let c000 = var_hash3i(bi + vec3i(0, 0, 0));
  let c100 = var_hash3i(bi + vec3i(1, 0, 0));
  let c010 = var_hash3i(bi + vec3i(0, 1, 0));
  let c110 = var_hash3i(bi + vec3i(1, 1, 0));
  let c001 = var_hash3i(bi + vec3i(0, 0, 1));
  let c101 = var_hash3i(bi + vec3i(1, 0, 1));
  let c011 = var_hash3i(bi + vec3i(0, 1, 1));
  let c111 = var_hash3i(bi + vec3i(1, 1, 1));
  let x00 = mix(c000, c100, w.x);
  let x10 = mix(c010, c110, w.x);
  let x01 = mix(c001, c101, w.x);
  let x11 = mix(c011, c111, w.x);
  let y0 = mix(x00, x10, w.y);
  let y1 = mix(x01, x11, w.y);
  return mix(y0, y1, w.z);
}

fn var_fbm3(p_in: vec3f, octaves: u32, gain: f32, lacunarity: f32) -> f32 {
  var amp = 0.5;
  var freq = 1.0;
  var sum = 0.0;
  var norm = 0.0;
  let n = min(octaves, VARIATION_MAX_OCTAVES);
  for (var o = 0u; o < VARIATION_MAX_OCTAVES; o = o + 1u) {
    if (o >= n) { break; }
    sum = sum + amp * var_value_noise3(p_in * freq);
    norm = norm + amp;
    amp = amp * gain;
    freq = freq * lacunarity;
  }
  return sum / max(0.0001, norm);
}

struct ParticleVariation {
  size_mul: f32,
  bright_mul: f32,
  opacity_mul: f32,
  hue_off: f32,
  sat_mul: f32,
  val_mul: f32,
};

fn var_stream_hash(index: u32, stream: u32) -> f32 {
  return var_hash_u(index * 747796405u + stream * 2654435761u + 374761393u);
}

// Frozen identity blended toward a slow temporal drift (smooth, no per-frame flicker).
fn var_white(index: u32, stream: u32, drift: f32, t: f32) -> f32 {
  let frozen = var_stream_hash(index, stream);
  let phase = t * VARIATION_DRIFT_RATE;
  let bucket = floor(phase);
  let frac = fract(phase);
  let a = var_stream_hash(index ^ (bitcast<u32>(i32(bucket)) * 2246822519u), stream);
  let b = var_stream_hash(index ^ (bitcast<u32>(i32(bucket) + 1) * 2246822519u), stream);
  let drifted = mix(a, b, smoothstep(0.0, 1.0, frac));
  return mix(frozen, drifted, clamp(drift, 0.0, 1.0));
}

// Coherent fBm signal sampled at the particle's world position (per-stream decorrelated).
fn var_coherent(pos: vec3f, stream: f32, t: f32) -> f32 {
  let p = pos * uniforms.variation_freq
    + vec3f(stream * 17.3, stream * 9.1, stream * 23.7)
    + vec3f(0.0, 0.0, t * VARIATION_FIELD_DRIFT);
  return var_fbm3(p, uniforms.variation_octaves, uniforms.variation_gain, uniforms.variation_lacunarity);
}

// Shape a unit signal with a power curve and map into [lo,hi] as a multiplier (neutral 1.0).
fn var_mul(u_white: f32, u_coherent: f32, curve: f32, lo: f32, hi: f32, amount: f32) -> f32 {
  let u = mix(u_white, u_coherent, clamp(uniforms.variation_noise_mix, 0.0, 1.0));
  let shaped = pow(clamp(u, 0.0, 1.0), max(0.0001, curve));
  return mix(1.0, mix(lo, hi, shaped), clamp(amount, 0.0, 1.0));
}

// Same shaping mapped as a signed offset (neutral 0.0).
fn var_off(u_white: f32, u_coherent: f32, curve: f32, lo: f32, hi: f32, amount: f32) -> f32 {
  let u = mix(u_white, u_coherent, clamp(uniforms.variation_noise_mix, 0.0, 1.0));
  let shaped = pow(clamp(u, 0.0, 1.0), max(0.0001, curve));
  return mix(0.0, mix(lo, hi, shaped), clamp(amount, 0.0, 1.0));
}

fn compute_particle_variation(index: u32, pos: vec3f) -> ParticleVariation {
  var v: ParticleVariation;
  v.size_mul = 1.0;
  v.bright_mul = 1.0;
  v.opacity_mul = 1.0;
  v.hue_off = 0.0;
  v.sat_mul = 1.0;
  v.val_mul = 1.0;
  let master = uniforms.variation_master;
  let any_amount = uniforms.variation_size_amount + uniforms.variation_bright_amount + uniforms.variation_opacity_amount + uniforms.variation_color_amount;
  if (master <= 0.0 || any_amount <= 0.0) {
    return v;
  }
  let drift = uniforms.variation_drift;
  let t = uniforms.variation_time;

  let size_v = var_mul(var_white(index, 0u, drift, t), var_coherent(pos, 0.0, t), uniforms.variation_size_curve, uniforms.variation_size_min, uniforms.variation_size_max, uniforms.variation_size_amount);
  v.size_mul = mix(1.0, size_v, master);

  let bright_v = var_mul(var_white(index, 1u, drift, t), var_coherent(pos, 1.0, t), uniforms.variation_bright_curve, uniforms.variation_bright_min, uniforms.variation_bright_max, uniforms.variation_bright_amount);
  v.bright_mul = mix(1.0, bright_v, master);

  let opacity_v = var_mul(var_white(index, 2u, drift, t), var_coherent(pos, 2.0, t), uniforms.variation_opacity_curve, uniforms.variation_opacity_min, uniforms.variation_opacity_max, uniforms.variation_opacity_amount);
  v.opacity_mul = mix(1.0, opacity_v, master);

  let hue = var_off(var_white(index, 3u, drift, t), var_coherent(pos, 3.0, t), uniforms.variation_color_curve, uniforms.variation_color_min, uniforms.variation_color_max, uniforms.variation_color_amount);
  v.hue_off = hue * master;
  let col_amt = clamp(uniforms.variation_color_amount, 0.0, 1.0) * master;
  v.sat_mul = mix(1.0, mix(0.6, 1.0, var_white(index, 4u, drift, t)), col_amt);
  v.val_mul = mix(1.0, mix(0.6, 1.2, var_white(index, 5u, drift, t)), col_amt);
  return v;
}

// Apply per-particle size variation. The reachable size range is defined entirely by the
// Size Min/Max multiplier envelope (variation_size_min/max), so no absolute pixel clamp is
// imposed here — that keeps the old particle_min_px/max_px contract intact and avoids the
// live-mode default max from capping the very particles the distribution is meant to enlarge.
fn particle_variation_sized_px(base_size_px: f32, size_mul: f32) -> f32 {
  return base_size_px * size_mul;
}
// -------------------------------------------------------------------------------------------

struct SplatOut {
  @builtin(position) position: vec4f,
  @location(0) local: vec2f,
  @location(1) alpha: f32,
  @location(2) density: f32,
  @location(3) depth: f32,
  @location(4) species: f32,
  @location(5) uv: vec2f,
  @location(6) mode: f32,
  @location(7) color_hsv: vec4f,
  @location(8) defocus: f32,
  @location(9) sprite_blur: f32,
  @location(10) bright_mul: f32,
  @location(11) speed: f32,
};

struct ParticleDensityStats {
  center: f32,
  peak: f32,
  mean: f32,
  support: f32,
  coherence: f32,
};

fn density_stats_from_axis_samples(center: f32, px: f32, nx: f32, py: f32, ny: f32, pz: f32, nz: f32) -> ParticleDensityStats {
  let peak = max(center, max(max(px, nx), max(max(py, ny), max(pz, nz))));
  let mean = max(0.0, (center * 2.0 + px + nx + py + ny + pz + nz) * 0.125);
  let support = mean / max(0.000001, peak);
  let axis_x = max(0.0, (px + nx) * 0.5);
  let axis_y = max(0.0, (py + ny) * 0.5);
  let axis_z = max(0.0, (pz + nz) * 0.5);
  let axis_mean = max(0.000001, (axis_x + axis_y + axis_z) / 3.0);
  let axis_peak = max(axis_x, max(axis_y, axis_z));
  let axis_floor = min(axis_x, min(axis_y, axis_z));
  let axis_contrast = (axis_peak - axis_floor) / max(0.000001, axis_peak + axis_mean * 0.5);
  let center_bias = clamp((center - mean) / max(0.000001, peak), 0.0, 1.0);
  let coherence = clamp(axis_contrast * 0.78 + center_bias * 0.22, 0.0, 1.0);
  return ParticleDensityStats(center, peak, mean, support, coherence);
}

fn corner(vertex_index: u32) -> vec2f {
  let c = vertex_index % 6u;
  if (c == 0u) { return vec2f(-1.0, -1.0); }
  if (c == 1u) { return vec2f(1.0, -1.0); }
  if (c == 2u) { return vec2f(-1.0, 1.0); }
  if (c == 3u) { return vec2f(-1.0, 1.0); }
  if (c == 4u) { return vec2f(1.0, -1.0); }
  return vec2f(1.0, 1.0);
}

fn billboard_corner(vertex_index: u32) -> vec2f {
  let c = vertex_index & 3u;
  if (c == 0u) { return vec2f(-1.0, -1.0); }
  if (c == 1u) { return vec2f(1.0, -1.0); }
  if (c == 2u) { return vec2f(-1.0, 1.0); }
  return vec2f(1.0, 1.0);
}

fn particle_splat_base_size_px(perspective: f32) -> f32 {
  // True 3D perspective: on-screen size scales with 1/view_depth, exactly like the projected
  // positions, so a particle GROWS as the camera dollies closer and SHRINKS as it recedes -- in
  // lockstep with the rest of the scene, the way real 3D works. The 'perspective' arg is
  // projected.z (= 1.85 / view_depth); the PARTICLE_SIZE_REF_DEPTH / 1.85 factor normalizes it so
  // particle_size_px renders at its literal pixel value at the reference framing, and the focal
  // ratio scales with the FOV slider. Do not apply a screen-space min/max floor here; old saved
  // P Min Px values must not turn live particles into clamped sprites. (A previous build dropped the
  // 'perspective' term to make size dolly-independent; with a constant pixel size the dots stop
  // shrinking with the receding cloud and APPEAR to scale up on zoom-out, which is not real 3D.)
  return max(0.0, uniforms.particle_size_px) * perspective * (PARTICLE_SIZE_REF_DEPTH / 1.85) * (uniforms.focal_k / DEFAULT_FOCAL_K);
}

fn particle_splat_radius_for_size_px(size_px: f32) -> vec2f {
  return vec2f(size_px * 2.0 / uniforms.resolution.x, size_px * 2.0 / uniforms.resolution.y);
}

fn particle_splat_radius_ndc(perspective: f32) -> vec2f {
  return particle_splat_radius_for_size_px(particle_splat_base_size_px(perspective));
}

fn particle_dof_splat_radius_ndc(perspective: f32, focus_blur_px: f32) -> vec2f {
  return particle_splat_radius_for_size_px(particle_splat_base_size_px(perspective) + max(0.0, focus_blur_px));
}

fn particle_dof_blur_px(depth: f32) -> f32 {
  return particle_dof_blur_px_from_defocus(particle_focus_defocus(depth));
}

fn particle_focus_defocus(depth: f32) -> f32 {
  let focus_error = abs(depth - uniforms.focus_distance);
  return clamp(focus_error * max(0.0, uniforms.aperture) * 8.0, 0.0, 1.0);
}

fn particle_dof_blur_px_from_defocus(defocus: f32) -> f32 {
  if (uniforms.dof_enabled == 0u) {
    return 0.0;
  }
  return clamp(defocus, 0.0, 1.0) * max(0.0, uniforms.dof_blur) * 8.0;
}

fn particle_sprite_blur_amount(focus_blur_px: f32, base_size_px: f32) -> f32 {
  let relative_blur = focus_blur_px / max(0.75, base_size_px * 0.75);
  return smoothstep(0.08, 1.0, relative_blur);
}

fn voxel_to_world(x: u32, y: u32, z: u32) -> vec3f {
  return vec3f(
    ((f32(x) + 0.5) / f32(uniforms.width)) * 2.0 - 1.0,
    ((f32(y) + 0.5) / f32(uniforms.height)) * 2.0 - 1.0,
    ((f32(z) + 0.5) / f32(uniforms.depth)) * 2.0 - 1.0
  );
}

fn project(position: vec3f) -> vec3f {
  let camera = world_to_camera(position);
  let inv_depth = 1.0 / max(PARTICLE_NEAR, uniforms.distance + camera.z);
  let aspect = uniforms.resolution.x / uniforms.resolution.y;
  // x,y use the current focal length (FOV slider). .z stays the FOV-independent depth metric
  // (1.85 / view_depth) that DOF focus distance and splat size are calibrated against.
  return vec3f(camera.x * uniforms.focal_k * inv_depth / aspect, camera.y * uniforms.focal_k * inv_depth, 1.85 * inv_depth);
}

fn world_to_camera(position: vec3f) -> vec3f {
  let cy = uniforms.yaw_cos;
  let sy = uniforms.yaw_sin;
  let cp = uniforms.pitch_cos;
  let sp = uniforms.pitch_sin;
  let rx = position.x * cy - position.z * sy;
  let rz = position.x * sy + position.z * cy;
  let ry = position.y * cp - rz * sp;
  let rz2 = position.y * sp + rz * cp;
  return vec3f(rx + uniforms.camera_pan_x, ry + uniforms.camera_pan_y, rz2);
}

fn world_vector_to_camera(vector: vec3f) -> vec3f {
  let cy = uniforms.yaw_cos;
  let sy = uniforms.yaw_sin;
  let cp = uniforms.pitch_cos;
  let sp = uniforms.pitch_sin;
  let rx = vector.x * cy - vector.z * sy;
  let rz = vector.x * sy + vector.z * cy;
  let ry = vector.y * cp - rz * sp;
  let rz2 = vector.y * sp + rz * cp;
  return vec3f(rx, ry, rz2);
}

fn camera_to_world(position: vec3f) -> vec3f {
  let cy = uniforms.yaw_cos;
  let sy = uniforms.yaw_sin;
  let cp = uniforms.pitch_cos;
  let sp = uniforms.pitch_sin;
  let y = position.y * cp + position.z * sp;
  let rz = -position.y * sp + position.z * cp;
  let x = position.x * cy + rz * sy;
  let z = -position.x * sy + rz * cy;
  return vec3f(x, y, z);
}

fn palette(kind: u32, density: f32, depth: f32, species: f32) -> vec3f {
  let species_mix = vec3f(0.07 * species, 0.045 * (1.0 - abs(species - 0.5)), 0.09 * (1.0 - species));
  if (kind == 1u) {
    return vec3f(1.0, 0.34 + density * 0.42, 0.10 + depth * 0.14) + species_mix;
  }
  if (kind == 2u) {
    return vec3f(0.48 + density * 0.44, 0.30 + depth * 0.45, 1.0) + species_mix;
  }
  return vec3f(0.20 + depth * 0.34, 0.74 + density * 0.24, 0.68 + density * 0.28) + species_mix;
}

fn hsv2rgb(c: vec3f) -> vec3f {
  let k = vec4f(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  let p = abs(fract(c.xxx + k.xyz) * 6.0 - k.www);
  return c.z * mix(k.xxx, clamp(p - k.xxx, vec3f(0.0), vec3f(1.0)), c.y);
}

fn saturate_color(color: vec3f, amount: f32) -> vec3f {
  let luma = dot(color, vec3f(0.2126, 0.7152, 0.0722));
  return max(vec3f(0.0), mix(vec3f(luma), color, amount));
}

fn fog_tint_color() -> vec3f {
  return vec3f(uniforms.fog_tint_r, uniforms.fog_tint_g, uniforms.fog_tint_b);
}

fn particle_tint_color() -> vec3f {
  return vec3f(uniforms.particle_tint_r, uniforms.particle_tint_g, uniforms.particle_tint_b);
}

fn apply_tint(color: vec3f, tint: vec3f, amount: f32) -> vec3f {
  return mix(color, color * tint, amount);
}

fn scene_gain() -> f32 {
  return 0.35 + max(0.0, uniforms.scene_brightness) * 0.65;
}

fn particle_gain() -> f32 {
  return uniforms.exposure * scene_gain() * max(0.0, uniforms.particle_brightness);
}

fn fog_gain() -> f32 {
  return uniforms.exposure * scene_gain() * max(0.0, uniforms.fog_brightness) * 3.0;
}

fn ramp4(t: f32, a: vec3f, b: vec3f, c: vec3f, d: vec3f) -> vec3f {
  let x = clamp(t, 0.0, 1.0);
  if (x < 0.333333) {
    return mix(a, b, smoothstep(0.0, 0.333333, x));
  }
  if (x < 0.666667) {
    return mix(b, c, smoothstep(0.333333, 0.666667, x));
  }
  return mix(c, d, smoothstep(0.666667, 1.0, x));
}

fn particle_gradient_color(t: f32, mode_in: u32) -> vec3f {
  // Velocity/audio VARIANT modes reuse the base gradient ramps; remap the variant id to its ramp id
  // here so every caller (particle splat, density, accumulation, volume) gets the right palette.
  var mode = mode_in;
  if (mode_in == 14u) { mode = 1u; }        // velocity -> inferno
  else if (mode_in == 15u) { mode = 3u; }   // velocity -> viridis
  else if (mode_in == 16u) { mode = 6u; }   // velocity -> spectral
  else if (mode_in == 17u) { mode = 8u; }   // velocity -> cosmic
  else if (mode_in == 18u) { mode = 9u; }   // velocity -> ice
  else if (mode_in == 19u) { mode = 2u; }   // audio -> magma
  else if (mode_in == 20u) { mode = 3u; }   // audio -> viridis
  else if (mode_in == 21u) { mode = 4u; }   // audio -> turbo
  else if (mode_in == 22u) { mode = 8u; }   // audio -> cosmic
  else if (mode_in == 23u) { mode = 9u; }   // audio -> ice
  else if (mode_in == 24u) { mode = 10u; }  // audio -> ember
  else if (mode_in == 25u) { mode = 7u; }   // audio -> plasma
  if (mode == 1u) {
    return ramp4(t, vec3f(0.02, 0.01, 0.08), vec3f(0.45, 0.05, 0.35), vec3f(0.91, 0.24, 0.12), vec3f(0.99, 0.96, 0.64));
  }
  if (mode == 2u) {
    return ramp4(t, vec3f(0.01, 0.00, 0.03), vec3f(0.32, 0.07, 0.48), vec3f(0.82, 0.25, 0.32), vec3f(0.99, 0.87, 0.58));
  }
  if (mode == 3u) {
    return ramp4(t, vec3f(0.17, 0.00, 0.33), vec3f(0.10, 0.38, 0.55), vec3f(0.20, 0.70, 0.48), vec3f(0.99, 0.91, 0.14));
  }
  if (mode == 4u) {
    return ramp4(t, vec3f(0.19, 0.07, 0.23), vec3f(0.10, 0.48, 0.97), vec3f(0.51, 0.99, 0.37), vec3f(0.98, 0.17, 0.09));
  }
  if (mode == 5u) {
    return hsv2rgb(vec3f(t, 0.92, 1.0));
  }
  if (mode == 7u) { // plasma: violet -> magenta -> orange -> hot white
    return ramp4(t, vec3f(0.05, 0.00, 0.20), vec3f(0.50, 0.00, 0.60), vec3f(1.00, 0.30, 0.40), vec3f(1.00, 0.92, 0.62));
  }
  if (mode == 8u) { // cosmic: deep blue -> indigo -> magenta -> cyan white
    return ramp4(t, vec3f(0.02, 0.00, 0.10), vec3f(0.20, 0.05, 0.50), vec3f(0.80, 0.10, 0.62), vec3f(0.60, 0.95, 1.00));
  }
  if (mode == 9u) { // ice: midnight teal -> blue -> cyan -> white
    return ramp4(t, vec3f(0.00, 0.05, 0.12), vec3f(0.05, 0.32, 0.62), vec3f(0.42, 0.82, 0.96), vec3f(0.92, 1.00, 1.00));
  }
  if (mode == 10u) { // ember: near-black red -> red -> orange -> warm white
    return ramp4(t, vec3f(0.05, 0.00, 0.00), vec3f(0.62, 0.05, 0.00), vec3f(1.00, 0.42, 0.06), vec3f(1.00, 0.95, 0.72));
  }
  if (mode == 11u) { // velocity/speed: blue (slow) -> cyan -> yellow -> red (fast)
    return ramp4(t, vec3f(0.05, 0.10, 0.55), vec3f(0.10, 0.75, 0.90), vec3f(0.95, 0.85, 0.20), vec3f(1.00, 0.18, 0.08));
  }
  if (mode == 12u) { // cohort: evenly-spaced distinct hue per cohort
    return hsv2rgb(vec3f(t, 0.85, 1.0));
  }
  if (mode == 13u) { // audio-reactive: vivid spectral (t is audio-shifted in particle_color)
    return ramp4(t, vec3f(0.15, 0.00, 0.45), vec3f(0.95, 0.10, 0.55), vec3f(1.00, 0.65, 0.10), vec3f(0.40, 0.95, 1.00));
  }
  return ramp4(t, vec3f(0.37, 0.31, 0.64), vec3f(0.15, 0.68, 0.50), vec3f(0.99, 0.87, 0.35), vec3f(0.83, 0.18, 0.14));
}

fn particle_velocity_screen_axis(velocity: vec3f) -> vec2f {
  let speed = length(velocity);
  if (speed <= 0.000001) {
    return vec2f(0.0);
  }
  let aspect = uniforms.resolution.x / uniforms.resolution.y;
  let camera_velocity = world_vector_to_camera(velocity);
  let axis = camera_velocity.xy * vec2f(aspect, 1.0);
  let axis_length = length(axis);
  if (axis_length <= 0.000001) {
    return vec2f(0.0);
  }
  return axis / axis_length;
}

fn particle_velocity_stretch_amount(velocity: vec3f) -> f32 {
  let min_stretch = clamp(uniforms.particle_stretch_min, 0.0, 6.0);
  let max_stretch = max(min_stretch, clamp(uniforms.particle_stretch, 0.0, 6.0));
  let speed_t = smoothstep(0.0, max(0.000001, uniforms.particle_stretch_speed), length(velocity));
  return mix(min_stretch, max_stretch, speed_t);
}

fn particle_density_gate_radius() -> f32 {
  let configured = max(0.0, uniforms.particle_density_radius);
  if (uniforms.particle_density_cutoff <= 0.0 && uniforms.particle_density_normalize <= 0.0001) {
    return configured;
  }
  let max_dim = max(f32(uniforms.width), max(f32(uniforms.height), f32(uniforms.depth)));
  let voxel_radius = 2.0 / max(1.0, max_dim);
  return max(configured, voxel_radius * 1.5);
}

fn particle_speed_cutoff_visibility(velocity: vec3f) -> f32 {
  let speed = length(velocity);
  let upper_cutoff = max(0.0, uniforms.particle_speed_cutoff);
  let lower_cutoff = max(0.0, uniforms.particle_slow_cutoff);
  if (upper_cutoff <= 0.0 && lower_cutoff <= 0.0) {
    return 1.0;
  }
  var visibility = 1.0;
  if (upper_cutoff > 0.0) {
    let upper_activation = smoothstep(0.0, 0.02, upper_cutoff);
    let upper_edge_width = max(0.0015, upper_cutoff * 0.08);
    let upper_visibility = 1.0 - smoothstep(upper_cutoff, upper_cutoff + upper_edge_width, speed);
    visibility = visibility * mix(1.0, upper_visibility, upper_activation);
  }
  if (lower_cutoff > 0.0) {
    let lower_activation = smoothstep(0.0, 0.02, lower_cutoff);
    let lower_edge_width = max(0.0015, lower_cutoff * 0.08);
    let lower_visibility = smoothstep(max(0.0, lower_cutoff - lower_edge_width), lower_cutoff, speed);
    visibility = visibility * mix(1.0, lower_visibility, lower_activation);
  }
  return visibility;
}

fn particle_gradient_coordinate(velocity: vec3f, base: f32) -> f32 {
  let speed = length(velocity);
  if (speed <= 0.000001) {
    return fract(base);
  }
  let dir = velocity / speed;
  let azimuth = atan2(dir.z, dir.x) / (2.0 * PI) + 0.5;
  let elevation = asin(clamp(dir.y, -1.0, 1.0)) / PI + 0.5;
  let speed_band = smoothstep(0.00001, 0.035, speed);
  let velocity_t = fract(azimuth + elevation * 0.18 + speed_band * 0.23);
  let sensitivity = clamp(uniforms.particle_gradient_sensitivity, -1.0, 1.0);
  let directed_velocity_t = select(velocity_t, 1.0 - velocity_t, sensitivity < 0.0);
  let velocity_mix = smoothstep(0.0, 1.0, abs(sensitivity));
  return fract(mix(fract(base), directed_velocity_t, velocity_mix));
}

fn wrap_particle_position(position: vec3f) -> vec3f {
  return fract((position + vec3f(1.0)) * 0.5) * 2.0 - vec3f(1.0);
}

fn shortest_particle_delta(previous: vec3f, current: vec3f) -> vec3f {
  var delta = current - previous;
  if (delta.x > 1.0) {
    delta.x = delta.x - 2.0;
  } else if (delta.x < -1.0) {
    delta.x = delta.x + 2.0;
  }
  if (delta.y > 1.0) {
    delta.y = delta.y - 2.0;
  } else if (delta.y < -1.0) {
    delta.y = delta.y + 2.0;
  }
  if (delta.z > 1.0) {
    delta.z = delta.z - 2.0;
  } else if (delta.z < -1.0) {
    delta.z = delta.z + 2.0;
  }
  return delta;
}

fn particle_wrap_crossed(previous: vec3f, current: vec3f) -> bool {
  let raw_delta = current - previous;
  return abs(raw_delta.x) > 1.0 || abs(raw_delta.y) > 1.0 || abs(raw_delta.z) > 1.0;
}

fn particle_lerp_amount(previous: vec3f, current: vec3f, requested_t: f32) -> f32 {
  let t = clamp(requested_t, 0.0, 1.0);
  if (particle_wrap_crossed(previous, current)) {
    return 1.0;
  }
  let motion = shortest_particle_delta(previous, current);
  if (length(motion) > PARTICLE_INTERP_SNAP_DISTANCE) {
    return 1.0;
  }
  return t;
}

fn particle_large_motion_fade(previous: vec3f, current: vec3f, requested_t: f32) -> f32 {
  let motion = shortest_particle_delta(previous, current);
  let motion_length = length(motion);
  if (motion_length <= PARTICLE_INTERP_SNAP_DISTANCE && !particle_wrap_crossed(previous, current)) {
    return 1.0;
  }
  let t = clamp(requested_t, 0.0, 1.0);
  return smoothstep(0.05, 0.85, t);
}

fn interpolate_particle_position(previous: vec3f, current: vec3f, t: f32) -> vec3f {
  return wrap_particle_position(previous + shortest_particle_delta(previous, current) * t);
}

fn interpolate_hue(previous: f32, current: f32, t: f32) -> f32 {
  let delta = fract(current - previous + 0.5) - 0.5;
  return fract(previous + delta * t);
}

// Reconstruct the particle color vec4 from the packed struct: only hue varies (stored in
// vel_id.w); saturation/value/alpha are constants (0.8, 1.0, 0.045) as before the struct was
// shrunk from 48 to 32 bytes.
fn stored_particle_color(p: Particle) -> vec4f {
  return vec4f(p.vel_id.w, 0.8, 1.0, 0.045);
}

fn interpolate_particle_color(previous: vec4f, current: vec4f, t: f32) -> vec4f {
  return vec4f(interpolate_hue(previous.x, current.x, t), mix(previous.yzw, current.yzw, t));
}

fn particle_velocity_blend(previous: Particle, current: Particle, t: f32) -> vec3f {
  return mix(previous.vel_id.xyz, current.vel_id.xyz, t);
}

fn particle_visual_velocity(previous: Particle, current: Particle, t: f32) -> vec3f {
  let velocity = particle_velocity_blend(previous, current, t);
  let motion = shortest_particle_delta(previous.pos_cohort.xyz, current.pos_cohort.xyz);
  let motion_length = length(motion);
  if (motion_length > PARTICLE_INTERP_SNAP_DISTANCE || particle_wrap_crossed(previous.pos_cohort.xyz, current.pos_cohort.xyz)) {
    return velocity;
  }
  if (motion_length > 0.000001) {
    return motion;
  }
  return velocity;
}

fn trail_vector_color(flow_vector: vec3f, signal: f32) -> vec3f {
  let magnitude = length(flow_vector);
  let confidence = smoothstep(0.004, 0.055, magnitude);
  let direction = flow_vector / max(0.000001, magnitude);
  let hue = atan2(direction.y, direction.x) / (2.0 * PI) + direction.z * 0.125;
  let density_signal = smoothstep(0.0, 0.85, signal);
  let palette_anchor = palette(uniforms.palette, density_signal, confidence, 0.42 + confidence * 0.28);
  let saturation = mix(0.42, 0.94, confidence) * clamp(0.72 + abs(direction.z) * 0.2, 0.0, 1.0);
  let value = smoothstep(0.0, 0.75, signal);
  let hue_color = hsv2rgb(vec3f(hue, saturation, 1.0));
  let chroma = confidence * smoothstep(0.08, 0.72, signal);
  return mix(palette_anchor, hue_color, chroma) * (0.16 + value * 2.25 + confidence * 0.28);
}

fn trail_stable_color(raw: vec4f, signal: f32) -> vec3f {
  let density_signal = smoothstep(0.0, 0.85, signal);
  let flow_energy = smoothstep(0.0, 0.32, length(raw.xyz) * 42.0);
  let palette_color = palette(uniforms.palette, density_signal, flow_energy, 0.38 + flow_energy * 0.42);
  let low = vec3f(0.08, 0.46, 0.52);
  let high = vec3f(1.0, 0.76, 0.34);
  let scalar_color = mix(low, high, density_signal);
  let color = saturate_color(mix(scalar_color, palette_color, 0.48), 1.22 + flow_energy * 0.18);
  return color * (0.18 + density_signal * 1.72 + flow_energy * 0.28);
}

fn trail_thermal_color(raw: vec4f, signal: f32) -> vec3f {
  let density_signal = smoothstep(0.0, 0.85, signal);
  let flow_energy = smoothstep(0.0, 0.32, length(raw.xyz) * 42.0);
  let cold = vec3f(0.05, 0.18, 0.72);
  let warm = vec3f(0.96, 0.32, 0.10);
  let hot = vec3f(1.0, 0.92, 0.48);
  let base = mix(cold, warm, density_signal);
  return saturate_color(mix(base, hot, smoothstep(0.68, 1.0, density_signal)), 1.18 + flow_energy * 0.22) * (0.14 + density_signal * 2.2 + flow_energy * 0.34);
}

fn trail_tint_color(signal: f32, flow_energy: f32) -> vec3f {
  return fog_tint_color() * (0.18 + smoothstep(0.0, 0.85, signal) * 2.25 + flow_energy * 0.3);
}
`,ln=`
${cn}

const PARTICLE_SUPPORT_VELOCITY_SCALE = 256.0;

@group(0) @binding(0) var<storage, read> support_particles: array<Particle>;
@group(0) @binding(2) var<storage, read_write> particle_support_grid: array<atomic<i32>>;
@group(0) @binding(3) var<storage, read_write> particle_support_out: array<f32>;
@group(0) @binding(4) var<storage, read_write> particle_active_indices: array<u32>;
@group(0) @binding(5) var<storage, read_write> particle_active_draw: array<atomic<u32>>;

fn support_wrap_i(value: i32, size: u32) -> u32 {
  let s = i32(size);
  return u32(((value % s) + s) % s);
}

fn particle_support_grid_size() -> u32 {
  return max(1u, uniforms.particle_support_grid_size);
}

fn particle_support_grid_cell(position: vec3f) -> vec3i {
  let size = f32(particle_support_grid_size());
  let wrapped = fract((position + vec3f(1.0)) * 0.5);
  return vec3i(floor(wrapped * size));
}

fn particle_support_grid_index(cell: vec3i) -> u32 {
  let size = particle_support_grid_size();
  let x = support_wrap_i(cell.x, size);
  let y = support_wrap_i(cell.y, size);
  let z = support_wrap_i(cell.z, size);
  return ((z * size + y) * size + x) * 4u;
}

fn particle_support_direction(velocity: vec3f) -> vec3f {
  let speed = length(velocity);
  if (speed <= 0.000001) {
    return vec3f(0.0);
  }
  return velocity / speed;
}

@compute @workgroup_size(256)
fn clear_particle_support_grid(@builtin(global_invocation_id) gid: vec3u) {
  let flat = gid.x;
  let size = particle_support_grid_size();
  let lane_count = size * size * size * 4u;
  if (flat >= lane_count) {
    return;
  }
  atomicStore(&particle_support_grid[flat], 0);
}

@compute @workgroup_size(256)
fn build_particle_support_grid(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.x;
  if (i >= arrayLength(&support_particles)) {
    return;
  }
  let particle = support_particles[i];
  let base = particle_support_grid_index(particle_support_grid_cell(particle.pos_cohort.xyz));
  let dir = particle_support_direction(particle.vel_id.xyz);
  atomicAdd(&particle_support_grid[base + 0u], 1);
  atomicAdd(&particle_support_grid[base + 1u], i32(round(dir.x * PARTICLE_SUPPORT_VELOCITY_SCALE)));
  atomicAdd(&particle_support_grid[base + 2u], i32(round(dir.y * PARTICLE_SUPPORT_VELOCITY_SCALE)));
  atomicAdd(&particle_support_grid[base + 3u], i32(round(dir.z * PARTICLE_SUPPORT_VELOCITY_SCALE)));
}

fn particle_support_alignment(particle_dir: vec3f, cell_dir_sum: vec3f) -> f32 {
  let particle_speed = length(particle_dir);
  let cell_speed = length(cell_dir_sum);
  if (particle_speed <= 0.000001 || cell_speed <= 0.000001) {
    return 1.0;
  }
  return smoothstep(-0.2, 0.8, dot(particle_dir / particle_speed, cell_dir_sum / cell_speed));
}

fn particle_support_visibility(support: f32) -> f32 {
  let amount = clamp(uniforms.particle_support_mask, 0.0, 1.0);
  if (amount <= 0.0001) {
    return 1.0;
  }
  let cutoff = mix(0.05, 0.74, amount);
  let softness = mix(0.34, 0.18, amount);
  return smoothstep(cutoff, min(1.0, cutoff + softness), clamp(support, 0.0, 1.0));
}

@compute @workgroup_size(256)
fn resolve_particle_support(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.x;
  if (i >= arrayLength(&support_particles)) {
    return;
  }
  let particle = support_particles[i];
  let center = particle_support_grid_cell(particle.pos_cohort.xyz);
  let particle_dir = particle_support_direction(particle.vel_id.xyz);
  let radius = clamp(uniforms.particle_support_radius, 0.35, 1.75);
  let radius_inner = max(0.0, radius - 0.75);
  var weighted_neighbors = 0.0;
  var weighted_alignment = 0.0;
  var alignment_weight = 0.0;
  var strongest_cell = 0.0;
  for (var dz = -1i; dz <= 1i; dz = dz + 1i) {
    for (var dy = -1i; dy <= 1i; dy = dy + 1i) {
      for (var dx = -1i; dx <= 1i; dx = dx + 1i) {
        let offset = vec3i(dx, dy, dz);
        let offset_distance = length(vec3f(f32(dx), f32(dy), f32(dz)));
        if (offset_distance <= radius + 0.001) {
          let base = particle_support_grid_index(center + offset);
          let self_count = select(0, 1, dx == 0i && dy == 0i && dz == 0i);
          let neighbor_count = max(0, atomicLoad(&particle_support_grid[base + 0u]) - self_count);
          if (neighbor_count > 0) {
            let radial_weight = 1.0 - smoothstep(radius_inner, radius + 0.001, offset_distance);
            let count_weight = f32(neighbor_count) * max(0.0, radial_weight);
            let cell_dir = vec3f(
              f32(atomicLoad(&particle_support_grid[base + 1u])),
              f32(atomicLoad(&particle_support_grid[base + 2u])),
              f32(atomicLoad(&particle_support_grid[base + 3u]))
            ) / PARTICLE_SUPPORT_VELOCITY_SCALE;
            weighted_neighbors = weighted_neighbors + count_weight;
            strongest_cell = max(strongest_cell, count_weight);
            weighted_alignment = weighted_alignment + particle_support_alignment(particle_dir, cell_dir) * count_weight;
            alignment_weight = alignment_weight + count_weight;
          }
        }
      }
    }
  }
  let min_neighbors = max(0.25, uniforms.particle_support_neighbors);
  let neighbor_signal = max(weighted_neighbors, strongest_cell * 1.45);
  let neighbor_score = smoothstep(min_neighbors * 0.35, min_neighbors, neighbor_signal);
  let alignment_score = select(1.0, weighted_alignment / max(0.000001, alignment_weight), alignment_weight > 0.000001);
  let flow_gate = mix(1.0, alignment_score, clamp(uniforms.particle_support_flow, 0.0, 1.0));
  let support = clamp(neighbor_score * flow_gate, 0.0, 1.0);
  particle_support_out[i] = support;
  if (particle_support_visibility(support) > 0.000001) {
    let slot = atomicAdd(&particle_active_draw[1], 1u);
    particle_active_indices[slot] = i;
  }
}
`,un=`
// Focus-debug tint: green is in focus, yellow/orange is outside the focal band, red is fully defocused.
// This is intentionally near/far agnostic so the debug view answers one question quickly:
// "which particles are outside the focus plane?" DOF Blur controls how soft those red areas render.
fn dof_debug_tint(defocus: f32) -> vec3f {
  let blur_t = smoothstep(0.0, 1.0, clamp(defocus, 0.0, 1.0));
  let focus_color = vec3f(0.0, 1.0, 0.12);
  let blur_color = vec3f(1.0, 0.02, 0.0);
  return mix(focus_color, blur_color, blur_t);
}

// Parameterized so the compute splatter shares the exact same color math as the fragment path.
fn splat_color_for_mode(color_hsv: vec4f, speed: f32, species: f32, mode: u32) -> vec3f {
  if (mode == 0u) {
    return particle_tint_color();
  }
  // Coordinate-source modes override the gradient coordinate t with a different per-particle signal.
  // Velocity family (11 signature, 14-18 inferno/viridis/spectral/cosmic/ice) maps t to speed.
  // Audio family (13 signature, 19-25 magma/viridis/turbo/cosmic/ice/ember/plasma) shifts t by the
  // live bands and pulses brightness with the bass. 12 = cohort. The ramp per mode is chosen inside
  // particle_gradient_color().
  let is_velocity = (mode == 11u) || (mode >= 14u && mode <= 18u);
  let is_audio = (mode == 13u) || (mode >= 19u && mode <= 25u);
  var t = fract(color_hsv.x);
  if (is_velocity) {
    t = clamp(speed, 0.0, 1.0);
  } else if (mode == 12u) {
    t = fract(species);
  } else if (is_audio) {
    t = fract(color_hsv.x + uniforms.audio_low * 0.5 + uniforms.audio_mid * 0.25);
  }
  var color = particle_gradient_color(t, mode);
  if (is_audio) {
    color = color * (1.0 + uniforms.audio_low * 1.5 + uniforms.audio_high * 0.6);
  }
  // Per-particle saturation jitter rides in color_hsv.y (base 0.8 from stored_particle_color);
  // ratio 1.0 leaves the gradient untouched when color variation is off.
  color = saturate_color(color, clamp(color_hsv.y / 0.8, 0.0, 2.0));
  return apply_tint(color, particle_tint_color(), 0.28);
}

fn particle_color_for_mode(in: SplatOut, mode: u32) -> vec3f {
  return splat_color_for_mode(in.color_hsv, in.speed, in.species, mode);
}

fn splat_color(color_hsv: vec4f, speed: f32, species: f32) -> vec3f {
  // Time-based cross-fade between color modes: when the user changes mode the CPU eases
  // particle_color_blend 0->1 over a short window (and retargets to wherever they land), so
  // switching rolls smoothly into the new palette instead of hard-cutting. When settled (blend>=1)
  // or from==to we compute the color once -- no extra cost outside the brief transition.
  let c_to = splat_color_for_mode(color_hsv, speed, species, uniforms.particle_color_mode);
  if (uniforms.particle_color_blend >= 1.0 || uniforms.particle_color_mode_from == uniforms.particle_color_mode) {
    return c_to;
  }
  let c_from = splat_color_for_mode(color_hsv, speed, species, uniforms.particle_color_mode_from);
  return mix(c_from, c_to, clamp(uniforms.particle_color_blend, 0.0, 1.0));
}

fn particle_color(in: SplatOut) -> vec3f {
  if (uniforms.dof_debug == 1u) {
    return dof_debug_tint(in.defocus);
  }
  return splat_color(in.color_hsv, in.speed, in.species);
}

fn particle_intensity(glow: f32, alpha: f32, bright_mul: f32) -> f32 {
  return glow * alpha * particle_gain() * bright_mul;
}

fn particle_sprite_profile(local: vec2f, defocus: f32) -> f32 {
  let r = length(local);
  let amount = clamp(defocus, 0.0, 1.0);
  let aa = max(fwidth(r) * 1.35, 0.008);
  let sharp = 1.0 - smoothstep(1.0 - aa * 2.0, 1.0 + aa, r);
  var mask = clamp(sharp, 0.0, 1.0);
  if (amount > 0.001) {
    let soft_inner = mix(0.86, 0.05, amount);
    let soft_disc = 1.0 - smoothstep(soft_inner, 1.0, r);
    let center = 1.0 - smoothstep(0.0, 1.0, r);
    let soft = soft_disc * (0.8 + center * 0.2);
    mask = clamp(mix(sharp, soft, smoothstep(0.0, 1.0, amount)), 0.0, 1.0);
  }
  // Optional radial glow core (particle_glow_core). 0 = flat anti-aliased disc (the original look,
  // with an early-out so there is no extra cost when disabled). >0 fades the disc from a bright
  // center to a soft edge for an ember/star profile. Same rasterized fragment count as the flat
  // disc, so no fill-rate cost beyond a few math ops; the fragment stage is not the bottleneck.
  let glow_amt = clamp(uniforms.particle_glow_core, 0.0, 1.0);
  if (glow_amt <= 0.001) {
    return mask;
  }
  let core = pow(clamp(1.0 - r, 0.0, 1.0), mix(0.7, 3.0, glow_amt));
  return mask * mix(1.0, core, glow_amt);
}

@fragment
fn splat_fs(in: SplatOut) -> @location(0) vec4f {
  let glow = particle_sprite_profile(in.local, in.sprite_blur);
  var color = particle_color(in);
  // Optional hot core (particle_hot_core): pushes the very center of the sprite toward white for a
  // glowing plasma/ember look while leaving the colored halo intact. 0 = off (no cost beyond one
  // compare); higher values whiten a tighter, brighter core.
  let hot = clamp(uniforms.particle_hot_core, 0.0, 1.0);
  if (hot > 0.001) {
    let centerness = pow(clamp(1.0 - length(in.local), 0.0, 1.0), 2.0);
    color = mix(color, vec3f(1.0), centerness * hot);
  }
  // One convention for every mode: premultiplied color = color * intensity, alpha = intensity,
  // where intensity = glow * opacity * gain. Additive adds it, alpha composites it over, opaque
  // writes it solid (no blend). intensity is computed once so all modes share it.
  let intensity = particle_intensity(glow, in.alpha, in.bright_mul);
  if (uniforms.particle_blend_mode != 1u && (glow < 0.01 || in.alpha <= 0.001)) {
    discard;
  }
  if (uniforms.particle_blend_mode == 2u) {
    return vec4f(color * intensity, 1.0);
  }
  return vec4f(color * intensity, clamp(intensity, 0.0, 1.0));
}
`,dn=`
${cn}

@group(0) @binding(0) var<storage, read> values: array<vec4f>;
@group(0) @binding(2) var field_texture: texture_3d<f32>;
@group(0) @binding(3) var field_texture_sampler: sampler;

fn index_clamped(x: i32, y: i32, z: i32) -> u32 {
  let ix = u32(clamp(x, 0i, i32(uniforms.width) - 1i));
  let iy = u32(clamp(y, 0i, i32(uniforms.height) - 1i));
  let iz = u32(clamp(z, 0i, i32(uniforms.depth) - 1i));
  return (iz * uniforms.height + iy) * uniforms.width + ix;
}

fn domain_sdf(p: vec3f, shape: u32) -> f32 {
  if (shape == 1u) {
    return length(p) - 1.0;
  }
  if (shape == 2u) {
    let d_radial = length(p.xz) - 1.0;
    let d_cap = abs(p.y) - 1.0;
    return length(max(vec2f(d_radial, d_cap), vec2f(0.0))) + min(max(d_radial, d_cap), 0.0);
  }
  if (shape == 3u) {
    let half_w = (1.0 - p.y) * 0.5;
    return max(max(-1.0 - p.y, abs(p.x) - half_w), abs(p.z) - half_w);
  }
  let q = abs(p) - vec3f(1.0);
  return length(max(q, vec3f(0.0))) + min(max(q.x, max(q.y, q.z)), 0.0);
}

fn sample_volume(position: vec3f) -> vec4f {
  if (any(position < vec3f(-1.0)) || any(position > vec3f(1.0))) {
    return vec4f(0.0);
  }
  if (uniforms.field_texture_mode == 1u) {
    let uvw = clamp((position + vec3f(1.0)) * 0.5, vec3f(0.0), vec3f(1.0));
    return textureSampleLevel(field_texture, field_texture_sampler, uvw, 0.0);
  }
  let dims = vec3f(f32(uniforms.width), f32(uniforms.height), f32(uniforms.depth));
  let grid = (position + vec3f(1.0)) * 0.5 * dims - vec3f(0.5);
  let base = vec3i(floor(grid));
  let t = fract(grid);
  var accum = vec4f(0.0);
  for (var dz = 0i; dz <= 1i; dz = dz + 1i) {
    for (var dy = 0i; dy <= 1i; dy = dy + 1i) {
      for (var dx = 0i; dx <= 1i; dx = dx + 1i) {
        let weight = mix(1.0 - t.x, t.x, f32(dx)) * mix(1.0 - t.y, t.y, f32(dy)) * mix(1.0 - t.z, t.z, f32(dz));
        accum = accum + values[index_clamped(base.x + dx, base.y + dy, base.z + dz)] * weight;
      }
    }
  }
  return accum;
}

fn intersect_box(origin: vec3f, direction: vec3f) -> vec2f {
  let inv_dir = 1.0 / direction;
  let t0 = (vec3f(-1.0) - origin) * inv_dir;
  let t1 = (vec3f(1.0) - origin) * inv_dir;
  let tmin3 = min(t0, t1);
  let tmax3 = max(t0, t1);
  let tmin = max(max(tmin3.x, tmin3.y), tmin3.z);
  let tmax = min(min(tmax3.x, tmax3.y), tmax3.z);
  return vec2f(tmin, tmax);
}

fn hash21(p: vec2f) -> f32 {
  let h = dot(p, vec2f(127.1, 311.7));
  return fract(sin(h) * 43758.5453123);
}

fn interleaved_gradient_noise(pixel: vec2f, frame: u32) -> f32 {
  let frame_offset = f32(frame % 64u) * 0.071;
  return fract(52.9829189 * fract(0.06711056 * (pixel.x + frame_offset) + 0.00583715 * (pixel.y - frame_offset)));
}

@vertex
fn field_vs(@builtin(vertex_index) vertex_index: u32) -> SplatOut {
  var out: SplatOut;
  if (uniforms.render_layer == 3u) {
    let voxel = vertex_index / 6u;
    let x = voxel % uniforms.width;
    let y = (voxel / uniforms.width) % uniforms.height;
    let z = voxel / (uniforms.width * uniforms.height);
    let raw = values[voxel];
    let density = clamp((length(raw.xyz) * 2.2 + raw.w * 0.22) * uniforms.density, 0.0, 1.0);
    let projected = project(voxel_to_world(x, y, z));
    let aspect = uniforms.resolution.x / uniforms.resolution.y;
    let local = corner(vertex_index);
    let focus_defocus = particle_focus_defocus(projected.z);
    let focus_blur_px = particle_dof_blur_px_from_defocus(focus_defocus);
    let size = (max(0.7, uniforms.particle_size_px * 0.55) + focus_blur_px) * 2.0 / uniforms.resolution.y;
    out.position = vec4f(projected.x + local.x * size / aspect, projected.y + local.y * size, 0.0, 1.0);
    out.local = local;
    out.alpha = smoothstep(uniforms.trail_threshold, uniforms.trail_threshold + 0.2, density) * uniforms.trail_opacity * 0.72;
    out.density = density;
    out.depth = projected.z;
    out.species = fract(f32(x + y * 2u + z * 3u) * 0.37);
    out.uv = vec2f(0.0);
    out.mode = 3.0;
    out.color_hsv = vec4f(0.0);
    out.defocus = focus_defocus;
    out.sprite_blur = particle_sprite_blur_amount(focus_blur_px, max(0.7, uniforms.particle_size_px * 0.55));
    return out;
  }
  var positions = array<vec2f, 3>(
    vec2f(-1.0, -3.0),
    vec2f(-1.0, 1.0),
    vec2f(3.0, 1.0)
  );
  let position = positions[vertex_index];
  out.position = vec4f(position, 0.0, 1.0);
  out.local = vec2f(0.0);
  out.alpha = 1.0;
  out.density = 0.0;
  out.depth = 0.0;
  out.species = 0.0;
  out.uv = position * 0.5 + vec2f(0.5);
  out.mode = 0.0;
  out.color_hsv = vec4f(0.0);
  out.defocus = 0.0;
  out.sprite_blur = 0.0;
  return out;
}

@fragment
fn volume_fs(in: SplatOut) -> @location(0) vec4f {
  if (in.mode > 2.5) {
    let d = dot(in.local, in.local);
    let glow = exp(-d * 2.8);
    let color = palette(uniforms.palette, in.density, in.depth, in.species);
    let intensity = glow * in.alpha * fog_gain();
    return vec4f(color * intensity, clamp(intensity, 0.0, 1.0));
  }
  if (uniforms.render_layer == 1u) {
    return vec4f(0.0);
  }
  let aspect = uniforms.resolution.x / uniforms.resolution.y;
  var uv = in.uv * 2.0 - vec2f(1.0);
  uv.x = uv.x * aspect;
  let focal = uniforms.focal_k;
  let origin = camera_to_world(vec3f(-uniforms.camera_pan_x, -uniforms.camera_pan_y, -uniforms.distance));
  let direction = normalize(camera_to_world(vec3f(uv.x / focal, uv.y / focal, 1.0)));
  let hit = intersect_box(origin, direction);
  var t = max(0.0, hit.x);
  let t_end = hit.y;
  if (t_end <= t) {
    return vec4f(0.0);
  }
  let steps = clamp(uniforms.ray_steps, 8u, 512u);
  let dt = (t_end - t) / f32(steps);
  let pixel = in.uv * uniforms.resolution;
  let jitter = select(hash21(pixel), interleaved_gradient_noise(pixel, uniforms.fog_frame), uniforms.fog_blue_noise == 1u);
  let load = f32(uniforms.particle_count) / max(1.0, f32(uniforms.voxel_count));
  let maturity = smoothstep(32.0, 256.0, f32(uniforms.timestep));
  let density_weight = mix(130.0, 64.0, maturity);
  let flow_weight = mix(68.0, 42.0, maturity);
  let adaptive_threshold = uniforms.trail_threshold + maturity * max(0.0, log2(max(1.0, load)) * 0.018);
  let shape_power = 1.0 + uniforms.filament * 0.75;
  let inv_log5 = 1.0 / log2(5.0);
  let alpha_scale = uniforms.trail_opacity * (dt * 8.4);
  var color = vec3f(0.0);
  var alpha = 0.0;
  var marched = 0u;
  var ray_t = t + dt * jitter;
  for (var step = 0u; step < 512u; step = step + 1u) {
    if (marched >= steps || alpha > 0.965) {
      break;
    }
    let position = origin + direction * ray_t;
    if (uniforms.domain_shape != 0u && domain_sdf(position, uniforms.domain_shape) > 0.0) {
      ray_t = ray_t + dt;
      marched = marched + 1u;
      continue;
    }
    let raw = sample_volume(position);
    let flow = length(raw.xyz);
    let flow_signal = flow * flow_weight;
    let raw_signal = max(0.0, raw.w * density_weight + flow_signal);
    let compressed = log2(1.0 + raw_signal * uniforms.density) * inv_log5;
    if (uniforms.empty_space_skip == 1u && compressed <= adaptive_threshold + uniforms.empty_space_threshold) {
      let stride = min(u32(max(1.0, uniforms.empty_space_stride)), steps - marched);
      ray_t = ray_t + dt * f32(stride);
      marched = marched + stride;
      continue;
    }
    let signal = max(0.0, compressed - adaptive_threshold);
    let visible_signal = smoothstep(0.018, 1.0, signal);
    let shaped_signal = pow(visible_signal, shape_power);
    let normalized_depth = clamp((ray_t - t) / max(0.0001, t_end - t), 0.0, 1.0);
    let dof_focus_gain = 1.0 / (1.0 + abs(normalized_depth - uniforms.focus_distance) * uniforms.aperture * 4.0);
    let focus_gain = select(1.0, dof_focus_gain, uniforms.dof_enabled == 1u);
    let sample_alpha = clamp(shaped_signal * alpha_scale * focus_gain, 0.0, 1.0);
    if (sample_alpha > 0.000001) {
      let color_signal = clamp(shaped_signal * 1.25, 0.0, 1.0);
      var sample_color = trail_stable_color(raw, color_signal);
      if (uniforms.trail_color_mode == 1u) {
        sample_color = trail_vector_color(raw.xyz, color_signal);
      } else if (uniforms.trail_color_mode == 2u) {
        sample_color = trail_thermal_color(raw, color_signal);
      } else if (uniforms.trail_color_mode == 3u) {
        sample_color = trail_tint_color(color_signal, flow);
      }
      if (uniforms.trail_color_mode != 3u) {
        sample_color = apply_tint(sample_color, fog_tint_color(), 0.42);
      }
      color = color + (1.0 - alpha) * sample_color * sample_alpha;
      alpha = alpha + (1.0 - alpha) * sample_alpha;
    }
    ray_t = ray_t + dt;
    marched = marched + 1u;
  }
  color = max(color * fog_gain(), vec3f(0.0));
  return vec4f(color, select(0.0, 1.0, alpha > 0.0001));
}
`,fn=`
struct RenderUniforms {
  resolution: vec2f,
  width: u32,
  height: u32,
  depth: u32,
  particle_count: u32,
  voxel_count: u32,
  timestep: u32,
  density: f32,
  exposure: f32,
  focus_distance: f32,
  aperture: f32,
  overlay: u32,
  palette: u32,
  filament: f32,
  yaw_cos: f32,
  yaw_sin: f32,
  pitch_cos: f32,
  pitch_sin: f32,
  distance: f32,
  ray_steps: u32,
  fog_step_scale: f32,
  fog_temporal_blend: f32,
  fog_blue_noise: u32,
  fog_frame: u32,
  field_texture_mode: u32,
  empty_space_skip: u32,
  empty_space_threshold: f32,
  empty_space_stride: f32,
  particle_size_px: f32,
  particle_min_px: f32,
  particle_max_px: f32,
  particle_opacity: f32,
  particle_blend_mode: u32,
  particle_density_cutoff: f32,
  particle_density_radius: f32,
  trail_opacity: f32,
  trail_threshold: f32,
  render_layer: u32,
  camera_pan_x: f32,
  camera_pan_y: f32,
  trail_color_mode: u32,
  fog_tint_r: f32,
  fog_tint_g: f32,
  fog_tint_b: f32,
  particle_tint_r: f32,
  particle_tint_g: f32,
  particle_tint_b: f32,
  scene_brightness: f32,
  particle_brightness: f32,
  fog_brightness: f32,
  particle_color_mode: u32,
  particle_velocity_stretch: u32,
  particle_stretch: f32,
  particle_gradient_sensitivity: f32,
  focal_k: f32,
  dof_blur: f32,
  dof_debug: u32,
  render_lerp_t: f32,
  dof_enabled: u32,
  density_pass_strength: f32,
  density_small_scale: f32,
  density_large_scale: f32,
  density_large_threshold: f32,
  density_contrast_gain: f32,
  density_contrast_balance: f32,
  density_emission_power: f32,
  density_occlusion: f32,
  cohorts: u32,
  particle_slow_cutoff: f32,
  particle_glow_core: f32,
  particle_hot_core: f32,
  accumulation_strength: f32,
  accumulation_radius: f32,
  accumulation_curve: f32,
  accumulation_memory: f32,
  accumulation_noise_reject: f32,
  particle_density_reference: f32,
  particle_density_normalize: f32,
  particle_density_softness: f32,
  particle_support_mask: f32,
  particle_support_radius: f32,
  particle_support_neighbors: f32,
  particle_support_flow: f32,
  particle_support_grid_size: u32,
  particle_stretch_min: f32,
  particle_stretch_speed: f32,
  particle_speed_cutoff: f32,
  variation_master: f32,
  variation_time: f32,
  variation_drift: f32,
  variation_noise_mix: f32,
  variation_freq: f32,
  variation_octaves: u32,
  variation_gain: f32,
  variation_lacunarity: f32,
  variation_size_amount: f32,
  variation_size_curve: f32,
  variation_size_min: f32,
  variation_size_max: f32,
  variation_bright_amount: f32,
  variation_bright_curve: f32,
  variation_bright_min: f32,
  variation_bright_max: f32,
  variation_opacity_amount: f32,
  variation_opacity_curve: f32,
  variation_opacity_min: f32,
  variation_opacity_max: f32,
  variation_color_amount: f32,
  variation_color_curve: f32,
  variation_color_min: f32,
  variation_color_max: f32,
  domain_shape: u32,
  audio_low: f32,
  audio_mid: f32,
  audio_high: f32,
};

@group(0) @binding(0) var fog_current: texture_2d<f32>;
@group(0) @binding(1) var fog_history: texture_2d<f32>;
@group(0) @binding(2) var fog_sampler: sampler;
@group(0) @binding(3) var<uniform> uniforms: RenderUniforms;

struct FullscreenOut {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
};

@vertex
fn fullscreen_vs(@builtin(vertex_index) vertex_index: u32) -> FullscreenOut {
  var positions = array<vec2f, 3>(
    vec2f(-1.0, -3.0),
    vec2f(-1.0, 1.0),
    vec2f(3.0, 1.0)
  );
  let position = positions[vertex_index];
  var out: FullscreenOut;
  out.position = vec4f(position, 0.0, 1.0);
  out.uv = position * 0.5 + vec2f(0.5);
  return out;
}

@fragment
fn fog_composite_fs(in: FullscreenOut) -> @location(0) vec4f {
  let sample_uv = vec2f(in.uv.x, 1.0 - in.uv.y);
  let current = textureSample(fog_current, fog_sampler, sample_uv);
  let history = textureSample(fog_history, fog_sampler, sample_uv);
  let blend = select(0.0, clamp(uniforms.fog_temporal_blend, 0.0, 0.96), uniforms.fog_frame > 2u);
  let color = current.rgb * (1.0 - blend) + history.rgb * blend;
  let alpha = max(current.a, history.a * blend);
  return vec4f(color, alpha);
}
`,pn=`
struct FullscreenOut {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
};

@vertex
fn fullscreen_vs(@builtin(vertex_index) vertex_index: u32) -> FullscreenOut {
  var positions = array<vec2f, 3>(vec2f(-1.0, -3.0), vec2f(-1.0, 1.0), vec2f(3.0, 1.0));
  let position = positions[vertex_index];
  var out: FullscreenOut;
  out.position = vec4f(position, 0.0, 1.0);
  // Flip V: the scene is rendered into an offscreen texture top-row-first, and this
  // fullscreen sampling round-trip would otherwise invert it vertically. Applied uniformly
  // to every post pass (prefilter/downsample/upsample/composite) so the bloom chain stays
  // internally consistent and only the net scene orientation is corrected.
  out.uv = vec2f(position.x * 0.5 + 0.5, 0.5 - position.y * 0.5);
  return out;
}

struct PostUniforms {
  bloom_strength: f32,
  bloom_threshold: f32,
  bloom_radius: f32,
  level_count: f32,
  tint: vec4f,
  grade: vec4f,
  // Per-octave weights reconstructing the Spencer 1995 fog-glow PSF (w0..w3, then w4..w7).
  weights_a: vec4f,
  weights_b: vec4f,
  // Lens FX: x = chromatic aberration strength, y = vignette strength,
  // z = vignette softness (0 = from centre .. ~1 = corners only), w = reserved.
  lens: vec4f,
  // Anamorphic flare (reuses the bloom bright mips): x = strength, y = length,
  // z = vertical/star mix (0 = horizontal only .. 1 = full star), w = reserved.
  streak: vec4f,
  // Flare shaping: x = vertical height (independent of length), y = luminance cutoff
  // (only cores above it streak), z/w = reserved.
  flare: vec4f,
};

@group(0) @binding(0) var src_tex: texture_2d<f32>;
@group(0) @binding(1) var scene_sampler: sampler;
@group(0) @binding(2) var<uniform> post: PostUniforms;
@group(0) @binding(3) var bloom_tex: texture_2d<f32>;
// Octave mips for the fog-glow composite (Spencer-weighted sum). bloom_tex is octave 0.
@group(0) @binding(4) var bloom_m1: texture_2d<f32>;
@group(0) @binding(5) var bloom_m2: texture_2d<f32>;
@group(0) @binding(6) var bloom_m3: texture_2d<f32>;
@group(0) @binding(7) var bloom_m4: texture_2d<f32>;
@group(0) @binding(8) var bloom_m5: texture_2d<f32>;
@group(0) @binding(9) var bloom_m6: texture_2d<f32>;
@group(0) @binding(10) var bloom_m7: texture_2d<f32>;

fn src_texel() -> vec2f {
  return 1.0 / vec2f(textureDimensions(src_tex));
}

fn tap(uv: vec2f) -> vec3f {
  return textureSampleLevel(src_tex, scene_sampler, uv, 0.0).rgb;
}

// Soft-knee bright-pass (matches the realtime-compositor / Eevee bloom prefilter).
fn knee_prefilter(c: vec3f) -> vec3f {
  let br = max(c.r, max(c.g, c.b));
  let knee = post.bloom_threshold * 0.5 + 1e-5;
  var soft = clamp(br - post.bloom_threshold + knee, 0.0, 2.0 * knee);
  soft = soft * soft / (4.0 * knee + 1e-5);
  let contrib = max(soft, br - post.bloom_threshold) / max(br, 1e-5);
  return c * contrib;
}

fn agx_contrast_approx(x: vec3f) -> vec3f {
  let x2 = x * x;
  let x4 = x2 * x2;
  return 15.5 * x4 * x2 - 40.14 * x4 * x + 31.96 * x4 - 6.868 * x2 * x + 0.4298 * x2 + 0.1191 * x - 0.00232;
}

fn agx(val_in: vec3f) -> vec3f {
  let agx_mat = mat3x3<f32>(
    0.842479062253094, 0.0784335999999992, 0.0792237451477643,
    0.0423282422610123, 0.878468636469772, 0.0791661274605434,
    0.0423756549057051, 0.0784336, 0.879142973793104);
  let min_ev = -12.47393;
  let max_ev = 4.026069;
  var val = agx_mat * val_in;
  val = clamp(log2(max(val, vec3f(1e-10))), vec3f(min_ev), vec3f(max_ev));
  val = (val - min_ev) / (max_ev - min_ev);
  val = agx_contrast_approx(val);
  return val;
}

fn agx_eotf(val: vec3f) -> vec3f {
  let agx_mat_inv = mat3x3<f32>(
    1.19687900512017, -0.0980208811401368, -0.0990297440797205,
    -0.0528968517574562, 1.15190312990417, -0.0989611768448433,
    -0.0529716355144438, -0.0980434501171241, 1.15107367264116);
  var v = agx_mat_inv * val;
  // Back to display-linear for the linear float HDR canvas.
  v = pow(max(v, vec3f(0.0)), vec3f(2.2));
  return v;
}

fn apply_color_grade(val: vec3f) -> vec3f {
  let luma = dot(val, vec3f(0.2126, 0.7152, 0.0722));
  var graded = mix(vec3f(luma), val, clamp(post.grade.x, 0.0, 2.0));
  graded = (graded - vec3f(0.5)) * clamp(post.grade.y, 0.5, 1.8) + vec3f(0.5);
  return clamp(graded, vec3f(0.0), vec3f(1.0));
}

// HDR-capture tone-map — CONFORMANCE BY CONSTRUCTION. An earlier attempt replaced AGX with a
// different curve (luminance Reinhard + path-to-white); that changed exposure/contrast/highlight
// rolloff, so the export no longer matched the live look ("more bloom / different exposure"). The fix
// is to NOT invent a new operator: the BASE here is the *exact* live SDR transform — same agx() +
// apply_color_grade() (incl. contrast + the AgX inset-matrix path-to-white) + agx_eotf() — so mids,
// shadows, exposure, contrast, saturation and bloom balance are pixel-identical to what the user sees
// live. We then ADD BACK ONLY the highlight energy AGX threw away: AgX clamps scene luminance above
// 2^max_ev (~16.3) to display white, discarding all highlight headroom. We measure how far the scene
// exceeded that clip point and lift the (already near-white, AGX-desaturated) bright pixels above 1.0
// into real HDR. A smoothstep "bright" gate keeps mids/shadows at extension 0, so they stay
// bit-conformant with live; only genuine highlights gain nits. headroom (post.grade.w) sets how many
// ×paper-white the hottest cores may reach (e.g. headroom 4 + export paper-white 203nit => ~1000nit).
fn tonemap_hdr(val: vec3f, headroom: f32) -> vec3f {
  let combined = max(val, vec3f(0.0));
  let sdr = agx_eotf(apply_color_grade(agx(combined)));   // EXACT live look, display-linear [0,1]
  // Extend the highlights AGX pins to white. Threshold = where the AGX base actually saturates
  // (scene luma ~5), NOT AGX's internal log-clamp (16.3) — gating at 16.3 left a flat WHITE PLATEAU
  // from scene ~6..16 (verified by sampling: out luma pinned at 1.000) that read as clipping, then a
  // harsh jump. Ramp in over tau stops with 1-exp(-(stops/tau)^2): slope 0 at the threshold so there
  // is no seam/discontinuity, then a smooth log-space S-curve that keeps gradation in the cores (no
  // flat-topping) and soft-caps at headroom. Mids (scene < threshold) get ext=0 => bit-identical to live.
  let scene_l = max(dot(combined, vec3f(0.2126, 0.7152, 0.0722)), 1e-6);
  let thresh = 5.0;
  let tau = 3.5;
  let r = max(log2(scene_l) - log2(thresh), 0.0) / tau;
  let ext = max(headroom, 0.0) * (1.0 - exp(-r * r));
  let bright = smoothstep(0.6, 1.0, dot(sdr, vec3f(0.2126, 0.7152, 0.0722)));
  return sdr * (1.0 + ext * bright);
}

@fragment
fn prefilter_fs(in: FullscreenOut) -> @location(0) vec4f {
  // 13-tap Karis-averaged downsample of the scene, then the bright-pass (firefly-safe).
  let t = src_texel();
  let a = tap(in.uv + t * vec2f(-2.0, 2.0));
  let b = tap(in.uv + t * vec2f(0.0, 2.0));
  let c = tap(in.uv + t * vec2f(2.0, 2.0));
  let d = tap(in.uv + t * vec2f(-2.0, 0.0));
  let e = tap(in.uv);
  let f = tap(in.uv + t * vec2f(2.0, 0.0));
  let g = tap(in.uv + t * vec2f(-2.0, -2.0));
  let h = tap(in.uv + t * vec2f(0.0, -2.0));
  let i = tap(in.uv + t * vec2f(2.0, -2.0));
  let j = tap(in.uv + t * vec2f(-1.0, 1.0));
  let k = tap(in.uv + t * vec2f(1.0, 1.0));
  let l = tap(in.uv + t * vec2f(-1.0, -1.0));
  let m = tap(in.uv + t * vec2f(1.0, -1.0));
  let down = (j + k + l + m) * 0.5 * 0.25 + (a + b + d + e) * 0.125 * 0.25 + (b + c + e + f) * 0.125 * 0.25 + (d + e + g + h) * 0.125 * 0.25 + (e + f + h + i) * 0.125 * 0.25;
  return vec4f(knee_prefilter(max(down, vec3f(0.0))), 1.0);
}

@fragment
fn downsample_fs(in: FullscreenOut) -> @location(0) vec4f {
  _ = post.bloom_radius; // keep the {tex, sampler, uniform} bind-group layout shared across bloom passes
  let t = src_texel();
  let a = tap(in.uv + t * vec2f(-2.0, 2.0));
  let b = tap(in.uv + t * vec2f(0.0, 2.0));
  let c = tap(in.uv + t * vec2f(2.0, 2.0));
  let d = tap(in.uv + t * vec2f(-2.0, 0.0));
  let e = tap(in.uv);
  let f = tap(in.uv + t * vec2f(2.0, 0.0));
  let g = tap(in.uv + t * vec2f(-2.0, -2.0));
  let h = tap(in.uv + t * vec2f(0.0, -2.0));
  let i = tap(in.uv + t * vec2f(2.0, -2.0));
  let j = tap(in.uv + t * vec2f(-1.0, 1.0));
  let k = tap(in.uv + t * vec2f(1.0, 1.0));
  let l = tap(in.uv + t * vec2f(-1.0, -1.0));
  let m = tap(in.uv + t * vec2f(1.0, -1.0));
  let down = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
  return vec4f(down, 1.0);
}

@fragment
fn upsample_fs(in: FullscreenOut) -> @location(0) vec4f {
  // 3x3 tent upsample; additive blend on the pipeline accumulates up the pyramid.
  let t = src_texel() * post.bloom_radius;
  var sum = tap(in.uv) * 4.0;
  sum = sum + (tap(in.uv + t * vec2f(-1.0, 0.0)) + tap(in.uv + t * vec2f(1.0, 0.0)) + tap(in.uv + t * vec2f(0.0, -1.0)) + tap(in.uv + t * vec2f(0.0, 1.0))) * 2.0;
  sum = sum + (tap(in.uv + t * vec2f(-1.0, -1.0)) + tap(in.uv + t * vec2f(1.0, -1.0)) + tap(in.uv + t * vec2f(-1.0, 1.0)) + tap(in.uv + t * vec2f(1.0, 1.0)));
  return vec4f(sum / 16.0, 1.0);
}

// Chromatic aberration: split the R/B channels along the radial (center->edge) direction so
// the effect is strongest at the frame edges and zero at the center. lens.x = 0 samples one
// texel for all channels => bit-identical to the original single .rgb tap.
fn sample_scene_ca(uv: vec2f) -> vec3f {
  let ca = post.lens.x;
  if (ca <= 0.0001) {
    return textureSampleLevel(src_tex, scene_sampler, uv, 0.0).rgb;
  }
  // Real-lens chromatic aberration: the R/B split is negligible across the centre and
  // ramps up sharply toward the frame edges (concentrated on the outside, like vignette),
  // rather than a uniform full-screen split. The edge ramp (radius^2.5) keeps the middle clean.
  let d = uv - vec2f(0.5);
  let rad = clamp(length(d) * 2.0, 0.0, 1.5);
  let edge = pow(rad, 2.5);
  let off = d * ca * 0.06 * edge;
  let cr = textureSampleLevel(src_tex, scene_sampler, uv + off, 0.0).r;
  let cg = textureSampleLevel(src_tex, scene_sampler, uv, 0.0).g;
  let cb = textureSampleLevel(src_tex, scene_sampler, uv - off, 0.0).b;
  return vec3f(cr, cg, cb);
}

// Radial vignette applied to the final graded color. lens.y = 0 returns the color unchanged.
fn apply_vignette(color: vec3f, uv: vec2f) -> vec3f {
  let strength = post.lens.y;
  if (strength <= 0.0001) {
    return color;
  }
  let softness = clamp(post.lens.z, 0.0, 0.999);
  let dims = vec2f(textureDimensions(src_tex));
  let aspect = dims.x / max(1.0, dims.y);
  let p = (uv - vec2f(0.5)) * vec2f(aspect, 1.0);
  let d = length(p) / max(0.0001, length(vec2f(aspect, 1.0) * 0.5));
  let v = 1.0 - strength * smoothstep(softness, 1.0, d);
  return color * clamp(v, 0.0, 1.0);
}

// Anamorphic lens flare: smear the already-built bloom bright mip horizontally (and, scaled by
// the star mix, vertically) to grow cinematic streaks off bright cores. Uniform early-return at
// strength 0 means the GPU never runs the tap loop when the effect is off (zero cost). Requires
// the bloom path (samples bloom_m1), so it contributes nothing when bloom is disabled.
fn anamorphic_streak(uv: vec2f) -> vec3f {
  let strength = post.streak.x;
  if (strength <= 0.0001 || post.level_count < 2.5) {
    return vec3f(0.0);
  }
  let span = 0.16 * clamp(post.streak.y, 0.0, 1.0);   // horizontal length
  let vmix = clamp(post.streak.z, 0.0, 1.0);          // star / vertical amount
  let vspan = 0.16 * clamp(post.flare.x, 0.0, 1.0);   // vertical height, independent of length
  let cutoff = max(0.0, post.flare.y);                // luminance floor: only bright cores streak
  var acc = vec3f(0.0);
  var wsum = 0.0;
  // 25 taps/axis off the eighth-res bloom_m2 read as a smooth streak. Vertical taps run only when
  // the star mix is up and use their own height span, so a streak can be long yet short ("not too
  // tall"). The cutoff subtracts a floor so dim haze doesn't smear, leaving clean flares.
  for (var i = -12; i <= 12; i = i + 1) {
    let f = f32(i) / 12.0;
    let w = exp(-abs(f) * 2.5);
    let hs = max(textureSampleLevel(bloom_m2, scene_sampler, uv + vec2f(f * span, 0.0), 0.0).rgb - vec3f(cutoff), vec3f(0.0));
    acc = acc + hs * w;
    wsum = wsum + w;
    if (vmix > 0.001) {
      let vs = max(textureSampleLevel(bloom_m2, scene_sampler, uv + vec2f(0.0, f * vspan), 0.0).rgb - vec3f(cutoff), vec3f(0.0));
      acc = acc + vs * w * vmix;
      wsum = wsum + w * vmix;
    }
  }
  return acc / max(0.0001, wsum) * strength;
}

fn despeckle_scene(uv: vec2f, center: vec3f) -> vec3f {
  let strength = post.flare.z;
  if (strength <= 0.0001) {
    return center;
  }
  let texel = 1.0 / vec2f(textureDimensions(src_tex));
  var nmax = vec3f(0.0);
  for (var dy = -1; dy <= 1; dy = dy + 1) {
    for (var dx = -1; dx <= 1; dx = dx + 1) {
      if (dx == 0 && dy == 0) { continue; }
      let s = textureSampleLevel(src_tex, scene_sampler, uv + vec2f(f32(dx), f32(dy)) * texel, 0.0).rgb;
      nmax = max(nmax, s);
    }
  }
  let cl = max(center.r, max(center.g, center.b));
  let nl = max(nmax.r, max(nmax.g, nmax.b));
  let isolation = smoothstep(0.12, 0.45, (cl - nl) / max(cl, 0.0001));
  return mix(center, min(center, nmax), strength * isolation);
}

@fragment
fn composite_fs(in: FullscreenOut) -> @location(0) vec4f {
  let scene = despeckle_scene(in.uv, sample_scene_ca(in.uv));
  var bloom = textureSampleLevel(bloom_tex, scene_sampler, in.uv, 0.0).rgb * post.weights_a.x;
  if (post.level_count > 1.5) { bloom = bloom + textureSampleLevel(bloom_m1, scene_sampler, in.uv, 0.0).rgb * post.weights_a.y; }
  if (post.level_count > 2.5) { bloom = bloom + textureSampleLevel(bloom_m2, scene_sampler, in.uv, 0.0).rgb * post.weights_a.z; }
  if (post.level_count > 3.5) { bloom = bloom + textureSampleLevel(bloom_m3, scene_sampler, in.uv, 0.0).rgb * post.weights_a.w; }
  if (post.level_count > 4.5) { bloom = bloom + textureSampleLevel(bloom_m4, scene_sampler, in.uv, 0.0).rgb * post.weights_b.x; }
  if (post.level_count > 5.5) { bloom = bloom + textureSampleLevel(bloom_m5, scene_sampler, in.uv, 0.0).rgb * post.weights_b.y; }
  if (post.level_count > 6.5) { bloom = bloom + textureSampleLevel(bloom_m6, scene_sampler, in.uv, 0.0).rgb * post.weights_b.z; }
  if (post.level_count > 7.5) { bloom = bloom + textureSampleLevel(bloom_m7, scene_sampler, in.uv, 0.0).rgb * post.weights_b.w; }
  let combined = scene + bloom * post.bloom_strength * post.tint.rgb + anamorphic_streak(in.uv) * post.tint.rgb;
  if (post.grade.w > 0.0) {
    return vec4f(apply_vignette(tonemap_hdr(combined, post.grade.w), in.uv), 1.0);
  }
  let graded = agx_eotf(apply_color_grade(agx(max(combined, vec3f(0.0)))));
  return vec4f(apply_vignette(graded, in.uv), 1.0);
}

@fragment
fn composite_no_bloom_fs(in: FullscreenOut) -> @location(0) vec4f {
  let scene = despeckle_scene(in.uv, sample_scene_ca(in.uv));
  if (post.grade.w > 0.0) {
    return vec4f(apply_vignette(tonemap_hdr(scene, post.grade.w), in.uv), 1.0);
  }
  let graded = agx_eotf(apply_color_grade(agx(max(scene, vec3f(0.0)))));
  return vec4f(apply_vignette(graded, in.uv), 1.0);
}
`,mn=`
@group(0) @binding(0) var<storage, read> particles: array<Particle>;
// Previous whole-step particle state, for display interpolation (binding 2). Equals the
// current visual state when paused/frozen because render_lerp_t = 1 selects the current buffer.
@group(0) @binding(2) var<storage, read> particles_prev: array<Particle>;
@group(0) @binding(3) var<storage, read> particle_density_field_values: array<vec4f>;
@group(0) @binding(4) var<storage, read> particle_support_values: array<f32>;
@group(0) @binding(5) var<storage, read> particle_active_indices: array<u32>;
// Density-cutoff signal precomputed once per particle by the cutoff prepass (binding 6);
// read by particle_vs only when uniforms.particle_cutoff_prepass == 1.
@group(0) @binding(6) var<storage, read> particle_cutoff_signal: array<f32>;
// Persistent per-particle ids (permuted alongside the spatial sort) so identity-derived
// visual randomness (variation) sticks to the particle, not to its buffer slot.
@group(0) @binding(7) var<storage, read> particle_persistent_ids: array<u32>;

fn culled_splat(local_density: f32) -> SplatOut {
  var out: SplatOut;
  out.position = vec4f(2.0, 2.0, 0.0, 1.0);
  out.local = vec2f(0.0);
  out.alpha = 0.0;
  out.density = local_density;
  out.depth = 0.0;
  out.species = 0.0;
  out.uv = vec2f(0.0);
  out.mode = 1.0;
  out.color_hsv = vec4f(0.0);
  out.defocus = 0.0;
  out.sprite_blur = 0.0;
  out.bright_mul = 1.0;
  return out;
}

fn particle_density_field_signal(raw: vec4f) -> f32 {
  return max(0.0, raw.w + length(raw.xyz) * 0.25);
}

fn particle_density_field_cell(x: i32, y: i32, z: i32) -> u32 {
  let w = i32(uniforms.width);
  let h = i32(uniforms.height);
  let d = i32(uniforms.depth);
  let cx = clamp(x, 0, w - 1);
  let cy = clamp(y, 0, h - 1);
  let cz = clamp(z, 0, d - 1);
  return u32((cz * h + cy) * w + cx);
}

fn particle_density_field_at(position: vec3f) -> vec4f {
  if (any(position < vec3f(-1.0)) || any(position > vec3f(1.0))) {
    return vec4f(0.0);
  }
  let dims = vec3f(f32(uniforms.width), f32(uniforms.height), f32(uniforms.depth));
  let grid = (position + vec3f(1.0)) * 0.5 * dims - vec3f(0.5);
  let base = vec3i(floor(grid));
  let t = fract(grid);
  var accum = vec4f(0.0);
  for (var dz = 0i; dz <= 1i; dz = dz + 1i) {
    for (var dy = 0i; dy <= 1i; dy = dy + 1i) {
      for (var dx = 0i; dx <= 1i; dx = dx + 1i) {
        let weight = mix(1.0 - t.x, t.x, f32(dx)) * mix(1.0 - t.y, t.y, f32(dy)) * mix(1.0 - t.z, t.z, f32(dz));
        accum = accum + particle_density_field_values[particle_density_field_cell(base.x + dx, base.y + dy, base.z + dz)] * weight;
      }
    }
  }
  return accum;
}

fn particle_density_signal_at(position: vec3f) -> f32 {
  return particle_density_field_signal(particle_density_field_at(position));
}

fn particle_cutoff_support_signal(position: vec3f, radius: f32) -> f32 {
  let center = particle_density_signal_at(position);
  if (radius <= 0.00001) {
    return center;
  }
  let axis = (
    particle_density_signal_at(position + vec3f(radius, 0.0, 0.0)) +
    particle_density_signal_at(position - vec3f(radius, 0.0, 0.0)) +
    particle_density_signal_at(position + vec3f(0.0, radius, 0.0)) +
    particle_density_signal_at(position - vec3f(0.0, radius, 0.0)) +
    particle_density_signal_at(position + vec3f(0.0, 0.0, radius)) +
    particle_density_signal_at(position - vec3f(0.0, 0.0, radius))
  ) / 6.0;
  let diagonal_step = radius * 0.57735027;
  let diagonal = (
    particle_density_signal_at(position + vec3f(diagonal_step, diagonal_step, diagonal_step)) +
    particle_density_signal_at(position + vec3f(diagonal_step, diagonal_step, -diagonal_step)) +
    particle_density_signal_at(position + vec3f(diagonal_step, -diagonal_step, diagonal_step)) +
    particle_density_signal_at(position + vec3f(diagonal_step, -diagonal_step, -diagonal_step)) +
    particle_density_signal_at(position + vec3f(-diagonal_step, diagonal_step, diagonal_step)) +
    particle_density_signal_at(position + vec3f(-diagonal_step, diagonal_step, -diagonal_step)) +
    particle_density_signal_at(position + vec3f(-diagonal_step, -diagonal_step, diagonal_step)) +
    particle_density_signal_at(position + vec3f(-diagonal_step, -diagonal_step, -diagonal_step))
  ) * 0.125;
  return center * 0.38 + axis * 0.28 + diagonal * 0.34;
}

fn particle_normalized_density_fade(local_density: f32) -> f32 {
  let amount = clamp(uniforms.particle_density_normalize, 0.0, 1.0);
  if (amount <= 0.0001 || uniforms.particle_density_reference <= 0.000001) {
    return 1.0;
  }
  let normalized_density = local_density / max(0.000001, uniforms.particle_density_reference);
  let threshold = mix(0.06, 1.08, amount);
  let softness = max(0.01, uniforms.particle_density_softness);
  return smoothstep(threshold, threshold + softness, normalized_density);
}

// Half-saturation for the field-based support membership (matches the sim's canonical DENSITY_HALF).
const SUPPORT_FIELD_HALF = 0.0001;

fn particle_support_fade(index: u32, position: vec3f) -> f32 {
  let amount = clamp(uniforms.particle_support_mask, 0.0, 1.0);
  if (amount <= 0.0001) {
    return 1.0;
  }
  let support = clamp(particle_support_values[index], 0.0, 1.0);
  let cutoff = mix(0.05, 0.74, amount);
  let softness = mix(0.34, 0.18, amount);
  let grid_fade = smoothstep(cutoff, min(1.0, cutoff + softness), support);
  let smoothing = clamp(uniforms.particle_support_smoothing, 0.0, 1.0);
  if (smoothing <= 0.0001) {
    return grid_fade;
  }
  let radius = clamp(uniforms.particle_support_radius, 0.35, 1.75);
  let field_sig = particle_cutoff_support_signal(position, radius);
  let k = SUPPORT_FIELD_HALF * mix(0.15, 1.5, amount);
  let field_fade = field_sig / (field_sig + k);
  return mix(grid_fade, field_fade, smoothing);
}

fn particle_haze_fade(position: vec3f) -> f32 {
  let amount = clamp(uniforms.particle_haze_cull, 0.0, 1.0);
  if (amount <= 0.0001) {
    return 1.0;
  }
  let density = particle_density_field_at(position).w;
  let density_ref = select(0.00018, uniforms.particle_density_reference, uniforms.particle_density_reference > 0.000001);
  let structure = density / density_ref;
  let threshold = amount * 0.15;
  return smoothstep(threshold * 0.5, threshold, structure);
}

fn particle_instance_index(instance_index: u32) -> u32 {
  if (uniforms.particle_support_mask > 0.0001) {
    return particle_active_indices[instance_index];
  }
  return instance_index;
}
`,hn=`
struct SplatRecord {
  center: vec2f,
  axis: vec2u,       // pack2x16float: .x = axis_a.xy, .y = axis_b.xy (radius baked in)
  packed_a: vec2u,   // .x = (alpha, species), .y = (speed, bright_mul)
  packed_hsv: vec2u, // .x = (hue, sat), .y = (val, w)
};

fn splat_record_off_screen() -> SplatRecord {
  var rec: SplatRecord;
  rec.center = vec2f(2.0, 2.0);
  rec.axis = vec2u(0u);
  rec.packed_a = vec2u(0u);
  rec.packed_hsv = vec2u(0u);
  return rec;
}
`,gn=`
${cn}
${mn}
@group(0) @binding(8) var<storage, read_write> cutoff_signal_out: array<f32>;
@compute @workgroup_size(256)
fn cutoff_prepass(@builtin(global_invocation_id) gid: vec3u) {
  let index = gid.x;
  if (index >= arrayLength(&particles)) {
    return;
  }
  let particle = particles[index];
  let previous_particle = particles_prev[index];
  // Mirror particle_vs exactly: same render_lerp_t, same torus-shortest interpolation.
  let particle_lerp_t = particle_lerp_amount(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, uniforms.render_lerp_t);
  let interp_pos = interpolate_particle_position(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, particle_lerp_t);
  var local_density = 1.0;
  if (uniforms.particle_density_cutoff > 0.0 || uniforms.particle_density_normalize > 0.0001) {
    local_density = particle_cutoff_support_signal(interp_pos, particle_density_gate_radius());
  }
  cutoff_signal_out[index] = local_density;
}
`,_n=`
${cn}
${mn}
@vertex
fn particle_vs(@builtin(vertex_index) vertex_index: u32, @builtin(instance_index) instance_index: u32) -> SplatOut {
  let index = particle_instance_index(instance_index);
  let particle = particles[index];
  let previous_particle = particles_prev[index];
  // Interpolate position between the previous and current whole-step state for smooth motion
  // at any sim speed. Use torus-shortest interpolation so wrapped particles do not streak
  // across the volume on fractional-speed frames.
  let particle_lerp_t = particle_lerp_amount(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, uniforms.render_lerp_t);
  let large_motion_fade = particle_large_motion_fade(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, uniforms.render_lerp_t);
  let interp_pos = interpolate_particle_position(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, particle_lerp_t);
  let visual_velocity = particle_visual_velocity(previous_particle, particle, particle_lerp_t);
  let speed_cutoff_visibility = particle_speed_cutoff_visibility(visual_velocity);
  if (speed_cutoff_visibility <= 0.000001) {
    return culled_splat(0.0);
  }
  let visual_color = interpolate_particle_color(stored_particle_color(previous_particle), stored_particle_color(particle), particle_lerp_t);
  let p = vec4f(interp_pos, particle.pos_cohort.w);
  var local_density = 1.0;
  if (uniforms.particle_density_cutoff > 0.0 || uniforms.particle_density_normalize > 0.0001) {
    if (uniforms.particle_cutoff_prepass == 1u) {
      // Precomputed once per particle by the cutoff prepass (same interp_pos, same math).
      local_density = particle_cutoff_signal[index];
    } else {
      local_density = particle_cutoff_support_signal(interp_pos, particle_density_gate_radius());
    }
  }
  var density_fade = 1.0;
  if (uniforms.particle_density_cutoff > 0.0) {
    let cutoff = uniforms.particle_density_cutoff;
    density_fade = smoothstep(cutoff, cutoff * PARTICLE_CUTOFF_FADE, local_density);
    if (density_fade <= 0.000001) {
      return culled_splat(local_density);
    }
  }
  let normalized_density_fade = particle_normalized_density_fade(local_density);
  if (normalized_density_fade <= 0.000001) {
    return culled_splat(local_density);
  }
  let support_fade = particle_support_fade(index, interp_pos);
  if (support_fade <= 0.000001) {
    return culled_splat(local_density);
  }
  let particle_fade = density_fade * normalized_density_fade * support_fade * speed_cutoff_visibility * particle_haze_fade(interp_pos);
  if (particle_fade <= 0.000001) {
    return culled_splat(local_density);
  }
  let view_depth = uniforms.distance + world_to_camera(p.xyz).z;
  if (view_depth <= PARTICLE_NEAR) {
    // Particle is at or behind the camera (e.g. zoomed past it) — clip it, don't pin it to screen.
    return culled_splat(local_density);
  }
  let projected = project(p.xyz);
  let local = billboard_corner(vertex_index);
  let focus_defocus = particle_focus_defocus(projected.z);
  let focus_blur_px = particle_dof_blur_px_from_defocus(focus_defocus);
  let variation = compute_particle_variation(particle_persistent_ids[index], interp_pos);
  let base_size_px = particle_splat_base_size_px(projected.z);
  let sized_px = particle_variation_sized_px(base_size_px, variation.size_mul);
  let splat_radius = particle_splat_radius_for_size_px(sized_px + max(0.0, focus_blur_px));
  let cohort_count = max(1.0, f32(uniforms.cohorts));
  var render_local = local;
  if (uniforms.particle_velocity_stretch == 1u && max(uniforms.particle_stretch, uniforms.particle_stretch_min) > 0.001) {
    let direction = particle_velocity_screen_axis(visual_velocity);
    if (length(direction) > 0.000001) {
      let perpendicular = vec2f(-direction.y, direction.x);
      let stretch = particle_velocity_stretch_amount(visual_velocity);
      render_local = direction * local.x * (1.0 + stretch) + perpendicular * local.y;
    }
  }
  var out: SplatOut;
  out.position = vec4f(projected.x + render_local.x * splat_radius.x, projected.y + render_local.y * splat_radius.y, 0.0, 1.0);
  out.local = local;
  out.alpha = uniforms.particle_opacity * clamp(visual_color.w / 0.045, 0.0, 2.0) * particle_fade * large_motion_fade * variation.opacity_mul;
  out.density = local_density;
  out.depth = projected.z; // DOF depth metric (1.85 / view_depth), kept for palette/depth effects.
  out.species = fract(p.w / cohort_count);
  out.uv = vec2f(0.0);
  out.mode = 1.0;
  let base_gradient = fract(p.w / cohort_count + visual_color.x * 0.17);
  let varied_hue = fract(particle_gradient_coordinate(visual_velocity, base_gradient) + variation.hue_off);
  out.color_hsv = vec4f(varied_hue, visual_color.y * variation.sat_mul, visual_color.z, visual_color.w);
  out.speed = clamp(length(visual_velocity) / 0.04, 0.0, 1.0);
  out.defocus = focus_defocus;
  out.sprite_blur = particle_sprite_blur_amount(focus_blur_px, sized_px);
  out.bright_mul = variation.bright_mul * variation.val_mul;
  return out;
}

@vertex
fn particle_fast_vs(@builtin(vertex_index) vertex_index: u32, @builtin(instance_index) instance_index: u32) -> SplatOut {
  let index = particle_instance_index(instance_index);
  let particle = particles[index];
  let previous_particle = particles_prev[index];
  let particle_lerp_t = particle_lerp_amount(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, uniforms.render_lerp_t);
  let large_motion_fade = particle_large_motion_fade(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, uniforms.render_lerp_t);
  let interp_pos = interpolate_particle_position(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, particle_lerp_t);
  let visual_velocity = particle_visual_velocity(previous_particle, particle, particle_lerp_t);
  let speed_cutoff_visibility = particle_speed_cutoff_visibility(visual_velocity);
  if (speed_cutoff_visibility <= 0.000001) {
    return culled_splat(1.0);
  }
  let support_fade = particle_support_fade(index, interp_pos);
  if (support_fade <= 0.000001) {
    return culled_splat(1.0);
  }
  let particle_fade = support_fade * speed_cutoff_visibility * particle_haze_fade(interp_pos);
  if (particle_fade <= 0.000001) {
    return culled_splat(1.0);
  }
  let view_depth = uniforms.distance + world_to_camera(interp_pos).z;
  if (view_depth <= PARTICLE_NEAR) {
    return culled_splat(1.0);
  }
  let projected = project(interp_pos);
  let local = billboard_corner(vertex_index);
  let variation = compute_particle_variation(particle_persistent_ids[index], interp_pos);
  let base_size_px = particle_splat_base_size_px(projected.z);
  let sized_px = particle_variation_sized_px(base_size_px, variation.size_mul);
  let splat_radius = particle_splat_radius_for_size_px(sized_px);
  let cohort_count = max(1.0, f32(uniforms.cohorts));
  var render_local = local;
  if (uniforms.particle_velocity_stretch == 1u && max(uniforms.particle_stretch, uniforms.particle_stretch_min) > 0.001) {
    let direction = particle_velocity_screen_axis(visual_velocity);
    if (length(direction) > 0.000001) {
      let perpendicular = vec2f(-direction.y, direction.x);
      let stretch = particle_velocity_stretch_amount(visual_velocity);
      render_local = direction * local.x * (1.0 + stretch) + perpendicular * local.y;
    }
  }
  let visual_color = interpolate_particle_color(stored_particle_color(previous_particle), stored_particle_color(particle), particle_lerp_t);
  var out: SplatOut;
  out.position = vec4f(projected.x + render_local.x * splat_radius.x, projected.y + render_local.y * splat_radius.y, 0.0, 1.0);
  out.local = local;
  out.alpha = uniforms.particle_opacity * clamp(visual_color.w / 0.045, 0.0, 2.0) * particle_fade * large_motion_fade * variation.opacity_mul;
  out.density = 1.0;
  out.depth = projected.z;
  out.species = fract(particle.pos_cohort.w / cohort_count);
  out.uv = vec2f(0.0);
  out.mode = 1.0;
  let base_gradient = fract(particle.pos_cohort.w / cohort_count + visual_color.x * 0.17);
  let varied_hue = fract(particle_gradient_coordinate(visual_velocity, base_gradient) + variation.hue_off);
  out.color_hsv = vec4f(varied_hue, visual_color.y * variation.sat_mul, visual_color.z, visual_color.w);
  out.speed = clamp(length(visual_velocity) / 0.04, 0.0, 1.0);
  out.defocus = 0.0;
  out.sprite_blur = 0.0;
  out.bright_mul = variation.bright_mul * variation.val_mul;
  return out;
}
${un}
`,vn=`
${cn}
${mn}
${hn}
@group(0) @binding(6) var<storage, read_write> splat_records: array<SplatRecord>;

@compute @workgroup_size(256)
fn prepare_splats(@builtin(global_invocation_id) gid: vec3u) {
  let index = gid.x;
  if (index >= arrayLength(&particles)) {
    return;
  }
  let particle = particles[index];
  let previous_particle = particles_prev[index];
  let particle_lerp_t = particle_lerp_amount(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, uniforms.render_lerp_t);
  let large_motion_fade = particle_large_motion_fade(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, uniforms.render_lerp_t);
  let interp_pos = interpolate_particle_position(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, particle_lerp_t);
  let visual_velocity = particle_visual_velocity(previous_particle, particle, particle_lerp_t);
  let speed_cutoff_visibility = particle_speed_cutoff_visibility(visual_velocity);
  if (speed_cutoff_visibility <= 0.000001) {
    splat_records[index] = splat_record_off_screen();
    return;
  }
  let support_fade = particle_support_fade(index, interp_pos);
  if (support_fade <= 0.000001) {
    splat_records[index] = splat_record_off_screen();
    return;
  }
  let particle_fade = support_fade * speed_cutoff_visibility * particle_haze_fade(interp_pos);
  if (particle_fade <= 0.000001) {
    splat_records[index] = splat_record_off_screen();
    return;
  }
  let view_depth = uniforms.distance + world_to_camera(interp_pos).z;
  if (view_depth <= PARTICLE_NEAR) {
    splat_records[index] = splat_record_off_screen();
    return;
  }
  let projected = project(interp_pos);
  let variation = compute_particle_variation(particle_persistent_ids[index], interp_pos);
  let base_size_px = particle_splat_base_size_px(projected.z);
  let sized_px = particle_variation_sized_px(base_size_px, variation.size_mul);
  let splat_radius = particle_splat_radius_for_size_px(sized_px);
  let cohort_count = max(1.0, f32(uniforms.cohorts));
  var axis_a = vec2f(splat_radius.x, 0.0);
  var axis_b = vec2f(0.0, splat_radius.y);
  if (uniforms.particle_velocity_stretch == 1u && max(uniforms.particle_stretch, uniforms.particle_stretch_min) > 0.001) {
    let direction = particle_velocity_screen_axis(visual_velocity);
    if (length(direction) > 0.000001) {
      let perpendicular = vec2f(-direction.y, direction.x);
      let stretch = particle_velocity_stretch_amount(visual_velocity);
      axis_a = direction * (1.0 + stretch) * splat_radius;
      axis_b = perpendicular * splat_radius;
    }
  }
  let visual_color = interpolate_particle_color(stored_particle_color(previous_particle), stored_particle_color(particle), particle_lerp_t);
  let alpha = uniforms.particle_opacity * clamp(visual_color.w / 0.045, 0.0, 2.0) * particle_fade * large_motion_fade * variation.opacity_mul;
  let species = fract(particle.pos_cohort.w / cohort_count);
  let base_gradient = fract(particle.pos_cohort.w / cohort_count + visual_color.x * 0.17);
  let varied_hue = fract(particle_gradient_coordinate(visual_velocity, base_gradient) + variation.hue_off);
  let speed = clamp(length(visual_velocity) / 0.04, 0.0, 1.0);
  var rec: SplatRecord;
  rec.center = projected.xy;
  rec.axis = vec2u(pack2x16float(axis_a), pack2x16float(axis_b));
  rec.packed_a = vec2u(
    pack2x16float(vec2f(alpha, species)),
    pack2x16float(vec2f(speed, variation.bright_mul * variation.val_mul))
  );
  rec.packed_hsv = vec2u(
    pack2x16float(vec2f(varied_hue, visual_color.y * variation.sat_mul)),
    pack2x16float(vec2f(visual_color.z, visual_color.w))
  );
  splat_records[index] = rec;
}
`,yn=`
${cn}
${hn}
@group(0) @binding(6) var<storage, read> splat_records: array<SplatRecord>;

@vertex
fn particle_record_vs(@builtin(vertex_index) vertex_index: u32, @builtin(instance_index) instance_index: u32) -> SplatOut {
  let rec = splat_records[instance_index];
  let local = billboard_corner(vertex_index);
  let axis_a = unpack2x16float(rec.axis.x);
  let axis_b = unpack2x16float(rec.axis.y);
  let alpha_species = unpack2x16float(rec.packed_a.x);
  let speed_bright = unpack2x16float(rec.packed_a.y);
  let hue_sat = unpack2x16float(rec.packed_hsv.x);
  let val_w = unpack2x16float(rec.packed_hsv.y);
  var out: SplatOut;
  out.position = vec4f(rec.center + local.x * axis_a + local.y * axis_b, 0.0, 1.0);
  out.local = local;
  out.alpha = alpha_species.x;
  out.density = 1.0;
  out.depth = 0.0;
  out.species = alpha_species.y;
  out.uv = vec2f(0.0);
  out.mode = 1.0;
  out.color_hsv = vec4f(hue_sat.x, hue_sat.y, val_w.x, val_w.y);
  out.defocus = 0.0;
  out.sprite_blur = 0.0;
  out.bright_mul = speed_bright.y;
  out.speed = speed_bright.x;
  return out;
}
${un}
`,B=4096,bn=`
${cn}
${hn}
${un}
@group(0) @binding(6) var<storage, read> splat_records: array<SplatRecord>;
@group(0) @binding(7) var<storage, read_write> splat_accum: array<atomic<u32>>;

const SPLAT_FIXED_SCALE = ${B}.0;

// particle_sprite_profile with defocus = 0 and fwidth supplied analytically.
fn splat_profile_analytic(r: f32, fw: f32) -> f32 {
  let aa = max(fw * 1.35, 0.008);
  let sharp = 1.0 - smoothstep(1.0 - aa * 2.0, 1.0 + aa, r);
  var mask = clamp(sharp, 0.0, 1.0);
  let glow_amt = clamp(uniforms.particle_glow_core, 0.0, 1.0);
  if (glow_amt <= 0.001) {
    return mask;
  }
  let core = pow(clamp(1.0 - r, 0.0, 1.0), mix(0.7, 3.0, glow_amt));
  return mask * mix(1.0, core, glow_amt);
}

@compute @workgroup_size(256)
fn accumulate_splats(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.x;
  if (i >= arrayLength(&splat_records)) {
    return;
  }
  let rec = splat_records[i];
  if (rec.center.x > 1.5) {
    return; // off-screen sentinel written for culled particles
  }
  let alpha_species = unpack2x16float(rec.packed_a.x);
  let alpha = alpha_species.x;
  if (alpha <= 0.000001) {
    return;
  }
  let axis_a = unpack2x16float(rec.axis.x);
  let axis_b = unpack2x16float(rec.axis.y);
  let speed_bright = unpack2x16float(rec.packed_a.y);
  let hue_sat = unpack2x16float(rec.packed_hsv.x);
  let val_w = unpack2x16float(rec.packed_hsv.y);
  let res = uniforms.resolution;
  // Clip -> pixel space (y flips: NDC +y is up, pixel +y is down).
  let center_px = vec2f((rec.center.x * 0.5 + 0.5) * res.x, (0.5 - rec.center.y * 0.5) * res.y);
  let a_px = vec2f(axis_a.x * 0.5 * res.x, -axis_a.y * 0.5 * res.y);
  let b_px = vec2f(axis_b.x * 0.5 * res.x, -axis_b.y * 0.5 * res.y);
  let det = a_px.x * b_px.y - a_px.y * b_px.x;
  if (abs(det) < 0.000001) {
    return;
  }
  // Inverse basis: local = inv * (pixel - center); quad coverage is |local| <= 1 on both axes,
  // identical to the rasterized quad's interpolated local coordinate.
  let inv_r0 = vec2f(b_px.y, -b_px.x) / det;
  let inv_r1 = vec2f(-a_px.y, a_px.x) / det;
  let ext = vec2f(abs(a_px.x) + abs(b_px.x), abs(a_px.y) + abs(b_px.y));
  let x0 = max(0, i32(floor(center_px.x - ext.x)));
  let x1 = min(i32(res.x) - 1, i32(ceil(center_px.x + ext.x)));
  let y0 = max(0, i32(floor(center_px.y - ext.y)));
  let y1 = min(i32(res.y) - 1, i32(ceil(center_px.y + ext.y)));
  if (x1 < x0 || y1 < y0) {
    return;
  }
  let color_hsv = vec4f(hue_sat.x, hue_sat.y, val_w.x, val_w.y);
  let base_color = splat_color(color_hsv, speed_bright.x, alpha_species.y);
  let base_intensity = alpha * particle_gain() * speed_bright.y;
  let hot = clamp(uniforms.particle_hot_core, 0.0, 1.0);
  let width_px = u32(res.x);
  for (var py = y0; py <= y1; py = py + 1) {
    for (var px = x0; px <= x1; px = px + 1) {
      let d = vec2f(f32(px) + 0.5, f32(py) + 0.5) - center_px;
      let local = vec2f(dot(inv_r0, d), dot(inv_r1, d));
      if (abs(local.x) > 1.0 || abs(local.y) > 1.0) {
        continue;
      }
      let r = length(local);
      // Analytic fwidth(r): |dr/dpx| + |dr/dpy| from the inverse basis columns.
      var fw = 0.0;
      if (r > 0.000001) {
        let dr_dx = dot(local, vec2f(inv_r0.x, inv_r1.x)) / r;
        let dr_dy = dot(local, vec2f(inv_r0.y, inv_r1.y)) / r;
        fw = abs(dr_dx) + abs(dr_dy);
      } else {
        fw = length(vec2f(inv_r0.x, inv_r1.x)) + length(vec2f(inv_r0.y, inv_r1.y));
      }
      let glow = splat_profile_analytic(r, fw);
      let intensity = glow * base_intensity;
      if (intensity <= 0.0000001) {
        continue;
      }
      var color = base_color;
      if (hot > 0.001) {
        let centerness = pow(clamp(1.0 - r, 0.0, 1.0), 2.0);
        color = mix(color, vec3f(1.0), centerness * hot);
      }
      let contribution = color * intensity * SPLAT_FIXED_SCALE;
      let base_index = (u32(py) * width_px + u32(px)) * 3u;
      let cr = u32(round(clamp(contribution.r, 0.0, 4294900000.0 / SPLAT_FIXED_SCALE)));
      let cg = u32(round(clamp(contribution.g, 0.0, 4294900000.0 / SPLAT_FIXED_SCALE)));
      let cb = u32(round(clamp(contribution.b, 0.0, 4294900000.0 / SPLAT_FIXED_SCALE)));
      if (cr > 0u) { atomicAdd(&splat_accum[base_index], cr); }
      if (cg > 0u) { atomicAdd(&splat_accum[base_index + 1u], cg); }
      if (cb > 0u) { atomicAdd(&splat_accum[base_index + 2u], cb); }
    }
  }
}
`,xn=`
${cn}
@group(0) @binding(6) var<storage, read> splat_accum_values: array<u32>;

struct ResolveOut {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
};

@vertex
fn splat_resolve_vs(@builtin(vertex_index) vertex_index: u32) -> ResolveOut {
  var out: ResolveOut;
  let uv = vec2f(f32((vertex_index << 1u) & 2u), f32(vertex_index & 2u));
  out.position = vec4f(uv * 2.0 - 1.0, 0.0, 1.0);
  out.uv = uv;
  return out;
}

@fragment
fn splat_resolve_fs(in: ResolveOut) -> @location(0) vec4f {
  let px = vec2u(in.position.xy);
  let base_index = (px.y * u32(uniforms.resolution.x) + px.x) * 3u;
  let scale = 1.0 / ${B}.0;
  let rgb = vec3f(
    f32(splat_accum_values[base_index]),
    f32(splat_accum_values[base_index + 1u]),
    f32(splat_accum_values[base_index + 2u])
  ) * scale;
  let lum = max(rgb.r, max(rgb.g, rgb.b));
  let density_curve = uniforms.particle_brightness_boost * pow(max(lum, 1e-6), uniforms.particle_exponent - 1.0);
  return vec4f(rgb * density_curve, 0.0);
}
`,Sn=32,Cn=`
struct Particle {
  pos_cohort: vec4f,
  vel_id: vec4f,
};

const SORT_GRID = ${Sn}u;

fn sort_cell_of(position: vec3f) -> u32 {
  let g = clamp(
    vec3u((clamp(position, vec3f(-1.0), vec3f(1.0)) + vec3f(1.0)) * 0.5 * f32(SORT_GRID)),
    vec3u(0u),
    vec3u(SORT_GRID - 1u)
  );
  return (g.z * SORT_GRID + g.y) * SORT_GRID + g.x;
}

@group(0) @binding(0) var<storage, read> sort_particles_in: array<Particle>;
@group(0) @binding(1) var<storage, read_write> sort_hist: array<atomic<u32>>;
@group(0) @binding(2) var<storage, read> sort_ids_in: array<u32>;
@group(0) @binding(3) var<storage, read_write> sort_particles_out: array<Particle>;
@group(0) @binding(4) var<storage, read_write> sort_ids_out: array<u32>;
@group(0) @binding(5) var<storage, read_write> sort_map: array<u32>;

@compute @workgroup_size(256)
fn sort_histogram(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.x;
  if (i >= arrayLength(&sort_particles_in)) {
    return;
  }
  atomicAdd(&sort_hist[sort_cell_of(sort_particles_in[i].pos_cohort.xyz)], 1u);
}

// Serial exclusive scan over 32^3 cells. A single thread walking 32768 entries finishes in
// tens of microseconds and avoids a multi-pass hierarchical scan.
@compute @workgroup_size(1)
fn sort_scan() {
  var running = 0u;
  let cells = SORT_GRID * SORT_GRID * SORT_GRID;
  for (var c = 0u; c < cells; c = c + 1u) {
    let count = atomicLoad(&sort_hist[c]);
    atomicStore(&sort_hist[c], running);
    running = running + count;
  }
}

@compute @workgroup_size(256)
fn sort_scatter(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.x;
  if (i >= arrayLength(&sort_particles_in)) {
    return;
  }
  let particle = sort_particles_in[i];
  let dst = atomicAdd(&sort_hist[sort_cell_of(particle.pos_cohort.xyz)], 1u);
  sort_particles_out[dst] = particle;
  sort_ids_out[dst] = sort_ids_in[i];
  sort_map[i] = dst;
}
`,wn=`
struct Particle {
  pos_cohort: vec4f,
  vel_id: vec4f,
};

@group(0) @binding(0) var<storage, read> apply_particles_in: array<Particle>;
@group(0) @binding(1) var<storage, read> apply_map: array<u32>;
@group(0) @binding(2) var<storage, read_write> apply_particles_out: array<Particle>;

@compute @workgroup_size(256)
fn sort_apply_map(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.x;
  if (i >= arrayLength(&apply_particles_in)) {
    return;
  }
  apply_particles_out[apply_map[i]] = apply_particles_in[i];
}
`,Tn=`
${Xt}
struct RibbonUniforms {
  stride: u32,
  max_ribbons: u32,
  frame: u32,
  length: u32,    // history frames spanned (<= ring max)
  joints: u32,    // spine points rendered across the span
  width: f32,
  fade: f32,       // 0 = solid, 1 = full opacity fade toward the tail
  fade_start: f32, // 0..1 along the trail (0 = tail) where the fade region begins
  edge_fade: f32,  // cross-ribbon exponential edge falloff (0 = hard-ish, 1 = soft glow edges)
};
@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> trail: array<vec4f>;
@group(0) @binding(2) var<uniform> config: SimConfig;
@group(0) @binding(3) var<uniform> rib: RibbonUniforms;

@compute @workgroup_size(256)
fn append_trail(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.x;
  if (i >= config.active_particle_count) {
    return;
  }
  let global_i = i + config.particle_offset;
  if (rib.stride == 0u || (global_i % rib.stride) != 0u) {
    return;
  }
  let r = global_i / rib.stride;
  if (r >= rib.max_ribbons) {
    return;
  }
  let pos = particles[i].pos_cohort.xyz;
  let L = 32u; // RIBBON_TRAIL_MAX ring size (fixed; ribbonLength selects how much to render)
  let slot = rib.frame % L;
  let prev = trail[r * L + ((rib.frame + L - 1u) % L)];
  // Store a CONTINUOUS (unwrapped) position so domain wraps don't streak the ribbon across the
  // screen: accumulate the shortest per-axis delta from the previous sample (the [-1,1] domain has
  // width 2). w=1 marks a filled slot; zero-initialised slots stay w=0 (invisible until filled).
  var stored = pos;
  if (prev.w > 0.5) {
    var d = pos - prev.xyz;
    if (d.x > 1.0) { d.x = d.x - 2.0; } else if (d.x < -1.0) { d.x = d.x + 2.0; }
    if (d.y > 1.0) { d.y = d.y - 2.0; } else if (d.y < -1.0) { d.y = d.y + 2.0; }
    if (d.z > 1.0) { d.z = d.z - 2.0; } else if (d.z < -1.0) { d.z = d.z + 2.0; }
    stored = prev.xyz + d;
  }
  trail[r * L + slot] = vec4f(stored, 1.0);
}
`,En=`
${cn}
struct RibbonUniforms {
  stride: u32,
  max_ribbons: u32,
  frame: u32,
  length: u32,    // history frames spanned (<= ring max)
  joints: u32,    // spine points rendered across the span
  width: f32,
  fade: f32,       // 0 = solid, 1 = full opacity fade toward the tail
  fade_start: f32, // 0..1 along the trail (0 = tail) where the fade region begins
  edge_fade: f32,  // cross-ribbon exponential edge falloff (0 = hard-ish, 1 = soft glow edges)
};
@group(0) @binding(0) var<storage, read> trail: array<vec4f>;
@group(0) @binding(2) var<uniform> rib: RibbonUniforms;

struct RibbonOut {
  @builtin(position) position: vec4f,
  @location(0) alpha: f32,
  @location(1) color: vec3f,
  @location(2) edge: f32, // -1..+1 across the ribbon width (0 = centre), for per-pixel edge fade
};

// Read the ring slot 'age' frames behind the newest write (0 = head/newest). Ring size is fixed 32.
fn ribbon_sample(r: u32, age: u32) -> vec4f {
  let RING = 32u;
  let slot = (rib.frame + RING - (age % RING)) % RING;
  return trail[r * RING + slot];
}

@vertex
fn ribbon_vs(@builtin(vertex_index) vi: u32, @builtin(instance_index) inst: u32) -> RibbonOut {
  var out: RibbonOut;
  let r = inst;
  let J = max(2u, rib.joints);
  let S = max(2u, rib.length);
  let j = vi / 2u;                          // spine point index 0..J-1
  let side = f32(vi % 2u) * 2.0 - 1.0;      // -1 / +1 across the ribbon
  let t = f32(j) / f32(J - 1u);             // 0 = tail .. 1 = head
  let head = ribbon_sample(r, 0u);
  // Wrap the head into [-1,1]; the trail is drawn RELATIVE to it. Stored slots are continuous
  // (unwrapped) and share one frame of reference, so (slot - head) is the small, correct offset.
  // Anchoring at the wrapped head keeps ribbon coordinates bounded near the particle instead of
  // flying off after repeated domain wraps (the cause of the "bouncing all over" artifact).
  let head_anchor = head.xyz - 2.0 * round(head.xyz * 0.5);
  let age = u32(round((1.0 - t) * f32(S - 1u)));
  let cur = ribbon_sample(r, age);
  let tn = f32(min(j + 1u, J - 1u)) / f32(J - 1u);
  let nxt = ribbon_sample(r, u32(round((1.0 - tn) * f32(S - 1u))));
  var spine = head_anchor + (cur.xyz - head.xyz);
  var spine_nxt = head_anchor + (nxt.xyz - head.xyz);
  var visible = 1.0;
  if (cur.w < 0.5) { spine = head_anchor; spine_nxt = head_anchor; visible = 0.0; } // unfilled ring slot -> collapse, invisible
  let p = project(spine);
  let pn = project(spine_nxt);
  let d = pn.xy - p.xy;
  let dlen = length(d);
  let dir = select(vec2f(1.0, 0.0), d / dlen, dlen > 1e-6);
  let perp = vec2f(-dir.y, dir.x);
  // Particle SIZE modulates ribbon width (rib.width is a multiplier on top of the particle-size
  // slider); ribbons never feed back into particle size. Per-particle size variation is intentionally
  // NOT applied here so width stays steady (no per-frame pulsing). Converted px -> NDC via res.y.
  let width_px = max(0.0, uniforms.particle_size_px) * rib.width;
  let width_ndc = (width_px / max(1.0, uniforms.resolution.y)) * 2.0;
  out.position = vec4f(p.xy + perp * (width_ndc * side), 0.0, 1.0);
  // Opacity fade toward the tail; fade_start sets how far along (0 = tail) the fade region begins.
  let fade_ramp = smoothstep(0.0, max(0.01, rib.fade_start), t);
  out.alpha = visible * mix(1.0, fade_ramp, clamp(rib.fade, 0.0, 1.0)) * 0.3;
  out.color = hsv2rgb(vec3f(fract(f32(r) * 0.6180339887), 0.72, 1.0));
  out.edge = side;
  return out;
}

@fragment
fn ribbon_fs(in: RibbonOut) -> @location(0) vec4f {
  // Per-pixel cross-ribbon edge fade: pow(1-|edge|, exponent) -> 0 at the edges, so the ribbon
  // always feathers out (anti-aliased) rather than showing a hard, crawling edge. edge_fade raises
  // the exponent for a tighter bright core with a soft exponential falloff, like the particle glow.
  let e = clamp(1.0 - abs(in.edge), 0.0, 1.0);
  let edge_alpha = pow(e, mix(0.8, 5.0, clamp(rib.edge_fade, 0.0, 1.0)));
  let a = in.alpha * edge_alpha;
  return vec4f(in.color * a, a); // premultiplied additive
}
`,Dn=`
${cn}
@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(2) var<storage, read> particles_prev: array<Particle>;
@group(0) @binding(3) var<storage, read> particle_field_values: array<vec4f>;

fn density_particle_field_signal(raw: vec4f) -> f32 {
  return max(0.0, raw.w + length(raw.xyz) * 0.25);
}

fn density_particle_field_cell(x: i32, y: i32, z: i32) -> u32 {
  let w = i32(uniforms.width);
  let h = i32(uniforms.height);
  let d = i32(uniforms.depth);
  let cx = clamp(x, 0, w - 1);
  let cy = clamp(y, 0, h - 1);
  let cz = clamp(z, 0, d - 1);
  return u32((cz * h + cy) * w + cx);
}

fn density_particle_field_at(position: vec3f) -> f32 {
  if (any(position < vec3f(-1.0)) || any(position > vec3f(1.0))) {
    return 0.0;
  }
  let dims = vec3f(f32(uniforms.width), f32(uniforms.height), f32(uniforms.depth));
  let grid = (position + vec3f(1.0)) * 0.5 * dims - vec3f(0.5);
  let base = vec3i(floor(grid));
  let t = fract(grid);
  var accum = vec4f(0.0);
  for (var dz = 0i; dz <= 1i; dz = dz + 1i) {
    for (var dy = 0i; dy <= 1i; dy = dy + 1i) {
      for (var dx = 0i; dx <= 1i; dx = dx + 1i) {
        let weight = mix(1.0 - t.x, t.x, f32(dx)) * mix(1.0 - t.y, t.y, f32(dy)) * mix(1.0 - t.z, t.z, f32(dz));
        accum = accum + particle_field_values[density_particle_field_cell(base.x + dx, base.y + dy, base.z + dz)] * weight;
      }
    }
  }
  return density_particle_field_signal(accum);
}

fn density_particle_stats(position: vec3f, radius: f32) -> ParticleDensityStats {
  let center = density_particle_field_at(position);
  if (radius <= 0.00001) {
    return ParticleDensityStats(center, center, center, 1.0, 0.0);
  }
  return density_stats_from_axis_samples(
    center,
    density_particle_field_at(position + vec3f(radius, 0.0, 0.0)),
    density_particle_field_at(position - vec3f(radius, 0.0, 0.0)),
    density_particle_field_at(position + vec3f(0.0, radius, 0.0)),
    density_particle_field_at(position - vec3f(0.0, radius, 0.0)),
    density_particle_field_at(position + vec3f(0.0, 0.0, radius)),
    density_particle_field_at(position - vec3f(0.0, 0.0, radius))
  );
}

fn density_particle_neighborhood(position: vec3f) -> f32 {
  return density_particle_stats(position, max(0.0, uniforms.particle_density_radius)).peak;
}

struct DensityOut {
  @builtin(position) position: vec4f,
  @location(0) local: vec2f,
  @location(1) weight: f32,
  @location(2) color: vec3f,
};

fn culled_density_splat() -> DensityOut {
  var out: DensityOut;
  out.position = vec4f(2.0, 2.0, 0.0, 1.0);
  out.local = vec2f(0.0);
  out.weight = 0.0;
  out.color = vec3f(0.0);
  return out;
}

fn density_particle_color(velocity: vec3f, cohort: f32, visual_color: vec4f) -> vec3f {
  if (uniforms.particle_color_mode == 0u) {
    return particle_tint_color();
  }
  let base_gradient = fract(cohort / max(1.0, f32(uniforms.cohorts)) + visual_color.x * 0.17);
  let t = particle_gradient_coordinate(velocity, base_gradient);
  let color = particle_gradient_color(t, uniforms.particle_color_mode);
  return apply_tint(color, particle_tint_color(), 0.28);
}

fn density_vs(vertex_index: u32, scale: f32) -> DensityOut {
  let index = vertex_index / 6u;
  let particle = particles[index];
  let previous_particle = particles_prev[index];
  let particle_lerp_t = particle_lerp_amount(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, uniforms.render_lerp_t);
  let large_motion_fade = particle_large_motion_fade(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, uniforms.render_lerp_t);
  let interp_pos = interpolate_particle_position(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, particle_lerp_t);
  let visual_velocity = particle_visual_velocity(previous_particle, particle, particle_lerp_t);
  let speed_cutoff_visibility = particle_speed_cutoff_visibility(visual_velocity);
  if (speed_cutoff_visibility <= 0.000001) {
    return culled_density_splat();
  }
  let visual_color = interpolate_particle_color(stored_particle_color(previous_particle), stored_particle_color(particle), particle_lerp_t);
  let density_stats = density_particle_stats(interp_pos, max(0.0, uniforms.particle_density_radius));
  let local_density = density_stats.peak;
  let density_gate_min = max(0.003, uniforms.particle_density_cutoff * 0.35);
  let density_gate_max = max(0.022, uniforms.particle_density_cutoff * 2.0 + 0.018);
  let density_gate = smoothstep(density_gate_min, density_gate_max, local_density);
  if (density_gate <= 0.0) {
    return culled_density_splat();
  }
  let view_depth = uniforms.distance + world_to_camera(interp_pos).z;
  if (view_depth <= PARTICLE_NEAR) {
    return culled_density_splat();
  }
  let projected = project(interp_pos);
  let local = corner(vertex_index);
  let safe_scale = max(0.05, scale);
  let splat_radius = particle_splat_radius_ndc(projected.z) * safe_scale;
  let area_norm = 1.0 / max(1.0, safe_scale * safe_scale);
  var render_local = local;
  let direction = particle_velocity_screen_axis(visual_velocity);
  if (scale <= 2.5 && length(direction) > 0.000001) {
    let perpendicular = vec2f(-direction.y, direction.x);
    let stretch = 1.0 + clamp(uniforms.filament, 0.0, 1.0) * 1.25;
    render_local = direction * local.x * stretch + perpendicular * local.y;
  }
  var out: DensityOut;
  out.position = vec4f(projected.x + render_local.x * splat_radius.x, projected.y + render_local.y * splat_radius.y, 0.0, 1.0);
  out.local = local;
  out.weight = density_gate * speed_cutoff_visibility * area_norm * large_motion_fade;
  out.color = density_particle_color(visual_velocity, particle.pos_cohort.w, visual_color);
  return out;
}

@vertex
fn density_small_vs(@builtin(vertex_index) vertex_index: u32) -> DensityOut {
  return density_vs(vertex_index, uniforms.density_small_scale);
}

@vertex
fn density_large_vs(@builtin(vertex_index) vertex_index: u32) -> DensityOut {
  return density_vs(vertex_index, uniforms.density_large_scale);
}

@fragment
fn density_splat_fs(in: DensityOut) -> @location(0) vec4f {
  let d = dot(in.local, in.local);
  if (d > 1.45 || in.weight <= 0.0) {
    discard;
  }
  let glow = exp(-d * 2.35) * in.weight;
  return vec4f(in.color * glow, glow);
}
`,On=`
${cn}
@group(0) @binding(0) var density_small: texture_2d<f32>;
@group(0) @binding(2) var density_large: texture_2d<f32>;
@group(0) @binding(3) var fog_tex: texture_2d<f32>;
@group(0) @binding(4) var density_sampler: sampler;

struct FullscreenOut {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
};

fn saturate(value: f32) -> f32 {
  return clamp(value, 0.0, 1.0);
}

fn preserve_density_chroma(color: vec3f, amount: f32) -> vec3f {
  let peak = max(0.0001, max(color.r, max(color.g, color.b)));
  let hue_color = color / peak;
  return saturate_color(mix(color, hue_color, clamp(amount, 0.0, 1.0)), 1.18 + amount * 0.82);
}

@vertex
fn fullscreen_vs(@builtin(vertex_index) vertex_index: u32) -> FullscreenOut {
  var positions = array<vec2f, 3>(
    vec2f(-1.0, -3.0),
    vec2f(-1.0, 1.0),
    vec2f(3.0, 1.0)
  );
  let position = positions[vertex_index];
  var out: FullscreenOut;
  out.position = vec4f(position, 0.0, 1.0);
  out.uv = position * 0.5 + vec2f(0.5);
  return out;
}

@fragment
fn density_composite_fs(in: FullscreenOut) -> @location(0) vec4f {
  let sample_uv = vec2f(in.uv.x, 1.0 - in.uv.y);
  let texel = 1.0 / max(uniforms.resolution, vec2f(1.0));
  let small_sample = textureSampleLevel(density_small, density_sampler, sample_uv, 0.0);
  let large_sample = textureSampleLevel(density_large, density_sampler, sample_uv, 0.0);
  let small_raw = small_sample.a;
  let large_raw = large_sample.a;
  let small_l = textureSampleLevel(density_small, density_sampler, sample_uv - vec2f(texel.x, 0.0), 0.0).a;
  let small_r = textureSampleLevel(density_small, density_sampler, sample_uv + vec2f(texel.x, 0.0), 0.0).a;
  let small_u = textureSampleLevel(density_small, density_sampler, sample_uv + vec2f(0.0, texel.y), 0.0).a;
  let small_d = textureSampleLevel(density_small, density_sampler, sample_uv - vec2f(0.0, texel.y), 0.0).a;
  let neighbor_mean = (small_l + small_r + small_u + small_d) * 0.25;
  let ridge_mix = clamp(uniforms.density_contrast_balance, 0.0, 1.0);
  let local_peak = max(0.0, small_raw - neighbor_mean * mix(0.72, 1.18, ridge_mix));
  let edge_energy = length(vec2f(small_r - small_l, small_u - small_d));
  let ridge_field = log2(1.0 + local_peak * 14.0 + edge_energy * 5.5);
  let body_field = log2(1.0 + small_raw * 0.56) * (1.0 - ridge_mix) * 0.22;
  let large_field = log2(1.0 + large_raw * 2.35);
  let support = smoothstep(uniforms.density_large_threshold, uniforms.density_large_threshold + 0.24, large_field);
  let density_response = max(0.0, ridge_field * mix(0.42, 1.18, ridge_mix) + body_field) * support;
  let filament = pow(1.0 - exp(-density_response), max(0.25, uniforms.density_emission_power));
  let fog = textureSampleLevel(fog_tex, density_sampler, sample_uv, 0.0);
  let occlusion = mix(1.0, 1.0 - fog.a * 0.72, clamp(uniforms.density_occlusion, 0.0, 1.0));
  let emission_gain = max(0.0, uniforms.density_contrast_gain);
  let emission = exp2(filament * emission_gain * 0.42) - 1.0;
  let volume_detail_scale = select(1.0, 0.72, uniforms.render_layer == 5u);
  let signal = emission * max(0.0, uniforms.density_pass_strength) * occlusion * volume_detail_scale;
  if (signal <= 0.00001) {
    discard;
  }
  let color_weight = max(0.0001, small_sample.a + large_sample.a * 0.18);
  let density_color = max(vec3f(0.0), (small_sample.rgb + large_sample.rgb * 0.18) / color_weight);
  let color = preserve_density_chroma(density_color, 0.32 + filament * 0.38);
  let intensity = signal * particle_gain() * 0.38;
  return vec4f(color * intensity, clamp(intensity, 0.0, 1.0));
}
`,kn=`
${cn}
@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(2) var<storage, read> particles_prev: array<Particle>;
@group(0) @binding(3) var<storage, read> particle_field_values: array<vec4f>;

fn accumulation_particle_field_signal(raw: vec4f) -> f32 {
  return max(0.0, raw.w + length(raw.xyz) * 0.25);
}

fn accumulation_particle_field_cell(x: i32, y: i32, z: i32) -> u32 {
  let w = i32(uniforms.width);
  let h = i32(uniforms.height);
  let d = i32(uniforms.depth);
  let cx = clamp(x, 0, w - 1);
  let cy = clamp(y, 0, h - 1);
  let cz = clamp(z, 0, d - 1);
  return u32((cz * h + cy) * w + cx);
}

fn accumulation_particle_field_at(position: vec3f) -> f32 {
  if (any(position < vec3f(-1.0)) || any(position > vec3f(1.0))) {
    return 0.0;
  }
  let dims = vec3f(f32(uniforms.width), f32(uniforms.height), f32(uniforms.depth));
  let grid = (position + vec3f(1.0)) * 0.5 * dims - vec3f(0.5);
  let base = vec3i(floor(grid));
  let t = fract(grid);
  var accum = vec4f(0.0);
  for (var dz = 0i; dz <= 1i; dz = dz + 1i) {
    for (var dy = 0i; dy <= 1i; dy = dy + 1i) {
      for (var dx = 0i; dx <= 1i; dx = dx + 1i) {
        let weight = mix(1.0 - t.x, t.x, f32(dx)) * mix(1.0 - t.y, t.y, f32(dy)) * mix(1.0 - t.z, t.z, f32(dz));
        accum = accum + particle_field_values[accumulation_particle_field_cell(base.x + dx, base.y + dy, base.z + dz)] * weight;
      }
    }
  }
  return accumulation_particle_field_signal(accum);
}

fn accumulation_particle_stats(position: vec3f, radius: f32) -> ParticleDensityStats {
  let center = accumulation_particle_field_at(position);
  if (radius <= 0.00001) {
    return ParticleDensityStats(center, center, center, 1.0, 0.0);
  }
  return density_stats_from_axis_samples(
    center,
    accumulation_particle_field_at(position + vec3f(radius, 0.0, 0.0)),
    accumulation_particle_field_at(position - vec3f(radius, 0.0, 0.0)),
    accumulation_particle_field_at(position + vec3f(0.0, radius, 0.0)),
    accumulation_particle_field_at(position - vec3f(0.0, radius, 0.0)),
    accumulation_particle_field_at(position + vec3f(0.0, 0.0, radius)),
    accumulation_particle_field_at(position - vec3f(0.0, 0.0, radius))
  );
}

struct AccumulationOut {
  @builtin(position) position: vec4f,
  @location(0) local: vec2f,
  @location(1) weight: f32,
  @location(2) color: vec3f,
};

fn culled_accumulation_splat() -> AccumulationOut {
  var out: AccumulationOut;
  out.position = vec4f(2.0, 2.0, 0.0, 1.0);
  out.local = vec2f(0.0);
  out.weight = 0.0;
  out.color = vec3f(0.0);
  return out;
}

fn accumulation_particle_color(velocity: vec3f, cohort: f32, visual_color: vec4f) -> vec3f {
  if (uniforms.particle_color_mode == 0u) {
    return particle_tint_color();
  }
  let base_gradient = fract(cohort / max(1.0, f32(uniforms.cohorts)) + visual_color.x * 0.17);
  let t = particle_gradient_coordinate(velocity, base_gradient);
  let color = particle_gradient_color(t, uniforms.particle_color_mode);
  return apply_tint(color, particle_tint_color(), 0.26);
}

@vertex
fn accumulation_vs(@builtin(vertex_index) vertex_index: u32) -> AccumulationOut {
  let index = vertex_index / 6u;
  let particle = particles[index];
  let previous_particle = particles_prev[index];
  let particle_lerp_t = particle_lerp_amount(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, uniforms.render_lerp_t);
  let large_motion_fade = particle_large_motion_fade(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, uniforms.render_lerp_t);
  let interp_pos = interpolate_particle_position(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, particle_lerp_t);
  let visual_velocity = particle_visual_velocity(previous_particle, particle, particle_lerp_t);
  let speed_cutoff_visibility = particle_speed_cutoff_visibility(visual_velocity);
  if (speed_cutoff_visibility <= 0.000001) {
    return culled_accumulation_splat();
  }
  let visual_color = interpolate_particle_color(stored_particle_color(previous_particle), stored_particle_color(particle), particle_lerp_t);

  let reject = clamp(uniforms.accumulation_noise_reject, 0.0, 1.0);
  let density_radius = max(max(0.018, uniforms.particle_density_radius), uniforms.accumulation_radius * 0.018);
  let density_stats = accumulation_particle_stats(interp_pos, density_radius);
  let structure_support = density_stats.support;
  let field_confidence = smoothstep(0.0002, 0.006, max(density_stats.peak, density_stats.mean));
  let cutoff = max(uniforms.particle_density_cutoff, mix(0.0012, 0.0095, reject));
  let density_width = max(0.003, cutoff * 1.8 + mix(0.006, 0.016, reject));
  let density_gate_raw = smoothstep(cutoff, cutoff + density_width, mix(density_stats.mean, density_stats.peak, 0.38));
  let density_gate = mix(mix(0.20, 0.10, reject), density_gate_raw, field_confidence);
  let support_min = mix(0.08, 0.30, reject);
  let support_gate = smoothstep(support_min, min(0.94, support_min + 0.28), structure_support);
  let ridge_gate = 1.0;
  let support_term = mix(mix(0.48, 0.30, reject), support_gate, field_confidence);
  let ridge_term = mix(mix(0.86, 0.60, reject), ridge_gate, field_confidence);
  let accumulation_gate = density_gate * mix(0.45, support_term, 0.65) * ridge_term;
  if (accumulation_gate <= 0.0) {
    return culled_accumulation_splat();
  }

  let view_depth = uniforms.distance + world_to_camera(interp_pos).z;
  if (view_depth <= PARTICLE_NEAR) {
    return culled_accumulation_splat();
  }
  let projected = project(interp_pos);
  let local = corner(vertex_index);
  let safe_scale = max(0.05, uniforms.accumulation_radius);
  let splat_radius = particle_splat_radius_ndc(projected.z) * safe_scale;
  let area_norm = 1.0 / max(1.0, safe_scale * safe_scale);
  var render_local = local;
  let direction = particle_velocity_screen_axis(visual_velocity);
  if (length(direction) > 0.000001) {
    let perpendicular = vec2f(-direction.y, direction.x);
    let stretch = 1.0 + clamp(uniforms.filament, 0.0, 1.0) * mix(0.35, 1.45, 1.0 - reject);
    render_local = direction * local.x * stretch + perpendicular * local.y;
  }

  var out: AccumulationOut;
  out.position = vec4f(projected.x + render_local.x * splat_radius.x, projected.y + render_local.y * splat_radius.y, 0.0, 1.0);
  out.local = local;
  out.weight = max(0.0, uniforms.particle_opacity) * clamp(visual_color.w / 0.045, 0.0, 2.0) * accumulation_gate * speed_cutoff_visibility * area_norm * large_motion_fade;
  out.color = accumulation_particle_color(visual_velocity, particle.pos_cohort.w, visual_color);
  return out;
}

@fragment
fn accumulation_splat_fs(in: AccumulationOut) -> @location(0) vec4f {
  let d = dot(in.local, in.local);
  if (d > 1.18 || in.weight <= 0.000001) {
    discard;
  }
  let core = exp(-d * 4.8);
  let skirt = exp(-d * 1.4) * 0.035;
  let glow = (core + skirt) * in.weight;
  return vec4f(in.color * glow, glow);
}
`,An=`
${cn}
@group(0) @binding(0) var accumulation_current: texture_2d<f32>;
@group(0) @binding(2) var accumulation_history: texture_2d<f32>;
@group(0) @binding(3) var accumulation_sampler: sampler;

struct FullscreenOut {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
};

struct AccumulationCompositeOut {
  @location(0) scene: vec4f,
  @location(1) history: vec4f,
};

@vertex
fn fullscreen_vs(@builtin(vertex_index) vertex_index: u32) -> FullscreenOut {
  var positions = array<vec2f, 3>(
    vec2f(-1.0, -3.0),
    vec2f(-1.0, 1.0),
    vec2f(3.0, 1.0)
  );
  let position = positions[vertex_index];
  var out: FullscreenOut;
  out.position = vec4f(position, 0.0, 1.0);
  out.uv = position * 0.5 + vec2f(0.5);
  return out;
}

fn preserve_accumulation_chroma(color: vec3f, energy: f32, shaped: f32) -> vec3f {
  let peak = max(0.0001, max(color.r, max(color.g, color.b)));
  let hue_color = color / peak;
  let chroma_mix = clamp(0.22 + shaped * 0.55 + smoothstep(0.02, 0.75, energy) * 0.22, 0.0, 0.92);
  return saturate_color(mix(color, hue_color, chroma_mix), 1.1 + shaped * 0.85);
}

fn accumulation_sample(uv: vec2f, memory: f32) -> vec4f {
  let current = max(textureSampleLevel(accumulation_current, accumulation_sampler, uv, 0.0), vec4f(0.0));
  let history = max(textureSampleLevel(accumulation_history, accumulation_sampler, uv, 0.0), vec4f(0.0));
  return current + history * memory;
}

@fragment
fn accumulation_composite_fs(in: FullscreenOut) -> AccumulationCompositeOut {
  let sample_uv = vec2f(in.uv.x, 1.0 - in.uv.y);
  let memory = clamp(uniforms.accumulation_memory, 0.0, 0.96);
  let texel = 1.0 / max(uniforms.resolution, vec2f(1.0));
  let center = accumulation_sample(sample_uv, memory);
  let left = accumulation_sample(sample_uv + vec2f(-texel.x, 0.0), memory);
  let right = accumulation_sample(sample_uv + vec2f(texel.x, 0.0), memory);
  let up = accumulation_sample(sample_uv + vec2f(0.0, texel.y), memory);
  let down = accumulation_sample(sample_uv + vec2f(0.0, -texel.y), memory);
  let diagonal_a = accumulation_sample(sample_uv + texel * vec2f(-1.5, 1.5), memory);
  let diagonal_b = accumulation_sample(sample_uv + texel * vec2f(1.5, 1.5), memory);
  let diagonal_c = accumulation_sample(sample_uv + texel * vec2f(-1.5, -1.5), memory);
  let diagonal_d = accumulation_sample(sample_uv + texel * vec2f(1.5, -1.5), memory);
  let wide_left = accumulation_sample(sample_uv + vec2f(-texel.x * 3.0, 0.0), memory);
  let wide_right = accumulation_sample(sample_uv + vec2f(texel.x * 3.0, 0.0), memory);
  let wide_up = accumulation_sample(sample_uv + vec2f(0.0, texel.y * 3.0), memory);
  let wide_down = accumulation_sample(sample_uv + vec2f(0.0, -texel.y * 3.0), memory);
  let wide_diagonal_a = accumulation_sample(sample_uv + texel * vec2f(-3.5, 3.5), memory);
  let wide_diagonal_b = accumulation_sample(sample_uv + texel * vec2f(3.5, 3.5), memory);
  let wide_diagonal_c = accumulation_sample(sample_uv + texel * vec2f(-3.5, -3.5), memory);
  let wide_diagonal_d = accumulation_sample(sample_uv + texel * vec2f(3.5, -3.5), memory);
  let cardinal = (left + right + up + down) * 0.25;
  let diagonal = (diagonal_a + diagonal_b + diagonal_c + diagonal_d) * 0.25;
  let wide_cardinal = (wide_left + wide_right + wide_up + wide_down) * 0.25;
  let wide_diagonal = (wide_diagonal_a + wide_diagonal_b + wide_diagonal_c + wide_diagonal_d) * 0.25;
  let wide = wide_cardinal * 0.65 + wide_diagonal * 0.35;
  let neighborhood = center * 0.38 + cardinal * 0.30 + diagonal * 0.16 + wide * 0.16;
  let neighbor_energy = cardinal.a * 0.58 + diagonal.a * 0.24 + wide.a * 0.18;
  let reject = clamp(uniforms.accumulation_noise_reject, 0.0, 1.0);
  let support_ratio = neighbor_energy / max(center.a, 0.0001);
  let support_floor = mix(0.002, 0.022, reject);
  let support_gate = smoothstep(mix(0.10, 0.28, reject), mix(0.34, 0.70, reject), support_ratio) *
    smoothstep(support_floor, support_floor + mix(0.012, 0.055, reject), neighbor_energy);
  let ridge_energy = max(0.0, center.a - neighbor_energy * mix(0.32, 0.64, reject));
  let ridge_gate = smoothstep(mix(0.0006, 0.0045, reject), mix(0.010, 0.038, reject), ridge_energy + neighbor_energy * 0.35);
  let filament_excess = max(0.0, neighborhood.a - wide.a * mix(0.30, 0.56, reject));
  let coherent_gate = max(support_gate * ridge_gate, support_gate * smoothstep(0.001, 0.032, filament_excess) * 0.42);
  let coherent_energy = (filament_excess + neighborhood.a * coherent_gate * 0.24) * coherent_gate;
  let average_color = neighborhood.rgb / max(0.0001, neighborhood.a);
  let normalized = 1.0 - exp(-coherent_energy * max(0.0, uniforms.accumulation_strength) * 0.22);
  let shaped = pow(clamp(normalized, 0.0, 1.0), max(0.5, uniforms.accumulation_curve));
  let hot_core = exp2(shaped * max(0.0, uniforms.accumulation_strength) * 0.46) - 1.0;
  let soft_body = log2(1.0 + coherent_energy * 0.45) * (1.0 - smoothstep(0.0, 0.85, shaped)) * 0.12;
  let emission = (hot_core * 0.36 + soft_body) * particle_gain();
  var out: AccumulationCompositeOut;
  if (emission <= 0.000001 || coherent_energy <= 0.000001) {
    out.scene = vec4f(0.0);
  } else {
    let color = preserve_accumulation_chroma(max(average_color, vec3f(0.0)), coherent_energy, shaped);
    out.scene = vec4f(color * emission, clamp(emission, 0.0, 1.0));
  }
  let history_gate = clamp(max(coherent_gate, smoothstep(0.02, 0.24, coherent_energy) * 0.65), 0.0, 1.0);
  out.history = vec4f(clamp(neighborhood.rgb * history_gate, vec3f(0.0), vec3f(512.0)), clamp(neighborhood.a * history_gate, 0.0, 512.0));
  return out;
}
`,jn=`
${cn}

const VOLUME_ACCUM_SCALE = 1024.0;
const VOLUME_MAX_ACCUM = 512.0;
const VOLUME_RESOLVE_MAX = 4096.0;
const VOLUME_ACCUM_FIXED_LIMIT = 1073741824i;
const VOLUME_DENSITY_PARTICLE_BUDGET = 262144u;

struct VolumeChunkConfig {
  width: u32,
  height: u32,
  depth: u32,
  particle_count: u32,
  timestep: u32,
  seed: u32,
  cohorts: u32,
  boundary_mode: u32,
  dt: f32,
  sensor_gain: f32,
  sensor_angle: f32,
  sensor_distance: f32,
  mutation_scale: f32,
  global_force_mult: f32,
  drag: f32,
  strafe_power: f32,
  axial_force: f32,
  lateral_force: f32,
  hazard_rate: f32,
  trail_persistence: f32,
  trail_diffusion: f32,
  deposit_radius: f32,
  deposit_mass: f32,
  sigma: f32,
  rule_seed: f32,
  orientation_mix: f32,
  symmetry_axes: u32,
  absolute_orientation: u32,
  initial_conditions: u32,
  deposit_tap_radius: u32,
  hue_sensitivity: f32,
  color_by_cohort: u32,
  step_time_scale: f32,
  visual_lerp_t: f32,
  recycle_cutoff: f32,
  recycle_enabled: u32,
  particle_offset: u32,
  active_particle_count: u32,
  domain_shape: u32,
};

@group(0) @binding(0) var<storage, read_write> volume_accum: array<atomic<i32>>;
@group(0) @binding(2) var<storage, read> volume_particles: array<Particle>;
@group(0) @binding(3) var<storage, read> volume_particles_prev: array<Particle>;
@group(0) @binding(4) var<storage, read_write> volume_small_out: array<vec4f>;
@group(0) @binding(5) var volume_small_texture: texture_storage_3d<rgba16float, write>;
@group(0) @binding(6) var<storage, read> volume_src: array<vec4f>;
@group(0) @binding(7) var<storage, read_write> volume_dst: array<vec4f>;
@group(0) @binding(8) var volume_large_texture: texture_storage_3d<rgba16float, write>;
@group(0) @binding(9) var<uniform> chunk_config: VolumeChunkConfig;
@group(0) @binding(10) var<storage, read> volume_particle_field_values: array<vec4f>;

fn volume_flat(cell: vec3u) -> u32 {
  return (cell.z * uniforms.height + cell.y) * uniforms.width + cell.x;
}

fn volume_cell_from_flat(flat: u32) -> vec3u {
  let x = flat % uniforms.width;
  let y = (flat / uniforms.width) % uniforms.height;
  let z = flat / (uniforms.width * uniforms.height);
  return vec3u(x, y, z);
}

fn volume_flat_clamped(x: i32, y: i32, z: i32) -> u32 {
  let cx = u32(clamp(x, 0i, i32(uniforms.width) - 1i));
  let cy = u32(clamp(y, 0i, i32(uniforms.height) - 1i));
  let cz = u32(clamp(z, 0i, i32(uniforms.depth) - 1i));
  return (cz * uniforms.height + cy) * uniforms.width + cx;
}

fn volume_particle_color(velocity: vec3f, cohort: f32, visual_color: vec4f) -> vec3f {
  if (uniforms.particle_color_mode == 0u) {
    return particle_tint_color();
  }
  let base_gradient = fract(cohort / max(1.0, f32(uniforms.cohorts)) + visual_color.x * 0.17);
  let t = particle_gradient_coordinate(velocity, base_gradient);
  let color = particle_gradient_color(t, uniforms.particle_color_mode);
  let tinted = apply_tint(color, particle_tint_color(), 0.28);
  let peak = max(0.0001, max(tinted.r, max(tinted.g, tinted.b)));
  let hue_color = tinted / peak;
  return saturate_color(mix(tinted, hue_color, 0.58), 1.78);
}

fn volume_particle_density_signal(raw: vec4f) -> f32 {
  return max(0.0, raw.w + length(raw.xyz) * 0.25);
}

fn volume_particle_field_cell(x: i32, y: i32, z: i32) -> u32 {
  let w = i32(uniforms.width);
  let h = i32(uniforms.height);
  let d = i32(uniforms.depth);
  let cx = clamp(x, 0, w - 1);
  let cy = clamp(y, 0, h - 1);
  let cz = clamp(z, 0, d - 1);
  return u32((cz * h + cy) * w + cx);
}

fn volume_particle_density_at(position: vec3f) -> f32 {
  if (any(position < vec3f(-1.0)) || any(position > vec3f(1.0))) {
    return 0.0;
  }
  let dims = vec3f(f32(uniforms.width), f32(uniforms.height), f32(uniforms.depth));
  let grid = (position + vec3f(1.0)) * 0.5 * dims - vec3f(0.5);
  let base = vec3i(floor(grid));
  let t = fract(grid);
  var accum = vec4f(0.0);
  for (var dz = 0i; dz <= 1i; dz = dz + 1i) {
    for (var dy = 0i; dy <= 1i; dy = dy + 1i) {
      for (var dx = 0i; dx <= 1i; dx = dx + 1i) {
        let weight = mix(1.0 - t.x, t.x, f32(dx)) * mix(1.0 - t.y, t.y, f32(dy)) * mix(1.0 - t.z, t.z, f32(dz));
        accum = accum + volume_particle_field_values[volume_particle_field_cell(base.x + dx, base.y + dy, base.z + dz)] * weight;
      }
    }
  }
  return volume_particle_density_signal(accum);
}

fn volume_particle_density_stats(position: vec3f, radius: f32) -> ParticleDensityStats {
  let center = volume_particle_density_at(position);
  if (radius <= 0.00001) {
    return ParticleDensityStats(center, center, center, 1.0, 0.0);
  }
  return density_stats_from_axis_samples(
    center,
    volume_particle_density_at(position + vec3f(radius, 0.0, 0.0)),
    volume_particle_density_at(position - vec3f(radius, 0.0, 0.0)),
    volume_particle_density_at(position + vec3f(0.0, radius, 0.0)),
    volume_particle_density_at(position - vec3f(0.0, radius, 0.0)),
    volume_particle_density_at(position + vec3f(0.0, 0.0, radius)),
    volume_particle_density_at(position - vec3f(0.0, 0.0, radius))
  );
}

fn volume_particle_density_neighborhood(position: vec3f) -> f32 {
  return volume_particle_density_stats(position, max(0.0, uniforms.particle_density_radius)).peak;
}

fn add_volume_density_flat(flat: u32, color: vec3f, weight: f32) {
  let density = clamp(weight, 0.0, VOLUME_MAX_ACCUM);
  if (density <= 0.0) {
    return;
  }
  let base = flat * 4u;
  let color_sum = clamp(color * density, vec3f(0.0), vec3f(VOLUME_MAX_ACCUM));
  let packed = vec4i(round(vec4f(color_sum, density) * VOLUME_ACCUM_SCALE));
  volume_atomic_add_saturating(&volume_accum[base + 0u], packed.x);
  volume_atomic_add_saturating(&volume_accum[base + 1u], packed.y);
  volume_atomic_add_saturating(&volume_accum[base + 2u], packed.z);
  volume_atomic_add_saturating(&volume_accum[base + 3u], packed.w);
}

fn volume_atomic_add_saturating(slot: ptr<storage, atomic<i32>, read_write>, delta: i32) {
  if (delta <= 0i) {
    return;
  }
  var old_value = atomicLoad(slot);
  for (var attempt = 0u; attempt < 8u; attempt = attempt + 1u) {
    let clamped_old = clamp(old_value, 0i, VOLUME_ACCUM_FIXED_LIMIT);
    if (clamped_old >= VOLUME_ACCUM_FIXED_LIMIT) {
      return;
    }
    let next_value = clamped_old + min(delta, VOLUME_ACCUM_FIXED_LIMIT - clamped_old);
    let result = atomicCompareExchangeWeak(slot, old_value, next_value);
    if (result.exchanged) {
      return;
    }
    old_value = result.old_value;
  }
}

fn add_volume_density_trilinear(position: vec3f, color: vec3f, weight: f32) {
  if (weight <= 0.0 || any(position < vec3f(-1.0)) || any(position > vec3f(1.0))) {
    return;
  }
  let dims = vec3f(f32(uniforms.width), f32(uniforms.height), f32(uniforms.depth));
  let grid = (position + vec3f(1.0)) * 0.5 * dims - vec3f(0.5);
  let base = vec3i(floor(grid));
  let t = fract(grid);
  for (var dz = 0i; dz <= 1i; dz = dz + 1i) {
    for (var dy = 0i; dy <= 1i; dy = dy + 1i) {
      for (var dx = 0i; dx <= 1i; dx = dx + 1i) {
        let tri_weight = mix(1.0 - t.x, t.x, f32(dx)) * mix(1.0 - t.y, t.y, f32(dy)) * mix(1.0 - t.z, t.z, f32(dz));
        add_volume_density_flat(volume_flat_clamped(base.x + dx, base.y + dy, base.z + dz), color, weight * tri_weight);
      }
    }
  }
}

fn load_volume_accum(flat: u32) -> vec4f {
  let base = flat * 4u;
  return vec4f(
    f32(atomicLoad(&volume_accum[base + 0u])),
    f32(atomicLoad(&volume_accum[base + 1u])),
    f32(atomicLoad(&volume_accum[base + 2u])),
    f32(atomicLoad(&volume_accum[base + 3u]))
  ) / VOLUME_ACCUM_SCALE;
}

fn clamp_volume_density_value(value: vec4f) -> vec4f {
  return clamp(value, vec4f(0.0), vec4f(VOLUME_RESOLVE_MAX));
}

fn volume_density_particle_stride() -> u32 {
  return max(1u, (uniforms.particle_count + VOLUME_DENSITY_PARTICLE_BUDGET - 1u) / VOLUME_DENSITY_PARTICLE_BUDGET);
}

fn volume_blur_radius() -> i32 {
  return i32(clamp(round(max(0.0, uniforms.density_large_scale) * 0.14), 0.0, 8.0));
}

fn volume_blur_weight(offset: i32, radius: i32) -> f32 {
  if (radius <= 0i) {
    return select(0.0, 1.0, offset == 0i);
  }
  let sigma = max(0.65, f32(radius) * 0.46);
  let x = f32(offset);
  return exp(-(x * x) / max(0.0001, 2.0 * sigma * sigma));
}

fn blur_volume_axis(flat: u32, axis: u32) -> vec4f {
  let cell = volume_cell_from_flat(flat);
  let radius = volume_blur_radius();
  var sum = vec4f(0.0);
  var weight_sum = 0.0;
  for (var offset = -8i; offset <= 8i; offset = offset + 1i) {
    if (abs(offset) > radius) {
      continue;
    }
    let weight = volume_blur_weight(offset, radius);
    var sample_flat = flat;
    if (axis == 0u) {
      sample_flat = volume_flat_clamped(i32(cell.x) + offset, i32(cell.y), i32(cell.z));
    } else if (axis == 1u) {
      sample_flat = volume_flat_clamped(i32(cell.x), i32(cell.y) + offset, i32(cell.z));
    } else {
      sample_flat = volume_flat_clamped(i32(cell.x), i32(cell.y), i32(cell.z) + offset);
    }
    sum = sum + max(volume_src[sample_flat], vec4f(0.0)) * weight;
    weight_sum = weight_sum + weight;
  }
  return clamp_volume_density_value(sum / max(0.0001, weight_sum));
}

@compute @workgroup_size(256)
fn clear_volume_density(@builtin(global_invocation_id) gid: vec3u) {
  let lane = gid.x;
  if (lane >= uniforms.voxel_count * 4u) {
    return;
  }
  atomicStore(&volume_accum[lane], 0);
}

@compute @workgroup_size(256)
fn deposit_volume_density(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.x;
  let stride = volume_density_particle_stride();
  let source_i = i * stride + (chunk_config.particle_offset % stride);
  if (source_i >= chunk_config.active_particle_count) {
    return;
  }
  let particle = volume_particles[source_i];
  let previous_particle = volume_particles_prev[source_i];
  let particle_lerp_t = particle_lerp_amount(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, uniforms.render_lerp_t);
  let large_motion_fade = particle_large_motion_fade(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, uniforms.render_lerp_t);
  let interp_pos = interpolate_particle_position(previous_particle.pos_cohort.xyz, particle.pos_cohort.xyz, particle_lerp_t);
  let visual_velocity = particle_visual_velocity(previous_particle, particle, particle_lerp_t);
  let speed_cutoff_visibility = particle_speed_cutoff_visibility(visual_velocity);
  if (speed_cutoff_visibility <= 0.000001) {
    return;
  }
  let visual_color = interpolate_particle_color(stored_particle_color(previous_particle), stored_particle_color(particle), particle_lerp_t);
  var density_fade = 1.0;
  if (uniforms.particle_density_cutoff > 0.0) {
    let cutoff_stats = volume_particle_density_stats(interp_pos, max(0.0, uniforms.particle_density_radius));
    let local_density = cutoff_stats.peak;
    let cutoff = uniforms.particle_density_cutoff;
    density_fade = smoothstep(cutoff, cutoff * PARTICLE_CUTOFF_FADE, local_density);
    if (density_fade <= 0.0) {
      return;
    }
  }
  let alpha_weight = clamp(visual_color.w / 0.045, 0.0, 2.0);
  let count_normalizer = clamp(f32(uniforms.voxel_count) / max(1.0, f32(uniforms.particle_count)), 0.02, 24.0);
  let density_weight = max(0.0, uniforms.particle_opacity) * alpha_weight * density_fade * speed_cutoff_visibility * large_motion_fade * max(0.04, uniforms.density_small_scale) * count_normalizer * f32(stride) * 0.22;
  if (density_weight <= 0.000001) {
    return;
  }
  let color = volume_particle_color(visual_velocity, particle.pos_cohort.w, visual_color);
  add_volume_density_trilinear(interp_pos, color, density_weight);
}

@compute @workgroup_size(4, 4, 4)
fn resolve_volume_density(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= uniforms.width || gid.y >= uniforms.height || gid.z >= uniforms.depth) {
    return;
  }
  let flat = (gid.z * uniforms.height + gid.y) * uniforms.width + gid.x;
  let raw = clamp_volume_density_value(load_volume_accum(flat));
  volume_small_out[flat] = raw;
  textureStore(volume_small_texture, vec3i(gid), raw);
}

@compute @workgroup_size(256)
fn blur_volume_density_x(@builtin(global_invocation_id) gid: vec3u) {
  let flat = gid.x;
  if (flat >= uniforms.voxel_count) {
    return;
  }
  volume_dst[flat] = blur_volume_axis(flat, 0u);
}

@compute @workgroup_size(256)
fn blur_volume_density_y(@builtin(global_invocation_id) gid: vec3u) {
  let flat = gid.x;
  if (flat >= uniforms.voxel_count) {
    return;
  }
  volume_dst[flat] = blur_volume_axis(flat, 1u);
}

@compute @workgroup_size(4, 4, 4)
fn blur_volume_density_z(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= uniforms.width || gid.y >= uniforms.height || gid.z >= uniforms.depth) {
    return;
  }
  let flat = (gid.z * uniforms.height + gid.y) * uniforms.width + gid.x;
  let blurred = clamp_volume_density_value(blur_volume_axis(flat, 2u));
  textureStore(volume_large_texture, vec3i(gid), blurred);
}

// --- Optimization C: half-resolution large/blurred channel ---
// The large channel is a heavily-blurred, low-weight veil, so it can be built at half grid
// resolution. We downsample the full-res resolved small channel into a half-res grid, blur it
// there (1/8 the voxels), and the raymarch samples the half-res large texture transparently
// (normalized trilinear). Half dims are derived in-shader; no new uniforms, no re-deposit, and
// the full-res path above is left untouched (toggle OFF == baseline).
fn volume_half_dims() -> vec3u {
  return vec3u((uniforms.width + 1u) / 2u, (uniforms.height + 1u) / 2u, (uniforms.depth + 1u) / 2u);
}
fn volume_half_voxel_count() -> u32 {
  let d = volume_half_dims();
  return d.x * d.y * d.z;
}
fn volume_cell_from_flat_half(flat: u32) -> vec3u {
  let d = volume_half_dims();
  return vec3u(flat % d.x, (flat / d.x) % d.y, flat / (d.x * d.y));
}
fn volume_flat_clamped_half(x: i32, y: i32, z: i32) -> u32 {
  let d = volume_half_dims();
  let cx = u32(clamp(x, 0i, i32(d.x) - 1i));
  let cy = u32(clamp(y, 0i, i32(d.y) - 1i));
  let cz = u32(clamp(z, 0i, i32(d.z) - 1i));
  return (cz * d.y + cy) * d.x + cx;
}
fn blur_volume_axis_half(flat: u32, axis: u32) -> vec4f {
  let cell = volume_cell_from_flat_half(flat);
  let radius = volume_blur_radius();
  var sum = vec4f(0.0);
  var weight_sum = 0.0;
  for (var offset = -8i; offset <= 8i; offset = offset + 1i) {
    if (abs(offset) > radius) {
      continue;
    }
    let weight = volume_blur_weight(offset, radius);
    var sample_flat = flat;
    if (axis == 0u) {
      sample_flat = volume_flat_clamped_half(i32(cell.x) + offset, i32(cell.y), i32(cell.z));
    } else if (axis == 1u) {
      sample_flat = volume_flat_clamped_half(i32(cell.x), i32(cell.y) + offset, i32(cell.z));
    } else {
      sample_flat = volume_flat_clamped_half(i32(cell.x), i32(cell.y), i32(cell.z) + offset);
    }
    sum = sum + max(volume_src[sample_flat], vec4f(0.0)) * weight;
    weight_sum = weight_sum + weight;
  }
  return clamp_volume_density_value(sum / max(0.0001, weight_sum));
}

// Average each 2x2x2 block of the full-res resolved small channel (volume_src) into one half-res
// voxel (volume_dst). Averaging (not summing) preserves per-voxel density, so brightness is kept.
@compute @workgroup_size(4, 4, 4)
fn downsample_volume_small(@builtin(global_invocation_id) gid: vec3u) {
  let half = volume_half_dims();
  if (gid.x >= half.x || gid.y >= half.y || gid.z >= half.z) {
    return;
  }
  var sum = vec4f(0.0);
  var n = 0.0;
  for (var dz = 0u; dz < 2u; dz = dz + 1u) {
    for (var dy = 0u; dy < 2u; dy = dy + 1u) {
      for (var dx = 0u; dx < 2u; dx = dx + 1u) {
        let sx = gid.x * 2u + dx;
        let sy = gid.y * 2u + dy;
        let sz = gid.z * 2u + dz;
        if (sx >= uniforms.width || sy >= uniforms.height || sz >= uniforms.depth) {
          continue;
        }
        let sflat = (sz * uniforms.height + sy) * uniforms.width + sx;
        sum = sum + max(volume_src[sflat], vec4f(0.0));
        n = n + 1.0;
      }
    }
  }
  let dflat = (gid.z * half.y + gid.y) * half.x + gid.x;
  volume_dst[dflat] = clamp_volume_density_value(sum / max(1.0, n));
}

@compute @workgroup_size(256)
fn blur_volume_density_x_half(@builtin(global_invocation_id) gid: vec3u) {
  let flat = gid.x;
  if (flat >= volume_half_voxel_count()) {
    return;
  }
  volume_dst[flat] = blur_volume_axis_half(flat, 0u);
}

@compute @workgroup_size(256)
fn blur_volume_density_y_half(@builtin(global_invocation_id) gid: vec3u) {
  let flat = gid.x;
  if (flat >= volume_half_voxel_count()) {
    return;
  }
  volume_dst[flat] = blur_volume_axis_half(flat, 1u);
}

@compute @workgroup_size(4, 4, 4)
fn blur_volume_density_z_half(@builtin(global_invocation_id) gid: vec3u) {
  let half = volume_half_dims();
  if (gid.x >= half.x || gid.y >= half.y || gid.z >= half.z) {
    return;
  }
  let flat = (gid.z * half.y + gid.y) * half.x + gid.x;
  textureStore(volume_large_texture, vec3i(gid), clamp_volume_density_value(blur_volume_axis_half(flat, 2u)));
}
`,Mn=`
${cn}

@group(0) @binding(0) var volume_small_texture: texture_3d<f32>;
@group(0) @binding(2) var volume_large_texture: texture_3d<f32>;
@group(0) @binding(3) var volume_density_sampler: sampler;

struct FullscreenOut {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
};

struct VolumeDensitySample {
  small: vec4f,
  large: vec4f,
};

@vertex
fn volume_density_vs(@builtin(vertex_index) vertex_index: u32) -> FullscreenOut {
  var positions = array<vec2f, 3>(
    vec2f(-1.0, -3.0),
    vec2f(-1.0, 1.0),
    vec2f(3.0, 1.0)
  );
  let position = positions[vertex_index];
  var out: FullscreenOut;
  out.position = vec4f(position, 0.0, 1.0);
  out.uv = position * 0.5 + vec2f(0.5);
  return out;
}

fn intersect_volume_box(origin: vec3f, direction: vec3f) -> vec2f {
  let inv_dir = 1.0 / direction;
  let t0 = (vec3f(-1.0) - origin) * inv_dir;
  let t1 = (vec3f(1.0) - origin) * inv_dir;
  let tmin3 = min(t0, t1);
  let tmax3 = max(t0, t1);
  let tmin = max(max(tmin3.x, tmin3.y), tmin3.z);
  let tmax = min(min(tmax3.x, tmax3.y), tmax3.z);
  return vec2f(tmin, tmax);
}

fn volume_hash21(p: vec2f) -> f32 {
  let h = dot(p, vec2f(127.1, 311.7));
  return fract(sin(h) * 43758.5453123);
}

fn volume_interleaved_gradient_noise(pixel: vec2f, frame: u32) -> f32 {
  let frame_offset = f32(frame % 64u) * 0.071;
  return fract(52.9829189 * fract(0.06711056 * (pixel.x + frame_offset) + 0.00583715 * (pixel.y - frame_offset)));
}

fn volume_density_steps() -> u32 {
  let requested = f32(uniforms.ray_steps) * clamp(uniforms.fog_step_scale, 0.125, 1.0);
  return u32(clamp(round(requested / 4.0) * 4.0, 16.0, 384.0));
}

fn sample_volume_density(position: vec3f) -> VolumeDensitySample {
  if (any(position < vec3f(-1.0)) || any(position > vec3f(1.0))) {
    return VolumeDensitySample(vec4f(0.0), vec4f(0.0));
  }
  let uvw = clamp((position + vec3f(1.0)) * 0.5, vec3f(0.0), vec3f(1.0));
  let small = textureSampleLevel(volume_small_texture, volume_density_sampler, uvw, 0.0);
  let large = textureSampleLevel(volume_large_texture, volume_density_sampler, uvw, 0.0);
  return VolumeDensitySample(max(small, vec4f(0.0)), max(large, vec4f(0.0)));
}

fn volume_density_color(sample: VolumeDensitySample, filament: f32) -> vec3f {
  let large_color_mix = mix(0.04, 0.014, clamp(filament, 0.0, 1.0));
  let color_weight = max(0.0001, sample.small.a + sample.large.a * large_color_mix);
  let color_sum = sample.small.rgb + sample.large.rgb * large_color_mix;
  let color = max(vec3f(0.0), color_sum / color_weight);
  let peak = max(0.0001, max(color.r, max(color.g, color.b)));
  let hue_color = color / peak;
  let chroma = mix(color, hue_color, 0.12 + filament * 0.18);
  return saturate_color(chroma, 1.10 + filament * 0.46);
}

@fragment
fn volume_density_fs(in: FullscreenOut) -> @location(0) vec4f {
  let aspect = uniforms.resolution.x / uniforms.resolution.y;
  var uv = in.uv * 2.0 - vec2f(1.0);
  uv.x = uv.x * aspect;
  let origin = camera_to_world(vec3f(-uniforms.camera_pan_x, -uniforms.camera_pan_y, -uniforms.distance));
  let direction = normalize(camera_to_world(vec3f(uv.x / uniforms.focal_k, uv.y / uniforms.focal_k, 1.0)));
  let hit = intersect_volume_box(origin, direction);
  var t = max(0.0, hit.x);
  let t_end = hit.y;
  if (t_end <= t) {
    return vec4f(0.0);
  }
  let steps = volume_density_steps();
  let dt = (t_end - t) / f32(steps);
  let pixel = in.uv * uniforms.resolution;
  let jitter = select(volume_hash21(pixel), volume_interleaved_gradient_noise(pixel, uniforms.fog_frame), uniforms.fog_blue_noise == 1u);
  var ray_t = t + dt * jitter;
  var marched = 0u;
  var radiance = vec3f(0.0);
  var dominant_color = vec3f(0.0);
  var dominant_signal = 0.0;
  var transmittance = 1.0;
  let ridge_mix = clamp(uniforms.density_contrast_balance, 0.0, 1.5);
  let ridge_amount = clamp(ridge_mix, 0.0, 1.0);
  let support_width = mix(0.06, 0.22, clamp(1.0 - ridge_mix * 0.50, 0.0, 1.0));
  for (var step = 0u; step < 384u; step = step + 1u) {
    if (marched >= steps || transmittance <= 0.035) {
      break;
    }
    let position = origin + direction * ray_t;
    let sample = sample_volume_density(position);
    let boundary_distance = 1.0 - max(abs(position.x), max(abs(position.y), abs(position.z)));
    let boundary_fade = smoothstep(0.02, 0.34, boundary_distance);
    let small_density = sample.small.a;
    let large_density = sample.large.a;
    let small_field = log2(1.0 + small_density * (0.85 + max(0.0, uniforms.density_small_scale) * 0.35));
    let large_field = log2(1.0 + large_density * 1.55);
    let support = smoothstep(uniforms.density_large_threshold, uniforms.density_large_threshold + support_width, large_field);
    if (uniforms.empty_space_skip == 1u && support <= max(0.001, uniforms.empty_space_threshold)) {
      let stride = min(u32(max(1.0, uniforms.empty_space_stride)), steps - marched);
      ray_t = ray_t + dt * f32(stride);
      marched = marched + stride;
      continue;
    }
    let core_peak = max(0.0, small_field - large_field * mix(0.34, 0.86, ridge_amount));
    let core_mask = smoothstep(0.09, 0.40, core_peak * (0.85 + ridge_mix * 0.45));
    let contrast_gate = smoothstep(0.045, 0.28 + ridge_mix * 0.18, core_peak);
    let structural_gate = contrast_gate * mix(0.72, 1.0, core_mask);
    let ridge_field = max(0.0, small_field * (1.02 + ridge_mix * 0.78) - large_field * (0.34 + ridge_mix * 0.62));
    let body_field = small_field * max(0.0, 1.0 - ridge_amount * 1.15);
    let density_response = max(0.0, ridge_field * (0.98 + ridge_mix * 0.58) * (0.68 + core_mask * 0.78) + body_field * 0.002) * support * boundary_fade * structural_gate;
    let filament = pow(1.0 - exp(-density_response * max(0.05, uniforms.density)), max(0.25, uniforms.density_emission_power));
    let glow_gate = smoothstep(mix(0.08, 0.20, ridge_amount), mix(0.28, 0.56, ridge_amount), filament);
    let emission_drive = clamp(filament * max(0.0, uniforms.density_contrast_gain) * (0.30 + core_mask * 0.32), 0.0, 10.0);
    let curved_emission = exp2(emission_drive * mix(0.32, 0.48, core_mask)) - 1.0;
    let exponential_emission = curved_emission * glow_gate * (0.72 + core_mask * 0.28);
    let filament_signal = filament * (0.08 + core_mask * 0.30) * glow_gate;
    let signal = (filament_signal + exponential_emission) * max(0.0, uniforms.density_pass_strength);
    if (signal > 0.000001) {
      let sample_color = volume_density_color(sample, filament);
      let step_gain = dt * particle_gain() * 0.12;
      let occlusion = mix(1.0, transmittance, clamp(uniforms.density_occlusion, 0.0, 1.0));
      let sample_signal = signal * step_gain * occlusion;
      if (sample_signal > dominant_signal) {
        dominant_signal = sample_signal;
        dominant_color = sample_color;
      }
      radiance = radiance + sample_color * sample_signal;
      let absorption = clamp(filament * uniforms.density_occlusion * dt * 5.5, 0.0, 0.34);
      transmittance = transmittance * (1.0 - absorption);
    }
    ray_t = ray_t + dt;
    marched = marched + 1u;
  }
  if (max(radiance.r, max(radiance.g, radiance.b)) <= 0.000001) {
    discard;
  }
  let radiance_peak = max(0.0001, max(radiance.r, max(radiance.g, radiance.b)));
  let dominant_peak = max(0.0001, max(dominant_color.r, max(dominant_color.g, dominant_color.b)));
  let dominant_hue = dominant_color / dominant_peak;
  let chroma_mix = clamp(0.04 + ridge_amount * 0.12, 0.0, 0.18);
  let final_radiance = mix(radiance, dominant_hue * radiance_peak, chroma_mix) * 0.08;
  return vec4f(max(final_radiance, vec3f(0.0)), clamp(1.0 - transmittance, 0.0, 1.0));
}
`;on(!1),on(!0),tn(!1),tn(!0),an(!1);var Nn=`
struct RenderUniforms {
  resolution: vec2f,
  width: u32,
  height: u32,
  depth: u32,
  particle_count: u32,
  voxel_count: u32,
  timestep: u32,
  density: f32,
  exposure: f32,
  focus_distance: f32,
  aperture: f32,
  overlay: u32,
  palette: u32,
  filament: f32,
  yaw_cos: f32,
  yaw_sin: f32,
  pitch_cos: f32,
  pitch_sin: f32,
  distance: f32,
  ray_steps: u32,
  fog_step_scale: f32,
  fog_temporal_blend: f32,
  fog_blue_noise: u32,
  fog_frame: u32,
  field_texture_mode: u32,
  empty_space_skip: u32,
  empty_space_threshold: f32,
  empty_space_stride: f32,
  particle_size_px: f32,
  particle_min_px: f32,
  particle_max_px: f32,
  particle_opacity: f32,
  particle_blend_mode: u32,
  particle_density_cutoff: f32,
  particle_density_radius: f32,
  trail_opacity: f32,
  trail_threshold: f32,
  render_layer: u32,
  camera_pan_x: f32,
  camera_pan_y: f32,
  trail_color_mode: u32,
  fog_tint_r: f32,
  fog_tint_g: f32,
  fog_tint_b: f32,
  particle_tint_r: f32,
  particle_tint_g: f32,
  particle_tint_b: f32,
  scene_brightness: f32,
  particle_brightness: f32,
  fog_brightness: f32,
  particle_color_mode: u32,
  particle_velocity_stretch: u32,
  particle_stretch: f32,
  particle_gradient_sensitivity: f32,
  focal_k: f32,
  dof_blur: f32,
  dof_debug: u32,
  render_lerp_t: f32,
  dof_enabled: u32,
  density_pass_strength: f32,
  density_small_scale: f32,
  density_large_scale: f32,
  density_large_threshold: f32,
  density_contrast_gain: f32,
  density_contrast_balance: f32,
  density_emission_power: f32,
  density_occlusion: f32,
  cohorts: u32,
  particle_slow_cutoff: f32,
  particle_glow_core: f32,
  particle_hot_core: f32,
  accumulation_strength: f32,
  accumulation_radius: f32,
  accumulation_curve: f32,
  accumulation_memory: f32,
  accumulation_noise_reject: f32,
  particle_density_reference: f32,
  particle_density_normalize: f32,
  particle_density_softness: f32,
  particle_support_mask: f32,
  particle_support_radius: f32,
  particle_support_neighbors: f32,
  particle_support_flow: f32,
  particle_support_grid_size: u32,
  particle_stretch_min: f32,
  particle_stretch_speed: f32,
  particle_speed_cutoff: f32,
  variation_master: f32,
  variation_time: f32,
  variation_drift: f32,
  variation_noise_mix: f32,
  variation_freq: f32,
  variation_octaves: u32,
  variation_gain: f32,
  variation_lacunarity: f32,
  variation_size_amount: f32,
  variation_size_curve: f32,
  variation_size_min: f32,
  variation_size_max: f32,
  variation_bright_amount: f32,
  variation_bright_curve: f32,
  variation_bright_min: f32,
  variation_bright_max: f32,
  variation_opacity_amount: f32,
  variation_opacity_curve: f32,
  variation_opacity_min: f32,
  variation_opacity_max: f32,
  variation_color_amount: f32,
  variation_color_curve: f32,
  variation_color_min: f32,
  variation_color_max: f32,
  domain_shape: u32,
  audio_low: f32,
  audio_mid: f32,
  audio_high: f32,
};

@group(0) @binding(0) var<uniform> uniforms: RenderUniforms;

struct FullscreenOut {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
};

@vertex
fn fullscreen_vs(@builtin(vertex_index) vertex_index: u32) -> FullscreenOut {
  var positions = array<vec2f, 3>(
    vec2f(-1.0, -3.0),
    vec2f(-1.0, 1.0),
    vec2f(3.0, 1.0)
  );
  let position = positions[vertex_index];
  var out: FullscreenOut;
  out.position = vec4f(position, 0.0, 1.0);
  out.uv = position * 0.5 + vec2f(0.5);
  return out;
}

@fragment
fn overlay_fs(in: FullscreenOut) -> @location(0) vec4f {
  let uv = in.uv;
  let frame = step(0.045, uv.x) * step(0.045, uv.y) * step(uv.x, 0.955) * step(uv.y, 0.955);
  let outer = step(0.034, uv.x) * step(0.034, uv.y) * step(uv.x, 0.966) * step(uv.y, 0.966);
  let border = (outer - frame) * f32(uniforms.overlay);
  return vec4f(vec3f(1.0, 0.82, 0.42) * border * 0.42, border * 0.55);
}
`,Pn=12,Fn=1e-9;function In(e,t){return Number.isFinite(e[t])&&Number.isFinite(e[t+1])&&Number.isFinite(e[t+2])}function Ln(e,t){let n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return n>1?n-=2:n<-1&&(n+=2),r>1?r-=2:r<-1&&(r+=2),i>1?i-=2:i<-1&&(i+=2),[n,r,i]}function Rn(e,t){return Math.abs(t[0]-e[0])>1||Math.abs(t[1]-e[1])>1||Math.abs(t[2]-e[2])>1}function zn(e){return Math.hypot(e[0],e[1],e[2])}function Bn(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Vn(e,t){return[e[t],e[t+1],e[t+2]]}function Hn(e,t,n,r){let i=[];if(e.length===0)return i;let a=Math.max(1,Math.floor((e.length-1)/Math.max(1,r-1)));for(let r=0;r<e.length;r+=a){let a=t*n;i.push({step:r,position:Vn(e[r],a)})}let o=e.length-1,s=t*n;return(i.length===0||i[i.length-1].step!==o)&&i.push({step:o,position:Vn(e[o],s)}),i}function Un(e,t={}){let n=Math.max(4,Math.floor(t.stride??Pn)),r=e.length,i=e.map(e=>Math.floor(e.length/n)),a=Math.max(0,Math.min(t.particleCount??1/0,...i)),o=Math.max(1,Math.floor(t.topK??12)),s=Math.max(0,t.minStepDistance??2e-5),c=Math.max(2,Math.floor(t.sampleCount??10)),l=Math.max(0,t.snapDistance??.35),u=[],d=new Map;if(r<3||a<=0)return{frameCount:r,particleCount:a,analyzedParticles:0,snapDistance:l,top:[],cohorts:[]};for(let t=0;t<a;t+=1){let i=t*n;if(!e.every(e=>In(e,i)))continue;let a=0,o=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=Vn(e[0],i),b=Vn(e[r-1],i),x=Math.floor(e[r-1][i+3]);for(let t=1;t<r;t+=1){let n=Vn(e[t-1],i),r=Vn(e[t],i),s=Ln(n,r);Rn(n,r)&&(v+=1);let c=zn(s);if(a+=c,m+=c,h+=1,g=Math.max(g,c),c>l&&(_+=1),t>=2){let a=Vn(e[t-2],i);o+=zn(Ln(a,r));let l=Ln(a,n),u=zn(l);c>Fn&&u>Fn&&(f+=Math.max(0,-Bn(s,l)/(c*u)),p+=1)}}let S=a/Math.max(1,h),C=d.get(x)??{particleCount:0,stepDistanceSum:0,stepCount:0,maxStepDistance:0,snapRiskCount:0,wrapCrossingCount:0};if(C.particleCount+=1,C.stepDistanceSum+=a,C.stepCount+=h,C.maxStepDistance=Math.max(C.maxStepDistance,g),C.snapRiskCount+=_,C.wrapCrossingCount+=v,d.set(x,C),S<s)continue;let w=o/Math.max(1,r-2),ee=f/Math.max(1,p),T=zn(Ln(y,b))/Math.max(Fn,m),te=S/Math.max(Fn,w)*ee*(1-Math.min(1,T));te<=0||u.push({index:t,id:e[r-1][i+7],cohort:x,score:te,reversalMean:ee,stepDistanceMean:S,maxStepDistance:g,snapRiskFraction:_/Math.max(1,h),wrapCrossingFraction:v/Math.max(1,h),twoBackDistanceMean:w,netToPathRatio:T,samples:Hn(e,t,n,c)})}u.sort((e,t)=>t.score-e.score);let f=[...d.entries()].map(([e,t])=>({cohort:e,particleCount:t.particleCount,stepDistanceMean:t.stepDistanceSum/Math.max(1,t.stepCount),maxStepDistance:t.maxStepDistance,snapRiskFraction:t.snapRiskCount/Math.max(1,t.stepCount),snapRiskCount:t.snapRiskCount,wrapCrossingFraction:t.wrapCrossingCount/Math.max(1,t.stepCount),wrapCrossingCount:t.wrapCrossingCount})).sort((e,t)=>t.snapRiskFraction-e.snapRiskFraction||t.wrapCrossingFraction-e.wrapCrossingFraction||t.maxStepDistance-e.maxStepDistance);return{frameCount:r,particleCount:a,analyzedParticles:u.length,snapDistance:l,top:u.slice(0,o),cohorts:f}}var Wn=2e5;function Gn(){let e=null,t=[],n=0,r=!1;return{start(i,a){e={...i,version:1},t=[],n=a,r=!0},record(e,i){r&&(t.push({t:i-n,timestep:e.timestep,controls:{...e.controls},config:{...e.config},audio:{...e.audio}}),t.length>Wn&&t.shift())},stop(){return r=!1,!e||t.length===0?null:{header:e,frames:t}},isRecording(){return r},frameCount(){return t.length}}}var Kn=[`audio/webm;codecs=opus`,`audio/webm`,`audio/ogg;codecs=opus`,`audio/mp4`];function qn(){if(!(typeof MediaRecorder<`u`&&typeof MediaRecorder.isTypeSupported==`function`))return``;for(let e of Kn)if(MediaRecorder.isTypeSupported(e))return e;return``}function Jn(){let e=null,t=[],n=0,r=``;return{start(i,a){if(typeof MediaRecorder>`u`)return!1;let o=i.getAudioTracks();if(o.length===0)return!1;try{r=qn();let i=new MediaStream(o);return e=r?new MediaRecorder(i,{mimeType:r}):new MediaRecorder(i),t=[],e.ondataavailable=e=>{e.data&&e.data.size>0&&t.push(e.data)},e.start(1e3),n=a,r=e.mimeType||r,!0}catch{return e=null,!1}},stop(i){return new Promise(a=>{let o=e;if(!o||o.state===`inactive`){e=null,a(null);return}o.onstop=()=>{let s=r||o.mimeType||`audio/webm`,c=new Blob(t,{type:s});e=null,t=[],a(c.size>0?{blob:c,mimeType:s,durationMs:Math.max(0,i-n)}:null)};try{o.stop()}catch{e=null,a(null)}})},isRecording(){return e!==null&&e.state===`recording`}}}function Yn(e){return e.includes(`ogg`)?`ogg`:e.includes(`mp4`)?`m4a`:`webm`}var Xn=8388608,Zn=1024,Qn=[.2723119259,.2353467047,-.3603444695,-.09512524307,.6235610247,3.013402939,.02889615297,.6329693794,1.528497815,-1.931068063,-.8994591236,-2.652257919,-.7968136072,-.4519242346,-1.252381325,.9024071097,.6202709079,-3.089233398,2.700178146,1.030089855,.2612487674,.7132430077,-.5218821764,2.613840342,1.409879804,2.794755459,-2.923718929,-1.810302138,-.2040163279,-.01136101782,1.589127541,.389028132,-.3837513328,-1.525727987,-1.321027994,-1.264946699,1.761325479,1.837681055,-.4041278362,.1539973617,.08247791231,.6491791606,.3635686338,-.3440827131,-1.007892013,1.137264013,-.3193916082,-2.485742092,.334392488,.7741389275,-1.851560354,.2410325259,.4511550665,.6353343725,-.4594263434,-1.390197515,.6367928386,.1399131566,1.607939243,1.305648565,-.5525392294,-2.501020193,1.342517853,1.339195728,-.3298691511,-.1836149991,.0783386901,.3052905798,.4855825305,-.991615355,-2.480074883,1.52519834,-.2139547765,.07011644542,.3962416351,.3858237863,-1.673520684,2.782539606,.1734578609,2.216310978],$n=[.02958657593,-.8248337507,.930151403,-.4672362208,1.314772248,1.005947351,-1.365626693,.7142422795,.9078131318,-2.068183661,1.717072129,-1.064071178,1.241774797,1.032745838,-.3716101646,-1.261480808,-.5897405148,.6589550972,-.07589191943,-.02607488632,.4837169647,-1.018635154,.6086377501,.2056964636,-.4383489788,.2577780485,-.2335787565,.3373747766,2.395021915,.8705562949,-.3508505523,.8371548057,-.5848132968,-1.950533628,1.506904364,-1.830993533,-1.207534075,1.021162987,-.3107568324,.08840143681,-.0002464375866,.78944695,.2935407758,-.1256271899,2.023281336,1.387467742,1.859986782,2.039408684,2.061003685,-1.282590151,-1.510869741,.4396900833,-1.64470613,1.359733462,.9348413944,1.018948317,-.9144988656,-1.21729672,-.2414669693,1.314112782,1.163633704,-.1886536777,-.3629435897,.5774178505,1.596277833,.8702152967,1.694741488,.5287332535,.6592678428,-.8203657866,.70573318,2.600224972,-.4140299857,.7197397947,-.5330645442,-.3722661734,-1.222765923,-1.034132123,-.9177538157,.2896152735],er=[1.867388248,-.9175057411,-.9639369845,2.154649973,.1388237625,1.079752922,-.635127902,-.9063259959,-.03735340759,-1.056410909,-.2005087882,-.6997956038,-1.445611477,-1.673744082,.2457395345,1.750352859,.1917514056,-.5077713132,1.623455644,-.08255443722,.4541839957,1.603226662,-.5390768051,1.329454422,-.2608671784,-.5484293103,.8345403075,.4746949077,-.08428421617,-.3546343744,-1.406229496,1.305972338,.009382291697,-.7347166538,-.8792285919,.8413680792,1.161756039,.3991038203,-.8010484576,-.1384124458,.1123704165,.4025035799,.03210728243,.4359824061,.4225586057,-1.442177653,-.7967980504,.8959840536,-.06354057789,-.05062246695,-1.09939599,.7256269455,-1.185945272,1.232509255,1.196261406,-.240287751,1.014721751,-.3238410056,-1.614851475,-.4123125076,-.2680063248,.4841806293,.1965423822,-.495629698,-.0182328783,-1.214697719,-1.238117933,.3543840647,1.233385682,.4318779111,.3767746687,-.1128240526,.2493562698,.3889036477,1.172568798,.2035689652,-.8031362295,.8728412986,-1.181055069,-.6609011889],tr=[.3443204761,-.2304728329,-1.68988812,-.7869548798,-.375985831,-.09494917095,.2134242356,-.2556326091,-.728302896,-1.012642503,.477201283,.9943274856,-.948664248,-.1035003215,-.8603739142,-1.127229691,2.231154919,-1.979416966,-2.345959187,.3230121434,-.3506436944,-1.096450329,.3615809083,-.1971798241,-.02261523344,1.513416529,-.1915451437,-1.371982336,-.5148645043,-1.103803277,-.6644239426,1.145878434,.5620852709,-.7597211003,1.150666595,1.37714982,.4624411166,-.00238462165,.1387155354,-.1168074757,-.791000843,.9184945226,-1.040718198,.9781587124,-.8892461061,-.6326578856,-.8864386082,-.4472734034,-.092424348,-.7000266314,.08744725585,-.09679085761,-.2210297883,-.9562780261,.4670034051,-.01200325228,.8331341743,-.4306783378,-1.910314083,-1.820463061,-.6292636395,-.2293415368,-.6929844022,.1526184678,-.7242701054,.2325042486,.4907852113,.1936476678,.03852798045,.6235687733,-.3490407765,-.01556147169,.7821814418,-.505199492,.9985987544,.7261073589,.501724124,.04035951942,.7694494128,-1.111526132],nr=96;function rr(e){return{...F,...e,width:nr,height:nr,depth:nr}}var ir=[{id:`shimmer-orb`,name:`Default1`,source:`3d-life-sim/built-in/Default1`,config:rr({seed:2771361799,simulationSpeed:.38,width:96,height:96,depth:96,particleCount:505856,dt:1,sensorGain:.6,sensorAngle:-.79,sensorDistance:1.37,mutationScale:.5,globalForceMult:.32,drag:.33,strafePower:.3280335001135245,axialForce:-.86,lateralForce:-.24,hazardRate:.006782057737000286,trailPersistence:.982,trailDiffusion:.01,depositRadius:.0015,depositTapRadius:1,depositMass:.2,sigma:75e-5,cohorts:25,ruleSeed:.4155617116484791,hueSensitivity:-.84,colorByCohort:!0,symmetryAxes:2,absoluteOrientation:2,orientationMix:.16643391107209027,initialConditions:2,boundaryMode:2,recycleCutoff:0,recycleEnabled:!1,rule:Qn}),renderControls:{bloomStrength:.05,bloomThreshold:.6,bloomRadius:1,colorSaturation:1.16,colorContrast:1.08,density:1.1,exposure:1.35,fov:60.87222532515452,aperture:.5653028338961303,focusDistance:.54,dofBlur:1,dofEnabled:!1,dofDebug:!1,sceneBrightness:2.6,raySteps:64,rayResolution:2160,fogTemporal:!1,fogRenderScale:.25,fogStepScale:.45,fogTemporalBlend:0,fogBlueNoise:!1,fieldTextureSampling:!0,emptySpaceSkipping:!0,emptySpaceThreshold:.085,emptySpaceStride:2,particleSizePx:2,particleMinPx:2.7,particleMaxPx:12.6,particleOpacity:.02,particleBrightness:1.15,particleColorMode:`gradient-turbo`,particleVelocityStretch:!0,particleStretch:1.2,particleStretchMin:0,particleStretchSpeed:.004,particleSpeedCutoff:0,particleSlowCutoff:0,particleBlendMode:`additive`,particleDensityCutoff:0,particleDensityRadius:0,particleDensityNormalize:0,particleDensitySoftness:.3,particleSupportMask:1,particleSupportRadius:.35,particleSupportNeighbors:12,particleSupportFlow:.35,fastParticleRender:!0,fastNoBloomPost:!0,densityPassStrength:0,densitySmallScale:.25,densityLargeScale:1,densityLargeThreshold:.35,densityContrastGain:0,densityContrastBalance:0,densityEmissionPower:5,densityOcclusion:0,accumulationStrength:3.6,accumulationRadius:1.05,accumulationCurve:2.2,accumulationMemory:.72,accumulationNoiseReject:.35,trailOpacity:.75,fogBrightness:1.18,trailThreshold:.014723410815931858,trailColorMode:`thermal`,fogTint:`#1e008a`,particleTint:`#2b0fff`,renderLayer:`particles`,palette:`ember`,filament:.26,cameraYaw:.2865388222983949,cameraPitch:.09886467575168707,cameraDistance:.781352472543831,cameraPanX:-.012867891461650151,cameraPanY:-.02726765419544569}},{id:`angles`,name:`Angles`,source:`Fluoddity/physics_configs/Core/Angles.json`,config:rr({axialForce:.022,lateralForce:-.186,sensorGain:1.369,mutationScale:.095,drag:.125,strafePower:.169,sensorAngle:-.141,globalForceMult:.94,sensorDistance:1.013,trailPersistence:.943,trailDiffusion:1,cohorts:6,ruleSeed:.6633918167,hueSensitivity:.25,colorByCohort:!0,symmetryAxes:2,absoluteOrientation:1,orientationMix:0,initialConditions:1,boundaryMode:2,rule:Qn})},{id:`circuits`,name:`Circuits`,source:`Fluoddity/physics_configs/Core/Circuits.json`,config:rr({axialForce:.041,lateralForce:-.707,sensorGain:1.393,mutationScale:0,drag:.333,strafePower:0,sensorAngle:.162,globalForceMult:.719,sensorDistance:1.683,trailPersistence:.989,trailDiffusion:.358,cohorts:10,ruleSeed:.9463542447,hueSensitivity:.593999981880188,colorByCohort:!0,symmetryAxes:2,absoluteOrientation:0,orientationMix:1,initialConditions:1,boundaryMode:0,rule:$n})},{id:`web`,name:`Web`,source:`Fluoddity/physics_configs/Advanced/Web.json`,config:rr({axialForce:.371,lateralForce:-.707,sensorGain:5,mutationScale:.014,drag:.381,strafePower:.164,sensorAngle:-.49,globalForceMult:.352,sensorDistance:.777,trailPersistence:.981,trailDiffusion:1,cohorts:64,ruleSeed:.42,hueSensitivity:.5,colorByCohort:!0,symmetryAxes:2,absoluteOrientation:0,orientationMix:1,initialConditions:1,boundaryMode:0,rule:er})},{id:`sidewinder`,name:`Sidewinder`,source:`Fluoddity/physics_configs/Core/SideWinder.json`,config:rr({axialForce:.371,lateralForce:-.707,sensorGain:1.136,mutationScale:0,drag:-.35,strafePower:.42,sensorAngle:-.49,globalForceMult:.451,sensorDistance:.672,trailPersistence:.981,trailDiffusion:1,cohorts:64,ruleSeed:.42,hueSensitivity:.5,colorByCohort:!0,symmetryAxes:2,absoluteOrientation:0,orientationMix:1,initialConditions:1,boundaryMode:0,rule:tr})},{id:`discovery-ember-ring`,name:`Discovery Ember Ring`,source:`3d-life-sim/generated/discovery-ember-ring`,config:rr({seed:3615720709,width:96,height:96,depth:96,particleCount:16384,dt:1,axialForce:.1608661715406925,lateralForce:-.15132610456552342,sensorGain:5.634595249174162,mutationScale:.17994860325939951,drag:.08723224782850597,strafePower:.24667282172478738,sensorAngle:.6544429429247975,globalForceMult:1.014142958521843,sensorDistance:1.6525641188956797,hazardRate:.001998373372480273,trailPersistence:.9002322330093011,trailDiffusion:.6415202744398266,depositRadius:.027260048859054226,depositTapRadius:3,depositMass:1.6318978077033535,sigma:.009268416612078438,cohorts:16,ruleSeed:.29749904153868556,hueSensitivity:.2718591715022921,colorByCohort:!0,symmetryAxes:2,absoluteOrientation:0,orientationMix:.8318878021091223,initialConditions:1,boundaryMode:0,rule:Qn})},{id:`discovery-solar-halo`,name:`Discovery Solar Halo`,source:`3d-life-sim/generated/discovery-solar-halo`,config:rr({seed:3245527534,width:96,height:96,depth:96,particleCount:16384,dt:1,axialForce:.19939568681642417,lateralForce:.015945691098459225,sensorGain:.6673925182898529,mutationScale:.2441761462576687,drag:-.1795460094511509,strafePower:.1623914475552738,sensorAngle:-.3720007975772023,globalForceMult:.8736513150576503,sensorDistance:1.1795689983293414,hazardRate:.010265873313881456,trailPersistence:.9824020955907181,trailDiffusion:.42310156434774404,depositRadius:.04196613798849285,depositTapRadius:3,depositMass:1.065848447359167,sigma:.01426848691608757,cohorts:36,ruleSeed:.9485943445470184,hueSensitivity:.7131725811213254,colorByCohort:!0,symmetryAxes:2,absoluteOrientation:0,orientationMix:.8669073253404349,initialConditions:2,boundaryMode:2,rule:Qn})},{id:`discovery-aurora-shell`,name:`Discovery Aurora Shell`,source:`3d-life-sim/generated/discovery-aurora-shell`,config:rr({seed:1020074997,width:96,height:96,depth:96,particleCount:16384,dt:1,axialForce:.13284547971561556,lateralForce:.07191760000307124,sensorGain:1.0630069615552202,mutationScale:.19648139851167795,drag:.571875621029176,strafePower:.07450182642787695,sensorAngle:-.12407223053276539,globalForceMult:1.3367412364971825,sensorDistance:.5161355694755911,hazardRate:.004440048093907535,trailPersistence:.9125298652239144,trailDiffusion:.2783649624371901,depositRadius:.08097606856096537,depositTapRadius:3,depositMass:1.4703582438174632,sigma:.027531863310728228,cohorts:25,ruleSeed:.4065287734847516,hueSensitivity:.17047627743333582,colorByCohort:!0,symmetryAxes:0,absoluteOrientation:0,orientationMix:.6381224035285413,initialConditions:1,boundaryMode:0,rule:Qn})},{id:`discovery-thermal-swarm`,name:`Discovery Thermal Swarm`,source:`3d-life-sim/generated/discovery-thermal-swarm`,config:rr({seed:1941741942,width:96,height:96,depth:96,particleCount:16384,dt:1,axialForce:-.010701310746371748,lateralForce:-.7553429053351283,sensorGain:6.098196335183456,mutationScale:.19389036960899828,drag:.603233614107594,strafePower:.014769370323047043,sensorAngle:-.2043588660657406,globalForceMult:1.1770450076111594,sensorDistance:1.021674393955618,hazardRate:.017564160573296246,trailPersistence:.912583798433654,trailDiffusion:.6855201673740521,depositRadius:.08077616564044729,depositTapRadius:3,depositMass:.387588457763195,sigma:.02746389631775208,cohorts:6,ruleSeed:.6659276164136827,hueSensitivity:-.6990656385943294,colorByCohort:!0,symmetryAxes:2,absoluteOrientation:1,orientationMix:.29217409947887063,initialConditions:1,boundaryMode:0,rule:Qn})},{id:`trail-probe`,name:`Trail Probe`,source:`3d-life-sim/debug/trail-probe`,config:rr({seed:3405691582,width:96,height:96,depth:96,particleCount:8,dt:1,axialForce:0,lateralForce:0,sensorGain:0,mutationScale:0,drag:1,strafePower:0,sensorAngle:0,globalForceMult:0,sensorDistance:1,hazardRate:0,trailPersistence:.992,trailDiffusion:.02,depositRadius:.052,depositTapRadius:1,depositMass:2.2,sigma:.016,cohorts:8,ruleSeed:.6633918167,hueSensitivity:.25,colorByCohort:!0,symmetryAxes:2,absoluteOrientation:0,orientationMix:0,initialConditions:3,boundaryMode:0,rule:Qn})}];function ar(e){return ir.find(t=>t.id===e)??ir[0]}function or(e,t,n,r,i){let a=2/Math.max(1e-4,n),o=a*a,s=2*r*a,c=o*(t-e.value)-s*e.velocity;e.velocity+=c*i,e.value+=e.velocity*i}function sr(e,t,n,r){let[i,a,o]=e.origin,[s,c,l]=e.direction,u=-1,d=1/0;for(let e=0;e<n;e++){let n=e*12,f=t[n]-i,p=t[n+1]-a,m=t[n+2]-o,h=f*s+p*c+m*l;if(h<=0)continue;let g=f-s*h,_=p-c*h,v=m-l*h;Math.sqrt(g*g+_*_+v*v)<=r*h&&h<d&&(d=h,u=e)}return u}var cr=1e-4;function lr(e,t,n,r){let{eps:i,maxMembers:a,maxRadius:o,cohesion:s}=r,c=2*s-1,l=n*12,u=e[l+4],d=e[l+5],f=e[l+6],p=Math.sqrt(u*u+d*d+f*f),m=new Map;for(let n=0;n<t;n++){let t=n*12,r=`${Math.floor(e[t]/i)},${Math.floor(e[t+1]/i)},${Math.floor(e[t+2]/i)}`,a=m.get(r);a?a.push(n):m.set(r,[n])}let h=i*i,g=o*o,_=n*12,v=[e[_],e[_+1],e[_+2]],y=new Set([n]),b=[],x=[n];for(;x.length>0&&b.length<a;){let t=x.shift(),n=t*12,r=e[n],a=e[n+1],o=e[n+2],s=r-v[0],l=a-v[1],_=o-v[2];if(s*s+l*l+_*_>g)continue;b.push(t);let S=Math.floor(r/i),C=Math.floor(a/i),w=Math.floor(o/i);for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++){let s=m.get(`${S+t},${C+n},${w+i}`);if(s)for(let t of s){if(y.has(t))continue;let n=t*12,i=e[n]-r,s=e[n+1]-a,l=e[n+2]-o;if(!(i*i+s*s+l*l>h)){if(c>-1&&p>cr){let t=e[n+4],r=e[n+5],i=e[n+6],a=Math.sqrt(t*t+r*r+i*i);if(a>cr&&(t*u+r*d+i*f)/(a*p)<c)continue}y.add(t),x.push(t)}}}}let S=0,C=0,w=0,ee=0,T=0,te=0;for(let t of b){let n=t*12;S+=e[n],C+=e[n+1],w+=e[n+2],ee+=e[n+4],T+=e[n+5],te+=e[n+6]}let E=Math.max(1,b.length),ne=[S/E,C/E,w/E],re=0;for(let t of b){let n=t*12,r=e[n]-ne[0],i=e[n+1]-ne[1],a=e[n+2]-ne[2];re=Math.max(re,Math.sqrt(r*r+i*i+a*a))}return{members:b,centroid:ne,velocity:[ee/E,T/E,te/E],boundingRadius:re}}function ur(e,t,n){let r=-1,i=1/0;for(let a=0;a<t;a++){let t=a*12,o=e[t]-n[0],s=e[t+1]-n[1],c=e[t+2]-n[2],l=o*o+s*s+c*c;l<i&&(i=l,r=a)}return r}function dr(e){let t=Math.cbrt(8/Math.max(1,e));return Math.min(.22,Math.max(.05,1.6*t))}var fr={eps:.08,maxMembers:4e3,maxRadius:.5,minMembers:15,reacquireRadius:.35,reacquireTimeoutMs:1500,cohesion:.5};function pr(e,t){return Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2])}var mr=class{params;grow;activeFlag=!1;centroid=[0,0,0];velocity=[0,0,0];memberCount=0;lastMs=-1;lostSinceMs=0;constructor(e){this.params=e,this.grow={eps:e.eps,maxMembers:e.maxMembers,maxRadius:e.maxRadius,cohesion:e.cohesion}}setCohesion(e){this.params={...this.params,cohesion:e},this.grow={...this.grow,cohesion:e}}setEps(e){this.params={...this.params,eps:e},this.grow={...this.grow,eps:e}}get state(){return{active:this.activeFlag,members:this.memberCount,centroid:[this.centroid[0],this.centroid[1],this.centroid[2]],velocity:[this.velocity[0],this.velocity[1],this.velocity[2]]}}adopt(e){this.centroid=e.centroid,this.velocity=e.velocity,this.memberCount=e.members.length,this.lostSinceMs=0}lockFromSeed(e,t,n){if(n<0)return!1;let r=lr(e,t,n,this.grow);return r.members.length<this.params.minMembers?(this.activeFlag=!1,!1):(this.activeFlag=!0,this.lastMs=-1,this.adopt(r),!0)}recluster(e,t,n){if(!this.activeFlag)return;let r=this.lastMs<0?0:Math.min(.5,Math.max(0,(n-this.lastMs)/1e3));this.lastMs=n;let i=lr(e,t,ur(e,t,[this.centroid[0]+this.velocity[0]*r,this.centroid[1]+this.velocity[1]*r,this.centroid[2]+this.velocity[2]*r]),this.grow);if(i.members.length>=this.params.minMembers){this.adopt(i);return}if(i=lr(e,t,ur(e,t,this.centroid),this.grow),i.members.length>=this.params.minMembers&&pr(i.centroid,this.centroid)<=this.params.reacquireRadius){this.adopt(i);return}this.lostSinceMs===0?this.lostSinceMs=n:n-this.lostSinceMs>this.params.reacquireTimeoutMs&&this.release()}release(){this.activeFlag=!1,this.memberCount=0,this.lostSinceMs=0,this.lastMs=-1}},hr=1.85*.92;function gr(e,t){let n=Math.cos(t.yaw),r=Math.sin(t.yaw),i=Math.cos(t.pitch),a=Math.sin(t.pitch),o=e[0]*n-e[2]*r,s=e[0]*r+e[2]*n;return[o,e[1]*i-s*a,e[1]*a+s*i]}function _r(e,t){let n=Math.cos(t.yaw),r=Math.sin(t.yaw),i=Math.cos(t.pitch),a=Math.sin(t.pitch),o=e[1]*i+e[2]*a,s=-e[1]*a+e[2]*i;return[e[0]*n+s*r,o,-e[0]*r+s*n]}function vr(e,t){return{origin:_r([0,0,-t.distance],t),direction:yr(_r([e[0]*t.aspect/hr,e[1]/hr,1],t))}}function yr(e){let t=Math.hypot(e[0],e[1],e[2]);return t<=0?[0,0,0]:[e[0]/t,e[1]/t,e[2]/t]}var br=1.85;function xr(e){return br/Math.max(1e-4,e)}function Sr(e){return br/Math.max(1e-4,e)}var Cr=3600;function wr(e,t=Cr){return Number.isFinite(e)?Math.max(0,Math.min(t-1,Math.round(e))):0}function Tr(e,t,n=Cr){let r=wr(Math.min(e,t),n),i=wr(Math.max(e,t),n);return i<=r&&(r>0?--r:i=r+1),{loopIn:r,loopOut:i}}function Er(e){return e.currentFrame<e.loopIn||e.currentFrame>=e.loopOut?e.loopIn:e.currentFrame+1}function Dr(e,t){return t>=e?{needsReset:!1,steps:t-e}:{needsReset:!0,steps:t}}var Or={currentFrame:0,playing:!1,loopIn:0,loopOut:Cr-1,playbackSpeed:1};function kr(e,t){switch(t.type){case`toggle-play`:return{...e,playing:!e.playing};case`play`:return{...e,playing:t.playing};case`scrub`:return{...e,currentFrame:wr(t.frame)};case`set-loop`:{let{loopIn:n,loopOut:r}=Tr(t.loopIn,t.loopOut);return{...e,loopIn:n,loopOut:r,currentFrame:wr(e.currentFrame)}}case`set-speed`:return{...e,playbackSpeed:Math.max(.05,t.speed)};case`tick`:return{...e,currentFrame:Er(e)};default:return e}}function Ar(){let[e,t]=(0,_.useReducer)(kr,Or);return{state:e,dispatch:t}}var jr=5e4;function Mr(){let e=new Map;return{record(t,n){if(e.set(t,{...n}),e.size>jr){let t=e.keys().next().value;t!==void 0&&e.delete(t)}},get(t){let n=e.get(t);return n?{...n}:void 0},frames(){return[...e.keys()].sort((e,t)=>e-t)},size(){return e.size},clear(){e.clear()}}}var Nr=[`file-default-json`,`file-electric-current-json`,`file-ice-flower-json`,`file-viridian-aurora-json`],Pr=Nr[0],Fr={vid1:`file-default-json`,vid2:`file-electric-current-json`,vid3:`file-ice-flower-json`,ar11:`file-viridian-aurora-json`};function Ir(e){return new URLSearchParams(e).get(`playing`)!==`0`}function Lr(e){return new URLSearchParams(e).get(`parallelPipelines`)===`1`}function Rr(e){return new URLSearchParams(e).get(`embed`)===`1`}function zr(e){let t=new URLSearchParams(e).get(`audio`);return t===`0`?!1:t===`mic`||t===`1`||Rr(e)&&t!==`0`}function Br(e){let t=new URLSearchParams(e).get(`demo`)===`instant`;return{instant:t,idle:t}}function Vr(e,t){let n=new URLSearchParams(e);if(n.has(`settings`)){let e=(n.get(`settings`)??``).trim().toLowerCase();if(!e)return null;let r=Fr[e];return t.find(t=>t.id.toLowerCase()===e||t.name.trim().toLowerCase()===e||t.id===r)?.id??null}return n.has(`profileGpu`)||n.has(`skipAppCompute`)?null:t.find(e=>e.id===Pr)?.id??null}var Hr=Math.round(2e5/Zn)*Zn;function Ur(e){let t=Math.round(Math.min(e,Hr)/Zn)*Zn;return Math.min(Xn,Math.max(128,t))}function Wr(){return typeof window<`u`&&typeof window.matchMedia==`function`&&window.matchMedia(`(pointer: coarse)`).matches}async function Gr(e){if(!/\.json$/i.test(e.name.trim()))throw Error(`Choose a JSON file.`);if(!Number.isSafeInteger(e.size)||e.size<=0)throw Error(`Preset JSON is empty.`);if(e.size>1048576)throw Error(`Preset JSON is too large (1 MB maximum).`);let t=await e.text();if(!t.trim())throw Error(`Preset JSON is empty.`);if(new TextEncoder().encode(t).byteLength>1048576)throw Error(`Preset JSON is too large (1 MB maximum).`);return t}function Kr(e,t){let n=e=>typeof e==`string`?e.replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,` `).replace(/\s+/g,` `).trim():``,r=n(e)||n(t)||`Imported`;return Array.from(r).slice(0,80).join(``)}var qr=``+new URL(`micAudioWorklet-D8CdmeEb.js`,import.meta.url).href,Jr=256;function Yr(e){if(!ei(e))return null;let t=Zr(e.version,NaN),n=Zr(e.sequence,NaN),r=Zr(e.timestampSec,NaN),i=Zr(e.sampleRate,NaN),a=Xr(Zr(e.rms,0)),o=Xr(Zr(e.peak,0));if(t!==1||!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i))return null;let s=Object.create(null);if(ei(e.bands)){let t=0;for(let n of Object.keys(e.bands)){if(t>=64)break;let r=e.bands[n];if(!ei(r))continue;let i=$r(n,Jr);i&&(s[i]={value:Xr(Zr(r.value,0)),rawDb:Qr(r.rawDb),rawMagnitude:Qr(r.rawMagnitude)},t+=1)}}return{version:1,sequence:n,timestampSec:r,sampleRate:i,rms:a,peak:o,rmsDb:Qr(e.rmsDb),peakDb:Qr(e.peakDb),bands:s}}function Xr(e){return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function Zr(e,t){let n=Number(e);return Number.isFinite(n)?n:t}function Qr(e){let t=Number(e);return Number.isFinite(t)?t:void 0}function $r(e,t){return Array.from(e).slice(0,t).join(``).replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,` `).replace(/\s+/g,` `).trim()}function ei(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var ti=64,ni=160;function ri(e,t){let n=t??ii(),r={status:n?`idle`:`unsupported`,devices:[],activeDeviceId:null,error:n?null:`This browser does not support AudioWorklet microphone capture.`,frameCount:0,lastSequence:null},i=0,a=!1,o=null,s=null,c=null,l=null,u=null,d=null,f=t=>{r={...r,...t},e.onState?.(y())},p=async()=>{if(!(!n||a))try{let e=(await n.mediaDevices.enumerateDevices()).filter(e=>e.kind===`audioinput`&&e.deviceId).slice(0,ti).map((e,t)=>({id:e.deviceId,label:ai(e.label)||`Microphone ${t+1}`,isDefault:e.deviceId==="default"}));f({devices:e})}catch{}},m=()=>{p()};n?.mediaDevices.addEventListener?.(`devicechange`,m);let h=()=>{l?.port.close(),l?.disconnect(),c?.disconnect(),u?.disconnect(),o?.getTracks().forEach(e=>e.stop()),s?.close(),o=null,s=null,c=null,l=null,u=null,d=null},g=async t=>{if(!n||a){f({status:`unsupported`,error:`This browser does not support AudioWorklet microphone capture.`});return}let m=++i;h(),f({status:`starting`,error:null,frameCount:0,lastSequence:null});let g;try{g=await n.mediaDevices.getUserMedia({audio:{...t?{deviceId:{exact:t}}:{},channelCount:1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}})}catch(e){if(m!==i||a)return;let t=(e instanceof DOMException||e instanceof Error)&&(e.name===`NotAllowedError`||e.name===`SecurityError`);f({status:t?`denied`:`error`,error:t?`Microphone permission was denied.`:oi(e)});return}if(m!==i||a){g.getTracks().forEach(e=>e.stop());return}let _=null;try{if(_=n.createContext(),await _.audioWorklet.addModule(n.workletUrl),m!==i||a){g.getTracks().forEach(e=>e.stop()),_.close();return}let h=_.createMediaStreamSource(g),v=n.createWorkletNode(_,`life-audio-analyzer`),y=_.createGain();y.gain.value=0,h.connect(v),v.connect(y),y.connect(_.destination),v.port.onmessage=t=>{let n=Yr(t.data);if(!n||m!==i||a)return;let o=d===null?1/60:Math.min(1,Math.max(.001,n.timestampSec-d));d=n.timestampSec,r={...r,frameCount:r.frameCount+1,lastSequence:n.sequence},e.onFrame(n,o)},v.port.start(),_.state===`suspended`&&await _.resume(),o=g,s=_,c=h,l=v,u=y;let b=g.getAudioTracks()[0]?.getSettings().deviceId;f({status:`running`,activeDeviceId:b||t||null,error:null}),await p()}catch(e){if(g.getTracks().forEach(e=>e.stop()),_?.close(),m!==i||a)return;h(),f({status:`error`,error:oi(e)})}},_=()=>{i+=1,h(),f({status:n?`idle`:`unsupported`,error:null,frameCount:0,lastSequence:null})},v=()=>{a||(a=!0,i+=1,h(),n?.mediaDevices.removeEventListener?.(`devicechange`,m))};function y(){return{...r,devices:r.devices.map(e=>({...e}))}}return{start:g,stop:_,destroy:v,refreshDevices:p,getStream:()=>o,snapshot:y}}function ii(){return typeof navigator>`u`||!navigator.mediaDevices?.getUserMedia||typeof AudioContext>`u`||typeof AudioWorkletNode>`u`?null:{mediaDevices:navigator.mediaDevices,createContext:()=>new AudioContext({latencyHint:`interactive`}),createWorkletNode:(e,t)=>new AudioWorkletNode(e,t,{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[1],channelCount:1,channelCountMode:`explicit`}),workletUrl:qr}}function ai(e){return Array.from(e).slice(0,ni).join(``).replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,` `).replace(/\s+/g,` `).trim()}function oi(e){return ai(e instanceof Error?e.message:String(e))||`Microphone capture could not start.`}function si(e=0,t=1){return{enabled:!1,min:e,max:t,control:null}}function ci(e,t,n){return{enabled:!0,min:t,max:n,control:{inputId:e.inputId,inputName:e.inputName,messageType:e.messageType,channel:e.channel,controller:e.controller}}}function li(e,t=0,n=1){let r=Si(e)?e:{},i=vi(r.control);return{enabled:typeof r.enabled==`boolean`?r.enabled:!!i,min:xi(r.min,t),max:xi(r.max,n),control:i}}function ui(e){return e?.enabled===!0&&e.control!==null}function di(e,t,n){if(!n||n.length<2)return null;let r=n[0]&255;if(r<128||r>=240)return null;let i=r&240,a=(r&15)+1,o=e||t||`midi-input`,s=t||o;return i===176&&n.length>=3?_i(o,s,`cc`,a,n[1]&127,n[2]&127,127):i===224&&n.length>=3?_i(o,s,`pitch-bend`,a,null,n[1]&127|(n[2]&127)<<7,16383):i===208?_i(o,s,`channel-pressure`,a,null,n[1]&127,127):i===160&&n.length>=3?_i(o,s,`poly-pressure`,a,n[1]&127,n[2]&127,127):null}function fi(e,t){if(!e?.enabled||!e.control)return!1;let n=e.control;return n.messageType===t.messageType&&n.channel===t.channel&&n.controller===t.controller}function pi(e,t,n,r){return!Number.isFinite(e)||!Number.isFinite(t)?r??0:e+(t-e)*yi(n)}function mi(e){return[`all`,e.messageType,String(e.channel),e.controller===null?`-`:String(e.controller)].join(`:`)}function hi(e){return[mi(e)]}function gi(e){if(!e)return`Unmapped`;let t=e.inputName?` ${e.inputName}`:``;return e.messageType===`cc`?`CC ${e.controller??0} ch ${e.channel}${t}`:e.messageType===`pitch-bend`?`Pitch ch ${e.channel}${t}`:e.messageType===`channel-pressure`?`Pressure ch ${e.channel}${t}`:`Poly ${e.controller??0} ch ${e.channel}${t}`}function _i(e,t,n,r,i,a,o){return{inputId:e,inputName:t,messageType:n,channel:r,controller:i,rawValue:a,rawMax:o,value:o>0?yi(a/o):0}}function vi(e){if(!Si(e))return null;let t=e.messageType;if(t!==`cc`&&t!==`pitch-bend`&&t!==`channel-pressure`&&t!==`poly-pressure`)return null;let n=bi(Math.round(xi(e.channel,1)),1,16),r=t===`cc`||t===`poly-pressure`?bi(Math.round(xi(e.controller,0)),0,127):null;return{inputId:typeof e.inputId==`string`&&e.inputId?e.inputId:null,inputName:typeof e.inputName==`string`?e.inputName:``,messageType:t,channel:n,controller:r}}function yi(e){return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function bi(e,t,n){return Math.min(n,Math.max(t,e))}function xi(e,t){let n=Number(e);return Number.isFinite(n)?n:t}function Si(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var Ci=[`low`,`mid`,`high`],wi={enabled:!0,buckets:{low:{gain:1,exponent:1,attackMs:1,decayMs:1},mid:{gain:1,exponent:1,attackMs:1,decayMs:1},high:{gain:1,exponent:1,attackMs:1,decayMs:1}}};function Ti(){return{meters:{low:0,mid:0,high:0},bucketValues:{}}}function Ei(e,t){return{min:e,max:t,buckets:{low:{enabled:!1,gain:1},mid:{enabled:!1,gain:1},high:{enabled:!1,gain:1}},midi:si(e,t)}}function Di(e,t,n,r){return e[t]??Ei(n,r)}function Oi(e){return Ci.some(t=>e.buckets[t].enabled)}function ki(e,t,n,r){let i=[e,t];if(Number.isFinite(n)&&i.push(n),r){let e=r.midi;e?.control&&(Number.isFinite(e.min)&&i.push(e.min),Number.isFinite(e.max)&&i.push(e.max)),Oi(r)&&(Number.isFinite(r.min)&&i.push(r.min),Number.isFinite(r.max)&&i.push(r.max))}return{min:Math.min(...i),max:Math.max(...i)}}function Ai(e){return e?{low:Math.max(Li(e,`low`),Li(e,`sub`),Li(e,`bass`)),mid:Math.max(Li(e,`mid`),Li(e,`lowMid`)),high:Math.max(Li(e,`high`),Li(e,`presence`))}:{low:0,mid:0,high:0}}function ji(e,t,n,r){let i=Ai(t),a={...e.meters};for(let t of Ci){let o=n.buckets[t],s=Vi(Ri(i[t],o.exponent)*o.gain);a[t]=zi(e.meters[t],s,o.attackMs,o.decayMs,r)}return e.meters=a,a}function Mi(e,t,n,r,i,a){if(!n.enabled||!t)return{};let o=Ai(t),s={};for(let[t,c]of Object.entries(r)){if(!Oi(c))continue;let r=e.bucketValues[t]??{},l=0;for(let e of Ci){let t=c.buckets[e];if(!t.enabled)continue;let i=n.buckets[e],s=zi(r[e]??0,Vi(Ri(o[e],i.exponent)*i.gain*t.gain),i.attackMs,i.decayMs,a);r[e]=s,l=Math.max(l,s)}e.bucketValues[t]=r,s[t]=Bi(c.min,c.max,l,i[t])}return s}function V(e){let t=Wi(e)?e:{},n=Wi(t.buckets)?t.buckets:{};return{enabled:typeof t.enabled==`boolean`?t.enabled:wi.enabled,buckets:{low:Fi(n.low,wi.buckets.low),mid:Fi(n.mid,wi.buckets.mid),high:Fi(n.high,wi.buckets.high)}}}function Ni(e){if(!Wi(e))return{};let t={};for(let[n,r]of Object.entries(e))!n||!Wi(r)||(t[n]=Pi(r));return t}function Pi(e){let t=Wi(e)?e:{},n=Ei(0,1),r=Wi(t.buckets)?t.buckets:{},i=Ui(t.min,n.min),a=Ui(t.max,n.max);return{min:i,max:a,buckets:{low:Ii(r.low),mid:Ii(r.mid),high:Ii(r.high)},midi:li(t.midi,i,a)}}function Fi(e,t){let n=Wi(e)?e:{};return{gain:Hi(Ui(n.gain,t.gain),0,8),exponent:Hi(Ui(n.exponent,t.exponent),.1,8),attackMs:Hi(Ui(n.attackMs,Ui(n.smoothingMs,t.attackMs)),1,2e3),decayMs:Hi(Ui(n.decayMs,Ui(n.smoothingMs,t.decayMs)),1,2e3)}}function Ii(e){let t=Wi(e)?e:{};return{enabled:typeof t.enabled==`boolean`&&t.enabled,gain:Hi(Ui(t.gain,Ui(t.smoothing,1)),0,16)}}function Li(e,t){return Vi(e.bands[t]?.value??0)}function Ri(e,t){let n=Vi(e);return!Number.isFinite(t)||t===1||n<=0?n:n**+t}function zi(e,t,n,r,i){let a=t>=e?n:r;if(!Number.isFinite(i)||i<=0||!Number.isFinite(a)||a<=1)return Vi(t);let o=1-Math.exp(-i/(a/1e3));return Vi(e+(t-e)*Vi(o))}function Bi(e,t,n,r){return!Number.isFinite(e)||!Number.isFinite(t)?r??0:e+(t-e)*Vi(n)}function Vi(e){return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function Hi(e,t,n){return Math.min(n,Math.max(t,e))}function Ui(e,t){let n=Number(e);return Number.isFinite(n)?n:t}function Wi(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var Gi=[`seed`,`cohort`,`rule`,`volume`,`width`,`height`,`depth`,`particle-input`,`particle-count`,`orbit-speed`,`color`];function Ki(e,t,n,r=Gi){return Object.keys(e).filter(i=>{let a=e[i];if(!t[i]||!ui(a.midi)||n.has(i))return!1;let o=i.toLowerCase();return!r.some(e=>o.includes(e))})}var qi={"A Curve":`Contrast of the accumulation falloff — higher = sharper, more concentrated hotspots.`,"A Gain":`Strength of the accumulation effect — higher = bolder buildup where particles cluster.`,"A Memory":`How long accumulated buildup lingers — higher = trails fade more slowly.`,"A Radius":`How far each particle's accumulation spreads — higher = wider, softer pools.`,"A Reject":`Filters out faint noise from accumulation — higher = only strong clusters show.`,Alarm:`Prey flee a danger scent trail — higher = sharper escape waves away from predators.`,Angle:`Spread of a particle's sensing cone — sets how wide it looks for trails to follow.`,"Aniso Follow":`Particles steer along the deposited flow — higher = one-way lanes and vortex rings.`,Aperture:`Lens opening size — higher = shallower focus, more blur outside the focal distance.`,Axial:`Forward/back push along a particle's heading. Higher = stronger thrust along its axis.`,Blend:`How particle colors combine onto the canvas (e.g. additive glow vs normal).`,Bloom:`Strength of the glowing bloom haze around bright particles.`,"Bloom Radius":`How far bloom spreads outward. Higher = wider, softer glow.`,"Bloom Thresh":`Brightness needed to bloom. Higher = only the brightest spots glow.`,Boundary:`What happens at the edge: bounce, reset, wrap, tube, stick, soft, or portal.`,"Brightness Boost":`Relifts dense particle clusters after density exponent shaping. Higher = brighter clumps.`,"Bright Amt":`How much particle brightness varies between particles. Higher = stronger bright/dim spread.`,"Bright Curve":`Bias of the brightness spread. Higher = more particles pushed toward the dim end.`,"Bright Max":`Highest brightness multiplier a particle can get from variation.`,"Bright Min":`Lowest brightness multiplier a particle can get from variation.`,Chemotaxis:`Steer along density gradient — positive climbs into crowds, negative flees them.`,"Chroma Ab":`Lens color-fringing at edges. Higher = stronger red/blue split.`,Cohesion:`How strongly tracked particles pull together — higher = tighter flocking.`,"Color Amt":`How much particle hue, saturation and shade shift between particles. Higher = more varied.`,"Color Curve":`Bias of the hue-shift spread. Higher = most particles shift only slightly.`,"Color Sat":`Color intensity. Higher = richer colors, lower = toward grayscale.`,Contrast:`Difference between lights and darks. Higher = punchier, more contrast.`,Cutoff:`Trail brightness threshold for rendering — higher = only strong trails show.`,"Cutoff Prepass":`Computes the density cull in a separate pass for cleaner culling (performance tweak).`,"D Curve":`Brightness falloff curve — higher = harsher, more concentrated glow.`,"D Emit":`Overall brightness of the volumetric density glow. Higher = denser, brighter fog.`,"D Gain":`Emission contrast — higher = brighter cores against darker surroundings.`,"D Large":`Big-blob noise scale — higher = larger, broader cloud structures.`,"D Mask":`Cutoff that hides faint density — higher = only dense regions stay visible.`,"D Occlude":`How much dense fog shadows what's behind it. Higher = deeper, murkier volume.`,"D Ridges":`Blends solid blobs into thin ridge/filament structures. Higher = wispier.`,"D Small":`Fine-detail noise scale — higher = smaller, crisper specks and texture.`,DOF:`Turns depth-of-field on — blurs particles that aren't at the focus distance.`,"DOF Blur":`How strong the out-of-focus blur is. Higher = softer, blurrier background.`,"DOF Debug":`Shows a visual overlay of the focus/blur zones to help you set up depth-of-field.`,Demo:`Auto-drifts the controls after 60s idle so the sim keeps showing new looks.`,Density:`Overall opacity/glow of the particle field. Higher = thicker, more solid look.`,"Density Exponent":`Raises particle brightness by density. Higher = suppresses lone haze and emphasizes clumps.`,Despeckle:`Post-process cleanup for isolated bright specks. Higher = stronger firefly removal.`,Diffuse:`How much trails blur and spread each frame — higher = softer, smokier trails.`,Distance:`Camera sensor distance — adjusts perspective depth of the view.`,Drag:`Velocity damping — higher = particles slow down faster.`,Emit:`Mass each particle lays into trails. Higher = stronger, brighter deposits.`,Energy:`Metabolism strength — particles spend energy moving and starve/reset if unfed. 0 = off.`,"Energy Drain":`Metabolism cost — higher = unfed particles starve and fade faster.`,Exposure:`Overall light level. Higher = brighter whole image.`,FOV:`Camera field of view — higher = wider, more zoomed-out view.`,Filament:`Stretches particles into thread-like strands. Higher = longer, wispier filaments.`,Flare:`Strength of anamorphic streaks from bright cores.`,"Flare Cutoff":`Brightness needed to streak. Higher = only the brightest cores flare.`,"Flare Height":`Vertical reach of flare streaks, independent of length.`,"Flare Len":`Horizontal length of the flare streaks. Higher = longer streaks.`,"Flare Star":`Mixes vertical streaks in. 0 = horizontal only, higher = star-shaped.`,"Flock Align":`Match neighbors' motion — higher = smoother flocking, murmuration-like flow.`,"Flock Sep":`Push away from crowding — higher = more spacing, less clumping.`,"Flow Agree":`Requires neighbors to move the same way to count. Higher = keeps only aligned flows.`,"Flow Color":`Tints particles by direction of motion. Higher = stronger flow-based coloring; negative flips it.`,"Focal Dist":`Distance from camera that stays sharp; everything nearer/farther blurs.`,"Fog Bright":`Brightness of the volumetric fog glow. Higher = denser, brighter haze.`,"Fog Scale":`Resolution of the fog pass. Lower = softer/faster fog, higher = sharper.`,"Fog Steps":`Detail of fog ray-marching. Higher = smoother fog but slower.`,"Fog Tint":`Color of the volumetric fog glow.`,Follow:`Makes the camera trail a tracked particle as it moves.`,"Follow Dist":`How far behind the tracked target the camera stays.`,"Follow Height":`How high above the tracked target the camera rides.`,"Follow Smooth":`Softens follow motion — higher = smoother, lagging follow.`,"Follow Speed":`How fast the camera catches up to the target. Higher = tighter follow.`,Force:`Master multiplier on all steering forces — higher = stronger overall movement.`,GPU:`WebGPU status: OK if hardware accelerated, Fallback if not.`,"GPU MB":`Live readout: video memory used by the particle and field buffers, in megabytes.`,"GS Feed":`Gray-Scott feed rate — higher = faster spreading, more spots fill in.`,"GS Kill":`Gray-Scott kill rate — tunes pattern type between spots, stripes, and labyrinths.`,"Gray-Scott":`Reaction-diffusion strength — paints Turing-like spots and maze stripes on the cloud.`,"Half Large":`Renders the large-scale density at half resolution for speed (slightly softer).`,Hazard:`Chance per step a particle randomly dies. Higher = more churn and resets.`,"Haze Cull":`Hard-removes particles outside dense structure. Higher = more aggressive haze cleanup.`,"Hue Hi":`High end of the color-variation hue range across particles.`,"Hue Lo":`Low end of the color-variation hue range across particles.`,Initial:`Starting layout of particles: grid, ring, helix, disc, dual, shell, or vortex.`,"Instant Demo":`Starts the auto-drift demo right away instead of waiting for idle time.`,Lateral:`Turning/sideways force strength. Higher = sharper steering toward trails.`,Lenia:`Lifelike growth in the density field — patterns grow/shrink toward a target density.`,"Lenia Mu":`Target density Lenia grows toward — sets the sweet-spot crowding level for growth.`,"Lenia Sigma":`How forgiving Lenia's target is — wider = grows over a broader density range.`,"Lock View":`Freezes the camera so orbit/follow/drag can't move it.`,Look:`Makes the camera aim at the tracked particle/target.`,"Look Smooth":`Softens camera aiming — higher = smoother, lazier turns.`,"Look Speed":`How quickly the camera turns to face its target. Higher = snappier aim.`,MIPS:`Crowd-slowdown effect — higher = dense areas clump into spontaneous droplets.`,"Max FPS":`Caps the frame rate to save power; Off lets it run as fast as it can.`,Mix:`How strongly particles align to the fixed orientation axis. 0 = off.`,Mutation:`How much each cohort's rule drifts from the base. Higher = more behavior variety.`,Neighbors:`Minimum neighbors a particle needs to survive the Support cull. Higher = stricter.`,Opacity:`Brightness/opacity of the deposited motion trails.`,"Opacity Amt":`How much particle opacity varies between particles. Higher = more see-through/solid spread.`,"Opacity Curve":`Bias of the opacity spread. Higher = more particles pushed toward transparent.`,"Opacity Max":`Highest opacity multiplier a particle can get from variation.`,"Opacity Min":`Lowest opacity multiplier a particle can get from variation.`,Orbit:`Auto-rotates the camera around the scene continuously.`,"Orbit Speed":`How fast the camera auto-orbits. Higher = faster spin.`,Orient:`What each particle points toward: velocity, up, radial, outward, swirl, or noise.`,"P Color":`Picks the particle color palette/mapping mode from a curated set of looks.`,"P Cutoff":`Hides particles in sparse regions below this density. Higher = thins out lonely particles.`,"P Glow":`Soft radial glow in each particle's core. Higher = brighter halo, less flat disc.`,"P Hot":`Pushes each particle's center toward white for a hot, blown-out core.`,"P Keep":`Normalizes brightness by local density so dense and sparse areas look more even.`,"P Max Px":`Largest a particle can grow to on screen. Clamps the upper size limit.`,"P Min Px":`Smallest a particle can shrink to on screen. Clamps the lower size limit.`,"P Opacity":`Overall particle brightness/opacity — the master intensity knob for particles.`,"P Radius":`Neighborhood size used to measure local density for the cutoff/keep effects.`,"P Scale":`Base on-screen size of each particle in pixels.`,"P Slow Cut":`Fades out particles slower than this speed. Higher = hides more sluggish ones.`,"P Soft":`Softness of the density mask edge. Higher = gentler fade between kept and culled.`,"P Speed Cut":`Fades out particles moving faster than this speed. Higher = allows faster ones.`,"P Tint":`Overall color tint multiplied onto every particle.`,Palette:`Color theme for particles (e.g. Aurora, Ember).`,"Particle Color Mode":`Chooses what drives particle color — cohort, velocity, or other sources.`,Particles:`How many particles the simulation runs. Higher = denser but heavier to compute.`,Persist:`How long trails stay before fading — higher = longer, more lingering trails.`,Pitch:`Tilts the camera up/down around the scene.`,Predator:`Predator group chases prey scent — higher = faster, tighter hunting pursuit.`,Preset:`Load a built-in look — swaps the whole config to a curated starting point.`,Pulse:`Amplitude of a breathing throb in the trails. 0 = off; higher = stronger pulsing.`,"Pulse Rate":`Speed of the trail pulse — higher = faster breathing/throbbing.`,Quorum:`Crowd ignition — dense clusters flare brighter, shift hue, and pull inward.`,"Quorum Thr":`Crowding level needed to ignite — higher = only the densest clumps light up.`,Radius:`Size of the trail blob each particle deposits. Higher = thicker, broader trails.`,"Ray Res":`Render resolution (in p). Higher = sharper image but heavier to draw.`,"Ray Steps":`Samples per view ray. Higher = crisper volume detail, lower = faster.`,"Ray Target":`Readout: current render resolution being used (width x height).`,Recycle:`Resets particles that drift into empty space back into active regions.`,Render:`Which layers to draw — particles, density fog, trails, accumulation, or combinations.`,Renderer:`Shows which draw path is active (Live 3D or WebGPU).`,Restless:`Random nudge given to nearly-stuck particles. Higher = less freezing in place.`,"Ribbon %":`Fraction of particles drawn as flowing ribbons instead of dots.`,"Ribbon Edge Fade":`Softens the side edges of ribbons — higher = feathered, less hard-edged.`,"Ribbon Fade":`Tapers ribbon width toward its tail — higher = thinner, pointed ends.`,"Ribbon Fade Start":`Where along the ribbon the tail taper begins — higher = taper starts later.`,"Ribbon Joints":`Segments per ribbon — higher = smoother curves, more detail.`,"Ribbon Len":`How many trail points each ribbon spans — higher = longer ribbons.`,"Ribbon W ×":`Overall ribbon thickness multiplier — higher = wider ribbons.`,Saved:`Load one of your saved settings snapshots (or Export/Save the current one).`,"Scene Gain":`Extra brightness boost on the scene before tone-mapping.`,Seed:`Random seed for this run — same seed reproduces the exact same simulation.`,Sensor:`How strongly particles sense the trail field. Higher = they react more to trails.`,Shape:`Domain shape that confines particles: cube, sphere, cylinder, or pyramid.`,Sigma:`Readout: width of the Lenia growth kernel driving the sim's birth/death curve.`,"Sim Res":`Voxel grid resolution. Higher = finer, more detailed sim (and heavier on GPU).`,"Sim Speed":`How fast the simulation advances each frame. Higher = motion runs faster.`,"Size Amt":`How much particle size varies between particles. Higher = stronger big/small spread.`,"Size Curve":`Bias of the size spread. Higher = more particles pushed toward the small end.`,"Size Max":`Largest size multiplier a particle can get from variation.`,"Size Min":`Smallest size multiplier a particle can get from variation.`,Species:`Strength of inter-species attract/repel, forming particle-life-style clusters.`,Strafe:`Sideways drift strength — higher = particles slide perpendicular to their heading.`,"Strafe Momentum":`Blends strafe into velocity for damping. Higher = less low-speed ping-pong.`,"Stretch Max":`Streak length for fast particles — the maximum stretch amount.`,"Stretch Min":`Streak length for slow particles — the baseline stretch amount.`,"Stretch Speed":`Speed at which streaks reach full stretch. Lower = stretches at slower speeds.`,"Supp Smooth":`Blends the Support cull toward smooth field density. Higher = less grid-like blinking.`,"Supp Rad":`Search radius for counting neighbors in the Support cull. Higher = wider reach.`,Support:`Hides particles with too few neighbors. Higher = cull isolated loners, keep clusters.`,"Sym X":`Mirror behavior across the X axis for left-right symmetric patterns.`,"Sym Y":`Mirror behavior across the Y axis for up-down symmetric patterns.`,"Sym Z":`Mirror behavior across the Z axis for front-back symmetric patterns.`,Tap:`Readout: number of grid cells each particle stamps into the trail when depositing.`,"Trail Color":`How trails are colored: by density, flow direction, heat, or a fixed tint.`,"Trail Scale":`Readout: how strongly particles deposit into the trail volume, scaled by density.`,"Var Coherence":`Blend from random-per-particle to smooth spatial patches. Higher = neighbors match more.`,"Var Detail":`Noise lacunarity — higher adds finer, busier detail to the variation field.`,"Var Drift":`Higher = each particle's traits slowly drift over time instead of staying fixed.`,"Var Gain":`How much each finer noise layer adds. Higher = rougher, more contrasty variation.`,"Var Master":`Overall strength of all per-particle variation. Higher = more visible differences.`,"Var Octaves":`Number of noise layers in the variation field. More = richer, more detailed patterns.`,"Var Scale":`Spatial frequency of the variation field. Higher = patches change over shorter distances.`,"Vel Stretch":`Stretches particles into streaks along their direction of motion.`,"Vign Soft":`How gradual the vignette fade is. Higher = darkness only in corners.`,Vignette:`Darkening of the frame edges. Higher = stronger edge shadow.`,Voxel:`Readout: world size of one grid cell. Smaller = finer spatial detail.`,Yaw:`Rotates the camera left/right around the scene.`,Zoom:`How far the camera sits from the scene. Lower = closer in.`};function Ji(e){return qi[e]}var Yi=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),H=o(((e,t)=>{t.exports=Yi()}))(),Xi=3405691582,Zi={yaw:.42,pitch:-.32,distance:3.15},Qi={follow:!1,look:!1,followSpeed:3,followSmoothing:1,lookSpeed:4,lookSmoothing:1,followDistance:3.15,followHeight:0,cohesion:.5},$i=(0,_.createContext)(null),ea={"p-bright":`particleBrightness`,"particle-size-slider":`particleSizePx`,"p-opacity":`particleOpacity`,"particle-density-cutoff-slider":`particleDensityCutoff`,"particle-density-radius-slider":`particleDensityRadius`,"particle-density-normalize-slider":`particleDensityNormalize`,"particle-density-softness-slider":`particleDensitySoftness`,"particle-support-mask-slider":`particleSupportMask`,"particle-support-radius-slider":`particleSupportRadius`,"particle-support-neighbors-slider":`particleSupportNeighbors`,"particle-support-flow-slider":`particleSupportFlow`,"particle-stretch-min-slider":`particleStretchMin`,"particle-stretch-max-slider":`particleStretch`,"particle-stretch-speed-slider":`particleStretchSpeed`,"particle-speed-cutoff-slider":`particleSpeedCutoff`,"particle-slow-cutoff-slider":`particleSlowCutoff`,"particle-exponent-slider":`particleExponent`,"particle-brightness-boost-slider":`particleBrightnessBoost`,"particle-support-smoothing-slider":`particleSupportSmoothing`,"particle-haze-cull-slider":`particleHazeCull`,"particle-despeckle-slider":`particleDespeckle`,exposure:`exposure`,"scene-gain":`sceneBrightness`,"bloom-strength-slider":`bloomStrength`,"bloom-threshold-slider":`bloomThreshold`,"bloom-radius-slider":`bloomRadius`,"color-saturation-slider":`colorSaturation`,"color-contrast-slider":`colorContrast`,"chromatic-aberration-slider":`chromaticAberration`,"vignette-strength-slider":`vignetteStrength`,"vignette-softness-slider":`vignetteSoftness`,"streak-strength-slider":`streakStrength`,"streak-length-slider":`streakLength`,"streak-vertical-slider":`streakVertical`,"flare-height-slider":`flareHeight`,"flare-cutoff-slider":`flareCutoff`,"fov-slider":`fov`,"aperture-slider":`aperture`,"dof-blur-slider":`dofBlur`,"variation-master-slider":`variationMaster`,"variation-drift-slider":`variationDrift`,"variation-noise-mix-slider":`variationNoiseMix`,"variation-freq-slider":`variationFreq`,"variation-octaves-slider":`variationOctaves`,"variation-gain-slider":`variationGain`,"variation-lacunarity-slider":`variationLacunarity`,"variation-size-amount-slider":`variationSizeAmount`,"variation-size-curve-slider":`variationSizeCurve`,"variation-size-min-slider":`variationSizeMin`,"variation-size-max-slider":`variationSizeMax`,"variation-bright-amount-slider":`variationBrightAmount`,"variation-bright-curve-slider":`variationBrightCurve`,"variation-bright-min-slider":`variationBrightMin`,"variation-bright-max-slider":`variationBrightMax`,"variation-opacity-amount-slider":`variationOpacityAmount`,"variation-opacity-curve-slider":`variationOpacityCurve`,"variation-opacity-min-slider":`variationOpacityMin`,"variation-opacity-max-slider":`variationOpacityMax`,"variation-color-amount-slider":`variationColorAmount`,"variation-color-curve-slider":`variationColorCurve`,"variation-color-min-slider":`variationColorMin`,"variation-color-max-slider":`variationColorMax`},ta=.04,na=66,ra=262144,ia=8,aa=0,oa=1e5,sa=-1.32,ca=1.32,la=-4,ua=4,da=1.85*.92,fa=32,pa=96,ma=8,ha=.0015,ga=.28,_a=Object.assign({"../Presets/default.json":y,"../Presets/electric-current.json":b,"../Presets/ice-flower.json":x,"../Presets/viridian-aurora.json":S}),va=`velocity.velocity-inferno.velocity-viridis.velocity-spectral.velocity-cosmic.velocity-ice.solid.audio-magma.audio-viridis.audio-turbo.audio-cosmic.audio-ice.audio-ember.audio-plasma.cohort.audio.gradient-inferno.gradient-magma.gradient-viridis.gradient-turbo.gradient-rainbow.gradient-spectral.gradient-plasma.gradient-cosmic.gradient-ice.gradient-ember`.split(`.`),ya=[[`velocity`,`Velocity / Speed`],[`velocity-inferno`,`Velocity · Inferno`],[`velocity-viridis`,`Velocity · Viridis`],[`velocity-spectral`,`Velocity · Spectral`],[`velocity-cosmic`,`Velocity · Cosmic`],[`velocity-ice`,`Velocity · Ice`],[`solid`,`Solid Color`],[`audio-magma`,`Audio · Magma`],[`audio-viridis`,`Audio · Viridis`],[`audio-turbo`,`Audio · Turbo`],[`audio-cosmic`,`Audio · Cosmic`],[`audio-ice`,`Audio · Ice`],[`audio-ember`,`Audio · Ember`],[`audio-plasma`,`Audio · Plasma`],[`cohort`,`Cohort`],[`audio`,`Audio Reactive`]],ba={min:0,max:25,step:.001},xa=18.5,Sa={min:.1,max:25,step:.01},Ca={min:-1.5,max:1.5,step:.01},wa={enabled:!1,speed:.3},Ta={followSpeed:{min:.5,max:10,step:.1},followSmoothing:{min:.4,max:2,step:.05},lookSpeed:{min:.5,max:10,step:.1},lookSmoothing:{min:.4,max:2,step:.05},followDistance:{min:.3,max:12,step:.05},followHeight:{min:-3,max:3,step:.05},cohesion:{min:0,max:1,step:.02}},Ea=2*Math.atan(1/(1.85*.92))*180/Math.PI,U={bloomStrength:{min:0,max:1,step:.01},bloomThreshold:{min:0,max:2,step:.05},bloomRadius:{min:.5,max:3,step:.05},colorSaturation:{min:0,max:2,step:.01},colorContrast:{min:.5,max:1.8,step:.01},chromaticAberration:{min:0,max:1,step:.01},vignetteStrength:{min:0,max:1,step:.01},vignetteSoftness:{min:0,max:1,step:.01},streakStrength:{min:0,max:1,step:.01},streakLength:{min:0,max:1,step:.01},streakVertical:{min:0,max:1,step:.01},flareHeight:{min:0,max:1,step:.01},flareCutoff:{min:0,max:1,step:.01},ribbonFraction:{min:0,max:1,step:.01},ribbonWidth:{min:.05,max:3,step:.05},ribbonTaper:{min:0,max:1,step:.01},ribbonLength:{min:2,max:32,step:1},ribbonJoints:{min:2,max:32,step:1},ribbonFadeStart:{min:0,max:1,step:.01},ribbonEdgeFade:{min:0,max:1,step:.01},density:{min:.25,max:2.8,step:.05},exposure:{min:.4,max:2.6,step:.05},sceneBrightness:{min:0,max:2.6,step:.05},fov:{min:20,max:110,step:.5},aperture:{min:.05,max:.9,step:.02},focusDistance:{min:.05,max:xa,step:.02},dofBlur:{min:0,max:4,step:.05},raySteps:{min:8,max:512,step:8},fogRenderScale:{min:.25,max:1,step:.05},fogStepScale:{min:.125,max:1,step:.025},fogTemporalBlend:{min:0,max:.96,step:.02},emptySpaceThreshold:{min:0,max:.2,step:.005},emptySpaceStride:{min:1,max:8,step:1},particleSizePx:{min:.2,max:24,step:.1},particleMinPx:{min:0,max:8,step:.1},particleMaxPx:{min:.2,max:32,step:.1},particleOpacity:{min:0,max:1,step:.02},particleBrightness:{min:0,max:8,step:.05},particleStretch:{min:0,max:6,step:.05},particleStretchMin:{min:0,max:6,step:.05},particleStretchSpeed:{min:.004,max:.12,step:.001},particleSpeedCutoff:{min:0,max:.12,step:.001},particleSlowCutoff:{min:0,max:.12,step:.001},particleGlowCore:{min:0,max:1,step:.01},particleHotCore:{min:0,max:1,step:.01},particleExponent:{min:0,max:10,step:.1},particleBrightnessBoost:{min:0,max:5,step:.05},particleSupportSmoothing:{min:0,max:1,step:.01},particleHazeCull:{min:0,max:1,step:.01},particleDespeckle:{min:0,max:1,step:.01},particleDensityCutoff:{min:0,max:.03,step:1e-4},particleDensityRadius:{min:0,max:.18,step:.005},particleDensityNormalize:{min:0,max:1,step:.01},particleDensitySoftness:{min:.02,max:1,step:.01},particleSupportMask:{min:0,max:1,step:.01},particleSupportRadius:{min:.35,max:1.75,step:.05},particleSupportNeighbors:{min:1,max:24,step:1},particleSupportFlow:{min:0,max:1,step:.01},densityPassStrength:{min:0,max:8,step:.05},densitySmallScale:{min:.25,max:5,step:.05},densityLargeScale:{min:1,max:36,step:.1},densityLargeThreshold:{min:0,max:4,step:.01},densityContrastGain:{min:0,max:20,step:.05},densityContrastBalance:{min:0,max:1.5,step:.02},densityEmissionPower:{min:.25,max:5,step:.05},densityOcclusion:{min:0,max:1,step:.02},accumulationStrength:{min:0,max:12,step:.05},accumulationRadius:{min:.2,max:4,step:.05},accumulationCurve:{min:.5,max:6,step:.05},accumulationMemory:{min:0,max:.96,step:.01},accumulationNoiseReject:{min:0,max:1,step:.01},trailOpacity:{min:0,max:2.5,step:.05},fogBrightness:{min:0,max:8,step:.05},trailThreshold:{min:0,max:.28,step:.005},filament:{min:0,max:1,step:.02},cameraYaw:{min:-3.14,max:3.14,step:.02},cameraPitch:{min:sa,max:ca,step:.02},cameraDistance:ba,variationMaster:{min:0,max:1,step:.01},variationDrift:{min:0,max:1,step:.01},variationNoiseMix:{min:0,max:1,step:.01},variationFreq:{min:.2,max:12,step:.05},variationOctaves:{min:1,max:4,step:1},variationGain:{min:.2,max:.8,step:.01},variationLacunarity:{min:1.5,max:3,step:.05},variationSizeAmount:{min:0,max:1,step:.01},variationSizeCurve:{min:.3,max:6,step:.05},variationSizeMin:{min:0,max:3,step:.01},variationSizeMax:{min:0,max:3,step:.01},variationBrightAmount:{min:0,max:1,step:.01},variationBrightCurve:{min:.3,max:6,step:.05},variationBrightMin:{min:0,max:3,step:.01},variationBrightMax:{min:0,max:3,step:.01},variationOpacityAmount:{min:0,max:1,step:.01},variationOpacityCurve:{min:.3,max:6,step:.05},variationOpacityMin:{min:0,max:2,step:.01},variationOpacityMax:{min:0,max:2,step:.01},variationColorAmount:{min:0,max:1,step:.01},variationColorCurve:{min:.3,max:6,step:.05},variationColorMin:{min:-.5,max:.5,step:.01},variationColorMax:{min:-.5,max:.5,step:.01}},Da={simulationSpeed:{min:0,max:2,step:.01},hueSensitivity:{min:-1,max:1,step:.01},depositMass:{min:.05,max:2,step:.05},trailPersistence:{min:.85,max:.999,step:.001},trailDiffusion:{min:0,max:1,step:.01},sensorGain:{min:0,max:10,step:.05},sensorAngle:{min:-1,max:1,step:.01},sensorDistance:{min:0,max:3,step:.01},mutationScale:{min:0,max:.5,step:.005},drag:{min:-.5,max:1,step:.01},axialForce:{min:-1,max:1,step:.01},lateralForce:{min:-1,max:1,step:.01},globalForceMult:{min:0,max:2,step:.01},strafePower:{min:0,max:.5,step:.005},strafeMomentum:{min:0,max:1,step:.01},hazardRate:{min:0,max:.05,step:5e-4},orientationMix:{min:0,max:1,step:.01},pulseDepth:{min:0,max:1,step:.01},restlessness:{min:0,max:1,step:.01},pulseRate:{min:0,max:4,step:.01}},Oa={mips:{min:0,max:1,step:.01},anisoFollow:{min:0,max:1,step:.01},flockAlign:{min:0,max:1,step:.01},flockSeparate:{min:0,max:1,step:.01},chemotaxis:{min:-1,max:1,step:.01},quorumStrength:{min:0,max:1,step:.01},quorumThreshold:{min:0,max:1,step:.01},leniaStrength:{min:0,max:1,step:.01},leniaCenter:{min:0,max:1,step:.01},leniaWidth:{min:.001,max:.2,step:.001},speciesForce:{min:0,max:1,step:.01},predator:{min:0,max:1,step:.01},alarm:{min:0,max:1,step:.01},grayScott:{min:0,max:1,step:.01},gsFeed:{min:0,max:.1,step:.001},gsKill:{min:0,max:.1,step:.001},energy:{min:0,max:1,step:.01},energyDrain:{min:0,max:1,step:.01}},ka={min:ha,max:ga,step:5e-4},Aa={min:360,max:je,step:120},ja=[{description:`3D Life settings`,accept:{"application/json":[`.json`]}}],W={bloomStrength:.05,bloomThreshold:.6,bloomRadius:1,colorSaturation:1.16,colorContrast:1.08,chromaticAberration:0,vignetteStrength:0,vignetteSoftness:.5,streakStrength:0,streakLength:.6,streakVertical:0,flareHeight:.3,flareCutoff:0,ribbonFraction:0,ribbonWidth:.6,ribbonTaper:.7,ribbonLength:16,ribbonJoints:16,ribbonFadeStart:.5,ribbonEdgeFade:.5,density:1.15,exposure:1,fov:Ea,aperture:.38,focusDistance:.54,dofBlur:1,dofEnabled:!1,dofDebug:!1,sceneBrightness:1,raySteps:64,rayResolution:je,fogTemporal:!0,fogRenderScale:.5,fogStepScale:.4,fogTemporalBlend:.84,fogBlueNoise:!1,fieldTextureSampling:!1,emptySpaceSkipping:!1,emptySpaceThreshold:.035,emptySpaceStride:4,particleSizePx:4.5,particleMinPx:0,particleMaxPx:4.8,particleOpacity:.42,particleBrightness:1,particleColorMode:`solid`,particleVelocityStretch:!1,particleStretch:1.4,particleStretchMin:0,particleStretchSpeed:.035,particleSpeedCutoff:0,particleSlowCutoff:0,particleGlowCore:0,particleHotCore:0,particleExponent:1,particleBrightnessBoost:1,particleSupportSmoothing:0,particleHazeCull:0,particleDespeckle:0,particleBlendMode:`additive`,particleDensityCutoff:0,particleDensityRadius:.035,particleDensityNormalize:0,particleDensitySoftness:.22,particleSupportMask:0,particleSupportRadius:1.15,particleSupportNeighbors:3,particleSupportFlow:.35,fastParticleRender:!0,fastNoBloomPost:!0,particleCutoffPrepass:!1,densityLargeHalfRes:!1,densityPassStrength:.85,densitySmallScale:1.15,densityLargeScale:7.5,densityLargeThreshold:.16,densityContrastGain:3.2,densityContrastBalance:.34,densityEmissionPower:1.55,densityOcclusion:.55,accumulationStrength:3.6,accumulationRadius:1.05,accumulationCurve:2.2,accumulationMemory:.72,accumulationNoiseReject:.35,trailOpacity:1.18,fogBrightness:1,trailThreshold:0,trailColorMode:`stable`,fogTint:`#ffffff`,particleTint:`#ffffff`,renderLayer:`particles`,palette:`aurora`,filament:.72,cameraYaw:Zi.yaw,cameraPitch:Zi.pitch,cameraDistance:Zi.distance,cameraPanX:0,cameraPanY:0,variationMaster:1,variationDrift:.3,variationNoiseMix:.5,variationFreq:2.5,variationOctaves:2,variationGain:.5,variationLacunarity:2,variationSizeAmount:0,variationSizeCurve:2.5,variationSizeMin:.3,variationSizeMax:1.8,variationBrightAmount:0,variationBrightCurve:2,variationBrightMin:.4,variationBrightMax:1.6,variationOpacityAmount:0,variationOpacityCurve:1.5,variationOpacityMin:.5,variationOpacityMax:1.3,variationColorAmount:0,variationColorCurve:1,variationColorMin:-.12,variationColorMax:.12};function Ma(){let e=(0,_.useMemo)(Vo,[]),t=(0,_.useMemo)(()=>Uo(new URLSearchParams(window.location.search)),[]),n=(0,_.useMemo)(()=>Ir(window.location.search),[]),r=(0,_.useMemo)(()=>Lr(window.location.search),[]),i=(0,_.useMemo)(()=>zr(window.location.search),[]),a=(0,_.useRef)(null),o=(0,_.useRef)(null),s=(0,_.useRef)(new Ze);s.current.parallelPipelineCompile=r;let c=(0,_.useRef)(!1),l=(0,_.useRef)(!1),u=(0,_.useRef)(e.controls),d=(0,_.useRef)(e.config),f=(0,_.useRef)(n),p=(0,_.useRef)(!1),m=(0,_.useRef)(0),h=(0,_.useRef)(0),g=(0,_.useRef)({lastTime:0,frames:0,value:0}),v=(0,_.useRef)(null),y=(0,_.useRef)(null),b=(0,_.useRef)(null),x=(0,_.useRef)(Ti()),S=(0,_.useRef)(wi),C=(0,_.useRef)(null),w=(0,_.useRef)(null),ee=(0,_.useRef)(0),T=(0,_.useRef)(0),te=(0,_.useRef)({}),E=(0,_.useRef)({}),ne=(0,_.useRef)(null),re=(0,_.useRef)(`all`),D=(0,_.useRef)(null),ie=(0,_.useRef)({}),ae=(0,_.useRef)(0),oe=(0,_.useRef)(null),k=(0,_.useRef)(null),j=(0,_.useRef)({yaw:e.controls.cameraYaw,pitch:e.controls.cameraPitch,distance:e.controls.cameraDistance,panX:e.controls.cameraPanX,panY:e.controls.cameraPanY,fov:e.controls.fov,targetYaw:e.controls.cameraYaw,targetPitch:e.controls.cameraPitch,targetDistance:e.controls.cameraDistance,targetPanX:e.controls.cameraPanX,targetPanY:e.controls.cameraPanY,targetFov:e.controls.fov}),M=(0,_.useRef)(new Map),le=(0,_.useRef)(null),N=(0,_.useRef)({active:!1,mode:null,pointerId:null,x:0,y:0,startX:0,startY:0}),ue=(0,_.useRef)(new mr({...fr})),de=(0,_.useRef)(Qi),fe=(0,_.useRef)(wa.enabled),pe=(0,_.useRef)(wa.speed),me=(0,_.useRef)({panX:{value:0,velocity:0},panY:{value:0,velocity:0},distance:{value:Zi.distance,velocity:0}}),he=(0,_.useRef)(0),{state:ge,dispatch:_e}=Ar(),ve=(0,_.useRef)(ge);(0,_.useRef)(0),(0,_.useRef)(0),(0,_.useRef)(!1);let ye=(0,_.useRef)(Mr()),be=(0,_.useRef)(Gn()),xe=(0,_.useRef)(Jn()),Se=(0,_.useRef)(null),Ce=(0,_.useRef)(()=>{}),we=(0,_.useRef)(!1),Te=(0,_.useRef)(0),Ee=(0,_.useRef)([]),De=(0,_.useRef)(!1),[P,Oe]=(0,_.useState)(null),[ke,Ae]=(0,_.useState)(Qi),[,je]=(0,_.useState)({active:!1,members:0}),[Me,Pe]=(0,_.useState)(wa.enabled),[F,Fe]=(0,_.useState)(wa.speed),[Ie,Le]=(0,_.useState)(!1),Re=(0,_.useRef)(!1),[ze,Be]=(0,_.useState)(60),Ve=(0,_.useRef)(60),He=(0,_.useRef)(0),[Ue,We]=(0,_.useState)(()=>Br(window.location.search).idle),Ge=(0,_.useRef)(!1),[Ke,qe]=(0,_.useState)(()=>Br(window.location.search).instant),Je=(0,_.useRef)(!1),Ye=(0,_.useRef)(new Set),Xe=(0,_.useRef)(!1),Qe=(0,_.useRef)(0),$e=(0,_.useRef)({active:!1,priorOrbit:null,picks:[],lastPickMs:0,lastDriftMs:0}),et=`live`,[tt,I]=(0,_.useState)(e.controls),[nt,rt]=(0,_.useState)(e.presetId),[L,it]=(0,_.useState)(e.config),[at,ot]=(0,_.useState)(n),[st,ct]=(0,_.useState)(!1),[lt,ut]=(0,_.useState)(!1),[dt,ft]=(0,_.useState)(null),[pt]=(0,_.useState)(()=>Rr(window.location.search)),[mt]=(0,_.useState)(()=>Wr()),[ht,gt]=(0,_.useState)(!pt&&!mt),[_t,vt]=(0,_.useState)(!1),yt=(0,_.useRef)(ht);(0,_.useEffect)(()=>{yt.current=ht},[ht]);let bt=(0,_.useRef)({low:0,mid:0,high:0}),[xt,St]=(0,_.useState)(0),[Ct,wt]=(0,_.useState)(0),[Tt]=(0,_.useState)(Co),[Et,Dt]=(0,_.useState)(``),[Ot,kt]=(0,_.useState)(Pr),At=(0,_.useMemo)(()=>Nr.map(e=>Tt.find(t=>t.id===e&&t.fileBacked)).filter(e=>!!e),[Tt]),[jt,Mt]=(0,_.useState)(null),[Nt,Pt]=(0,_.useState)({status:`idle`,devices:[],activeDeviceId:null,error:null,frameCount:0,lastSequence:null}),[R,Ft]=(0,_.useState)(wi),[It,Lt]=(0,_.useState)({low:0,mid:0,high:0}),[Rt,zt]=(0,_.useState)(null),[Bt,Vt]=(0,_.useState)({}),[Ht,Ut]=(0,_.useState)(null),[Wt,Gt]=(0,_.useState)(()=>({supported:typeof navigator.requestMIDIAccess==`function`,enabled:!1,error:typeof navigator.requestMIDIAccess==`function`?null:`Web MIDI unavailable`,messageCount:0,lastMessage:null})),[Kt,qt]=(0,_.useState)([]),[Jt,Yt]=(0,_.useState)(`all`),[Xt,Zt]=(0,_.useState)(null),[Qt,$t]=(0,_.useState)(null),[en,tn]=(0,_.useState)({checked:!1,available:!1,adapterOk:!1,deviceOk:!1,bufferRoundtripOk:!1,adapterInfo:`pending`});(0,_.useEffect)(()=>{se().then(tn),new URLSearchParams(window.location.search).get(`skipAppCompute`)!==`1`&&A().then(e=>$t(ce(e))).catch(e=>{$t({available:!1,passed:!1,mode:`failed`,width:O.width,height:O.height,depth:O.depth,particleCount:O.particleCount,steps:O.steps,cpuFieldSum:0,gpuFieldSum:0,gpuNonzeroVoxels:0,fieldMeanAbsError:1/0,fieldMaxAbsError:1/0,particlePositionMeanError:1/0,particlePositionMaxError:1/0,tolerances:{fieldMeanAbsError:0,fieldMaxAbsError:0,particlePositionMeanError:0,particlePositionMaxError:0},error:e instanceof Error?e.message:String(e)})})},[]);let nn=(0,_.useMemo)(()=>mo({playing:at,overlay:lt,demoMode:Ue,frameCap:ze,cameraOrbitEnabled:Me,cameraOrbitSpeed:F,timelineEnabled:st,timeline:ge,trackingControls:ke}),[Me,F,Ue,ze,lt,at,ge,st,ke]),rn=(0,_.useMemo)(()=>fo({panel:R,sliders:Bt}),[R,Bt]),z=(0,_.useMemo)(()=>Ho(et,po(No(tt),tt,Bt)),[tt,et,Bt]);(0,_.useEffect)(()=>{u.current=z,fe.current||(j.current.targetYaw=z.cameraYaw),j.current.targetPitch=z.cameraPitch,j.current.targetDistance=z.cameraDistance,j.current.targetPanX=z.cameraPanX,j.current.targetPanY=z.cameraPanY,j.current.targetFov=z.fov},[z]),(0,_.useEffect)(()=>{Ge.current=Ue},[Ue]),(0,_.useEffect)(()=>{Je.current=Ke},[Ke]),(0,_.useEffect)(()=>{let e=e=>{if(Qe.current=performance.now(),!e||e.type!==`input`&&e.type!==`change`)return;let t=e.target;if(!(t instanceof HTMLInputElement)||t.type!==`range`)return;let n=t.dataset.testid??t.name;if(!n||!E.current[n])return;Ye.current.add(n);let r=$e.current;r.picks.length&&(r.picks=r.picks.filter(e=>e.key!==n))};e();let t={capture:!0,passive:!0},n=[`pointerdown`,`keydown`,`wheel`,`input`,`change`];for(let r of n)window.addEventListener(r,e,t);return()=>{for(let r of n)window.removeEventListener(r,e,t)}},[]),(0,_.useEffect)(()=>{de.current=ke,ue.current.setCohesion(ke.cohesion)},[ke]),(0,_.useEffect)(()=>{fe.current=Me,pe.current=F},[Me,F]),(0,_.useEffect)(()=>{Re.current=Ie},[Ie]),(0,_.useEffect)(()=>{Ve.current=ze},[ze]),(0,_.useEffect)(()=>{d.current=L},[L]),(0,_.useEffect)(()=>{S.current=R},[R]),(0,_.useEffect)(()=>{te.current=Bt;let e={};for(let[t,n]of Object.entries(Bt)){if(!ui(n.midi)||!n.midi?.control)continue;let r=mi(n.midi.control);e[r]=[...e[r]??[],t]}ie.current=e},[Bt]),(0,_.useEffect)(()=>{re.current=Jt},[Jt]),(0,_.useEffect)(()=>{D.current=Xt},[Xt]);let an=(0,_.useCallback)((e,t)=>{t?E.current[e]=t:delete E.current[e]},[]),on=(0,_.useCallback)((e,t)=>{Vt(n=>{let r={...n,[e]:t};return te.current=r,r}),delete x.current.bucketValues[e]},[]),sn=(0,_.useCallback)((e,t,n)=>{let r=E.current[e],i=t.midi;if(!r||!i)return;let a=Y(pi(i.min,i.max,n.value,r.value),Math.min(r.min,i.min,i.max),Math.max(r.max,i.min,i.max));a!==r.value&&r.onChange(a)},[]),cn=(0,_.useCallback)(e=>{let t=re.current;if(t!==`all`&&e.inputId!==t)return;Qe.current=performance.now(),ae.current+=1,oe.current=gi(e),k.current===null&&(k.current=requestAnimationFrame(()=>{k.current=null;let e=oe.current;oe.current=null,Gt(t=>({...t,enabled:!0,error:null,messageCount:ae.current,lastMessage:e??t.lastMessage}))}));let n=D.current;if(n){let t=E.current[n];if(t){let r=Di(te.current,n,t.min,t.max),i={...r,midi:ci(e,r.midi?.min??t.min,r.midi?.max??t.max)};D.current=null,Zt(null),on(n,i),sn(n,i,e)}}let r=new Set;for(let t of hi(e))for(let e of ie.current[t]??[])r.add(e);for(let t of r){let n=te.current[t];!n||!fi(n.midi,e)||sn(t,n,e)}},[sn,on]),ln=(0,_.useCallback)((e,t,n)=>{let r=di(e,t,n);r&&cn(r)},[cn]),un=(0,_.useCallback)(e=>{let t=La(e);qt(t),Yt(e=>e===`all`||t.some(t=>t.id===e)?e:(re.current=`all`,`all`));for(let t of e.inputs.values())t.onmidimessage=e=>{ln(t.id,t.name??t.id,e.data)}},[ln]),dn=(0,_.useCallback)(async()=>{if(ne.current)return un(ne.current),Gt(e=>({...e,supported:!0,enabled:!0,error:null})),ne.current;if(typeof navigator.requestMIDIAccess!=`function`)return Gt(e=>({...e,supported:!1,enabled:!1,error:`Web MIDI unavailable`})),null;try{let e=await navigator.requestMIDIAccess({sysex:!1});return ne.current=e,e.onstatechange=()=>un(e),un(e),Gt(e=>({...e,supported:!0,enabled:!0,error:null})),e}catch(e){let t=e instanceof Error?e.message:String(e);return Gt(e=>({...e,supported:!0,enabled:!1,error:t||`MIDI access denied`})),null}},[un]);(0,_.useEffect)(()=>{Object.values(Bt).some(e=>ui(e.midi))&&dn()},[dn,Bt]);let fn=(0,_.useCallback)(e=>{Ut(e),D.current=e,Zt(e),dn()},[dn]),pn=(0,_.useCallback)(()=>{D.current=null,Zt(null)},[]);(0,_.useEffect)(()=>(window.__lifesimInjectMidiMessage=(e,t=`test-midi`,n=`Test MIDI`)=>{ln(t,n,e)},()=>{delete window.__lifesimInjectMidiMessage,k.current!==null&&(cancelAnimationFrame(k.current),k.current=null);let e=ne.current;if(e){e.onstatechange=null;for(let t of e.inputs.values())t.onmidimessage=null}}),[ln]);let mn=(0,_.useMemo)(()=>({expandedKey:Ht,settings:Bt,midiStatus:Wt,midiLearningKey:Xt,register:an,setExpandedKey:Ut,updateConfig:on,startMidiLearn:fn,cancelMidiLearn:pn}),[pn,Ht,Xt,Wt,an,Bt,fn,on]),hn=(0,_.useCallback)((e,t)=>{let n=x.current,r=ji(n,e,S.current,t);bt.current=r,C.current={meters:r,frame:e},w.current===null&&(w.current=requestAnimationFrame(()=>{w.current=null;let e=C.current;if(C.current=null,!e||!yt.current)return;let t=performance.now();t-ee.current<50||(ee.current=t,Lt(e.meters),zt(e.frame))}));let i=te.current;if(Object.keys(i).length===0)return;let a=E.current,o={};for(let e of Object.keys(i)){let t=a[e];t&&(o[e]=t.value)}let s=Mi(n,e,S.current,i,o,t),c=performance.now();if(!(c-T.current<33)){T.current=c;for(let[e,t]of Object.entries(s)){let n=a[e];if(!n)continue;let r=Y(t,n.min,n.max);r!==n.value&&n.onChange(r)}}},[]);(0,_.useEffect)(()=>()=>{w.current!==null&&(cancelAnimationFrame(w.current),w.current=null)},[]),(0,_.useEffect)(()=>(window.__lifesimInjectAudioFrame=(e,t=1/60)=>{hn(e,t)},()=>{delete window.__lifesimInjectAudioFrame}),[hn]);let gn=(0,_.useRef)(hn);(0,_.useEffect)(()=>{gn.current=hn},[hn]),(0,_.useEffect)(()=>{let e=ri({onFrame:(e,t)=>gn.current(e,t),onState:e=>{Pt(t=>{let n=e.devices.length!==t.devices.length||e.devices.some((e,n)=>e.id!==t.devices[n]?.id||e.label!==t.devices[n]?.label);return e.status===t.status&&e.activeDeviceId===t.activeDeviceId&&e.error===t.error&&!n?t:e})}});return b.current=e,Pt(e.snapshot()),window.__lifesimBrowserAudio=()=>e.snapshot(),i&&e.start(),()=>{e.destroy(),b.current===e&&(b.current=null),delete window.__lifesimBrowserAudio}},[i]),(0,_.useEffect)(()=>{f.current=at},[at]),(0,_.useEffect)(()=>(window.__lifesimSetPlaying=e=>{f.current=e,ot(e)},()=>{delete window.__lifesimSetPlaying}),[]),(0,_.useEffect)(()=>{p.current=lt},[lt]),(0,_.useEffect)(()=>{m.current=xt},[xt]),(0,_.useEffect)(()=>{ve.current=ge},[ge]),(0,_.useEffect)(()=>{_e({type:`play`,playing:at})},[at]),(0,_.useEffect)(()=>{De.current=st},[st]),(0,_.useEffect)(()=>{let e=!1,n=0,r=async()=>{let i=Ve.current;if(i>0){let e=performance.now();if(e-He.current<1e3/i-1){n=requestAnimationFrame(r);return}He.current=e}if(we.current){n=requestAnimationFrame(r);return}if(o.current&&!c.current){c.current=!0;try{let n=performance.now(),r=he.current===0?1/60:Math.min(.05,(n-he.current)/1e3);he.current=n;let i=Math.max(1e-4,(o.current.clientWidth||1)/(o.current.clientHeight||1));Qe.current===0&&(Qe.current=n);{let e=$e.current,t=Je.current||Ge.current&&n-Qe.current>6e4;if(t&&!e.active?(e.active=!0,e.priorOrbit={enabled:fe.current,speed:pe.current},e.picks=[],e.lastPickMs=0,Ye.current.clear(),Xe.current=!1):!t&&e.active&&(e.active=!1,e.priorOrbit&&!Xe.current&&(fe.current=e.priorOrbit.enabled,pe.current=e.priorOrbit.speed,Pe(e.priorOrbit.enabled),Fe(e.priorOrbit.speed)),e.priorOrbit=null,e.picks=[],Ye.current.clear(),Xe.current=!1),e.active){if(!Xe.current){let e=te.current[`orbit-speed-slider`],t=E.current[`orbit-speed-slider`],n=e&&ui(e.midi)?e.midi:null,r=n?n.min:t?t.min:Ca.min,i=n?n.max:t?t.max:Ca.max,a=Y(.75,Math.min(r,i),Math.max(r,i));fe.current||(fe.current=!0,Pe(!0)),Math.abs(pe.current-a)>1e-4&&(pe.current=a,Fe(a))}if((e.picks.length===0||n-e.lastPickMs>24e3)&&(e.lastPickMs=n,e.picks=Ki(te.current,E.current,Ye.current,Gi).map(e=>{let t=E.current[e],r=te.current[e].midi,i=r?r.min:t.min,a=r?r.max:t.max,o=Math.min(i,a),s=Math.max(i,a),c=Math.min(s,Math.max(o,t.value)),l=/color|tint|hue|palette|gradient/.test(e.toLowerCase()),u=(14e3+Math.random()*9e3)*(l?3:1);return{key:e,from:c,to:o+(s-o)*Math.random(),lo:o,hi:s,startMs:n,durMs:u}})),n-e.lastDriftMs>=33){e.lastDriftMs=n;for(let t of e.picks){let e=E.current[t.key];if(!e)continue;let r=Math.min(1,(n-t.startMs)/t.durMs),i=r*r*(3-2*r),a=t.from+(t.to-t.from)*i,o=e.step>0?e.step:0,s=Math.min(t.hi,Math.max(t.lo,o>0?Math.round(a/o)*o:a)),c=o>0?o/2:1e-6;Math.abs(s-e.value)>c&&e.onChange(s)}}}}if(fe.current&&!N.current.active){let e=Zo(j.current.yaw+pe.current*r);j.current.yaw=e,j.current.targetYaw=e}ao(j.current,ue.current,de.current,me.current,i,r);let a=oo(u.current,j.current),c=f.current,g=p.current;{l.current&&=(await s.current.reset(),!1);let r=d.current,i=ve.current,u=s.current;u.setAudioLevels(bt.current.low,bt.current.mid,bt.current.high);let f,p;if(!(De.current||Ee.current.length>0))p=await u.render(o.current,a,g,c,r,t),f=p.timestep;else if(c){if(i.loopOut>i.loopIn&&u.currentTimestep>=i.loopOut)await u.reset(),i.loopIn>0&&await u.advanceSteps(o.current,r,i.loopIn),p=await u.render(o.current,a,g,!1,r,t);else{let e={...r,simulationSpeed:i.playbackSpeed};p=await u.render(o.current,a,g,!0,e,t)}f=p.timestep}else{f=i.currentFrame;let e=Dr(u.currentTimestep,f);e.needsReset?(await u.reset(),await u.advanceSteps(o.current,r,e.steps)):e.steps>0&&await u.advanceSteps(o.current,r,e.steps),p=await u.render(o.current,a,g,!1,r,t)}y.current=p,m.current=f;let _={yaw:a.cameraYaw,pitch:a.cameraPitch,distance:a.cameraDistance,panX:a.cameraPanX,panY:a.cameraPanY,fov:a.fov,focusDistance:a.focusDistance,aperture:a.aperture,dofBlur:a.dofBlur,dofEnabled:a.dofEnabled};if(ye.current.record(f,_),be.current.isRecording()&&be.current.record({timestep:f,controls:a,config:r,audio:{...bt.current}},n),Ee.current.length>0){let e=[];for(let t of Ee.current)t.frame===f?t.resolve():e.push(t);Ee.current=e}!e&&yt.current&&K(()=>{Mt(p),St(f),c&&_e({type:`scrub`,frame:f})},h)}}catch(t){let n=t instanceof Error?t.message:String(t);console.error(t),e||Oe(n),s.current.recover()}finally{c.current=!1}}q(g.current,t=>{!e&&yt.current&&wt(t)}),n=requestAnimationFrame(r)};return n=requestAnimationFrame(r),()=>{e=!0,cancelAnimationFrame(n)}},[]),(0,_.useEffect)(()=>{let e=!1,t=!1,n=0,r=async()=>{if(t)return;if(!e&&ue.current.state.active){e=!0;try{let e=await s.current.captureParticles(ra);if(e){let t=e.length/12;ue.current.setEps(dr(t)),ue.current.recluster(e,t,performance.now());let n=ue.current.state;je({active:n.active,members:n.members})}}catch(e){console.error(e)}finally{e=!1}}if(t)return;let i=y.current?.frameTimeMs??16,a=Math.max(na,Math.min(250,i*6));n=window.setTimeout(r,a)};return n=window.setTimeout(r,na),()=>{t=!0,window.clearTimeout(n)}},[]),(0,_.useEffect)(()=>(window.__lifesimTrackState=()=>{let e=ue.current.state,t=j.current;return{active:e.active,members:e.members,centroid:e.centroid,panX:t.panX,panY:t.panY,distance:t.distance}},()=>{delete window.__lifesimTrackState}),[]),(0,_.useEffect)(()=>(window.__lifesimDiagnostics=()=>({webgpu:en,mode:`live`,renderer:y.current,live:y.current,controls:z,audio:{capture:b.current?.snapshot()??Nt,panel:R,meters:It,lastSequence:Rt?.sequence??null,sliders:Bt},midi:{status:Wt,inputs:Kt,activeInputId:Jt,learningKey:Xt},fps:Ct,vertexCount:so(y.current,L),savedSettings:Tt.map(e=>({id:e.id,name:e.name,updatedAt:e.updatedAt})),selectedSettingsId:Et,preset:nt,liveConfig:L,frames:m.current,playing:at,overlay:lt,profileGpu:t,conformance:{deterministicPreset:!0,visualNonBlank:(y.current?.timestep??0)>0,webgpuProbeComplete:en.checked,webgpuRenderer:y.current?.renderer===`webgpu-live-3d`,webgpuCompute3d:Qt?.passed===!0,webgpuLive3d:lo(y.current)}}),()=>{delete window.__lifesimDiagnostics}),[Nt,Rt,It,R,Qt,z,Ct,xt,L,jt,Jt,Kt,Xt,Wt,lt,t,Tt,nt,Et,Bt,en]),(0,_.useEffect)(()=>{let e=e=>{let t=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),n=``,r=32768;for(let e=0;e<t.length;e+=r)n+=String.fromCharCode(...t.subarray(e,e+r));return btoa(n)};return window.__lifesimCaptureState=async()=>{for(let e=0;c.current&&e<120;e+=1)await new Promise(e=>window.setTimeout(e,16));if(c.current)throw Error(`State capture could not acquire the renderer`);c.current=!0;try{let t=await s.current.captureState();if(!t)return null;let n=oo(u.current,j.current),r=o.current;return{manifest:{version:1,frame:m.current,camera:{yaw:n.cameraYaw,pitch:n.cameraPitch,distance:n.cameraDistance,panX:n.cameraPanX,panY:n.cameraPanY,fov:n.fov,focusDistance:n.focusDistance,aperture:n.aperture,dofBlur:n.dofBlur,dofEnabled:n.dofEnabled},resolution:{width:r?.width??1024,height:r?.height??1024},grid:{width:t.width,height:t.height,depth:t.depth},voxelCount:t.voxelCount,particleCount:t.particleCount,timeline:{fps:60,totalFrames:Cr,currentFrame:ve.current.currentFrame,loopIn:ve.current.loopIn,loopOut:ve.current.loopOut},liveConfig:d.current,renderControls:No(n)},fieldB64:e(t.field),particlesB64:e(t.particles)}}finally{c.current=!1}},()=>{delete window.__lifesimCaptureState}},[]),(0,_.useEffect)(()=>(window.__lifesimParticleOscillationProbe=async(e={})=>{let n=o.current;if(!n)return null;for(let e=0;c.current&&e<120;e+=1)await new Promise(e=>window.setTimeout(e,16));if(c.current)throw Error(`Particle oscillation probe could not acquire the renderer`);let r=f.current;f.current=!1,ot(!1),c.current=!0;let i=s.current,a=d.current,l=e.particleCount??e.config?.particleCount??Math.min(a.particleCount,8192),m=Po({...a,...e.config,particleCount:Fo(l,128,65536),simulationSpeed:1,hazardRate:e.config?.hazardRate??0,recycleEnabled:e.config?.recycleEnabled??!1}),h=Fo(e.steps??80,4,240),g=Fo(e.maxParticles??m.particleCount,1,m.particleCount),_=Fo(e.topK??12,1,32),v=[];try{(e.reset??!0)&&await i.reset(),await i.render(n,u.current,p.current,!1,m,t);let r=await i.captureParticles(g);if(!r)throw Error(`Particle oscillation probe could not capture the initial state`);v.push(r);for(let e=0;e<h;e+=1){await i.advanceSteps(n,m,1);let t=await i.captureParticles(g);if(!t)throw Error(`Particle oscillation probe capture failed at step ${e+1}`);v.push(t)}let a=v.length?Math.max(4,Math.round(v[0].length/g)):ia;return{...Un(v,{particleCount:g,stride:a,topK:_,minStepDistance:2e-5,sampleCount:12,snapDistance:e.snapDistance}),capStride:a,config:{particleCount:m.particleCount,simulationSpeed:m.simulationSpeed,dt:m.dt,sensorAngle:m.sensorAngle,sensorDistance:m.sensorDistance,drag:m.drag,strafePower:m.strafePower,strafeMomentum:m.strafeMomentum,axialForce:m.axialForce,lateralForce:m.lateralForce,globalForceMult:m.globalForceMult,hazardRate:m.hazardRate,cohorts:m.cohorts,colorByCohort:m.colorByCohort,boundaryMode:m.boundaryMode}}}finally{try{await i.reset();let e=await i.render(n,u.current,p.current,!1,a,t);y.current=e,Mt(e)}finally{c.current=!1,f.current=r,ot(r)}}},()=>{delete window.__lifesimParticleOscillationProbe}),[t]),(0,_.useEffect)(()=>(window.__lifesimHashParticles=async(e={})=>{let n=o.current;if(!n)return null;for(let e=0;c.current&&e<120;e+=1)await new Promise(e=>window.setTimeout(e,16));if(c.current)throw Error(`Hash-particles hook could not acquire the renderer`);let r=f.current;f.current=!1,ot(!1),c.current=!0;let i=s.current,a=d.current,l=e.particleCount??e.config?.particleCount??Math.min(a.particleCount,8192),m=Po({...a,...e.config,particleCount:Fo(l,128,65536),simulationSpeed:1,hazardRate:e.config?.hazardRate??0,recycleEnabled:e.config?.recycleEnabled??!1}),h=Fo(e.steps??64,1,480);try{(e.reset??!0)&&await i.reset(),await i.render(n,u.current,p.current,!1,m,t),await i.advanceSteps(n,m,h);let r=await i.captureState();if(!r)throw Error(`Hash-particles hook could not capture sim state`);let a=(e,t,n)=>{let r=2166136261;for(let i=t;i<n;i+=1)r^=e[i],r=Math.imul(r,16777619);return r>>>0},o=e=>{let t=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);return a(t,0,t.length).toString(16).padStart(8,`0`)},s=e=>{let t=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),n=ia*Float32Array.BYTES_PER_ELEMENT,r=0;for(let e=0;e+n<=t.length;e+=n)r=r+a(t,e,e+n)>>>0;return(r>>>0).toString(16).padStart(8,`0`)},c=0;for(let e=3;e<r.field.length;e+=4)r.field[e]>c&&(c=r.field[e]);return{hash:s(r.particles),fieldHash:o(r.field),particleCount:r.particleCount,steps:h,maxDensity:c}}finally{try{await i.reset();let e=await i.render(n,u.current,p.current,!1,a,t);y.current=e,Mt(e)}finally{c.current=!1,f.current=r,ot(r)}}},()=>{delete window.__lifesimHashParticles}),[t]),(0,_.useEffect)(()=>(window.__lifesimBenchSteps=async(e={})=>{let n=o.current;if(!n)return null;for(let e=0;c.current&&e<120;e+=1)await new Promise(e=>window.setTimeout(e,16));if(c.current)throw Error(`Bench hook could not acquire the renderer`);let r=f.current;f.current=!1,ot(!1),c.current=!0;let i=s.current,a=d.current,l=e.particleCount??e.config?.particleCount??Math.min(a.particleCount,8192),m=Po({...a,...e.config,particleCount:Fo(l,128,65536),simulationSpeed:1,hazardRate:e.config?.hazardRate??0,recycleEnabled:e.config?.recycleEnabled??!1}),h=Fo(e.steps??200,1,2e3),g=Fo(e.reps??5,1,30),_=Fo(e.warmup??30,0,500);try{await i.reset(),await i.render(n,u.current,p.current,!1,m,t),_>0&&await i.advanceSteps(n,m,_);let e=[];for(let t=0;t<g;t+=1){let t=performance.now();await i.advanceSteps(n,m,h),e.push(performance.now()-t)}let r=[...e].sort((e,t)=>e-t);return{medianMs:r[Math.floor(r.length/2)],samples:e,steps:h,particleCount:m.particleCount}}finally{try{await i.reset();let e=await i.render(n,u.current,p.current,!1,a,t);y.current=e,Mt(e)}finally{c.current=!1,f.current=r,ot(r)}}},()=>{delete window.__lifesimBenchSteps}),[t]),(0,_.useEffect)(()=>(window.__lifesimTimelineSeek=e=>{let t=Math.max(0,Math.min(Cr-1,Math.round(e)));return f.current=!1,ve.current={...ve.current,playing:!1,currentFrame:t},ot(!1),_e({type:`play`,playing:!1}),_e({type:`scrub`,frame:t}),new Promise(e=>{Ee.current.push({frame:t,resolve:()=>e(t)})})},window.__lifesimSetCameraOrbit=e=>{let t=j.current;t.yaw=e.yaw,t.targetYaw=e.yaw,t.pitch=e.pitch,t.targetPitch=e.pitch,t.distance=e.distance,t.targetDistance=e.distance,e.panX!==void 0&&(t.panX=e.panX,t.targetPanX=e.panX),e.panY!==void 0&&(t.panY=e.panY,t.targetPanY=e.panY)},window.__lifesimSetRenderControl=e=>{I(t=>({...t,...e}))},window.__lifesimSetSplatPrepass=e=>{s.current.splatPrepassEnabled=e},window.__lifesimSetComputeSplat=e=>{s.current.computeSplatEnabled=e},window.__lifesimSetFieldTextureSensing=e=>{s.current.fieldTextureSensingEnabled=e},window.__lifesimSetParticleSort=e=>{s.current.particleSortEnabled=e},window.__lifesimSetParallelPipelineCompile=e=>{s.current.parallelPipelineCompile=e},()=>{delete window.__lifesimTimelineSeek,delete window.__lifesimSetCameraOrbit,delete window.__lifesimSetRenderControl,delete window.__lifesimSetSplatPrepass,delete window.__lifesimSetComputeSplat,delete window.__lifesimSetFieldTextureSensing,delete window.__lifesimSetParticleSort,delete window.__lifesimSetParallelPipelineCompile}),[]),(0,_.useEffect)(()=>{let e=e=>{let n=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);return t(n)},t=e=>{let t=``,n=32768;for(let r=0;r<e.length;r+=n)t+=String.fromCharCode(...e.subarray(r,r+n));return btoa(t)};return window.__lifesimReadCanvasHDR=async()=>{let t=await s.current.readCanvasHDR();return t?{width:t.width,height:t.height,pixelsB64:e(t.pixels)}:null},window.__lifesimReplayBegin=async e=>{we.current=!0,f.current=!1;let t=s.current;t.captureFinalHDR=!0,d.current=e,await t.reset(),Te.current=0},window.__lifesimReplayFrame=async e=>{if(!o.current)return null;let n=s.current,r=e.timestep-Te.current;r>0&&await n.advanceSteps(o.current,e.config,r),Te.current=e.timestep,n.aspectOverride=e.aspect&&e.aspect>0?e.aspect:0,n.setAudioLevels(e.audio.low,e.audio.mid,e.audio.high),await n.render(o.current,e.controls,!1,!1,e.config,!1);let i=await n.readFinalHDRRaw();return i?{width:i.width,height:i.height,bytesPerRow:i.bytesPerRow,halfB64:t(i.data)}:null},window.__lifesimReplayEnd=()=>{we.current=!1,Te.current=0,s.current.captureFinalHDR=!1,s.current.aspectOverride=0},()=>{delete window.__lifesimReadCanvasHDR,delete window.__lifesimReplayBegin,delete window.__lifesimReplayFrame,delete window.__lifesimReplayEnd}},[]),(0,_.useEffect)(()=>{let e=(e,t,n)=>{let r=e.width,i=e.height,a=e.depth,o=new Float32Array(r*i*a*4),s=(e,t,n,s,c)=>{let l=Math.max(0,Math.min(r-1,e)),u=Math.max(0,Math.min(i-1,t)),d=((Math.max(0,Math.min(a-1,n))*i+u)*r+l)*4,f=Math.max(0,s.alpha??.045)/.045,p=Math.max(0,c*f),m=s.velocity??[0,0,0];o[d+0]+=m[0]*p,o[d+1]+=m[1]*p,o[d+2]+=m[2]*p,o[d+3]=Math.max(o[d+3],p)};for(let e=0;e<n;e+=1){let n=t[e];if(!n)continue;let o=(n.x+1)*.5*r-.5,c=(n.y+1)*.5*i-.5,l=(n.z+1)*.5*a-.5;if(!Number.isFinite(o+c+l))continue;let u=Math.round(o),d=Math.round(c),f=Math.round(l);for(let e=-1;e<=1;e+=1)for(let t=-1;t<=1;t+=1)for(let r=-1;r<=1;r+=1){let i=Math.hypot(r,t,e);s(u+r,d+t,f+e,n,Math.max(.08,1-i*.32))}}return o};return window.__parityReady=!1,window.__lifesimLoadParityScene=async n=>{let r=s.current,i=d.current.particleCount,a=new Float32Array(i*8),l=Math.min(n.particles.length,i);for(let e=0;e<l;e++){let t=n.particles[e],r=e*8;a[r+0]=t.x,a[r+1]=t.y,a[r+2]=t.z,a[r+3]=t.cohort??0;let i=t.velocity??[0,0,0];a[r+4]=i[0],a[r+5]=i[1],a[r+6]=i[2],a[r+7]=t.hue??(t.rgb?t.rgb[0]:0)}for(let e=l;e<i;e++){let t=e*8;a[t+0]=1e6,a[t+1]=1e6,a[t+2]=1e6}r.clearField(),(n.seedField??!0)&&r.setFieldBufferData(e(d.current,n.particles,l)),r.setParticleBufferData(a);let m=n.camera;j.current.yaw=m.yaw,j.current.targetYaw=m.yaw,j.current.pitch=m.pitch,j.current.targetPitch=m.pitch,j.current.distance=m.distance,j.current.targetDistance=m.distance,j.current.panX=m.panX,j.current.targetPanX=m.panX,j.current.panY=m.panY,j.current.targetPanY=m.panY,j.current.fov=m.fov,j.current.targetFov=m.fov;let h=n.renderControls??{},g={...u.current,...h,cameraYaw:m.yaw,cameraPitch:m.pitch,cameraDistance:m.distance,cameraPanX:m.panX,cameraPanY:m.panY,focusDistance:m.focusDistance,aperture:m.aperture,dofBlur:m.dofBlur,dofEnabled:m.dofEnabled??h.dofEnabled??u.current.dofEnabled,renderLayer:h.renderLayer??`particles`,particleColorMode:h.particleColorMode??`solid`,particleBlendMode:h.particleBlendMode??`additive`,particleBrightness:h.particleBrightness??1,particleOpacity:h.particleOpacity??.42,particleTint:h.particleTint??`#ffffff`,particleSizePx:h.particleSizePx??u.current.particleSizePx,particleMinPx:h.particleMinPx??u.current.particleMinPx,particleMaxPx:h.particleMaxPx??u.current.particleMaxPx,particleVelocityStretch:h.particleVelocityStretch??!1,particleStretch:h.particleStretch??u.current.particleStretch,particleStretchMin:h.particleStretchMin??u.current.particleStretchMin,particleStretchSpeed:h.particleStretchSpeed??u.current.particleStretchSpeed,exposure:h.exposure??1,sceneBrightness:h.sceneBrightness??1};u.current=g,I(g),f.current&&document.querySelector(`[data-testid="play-toggle"]`)?.click();let _=o.current;if(_){for(let e=0;c.current&&e<30;e+=1)await new Promise(e=>window.setTimeout(e,16));c.current=!0;try{let e=await s.current.render(_,u.current,p.current,!1,d.current,t);y.current=e,Mt(e)}finally{c.current=!1}}else await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(()=>e())));let v=null,b=``;try{let e=await s.current.readSceneHDR();if(e){let t=new Uint8Array(e.pixels.buffer,e.pixels.byteOffset,e.pixels.byteLength),n=``,r=32768;for(let e=0;e<t.length;e+=r)n+=String.fromCharCode(...t.subarray(e,e+r));v={width:e.width,height:e.height,pixelsB64:btoa(n)}}}catch(e){b=e instanceof Error?e.message:String(e),console.warn(`readSceneHDR failed:`,e)}return window.__parityReady=!0,{canvasWidth:_?.width??0,canvasHeight:_?.height??0,particleCount:l,hdr:v,hdrError:b}},()=>{delete window.__lifesimLoadParityScene,delete window.__parityReady}},[]);let _n=(0,_.useCallback)(()=>{l.current=!0,y.current=null,Mt(null),m.current=0,St(0)},[]),vn=(0,_.useCallback)(async()=>{let e=e=>e&&e.getAudioTracks().some(e=>e.readyState===`live`)?e:null,t=e(b.current?.getStream());if(t)return t;let n=e(Se.current);if(n)return n;try{let e=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}});return Se.current=e,e}catch{return null}},[]),yn=(0,_.useCallback)(async()=>{let e=be.current,t=xe.current;if(e.isRecording()){let n=performance.now(),r=e.stop(),i=await t.stop(n),a=r?.frames.length??0,o=r?await bo(r):null,s=i?await xo(i,a):null;(o||s)&&console.info(`[3d-life-sim] performance downloaded:`,o,s)}else{let n=o.current,r=await vn(),i=performance.now();e.start({version:1,width:n?.width??0,height:n?.height??0},i),r&&t.start(r,i)}},[vn]);(0,_.useEffect)(()=>{Ce.current=()=>{yn()}},[yn]);let B=(0,_.useCallback)((e,t=!1)=>{it(t=>{let n=is({...t,...e});return d.current=n,n}),t&&_n()},[_n]),bn=(0,_.useCallback)(e=>{let t=$o(e),n=ls(t,d.current.width);B({particleCount:t,width:n,height:n,depth:n},!0)},[B]),xn=(0,_.useCallback)(e=>{let t=Po(e.liveConfig),n=mt?{...t,particleCount:Ur(t.particleCount)}:t,r=Ho(`live`,No(e.controls)),i=mt?{...r,particleGlowCore:0,particleSupportMask:.2}:r,a=Bo(e.ui)?e.ui:e,o=Ao(a,Oo(a)),s=Do(e.audio);Dt(e.id),e.fileBacked&&Nr.some(t=>t===e.id)&&kt(e.id),rt(e.presetId),ot(o.playing),f.current=o.playing,ut(o.overlay),p.current=o.overlay,Pe(o.cameraOrbit.enabled),Fe(o.cameraOrbit.speed),fe.current=o.cameraOrbit.enabled,pe.current=o.cameraOrbit.speed,Le(!1),Re.current=!1,We(o.demoMode),Ge.current=o.demoMode,Be(o.frameCap),Ve.current=o.frameCap,Ae(o.trackingControls),de.current=o.trackingControls,ue.current.setCohesion(o.trackingControls.cohesion),ct(o.timeline.enabled),De.current=o.timeline.enabled,ve.current={...o.timeline.state,playing:o.playing},_e({type:`set-loop`,loopIn:o.timeline.state.loopIn,loopOut:o.timeline.state.loopOut}),_e({type:`set-speed`,speed:o.timeline.state.playbackSpeed}),_e({type:`scrub`,frame:o.timeline.state.currentFrame}),_e({type:`play`,playing:o.playing}),u.current=i,d.current=n,S.current=s.panel,te.current=s.sliders,I(i),it(n),Ft(s.panel),Vt(s.sliders),x.current=Ti(),j.current={yaw:i.cameraYaw,pitch:i.cameraPitch,distance:i.cameraDistance,panX:i.cameraPanX,panY:i.cameraPanY,fov:i.fov,targetYaw:i.cameraYaw,targetPitch:i.cameraPitch,targetDistance:i.cameraDistance,targetPanX:i.cameraPanX,targetPanY:i.cameraPanY,targetFov:i.fov},_n()},[mt,_n,_e]);(0,_.useEffect)(()=>(window.__lifesimApplyPreset=e=>{xn(e)},()=>{delete window.__lifesimApplyPreset}),[xn]);let Sn=(0,_.useCallback)(e=>{let t=At.find(t=>t.id===e);t&&xn(t)},[xn,At]),Cn=(0,_.useRef)(!1);(0,_.useEffect)(()=>{if(Cn.current)return;let e=Vr(window.location.search,Tt);if(e===null){let e=new URLSearchParams(window.location.search);(e.has(`profileGpu`)||e.has(`skipAppCompute`)||e.has(`settings`))&&(Cn.current=!0);return}let t=Tt.find(t=>t.id===e);if(t){Cn.current=!0,xn(t);let e=Number(new URLSearchParams(window.location.search).get(`particles`));Number.isFinite(e)&&e>0&&it(t=>({...t,particleCount:$o(e)}))}},[Tt,xn]);let wn=(0,_.useCallback)(async()=>{let e=Tt.find(e=>e.id===Et)?.name??ho(nt);try{let t=await go(e,e=>uo(e,nt,et,z,L,nn,rn));if(!t)return;So(t)}catch(e){window.alert(e instanceof Error?e.message:String(e))}},[z,rn,nn,et,L,Tt,nt,Et]),Tn=(0,_.useCallback)(async e=>{let t=To(await Gr(e),Ro(e.name));xn(t)},[xn]),En=(0,_.useCallback)(async()=>{let e=window;if(e.showOpenFilePicker){try{let[t]=await e.showOpenFilePicker({multiple:!1,types:ja});if(!t)return;await Tn(await t.getFile())}catch(e){zo(e)||window.alert(e instanceof Error?e.message:String(e))}return}v.current?.click()},[Tn]),Dn=(0,_.useCallback)(async e=>{let t=e.target.files?.[0];if(e.target.value=``,t)try{await Tn(t)}catch(e){window.alert(e instanceof Error?e.message:String(e))}},[Tn]),On=(0,_.useCallback)((e,t=!1)=>{let n=j.current,r=Zo(e.yaw??n.targetYaw),i=Y(e.pitch??n.targetPitch,sa,ca),a=Qo(e.distance??n.targetDistance),o=Y(e.panX??n.targetPanX,la,ua),s=Y(e.panY??n.targetPanY,la,ua);n.targetYaw=r,n.targetPitch=i,n.targetDistance=a,n.targetPanX=o,n.targetPanY=s,t&&(n.yaw=r,n.pitch=i,n.distance=a,n.panX=o,n.panY=s),I(e=>({...e,cameraYaw:r,cameraPitch:i,cameraDistance:a,cameraPanX:o,cameraPanY:s}))},[]),kn=(0,_.useCallback)(e=>{if(Re.current||e.button!==0&&e.button!==1)return;if(e.preventDefault(),e.pointerType===`touch`){if(M.current.set(e.pointerId,{x:e.clientX,y:e.clientY}),e.currentTarget.setPointerCapture(e.pointerId),M.current.size===2){let[t,n]=[...M.current.values()];le.current={span:Math.max(12,Math.hypot(n.x-t.x,n.y-t.y)),distance:j.current.targetDistance,x:(t.x+n.x)/2,y:(t.y+n.y)/2},N.current={active:!1,mode:null,pointerId:null,x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY},ft(null);return}if(M.current.size>2)return}let t=e.button===1?`pan`:`orbit`,n=j.current;On({yaw:n.yaw,pitch:n.pitch,distance:n.distance,panX:n.panX,panY:n.panY}),N.current={active:!0,mode:t,pointerId:e.pointerId,x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY},e.currentTarget.setPointerCapture(e.pointerId),ft(t)},[On]),An=(0,_.useCallback)(e=>{if(Re.current)return;if(e.pointerType===`touch`&&M.current.has(e.pointerId)){M.current.set(e.pointerId,{x:e.clientX,y:e.clientY});let t=le.current;if(t&&M.current.size>=2){e.preventDefault();let[n,r]=[...M.current.values()],i=Math.max(12,Math.hypot(r.x-n.x,r.y-n.y)),a=(n.x+r.x)/2,o=(n.y+r.y)/2,s=j.current,c=e.currentTarget,l=Math.max(1,c.clientWidth),u=Math.max(1,c.clientHeight),d=l/u,f=s.targetDistance/da;On({distance:t.distance*(t.span/i),panX:s.targetPanX+(a-t.x)*2/l*d*f,panY:s.targetPanY-(o-t.y)*2/u*f}),le.current={...t,x:a,y:o};return}}let t=N.current;if(!t.active||t.pointerId!==e.pointerId)return;e.preventDefault();let n=e.clientX-t.x,r=e.clientY-t.y;N.current={...t,x:e.clientX,y:e.clientY};let i=j.current;if(t.mode===`pan`){let t=e.currentTarget,a=Math.max(1,t.clientWidth),o=Math.max(1,t.clientHeight),s=a/o,c=i.targetDistance/da;On({panX:i.targetPanX+n*2/a*s*c,panY:i.targetPanY-r*2/o*c})}else On({yaw:i.targetYaw+n*.0048,pitch:i.targetPitch-r*.0042})},[On]),jn=(0,_.useCallback)(async(e,t)=>{let n=o.current;if(!n)return;let r=n.getBoundingClientRect(),i=Math.max(1,r.width),a=Math.max(1,r.height),c=[(e-r.left)/i*2-1,-((t-r.top)/a*2-1)],l=j.current,u=vr(c,{yaw:l.yaw,pitch:l.pitch,distance:l.distance,aspect:i/a}),d=await s.current.captureParticles(ra);if(!d)return;let f=d.length/12;ue.current.setEps(dr(f));let p=sr(u,d,f,ta);if(p<0){je({active:!1,members:0,miss:`no particle under cursor`});return}let m=ue.current.lockFromSeed(d,f,p),h=ue.current.state;je({active:m&&h.active,members:h.members,miss:m?void 0:`too sparse here — try a denser blob`})},[]),Mn=(0,_.useCallback)(e=>{if(e.pointerType===`touch`&&M.current.delete(e.pointerId)){if(M.current.size>=2&&le.current){let[e,t]=[...M.current.values()];le.current={span:Math.max(12,Math.hypot(t.x-e.x,t.y-e.y)),distance:j.current.targetDistance,x:(e.x+t.x)/2,y:(e.y+t.y)/2}}else M.current.size<2&&(le.current=null);if(M.current.size===1&&!N.current.active&&!Re.current){let[[e,t]]=[...M.current.entries()];N.current={active:!0,mode:`orbit`,pointerId:e,x:t.x,y:t.y,startX:t.x,startY:t.y},ft(`orbit`);return}}let t=N.current;t.pointerId!==null&&t.pointerId!==e.pointerId||(e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Math.hypot(e.clientX-t.startX,e.clientY-t.startY)<4&&t.mode===`orbit`&&(de.current.follow||de.current.look)&&jn(e.clientX,e.clientY),N.current={active:!1,mode:null,pointerId:null,x:e.clientX,y:e.clientY,startX:t.startX,startY:t.startY},ft(null))},[jn]),Nn=(0,_.useCallback)((e,t)=>{if(Re.current)return;let n=Y(e*(t===1?18:t===2?240:1),-420,420),r=j.current,i=r.targetDistance<=aa&&n>0?ba.step:r.targetDistance;On({distance:i*Math.exp(n*.00145)})},[On]),Pn=(0,_.useCallback)(()=>{if(to()){let e=ro();if(!e){console.warn(`Fullscreen API is not available in this browser.`);return}Promise.resolve(e()).catch(e=>console.warn(`Could not exit fullscreen`,e));return}let e=no(a.current??o.current);if(!e){console.warn(`Fullscreen API is not available in this browser.`);return}Promise.resolve(e()).catch(e=>console.warn(`Could not enter fullscreen`,e))},[]);(0,_.useEffect)(()=>{let e=e=>{if(e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||io(e.target))return;let t=e.key.toLowerCase();t===`f`?(e.preventDefault(),Pn()):t===`m`?(e.preventDefault(),gt(e=>!e)):t===`r`&&(e.preventDefault(),Ce.current())};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[Pn]),(0,_.useEffect)(()=>{let e=0,t=()=>{vt(!1),window.clearTimeout(e),to()&&(e=window.setTimeout(()=>vt(!0),2500))},n=()=>{window.clearTimeout(e),to()?e=window.setTimeout(()=>vt(!0),2500):vt(!1)};return window.addEventListener(`mousemove`,t),window.addEventListener(`pointerdown`,t),document.addEventListener(`fullscreenchange`,n),document.addEventListener(`webkitfullscreenchange`,n),()=>{window.clearTimeout(e),window.removeEventListener(`mousemove`,t),window.removeEventListener(`pointerdown`,t),document.removeEventListener(`fullscreenchange`,n),document.removeEventListener(`webkitfullscreenchange`,n)}},[]),(0,_.useEffect)(()=>{let e=o.current;if(!e)return;let t=e=>{e.preventDefault(),e.stopPropagation(),Nn(e.deltaY,e.deltaMode)};return e.addEventListener(`wheel`,t,{passive:!1}),()=>{e.removeEventListener(`wheel`,t)}},[Nn]);let Fn=so(jt,L);return(0,H.jsx)($i.Provider,{value:mn,children:(0,H.jsxs)(`main`,{ref:a,className:`app-shell${ht?``:` panel-collapsed`}${mt?` is-mobile`:``}${_t?` cursor-idle`:``}`,children:[(0,H.jsxs)(`section`,{className:`viewport-band`,"data-testid":`viewport-band`,children:[(0,H.jsx)(`canvas`,{ref:o,className:`simulation-canvas${dt===`orbit`?` is-tumbling`:dt===`pan`?` is-panning`:``}`,"data-testid":`simulation-canvas`,onPointerDown:kn,onPointerMove:An,onPointerUp:Mn,onPointerCancel:Mn,onLostPointerCapture:Mn,onAuxClick:e=>e.preventDefault()}),ht?(0,H.jsxs)(`div`,{className:`viewport-stats`,"data-testid":`viewport-stats`,"aria-label":`Viewport performance`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`FPS`}),(0,H.jsx)(`strong`,{children:Ct>0?Ct.toFixed(0):`...`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Verts`}),(0,H.jsx)(`strong`,{children:co(Fn)})]})]}):null,(0,H.jsx)(`script`,{type:`application/json`,"data-testid":`profile-json`,dangerouslySetInnerHTML:{__html:JSON.stringify({webgpu:en,mode:`live`,renderer:jt,live:jt,controls:z,audio:{capture:Nt,panel:R,meters:It,lastSequence:Rt?.sequence??null,sliders:Bt},midi:{status:Wt,inputs:Kt,activeInputId:Jt,learningKey:Xt},fps:Ct,vertexCount:Fn,preset:nt,liveConfig:L,frames:xt,playing:at,overlay:lt,profileGpu:t}).replace(/</g,`\\u003c`)}}),P?(0,H.jsx)(`div`,{className:`load-error`,children:P}):null]}),(0,H.jsxs)(`aside`,{id:`control-panel`,className:`control-panel`,"data-testid":`control-panel`,"aria-label":`3D Life cockpit controls`,children:[(0,H.jsx)(qa,{value:Ot,settings:At,onChange:Sn}),(0,H.jsxs)(Ba,{title:`Settings`,children:[(0,H.jsxs)(`div`,{className:`settings-actions`,children:[(0,H.jsx)(`button`,{className:`settings-primary-action`,"data-testid":`play-toggle`,onClick:()=>ot(e=>!e),children:at?`Pause`:`Play`}),(0,H.jsx)(`button`,{"data-testid":`save-settings`,onClick:wn,children:`Save JSON`}),(0,H.jsx)(`button`,{"data-testid":`import-settings`,onClick:En,children:`Load JSON`})]}),(0,H.jsx)(`input`,{ref:v,className:`hidden-file-input`,"data-testid":`json-preset-input`,type:`file`,accept:`application/json,.json`,onChange:Dn})]}),(0,H.jsx)(Ja,{label:`Seed`,value:Xi,readOnly:!0,testId:`seed-input`}),(0,H.jsxs)(Ba,{title:`Particles`,children:[(0,H.jsx)(Ja,{label:`Particles`,value:L.particleCount,min:128,step:Zn,testId:`particle-input`,onChange:bn}),(0,H.jsx)(G,{label:`P Glow`,value:z.particleGlowCore,...U.particleGlowCore,testId:`particle-glow-core-slider`,onChange:e=>I(t=>({...t,particleGlowCore:e}))}),(0,H.jsx)(G,{label:`P Hot`,value:z.particleHotCore,...U.particleHotCore,testId:`particle-hot-core-slider`,onChange:e=>I(t=>({...t,particleHotCore:e}))}),(0,H.jsx)(G,{label:`Density Exponent`,value:z.particleExponent,...U.particleExponent,testId:`particle-exponent-slider`,onChange:e=>I(t=>({...t,particleExponent:e}))}),(0,H.jsx)(G,{label:`Brightness Boost`,value:z.particleBrightnessBoost,...U.particleBrightnessBoost,testId:`particle-brightness-boost-slider`,onChange:e=>I(t=>({...t,particleBrightnessBoost:e}))}),(0,H.jsx)(Ha,{value:z.particleColorMode,onChange:e=>I(t=>({...t,particleColorMode:e}))}),(0,H.jsx)(Za,{label:`P Color`,value:z.particleColorMode,testId:`particle-color-mode-slider`,options:ya,onChange:e=>I(t=>({...t,particleColorMode:e}))}),(0,H.jsx)(Xa,{label:`P Tint`,value:z.particleTint,onChange:e=>I(t=>({...t,particleTint:e}))}),(0,H.jsx)(Va,{value:z.particleBlendMode,onChange:e=>I(t=>({...t,particleBlendMode:e}))}),(0,H.jsx)(G,{label:`P Scale`,value:z.particleSizePx,...U.particleSizePx,testId:`particle-size-slider`,onChange:e=>I(t=>({...t,particleSizePx:e}))}),(0,H.jsx)(G,{label:`P Opacity`,value:z.particleOpacity,...U.particleOpacity,onChange:e=>I(t=>({...t,particleOpacity:e}))}),(0,H.jsx)(G,{label:`P Cutoff`,value:z.particleDensityCutoff,...U.particleDensityCutoff,curve:3,testId:`particle-density-cutoff-slider`,onChange:e=>I(t=>({...t,particleDensityCutoff:e}))}),(0,H.jsx)(G,{label:`P Radius`,value:z.particleDensityRadius,...U.particleDensityRadius,testId:`particle-density-radius-slider`,onChange:e=>I(t=>({...t,particleDensityRadius:e}))}),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(G,{label:`P Keep`,value:z.particleDensityNormalize,...U.particleDensityNormalize,testId:`particle-density-normalize-slider`,onChange:e=>I(t=>({...t,particleDensityNormalize:e}))}),(0,H.jsx)(G,{label:`P Soft`,value:z.particleDensitySoftness,...U.particleDensitySoftness,testId:`particle-density-softness-slider`,onChange:e=>I(t=>({...t,particleDensitySoftness:e}))}),(0,H.jsx)(G,{label:`Support`,value:z.particleSupportMask,...U.particleSupportMask,testId:`particle-support-mask-slider`,onChange:e=>I(t=>({...t,particleSupportMask:e}))}),(0,H.jsx)(G,{label:`Supp Rad`,value:z.particleSupportRadius,...U.particleSupportRadius,testId:`particle-support-radius-slider`,onChange:e=>I(t=>({...t,particleSupportRadius:e}))}),(0,H.jsx)(G,{label:`Neighbors`,value:z.particleSupportNeighbors,...U.particleSupportNeighbors,testId:`particle-support-neighbors-slider`,onChange:e=>I(t=>({...t,particleSupportNeighbors:e}))}),(0,H.jsx)(G,{label:`Flow Agree`,value:z.particleSupportFlow,...U.particleSupportFlow,testId:`particle-support-flow-slider`,onChange:e=>I(t=>({...t,particleSupportFlow:e}))}),(0,H.jsx)(G,{label:`Haze Cull`,value:z.particleHazeCull,...U.particleHazeCull,testId:`particle-haze-cull-slider`,onChange:e=>I(t=>({...t,particleHazeCull:e}))}),(0,H.jsx)(G,{label:`Despeckle`,value:z.particleDespeckle,...U.particleDespeckle,testId:`particle-despeckle-slider`,onChange:e=>I(t=>({...t,particleDespeckle:e}))}),(0,H.jsx)(G,{label:`Supp Smooth`,value:z.particleSupportSmoothing,...U.particleSupportSmoothing,testId:`particle-support-smoothing-slider`,onChange:e=>I(t=>({...t,particleSupportSmoothing:e}))}),(0,H.jsx)(Ka,{label:`Cutoff Prepass`,checked:z.particleCutoffPrepass,testId:`cutoff-prepass-checkbox`,onChange:e=>I(t=>({...t,particleCutoffPrepass:e}))})]}),(0,H.jsx)(Ka,{label:`Recycle`,checked:L.recycleEnabled,onChange:e=>B({recycleEnabled:e})}),(0,H.jsx)(G,{label:`Flow Color`,value:L.hueSensitivity,...Da.hueSensitivity,testId:`hue-sensitivity-slider`,onChange:e=>B({hueSensitivity:e})}),(0,H.jsx)(Ka,{label:`Vel Stretch`,checked:z.particleVelocityStretch,testId:`particle-velocity-stretch-checkbox`,onChange:e=>I(t=>({...t,particleVelocityStretch:e}))}),(0,H.jsx)(G,{label:`Stretch Min`,value:z.particleStretchMin,...U.particleStretchMin,testId:`particle-stretch-min-slider`,onChange:e=>I(t=>({...t,particleStretchMin:e,particleStretch:Math.max(t.particleStretch,e)}))}),(0,H.jsx)(G,{label:`Stretch Max`,value:z.particleStretch,...U.particleStretch,testId:`particle-stretch-max-slider`,onChange:e=>I(t=>({...t,particleStretch:e,particleStretchMin:Math.min(t.particleStretchMin,e)}))}),(0,H.jsx)(G,{label:`Stretch Speed`,value:z.particleStretchSpeed,...U.particleStretchSpeed,testId:`particle-stretch-speed-slider`,onChange:e=>I(t=>({...t,particleStretchSpeed:e}))}),(0,H.jsx)(G,{label:`P Speed Cut`,value:z.particleSpeedCutoff,...U.particleSpeedCutoff,testId:`particle-speed-cutoff-slider`,onChange:e=>I(t=>({...t,particleSpeedCutoff:e}))}),(0,H.jsx)(G,{label:`P Slow Cut`,value:z.particleSlowCutoff,...U.particleSlowCutoff,testId:`particle-slow-cutoff-slider`,onChange:e=>I(t=>({...t,particleSlowCutoff:e}))})]}),(0,H.jsxs)(Ba,{title:`Variation`,children:[(0,H.jsx)(G,{label:`Var Master`,value:z.variationMaster,...U.variationMaster,testId:`variation-master-slider`,onChange:e=>I(t=>({...t,variationMaster:e}))}),(0,H.jsx)(G,{label:`Var Drift`,value:z.variationDrift,...U.variationDrift,testId:`variation-drift-slider`,onChange:e=>I(t=>({...t,variationDrift:e}))}),(0,H.jsx)(G,{label:`Var Coherence`,value:z.variationNoiseMix,...U.variationNoiseMix,testId:`variation-noise-mix-slider`,onChange:e=>I(t=>({...t,variationNoiseMix:e}))}),(0,H.jsx)(G,{label:`Var Scale`,value:z.variationFreq,...U.variationFreq,testId:`variation-freq-slider`,onChange:e=>I(t=>({...t,variationFreq:e}))}),(0,H.jsx)(G,{label:`Var Octaves`,value:z.variationOctaves,...U.variationOctaves,testId:`variation-octaves-slider`,onChange:e=>I(t=>({...t,variationOctaves:e}))}),(0,H.jsx)(G,{label:`Var Gain`,value:z.variationGain,...U.variationGain,testId:`variation-gain-slider`,onChange:e=>I(t=>({...t,variationGain:e}))}),(0,H.jsx)(G,{label:`Var Detail`,value:z.variationLacunarity,...U.variationLacunarity,testId:`variation-lacunarity-slider`,onChange:e=>I(t=>({...t,variationLacunarity:e}))}),(0,H.jsx)(G,{label:`Size Amt`,value:z.variationSizeAmount,...U.variationSizeAmount,testId:`variation-size-amount-slider`,onChange:e=>I(t=>({...t,variationSizeAmount:e}))}),(0,H.jsx)(G,{label:`Size Curve`,value:z.variationSizeCurve,...U.variationSizeCurve,curve:3,testId:`variation-size-curve-slider`,onChange:e=>I(t=>({...t,variationSizeCurve:e}))}),(0,H.jsx)(G,{label:`Size Min`,value:z.variationSizeMin,...U.variationSizeMin,testId:`variation-size-min-slider`,onChange:e=>I(t=>({...t,variationSizeMin:e,variationSizeMax:Math.max(t.variationSizeMax,e)}))}),(0,H.jsx)(G,{label:`Size Max`,value:z.variationSizeMax,...U.variationSizeMax,testId:`variation-size-max-slider`,onChange:e=>I(t=>({...t,variationSizeMax:e,variationSizeMin:Math.min(t.variationSizeMin,e)}))}),(0,H.jsx)(G,{label:`Bright Amt`,value:z.variationBrightAmount,...U.variationBrightAmount,testId:`variation-bright-amount-slider`,onChange:e=>I(t=>({...t,variationBrightAmount:e}))}),(0,H.jsx)(G,{label:`Bright Curve`,value:z.variationBrightCurve,...U.variationBrightCurve,curve:3,testId:`variation-bright-curve-slider`,onChange:e=>I(t=>({...t,variationBrightCurve:e}))}),(0,H.jsx)(G,{label:`Bright Min`,value:z.variationBrightMin,...U.variationBrightMin,testId:`variation-bright-min-slider`,onChange:e=>I(t=>({...t,variationBrightMin:e,variationBrightMax:Math.max(t.variationBrightMax,e)}))}),(0,H.jsx)(G,{label:`Bright Max`,value:z.variationBrightMax,...U.variationBrightMax,testId:`variation-bright-max-slider`,onChange:e=>I(t=>({...t,variationBrightMax:e,variationBrightMin:Math.min(t.variationBrightMin,e)}))}),(0,H.jsx)(G,{label:`Opacity Amt`,value:z.variationOpacityAmount,...U.variationOpacityAmount,testId:`variation-opacity-amount-slider`,onChange:e=>I(t=>({...t,variationOpacityAmount:e}))}),(0,H.jsx)(G,{label:`Opacity Curve`,value:z.variationOpacityCurve,...U.variationOpacityCurve,curve:3,testId:`variation-opacity-curve-slider`,onChange:e=>I(t=>({...t,variationOpacityCurve:e}))}),(0,H.jsx)(G,{label:`Opacity Min`,value:z.variationOpacityMin,...U.variationOpacityMin,testId:`variation-opacity-min-slider`,onChange:e=>I(t=>({...t,variationOpacityMin:e,variationOpacityMax:Math.max(t.variationOpacityMax,e)}))}),(0,H.jsx)(G,{label:`Opacity Max`,value:z.variationOpacityMax,...U.variationOpacityMax,testId:`variation-opacity-max-slider`,onChange:e=>I(t=>({...t,variationOpacityMax:e,variationOpacityMin:Math.min(t.variationOpacityMin,e)}))}),(0,H.jsx)(G,{label:`Color Amt`,value:z.variationColorAmount,...U.variationColorAmount,testId:`variation-color-amount-slider`,onChange:e=>I(t=>({...t,variationColorAmount:e}))}),(0,H.jsx)(G,{label:`Color Curve`,value:z.variationColorCurve,...U.variationColorCurve,curve:3,testId:`variation-color-curve-slider`,onChange:e=>I(t=>({...t,variationColorCurve:e}))}),(0,H.jsx)(G,{label:`Hue Lo`,value:z.variationColorMin,...U.variationColorMin,testId:`variation-color-min-slider`,onChange:e=>I(t=>({...t,variationColorMin:e,variationColorMax:Math.max(t.variationColorMax,e)}))}),(0,H.jsx)(G,{label:`Hue Hi`,value:z.variationColorMax,...U.variationColorMax,testId:`variation-color-max-slider`,onChange:e=>I(t=>({...t,variationColorMax:e,variationColorMin:Math.min(t.variationColorMin,e)}))})]}),(0,H.jsxs)(Ba,{title:`Render`,children:[(0,H.jsx)(G,{label:`Exposure`,value:z.exposure,...U.exposure,onChange:e=>I(t=>({...t,exposure:e}))}),(0,H.jsx)(G,{label:`Scene Gain`,value:z.sceneBrightness,...U.sceneBrightness,onChange:e=>I(t=>({...t,sceneBrightness:e}))}),(0,H.jsx)(G,{label:`Bloom`,value:z.bloomStrength,...U.bloomStrength,testId:`bloom-strength-slider`,onChange:e=>I(t=>({...t,bloomStrength:e}))}),(0,H.jsx)(G,{label:`Bloom Thresh`,value:z.bloomThreshold,...U.bloomThreshold,testId:`bloom-threshold-slider`,onChange:e=>I(t=>({...t,bloomThreshold:e}))}),(0,H.jsx)(G,{label:`Bloom Radius`,value:z.bloomRadius,...U.bloomRadius,testId:`bloom-radius-slider`,onChange:e=>I(t=>({...t,bloomRadius:e}))}),(0,H.jsx)(G,{label:`Color Sat`,value:z.colorSaturation,...U.colorSaturation,testId:`color-saturation-slider`,onChange:e=>I(t=>({...t,colorSaturation:e}))}),(0,H.jsx)(G,{label:`Contrast`,value:z.colorContrast,...U.colorContrast,testId:`color-contrast-slider`,onChange:e=>I(t=>({...t,colorContrast:e}))}),(0,H.jsx)(G,{label:`Chroma Ab`,value:z.chromaticAberration,...U.chromaticAberration,testId:`chromatic-aberration-slider`,onChange:e=>I(t=>({...t,chromaticAberration:e}))}),(0,H.jsx)(G,{label:`Vignette`,value:z.vignetteStrength,...U.vignetteStrength,testId:`vignette-strength-slider`,onChange:e=>I(t=>({...t,vignetteStrength:e}))}),(0,H.jsx)(G,{label:`Vign Soft`,value:z.vignetteSoftness,...U.vignetteSoftness,testId:`vignette-softness-slider`,onChange:e=>I(t=>({...t,vignetteSoftness:e}))}),(0,H.jsx)(G,{label:`Flare`,value:z.streakStrength,...U.streakStrength,testId:`streak-strength-slider`,onChange:e=>I(t=>({...t,streakStrength:e}))}),(0,H.jsx)(G,{label:`Flare Len`,value:z.streakLength,...U.streakLength,testId:`streak-length-slider`,onChange:e=>I(t=>({...t,streakLength:e}))}),(0,H.jsx)(G,{label:`Flare Star`,value:z.streakVertical,...U.streakVertical,testId:`streak-vertical-slider`,onChange:e=>I(t=>({...t,streakVertical:e}))}),(0,H.jsx)(G,{label:`Flare Height`,value:z.flareHeight,...U.flareHeight,testId:`flare-height-slider`,onChange:e=>I(t=>({...t,flareHeight:e}))}),(0,H.jsx)(G,{label:`Flare Cutoff`,value:z.flareCutoff,...U.flareCutoff,testId:`flare-cutoff-slider`,onChange:e=>I(t=>({...t,flareCutoff:e}))}),(0,H.jsx)(G,{label:`Render Res`,value:z.rayResolution,...Aa,onChange:e=>I(t=>({...t,rayResolution:Ne(e)}))}),(0,H.jsx)(Ja,{label:`Sim Res`,value:L.width,min:fa,max:pa,step:ma,testId:`volume-input`,onChange:e=>{let t=es(e);B({width:t,height:t,depth:t},!0)}})]}),(0,H.jsxs)(Ba,{title:`Trail Field`,children:[(0,H.jsx)(G,{label:`Emit`,value:L.depositMass,...Da.depositMass,testId:`trail-amount-slider`,onChange:e=>B({depositMass:e})}),(0,H.jsx)(G,{label:`Radius`,value:L.depositRadius,min:ka.min,max:cs(L),step:ka.step,testId:`trail-radius-slider`,onChange:e=>B({depositRadius:e})}),(0,H.jsx)(G,{label:`Persist`,value:L.trailPersistence,...Da.trailPersistence,testId:`trail-persistence-slider`,onChange:e=>B({trailPersistence:e})}),(0,H.jsx)(G,{label:`Diffuse`,value:L.trailDiffusion,...Da.trailDiffusion,testId:`trail-diffusion-slider`,onChange:e=>B({trailDiffusion:e})}),(0,H.jsx)(G,{label:`Pulse`,value:L.pulseDepth,...Da.pulseDepth,testId:`pulse-depth-slider`,onChange:e=>B({pulseDepth:e})}),(0,H.jsx)(G,{label:`Pulse Rate`,value:L.pulseRate,...Da.pulseRate,testId:`pulse-rate-slider`,onChange:e=>B({pulseRate:e})}),(0,H.jsx)(G,{label:`Restless`,value:L.restlessness,...Da.restlessness,testId:`restlessness-slider`,onChange:e=>B({restlessness:e})})]}),(0,H.jsxs)(Ba,{title:`Motion`,children:[(0,H.jsx)(G,{label:`Sim Speed`,value:L.simulationSpeed,...Da.simulationSpeed,testId:`sim-speed-slider`,onChange:e=>B({simulationSpeed:e})}),(0,H.jsx)(G,{label:`Sensor`,value:L.sensorGain,...Da.sensorGain,onChange:e=>B({sensorGain:e})}),(0,H.jsx)(G,{label:`Angle`,value:L.sensorAngle,...Da.sensorAngle,onChange:e=>B({sensorAngle:e})}),(0,H.jsx)(G,{label:`Distance`,value:L.sensorDistance,...Da.sensorDistance,onChange:e=>B({sensorDistance:e})}),(0,H.jsx)(G,{label:`Mutation`,value:L.mutationScale,...Da.mutationScale,onChange:e=>B({mutationScale:e})}),(0,H.jsx)(G,{label:`Drag`,value:L.drag,...Da.drag,onChange:e=>B({drag:e})}),(0,H.jsx)(G,{label:`Axial`,value:L.axialForce,...Da.axialForce,onChange:e=>B({axialForce:e})}),(0,H.jsx)(G,{label:`Lateral`,value:L.lateralForce,...Da.lateralForce,onChange:e=>B({lateralForce:e})}),(0,H.jsx)(G,{label:`Force`,value:L.globalForceMult,...Da.globalForceMult,onChange:e=>B({globalForceMult:e})}),(0,H.jsx)(G,{label:`Strafe`,value:L.strafePower,...Da.strafePower,onChange:e=>B({strafePower:e})}),(0,H.jsx)(G,{label:`Strafe Momentum`,value:L.strafeMomentum,...Da.strafeMomentum,onChange:e=>B({strafeMomentum:e})}),(0,H.jsx)(G,{label:`Hazard`,value:L.hazardRate,...Da.hazardRate,onChange:e=>B({hazardRate:e})})]}),(0,H.jsxs)(Ba,{title:`Emergent Behaviors`,children:[(0,H.jsx)(G,{label:`MIPS`,value:L.mips,...Oa.mips,testId:`mips-slider`,onChange:e=>B({mips:e})}),(0,H.jsx)(G,{label:`Aniso Follow`,value:L.anisoFollow,...Oa.anisoFollow,testId:`aniso-follow-slider`,onChange:e=>B({anisoFollow:e})}),(0,H.jsx)(G,{label:`Flock Align`,value:L.flockAlign,...Oa.flockAlign,testId:`flock-align-slider`,onChange:e=>B({flockAlign:e})}),(0,H.jsx)(G,{label:`Flock Sep`,value:L.flockSeparate,...Oa.flockSeparate,testId:`flock-separate-slider`,onChange:e=>B({flockSeparate:e})}),(0,H.jsx)(G,{label:`Chemotaxis`,value:L.chemotaxis,...Oa.chemotaxis,testId:`chemotaxis-slider`,onChange:e=>B({chemotaxis:e})}),(0,H.jsx)(G,{label:`Quorum`,value:L.quorumStrength,...Oa.quorumStrength,testId:`quorum-strength-slider`,onChange:e=>B({quorumStrength:e})}),(0,H.jsx)(G,{label:`Quorum Thr`,value:L.quorumThreshold,...Oa.quorumThreshold,testId:`quorum-threshold-slider`,onChange:e=>B({quorumThreshold:e})}),(0,H.jsx)(G,{label:`Lenia`,value:L.leniaStrength,...Oa.leniaStrength,testId:`lenia-strength-slider`,onChange:e=>B({leniaStrength:e})}),(0,H.jsx)(G,{label:`Lenia Mu`,value:L.leniaCenter,...Oa.leniaCenter,testId:`lenia-center-slider`,onChange:e=>B({leniaCenter:e})}),(0,H.jsx)(G,{label:`Lenia Sigma`,value:L.leniaWidth,...Oa.leniaWidth,testId:`lenia-width-slider`,onChange:e=>B({leniaWidth:e})}),(0,H.jsx)(G,{label:`Species`,value:L.speciesForce,...Oa.speciesForce,testId:`species-force-slider`,onChange:e=>B({speciesForce:e})}),(0,H.jsx)(G,{label:`Predator`,value:L.predator,...Oa.predator,testId:`predator-slider`,onChange:e=>B({predator:e})}),(0,H.jsx)(G,{label:`Alarm`,value:L.alarm,...Oa.alarm,testId:`alarm-slider`,onChange:e=>B({alarm:e})}),(0,H.jsx)(G,{label:`Gray-Scott`,value:L.grayScott,...Oa.grayScott,testId:`gray-scott-slider`,onChange:e=>B({grayScott:e})}),(0,H.jsx)(G,{label:`GS Feed`,value:L.gsFeed,...Oa.gsFeed,testId:`gs-feed-slider`,onChange:e=>B({gsFeed:e})}),(0,H.jsx)(G,{label:`GS Kill`,value:L.gsKill,...Oa.gsKill,testId:`gs-kill-slider`,onChange:e=>B({gsKill:e})}),(0,H.jsx)(G,{label:`Energy`,value:L.energy,...Oa.energy,testId:`energy-slider`,onChange:e=>B({energy:e})}),(0,H.jsx)(G,{label:`Energy Drain`,value:L.energyDrain,...Oa.energyDrain,testId:`energy-drain-slider`,onChange:e=>B({energyDrain:e})})]}),(0,H.jsxs)(Ba,{title:`State`,children:[(0,H.jsx)(Wa,{label:`Shape`,value:String(L.domainShape),options:[[`0`,`Cube`],[`1`,`Sphere`],[`2`,`Cylinder`],[`3`,`Pyramid`]],onChange:e=>B({domainShape:Number(e)})}),(0,H.jsx)(Za,{label:`Shape`,testId:`domain-shape-slider`,value:String(L.domainShape),options:[[`0`,`Cube`],[`1`,`Sphere`],[`2`,`Cylinder`],[`3`,`Pyramid`]],onChange:e=>B({domainShape:Number(e)})}),(0,H.jsx)(Wa,{label:`Initial`,value:String(L.initialConditions),options:[[`0`,`Grid`],[`2`,`Ring`],[`4`,`Helix`],[`5`,`Disc`],[`6`,`Dual`],[`7`,`Shell`],[`8`,`Vortex`]],onChange:e=>B({initialConditions:Number(e)})}),(0,H.jsx)(Za,{label:`Initial`,testId:`initial-conditions-slider`,value:String(L.initialConditions),options:[[`0`,`Grid`],[`2`,`Ring`],[`4`,`Helix`],[`5`,`Disc`],[`6`,`Dual`],[`7`,`Shell`],[`8`,`Vortex`]],onChange:e=>B({initialConditions:Number(e)})}),(0,H.jsx)(Wa,{label:`Boundary`,value:String(L.boundaryMode),options:[[`0`,`Bounce`],[`1`,`Reset`],[`2`,`Wrap`],[`3`,`Tube`],[`4`,`Sticky`],[`5`,`Soft`],[`6`,`Portal`]],onChange:e=>B({boundaryMode:Number(e)})}),(0,H.jsx)(Za,{label:`Boundary`,testId:`boundary-mode-slider`,value:String(L.boundaryMode),options:[[`0`,`Bounce`],[`1`,`Reset`],[`2`,`Wrap`],[`3`,`Tube`],[`4`,`Sticky`],[`5`,`Soft`],[`6`,`Portal`]],onChange:e=>B({boundaryMode:Number(e)})}),(0,H.jsx)(Wa,{label:`Orient`,value:String(L.absoluteOrientation),options:[[`0`,`Velocity`],[`1`,`World Y`],[`2`,`Radial`],[`3`,`Outward`],[`4`,`Swirl`],[`5`,`Noise`]],onChange:e=>B({absoluteOrientation:Number(e)})}),(0,H.jsx)(Za,{label:`Orient`,testId:`absolute-orientation-slider`,value:String(L.absoluteOrientation),options:[[`0`,`Velocity`],[`1`,`World Y`],[`2`,`Radial`],[`3`,`Outward`],[`4`,`Swirl`],[`5`,`Noise`]],onChange:e=>B({absoluteOrientation:Number(e)})}),(0,H.jsx)(G,{label:`Mix`,value:L.orientationMix,...Da.orientationMix,onChange:e=>B({orientationMix:e})}),(0,H.jsx)(Ka,{label:`Sym X`,checked:(L.symmetryAxes&1)!=0,onChange:e=>B({symmetryAxes:e?L.symmetryAxes|1:L.symmetryAxes&-2})}),(0,H.jsx)(Ka,{label:`Sym Y`,checked:(L.symmetryAxes&2)!=0,onChange:e=>B({symmetryAxes:e?L.symmetryAxes|2:L.symmetryAxes&-3})}),(0,H.jsx)(Ka,{label:`Sym Z`,checked:(L.symmetryAxes&4)!=0,onChange:e=>B({symmetryAxes:e?L.symmetryAxes|4:L.symmetryAxes&-5})})]}),(0,H.jsxs)(Ba,{title:`Camera`,children:[(0,H.jsx)(G,{label:`Yaw`,value:z.cameraYaw,...U.cameraYaw,testId:`camera-yaw-slider`,onChange:e=>On({yaw:e})}),(0,H.jsx)(G,{label:`Pitch`,value:z.cameraPitch,...U.cameraPitch,onChange:e=>On({pitch:e})}),(0,H.jsx)(G,{label:`Zoom`,value:z.cameraDistance,...U.cameraDistance,testId:`camera-zoom-slider`,onChange:e=>On({distance:e})}),(0,H.jsx)(G,{label:`FOV`,value:z.fov,...U.fov,testId:`fov-slider`,onChange:e=>I(t=>({...t,fov:e}))}),(0,H.jsx)(Ka,{label:`DOF`,checked:z.dofEnabled,testId:`dof-enabled-checkbox`,onChange:e=>I(t=>({...t,dofEnabled:e}))}),(0,H.jsx)(G,{label:`Aperture`,value:z.aperture,...U.aperture,testId:`aperture-slider`,onChange:e=>I(t=>({...t,aperture:e}))}),(0,H.jsx)(G,{label:`Focal Dist`,value:Sr(z.focusDistance),...Sa,testId:`focus-slider`,onChange:e=>I(t=>({...t,focusDistance:Y(xr(e),U.focusDistance.min,U.focusDistance.max)}))}),(0,H.jsx)(G,{label:`DOF Blur`,value:z.dofBlur,...U.dofBlur,testId:`dof-blur-slider`,onChange:e=>I(t=>({...t,dofBlur:e}))}),(0,H.jsx)(Ka,{label:`DOF Debug`,checked:z.dofDebug,onChange:e=>I(t=>({...t,dofDebug:e}))}),(0,H.jsx)(Ka,{label:`Orbit`,checked:Me,onChange:e=>{$e.current.active&&(Xe.current=!0),Pe(e)}}),(0,H.jsx)(G,{label:`Orbit Speed`,value:F,...Ca,testId:`orbit-speed-slider`,onChange:e=>{$e.current.active&&(Xe.current=!0),Fe(e)}}),(0,H.jsx)(Ka,{label:`Demo`,checked:Ue,testId:`demo-mode-checkbox`,onChange:We}),(0,H.jsx)(Ka,{label:`Instant Demo`,checked:Ke,testId:`instant-demo-checkbox`,onChange:qe}),(0,H.jsx)(Ka,{label:`Lock View`,checked:Ie,testId:`view-lock-checkbox`,onChange:Le}),(0,H.jsx)(G,{label:`Max FPS`,value:ze,min:0,max:120,step:1,testId:`frame-cap-slider`,formatValue:e=>e<=0?`Off`:String(Math.round(e)),onChange:e=>Be(Math.round(e))})]}),(0,H.jsx)(Na,{capture:Nt,meters:It,panel:R,onCaptureToggle:()=>{let e=b.current;e&&(Nt.status===`running`||Nt.status===`starting`?e.stop():e.start(Nt.activeDeviceId??void 0))},onInputChange:e=>{b.current?.start(e)},onChange:e=>{S.current=e,Ft(e)}}),(0,H.jsx)(Fa,{status:Wt,inputs:Kt,activeInputId:Jt,learningKey:Xt,onEnable:()=>{dn()},onRefresh:()=>{ne.current?un(ne.current):dn()},onInputChange:e=>{re.current=e,Yt(e)}})]}),mt&&!pt?(0,H.jsx)(`button`,{type:`button`,className:`panel-toggle`,"data-testid":`panel-toggle`,"aria-label":ht?`Close menu`:`Open menu`,"aria-expanded":ht,"aria-controls":`control-panel`,onClick:()=>gt(e=>!e),children:ht?`✕`:`☰`}):null]})})}function Na(e){let t=e.capture.status===`running`,n=e.capture.status===`starting`,r=e.capture.status===`unsupported`,i=e.capture.activeDeviceId??e.capture.devices[0]?.id??``,a=(t,n)=>{e.onChange({...e.panel,buckets:{...e.panel.buckets,[t]:{...e.panel.buckets[t],...n}}})};return(0,H.jsxs)(`details`,{className:`audio-panel control-group-collapsible`,"data-testid":`audio-panel`,children:[(0,H.jsxs)(`summary`,{className:`audio-panel-title`,children:[(0,H.jsx)(`span`,{children:`Audio`}),(0,H.jsx)(`strong`,{"data-testid":`audio-capture-status`,"data-state":e.capture.status,children:Pa(e.capture.status)})]}),(0,H.jsxs)(`div`,{className:`audio-capture-strip`,children:[(0,H.jsx)(`button`,{className:t?`audio-capture-toggle active`:`audio-capture-toggle`,"data-testid":`audio-capture-toggle`,type:`button`,disabled:n||r,onClick:e.onCaptureToggle,children:n?`Starting…`:t?`Stop microphone`:e.capture.status===`denied`||e.capture.status===`error`?`Try microphone`:r?`Microphone unavailable`:`Start microphone`}),(0,H.jsx)(`span`,{children:`Analyzed on this device`})]}),e.capture.error?(0,H.jsx)(`div`,{className:`audio-input-error`,"data-testid":`audio-input-error`,children:e.capture.error}):null,e.capture.devices.length>0?(0,H.jsxs)(`label`,{className:`audio-input-row`,children:[(0,H.jsx)(`span`,{children:`Input`}),(0,H.jsx)(`select`,{className:`audio-input-select`,"data-testid":`audio-input-select`,name:`audio-input`,value:i,disabled:!t,onChange:t=>e.onInputChange(t.currentTarget.value),children:e.capture.devices.map(e=>(0,H.jsxs)(`option`,{value:e.id,children:[e.label,e.isDefault?` · default`:``]},e.id))})]}):null,(0,H.jsxs)(`label`,{className:`audio-enable-row`,children:[(0,H.jsx)(`span`,{children:`Modulation`}),(0,H.jsx)(`input`,{"data-testid":`audio-enabled`,type:`checkbox`,checked:e.panel.enabled,onChange:t=>e.onChange({...e.panel,enabled:t.currentTarget.checked})})]}),(0,H.jsx)(`div`,{className:`audio-meter-grid`,children:Ci.map(t=>(0,H.jsxs)(`div`,{className:`audio-meter`,"data-testid":`audio-meter-${t}`,children:[(0,H.jsx)(`span`,{children:t}),(0,H.jsx)(`progress`,{max:1,value:e.meters[t],"aria-label":`${t} level`}),(0,H.jsx)(`strong`,{children:e.meters[t].toFixed(2)})]},t))}),(0,H.jsxs)(`div`,{className:`audio-bucket-controls`,children:[(0,H.jsxs)(`div`,{className:`audio-bucket-row audio-bucket-header`,"aria-hidden":`true`,children:[(0,H.jsx)(`span`,{}),(0,H.jsx)(`span`,{children:`gain`}),(0,H.jsx)(`span`,{children:`exp`}),(0,H.jsx)(`span`,{children:`attack ms`}),(0,H.jsx)(`span`,{children:`decay ms`})]}),Ci.map(t=>(0,H.jsxs)(`div`,{className:`audio-bucket-row`,children:[(0,H.jsx)(`span`,{children:t}),(0,H.jsx)(Ya,{"data-testid":`audio-${t}-gain`,"aria-label":`${t} gain`,name:Qa(`${t} gain`),min:0,max:8,step:.05,value:e.panel.buckets[t].gain,onChange:e=>a(t,{gain:Y(e,0,8)})}),(0,H.jsx)(Ya,{"data-testid":`audio-${t}-exp`,"aria-label":`${t} exponent`,name:Qa(`${t} exponent`),min:.1,max:8,step:.05,value:e.panel.buckets[t].exponent,onChange:e=>a(t,{exponent:Y(e,.1,8)})}),(0,H.jsx)(Ya,{"data-testid":`audio-${t}-attack`,"aria-label":`${t} attack`,name:Qa(`${t} attack`),min:1,max:2e3,step:1,value:e.panel.buckets[t].attackMs,onChange:e=>a(t,{attackMs:Y(e,1,2e3)})}),(0,H.jsx)(Ya,{"data-testid":`audio-${t}-decay`,"aria-label":`${t} decay`,name:Qa(`${t} decay`),min:1,max:2e3,step:1,value:e.panel.buckets[t].decayMs,onChange:e=>a(t,{decayMs:Y(e,1,2e3)})})]},t))]})]})}function Pa(e){return e===`running`?`Live`:e===`starting`?`Starting`:e===`denied`?`Blocked`:e===`error`?`Error`:e===`unsupported`?`Unavailable`:`Off`}function Fa(e){let[t,n]=(0,_.useState)(!1),r=!e.status.enabled||e.inputs.length===0,i=e.inputs.find(t=>t.id===e.activeInputId),a=e.activeInputId===`all`?`All inputs`:i?Ia(i):e.activeInputId,o=e.learningKey?`learn`:e.status.enabled?`on`:`off`;return(0,H.jsxs)(`details`,{className:`midi-panel control-group-collapsible`,"data-testid":`midi-panel`,children:[(0,H.jsxs)(`summary`,{className:`midi-panel-title`,children:[(0,H.jsx)(`span`,{children:`MIDI`}),(0,H.jsx)(`strong`,{children:o})]}),(0,H.jsxs)(`div`,{className:`midi-action-row`,children:[(0,H.jsx)(`button`,{"data-testid":`midi-enable`,type:`button`,disabled:!e.status.supported,onClick:e.onEnable,children:`Enable`}),(0,H.jsx)(`button`,{"data-testid":`midi-refresh`,type:`button`,disabled:!e.status.supported,onClick:e.onRefresh,children:`Refresh`})]}),(0,H.jsxs)(`div`,{className:`midi-input-row`,children:[(0,H.jsx)(`span`,{children:`Input`}),(0,H.jsxs)(`div`,{className:`midi-input-picker`,children:[(0,H.jsx)(`button`,{className:`midi-input-button`,"data-testid":`midi-input-select`,type:`button`,"aria-haspopup":`listbox`,"aria-expanded":t,disabled:r,onClick:()=>n(e=>!e),onKeyDown:e=>{e.key===`Escape`&&n(!1)},children:(0,H.jsx)(`span`,{children:e.status.enabled?a:`Disabled`})}),t&&!r?(0,H.jsxs)(`div`,{className:`midi-input-menu`,"data-testid":`midi-input-menu`,role:`listbox`,children:[(0,H.jsx)(`button`,{className:e.activeInputId===`all`?`active`:``,"data-testid":`midi-input-option-all`,type:`button`,role:`option`,"aria-selected":e.activeInputId===`all`,onClick:()=>{e.onInputChange(`all`),n(!1)},children:`All inputs`}),e.inputs.map(t=>(0,H.jsx)(`button`,{className:t.id===e.activeInputId?`active`:``,"data-testid":`midi-input-option-${Qa(t.id)}`,type:`button`,role:`option`,"aria-selected":t.id===e.activeInputId,onClick:()=>{e.onInputChange(t.id),n(!1)},children:Ia(t)},t.id))]}):null]})]}),(0,H.jsx)(`input`,{type:`hidden`,name:`midi-input`,value:e.activeInputId}),e.status.error?(0,H.jsx)(`div`,{className:`midi-input-error`,"data-testid":`midi-input-error`,children:e.status.error}):null,(0,H.jsx)(`div`,{className:`midi-frame-readout`,"data-testid":`midi-last-message`,children:e.status.lastMessage??String(e.status.messageCount)})]})}function Ia(e){let t=[e.state===`connected`?``:e.state,e.connection===`open`?``:e.connection].filter(Boolean).join(` `);return t?`${e.name} ${t}`:e.name}function La(e){return Array.from(e.inputs.values()).map(e=>({id:e.id,name:e.name||e.id,state:e.state??`connected`,connection:e.connection??`open`})).sort((e,t)=>e.name.localeCompare(t.name))}function Ra(e){let t=rs(e.step),n=e.curve??1,r=(0,_.useContext)($i),i=e.testId??Qa(e.label),a=r?Di(r.settings,i,e.min,e.max):null,o=r?.expandedKey===i,{min:s,max:c}=ki(e.min,e.max,e.value,a);(0,_.useEffect)(()=>{if(r)return r.register(i,{value:e.value,min:s,max:c,step:e.step,onChange:e.onChange}),()=>r.register(i,null)},[c,s,r,i,e.onChange,e.step,e.value]);let l=(0,H.jsx)(`span`,{"data-testid":`${i}-modulation-toggle`,title:Ji(e.label),tabIndex:0,onClick:e=>{e.preventDefault(),e.stopPropagation(),r?.setExpandedKey(o?null:i)},onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r?.setExpandedKey(o?null:i))},children:e.label}),u=r&&a&&o?(0,H.jsx)(za,{modulationKey:i,config:a,step:e.step,midiStatus:r.midiStatus,midiLearning:r.midiLearningKey===i,onChange:e=>r.updateConfig(i,e),onMidiLearn:()=>r.startMidiLearn(i),onMidiCancel:r.cancelMidiLearn}):null,d=`slider-shell${a&&(Oi(a)||ui(a.midi))?` is-modulated`:``}`;if(n!==1){let r=ee(e.value,s,c,n),i=t=>e.onChange(w(t,s,c,n));return(0,H.jsxs)(`div`,{className:d,children:[(0,H.jsxs)(`label`,{className:`control-row`,children:[l,(0,H.jsx)(`input`,{"data-testid":e.testId,name:Qa(e.label),type:`range`,value:r,min:0,max:1,step:.002,onInput:e=>i(Number(e.currentTarget.value)),onChange:e=>i(Number(e.currentTarget.value))}),(0,H.jsx)(`output`,{children:e.formatValue?e.formatValue(e.value):e.value.toFixed(t)})]}),u]})}return(0,H.jsxs)(`div`,{className:d,children:[(0,H.jsxs)(`label`,{className:`control-row`,children:[l,(0,H.jsx)(`input`,{"data-testid":e.testId,name:Qa(e.label),type:`range`,value:e.value,min:s,max:c,step:e.step,onInput:t=>e.onChange(Number(t.currentTarget.value)),onChange:t=>e.onChange(Number(t.currentTarget.value))}),(0,H.jsx)(`output`,{children:e.formatValue?e.formatValue(e.value):e.value.toFixed(t)})]}),u]})}function za(e){let t=Math.max(0,Math.min(6,rs(e.step))),n=(t,n)=>{e.onChange({...e.config,buckets:{...e.config.buckets,[t]:{...e.config.buckets[t],...n}}})},r=t=>{e.onChange({...e.config,...t})},i=t=>{e.onChange({...e.config,midi:{enabled:t,min:e.config.midi?.min??e.config.min,max:e.config.midi?.max??e.config.max,control:e.config.midi?.control??null}})},a=t=>{e.onChange({...e.config,midi:{enabled:e.config.midi?.enabled??!1,min:t.min??e.config.midi?.min??e.config.min,max:t.max??e.config.midi?.max??e.config.max,control:e.config.midi?.control??null}})},o=()=>{e.midiLearning&&e.onMidiCancel(),e.onChange({...e.config,midi:{enabled:!1,min:e.config.midi?.min??e.config.min,max:e.config.midi?.max??e.config.max,control:null}})},s=ui(e.config.midi),c=e.config.midi?.min??e.config.min,l=e.config.midi?.max??e.config.max;return(0,H.jsxs)(`div`,{className:`slider-modulation-body`,"data-testid":`${e.modulationKey}-modulation-body`,children:[(0,H.jsxs)(`div`,{className:`slider-modulation-row`,children:[Ci.map(t=>(0,H.jsx)(`input`,{"data-testid":`${e.modulationKey}-${t}-mod`,"aria-label":`${t} modulation`,type:`checkbox`,checked:e.config.buckets[t].enabled,onChange:e=>n(t,{enabled:e.currentTarget.checked})},t)),(0,H.jsx)(Ya,{"data-testid":`${e.modulationKey}-mod-min`,"aria-label":`modulation min`,step:e.step,precision:t,value:e.config.min,onChange:e=>r({min:e})}),(0,H.jsx)(Ya,{"data-testid":`${e.modulationKey}-mod-max`,"aria-label":`modulation max`,step:e.step,precision:t,value:e.config.max,onChange:e=>r({max:e})})]}),(0,H.jsx)(`div`,{className:`slider-modulation-row gain-row`,children:Ci.map(t=>(0,H.jsx)(Ya,{"data-testid":`${e.modulationKey}-${t}-gain`,"aria-label":`${t} gain multiplier`,min:0,max:16,step:.05,value:e.config.buckets[t].gain,onChange:e=>n(t,{gain:Y(e,0,16)})},t))}),(0,H.jsxs)(`div`,{className:`slider-midi-row`,children:[(0,H.jsx)(`span`,{children:`MIDI`}),(0,H.jsx)(`button`,{"data-testid":`${e.modulationKey}-midi-learn`,type:`button`,disabled:!e.midiStatus.supported,onClick:e.midiLearning?e.onMidiCancel:e.onMidiLearn,children:e.midiLearning?`Cancel`:s?`Relearn`:`Learn`}),(0,H.jsx)(`button`,{"data-testid":`${e.modulationKey}-midi-clear`,type:`button`,disabled:!e.config.midi?.control,onClick:o,children:`Clear`}),(0,H.jsxs)(`label`,{children:[(0,H.jsx)(`input`,{"data-testid":`${e.modulationKey}-midi-enabled`,type:`checkbox`,checked:e.config.midi?.enabled===!0,disabled:!e.config.midi?.control,onChange:e=>i(e.currentTarget.checked)}),(0,H.jsx)(`span`,{children:`On`})]}),(0,H.jsx)(Ya,{className:`midi-range-min`,"data-testid":`${e.modulationKey}-midi-min`,"aria-label":`MIDI min`,step:e.step,precision:t,value:c,onChange:e=>a({min:e})}),(0,H.jsx)(Ya,{className:`midi-range-max`,"data-testid":`${e.modulationKey}-midi-max`,"aria-label":`MIDI max`,step:e.step,precision:t,value:l,onChange:e=>a({max:e})}),(0,H.jsx)(`output`,{"data-testid":`${e.modulationKey}-midi-mapping`,children:e.midiLearning?`Listening`:gi(e.config.midi?.control)})]})]})}function Ba(e){return(0,H.jsxs)(`details`,{className:`control-group control-group-collapsible`,children:[(0,H.jsx)(`summary`,{className:`control-group-title`,children:e.title}),e.children]})}function Va(e){return(0,H.jsxs)(`label`,{className:`control-row`,children:[(0,H.jsx)(`span`,{title:Ji(`Blend`),children:`Blend`}),(0,H.jsxs)(`select`,{"data-testid":`particle-blend-select`,name:`particle-blend`,value:e.value,onChange:t=>e.onChange(t.target.value),children:[(0,H.jsx)(`option`,{value:`additive`,children:`Additive`}),(0,H.jsx)(`option`,{value:`alpha`,children:`Alpha`}),(0,H.jsx)(`option`,{value:`opaque`,children:`Opaque`})]}),(0,H.jsx)(`output`,{})]})}function Ha(e){return(0,H.jsxs)(`label`,{className:`control-row`,children:[(0,H.jsx)(`span`,{title:Ji(`Particle Color Mode`),children:`Particle Color Mode`}),(0,H.jsxs)(`select`,{"data-testid":`particle-color-mode-select`,name:`particle-color-mode`,value:e.value,onChange:t=>e.onChange(t.target.value),children:[ya.map(([e,t])=>(0,H.jsx)(`option`,{value:e,children:t},e)),(0,H.jsxs)(`optgroup`,{label:`Gradient (standalone)`,children:[(0,H.jsx)(`option`,{value:`gradient-inferno`,children:`Gradient Inferno`}),(0,H.jsx)(`option`,{value:`gradient-magma`,children:`Gradient Magma`}),(0,H.jsx)(`option`,{value:`gradient-viridis`,children:`Gradient Viridis`}),(0,H.jsx)(`option`,{value:`gradient-turbo`,children:`Gradient Turbo`}),(0,H.jsx)(`option`,{value:`gradient-rainbow`,children:`Gradient Rainbow`}),(0,H.jsx)(`option`,{value:`gradient-spectral`,children:`Gradient Spectral`}),(0,H.jsx)(`option`,{value:`gradient-plasma`,children:`Gradient Plasma`}),(0,H.jsx)(`option`,{value:`gradient-cosmic`,children:`Gradient Cosmic`}),(0,H.jsx)(`option`,{value:`gradient-ice`,children:`Gradient Ice`}),(0,H.jsx)(`option`,{value:`gradient-ember`,children:`Gradient Ember`})]})]}),(0,H.jsx)(`output`,{})]})}function Ua(e){return(0,H.jsxs)(`label`,{className:`control-row color-row`,children:[(0,H.jsx)(`span`,{title:Ji(e.label),children:e.label}),(0,H.jsx)(`input`,{name:Qa(e.label),type:`color`,value:e.value,onInput:t=>e.onChange(t.currentTarget.value),onChange:t=>e.onChange(t.currentTarget.value)}),(0,H.jsx)(`output`,{children:e.value})]})}function Wa(e){return(0,H.jsxs)(`label`,{className:`control-row`,children:[(0,H.jsx)(`span`,{title:Ji(e.label),children:e.label}),(0,H.jsx)(`select`,{name:Qa(e.label),value:e.value,onChange:t=>e.onChange(t.target.value),children:e.options.map(([e,t])=>(0,H.jsx)(`option`,{value:e,children:t},e))}),(0,H.jsx)(`output`,{})]})}function Ga(e){let t=t=>Math.min(e.options.length-1,Math.max(0,Math.round(t))),n=e.options.findIndex(([t])=>t===e.value);return(0,H.jsx)(G,{label:e.label,value:n<0?0:n,min:0,max:Math.max(0,e.options.length-1),step:1,testId:e.testId,formatValue:n=>e.options[t(n)]?.[1]??``,onChange:n=>e.onChange(e.options[t(n)][0])})}function Ka(e){return(0,H.jsxs)(`label`,{className:`control-row checkbox-row`,children:[(0,H.jsx)(`span`,{title:Ji(e.label),children:e.label}),(0,H.jsx)(`input`,{"data-testid":e.testId,name:Qa(e.label),type:`checkbox`,checked:e.checked,onChange:t=>e.onChange(t.target.checked)}),(0,H.jsx)(`output`,{children:e.checked?`On`:`Off`})]})}function qa(e){return(0,H.jsxs)(`label`,{className:`control-row`,children:[(0,H.jsx)(`span`,{title:Ji(`Preset`),children:`Preset`}),(0,H.jsx)(`select`,{"data-testid":`preset-select`,name:`preset`,value:e.value,onChange:t=>e.onChange(t.target.value),children:e.settings.map(e=>(0,H.jsx)(`option`,{value:e.id,children:e.name},e.id))}),(0,H.jsx)(`output`,{})]})}function Ja(e){let[t,n]=(0,_.useState)(String(e.value)),[r,i]=(0,_.useState)(!1);(0,_.useEffect)(()=>{r||n(String(e.value))},[r,e.value]);let a=()=>{i(!1);let r=Number(t);Number.isFinite(r)?e.onChange?.(r):n(String(e.value))},o=t=>{n(t);let r=Number(t);!e.readOnly&&Number.isFinite(r)&&e.onChange?.(r)};return(0,H.jsxs)(`label`,{className:`control-row`,children:[(0,H.jsx)(`span`,{title:Ji(e.label),children:e.label}),(0,H.jsx)(`input`,{"data-testid":e.testId,name:Qa(e.label),type:`number`,value:t,readOnly:e.readOnly,min:e.min,max:e.max,step:e.step,onFocus:()=>i(!0),onChange:e=>o(e.target.value),onBlur:a,onKeyDown:t=>{t.key===`Enter`?t.currentTarget.blur():t.key===`Escape`&&(i(!1),n(String(e.value)),t.currentTarget.blur())}})]})}function Ya(e){let[t,n]=(0,_.useState)($a(e.value,e.precision)),[r,i]=(0,_.useState)(!1);(0,_.useEffect)(()=>{r||n($a(e.value,e.precision))},[r,e.precision,e.value]);let a=t=>{if(n(t),eo(t))return;let r=Number(t);Number.isFinite(r)&&e.onChange(r)};return(0,H.jsx)(`input`,{className:e.className,"data-testid":e[`data-testid`],"aria-label":e[`aria-label`],name:e.name,type:`number`,min:e.min,max:e.max,step:e.step,value:t,onFocus:()=>i(!0),onChange:e=>a(e.currentTarget.value),onBlur:()=>{if(i(!1),eo(t)){n($a(e.value,e.precision));return}let r=Number(t);Number.isFinite(r)?(e.onChange(r),n($a(r,e.precision))):n($a(e.value,e.precision))},onKeyDown:t=>{t.key===`Enter`?t.currentTarget.blur():t.key===`Escape`&&(i(!1),n($a(e.value,e.precision)),t.currentTarget.blur())}})}var G=(0,_.memo)(Ra,(e,t)=>e.value===t.value&&e.min===t.min&&e.max===t.max&&e.step===t.step&&e.curve===t.curve&&e.label===t.label),Xa=(0,_.memo)(Ua,(e,t)=>e.value===t.value&&e.label===t.label),Za=(0,_.memo)(Ga,(e,t)=>e.value===t.value&&e.label===t.label);function Qa(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}function $a(e,t){return Number.isFinite(e)?t===void 0?String(e):e.toFixed(t):``}function eo(e){let t=e.trim();return t===``||t===`-`||t===`+`||t===`.`||t===`-.`||t===`+.`}function to(){let e=document;return e.fullscreenElement??e.webkitFullscreenElement??null}function no(e){let t=e;if(!t)return;let n=t.requestFullscreen??t.webkitRequestFullscreen;return n?()=>n.call(t):void 0}function ro(){let e=document,t=e.exitFullscreen??e.webkitExitFullscreen;return t?()=>t.call(e):void 0}function io(e){return e instanceof HTMLElement&&(e.isContentEditable||e.tagName===`INPUT`||e.tagName===`TEXTAREA`||e.tagName===`SELECT`)}function ao(e,t,n,r,i,a){let o=t.state;if(!o.active||!n.follow&&!n.look)return;let s=[o.centroid[0],o.centroid[1]+n.followHeight,o.centroid[2]],c={yaw:e.yaw,pitch:e.pitch,distance:e.distance,aspect:i};if(n.look){let t=gr(s,c);r.panX.value=e.panX,r.panY.value=e.panY,or(r.panX,Y(-t[0],la,ua),1/n.lookSpeed,n.lookSmoothing,a),or(r.panY,Y(-t[1],la,ua),1/n.lookSpeed,n.lookSmoothing,a),e.panX=r.panX.value,e.panY=r.panY.value,e.targetPanX=e.panX,e.targetPanY=e.panY}n.follow&&(r.distance.value=e.distance,or(r.distance,Qo(n.followDistance),1/n.followSpeed,n.followSmoothing,a),e.distance=r.distance.value,e.targetDistance=e.distance)}function oo(e,t){return t.yaw=Xo(t.yaw,t.targetYaw,.26),t.pitch=Yo(t.pitch,t.targetPitch,.26),t.distance=Yo(t.distance,t.targetDistance,.22),t.panX=Yo(t.panX,t.targetPanX,.28),t.panY=Yo(t.panY,t.targetPanY,.28),t.fov=Yo(t.fov,t.targetFov,.18),{...e,fov:t.fov,cameraYaw:t.yaw,cameraPitch:t.pitch,cameraDistance:t.distance,cameraPanX:t.panX,cameraPanY:t.panY}}function K(e,t){let n=performance.now();n-t.current<300||(t.current=n,e())}function q(e,t){let n=performance.now();if(e.lastTime===0){e.lastTime=n;return}e.frames+=1;let r=n-e.lastTime;r<500||(e.value=e.frames*1e3/r,e.frames=0,e.lastTime=n,t(e.value))}function so(e,t){let n=e?.particleCount??t.particleCount;return e?.effectiveRenderLayer===`debug-voxels`?e.voxelCount*6:n*4}function co(e){return Number.isFinite(e)?Math.max(0,Math.round(e)).toLocaleString(`en-US`):`...`}function lo(e){if(!e)return!1;let t=e.renderMode===`volume-raymarch+particle-splats`||e.renderMode===`particle-splats`||e.renderMode===`volume-density-raymarch`,n=e.renderMode===`particle-splats`||e.fieldStats.nonzeroVoxels>0;return e.renderer===`webgpu-live-3d`&&t&&e.depositMode===`particle-atomic-fixed-point`&&e.timestep>0&&n&&e.ruleEvidence.nonzero&&e.ruleEvidence.cohortDependent}function uo(e,t,n,r,i,a,o,s){let c=new Date().toISOString(),l=Ho(n,po(No(r),r,o.sliders));return{version:2,id:s?.id??Io(),name:Kr(e,`Preset`),createdAt:s?.createdAt??c,updatedAt:c,presetId:t,displayMode:n,controls:l,liveConfig:Po(i),ui:Ao(a),audio:Do(o)}}function fo(e){return Do(e)}function po(e,t,n){let r=e;for(let[i,a]of Object.entries(ea)){let o=n[i];if(!o||!Oi(o)&&!ui(o.midi))continue;let s=e[a];if(typeof s!=`number`)continue;let c=J(t[a],s);c!==s&&(r===e&&(r={...e}),r[a]=c)}return r}function mo(e){return Ao({playing:e.playing,overlay:e.overlay,viewLocked:!1,demoMode:e.demoMode,frameCap:e.frameCap,cameraOrbit:{enabled:e.cameraOrbitEnabled,speed:e.cameraOrbitSpeed},timeline:{enabled:e.timelineEnabled,state:e.timeline},trackingControls:e.trackingControls})}function ho(e){return`${ar(e).name} ${new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}`}async function go(e,t){let n=`${Lo(e)}.lifesim3d.json`,r=window;if(r.showSaveFilePicker)try{let i=await r.showSaveFilePicker({suggestedName:n,types:ja}),a=t(Ro(i.name)||e),o=await i.createWritable();return await o.write(_o(a)),await o.close(),a}catch(e){if(zo(e))return null;throw e}let i=t(e);return vo(i),i}function _o(e){return new Blob([`${JSON.stringify(e,null,2)}\n`],{type:`application/json`})}function vo(e){let t=URL.createObjectURL(_o(e)),n=document.createElement(`a`);n.href=t,n.download=`${Lo(e.name)}.lifesim3d.json`,n.click(),URL.revokeObjectURL(t)}async function yo(e,t){let n=URL.createObjectURL(t),r=document.createElement(`a`);return r.href=n,r.download=e,r.click(),URL.revokeObjectURL(n),e}function bo(e){let t=new Blob([JSON.stringify(e)],{type:`application/json`});return yo(`performance_${e.frames.length}f.lifesim-recording.json`,t)}function xo(e,t){return yo(`performance_${t}f.audio.${Yn(e.mimeType)}`,e.blob)}function So(e){let t=window;for(let n of[`__audioModulationSaveWrites`,`__volumeDensitySaveWrites`,`__accumulationSaveWrites`]){let r=t[n];Array.isArray(r)&&r.push({suggestedName:null,json:e})}let n=t.__midiMappingSaveWrites;Array.isArray(n)&&n.push(e)}function Co(){return wo()}function wo(){let e=[];for(let[t,n]of Object.entries(_a))try{let r=t.split(`/`).pop()??t,i=Ro(r),a=JSON.parse(n),o=Eo(Bo(a)?{...a,id:`file-${Lo(r)}`}:a,i);o&&e.push({...o,fileBacked:!0})}catch{}return e}function To(e,t){return Eo(JSON.parse(e),t)??(()=>{throw Error(`JSON preset is missing live settings`)})()}function Eo(e,t){if(!Bo(e))return null;let n=Bo(e.controls)?e.controls:e,r=Bo(e.liveConfig)?e.liveConfig:Bo(e.live)?e.live:Bo(e.config)?e.config:null;if(!r)return null;let i=new Date().toISOString(),a=Kr(e.name,t),o=typeof e.presetId==`string`&&ir.some(t=>t.id===e.presetId)?e.presetId:ir[0].id,s=`live`,c=Ho(s,No(n));return{version:2,id:typeof e.id==`string`&&e.id?e.id:Io(),name:a,createdAt:typeof e.createdAt==`string`?e.createdAt:i,updatedAt:typeof e.updatedAt==`string`?e.updatedAt:i,presetId:o,displayMode:s,controls:c,liveConfig:Po(r),ui:Ao(Bo(e.ui)?e.ui:e,Oo(Bo(e.ui)?e.ui:e)),audio:Do(Bo(e.audio)?e.audio:{})}}function Do(e){let t=Bo(e)?e:{};return{panel:V(t.panel),sliders:Ni(t.sliders)}}function Oo(e){return!ko(e)&&Ir(window.location.search)}function ko(e){if(!Bo(e))return!1;if(typeof e.playing==`boolean`)return!0;let t=Bo(e.timeline)?e.timeline:null;return t?typeof t.playing==`boolean`||typeof(Bo(t.state)?t.state:t).playing==`boolean`:!1}function Ao(e,t=!1){let n=Bo(e)?e:{},r=Bo(n.timeline)?n.timeline:{},i=jo(Bo(r.state)?r.state:r,t),a=typeof n.playing==`boolean`?n.playing:i.playing,o=Bo(n.cameraOrbit)?n.cameraOrbit:{},s=Bo(n.trackingControls)?n.trackingControls:Bo(n.tracking)?n.tracking:{};return{playing:a,overlay:typeof n.overlay==`boolean`&&n.overlay,viewLocked:!1,demoMode:typeof n.demoMode==`boolean`&&n.demoMode,frameCap:Y(J(n.frameCap,60),0,120),cameraOrbit:{enabled:typeof o.enabled==`boolean`?o.enabled:wa.enabled,speed:Y(J(o.speed,wa.speed),Ca.min,Ca.max)},timeline:{enabled:typeof r.enabled==`boolean`&&r.enabled,state:{...i,playing:a}},trackingControls:Mo(s)}}function jo(e,t=!1){let n=Bo(e)?e:{},{loopIn:r,loopOut:i}=Tr(J(n.loopIn,0),J(n.loopOut,Cr-1));return{currentFrame:Math.round(Y(J(n.currentFrame,0),0,Cr-1)),playing:typeof n.playing==`boolean`?n.playing:t,loopIn:r,loopOut:i,playbackSpeed:Y(J(n.playbackSpeed,1),.05,8)}}function Mo(e){let t=Bo(e)?e:{};return{follow:typeof t.follow==`boolean`?t.follow:Qi.follow,look:typeof t.look==`boolean`?t.look:Qi.look,followSpeed:Y(J(t.followSpeed,Qi.followSpeed),Ta.followSpeed.min,Ta.followSpeed.max),followSmoothing:Y(J(t.followSmoothing,Qi.followSmoothing),Ta.followSmoothing.min,Ta.followSmoothing.max),lookSpeed:Y(J(t.lookSpeed,Qi.lookSpeed),Ta.lookSpeed.min,Ta.lookSpeed.max),lookSmoothing:Y(J(t.lookSmoothing,Qi.lookSmoothing),Ta.lookSmoothing.min,Ta.lookSmoothing.max),followDistance:Y(J(t.followDistance,Qi.followDistance),Ta.followDistance.min,Ta.followDistance.max),followHeight:Y(J(t.followHeight,Qi.followHeight),Ta.followHeight.min,Ta.followHeight.max),cohesion:Y(J(t.cohesion,Qi.cohesion),Ta.cohesion.min,Ta.cohesion.max)}}function No(e){let t=Bo(e)?e:{},n=t.palette===`ember`||t.palette===`spectral`||t.palette===`aurora`?t.palette:W.palette,r=Y(J(t.particleMinPx,W.particleMinPx),0,8),i=Y(J(t.particleMaxPx,W.particleMaxPx),.2,32),a=Y(J(t.particleStretch,W.particleStretch),U.particleStretch.min,U.particleStretch.max),o=Math.min(a,Y(J(t.particleStretchMin,W.particleStretchMin),U.particleStretchMin.min,U.particleStretchMin.max)),s=Y(J(t.variationSizeMin,W.variationSizeMin),U.variationSizeMin.min,U.variationSizeMin.max),c=Y(J(t.variationSizeMax,W.variationSizeMax),U.variationSizeMax.min,U.variationSizeMax.max),l=Y(J(t.variationBrightMin,W.variationBrightMin),U.variationBrightMin.min,U.variationBrightMin.max),u=Y(J(t.variationBrightMax,W.variationBrightMax),U.variationBrightMax.min,U.variationBrightMax.max),d=Y(J(t.variationOpacityMin,W.variationOpacityMin),U.variationOpacityMin.min,U.variationOpacityMin.max),f=Y(J(t.variationOpacityMax,W.variationOpacityMax),U.variationOpacityMax.min,U.variationOpacityMax.max),p=Y(J(t.variationColorMin,W.variationColorMin),U.variationColorMin.min,U.variationColorMin.max),m=Y(J(t.variationColorMax,W.variationColorMax),U.variationColorMax.min,U.variationColorMax.max);return{...W,bloomStrength:Y(J(t.bloomStrength,W.bloomStrength),U.bloomStrength.min,U.bloomStrength.max),bloomThreshold:Y(J(t.bloomThreshold,W.bloomThreshold),U.bloomThreshold.min,U.bloomThreshold.max),bloomRadius:Y(J(t.bloomRadius,W.bloomRadius),U.bloomRadius.min,U.bloomRadius.max),colorSaturation:Y(J(t.colorSaturation,W.colorSaturation),U.colorSaturation.min,U.colorSaturation.max),colorContrast:Y(J(t.colorContrast,W.colorContrast),U.colorContrast.min,U.colorContrast.max),chromaticAberration:Y(J(t.chromaticAberration,W.chromaticAberration),U.chromaticAberration.min,U.chromaticAberration.max),vignetteStrength:Y(J(t.vignetteStrength,W.vignetteStrength),U.vignetteStrength.min,U.vignetteStrength.max),vignetteSoftness:Y(J(t.vignetteSoftness,W.vignetteSoftness),U.vignetteSoftness.min,U.vignetteSoftness.max),streakStrength:Y(J(t.streakStrength,W.streakStrength),U.streakStrength.min,U.streakStrength.max),streakLength:Y(J(t.streakLength,W.streakLength),U.streakLength.min,U.streakLength.max),streakVertical:Y(J(t.streakVertical,W.streakVertical),U.streakVertical.min,U.streakVertical.max),flareHeight:Y(J(t.flareHeight,W.flareHeight),U.flareHeight.min,U.flareHeight.max),flareCutoff:Y(J(t.flareCutoff,W.flareCutoff),U.flareCutoff.min,U.flareCutoff.max),ribbonFraction:Y(J(t.ribbonFraction,W.ribbonFraction),U.ribbonFraction.min,U.ribbonFraction.max),ribbonWidth:Y(J(t.ribbonWidth,W.ribbonWidth),U.ribbonWidth.min,U.ribbonWidth.max),ribbonTaper:Y(J(t.ribbonTaper,W.ribbonTaper),U.ribbonTaper.min,U.ribbonTaper.max),ribbonLength:Y(J(t.ribbonLength,W.ribbonLength),U.ribbonLength.min,U.ribbonLength.max),ribbonJoints:Y(J(t.ribbonJoints,W.ribbonJoints),U.ribbonJoints.min,U.ribbonJoints.max),ribbonFadeStart:Y(J(t.ribbonFadeStart,W.ribbonFadeStart),U.ribbonFadeStart.min,U.ribbonFadeStart.max),ribbonEdgeFade:Y(J(t.ribbonEdgeFade,W.ribbonEdgeFade),U.ribbonEdgeFade.min,U.ribbonEdgeFade.max),density:Y(J(t.density,W.density),.25,2.8),exposure:Y(J(t.exposure,W.exposure),.4,2.6),sceneBrightness:Y(J(t.sceneBrightness,W.sceneBrightness),0,2.6),fov:Y(J(t.fov,W.fov),10,170),aperture:Y(J(t.aperture,W.aperture),0,2),focusDistance:Y(J(t.focusDistance,W.focusDistance),U.focusDistance.min,U.focusDistance.max),dofBlur:Y(J(t.dofBlur,W.dofBlur),0,8),dofEnabled:typeof t.dofEnabled==`boolean`?t.dofEnabled:W.dofEnabled,dofDebug:typeof t.dofDebug==`boolean`?t.dofDebug:W.dofDebug,raySteps:Math.round(Y(J(t.raySteps,W.raySteps),8,512)/8)*8,rayResolution:Ne(J(t.rayResolution,W.rayResolution)),fogTemporal:typeof t.fogTemporal==`boolean`?t.fogTemporal:W.fogTemporal,fogRenderScale:Y(J(t.fogRenderScale,W.fogRenderScale),.25,1),fogStepScale:Y(J(t.fogStepScale,W.fogStepScale),.125,1),fogTemporalBlend:Y(J(t.fogTemporalBlend,W.fogTemporalBlend),0,.96),fogBlueNoise:typeof t.fogBlueNoise==`boolean`?t.fogBlueNoise:W.fogBlueNoise,fieldTextureSampling:typeof t.fieldTextureSampling==`boolean`?t.fieldTextureSampling:W.fieldTextureSampling,emptySpaceSkipping:typeof t.emptySpaceSkipping==`boolean`?t.emptySpaceSkipping:W.emptySpaceSkipping,emptySpaceThreshold:Y(J(t.emptySpaceThreshold,W.emptySpaceThreshold),0,.2),emptySpaceStride:Math.round(Y(J(t.emptySpaceStride,W.emptySpaceStride),1,8)),particleSizePx:Y(J(t.particleSizePx,W.particleSizePx),.2,24),particleMinPx:Math.min(r,i),particleMaxPx:Math.max(i,r),particleOpacity:Y(J(t.particleOpacity,W.particleOpacity),0,1),particleBrightness:Y(J(t.particleBrightness,W.particleBrightness),0,8),particleColorMode:Ko(t.particleColorMode)??W.particleColorMode,particleVelocityStretch:typeof t.particleVelocityStretch==`boolean`?t.particleVelocityStretch:W.particleVelocityStretch,particleStretch:a,particleStretchMin:o,particleStretchSpeed:Y(J(t.particleStretchSpeed,W.particleStretchSpeed),U.particleStretchSpeed.min,U.particleStretchSpeed.max),particleSpeedCutoff:Y(J(t.particleSpeedCutoff,W.particleSpeedCutoff),U.particleSpeedCutoff.min,U.particleSpeedCutoff.max),particleSlowCutoff:Y(J(t.particleSlowCutoff,W.particleSlowCutoff),U.particleSlowCutoff.min,U.particleSlowCutoff.max),particleGlowCore:Y(J(t.particleGlowCore,W.particleGlowCore),U.particleGlowCore.min,U.particleGlowCore.max),particleHotCore:Y(J(t.particleHotCore,W.particleHotCore),U.particleHotCore.min,U.particleHotCore.max),particleExponent:Y(J(t.particleExponent,W.particleExponent),U.particleExponent.min,U.particleExponent.max),particleBrightnessBoost:Y(J(t.particleBrightnessBoost,W.particleBrightnessBoost),U.particleBrightnessBoost.min,U.particleBrightnessBoost.max),particleSupportSmoothing:Y(J(t.particleSupportSmoothing,W.particleSupportSmoothing),U.particleSupportSmoothing.min,U.particleSupportSmoothing.max),particleHazeCull:Y(J(t.particleHazeCull,W.particleHazeCull),U.particleHazeCull.min,U.particleHazeCull.max),particleDespeckle:Y(J(t.particleDespeckle,W.particleDespeckle),U.particleDespeckle.min,U.particleDespeckle.max),particleBlendMode:Wo(typeof t.particleBlendMode==`string`?t.particleBlendMode:null)??W.particleBlendMode,particleDensityCutoff:Y(J(t.particleDensityCutoff,W.particleDensityCutoff),U.particleDensityCutoff.min,U.particleDensityCutoff.max),particleDensityRadius:Y(J(t.particleDensityRadius,W.particleDensityRadius),0,.18),particleDensityNormalize:Y(J(t.particleDensityNormalize,W.particleDensityNormalize),U.particleDensityNormalize.min,U.particleDensityNormalize.max),particleDensitySoftness:Y(J(t.particleDensitySoftness,W.particleDensitySoftness),U.particleDensitySoftness.min,U.particleDensitySoftness.max),particleSupportMask:Y(J(t.particleSupportMask,W.particleSupportMask),U.particleSupportMask.min,U.particleSupportMask.max),particleSupportRadius:Y(J(t.particleSupportRadius,W.particleSupportRadius),U.particleSupportRadius.min,U.particleSupportRadius.max),particleSupportNeighbors:Y(J(t.particleSupportNeighbors,W.particleSupportNeighbors),U.particleSupportNeighbors.min,U.particleSupportNeighbors.max),particleSupportFlow:Y(J(t.particleSupportFlow,W.particleSupportFlow),U.particleSupportFlow.min,U.particleSupportFlow.max),fastParticleRender:typeof t.fastParticleRender==`boolean`?t.fastParticleRender:W.fastParticleRender,fastNoBloomPost:typeof t.fastNoBloomPost==`boolean`?t.fastNoBloomPost:W.fastNoBloomPost,particleCutoffPrepass:typeof t.particleCutoffPrepass==`boolean`?t.particleCutoffPrepass:W.particleCutoffPrepass,densityLargeHalfRes:typeof t.densityLargeHalfRes==`boolean`?t.densityLargeHalfRes:W.densityLargeHalfRes,densityPassStrength:Y(J(t.densityPassStrength,W.densityPassStrength),U.densityPassStrength.min,U.densityPassStrength.max),densitySmallScale:Y(J(t.densitySmallScale,W.densitySmallScale),.25,5),densityLargeScale:Y(J(t.densityLargeScale,W.densityLargeScale),U.densityLargeScale.min,U.densityLargeScale.max),densityLargeThreshold:Y(J(t.densityLargeThreshold,W.densityLargeThreshold),U.densityLargeThreshold.min,U.densityLargeThreshold.max),densityContrastGain:Y(J(t.densityContrastGain,W.densityContrastGain),U.densityContrastGain.min,U.densityContrastGain.max),densityContrastBalance:Y(J(t.densityContrastBalance,W.densityContrastBalance),0,1.5),densityEmissionPower:Y(J(t.densityEmissionPower,W.densityEmissionPower),.25,5),densityOcclusion:Y(J(t.densityOcclusion,W.densityOcclusion),0,1),accumulationStrength:Y(J(t.accumulationStrength,W.accumulationStrength),U.accumulationStrength.min,U.accumulationStrength.max),accumulationRadius:Y(J(t.accumulationRadius,W.accumulationRadius),U.accumulationRadius.min,U.accumulationRadius.max),accumulationCurve:Y(J(t.accumulationCurve,W.accumulationCurve),U.accumulationCurve.min,U.accumulationCurve.max),accumulationMemory:Y(J(t.accumulationMemory,W.accumulationMemory),U.accumulationMemory.min,U.accumulationMemory.max),accumulationNoiseReject:Y(J(t.accumulationNoiseReject,W.accumulationNoiseReject),U.accumulationNoiseReject.min,U.accumulationNoiseReject.max),trailOpacity:Y(J(t.trailOpacity,W.trailOpacity),0,2.5),fogBrightness:Y(J(t.fogBrightness,W.fogBrightness),0,8),trailThreshold:Y(J(t.trailThreshold,W.trailThreshold),0,.28),trailColorMode:Go(typeof t.trailColorMode==`string`?t.trailColorMode:null)??W.trailColorMode,fogTint:qo(t.fogTint,W.fogTint),particleTint:qo(t.particleTint,W.particleTint),renderLayer:`particles`,palette:n,filament:Y(J(t.filament,W.filament),0,1),cameraYaw:J(t.cameraYaw,W.cameraYaw),cameraPitch:Y(J(t.cameraPitch,W.cameraPitch),sa,ca),cameraDistance:Qo(J(t.cameraDistance,W.cameraDistance)),cameraPanX:Y(J(t.cameraPanX,W.cameraPanX),la,ua),cameraPanY:Y(J(t.cameraPanY,W.cameraPanY),la,ua),variationMaster:Y(J(t.variationMaster,W.variationMaster),U.variationMaster.min,U.variationMaster.max),variationDrift:Y(J(t.variationDrift,W.variationDrift),U.variationDrift.min,U.variationDrift.max),variationNoiseMix:Y(J(t.variationNoiseMix,W.variationNoiseMix),U.variationNoiseMix.min,U.variationNoiseMix.max),variationFreq:Y(J(t.variationFreq,W.variationFreq),U.variationFreq.min,U.variationFreq.max),variationOctaves:Math.round(Y(J(t.variationOctaves,W.variationOctaves),U.variationOctaves.min,U.variationOctaves.max)),variationGain:Y(J(t.variationGain,W.variationGain),U.variationGain.min,U.variationGain.max),variationLacunarity:Y(J(t.variationLacunarity,W.variationLacunarity),U.variationLacunarity.min,U.variationLacunarity.max),variationSizeAmount:Y(J(t.variationSizeAmount,W.variationSizeAmount),U.variationSizeAmount.min,U.variationSizeAmount.max),variationSizeCurve:Y(J(t.variationSizeCurve,W.variationSizeCurve),U.variationSizeCurve.min,U.variationSizeCurve.max),variationSizeMin:Math.min(s,c),variationSizeMax:Math.max(s,c),variationBrightAmount:Y(J(t.variationBrightAmount,W.variationBrightAmount),U.variationBrightAmount.min,U.variationBrightAmount.max),variationBrightCurve:Y(J(t.variationBrightCurve,W.variationBrightCurve),U.variationBrightCurve.min,U.variationBrightCurve.max),variationBrightMin:Math.min(l,u),variationBrightMax:Math.max(l,u),variationOpacityAmount:Y(J(t.variationOpacityAmount,W.variationOpacityAmount),U.variationOpacityAmount.min,U.variationOpacityAmount.max),variationOpacityCurve:Y(J(t.variationOpacityCurve,W.variationOpacityCurve),U.variationOpacityCurve.min,U.variationOpacityCurve.max),variationOpacityMin:Math.min(d,f),variationOpacityMax:Math.max(d,f),variationColorAmount:Y(J(t.variationColorAmount,W.variationColorAmount),U.variationColorAmount.min,U.variationColorAmount.max),variationColorCurve:Y(J(t.variationColorCurve,W.variationColorCurve),U.variationColorCurve.min,U.variationColorCurve.max),variationColorMin:Math.min(p,m),variationColorMax:Math.max(p,m)}}function Po(e){let t=Bo(e)?e:{},n=es(J(t.width,F.width)),r=es(J(t.height,n)),i=es(J(t.depth,n)),a=Fo(t.initialConditions,0,8),o=Fo(t.boundaryMode,0,6),s=Fo(t.domainShape,0,3),c=Fo(t.absoluteOrientation,0,5);return is({...F,mips:Y(J(t.mips,F.mips),0,1),anisoFollow:Y(J(t.anisoFollow,F.anisoFollow),0,1),flockAlign:Y(J(t.flockAlign,F.flockAlign),0,1),flockSeparate:Y(J(t.flockSeparate,F.flockSeparate),0,1),chemotaxis:Y(J(t.chemotaxis,F.chemotaxis),-1,1),quorumStrength:Y(J(t.quorumStrength,F.quorumStrength),0,1),quorumThreshold:Y(J(t.quorumThreshold,F.quorumThreshold),0,1),leniaStrength:Y(J(t.leniaStrength,F.leniaStrength),0,1),leniaCenter:Y(J(t.leniaCenter,F.leniaCenter),0,1),leniaWidth:Y(J(t.leniaWidth,F.leniaWidth),.001,.2),speciesForce:Y(J(t.speciesForce,F.speciesForce),0,1),predator:Y(J(t.predator,F.predator),0,1),alarm:Y(J(t.alarm,F.alarm),0,1),grayScott:Y(J(t.grayScott,F.grayScott),0,1),gsFeed:Y(J(t.gsFeed,F.gsFeed),0,.1),gsKill:Y(J(t.gsKill,F.gsKill),0,.1),energy:Y(J(t.energy,F.energy),0,1),energyDrain:Y(J(t.energyDrain,F.energyDrain),0,1),seed:Fo(t.seed,0,4294967295),simulationSpeed:ns(J(t.simulationSpeed,F.simulationSpeed)),width:n,height:r,depth:i,particleCount:$o(J(t.particleCount,F.particleCount)),dt:J(t.dt,F.dt),sensorGain:J(t.sensorGain,F.sensorGain),sensorAngle:J(t.sensorAngle,F.sensorAngle),sensorDistance:J(t.sensorDistance,F.sensorDistance),mutationScale:J(t.mutationScale,F.mutationScale),globalForceMult:J(t.globalForceMult,F.globalForceMult),drag:J(t.drag,F.drag),strafePower:J(t.strafePower,F.strafePower),strafeMomentum:Y(J(t.strafeMomentum,F.strafeMomentum),Da.strafeMomentum.min,Da.strafeMomentum.max),axialForce:J(t.axialForce,F.axialForce),lateralForce:J(t.lateralForce,F.lateralForce),hazardRate:J(t.hazardRate,F.hazardRate),trailPersistence:J(t.trailPersistence,F.trailPersistence),trailDiffusion:J(t.trailDiffusion,F.trailDiffusion),depositRadius:J(t.depositRadius,F.depositRadius),depositTapRadius:J(t.depositTapRadius,F.depositTapRadius),depositMass:J(t.depositMass,F.depositMass),sigma:J(t.sigma,F.sigma),pulseDepth:Y(J(t.pulseDepth,F.pulseDepth),0,1),pulseRate:Y(J(t.pulseRate,F.pulseRate),0,4),restlessness:Y(J(t.restlessness,F.restlessness),0,1),cohorts:Fo(t.cohorts,1,128),ruleSeed:J(t.ruleSeed,F.ruleSeed),hueSensitivity:J(t.hueSensitivity,F.hueSensitivity),colorByCohort:typeof t.colorByCohort==`boolean`?t.colorByCohort:F.colorByCohort,symmetryAxes:typeof t.symmetryAxes==`number`?Fo(t.symmetryAxes,0,7):t.disableSymmetry===!0?0:2,absoluteOrientation:c,orientationMix:J(t.orientationMix,F.orientationMix),initialConditions:a,boundaryMode:o,domainShape:s,rule:Array.isArray(t.rule)?t.rule.slice(0,80).map(e=>J(e,0)):F.rule,recycleCutoff:Y(J(t.recycleCutoff,F.recycleCutoff),0,.25),recycleEnabled:typeof t.recycleEnabled==`boolean`?t.recycleEnabled:F.recycleEnabled})}function J(e,t){let n=Number(e);return Number.isFinite(n)?n:t}function Fo(e,t,n){return Math.round(Y(J(e,t),t,n))}function Io(){return globalThis.crypto?.randomUUID?.()??`settings-${Date.now()}-${Math.random().toString(36).slice(2)}`}function Lo(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)||`lifesim-settings`}function Ro(e){return e.replace(/\.(lifesim3d|fluoddity3d)\.json$/i,``).replace(/\.json$/i,``).trim()}function zo(e){return Bo(e)&&e.name===`AbortError`}function Bo(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Vo(){let e=new URLSearchParams(window.location.search),t=ar(e.get(`preset`)??ir[0].id),n={...W,...t.renderControls},r=e.has(`particles`)?$o(Number(e.get(`particles`))):t.config.particleCount,i=e.has(`volume`)?es(Number(e.get(`volume`))):ls(r,t.config.width),a=e.has(`simSpeed`)?ns(Number(e.get(`simSpeed`))):e.has(`speed`)?ns(Number(e.get(`speed`))):t.config.simulationSpeed,o=e.has(`rayRes`)?Ne(Number(e.get(`rayRes`))):n.rayResolution,s=e.has(`raySteps`)?ts(Number(e.get(`raySteps`))):n.raySteps,c=e.has(`bloom`)?Y(J(Number(e.get(`bloom`)),n.bloomStrength),U.bloomStrength.min,U.bloomStrength.max):n.bloomStrength,l=e.has(`bloomThreshold`)?Y(J(Number(e.get(`bloomThreshold`)),n.bloomThreshold),U.bloomThreshold.min,U.bloomThreshold.max):n.bloomThreshold,u=e.has(`bloomRadius`)?Y(J(Number(e.get(`bloomRadius`)),n.bloomRadius),U.bloomRadius.min,U.bloomRadius.max):n.bloomRadius,d=e.has(`colorSaturation`)?Y(J(Number(e.get(`colorSaturation`)),n.colorSaturation),U.colorSaturation.min,U.colorSaturation.max):n.colorSaturation,f=e.has(`colorContrast`)?Y(J(Number(e.get(`colorContrast`)),n.colorContrast),U.colorContrast.min,U.colorContrast.max):n.colorContrast,p=e.has(`chromaticAberration`)?Y(J(Number(e.get(`chromaticAberration`)),n.chromaticAberration),U.chromaticAberration.min,U.chromaticAberration.max):n.chromaticAberration,m=e.has(`vignetteStrength`)?Y(J(Number(e.get(`vignetteStrength`)),n.vignetteStrength),U.vignetteStrength.min,U.vignetteStrength.max):n.vignetteStrength,h=e.has(`vignetteSoftness`)?Y(J(Number(e.get(`vignetteSoftness`)),n.vignetteSoftness),U.vignetteSoftness.min,U.vignetteSoftness.max):n.vignetteSoftness,g=e.has(`streakStrength`)?Y(J(Number(e.get(`streakStrength`)),n.streakStrength),U.streakStrength.min,U.streakStrength.max):n.streakStrength,_=e.has(`streakLength`)?Y(J(Number(e.get(`streakLength`)),n.streakLength),U.streakLength.min,U.streakLength.max):n.streakLength,v=e.has(`streakVertical`)?Y(J(Number(e.get(`streakVertical`)),n.streakVertical),U.streakVertical.min,U.streakVertical.max):n.streakVertical,y=e.has(`flareHeight`)?Y(J(Number(e.get(`flareHeight`)),n.flareHeight),U.flareHeight.min,U.flareHeight.max):n.flareHeight,b=e.has(`flareCutoff`)?Y(J(Number(e.get(`flareCutoff`)),n.flareCutoff),U.flareCutoff.min,U.flareCutoff.max):n.flareCutoff,x=e.has(`ribbonFraction`)?Y(J(Number(e.get(`ribbonFraction`)),n.ribbonFraction),U.ribbonFraction.min,U.ribbonFraction.max):n.ribbonFraction,S=e.has(`ribbonWidth`)?Y(J(Number(e.get(`ribbonWidth`)),n.ribbonWidth),U.ribbonWidth.min,U.ribbonWidth.max):n.ribbonWidth,C=e.has(`ribbonTaper`)?Y(J(Number(e.get(`ribbonTaper`)),n.ribbonTaper),U.ribbonTaper.min,U.ribbonTaper.max):n.ribbonTaper,w=e.has(`ribbonLength`)?Y(J(Number(e.get(`ribbonLength`)),n.ribbonLength),U.ribbonLength.min,U.ribbonLength.max):n.ribbonLength,ee=e.has(`ribbonJoints`)?Y(J(Number(e.get(`ribbonJoints`)),n.ribbonJoints),U.ribbonJoints.min,U.ribbonJoints.max):n.ribbonJoints,T=e.has(`ribbonFadeStart`)?Y(J(Number(e.get(`ribbonFadeStart`)),n.ribbonFadeStart),U.ribbonFadeStart.min,U.ribbonFadeStart.max):n.ribbonFadeStart,te=e.has(`ribbonEdgeFade`)?Y(J(Number(e.get(`ribbonEdgeFade`)),n.ribbonEdgeFade),U.ribbonEdgeFade.min,U.ribbonEdgeFade.max):n.ribbonEdgeFade,E=Jo(e.get(`dofEnabled`)??e.get(`dof`))??n.dofEnabled,ne=e.has(`sceneBrightness`)?Y(J(Number(e.get(`sceneBrightness`)),n.sceneBrightness),0,2.6):n.sceneBrightness,re=Jo(e.get(`fogTemporal`))??n.fogTemporal,D=e.has(`fogBrightness`)?Y(J(Number(e.get(`fogBrightness`)),n.fogBrightness),0,8):n.fogBrightness,ie=e.has(`fogScale`)?Y(J(Number(e.get(`fogScale`)),n.fogRenderScale),.25,1):n.fogRenderScale,ae=e.has(`fogStepScale`)?Y(J(Number(e.get(`fogStepScale`)),n.fogStepScale),.125,1):n.fogStepScale,oe=e.has(`fogBlend`)?Y(J(Number(e.get(`fogBlend`)),n.fogTemporalBlend),0,.96):n.fogTemporalBlend,se=Jo(e.get(`fogBlueNoise`))??n.fogBlueNoise,O=Jo(e.get(`fieldTexture`))??n.fieldTextureSampling,k=Jo(e.get(`emptySkip`))??n.emptySpaceSkipping,A=e.has(`emptySkipThreshold`)?Y(J(Number(e.get(`emptySkipThreshold`)),n.emptySpaceThreshold),0,.2):n.emptySpaceThreshold,j=e.has(`emptySkipStride`)?Math.round(Y(J(Number(e.get(`emptySkipStride`)),n.emptySpaceStride),1,8)):n.emptySpaceStride,ce=Wo(e.get(`particleBlend`))??n.particleBlendMode,M=Ko(e.get(`particleColor`))??n.particleColorMode,le=e.has(`particleBrightness`)?Y(J(Number(e.get(`particleBrightness`)),n.particleBrightness),0,8):n.particleBrightness,N=e.has(`particleOpacity`)?Y(J(Number(e.get(`particleOpacity`)),n.particleOpacity),0,1):n.particleOpacity,ue=Jo(e.get(`particleVelocityStretch`))??n.particleVelocityStretch,de=e.has(`particleStretch`)?Y(J(Number(e.get(`particleStretch`)),n.particleStretch),0,6):n.particleStretch,fe=e.has(`particleStretchMin`)?Math.min(de,Y(J(Number(e.get(`particleStretchMin`)),n.particleStretchMin),U.particleStretchMin.min,U.particleStretchMin.max)):Math.min(n.particleStretchMin,de),pe=e.has(`particleStretchSpeed`)?Y(J(Number(e.get(`particleStretchSpeed`)),n.particleStretchSpeed),U.particleStretchSpeed.min,U.particleStretchSpeed.max):n.particleStretchSpeed,me=e.has(`particleSpeedCutoff`)?Y(J(Number(e.get(`particleSpeedCutoff`)),n.particleSpeedCutoff),U.particleSpeedCutoff.min,U.particleSpeedCutoff.max):n.particleSpeedCutoff,he=e.has(`particleSlowCutoff`)?Y(J(Number(e.get(`particleSlowCutoff`)),n.particleSlowCutoff),U.particleSlowCutoff.min,U.particleSlowCutoff.max):n.particleSlowCutoff,ge=Go(e.get(`trailColor`))??n.trailColorMode,_e=qo(e.get(`fogTint`),n.fogTint),ve=qo(e.get(`particleTint`),n.particleTint),ye=e.has(`particleCutoff`)?Y(J(Number(e.get(`particleCutoff`)),n.particleDensityCutoff),U.particleDensityCutoff.min,U.particleDensityCutoff.max):n.particleDensityCutoff,be=e.has(`particleCutoffRadius`)?Y(J(Number(e.get(`particleCutoffRadius`)),n.particleDensityRadius),0,.18):n.particleDensityRadius,xe=e.has(`particleDensityNormalize`)?Y(J(Number(e.get(`particleDensityNormalize`)),n.particleDensityNormalize),U.particleDensityNormalize.min,U.particleDensityNormalize.max):n.particleDensityNormalize,Se=e.has(`particleDensitySoftness`)?Y(J(Number(e.get(`particleDensitySoftness`)),n.particleDensitySoftness),U.particleDensitySoftness.min,U.particleDensitySoftness.max):n.particleDensitySoftness,Ce=e.has(`particleSupport`)?Y(J(Number(e.get(`particleSupport`)),n.particleSupportMask),U.particleSupportMask.min,U.particleSupportMask.max):n.particleSupportMask,we=e.has(`particleSupportRadius`)?Y(J(Number(e.get(`particleSupportRadius`)),n.particleSupportRadius),U.particleSupportRadius.min,U.particleSupportRadius.max):n.particleSupportRadius,Te=e.has(`particleSupportNeighbors`)?Y(J(Number(e.get(`particleSupportNeighbors`)),n.particleSupportNeighbors),U.particleSupportNeighbors.min,U.particleSupportNeighbors.max):n.particleSupportNeighbors,Ee=e.has(`particleSupportFlow`)?Y(J(Number(e.get(`particleSupportFlow`)),n.particleSupportFlow),U.particleSupportFlow.min,U.particleSupportFlow.max):n.particleSupportFlow,De=Jo(e.get(`fastParticles`)??e.get(`fastParticleRender`))??n.fastParticleRender,P=Jo(e.get(`fastNoBloomPost`)??e.get(`fastPost`))??n.fastNoBloomPost,Oe=Jo(e.get(`cutoffPrepass`))??n.particleCutoffPrepass,ke=Jo(e.get(`densityHalfLarge`))??n.densityLargeHalfRes,Ae=e.has(`densityStrength`)?Y(J(Number(e.get(`densityStrength`)),n.densityPassStrength),U.densityPassStrength.min,U.densityPassStrength.max):n.densityPassStrength,je=e.has(`densitySmall`)?Y(J(Number(e.get(`densitySmall`)),n.densitySmallScale),.25,5):n.densitySmallScale,Me=e.has(`densityLarge`)?Y(J(Number(e.get(`densityLarge`)),n.densityLargeScale),U.densityLargeScale.min,U.densityLargeScale.max):n.densityLargeScale,Pe=e.has(`densityMask`)?Y(J(Number(e.get(`densityMask`)),n.densityLargeThreshold),U.densityLargeThreshold.min,U.densityLargeThreshold.max):n.densityLargeThreshold,F=e.has(`densityContrast`)?Y(J(Number(e.get(`densityContrast`)),n.densityContrastGain),U.densityContrastGain.min,U.densityContrastGain.max):n.densityContrastGain,Fe=e.has(`densityBalance`)?Y(J(Number(e.get(`densityBalance`)),n.densityContrastBalance),0,1.5):n.densityContrastBalance,Ie=e.has(`densityCurve`)?Y(J(Number(e.get(`densityCurve`)),n.densityEmissionPower),.25,5):n.densityEmissionPower,Le=e.has(`densityOcclusion`)?Y(J(Number(e.get(`densityOcclusion`)),n.densityOcclusion),0,1):n.densityOcclusion,Re=e.has(`accumulationStrength`)?Y(J(Number(e.get(`accumulationStrength`)),n.accumulationStrength),U.accumulationStrength.min,U.accumulationStrength.max):n.accumulationStrength,ze=e.has(`accumulationRadius`)?Y(J(Number(e.get(`accumulationRadius`)),n.accumulationRadius),U.accumulationRadius.min,U.accumulationRadius.max):n.accumulationRadius,Be=e.has(`accumulationCurve`)?Y(J(Number(e.get(`accumulationCurve`)),n.accumulationCurve),U.accumulationCurve.min,U.accumulationCurve.max):n.accumulationCurve,Ve=e.has(`accumulationMemory`)?Y(J(Number(e.get(`accumulationMemory`)),n.accumulationMemory),U.accumulationMemory.min,U.accumulationMemory.max):n.accumulationMemory,He=e.has(`accumulationReject`)?Y(J(Number(e.get(`accumulationReject`)),n.accumulationNoiseReject),U.accumulationNoiseReject.min,U.accumulationNoiseReject.max):n.accumulationNoiseReject,Ue=t.id===`trail-probe`?{particleSizePx:7.5,particleMinPx:1.2,particleMaxPx:18,particleOpacity:.95,trailOpacity:1.45,trailThreshold:0,density:1.65,raySteps:64}:{},We=is({...t.config,simulationSpeed:a,particleCount:r,width:i,height:i,depth:i}),Ge=Ho(`live`,{...n,...Ue,rayResolution:o,raySteps:s,bloomStrength:c,chromaticAberration:p,vignetteStrength:m,vignetteSoftness:h,streakStrength:g,streakLength:_,streakVertical:v,flareHeight:y,flareCutoff:b,ribbonFraction:x,ribbonWidth:S,ribbonTaper:C,ribbonLength:w,ribbonJoints:ee,ribbonFadeStart:T,ribbonEdgeFade:te,bloomThreshold:l,bloomRadius:u,colorSaturation:d,colorContrast:f,dofEnabled:E,sceneBrightness:ne,fogTemporal:re,fogBrightness:D,fogRenderScale:ie,fogStepScale:ae,fogTemporalBlend:oe,fogBlueNoise:se,fieldTextureSampling:O,emptySpaceSkipping:k,emptySpaceThreshold:A,emptySpaceStride:j,particleBlendMode:ce,particleColorMode:M,particleBrightness:le,particleOpacity:N,particleVelocityStretch:ue,particleStretch:de,particleStretchMin:fe,particleStretchSpeed:pe,particleSpeedCutoff:me,particleSlowCutoff:he,trailColorMode:ge,fogTint:_e,particleTint:ve,particleDensityCutoff:ye,particleDensityRadius:be,particleDensityNormalize:xe,particleDensitySoftness:Se,particleSupportMask:Ce,particleSupportRadius:we,particleSupportNeighbors:Te,particleSupportFlow:Ee,fastParticleRender:De,fastNoBloomPost:P,particleCutoffPrepass:Oe,densityLargeHalfRes:ke,densityPassStrength:Ae,densitySmallScale:je,densityLargeScale:Me,densityLargeThreshold:Pe,densityContrastGain:F,densityContrastBalance:Fe,densityEmissionPower:Ie,densityOcclusion:Le,accumulationStrength:Re,accumulationRadius:ze,accumulationCurve:Be,accumulationMemory:Ve,accumulationNoiseReject:He,renderLayer:`particles`});return{presetId:t.id,config:We,controls:Ge}}function Ho(e,t){return t.renderLayer===`particles`&&t.ribbonFraction===0?t:{...t,renderLayer:`particles`,ribbonFraction:0}}function Uo(e){return e.get(`profileGpu`)===`1`&&(e.get(`traceGpu`)===`1`||e.get(`debugGpu`)===`1`)}function Wo(e){return e===`additive`||e===`alpha`||e===`opaque`?e:null}function Go(e){return e===`stable`||e===`flow`||e===`thermal`||e===`tint`?e:null}function Ko(e){return va.includes(e)?e:null}function qo(e,t){return typeof e==`string`&&/^#[0-9a-f]{6}$/i.test(e)?e.toLowerCase():t}function Jo(e){return e===`1`||e===`true`?!0:e===`0`||e===`false`?!1:null}function Yo(e,t,n){let r=e+(t-e)*n;return Math.abs(r-t)<1e-4?t:r}function Xo(e,t,n){let r=Zo(t-e),i=e+r*n;return Math.abs(r)<1e-4?t:Zo(i)}function Zo(e){let t=Math.PI*2;return((e+Math.PI)%t+t)%t-Math.PI}function Y(e,t,n){return Math.min(n,Math.max(t,e))}function Qo(e){return Y(Number.isFinite(e)?e:Zi.distance,aa,oa)}function $o(e){let t=Y(Number.isFinite(e)?e:128,128,Xn);return Y(Math.round(t/Zn)*Zn,128,Xn)}function es(e){let t=Y(Number.isFinite(e)?e:fa,fa,pa);return Math.round(t/ma)*ma}function ts(e){let t=Y(Number.isFinite(e)?e:W.raySteps,8,512);return Math.round(t/8)*8}function ns(e){return Y(Number.isFinite(e)?e:F.simulationSpeed,0,4)}function rs(e){let t=String(e),n=t.indexOf(`.`);return n===-1?0:t.length-n-1}function is(e){let t=Y(e.depositRadius,ha,cs(e));return{...e,depositRadius:t,sigma:as(t,e.width),depositTapRadius:os(t,e.width,e.particleCount)}}function as(e,t){return Math.max(75e-5,e*.34)}function os(e,t,n){let r=2/Math.max(1,t);return Y(Math.ceil(e/r),1,ss(n))}function ss(e){return e>=262144?1:e>=65536?2:e>=16384?3:6}function cs(e){let t=2/Math.max(1,e.width);return Math.max(ha,Math.min(ga,(ss(e.particleCount)+.5)*t))}function ls(e,t){return e>=1048576?Math.max(t,64):e>=524288?Math.max(t,56):e>=262144?Math.max(t,48):e>=131072?Math.max(t,40):Math.max(t,fa)}var us={sampleCount:0,frameSpan:0,tickSpan:0,zeroAdvanceFrames:0,wholeAdvanceFrames:0,statsReadEvents:0,renderErrorEvents:0,flickerEvents:0,longFrameEvents:0,phaseResetEvents:0,maxAbsLumaDelta:0,p95AbsLumaDelta:0,maxChannelDelta:0,avgFrameTimeMs:0,p95FrameTimeMs:0,maxFrameTimeMs:0,uniqueRenderLerpT:[],uniqueStepScales:[],likelyCadenceFrames:null,events:[]},ds=6;function fs(e){if(e.length===0)return us;let t=e[0],n=e[e.length-1],r=e.length>ds*2?ds:1,i=e.slice(r),a=i.map(e=>Math.abs(e.lumaDelta)),o=i.map(e=>e.frameTimeMs),s=ms(a),c=hs(a,.95),l=ms(o),u=hs(o,.95),d=o.reduce((e,t)=>e+t,0)/Math.max(1,o.length),f=Math.max(hs(a,.5)*8,hs(a,.75)*4),p=Math.max(.85,f),m=Math.max(12,u*2.5),h=[],g=0;for(let t=1;t<e.length;t+=1){let n=e[t],i=e[t-1],a=t<r,o=Math.abs(n.lumaDelta);(n.statsReadMs>0||n.statsReadPending)&&h.push(ps(n,`stats-read`,n.statsReadMs)),!a&&o>=p&&h.push(ps(n,`flicker`,o)),!a&&n.frameTimeMs>=m&&h.push(ps(n,`long-frame`,n.frameTimeMs)),n.renderLerpT+1e-4<i.renderLerpT&&n.simulationTimeAdvance>0&&(g+=1)}let _=h.filter(e=>e.kind===`flicker`).map(e=>e.frame);return{sampleCount:e.length,frameSpan:n.frame-t.frame,tickSpan:n.timestep-t.timestep,zeroAdvanceFrames:e.filter(e=>e.simulationTimeAdvance===0).length,wholeAdvanceFrames:e.filter(e=>e.simulationTimeAdvance>=1).length,statsReadEvents:h.filter(e=>e.kind===`stats-read`).length,renderErrorEvents:e.reduce((e,t)=>e+t.renderErrorEvents,0),flickerEvents:h.filter(e=>e.kind===`flicker`).length,longFrameEvents:h.filter(e=>e.kind===`long-frame`).length,phaseResetEvents:g,maxAbsLumaDelta:s,p95AbsLumaDelta:c,maxChannelDelta:ms(e.map(e=>e.maxChannelDelta)),avgFrameTimeMs:d,p95FrameTimeMs:u,maxFrameTimeMs:l,uniqueRenderLerpT:gs(e.map(e=>e.renderLerpT),3).slice(0,48),uniqueStepScales:gs(e.flatMap(e=>e.stepScales),3),likelyCadenceFrames:_s(_),events:h.slice(-64)}}function ps(e,t,n){return{frame:e.frame,timestep:e.timestep,kind:t,value:n,renderLerpT:e.renderLerpT}}function ms(e){return e.length>0?Math.max(...e):0}function hs(e,t){if(e.length===0)return 0;let n=[...e].sort((e,t)=>e-t);return n[Math.min(n.length-1,Math.max(0,Math.floor((n.length-1)*t)))]}function gs(e,t){let n=10**t;return[...new Set(e.map(e=>Math.round(e*n)/n))]}function _s(e){if(e.length<3)return null;let t=e.slice(1).map((t,n)=>t-e[n]).filter(e=>e>0);if(t.length<2)return null;let n=new Map;for(let e of t){let t=Math.max(1,Math.round(e));n.set(t,(n.get(t)??0)+1)}let r=0,i=0;for(let[e,t]of n)t>i&&(r=e,i=t);return i>=2?r:null}fs([]),new URLSearchParams(window.location.search);var vs=Ma;(0,v.createRoot)(document.getElementById(`root`)).render((0,H.jsx)(_.StrictMode,{children:(0,H.jsx)(vs,{})}));