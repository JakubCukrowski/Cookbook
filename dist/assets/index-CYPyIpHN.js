function QN(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function xu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kI={exports:{}},Hf={},xI={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Su=Symbol.for("react.element"),YN=Symbol.for("react.portal"),XN=Symbol.for("react.fragment"),JN=Symbol.for("react.strict_mode"),ZN=Symbol.for("react.profiler"),e2=Symbol.for("react.provider"),t2=Symbol.for("react.context"),n2=Symbol.for("react.forward_ref"),r2=Symbol.for("react.suspense"),i2=Symbol.for("react.memo"),s2=Symbol.for("react.lazy"),ow=Symbol.iterator;function o2(t){return t===null||typeof t!="object"?null:(t=ow&&t[ow]||t["@@iterator"],typeof t=="function"?t:null)}var SI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bI=Object.assign,RI={};function pa(t,e,n){this.props=t,this.context=e,this.refs=RI,this.updater=n||SI}pa.prototype.isReactComponent={};pa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function CI(){}CI.prototype=pa.prototype;function zy(t,e,n){this.props=t,this.context=e,this.refs=RI,this.updater=n||SI}var Uy=zy.prototype=new CI;Uy.constructor=zy;bI(Uy,pa.prototype);Uy.isPureReactComponent=!0;var aw=Array.isArray,AI=Object.prototype.hasOwnProperty,By={current:null},PI={key:!0,ref:!0,__self:!0,__source:!0};function NI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)AI.call(e,r)&&!PI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Su,type:t,key:s,ref:o,props:i,_owner:By.current}}function a2(t,e){return{$$typeof:Su,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hy(t){return typeof t=="object"&&t!==null&&t.$$typeof===Su}function l2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lw=/\/+/g;function lp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?l2(""+t.key):e.toString(36)}function id(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Su:case YN:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+lp(o,0):r,aw(i)?(n="",t!=null&&(n=t.replace(lw,"$&/")+"/"),id(i,e,n,"",function(u){return u})):i!=null&&(Hy(i)&&(i=a2(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",aw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+lp(s,a);o+=id(s,e,n,l,i)}else if(l=o2(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+lp(s,a++),o+=id(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function hc(t,e,n){if(t==null)return t;var r=[],i=0;return id(t,r,"","",function(s){return e.call(n,s,i++)}),r}function u2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},sd={transition:null},c2={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:sd,ReactCurrentOwner:By};ce.Children={map:hc,forEach:function(t,e,n){hc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hc(t,function(){e++}),e},toArray:function(t){return hc(t,function(e){return e})||[]},only:function(t){if(!Hy(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=pa;ce.Fragment=XN;ce.Profiler=ZN;ce.PureComponent=zy;ce.StrictMode=JN;ce.Suspense=r2;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c2;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=bI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=By.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)AI.call(e,l)&&!PI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Su,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:t2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:e2,_context:t},t.Consumer=t};ce.createElement=NI;ce.createFactory=function(t){var e=NI.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:n2,render:t}};ce.isValidElement=Hy;ce.lazy=function(t){return{$$typeof:s2,_payload:{_status:-1,_result:t},_init:u2}};ce.memo=function(t,e){return{$$typeof:i2,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=sd.transition;sd.transition={};try{t()}finally{sd.transition=e}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(t,e){return Kt.current.useCallback(t,e)};ce.useContext=function(t){return Kt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Kt.current.useEffect(t,e)};ce.useId=function(){return Kt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Kt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};ce.useRef=function(t){return Kt.current.useRef(t)};ce.useState=function(t){return Kt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Kt.current.useTransition()};ce.version="18.2.0";xI.exports=ce;var y=xI.exports;const Qe=xu(y),d2=QN({__proto__:null,default:Qe},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f2=y,h2=Symbol.for("react.element"),p2=Symbol.for("react.fragment"),m2=Object.prototype.hasOwnProperty,g2=f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y2={key:!0,ref:!0,__self:!0,__source:!0};function OI(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)m2.call(e,r)&&!y2.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:h2,type:t,key:s,ref:o,props:i,_owner:g2.current}}Hf.Fragment=p2;Hf.jsx=OI;Hf.jsxs=OI;kI.exports=Hf;var f=kI.exports,_m={},jI={exports:{}},gn={},DI={exports:{}},LI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,U){var q=R.length;R.push(U);e:for(;0<q;){var ne=q-1>>>1,le=R[ne];if(0<i(le,U))R[ne]=U,R[q]=le,q=ne;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var U=R[0],q=R.pop();if(q!==U){R[0]=q;e:for(var ne=0,le=R.length,Ie=le>>>1;ne<Ie;){var Ee=2*(ne+1)-1,de=R[Ee],Te=Ee+1,nt=R[Te];if(0>i(de,q))Te<le&&0>i(nt,de)?(R[ne]=nt,R[Te]=q,ne=Te):(R[ne]=de,R[Ee]=q,ne=Ee);else if(Te<le&&0>i(nt,q))R[ne]=nt,R[Te]=q,ne=Te;else break e}}return U}function i(R,U){var q=R.sortIndex-U.sortIndex;return q!==0?q:R.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,m=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(R){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=R)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function T(R){if(E=!1,w(R),!m)if(n(l)!==null)m=!0,W(x);else{var U=n(u);U!==null&&G(T,U.startTime-R)}}function x(R,U){m=!1,E&&(E=!1,v(S),S=-1),p=!0;var q=h;try{for(w(U),d=n(l);d!==null&&(!(d.expirationTime>U)||R&&!X());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,h=d.priorityLevel;var le=ne(d.expirationTime<=U);U=t.unstable_now(),typeof le=="function"?d.callback=le:d===n(l)&&r(l),w(U)}else r(l);d=n(l)}if(d!==null)var Ie=!0;else{var Ee=n(u);Ee!==null&&G(T,Ee.startTime-U),Ie=!1}return Ie}finally{d=null,h=q,p=!1}}var I=!1,k=null,S=-1,O=5,j=-1;function X(){return!(t.unstable_now()-j<O)}function ae(){if(k!==null){var R=t.unstable_now();j=R;var U=!0;try{U=k(!0,R)}finally{U?P():(I=!1,k=null)}}else I=!1}var P;if(typeof g=="function")P=function(){g(ae)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,z=N.port2;N.port1.onmessage=ae,P=function(){z.postMessage(null)}}else P=function(){_(ae,0)};function W(R){k=R,I||(I=!0,P())}function G(R,U){S=_(function(){R(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,W(x))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var q=h;h=U;try{return R()}finally{h=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,U){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var q=h;h=R;try{return U()}finally{h=q}},t.unstable_scheduleCallback=function(R,U,q){var ne=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ne+q:ne):q=ne,R){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=q+le,R={id:c++,callback:U,priorityLevel:R,startTime:q,expirationTime:le,sortIndex:-1},q>ne?(R.sortIndex=q,e(u,R),n(l)===null&&R===n(u)&&(E?(v(S),S=-1):E=!0,G(T,q-ne))):(R.sortIndex=le,e(l,R),m||p||(m=!0,W(x))),R},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(R){var U=h;return function(){var q=h;h=U;try{return R.apply(this,arguments)}finally{h=q}}}})(LI);DI.exports=LI;var v2=DI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MI=y,hn=v2;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $I=new Set,jl={};function zs(t,e){Fo(t,e),Fo(t+"Capture",e)}function Fo(t,e){for(jl[t]=e,t=0;t<e.length;t++)$I.add(e[t])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wm=Object.prototype.hasOwnProperty,_2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uw={},cw={};function w2(t){return wm.call(cw,t)?!0:wm.call(uw,t)?!1:_2.test(t)?cw[t]=!0:(uw[t]=!0,!1)}function E2(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T2(t,e,n,r){if(e===null||typeof e>"u"||E2(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new Gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new Gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new Gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new Gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new Gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new Gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new Gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new Gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new Gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wy=/[\-:]([a-z])/g;function qy(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wy,qy);xt[e]=new Gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wy,qy);xt[e]=new Gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wy,qy);xt[e]=new Gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new Gt(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new Gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ky(t,e,n,r){var i=xt.hasOwnProperty(e)?xt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(T2(e,n,i,r)&&(n=null),r||i===null?w2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wr=MI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pc=Symbol.for("react.element"),lo=Symbol.for("react.portal"),uo=Symbol.for("react.fragment"),Gy=Symbol.for("react.strict_mode"),Em=Symbol.for("react.profiler"),VI=Symbol.for("react.provider"),FI=Symbol.for("react.context"),Qy=Symbol.for("react.forward_ref"),Tm=Symbol.for("react.suspense"),Im=Symbol.for("react.suspense_list"),Yy=Symbol.for("react.memo"),ti=Symbol.for("react.lazy"),zI=Symbol.for("react.offscreen"),dw=Symbol.iterator;function La(t){return t===null||typeof t!="object"?null:(t=dw&&t[dw]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,up;function Xa(t){if(up===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);up=e&&e[1]||""}return`
`+up+t}var cp=!1;function dp(t,e){if(!t||cp)return"";cp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{cp=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xa(t):""}function I2(t){switch(t.tag){case 5:return Xa(t.type);case 16:return Xa("Lazy");case 13:return Xa("Suspense");case 19:return Xa("SuspenseList");case 0:case 2:case 15:return t=dp(t.type,!1),t;case 11:return t=dp(t.type.render,!1),t;case 1:return t=dp(t.type,!0),t;default:return""}}function km(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case uo:return"Fragment";case lo:return"Portal";case Em:return"Profiler";case Gy:return"StrictMode";case Tm:return"Suspense";case Im:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case FI:return(t.displayName||"Context")+".Consumer";case VI:return(t._context.displayName||"Context")+".Provider";case Qy:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yy:return e=t.displayName||null,e!==null?e:km(t.type)||"Memo";case ti:e=t._payload,t=t._init;try{return km(t(e))}catch{}}return null}function k2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return km(e);case 8:return e===Gy?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function UI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x2(t){var e=UI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mc(t){t._valueTracker||(t._valueTracker=x2(t))}function BI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=UI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xm(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function HI(t,e){e=e.checked,e!=null&&Ky(t,"checked",e,!1)}function Sm(t,e){HI(t,e);var n=Ci(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bm(t,e.type,n):e.hasOwnProperty("defaultValue")&&bm(t,e.type,Ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bm(t,e,n){(e!=="number"||jd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ja=Array.isArray;function bo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ci(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Ja(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ci(n)}}function WI(t,e){var n=Ci(e.value),r=Ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gc,KI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gc=gc||document.createElement("div"),gc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Dl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S2=["Webkit","ms","Moz","O"];Object.keys(fl).forEach(function(t){S2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fl[e]=fl[t]})});function GI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fl.hasOwnProperty(t)&&fl[t]?(""+e).trim():e+"px"}function QI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=GI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var b2=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Am(t,e){if(e){if(b2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Pm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nm=null;function Xy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Om=null,Ro=null,Co=null;function gw(t){if(t=Cu(t)){if(typeof Om!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Qf(e),Om(t.stateNode,t.type,e))}}function YI(t){Ro?Co?Co.push(t):Co=[t]:Ro=t}function XI(){if(Ro){var t=Ro,e=Co;if(Co=Ro=null,gw(t),e)for(t=0;t<e.length;t++)gw(e[t])}}function JI(t,e){return t(e)}function ZI(){}var fp=!1;function ek(t,e,n){if(fp)return t(e,n);fp=!0;try{return JI(t,e,n)}finally{fp=!1,(Ro!==null||Co!==null)&&(ZI(),XI())}}function Ll(t,e){var n=t.stateNode;if(n===null)return null;var r=Qf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var jm=!1;if(Pr)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){jm=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{jm=!1}function R2(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var hl=!1,Dd=null,Ld=!1,Dm=null,C2={onError:function(t){hl=!0,Dd=t}};function A2(t,e,n,r,i,s,o,a,l){hl=!1,Dd=null,R2.apply(C2,arguments)}function P2(t,e,n,r,i,s,o,a,l){if(A2.apply(this,arguments),hl){if(hl){var u=Dd;hl=!1,Dd=null}else throw Error(A(198));Ld||(Ld=!0,Dm=u)}}function Us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tk(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yw(t){if(Us(t)!==t)throw Error(A(188))}function N2(t){var e=t.alternate;if(!e){if(e=Us(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yw(i),t;if(s===r)return yw(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function nk(t){return t=N2(t),t!==null?rk(t):null}function rk(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rk(t);if(e!==null)return e;t=t.sibling}return null}var ik=hn.unstable_scheduleCallback,vw=hn.unstable_cancelCallback,O2=hn.unstable_shouldYield,j2=hn.unstable_requestPaint,Ge=hn.unstable_now,D2=hn.unstable_getCurrentPriorityLevel,Jy=hn.unstable_ImmediatePriority,sk=hn.unstable_UserBlockingPriority,Md=hn.unstable_NormalPriority,L2=hn.unstable_LowPriority,ok=hn.unstable_IdlePriority,Wf=null,tr=null;function M2(t){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(Wf,t,void 0,(t.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:F2,$2=Math.log,V2=Math.LN2;function F2(t){return t>>>=0,t===0?32:31-($2(t)/V2|0)|0}var yc=64,vc=4194304;function Za(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $d(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Za(a):(s&=o,s!==0&&(r=Za(s)))}else o=n&~i,o!==0?r=Za(o):s!==0&&(r=Za(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dn(e),i=1<<n,r|=t[n],e&=~i;return r}function z2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U2(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=z2(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Lm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ak(){var t=yc;return yc<<=1,!(yc&4194240)&&(yc=64),t}function hp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dn(e),t[e]=n}function B2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zy(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function lk(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uk,ev,ck,dk,fk,Mm=!1,_c=[],gi=null,yi=null,vi=null,Ml=new Map,$l=new Map,ii=[],H2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _w(t,e){switch(t){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":yi=null;break;case"mouseover":case"mouseout":vi=null;break;case"pointerover":case"pointerout":Ml.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(e.pointerId)}}function $a(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Cu(e),e!==null&&ev(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function W2(t,e,n,r,i){switch(e){case"focusin":return gi=$a(gi,t,e,n,r,i),!0;case"dragenter":return yi=$a(yi,t,e,n,r,i),!0;case"mouseover":return vi=$a(vi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ml.set(s,$a(Ml.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$l.set(s,$a($l.get(s)||null,t,e,n,r,i)),!0}return!1}function hk(t){var e=is(t.target);if(e!==null){var n=Us(e);if(n!==null){if(e=n.tag,e===13){if(e=tk(n),e!==null){t.blockedOn=e,fk(t.priority,function(){ck(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function od(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$m(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nm=r,n.target.dispatchEvent(r),Nm=null}else return e=Cu(n),e!==null&&ev(e),t.blockedOn=n,!1;e.shift()}return!0}function ww(t,e,n){od(t)&&n.delete(e)}function q2(){Mm=!1,gi!==null&&od(gi)&&(gi=null),yi!==null&&od(yi)&&(yi=null),vi!==null&&od(vi)&&(vi=null),Ml.forEach(ww),$l.forEach(ww)}function Va(t,e){t.blockedOn===e&&(t.blockedOn=null,Mm||(Mm=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,q2)))}function Vl(t){function e(i){return Va(i,t)}if(0<_c.length){Va(_c[0],t);for(var n=1;n<_c.length;n++){var r=_c[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gi!==null&&Va(gi,t),yi!==null&&Va(yi,t),vi!==null&&Va(vi,t),Ml.forEach(e),$l.forEach(e),n=0;n<ii.length;n++)r=ii[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ii.length&&(n=ii[0],n.blockedOn===null);)hk(n),n.blockedOn===null&&ii.shift()}var Ao=Wr.ReactCurrentBatchConfig,Vd=!0;function K2(t,e,n,r){var i=ve,s=Ao.transition;Ao.transition=null;try{ve=1,tv(t,e,n,r)}finally{ve=i,Ao.transition=s}}function G2(t,e,n,r){var i=ve,s=Ao.transition;Ao.transition=null;try{ve=4,tv(t,e,n,r)}finally{ve=i,Ao.transition=s}}function tv(t,e,n,r){if(Vd){var i=$m(t,e,n,r);if(i===null)Ip(t,e,r,Fd,n),_w(t,r);else if(W2(i,t,e,n,r))r.stopPropagation();else if(_w(t,r),e&4&&-1<H2.indexOf(t)){for(;i!==null;){var s=Cu(i);if(s!==null&&uk(s),s=$m(t,e,n,r),s===null&&Ip(t,e,r,Fd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ip(t,e,r,null,n)}}var Fd=null;function $m(t,e,n,r){if(Fd=null,t=Xy(r),t=is(t),t!==null)if(e=Us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tk(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fd=t,null}function pk(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D2()){case Jy:return 1;case sk:return 4;case Md:case L2:return 16;case ok:return 536870912;default:return 16}default:return 16}}var di=null,nv=null,ad=null;function mk(){if(ad)return ad;var t,e=nv,n=e.length,r,i="value"in di?di.value:di.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ad=i.slice(t,1<r?1-r:void 0)}function ld(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wc(){return!0}function Ew(){return!1}function yn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wc:Ew,this.isPropagationStopped=Ew,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wc)},persist:function(){},isPersistent:wc}),e}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rv=yn(ma),Ru=Fe({},ma,{view:0,detail:0}),Q2=yn(Ru),pp,mp,Fa,qf=Fe({},Ru,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iv,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fa&&(Fa&&t.type==="mousemove"?(pp=t.screenX-Fa.screenX,mp=t.screenY-Fa.screenY):mp=pp=0,Fa=t),pp)},movementY:function(t){return"movementY"in t?t.movementY:mp}}),Tw=yn(qf),Y2=Fe({},qf,{dataTransfer:0}),X2=yn(Y2),J2=Fe({},Ru,{relatedTarget:0}),gp=yn(J2),Z2=Fe({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),eO=yn(Z2),tO=Fe({},ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nO=yn(tO),rO=Fe({},ma,{data:0}),Iw=yn(rO),iO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aO(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oO[t])?!!e[t]:!1}function iv(){return aO}var lO=Fe({},Ru,{key:function(t){if(t.key){var e=iO[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ld(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sO[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iv,charCode:function(t){return t.type==="keypress"?ld(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ld(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uO=yn(lO),cO=Fe({},qf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kw=yn(cO),dO=Fe({},Ru,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iv}),fO=yn(dO),hO=Fe({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),pO=yn(hO),mO=Fe({},qf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gO=yn(mO),yO=[9,13,27,32],sv=Pr&&"CompositionEvent"in window,pl=null;Pr&&"documentMode"in document&&(pl=document.documentMode);var vO=Pr&&"TextEvent"in window&&!pl,gk=Pr&&(!sv||pl&&8<pl&&11>=pl),xw=" ",Sw=!1;function yk(t,e){switch(t){case"keyup":return yO.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vk(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var co=!1;function _O(t,e){switch(t){case"compositionend":return vk(e);case"keypress":return e.which!==32?null:(Sw=!0,xw);case"textInput":return t=e.data,t===xw&&Sw?null:t;default:return null}}function wO(t,e){if(co)return t==="compositionend"||!sv&&yk(t,e)?(t=mk(),ad=nv=di=null,co=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gk&&e.locale!=="ko"?null:e.data;default:return null}}var EO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!EO[t.type]:e==="textarea"}function _k(t,e,n,r){YI(r),e=zd(e,"onChange"),0<e.length&&(n=new rv("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ml=null,Fl=null;function TO(t){Ak(t,0)}function Kf(t){var e=po(t);if(BI(e))return t}function IO(t,e){if(t==="change")return e}var wk=!1;if(Pr){var yp;if(Pr){var vp="oninput"in document;if(!vp){var Rw=document.createElement("div");Rw.setAttribute("oninput","return;"),vp=typeof Rw.oninput=="function"}yp=vp}else yp=!1;wk=yp&&(!document.documentMode||9<document.documentMode)}function Cw(){ml&&(ml.detachEvent("onpropertychange",Ek),Fl=ml=null)}function Ek(t){if(t.propertyName==="value"&&Kf(Fl)){var e=[];_k(e,Fl,t,Xy(t)),ek(TO,e)}}function kO(t,e,n){t==="focusin"?(Cw(),ml=e,Fl=n,ml.attachEvent("onpropertychange",Ek)):t==="focusout"&&Cw()}function xO(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kf(Fl)}function SO(t,e){if(t==="click")return Kf(e)}function bO(t,e){if(t==="input"||t==="change")return Kf(e)}function RO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:RO;function zl(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wm.call(e,i)||!Fn(t[i],e[i]))return!1}return!0}function Aw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pw(t,e){var n=Aw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Aw(n)}}function Tk(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tk(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ik(){for(var t=window,e=jd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jd(t.document)}return e}function ov(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function CO(t){var e=Ik(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tk(n.ownerDocument.documentElement,n)){if(r!==null&&ov(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pw(n,s);var o=Pw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AO=Pr&&"documentMode"in document&&11>=document.documentMode,fo=null,Vm=null,gl=null,Fm=!1;function Nw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fm||fo==null||fo!==jd(r)||(r=fo,"selectionStart"in r&&ov(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gl&&zl(gl,r)||(gl=r,r=zd(Vm,"onSelect"),0<r.length&&(e=new rv("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fo)))}function Ec(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ho={animationend:Ec("Animation","AnimationEnd"),animationiteration:Ec("Animation","AnimationIteration"),animationstart:Ec("Animation","AnimationStart"),transitionend:Ec("Transition","TransitionEnd")},_p={},kk={};Pr&&(kk=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function Gf(t){if(_p[t])return _p[t];if(!ho[t])return t;var e=ho[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kk)return _p[t]=e[n];return t}var xk=Gf("animationend"),Sk=Gf("animationiteration"),bk=Gf("animationstart"),Rk=Gf("transitionend"),Ck=new Map,Ow="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zi(t,e){Ck.set(t,e),zs(e,[t])}for(var wp=0;wp<Ow.length;wp++){var Ep=Ow[wp],PO=Ep.toLowerCase(),NO=Ep[0].toUpperCase()+Ep.slice(1);zi(PO,"on"+NO)}zi(xk,"onAnimationEnd");zi(Sk,"onAnimationIteration");zi(bk,"onAnimationStart");zi("dblclick","onDoubleClick");zi("focusin","onFocus");zi("focusout","onBlur");zi(Rk,"onTransitionEnd");Fo("onMouseEnter",["mouseout","mouseover"]);Fo("onMouseLeave",["mouseout","mouseover"]);Fo("onPointerEnter",["pointerout","pointerover"]);Fo("onPointerLeave",["pointerout","pointerover"]);zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OO=new Set("cancel close invalid load scroll toggle".split(" ").concat(el));function jw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,P2(r,e,void 0,t),t.currentTarget=null}function Ak(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;jw(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;jw(i,a,u),s=l}}}if(Ld)throw t=Dm,Ld=!1,Dm=null,t}function Re(t,e){var n=e[Wm];n===void 0&&(n=e[Wm]=new Set);var r=t+"__bubble";n.has(r)||(Pk(e,t,2,!1),n.add(r))}function Tp(t,e,n){var r=0;e&&(r|=4),Pk(n,t,r,e)}var Tc="_reactListening"+Math.random().toString(36).slice(2);function Ul(t){if(!t[Tc]){t[Tc]=!0,$I.forEach(function(n){n!=="selectionchange"&&(OO.has(n)||Tp(n,!1,t),Tp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tc]||(e[Tc]=!0,Tp("selectionchange",!1,e))}}function Pk(t,e,n,r){switch(pk(e)){case 1:var i=K2;break;case 4:i=G2;break;default:i=tv}n=i.bind(null,e,n,t),i=void 0,!jm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ip(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=is(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ek(function(){var u=s,c=Xy(n),d=[];e:{var h=Ck.get(t);if(h!==void 0){var p=rv,m=t;switch(t){case"keypress":if(ld(n)===0)break e;case"keydown":case"keyup":p=uO;break;case"focusin":m="focus",p=gp;break;case"focusout":m="blur",p=gp;break;case"beforeblur":case"afterblur":p=gp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Tw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=X2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fO;break;case xk:case Sk:case bk:p=eO;break;case Rk:p=pO;break;case"scroll":p=Q2;break;case"wheel":p=gO;break;case"copy":case"cut":case"paste":p=nO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=kw}var E=(e&4)!==0,_=!E&&t==="scroll",v=E?h!==null?h+"Capture":null:h;E=[];for(var g=u,w;g!==null;){w=g;var T=w.stateNode;if(w.tag===5&&T!==null&&(w=T,v!==null&&(T=Ll(g,v),T!=null&&E.push(Bl(g,T,w)))),_)break;g=g.return}0<E.length&&(h=new p(h,m,null,n,c),d.push({event:h,listeners:E}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Nm&&(m=n.relatedTarget||n.fromElement)&&(is(m)||m[Nr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?is(m):null,m!==null&&(_=Us(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(E=Tw,T="onMouseLeave",v="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(E=kw,T="onPointerLeave",v="onPointerEnter",g="pointer"),_=p==null?h:po(p),w=m==null?h:po(m),h=new E(T,g+"leave",p,n,c),h.target=_,h.relatedTarget=w,T=null,is(c)===u&&(E=new E(v,g+"enter",m,n,c),E.target=w,E.relatedTarget=_,T=E),_=T,p&&m)t:{for(E=p,v=m,g=0,w=E;w;w=eo(w))g++;for(w=0,T=v;T;T=eo(T))w++;for(;0<g-w;)E=eo(E),g--;for(;0<w-g;)v=eo(v),w--;for(;g--;){if(E===v||v!==null&&E===v.alternate)break t;E=eo(E),v=eo(v)}E=null}else E=null;p!==null&&Dw(d,h,p,E,!1),m!==null&&_!==null&&Dw(d,_,m,E,!0)}}e:{if(h=u?po(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var x=IO;else if(bw(h))if(wk)x=bO;else{x=xO;var I=kO}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=SO);if(x&&(x=x(t,u))){_k(d,x,n,c);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&bm(h,"number",h.value)}switch(I=u?po(u):window,t){case"focusin":(bw(I)||I.contentEditable==="true")&&(fo=I,Vm=u,gl=null);break;case"focusout":gl=Vm=fo=null;break;case"mousedown":Fm=!0;break;case"contextmenu":case"mouseup":case"dragend":Fm=!1,Nw(d,n,c);break;case"selectionchange":if(AO)break;case"keydown":case"keyup":Nw(d,n,c)}var k;if(sv)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else co?yk(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(gk&&n.locale!=="ko"&&(co||S!=="onCompositionStart"?S==="onCompositionEnd"&&co&&(k=mk()):(di=c,nv="value"in di?di.value:di.textContent,co=!0)),I=zd(u,S),0<I.length&&(S=new Iw(S,t,null,n,c),d.push({event:S,listeners:I}),k?S.data=k:(k=vk(n),k!==null&&(S.data=k)))),(k=vO?_O(t,n):wO(t,n))&&(u=zd(u,"onBeforeInput"),0<u.length&&(c=new Iw("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=k))}Ak(d,e)})}function Bl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ll(t,n),s!=null&&r.unshift(Bl(t,s,i)),s=Ll(t,e),s!=null&&r.push(Bl(t,s,i))),t=t.return}return r}function eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ll(n,s),l!=null&&o.unshift(Bl(n,l,a))):i||(l=Ll(n,s),l!=null&&o.push(Bl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jO=/\r\n?/g,DO=/\u0000|\uFFFD/g;function Lw(t){return(typeof t=="string"?t:""+t).replace(jO,`
`).replace(DO,"")}function Ic(t,e,n){if(e=Lw(e),Lw(t)!==e&&n)throw Error(A(425))}function Ud(){}var zm=null,Um=null;function Bm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hm=typeof setTimeout=="function"?setTimeout:void 0,LO=typeof clearTimeout=="function"?clearTimeout:void 0,Mw=typeof Promise=="function"?Promise:void 0,MO=typeof queueMicrotask=="function"?queueMicrotask:typeof Mw<"u"?function(t){return Mw.resolve(null).then(t).catch($O)}:Hm;function $O(t){setTimeout(function(){throw t})}function kp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vl(e)}function _i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $w(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ga=Math.random().toString(36).slice(2),Kn="__reactFiber$"+ga,Hl="__reactProps$"+ga,Nr="__reactContainer$"+ga,Wm="__reactEvents$"+ga,VO="__reactListeners$"+ga,FO="__reactHandles$"+ga;function is(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nr]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$w(t);t!==null;){if(n=t[Kn])return n;t=$w(t)}return e}t=n,n=t.parentNode}return null}function Cu(t){return t=t[Kn]||t[Nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function po(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Qf(t){return t[Hl]||null}var qm=[],mo=-1;function Ui(t){return{current:t}}function je(t){0>mo||(t.current=qm[mo],qm[mo]=null,mo--)}function ke(t,e){mo++,qm[mo]=t.current,t.current=e}var Ai={},Mt=Ui(Ai),Zt=Ui(!1),ks=Ai;function zo(t,e){var n=t.type.contextTypes;if(!n)return Ai;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function en(t){return t=t.childContextTypes,t!=null}function Bd(){je(Zt),je(Mt)}function Vw(t,e,n){if(Mt.current!==Ai)throw Error(A(168));ke(Mt,e),ke(Zt,n)}function Nk(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,k2(t)||"Unknown",i));return Fe({},n,r)}function Hd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ai,ks=Mt.current,ke(Mt,t),ke(Zt,Zt.current),!0}function Fw(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=Nk(t,e,ks),r.__reactInternalMemoizedMergedChildContext=t,je(Zt),je(Mt),ke(Mt,t)):je(Zt),ke(Zt,n)}var wr=null,Yf=!1,xp=!1;function Ok(t){wr===null?wr=[t]:wr.push(t)}function zO(t){Yf=!0,Ok(t)}function Bi(){if(!xp&&wr!==null){xp=!0;var t=0,e=ve;try{var n=wr;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wr=null,Yf=!1}catch(i){throw wr!==null&&(wr=wr.slice(t+1)),ik(Jy,Bi),i}finally{ve=e,xp=!1}}return null}var go=[],yo=0,Wd=null,qd=0,_n=[],wn=0,xs=null,Tr=1,Ir="";function Zi(t,e){go[yo++]=qd,go[yo++]=Wd,Wd=t,qd=e}function jk(t,e,n){_n[wn++]=Tr,_n[wn++]=Ir,_n[wn++]=xs,xs=t;var r=Tr;t=Ir;var i=32-Dn(r)-1;r&=~(1<<i),n+=1;var s=32-Dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tr=1<<32-Dn(e)+i|n<<i|r,Ir=s+t}else Tr=1<<s|n<<i|r,Ir=t}function av(t){t.return!==null&&(Zi(t,1),jk(t,1,0))}function lv(t){for(;t===Wd;)Wd=go[--yo],go[yo]=null,qd=go[--yo],go[yo]=null;for(;t===xs;)xs=_n[--wn],_n[wn]=null,Ir=_n[--wn],_n[wn]=null,Tr=_n[--wn],_n[wn]=null}var fn=null,cn=null,Le=!1,Nn=null;function Dk(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,cn=_i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xs!==null?{id:Tr,overflow:Ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,cn=null,!0):!1;default:return!1}}function Km(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gm(t){if(Le){var e=cn;if(e){var n=e;if(!zw(t,e)){if(Km(t))throw Error(A(418));e=_i(n.nextSibling);var r=fn;e&&zw(t,e)?Dk(r,n):(t.flags=t.flags&-4097|2,Le=!1,fn=t)}}else{if(Km(t))throw Error(A(418));t.flags=t.flags&-4097|2,Le=!1,fn=t}}}function Uw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function kc(t){if(t!==fn)return!1;if(!Le)return Uw(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bm(t.type,t.memoizedProps)),e&&(e=cn)){if(Km(t))throw Lk(),Error(A(418));for(;e;)Dk(t,e),e=_i(e.nextSibling)}if(Uw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=_i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=fn?_i(t.stateNode.nextSibling):null;return!0}function Lk(){for(var t=cn;t;)t=_i(t.nextSibling)}function Uo(){cn=fn=null,Le=!1}function uv(t){Nn===null?Nn=[t]:Nn.push(t)}var UO=Wr.ReactCurrentBatchConfig;function An(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Kd=Ui(null),Gd=null,vo=null,cv=null;function dv(){cv=vo=Gd=null}function fv(t){var e=Kd.current;je(Kd),t._currentValue=e}function Qm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Po(t,e){Gd=t,cv=vo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(cv!==t)if(t={context:t,memoizedValue:e,next:null},vo===null){if(Gd===null)throw Error(A(308));vo=t,Gd.dependencies={lanes:0,firstContext:t}}else vo=vo.next=t;return e}var ss=null;function hv(t){ss===null?ss=[t]:ss.push(t)}function Mk(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,hv(e)):(n.next=i.next,i.next=n),e.interleaved=n,Or(t,r)}function Or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ni=!1;function pv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $k(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Or(t,n)}return i=r.interleaved,i===null?(e.next=e,hv(r)):(e.next=i.next,i.next=e),r.interleaved=e,Or(t,n)}function ud(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zy(t,n)}}function Bw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qd(t,e,n,r){var i=t.updateQueue;ni=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,E=a;switch(h=e,p=n,E.tag){case 1:if(m=E.payload,typeof m=="function"){d=m.call(p,d,h);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=E.payload,h=typeof m=="function"?m.call(p,d,h):m,h==null)break e;d=Fe({},d,h);break e;case 2:ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);bs|=o,t.lanes=o,t.memoizedState=d}}function Hw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Vk=new MI.Component().refs;function Ym(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xf={isMounted:function(t){return(t=t._reactInternals)?Us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=Ti(t),s=Rr(r,i);s.payload=e,n!=null&&(s.callback=n),e=wi(t,s,i),e!==null&&(Ln(e,t,i,r),ud(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=Ti(t),s=Rr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wi(t,s,i),e!==null&&(Ln(e,t,i,r),ud(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),r=Ti(t),i=Rr(n,r);i.tag=2,e!=null&&(i.callback=e),e=wi(t,i,r),e!==null&&(Ln(e,t,r,n),ud(e,t,r))}};function Ww(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!zl(n,r)||!zl(i,s):!0}function Fk(t,e,n){var r=!1,i=Ai,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(i=en(e)?ks:Mt.current,r=e.contextTypes,s=(r=r!=null)?zo(t,i):Ai),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xf.enqueueReplaceState(e,e.state,null)}function Xm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Vk,pv(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kn(s):(s=en(e)?ks:Mt.current,i.context=zo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ym(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xf.enqueueReplaceState(i,i.state,null),Qd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function za(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Vk&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function xc(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kw(t){var e=t._init;return e(t._payload)}function zk(t){function e(v,g){if(t){var w=v.deletions;w===null?(v.deletions=[g],v.flags|=16):w.push(g)}}function n(v,g){if(!t)return null;for(;g!==null;)e(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=Ii(v,g),v.index=0,v.sibling=null,v}function s(v,g,w){return v.index=w,t?(w=v.alternate,w!==null?(w=w.index,w<g?(v.flags|=2,g):w):(v.flags|=2,g)):(v.flags|=1048576,g)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,g,w,T){return g===null||g.tag!==6?(g=Np(w,v.mode,T),g.return=v,g):(g=i(g,w),g.return=v,g)}function l(v,g,w,T){var x=w.type;return x===uo?c(v,g,w.props.children,T,w.key):g!==null&&(g.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ti&&Kw(x)===g.type)?(T=i(g,w.props),T.ref=za(v,g,w),T.return=v,T):(T=md(w.type,w.key,w.props,null,v.mode,T),T.ref=za(v,g,w),T.return=v,T)}function u(v,g,w,T){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=Op(w,v.mode,T),g.return=v,g):(g=i(g,w.children||[]),g.return=v,g)}function c(v,g,w,T,x){return g===null||g.tag!==7?(g=vs(w,v.mode,T,x),g.return=v,g):(g=i(g,w),g.return=v,g)}function d(v,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Np(""+g,v.mode,w),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pc:return w=md(g.type,g.key,g.props,null,v.mode,w),w.ref=za(v,null,g),w.return=v,w;case lo:return g=Op(g,v.mode,w),g.return=v,g;case ti:var T=g._init;return d(v,T(g._payload),w)}if(Ja(g)||La(g))return g=vs(g,v.mode,w,null),g.return=v,g;xc(v,g)}return null}function h(v,g,w,T){var x=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return x!==null?null:a(v,g,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case pc:return w.key===x?l(v,g,w,T):null;case lo:return w.key===x?u(v,g,w,T):null;case ti:return x=w._init,h(v,g,x(w._payload),T)}if(Ja(w)||La(w))return x!==null?null:c(v,g,w,T,null);xc(v,w)}return null}function p(v,g,w,T,x){if(typeof T=="string"&&T!==""||typeof T=="number")return v=v.get(w)||null,a(g,v,""+T,x);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case pc:return v=v.get(T.key===null?w:T.key)||null,l(g,v,T,x);case lo:return v=v.get(T.key===null?w:T.key)||null,u(g,v,T,x);case ti:var I=T._init;return p(v,g,w,I(T._payload),x)}if(Ja(T)||La(T))return v=v.get(w)||null,c(g,v,T,x,null);xc(g,T)}return null}function m(v,g,w,T){for(var x=null,I=null,k=g,S=g=0,O=null;k!==null&&S<w.length;S++){k.index>S?(O=k,k=null):O=k.sibling;var j=h(v,k,w[S],T);if(j===null){k===null&&(k=O);break}t&&k&&j.alternate===null&&e(v,k),g=s(j,g,S),I===null?x=j:I.sibling=j,I=j,k=O}if(S===w.length)return n(v,k),Le&&Zi(v,S),x;if(k===null){for(;S<w.length;S++)k=d(v,w[S],T),k!==null&&(g=s(k,g,S),I===null?x=k:I.sibling=k,I=k);return Le&&Zi(v,S),x}for(k=r(v,k);S<w.length;S++)O=p(k,v,S,w[S],T),O!==null&&(t&&O.alternate!==null&&k.delete(O.key===null?S:O.key),g=s(O,g,S),I===null?x=O:I.sibling=O,I=O);return t&&k.forEach(function(X){return e(v,X)}),Le&&Zi(v,S),x}function E(v,g,w,T){var x=La(w);if(typeof x!="function")throw Error(A(150));if(w=x.call(w),w==null)throw Error(A(151));for(var I=x=null,k=g,S=g=0,O=null,j=w.next();k!==null&&!j.done;S++,j=w.next()){k.index>S?(O=k,k=null):O=k.sibling;var X=h(v,k,j.value,T);if(X===null){k===null&&(k=O);break}t&&k&&X.alternate===null&&e(v,k),g=s(X,g,S),I===null?x=X:I.sibling=X,I=X,k=O}if(j.done)return n(v,k),Le&&Zi(v,S),x;if(k===null){for(;!j.done;S++,j=w.next())j=d(v,j.value,T),j!==null&&(g=s(j,g,S),I===null?x=j:I.sibling=j,I=j);return Le&&Zi(v,S),x}for(k=r(v,k);!j.done;S++,j=w.next())j=p(k,v,S,j.value,T),j!==null&&(t&&j.alternate!==null&&k.delete(j.key===null?S:j.key),g=s(j,g,S),I===null?x=j:I.sibling=j,I=j);return t&&k.forEach(function(ae){return e(v,ae)}),Le&&Zi(v,S),x}function _(v,g,w,T){if(typeof w=="object"&&w!==null&&w.type===uo&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case pc:e:{for(var x=w.key,I=g;I!==null;){if(I.key===x){if(x=w.type,x===uo){if(I.tag===7){n(v,I.sibling),g=i(I,w.props.children),g.return=v,v=g;break e}}else if(I.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ti&&Kw(x)===I.type){n(v,I.sibling),g=i(I,w.props),g.ref=za(v,I,w),g.return=v,v=g;break e}n(v,I);break}else e(v,I);I=I.sibling}w.type===uo?(g=vs(w.props.children,v.mode,T,w.key),g.return=v,v=g):(T=md(w.type,w.key,w.props,null,v.mode,T),T.ref=za(v,g,w),T.return=v,v=T)}return o(v);case lo:e:{for(I=w.key;g!==null;){if(g.key===I)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){n(v,g.sibling),g=i(g,w.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else e(v,g);g=g.sibling}g=Op(w,v.mode,T),g.return=v,v=g}return o(v);case ti:return I=w._init,_(v,g,I(w._payload),T)}if(Ja(w))return m(v,g,w,T);if(La(w))return E(v,g,w,T);xc(v,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,g!==null&&g.tag===6?(n(v,g.sibling),g=i(g,w),g.return=v,v=g):(n(v,g),g=Np(w,v.mode,T),g.return=v,v=g),o(v)):n(v,g)}return _}var Bo=zk(!0),Uk=zk(!1),Au={},nr=Ui(Au),Wl=Ui(Au),ql=Ui(Au);function os(t){if(t===Au)throw Error(A(174));return t}function mv(t,e){switch(ke(ql,e),ke(Wl,t),ke(nr,Au),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cm(e,t)}je(nr),ke(nr,e)}function Ho(){je(nr),je(Wl),je(ql)}function Bk(t){os(ql.current);var e=os(nr.current),n=Cm(e,t.type);e!==n&&(ke(Wl,t),ke(nr,n))}function gv(t){Wl.current===t&&(je(nr),je(Wl))}var Me=Ui(0);function Yd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sp=[];function yv(){for(var t=0;t<Sp.length;t++)Sp[t]._workInProgressVersionPrimary=null;Sp.length=0}var cd=Wr.ReactCurrentDispatcher,bp=Wr.ReactCurrentBatchConfig,Ss=0,Ve=null,it=null,ft=null,Xd=!1,yl=!1,Kl=0,BO=0;function bt(){throw Error(A(321))}function vv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function _v(t,e,n,r,i,s){if(Ss=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cd.current=t===null||t.memoizedState===null?KO:GO,t=n(r,i),yl){s=0;do{if(yl=!1,Kl=0,25<=s)throw Error(A(301));s+=1,ft=it=null,e.updateQueue=null,cd.current=QO,t=n(r,i)}while(yl)}if(cd.current=Jd,e=it!==null&&it.next!==null,Ss=0,ft=it=Ve=null,Xd=!1,e)throw Error(A(300));return t}function wv(){var t=Kl!==0;return Kl=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Ve.memoizedState=ft=t:ft=ft.next=t,ft}function xn(){if(it===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=ft===null?Ve.memoizedState:ft.next;if(e!==null)ft=e,it=t;else{if(t===null)throw Error(A(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ft===null?Ve.memoizedState=ft=t:ft=ft.next=t}return ft}function Gl(t,e){return typeof e=="function"?e(t):e}function Rp(t){var e=xn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=it,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ss&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ve.lanes|=c,bs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Fn(r,e.memoizedState)||(Jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ve.lanes|=s,bs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cp(t){var e=xn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Fn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Hk(){}function Wk(t,e){var n=Ve,r=xn(),i=e(),s=!Fn(r.memoizedState,i);if(s&&(r.memoizedState=i,Jt=!0),r=r.queue,Ev(Gk.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,Ql(9,Kk.bind(null,n,r,i,e),void 0,null),pt===null)throw Error(A(349));Ss&30||qk(n,e,i)}return i}function qk(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kk(t,e,n,r){e.value=n,e.getSnapshot=r,Qk(e)&&Yk(t)}function Gk(t,e,n){return n(function(){Qk(e)&&Yk(t)})}function Qk(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function Yk(t){var e=Or(t,1);e!==null&&Ln(e,t,1,-1)}function Gw(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gl,lastRenderedState:t},e.queue=t,t=t.dispatch=qO.bind(null,Ve,t),[e.memoizedState,t]}function Ql(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xk(){return xn().memoizedState}function dd(t,e,n,r){var i=Wn();Ve.flags|=t,i.memoizedState=Ql(1|e,n,void 0,r===void 0?null:r)}function Jf(t,e,n,r){var i=xn();r=r===void 0?null:r;var s=void 0;if(it!==null){var o=it.memoizedState;if(s=o.destroy,r!==null&&vv(r,o.deps)){i.memoizedState=Ql(e,n,s,r);return}}Ve.flags|=t,i.memoizedState=Ql(1|e,n,s,r)}function Qw(t,e){return dd(8390656,8,t,e)}function Ev(t,e){return Jf(2048,8,t,e)}function Jk(t,e){return Jf(4,2,t,e)}function Zk(t,e){return Jf(4,4,t,e)}function ex(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tx(t,e,n){return n=n!=null?n.concat([t]):null,Jf(4,4,ex.bind(null,e,t),n)}function Tv(){}function nx(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vv(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function rx(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vv(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ix(t,e,n){return Ss&21?(Fn(n,e)||(n=ak(),Ve.lanes|=n,bs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function HO(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=bp.transition;bp.transition={};try{t(!1),e()}finally{ve=n,bp.transition=r}}function sx(){return xn().memoizedState}function WO(t,e,n){var r=Ti(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ox(t))ax(e,n);else if(n=Mk(t,e,n,r),n!==null){var i=Ht();Ln(n,t,r,i),lx(n,e,r)}}function qO(t,e,n){var r=Ti(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ox(t))ax(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Fn(a,o)){var l=e.interleaved;l===null?(i.next=i,hv(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Mk(t,e,i,r),n!==null&&(i=Ht(),Ln(n,t,r,i),lx(n,e,r))}}function ox(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function ax(t,e){yl=Xd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zy(t,n)}}var Jd={readContext:kn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},KO={readContext:kn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:Qw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dd(4194308,4,ex.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dd(4194308,4,t,e)},useInsertionEffect:function(t,e){return dd(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WO.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Gw,useDebugValue:Tv,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Gw(!1),e=t[0];return t=HO.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=Wn();if(Le){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),pt===null)throw Error(A(349));Ss&30||qk(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qw(Gk.bind(null,r,s,t),[t]),r.flags|=2048,Ql(9,Kk.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=pt.identifierPrefix;if(Le){var n=Ir,r=Tr;n=(r&~(1<<32-Dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Kl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BO++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GO={readContext:kn,useCallback:nx,useContext:kn,useEffect:Ev,useImperativeHandle:tx,useInsertionEffect:Jk,useLayoutEffect:Zk,useMemo:rx,useReducer:Rp,useRef:Xk,useState:function(){return Rp(Gl)},useDebugValue:Tv,useDeferredValue:function(t){var e=xn();return ix(e,it.memoizedState,t)},useTransition:function(){var t=Rp(Gl)[0],e=xn().memoizedState;return[t,e]},useMutableSource:Hk,useSyncExternalStore:Wk,useId:sx,unstable_isNewReconciler:!1},QO={readContext:kn,useCallback:nx,useContext:kn,useEffect:Ev,useImperativeHandle:tx,useInsertionEffect:Jk,useLayoutEffect:Zk,useMemo:rx,useReducer:Cp,useRef:Xk,useState:function(){return Cp(Gl)},useDebugValue:Tv,useDeferredValue:function(t){var e=xn();return it===null?e.memoizedState=t:ix(e,it.memoizedState,t)},useTransition:function(){var t=Cp(Gl)[0],e=xn().memoizedState;return[t,e]},useMutableSource:Hk,useSyncExternalStore:Wk,useId:sx,unstable_isNewReconciler:!1};function Wo(t,e){try{var n="",r=e;do n+=I2(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ap(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var YO=typeof WeakMap=="function"?WeakMap:Map;function ux(t,e,n){n=Rr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ef||(ef=!0,lg=r),Jm(t,e)},n}function cx(t,e,n){n=Rr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jm(t,e),typeof r!="function"&&(Ei===null?Ei=new Set([this]):Ei.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new YO;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=cj.bind(null,t,e,n),e.then(t,t))}function Xw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rr(-1,1),e.tag=2,wi(n,e,1))),n.lanes|=1),t)}var XO=Wr.ReactCurrentOwner,Jt=!1;function zt(t,e,n,r){e.child=t===null?Uk(e,null,n,r):Bo(e,t.child,n,r)}function Zw(t,e,n,r,i){n=n.render;var s=e.ref;return Po(e,i),r=_v(t,e,n,r,s,i),n=wv(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jr(t,e,i)):(Le&&n&&av(e),e.flags|=1,zt(t,e,r,i),e.child)}function e1(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Av(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dx(t,e,s,r,i)):(t=md(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zl,n(o,r)&&t.ref===e.ref)return jr(t,e,i)}return e.flags|=1,t=Ii(s,r),t.ref=e.ref,t.return=e,e.child=t}function dx(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(zl(s,r)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,jr(t,e,i)}return Zm(t,e,n,r,i)}function fx(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(wo,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(wo,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(wo,ln),ln|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(wo,ln),ln|=r;return zt(t,e,i,n),e.child}function hx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zm(t,e,n,r,i){var s=en(n)?ks:Mt.current;return s=zo(e,s),Po(e,i),n=_v(t,e,n,r,s,i),r=wv(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jr(t,e,i)):(Le&&r&&av(e),e.flags|=1,zt(t,e,n,i),e.child)}function t1(t,e,n,r,i){if(en(n)){var s=!0;Hd(e)}else s=!1;if(Po(e,i),e.stateNode===null)fd(t,e),Fk(e,n,r),Xm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=kn(u):(u=en(n)?ks:Mt.current,u=zo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&qw(e,o,r,u),ni=!1;var h=e.memoizedState;o.state=h,Qd(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Zt.current||ni?(typeof c=="function"&&(Ym(e,n,c,r),l=e.memoizedState),(a=ni||Ww(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$k(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:An(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=en(n)?ks:Mt.current,l=zo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&qw(e,o,r,l),ni=!1,h=e.memoizedState,o.state=h,Qd(e,r,o,i);var m=e.memoizedState;a!==d||h!==m||Zt.current||ni?(typeof p=="function"&&(Ym(e,n,p,r),m=e.memoizedState),(u=ni||Ww(e,n,u,r,h,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return eg(t,e,n,r,s,i)}function eg(t,e,n,r,i,s){hx(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Fw(e,n,!1),jr(t,e,s);r=e.stateNode,XO.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bo(e,t.child,null,s),e.child=Bo(e,null,a,s)):zt(t,e,a,s),e.memoizedState=r.state,i&&Fw(e,n,!0),e.child}function px(t){var e=t.stateNode;e.pendingContext?Vw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vw(t,e.context,!1),mv(t,e.containerInfo)}function n1(t,e,n,r,i){return Uo(),uv(i),e.flags|=256,zt(t,e,n,r),e.child}var tg={dehydrated:null,treeContext:null,retryLane:0};function ng(t){return{baseLanes:t,cachePool:null,transitions:null}}function mx(t,e,n){var r=e.pendingProps,i=Me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Me,i&1),t===null)return Gm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=th(o,r,0,null),t=vs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ng(n),e.memoizedState=tg,t):Iv(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return JO(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ii(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ii(a,s):(s=vs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ng(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=tg,r}return s=t.child,t=s.sibling,r=Ii(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Iv(t,e){return e=th({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sc(t,e,n,r){return r!==null&&uv(r),Bo(e,t.child,null,n),t=Iv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function JO(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ap(Error(A(422))),Sc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=th({mode:"visible",children:r.children},i,0,null),s=vs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bo(e,t.child,null,o),e.child.memoizedState=ng(o),e.memoizedState=tg,s);if(!(e.mode&1))return Sc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Ap(s,r,void 0),Sc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Jt||a){if(r=pt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Or(t,i),Ln(r,t,i,-1))}return Cv(),r=Ap(Error(A(421))),Sc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=dj.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,cn=_i(i.nextSibling),fn=e,Le=!0,Nn=null,t!==null&&(_n[wn++]=Tr,_n[wn++]=Ir,_n[wn++]=xs,Tr=t.id,Ir=t.overflow,xs=e),e=Iv(e,r.children),e.flags|=4096,e)}function r1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qm(t.return,e,n)}function Pp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gx(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(zt(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r1(t,n,e);else if(t.tag===19)r1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Pp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Pp(e,!0,n,null,s);break;case"together":Pp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fd(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ZO(t,e,n){switch(e.tag){case 3:px(e),Uo();break;case 5:Bk(e);break;case 1:en(e.type)&&Hd(e);break;case 4:mv(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(Kd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?mx(t,e,n):(ke(Me,Me.current&1),t=jr(t,e,n),t!==null?t.sibling:null);ke(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gx(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,fx(t,e,n)}return jr(t,e,n)}var yx,rg,vx,_x;yx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rg=function(){};vx=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,os(nr.current);var s=null;switch(n){case"input":i=xm(t,i),r=xm(t,r),s=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),s=[];break;case"textarea":i=Rm(t,i),r=Rm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ud)}Am(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Re("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};_x=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ua(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ej(t,e,n){var r=e.pendingProps;switch(lv(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return en(e.type)&&Bd(),Rt(e),null;case 3:return r=e.stateNode,Ho(),je(Zt),je(Mt),yv(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(kc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(dg(Nn),Nn=null))),rg(t,e),Rt(e),null;case 5:gv(e);var i=os(ql.current);if(n=e.type,t!==null&&e.stateNode!=null)vx(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return Rt(e),null}if(t=os(nr.current),kc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kn]=e,r[Hl]=s,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<el.length;i++)Re(el[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":fw(r,s),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Re("invalid",r);break;case"textarea":pw(r,s),Re("invalid",r)}Am(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ic(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ic(r.textContent,a,t),i=["children",""+a]):jl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":mc(r),hw(r,s,!0);break;case"textarea":mc(r),mw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ud)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kn]=e,t[Hl]=r,yx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pm(n,r),n){case"dialog":Re("cancel",t),Re("close",t),i=r;break;case"iframe":case"object":case"embed":Re("load",t),i=r;break;case"video":case"audio":for(i=0;i<el.length;i++)Re(el[i],t);i=r;break;case"source":Re("error",t),i=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),i=r;break;case"details":Re("toggle",t),i=r;break;case"input":fw(t,r),i=xm(t,r),Re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Re("invalid",t);break;case"textarea":pw(t,r),i=Rm(t,r),Re("invalid",t);break;default:i=r}Am(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?QI(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&KI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Dl(t,l):typeof l=="number"&&Dl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Re("scroll",t):l!=null&&Ky(t,s,l,o))}switch(n){case"input":mc(t),hw(t,r,!1);break;case"textarea":mc(t),mw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ci(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?bo(t,!!r.multiple,s,!1):r.defaultValue!=null&&bo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ud)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rt(e),null;case 6:if(t&&e.stateNode!=null)_x(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=os(ql.current),os(nr.current),kc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kn]=e,(s=r.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Ic(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ic(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kn]=e,e.stateNode=r}return Rt(e),null;case 13:if(je(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&cn!==null&&e.mode&1&&!(e.flags&128))Lk(),Uo(),e.flags|=98560,s=!1;else if(s=kc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Kn]=e}else Uo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rt(e),s=!1}else Nn!==null&&(dg(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?ot===0&&(ot=3):Cv())),e.updateQueue!==null&&(e.flags|=4),Rt(e),null);case 4:return Ho(),rg(t,e),t===null&&Ul(e.stateNode.containerInfo),Rt(e),null;case 10:return fv(e.type._context),Rt(e),null;case 17:return en(e.type)&&Bd(),Rt(e),null;case 19:if(je(Me),s=e.memoizedState,s===null)return Rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ua(s,!1);else{if(ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yd(t),o!==null){for(e.flags|=128,Ua(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Me,Me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ge()>qo&&(e.flags|=128,r=!0,Ua(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return Rt(e),null}else 2*Ge()-s.renderingStartTime>qo&&n!==1073741824&&(e.flags|=128,r=!0,Ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ge(),e.sibling=null,n=Me.current,ke(Me,r?n&1|2:n&1),e):(Rt(e),null);case 22:case 23:return Rv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ln&1073741824&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function tj(t,e){switch(lv(e),e.tag){case 1:return en(e.type)&&Bd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ho(),je(Zt),je(Mt),yv(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gv(e),null;case 13:if(je(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Uo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(Me),null;case 4:return Ho(),null;case 10:return fv(e.type._context),null;case 22:case 23:return Rv(),null;case 24:return null;default:return null}}var bc=!1,Pt=!1,nj=typeof WeakSet=="function"?WeakSet:Set,V=null;function _o(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function ig(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var i1=!1;function rj(t,e){if(zm=Vd,t=Ik(),ov(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Um={focusedElem:t,selectionRange:n},Vd=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var E=m.memoizedProps,_=m.memoizedState,v=e.stateNode,g=v.getSnapshotBeforeUpdate(e.elementType===e.type?E:An(e.type,E),_);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(T){Ue(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return m=i1,i1=!1,m}function vl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ig(e,n,s)}i=i.next}while(i!==r)}}function Zf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wx(t){var e=t.alternate;e!==null&&(t.alternate=null,wx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[Hl],delete e[Wm],delete e[VO],delete e[FO])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ex(t){return t.tag===5||t.tag===3||t.tag===4}function s1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ex(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function og(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ud));else if(r!==4&&(t=t.child,t!==null))for(og(t,e,n),t=t.sibling;t!==null;)og(t,e,n),t=t.sibling}function ag(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ag(t,e,n),t=t.sibling;t!==null;)ag(t,e,n),t=t.sibling}var vt=null,Pn=!1;function Xr(t,e,n){for(n=n.child;n!==null;)Tx(t,e,n),n=n.sibling}function Tx(t,e,n){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(Wf,n)}catch{}switch(n.tag){case 5:Pt||_o(n,e);case 6:var r=vt,i=Pn;vt=null,Xr(t,e,n),vt=r,Pn=i,vt!==null&&(Pn?(t=vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(Pn?(t=vt,n=n.stateNode,t.nodeType===8?kp(t.parentNode,n):t.nodeType===1&&kp(t,n),Vl(t)):kp(vt,n.stateNode));break;case 4:r=vt,i=Pn,vt=n.stateNode.containerInfo,Pn=!0,Xr(t,e,n),vt=r,Pn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ig(n,e,o),i=i.next}while(i!==r)}Xr(t,e,n);break;case 1:if(!Pt&&(_o(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ue(n,e,a)}Xr(t,e,n);break;case 21:Xr(t,e,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,Xr(t,e,n),Pt=r):Xr(t,e,n);break;default:Xr(t,e,n)}}function o1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nj),e.forEach(function(r){var i=fj.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,Pn=!1;break e;case 3:vt=a.stateNode.containerInfo,Pn=!0;break e;case 4:vt=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(vt===null)throw Error(A(160));Tx(s,o,i),vt=null,Pn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ix(e,t),e=e.sibling}function Ix(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Hn(t),r&4){try{vl(3,t,t.return),Zf(3,t)}catch(E){Ue(t,t.return,E)}try{vl(5,t,t.return)}catch(E){Ue(t,t.return,E)}}break;case 1:Cn(e,t),Hn(t),r&512&&n!==null&&_o(n,n.return);break;case 5:if(Cn(e,t),Hn(t),r&512&&n!==null&&_o(n,n.return),t.flags&32){var i=t.stateNode;try{Dl(i,"")}catch(E){Ue(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&HI(i,s),Pm(a,o);var u=Pm(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?QI(i,d):c==="dangerouslySetInnerHTML"?KI(i,d):c==="children"?Dl(i,d):Ky(i,c,d,u)}switch(a){case"input":Sm(i,s);break;case"textarea":WI(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?bo(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?bo(i,!!s.multiple,s.defaultValue,!0):bo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Hl]=s}catch(E){Ue(t,t.return,E)}}break;case 6:if(Cn(e,t),Hn(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){Ue(t,t.return,E)}}break;case 3:if(Cn(e,t),Hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vl(e.containerInfo)}catch(E){Ue(t,t.return,E)}break;case 4:Cn(e,t),Hn(t);break;case 13:Cn(e,t),Hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sv=Ge())),r&4&&o1(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Pt=(u=Pt)||c,Cn(e,t),Pt=u):Cn(e,t),Hn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(V=t,c=t.child;c!==null;){for(d=V=c;V!==null;){switch(h=V,p=h.child,h.tag){case 0:case 11:case 14:case 15:vl(4,h,h.return);break;case 1:_o(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(E){Ue(r,n,E)}}break;case 5:_o(h,h.return);break;case 22:if(h.memoizedState!==null){l1(d);continue}}p!==null?(p.return=h,V=p):l1(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=GI("display",o))}catch(E){Ue(t,t.return,E)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(E){Ue(t,t.return,E)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Cn(e,t),Hn(t),r&4&&o1(t);break;case 21:break;default:Cn(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ex(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dl(i,""),r.flags&=-33);var s=s1(t);ag(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=s1(t);og(t,a,o);break;default:throw Error(A(161))}}catch(l){Ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ij(t,e,n){V=t,kx(t)}function kx(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Pt;a=bc;var u=Pt;if(bc=o,(Pt=l)&&!u)for(V=i;V!==null;)o=V,l=o.child,o.tag===22&&o.memoizedState!==null?u1(i):l!==null?(l.return=o,V=l):u1(i);for(;s!==null;)V=s,kx(s),s=s.sibling;V=i,bc=a,Pt=u}a1(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,V=s):a1(t)}}function a1(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pt||Zf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:An(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Vl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Pt||e.flags&512&&sg(e)}catch(h){Ue(e,e.return,h)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function l1(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function u1(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zf(4,e)}catch(l){Ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ue(e,i,l)}}var s=e.return;try{sg(e)}catch(l){Ue(e,s,l)}break;case 5:var o=e.return;try{sg(e)}catch(l){Ue(e,o,l)}}}catch(l){Ue(e,e.return,l)}if(e===t){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var sj=Math.ceil,Zd=Wr.ReactCurrentDispatcher,kv=Wr.ReactCurrentOwner,In=Wr.ReactCurrentBatchConfig,me=0,pt=null,et=null,Tt=0,ln=0,wo=Ui(0),ot=0,Yl=null,bs=0,eh=0,xv=0,_l=null,Yt=null,Sv=0,qo=1/0,vr=null,ef=!1,lg=null,Ei=null,Rc=!1,fi=null,tf=0,wl=0,ug=null,hd=-1,pd=0;function Ht(){return me&6?Ge():hd!==-1?hd:hd=Ge()}function Ti(t){return t.mode&1?me&2&&Tt!==0?Tt&-Tt:UO.transition!==null?(pd===0&&(pd=ak()),pd):(t=ve,t!==0||(t=window.event,t=t===void 0?16:pk(t.type)),t):1}function Ln(t,e,n,r){if(50<wl)throw wl=0,ug=null,Error(A(185));bu(t,n,r),(!(me&2)||t!==pt)&&(t===pt&&(!(me&2)&&(eh|=n),ot===4&&si(t,Tt)),tn(t,r),n===1&&me===0&&!(e.mode&1)&&(qo=Ge()+500,Yf&&Bi()))}function tn(t,e){var n=t.callbackNode;U2(t,e);var r=$d(t,t===pt?Tt:0);if(r===0)n!==null&&vw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vw(n),e===1)t.tag===0?zO(c1.bind(null,t)):Ok(c1.bind(null,t)),MO(function(){!(me&6)&&Bi()}),n=null;else{switch(lk(r)){case 1:n=Jy;break;case 4:n=sk;break;case 16:n=Md;break;case 536870912:n=ok;break;default:n=Md}n=Nx(n,xx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xx(t,e){if(hd=-1,pd=0,me&6)throw Error(A(327));var n=t.callbackNode;if(No()&&t.callbackNode!==n)return null;var r=$d(t,t===pt?Tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nf(t,r);else{e=r;var i=me;me|=2;var s=bx();(pt!==t||Tt!==e)&&(vr=null,qo=Ge()+500,ys(t,e));do try{lj();break}catch(a){Sx(t,a)}while(!0);dv(),Zd.current=s,me=i,et!==null?e=0:(pt=null,Tt=0,e=ot)}if(e!==0){if(e===2&&(i=Lm(t),i!==0&&(r=i,e=cg(t,i))),e===1)throw n=Yl,ys(t,0),si(t,r),tn(t,Ge()),n;if(e===6)si(t,r);else{if(i=t.current.alternate,!(r&30)&&!oj(i)&&(e=nf(t,r),e===2&&(s=Lm(t),s!==0&&(r=s,e=cg(t,s))),e===1))throw n=Yl,ys(t,0),si(t,r),tn(t,Ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:es(t,Yt,vr);break;case 3:if(si(t,r),(r&130023424)===r&&(e=Sv+500-Ge(),10<e)){if($d(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hm(es.bind(null,t,Yt,vr),e);break}es(t,Yt,vr);break;case 4:if(si(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sj(r/1960))-r,10<r){t.timeoutHandle=Hm(es.bind(null,t,Yt,vr),r);break}es(t,Yt,vr);break;case 5:es(t,Yt,vr);break;default:throw Error(A(329))}}}return tn(t,Ge()),t.callbackNode===n?xx.bind(null,t):null}function cg(t,e){var n=_l;return t.current.memoizedState.isDehydrated&&(ys(t,e).flags|=256),t=nf(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&dg(e)),t}function dg(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function oj(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Fn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function si(t,e){for(e&=~xv,e&=~eh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dn(e),r=1<<n;t[n]=-1,e&=~r}}function c1(t){if(me&6)throw Error(A(327));No();var e=$d(t,0);if(!(e&1))return tn(t,Ge()),null;var n=nf(t,e);if(t.tag!==0&&n===2){var r=Lm(t);r!==0&&(e=r,n=cg(t,r))}if(n===1)throw n=Yl,ys(t,0),si(t,e),tn(t,Ge()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,Yt,vr),tn(t,Ge()),null}function bv(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(qo=Ge()+500,Yf&&Bi())}}function Rs(t){fi!==null&&fi.tag===0&&!(me&6)&&No();var e=me;me|=1;var n=In.transition,r=ve;try{if(In.transition=null,ve=1,t)return t()}finally{ve=r,In.transition=n,me=e,!(me&6)&&Bi()}}function Rv(){ln=wo.current,je(wo)}function ys(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LO(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(lv(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bd();break;case 3:Ho(),je(Zt),je(Mt),yv();break;case 5:gv(r);break;case 4:Ho();break;case 13:je(Me);break;case 19:je(Me);break;case 10:fv(r.type._context);break;case 22:case 23:Rv()}n=n.return}if(pt=t,et=t=Ii(t.current,null),Tt=ln=e,ot=0,Yl=null,xv=eh=bs=0,Yt=_l=null,ss!==null){for(e=0;e<ss.length;e++)if(n=ss[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ss=null}return t}function Sx(t,e){do{var n=et;try{if(dv(),cd.current=Jd,Xd){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xd=!1}if(Ss=0,ft=it=Ve=null,yl=!1,Kl=0,kv.current=null,n===null||n.return===null){ot=1,Yl=e,et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Xw(o);if(p!==null){p.flags&=-257,Jw(p,o,a,s,e),p.mode&1&&Yw(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var E=new Set;E.add(l),e.updateQueue=E}else m.add(l);break e}else{if(!(e&1)){Yw(s,u,e),Cv();break e}l=Error(A(426))}}else if(Le&&a.mode&1){var _=Xw(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Jw(_,o,a,s,e),uv(Wo(l,a));break e}}s=l=Wo(l,a),ot!==4&&(ot=2),_l===null?_l=[s]:_l.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=ux(s,l,e);Bw(s,v);break e;case 1:a=l;var g=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Ei===null||!Ei.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var T=cx(s,a,e);Bw(s,T);break e}}s=s.return}while(s!==null)}Cx(n)}catch(x){e=x,et===n&&n!==null&&(et=n=n.return);continue}break}while(!0)}function bx(){var t=Zd.current;return Zd.current=Jd,t===null?Jd:t}function Cv(){(ot===0||ot===3||ot===2)&&(ot=4),pt===null||!(bs&268435455)&&!(eh&268435455)||si(pt,Tt)}function nf(t,e){var n=me;me|=2;var r=bx();(pt!==t||Tt!==e)&&(vr=null,ys(t,e));do try{aj();break}catch(i){Sx(t,i)}while(!0);if(dv(),me=n,Zd.current=r,et!==null)throw Error(A(261));return pt=null,Tt=0,ot}function aj(){for(;et!==null;)Rx(et)}function lj(){for(;et!==null&&!O2();)Rx(et)}function Rx(t){var e=Px(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?Cx(t):et=e,kv.current=null}function Cx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tj(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ot=6,et=null;return}}else if(n=ej(n,e,ln),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);ot===0&&(ot=5)}function es(t,e,n){var r=ve,i=In.transition;try{In.transition=null,ve=1,uj(t,e,n,r)}finally{In.transition=i,ve=r}return null}function uj(t,e,n,r){do No();while(fi!==null);if(me&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(B2(t,s),t===pt&&(et=pt=null,Tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rc||(Rc=!0,Nx(Md,function(){return No(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=ve;ve=1;var a=me;me|=4,kv.current=null,rj(t,n),Ix(n,t),CO(Um),Vd=!!zm,Um=zm=null,t.current=n,ij(n),j2(),me=a,ve=o,In.transition=s}else t.current=n;if(Rc&&(Rc=!1,fi=t,tf=i),s=t.pendingLanes,s===0&&(Ei=null),M2(n.stateNode),tn(t,Ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ef)throw ef=!1,t=lg,lg=null,t;return tf&1&&t.tag!==0&&No(),s=t.pendingLanes,s&1?t===ug?wl++:(wl=0,ug=t):wl=0,Bi(),null}function No(){if(fi!==null){var t=lk(tf),e=In.transition,n=ve;try{if(In.transition=null,ve=16>t?16:t,fi===null)var r=!1;else{if(t=fi,fi=null,tf=0,me&6)throw Error(A(331));var i=me;for(me|=4,V=t.current;V!==null;){var s=V,o=s.child;if(V.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(V=u;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:vl(8,c,s)}var d=c.child;if(d!==null)d.return=c,V=d;else for(;V!==null;){c=V;var h=c.sibling,p=c.return;if(wx(c),c===u){V=null;break}if(h!==null){h.return=p,V=h;break}V=p}}}var m=s.alternate;if(m!==null){var E=m.child;if(E!==null){m.child=null;do{var _=E.sibling;E.sibling=null,E=_}while(E!==null)}}V=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,V=o;else e:for(;V!==null;){if(s=V,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vl(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,V=v;break e}V=s.return}}var g=t.current;for(V=g;V!==null;){o=V;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,V=w;else e:for(o=g;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zf(9,a)}}catch(x){Ue(a,a.return,x)}if(a===o){V=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,V=T;break e}V=a.return}}if(me=i,Bi(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(Wf,t)}catch{}r=!0}return r}finally{ve=n,In.transition=e}}return!1}function d1(t,e,n){e=Wo(n,e),e=ux(t,e,1),t=wi(t,e,1),e=Ht(),t!==null&&(bu(t,1,e),tn(t,e))}function Ue(t,e,n){if(t.tag===3)d1(t,t,n);else for(;e!==null;){if(e.tag===3){d1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ei===null||!Ei.has(r))){t=Wo(n,t),t=cx(e,t,1),e=wi(e,t,1),t=Ht(),e!==null&&(bu(e,1,t),tn(e,t));break}}e=e.return}}function cj(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,pt===t&&(Tt&n)===n&&(ot===4||ot===3&&(Tt&130023424)===Tt&&500>Ge()-Sv?ys(t,0):xv|=n),tn(t,e)}function Ax(t,e){e===0&&(t.mode&1?(e=vc,vc<<=1,!(vc&130023424)&&(vc=4194304)):e=1);var n=Ht();t=Or(t,e),t!==null&&(bu(t,e,n),tn(t,n))}function dj(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ax(t,n)}function fj(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),Ax(t,n)}var Px;Px=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,ZO(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,Le&&e.flags&1048576&&jk(e,qd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fd(t,e),t=e.pendingProps;var i=zo(e,Mt.current);Po(e,n),i=_v(null,e,r,t,i,n);var s=wv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(r)?(s=!0,Hd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pv(e),i.updater=Xf,e.stateNode=i,i._reactInternals=e,Xm(e,r,t,n),e=eg(null,e,r,!0,s,n)):(e.tag=0,Le&&s&&av(e),zt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fd(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pj(r),t=An(r,t),i){case 0:e=Zm(null,e,r,t,n);break e;case 1:e=t1(null,e,r,t,n);break e;case 11:e=Zw(null,e,r,t,n);break e;case 14:e=e1(null,e,r,An(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Zm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),t1(t,e,r,i,n);case 3:e:{if(px(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$k(t,e),Qd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wo(Error(A(423)),e),e=n1(t,e,r,n,i);break e}else if(r!==i){i=Wo(Error(A(424)),e),e=n1(t,e,r,n,i);break e}else for(cn=_i(e.stateNode.containerInfo.firstChild),fn=e,Le=!0,Nn=null,n=Uk(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Uo(),r===i){e=jr(t,e,n);break e}zt(t,e,r,n)}e=e.child}return e;case 5:return Bk(e),t===null&&Gm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bm(r,i)?o=null:s!==null&&Bm(r,s)&&(e.flags|=32),hx(t,e),zt(t,e,o,n),e.child;case 6:return t===null&&Gm(e),null;case 13:return mx(t,e,n);case 4:return mv(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bo(e,null,r,n):zt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Zw(t,e,r,i,n);case 7:return zt(t,e,e.pendingProps,n),e.child;case 8:return zt(t,e,e.pendingProps.children,n),e.child;case 12:return zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(Kd,r._currentValue),r._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===i.children&&!Zt.current){e=jr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Rr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Po(e,n),i=kn(i),r=r(i),e.flags|=1,zt(t,e,r,n),e.child;case 14:return r=e.type,i=An(r,e.pendingProps),i=An(r.type,i),e1(t,e,r,i,n);case 15:return dx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),fd(t,e),e.tag=1,en(r)?(t=!0,Hd(e)):t=!1,Po(e,n),Fk(e,r,i),Xm(e,r,i,n),eg(null,e,r,!0,t,n);case 19:return gx(t,e,n);case 22:return fx(t,e,n)}throw Error(A(156,e.tag))};function Nx(t,e){return ik(t,e)}function hj(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,r){return new hj(t,e,n,r)}function Av(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pj(t){if(typeof t=="function")return Av(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qy)return 11;if(t===Yy)return 14}return 2}function Ii(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function md(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Av(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case uo:return vs(n.children,i,s,e);case Gy:o=8,i|=8;break;case Em:return t=Tn(12,n,e,i|2),t.elementType=Em,t.lanes=s,t;case Tm:return t=Tn(13,n,e,i),t.elementType=Tm,t.lanes=s,t;case Im:return t=Tn(19,n,e,i),t.elementType=Im,t.lanes=s,t;case zI:return th(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case VI:o=10;break e;case FI:o=9;break e;case Qy:o=11;break e;case Yy:o=14;break e;case ti:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vs(t,e,n,r){return t=Tn(7,t,r,e),t.lanes=n,t}function th(t,e,n,r){return t=Tn(22,t,r,e),t.elementType=zI,t.lanes=n,t.stateNode={isHidden:!1},t}function Np(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Op(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mj(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hp(0),this.expirationTimes=hp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pv(t,e,n,r,i,s,o,a,l){return t=new mj(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pv(s),t}function gj(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ox(t){if(!t)return Ai;t=t._reactInternals;e:{if(Us(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(en(n))return Nk(t,n,e)}return e}function jx(t,e,n,r,i,s,o,a,l){return t=Pv(n,r,!0,t,i,s,o,a,l),t.context=Ox(null),n=t.current,r=Ht(),i=Ti(n),s=Rr(r,i),s.callback=e??null,wi(n,s,i),t.current.lanes=i,bu(t,i,r),tn(t,r),t}function nh(t,e,n,r){var i=e.current,s=Ht(),o=Ti(i);return n=Ox(n),e.context===null?e.context=n:e.pendingContext=n,e=Rr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wi(i,e,o),t!==null&&(Ln(t,i,o,s),ud(t,i,o)),o}function rf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function f1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nv(t,e){f1(t,e),(t=t.alternate)&&f1(t,e)}function yj(){return null}var Dx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ov(t){this._internalRoot=t}rh.prototype.render=Ov.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));nh(t,e,null,null)};rh.prototype.unmount=Ov.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rs(function(){nh(null,t,null,null)}),e[Nr]=null}};function rh(t){this._internalRoot=t}rh.prototype.unstable_scheduleHydration=function(t){if(t){var e=dk();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ii.length&&e!==0&&e<ii[n].priority;n++);ii.splice(n,0,t),n===0&&hk(t)}};function jv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ih(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function h1(){}function vj(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=rf(o);s.call(u)}}var o=jx(e,r,t,0,null,!1,!1,"",h1);return t._reactRootContainer=o,t[Nr]=o.current,Ul(t.nodeType===8?t.parentNode:t),Rs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=rf(l);a.call(u)}}var l=Pv(t,0,!1,null,null,!1,!1,"",h1);return t._reactRootContainer=l,t[Nr]=l.current,Ul(t.nodeType===8?t.parentNode:t),Rs(function(){nh(e,l,n,r)}),l}function sh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=rf(o);a.call(l)}}nh(e,o,t,i)}else o=vj(n,e,t,i,r);return rf(o)}uk=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Za(e.pendingLanes);n!==0&&(Zy(e,n|1),tn(e,Ge()),!(me&6)&&(qo=Ge()+500,Bi()))}break;case 13:Rs(function(){var r=Or(t,1);if(r!==null){var i=Ht();Ln(r,t,1,i)}}),Nv(t,1)}};ev=function(t){if(t.tag===13){var e=Or(t,134217728);if(e!==null){var n=Ht();Ln(e,t,134217728,n)}Nv(t,134217728)}};ck=function(t){if(t.tag===13){var e=Ti(t),n=Or(t,e);if(n!==null){var r=Ht();Ln(n,t,e,r)}Nv(t,e)}};dk=function(){return ve};fk=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};Om=function(t,e,n){switch(e){case"input":if(Sm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Qf(r);if(!i)throw Error(A(90));BI(r),Sm(r,i)}}}break;case"textarea":WI(t,n);break;case"select":e=n.value,e!=null&&bo(t,!!n.multiple,e,!1)}};JI=bv;ZI=Rs;var _j={usingClientEntryPoint:!1,Events:[Cu,po,Qf,YI,XI,bv]},Ba={findFiberByHostInstance:is,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},wj={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nk(t),t===null?null:t.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||yj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{Wf=Cc.inject(wj),tr=Cc}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_j;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jv(e))throw Error(A(200));return gj(t,e,null,n)};gn.createRoot=function(t,e){if(!jv(t))throw Error(A(299));var n=!1,r="",i=Dx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pv(t,1,!1,null,null,n,!1,r,i),t[Nr]=e.current,Ul(t.nodeType===8?t.parentNode:t),new Ov(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=nk(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Rs(t)};gn.hydrate=function(t,e,n){if(!ih(e))throw Error(A(200));return sh(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!jv(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Dx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jx(e,null,t,1,n??null,i,!1,s,o),t[Nr]=e.current,Ul(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new rh(e)};gn.render=function(t,e,n){if(!ih(e))throw Error(A(200));return sh(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!ih(t))throw Error(A(40));return t._reactRootContainer?(Rs(function(){sh(null,null,t,!1,function(){t._reactRootContainer=null,t[Nr]=null})}),!0):!1};gn.unstable_batchedUpdates=bv;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ih(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return sh(t,e,n,!1,r)};gn.version="18.2.0-next-9e3b772b8-20220608";function Lx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lx)}catch(t){console.error(t)}}Lx(),jI.exports=gn;var Mx=jI.exports;const as=xu(Mx);var p1=Mx;_m.createRoot=p1.createRoot,_m.hydrateRoot=p1.hydrateRoot;/**
 * @remix-run/router v1.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xl.apply(this,arguments)}var hi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hi||(hi={}));const m1="popstate";function Ej(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return fg("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sf(i)}return Ij(e,n,null,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Dv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Tj(){return Math.random().toString(36).substr(2,8)}function g1(t,e){return{usr:t.state,key:t.key,idx:e}}function fg(t,e,n,r){return n===void 0&&(n=null),Xl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ya(e):e,{state:n,key:e&&e.key||r||Tj()})}function sf(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ya(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ij(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=hi.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Xl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=hi.Pop;let _=c(),v=_==null?null:_-u;u=_,l&&l({action:a,location:E.location,delta:v})}function h(_,v){a=hi.Push;let g=fg(E.location,_,v);n&&n(g,_),u=c()+1;let w=g1(g,u),T=E.createHref(g);try{o.pushState(w,"",T)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(T)}s&&l&&l({action:a,location:E.location,delta:1})}function p(_,v){a=hi.Replace;let g=fg(E.location,_,v);n&&n(g,_),u=c();let w=g1(g,u),T=E.createHref(g);o.replaceState(w,"",T),s&&l&&l({action:a,location:E.location,delta:0})}function m(_){let v=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof _=="string"?_:sf(_);return Ye(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let E={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(m1,d),l=_,()=>{i.removeEventListener(m1,d),l=null}},createHref(_){return e(i,_)},createURL:m,encodeLocation(_){let v=m(_);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:p,go(_){return o.go(_)}};return E}var y1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(y1||(y1={}));function kj(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ya(e):e,i=Lv(r.pathname||"/",n);if(i==null)return null;let s=$x(t);xj(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=jj(s[a],Mj(i));return o}function $x(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ki([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$x(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Nj(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Vx(s.path))i(s,o,l)}),e}function Vx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Vx(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function xj(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Oj(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Sj=/^:\w+$/,bj=3,Rj=2,Cj=1,Aj=10,Pj=-2,v1=t=>t==="*";function Nj(t,e){let n=t.split("/"),r=n.length;return n.some(v1)&&(r+=Pj),e&&(r+=Rj),n.filter(i=>!v1(i)).reduce((i,s)=>i+(Sj.test(s)?bj:s===""?Cj:Aj),r)}function Oj(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jj(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Dj({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:ki([i,c.pathname]),pathnameBase:zj(ki([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=ki([i,c.pathnameBase]))}return s}function Dj(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Lj(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:p}=c;if(h==="*"){let E=a[d]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const m=a[d];return p&&!m?u[h]=void 0:u[h]=$j(m||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Lj(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Dv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Mj(t){try{return decodeURI(t)}catch(e){return Dv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function $j(t,e){try{return decodeURIComponent(t)}catch(n){return Dv(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Lv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Vj(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ya(t):t;return{pathname:n?n.startsWith("/")?n:Fj(n,e):e,search:Uj(r),hash:Bj(i)}}function Fj(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mv(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $v(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ya(t):(i=Xl({},t),Ye(!i.pathname||!i.pathname.includes("?"),jp("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),jp("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),jp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else if(r){let d=e[e.length-1].replace(/^\//,"").split("/");if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d.pop();i.pathname=h.join("/")}a="/"+d.join("/")}else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=Vj(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ki=t=>t.join("/").replace(/\/\/+/g,"/"),zj=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Uj=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Bj=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Hj(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Fx=["post","put","patch","delete"];new Set(Fx);const Wj=["get",...Fx];new Set(Wj);/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function of(){return of=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},of.apply(this,arguments)}const Vv=y.createContext(null),qj=y.createContext(null),va=y.createContext(null),oh=y.createContext(null),fr=y.createContext({outlet:null,matches:[],isDataRoute:!1}),zx=y.createContext(null);function Kj(t,e){let{relative:n}=e===void 0?{}:e;_a()||Ye(!1);let{basename:r,navigator:i}=y.useContext(va),{hash:s,pathname:o,search:a}=Bx(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ki([r,o])),i.createHref({pathname:l,search:a,hash:s})}function _a(){return y.useContext(oh)!=null}function Bs(){return _a()||Ye(!1),y.useContext(oh).location}function Ux(t){y.useContext(va).static||y.useLayoutEffect(t)}function St(){let{isDataRoute:t}=y.useContext(fr);return t?lD():Gj()}function Gj(){_a()||Ye(!1);let t=y.useContext(Vv),{basename:e,navigator:n}=y.useContext(va),{matches:r}=y.useContext(fr),{pathname:i}=Bs(),s=JSON.stringify(Mv(r).map(l=>l.pathnameBase)),o=y.useRef(!1);return Ux(()=>{o.current=!0}),y.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=$v(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:ki([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Qj=y.createContext(null);function Yj(t){let e=y.useContext(fr).outlet;return e&&y.createElement(Qj.Provider,{value:t},e)}function Fv(){let{matches:t}=y.useContext(fr),e=t[t.length-1];return e?e.params:{}}function Bx(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=y.useContext(fr),{pathname:i}=Bs(),s=JSON.stringify(Mv(r).map(o=>o.pathnameBase));return y.useMemo(()=>$v(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Xj(t,e){return Jj(t,e)}function Jj(t,e,n){_a()||Ye(!1);let{navigator:r}=y.useContext(va),{matches:i}=y.useContext(fr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Bs(),u;if(e){var c;let E=typeof e=="string"?ya(e):e;a==="/"||(c=E.pathname)!=null&&c.startsWith(a)||Ye(!1),u=E}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",p=kj(t,{pathname:h}),m=rD(p&&p.map(E=>Object.assign({},E,{params:Object.assign({},o,E.params),pathname:ki([a,r.encodeLocation?r.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:ki([a,r.encodeLocation?r.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,n);return e&&m?y.createElement(oh.Provider,{value:{location:of({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:hi.Pop}},m):m}function Zj(){let t=aD(),e=Hj(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},e),n?y.createElement("pre",{style:i},n):null,null)}const eD=y.createElement(Zj,null);class tD extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?y.createElement(fr.Provider,{value:this.props.routeContext},y.createElement(zx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nD(t){let{routeContext:e,match:n,children:r}=t,i=y.useContext(Vv);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(fr.Provider,{value:e},r)}function rD(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ye(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||eD);let h=e.concat(s.slice(0,u+1)),p=()=>{let m;return c?m=d:l.route.Component?m=y.createElement(l.route.Component,null):l.route.element?m=l.route.element:m=a,y.createElement(nD,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:m})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?y.createElement(tD,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Hx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Hx||{}),af=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(af||{});function iD(t){let e=y.useContext(Vv);return e||Ye(!1),e}function sD(t){let e=y.useContext(qj);return e||Ye(!1),e}function oD(t){let e=y.useContext(fr);return e||Ye(!1),e}function Wx(t){let e=oD(),n=e.matches[e.matches.length-1];return n.route.id||Ye(!1),n.route.id}function aD(){var t;let e=y.useContext(zx),n=sD(af.UseRouteError),r=Wx(af.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function lD(){let{router:t}=iD(Hx.UseNavigateStable),e=Wx(af.UseNavigateStable),n=y.useRef(!1);return Ux(()=>{n.current=!0}),y.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,of({fromRouteId:e},s)))},[t,e])}function qx(t){let{to:e,replace:n,state:r,relative:i}=t;_a()||Ye(!1);let{matches:s}=y.useContext(fr),{pathname:o}=Bs(),a=St(),l=$v(e,Mv(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return y.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function zv(t){return Yj(t.context)}function yt(t){Ye(!1)}function uD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=hi.Pop,navigator:s,static:o=!1}=t;_a()&&Ye(!1);let a=e.replace(/^\/*/,"/"),l=y.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ya(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:p="default"}=r,m=y.useMemo(()=>{let E=Lv(u,a);return E==null?null:{location:{pathname:E,search:c,hash:d,state:h,key:p},navigationType:i}},[a,u,c,d,h,p,i]);return m==null?null:y.createElement(va.Provider,{value:l},y.createElement(oh.Provider,{children:n,value:m}))}function cD(t){let{children:e,location:n}=t;return Xj(hg(e),n)}new Promise(()=>{});function hg(t,e){e===void 0&&(e=[]);let n=[];return y.Children.forEach(t,(r,i)=>{if(!y.isValidElement(r))return;let s=[...e,i];if(r.type===y.Fragment){n.push.apply(n,hg(r.props.children,s));return}r.type!==yt&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=hg(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pg(){return pg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pg.apply(this,arguments)}function dD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function fD(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hD(t,e){return t.button===0&&(!e||e==="_self")&&!fD(t)}function mg(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function pD(t,e){let n=mg(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const mD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],gD="startTransition",_1=d2[gD];function yD(t){let{basename:e,children:n,future:r,window:i}=t,s=y.useRef();s.current==null&&(s.current=Ej({window:i,v5Compat:!0}));let o=s.current,[a,l]=y.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=y.useCallback(d=>{u&&_1?_1(()=>l(d)):l(d)},[l,u]);return y.useLayoutEffect(()=>o.listen(c),[o,c]),y.createElement(uD,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const vD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_D=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mn=y.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=dD(e,mD),{basename:p}=y.useContext(va),m,E=!1;if(typeof u=="string"&&_D.test(u)&&(m=u,vD))try{let w=new URL(window.location.href),T=u.startsWith("//")?new URL(w.protocol+u):new URL(u),x=Lv(T.pathname,p);T.origin===w.origin&&x!=null?u=x+T.search+T.hash:E=!0}catch{}let _=Kj(u,{relative:i}),v=wD(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function g(w){r&&r(w),w.defaultPrevented||v(w)}return y.createElement("a",pg({},h,{href:m||_,onClick:E||s?r:g,ref:n,target:l}))});var w1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(w1||(w1={}));var E1;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(E1||(E1={}));function wD(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=St(),u=Bs(),c=Bx(t,{relative:o});return y.useCallback(d=>{if(hD(d,n)){d.preventDefault();let h=r!==void 0?r:sf(u)===sf(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function Kx(t){let e=y.useRef(mg(t)),n=y.useRef(!1),r=Bs(),i=y.useMemo(()=>pD(r.search,n.current?null:e.current),[r.search]),s=St(),o=y.useCallback((a,l)=>{const u=mg(typeof a=="function"?a(i):a);n.current=!0,s("?"+u,l)},[s,i]);return[i,o]}var Gx={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Gx);var ED=Gx.exports;const L=xu(ED);function gg(){return gg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gg.apply(this,arguments)}function Qx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function T1(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function TD(t){var e=ID(t,"string");return typeof e=="symbol"?e:String(e)}function ID(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Yx(t,e,n){var r=y.useRef(t!==void 0),i=y.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,y.useCallback(function(u){for(var c=arguments.length,d=new Array(c>1?c-1:0),h=1;h<c;h++)d[h-1]=arguments[h];n&&n.apply(void 0,[u].concat(d)),o(u)},[n])]}function Uv(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[T1(r)],a=s[r],l=Qx(s,[T1(r),r].map(TD)),u=e[r],c=Yx(a,o,t[u]),d=c[0],h=c[1];return gg({},l,(i={},i[r]=d,i[u]=h,i))},t)}function yg(t,e){return yg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},yg(t,e)}function kD(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,yg(t,e)}const xD=["xxl","xl","lg","md","sm","xs"],SD="xs",ah=y.createContext({prefixes:{},breakpoints:xD,minBreakpoint:SD});function H(t,e){const{prefixes:n}=y.useContext(ah);return t||n[e]||e}function Xx(){const{breakpoints:t}=y.useContext(ah);return t}function Jx(){const{minBreakpoint:t}=y.useContext(ah);return t}function Bv(){const{dir:t}=y.useContext(ah);return t==="rtl"}function wa(t){return t&&t.ownerDocument||document}function bD(t){var e=wa(t);return e&&e.defaultView||window}function RD(t,e){return bD(t).getComputedStyle(t,e)}var CD=/([A-Z])/g;function AD(t){return t.replace(CD,"-$1").toLowerCase()}var PD=/^ms-/;function Ac(t){return AD(t).replace(PD,"-ms-")}var ND=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function OD(t){return!!(t&&ND.test(t))}function Cr(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Ac(e))||RD(t).getPropertyValue(Ac(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(Ac(i)):OD(i)?r+=i+"("+s+") ":n+=Ac(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var Zx={exports:{}},jD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",DD=jD,LD=DD;function eS(){}function tS(){}tS.resetWarningCache=eS;var MD=function(){function t(r,i,s,o,a,l){if(l!==LD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:tS,resetWarningCache:eS};return n.PropTypes=n,n};Zx.exports=MD();var $D=Zx.exports;const Y=xu($D),I1={disabled:!1},nS=Qe.createContext(null);var VD=function(e){return e.scrollTop},tl="unmounted",ri="exited",On="entering",Er="entered",Jl="exiting",qr=function(t){kD(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=ri,s.appearStatus=On):l=Er:r.unmountOnExit||r.mountOnEnter?l=tl:l=ri,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===tl?{status:ri}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==On&&o!==Er&&(s=On):(o===On||o===Er)&&(s=Jl)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===On){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:as.findDOMNode(this);o&&VD(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ri&&this.setState({status:tl})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[as.findDOMNode(this),a],u=l[0],c=l[1],d=this.getTimeouts(),h=a?d.appear:d.enter;if(!i&&!o||I1.disabled){this.safeSetState({status:Er},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:On},function(){s.props.onEntering(u,c),s.onTransitionEnd(h,function(){s.safeSetState({status:Er},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:as.findDOMNode(this);if(!s||I1.disabled){this.safeSetState({status:ri},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Jl},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:ri},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:as.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===tl)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=Qx(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Qe.createElement(nS.Provider,{value:null},typeof o=="function"?o(i,a):Qe.cloneElement(Qe.Children.only(o),a))},e}(Qe.Component);qr.contextType=nS;qr.propTypes={};function to(){}qr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:to,onEntering:to,onEntered:to,onExit:to,onExiting:to,onExited:to};qr.UNMOUNTED=tl;qr.EXITED=ri;qr.ENTERING=On;qr.ENTERED=Er;qr.EXITING=Jl;const FD=qr,Ea=!!(typeof window<"u"&&window.document&&window.document.createElement);var vg=!1,_g=!1;try{var Dp={get passive(){return vg=!0},get once(){return _g=vg=!0}};Ea&&(window.addEventListener("test",Dp,Dp),window.removeEventListener("test",Dp,!0))}catch{}function rS(t,e,n,r){if(r&&typeof r!="boolean"&&!_g){var i=r.once,s=r.capture,o=n;!_g&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,vg?r:s)}t.addEventListener(e,n,r)}function wg(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function kr(t,e,n,r){return rS(t,e,n,r),function(){wg(t,e,n,r)}}function zD(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function UD(t){var e=Cr(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function BD(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||zD(t,"transitionend",!0)},e+n),s=kr(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function iS(t,e,n,r){n==null&&(n=UD(t)||0);var i=BD(t,n,r),s=kr(t,"transitionend",e);return function(){i(),s()}}function k1(t,e){const n=Cr(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Hv(t,e){const n=k1(t,"transitionDuration"),r=k1(t,"transitionDelay"),i=iS(t,s=>{s.target===t&&(i(),e(s))},n+r)}function Ha(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function sS(t){t.offsetHeight}const x1=t=>!t||typeof t=="function"?t:e=>{t.current=e};function HD(t,e){const n=x1(t),r=x1(e);return i=>{n&&n(i),r&&r(i)}}function Hi(t,e){return y.useMemo(()=>HD(t,e),[t,e])}function lf(t){return t&&"setState"in t?as.findDOMNode(t):t??null}const WD=Qe.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const d=y.useRef(null),h=Hi(d,l),p=I=>{h(lf(I))},m=I=>k=>{I&&d.current&&I(d.current,k)},E=y.useCallback(m(t),[t]),_=y.useCallback(m(e),[e]),v=y.useCallback(m(n),[n]),g=y.useCallback(m(r),[r]),w=y.useCallback(m(i),[i]),T=y.useCallback(m(s),[s]),x=y.useCallback(m(o),[o]);return f.jsx(FD,{ref:c,...u,onEnter:E,onEntered:v,onEntering:_,onExit:g,onExited:T,onExiting:w,addEndListener:x,nodeRef:d,children:typeof a=="function"?(I,k)=>a(I,{...k,ref:p}):Qe.cloneElement(a,{ref:p})})}),Wv=WD,qD={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function KD(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=qD[t];return r+parseInt(Cr(e,i[0]),10)+parseInt(Cr(e,i[1]),10)}const GD={[ri]:"collapse",[Jl]:"collapsing",[On]:"collapsing",[Er]:"collapse show"},QD=Qe.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",in:l=!1,timeout:u=300,mountOnEnter:c=!1,unmountOnExit:d=!1,appear:h=!1,getDimensionValue:p=KD,...m},E)=>{const _=typeof a=="function"?a():a,v=y.useMemo(()=>Ha(I=>{I.style[_]="0"},t),[_,t]),g=y.useMemo(()=>Ha(I=>{const k=`scroll${_[0].toUpperCase()}${_.slice(1)}`;I.style[_]=`${I[k]}px`},e),[_,e]),w=y.useMemo(()=>Ha(I=>{I.style[_]=null},n),[_,n]),T=y.useMemo(()=>Ha(I=>{I.style[_]=`${p(_,I)}px`,sS(I)},r),[r,p,_]),x=y.useMemo(()=>Ha(I=>{I.style[_]=null},i),[_,i]);return f.jsx(Wv,{ref:E,addEndListener:Hv,...m,"aria-expanded":m.role?l:null,onEnter:v,onEntering:g,onEntered:w,onExit:T,onExiting:x,childRef:o.ref,in:l,timeout:u,mountOnEnter:c,unmountOnExit:d,appear:h,children:(I,k)=>Qe.cloneElement(o,{...k,className:L(s,o.props.className,GD[I],_==="width"&&"collapse-horizontal")})})}),YD=QD;function XD(t){const e=y.useRef(t);return y.useEffect(()=>{e.current=t},[t]),e}function st(t){const e=XD(t);return y.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const Pu=t=>y.forwardRef((e,n)=>f.jsx("div",{...e,ref:n,className:L(e.className,t)})),oS=Pu("h4");oS.displayName="DivStyledAsH4";const aS=y.forwardRef(({className:t,bsPrefix:e,as:n=oS,...r},i)=>(e=H(e,"alert-heading"),f.jsx(n,{ref:i,className:L(t,e),...r})));aS.displayName="AlertHeading";const JD=aS;function Eg(){return y.useState(null)}function qv(){const t=y.useRef(!0),e=y.useRef(()=>t.current);return y.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function ZD(t){const e=y.useRef(null);return y.useEffect(()=>{e.current=t}),e.current}const e4=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",t4=typeof document<"u",uf=t4||e4?y.useLayoutEffect:y.useEffect,n4=["as","disabled"];function r4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function i4(t){return!t||t.trim()==="#"}function Kv({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=h=>{if((e||t==="a"&&i4(n))&&h.preventDefault(),e){h.stopPropagation();return}o==null||o(h)},d=h=>{h.key===" "&&(h.preventDefault(),c(h))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:d},u]}const lS=y.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=r4(t,n4);const[s,{tagName:o}]=Kv(Object.assign({tagName:n,disabled:r},i));return f.jsx(o,Object.assign({},i,s,{ref:e}))});lS.displayName="Button";const s4=["onKeyDown"];function o4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function a4(t){return!t||t.trim()==="#"}const uS=y.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=o4(t,s4);const[i]=Kv(Object.assign({tagName:"a"},r)),s=st(o=>{i.onKeyDown(o),n==null||n(o)});return a4(r.href)||r.role==="button"?f.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):f.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});uS.displayName="Anchor";const Gv=uS,cS=y.forwardRef(({className:t,bsPrefix:e,as:n=Gv,...r},i)=>(e=H(e,"alert-link"),f.jsx(n,{ref:i,className:L(t,e),...r})));cS.displayName="AlertLink";const l4=cS,u4={[On]:"show",[Er]:"show"},dS=y.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=y.useCallback((l,u)=>{sS(l),r==null||r(l,u)},[r]);return f.jsx(Wv,{ref:s,addEndListener:Hv,...o,onEnter:a,childRef:e.ref,children:(l,u)=>y.cloneElement(e,{...u,className:L("fade",t,e.props.className,u4[l],n[l])})})});dS.displayName="Fade";const Cs=dS,c4={"aria-label":Y.string,onClick:Y.func,variant:Y.oneOf(["white"])},Qv=y.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>f.jsx("button",{ref:i,type:"button",className:L("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));Qv.displayName="CloseButton";Qv.propTypes=c4;const fS=Qv,hS=y.forwardRef((t,e)=>{const{bsPrefix:n,show:r=!0,closeLabel:i="Close alert",closeVariant:s,className:o,children:a,variant:l="primary",onClose:u,dismissible:c,transition:d=Cs,...h}=Uv(t,{show:"onClose"}),p=H(n,"alert"),m=st(v=>{u&&u(!1,v)}),E=d===!0?Cs:d,_=f.jsxs("div",{role:"alert",...E?void 0:h,ref:e,className:L(o,p,l&&`${p}-${l}`,c&&`${p}-dismissible`),children:[c&&f.jsx(fS,{onClick:m,"aria-label":i,variant:s}),a]});return E?f.jsx(E,{unmountOnExit:!0,...h,ref:void 0,in:r,children:_}):r?_:null});hS.displayName="Alert";const $e=Object.assign(hS,{Link:l4,Heading:JD}),pS=y.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...a},l)=>{const u=H(e,"btn"),[c,{tagName:d}]=Kv({tagName:t,disabled:s,...a}),h=d;return f.jsx(h,{...c,...a,ref:l,disabled:s,className:L(o,u,i&&"active",n&&`${u}-${n}`,r&&`${u}-${r}`,a.href&&s&&"disabled")})});pS.displayName="Button";const Oe=pS,mS=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=H(e,"card-body"),f.jsx(n,{ref:i,className:L(t,e),...r})));mS.displayName="CardBody";const gS=mS,yS=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=H(e,"card-footer"),f.jsx(n,{ref:i,className:L(t,e),...r})));yS.displayName="CardFooter";const d4=yS,vS=y.createContext(null);vS.displayName="CardHeaderContext";const _S=vS,wS=y.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=H(t,"card-header"),o=y.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return f.jsx(_S.Provider,{value:o,children:f.jsx(n,{ref:i,...r,className:L(e,s)})})});wS.displayName="CardHeader";const f4=wS,ES=y.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const o=H(t,"card-img");return f.jsx(r,{ref:s,className:L(n?`${o}-${n}`:o,e),...i})});ES.displayName="CardImg";const h4=ES,TS=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=H(e,"card-img-overlay"),f.jsx(n,{ref:i,className:L(t,e),...r})));TS.displayName="CardImgOverlay";const p4=TS,IS=y.forwardRef(({className:t,bsPrefix:e,as:n="a",...r},i)=>(e=H(e,"card-link"),f.jsx(n,{ref:i,className:L(t,e),...r})));IS.displayName="CardLink";const m4=IS,g4=Pu("h6"),kS=y.forwardRef(({className:t,bsPrefix:e,as:n=g4,...r},i)=>(e=H(e,"card-subtitle"),f.jsx(n,{ref:i,className:L(t,e),...r})));kS.displayName="CardSubtitle";const y4=kS,xS=y.forwardRef(({className:t,bsPrefix:e,as:n="p",...r},i)=>(e=H(e,"card-text"),f.jsx(n,{ref:i,className:L(t,e),...r})));xS.displayName="CardText";const v4=xS,_4=Pu("h5"),SS=y.forwardRef(({className:t,bsPrefix:e,as:n=_4,...r},i)=>(e=H(e,"card-title"),f.jsx(n,{ref:i,className:L(t,e),...r})));SS.displayName="CardTitle";const w4=SS,bS=y.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s=!1,children:o,as:a="div",...l},u)=>{const c=H(t,"card");return f.jsx(a,{ref:u,...l,className:L(e,c,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?f.jsx(gS,{children:o}):o})});bS.displayName="Card";const Wa=Object.assign(bS,{Img:h4,Title:w4,Subtitle:y4,Body:gS,Link:m4,Text:v4,Header:f4,Footer:d4,ImgOverlay:p4}),RS=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=H(e,"card-group"),f.jsx(n,{ref:i,className:L(t,e),...r})));RS.displayName="CardGroup";const E4=RS;function T4(t){const e=y.useRef(t);return e.current=t,e}function Yv(t){const e=T4(t);y.useEffect(()=>()=>e.current(),[])}const Tg=2**31-1;function CS(t,e,n){const r=n-Date.now();t.current=r<=Tg?setTimeout(e,r):setTimeout(()=>CS(t,e,n),Tg)}function I4(){const t=qv(),e=y.useRef();return Yv(()=>clearTimeout(e.current)),y.useMemo(()=>{const n=()=>clearTimeout(e.current);function r(i,s=0){t()&&(n(),s<=Tg?e.current=setTimeout(i,s):CS(e,i,Date.now()+s))}return{set:r,clear:n}},[])}function k4(t,e){let n=0;return y.Children.map(t,r=>y.isValidElement(r)?e(r,n++):r)}function x4(t,e){return y.Children.toArray(t).some(n=>y.isValidElement(n)&&n.type===e)}function S4({as:t,bsPrefix:e,className:n,...r}){e=H(e,"col");const i=Xx(),s=Jx(),o=[],a=[];return i.forEach(l=>{const u=r[l];delete r[l];let c,d,h;typeof u=="object"&&u!=null?{span:c,offset:d,order:h}=u:c=u;const p=l!==s?`-${l}`:"";c&&o.push(c===!0?`${e}${p}`:`${e}${p}-${c}`),h!=null&&a.push(`order${p}-${h}`),d!=null&&a.push(`offset${p}-${d}`)}),[{...r,className:L(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const AS=y.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=S4(t);return f.jsx(i,{...r,ref:e,className:L(n,!o.length&&s)})});AS.displayName="Col";const Oo=AS,PS=y.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:r,...i},s)=>{const o=H(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return f.jsx(n,{ref:s,...i,className:L(r,e?`${o}${a}`:o)})});PS.displayName="Container";const at=PS;var b4=Function.prototype.bind.call(Function.prototype.call,[].slice);function ts(t,e){return b4(t.querySelectorAll(e))}function R4(){const[,t]=y.useReducer(e=>!e,!1);return t}var S1=Object.prototype.hasOwnProperty;function b1(t,e,n){for(n of t.keys())if(El(n,e))return n}function El(t,e){var n,r,i;if(t===e)return!0;if(t&&e&&(n=t.constructor)===e.constructor){if(n===Date)return t.getTime()===e.getTime();if(n===RegExp)return t.toString()===e.toString();if(n===Array){if((r=t.length)===e.length)for(;r--&&El(t[r],e[r]););return r===-1}if(n===Set){if(t.size!==e.size)return!1;for(r of t)if(i=r,i&&typeof i=="object"&&(i=b1(e,i),!i)||!e.has(i))return!1;return!0}if(n===Map){if(t.size!==e.size)return!1;for(r of t)if(i=r[0],i&&typeof i=="object"&&(i=b1(e,i),!i)||!El(r[1],e.get(i)))return!1;return!0}if(n===ArrayBuffer)t=new Uint8Array(t),e=new Uint8Array(e);else if(n===DataView){if((r=t.byteLength)===e.byteLength)for(;r--&&t.getInt8(r)===e.getInt8(r););return r===-1}if(ArrayBuffer.isView(t)){if((r=t.byteLength)===e.byteLength)for(;r--&&t[r]===e[r];);return r===-1}if(!n||typeof t=="object"){r=0;for(n in t)if(S1.call(t,n)&&++r&&!S1.call(e,n)||!(n in e)||!El(t[n],e[n]))return!1;return Object.keys(e).length===r}}return t!==t&&e!==e}function C4(t){const e=qv();return[t[0],y.useCallback(n=>{if(e())return t[1](n)},[e,t[1]])]}var nn="top",Sn="bottom",bn="right",rn="left",Xv="auto",Nu=[nn,Sn,bn,rn],Ko="start",Zl="end",A4="clippingParents",NS="viewport",qa="popper",P4="reference",R1=Nu.reduce(function(t,e){return t.concat([e+"-"+Ko,e+"-"+Zl])},[]),OS=[].concat(Nu,[Xv]).reduce(function(t,e){return t.concat([e,e+"-"+Ko,e+"-"+Zl])},[]),N4="beforeRead",O4="read",j4="afterRead",D4="beforeMain",L4="main",M4="afterMain",$4="beforeWrite",V4="write",F4="afterWrite",z4=[N4,O4,j4,D4,L4,M4,$4,V4,F4];function rr(t){return t.split("-")[0]}function pn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function As(t){var e=pn(t).Element;return t instanceof e||t instanceof Element}function ir(t){var e=pn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Jv(t){if(typeof ShadowRoot>"u")return!1;var e=pn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var _s=Math.max,cf=Math.min,Go=Math.round;function Ig(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function jS(){return!/^((?!chrome|android).)*safari/i.test(Ig())}function Qo(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,s=1;e&&ir(t)&&(i=t.offsetWidth>0&&Go(r.width)/t.offsetWidth||1,s=t.offsetHeight>0&&Go(r.height)/t.offsetHeight||1);var o=As(t)?pn(t):window,a=o.visualViewport,l=!jS()&&n,u=(r.left+(l&&a?a.offsetLeft:0))/i,c=(r.top+(l&&a?a.offsetTop:0))/s,d=r.width/i,h=r.height/s;return{width:d,height:h,top:c,right:u+d,bottom:c+h,left:u,x:u,y:c}}function Zv(t){var e=Qo(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function DS(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Jv(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Pi(t){return t?(t.nodeName||"").toLowerCase():null}function Dr(t){return pn(t).getComputedStyle(t)}function U4(t){return["table","td","th"].indexOf(Pi(t))>=0}function Wi(t){return((As(t)?t.ownerDocument:t.document)||window.document).documentElement}function lh(t){return Pi(t)==="html"?t:t.assignedSlot||t.parentNode||(Jv(t)?t.host:null)||Wi(t)}function C1(t){return!ir(t)||Dr(t).position==="fixed"?null:t.offsetParent}function B4(t){var e=/firefox/i.test(Ig()),n=/Trident/i.test(Ig());if(n&&ir(t)){var r=Dr(t);if(r.position==="fixed")return null}var i=lh(t);for(Jv(i)&&(i=i.host);ir(i)&&["html","body"].indexOf(Pi(i))<0;){var s=Dr(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Ou(t){for(var e=pn(t),n=C1(t);n&&U4(n)&&Dr(n).position==="static";)n=C1(n);return n&&(Pi(n)==="html"||Pi(n)==="body"&&Dr(n).position==="static")?e:n||B4(t)||e}function e0(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Tl(t,e,n){return _s(t,cf(e,n))}function H4(t,e,n){var r=Tl(t,e,n);return r>n?n:r}function LS(){return{top:0,right:0,bottom:0,left:0}}function MS(t){return Object.assign({},LS(),t)}function $S(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var W4=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,MS(typeof e!="number"?e:$S(e,Nu))};function q4(t){var e,n=t.state,r=t.name,i=t.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=rr(n.placement),l=e0(a),u=[rn,bn].indexOf(a)>=0,c=u?"height":"width";if(!(!s||!o)){var d=W4(i.padding,n),h=Zv(s),p=l==="y"?nn:rn,m=l==="y"?Sn:bn,E=n.rects.reference[c]+n.rects.reference[l]-o[l]-n.rects.popper[c],_=o[l]-n.rects.reference[l],v=Ou(s),g=v?l==="y"?v.clientHeight||0:v.clientWidth||0:0,w=E/2-_/2,T=d[p],x=g-h[c]-d[m],I=g/2-h[c]/2+w,k=Tl(T,I,x),S=l;n.modifiersData[r]=(e={},e[S]=k,e.centerOffset=k-I,e)}}function K4(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||DS(e.elements.popper,i)&&(e.elements.arrow=i))}const G4={name:"arrow",enabled:!0,phase:"main",fn:q4,effect:K4,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Yo(t){return t.split("-")[1]}var Q4={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Y4(t,e){var n=t.x,r=t.y,i=e.devicePixelRatio||1;return{x:Go(n*i)/i||0,y:Go(r*i)/i||0}}function A1(t){var e,n=t.popper,r=t.popperRect,i=t.placement,s=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,d=t.isFixed,h=o.x,p=h===void 0?0:h,m=o.y,E=m===void 0?0:m,_=typeof c=="function"?c({x:p,y:E}):{x:p,y:E};p=_.x,E=_.y;var v=o.hasOwnProperty("x"),g=o.hasOwnProperty("y"),w=rn,T=nn,x=window;if(u){var I=Ou(n),k="clientHeight",S="clientWidth";if(I===pn(n)&&(I=Wi(n),Dr(I).position!=="static"&&a==="absolute"&&(k="scrollHeight",S="scrollWidth")),I=I,i===nn||(i===rn||i===bn)&&s===Zl){T=Sn;var O=d&&I===x&&x.visualViewport?x.visualViewport.height:I[k];E-=O-r.height,E*=l?1:-1}if(i===rn||(i===nn||i===Sn)&&s===Zl){w=bn;var j=d&&I===x&&x.visualViewport?x.visualViewport.width:I[S];p-=j-r.width,p*=l?1:-1}}var X=Object.assign({position:a},u&&Q4),ae=c===!0?Y4({x:p,y:E},pn(n)):{x:p,y:E};if(p=ae.x,E=ae.y,l){var P;return Object.assign({},X,(P={},P[T]=g?"0":"",P[w]=v?"0":"",P.transform=(x.devicePixelRatio||1)<=1?"translate("+p+"px, "+E+"px)":"translate3d("+p+"px, "+E+"px, 0)",P))}return Object.assign({},X,(e={},e[T]=g?E+"px":"",e[w]=v?p+"px":"",e.transform="",e))}function X4(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,s=n.adaptive,o=s===void 0?!0:s,a=n.roundOffsets,l=a===void 0?!0:a,u={placement:rr(e.placement),variation:Yo(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,A1(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,A1(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const J4={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:X4,data:{}};var Pc={passive:!0};function Z4(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,s=i===void 0?!0:i,o=r.resize,a=o===void 0?!0:o,l=pn(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&u.forEach(function(c){c.addEventListener("scroll",n.update,Pc)}),a&&l.addEventListener("resize",n.update,Pc),function(){s&&u.forEach(function(c){c.removeEventListener("scroll",n.update,Pc)}),a&&l.removeEventListener("resize",n.update,Pc)}}const eL={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Z4,data:{}};var tL={left:"right",right:"left",bottom:"top",top:"bottom"};function gd(t){return t.replace(/left|right|bottom|top/g,function(e){return tL[e]})}var nL={start:"end",end:"start"};function P1(t){return t.replace(/start|end/g,function(e){return nL[e]})}function t0(t){var e=pn(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function n0(t){return Qo(Wi(t)).left+t0(t).scrollLeft}function rL(t,e){var n=pn(t),r=Wi(t),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,l=0;if(i){s=i.width,o=i.height;var u=jS();(u||!u&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:o,x:a+n0(t),y:l}}function iL(t){var e,n=Wi(t),r=t0(t),i=(e=t.ownerDocument)==null?void 0:e.body,s=_s(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=_s(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+n0(t),l=-r.scrollTop;return Dr(i||n).direction==="rtl"&&(a+=_s(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function r0(t){var e=Dr(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function VS(t){return["html","body","#document"].indexOf(Pi(t))>=0?t.ownerDocument.body:ir(t)&&r0(t)?t:VS(lh(t))}function Il(t,e){var n;e===void 0&&(e=[]);var r=VS(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=pn(r),o=i?[s].concat(s.visualViewport||[],r0(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(Il(lh(o)))}function kg(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function sL(t,e){var n=Qo(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function N1(t,e,n){return e===NS?kg(rL(t,n)):As(e)?sL(e,n):kg(iL(Wi(t)))}function oL(t){var e=Il(lh(t)),n=["absolute","fixed"].indexOf(Dr(t).position)>=0,r=n&&ir(t)?Ou(t):t;return As(r)?e.filter(function(i){return As(i)&&DS(i,r)&&Pi(i)!=="body"}):[]}function aL(t,e,n,r){var i=e==="clippingParents"?oL(t):[].concat(e),s=[].concat(i,[n]),o=s[0],a=s.reduce(function(l,u){var c=N1(t,u,r);return l.top=_s(c.top,l.top),l.right=cf(c.right,l.right),l.bottom=cf(c.bottom,l.bottom),l.left=_s(c.left,l.left),l},N1(t,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function FS(t){var e=t.reference,n=t.element,r=t.placement,i=r?rr(r):null,s=r?Yo(r):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case nn:l={x:o,y:e.y-n.height};break;case Sn:l={x:o,y:e.y+e.height};break;case bn:l={x:e.x+e.width,y:a};break;case rn:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var u=i?e0(i):null;if(u!=null){var c=u==="y"?"height":"width";switch(s){case Ko:l[u]=l[u]-(e[c]/2-n[c]/2);break;case Zl:l[u]=l[u]+(e[c]/2-n[c]/2);break}}return l}function eu(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,s=n.strategy,o=s===void 0?t.strategy:s,a=n.boundary,l=a===void 0?A4:a,u=n.rootBoundary,c=u===void 0?NS:u,d=n.elementContext,h=d===void 0?qa:d,p=n.altBoundary,m=p===void 0?!1:p,E=n.padding,_=E===void 0?0:E,v=MS(typeof _!="number"?_:$S(_,Nu)),g=h===qa?P4:qa,w=t.rects.popper,T=t.elements[m?g:h],x=aL(As(T)?T:T.contextElement||Wi(t.elements.popper),l,c,o),I=Qo(t.elements.reference),k=FS({reference:I,element:w,strategy:"absolute",placement:i}),S=kg(Object.assign({},w,k)),O=h===qa?S:I,j={top:x.top-O.top+v.top,bottom:O.bottom-x.bottom+v.bottom,left:x.left-O.left+v.left,right:O.right-x.right+v.right},X=t.modifiersData.offset;if(h===qa&&X){var ae=X[i];Object.keys(j).forEach(function(P){var N=[bn,Sn].indexOf(P)>=0?1:-1,z=[nn,Sn].indexOf(P)>=0?"y":"x";j[P]+=ae[z]*N})}return j}function lL(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?OS:l,c=Yo(r),d=c?a?R1:R1.filter(function(m){return Yo(m)===c}):Nu,h=d.filter(function(m){return u.indexOf(m)>=0});h.length===0&&(h=d);var p=h.reduce(function(m,E){return m[E]=eu(t,{placement:E,boundary:i,rootBoundary:s,padding:o})[rr(E)],m},{});return Object.keys(p).sort(function(m,E){return p[m]-p[E]})}function uL(t){if(rr(t)===Xv)return[];var e=gd(t);return[P1(t),e,P1(e)]}function cL(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,u=n.padding,c=n.boundary,d=n.rootBoundary,h=n.altBoundary,p=n.flipVariations,m=p===void 0?!0:p,E=n.allowedAutoPlacements,_=e.options.placement,v=rr(_),g=v===_,w=l||(g||!m?[gd(_)]:uL(_)),T=[_].concat(w).reduce(function(Ee,de){return Ee.concat(rr(de)===Xv?lL(e,{placement:de,boundary:c,rootBoundary:d,padding:u,flipVariations:m,allowedAutoPlacements:E}):de)},[]),x=e.rects.reference,I=e.rects.popper,k=new Map,S=!0,O=T[0],j=0;j<T.length;j++){var X=T[j],ae=rr(X),P=Yo(X)===Ko,N=[nn,Sn].indexOf(ae)>=0,z=N?"width":"height",W=eu(e,{placement:X,boundary:c,rootBoundary:d,altBoundary:h,padding:u}),G=N?P?bn:rn:P?Sn:nn;x[z]>I[z]&&(G=gd(G));var R=gd(G),U=[];if(s&&U.push(W[ae]<=0),a&&U.push(W[G]<=0,W[R]<=0),U.every(function(Ee){return Ee})){O=X,S=!1;break}k.set(X,U)}if(S)for(var q=m?3:1,ne=function(de){var Te=T.find(function(nt){var rt=k.get(nt);if(rt)return rt.slice(0,de).every(function(Qt){return Qt})});if(Te)return O=Te,"break"},le=q;le>0;le--){var Ie=ne(le);if(Ie==="break")break}e.placement!==O&&(e.modifiersData[r]._skip=!0,e.placement=O,e.reset=!0)}}const dL={name:"flip",enabled:!0,phase:"main",fn:cL,requiresIfExists:["offset"],data:{_skip:!1}};function O1(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function j1(t){return[nn,bn,Sn,rn].some(function(e){return t[e]>=0})}function fL(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=eu(e,{elementContext:"reference"}),a=eu(e,{altBoundary:!0}),l=O1(o,r),u=O1(a,i,s),c=j1(l),d=j1(u);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}const hL={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:fL};function pL(t,e,n){var r=rr(t),i=[rn,nn].indexOf(r)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[rn,bn].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function mL(t){var e=t.state,n=t.options,r=t.name,i=n.offset,s=i===void 0?[0,0]:i,o=OS.reduce(function(c,d){return c[d]=pL(d,e.rects,s),c},{}),a=o[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=o}const gL={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:mL};function yL(t){var e=t.state,n=t.name;e.modifiersData[n]=FS({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const vL={name:"popperOffsets",enabled:!0,phase:"read",fn:yL,data:{}};function _L(t){return t==="x"?"y":"x"}function wL(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,u=n.rootBoundary,c=n.altBoundary,d=n.padding,h=n.tether,p=h===void 0?!0:h,m=n.tetherOffset,E=m===void 0?0:m,_=eu(e,{boundary:l,rootBoundary:u,padding:d,altBoundary:c}),v=rr(e.placement),g=Yo(e.placement),w=!g,T=e0(v),x=_L(T),I=e.modifiersData.popperOffsets,k=e.rects.reference,S=e.rects.popper,O=typeof E=="function"?E(Object.assign({},e.rects,{placement:e.placement})):E,j=typeof O=="number"?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),X=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,ae={x:0,y:0};if(I){if(s){var P,N=T==="y"?nn:rn,z=T==="y"?Sn:bn,W=T==="y"?"height":"width",G=I[T],R=G+_[N],U=G-_[z],q=p?-S[W]/2:0,ne=g===Ko?k[W]:S[W],le=g===Ko?-S[W]:-k[W],Ie=e.elements.arrow,Ee=p&&Ie?Zv(Ie):{width:0,height:0},de=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:LS(),Te=de[N],nt=de[z],rt=Tl(0,k[W],Ee[W]),Qt=w?k[W]/2-q-rt-Te-j.mainAxis:ne-rt-Te-j.mainAxis,on=w?-k[W]/2+q+rt+nt+j.mainAxis:le+rt+nt+j.mainAxis,ct=e.elements.arrow&&Ou(e.elements.arrow),Js=ct?T==="y"?ct.clientTop||0:ct.clientLeft||0:0,Qr=(P=X==null?void 0:X[T])!=null?P:0,mr=G+Qt-Qr-Js,be=G+on-Qr,Ji=Tl(p?cf(R,mr):R,G,p?_s(U,be):U);I[T]=Ji,ae[T]=Ji-G}if(a){var Yr,op=T==="x"?nn:rn,ap=T==="x"?Sn:bn,gr=I[x],Zs=x==="y"?"height":"width",fc=gr+_[op],Oa=gr-_[ap],ja=[nn,rn].indexOf(v)!==-1,pe=(Yr=X==null?void 0:X[x])!=null?Yr:0,yr=ja?fc:gr-k[Zs]-S[Zs]-pe+j.altAxis,Da=ja?gr+k[Zs]+S[Zs]-pe-j.altAxis:Oa,sw=p&&ja?H4(yr,gr,Da):Tl(p?yr:fc,gr,p?Da:Oa);I[x]=sw,ae[x]=sw-gr}e.modifiersData[r]=ae}}const EL={name:"preventOverflow",enabled:!0,phase:"main",fn:wL,requiresIfExists:["offset"]};function TL(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function IL(t){return t===pn(t)||!ir(t)?t0(t):TL(t)}function kL(t){var e=t.getBoundingClientRect(),n=Go(e.width)/t.offsetWidth||1,r=Go(e.height)/t.offsetHeight||1;return n!==1||r!==1}function xL(t,e,n){n===void 0&&(n=!1);var r=ir(e),i=ir(e)&&kL(e),s=Wi(e),o=Qo(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((Pi(e)!=="body"||r0(s))&&(a=IL(e)),ir(e)?(l=Qo(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=n0(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function SL(t){var e=new Map,n=new Set,r=[];t.forEach(function(s){e.set(s.name,s)});function i(s){n.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),r.push(s)}return t.forEach(function(s){n.has(s.name)||i(s)}),r}function bL(t){var e=SL(t);return z4.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function RL(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function CL(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var D1={placement:"bottom",modifiers:[],strategy:"absolute"};function L1(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function AL(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,s=i===void 0?D1:i;return function(a,l,u){u===void 0&&(u=s);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},D1,s),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],h=!1,p={state:c,setOptions:function(v){var g=typeof v=="function"?v(c.options):v;E(),c.options=Object.assign({},s,c.options,g),c.scrollParents={reference:As(a)?Il(a):a.contextElement?Il(a.contextElement):[],popper:Il(l)};var w=bL(CL([].concat(r,c.options.modifiers)));return c.orderedModifiers=w.filter(function(T){return T.enabled}),m(),p.update()},forceUpdate:function(){if(!h){var v=c.elements,g=v.reference,w=v.popper;if(L1(g,w)){c.rects={reference:xL(g,Ou(w),c.options.strategy==="fixed"),popper:Zv(w)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(j){return c.modifiersData[j.name]=Object.assign({},j.data)});for(var T=0;T<c.orderedModifiers.length;T++){if(c.reset===!0){c.reset=!1,T=-1;continue}var x=c.orderedModifiers[T],I=x.fn,k=x.options,S=k===void 0?{}:k,O=x.name;typeof I=="function"&&(c=I({state:c,options:S,name:O,instance:p})||c)}}}},update:RL(function(){return new Promise(function(_){p.forceUpdate(),_(c)})}),destroy:function(){E(),h=!0}};if(!L1(a,l))return p;p.setOptions(u).then(function(_){!h&&u.onFirstUpdate&&u.onFirstUpdate(_)});function m(){c.orderedModifiers.forEach(function(_){var v=_.name,g=_.options,w=g===void 0?{}:g,T=_.effect;if(typeof T=="function"){var x=T({state:c,name:v,instance:p,options:w}),I=function(){};d.push(x||I)}})}function E(){d.forEach(function(_){return _()}),d=[]}return p}}const PL=AL({defaultModifiers:[hL,vL,J4,eL,gL,dL,EL,G4]}),NL=["enabled","placement","strategy","modifiers"];function OL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const jL={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},DL={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:t})=>()=>{const{reference:e,popper:n}=t.elements;if("removeAttribute"in e){const r=(e.getAttribute("aria-describedby")||"").split(",").filter(i=>i.trim()!==n.id);r.length?e.setAttribute("aria-describedby",r.join(",")):e.removeAttribute("aria-describedby")}},fn:({state:t})=>{var e;const{popper:n,reference:r}=t.elements,i=(e=n.getAttribute("role"))==null?void 0:e.toLowerCase();if(n.id&&i==="tooltip"&&"setAttribute"in r){const s=r.getAttribute("aria-describedby");if(s&&s.split(",").indexOf(n.id)!==-1)return;r.setAttribute("aria-describedby",s?`${s},${n.id}`:n.id)}}},LL=[];function ML(t,e,n={}){let{enabled:r=!0,placement:i="bottom",strategy:s="absolute",modifiers:o=LL}=n,a=OL(n,NL);const l=y.useRef(o),u=y.useRef(),c=y.useCallback(()=>{var _;(_=u.current)==null||_.update()},[]),d=y.useCallback(()=>{var _;(_=u.current)==null||_.forceUpdate()},[]),[h,p]=C4(y.useState({placement:i,update:c,forceUpdate:d,attributes:{},styles:{popper:{},arrow:{}}})),m=y.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:_})=>{const v={},g={};Object.keys(_.elements).forEach(w=>{v[w]=_.styles[w],g[w]=_.attributes[w]}),p({state:_,styles:v,attributes:g,update:c,forceUpdate:d,placement:_.placement})}}),[c,d,p]),E=y.useMemo(()=>(El(l.current,o)||(l.current=o),l.current),[o]);return y.useEffect(()=>{!u.current||!r||u.current.setOptions({placement:i,strategy:s,modifiers:[...E,m,jL]})},[s,i,m,r,E]),y.useEffect(()=>{if(!(!r||t==null||e==null))return u.current=PL(t,e,Object.assign({},a,{placement:i,strategy:s,modifiers:[...E,DL,m]})),()=>{u.current!=null&&(u.current.destroy(),u.current=void 0,p(_=>Object.assign({},_,{attributes:{},styles:{popper:{}}})))}},[r,t,e]),h}function tu(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}var $L=function(){},VL=$L;const FL=xu(VL),M1=()=>{};function zL(t){return t.button===0}function UL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const yd=t=>t&&("current"in t?t.current:t),$1={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function BL(t,e=M1,{disabled:n,clickTrigger:r="click"}={}){const i=y.useRef(!1),s=y.useRef(!1),o=y.useCallback(u=>{const c=yd(t);FL(!!c,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),i.current=!c||UL(u)||!zL(u)||!!tu(c,u.target)||s.current,s.current=!1},[t]),a=st(u=>{const c=yd(t);c&&tu(c,u.target)&&(s.current=!0)}),l=st(u=>{i.current||e(u)});y.useEffect(()=>{var u,c;if(n||t==null)return;const d=wa(yd(t)),h=d.defaultView||window;let p=(u=h.event)!=null?u:(c=h.parent)==null?void 0:c.event,m=null;$1[r]&&(m=kr(d,$1[r],a,!0));const E=kr(d,r,o,!0),_=kr(d,r,g=>{if(g===p){p=void 0;return}l(g)});let v=[];return"ontouchstart"in d.documentElement&&(v=[].slice.call(d.body.children).map(g=>kr(g,"mousemove",M1))),()=>{m==null||m(),E(),_(),v.forEach(g=>g())}},[t,n,r,o,a,l])}function HL(t){const e={};return Array.isArray(t)?(t==null||t.forEach(n=>{e[n.name]=n}),e):t||e}function WL(t={}){return Array.isArray(t)?t:Object.keys(t).map(e=>(t[e].name=e,t[e]))}function qL({enabled:t,enableEvents:e,placement:n,flip:r,offset:i,fixed:s,containerPadding:o,arrowElement:a,popperConfig:l={}}){var u,c,d,h,p;const m=HL(l.modifiers);return Object.assign({},l,{placement:n,enabled:t,strategy:s?"fixed":l.strategy,modifiers:WL(Object.assign({},m,{eventListeners:{enabled:e,options:(u=m.eventListeners)==null?void 0:u.options},preventOverflow:Object.assign({},m.preventOverflow,{options:o?Object.assign({padding:o},(c=m.preventOverflow)==null?void 0:c.options):(d=m.preventOverflow)==null?void 0:d.options}),offset:{options:Object.assign({offset:i},(h=m.offset)==null?void 0:h.options)},arrow:Object.assign({},m.arrow,{enabled:!!a,options:Object.assign({},(p=m.arrow)==null?void 0:p.options,{element:a})}),flip:Object.assign({enabled:!!r},m.flip)}))})}const KL=y.createContext(null),i0=(t,e=null)=>t!=null?String(t):e||null,df=KL,zS=y.createContext(null);zS.displayName="NavContext";const US=zS,GL="data-rr-ui-",QL="rrUi";function uh(t){return`${GL}${t}`}function YL(t){return`${QL}${t}`}const BS=y.createContext(Ea?window:void 0);BS.Provider;function s0(){return y.useContext(BS)}const HS=y.createContext(null);HS.displayName="InputGroupContext";const XL=HS,WS=y.createContext(null);WS.displayName="NavbarContext";const Ta=WS;Y.string,Y.bool,Y.bool,Y.bool,Y.bool;const qS=y.forwardRef(({bsPrefix:t,className:e,fluid:n=!1,rounded:r=!1,roundedCircle:i=!1,thumbnail:s=!1,...o},a)=>(t=H(t,"img"),f.jsx("img",{ref:a,...o,className:L(e,n&&`${t}-fluid`,r&&"rounded",i&&"rounded-circle",s&&`${t}-thumbnail`)})));qS.displayName="Image";const KS=qS,JL={type:Y.string,tooltip:Y.bool,as:Y.elementType},o0=y.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>f.jsx(t,{...i,ref:s,className:L(e,`${n}-${r?"tooltip":"feedback"}`)}));o0.displayName="Feedback";o0.propTypes=JL;const GS=o0,ZL=y.createContext({}),Lr=ZL,QS=y.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:u}=y.useContext(Lr);return e=H(e,"form-check-input"),f.jsx(o,{...a,ref:l,type:r,id:t||u,className:L(n,e,i&&"is-valid",s&&"is-invalid")})});QS.displayName="FormCheckInput";const ch=QS,YS=y.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=y.useContext(Lr);return t=H(t,"form-check-label"),f.jsx("label",{...r,ref:i,htmlFor:n||s,className:L(e,t)})});YS.displayName="FormCheckLabel";const xg=YS,XS=y.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:u,feedbackType:c,className:d,style:h,title:p="",type:m="checkbox",label:E,children:_,as:v="input",...g},w)=>{e=H(e,"form-check"),n=H(n,"form-switch");const{controlId:T}=y.useContext(Lr),x=y.useMemo(()=>({controlId:t||T}),[T,t]),I=!_&&E!=null&&E!==!1||x4(_,xg),k=f.jsx(ch,{...g,type:m==="switch"?"checkbox":m,ref:w,isValid:o,isInvalid:a,disabled:s,as:v});return f.jsx(Lr.Provider,{value:x,children:f.jsx("div",{style:h,className:L(d,I&&e,r&&`${e}-inline`,i&&`${e}-reverse`,m==="switch"&&n),children:_||f.jsxs(f.Fragment,{children:[k,I&&f.jsx(xg,{title:p,children:E}),u&&f.jsx(GS,{type:c,tooltip:l,children:u})]})})})});XS.displayName="FormCheck";const ff=Object.assign(XS,{Input:ch,Label:xg}),JS=y.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:u,as:c="input",...d},h)=>{const{controlId:p}=y.useContext(Lr);return t=H(t,"form-control"),f.jsx(c,{...d,type:e,size:r,ref:h,readOnly:u,id:i||p,className:L(s,l?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,o&&"is-valid",a&&"is-invalid")})});JS.displayName="FormControl";const eM=Object.assign(JS,{Feedback:GS}),ZS=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=H(e,"form-floating"),f.jsx(n,{ref:i,className:L(t,e),...r})));ZS.displayName="FormFloating";const tM=ZS,eb=y.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=y.useMemo(()=>({controlId:t}),[t]);return f.jsx(Lr.Provider,{value:i,children:f.jsx(e,{...n,ref:r})})});eb.displayName="FormGroup";const Gn=eb,tb=y.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=y.useContext(Lr);e=H(e,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const c=L(i,e,r&&"visually-hidden",n&&u);return s=s||l,n?f.jsx(Oo,{ref:a,as:"label",className:c,htmlFor:s,...o}):f.jsx(t,{ref:a,className:c,htmlFor:s,...o})});tb.displayName="FormLabel";const nb=tb,rb=y.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=y.useContext(Lr);return t=H(t,"form-range"),f.jsx("input",{...r,type:"range",ref:i,className:L(e,t),id:n||s})});rb.displayName="FormRange";const nM=rb,ib=y.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:u}=y.useContext(Lr);return t=H(t,"form-select"),f.jsx("select",{...a,size:n,ref:l,className:L(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||u})});ib.displayName="FormSelect";const rM=ib,sb=y.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=H(t,"form-text"),f.jsx(n,{...i,ref:s,className:L(e,t,r&&"text-muted")})));sb.displayName="FormText";const iM=sb,ob=y.forwardRef((t,e)=>f.jsx(ff,{...t,ref:e,type:"switch"}));ob.displayName="Switch";const sM=Object.assign(ob,{Input:ff.Input,Label:ff.Label}),ab=y.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=H(t,"form-floating"),f.jsxs(Gn,{ref:o,className:L(e,t),controlId:r,...s,children:[n,f.jsx("label",{htmlFor:r,children:i})]})));ab.displayName="FloatingLabel";const oM=ab,aM={_ref:Y.any,validated:Y.bool,as:Y.elementType},a0=y.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>f.jsx(n,{...r,ref:i,className:L(t,e&&"was-validated")}));a0.displayName="Form";a0.propTypes=aM;const se=Object.assign(a0,{Group:Gn,Control:eM,Floating:tM,Check:ff,Switch:sM,Label:nb,Text:iM,Range:nM,Select:rM,FloatingLabel:oM}),lb=y.forwardRef(({className:t,bsPrefix:e,as:n="span",...r},i)=>(e=H(e,"input-group-text"),f.jsx(n,{ref:i,className:L(t,e),...r})));lb.displayName="InputGroupText";const l0=lb,lM=t=>f.jsx(l0,{children:f.jsx(ch,{type:"checkbox",...t})}),uM=t=>f.jsx(l0,{children:f.jsx(ch,{type:"radio",...t})}),ub=y.forwardRef(({bsPrefix:t,size:e,hasValidation:n,className:r,as:i="div",...s},o)=>{t=H(t,"input-group");const a=y.useMemo(()=>({}),[]);return f.jsx(XL.Provider,{value:a,children:f.jsx(i,{ref:o,...s,className:L(r,t,e&&`${t}-${e}`,n&&"has-validation")})})});ub.displayName="InputGroup";const cM=Object.assign(ub,{Text:l0,Radio:uM,Checkbox:lM}),dM=y.createContext(null),cb=dM,fM=["as","active","eventKey"];function hM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function db({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const o=y.useContext(df),a=y.useContext(US),l=y.useContext(cb);let u=n;const c={role:i};if(a){!i&&a.role==="tablist"&&(c.role="tab");const d=a.getControllerId(t??null),h=a.getControlledId(t??null);c[uh("event-key")]=t,c.id=d||r,u=n==null&&t!=null?a.activeKey===t:n,(u||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(c["aria-controls"]=h)}return c.role==="tab"&&(c["aria-selected"]=u,u||(c.tabIndex=-1),s&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=st(d=>{s||(e==null||e(d),t!=null&&o&&!d.isPropagationStopped()&&o(t,d))}),[c,{isActive:u}]}const fb=y.forwardRef((t,e)=>{let{as:n=lS,active:r,eventKey:i}=t,s=hM(t,fM);const[o,a]=db(Object.assign({key:i0(i,s.href),active:r},s));return o[uh("active")]=a.isActive,f.jsx(n,Object.assign({},s,o,{ref:e}))});fb.displayName="NavItem";const pM=fb,mM=["as","onSelect","activeKey","role","onKeyDown"];function gM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const V1=()=>{},F1=uh("event-key"),hb=y.forwardRef((t,e)=>{let{as:n="div",onSelect:r,activeKey:i,role:s,onKeyDown:o}=t,a=gM(t,mM);const l=R4(),u=y.useRef(!1),c=y.useContext(df),d=y.useContext(cb);let h,p;d&&(s=s||"tablist",i=d.activeKey,h=d.getControlledId,p=d.getControllerId);const m=y.useRef(null),E=w=>{const T=m.current;if(!T)return null;const x=ts(T,`[${F1}]:not([aria-disabled=true])`),I=T.querySelector("[aria-selected=true]");if(!I||I!==document.activeElement)return null;const k=x.indexOf(I);if(k===-1)return null;let S=k+w;return S>=x.length&&(S=0),S<0&&(S=x.length-1),x[S]},_=(w,T)=>{w!=null&&(r==null||r(w,T),c==null||c(w,T))},v=w=>{if(o==null||o(w),!d)return;let T;switch(w.key){case"ArrowLeft":case"ArrowUp":T=E(-1);break;case"ArrowRight":case"ArrowDown":T=E(1);break;default:return}T&&(w.preventDefault(),_(T.dataset[YL("EventKey")]||null,w),u.current=!0,l())};y.useEffect(()=>{if(m.current&&u.current){const w=m.current.querySelector(`[${F1}][aria-selected=true]`);w==null||w.focus()}u.current=!1});const g=Hi(e,m);return f.jsx(df.Provider,{value:_,children:f.jsx(US.Provider,{value:{role:s,activeKey:i0(i),getControlledId:h||V1,getControllerId:p||V1},children:f.jsx(n,Object.assign({},a,{onKeyDown:v,ref:g,role:s}))})})});hb.displayName="Nav";const yM=Object.assign(hb,{Item:pM});var Nc;function z1(t){if((!Nc&&Nc!==0||t)&&Ea){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),Nc=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return Nc}function Lp(t){t===void 0&&(t=wa());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function vM(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const U1=uh("modal-open");class _M{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return vM(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(Cr(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(U1,""),Cr(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(U1),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const u0=_M,Mp=(t,e)=>Ea?t==null?(e||wa()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function Sg(t,e){const n=s0(),[r,i]=y.useState(()=>Mp(t,n==null?void 0:n.document));if(!r){const s=Mp(t);s&&i(s)}return y.useEffect(()=>{e&&r&&e(r)},[e,r]),y.useEffect(()=>{const s=Mp(t);s!==r&&i(s)},[t,r]),r}function wM({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=y.useRef(null),o=y.useRef(e),a=st(n);y.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const l=Hi(s,t.ref),u=y.cloneElement(t,{ref:l});return e?u:i||!o.current&&r?null:u}function EM({in:t,onTransition:e}){const n=y.useRef(null),r=y.useRef(!0),i=st(e);return uf(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),uf(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function TM({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=y.useState(!e);e&&s&&o(!1);const a=EM({in:!!e,onTransition:u=>{const c=()=>{u.isStale()||(u.in?r==null||r(u.element,u.initial):(o(!0),n==null||n(u.element)))};Promise.resolve(i(u)).then(c,d=>{throw u.in||o(!0),d})}}),l=Hi(a,t.ref);return s&&!e?null:y.cloneElement(t,{ref:l})}function bg(t,e,n){return t?f.jsx(t,Object.assign({},n)):e?f.jsx(TM,Object.assign({},n,{transition:e})):f.jsx(wM,Object.assign({},n))}function pb(t){return t.code==="Escape"||t.keyCode===27}const IM=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function kM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let $p;function xM(t){return $p||($p=new u0({ownerDocument:t==null?void 0:t.document})),$p}function SM(t){const e=s0(),n=t||xM(e),r=y.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:y.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:y.useCallback(i=>{r.current.backdrop=i},[])})}const mb=y.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:d,runTransition:h,backdropTransition:p,runBackdropTransition:m,autoFocus:E=!0,enforceFocus:_=!0,restoreFocus:v=!0,restoreFocusOptions:g,renderDialog:w,renderBackdrop:T=be=>f.jsx("div",Object.assign({},be)),manager:x,container:I,onShow:k,onHide:S=()=>{},onExit:O,onExited:j,onExiting:X,onEnter:ae,onEntering:P,onEntered:N}=t,z=kM(t,IM);const W=s0(),G=Sg(I),R=SM(x),U=qv(),q=ZD(n),[ne,le]=y.useState(!n),Ie=y.useRef(null);y.useImperativeHandle(e,()=>R,[R]),Ea&&!q&&n&&(Ie.current=Lp(W==null?void 0:W.document)),n&&ne&&le(!1);const Ee=st(()=>{if(R.add(),on.current=kr(document,"keydown",rt),Qt.current=kr(document,"focus",()=>setTimeout(Te),!0),k&&k(),E){var be,Ji;const Yr=Lp((be=(Ji=R.dialog)==null?void 0:Ji.ownerDocument)!=null?be:W==null?void 0:W.document);R.dialog&&Yr&&!tu(R.dialog,Yr)&&(Ie.current=Yr,R.dialog.focus())}}),de=st(()=>{if(R.remove(),on.current==null||on.current(),Qt.current==null||Qt.current(),v){var be;(be=Ie.current)==null||be.focus==null||be.focus(g),Ie.current=null}});y.useEffect(()=>{!n||!G||Ee()},[n,G,Ee]),y.useEffect(()=>{ne&&de()},[ne,de]),Yv(()=>{de()});const Te=st(()=>{if(!_||!U()||!R.isTopModal())return;const be=Lp(W==null?void 0:W.document);R.dialog&&be&&!tu(R.dialog,be)&&R.dialog.focus()}),nt=st(be=>{be.target===be.currentTarget&&(u==null||u(be),a===!0&&S())}),rt=st(be=>{l&&pb(be)&&R.isTopModal()&&(c==null||c(be),be.defaultPrevented||S())}),Qt=y.useRef(),on=y.useRef(),ct=(...be)=>{le(!0),j==null||j(...be)};if(!G)return null;const Js=Object.assign({role:r,ref:R.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},z,{style:s,className:i,tabIndex:-1});let Qr=w?w(Js):f.jsx("div",Object.assign({},Js,{children:y.cloneElement(o,{role:"document"})}));Qr=bg(d,h,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:O,onExiting:X,onExited:ct,onEnter:ae,onEntering:P,onEntered:N,children:Qr});let mr=null;return a&&(mr=T({ref:R.setBackdropRef,onClick:nt}),mr=bg(p,m,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:mr})),f.jsx(f.Fragment,{children:as.createPortal(f.jsxs(f.Fragment,{children:[mr,Qr]}),G)})});mb.displayName="Modal";const gb=Object.assign(mb,{Manager:u0});function Rg(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function bM(t,e){t.classList?t.classList.add(e):Rg(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function B1(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function RM(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=B1(t.className,e):t.setAttribute("class",B1(t.className&&t.className.baseVal||"",e))}const no={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class yb extends u0{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,Cr(n,{[e]:`${parseFloat(Cr(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],Cr(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(bM(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";ts(n,no.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),ts(n,no.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),ts(n,no.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();RM(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";ts(n,no.FIXED_CONTENT).forEach(s=>this.restore(r,s)),ts(n,no.STICKY_CONTENT).forEach(s=>this.restore(i,s)),ts(n,no.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let Vp;function vb(t){return Vp||(Vp=new yb(t)),Vp}const _b=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=H(e,"modal-body"),f.jsx(n,{ref:i,className:L(t,e),...r})));_b.displayName="ModalBody";const CM=_b,AM=y.createContext({onHide(){}}),c0=AM,wb=y.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:a,...l},u)=>{t=H(t,"modal");const c=`${t}-dialog`,d=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return f.jsx("div",{...l,ref:u,className:L(c,e,i&&`${t}-${i}`,r&&`${c}-centered`,a&&`${c}-scrollable`,s&&d),children:f.jsx("div",{className:L(`${t}-content`,n),children:o})})});wb.displayName="ModalDialog";const Eb=wb,Tb=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=H(e,"modal-footer"),f.jsx(n,{ref:i,className:L(t,e),...r})));Tb.displayName="ModalFooter";const PM=Tb,NM=y.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=y.useContext(c0),l=st(()=>{a==null||a.onHide(),r==null||r()});return f.jsxs("div",{ref:o,...s,children:[i,n&&f.jsx(fS,{"aria-label":t,variant:e,onClick:l})]})}),Ib=NM,kb=y.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=H(t,"modal-header"),f.jsx(Ib,{ref:s,...i,className:L(e,t),closeLabel:n,closeButton:r})));kb.displayName="ModalHeader";const xb=kb,OM=Pu("h4"),Sb=y.forwardRef(({className:t,bsPrefix:e,as:n=OM,...r},i)=>(e=H(e,"modal-title"),f.jsx(n,{ref:i,className:L(t,e),...r})));Sb.displayName="ModalTitle";const jM=Sb;function DM(t){return f.jsx(Cs,{...t,timeout:null})}function LM(t){return f.jsx(Cs,{...t,timeout:null})}const bb=y.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o=Eb,"aria-labelledby":a,"aria-describedby":l,"aria-label":u,show:c=!1,animation:d=!0,backdrop:h=!0,keyboard:p=!0,onEscapeKeyDown:m,onShow:E,onHide:_,container:v,autoFocus:g=!0,enforceFocus:w=!0,restoreFocus:T=!0,restoreFocusOptions:x,onEntered:I,onExit:k,onExiting:S,onEnter:O,onEntering:j,onExited:X,backdropClassName:ae,manager:P,...N},z)=>{const[W,G]=y.useState({}),[R,U]=y.useState(!1),q=y.useRef(!1),ne=y.useRef(!1),le=y.useRef(null),[Ie,Ee]=Eg(),de=Hi(z,Ee),Te=st(_),nt=Bv();t=H(t,"modal");const rt=y.useMemo(()=>({onHide:Te}),[Te]);function Qt(){return P||vb({isRTL:nt})}function on(pe){if(!Ea)return;const yr=Qt().getScrollbarWidth()>0,Da=pe.scrollHeight>wa(pe).documentElement.clientHeight;G({paddingRight:yr&&!Da?z1():void 0,paddingLeft:!yr&&Da?z1():void 0})}const ct=st(()=>{Ie&&on(Ie.dialog)});Yv(()=>{wg(window,"resize",ct),le.current==null||le.current()});const Js=()=>{q.current=!0},Qr=pe=>{q.current&&Ie&&pe.target===Ie.dialog&&(ne.current=!0),q.current=!1},mr=()=>{U(!0),le.current=iS(Ie.dialog,()=>{U(!1)})},be=pe=>{pe.target===pe.currentTarget&&mr()},Ji=pe=>{if(h==="static"){be(pe);return}if(ne.current||pe.target!==pe.currentTarget){ne.current=!1;return}_==null||_()},Yr=pe=>{p?m==null||m(pe):(pe.preventDefault(),h==="static"&&mr())},op=(pe,yr)=>{pe&&on(pe),O==null||O(pe,yr)},ap=pe=>{le.current==null||le.current(),k==null||k(pe)},gr=(pe,yr)=>{j==null||j(pe,yr),rS(window,"resize",ct)},Zs=pe=>{pe&&(pe.style.display=""),X==null||X(pe),wg(window,"resize",ct)},fc=y.useCallback(pe=>f.jsx("div",{...pe,className:L(`${t}-backdrop`,ae,!d&&"show")}),[d,ae,t]),Oa={...n,...W};Oa.display="block";const ja=pe=>f.jsx("div",{role:"dialog",...pe,style:Oa,className:L(e,t,R&&`${t}-static`,!d&&"show"),onClick:h?Ji:void 0,onMouseUp:Qr,"aria-label":u,"aria-labelledby":a,"aria-describedby":l,children:f.jsx(o,{...N,onMouseDown:Js,className:r,contentClassName:i,children:s})});return f.jsx(c0.Provider,{value:rt,children:f.jsx(gb,{show:c,ref:de,backdrop:h,container:v,keyboard:!0,autoFocus:g,enforceFocus:w,restoreFocus:T,restoreFocusOptions:x,onEscapeKeyDown:Yr,onShow:E,onHide:_,onEnter:op,onEntering:gr,onEntered:I,onExit:ap,onExiting:S,onExited:Zs,manager:Qt(),transition:d?DM:void 0,backdropTransition:d?LM:void 0,renderBackdrop:fc,renderDialog:ja})})});bb.displayName="Modal";const Oc=Object.assign(bb,{Body:CM,Header:xb,Title:jM,Footer:PM,Dialog:Eb,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});var H1={exports:{}},Cg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(o,a,l,u,c,d){var h=u||"<<anonymous>>",p=d||l;if(a[l]==null)return o?new Error("Required "+c+" `"+p+"` was not specified "+("in `"+h+"`.")):null;for(var m=arguments.length,E=Array(m>6?m-6:0),_=6;_<m;_++)E[_-6]=arguments[_];return r.apply(void 0,[a,l,h,c,p].concat(E))}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}t.exports=e.default})(Cg,Cg.exports);var MM=Cg.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=MM,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function u(){for(var c=arguments.length,d=Array(c),h=0;h<c;h++)d[h]=arguments[h];var p=null;return a.forEach(function(m){if(p==null){var E=m.apply(void 0,d);E!=null&&(p=E)}}),p}return(0,r.default)(u)}t.exports=e.default})(H1,H1.exports);const Rb=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=H(e,"nav-item"),f.jsx(n,{ref:i,className:L(t,e),...r})));Rb.displayName="NavItem";const $M=Rb,Cb=y.forwardRef(({bsPrefix:t,className:e,as:n=Gv,active:r,eventKey:i,disabled:s=!1,...o},a)=>{t=H(t,"nav-link");const[l,u]=db({key:i0(i,o.href),active:r,disabled:s,...o});return f.jsx(n,{...o,...l,ref:a,disabled:s,className:L(e,t,s&&"disabled",u.isActive&&"active")})});Cb.displayName="NavLink";const VM=Cb,Ab=y.forwardRef((t,e)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s=!1,justify:o=!1,navbar:a,navbarScroll:l,className:u,activeKey:c,...d}=Uv(t,{activeKey:"onSelect"}),h=H(r,"nav");let p,m,E=!1;const _=y.useContext(Ta),v=y.useContext(_S);return _?(p=_.bsPrefix,E=a??!0):v&&({cardHeaderBsPrefix:m}=v),f.jsx(yM,{as:n,ref:e,activeKey:c,className:L(u,{[h]:!E,[`${p}-nav`]:E,[`${p}-nav-scroll`]:E&&l,[`${m}-${i}`]:!!m,[`${h}-${i}`]:!!i,[`${h}-fill`]:s,[`${h}-justified`]:o}),...d})});Ab.displayName="Nav";const jc=Object.assign(Ab,{Item:$M,Link:VM}),Pb=y.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=H(t,"navbar-brand");const s=n||(r.href?"a":"span");return f.jsx(s,{...r,ref:i,className:L(e,t)})});Pb.displayName="NavbarBrand";const FM=Pb,Nb=y.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=H(e,"navbar-collapse");const i=y.useContext(Ta);return f.jsx(YD,{in:!!(i&&i.expanded),...n,children:f.jsx("div",{ref:r,className:e,children:t})})});Nb.displayName="NavbarCollapse";const zM=Nb,Ob=y.forwardRef(({bsPrefix:t,className:e,children:n,label:r="Toggle navigation",as:i="button",onClick:s,...o},a)=>{t=H(t,"navbar-toggler");const{onToggle:l,expanded:u}=y.useContext(Ta)||{},c=st(d=>{s&&s(d),l&&l()});return i==="button"&&(o.type="button"),f.jsx(i,{...o,ref:a,onClick:c,"aria-label":r,className:L(e,t,!u&&"collapsed"),children:n||f.jsx("span",{className:`${t}-icon`})})});Ob.displayName="NavbarToggle";const UM=Ob,Ag=new WeakMap,W1=(t,e)=>{if(!t||!e)return;const n=Ag.get(e)||new Map;Ag.set(e,n);let r=n.get(t);return r||(r=e.matchMedia(t),r.refCount=0,n.set(r.media,r)),r};function BM(t,e=typeof window>"u"?void 0:window){const n=W1(t,e),[r,i]=y.useState(()=>n?n.matches:!1);return uf(()=>{let s=W1(t,e);if(!s)return i(!1);let o=Ag.get(e);const a=()=>{i(s.matches)};return s.refCount++,s.addListener(a),a(),()=>{s.removeListener(a),s.refCount--,s.refCount<=0&&(o==null||o.delete(s.media)),s=void 0}},[t]),r}function HM(t){const e=Object.keys(t);function n(a,l){return a===l?l:a?`${a} and ${l}`:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){const l=r(a);let u=t[l];return typeof u=="number"?u=`${u-.2}px`:u=`calc(${u} - 0.2px)`,`(max-width: ${u})`}function s(a){let l=t[a];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function o(a,l,u){let c;typeof a=="object"?(c=a,u=l,l=!0):(l=l||!0,c={[a]:l});let d=y.useMemo(()=>Object.entries(c).reduce((h,[p,m])=>((m==="up"||m===!0)&&(h=n(h,s(p))),(m==="down"||m===!0)&&(h=n(h,i(p))),h),""),[JSON.stringify(c)]);return BM(d,u)}return o}const WM=HM({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),jb=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=H(e,"offcanvas-body"),f.jsx(n,{ref:i,className:L(t,e),...r})));jb.displayName="OffcanvasBody";const qM=jb,KM={[On]:"show",[Er]:"show"},Db=y.forwardRef(({bsPrefix:t,className:e,children:n,in:r=!1,mountOnEnter:i=!1,unmountOnExit:s=!1,appear:o=!1,...a},l)=>(t=H(t,"offcanvas"),f.jsx(Wv,{ref:l,addEndListener:Hv,in:r,mountOnEnter:i,unmountOnExit:s,appear:o,...a,childRef:n.ref,children:(u,c)=>y.cloneElement(n,{...c,className:L(e,n.props.className,(u===On||u===Jl)&&`${t}-toggling`,KM[u])})})));Db.displayName="OffcanvasToggling";const GM=Db,Lb=y.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=H(t,"offcanvas-header"),f.jsx(Ib,{ref:s,...i,className:L(e,t),closeLabel:n,closeButton:r})));Lb.displayName="OffcanvasHeader";const QM=Lb,YM=Pu("h5"),Mb=y.forwardRef(({className:t,bsPrefix:e,as:n=YM,...r},i)=>(e=H(e,"offcanvas-title"),f.jsx(n,{ref:i,className:L(t,e),...r})));Mb.displayName="OffcanvasTitle";const XM=Mb;function JM(t){return f.jsx(GM,{...t})}function ZM(t){return f.jsx(Cs,{...t})}const $b=y.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i="start",responsive:s,show:o=!1,backdrop:a=!0,keyboard:l=!0,scroll:u=!1,onEscapeKeyDown:c,onShow:d,onHide:h,container:p,autoFocus:m=!0,enforceFocus:E=!0,restoreFocus:_=!0,restoreFocusOptions:v,onEntered:g,onExit:w,onExiting:T,onEnter:x,onEntering:I,onExited:k,backdropClassName:S,manager:O,renderStaticNode:j=!1,...X},ae)=>{const P=y.useRef();t=H(t,"offcanvas");const{onToggle:N}=y.useContext(Ta)||{},[z,W]=y.useState(!1),G=WM(s||"xs","up");y.useEffect(()=>{W(s?o&&!G:o)},[o,s,G]);const R=st(()=>{N==null||N(),h==null||h()}),U=y.useMemo(()=>({onHide:R}),[R]);function q(){return O||(u?(P.current||(P.current=new yb({handleContainerOverflow:!1})),P.current):vb())}const ne=(de,...Te)=>{de&&(de.style.visibility="visible"),x==null||x(de,...Te)},le=(de,...Te)=>{de&&(de.style.visibility=""),k==null||k(...Te)},Ie=y.useCallback(de=>f.jsx("div",{...de,className:L(`${t}-backdrop`,S)}),[S,t]),Ee=de=>f.jsx("div",{...de,...X,className:L(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return f.jsxs(f.Fragment,{children:[!z&&(s||j)&&Ee({}),f.jsx(c0.Provider,{value:U,children:f.jsx(gb,{show:z,ref:ae,backdrop:a,container:p,keyboard:l,autoFocus:m,enforceFocus:E&&!u,restoreFocus:_,restoreFocusOptions:v,onEscapeKeyDown:c,onShow:d,onHide:R,onEnter:ne,onEntering:I,onEntered:g,onExit:w,onExiting:T,onExited:le,manager:q(),transition:JM,backdropTransition:ZM,renderBackdrop:Ie,renderDialog:Ee})})]})});$b.displayName="Offcanvas";const e3=Object.assign($b,{Body:qM,Header:QM,Title:XM}),Vb=y.forwardRef((t,e)=>{const n=y.useContext(Ta);return f.jsx(e3,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});Vb.displayName="NavbarOffcanvas";const t3=Vb,Fb=y.forwardRef(({className:t,bsPrefix:e,as:n="span",...r},i)=>(e=H(e,"navbar-text"),f.jsx(n,{ref:i,className:L(t,e),...r})));Fb.displayName="NavbarText";const n3=Fb,zb=y.forwardRef((t,e)=>{const{bsPrefix:n,expand:r=!0,variant:i="light",bg:s,fixed:o,sticky:a,className:l,as:u="nav",expanded:c,onToggle:d,onSelect:h,collapseOnSelect:p=!1,...m}=Uv(t,{expanded:"onToggle"}),E=H(n,"navbar"),_=y.useCallback((...w)=>{h==null||h(...w),p&&c&&(d==null||d(!1))},[h,p,c,d]);m.role===void 0&&u!=="nav"&&(m.role="navigation");let v=`${E}-expand`;typeof r=="string"&&(v=`${v}-${r}`);const g=y.useMemo(()=>({onToggle:()=>d==null?void 0:d(!c),bsPrefix:E,expanded:!!c,expand:r}),[E,c,r,d]);return f.jsx(Ta.Provider,{value:g,children:f.jsx(df.Provider,{value:_,children:f.jsx(u,{ref:e,...m,className:L(l,E,r&&v,i&&`${E}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});zb.displayName="Navbar";const d0=Object.assign(zb,{Brand:FM,Collapse:zM,Offcanvas:t3,Text:n3,Toggle:UM}),r3=()=>{};function i3(t,e,{disabled:n,clickTrigger:r}={}){const i=e||r3;BL(t,i,{disabled:n,clickTrigger:r});const s=st(o=>{pb(o)&&i(o)});y.useEffect(()=>{if(n||t==null)return;const o=wa(yd(t));let a=(o.defaultView||window).event;const l=kr(o,"keyup",u=>{if(u===a){a=void 0;return}s(u)});return()=>{l()}},[t,n,s])}const Ub=y.forwardRef((t,e)=>{const{flip:n,offset:r,placement:i,containerPadding:s,popperConfig:o={},transition:a,runTransition:l}=t,[u,c]=Eg(),[d,h]=Eg(),p=Hi(c,e),m=Sg(t.container),E=Sg(t.target),[_,v]=y.useState(!t.show),g=ML(E,u,qL({placement:i,enableEvents:!!t.show,containerPadding:s||5,flip:n,offset:r,arrowElement:d,popperConfig:o}));t.show&&_&&v(!1);const w=(...X)=>{v(!0),t.onExited&&t.onExited(...X)},T=t.show||!_;if(i3(u,t.onHide,{disabled:!t.rootClose||t.rootCloseDisabled,clickTrigger:t.rootCloseEvent}),!T)return null;const{onExit:x,onExiting:I,onEnter:k,onEntering:S,onEntered:O}=t;let j=t.children(Object.assign({},g.attributes.popper,{style:g.styles.popper,ref:p}),{popper:g,placement:i,show:!!t.show,arrowProps:Object.assign({},g.attributes.arrow,{style:g.styles.arrow,ref:h})});return j=bg(a,l,{in:!!t.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:j,onExit:x,onExiting:I,onExited:w,onEnter:k,onEntering:S,onEntered:O}),m?as.createPortal(j,m):null});Ub.displayName="Overlay";const s3=Ub,Bb=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=H(e,"popover-header"),f.jsx(n,{ref:i,className:L(t,e),...r})));Bb.displayName="PopoverHeader";const o3=Bb,Hb=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=H(e,"popover-body"),f.jsx(n,{ref:i,className:L(t,e),...r})));Hb.displayName="PopoverBody";const Wb=Hb;function qb(t,e){let n=t;return t==="left"?n=e?"end":"start":t==="right"&&(n=e?"start":"end"),n}function Kb(t="absolute"){return{position:t,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const a3=y.forwardRef(({bsPrefix:t,placement:e="right",className:n,style:r,children:i,body:s,arrowProps:o,hasDoneInitialMeasure:a,popper:l,show:u,...c},d)=>{const h=H(t,"popover"),p=Bv(),[m]=(e==null?void 0:e.split("-"))||[],E=qb(m,p);let _=r;return u&&!a&&(_={...r,...Kb(l==null?void 0:l.strategy)}),f.jsxs("div",{ref:d,role:"tooltip",style:_,"x-placement":m,className:L(n,h,m&&`bs-popover-${E}`),...c,children:[f.jsx("div",{className:"popover-arrow",...o}),s?f.jsx(Wb,{children:i}):i]})}),l3=Object.assign(a3,{Header:o3,Body:Wb,POPPER_OFFSET:[0,8]}),Gb=y.forwardRef(({bsPrefix:t,placement:e="right",className:n,style:r,children:i,arrowProps:s,hasDoneInitialMeasure:o,popper:a,show:l,...u},c)=>{t=H(t,"tooltip");const d=Bv(),[h]=(e==null?void 0:e.split("-"))||[],p=qb(h,d);let m=r;return l&&!o&&(m={...r,...Kb(a==null?void 0:a.strategy)}),f.jsxs("div",{ref:c,style:m,role:"tooltip","x-placement":h,className:L(n,t,`bs-tooltip-${p}`),...u,children:[f.jsx("div",{className:"tooltip-arrow",...s}),f.jsx("div",{className:`${t}-inner`,children:i})]})});Gb.displayName="Tooltip";const Qb=Object.assign(Gb,{TOOLTIP_OFFSET:[0,6]});function u3(t){const e=y.useRef(null),n=H(void 0,"popover"),r=H(void 0,"tooltip"),i=y.useMemo(()=>({name:"offset",options:{offset:()=>{if(t)return t;if(e.current){if(Rg(e.current,n))return l3.POPPER_OFFSET;if(Rg(e.current,r))return Qb.TOOLTIP_OFFSET}return[0,0]}}}),[t,n,r]);return[e,[i]]}function c3(t,e){const{ref:n}=t,{ref:r}=e;t.ref=n.__wrapped||(n.__wrapped=i=>n(lf(i))),e.ref=r.__wrapped||(r.__wrapped=i=>r(lf(i)))}const Yb=y.forwardRef(({children:t,transition:e=Cs,popperConfig:n={},rootClose:r=!1,placement:i="top",show:s=!1,...o},a)=>{const l=y.useRef({}),[u,c]=y.useState(null),[d,h]=u3(o.offset),p=Hi(a,d),m=e===!0?Cs:e||void 0,E=st(_=>{c(_),n==null||n.onFirstUpdate==null||n.onFirstUpdate(_)});return uf(()=>{u&&o.target&&(l.current.scheduleUpdate==null||l.current.scheduleUpdate())},[u,o.target]),y.useEffect(()=>{s||c(null)},[s]),f.jsx(s3,{...o,ref:p,popperConfig:{...n,modifiers:h.concat(n.modifiers||[]),onFirstUpdate:E},transition:m,rootClose:r,placement:i,show:s,children:(_,{arrowProps:v,popper:g,show:w})=>{var T,x;c3(_,v);const I=g==null?void 0:g.placement,k=Object.assign(l.current,{state:g==null?void 0:g.state,scheduleUpdate:g==null?void 0:g.update,placement:I,outOfBoundaries:(g==null||(T=g.state)==null||(x=T.modifiersData.hide)==null?void 0:x.isReferenceHidden)||!1,strategy:n.strategy}),S=!!u;return typeof t=="function"?t({..._,placement:I,show:w,...!e&&w&&{className:"show"},popper:k,arrowProps:v,hasDoneInitialMeasure:S}):y.cloneElement(t,{..._,placement:I,arrowProps:v,popper:k,hasDoneInitialMeasure:S,className:L(t.props.className,!e&&w&&"show"),style:{...t.props.style,..._.style}})}})});Yb.displayName="Overlay";const d3=Yb;function f3(t){return t&&typeof t=="object"?t:{show:t,hide:t}}function q1(t,e,n){const[r]=e,i=r.currentTarget,s=r.relatedTarget||r.nativeEvent[n];(!s||s!==i)&&!tu(i,s)&&t(...e)}Y.oneOf(["click","hover","focus"]);const h3=({trigger:t=["hover","focus"],overlay:e,children:n,popperConfig:r={},show:i,defaultShow:s=!1,onToggle:o,delay:a,placement:l,flip:u=l&&l.indexOf("auto")!==-1,...c})=>{const d=y.useRef(null),h=Hi(d,n.ref),p=I4(),m=y.useRef(""),[E,_]=Yx(i,s,o),v=f3(a),{onFocus:g,onBlur:w,onClick:T}=typeof n!="function"?y.Children.only(n).props:{},x=z=>{h(lf(z))},I=y.useCallback(()=>{if(p.clear(),m.current="show",!v.show){_(!0);return}p.set(()=>{m.current==="show"&&_(!0)},v.show)},[v.show,_,p]),k=y.useCallback(()=>{if(p.clear(),m.current="hide",!v.hide){_(!1);return}p.set(()=>{m.current==="hide"&&_(!1)},v.hide)},[v.hide,_,p]),S=y.useCallback((...z)=>{I(),g==null||g(...z)},[I,g]),O=y.useCallback((...z)=>{k(),w==null||w(...z)},[k,w]),j=y.useCallback((...z)=>{_(!E),T==null||T(...z)},[T,_,E]),X=y.useCallback((...z)=>{q1(I,z,"fromElement")},[I]),ae=y.useCallback((...z)=>{q1(k,z,"toElement")},[k]),P=t==null?[]:[].concat(t),N={ref:x};return P.indexOf("click")!==-1&&(N.onClick=j),P.indexOf("focus")!==-1&&(N.onFocus=S,N.onBlur=O),P.indexOf("hover")!==-1&&(N.onMouseOver=X,N.onMouseOut=ae),f.jsxs(f.Fragment,{children:[typeof n=="function"?n(N):y.cloneElement(n,N),f.jsx(d3,{...c,show:E,onHide:k,flip:u,placement:l,popperConfig:r,target:d.current,children:e})]})},p3=h3,f0=y.forwardRef(({active:t=!1,disabled:e=!1,className:n,style:r,activeLabel:i="(current)",children:s,linkStyle:o,linkClassName:a,...l},u)=>{const c=t||e?"span":Gv;return f.jsx("li",{ref:u,style:r,className:L(n,"page-item",{active:t,disabled:e}),children:f.jsxs(c,{className:L("page-link",a),style:o,...l,children:[s,t&&i&&f.jsx("span",{className:"visually-hidden",children:i})]})})});f0.displayName="PageItem";const m3=f0;function ju(t,e,n=t){const r=y.forwardRef(({children:i,...s},o)=>f.jsxs(f0,{...s,ref:o,children:[f.jsx("span",{"aria-hidden":"true",children:i||e}),f.jsx("span",{className:"visually-hidden",children:n})]}));return r.displayName=t,r}const g3=ju("First","«"),y3=ju("Prev","‹","Previous"),v3=ju("Ellipsis","…","More"),_3=ju("Next","›"),w3=ju("Last","»"),Xb=y.forwardRef(({bsPrefix:t,className:e,size:n,...r},i)=>{const s=H(t,"pagination");return f.jsx("ul",{ref:i,...r,className:L(e,s,n&&`${s}-${n}`)})});Xb.displayName="Pagination";const Jb=Object.assign(Xb,{First:g3,Prev:y3,Ellipsis:v3,Item:m3,Next:_3,Last:w3}),K1=1e3;function E3(t,e,n){const r=(t-e)/(n-e)*100;return Math.round(r*K1)/K1}function G1({min:t,now:e,max:n,label:r,visuallyHidden:i,striped:s,animated:o,className:a,style:l,variant:u,bsPrefix:c,...d},h){return f.jsx("div",{ref:h,...d,role:"progressbar",className:L(a,`${c}-bar`,{[`bg-${u}`]:u,[`${c}-bar-animated`]:o,[`${c}-bar-striped`]:o||s}),style:{width:`${E3(e,t,n)}%`,...l},"aria-valuenow":e,"aria-valuemin":t,"aria-valuemax":n,children:i?f.jsx("span",{className:"visually-hidden",children:r}):r})}const Zb=y.forwardRef(({isChild:t=!1,...e},n)=>{const r={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...e};if(r.bsPrefix=H(r.bsPrefix,"progress"),t)return G1(r,n);const{min:i,now:s,max:o,label:a,visuallyHidden:l,striped:u,animated:c,bsPrefix:d,variant:h,className:p,children:m,...E}=r;return f.jsx("div",{ref:n,...E,className:L(p,d),children:m?k4(m,_=>y.cloneElement(_,{isChild:!0})):G1({min:i,now:s,max:o,label:a,visuallyHidden:l,striped:u,animated:c,bsPrefix:d,variant:h},n)})});Zb.displayName="ProgressBar";const T3=Zb,eR=y.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=H(t,"row"),o=Xx(),a=Jx(),l=`${s}-cols`,u=[];return o.forEach(c=>{const d=r[c];delete r[c];let h;d!=null&&typeof d=="object"?{cols:h}=d:h=d;const p=c!==a?`-${c}`:"";h!=null&&u.push(`${l}${p}-${h}`)}),f.jsx(n,{ref:i,...r,className:L(e,s,...u)})});eR.displayName="Row";const h0=eR,tR=y.forwardRef(({bsPrefix:t,variant:e,animation:n="border",size:r,as:i="div",className:s,...o},a)=>{t=H(t,"spinner");const l=`${t}-${n}`;return f.jsx(i,{ref:a,...o,className:L(s,l,r&&`${l}-${r}`,e&&`text-${e}`)})});tR.displayName="Spinner";const Ni=tR;var Ot=function(){return Ot=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ot.apply(this,arguments)};function p0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nu(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Ce="-ms-",kl="-moz-",ye="-webkit-",nR="comm",dh="rule",m0="decl",I3="@import",rR="@keyframes",k3="@layer",x3=Math.abs,g0=String.fromCharCode,Pg=Object.assign;function S3(t,e){return ht(t,0)^45?(((e<<2^ht(t,0))<<2^ht(t,1))<<2^ht(t,2))<<2^ht(t,3):0}function iR(t){return t.trim()}function _r(t,e){return(t=e.exec(t))?t[0]:t}function oe(t,e,n){return t.replace(e,n)}function vd(t,e){return t.indexOf(e)}function ht(t,e){return t.charCodeAt(e)|0}function Xo(t,e,n){return t.slice(e,n)}function qn(t){return t.length}function sR(t){return t.length}function nl(t,e){return e.push(t),t}function b3(t,e){return t.map(e).join("")}function Q1(t,e){return t.filter(function(n){return!_r(n,e)})}var fh=1,Jo=1,oR=0,Rn=0,Ze=0,Ia="";function hh(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:fh,column:Jo,length:o,return:"",siblings:a}}function ei(t,e){return Pg(hh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ro(t){for(;t.root;)t=ei(t.root,{children:[t]});nl(t,t.siblings)}function R3(){return Ze}function C3(){return Ze=Rn>0?ht(Ia,--Rn):0,Jo--,Ze===10&&(Jo=1,fh--),Ze}function $n(){return Ze=Rn<oR?ht(Ia,Rn++):0,Jo++,Ze===10&&(Jo=1,fh++),Ze}function ws(){return ht(Ia,Rn)}function _d(){return Rn}function ph(t,e){return Xo(Ia,t,e)}function Ng(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function A3(t){return fh=Jo=1,oR=qn(Ia=t),Rn=0,[]}function P3(t){return Ia="",t}function Fp(t){return iR(ph(Rn-1,Og(t===91?t+2:t===40?t+1:t)))}function N3(t){for(;(Ze=ws())&&Ze<33;)$n();return Ng(t)>2||Ng(Ze)>3?"":" "}function O3(t,e){for(;--e&&$n()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return ph(t,_d()+(e<6&&ws()==32&&$n()==32))}function Og(t){for(;$n();)switch(Ze){case t:return Rn;case 34:case 39:t!==34&&t!==39&&Og(Ze);break;case 40:t===41&&Og(t);break;case 92:$n();break}return Rn}function j3(t,e){for(;$n()&&t+Ze!==57;)if(t+Ze===84&&ws()===47)break;return"/*"+ph(e,Rn-1)+"*"+g0(t===47?t:$n())}function D3(t){for(;!Ng(ws());)$n();return ph(t,Rn)}function L3(t){return P3(wd("",null,null,null,[""],t=A3(t),0,[0],t))}function wd(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,p=0,m=0,E=1,_=1,v=1,g=0,w="",T=i,x=s,I=r,k=w;_;)switch(m=g,g=$n()){case 40:if(m!=108&&ht(k,d-1)==58){vd(k+=oe(Fp(g),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:k+=Fp(g);break;case 9:case 10:case 13:case 32:k+=N3(m);break;case 92:k+=O3(_d()-1,7);continue;case 47:switch(ws()){case 42:case 47:nl(M3(j3($n(),_d()),e,n,l),l);break;default:k+="/"}break;case 123*E:a[u++]=qn(k)*v;case 125*E:case 59:case 0:switch(g){case 0:case 125:_=0;case 59+c:v==-1&&(k=oe(k,/\f/g,"")),p>0&&qn(k)-d&&nl(p>32?X1(k+";",r,n,d-1,l):X1(oe(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(nl(I=Y1(k,e,n,u,c,i,a,w,T=[],x=[],d,s),s),g===123)if(c===0)wd(k,e,I,I,T,s,d,a,x);else switch(h===99&&ht(k,3)===110?100:h){case 100:case 108:case 109:case 115:wd(t,I,I,r&&nl(Y1(t,I,I,0,0,i,a,w,i,T=[],d,x),x),i,x,d,a,r?T:x);break;default:wd(k,I,I,I,[""],x,0,a,x)}}u=c=p=0,E=v=1,w=k="",d=o;break;case 58:d=1+qn(k),p=m;default:if(E<1){if(g==123)--E;else if(g==125&&E++==0&&C3()==125)continue}switch(k+=g0(g),g*E){case 38:v=c>0?1:(k+="\f",-1);break;case 44:a[u++]=(qn(k)-1)*v,v=1;break;case 64:ws()===45&&(k+=Fp($n())),h=ws(),c=d=qn(w=k+=D3(_d())),g++;break;case 45:m===45&&qn(k)==2&&(E=0)}}return s}function Y1(t,e,n,r,i,s,o,a,l,u,c,d){for(var h=i-1,p=i===0?s:[""],m=sR(p),E=0,_=0,v=0;E<r;++E)for(var g=0,w=Xo(t,h+1,h=x3(_=o[E])),T=t;g<m;++g)(T=iR(_>0?p[g]+" "+w:oe(w,/&\f/g,p[g])))&&(l[v++]=T);return hh(t,e,n,i===0?dh:a,l,u,c,d)}function M3(t,e,n,r){return hh(t,e,n,nR,g0(R3()),Xo(t,2,-2),0,r)}function X1(t,e,n,r,i){return hh(t,e,n,m0,Xo(t,0,r),Xo(t,r+1,-1),r,i)}function aR(t,e,n){switch(S3(t,e)){case 5103:return ye+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+t+t;case 4789:return kl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+t+kl+t+Ce+t+t;case 5936:switch(ht(t,e+11)){case 114:return ye+t+Ce+oe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ye+t+Ce+oe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ye+t+Ce+oe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ye+t+Ce+t+t;case 6165:return ye+t+Ce+"flex-"+t+t;case 5187:return ye+t+oe(t,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Ce+"flex-$1$2")+t;case 5443:return ye+t+Ce+"flex-item-"+oe(t,/flex-|-self/g,"")+(_r(t,/flex-|baseline/)?"":Ce+"grid-row-"+oe(t,/flex-|-self/g,""))+t;case 4675:return ye+t+Ce+"flex-line-pack"+oe(t,/align-content|flex-|-self/g,"")+t;case 5548:return ye+t+Ce+oe(t,"shrink","negative")+t;case 5292:return ye+t+Ce+oe(t,"basis","preferred-size")+t;case 6060:return ye+"box-"+oe(t,"-grow","")+ye+t+Ce+oe(t,"grow","positive")+t;case 4554:return ye+oe(t,/([^-])(transform)/g,"$1"+ye+"$2")+t;case 6187:return oe(oe(oe(t,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),t,"")+t;case 5495:case 3959:return oe(t,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return oe(oe(t,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+t+t;case 4200:if(!_r(t,/flex-|baseline/))return Ce+"grid-column-align"+Xo(t,e)+t;break;case 2592:case 3360:return Ce+oe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,_r(r.props,/grid-\w+-end/)})?~vd(t+(n=n[e].value),"span")?t:Ce+oe(t,"-start","")+t+Ce+"grid-row-span:"+(~vd(n,"span")?_r(n,/\d+/):+_r(n,/\d+/)-+_r(t,/\d+/))+";":Ce+oe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return _r(r.props,/grid-\w+-start/)})?t:Ce+oe(oe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return oe(t,/(.+)-inline(.+)/,ye+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qn(t)-1-e>6)switch(ht(t,e+1)){case 109:if(ht(t,e+4)!==45)break;case 102:return oe(t,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+kl+(ht(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~vd(t,"stretch")?aR(oe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return oe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return Ce+i+":"+s+u+(o?Ce+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(ht(t,e+6)===121)return oe(t,":",":"+ye)+t;break;case 6444:switch(ht(t,ht(t,14)===45?18:11)){case 120:return oe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(ht(t,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Ce+"$2box$3")+t;case 100:return oe(t,":",":"+Ce)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(t,"scroll-","scroll-snap-")+t}return t}function hf(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function $3(t,e,n,r){switch(t.type){case k3:if(t.children.length)break;case I3:case m0:return t.return=t.return||t.value;case nR:return"";case rR:return t.return=t.value+"{"+hf(t.children,r)+"}";case dh:if(!qn(t.value=t.props.join(",")))return""}return qn(n=hf(t.children,r))?t.return=t.value+"{"+n+"}":""}function V3(t){var e=sR(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function F3(t){return function(e){e.root||(e=e.return)&&t(e)}}function z3(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case m0:t.return=aR(t.value,t.length,n);return;case rR:return hf([ei(t,{value:oe(t.value,"@","@"+ye)})],r);case dh:if(t.length)return b3(n=t.props,function(i){switch(_r(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ro(ei(t,{props:[oe(i,/:(read-\w+)/,":"+kl+"$1")]})),ro(ei(t,{props:[i]})),Pg(t,{props:Q1(n,r)});break;case"::placeholder":ro(ei(t,{props:[oe(i,/:(plac\w+)/,":"+ye+"input-$1")]})),ro(ei(t,{props:[oe(i,/:(plac\w+)/,":"+kl+"$1")]})),ro(ei(t,{props:[oe(i,/:(plac\w+)/,Ce+"input-$1")]})),ro(ei(t,{props:[i]})),Pg(t,{props:Q1(n,r)});break}return""})}}var U3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},an={},Zo=typeof process<"u"&&an!==void 0&&(an.REACT_APP_SC_ATTR||an.SC_ATTR)||"data-styled",y0=typeof window<"u"&&"HTMLElement"in window,B3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&an!==void 0&&an.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&an.REACT_APP_SC_DISABLE_SPEEDY!==""?an.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&an.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&an!==void 0&&an.SC_DISABLE_SPEEDY!==void 0&&an.SC_DISABLE_SPEEDY!==""&&an.SC_DISABLE_SPEEDY!=="false"&&an.SC_DISABLE_SPEEDY),H3={},mh=Object.freeze([]),ea=Object.freeze({});function lR(t,e,n){return n===void 0&&(n=ea),t.theme!==n.theme&&t.theme||e||n.theme}var uR=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),W3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,q3=/(^-|-$)/g;function J1(t){return t.replace(W3,"-").replace(q3,"")}var K3=/(a)(d)/gi,Z1=function(t){return String.fromCharCode(t+(t>25?39:97))};function jg(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Z1(e%52)+n;return(Z1(e%52)+n).replace(K3,"$1-$2")}var zp,Eo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},cR=function(t){return Eo(5381,t)};function dR(t){return jg(cR(t)>>>0)}function G3(t){return t.displayName||t.name||"Component"}function Up(t){return typeof t=="string"&&!0}var fR=typeof Symbol=="function"&&Symbol.for,hR=fR?Symbol.for("react.memo"):60115,Q3=fR?Symbol.for("react.forward_ref"):60112,Y3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},X3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J3=((zp={})[Q3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zp[hR]=pR,zp);function eE(t){return("type"in(e=t)&&e.type.$$typeof)===hR?pR:"$$typeof"in t?J3[t.$$typeof]:Y3;var e}var Z3=Object.defineProperty,e$=Object.getOwnPropertyNames,tE=Object.getOwnPropertySymbols,t$=Object.getOwnPropertyDescriptor,n$=Object.getPrototypeOf,nE=Object.prototype;function mR(t,e,n){if(typeof e!="string"){if(nE){var r=n$(e);r&&r!==nE&&mR(t,r,n)}var i=e$(e);tE&&(i=i.concat(tE(e)));for(var s=eE(t),o=eE(e),a=0;a<i.length;++a){var l=i[a];if(!(l in X3||n&&n[l]||o&&l in o||s&&l in s)){var u=t$(e,l);try{Z3(t,l,u)}catch{}}}}return t}function ta(t){return typeof t=="function"}function v0(t){return typeof t=="object"&&"styledComponentId"in t}function ls(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Dg(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function ru(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Lg(t,e,n){if(n===void 0&&(n=!1),!n&&!ru(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Lg(t[r],e[r]);else if(ru(e))for(var r in e)t[r]=Lg(t[r],e[r]);return t}function _0(t,e){Object.defineProperty(t,"toString",{value:e})}function Du(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var r$=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Du(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Ed=new Map,pf=new Map,Td=1,Dc=function(t){if(Ed.has(t))return Ed.get(t);for(;pf.has(Td);)Td++;var e=Td++;return Ed.set(t,e),pf.set(e,t),e},i$=function(t,e){Td=e+1,Ed.set(t,e),pf.set(e,t)},s$="style[".concat(Zo,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),o$=new RegExp("^".concat(Zo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),a$=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},l$=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(o$);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(i$(c,u),a$(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function u$(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gR=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Zo,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Zo,"active"),r.setAttribute("data-styled-version","6.1.1");var o=u$();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},c$=function(){function t(e){this.element=gR(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Du(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),d$=function(){function t(e){this.element=gR(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),f$=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),rE=y0,h$={isServer:!y0,useCSSOMInjection:!B3},mf=function(){function t(e,n,r){e===void 0&&(e=ea),n===void 0&&(n={});var i=this;this.options=Ot(Ot({},h$),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&y0&&rE&&(rE=!1,function(s){for(var o=document.querySelectorAll(s$),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Zo)!=="active"&&(l$(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),_0(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var h=function(v){return pf.get(v)}(d);if(h===void 0)return"continue";var p=s.names.get(h),m=o.getGroup(d);if(p===void 0||m.length===0)return"continue";var E="".concat(Zo,".g").concat(d,'[id="').concat(h,'"]'),_="";p!==void 0&&p.forEach(function(v){v.length>0&&(_+="".concat(v,","))}),l+="".concat(m).concat(E,'{content:"').concat(_,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return Dc(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ot(Ot({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new f$(i):r?new c$(i):new d$(i)}(this.options),new r$(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Dc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Dc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Dc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),p$=/&/g,m$=/^\s*\/\/.*$/gm;function yR(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=yR(n.children,e)),n})}function g$(t){var e,n,r,i=t===void 0?ea:t,s=i.options,o=s===void 0?ea:s,a=i.plugins,l=a===void 0?mh:a,u=function(h,p,m){return m===n||m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(e):h},c=l.slice();c.push(function(h){h.type===dh&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(p$,n).replace(r,u))}),o.prefix&&c.push(z3),c.push($3);var d=function(h,p,m,E){p===void 0&&(p=""),m===void 0&&(m=""),E===void 0&&(E="&"),e=E,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var _=h.replace(m$,""),v=L3(m||p?"".concat(m," ").concat(p," { ").concat(_," }"):_);o.namespace&&(v=yR(v,o.namespace));var g=[];return hf(v,V3(c.concat(F3(function(w){return g.push(w)})))),g};return d.hash=l.length?l.reduce(function(h,p){return p.name||Du(15),Eo(h,p.name)},5381).toString():"",d}var y$=new mf,Mg=g$(),vR=Qe.createContext({shouldForwardProp:void 0,styleSheet:y$,stylis:Mg});vR.Consumer;Qe.createContext(void 0);function $g(){return y.useContext(vR)}var v$=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Mg);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,_0(this,function(){throw Du(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Mg),this.name+e.hash},t}(),_$=function(t){return t>="A"&&t<="Z"};function iE(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;_$(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var _R=function(t){return t==null||t===!1||t===""},wR=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!_R(s)&&(Array.isArray(s)&&s.isCss||ta(s)?r.push("".concat(iE(i),":"),s,";"):ru(s)?r.push.apply(r,nu(nu(["".concat(i," {")],wR(s),!1),["}"],!1)):r.push("".concat(iE(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in U3||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function xi(t,e,n,r){if(_R(t))return[];if(v0(t))return[".".concat(t.styledComponentId)];if(ta(t)){if(!ta(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return xi(i,e,n,r)}var s;return t instanceof v$?n?(t.inject(n,r),[t.getName(r)]):[t]:ru(t)?wR(t):Array.isArray(t)?Array.prototype.concat.apply(mh,t.map(function(o){return xi(o,e,n,r)})):[t.toString()]}function ER(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ta(n)&&!v0(n))return!1}return!0}var w$=cR("6.1.1"),E$=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ER(e),this.componentId=n,this.baseHash=Eo(w$,n),this.baseStyle=r,mf.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ls(i,this.staticRulesId);else{var s=Dg(xi(this.rules,e,n,r)),o=jg(Eo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ls(i,o),this.staticRulesId=o}else{for(var l=Eo(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var h=Dg(xi(d,e,n,r));l=Eo(l,h+c),u+=h}}if(u){var p=jg(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=ls(i,p)}}return i},t}(),w0=Qe.createContext(void 0);w0.Consumer;var Bp={};function T$(t,e,n){var r=v0(t),i=t,s=!Up(t),o=e.attrs,a=o===void 0?mh:o,l=e.componentId,u=l===void 0?function(T,x){var I=typeof T!="string"?"sc":J1(T);Bp[I]=(Bp[I]||0)+1;var k="".concat(I,"-").concat(dR("6.1.1"+I+Bp[I]));return x?"".concat(x,"-").concat(k):k}(e.displayName,e.parentComponentId):l,c=e.displayName,d=c===void 0?function(T){return Up(T)?"styled.".concat(T):"Styled(".concat(G3(T),")")}(t):c,h=e.displayName&&e.componentId?"".concat(J1(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=e.shouldForwardProp;if(r&&i.shouldForwardProp){var E=i.shouldForwardProp;if(e.shouldForwardProp){var _=e.shouldForwardProp;m=function(T,x){return E(T,x)&&_(T,x)}}else m=E}var v=new E$(n,h,r?i.componentStyle:void 0);function g(T,x){return function(I,k,S){var O=I.attrs,j=I.componentStyle,X=I.defaultProps,ae=I.foldedComponentIds,P=I.styledComponentId,N=I.target,z=Qe.useContext(w0),W=$g(),G=I.shouldForwardProp||W.shouldForwardProp,R=function(Ee,de,Te){for(var nt,rt=Ot(Ot({},de),{className:void 0,theme:Te}),Qt=0;Qt<Ee.length;Qt+=1){var on=ta(nt=Ee[Qt])?nt(rt):nt;for(var ct in on)rt[ct]=ct==="className"?ls(rt[ct],on[ct]):ct==="style"?Ot(Ot({},rt[ct]),on[ct]):on[ct]}return de.className&&(rt.className=ls(rt.className,de.className)),rt}(O,k,lR(k,z,X)||ea),U=R.as||N,q={};for(var ne in R)R[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"||(ne==="forwardedAs"?q.as=R.forwardedAs:G&&!G(ne,U)||(q[ne]=R[ne]));var le=function(Ee,de){var Te=$g(),nt=Ee.generateAndInjectStyles(de,Te.styleSheet,Te.stylis);return nt}(j,R),Ie=ls(ae,P);return le&&(Ie+=" "+le),R.className&&(Ie+=" "+R.className),q[Up(U)&&!uR.has(U)?"class":"className"]=Ie,q.ref=S,y.createElement(U,q)}(w,T,x)}g.displayName=d;var w=Qe.forwardRef(g);return w.attrs=p,w.componentStyle=v,w.displayName=d,w.shouldForwardProp=m,w.foldedComponentIds=r?ls(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=h,w.target=r?i.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(T){this._foldedDefaultProps=r?function(x){for(var I=[],k=1;k<arguments.length;k++)I[k-1]=arguments[k];for(var S=0,O=I;S<O.length;S++)Lg(x,O[S],!0);return x}({},i.defaultProps,T):T}}),_0(w,function(){return".".concat(w.styledComponentId)}),s&&mR(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function sE(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var oE=function(t){return Object.assign(t,{isCss:!0})};function TR(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ta(t)||ru(t)){var r=t;return oE(xi(sE(mh,nu([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?xi(i):oE(xi(sE(i,e)))}function Vg(t,e,n){if(n===void 0&&(n=ea),!e)throw Du(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,TR.apply(void 0,nu([i],s,!1)))};return r.attrs=function(i){return Vg(t,e,Ot(Ot({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Vg(t,e,Ot(Ot({},n),i))},r}var IR=function(t){return Vg(T$,t)},K=IR;uR.forEach(function(t){K[t]=IR(t)});var I$=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=ER(e),mf.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Dg(xi(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&mf.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function k$(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=TR.apply(void 0,nu([t],e,!1)),i="sc-global-".concat(dR(JSON.stringify(r))),s=new I$(r,i),o=function(l){var u=$g(),c=Qe.useContext(w0),d=Qe.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),Qe.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,h){if(s.isStatic)s.renderStyles(l,H3,c,h);else{var p=Ot(Ot({},u),{theme:lR(u,d,o.defaultProps)});s.renderStyles(l,p,c,h)}}return Qe.memo(o)}const x$=K.footer`
    background-color: rgb(33, 37, 41);
    color: white;
    padding: 10px 0;

    margin-top: 30px;

    p {
        margin: 8px 0;
    }

    .links_container {
        display: flex;
        justify-content: center;
        gap: 16px
    }
`;function aE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?aE(Object(n),!0).forEach(function(r){ut(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):aE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function gf(t){"@babel/helpers - typeof";return gf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gf(t)}function S$(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lE(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b$(t,e,n){return e&&lE(t.prototype,e),n&&lE(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E0(t,e){return C$(t)||P$(t,e)||kR(t,e)||O$()}function Lu(t){return R$(t)||A$(t)||kR(t)||N$()}function R$(t){if(Array.isArray(t))return Fg(t)}function C$(t){if(Array.isArray(t))return t}function A$(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function P$(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function kR(t,e){if(t){if(typeof t=="string")return Fg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fg(t,e)}}function Fg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function N$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var uE=function(){},T0={},xR={},SR=null,bR={mark:uE,measure:uE};try{typeof window<"u"&&(T0=window),typeof document<"u"&&(xR=document),typeof MutationObserver<"u"&&(SR=MutationObserver),typeof performance<"u"&&(bR=performance)}catch{}var j$=T0.navigator||{},cE=j$.userAgent,dE=cE===void 0?"":cE,Oi=T0,De=xR,fE=SR,Lc=bR;Oi.document;var Kr=!!De.documentElement&&!!De.head&&typeof De.addEventListener=="function"&&typeof De.createElement=="function",RR=~dE.indexOf("MSIE")||~dE.indexOf("Trident/"),Mc,$c,Vc,Fc,zc,Mr="___FONT_AWESOME___",zg=16,CR="fa",AR="svg-inline--fa",Ps="data-fa-i2svg",Ug="data-fa-pseudo-element",D$="data-fa-pseudo-element-pending",I0="data-prefix",k0="data-icon",hE="fontawesome-i2svg",L$="async",M$=["HTML","HEAD","STYLE","SCRIPT"],PR=function(){try{return!0}catch{return!1}}(),Ae="classic",Be="sharp",x0=[Ae,Be];function Mu(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ae]}})}var iu=Mu((Mc={},ut(Mc,Ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ut(Mc,Be,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Mc)),su=Mu(($c={},ut($c,Ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ut($c,Be,{solid:"fass",regular:"fasr",light:"fasl"}),$c)),ou=Mu((Vc={},ut(Vc,Ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ut(Vc,Be,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Vc)),$$=Mu((Fc={},ut(Fc,Ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ut(Fc,Be,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Fc)),V$=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,NR="fa-layers-text",F$=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,z$=Mu((zc={},ut(zc,Ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ut(zc,Be,{900:"fass",400:"fasr",300:"fasl"}),zc)),OR=[1,2,3,4,5,6,7,8,9,10],U$=OR.concat([11,12,13,14,15,16,17,18,19,20]),B$=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],us={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},au=new Set;Object.keys(su[Ae]).map(au.add.bind(au));Object.keys(su[Be]).map(au.add.bind(au));var H$=[].concat(x0,Lu(au),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",us.GROUP,us.SWAP_OPACITY,us.PRIMARY,us.SECONDARY]).concat(OR.map(function(t){return"".concat(t,"x")})).concat(U$.map(function(t){return"w-".concat(t)})),xl=Oi.FontAwesomeConfig||{};function W$(t){var e=De.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function q$(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(De&&typeof De.querySelector=="function"){var K$=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];K$.forEach(function(t){var e=E0(t,2),n=e[0],r=e[1],i=q$(W$(n));i!=null&&(xl[r]=i)})}var jR={styleDefault:"solid",familyDefault:"classic",cssPrefix:CR,replacementClass:AR,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xl.familyPrefix&&(xl.cssPrefix=xl.familyPrefix);var na=M(M({},jR),xl);na.autoReplaceSvg||(na.observeMutations=!1);var B={};Object.keys(jR).forEach(function(t){Object.defineProperty(B,t,{enumerable:!0,set:function(n){na[t]=n,Sl.forEach(function(r){return r(B)})},get:function(){return na[t]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(e){na.cssPrefix=e,Sl.forEach(function(n){return n(B)})},get:function(){return na.cssPrefix}});Oi.FontAwesomeConfig=B;var Sl=[];function G$(t){return Sl.push(t),function(){Sl.splice(Sl.indexOf(t),1)}}var Jr=zg,Yn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Q$(t){if(!(!t||!Kr)){var e=De.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=De.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return De.head.insertBefore(e,r),t}}var Y$="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lu(){for(var t=12,e="";t-- >0;)e+=Y$[Math.random()*62|0];return e}function ka(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function S0(t){return t.classList?ka(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function DR(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function X$(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(DR(t[n]),'" ')},"").trim()}function gh(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function b0(t){return t.size!==Yn.size||t.x!==Yn.x||t.y!==Yn.y||t.rotate!==Yn.rotate||t.flipX||t.flipY}function J$(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Z$(t){var e=t.transform,n=t.width,r=n===void 0?zg:n,i=t.height,s=i===void 0?zg:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&RR?l+="translate(".concat(e.x/Jr-r/2,"em, ").concat(e.y/Jr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Jr,"em), calc(-50% + ").concat(e.y/Jr,"em)) "):l+="translate(".concat(e.x/Jr,"em, ").concat(e.y/Jr,"em) "),l+="scale(".concat(e.size/Jr*(e.flipX?-1:1),", ").concat(e.size/Jr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var e5=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function LR(){var t=CR,e=AR,n=B.cssPrefix,r=B.replacementClass,i=e5;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var pE=!1;function Hp(){B.autoAddCss&&!pE&&(Q$(LR()),pE=!0)}var t5={mixout:function(){return{dom:{css:LR,insertCss:Hp}}},hooks:function(){return{beforeDOMElementCreation:function(){Hp()},beforeI2svg:function(){Hp()}}}},$r=Oi||{};$r[Mr]||($r[Mr]={});$r[Mr].styles||($r[Mr].styles={});$r[Mr].hooks||($r[Mr].hooks={});$r[Mr].shims||($r[Mr].shims=[]);var jn=$r[Mr],MR=[],n5=function t(){De.removeEventListener("DOMContentLoaded",t),yf=1,MR.map(function(e){return e()})},yf=!1;Kr&&(yf=(De.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(De.readyState),yf||De.addEventListener("DOMContentLoaded",n5));function r5(t){Kr&&(yf?setTimeout(t,0):MR.push(t))}function $u(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?DR(t):"<".concat(e," ").concat(X$(r),">").concat(s.map($u).join(""),"</").concat(e,">")}function mE(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var i5=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Wp=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?i5(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function s5(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Bg(t){var e=s5(t);return e.length===1?e[0].toString(16):null}function o5(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function gE(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Hg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=gE(e);typeof jn.hooks.addPack=="function"&&!i?jn.hooks.addPack(t,gE(e)):jn.styles[t]=M(M({},jn.styles[t]||{}),s),t==="fas"&&Hg("fa",e)}var Uc,Bc,Hc,To=jn.styles,a5=jn.shims,l5=(Uc={},ut(Uc,Ae,Object.values(ou[Ae])),ut(Uc,Be,Object.values(ou[Be])),Uc),R0=null,$R={},VR={},FR={},zR={},UR={},u5=(Bc={},ut(Bc,Ae,Object.keys(iu[Ae])),ut(Bc,Be,Object.keys(iu[Be])),Bc);function c5(t){return~H$.indexOf(t)}function d5(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!c5(i)?i:null}var BR=function(){var e=function(s){return Wp(To,function(o,a,l){return o[l]=Wp(a,s,{}),o},{})};$R=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),VR=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),UR=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in To||B.autoFetchSvg,r=Wp(a5,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});FR=r.names,zR=r.unicodes,R0=yh(B.styleDefault,{family:B.familyDefault})};G$(function(t){R0=yh(t.styleDefault,{family:B.familyDefault})});BR();function C0(t,e){return($R[t]||{})[e]}function f5(t,e){return(VR[t]||{})[e]}function cs(t,e){return(UR[t]||{})[e]}function HR(t){return FR[t]||{prefix:null,iconName:null}}function h5(t){var e=zR[t],n=C0("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ji(){return R0}var A0=function(){return{prefix:null,iconName:null,rest:[]}};function yh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ae:n,i=iu[r][t],s=su[r][t]||su[r][i],o=t in jn.styles?t:null;return s||o||null}var yE=(Hc={},ut(Hc,Ae,Object.keys(ou[Ae])),ut(Hc,Be,Object.keys(ou[Be])),Hc);function vh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},ut(e,Ae,"".concat(B.cssPrefix,"-").concat(Ae)),ut(e,Be,"".concat(B.cssPrefix,"-").concat(Be)),e),o=null,a=Ae;(t.includes(s[Ae])||t.some(function(u){return yE[Ae].includes(u)}))&&(a=Ae),(t.includes(s[Be])||t.some(function(u){return yE[Be].includes(u)}))&&(a=Be);var l=t.reduce(function(u,c){var d=d5(B.cssPrefix,c);if(To[c]?(c=l5[a].includes(c)?$$[a][c]:c,o=c,u.prefix=c):u5[a].indexOf(c)>-1?(o=c,u.prefix=yh(c,{family:a})):d?u.iconName=d:c!==B.replacementClass&&c!==s[Ae]&&c!==s[Be]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?HR(u.iconName):{},p=cs(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||p||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!To.far&&To.fas&&!B.autoFetchSvg&&(u.prefix="fas")}return u},A0());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Be&&(To.fass||B.autoFetchSvg)&&(l.prefix="fass",l.iconName=cs(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ji()||"fas"),l}var p5=function(){function t(){S$(this,t),this.definitions={}}return b$(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),o[a]),Hg(a,o[a]);var l=ou[Ae][a];l&&Hg(l,o[a]),BR()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),vE=[],Io={},jo={},m5=Object.keys(jo);function g5(t,e){var n=e.mixoutsTo;return vE=t,Io={},Object.keys(jo).forEach(function(r){m5.indexOf(r)===-1&&delete jo[r]}),vE.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),gf(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Io[o]||(Io[o]=[]),Io[o].push(s[o])})}r.provides&&r.provides(jo)}),n}function Wg(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Io[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ns(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Io[t]||[];i.forEach(function(s){s.apply(null,n)})}function Vr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return jo[t]?jo[t].apply(null,e):void 0}function qg(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ji();if(e)return e=cs(n,e)||e,mE(WR.definitions,n,e)||mE(jn.styles,n,e)}var WR=new p5,y5=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,Ns("noAuto")},v5={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kr?(Ns("beforeI2svg",e),Vr("pseudoElements2svg",e),Vr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,r5(function(){w5({autoReplaceSvgRoot:n}),Ns("watch",e)})}},_5={icon:function(e){if(e===null)return null;if(gf(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:cs(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=yh(e[0]);return{prefix:r,iconName:cs(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(B.cssPrefix,"-"))>-1||e.match(V$))){var i=vh(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ji(),iconName:cs(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=ji();return{prefix:s,iconName:cs(s,e)||e}}}},vn={noAuto:y5,config:B,dom:v5,parse:_5,library:WR,findIconDefinition:qg,toHtml:$u},w5=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?De:n;(Object.keys(jn.styles).length>0||B.autoFetchSvg)&&Kr&&B.autoReplaceSvg&&vn.dom.i2svg({node:r})};function _h(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return $u(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Kr){var r=De.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function E5(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(b0(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=gh(M(M({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function T5(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(B.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:r}]}]}function P0(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,h=t.watchable,p=h===void 0?!1:h,m=r.found?r:n,E=m.width,_=m.height,v=i==="fak",g=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function(O){return d.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(d.classes).join(" "),w={children:[],attributes:M(M({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:g,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(_)})},T=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(E/_*16*.0625,"em")}:{};p&&(w.attributes[Ps]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||lu())},children:[l]}),delete w.attributes.title);var x=M(M({},w),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:M(M({},T),d.styles)}),I=r.found&&n.found?Vr("generateAbstractMask",x)||{children:[],attributes:{}}:Vr("generateAbstractIcon",x)||{children:[],attributes:{}},k=I.children,S=I.attributes;return x.children=k,x.attributes=S,a?T5(x):E5(x)}function _E(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=M(M(M({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Ps]="");var c=M({},o.styles);b0(i)&&(c.transform=Z$({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=gh(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function I5(t){var e=t.content,n=t.title,r=t.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=gh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var qp=jn.styles;function Kg(t){var e=t[0],n=t[1],r=t.slice(4),i=E0(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(us.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(us.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(us.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var k5={found:!1,width:512,height:512};function x5(t,e){!PR&&!B.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gg(t,e){var n=e;return e==="fa"&&B.styleDefault!==null&&(e=ji()),new Promise(function(r,i){if(Vr("missingIconAbstract"),n==="fa"){var s=HR(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&qp[e]&&qp[e][t]){var o=qp[e][t];return r(Kg(o))}x5(t,e),r(M(M({},k5),{},{icon:B.showMissingIcons&&t?Vr("missingIconAbstract")||{}:{}}))})}var wE=function(){},Qg=B.measurePerformance&&Lc&&Lc.mark&&Lc.measure?Lc:{mark:wE,measure:wE},rl='FA "6.4.2"',S5=function(e){return Qg.mark("".concat(rl," ").concat(e," begins")),function(){return qR(e)}},qR=function(e){Qg.mark("".concat(rl," ").concat(e," ends")),Qg.measure("".concat(rl," ").concat(e),"".concat(rl," ").concat(e," begins"),"".concat(rl," ").concat(e," ends"))},N0={begin:S5,end:qR},Id=function(){};function EE(t){var e=t.getAttribute?t.getAttribute(Ps):null;return typeof e=="string"}function b5(t){var e=t.getAttribute?t.getAttribute(I0):null,n=t.getAttribute?t.getAttribute(k0):null;return e&&n}function R5(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(B.replacementClass)}function C5(){if(B.autoReplaceSvg===!0)return kd.replace;var t=kd[B.autoReplaceSvg];return t||kd.replace}function A5(t){return De.createElementNS("http://www.w3.org/2000/svg",t)}function P5(t){return De.createElement(t)}function KR(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?A5:P5:n;if(typeof t=="string")return De.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(KR(o,{ceFn:r}))}),i}function N5(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var kd={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(KR(i),n)}),n.getAttribute(Ps)===null&&B.keepOriginalSource){var r=De.createComment(N5(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~S0(n).indexOf(B.replacementClass))return kd.replace(e);var i=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===B.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return $u(a)}).join(`
`);n.setAttribute(Ps,""),n.innerHTML=o}};function TE(t){t()}function GR(t,e){var n=typeof e=="function"?e:Id;if(t.length===0)n();else{var r=TE;B.mutateApproach===L$&&(r=Oi.requestAnimationFrame||TE),r(function(){var i=C5(),s=N0.begin("mutate");t.map(i),s(),n()})}}var O0=!1;function QR(){O0=!0}function Yg(){O0=!1}var vf=null;function IE(t){if(fE&&B.observeMutations){var e=t.treeCallback,n=e===void 0?Id:e,r=t.nodeCallback,i=r===void 0?Id:r,s=t.pseudoElementsCallback,o=s===void 0?Id:s,a=t.observeMutationsRoot,l=a===void 0?De:a;vf=new fE(function(u){if(!O0){var c=ji();ka(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!EE(d.addedNodes[0])&&(B.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&B.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&EE(d.target)&&~B$.indexOf(d.attributeName))if(d.attributeName==="class"&&b5(d.target)){var h=vh(S0(d.target)),p=h.prefix,m=h.iconName;d.target.setAttribute(I0,p||c),m&&d.target.setAttribute(k0,m)}else R5(d.target)&&i(d.target)})}}),Kr&&vf.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function O5(){vf&&vf.disconnect()}function j5(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function D5(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=vh(S0(t));return i.prefix||(i.prefix=ji()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=f5(i.prefix,t.innerText)||C0(i.prefix,Bg(t.innerText))),!i.iconName&&B.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function L5(t){var e=ka(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return B.autoA11y&&(n?e["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(r||lu()):(e["aria-hidden"]="true",e.focusable="false")),e}function M5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Yn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function kE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=D5(t),r=n.iconName,i=n.prefix,s=n.rest,o=L5(t),a=Wg("parseNodeAttributes",{},t),l=e.styleParser?j5(t):[];return M({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Yn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var $5=jn.styles;function YR(t){var e=B.autoReplaceSvg==="nest"?kE(t,{styleParser:!1}):kE(t);return~e.extra.classes.indexOf(NR)?Vr("generateLayersText",t,e):Vr("generateSvgReplacementMutation",t,e)}var Di=new Set;x0.map(function(t){Di.add("fa-".concat(t))});Object.keys(iu[Ae]).map(Di.add.bind(Di));Object.keys(iu[Be]).map(Di.add.bind(Di));Di=Lu(Di);function xE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kr)return Promise.resolve();var n=De.documentElement.classList,r=function(d){return n.add("".concat(hE,"-").concat(d))},i=function(d){return n.remove("".concat(hE,"-").concat(d))},s=B.autoFetchSvg?Di:x0.map(function(c){return"fa-".concat(c)}).concat(Object.keys($5));s.includes("fa")||s.push("fa");var o=[".".concat(NR,":not([").concat(Ps,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Ps,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ka(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=N0.begin("onTree"),u=a.reduce(function(c,d){try{var h=YR(d);h&&c.push(h)}catch(p){PR||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){GR(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),d(h)})})}function V5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;YR(t).then(function(n){n&&GR([n],e)})}function F5(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:qg(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:qg(i||{})),t(r,M(M({},n),{},{mask:i}))}}var z5=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Yn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,p=n.titleId,m=p===void 0?null:p,E=n.classes,_=E===void 0?[]:E,v=n.attributes,g=v===void 0?{}:v,w=n.styles,T=w===void 0?{}:w;if(e){var x=e.prefix,I=e.iconName,k=e.icon;return _h(M({type:"icon"},e),function(){return Ns("beforeDOMElementCreation",{iconDefinition:e,params:n}),B.autoA11y&&(h?g["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(m||lu()):(g["aria-hidden"]="true",g.focusable="false")),P0({icons:{main:Kg(k),mask:l?Kg(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:I,transform:M(M({},Yn),i),symbol:o,title:h,maskId:c,titleId:m,extra:{attributes:g,styles:T,classes:_}})})}},U5={mixout:function(){return{icon:F5(z5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=xE,n.nodeCallback=V5,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?De:r,s=n.callback,o=s===void 0?function(){}:s;return xE(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(p,m){Promise.all([Gg(i,a),c.iconName?Gg(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var _=E0(E,2),v=_[0],g=_[1];p([n,P0({icons:{main:v,mask:g},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:h,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=gh(a);l.length>0&&(i.style=l);var u;return b0(o)&&(u=Vr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},B5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return _h({type:"layer"},function(){Ns("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(Lu(s)).join(" ")},children:o}]})}}}},H5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return _h({type:"counter",content:n},function(){return Ns("beforeDOMElementCreation",{content:n,params:r}),I5({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(Lu(a))}})})}}}},W5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Yn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,p=h===void 0?{}:h;return _h({type:"text",content:n},function(){return Ns("beforeDOMElementCreation",{content:n,params:r}),_E({content:n,transform:M(M({},Yn),s),title:a,extra:{attributes:d,styles:p,classes:["".concat(B.cssPrefix,"-layers-text")].concat(Lu(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(RR){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return B.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,_E({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},q5=new RegExp('"',"ug"),SE=[1105920,1112319];function K5(t){var e=t.replace(q5,""),n=o5(e,0),r=n>=SE[0]&&n<=SE[1],i=e.length===2?e[0]===e[1]:!1;return{value:Bg(i?e[0]:e),isSecondary:r||i}}function bE(t,e){var n="".concat(D$).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=ka(t.children),o=s.filter(function(k){return k.getAttribute(Ug)===e})[0],a=Oi.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(F$),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Be:Ae,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?su[h][l[2].toLowerCase()]:z$[h][u],m=K5(d),E=m.value,_=m.isSecondary,v=l[0].startsWith("FontAwesome"),g=C0(p,E),w=g;if(v){var T=h5(E);T.iconName&&T.prefix&&(g=T.iconName,p=T.prefix)}if(g&&!_&&(!o||o.getAttribute(I0)!==p||o.getAttribute(k0)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);var x=M5(),I=x.extra;I.attributes[Ug]=e,Gg(g,p).then(function(k){var S=P0(M(M({},x),{},{icons:{main:k,mask:A0()},prefix:p,iconName:w,extra:I,watchable:!0})),O=De.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(O,t.firstChild):t.appendChild(O),O.outerHTML=S.map(function(j){return $u(j)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function G5(t){return Promise.all([bE(t,"::before"),bE(t,"::after")])}function Q5(t){return t.parentNode!==document.head&&!~M$.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ug)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function RE(t){if(Kr)return new Promise(function(e,n){var r=ka(t.querySelectorAll("*")).filter(Q5).map(G5),i=N0.begin("searchPseudoElements");QR(),Promise.all(r).then(function(){i(),Yg(),e()}).catch(function(){i(),Yg(),n()})})}var Y5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=RE,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?De:r;B.searchPseudoElements&&RE(i)}}},CE=!1,X5={mixout:function(){return{dom:{unwatch:function(){QR(),CE=!0}}}},hooks:function(){return{bootstrap:function(){IE(Wg("mutationObserverCallbacks",{}))},noAuto:function(){O5()},watch:function(n){var r=n.observeMutationsRoot;CE?Yg():IE(Wg("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},AE=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},J5={mixout:function(){return{parse:{transform:function(n){return AE(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=AE(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:d,path:h};return{tag:"g",attributes:M({},p.outer),children:[{tag:"g",attributes:M({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),p.path)}]}]}}}},Kp={x:0,y:0,width:"100%",height:"100%"};function PE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Z5(t){return t.tag==="g"?t.children:[t]}var eV={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?vh(i.split(" ").map(function(o){return o.trim()})):A0();return s.prefix||(s.prefix=ji()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,h=o.icon,p=J$({transform:l,containerWidth:d,iconWidth:u}),m={tag:"rect",attributes:M(M({},Kp),{},{fill:"white"})},E=c.children?{children:c.children.map(PE)}:{},_={tag:"g",attributes:M({},p.inner),children:[PE(M({tag:c.tag,attributes:M(M({},c.attributes),p.path)},E))]},v={tag:"g",attributes:M({},p.outer),children:[_]},g="mask-".concat(a||lu()),w="clip-".concat(a||lu()),T={tag:"mask",attributes:M(M({},Kp),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,v]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Z5(h)},T]};return r.push(x,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(g,")")},Kp)}),{children:r,attributes:i}}}},tV={provides:function(e){var n=!1;Oi.matchMedia&&(n=Oi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},nV={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},rV=[t5,U5,B5,H5,W5,Y5,X5,J5,eV,tV,nV];g5(rV,{mixoutsTo:vn});vn.noAuto;vn.config;vn.library;vn.dom;var Xg=vn.parse;vn.findIconDefinition;vn.toHtml;var iV=vn.icon;vn.layer;vn.text;vn.counter;function NE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function pi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?NE(Object(n),!0).forEach(function(r){ko(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):NE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _f(t){"@babel/helpers - typeof";return _f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_f(t)}function ko(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function sV(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function oV(t,e){if(t==null)return{};var n=sV(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Jg(t){return aV(t)||lV(t)||uV(t)||cV()}function aV(t){if(Array.isArray(t))return Zg(t)}function lV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function uV(t,e){if(t){if(typeof t=="string")return Zg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zg(t,e)}}function Zg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function cV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dV(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,h=t.fixedWidth,p=t.inverse,m=t.border,E=t.listItem,_=t.flip,v=t.size,g=t.rotation,w=t.pull,T=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":p,"fa-border":m,"fa-li":E,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},ko(e,"fa-".concat(v),typeof v<"u"&&v!==null),ko(e,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),ko(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),ko(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(x){return T[x]?x:null}).filter(function(x){return x})}function fV(t){return t=t-0,t===t}function XR(t){return fV(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var hV=["style"];function pV(t){return t.charAt(0).toUpperCase()+t.slice(1)}function mV(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=XR(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[pV(i)]=s:e[i]=s,e},{})}function JR(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return JR(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=mV(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[XR(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=oV(n,hV);return i.attrs.style=pi(pi({},i.attrs.style),o),t.apply(void 0,[e.tag,pi(pi({},i.attrs),a)].concat(Jg(r)))}var ZR=!1;try{ZR=!0}catch{}function gV(){if(!ZR&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function OE(t){if(t&&_f(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xg.icon)return Xg.icon(t);if(t===null)return null;if(t&&_f(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Gp(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ko({},t,e):{}}var xe=Qe.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=OE(n),c=Gp("classes",[].concat(Jg(dV(t)),Jg(s.split(" ")))),d=Gp("transform",typeof t.transform=="string"?Xg.transform(t.transform):t.transform),h=Gp("mask",OE(r)),p=iV(u,pi(pi(pi(pi({},c),d),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return gV("Could not find icon",u),null;var m=p.abstract,E={ref:e};return Object.keys(t).forEach(function(_){xe.defaultProps.hasOwnProperty(_)||(E[_]=t[_])}),yV(m[0],E)});xe.displayName="FontAwesomeIcon";xe.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};xe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var yV=JR.bind(null,Qe.createElement),vV={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},_V={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},wV={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},jE={};/**
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
 */const eC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},EV=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tC={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(h=64)),r.push(n[c],n[d],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):EV(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new TV;const h=s<<2|a>>4;if(r.push(h),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const m=u<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TV extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IV=function(t){const e=eC(t);return tC.encodeByteArray(e,!0)},wf=function(t){return IV(t).replace(/\./g,"")},nC=function(t){try{return tC.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kV(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xV=()=>kV().__FIREBASE_DEFAULTS__,SV=()=>{if(typeof process>"u"||typeof jE>"u")return;const t=jE.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bV=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nC(t[1]);return e&&JSON.parse(e)},j0=()=>{try{return xV()||SV()||bV()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rC=t=>{var e,n;return(n=(e=j0())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iC=t=>{const e=rC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sC=()=>{var t;return(t=j0())===null||t===void 0?void 0:t.config},oC=t=>{var e;return(e=j0())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class RV{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function aC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[wf(JSON.stringify(n)),wf(JSON.stringify(o)),""].join(".")}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CV(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function AV(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PV(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NV(){const t=$t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OV(){try{return typeof indexedDB=="object"}catch{return!1}}function jV(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const DV="FirebaseError";class hr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DV,Object.setPrototypeOf(this,hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vu.prototype.create)}}class Vu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?LV(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hr(i,a,r)}}function LV(t,e){return t.replace(MV,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const MV=/\{\$([^}]+)}/g;function $V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ef(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(DE(s)&&DE(o)){if(!Ef(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function DE(t){return t!==null&&typeof t=="object"}/**
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
 */function Fu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function il(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function sl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function VV(t,e){const n=new FV(t,e);return n.subscribe.bind(n)}class FV{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zV(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qp),i.error===void 0&&(i.error=Qp),i.complete===void 0&&(i.complete=Qp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zV(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qp(){}/**
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
 */function we(t){return t&&t._delegate?t._delegate:t}class Li{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ns="[DEFAULT]";/**
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
 */class UV{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RV;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HV(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BV(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BV(t){return t===ns?void 0:t}function HV(t){return t.instantiationMode==="EAGER"}/**
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
 */class WV{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new UV(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const qV={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},KV=fe.INFO,GV={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},QV=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=GV[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class D0{constructor(e){this.name=e,this._logLevel=KV,this._logHandler=QV,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qV[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const YV=(t,e)=>e.some(n=>t instanceof n);let LE,ME;function XV(){return LE||(LE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JV(){return ME||(ME=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lC=new WeakMap,ey=new WeakMap,uC=new WeakMap,Yp=new WeakMap,L0=new WeakMap;function ZV(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Si(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lC.set(n,t)}).catch(()=>{}),L0.set(e,t),e}function eF(t){if(ey.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ey.set(t,e)}let ty={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ey.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Si(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tF(t){ty=t(ty)}function nF(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xp(this),e,...n);return uC.set(r,e.sort?e.sort():[e]),Si(r)}:JV().includes(t)?function(...e){return t.apply(Xp(this),e),Si(lC.get(this))}:function(...e){return Si(t.apply(Xp(this),e))}}function rF(t){return typeof t=="function"?nF(t):(t instanceof IDBTransaction&&eF(t),YV(t,XV())?new Proxy(t,ty):t)}function Si(t){if(t instanceof IDBRequest)return ZV(t);if(Yp.has(t))return Yp.get(t);const e=rF(t);return e!==t&&(Yp.set(t,e),L0.set(e,t)),e}const Xp=t=>L0.get(t);function iF(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Si(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Si(o.result),l.oldVersion,l.newVersion,Si(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sF=["get","getKey","getAll","getAllKeys","count"],oF=["put","add","delete","clear"],Jp=new Map;function $E(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jp.get(e))return Jp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=oF.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sF.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Jp.set(e,s),s}tF(t=>({...t,get:(e,n,r)=>$E(e,n)||t.get(e,n,r),has:(e,n)=>!!$E(e,n)||t.has(e,n)}));/**
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
 */class aF{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lF(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lF(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ny="@firebase/app",VE="0.9.25";/**
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
 */const Os=new D0("@firebase/app"),uF="@firebase/app-compat",cF="@firebase/analytics-compat",dF="@firebase/analytics",fF="@firebase/app-check-compat",hF="@firebase/app-check",pF="@firebase/auth",mF="@firebase/auth-compat",gF="@firebase/database",yF="@firebase/database-compat",vF="@firebase/functions",_F="@firebase/functions-compat",wF="@firebase/installations",EF="@firebase/installations-compat",TF="@firebase/messaging",IF="@firebase/messaging-compat",kF="@firebase/performance",xF="@firebase/performance-compat",SF="@firebase/remote-config",bF="@firebase/remote-config-compat",RF="@firebase/storage",CF="@firebase/storage-compat",AF="@firebase/firestore",PF="@firebase/firestore-compat",NF="firebase",OF="10.7.1";/**
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
 */const ry="[DEFAULT]",jF={[ny]:"fire-core",[uF]:"fire-core-compat",[dF]:"fire-analytics",[cF]:"fire-analytics-compat",[hF]:"fire-app-check",[fF]:"fire-app-check-compat",[pF]:"fire-auth",[mF]:"fire-auth-compat",[gF]:"fire-rtdb",[yF]:"fire-rtdb-compat",[vF]:"fire-fn",[_F]:"fire-fn-compat",[wF]:"fire-iid",[EF]:"fire-iid-compat",[TF]:"fire-fcm",[IF]:"fire-fcm-compat",[kF]:"fire-perf",[xF]:"fire-perf-compat",[SF]:"fire-rc",[bF]:"fire-rc-compat",[RF]:"fire-gcs",[CF]:"fire-gcs-compat",[AF]:"fire-fst",[PF]:"fire-fst-compat","fire-js":"fire-js",[NF]:"fire-js-all"};/**
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
 */const Tf=new Map,iy=new Map;function DF(t,e){try{t.container.addComponent(e)}catch(n){Os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function js(t){const e=t.name;if(iy.has(e))return Os.debug(`There were multiple attempts to register component ${e}.`),!1;iy.set(e,t);for(const n of Tf.values())DF(n,t);return!0}function wh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const LF={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bi=new Vu("app","Firebase",LF);/**
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
 */class MF{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Li("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bi.create("app-deleted",{appName:this._name})}}/**
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
 */const Hs=OF;function cC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ry,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw bi.create("bad-app-name",{appName:String(i)});if(n||(n=sC()),!n)throw bi.create("no-options");const s=Tf.get(i);if(s){if(Ef(n,s.options)&&Ef(r,s.config))return s;throw bi.create("duplicate-app",{appName:i})}const o=new WV(i);for(const l of iy.values())o.addComponent(l);const a=new MF(n,r,o);return Tf.set(i,a),a}function Eh(t=ry){const e=Tf.get(t);if(!e&&t===ry&&sC())return cC();if(!e)throw bi.create("no-app",{appName:t});return e}function sr(t,e,n){var r;let i=(r=jF[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Os.warn(a.join(" "));return}js(new Li(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const $F="firebase-heartbeat-database",VF=1,uu="firebase-heartbeat-store";let Zp=null;function dC(){return Zp||(Zp=iF($F,VF,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(uu)}}}).catch(t=>{throw bi.create("idb-open",{originalErrorMessage:t.message})})),Zp}async function FF(t){try{return await(await dC()).transaction(uu).objectStore(uu).get(fC(t))}catch(e){if(e instanceof hr)Os.warn(e.message);else{const n=bi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Os.warn(n.message)}}}async function FE(t,e){try{const r=(await dC()).transaction(uu,"readwrite");await r.objectStore(uu).put(e,fC(t)),await r.done}catch(n){if(n instanceof hr)Os.warn(n.message);else{const r=bi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Os.warn(r.message)}}}function fC(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zF=1024,UF=30*24*60*60*1e3;class BF{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WF(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zE();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=UF}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zE(),{heartbeatsToSend:r,unsentEntries:i}=HF(this._heartbeatsCache.heartbeats),s=wf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zE(){return new Date().toISOString().substring(0,10)}function HF(t,e=zF){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),UE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),UE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WF{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OV()?jV().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FF(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return FE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return FE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function UE(t){return wf(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function qF(t){js(new Li("platform-logger",e=>new aF(e),"PRIVATE")),js(new Li("heartbeat",e=>new BF(e),"PRIVATE")),sr(ny,VE,t),sr(ny,VE,"esm2017"),sr("fire-js","")}qF("");function hC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KF=hC,pC=new Vu("auth","Firebase",hC());/**
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
 */const If=new D0("@firebase/auth");function GF(t,...e){If.logLevel<=fe.WARN&&If.warn(`Auth (${Hs}): ${t}`,...e)}function xd(t,...e){If.logLevel<=fe.ERROR&&If.error(`Auth (${Hs}): ${t}`,...e)}/**
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
 */function zn(t,...e){throw M0(t,...e)}function or(t,...e){return M0(t,...e)}function QF(t,e,n){const r=Object.assign(Object.assign({},KF()),{[e]:n});return new Vu("auth","Firebase",r).create(e,{appName:t.name})}function M0(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pC.create(t,...e)}function J(t,e,...n){if(!t)throw M0(e,...n)}function xr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xd(e),new Error(e)}function Fr(t,e){t||xr(e)}/**
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
 */function sy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function YF(){return BE()==="http:"||BE()==="https:"}function BE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function XF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YF()||AV()||"connection"in navigator)?navigator.onLine:!0}function JF(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fr(n>e,"Short delay should be less than long delay!"),this.isMobile=CV()||PV()}get(){return XF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $0(t,e){Fr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const e6=new zu(3e4,6e4);function qi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gr(t,e,n,r,i={}){return gC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fu(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),mC.fetch()(yC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function gC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZF),e);try{const i=new n6(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wc(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw QF(t,c,u);zn(t,c)}}catch(i){if(i instanceof hr)throw i;zn(t,"network-request-failed",{message:String(i)})}}async function Uu(t,e,n,r,i={}){const s=await Gr(t,e,n,r,i);return"mfaPendingCredential"in s&&zn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$0(t.config,i):`${t.config.apiScheme}://${i}`}function t6(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class n6{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(or(this.auth,"network-request-failed")),e6.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=or(t,e,r);return i.customData._tokenResponse=n,i}function HE(t){return t!==void 0&&t.enterprise!==void 0}class r6{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return t6(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function i6(t,e){return Gr(t,"GET","/v2/recaptchaConfig",qi(t,e))}/**
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
 */async function s6(t,e){return Gr(t,"POST","/v1/accounts:delete",e)}async function o6(t,e){return Gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a6(t,e=!1){const n=we(t),r=await n.getIdToken(e),i=V0(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bl(em(i.auth_time)),issuedAtTime:bl(em(i.iat)),expirationTime:bl(em(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function em(t){return Number(t)*1e3}function V0(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xd("JWT malformed, contained fewer than 3 sections"),null;try{const i=nC(n);return i?JSON.parse(i):(xd("Failed to decode base64 JWT payload"),null)}catch(i){return xd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function l6(t){const e=V0(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ra(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hr&&u6(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function u6({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class c6{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bl(this.lastLoginAt),this.creationTime=bl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function kf(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ra(t,o6(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?h6(s.providerUserInfo):[],a=f6(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vC(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function d6(t){const e=we(t);await kf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f6(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function h6(t){return t.map(e=>{var{providerId:n}=e,r=p0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function p6(t,e){const n=await gC(t,{},async()=>{const r=Fu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function m6(t,e){return Gr(t,"POST","/v2/accounts:revokeToken",qi(t,e))}/**
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
 */class cu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):l6(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await p6(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cu;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cu,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
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
 */function Zr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Es{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=p0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new c6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ra(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return a6(this,e)}reload(){return d6(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Es(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await kf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ra(this,s6(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:T,isAnonymous:x,providerData:I,stsTokenManager:k}=n;J(w&&k,e,"internal-error");const S=cu.fromJSON(this.name,k);J(typeof w=="string",e,"internal-error"),Zr(d,e.name),Zr(h,e.name),J(typeof T=="boolean",e,"internal-error"),J(typeof x=="boolean",e,"internal-error"),Zr(p,e.name),Zr(m,e.name),Zr(E,e.name),Zr(_,e.name),Zr(v,e.name),Zr(g,e.name);const O=new Es({uid:w,auth:e,email:h,emailVerified:T,displayName:d,isAnonymous:x,photoURL:m,phoneNumber:p,tenantId:E,stsTokenManager:S,createdAt:v,lastLoginAt:g});return I&&Array.isArray(I)&&(O.providerData=I.map(j=>Object.assign({},j))),_&&(O._redirectEventId=_),O}static async _fromIdTokenResponse(e,n,r=!1){const i=new cu;i.updateFromServerResponse(n);const s=new Es({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await kf(s),s}}/**
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
 */const WE=new Map;function Sr(t){Fr(t instanceof Function,"Expected a class definition");let e=WE.get(t);return e?(Fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,WE.set(t,e),e)}/**
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
 */class _C{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_C.type="NONE";const qE=_C;/**
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
 */function Sd(t,e,n){return`firebase:${t}:${e}:${n}`}class Do{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Sd(this.userKey,i.apiKey,s),this.fullPersistenceKey=Sd("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Es._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Do(Sr(qE),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Sr(qE);const o=Sd(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Es._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Do(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Do(s,e,r))}}/**
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
 */function KE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kC(e))return"Blackberry";if(xC(e))return"Webos";if(F0(e))return"Safari";if((e.includes("chrome/")||EC(e))&&!e.includes("edge/"))return"Chrome";if(IC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wC(t=$t()){return/firefox\//i.test(t)}function F0(t=$t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function EC(t=$t()){return/crios\//i.test(t)}function TC(t=$t()){return/iemobile/i.test(t)}function IC(t=$t()){return/android/i.test(t)}function kC(t=$t()){return/blackberry/i.test(t)}function xC(t=$t()){return/webos/i.test(t)}function Th(t=$t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function g6(t=$t()){var e;return Th(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function y6(){return NV()&&document.documentMode===10}function SC(t=$t()){return Th(t)||IC(t)||xC(t)||kC(t)||/windows phone/i.test(t)||TC(t)}function v6(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function bC(t,e=[]){let n;switch(t){case"Browser":n=KE($t());break;case"Worker":n=`${KE($t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${r}`}/**
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
 */class _6{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function w6(t,e={}){return Gr(t,"GET","/v2/passwordPolicy",qi(t,e))}/**
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
 */const E6=6;class T6{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:E6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class I6{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new GE(this),this.idTokenSubscription=new GE(this),this.beforeStateQueue=new _6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Do.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await kf(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JF()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?we(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await w6(this),n=new T6(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await m6(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sr(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Do.create(this,[Sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GF(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ws(t){return we(t)}class GE{constructor(e){this.auth=e,this.observer=null,this.addObserver=VV(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function k6(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function RC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=or("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",k6().appendChild(r)})}function x6(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const S6="https://www.google.com/recaptcha/enterprise.js?render=",b6="recaptcha-enterprise",R6="NO_RECAPTCHA";class C6{constructor(e){this.type=b6,this.auth=Ws(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{i6(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new r6(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;HE(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(R6)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&HE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}RC(S6+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function QE(t,e,n,r=!1){const i=new C6(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function oy(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await QE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await QE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function A6(t,e){const n=wh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ef(s,e??{}))return i;zn(i,"already-initialized")}return n.initialize({options:e})}function P6(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function N6(t,e,n){const r=Ws(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=CC(e),{host:o,port:a}=O6(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||j6()}function CC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function O6(t){const e=CC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:YE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:YE(o)}}}function YE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function j6(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class z0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,n){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}async function D6(t,e){return Gr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function L6(t,e){return Uu(t,"POST","/v1/accounts:signInWithPassword",qi(t,e))}/**
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
 */async function M6(t,e){return Uu(t,"POST","/v1/accounts:signInWithEmailLink",qi(t,e))}async function $6(t,e){return Uu(t,"POST","/v1/accounts:signInWithEmailLink",qi(t,e))}/**
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
 */class du extends z0{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new du(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new du(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oy(e,n,"signInWithPassword",L6);case"emailLink":return M6(e,{email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oy(e,r,"signUpPassword",D6);case"emailLink":return $6(e,{idToken:n,email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Lo(t,e){return Uu(t,"POST","/v1/accounts:signInWithIdp",qi(t,e))}/**
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
 */const V6="http://localhost";class Ds extends z0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=p0(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ds(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lo(e,n)}buildRequest(){const e={requestUri:V6,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fu(n)}return e}}/**
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
 */function F6(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function z6(t){const e=il(sl(t)).link,n=e?il(sl(e)).deep_link_id:null,r=il(sl(t)).deep_link_id;return(r?il(sl(r)).link:null)||r||n||e||t}class U0{constructor(e){var n,r,i,s,o,a;const l=il(sl(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=F6((i=l.mode)!==null&&i!==void 0?i:null);J(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=z6(e);try{return new U0(n)}catch{return null}}}/**
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
 */class xa{constructor(){this.providerId=xa.PROVIDER_ID}static credential(e,n){return du._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=U0.parseLink(n);return J(r,"argument-error"),du._fromEmailAndCode(e,r.code,r.tenantId)}}xa.PROVIDER_ID="password";xa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class AC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bu extends AC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class oi extends Bu{constructor(){super("facebook.com")}static credential(e){return Ds._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
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
 */class ai extends Bu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ds._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ai.credential(n,r)}catch{return null}}}ai.GOOGLE_SIGN_IN_METHOD="google.com";ai.PROVIDER_ID="google.com";/**
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
 */class li extends Bu{constructor(){super("github.com")}static credential(e){return Ds._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.GITHUB_SIGN_IN_METHOD="github.com";li.PROVIDER_ID="github.com";/**
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
 */class ui extends Bu{constructor(){super("twitter.com")}static credential(e,n){return Ds._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ui.credential(n,r)}catch{return null}}}ui.TWITTER_SIGN_IN_METHOD="twitter.com";ui.PROVIDER_ID="twitter.com";/**
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
 */async function U6(t,e){return Uu(t,"POST","/v1/accounts:signUp",qi(t,e))}/**
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
 */class Ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Es._fromIdTokenResponse(e,r,i),o=XE(r);return new Ls({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=XE(r);return new Ls({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function XE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xf extends hr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xf.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xf(e,n,r,i)}}function PC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xf._fromErrorAndOperation(t,s,e,r):s})}async function B6(t,e,n=!1){const r=await ra(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ls._forOperation(t,"link",r)}/**
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
 */async function H6(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ra(t,PC(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=V0(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Ls._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zn(r,"user-mismatch"),s}}/**
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
 */async function NC(t,e,n=!1){const r="signIn",i=await PC(t,r,e),s=await Ls._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function W6(t,e){return NC(Ws(t),e)}/**
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
 */async function OC(t){const e=Ws(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function q6(t,e,n){const r=Ws(t),o=await oy(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",U6).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&OC(t),l}),a=await Ls._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function K6(t,e,n){return W6(we(t),xa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&OC(t),r})}/**
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
 */async function G6(t,e){return Gr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function jC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=we(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ra(r,G6(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Q6(t,e,n,r){return we(t).onIdTokenChanged(e,n,r)}function Y6(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function X6(t,e,n,r){return we(t).onAuthStateChanged(e,n,r)}function J6(t){return we(t).signOut()}const Sf="__sak";/**
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
 */class DC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sf,"1"),this.storage.removeItem(Sf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Z6(){const t=$t();return F0(t)||Th(t)}const e9=1e3,t9=10;class LC extends DC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Z6()&&v6(),this.fallbackToPolling=SC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);y6()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,t9):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},e9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}LC.type="LOCAL";const n9=LC;/**
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
 */class MC extends DC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}MC.type="SESSION";const $C=MC;/**
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
 */function r9(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ih(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await r9(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ih.receivers=[];/**
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
 */function B0(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class i9{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=B0("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ar(){return window}function s9(t){ar().location.href=t}/**
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
 */function VC(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function o9(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function a9(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function l9(){return VC()?self:null}/**
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
 */const FC="firebaseLocalStorageDb",u9=1,bf="firebaseLocalStorage",zC="fbase_key";class Hu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kh(t,e){return t.transaction([bf],e?"readwrite":"readonly").objectStore(bf)}function c9(){const t=indexedDB.deleteDatabase(FC);return new Hu(t).toPromise()}function ay(){const t=indexedDB.open(FC,u9);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bf,{keyPath:zC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bf)?e(r):(r.close(),await c9(),e(await ay()))})})}async function JE(t,e,n){const r=kh(t,!0).put({[zC]:e,value:n});return new Hu(r).toPromise()}async function d9(t,e){const n=kh(t,!1).get(e),r=await new Hu(n).toPromise();return r===void 0?null:r.value}function ZE(t,e){const n=kh(t,!0).delete(e);return new Hu(n).toPromise()}const f9=800,h9=3;class UC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ay(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>h9)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return VC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ih._getInstance(l9()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await o9(),!this.activeServiceWorker)return;this.sender=new i9(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||a9()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ay();return await JE(e,Sf,"1"),await ZE(e,Sf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>JE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>d9(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ZE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kh(i,!1).getAll();return new Hu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),f9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UC.type="LOCAL";const p9=UC;new zu(3e4,6e4);/**
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
 */function m9(t,e){return e?Sr(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class H0 extends z0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function g9(t){return NC(t.auth,new H0(t),t.bypassAuthState)}function y9(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),H6(n,new H0(t),t.bypassAuthState)}async function v9(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),B6(n,new H0(t),t.bypassAuthState)}/**
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
 */class BC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return g9;case"linkViaPopup":case"linkViaRedirect":return v9;case"reauthViaPopup":case"reauthViaRedirect":return y9;default:zn(this.auth,"internal-error")}}resolve(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _9=new zu(2e3,1e4);class xo extends BC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xo.currentPopupAction&&xo.currentPopupAction.cancel(),xo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Fr(this.filter.length===1,"Popup operations only handle one event");const e=B0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(or(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(or(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(or(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_9.get())};e()}}xo.currentPopupAction=null;/**
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
 */const w9="pendingRedirect",bd=new Map;class E9 extends BC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bd.get(this.auth._key());if(!e){try{const r=await T9(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bd.set(this.auth._key(),e)}return this.bypassAuthState||bd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function T9(t,e){const n=x9(e),r=k9(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function I9(t,e){bd.set(t._key(),e)}function k9(t){return Sr(t._redirectPersistence)}function x9(t){return Sd(w9,t.config.apiKey,t.name)}async function S9(t,e,n=!1){const r=Ws(t),i=m9(r,e),o=await new E9(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const b9=10*60*1e3;class R9{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!C9(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!HC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(or(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=b9&&this.cachedEventUids.clear(),this.cachedEventUids.has(eT(e))}saveEventToCache(e){this.cachedEventUids.add(eT(e)),this.lastProcessedEventTime=Date.now()}}function eT(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function HC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function C9(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return HC(t);default:return!1}}/**
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
 */async function A9(t,e={}){return Gr(t,"GET","/v1/projects",e)}/**
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
 */const P9=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,N9=/^https?/;async function O9(t){if(t.config.emulator)return;const{authorizedDomains:e}=await A9(t);for(const n of e)try{if(j9(n))return}catch{}zn(t,"unauthorized-domain")}function j9(t){const e=sy(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!N9.test(n))return!1;if(P9.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const D9=new zu(3e4,6e4);function tT(){const t=ar().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function L9(t){return new Promise((e,n)=>{var r,i,s;function o(){tT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tT(),n(or(t,"network-request-failed"))},timeout:D9.get()})}if(!((i=(r=ar().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ar().gapi)===null||s===void 0)&&s.load)o();else{const a=x6("iframefcb");return ar()[a]=()=>{gapi.load?o():n(or(t,"network-request-failed"))},RC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Rd=null,e})}let Rd=null;function M9(t){return Rd=Rd||L9(t),Rd}/**
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
 */const $9=new zu(5e3,15e3),V9="__/auth/iframe",F9="emulator/auth/iframe",z9={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},U9=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function B9(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$0(e,F9):`https://${t.config.authDomain}/${V9}`,r={apiKey:e.apiKey,appName:t.name,v:Hs},i=U9.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fu(r).slice(1)}`}async function H9(t){const e=await M9(t),n=ar().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:B9(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:z9,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=or(t,"network-request-failed"),a=ar().setTimeout(()=>{s(o)},$9.get());function l(){ar().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const W9={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q9=500,K9=600,G9="_blank",Q9="http://localhost";class nT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Y9(t,e,n,r=q9,i=K9){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},W9),{width:r.toString(),height:i.toString(),top:s,left:o}),u=$t().toLowerCase();n&&(a=EC(u)?G9:n),wC(u)&&(e=e||Q9,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[p,m])=>`${h}${p}=${m},`,"");if(g6(u)&&a!=="_self")return X9(e||"",a),new nT(null);const d=window.open(e||"",a,c);J(d,t,"popup-blocked");try{d.focus()}catch{}return new nT(d)}function X9(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const J9="__/auth/handler",Z9="emulator/auth/handler",ez=encodeURIComponent("fac");async function rT(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hs,eventId:i};if(e instanceof AC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$V(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Bu){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${ez}=${encodeURIComponent(l)}`:"";return`${tz(t)}?${Fu(a).slice(1)}${u}`}function tz({config:t}){return t.emulator?$0(t,Z9):`https://${t.authDomain}/${J9}`}/**
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
 */const tm="webStorageSupport";class nz{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$C,this._completeRedirectFn=S9,this._overrideRedirectResult=I9}async _openPopup(e,n,r,i){var s;Fr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await rT(e,n,r,sy(),i);return Y9(e,o,B0())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await rT(e,n,r,sy(),i);return s9(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await H9(e),r=new R9(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tm,{type:tm},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tm];o!==void 0&&n(!!o),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=O9(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return SC()||F0()||Th()}}const rz=nz;var iT="@firebase/auth",sT="1.5.1";/**
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
 */class iz{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sz(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function oz(t){js(new Li("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bC(t)},u=new I6(r,i,s,l);return P6(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),js(new Li("auth-internal",e=>{const n=Ws(e.getProvider("auth").getImmediate());return(r=>new iz(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(iT,sT,sz(t)),sr(iT,sT,"esm2017")}/**
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
 */const az=5*60,lz=oC("authIdTokenMaxAge")||az;let oT=null;const uz=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lz)return;const i=n==null?void 0:n.token;oT!==i&&(oT=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cz(t=Eh()){const e=wh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=A6(t,{popupRedirectResolver:rz,persistence:[p9,n9,$C]}),r=oC("authTokenSyncURL");if(r){const s=uz(r);Y6(n,s,()=>s(n.currentUser)),Q6(n,o=>s(o))}const i=rC("auth");return i&&N6(n,`http://${i}`),n}oz("Browser");var dz="firebase",fz="10.7.1";/**
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
 */sr(dz,fz,"app");var hz=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,W0=W0||{},te=hz||self;function xh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pz(t){return Object.prototype.hasOwnProperty.call(t,nm)&&t[nm]||(t[nm]=++mz)}var nm="closure_uid_"+(1e9*Math.random()>>>0),mz=0;function gz(t,e,n){return t.call.apply(t.bind,arguments)}function yz(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function jt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?jt=gz:jt=yz,jt.apply(null,arguments)}function qc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function gt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ki(){this.s=this.s,this.o=this.o}var vz=0;Ki.prototype.s=!1;Ki.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vz!=0)&&pz(this)};Ki.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const WC=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function q0(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function aT(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(xh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var _z=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};te.addEventListener("test",n,e),te.removeEventListener("test",n,e)}catch{}return t}();function fu(t){return/^[\s\xa0]*$/.test(t)}function Sh(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function Qn(t){return Sh().indexOf(t)!=-1}function K0(t){return K0[" "](t),t}K0[" "]=function(){};function wz(t,e){var n=fU;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Ez=Qn("Opera"),ia=Qn("Trident")||Qn("MSIE"),qC=Qn("Edge"),ly=qC||ia,KC=Qn("Gecko")&&!(Sh().toLowerCase().indexOf("webkit")!=-1&&!Qn("Edge"))&&!(Qn("Trident")||Qn("MSIE"))&&!Qn("Edge"),Tz=Sh().toLowerCase().indexOf("webkit")!=-1&&!Qn("Edge");function GC(){var t=te.document;return t?t.documentMode:void 0}var uy;e:{var rm="",im=function(){var t=Sh();if(KC)return/rv:([^\);]+)(\)|;)/.exec(t);if(qC)return/Edge\/([\d\.]+)/.exec(t);if(ia)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Tz)return/WebKit\/(\S+)/.exec(t);if(Ez)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(im&&(rm=im?im[1]:""),ia){var sm=GC();if(sm!=null&&sm>parseFloat(rm)){uy=String(sm);break e}}uy=rm}var cy;if(te.document&&ia){var lT=GC();cy=lT||parseInt(uy,10)||void 0}else cy=void 0;var Iz=cy;function hu(t,e){if(Dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(KC){e:{try{K0(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:kz[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&hu.$.h.call(this)}}gt(hu,Dt);var kz={2:"touch",3:"pen",4:"mouse"};hu.prototype.h=function(){hu.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qu="closure_listenable_"+(1e6*Math.random()|0),xz=0;function Sz(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++xz,this.fa=this.ia=!1}function bh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function G0(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function bz(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function QC(t){const e={};for(const n in t)e[n]=t[n];return e}const uT="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function YC(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<uT.length;s++)n=uT[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Rh(t){this.src=t,this.g={},this.h=0}Rh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=fy(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Sz(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function dy(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=WC(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(bh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function fy(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Q0="closure_lm_"+(1e6*Math.random()|0),om={};function XC(t,e,n,r,i){if(r&&r.once)return ZC(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)XC(t,e[s],n,r,i);return null}return n=J0(n),t&&t[qu]?t.O(e,n,Wu(r)?!!r.capture:!!r,i):JC(t,e,n,!1,r,i)}function JC(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Wu(i)?!!i.capture:!!i,a=X0(t);if(a||(t[Q0]=a=new Rh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Rz(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)_z||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(tA(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Rz(){function t(n){return e.call(t.src,t.listener,n)}const e=Cz;return t}function ZC(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ZC(t,e[s],n,r,i);return null}return n=J0(n),t&&t[qu]?t.P(e,n,Wu(r)?!!r.capture:!!r,i):JC(t,e,n,!0,r,i)}function eA(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)eA(t,e[s],n,r,i);else r=Wu(r)?!!r.capture:!!r,n=J0(n),t&&t[qu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=fy(s,n,r,i),-1<n&&(bh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=X0(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fy(e,n,r,i)),(n=-1<t?e[t]:null)&&Y0(n))}function Y0(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[qu])dy(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(tA(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=X0(e))?(dy(n,t),n.h==0&&(n.src=null,e[Q0]=null)):bh(t)}}}function tA(t){return t in om?om[t]:om[t]="on"+t}function Cz(t,e){if(t.fa)t=!0;else{e=new hu(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Y0(t),t=n.call(r,e)}return t}function X0(t){return t=t[Q0],t instanceof Rh?t:null}var am="__closure_events_fn_"+(1e9*Math.random()>>>0);function J0(t){return typeof t=="function"?t:(t[am]||(t[am]=function(e){return t.handleEvent(e)}),t[am])}function mt(){Ki.call(this),this.i=new Rh(this),this.S=this,this.J=null}gt(mt,Ki);mt.prototype[qu]=!0;mt.prototype.removeEventListener=function(t,e,n,r){eA(this,t,e,n,r)};function It(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Dt(e,t);else if(e instanceof Dt)e.target=e.target||t;else{var i=e;e=new Dt(r,t),YC(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Kc(o,r,!0,e)&&i}if(o=e.g=t,i=Kc(o,r,!0,e)&&i,i=Kc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Kc(o,r,!1,e)&&i}mt.prototype.N=function(){if(mt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)bh(n[r]);delete t.g[e],t.h--}}this.J=null};mt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};mt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Kc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&dy(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Z0=te.JSON.stringify;class Az{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Pz(){var t=e_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nz{constructor(){this.h=this.g=null}add(e,n){const r=nA.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var nA=new Az(()=>new Oz,t=>t.reset());class Oz{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jz(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Dz(t){te.setTimeout(()=>{throw t},0)}let pu,mu=!1,e_=new Nz,rA=()=>{const t=te.Promise.resolve(void 0);pu=()=>{t.then(Lz)}};var Lz=()=>{for(var t;t=Pz();){try{t.h.call(t.g)}catch(n){Dz(n)}var e=nA;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}mu=!1};function Ch(t,e){mt.call(this),this.h=t||1,this.g=e||te,this.j=jt(this.qb,this),this.l=Date.now()}gt(Ch,mt);D=Ch.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),It(this,"tick"),this.ga&&(t_(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function t_(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){Ch.$.N.call(this),t_(this),delete this.g};function n_(t,e,n){if(typeof t=="function")n&&(t=jt(t,n));else if(t&&typeof t.handleEvent=="function")t=jt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function iA(t){t.g=n_(()=>{t.g=null,t.i&&(t.i=!1,iA(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Mz extends Ki{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:iA(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gu(t){Ki.call(this),this.h=t,this.g={}}gt(gu,Ki);var cT=[];function sA(t,e,n,r){Array.isArray(n)||(n&&(cT[0]=n.toString()),n=cT);for(var i=0;i<n.length;i++){var s=XC(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function oA(t){G0(t.g,function(e,n){this.g.hasOwnProperty(n)&&Y0(e)},t),t.g={}}gu.prototype.N=function(){gu.$.N.call(this),oA(this)};gu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ah(){this.g=!0}Ah.prototype.Ea=function(){this.g=!1};function $z(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Vz(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function So(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zz(t,n)+(r?" "+r:"")})}function Fz(t,e){t.info(function(){return"TIMEOUT: "+e})}Ah.prototype.info=function(){};function zz(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Z0(n)}catch{return e}}var qs={},dT=null;function Ph(){return dT=dT||new mt}qs.Ta="serverreachability";function aA(t){Dt.call(this,qs.Ta,t)}gt(aA,Dt);function yu(t){const e=Ph();It(e,new aA(e))}qs.STAT_EVENT="statevent";function lA(t,e){Dt.call(this,qs.STAT_EVENT,t),this.stat=e}gt(lA,Dt);function Ut(t){const e=Ph();It(e,new lA(e,t))}qs.Ua="timingevent";function uA(t,e){Dt.call(this,qs.Ua,t),this.size=e}gt(uA,Dt);function Ku(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var Nh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function r_(){}r_.prototype.h=null;function fT(t){return t.h||(t.h=t.i())}function dA(){}var Gu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function i_(){Dt.call(this,"d")}gt(i_,Dt);function s_(){Dt.call(this,"c")}gt(s_,Dt);var hy;function Oh(){}gt(Oh,r_);Oh.prototype.g=function(){return new XMLHttpRequest};Oh.prototype.i=function(){return{}};hy=new Oh;function Qu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new gu(this),this.P=Uz,t=ly?125:void 0,this.V=new Ch(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new fA}function fA(){this.i=null,this.g="",this.h=!1}var Uz=45e3,hA={},py={};D=Qu.prototype;D.setTimeout=function(t){this.P=t};function my(t,e,n){t.L=1,t.A=Dh(zr(e)),t.u=n,t.S=!0,pA(t,null)}function pA(t,e){t.G=Date.now(),Yu(t),t.B=zr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),TA(n.i,"t",r),t.o=0,n=t.l.J,t.h=new fA,t.g=BA(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Mz(jt(t.Pa,t,t.g),t.O)),sA(t.U,t.g,"readystatechange",t.nb),e=t.I?QC(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),yu(),$z(t.j,t.v,t.B,t.m,t.W,t.u)}D.nb=function(t){t=t.target;const e=this.M;e&&Xn(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const c=Xn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||ly||this.g&&(this.h.h||this.g.ja()||gT(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?yu(3):yu(2)),jh(this);var n=this.g.da();this.ca=n;t:if(mA(this)){var r=gT(this.g);t="";var i=r.length,s=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ds(this),Rl(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Vz(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fu(a)){var u=a;break t}}u=null}if(n=u)So(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gy(this,n);else{this.i=!1,this.s=3,Ut(12),ds(this),Rl(this);break e}}this.S?(gA(this,c,o),ly&&this.i&&c==3&&(sA(this.U,this.V,"tick",this.mb),this.V.start())):(So(this.j,this.m,o,null),gy(this,o)),c==4&&ds(this),this.i&&!this.J&&(c==4?VA(this.l,this):(this.i=!1,Yu(this)))}else uU(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),ds(this),Rl(this)}}}catch{}finally{}};function mA(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function gA(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=Bz(t,n),i==py){e==4&&(t.s=4,Ut(14),r=!1),So(t.j,t.m,null,"[Incomplete Response]");break}else if(i==hA){t.s=4,Ut(15),So(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else So(t.j,t.m,i,null),gy(t,i);mA(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),d_(e),e.M=!0,Ut(11))):(So(t.j,t.m,n,"[Invalid Chunked Response]"),ds(t),Rl(t))}D.mb=function(){if(this.g){var t=Xn(this.g),e=this.g.ja();this.o<e.length&&(jh(this),gA(this,t,e),this.i&&t!=4&&Yu(this))}};function Bz(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?py:(n=Number(e.substring(n,r)),isNaN(n)?hA:(r+=1,r+n>e.length?py:(e=e.slice(r,r+n),t.o=r+n,e)))}D.cancel=function(){this.J=!0,ds(this)};function Yu(t){t.Y=Date.now()+t.P,yA(t,t.P)}function yA(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ku(jt(t.lb,t),e)}function jh(t){t.C&&(te.clearTimeout(t.C),t.C=null)}D.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(Fz(this.j,this.B),this.L!=2&&(yu(),Ut(17)),ds(this),this.s=2,Rl(this)):yA(this,this.Y-t)};function Rl(t){t.l.H==0||t.J||VA(t.l,t)}function ds(t){jh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,t_(t.V),oA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function gy(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||yy(n.i,t))){if(!t.K&&yy(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Af(n),Vh(n);else break e;c_(n),Ut(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ku(jt(n.ib,n),6e3));if(1>=xA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else fs(n,11)}else if((t.K||n.g==t)&&Af(n),!fu(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(o_(s,s.h),s.h=null))}if(r.F){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Pe(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=UA(r,r.J?r.pa:null,r.Y),o.K){SA(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(jh(a),Yu(a)),r.g=o}else MA(r);0<n.j.length&&Fh(n)}else u[0]!="stop"&&u[0]!="close"||fs(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?fs(n,7):u_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}yu(4)}catch{}}function Hz(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Wz(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function vA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Wz(t),r=Hz(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var _A=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qz(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ts(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ts){this.h=t.h,Rf(this,t.j),this.s=t.s,this.g=t.g,Cf(this,t.m),this.l=t.l;var e=t.i,n=new vu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),hT(this,n),this.o=t.o}else t&&(e=String(t).match(_A))?(this.h=!1,Rf(this,e[1]||"",!0),this.s=ol(e[2]||""),this.g=ol(e[3]||"",!0),Cf(this,e[4]),this.l=ol(e[5]||"",!0),hT(this,e[6]||"",!0),this.o=ol(e[7]||"")):(this.h=!1,this.i=new vu(null,this.h))}Ts.prototype.toString=function(){var t=[],e=this.j;e&&t.push(al(e,pT,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(al(e,pT,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(al(n,n.charAt(0)=="/"?Qz:Gz,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",al(n,Xz)),t.join("")};function zr(t){return new Ts(t)}function Rf(t,e,n){t.j=n?ol(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Cf(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hT(t,e,n){e instanceof vu?(t.i=e,Jz(t.i,t.h)):(n||(e=al(e,Yz)),t.i=new vu(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function Dh(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ol(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function al(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Kz),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Kz(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pT=/[#\/\?@]/g,Gz=/[#\?:]/g,Qz=/[#\?]/g,Yz=/[#\?@]/g,Xz=/#/g;function vu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gi(t){t.g||(t.g=new Map,t.h=0,t.i&&qz(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=vu.prototype;D.add=function(t,e){Gi(this),this.i=null,t=Sa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wA(t,e){Gi(t),e=Sa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function EA(t,e){return Gi(t),e=Sa(t,e),t.g.has(e)}D.forEach=function(t,e){Gi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.ta=function(){Gi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.Z=function(t){Gi(this);let e=[];if(typeof t=="string")EA(this,t)&&(e=e.concat(this.g.get(Sa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Gi(this),this.i=null,t=Sa(this,t),EA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function TA(t,e,n){wA(t,e),0<n.length&&(t.i=null,t.g.set(Sa(t,e),q0(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Sa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Jz(t,e){e&&!t.j&&(Gi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(wA(this,r),TA(this,i,n))},t)),t.j=e}var Zz=class{constructor(t,e){this.g=t,this.map=e}};function IA(t){this.l=t||eU,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eU=10;function kA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xA(t){return t.h?1:t.g?t.g.size:0}function yy(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function o_(t,e){t.g?t.g.add(e):t.h=e}function SA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}IA.prototype.cancel=function(){if(this.i=bA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function bA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return q0(t.i)}var tU=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function nU(){this.g=new tU}function rU(t,e,n){const r=n||"";try{vA(t,function(i,s){let o=i;Wu(i)&&(o=Z0(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function iU(t,e){const n=new Ah;if(te.Image){const r=new Image;r.onload=qc(Gc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=qc(Gc,n,r,"TestLoadImage: error",!1,e),r.onabort=qc(Gc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=qc(Gc,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Gc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Lh(t){this.l=t.ec||null,this.j=t.ob||!1}gt(Lh,r_);Lh.prototype.g=function(){return new Mh(this.l,this.j)};Lh.prototype.i=function(t){return function(){return t}}({});function Mh(t,e){mt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=a_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gt(Mh,mt);var a_=0;D=Mh.prototype;D.open=function(t,e){if(this.readyState!=a_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_u(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xu(this)),this.readyState=a_};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_u(this)),this.g&&(this.readyState=3,_u(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;RA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function RA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xu(this):_u(this),this.readyState==3&&RA(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,Xu(this))};D.Ya=function(t){this.g&&(this.response=t,Xu(this))};D.ka=function(){this.g&&Xu(this)};function Xu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_u(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _u(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var sU=te.JSON.parse;function He(t){mt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=CA,this.L=this.M=!1}gt(He,mt);var CA="",oU=/^https?$/i,aU=["POST","PUT"];D=He.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():hy.g(),this.C=this.u?fT(this.u):fT(hy),this.g.onreadystatechange=jt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){mT(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=te.FormData&&t instanceof te.FormData,!(0<=WC(aU,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{NA(this),0<this.B&&((this.L=lU(this.g))?(this.g.timeout=this.B,this.g.ontimeout=jt(this.ua,this)):this.A=n_(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){mT(this,s)}};function lU(t){return ia&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof W0<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,It(this,"timeout"),this.abort(8))};function mT(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,AA(t),$h(t)}function AA(t){t.F||(t.F=!0,It(t,"complete"),It(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,It(this,"complete"),It(this,"abort"),$h(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$h(this,!0)),He.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?PA(this):this.kb())};D.kb=function(){PA(this)};function PA(t){if(t.h&&typeof W0<"u"&&(!t.C[1]||Xn(t)!=4||t.da()!=2)){if(t.v&&Xn(t)==4)n_(t.La,0,t);else if(It(t,"readystatechange"),Xn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(_A)[1]||null;!i&&te.self&&te.self.location&&(i=te.self.location.protocol.slice(0,-1)),r=!oU.test(i?i.toLowerCase():"")}n=r}if(n)It(t,"complete"),It(t,"success");else{t.m=6;try{var s=2<Xn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",AA(t)}}finally{$h(t)}}}}function $h(t,e){if(t.g){NA(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||It(t,"ready");try{n.onreadystatechange=r}catch{}}}function NA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function Xn(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),sU(e)}};function gT(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case CA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function uU(t){const e={};t=(t.g&&2<=Xn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(fu(t[r]))continue;var n=jz(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}bz(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function OA(t){let e="";return G0(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function l_(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=OA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function Ka(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function jA(t){this.Ga=0,this.j=[],this.l=new Ah,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ka("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ka("baseRetryDelayMs",5e3,t),this.hb=Ka("retryDelaySeedMs",1e4,t),this.eb=Ka("forwardChannelMaxRetries",2,t),this.xa=Ka("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new IA(t&&t.concurrentRequestLimit),this.Ja=new nU,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=jA.prototype;D.ra=8;D.H=1;function u_(t){if(DA(t),t.H==3){var e=t.W++,n=zr(t.I);if(Pe(n,"SID",t.K),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),Ju(t,n),e=new Qu(t,t.l,e),e.L=2,e.A=Dh(zr(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.A,n=!0),n||(e.g=BA(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Yu(e)}zA(t)}function Vh(t){t.g&&(d_(t),t.g.cancel(),t.g=null)}function DA(t){Vh(t),t.u&&(te.clearTimeout(t.u),t.u=null),Af(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function Fh(t){if(!kA(t.i)&&!t.m){t.m=!0;var e=t.Na;pu||rA(),mu||(pu(),mu=!0),e_.add(e,t),t.C=0}}function cU(t,e){return xA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ku(jt(t.Na,t,e),FA(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Qu(this,this.l,t);let s=this.s;if(this.U&&(s?(s=QC(s),YC(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=LA(this,i,e),n=zr(this.I),Pe(n,"RID",t),Pe(n,"CVER",22),this.F&&Pe(n,"X-HTTP-Session-Id",this.F),Ju(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(OA(s)))+"&"+e:this.o&&l_(n,this.o,s)),o_(this.i,i),this.bb&&Pe(n,"TYPE","init"),this.P?(Pe(n,"$req",e),Pe(n,"SID","null"),i.aa=!0,my(i,n,null)):my(i,n,e),this.H=2}}else this.H==3&&(t?yT(this,t):this.j.length==0||kA(this.i)||yT(this))};function yT(t,e){var n;e?n=e.m:n=t.W++;const r=zr(t.I);Pe(r,"SID",t.K),Pe(r,"RID",n),Pe(r,"AID",t.V),Ju(t,r),t.o&&t.s&&l_(r,t.o,t.s),n=new Qu(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=LA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),o_(t.i,n),my(n,r,e)}function Ju(t,e){t.na&&G0(t.na,function(n,r){Pe(e,r,n)}),t.h&&vA({},function(n,r){Pe(e,r,n)})}function LA(t,e,n){n=Math.min(t.j.length,n);var r=t.h?jt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{rU(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function MA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;pu||rA(),mu||(pu(),mu=!0),e_.add(e,t),t.A=0}}function c_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ku(jt(t.Ma,t),FA(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,$A(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ku(jt(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ut(10),Vh(this),$A(this))};function d_(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function $A(t){t.g=new Qu(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=zr(t.wa);Pe(e,"RID","rpc"),Pe(e,"SID",t.K),Pe(e,"AID",t.V),Pe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Pe(e,"TO",t.qa),Pe(e,"TYPE","xmlhttp"),Ju(t,e),t.o&&t.s&&l_(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Dh(zr(e)),n.u=null,n.S=!0,pA(n,t)}D.ib=function(){this.v!=null&&(this.v=null,Vh(this),c_(this),Ut(19))};function Af(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function VA(t,e){var n=null;if(t.g==e){Af(t),d_(t),t.g=null;var r=2}else if(yy(t.i,e))n=e.F,SA(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Ph(),It(r,new uA(r,n)),Fh(t)}else MA(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&cU(t,e)||r==2&&c_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:fs(t,5);break;case 4:fs(t,10);break;case 3:fs(t,6);break;default:fs(t,2)}}}function FA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function fs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=jt(t.pb,t);n||(n=new Ts("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Rf(n,"https"),Dh(n)),iU(n.toString(),r)}else Ut(2);t.H=0,t.h&&t.h.za(e),zA(t),DA(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ut(2)):(this.l.info("Failed to ping google.com"),Ut(1))};function zA(t){if(t.H=0,t.ma=[],t.h){const e=bA(t.i);(e.length!=0||t.j.length!=0)&&(aT(t.ma,e),aT(t.ma,t.j),t.i.i.length=0,q0(t.j),t.j.length=0),t.h.ya()}}function UA(t,e,n){var r=n instanceof Ts?zr(n):new Ts(n);if(r.g!="")e&&(r.g=e+"."+r.g),Cf(r,r.m);else{var i=te.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ts(null);r&&Rf(s,r),e&&(s.g=e),i&&Cf(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Pe(r,n,e),Pe(r,"VER",t.ra),Ju(t,r),r}function BA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new He(new Lh({ob:n})):new He(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function HA(){}D=HA.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function Pf(){if(ia&&!(10<=Number(Iz)))throw Error("Environmental error: no available transport.")}Pf.prototype.g=function(t,e){return new mn(t,e)};function mn(t,e){mt.call(this),this.g=new jA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!fu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ba(this)}gt(mn,mt);mn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ut(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=UA(t,null,t.Y),Fh(t)};mn.prototype.close=function(){u_(this.g)};mn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Z0(t),t=n);e.j.push(new Zz(e.fb++,t)),e.H==3&&Fh(e)};mn.prototype.N=function(){this.g.h=null,delete this.j,u_(this.g),delete this.g,mn.$.N.call(this)};function WA(t){i_.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}gt(WA,i_);function qA(){s_.call(this),this.status=1}gt(qA,s_);function ba(t){this.g=t}gt(ba,HA);ba.prototype.Ba=function(){It(this.g,"a")};ba.prototype.Aa=function(t){It(this.g,new WA(t))};ba.prototype.za=function(t){It(this.g,new qA)};ba.prototype.ya=function(){It(this.g,"b")};function dU(){this.blockSize=-1}function Un(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}gt(Un,dU);Un.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function lm(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Un.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)lm(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){lm(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){lm(this,r),i=0;break}}this.h=i,this.i+=e};Un.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function _e(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var fU={};function f_(t){return-128<=t&&128>t?wz(t,function(e){return new _e([e|0],0>e?-1:0)}):new _e([t|0],0>t?-1:0)}function Jn(t){if(isNaN(t)||!isFinite(t))return Mo;if(0>t)return wt(Jn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=vy;return new _e(e,0)}function KA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return wt(KA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jn(Math.pow(e,8)),r=Mo,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Jn(Math.pow(e,s)),r=r.R(s).add(Jn(o))):(r=r.R(n),r=r.add(Jn(o)))}return r}var vy=4294967296,Mo=f_(0),_y=f_(1),vT=f_(16777216);D=_e.prototype;D.ea=function(){if(En(this))return-wt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:vy+r)*e,e*=vy}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(br(this))return"0";if(En(this))return"-"+wt(this).toString(t);for(var e=Jn(Math.pow(t,6)),n=this,r="";;){var i=Of(n,e).g;n=Nf(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,br(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function br(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function En(t){return t.h==-1}D.X=function(t){return t=Nf(this,t),En(t)?-1:br(t)?0:1};function wt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new _e(n,~t.h).add(_y)}D.abs=function(){return En(this)?wt(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new _e(n,n[n.length-1]&-2147483648?-1:0)};function Nf(t,e){return t.add(wt(e))}D.R=function(t){if(br(this)||br(t))return Mo;if(En(this))return En(t)?wt(this).R(wt(t)):wt(wt(this).R(t));if(En(t))return wt(this.R(wt(t)));if(0>this.X(vT)&&0>t.X(vT))return Jn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Qc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Qc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Qc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Qc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new _e(n,0)};function Qc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ga(t,e){this.g=t,this.h=e}function Of(t,e){if(br(e))throw Error("division by zero");if(br(t))return new Ga(Mo,Mo);if(En(t))return e=Of(wt(t),e),new Ga(wt(e.g),wt(e.h));if(En(e))return e=Of(t,wt(e)),new Ga(wt(e.g),e.h);if(30<t.g.length){if(En(t)||En(e))throw Error("slowDivide_ only works with positive integers.");for(var n=_y,r=e;0>=r.X(t);)n=_T(n),r=_T(r);var i=io(n,1),s=io(r,1);for(r=io(r,2),n=io(n,2);!br(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=io(r,1),n=io(n,1)}return e=Nf(t,i.R(e)),new Ga(i,e)}for(i=Mo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Jn(n),o=s.R(e);En(o)||0<o.X(t);)n-=r,s=Jn(n),o=s.R(e);br(s)&&(s=_y),i=i.add(s),t=Nf(t,o)}return new Ga(i,t)}D.gb=function(t){return Of(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new _e(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new _e(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new _e(n,this.h^t.h)};function _T(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new _e(n,t.h)}function io(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new _e(i,t.h)}Pf.prototype.createWebChannel=Pf.prototype.g;mn.prototype.send=mn.prototype.u;mn.prototype.open=mn.prototype.m;mn.prototype.close=mn.prototype.close;Nh.NO_ERROR=0;Nh.TIMEOUT=8;Nh.HTTP_ERROR=6;cA.COMPLETE="complete";dA.EventType=Gu;Gu.OPEN="a";Gu.CLOSE="b";Gu.ERROR="c";Gu.MESSAGE="d";mt.prototype.listen=mt.prototype.O;He.prototype.listenOnce=He.prototype.P;He.prototype.getLastError=He.prototype.Sa;He.prototype.getLastErrorCode=He.prototype.Ia;He.prototype.getStatus=He.prototype.da;He.prototype.getResponseJson=He.prototype.Wa;He.prototype.getResponseText=He.prototype.ja;He.prototype.send=He.prototype.ha;He.prototype.setWithCredentials=He.prototype.Oa;Un.prototype.digest=Un.prototype.l;Un.prototype.reset=Un.prototype.reset;Un.prototype.update=Un.prototype.j;_e.prototype.add=_e.prototype.add;_e.prototype.multiply=_e.prototype.R;_e.prototype.modulo=_e.prototype.gb;_e.prototype.compare=_e.prototype.X;_e.prototype.toNumber=_e.prototype.ea;_e.prototype.toString=_e.prototype.toString;_e.prototype.getBits=_e.prototype.D;_e.fromNumber=Jn;_e.fromString=KA;var hU=function(){return new Pf},pU=function(){return Ph()},um=Nh,mU=cA,gU=qs,wT={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Yc=dA,yU=He,vU=Un,$o=_e;const ET="@firebase/firestore";/**
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
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let Ra="10.7.0";/**
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
 */const Ms=new D0("@firebase/firestore");function Qa(){return Ms.logLevel}function F(t,...e){if(Ms.logLevel<=fe.DEBUG){const n=e.map(h_);Ms.debug(`Firestore (${Ra}): ${t}`,...n)}}function Ur(t,...e){if(Ms.logLevel<=fe.ERROR){const n=e.map(h_);Ms.error(`Firestore (${Ra}): ${t}`,...n)}}function sa(t,...e){if(Ms.logLevel<=fe.WARN){const n=e.map(h_);Ms.warn(`Firestore (${Ra}): ${t}`,...n)}}function h_(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Ra}) INTERNAL ASSERTION FAILED: `+t;throw Ur(e),new Error(e)}function Se(t,e){t||Z()}function ie(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends hr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class GA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _U{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class wU{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class EU{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ar,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new GA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new At(e)}}class TU{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class IU{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new TU(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kU{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xU{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new kU(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function SU(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class QA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=SU(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function oa(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new lt(0,0))}static max(){return new re(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class wu{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends wu{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const bU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends wu{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return bU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ne.fromString(e))}static fromName(e){return new Q(Ne.fromString(e).popFirst(5))}static empty(){return new Q(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ne(e.slice()))}}function RU(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Mi(i,Q.empty(),e)}function CU(t){return new Mi(t.readTime,t.key,-1)}class Mi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mi(re.min(),Q.empty(),-1)}static max(){return new Mi(re.max(),Q.empty(),-1)}}function AU(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const PU="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NU{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zu(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==PU)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ec(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class p_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}p_._e=-1;function zh(t){return t==null}function jf(t){return t===0&&1/t==-1/0}function OU(t){return typeof t=="number"&&Number.isInteger(t)&&!jf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function TT(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ze{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xc(this.root,e,this.comparator,!0)}}class Xc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_t.RED,this.left=i??_t.EMPTY,this.right=s??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new _t(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new IT(this.data.getIterator())}getIteratorFrom(e){return new IT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class IT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dn{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new dn([])}unionWith(e){let n=new kt(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return oa(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class XA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new XA("Invalid base64 string: "+s):s}}(e);return new Vt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const jU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $i(t){if(Se(!!t),typeof t=="string"){let e=0;const n=jU.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $s(t){return typeof t=="string"?Vt.fromBase64String(t):Vt.fromUint8Array(t)}/**
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
 */function m_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function g_(t){const e=t.mapValue.fields.__previous_value__;return m_(e)?g_(e):e}function Eu(t){const e=$i(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
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
 */class DU{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Tu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Tu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Tu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?m_(t)?4:LU(t)?9007199254740991:10:Z()}function cr(t,e){if(t===e)return!0;const n=Vs(t);if(n!==Vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Eu(t).isEqual(Eu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=$i(i.timestampValue),a=$i(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return $s(i.bytesValue).isEqual($s(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Je(i.geoPointValue.latitude)===Je(s.geoPointValue.latitude)&&Je(i.geoPointValue.longitude)===Je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Je(i.integerValue)===Je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Je(i.doubleValue),a=Je(s.doubleValue);return o===a?jf(o)===jf(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return oa(t.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(TT(o)!==TT(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!cr(o[l],a[l])))return!1;return!0}(t,e);default:return Z()}}function Iu(t,e){return(t.values||[]).find(n=>cr(n,e))!==void 0}function aa(t,e){if(t===e)return 0;const n=Vs(t),r=Vs(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Je(s.integerValue||s.doubleValue),l=Je(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return kT(t.timestampValue,e.timestampValue);case 4:return kT(Eu(t),Eu(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(s,o){const a=$s(s),l=$s(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ge(a[u],l[u]);if(c!==0)return c}return ge(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ge(Je(s.latitude),Je(o.latitude));return a!==0?a:ge(Je(s.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=aa(a[u],l[u]);if(c)return c}return ge(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Jc.mapValue&&o===Jc.mapValue)return 0;if(s===Jc.mapValue)return 1;if(o===Jc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=ge(l[d],c[d]);if(h!==0)return h;const p=aa(a[l[d]],u[c[d]]);if(p!==0)return p}return ge(l.length,c.length)}(t.mapValue,e.mapValue);default:throw Z()}}function kT(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=$i(t),r=$i(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function la(t){return wy(t)}function wy(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$i(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $s(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=wy(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wy(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function xT(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ey(t){return!!t&&"integerValue"in t}function y_(t){return!!t&&"arrayValue"in t}function ST(t){return!!t&&"nullValue"in t}function bT(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cd(t){return!!t&&"mapValue"in t}function Cl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Cl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function LU(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Cd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cl(n)}setAll(e){let n=Et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Cl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Cd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Cd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ks(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Xt(Cl(this.value))}}function JA(t){const e=[];return Ks(t.fields,(n,r)=>{const i=new Et([n]);if(Cd(r)){const s=JA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dn(e)}/**
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
 */class Nt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,re.min(),re.min(),re.min(),Xt.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,re.min(),re.min(),Xt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,re.min(),re.min(),Xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Df{constructor(e,n){this.position=e,this.inclusive=n}}function RT(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=aa(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function CT(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Lf{constructor(e,n="asc"){this.field=e,this.dir=n}}function MU(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ZA{}class tt extends ZA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new VU(e,n,r):n==="array-contains"?new UU(e,r):n==="in"?new BU(e,r):n==="not-in"?new HU(e,r):n==="array-contains-any"?new WU(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FU(e,r):new zU(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(aa(n,this.value)):n!==null&&Vs(this.value)===Vs(n)&&this.matchesComparison(aa(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends ZA{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Bn(e,n)}matches(e){return eP(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function eP(t){return t.op==="and"}function tP(t){return $U(t)&&eP(t)}function $U(t){for(const e of t.filters)if(e instanceof Bn)return!1;return!0}function Ty(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+la(t.value);if(tP(t))return t.filters.map(e=>Ty(e)).join(",");{const e=t.filters.map(n=>Ty(n)).join(",");return`${t.op}(${e})`}}function nP(t,e){return t instanceof tt?function(r,i){return i instanceof tt&&r.op===i.op&&r.field.isEqual(i.field)&&cr(r.value,i.value)}(t,e):t instanceof Bn?function(r,i){return i instanceof Bn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&nP(o,i.filters[a]),!0):!1}(t,e):void Z()}function rP(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${la(n.value)}`}(t):t instanceof Bn?function(n){return n.op.toString()+" {"+n.getFilters().map(rP).join(" ,")+"}"}(t):"Filter"}class VU extends tt{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class FU extends tt{constructor(e,n){super(e,"in",n),this.keys=iP("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zU extends tt{constructor(e,n){super(e,"not-in",n),this.keys=iP("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iP(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class UU extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return y_(n)&&Iu(n.arrayValue,this.value)}}class BU extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Iu(this.value.arrayValue,n)}}class HU extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Iu(this.value.arrayValue,n)}}class WU extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!y_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Iu(this.value.arrayValue,r))}}/**
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
 */class qU{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function AT(t,e=null,n=[],r=[],i=null,s=null,o=null){return new qU(t,e,n,r,i,s,o)}function v_(t){const e=ie(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ty(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>la(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>la(r)).join(",")),e.ce=n}return e.ce}function __(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!MU(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nP(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!CT(t.startAt,e.startAt)&&CT(t.endAt,e.endAt)}function Iy(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class tc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function KU(t,e,n,r,i,s,o,a){return new tc(t,e,n,r,i,s,o,a)}function Uh(t){return new tc(t)}function PT(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sP(t){return t.collectionGroup!==null}function Al(t){const e=ie(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new kt(Et.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Lf(s,r))}),n.has(Et.keyField().canonicalString())||e.le.push(new Lf(Et.keyField(),r))}return e.le}function lr(t){const e=ie(t);return e.he||(e.he=GU(e,Al(t))),e.he}function GU(t,e){if(t.limitType==="F")return AT(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Lf(i.field,s)});const n=t.endAt?new Df(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Df(t.startAt.position,t.startAt.inclusive):null;return AT(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ky(t,e){const n=t.filters.concat([e]);return new tc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xy(t,e,n){return new tc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bh(t,e){return __(lr(t),lr(e))&&t.limitType===e.limitType}function oP(t){return`${v_(lr(t))}|lt:${t.limitType}`}function so(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>rP(i)).join(", ")}]`),zh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>la(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>la(i)).join(",")),`Target(${r})`}(lr(t))}; limitType=${t.limitType})`}function Hh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Al(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=RT(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Al(r),i)||r.endAt&&!function(o,a,l){const u=RT(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Al(r),i))}(t,e)}function QU(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function aP(t){return(e,n)=>{let r=!1;for(const i of Al(t)){const s=YU(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function YU(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?aa(l,u):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class Ca{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ks(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return YA(this.inner)}size(){return this.innerSize}}/**
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
 */const XU=new ze(Q.comparator);function Br(){return XU}const lP=new ze(Q.comparator);function ll(...t){let e=lP;for(const n of t)e=e.insert(n.key,n);return e}function uP(t){let e=lP;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function hs(){return Pl()}function cP(){return Pl()}function Pl(){return new Ca(t=>t.toString(),(t,e)=>t.isEqual(e))}const JU=new ze(Q.comparator),ZU=new kt(Q.comparator);function ue(...t){let e=ZU;for(const n of t)e=e.add(n);return e}const eB=new kt(ge);function tB(){return eB}/**
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
 */function dP(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jf(e)?"-0":e}}function fP(t){return{integerValue:""+t}}function hP(t,e){return OU(e)?fP(e):dP(t,e)}/**
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
 */class Wh{constructor(){this._=void 0}}function nB(t,e,n){return t instanceof Mf?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&m_(s)&&(s=g_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ua?mP(t,e):t instanceof ca?gP(t,e):function(i,s){const o=pP(i,s),a=NT(o)+NT(i.Ie);return Ey(o)&&Ey(i.Ie)?fP(a):dP(i.serializer,a)}(t,e)}function rB(t,e,n){return t instanceof ua?mP(t,e):t instanceof ca?gP(t,e):n}function pP(t,e){return t instanceof ku?function(r){return Ey(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Mf extends Wh{}class ua extends Wh{constructor(e){super(),this.elements=e}}function mP(t,e){const n=yP(e);for(const r of t.elements)n.some(i=>cr(i,r))||n.push(r);return{arrayValue:{values:n}}}class ca extends Wh{constructor(e){super(),this.elements=e}}function gP(t,e){let n=yP(e);for(const r of t.elements)n=n.filter(i=>!cr(i,r));return{arrayValue:{values:n}}}class ku extends Wh{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function NT(t){return Je(t.integerValue||t.doubleValue)}function yP(t){return y_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class w_{constructor(e,n){this.field=e,this.transform=n}}function iB(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ua&&i instanceof ua||r instanceof ca&&i instanceof ca?oa(r.elements,i.elements,cr):r instanceof ku&&i instanceof ku?cr(r.Ie,i.Ie):r instanceof Mf&&i instanceof Mf}(t.transform,e.transform)}class sB{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ad(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qh{}function vP(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Kh(t.key,Wt.none()):new nc(t.key,t.data,Wt.none());{const n=t.data,r=Xt.empty();let i=new kt(Et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qi(t.key,r,new dn(i.toArray()),Wt.none())}}function oB(t,e,n){t instanceof nc?function(i,s,o){const a=i.value.clone(),l=jT(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Qi?function(i,s,o){if(!Ad(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=jT(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(_P(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Nl(t,e,n,r){return t instanceof nc?function(s,o,a,l){if(!Ad(s.precondition,o))return a;const u=s.value.clone(),c=DT(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qi?function(s,o,a,l){if(!Ad(s.precondition,o))return a;const u=DT(s.fieldTransforms,l,o),c=o.data;return c.setAll(_P(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Ad(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function aB(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=pP(r.transform,i||null);s!=null&&(n===null&&(n=Xt.empty()),n.set(r.field,s))}return n||null}function OT(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&oa(r,i,(s,o)=>iB(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class nc extends qh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qi extends qh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function _P(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jT(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,rB(o,a,n[i]))}return r}function DT(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nB(s,o,e))}return r}class Kh extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lB extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uB{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&oB(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Nl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Nl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cP();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=vP(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&oa(this.mutations,e.mutations,(n,r)=>OT(n,r))&&oa(this.baseMutations,e.baseMutations,(n,r)=>OT(n,r))}}class E_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=function(){return JU}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new E_(e,n,r,i)}}/**
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
 */class cB{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class dB{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Xe,he;function fB(t){switch(t){default:return Z();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function wP(t){if(t===void 0)return Ur("GRPC error has no .code"),b.UNKNOWN;switch(t){case Xe.OK:return b.OK;case Xe.CANCELLED:return b.CANCELLED;case Xe.UNKNOWN:return b.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return b.INTERNAL;case Xe.UNAVAILABLE:return b.UNAVAILABLE;case Xe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Xe.NOT_FOUND:return b.NOT_FOUND;case Xe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Xe.ABORTED:return b.ABORTED;case Xe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Xe.DATA_LOSS:return b.DATA_LOSS;default:return Z()}}(he=Xe||(Xe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hB(){return new TextEncoder}/**
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
 */const pB=new $o([4294967295,4294967295],0);function LT(t){const e=hB().encode(t),n=new vU;return n.update(e),new Uint8Array(n.digest())}function MT(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new $o([n,r],0),new $o([i,s],0)]}class T_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ul(`Invalid padding: ${n}`);if(r<0)throw new ul(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ul(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ul(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=$o.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply($o.fromNumber(r)));return i.compare(pB)===1&&(i=new $o([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=LT(e),[r,i]=MT(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new T_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=LT(e),[r,i]=MT(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ul extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,rc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gh(re.min(),i,new ze(ge),Br(),ue())}}class rc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new rc(r,n,ue(),ue(),ue())}}/**
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
 */class Pd{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class EP{constructor(e,n){this.targetId=e,this.fe=n}}class TP{constructor(e,n,r=Vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $T{constructor(){this.ge=0,this.pe=FT(),this.ye=Vt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ue(),n=ue(),r=ue();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new rc(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=FT()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Se(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class mB{constructor(e){this.Le=e,this.ke=new Map,this.qe=Br(),this.Qe=VT(),this.Ke=new ze(ge)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Iy(s))if(r===0){const o=new Q(s.path);this.We(n,o,Nt.newNoDocument(o,re.min()))}else Se(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=$s(r).toUint8Array()}catch(l){if(l instanceof XA)return sa("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new T_(o,i,s)}catch(l){return sa(l instanceof ul?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Iy(a.target)){const l=new Q(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Nt.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ue();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Gh(e,n,this.Ke,this.qe,r);return this.qe=Br(),this.Qe=VT(),this.Ke=new ze(ge),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new $T,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new kt(ge),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new $T),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function VT(){return new ze(Q.comparator)}function FT(){return new ze(Q.comparator)}const gB={asc:"ASCENDING",desc:"DESCENDING"},yB={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vB={and:"AND",or:"OR"};class _B{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sy(t,e){return t.useProto3Json||zh(e)?e:{value:e}}function $f(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wB(t,e){return $f(t,e.toTimestamp())}function ur(t){return Se(!!t),re.fromTimestamp(function(n){const r=$i(n);return new lt(r.seconds,r.nanos)}(t))}function I_(t,e){return function(r){return new Ne(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function kP(t){const e=Ne.fromString(t);return Se(RP(e)),e}function by(t,e){return I_(t.databaseId,e.path)}function cm(t,e){const n=kP(e);if(n.get(1)!==t.databaseId.projectId)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(xP(n))}function Ry(t,e){return I_(t.databaseId,e)}function EB(t){const e=kP(t);return e.length===4?Ne.emptyPath():xP(e)}function Cy(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xP(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zT(t,e,n){return{name:by(t,e),fields:n.value.mapValue.fields}}function TB(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Se(c===void 0||typeof c=="string"),Vt.fromBase64String(c||"")):(Se(c===void 0||c instanceof Uint8Array),Vt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?b.UNKNOWN:wP(u.code);return new $(c,u.message||"")}(o);n=new TP(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cm(t,r.document.name),s=ur(r.document.updateTime),o=r.document.createTime?ur(r.document.createTime):re.min(),a=new Xt({mapValue:{fields:r.document.fields}}),l=Nt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Pd(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cm(t,r.document),s=r.readTime?ur(r.readTime):re.min(),o=Nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Pd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cm(t,r.document),s=r.removedTargetIds||[];n=new Pd([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new dB(i,s),a=r.targetId;n=new EP(a,o)}}return n}function IB(t,e){let n;if(e instanceof nc)n={update:zT(t,e.key,e.value)};else if(e instanceof Kh)n={delete:by(t,e.key)};else if(e instanceof Qi)n={update:zT(t,e.key,e.data),updateMask:NB(e.fieldMask)};else{if(!(e instanceof lB))return Z();n={verify:by(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Mf)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ua)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ca)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ku)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:wB(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function kB(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ur(i.updateTime):ur(s);return o.isEqual(re.min())&&(o=ur(s)),new sB(o,i.transformResults||[])}(n,e))):[]}function xB(t,e){return{documents:[Ry(t,e.path)]}}function SB(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ry(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ry(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return bP(Bn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:oo(d.field),direction:CB(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Sy(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function bB(t){let e=EB(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=SP(d);return h instanceof Bn&&tP(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(m){return new Lf(ao(m.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,zh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,p=d.values||[];return new Df(p,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,p=d.values||[];return new Df(p,h)}(n.endAt)),KU(e,i,o,s,a,"F",l,u)}function RB(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SP(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ao(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ao(n.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ao(n.unaryFilter.field);return tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ao(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(ao(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bn.create(n.compositeFilter.filters.map(r=>SP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function CB(t){return gB[t]}function AB(t){return yB[t]}function PB(t){return vB[t]}function oo(t){return{fieldPath:t.canonicalString()}}function ao(t){return Et.fromServerFormat(t.fieldPath)}function bP(t){return t instanceof tt?function(n){if(n.op==="=="){if(bT(n.value))return{unaryFilter:{field:oo(n.field),op:"IS_NAN"}};if(ST(n.value))return{unaryFilter:{field:oo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bT(n.value))return{unaryFilter:{field:oo(n.field),op:"IS_NOT_NAN"}};if(ST(n.value))return{unaryFilter:{field:oo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oo(n.field),op:AB(n.op),value:n.value}}}(t):t instanceof Bn?function(n){const r=n.getFilters().map(i=>bP(i));return r.length===1?r[0]:{compositeFilter:{op:PB(n.op),filters:r}}}(t):Z()}function NB(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class mi{constructor(e,n,r,i,s=re.min(),o=re.min(),a=Vt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class OB{constructor(e){this.ut=e}}function jB(t){const e=bB({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xy(e,e.limit,"L"):e}/**
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
 */class DB{constructor(){this.on=new LB}addToCollectionParentIndex(e,n){return this.on.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Mi.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Mi.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class LB{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new kt(Ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new kt(Ne.comparator)).toArray()}}/**
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
 */class da{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new da(0)}static Nn(){return new da(-1)}}/**
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
 */class MB{constructor(){this.changes=new Ca(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class $B{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class VB{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Nl(r.mutation,i,dn.empty(),lt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=hs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ll();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=hs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Br();const o=Pl(),a=function(){return Pl()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Qi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Nl(c.mutation,u,c.mutation.getFieldMask(),lt.now())):o.set(u.key,dn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new $B(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Pl();let i=new ze((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||dn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||ue()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=cP();c.forEach(h=>{if(!s.has(h)){const p=vP(n.get(h),r.get(h));p!==null&&d.set(h,p),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(hs());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ue())).next(c=>({batchId:a,changes:uP(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=ll();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ll();return this.indexManager.getCollectionParents(e,s).next(a=>C.forEach(a,l=>{const u=function(d,h){return new tc(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,h)=>{o=o.insert(d,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Nt.newInvalidDocument(c)))});let a=ll();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Nl(c.mutation,u,dn.empty(),lt.now()),Hh(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class FB{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return C.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ur(i.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:jB(i.bundledQuery),readTime:ur(i.readTime)}}(n)),C.resolve()}}/**
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
 */class zB{constructor(){this.overlays=new ze(Q.comparator),this.lr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hs();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=hs(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ze((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=hs(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=hs(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cB(n,r));let s=this.lr.get(n);s===void 0&&(s=ue(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class k_{constructor(){this.hr=new kt(dt.Pr),this.Ir=new kt(dt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new dt(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new Q(new Ne([])),r=new dt(n,e),i=new dt(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new Q(new Ne([])),r=new dt(n,e),i=new dt(n,e+1);let s=ue();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new dt(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return Q.comparator(e.key,n.key)||ge(e.gr,n.gr)}static Tr(e,n){return ge(e.gr,n.gr)||Q.comparator(e.key,n.key)}}/**
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
 */class UB{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new kt(dt.Pr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uB(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new dt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new kt(ge);return n.forEach(i=>{const s=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),C.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new dt(new Q(s),0);let a=new kt(ge);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),C.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return C.forEach(n.mutations,i=>{const s=new dt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new dt(n,0),i=this.yr.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class BB{constructor(e){this.Cr=e,this.docs=function(){return new ze(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=Br();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Nt.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Br();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||AU(CU(c),r)<=0||(i.has(c.key)||Hh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}vr(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HB(this)}getSize(e){return C.resolve(this.size)}}class HB extends MB{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class WB{constructor(e){this.persistence=e,this.Fr=new Ca(n=>v_(n),__),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Mr=0,this.Or=new k_,this.targetCount=0,this.Nr=da.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),C.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new da(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.kn(n),C.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Or.containsKey(n))}}/**
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
 */class qB{constructor(e,n){this.Br={},this.overlays={},this.Lr=new p_(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new WB(this),this.indexManager=new DB,this.remoteDocumentCache=function(i){return new BB(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new OB(n),this.Kr=new FB(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zB,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new UB(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new KB(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return C.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class KB extends NU{constructor(e){super(),this.currentSequenceNumber=e}}class x_{constructor(e){this.persistence=e,this.Gr=new k_,this.zr=null}static jr(e){return new x_(e)}get Hr(){if(this.zr)return this.zr;throw Z()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hr,r=>{const i=Q.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return C.or([()=>C.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class S_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new S_(e,n.fromCache,r,i)}}/**
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
 */class GB{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class QB{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new GB;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(Qa()<=fe.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",so(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),C.resolve()):(Qa()<=fe.DEBUG&&F("QueryEngine","Query:",so(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Qa()<=fe.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",so(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(n))):C.resolve())}zi(e,n){if(PT(n))return C.resolve(null);let r=lr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xy(n,null,"F"),r=lr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,xy(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return PT(n)||i.isEqual(re.min())?C.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?C.resolve(null):(Qa()<=fe.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),so(n)),this.Xi(e,o,n,RU(i,-1)).next(a=>a))})}Yi(e,n){let r=new kt(aP(e));return n.forEach((i,s)=>{Hh(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return Qa()<=fe.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",so(n)),this.Gi.getDocumentsMatchingQuery(e,n,Mi.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class YB{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new ze(ge),this.ns=new Ca(s=>v_(s),__),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VB(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function XB(t,e,n,r){return new YB(t,e,n,r)}async function CP(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ue();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function JB(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,h=d.keys();let p=C.resolve();return h.forEach(m=>{p=p.next(()=>c.getEntry(l,m)).next(E=>{const _=u.docVersions.get(m);Se(_!==null),E.version.compareTo(_)<0&&(d.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),c.addEntry(E)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ue();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function AP(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function ZB(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,d)));let p=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?p=p.withResumeToken(Vt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(d,p),function(E,_,v){return E.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(h,p,c)&&a.push(n.qr.updateTargetData(s,p))});let l=Br(),u=ue();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(e7(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(re.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(d=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function e7(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Br();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function t7(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function n7(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new mi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Ay(t,e,n){const r=ie(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ec(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function UT(t,e,n){const r=ie(t);let i=re.min(),s=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=ie(l),h=d.ns.get(c);return h!==void 0?C.resolve(d.ts.get(h)):d.qr.getTargetData(u,c)}(r,o,lr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:ue())).next(a=>(r7(r,QU(e),a),{documents:a,ls:s})))}function r7(t,e,n){let r=t.rs.get(e)||re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class BT{constructor(){this.activeTargetIds=tB()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class i7{constructor(){this.eo=new BT,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new BT,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class s7{ro(e){}shutdown(){}}/**
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
 */class HT{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zc=null;function dm(){return Zc===null?Zc=function(){return 268435456+Math.round(2147483648*Math.random())}():Zc++,"0x"+Zc.toString(16)}/**
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
 */const o7={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class a7{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const Ct="WebChannelConnection";class l7 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=dm(),l=this.So(n,r);F("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(F("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw sa("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ra}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=o7[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=dm();return new Promise((o,a)=>{const l=new yU;l.setWithCredentials(!0),l.listenOnce(mU.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case um.NO_ERROR:const c=l.getResponseJson();F(Ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case um.TIMEOUT:F(Ct,`RPC '${e}' ${s} timed out`),a(new $(b.DEADLINE_EXCEEDED,"Request time out"));break;case um.HTTP_ERROR:const d=l.getStatus();if(F(Ct,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const m=function(_){const v=_.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(v)>=0?v:b.UNKNOWN}(p.status);a(new $(m,p.message))}else a(new $(b.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new $(b.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{F(Ct,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);F(Ct,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=dm(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hU(),a=pU(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");F(Ct,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,p=!1;const m=new a7({co:_=>{p?F(Ct,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||(F(Ct,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),F(Ct,`RPC '${e}' stream ${i} sending:`,_),d.send(_))},lo:()=>d.close()}),E=(_,v,g)=>{_.listen(v,w=>{try{g(w)}catch(T){setTimeout(()=>{throw T},0)}})};return E(d,Yc.EventType.OPEN,()=>{p||F(Ct,`RPC '${e}' stream ${i} transport opened.`)}),E(d,Yc.EventType.CLOSE,()=>{p||(p=!0,F(Ct,`RPC '${e}' stream ${i} transport closed`),m.Ro())}),E(d,Yc.EventType.ERROR,_=>{p||(p=!0,sa(Ct,`RPC '${e}' stream ${i} transport errored:`,_),m.Ro(new $(b.UNAVAILABLE,"The operation could not be completed")))}),E(d,Yc.EventType.MESSAGE,_=>{var v;if(!p){const g=_.data[0];Se(!!g);const w=g,T=w.error||((v=w[0])===null||v===void 0?void 0:v.error);if(T){F(Ct,`RPC '${e}' stream ${i} received error:`,T);const x=T.status;let I=function(O){const j=Xe[O];if(j!==void 0)return wP(j)}(x),k=T.message;I===void 0&&(I=b.INTERNAL,k="Unknown error status: "+x+" with message "+T.message),p=!0,m.Ro(new $(I,k)),d.close()}else F(Ct,`RPC '${e}' stream ${i} received:`,g),m.Vo(g)}}),E(a,gU.STAT_EVENT,_=>{_.stat===wT.PROXY?F(Ct,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===wT.NOPROXY&&F(Ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function fm(){return typeof document<"u"?document:null}/**
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
 */function Qh(t){return new _B(t,!0)}/**
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
 */class PP{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class NP{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new PP(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Ur(n.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new $(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class u7 extends NP{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=TB(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?ur(o.readTime):re.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Cy(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Iy(l)?{documents:xB(s,l)}:{query:SB(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=IP(s,o.resumeToken);const u=Sy(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=$f(s,o.snapshotVersion.toTimestamp());const u=Sy(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=RB(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Cy(this.serializer),n.removeTarget=e,this.e_(n)}}class c7 extends NP{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=kB(e.writeResults,e.commitTime),r=ur(e.commitTime);return this.listener.I_(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Cy(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IB(this.serializer,r))};this.e_(n)}}/**
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
 */class d7 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(b.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(b.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class f7{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Ur(n),this.f_=!1):F("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class h7{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Gs(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ie(l);u.C_.add(4),await ic(u),u.M_.set("Unknown"),u.C_.delete(4),await Yh(u)}(this))})}),this.M_=new f7(r,i)}}async function Yh(t){if(Gs(t))for(const e of t.v_)await e(!0)}async function ic(t){for(const e of t.v_)await e(!1)}function OP(t,e){const n=ie(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),C_(n)?R_(n):Aa(n).Ho()&&b_(n,e))}function jP(t,e){const n=ie(t),r=Aa(n);n.D_.delete(e),r.Ho()&&DP(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Gs(n)&&n.M_.set("Unknown"))}function b_(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Aa(t).u_(e)}function DP(t,e){t.x_.Oe(e),Aa(t).c_(e)}function R_(t){t.x_=new mB({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Aa(t).start(),t.M_.g_()}function C_(t){return Gs(t)&&!Aa(t).jo()&&t.D_.size>0}function Gs(t){return ie(t).C_.size===0}function LP(t){t.x_=void 0}async function p7(t){t.D_.forEach((e,n)=>{b_(t,e)})}async function m7(t,e){LP(t),C_(t)?(t.M_.w_(e),R_(t)):t.M_.set("Unknown")}async function g7(t,e,n){if(t.M_.set("Online"),e instanceof TP&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vf(t,r)}else if(e instanceof Pd?t.x_.$e(e):e instanceof EP?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(re.min()))try{const r=await AP(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(Vt.EMPTY_BYTE_STRING,c.snapshotVersion)),DP(s,l);const d=new mi(c.target,l,u,c.sequenceNumber);b_(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Vf(t,r)}}async function Vf(t,e,n){if(!ec(e))throw e;t.C_.add(1),await ic(t),t.M_.set("Offline"),n||(n=()=>AP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Yh(t)})}function MP(t,e){return e().catch(n=>Vf(t,n,e))}async function Xh(t){const e=ie(t),n=Vi(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;y7(e);)try{const i=await t7(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,v7(e,i)}catch(i){await Vf(e,i)}$P(e)&&VP(e)}function y7(t){return Gs(t)&&t.b_.length<10}function v7(t,e){t.b_.push(e);const n=Vi(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function $P(t){return Gs(t)&&!Vi(t).jo()&&t.b_.length>0}function VP(t){Vi(t).start()}async function _7(t){Vi(t).E_()}async function w7(t){const e=Vi(t);for(const n of t.b_)e.P_(n.mutations)}async function E7(t,e,n){const r=t.b_.shift(),i=E_.from(r,e,n);await MP(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xh(t)}async function T7(t,e){e&&Vi(t).h_&&await async function(r,i){if(function(o){return fB(o)&&o!==b.ABORTED}(i.code)){const s=r.b_.shift();Vi(r).Yo(),await MP(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Xh(r)}}(t,e),$P(t)&&VP(t)}async function WT(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Gs(n);n.C_.add(3),await ic(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Yh(n)}async function I7(t,e){const n=ie(t);e?(n.C_.delete(2),await Yh(n)):e||(n.C_.add(2),await ic(n),n.M_.set("Unknown"))}function Aa(t){return t.O_||(t.O_=function(n,r,i){const s=ie(n);return s.A_(),new u7(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:p7.bind(null,t),Io:m7.bind(null,t),a_:g7.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),C_(t)?R_(t):t.M_.set("Unknown")):(await t.O_.stop(),LP(t))})),t.O_}function Vi(t){return t.N_||(t.N_=function(n,r,i){const s=ie(n);return s.A_(),new c7(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:_7.bind(null,t),Io:T7.bind(null,t),T_:w7.bind(null,t),I_:E7.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Xh(t)):(await t.N_.stop(),t.b_.length>0&&(F("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class A_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new A_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function P_(t,e){if(Ur("AsyncQueue",`${e}: ${t}`),ec(t))return new $(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Vo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=ll(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Vo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class qT{constructor(){this.B_=new ze(Q.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Z():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class fa{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new fa(e,n,Vo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class k7{constructor(){this.k_=void 0,this.listeners=[]}}class x7{constructor(){this.queries=new Ca(e=>oP(e),Bh),this.onlineState="Unknown",this.q_=new Set}}async function N_(t,e){const n=ie(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new k7),i)try{s.k_=await n.onListen(r)}catch(o){const a=P_(o,`Initialization of query '${so(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&j_(n)}async function O_(t,e){const n=ie(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function S7(t,e){const n=ie(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&j_(n)}function b7(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function j_(t){t.q_.forEach(e=>{e.next()})}class D_{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=fa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class FP{constructor(e){this.key=e}}class zP{constructor(e){this.key=e}}class R7{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ue(),this.mutatedKeys=ue(),this._a=aP(e),this.aa=new Vo(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new qT,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),p=Hh(this.query,d)?d:null,m=!!h&&this.mutatedKeys.has(h.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;h&&p?h.data.isEqual(p.data)?m!==E&&(r.track({type:3,doc:p}),_=!0):this.ha(h,p)||(r.track({type:2,doc:p}),_=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),_=!0):h&&!p&&(r.track({type:1,doc:h}),_=!0,(l||u)&&(a=!0)),_&&(p?(o=o.add(p),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((c,d)=>function(p,m){const E=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return E(p)-E(m)}(c.type,d.type)||this._a(c.doc,d.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new fa(this.query,e.aa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new qT,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ue(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new zP(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new FP(r))}),n}da(e){this.ia=e.ls,this.oa=ue();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return fa.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class C7{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class A7{constructor(e){this.key=e,this.Ra=!1}}class P7{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ca(a=>oP(a),Bh),this.fa=new Map,this.ga=new Set,this.pa=new ze(Q.comparator),this.ya=new Map,this.wa=new k_,this.Sa={},this.ba=new Map,this.Da=da.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function N7(t,e){const n=U7(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await n7(n.localStore,lr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await O7(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&OP(n.remoteStore,o)}return i}async function O7(t,e,n,r,i){t.va=(d,h,p)=>async function(E,_,v,g){let w=_.view.ca(v);w.Zi&&(w=await UT(E.localStore,_.query,!1).then(({documents:k})=>_.view.ca(k,w)));const T=g&&g.targetChanges.get(_.targetId),x=g&&g.targetMismatches.get(_.targetId)!=null,I=_.view.applyChanges(w,E.isPrimaryClient,T,x);return GT(E,_.targetId,I.Ta),I.snapshot}(t,d,h,p);const s=await UT(t.localStore,e,!0),o=new R7(e,s.ls),a=o.ca(s.documents),l=rc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);GT(t,n,u.Ta);const c=new C7(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function j7(t,e){const n=ie(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Bh(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ay(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),jP(n.remoteStore,r.targetId),Py(n,r.targetId)}).catch(Zu)):(Py(n,r.targetId),await Ay(n.localStore,r.targetId,!0))}async function D7(t,e,n){const r=B7(t);try{const i=await function(o,a){const l=ie(o),u=lt.now(),c=a.reduce((p,m)=>p.add(m.key),ue());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=Br(),E=ue();return l.ss.getEntries(p,c).next(_=>{m=_,m.forEach((v,g)=>{g.isValidDocument()||(E=E.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,m)).next(_=>{d=_;const v=[];for(const g of a){const w=aB(g,d.get(g.key).overlayedDocument);w!=null&&v.push(new Qi(g.key,w,JA(w.value.mapValue),Wt.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,v,a)}).next(_=>{h=_;const v=_.applyToLocalDocumentSet(d,E);return l.documentOverlayCache.saveOverlays(p,_.batchId,v)})}).then(()=>({batchId:h.batchId,changes:uP(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new ze(ge)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await sc(r,i.changes),await Xh(r.remoteStore)}catch(i){const s=P_(i,"Failed to persist write");n.reject(s)}}async function UP(t,e){const n=ie(t);try{const r=await ZB(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?Se(o.Ra):i.removedDocuments.size>0&&(Se(o.Ra),o.Ra=!1))}),await sc(n,r,e)}catch(r){await Zu(r)}}function KT(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ie(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.listeners)h.Q_(a)&&(u=!0)}),u&&j_(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function L7(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new ze(Q.comparator);o=o.insert(s,Nt.newNoDocument(s,re.min()));const a=ue().add(s),l=new Gh(re.min(),new Map,new ze(ge),o,a);await UP(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),L_(r)}else await Ay(r.localStore,e,!1).then(()=>Py(r,e,n)).catch(Zu)}async function M7(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await JB(n.localStore,e);HP(n,r,null),BP(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sc(n,i)}catch(i){await Zu(i)}}async function $7(t,e,n){const r=ie(t);try{const i=await function(o,a){const l=ie(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Se(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);HP(r,e,n),BP(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sc(r,i)}catch(i){await Zu(i)}}function BP(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function HP(t,e,n){const r=ie(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Py(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||WP(t,r)})}function WP(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(jP(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),L_(t))}function GT(t,e,n){for(const r of n)r instanceof FP?(t.wa.addReference(r.key,e),V7(t,r)):r instanceof zP?(F("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||WP(t,r.key)):Z()}function V7(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(F("SyncEngine","New document in limbo: "+n),t.ga.add(r),L_(t))}function L_(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new Q(Ne.fromString(e)),r=t.Da.next();t.ya.set(r,new A7(n)),t.pa=t.pa.insert(n,r),OP(t.remoteStore,new mi(lr(Uh(n.path)),r,"TargetPurposeLimboResolution",p_._e))}}async function sc(t,e,n){const r=ie(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=S_.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=ie(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>C.forEach(u,h=>C.forEach(h.ki,p=>c.persistence.referenceDelegate.addReference(d,h.targetId,p)).next(()=>C.forEach(h.qi,p=>c.persistence.referenceDelegate.removeReference(d,h.targetId,p)))))}catch(d){if(!ec(d))throw d;F("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const p=c.ts.get(h),m=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(m);c.ts=c.ts.insert(h,E)}}}(r.localStore,s))}async function F7(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await CP(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new $(b.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sc(n,r._s)}}function z7(t,e){const n=ie(t),r=n.ya.get(e);if(r&&r.Ra)return ue().add(r.key);{let i=ue();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function U7(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=UP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=z7.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=L7.bind(null,e),e.Va.a_=S7.bind(null,e.eventManager),e.Va.Fa=b7.bind(null,e.eventManager),e}function B7(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=M7.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$7.bind(null,e),e}class QT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return XB(this.persistence,new QB,e.initialUser,this.serializer)}createPersistence(e){return new qB(x_.jr,this.serializer)}createSharedClientState(e){return new i7}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class H7{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>KT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=F7.bind(null,this.syncEngine),await I7(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new x7}()}createDatastore(e){const n=Qh(e.databaseInfo.databaseId),r=function(s){return new l7(s)}(e.databaseInfo);return function(s,o,a,l){return new d7(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new h7(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>KT(this.syncEngine,n,0),function(){return HT.D()?new HT:new s7}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new P7(i,s,o,a,l,u);return c&&(d.Ca=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ie(n);F("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ic(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class M_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class W7{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=At.UNAUTHENTICATED,this.clientId=QA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=P_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hm(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await CP(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function YT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await K7(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>WT(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>WT(e.remoteStore,s)),t._onlineComponents=e}function q7(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function K7(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await hm(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!q7(n))throw n;sa("Error using user provided cache. Falling back to memory cache: "+n),await hm(t,new QT)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await hm(t,new QT);return t._offlineComponents}async function qP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await YT(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await YT(t,new H7))),t._onlineComponents}function G7(t){return qP(t).then(e=>e.syncEngine)}async function Ff(t){const e=await qP(t),n=e.eventManager;return n.onListen=N7.bind(null,e.syncEngine),n.onUnlisten=j7.bind(null,e.syncEngine),n}function Q7(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new M_({next:h=>{o.enqueueAndForget(()=>O_(s,d));const p=h.docs.has(a);!p&&h.fromCache?u.reject(new $(b.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&h.fromCache&&l&&l.source==="server"?u.reject(new $(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new D_(Uh(a.path),c,{includeMetadataChanges:!0,J_:!0});return N_(s,d)}(await Ff(t),t.asyncQueue,e,n,r)),r.promise}function Y7(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new M_({next:h=>{o.enqueueAndForget(()=>O_(s,d)),h.fromCache&&l.source==="server"?u.reject(new $(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new D_(a,c,{includeMetadataChanges:!0,J_:!0});return N_(s,d)}(await Ff(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function KP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const XT=new Map;/**
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
 */function GP(t,e,n){if(!n)throw new $(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function X7(t,e,n,r){if(e===!0&&r===!0)throw new $(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function JT(t){if(!Q.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ZT(t){if(Q.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jh(t);throw new $(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class eI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}X7("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=KP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _U;switch(r.type){case"firstParty":return new IU(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=XT.get(n);r&&(F("ComponentProvider","Removing Datastore"),XT.delete(n),r.terminate())}(this),Promise.resolve()}}function J7(t,e,n,r={}){var i;const s=(t=qt(t,Zh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&sa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=At.MOCK_USER;else{a=aC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new $(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new At(u)}t._authCredentials=new wU(new GA(a,l))}}/**
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
 */class Qs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qs(this.firestore,e,this._query)}}class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class Ri extends Qs{constructor(e,n,r){super(e,n,Uh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new Q(e))}withConverter(e){return new Ri(this.firestore,e,this._path)}}function $_(t,e,...n){if(t=we(t),GP("collection","path",e),t instanceof Zh){const r=Ne.fromString(e,...n);return ZT(r),new Ri(t,null,r)}{if(!(t instanceof Lt||t instanceof Ri))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return ZT(r),new Ri(t.firestore,null,r)}}function Vn(t,e,...n){if(t=we(t),arguments.length===1&&(e=QA.newId()),GP("doc","path",e),t instanceof Zh){const r=Ne.fromString(e,...n);return JT(r),new Lt(t,null,new Q(r))}{if(!(t instanceof Lt||t instanceof Ri))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return JT(r),new Lt(t.firestore,t instanceof Ri?t.converter:null,new Q(r))}}/**
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
 */class Z7{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new PP(this,"async_queue_retry"),this.iu=()=>{const n=fm();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=fm();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=fm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Ar;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ec(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ur("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=A_.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&Z()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function tI(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class dr extends Zh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Z7}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||QP(this),this._firestoreClient.terminate()}}function e8(t,e){const n=typeof t=="object"?t:Eh(),r=typeof t=="string"?t:e||"(default)",i=wh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=iC("firestore");s&&J7(i,...s)}return i}function oc(t){return t._firestoreClient||QP(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function QP(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new DU(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,KP(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new W7(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class ha{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ha(Vt.fromBase64String(e))}catch(n){throw new $(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ha(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ac{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Pa{constructor(e){this._methodName=e}}/**
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
 */class V_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const t8=/^__.*__$/;class n8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,n,this.fieldTransforms):new nc(e,this.data,n,this.fieldTransforms)}}class YP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function XP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class ep{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return zf(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(XP(this.Iu)&&t8.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class r8{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qh(e)}pu(e,n,r,i=!1){return new ep({Iu:e,methodName:n,gu:r,path:Et.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lc(t){const e=t._freezeSettings(),n=Qh(t._databaseId);return new r8(t._databaseId,!!e.ignoreUndefinedProperties,n)}function F_(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);z_("Data must be an object, but it was:",o,r);const a=tN(r,o);let l,u;if(s.merge)l=new dn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=Ny(e,d,n);if(!o.contains(h))throw new $(b.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);rN(c,h)||c.push(h)}l=new dn(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new n8(new Xt(a),l,u)}class tp extends Pa{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tp}}function JP(t,e,n){return new ep({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class i8 extends Pa{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=JP(this,e,!0),r=this.yu.map(s=>Ys(s,n)),i=new ua(r);return new w_(e.path,i)}isEqual(e){return this===e}}class s8 extends Pa{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=JP(this,e,!0),r=this.yu.map(s=>Ys(s,n)),i=new ca(r);return new w_(e.path,i)}isEqual(e){return this===e}}class o8 extends Pa{constructor(e,n){super(e),this.wu=n}_toFieldTransform(e){const n=new ku(e.serializer,hP(e.serializer,this.wu));return new w_(e.path,n)}isEqual(e){return this===e}}function ZP(t,e,n,r){const i=t.pu(1,e,n);z_("Data must be an object, but it was:",i,r);const s=[],o=Xt.empty();Ks(r,(l,u)=>{const c=U_(e,l,n);u=we(u);const d=i.Ru(c);if(u instanceof tp)s.push(c);else{const h=Ys(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new dn(s);return new YP(o,a,i.fieldTransforms)}function eN(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[Ny(e,r,n)],l=[i];if(s.length%2!=0)throw new $(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Ny(e,s[h])),l.push(s[h+1]);const u=[],c=Xt.empty();for(let h=a.length-1;h>=0;--h)if(!rN(u,a[h])){const p=a[h];let m=l[h];m=we(m);const E=o.Ru(p);if(m instanceof tp)u.push(p);else{const _=Ys(m,E);_!=null&&(u.push(p),c.set(p,_))}}const d=new dn(u);return new YP(c,d,o.fieldTransforms)}function a8(t,e,n,r=!1){return Ys(n,t.pu(r?4:3,e))}function Ys(t,e){if(nN(t=we(t)))return z_("Unsupported field value:",e,t),tN(t,e);if(t instanceof Pa)return function(r,i){if(!XP(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ys(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=lt.fromDate(r);return{timestampValue:$f(i.serializer,s)}}if(r instanceof lt){const s=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$f(i.serializer,s)}}if(r instanceof V_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ha)return{bytesValue:IP(i.serializer,r._byteString)};if(r instanceof Lt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:I_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Jh(r)}`)}(t,e)}function tN(t,e){const n={};return YA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ks(t,(r,i)=>{const s=Ys(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function nN(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof V_||t instanceof ha||t instanceof Lt||t instanceof Pa)}function z_(t,e,n){if(!nN(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Jh(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Ny(t,e,n){if((e=we(e))instanceof ac)return e._internalPath;if(typeof e=="string")return U_(t,e);throw zf("Field path arguments must be of type string or ",t,!1,void 0,n)}const l8=new RegExp("[~\\*/\\[\\]]");function U_(t,e,n){if(e.search(l8)>=0)throw zf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ac(...e.split("."))._internalPath}catch{throw zf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zf(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(b.INVALID_ARGUMENT,a+t+l)}function rN(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class iN{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new u8(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(B_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class u8 extends iN{data(){return super.data()}}function B_(t,e){return typeof e=="string"?U_(t,e):e instanceof ac?e._internalPath:e._delegate._internalPath}/**
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
 */function sN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class H_{}class c8 extends H_{}function oN(t,e,...n){let r=[];e instanceof H_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof W_).length,a=s.filter(l=>l instanceof np).length;if(o>1||o>0&&a>0)throw new $(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class np extends c8{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new np(e,n,r)}_apply(e){const n=this._parse(e);return aN(e._query,n),new Qs(e.firestore,e.converter,ky(e._query,n))}_parse(e){const n=lc(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new $(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){rI(d,c);const p=[];for(const m of d)p.push(nI(l,s,m));h={arrayValue:{values:p}}}else h=nI(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||rI(d,c),h=a8(a,o,d,c==="in"||c==="not-in");return tt.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function d8(t,e,n){const r=e,i=B_("where",t);return np._create(i,r,n)}class W_ extends H_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new W_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Bn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)aN(o,l),o=ky(o,l)}(e._query,n),new Qs(e.firestore,e.converter,ky(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function nI(t,e,n){if(typeof(n=we(n))=="string"){if(n==="")throw new $(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sP(e)&&n.indexOf("/")!==-1)throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!Q.isDocumentKey(r))throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xT(t,new Q(r))}if(n instanceof Lt)return xT(t,n._key);throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jh(n)}.`)}function rI(t,e){if(!Array.isArray(t)||t.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aN(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class f8{convertValue(e,n="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ks(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new V_(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=g_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Eu(e));default:return null}}convertTimestamp(e){const n=$i(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Se(RP(r));const i=new Tu(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||Ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function q_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class cl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lN extends iN{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Nd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(B_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Nd extends lN{data(e={}){return super.data(e)}}class uN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Nd(this._firestore,this._userDataWriter,r.key,r,new cl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Nd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Nd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:h8(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function h8(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function cN(t){t=qt(t,Lt);const e=qt(t.firestore,dr);return Q7(oc(e),t._key).then(n=>fN(e,t,n))}class K_ extends f8{constructor(e){super(),this.firestore=e}convertBytes(e){return new ha(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function p8(t){t=qt(t,Qs);const e=qt(t.firestore,dr),n=oc(e),r=new K_(e);return sN(t._query),Y7(n,t._query).then(i=>new uN(e,r,t,i))}function m8(t,e,n){t=qt(t,Lt);const r=qt(t.firestore,dr),i=q_(t.converter,e,n);return uc(r,[F_(lc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Wt.none())])}function ps(t,e,n,...r){t=qt(t,Lt);const i=qt(t.firestore,dr),s=lc(i);let o;return o=typeof(e=we(e))=="string"||e instanceof ac?eN(s,"updateDoc",t._key,e,n,r):ZP(s,"updateDoc",t._key,e),uc(i,[o.toMutation(t._key,Wt.exists(!0))])}function dN(t){return uc(qt(t.firestore,dr),[new Kh(t._key,Wt.none())])}function g8(t,e){const n=qt(t.firestore,dr),r=Vn(t),i=q_(t.converter,e);return uc(n,[F_(lc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function y8(t,...e){var n,r,i;t=we(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||tI(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(tI(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Lt)u=qt(t.firestore,dr),c=Uh(t._key.path),l={next:d=>{e[o]&&e[o](fN(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=qt(t,Qs);u=qt(d.firestore,dr),c=d._query;const h=new K_(u);l={next:p=>{e[o]&&e[o](new uN(u,h,d,p))},error:e[o+1],complete:e[o+2]},sN(t._query)}return function(h,p,m,E){const _=new M_(E),v=new D_(p,_,m);return h.asyncQueue.enqueueAndForget(async()=>N_(await Ff(h),v)),()=>{_.Na(),h.asyncQueue.enqueueAndForget(async()=>O_(await Ff(h),v))}}(oc(u),c,a,l)}function uc(t,e){return function(r,i){const s=new Ar;return r.asyncQueue.enqueueAndForget(async()=>D7(await G7(r),i,s)),s.promise}(oc(t),e)}function fN(t,e,n){const r=n.docs.get(e._key),i=new K_(t);return new lN(t,i,e._key,r,new cl(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class v8{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=lc(e)}set(e,n,r){this._verifyNotCommitted();const i=pm(e,this._firestore),s=q_(i.converter,n,r),o=F_(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Wt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=pm(e,this._firestore);let o;return o=typeof(n=we(n))=="string"||n instanceof ac?eN(this._dataReader,"WriteBatch.update",s._key,n,r,i):ZP(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Wt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=pm(e,this._firestore);return this._mutations=this._mutations.concat(new Kh(n._key,Wt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new $(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function pm(t,e){if((t=we(t)).firestore!==e)throw new $(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function iI(...t){return new i8("arrayUnion",t)}function sI(...t){return new s8("arrayRemove",t)}function oI(t){return new o8("increment",t)}/**
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
 */function _8(t){return oc(t=qt(t,dr)),new v8(t,e=>uc(t,e))}(function(e,n=!0){(function(i){Ra=i})(Hs),js(new Li("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new dr(new EU(r.getProvider("auth-internal")),new xU(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new $(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tu(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),sr(ET,"4.4.0",e),sr(ET,"4.4.0","esm2017")})();/**
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
 */const hN="firebasestorage.googleapis.com",pN="storageBucket",w8=2*60*1e3,E8=10*60*1e3;/**
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
 */class qe extends hr{constructor(e,n,r=0){super(mm(e),`Firebase Storage: ${n} (${mm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return mm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var We;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(We||(We={}));function mm(t){return"storage/"+t}function G_(){const t="An unknown error occurred, please check the error payload for server response.";return new qe(We.UNKNOWN,t)}function T8(t){return new qe(We.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function I8(t){return new qe(We.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function k8(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new qe(We.UNAUTHENTICATED,t)}function x8(){return new qe(We.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function S8(t){return new qe(We.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function b8(){return new qe(We.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function R8(){return new qe(We.CANCELED,"User canceled the upload/download.")}function C8(t){return new qe(We.INVALID_URL,"Invalid URL '"+t+"'.")}function A8(t){return new qe(We.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function P8(){return new qe(We.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+pN+"' property when initializing the app?")}function N8(){return new qe(We.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function O8(){return new qe(We.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function j8(t){return new qe(We.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Oy(t){return new qe(We.INVALID_ARGUMENT,t)}function mN(){return new qe(We.APP_DELETED,"The Firebase app was deleted.")}function D8(t){return new qe(We.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ol(t,e){return new qe(We.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ya(t){throw new qe(We.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Bt.makeFromUrl(e,n)}catch{return new Bt(e,"")}if(r.path==="")return r;throw A8(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(T){T.path_=decodeURIComponent(T.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),m={bucket:1,path:3},E=n===hN?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",v=new RegExp(`^https?://${E}/${i}/${_}`,"i"),w=[{regex:a,indices:l,postModify:s},{regex:p,indices:m,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let T=0;T<w.length;T++){const x=w[T],I=x.regex.exec(e);if(I){const k=I[x.indices.bucket];let S=I[x.indices.path];S||(S=""),r=new Bt(k,S),x.postModify(r);break}}if(r==null)throw C8(e);return r}}class L8{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function M8(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function d(_){i=setTimeout(()=>{i=null,t(p,l())},_)}function h(){s&&clearTimeout(s)}function p(_,...v){if(u){h();return}if(_){h(),c.call(null,_,...v);return}if(l()||o){h(),c.call(null,_,...v);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,d(w)}let m=!1;function E(_){m||(m=!0,h(),!u&&(i!==null?(_||(a=2),clearTimeout(i),d(0)):_||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function $8(t){t(!1)}/**
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
 */function V8(t){return t!==void 0}function F8(t){return typeof t=="object"&&!Array.isArray(t)}function Q_(t){return typeof t=="string"||t instanceof String}function aI(t){return Y_()&&t instanceof Blob}function Y_(){return typeof Blob<"u"}function jy(t,e,n,r){if(r<e)throw Oy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Oy(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function cc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function gN(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Is;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Is||(Is={}));/**
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
 */function z8(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class U8{constructor(e,n,r,i,s,o,a,l,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ed(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Is.NO_ERROR,l=s.getStatus();if(!a||z8(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Is.ABORT;r(!1,new ed(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ed(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());V8(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=G_();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?mN():R8();o(l)}else{const l=b8();o(l)}};this.canceled_?n(!1,new ed(!1,null,!0)):this.backoffId_=M8(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$8(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ed{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function B8(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function H8(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function W8(t,e){e&&(t["X-Firebase-GMPID"]=e)}function q8(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function K8(t,e,n,r,i,s,o=!0){const a=gN(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return W8(u,e),B8(u,n),H8(u,s),q8(u,r),new U8(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function G8(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Q8(...t){const e=G8();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Y_())return new Blob(t);throw new qe(We.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Y8(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function X8(t){if(typeof atob>"u")throw j8("base-64");return atob(t)}/**
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
 */const Zn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gm{constructor(e,n){this.data=e,this.contentType=n||null}}function J8(t,e){switch(t){case Zn.RAW:return new gm(yN(e));case Zn.BASE64:case Zn.BASE64URL:return new gm(vN(t,e));case Zn.DATA_URL:return new gm(eH(e),tH(e))}throw G_()}function yN(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Z8(t){let e;try{e=decodeURIComponent(t)}catch{throw Ol(Zn.DATA_URL,"Malformed data URL.")}return yN(e)}function vN(t,e){switch(t){case Zn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ol(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Zn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ol(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=X8(e)}catch(i){throw i.message.includes("polyfill")?i:Ol(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class _N{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ol(Zn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=nH(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function eH(t){const e=new _N(t);return e.base64?vN(Zn.BASE64,e.rest):Z8(e.rest)}function tH(t){return new _N(t).contentType}function nH(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ci{constructor(e,n){let r=0,i="";aI(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(aI(this.data_)){const r=this.data_,i=Y8(r,e,n);return i===null?null:new ci(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ci(r,!0)}}static getBlob(...e){if(Y_()){const n=e.map(r=>r instanceof ci?r.data_:r);return new ci(Q8.apply(null,n))}else{const n=e.map(o=>Q_(o)?J8(Zn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new ci(i,!0)}}uploadData(){return this.data_}}/**
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
 */function X_(t){let e;try{e=JSON.parse(t)}catch{return null}return F8(e)?e:null}/**
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
 */function rH(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function iH(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function wN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function sH(t,e){return e}class Ft{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||sH}}let td=null;function oH(t){return!Q_(t)||t.length<2?t:wN(t)}function EN(){if(td)return td;const t=[];t.push(new Ft("bucket")),t.push(new Ft("generation")),t.push(new Ft("metageneration")),t.push(new Ft("name","fullPath",!0));function e(s,o){return oH(o)}const n=new Ft("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ft("size");return i.xform=r,t.push(i),t.push(new Ft("timeCreated")),t.push(new Ft("updated")),t.push(new Ft("md5Hash",null,!0)),t.push(new Ft("cacheControl",null,!0)),t.push(new Ft("contentDisposition",null,!0)),t.push(new Ft("contentEncoding",null,!0)),t.push(new Ft("contentLanguage",null,!0)),t.push(new Ft("contentType",null,!0)),t.push(new Ft("metadata","customMetadata",!0)),td=t,td}function aH(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Bt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function lH(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return aH(r,t),r}function TN(t,e,n){const r=X_(e);return r===null?null:lH(t,r,n)}function uH(t,e,n,r){const i=X_(e);if(i===null||!Q_(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),p=cc(h,n,r),m=gN({alt:"media",token:u});return p+m})[0]}function cH(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const lI="prefixes",uI="items";function dH(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[lI])for(const i of n[lI]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new Bt(e,s));r.prefixes.push(o)}if(n[uI])for(const i of n[uI]){const s=t._makeStorageReference(new Bt(e,i.name));r.items.push(s)}return r}function fH(t,e,n){const r=X_(n);return r===null?null:dH(t,e,r)}class rp{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function J_(t){if(!t)throw G_()}function hH(t,e){function n(r,i){const s=TN(t,i,e);return J_(s!==null),s}return n}function pH(t,e){function n(r,i){const s=fH(t,e,i);return J_(s!==null),s}return n}function mH(t,e){function n(r,i){const s=TN(t,i,e);return J_(s!==null),uH(s,i,t.host,t._protocol)}return n}function Z_(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=x8():i=k8():n.getStatus()===402?i=I8(t.bucket):n.getStatus()===403?i=S8(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function IN(t){const e=Z_(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=T8(t.path)),s.serverResponse=i.serverResponse,s}return n}function gH(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=cc(o,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,c=new rp(a,l,pH(t,e.bucket),u);return c.urlParams=s,c.errorHandler=Z_(e),c}function yH(t,e,n){const r=e.fullServerUrl(),i=cc(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new rp(i,s,mH(t,n),o);return a.errorHandler=IN(e),a}function vH(t,e){const n=e.fullServerUrl(),r=cc(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new rp(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=IN(e),a}function _H(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function wH(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=_H(null,e)),r}function EH(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let T=0;T<2;T++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=wH(e,r,i),c=cH(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",p=ci.getBlob(d,r,h);if(p===null)throw N8();const m={name:u.fullPath},E=cc(s,t.host,t._protocol),_="POST",v=t.maxUploadRetryTime,g=new rp(E,_,hH(t,n),v);return g.urlParams=m,g.headers=o,g.body=p.uploadData(),g.errorHandler=Z_(e),g}class TH{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Is.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Is.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Is.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ya("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ya("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ya("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ya("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ya("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class IH extends TH{initXhr(){this.xhr_.responseType="text"}}function ip(){return new IH}/**
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
 */class Fs{constructor(e,n){this._service=e,n instanceof Bt?this._location=n:this._location=Bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fs(e,n)}get root(){const e=new Bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wN(this._location.path)}get storage(){return this._service}get parent(){const e=rH(this._location.path);if(e===null)return null;const n=new Bt(this._location.bucket,e);return new Fs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw D8(e)}}function kH(t,e,n){t._throwIfRoot("uploadBytes");const r=EH(t.storage,t._location,EN(),new ci(e,!0),n);return t.storage.makeRequestWithTokens(r,ip).then(i=>({metadata:i,ref:t}))}function xH(t){const e={prefixes:[],items:[]};return kN(t,e).then(()=>e)}async function kN(t,e,n){const i=await SH(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await kN(t,e,i.nextPageToken)}function SH(t,e){e!=null&&typeof e.maxResults=="number"&&jy("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=gH(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,ip)}function bH(t){t._throwIfRoot("getDownloadURL");const e=yH(t.storage,t._location,EN());return t.storage.makeRequestWithTokens(e,ip).then(n=>{if(n===null)throw O8();return n})}function RH(t){t._throwIfRoot("deleteObject");const e=vH(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ip)}function CH(t,e){const n=iH(t._location.path,e),r=new Bt(t._location.bucket,n);return new Fs(t.storage,r)}/**
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
 */function AH(t){return/^[A-Za-z]+:\/\//.test(t)}function PH(t,e){return new Fs(t,e)}function xN(t,e){if(t instanceof ew){const n=t;if(n._bucket==null)throw P8();const r=new Fs(n,n._bucket);return e!=null?xN(r,e):r}else return e!==void 0?CH(t,e):t}function NH(t,e){if(e&&AH(e)){if(t instanceof ew)return PH(t,e);throw Oy("To use ref(service, url), the first argument must be a Storage instance.")}else return xN(t,e)}function cI(t,e){const n=e==null?void 0:e[pN];return n==null?null:Bt.makeFromBucketSpec(n,t)}function OH(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:aC(i,t.app.options.projectId))}class ew{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=hN,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=w8,this._maxUploadRetryTime=E8,this._requests=new Set,i!=null?this._bucket=Bt.makeFromBucketSpec(i,this._host):this._bucket=cI(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bt.makeFromBucketSpec(this._url,e):this._bucket=cI(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new L8(mN());{const o=K8(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const dI="@firebase/storage",fI="0.12.0";/**
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
 */const SN="storage";function tw(t,e,n){return t=we(t),kH(t,e,n)}function jH(t){return t=we(t),xH(t)}function nw(t){return t=we(t),bH(t)}function DH(t){return t=we(t),RH(t)}function ms(t,e){return t=we(t),NH(t,e)}function LH(t=Eh(),e){t=we(t);const r=wh(t,SN).getImmediate({identifier:e}),i=iC("storage");return i&&MH(r,...i),r}function MH(t,e,n,r={}){OH(t,e,n,r)}function $H(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ew(n,r,i,e,Hs)}function VH(){js(new Li(SN,$H,"PUBLIC").setMultipleInstances(!0)),sr(dI,fI,""),sr(dI,fI,"esm2017")}VH();var hI={VITE_APP_FIREBASE_API_KEY:"AIzaSyCJ6lYC9uaxtETxoXi17ydDv_vbqH4vMpw",VITE_APP_FIREBASE_AUTH_DOMAIN:"cookbook-a4b98.firebaseapp.com",VITE_APP_FIREBASE_PROJECT_ID:"cookbook-a4b98",VITE_APP_FIREBASE_STORAGE_BUCKET:"cookbook-a4b98.appspot.com",VITE__APP_FIREBASE_MESSAGING_SENDER_ID:"19328478324",VITE__APP_FIREBASE_APP_ID:"1:19328478324:web:e5cde85e71055baf22b521",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const FH={apiKey:"AIzaSyCJ6lYC9uaxtETxoXi17ydDv_vbqH4vMpw",authDomain:"cookbook-a4b98.firebaseapp.com",projectId:"cookbook-a4b98",storageBucket:"cookbook-a4b98.appspot.com",messagingSenderId:hI.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,appId:hI.VITE_APP_FIREBASE_APP_ID},bN=cC(FH),dl=cz(bN),sn=e8(bN),zH=Eh(),gs=LH(zH),RN=y.createContext(),UH=({children:t})=>{const[e,n]=y.useState(null),r="https://firebasestorage.googleapis.com/v0/b/cookbook-a4b98.appspot.com/o/profile%2Fanon-chef1.png?alt=media&token=76a571b2-6999-4a5e-a553-5d5ae628b522",[i,s]=y.useState(!0),[o,a]=y.useState(!1),[l,u]=y.useState([]),[c,d]=y.useState(!0),[h,p]=y.useState([]),[m,E]=y.useState(""),_=window.location.pathname,[v,g]=y.useState(!1),[w,T]=y.useState([]),x=(P,N,z)=>q6(dl,N,z).then(async W=>{const G=Vn(sn,"users",W.user.uid);await jC(W.user,{displayName:P,photoURL:r}),await m8(G,{username:P,email:N,liked:[]});const R={...W.user,displayName:P};n(R)}).catch(W=>console.log(W)),I=(P,N)=>K6(dl,P,N),k=()=>J6(dl),S=P=>{u(P)},O=P=>{p(P)},j=P=>{E(P)};y.useEffect(()=>{(()=>{const N=oN($_(sn,"recipes"));y8(N,z=>{const W=[];z.forEach(G=>{W.push({...G.data(),id:G.id})}),u(W)})})()},[]),y.useEffect(()=>{_==="/"&&(p([]),E(""))},[_]),y.useEffect(()=>{const P=X6(dl,N=>{n(N),s(!1)});return()=>P()},[o]),y.useEffect(()=>{e&&(async()=>{const N=Vn(sn,"users",e.uid);await cN(N)})()},[e]);const X=P=>{g(P)},ae=P=>{T(P)};return f.jsx(RN.Provider,{value:{recipes:l,isLoading:c,user:e,updateRecipes:S,userLikedRecipes:w,updateUserLikedRecipes:ae,isRecipeLiked:v,updateIsRecipeLiked:X,createUser:x,login:I,signout:k,isUserImageUploaded:o,setIsUserImageUploaded:a,updateQueryResults:O,queryResults:h,queryText:m,updateQueryText:j},children:!i&&t})},Ke=()=>y.useContext(RN),BH=()=>{const{pathname:t}=Ke();return f.jsx(x$,{className:t==="/violation"?"position_fixed":null,children:f.jsx(at,{children:f.jsxs(h0,{children:[f.jsxs(Oo,{style:{textAlign:"center"},children:[f.jsx("h4",{children:"Przepisowa pasja"}),f.jsx("p",{style:{fontSize:12},children:"Zainspiruj się"})]}),f.jsxs(Oo,{style:{textAlign:"center"},children:[f.jsx("h4",{children:"Social media"}),f.jsxs("div",{className:"links_container",children:[f.jsx(Mn,{children:f.jsx(xe,{icon:_V,size:"2xl"})}),f.jsx(Mn,{children:f.jsx(xe,{icon:vV,size:"2xl"})}),f.jsx(Mn,{children:f.jsx(xe,{icon:wV,size:"2xl"})})]})]}),f.jsxs(Oo,{style:{textAlign:"center"},children:[f.jsx("h4",{children:"Support"}),f.jsx("p",{children:"Telefon: 600-400-200"}),f.jsx("p",{children:"email: support@example.com"})]})]})})})},HH=K(d0)`
    /* margin-bottom: 30px; */
`,WH=K(Mn)`
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 1.4rem;
    text-decoration: none;
    color: white;
`,qH=K(d0.Collapse)`
    @media (min-width: 992px) {
        flex-basis: 0;
        flex-grow: 0;
       
        .nav-item {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`,KH=K.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;var sp={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},CN={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},GH=CN,QH={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},YH={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},XH={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},AN={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},JH={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},ZH={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},eW={prefix:"fas",iconName:"power-off",icon:[512,512,[9211],"f011","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"]},tW={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},rw={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},nW={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},rW=nW;const Uf=({title:t,progress:e,withTitle:n,modalTitle:r,onCancel:i,onConfirm:s})=>f.jsx("div",{className:"modal modal_styles",children:f.jsxs(Oc.Dialog,{children:[n?f.jsx(xb,{children:f.jsx(Oc.Title,{children:r})}):null,f.jsxs(Oc.Body,{children:[f.jsx("p",{children:t}),n?null:f.jsx(T3,{now:e})]}),n?f.jsxs(Oc.Footer,{children:[f.jsx(Oe,{onClick:i,variant:"dark",children:"Anuluj"}),f.jsx(Oe,{onClick:s,variant:"danger",children:"Usuń"})]}):null]})}),iW=()=>{const{user:t,signout:e}=Ke();St();const[n,r]=y.useState(!1),[i,s]=y.useState(0),o=window.location.pathname,a=async()=>{try{await e(),r(!0);const l=setTimeout(()=>{r(!1)},2e3);return()=>clearTimeout(l)}catch(l){console.log(l)}};return y.useEffect(()=>{if(n){const l=setInterval(()=>{s(u=>u+5)},50);return()=>clearInterval(l)}else s(0)},[n]),f.jsx(f.Fragment,{children:f.jsxs(HH,{fixed:o==="/"?"top":"",sticky:o!=="/"?"top":"",variant:"dark",bg:"dark",expand:"lg",children:[f.jsxs(at,{fluid:!0,children:[f.jsx(WH,{to:"/",children:"Przepisowa pasja"}),f.jsx(d0.Toggle,{"aria-controls":"navbar-dark-example"}),f.jsx(qH,{id:"navbar-dark-example",children:f.jsx(jc,{children:t!==null?f.jsxs(f.Fragment,{children:[f.jsx(jc.Item,{children:f.jsxs(Mn,{className:"nav-link",to:"/dashboard",children:["Zalogowany: ",t.displayName," ",f.jsx(KH,{src:t.photoURL,alt:"profile_image"})]})}),f.jsx(jc.Item,{children:f.jsxs(Oe,{onClick:a,variant:"danger",children:[f.jsx(xe,{icon:eW})," Wyloguj"]})})]}):f.jsx(jc.Item,{children:f.jsx(Mn,{className:"nav-link",to:"/signin",children:"Zaloguj się"})})})})]}),n?f.jsx(Uf,{title:"Wylogowano pomyślnie",progress:i}):null]})})},sW=()=>f.jsxs(f.Fragment,{children:[f.jsx(iW,{}),f.jsx(zv,{}),f.jsx(BH,{})]}),oW="/assets/heroImage-DxGRnTqE.jpg",Na=K(at)`
  display: flex;
  flex-direction: ${t=>t.direction};
  justify-content: ${t=>t.justify};
  align-items: ${t=>t.align};
`,aW=K(Na)`
  position: relative;
  z-index: 100;
  padding-top: 2rem;
  text-align: center;
  gap: 50px;

  h2 {
    color: white;
  }
`;K(E4)`
  @media (min-width: 576px) {
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;const lW=K(at)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`,dc=K.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,uW=K.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;

  @media (min-width: 992px) {
    height: 250px;
  }
`,cW=K(at)`
  padding-top: 50px;
  @media (min-width: 992px) {
    width: 60%;
  }
`,dW=K(at)`
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-around;
    gap: 100px;
    margin-bottom: 20px;
  }
`,fW=K(at)`
  @media (max-width: 576px) {
    padding: 0 40px;
  }
`,hW=K.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-bottom: 30px;
  position: relative;

  @media (min-width: 992px) {
    width: 60%;
  }

  button {
    border-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #d8d8d8;
    color: black;
    border: none;
    height: 100%;
    width: 80px;
  }
`,pW=K.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,mW=K.h1`
  text-align: center;
`,gW=K.section`
  width: 100%;
  height: 100vh;
  background: transparent center no-repeat
    url(${t=>t.backgroundimage});
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 992px) {
    background-attachment: fixed;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  h1 {
    color: white;
    position: relative;
    z-index: 100;
  }

  h2 {
    margin-bottom: 20px;
  }
`,yW=K.input`
  width: calc(100% - 80px);
  margin: 0 auto;
  padding: 10px;
  border-radius: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  font-size: 20px;
  position: relative;
`,vW=K.ul`
  background-color: white;
  width: calc(100% - 80px);
  max-height: 200px;
  border: 1px solid;
  text-align: left;
  list-style: none;
  border-radius: 10px;
  position: absolute;
  top: 85%;
  left: 0;
  padding: 0;
  overflow-y: auto;
  scroll-behavior: smooth;

  @media (min-width: 992px) {
    max-height: 260px;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(33, 37, 41);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

  a {
    text-decoration: none;
    color: black;
    display: block;
    padding: 10px;

    /* add different background every one link!! */
  }

  .active {
    background-color: rgb(33, 37, 41) !important;
    color: white !important;
  }
`;function Hr(t){return Array.isArray?Array.isArray(t):ON(t)==="[object Array]"}const _W=1/0;function wW(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-_W?"-0":e}function EW(t){return t==null?"":wW(t)}function er(t){return typeof t=="string"}function PN(t){return typeof t=="number"}function TW(t){return t===!0||t===!1||IW(t)&&ON(t)=="[object Boolean]"}function NN(t){return typeof t=="object"}function IW(t){return NN(t)&&t!==null}function un(t){return t!=null}function ym(t){return!t.trim().length}function ON(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const kW="Incorrect 'index' type",xW=t=>`Invalid value for key ${t}`,SW=t=>`Pattern length exceeds max of ${t}.`,bW=t=>`Missing ${t} property in key`,RW=t=>`Property 'weight' in key '${t}' must be a positive integer`,pI=Object.prototype.hasOwnProperty;class CW{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=jN(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function jN(t){let e=null,n=null,r=null,i=1,s=null;if(er(t)||Hr(t))r=t,e=mI(t),n=Dy(t);else{if(!pI.call(t,"name"))throw new Error(bW("name"));const o=t.name;if(r=o,pI.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(RW(o));e=mI(o),n=Dy(o),s=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:s}}function mI(t){return Hr(t)?t:t.split(".")}function Dy(t){return Hr(t)?t.join("."):t}function AW(t,e){let n=[],r=!1;const i=(s,o,a)=>{if(un(s))if(!o[a])n.push(s);else{let l=o[a];const u=s[l];if(!un(u))return;if(a===o.length-1&&(er(u)||PN(u)||TW(u)))n.push(EW(u));else if(Hr(u)){r=!0;for(let c=0,d=u.length;c<d;c+=1)i(u[c],o,a+1)}else o.length&&i(u,o,a+1)}};return i(t,er(e)?e.split("."):e,0),r?n:n[0]}const PW={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},NW={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},OW={location:0,threshold:.6,distance:100},jW={useExtendedSearch:!1,getFn:AW,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ee={...NW,...PW,...OW,...jW};const DW=/[^ ]+/g;function LW(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const s=i.match(DW).length;if(n.has(s))return n.get(s);const o=1/Math.pow(s,.5*t),a=parseFloat(Math.round(o*r)/r);return n.set(s,a),a},clear(){n.clear()}}}class iw{constructor({getFn:e=ee.getFn,fieldNormWeight:n=ee.fieldNormWeight}={}){this.norm=LW(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,er(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();er(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!un(e)||ym(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,s)=>{let o=i.getFn?i.getFn(e):this.getFn(e,i.path);if(un(o)){if(Hr(o)){let a=[];const l=[{nestedArrIndex:-1,value:o}];for(;l.length;){const{nestedArrIndex:u,value:c}=l.pop();if(un(c))if(er(c)&&!ym(c)){let d={v:c,i:u,n:this.norm.get(c)};a.push(d)}else Hr(c)&&c.forEach((d,h)=>{l.push({nestedArrIndex:h,value:d})})}r.$[s]=a}else if(er(o)&&!ym(o)){let a={v:o,n:this.norm.get(o)};r.$[s]=a}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function DN(t,e,{getFn:n=ee.getFn,fieldNormWeight:r=ee.fieldNormWeight}={}){const i=new iw({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(jN)),i.setSources(e),i.create(),i}function MW(t,{getFn:e=ee.getFn,fieldNormWeight:n=ee.fieldNormWeight}={}){const{keys:r,records:i}=t,s=new iw({getFn:e,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function nd(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=ee.distance,ignoreLocation:s=ee.ignoreLocation}={}){const o=e/t.length;if(s)return o;const a=Math.abs(r-n);return i?o+a/i:a?1:o}function $W(t=[],e=ee.minMatchCharLength){let n=[],r=-1,i=-1,s=0;for(let o=t.length;s<o;s+=1){let a=t[s];a&&r===-1?r=s:!a&&r!==-1&&(i=s-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[s-1]&&s-r>=e&&n.push([r,s-1]),n}const rs=32;function VW(t,e,n,{location:r=ee.location,distance:i=ee.distance,threshold:s=ee.threshold,findAllMatches:o=ee.findAllMatches,minMatchCharLength:a=ee.minMatchCharLength,includeMatches:l=ee.includeMatches,ignoreLocation:u=ee.ignoreLocation}={}){if(e.length>rs)throw new Error(SW(rs));const c=e.length,d=t.length,h=Math.max(0,Math.min(r,d));let p=s,m=h;const E=a>1||l,_=E?Array(d):[];let v;for(;(v=t.indexOf(e,m))>-1;){let k=nd(e,{currentLocation:v,expectedLocation:h,distance:i,ignoreLocation:u});if(p=Math.min(k,p),m=v+c,E){let S=0;for(;S<c;)_[v+S]=1,S+=1}}m=-1;let g=[],w=1,T=c+d;const x=1<<c-1;for(let k=0;k<c;k+=1){let S=0,O=T;for(;S<O;)nd(e,{errors:k,currentLocation:h+O,expectedLocation:h,distance:i,ignoreLocation:u})<=p?S=O:T=O,O=Math.floor((T-S)/2+S);T=O;let j=Math.max(1,h-O+1),X=o?d:Math.min(h+O,d)+c,ae=Array(X+2);ae[X+1]=(1<<k)-1;for(let N=X;N>=j;N-=1){let z=N-1,W=n[t.charAt(z)];if(E&&(_[z]=+!!W),ae[N]=(ae[N+1]<<1|1)&W,k&&(ae[N]|=(g[N+1]|g[N])<<1|1|g[N+1]),ae[N]&x&&(w=nd(e,{errors:k,currentLocation:z,expectedLocation:h,distance:i,ignoreLocation:u}),w<=p)){if(p=w,m=z,m<=h)break;j=Math.max(1,2*h-m)}}if(nd(e,{errors:k+1,currentLocation:h,expectedLocation:h,distance:i,ignoreLocation:u})>p)break;g=ae}const I={isMatch:m>=0,score:Math.max(.001,w)};if(E){const k=$W(_,a);k.length?l&&(I.indices=k):I.isMatch=!1}return I}function FW(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class LN{constructor(e,{location:n=ee.location,threshold:r=ee.threshold,distance:i=ee.distance,includeMatches:s=ee.includeMatches,findAllMatches:o=ee.findAllMatches,minMatchCharLength:a=ee.minMatchCharLength,isCaseSensitive:l=ee.isCaseSensitive,ignoreLocation:u=ee.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:u},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const c=(h,p)=>{this.chunks.push({pattern:h,alphabet:FW(h),startIndex:p})},d=this.pattern.length;if(d>rs){let h=0;const p=d%rs,m=d-p;for(;h<m;)c(this.pattern.substr(h,rs),h),h+=rs;if(p){const E=d-rs;c(this.pattern.substr(E),E)}}else c(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let m={isMatch:!0,score:0};return r&&(m.indices=[[0,e.length-1]]),m}const{location:i,distance:s,threshold:o,findAllMatches:a,minMatchCharLength:l,ignoreLocation:u}=this.options;let c=[],d=0,h=!1;this.chunks.forEach(({pattern:m,alphabet:E,startIndex:_})=>{const{isMatch:v,score:g,indices:w}=VW(e,m,E,{location:i+_,distance:s,threshold:o,findAllMatches:a,minMatchCharLength:l,includeMatches:r,ignoreLocation:u});v&&(h=!0),d+=g,v&&w&&(c=[...c,...w])});let p={isMatch:h,score:h?d/this.chunks.length:1};return h&&r&&(p.indices=c),p}}class Yi{constructor(e){this.pattern=e}static isMultiMatch(e){return gI(e,this.multiRegex)}static isSingleMatch(e){return gI(e,this.singleRegex)}search(){}}function gI(t,e){const n=t.match(e);return n?n[1]:null}class zW extends Yi{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class UW extends Yi{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class BW extends Yi{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class HW extends Yi{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class WW extends Yi{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class qW extends Yi{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class MN extends Yi{constructor(e,{location:n=ee.location,threshold:r=ee.threshold,distance:i=ee.distance,includeMatches:s=ee.includeMatches,findAllMatches:o=ee.findAllMatches,minMatchCharLength:a=ee.minMatchCharLength,isCaseSensitive:l=ee.isCaseSensitive,ignoreLocation:u=ee.ignoreLocation}={}){super(e),this._bitapSearch=new LN(e,{location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class $N extends Yi{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],s=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+s,i.push([r,n-1]);const o=!!i.length;return{isMatch:o,score:o?0:1,indices:i}}}const Ly=[zW,$N,BW,HW,qW,WW,UW,MN],yI=Ly.length,KW=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,GW="|";function QW(t,e={}){return t.split(GW).map(n=>{let r=n.trim().split(KW).filter(s=>s&&!!s.trim()),i=[];for(let s=0,o=r.length;s<o;s+=1){const a=r[s];let l=!1,u=-1;for(;!l&&++u<yI;){const c=Ly[u];let d=c.isMultiMatch(a);d&&(i.push(new c(d,e)),l=!0)}if(!l)for(u=-1;++u<yI;){const c=Ly[u];let d=c.isSingleMatch(a);if(d){i.push(new c(d,e));break}}}return i})}const YW=new Set([MN.type,$N.type]);class XW{constructor(e,{isCaseSensitive:n=ee.isCaseSensitive,includeMatches:r=ee.includeMatches,minMatchCharLength:i=ee.minMatchCharLength,ignoreLocation:s=ee.ignoreLocation,findAllMatches:o=ee.findAllMatches,location:a=ee.location,threshold:l=ee.threshold,distance:u=ee.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:o,ignoreLocation:s,location:a,threshold:l,distance:u},this.pattern=n?e:e.toLowerCase(),this.query=QW(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let s=0,o=[],a=0;for(let l=0,u=n.length;l<u;l+=1){const c=n[l];o.length=0,s=0;for(let d=0,h=c.length;d<h;d+=1){const p=c[d],{isMatch:m,indices:E,score:_}=p.search(e);if(m){if(s+=1,a+=_,r){const v=p.constructor.type;YW.has(v)?o=[...o,...E]:o.push(E)}}else{a=0,s=0,o.length=0;break}}if(s){let d={isMatch:!0,score:a/s};return r&&(d.indices=o),d}}return{isMatch:!1,score:1}}}const My=[];function JW(...t){My.push(...t)}function $y(t,e){for(let n=0,r=My.length;n<r;n+=1){let i=My[n];if(i.condition(t,e))return new i(t,e)}return new LN(t,e)}const Bf={AND:"$and",OR:"$or"},Vy={PATH:"$path",PATTERN:"$val"},Fy=t=>!!(t[Bf.AND]||t[Bf.OR]),ZW=t=>!!t[Vy.PATH],eq=t=>!Hr(t)&&NN(t)&&!Fy(t),vI=t=>({[Bf.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function VN(t,e,{auto:n=!0}={}){const r=i=>{let s=Object.keys(i);const o=ZW(i);if(!o&&s.length>1&&!Fy(i))return r(vI(i));if(eq(i)){const l=o?i[Vy.PATH]:s[0],u=o?i[Vy.PATTERN]:i[l];if(!er(u))throw new Error(xW(l));const c={keyId:Dy(l),pattern:u};return n&&(c.searcher=$y(u,e)),c}let a={children:[],operator:s[0]};return s.forEach(l=>{const u=i[l];Hr(u)&&u.forEach(c=>{a.children.push(r(c))})}),a};return Fy(t)||(t=vI(t)),r(t)}function tq(t,{ignoreFieldNorm:e=ee.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:s,score:o})=>{const a=i?i.weight:null;r*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(e?1:s))}),n.score=r})}function nq(t,e){const n=t.matches;e.matches=[],un(n)&&n.forEach(r=>{if(!un(r.indices)||!r.indices.length)return;const{indices:i,value:s}=r;let o={indices:i,value:s};r.key&&(o.key=r.key.src),r.idx>-1&&(o.refIndex=r.idx),e.matches.push(o)})}function rq(t,e){e.score=t.score}function iq(t,e,{includeMatches:n=ee.includeMatches,includeScore:r=ee.includeScore}={}){const i=[];return n&&i.push(nq),r&&i.push(rq),t.map(s=>{const{idx:o}=s,a={item:e[o],refIndex:o};return i.length&&i.forEach(l=>{l(s,a)}),a})}class Xs{constructor(e,n={},r){this.options={...ee,...n},this.options.useExtendedSearch,this._keyStore=new CW(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof iw))throw new Error(kW);this._myIndex=n||DN(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){un(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,i-=1,n.push(s))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:s,sortFn:o,ignoreFieldNorm:a}=this.options;let l=er(e)?er(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return tq(l,{ignoreFieldNorm:a}),s&&l.sort(o),PN(n)&&n>-1&&(l=l.slice(0,n)),iq(l,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=$y(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:s,i:o,n:a})=>{if(!un(s))return;const{isMatch:l,score:u,indices:c}=n.searchIn(s);l&&i.push({item:s,idx:o,matches:[{score:u,value:s,norm:a,indices:c}]})}),i}_searchLogical(e){const n=VN(e,this.options),r=(a,l,u)=>{if(!a.children){const{keyId:d,searcher:h}=a,p=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(l,d),searcher:h});return p&&p.length?[{idx:u,item:l,matches:p}]:[]}const c=[];for(let d=0,h=a.children.length;d<h;d+=1){const p=a.children[d],m=r(p,l,u);if(m.length)c.push(...m);else if(a.operator===Bf.AND)return[]}return c},i=this._myIndex.records,s={},o=[];return i.forEach(({$:a,i:l})=>{if(un(a)){let u=r(n,a,l);u.length&&(s[l]||(s[l]={idx:l,item:a,matches:[]},o.push(s[l])),u.forEach(({matches:c})=>{s[l].matches.push(...c)}))}}),o}_searchObjectList(e){const n=$y(e,this.options),{keys:r,records:i}=this._myIndex,s=[];return i.forEach(({$:o,i:a})=>{if(!un(o))return;let l=[];r.forEach((u,c)=>{l.push(...this._findMatches({key:u,value:o[c],searcher:n}))}),l.length&&s.push({idx:a,item:o,matches:l})}),s}_findMatches({key:e,value:n,searcher:r}){if(!un(n))return[];let i=[];if(Hr(n))n.forEach(({v:s,i:o,n:a})=>{if(!un(s))return;const{isMatch:l,score:u,indices:c}=r.searchIn(s);l&&i.push({score:u,key:e,value:s,idx:o,norm:a,indices:c})});else{const{v:s,n:o}=n,{isMatch:a,score:l,indices:u}=r.searchIn(s);a&&i.push({score:l,key:e,value:s,norm:o,indices:u})}return i}}Xs.version="7.0.0";Xs.createIndex=DN;Xs.parseIndex=MW;Xs.config=ee;Xs.parseQuery=VN;JW(XW);const sq=()=>{const{recipes:t,updateQueryResults:e,queryResults:n,queryText:r,updateQueryText:i}=Ke(),[s,o]=y.useState(!1),[a,l]=y.useState(""),[u,c]=y.useState(0),d=St(),h=y.useRef(null),p=y.useRef([]),[m,E]=y.useState(!1),_=I=>{I&&!p.current.includes(I)&&p.current.push(I)},v=I=>{i(I.target.value),E(!1)},g=I=>{(I.key==="ArrowDown"||I.key==="ArrowUp")&&I.preventDefault(),I.key==="ArrowDown"&&a===""?(l(0),c(k=>k+p.current[0].offsetHeight)):I.key==="ArrowDown"&&a>=0&&a<n.length-1?(l(k=>k+1),c(k=>k+p.current[a].offsetHeight),u>h.current.offsetHeight-p.current[a].offsetHeight&&(h.current.scrollTop+=h.current.offsetHeight)):I.key==="ArrowUp"&&a>0?(l(k=>k-1),c(k=>k-p.current[a].offsetHeight),u<=h.current.offsetHeight-document.getElementById(`recipe-${a-1}`).offsetHeight&&(h.current.scrollTop-=h.current.offsetHeight)):I.key==="ArrowUp"&&a===0&&l(""),I.key==="Backspace"&&(p.current=[]),I.key==="Enter"&&n.length>0&&a!==""&&(d(`/recipes/${n[a].id}`),i("")),I.key==="Enter"&&a===""&&r.length>=2&&d(`/search?query=${r}`),I.key==="Enter"&&a===""&&r.length<2&&E(!0)},w=()=>{const I=setTimeout(()=>{o(!1),l("")},100);return()=>clearTimeout(I)},T=I=>{l(I),c((I+1)*p.current[I].offsetHeight)};y.useEffect(()=>{r||e([]);const k=new Xs(t,{keys:["name"],threshold:.3,includeMatches:!0}).search(r).map(S=>S.item);e(k)},[r]);const x=I=>f.jsxs(Qb,{id:"input-tooltip",...I,children:["Podaj przynajmniej 2 litery"," "]});return f.jsx(gW,{backgroundimage:oW,children:f.jsxs(aW,{direction:"column",justify:"center",align:"center",fluid:!0,children:[f.jsxs(hW,{children:[f.jsx(mW,{children:"Cześć, na co masz dzisiaj ochotę?"}),f.jsxs(pW,{className:m?"search-bar-error":null,children:[f.jsx(p3,{placement:"top",delay:{show:250,hide:400},overlay:x,show:m,trigger:"click",children:f.jsx(yW,{onKeyDown:g,autoComplete:"off",onChange:v,onFocus:()=>{o(!0),E(!1)},onBlur:w,type:"search",placeholder:s?"Wpisz nazwę potrawy":"Znajdź przepis",name:"searchbar",value:r})}),f.jsx(Oe,{onClick:I=>{I.preventDefault(),r.length>=2?d(`/search?query=${r}`):E(!0)},children:f.jsx(xe,{icon:tW})})]}),r.length>=2&&n.length>0&&s?f.jsx(vW,{ref:h,children:n.map((I,k)=>f.jsx("li",{children:f.jsx(Mn,{ref:_,onMouseEnter:()=>T(k),className:a===k?"active":null,id:`recipe-${k}`,tabIndex:"1",to:`/recipes/${I.id}`,children:I.name})},k))}):null]}),f.jsxs("div",{children:[f.jsx("h2",{children:"Popularne kategorie"}),f.jsxs(lW,{children:[f.jsx(Oe,{variant:"dark",children:"Popularne"}),f.jsx(Oe,{variant:"dark",children:"Popularne"}),f.jsx(Oe,{variant:"dark",children:"Popularne"}),f.jsx(Oe,{variant:"dark",children:"Popularne"})]})]})]})})},oq=K(Oo)`
    transition: 0.3s;
    margin-left: auto;
    margin-right: auto;
    height: 520px;

    @media (min-width: 576px) {
      height: 480px;
    }

    img {
      height: 280px;
      object-fit: fill;

      @media (min-width: 576px) {
        height: 220px;
      }
    }
`,aq=K.div`
    border-radius: 50%;
    position: relative;
    &::after {
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 50%;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.5);
    }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`,lq=K.p`
  font-weight: 700;
  font-size: 30px;
  align-self: flex-end;
  margin-bottom: 0;
  position: absolute;
  left: 50px;
`,uq=K.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  position: relative;
`,cq=K.p`
    font-size: 22px;
    text-align: center;
`,dq=K(Mn)`
  text-decoration: none;
  background-color: rgb(33, 37, 41);
  color: white;
  padding: 4px;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
    transform: scale(0.95);
  }
`,fq=K.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  width: 40%;
  margin: 20px auto;

  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`,hq=K.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`,_I=K.div`
  width: 50%;
  display: flex;
  justify-content: ${t=>t.justify};
`,FN=K.button`
  background-color: transparent;
  border: none;
`,pq=K.button`
    border: none;
    background-color: transparent;
    z-index: 100;
    color: rgb(33, 37, 41);
    font-size: 50px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0;
    transition: 50ms;

    &.liked {
        color: tomato;
    }

    &:focus {
        border: none;
    }

    &:disabled {
        color: red !important; 
    }
`,mq=K.div`
  
  img {
    width: 40px;
    height: 40px; 
    border-radius: 50%;
  }
`,gq=K.div`
  span {
    margin-left: 6px;
  }
`,yq=K(se)`
  margin-bottom: 30px;

  @media (min-width: 992px) {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
  }
`,Xi=({array:t,onClick:e,marginBottom:n,addButton:r,sliceBy:i})=>f.jsxs(fW,{children:[f.jsx(h0,{xs:1,sm:2,md:2,lg:3,xl:4,className:"g-4",style:{paddingBottom:20},children:t.slice(0,i).map((s,o)=>f.jsx(oq,{children:f.jsxs(Wa,{style:{height:"100%"},children:[f.jsx(Wa.Img,{src:s.image}),f.jsxs(Wa.Body,{style:{position:"relative"},children:[f.jsx(Wa.Title,{children:s.name}),f.jsxs("div",{style:{position:"absolute",bottom:20},children:[f.jsxs(mq,{children:[f.jsx("img",{src:s.addedBy.photo,alt:"creator_photo"}),f.jsxs("span",{children:[" ",s.addedBy.user]})]}),f.jsxs(gq,{children:[f.jsx(xe,{icon:ZH}),f.jsx("span",{children:s.preparationTime})]}),f.jsxs(Wa.Text,{children:["Polubienia: ",f.jsx("strong",{children:s.likes})]}),f.jsx(Mn,{to:`/recipes/${s.id}`,children:f.jsx(Oe,{variant:"dark",children:"Przejdź do przepisu"})})]})]})]})},o))}),r?f.jsx(Na,{justify:"center",children:f.jsx(Oe,{style:{marginBottom:n},onClick:e,variant:"dark",children:"Zobacz więcej"})}):null]}),pr=K.h2`
  text-align: center;
  padding: 50px;
  font-weight: 700;
`,wI=K(pr)`
  border-radius: 10px;
  color: white;
  background-color: rgb(33, 37, 41);
  padding: 10px;
`,zN=()=>{const{recipes:t}=Ke(),e=o=>new Date(o),n=St(),[r,i]=y.useState([]);y.useEffect(()=>{const o=[...t].sort((a,l)=>e(l.createdAt)-e(a.createdAt));i(o)},[t]);const s=()=>{n("/category/newest-recipes")};return f.jsxs(f.Fragment,{children:[f.jsx(pr,{children:"Najnowsze przepisy"}),f.jsx(Xi,{title:"Najnowsze przepisy",array:r,onClick:s,addButton:!0,sliceBy:4})]})},UN=()=>{const{recipes:t}=Ke(),e=[...t].sort((i,s)=>s.likes-i.likes),n=St(),r=()=>{n("/category/popular-recipes")};return f.jsxs(f.Fragment,{children:[f.jsx(pr,{children:"Najpopularniejsze przepisy"}),f.jsx(Xi,{title:"Najpopularniejsze przepisy",array:e,onClick:r,addButton:!0,sliceBy:4})]})},vq=K(KS)`
    object-fit: cover;
    width: 100%;
    height: auto;

    @media (min-width:572px)  {
        height: 60vh;
    }

`,_q=({onClick:t,id:e,className:n,disabled:r})=>f.jsx(f.Fragment,{children:f.jsx(pq,{className:n,disabled:r,id:e,onClick:t,children:f.jsx(xe,{icon:YH})})}),wq=K.div`
    text-align: center;
    padding: 40px;
`,vm=K.div`
  display: flex;
  justify-content: ${t=>t.justify};
  position: relative;
  width: 100%;
  flex-direction: ${t=>t.direction};
`,Eq=()=>{const{user:t}=Ke();return f.jsxs(Na,{justify:"center",align:"center",direction:"column",children:[f.jsx("h3",{style:{marginBottom:30},children:"Przepis nie ma jeszcze komentarzy"}),t?f.jsxs(f.Fragment,{children:[f.jsx("p",{children:"Dodaj komentarz"}),f.jsxs(cM,{style:{display:"flex",flexDirection:"column",gap:12,width:"50%"},children:[f.jsx(se.Control,{style:{resize:"none",width:"100%",height:120},size:"sm",as:"textarea","aria-label":"With textarea"}),f.jsx(Oe,{variant:"dark",children:"Opublikuj"})]})]}):f.jsxs("div",{children:[f.jsx(Mn,{to:"/signin",children:"Zaloguj się"}),f.jsx("span",{children:", aby dodać komentarz"})]})]})},Tq=()=>{const{recipeId:t}=Fv(),{user:e,recipes:n,userLikedRecipes:r,updateUserLikedRecipes:i,isRecipeLiked:s,updateIsRecipeLiked:o}=Ke(),[a,l]=y.useState({}),[u,c]=y.useState(!1);y.useEffect(()=>{if(n.length>0){const h=n.find(p=>p.id===t);l(h),c(!0)}},[n]),y.useEffect(()=>{e&&(async()=>{const p=Vn(sn,"users",e.uid),m=await cN(p);o(m.data().liked.includes(t))})()},[r]);const d=async()=>{const h=Vn(sn,"users",e.uid),p=Vn(sn,"recipes",t);if(s||(await ps(h,{liked:iI(t)}),await ps(p,{likedBy:iI(e.uid),likes:oI(1)}),o(m=>!m),i(m=>[...m,a])),s){await ps(h,{liked:sI(t)}),await ps(p,{likedBy:sI(e.uid),likes:oI(-1)});const E=r.filter(_=>_.id!==t);i(E)}};return f.jsx("section",{children:u?f.jsxs(f.Fragment,{children:[f.jsx(wq,{children:f.jsx("h1",{children:a.name})}),f.jsxs(dW,{children:[f.jsxs("div",{style:{width:"100%"},children:[f.jsx("div",{style:{marginBottom:30},children:f.jsx(vm,{justify:"center",children:f.jsx(vq,{rounded:!0,src:a.image})})}),f.jsxs("div",{style:{display:"flex"},children:[f.jsxs(uq,{children:[f.jsx(aq,{children:f.jsx("img",{src:a.addedBy.photo,alt:"profile_photo"})}),f.jsx(lq,{children:a.addedBy.user})]}),f.jsx(vm,{justify:"center",children:e&&a.addedBy.user!==e.displayName?f.jsx(_q,{onClick:d,className:s?"liked":null}):null})]}),f.jsxs("div",{style:{marginTop:20,fontSize:20},children:["Polubienia: ",f.jsx("strong",{children:a.likes})]}),f.jsxs("div",{children:[f.jsx("div",{sm:5,style:{marginTop:10},children:f.jsx(cq,{children:a.description})}),a.tags.length>0?f.jsx(fq,{children:a.tags.map((h,p)=>f.jsx(dq,{to:`/show?tag=${h}`,children:h.split("")[0].toUpperCase()+h.split("").splice(1,h.length).join("")},p))}):null]})]}),f.jsxs(vm,{direction:"column",children:[f.jsxs("div",{sm:5,children:[f.jsx(wI,{children:"Składniki"}),a.ingredients.map((h,p)=>f.jsx("p",{children:h},p))]}),f.jsxs("div",{sm:5,children:[f.jsx(wI,{children:"Jak przygotować"}),a.steps.map((h,p)=>f.jsxs("p",{children:[`${p+1}.`,f.jsxs("span",{children:[" ",h]})]},p))]})]})]}),f.jsx(Eq,{})]}):f.jsx(dc,{children:f.jsx(Ni,{})})})},Fi=K(Mn)`
    text-decoration: none;
    color: ${t=>t.color};
    font-size: ${t=>t.fontsize};

    &:hover {
        opacity: 0.7;
    }
`,BN=K.section`
    color: white;
    background-color: rgb(33, 37, 41);
    max-width: 100%; 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`,HN=K(se)`
    border: 1px solid white;
    padding: 30px;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 50px;

    @media (min-width: 992px) {
        width: 50%;
    }
`,Iq=()=>{const{createUser:t}=Ke(),e=St(),n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,[r,i]=y.useState({displayName:"",email:"",password:"",repeatedPassword:""}),[s,o]=y.useState({displayName:!1,email:!1,password:!1,repeatedPassword:!1}),[a,l]=y.useState(!1),u=d=>{const{name:h,value:p}=d.target;i(m=>({...m,[h]:p})),o(m=>({...m,displayName:h==="displayName"?!1:m.displayName,email:h==="email"?!1:m.email,password:h==="password"||h==="repeatedPassword"?!1:m.password,repeatedPassword:h==="password"||h==="repeatedPassword"?!1:m.repeatedPassword}))},c=async d=>{if(d.preventDefault(),(r.displayName.length<6||r.displayName.length>10)&&o(h=>({...h,displayName:!0})),r.email.match(n)||o(h=>({...h,email:!0})),(r.password!==r.repeatedPassword||r.password.length<6)&&o(h=>({...h,password:!0})),r.repeatedPassword!==r.password&&o(h=>({...h,repeatedPassword:!0})),r.displayName.length>=6&&r.email.match(n)&&r.password===r.repeatedPassword&&r.password.length>=6){l(!0);try{await t(r.displayName,r.email,r.password);const h=setTimeout(()=>{e("/dashboard")},1e3);return()=>clearTimeout(h)}catch(h){alert(h)}}};return f.jsx(BN,{children:a?f.jsx(dc,{children:f.jsx(Ni,{})}):f.jsxs(f.Fragment,{children:[" ",f.jsxs(Fi,{color:"white",style:{padding:20,alignSelf:"flex-start"},to:"/",children:[f.jsx(xe,{icon:AN})," Strona główna"]}),f.jsxs(Na,{direction:"column",align:"center",children:[f.jsx("h2",{style:{color:"white",padding:26},children:"Zarejestruj się"}),f.jsxs("span",{style:{margin:10},children:["Masz już konto? ",f.jsx(Fi,{to:"/signin",children:"Zaloguj się"})]}),f.jsxs(HN,{noValidate:!0,onSubmit:c,children:[f.jsxs(se.Group,{className:"mb-3",children:[f.jsx(se.Label,{htmlFor:"user_name",children:"Nazwa użytkownika"}),f.jsx($e,{show:s.displayName&&r.displayName.length<6,variant:"danger",children:"Nazwa użytkownika jest za krótka. Nazwa musi posiadać minimalnie 6 znaków."}),f.jsx($e,{show:s.displayName&&r.displayName.length>10,variant:"danger",children:"Nazwa użytkownika jest za krótka. Nazwa może mieć maksymalnie 10 znaków."}),f.jsx(se.Control,{autoComplete:"off",isInvalid:s.displayName,isValid:r.displayName.length>=6,onChange:u,name:"displayName",value:r.id,type:"text",placeholder:"Nazwa użytkownika",id:"user_name"})]}),f.jsxs(se.Group,{className:"mb-3",children:[f.jsx(se.Label,{htmlFor:"user_email",children:"Email"}),f.jsx($e,{show:s.email,variant:"danger",children:"Email jest niepoprawny"}),f.jsx(se.Control,{autoComplete:"off",isInvalid:s.email,isValid:!s.email&&r.email.match(n),onChange:u,name:"email",value:r.email,type:"email",placeholder:"Email",id:"user_email"})]}),f.jsxs(se.Group,{className:"mb-3",children:[f.jsx(se.Label,{htmlFor:"user_password",children:"Hasło"}),f.jsx($e,{show:s.password&&r.password.length<6,variant:"danger",children:"Hasło jest za krótkie"}),f.jsx($e,{show:s.password&&r.password!==r.repeatedPassword,variant:"danger",children:"Hasła nie zgadzają się"}),f.jsx(se.Control,{isInvalid:s.password,onChange:u,name:"password",value:r.password,type:"password",placeholder:"Hasło",id:"user_password"})]}),f.jsxs(se.Group,{className:"mb-3",children:[f.jsx(se.Label,{htmlFor:"second_password",children:"Powtórz hasło"}),f.jsx($e,{show:s.repeatedPassword,variant:"danger",children:"Hasła nie zgadzają się"}),f.jsx(se.Control,{isInvalid:s.repeatedPassword,onChange:u,name:"repeatedPassword",value:r.repeatedPassword,type:"password",placeholder:"Powtórz hasło",id:"second_password"})]}),f.jsx(Oe,{variant:"light",type:"submit",children:"Utwórz"})]})]})]})})},kq=()=>{const{login:t}=Ke(),e=St(),[n,r]=y.useState({email:"",password:""}),[i,s]=y.useState({email:!1,password:!1}),[o,a]=y.useState(""),l=c=>{const{name:d,value:h}=c.target;r(p=>({...p,[d]:h})),s({email:!1,password:!1}),a(!0)},u=async c=>{if(c.preventDefault(),s(d=>({...d,email:n.email.length===0?!0:d.email,password:n.password.length===0||n.password.length>0&&n.password.length<6?!0:d.password})),!i.email&&!i.password)try{await t(n.email,n.password),e(-1)}catch(d){d.message==="Firebase: Error (auth/invalid-email)."&&s(()=>({email:!0,password:!0})),d.message==="Firebase: Error (auth/invalid-credential)."&&a(!1)}};return f.jsxs(BN,{children:[f.jsxs(Fi,{color:"white",style:{padding:20,alignSelf:"flex-start"},to:"/",children:[f.jsx(xe,{icon:AN})," Strona główna"]}),f.jsxs(Na,{direction:"column",align:"center",children:[f.jsx("h2",{style:{color:"white",padding:26},children:"Zaloguj się"}),f.jsxs("span",{style:{margin:10},children:["Nie masz konta? ",f.jsx(Fi,{to:"/signup",children:"Zarejestruj się"})]}),f.jsxs(HN,{children:[i.email&&i.password&&n.email.length>0&&n.password.length>0?f.jsx($e,{variant:"danger",children:"Nie znaleźliśmy konta"}):null,o===!1?f.jsx($e,{variant:"danger",children:"Email lub hasło się nie zgadza"}):null,f.jsxs(se.Group,{className:"mb-3",controlId:"formGroupEmail",children:[f.jsx(se.Label,{children:"Email"}),i.email&&n.email.length===0?f.jsx($e,{variant:"danger",children:"Musisz podać email"}):null,f.jsx(se.Control,{isInvalid:i.email&&n.email.length===0&&o!==!1||i.email&&i.password&&n.email.length>0&&n.password.length||o===!1,onChange:l,value:n.email,name:"email",type:"email",placeholder:"Twój email"})]}),f.jsxs(se.Group,{className:"mb-3",controlId:"formGroupPassword",children:[f.jsx(se.Label,{children:"Hasło"}),i.password&&n.password.length===0?f.jsx($e,{variant:"danger",children:"Musisz podać hasło"}):null,i.password&&n.password.length>0&&n.password.length<6?f.jsx($e,{variant:"danger",children:"Hasło jest za krótkie"}):null,f.jsx(se.Control,{isInvalid:i.password&&n.password.length===0||i.email&&i.password&&n.email.length>0&&n.password.length||o===!1,onChange:l,value:n.password,name:"password",type:"password",placeholder:"Hasło",autoComplete:"off"})]}),f.jsx(Oe,{onClick:u,variant:"light",type:"submit",children:"Potwierdź"})]}),f.jsxs("div",{style:{backgroundColor:"white",color:"black",padding:20,borderRadius:6},children:[f.jsx("h3",{children:"Test account"}),f.jsxs("p",{children:["email: ",f.jsx("strong",{children:"test@test.com"})]}),f.jsxs("p",{children:["password: ",f.jsx("strong",{children:"123456"})]})]})]})]})},Od=K.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 12px;
    padding: 50px 4px;
    background-color: rgba(33, 37, 41, 0.1);
    border-radius: 10px;
    margin-bottom: 50px;
`,xq=K.section`
    max-width: 100%;
    margin-bottom: 30px;
`,Sq=K.div`
    @media (min-width: 992px) {
        width: 40%;
    }
`,bq=K.div`
  @media (min-width: 992px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    position: relative;
  }
`,Rq=K.img`
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  width: 100%;
`,Cq=K.div`
    border: 2px solid rgb(33, 37, 41);
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
`,EI=K.img`
    height: 260px;
    width: 300px;
    border-radius: 6px;
    position: relative;
    z-index: -10;
    transition: 0.3s;
`,Aq=K.div`
  @media (min-width: 992px) {
    width: 40%;
    position: sticky;
    top: 100px;
  }
`,Pq=K.div`
    width: 300px;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    z-index: 1;

    &:hover > img {
        opacity: 0.5;
    }

    .util_buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 200;
    }
    
`,Nq=K.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`,Oq=K.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`,jq=K.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 200;
  background-color: rgb(33, 37, 41);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: -20px;
`,Dq=({onChange:t})=>f.jsxs(jq,{children:[f.jsx("label",{className:"add_pointer",htmlFor:"addFile",children:f.jsx(xe,{icon:XH,color:"white"})}),f.jsx("input",{type:"file",onChange:t,id:"addFile",className:"recipe_image_input",accept:"image/*"})]}),Lq=K(Jb.Item)`
    
    span {
        background-color: rgb(33,37,41) !important;
        border-color: rgb(33,37,41) !important;
    }

    .page-link {
        color: rgb(33,37,41) !important;
    }

    &.active > .page-link {
        color: white !important;
    }
    
`,Mq=({linkTo:t,recipeName:e,recipeImage:n,isUserRecipe:r})=>{const{user:i}=Ke(),[s,o]=y.useState(!1),a=St(),[l,u]=y.useState(0),[c,d]=y.useState(!1),[h,p]=y.useState(!1),m=()=>{o(!0)},E=()=>{o(!1)},_=g=>{g.preventDefault(),d(w=>!w)},v=async()=>{await dN(Vn(sn,"recipes",t));const g=oN($_(sn,"users"),d8("liked","array-contains",t)),w=_8(sn);(await p8(g)).forEach(x=>{const I=x.ref,k=x.data().liked.filter(S=>S!==t);w.update(I,{liked:k})});try{await w.commit(),d(!1),p(!0);const x=setTimeout(()=>{p(!1)},2e3);return()=>clearTimeout(x)}catch(x){console.error("Error updating documents: ",x)}};return y.useEffect(()=>{if(h){const g=setInterval(()=>{u(w=>w+5)},50);return()=>clearInterval(g)}},[h]),f.jsxs(f.Fragment,{children:[c?f.jsx(Uf,{withTitle:!0,modalTitle:`Chesz usunąć ${e}`,title:"Na pewno?",onCancel:()=>d(g=>!g),onConfirm:v}):null,h?f.jsx(Uf,{title:"Usunięto pomyślnie",progress:l}):null,f.jsxs("div",{style:{paddingTop:10,textAlign:"center",width:"100%"},children:[f.jsx("span",{children:e}),i&&r?f.jsx(f.Fragment,{children:f.jsx(at,{children:f.jsxs(Pq,{onMouseEnter:m,onMouseLeave:E,onFocus:m,children:[s?f.jsxs("div",{className:"util_buttons",children:[f.jsx(Oe,{variant:"dark",onClick:()=>a(`/recipes/edit/${t}`),children:f.jsx(xe,{icon:GH})}),f.jsx(Oe,{variant:"dark",onClick:()=>a(`/recipes/${t}`),children:f.jsx(xe,{icon:QH})}),f.jsx(Oe,{variant:"danger",onClick:_,children:f.jsx(xe,{icon:sp})})]}):null,f.jsx(EI,{src:n,alt:"recipe"})]})})}):f.jsx(Fi,{to:`/recipes/${t}`,children:f.jsx(at,{children:f.jsx(EI,{src:n,alt:"recipe"})})})]})]})},TI=({recipes:t,isUserRecipe:e})=>{const[n,r]=y.useState(1),[i,s]=y.useState(2),o=n*i,a=o-i,l=t.slice(a,o);let u=[];for(let c=1;c<=Math.ceil(t.length/i);c++)u.push(f.jsx(Lq,{active:c===n,onClick:()=>r(c),children:c},c));return f.jsxs(f.Fragment,{children:[l.map((c,d)=>f.jsx(Mq,{linkTo:c.id,recipeName:c.name,recipeImage:c.image,isUserRecipe:e},d)),t.length>3?f.jsx(Jb,{children:u}):null]})},rd=({spanTitle:t,strongTitle:e,isButton:n,onClick:r})=>f.jsx(f.Fragment,{children:f.jsxs(Nq,{children:[f.jsx("span",{children:t}),f.jsxs(Oq,{children:[f.jsx("strong",{children:e}),n?f.jsx(Oe,{variant:"dark",onClick:r,children:f.jsx(xe,{icon:CN})}):null]})]})}),II=()=>{const{user:t,recipes:e,isUserImageUploaded:n,setIsUserImageUploaded:r,userLikedRecipes:i,updateUserLikedRecipes:s}=Ke(),[o,a]=y.useState(0),[l,u]=y.useState([]),[c,d]=y.useState(!1);y.useEffect(()=>{if(n){const p=setInterval(()=>{a(m=>m+5)},50);return()=>clearInterval(p)}else a(0)},[n]);const h=async p=>{d(!1);const m=ms(gs,`profile/${t.uid}/profile_photo`);await tw(m,p.target.files[0]).then(async()=>{await nw(m).then(async _=>{await jC(dl.currentUser,{photoURL:_}),r(!0)})}).catch(_=>{console.log(_),d(!0)});const E=setTimeout(()=>{r(!1)},2e3);return()=>clearTimeout(E)};return y.useEffect(()=>{if(e&&t!==void 0){const p=e.filter(E=>E.addedBy.user===t.displayName);u(p);const m=e.filter(E=>E.likedBy.includes(t.uid));s(m)}},[e,t]),f.jsx(f.Fragment,{children:t!==null?f.jsx(at,{children:f.jsxs(xq,{children:[n?f.jsx(Uf,{title:"Pomyślnie zmieniono zdjęcie",progress:o}):null,f.jsx(pr,{children:"Twój profil"}),f.jsxs(bq,{children:[f.jsx(Aq,{children:f.jsxs(Od,{children:[c?f.jsx("p",{className:"text-error",children:f.jsx("strong",{children:"Wybrałeś niepoprawny plik!"})}):null,f.jsxs(f.Fragment,{children:[f.jsxs(Cq,{children:[f.jsx(Rq,{src:t.photoURL,alt:"profile_image"}),f.jsx(Dq,{onChange:h})]}),f.jsxs(at,{children:[f.jsx(rd,{spanTitle:"Utworzono: ",strongTitle:new Date(parseInt(t.metadata.createdAt)).toLocaleDateString()}),f.jsx(rd,{spanTitle:"Nazwa użytkownika: ",strongTitle:t.displayName,inputName:"username"}),f.jsx(rd,{spanTitle:"Email: ",strongTitle:t.email,inputName:"email",isButton:!0,onClick:()=>console.log("Dodaj funkcję zmiany maila!")}),f.jsx(rd,{spanTitle:"Hasło",strongTitle:f.jsx(Fi,{to:"/",children:"Zmień hasło"})})]})]})]})}),f.jsxs(Sq,{children:[f.jsxs(Od,{children:[f.jsx("h2",{children:"Twoje przepisy"}),f.jsxs(Fi,{to:"/add-recipe",children:[f.jsx(xe,{icon:rw})," Dodaj przepis"]}),l.length===0?f.jsx("p",{children:"Aktualnie nie dodałeś żadnego przepisu"}):f.jsx(TI,{recipes:l,isUserRecipe:!0})]}),f.jsxs(Od,{children:[f.jsx("h2",{children:"Polubione przepisy"}),i.length>0?f.jsx(TI,{recipes:i}):f.jsx("p",{children:"Nie polubiłeś żadnego przepisu"})]})]})]})]})}):f.jsx(dc,{children:f.jsx(Ni,{})})})},$q=K.section`
    color: white;
    background-color: rgb(33, 37, 41);
    max-width: 100%;
    min-height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`,Vq=()=>f.jsx($q,{children:f.jsxs(at,{children:[f.jsx(KS,{style:{width:"100%"},rounded:!0,src:"https://prestashop.com/sites/default/files/wysiwyg/404_not_found.png",alt:"error404"}),f.jsx(Fi,{to:"/",fontsize:"24px",children:"Take me home!"})]})}),Fq=()=>{const{queryResults:t,updateQueryText:e,queryText:n,recipes:r,updateQueryResults:i}=Ke(),[s,o]=Kx(),[a,l]=y.useState(!1),u=s.get("query");return y.useEffect(()=>{e(u);const d=new Xs(r,{keys:["name"],threshold:.3,includeMatches:!0}).search(u).map(p=>p.item);i(d);const h=setTimeout(()=>l(!0),500);return()=>clearTimeout(h)},[n,r]),f.jsx(f.Fragment,{children:a?f.jsxs("section",{style:{minHeight:"calc(100vh - 192.8px)"},children:[f.jsx(pr,{children:n.length>0&&t.length>0?`Przepisy zawierające: ${u}`:`Brak wyników dla: ${u}`}),f.jsx(Xi,{array:t}),t.length>0?null:f.jsxs(f.Fragment,{children:[f.jsx(UN,{}),f.jsx(zN,{})]})]}):f.jsx(dc,{children:f.jsx(Ni,{})})})},zq=k$`
    body {
        font-family: 'Noto Sans', sans-serif;
        background-color: rgb(234, 234, 234);
    }

    .no-radius-left-bottom {
        border-bottom-left-radius: 0 !important;
    }

    .no-radius-right-bottom {
        border-bottom-right-radius: 0 !important;
    }

    .error {
        border-color: tomato;
        color: green;
        padding: 20px;
    }

    .add_pointer {
        cursor: pointer;
    }

    .recipe_image_input {
        display: none;
        align-self: flex-end;
    }

    .form_group_sfg {
        background-color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        cursor: pointer;
        border-radius: 8px;
        box-shadow: 0 0 4px rgb(0, 0, 0);
    }

    .form_group_error {
        box-shadow: 0 0 4px rgb(220, 53, 69);
    }

    .modal_styles {
        display: block;
        position: fixed;
        top: 10%;
    }

    .position_fixed {
        @media (min-width: 450px) {
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    }

    .tooltip-inner {
        background-color: tomato;
        font-size: 20px;
        padding: 4px 10px;
    }

    .tooltip-arrow {
        
        &::before {
            border-top-color: tomato !important;
        }
    }

    .search-bar-error {
        border: 2px solid tomato;
        border-radius: 12px;
    }

    .text-error {
        color: red;
    }
`,WN=({isInvalid:t,value:e,name:n,id:r,onChange:i,array:s,defaultValue:o})=>f.jsx(f.Fragment,{children:f.jsx(se.Select,{isInvalid:t,value:e,name:n,id:r,onChange:i,defaultValue:o,children:s.map((a,l)=>f.jsx("option",{value:a,children:a},l))})}),qN=({value:t,name:e,id:n,onChange:r,isFilter:i})=>f.jsx(f.Fragment,{children:f.jsxs(se.Select,{value:t,name:e,id:n,onChange:r,children:[i?f.jsx("option",{value:"default",children:"wybierz"}):null,f.jsx("option",{value:"easy",children:"Łatwy"}),f.jsx("option",{value:"medium",children:"Średni"}),f.jsx("option",{value:"advanced",children:"Zaawansowany"})]})}),KN=({value:t,name:e,id:n,onChange:r,array:i})=>f.jsx(f.Fragment,{children:f.jsx(se.Select,{value:t,name:e,id:n,onChange:r,children:i.map((s,o)=>f.jsx("option",{value:s,children:s},o))})}),Uq=({updateImage:t,updateNewRecipeErrors:e,details:n,errors:r})=>{const[i,s]=y.useState(!1),[o,a]=y.useState(null),[l,u]=y.useState(!1),c=["image/apng","image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"];y.useEffect(()=>{if(i){const _=setTimeout(()=>{s(!1)},1e3);return()=>clearTimeout(_)}},[i]);const d=()=>{e(_=>({..._,imageError:!1}))},h=async _=>{if(c.includes(_.type)){s(!0);const v=new FileReader;v.addEventListener("load",()=>{const g=v.result;a(g)}),v.readAsDataURL(_),t(_),u(!1),d()}else u(!0)},p=async _=>{_.preventDefault();const v=_.dataTransfer.items[0].getAsFile();v?(u(!1),d(),h(v)):await fetch(/src="?([^"\s]+)"?\s*/.exec(_.dataTransfer.getData("text/html"))[1]).then(async w=>w.blob()).then(w=>{const T=new File([w],"image",{type:w.type});h(T),u(!1),d()}).catch(()=>{u(!0)})},m=_=>{_.preventDefault()},E=_=>{h(_.target.files[0])};return f.jsxs(f.Fragment,{children:[n.image===""&&r.imageError&&!l?f.jsx($e,{variant:"danger",children:"Musisz dodać zdjęcie"}):null,n.image!==""&&!l?f.jsx($e,{variant:"success",children:"Plik jest poprawny"}):null,l?f.jsx($e,{variant:"danger",children:"Plik nie jest poprawny"}):null,f.jsx(Gn,{className:`mb-3 form_group_sfg ${l||r.imageError?"form_group_error":null}`,onDrop:n.image===""?_=>p(_):null,onDragOver:m,children:n.image===""?f.jsxs(f.Fragment,{children:[f.jsxs(se.Label,{style:{cursor:"pointer",lineHeight:4},htmlFor:"recipe_photo",children:["Dodaj zdjęcie ",f.jsx("br",{})," ",f.jsx(xe,{icon:rW,size:"3x"})," ",f.jsx("br",{})," lub upuść plik"]}),f.jsx("div",{children:f.jsx(xe,{icon:JH,size:"6x"})}),f.jsx(se.Control,{style:{display:"none"},type:"file",id:"recipe_photo",onChange:E,accept:"image/*"})]}):f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{width:200,height:200},children:i?f.jsx(Ni,{}):f.jsxs(f.Fragment,{children:[f.jsx("p",{children:"Podgląd"}),f.jsx("img",{style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%",aspectRatio:"auto"},src:window.location.pathname.includes("edit")&&!o?n.image:o})]})}),f.jsx(Oe,{style:{marginTop:30},variant:"dark",onClick:()=>{t("")},children:f.jsx(xe,{icon:sp})})]})})]})},Bq=({details:t,errors:e,updateImage:n,updateRecipeDetails:r,gibberishCheck:i,updateNewRecipeErrors:s})=>{const o=["wybierz","Dania główne","Zupy","Śniadania","Kolacje","Przekąski","Desery","Napoje"],a=["15 minut","30 minut","60 minut","90 minut"];return f.jsx(f.Fragment,{children:f.jsxs("div",{className:"recipe-details",children:[f.jsxs(Gn,{className:"mb-3",children:[f.jsx(se.Label,{htmlFor:"recipe_name",children:"Nazwa przepisu"}),e.nameError&&t.name.length<8&&t.name.length>0&&!t.name.match(i)?f.jsx($e,{variant:"danger",children:"Nazwa przepisu jest za krótka"}):null,e.nameError&&t.name.match(i)?f.jsx($e,{variant:"danger",children:"Próbujesz dodać coś co nie ma sensu"}):null,e.nameError&&t.name.length===0?f.jsx($e,{variant:"danger",children:"Musisz podać nazwę"}):null,f.jsx(se.Control,{isInvalid:e.nameError&&t.name.length<8,name:"recipeName",autoComplete:"off",value:t.name,type:"text",id:"recipe_name",onChange:l=>r(l)})]}),f.jsx(Uq,{updateImage:n,updateNewRecipeErrors:s,details:t,errors:e}),f.jsxs(Gn,{className:"mb-3",children:[f.jsx(se.Label,{htmlFor:"preparation_time",children:"Czas przygotowania"}),f.jsx(KN,{value:t.preparationTime,name:"preparationTime",id:"preparation_time",onChange:l=>r(l),array:a})]}),f.jsxs(Gn,{className:"mb-3",children:[f.jsx(se.Label,{htmlFor:"difficulty_level",children:"Stopień trudności"}),f.jsx(qN,{value:t.difficulty,name:"difficulty",id:"difficulty_level",onChange:l=>r(l)})]}),f.jsxs(Gn,{className:"mb-3",children:[f.jsx(se.Label,{htmlFor:"recipe_category",children:"Wybierz kategorię"}),e.categoryError&&(t.category===""||t.category==="wybierz")?f.jsx($e,{variant:"danger",children:"Musisz wybrać kategorię"}):null,f.jsx(WN,{isInvalid:e.categoryError&&(t.category===""||t.category==="wybierz"),value:t.category,name:"category",id:"recipe_category",onChange:l=>r(l),array:o})]}),f.jsxs(Gn,{className:"mb-3",children:[f.jsx(se.Label,{htmlFor:"recipe_description",children:"Kilka słów o przepisie (opcjonalnie)"}),f.jsx(se.Control,{style:{resize:"none"},as:"textarea",rows:4,name:"description",id:"recipe_description",value:t.description,onChange:l=>r(l)})]})]})})},Hq=({details:t,handleAddIngredients:e,handleIngredientsArray:n,errors:r,handleIngredientsErrors:i,gibberishCheck:s})=>{const o=(c,d)=>{const h=[...t.ingredients];h[d]=c.target.value,n(h);const p=r.ingredientsErrors;p[d]=!1,i(p)},a=(c,d)=>{const h=d.filter((p,m)=>m!==c);n(h)},l=(c,d)=>{const h=d.filter((p,m)=>m!==c);i(h)},u=(c,d,h)=>{a(c,d),l(c,h)};return f.jsxs(f.Fragment,{children:[f.jsx("p",{children:"Dodaj składniki"}),t.ingredients.map((c,d)=>f.jsxs(Gn,{className:"mb-3",children:[f.jsx(se.Label,{htmlFor:`ingredient${d+1}`,children:"Składnik"}),r.ingredientsErrors[d]&&t.ingredients[d].length===0?f.jsx($e,{variant:"danger",children:"Nie może być puste"}):null,r.ingredientsErrors[d]&&t.ingredients[d].length>0&&t.ingredients[d].length<3?f.jsx($e,{variant:"danger",children:"Składnik musi mieć przynajmniej 3 znaki"}):null,r.ingredientsErrors[d]&&t.ingredients[d].length>=3&&t.ingredients[d].match(s)?f.jsx($e,{variant:"danger",children:"Próbujesz dodać coś co nie ma sensu"}):null,f.jsxs("div",{style:{marginBottom:10,display:"flex"},children:[f.jsx(se.Control,{value:t.ingredients[d],isInvalid:r.ingredientsErrors[d]&&t.ingredients[d].length===0||r.ingredientsErrors[d]&&t.ingredients[d].length>0&&t.ingredients[d].length<3||r.ingredientsErrors[d]&&t.ingredients[d].length>=3&&t.ingredients[d].match(s),id:`ingredient${d+1}`,onChange:h=>o(h,d)}),t.ingredients.length>1?f.jsx(FN,{type:"button",onClick:()=>u(d,t.ingredients,r.ingredientsErrors),children:f.jsx(xe,{icon:sp,color:"rgba(0, 0, 0, 0.4)"})}):null]})]},d)),f.jsxs(Oe,{variant:"dark",style:{marginTop:20},onClick:()=>e(),children:[f.jsx(xe,{icon:rw})," Dodaj kolejny"]})]})},Wq=({details:t,addNextStep:e,handleStepsArray:n,errors:r,handleStepsErrors:i})=>{const s=(a,l)=>{const u=t.preparationSteps;u[l]=a.target.value,n(u);const c=r.preparationStepsErrors;c[l]=!1,i(c)},o=a=>{const l=[...t.preparationSteps],u=[...r.preparationStepsErrors],c=l.filter((h,p)=>p!==a);n(c);const d=u.filter((h,p)=>p!==a);i(d)};return f.jsxs(f.Fragment,{children:[f.jsx("p",{children:"Daj znać innym jak przygotować potrawę"}),t.preparationSteps.map((a,l)=>f.jsxs(Gn,{className:"mb-3",children:[f.jsxs(se.Label,{children:["Krok ",l+1]}),r.preparationStepsErrors[l]&&a.length===0?f.jsx($e,{variant:"danger",children:"Nie może być puste"}):null,r.preparationStepsErrors[l]&&a.length>0&&a.length<15?f.jsx($e,{variant:"danger",children:"Ten krok jest za krótki"}):null,f.jsxs("div",{style:{display:"flex"},children:[f.jsx(se.Control,{isInvalid:r.preparationStepsErrors[l]&&a.length===0,as:"textarea",style:{resize:"none"},rows:4,onChange:u=>s(u,l),value:a}),t.preparationSteps.length>1?f.jsx(FN,{type:"button",onClick:()=>o(l),children:f.jsx(xe,{icon:sp,color:"rgba(0, 0, 0, 0.4)"})}):null]})]},l)),f.jsxs(Oe,{variant:"dark",onClick:()=>e(),children:[f.jsx(xe,{icon:rw})," Dodaj kolejny"]})]})},qq=["chuj","chuja","chujek","chujem","chujkiem","chujki","chujnia","chujnią","chujowa","chujową","chujowe","chujowy","chuju","ciot","ciota","cioty","cip","cipa","cipach","cipami","cipce","cipe","cipek","cipie","cipka","cipkach","cipkami","cipki","cipko","cipkom","cipką","cipkę","cipo","cipom","cipy","cipą","cipę","ciul","debilu","dojebac","dojebal","dojebala","dojebalam","dojebalem","dojebać","dojebał","dojebała","dojebałam","dojebałem","dojebie","dojebię","dopieprzac","dopieprzać","dopierdala","dopierdalac","dopierdalajacy","dopierdalający","dopierdalal","dopierdalala","dopierdalać","dopierdalał","dopierdalała","dopierdole","dopierdoli","dopierdolic","dopierdolil","dopierdolić","dopierdolił","dopierdolę","downie","dupa","dupcia","dupe","dupeczka","dupie","dupy","dupą","dzifka","dzifko","dziwka","dziwko","fiucie","fiut","fuck","gówno","gowno","gownem","gównem","gówienko","gowienko","huj","huja","huje","hujek","hujem","hujnia","huju","hój","jebac","jebak","jebaka","jebako","jebal","jebana","jebane","jebanej","jebani","jebanka","jebankiem","jebanko","jebany","jebanych","jebanym","jebanymi","jebaną","jebać","jebał","jebcie","jebia","jebiaca","jebiacego","jebiacej","jebiacy","jebie","jebią","jebiąca","jebiącego","jebiącej","jebiący","jebię","jebliwy","jebna","jebnac","jebnal","jebnać","jebnela","jebnie","jebnij","jebną","jebnąc","jebnąć","jebnął","jebnęła","jebut","koorwa","korewko","kurestwo","kurew","kurewko","kurewska","kurewski","kurewskiej","kurewsko","kurewską","kurewstwo","kurwa","kurwaa","kurwach","kurwami","kurwe","kurwiarz","kurwic","kurwica","kurwidołek","kurwie","kurwik","kurwiki","kurwiska","kurwiszcze","kurwiszon","kurwiszona","kurwiszonem","kurwiszony","kurwiący","kurwić","kurwo","kurwy","kurwą","kurwę","kutas","kutasa","kutasach","kutasami","kutasem","kutasie","kutasow","kutasy","kutasów","kórewko","kórwa","lesbijko","matkojebca","matkojebcach","matkojebcami","matkojebcy","matkojebcą","morde","mordę","nabarłożyć","najebac","najebal","najebala","najebana","najebane","najebany","najebaną","najebać","najebał","najebała","najebia","najebie","najebią","nakurwiac","nakurwiamy","nakurwiać","nakurwiscie","nakurwiście","naopierdalac","naopierdalal","naopierdalala","naopierdalać","naopierdalał","naopierdalała","napierdalac","napierdalajacy","napierdalający","napierdalać","napierdolic","napierdolić","nawpierdalac","nawpierdalal","nawpierdalala","nawpierdalać","nawpierdalał","nawpierdalała","obsrywac","obsrywajacy","obsrywający","obsrywać","odpieprzac","odpieprzać","odpieprzy","odpieprzyl","odpieprzyla","odpieprzył","odpieprzyła","odpierdalac","odpierdalajaca","odpierdalajacy","odpierdalająca","odpierdalający","odpierdalać","odpierdol","odpierdoli","odpierdolic","odpierdolil","odpierdolila","odpierdolić","odpierdolił","odpierdoliła","opieprzający","opierdala","opierdalac","opierdalajacy","opierdalający","opierdalać","opierdol","opierdola","opierdoli","opierdolic","opierdolić","opierdolą","pedale","picza","piczka","piczo","pieprz","pieprzniety","pieprznięty","pieprzony","pierdel","pierdlu","pierdol","pierdola","pierdolaca","pierdolacy","pierdole","pierdolec","pierdolenie","pierdoleniem","pierdoleniu","pierdoli","pierdolic","pierdolicie","pierdolil","pierdolila","pierdolisz","pierdolić","pierdolił","pierdoliła","pierdolnac","pierdolnal","pierdolnela","pierdolnie","pierdolniety","pierdolnij","pierdolnik","pierdolnięty","pierdolny","pierdolnąć","pierdolnął","pierdolnęła","pierdolona","pierdolone","pierdolony","pierdolą","pierdoląca","pierdolący","pierdolę","pierdołki","pierdziec","pierdzieć","pierdzący","pizda","pizde","pizdnac","pizdnąć","pizdu","pizdzie","pizdą","pizdę","piździe","pedał","pedały","pedale","pedalski","pedalska","podjebac","podjebać","podkurwic","podkurwić","podpierdala","podpierdalac","podpierdalajacy","podpierdalający","podpierdalać","podpierdoli","podpierdolic","podpierdolić","pojeb","pojeba","pojebac","pojebalo","pojebami","pojebancu","pojebane","pojebanego","pojebanemu","pojebani","pojebany","pojebanych","pojebanym","pojebanymi","pojebać","pojebańcu","pojebem","popierdala","popierdalac","popierdalać","popierdolencu","popierdoleni","popierdoleńcu","popierdoli","popierdolic","popierdolić","popierdolone","popierdolonego","popierdolonemu","popierdolony","popierdolonym","porozpierdala","porozpierdalac","porozpierdalać","poruchac","poruchać","przejebac","przejebane","przejebać","przepierdala","przepierdalac","przepierdalajaca","przepierdalajacy","przepierdalająca","przepierdalający","przepierdalać","przepierdolic","przepierdolić","przyjebac","przyjebal","przyjebala","przyjebali","przyjebać","przyjebał","przyjebała","przyjebie","przypieprzac","przypieprzajaca","przypieprzajacy","przypieprzająca","przypieprzający","przypieprzać","przypierdala","przypierdalac","przypierdalajacy","przypierdalający","przypierdalać","przypierdoli","przypierdolic","przypierdolić","qrwa","rozjeb","rozjebac","rozjebali","rozjebaliście","rozjebaliśmy","rozjebać","rozjebał","rozjebała","rozjebałam","rozjebałaś","rozjebałem","rozjebałeś","rozjebało","rozjebały","rozjebałyście","rozjebałyśmy","rozjebcie","rozjebie","rozjebiecie","rozjebiemy","rozjebiesz","rozjebią","rozjebię","rozjebmy","rozpierdala","rozpierdalac","rozpierdalać","rozpierdole","rozpierdoli","rozpierdolic","rozpierdolić","rozpierducha","rucha","ruchacie","ruchaj","ruchajcie","ruchajmy","ruchają","ruchali","ruchaliście","ruchaliśmy","rucham","ruchamy","ruchasz","ruchać","ruchał","ruchała","ruchałam","ruchałaś","ruchałem","ruchałeś","ruchało","ruchałom","ruchałoś","ruchały","ruchałyście","ruchałyśmy","ryj","skurwic","skurwiel","skurwiela","skurwielem","skurwielu","skurwić","skurwysyn","skurwysyna","skurwysynem","skurwysynow","skurwysynski","skurwysynstwo","skurwysynu","skurwysyny","skurwysynów","skurwysyński","skurwysyństwo","skutasiony","spermosiorbacz","spermosiorbaczem","spieprza","spieprzac","spieprzaj","spieprzaja","spieprzajaca","spieprzajacy","spieprzajcie","spieprzają","spieprzająca","spieprzający","spieprzać","spierdala","spierdalac","spierdalaj","spierdalajacy","spierdalający","spierdalal","spierdalala","spierdalalcie","spierdalać","spierdalał","spierdalała","spierdola","spierdolencu","spierdoleńcu","spierdoli","spierdolic","spierdolić","spierdoliła","spierdoliło","spierdolą","srac","sraj","srajac","srajacy","srając","srający","srać","sraka","sraki","sukinsyn","sukinsynom","sukinsynow","sukinsynowi","sukinsyny","sukinsynów","szmata","szmato","udupić","ujebac","ujebal","ujebala","ujebana","ujebany","ujebać","ujebał","ujebała","ujebie","upierdala","upierdalac","upierdalać","upierdol","upierdola","upierdoleni","upierdoli","upierdolic","upierdolić","upierdolą","wjebac","wjebać","wjebia","wjebie","wjebiecie","wjebiemy","wjebią","wkurwi","wkurwia","wkurwiac","wkurwiacie","wkurwiajaca","wkurwiajacy","wkurwiają","wkurwiająca","wkurwiający","wkurwial","wkurwiali","wkurwiać","wkurwiał","wkurwic","wkurwicie","wkurwimy","wkurwią","wkurwić","wpierdalac","wpierdalajacy","wpierdalający","wpierdalać","wpierdol","wpierdolic","wpierdolić","wpizdu","wyjebac","wyjebali","wyjebany","wyjebać","wyjebał","wyjebała","wyjebały","wyjebia","wyjebie","wyjebiecie","wyjebiemy","wyjebiesz","wyjebią","wykurwic","wykurwić","wykurwiście","wypieprza","wypieprzac","wypieprzal","wypieprzala","wypieprzać","wypieprzał","wypieprzała","wypieprzy","wypieprzyl","wypieprzyla","wypieprzył","wypieprzyła","wypierdal","wypierdala","wypierdalac","wypierdalaj","wypierdalal","wypierdalala","wypierdalać","wypierdalał","wypierdalała","wypierdola","wypierdoli","wypierdolic","wypierdolicie","wypierdolil","wypierdolila","wypierdolili","wypierdolimy","wypierdolić","wypierdolił","wypierdoliła","wypierdolą","wypiździały","zajebac","zajebali","zajebana","zajebane","zajebani","zajebany","zajebanych","zajebanym","zajebanymi","zajebać","zajebała","zajebia","zajebial","zajebiala","zajebiał","zajebie","zajebiscie","zajebista","zajebiste","zajebisty","zajebistych","zajebistym","zajebistymi","zajebią","zajebiście","zapieprza","zapieprzy","zapieprzyc","zapieprzycie","zapieprzyl","zapieprzyla","zapieprzymy","zapieprzysz","zapieprzyć","zapieprzył","zapieprzyła","zapieprzą","zapierdala","zapierdalac","zapierdalaj","zapierdalaja","zapierdalajacy","zapierdalajcie","zapierdalający","zapierdalala","zapierdalali","zapierdalać","zapierdalał","zapierdalała","zapierdola","zapierdoli","zapierdolic","zapierdolil","zapierdolila","zapierdolić","zapierdolił","zapierdoliła","zapierdolą","zapierniczający","zapierniczać","zasranym","zasrać","zasrywający","zasrywać","zesrywający","zesrywać","zjebac","zjebal","zjebala","zjebali","zjebana","zjebancu","zjebane","zjebać","zjebał","zjebała","zjebańcu","zjebią","zjeby","śmierdziel"],Kq=({updateRecipeTags:t,newRecipeDetails:e,updateTagsArray:n})=>{const r=["kuchnia polska","dania główne","kurczak","wołowina","śniadania","kolacje","ryba","gulasz","kuchnia węgierska","kuchnia chińska","przekąski","napoje","burgery","zupy","desery","indyk","makarony","kuchnia amerykańska","kuchnia włoska","kuchnia gruzińska","kuchnia angielska","owoce morza","kuchnia tradycyjna","kuchnia meksykańska","kuchnia indyjska","okazje"],i=[];for(let o=0;o<r.length;o+=3)i.push(r.slice(o,o+3));const s=o=>{if(o.target.checked)t(o.target.value);else{const l=e.tags.filter(u=>u!==o.target.value);n(l)}};return f.jsxs(f.Fragment,{children:[f.jsx("h4",{style:{textAlign:"center"},children:"Dodaj tagi"}),f.jsx(at,{children:i.map((o,a)=>f.jsx(h0,{children:o.map((l,u)=>f.jsx(Oo,{children:f.jsx(se.Check,{onChange:s,checked:e.tags.find(c=>c===l),value:l,type:"checkbox",id:`default-${l}-${u}`,label:l})},`col-${u}`))},`row-${a}`))})]})},GN=({newRecipeDetails:t,updateNewRecipeDetails:e,h2Text:n,newRecipeErrors:r,updateNewRecipeErrors:i,isSubmitted:s,handleSubmitForm:o,updateRecipeTags:a,updateTagsArray:l})=>{const{user:u}=Ke(),[c,d]=y.useState(0),h=St(),p=/(.)\1{2,}/,[m,E]=y.useState([]);y.useEffect(()=>{const P=async N=>{N.preventDefault(),N.returnValue="",await dN(Vn(sn,"temp",`temp_${u.uid}`))};return window.addEventListener("beforeunload",P),()=>window.removeEventListener("beforeunload",P)},[]);const _=P=>{const{name:N,value:z}=P.target;if(e(W=>({...W,name:N==="recipeName"?z:W.name,category:N==="category"?z:W.category,preparationTime:N==="preparationTime"?z:W.preparationTime,difficulty:N==="difficulty"?z:W.difficulty,description:N==="description"?z:W.description})),N==="recipeName"){i(G=>({...G,nameError:!1}));const W=z.toLowerCase().split(" ").join("");qq.forEach(G=>{W.includes(G)&&E(R=>[...R,G])}),W.length===0&&E([])}},v=P=>e(N=>({...N,image:P})),g=()=>{e(P=>({...P,ingredients:[...P.ingredients,""]})),i(P=>({...P,ingredientsErrors:[...P.ingredientsErrors,!1]}))},w=P=>e(N=>({...N,ingredients:P})),T=P=>i(N=>({...N,ingredientsErrors:P})),x=()=>{e(P=>({...P,preparationSteps:[...P.preparationSteps,""]}))},I=P=>{e(N=>({...N,preparationSteps:P}))},k=P=>i(N=>({...N,preparationStepsErrors:P})),S=[f.jsx(Bq,{details:t,errors:r,updateNewRecipeErrors:i,updateImage:v,updateRecipeDetails:_,gibberishCheck:p}),f.jsx(Hq,{details:t,handleAddIngredients:g,handleIngredientsArray:w,handleIngredientsErrors:T,errors:r,gibberishCheck:p}),f.jsx(Wq,{details:t,addNextStep:x,handleStepsArray:I,errors:r,handleStepsErrors:k}),f.jsx(Kq,{updateRecipeTags:a,newRecipeDetails:t,updateTagsArray:l})],O=P=>{P.preventDefault(),m.length>0&&h("/violation"),(t.name.length<8||t.name.match(p))&&(i(N=>({...N,nameError:!0})),window.scrollTo(0,0)),t.image===""&&(i(N=>({...N,imageError:!0})),window.scrollTo(0,0)),(t.category===""||t.category==="wybierz")&&i(N=>({...N,categoryError:!0})),c<S.indexOf(S[S.length-1])&&t.name.length>=8&&t.image!==""&&t.category!==""&&t.category!=="wybierz"&&!t.name.match(p)&&d(N=>N+1)},j=P=>{P.preventDefault();const N=r.ingredientsErrors;for(let z=0;z<t.ingredients.length;z++)(t.ingredients[z].length===0||t.ingredients[z].length>=1&&t.ingredients[z].length<=3||t.ingredients[z].match(p))&&(N[z]=!0);i(z=>({...z,ingredientsErrors:N})),r.ingredientsErrors.every(z=>!z)&&d(z=>z+1)},X=P=>{P.preventDefault();const N=r.preparationStepsErrors,W=Object.keys(t.preparationSteps).map(G=>t.preparationSteps[G]);for(let G=0;G<W.length;G++)(W[G].length===0||W[G].length>0&&W[G].length<15)&&(N[G]=!0);i(G=>({...G,preparationStepsErrors:N})),r.preparationStepsErrors.every(G=>!G)&&d(G=>G+1)},ae=P=>{P.preventDefault(),c>0&&d(N=>N-1)};return f.jsx(cW,{children:f.jsx(Od,{children:f.jsxs(at,{children:[f.jsxs("h2",{style:{textAlign:"center",paddingBottom:50},children:[n," przepis ",c+1," / ",S.length]}),f.jsxs(se,{className:"new-recipe-form",onSubmit:o,children:[S[c],f.jsxs(hq,{children:[f.jsx(_I,{justify:"flex-start",children:c>0?f.jsx(Oe,{variant:"dark",onClick:ae,children:"Wstecz"}):null}),f.jsxs(_I,{justify:"flex-end",children:[c===0?f.jsx(Oe,{variant:"dark",type:"button",onClick:O,children:"Dalej"}):null,c===1?f.jsx(Oe,{variant:"dark",type:"button",onClick:j,children:"Dalej"}):null,c>1&&c<3?f.jsx(Oe,{onClick:X,variant:"dark",type:"button",children:"Dalej"}):null,c===3?f.jsx(Oe,{disabled:s,variant:"dark",type:"submit",children:"Gotowe"}):null]})]})]})]})})})},Gq=()=>{const{user:t,updateRecipes:e}=Ke(),n=St(),[r,i]=y.useState({addedBy:"",category:"",createdAt:"",image:"",ingredients:["","",""],likes:0,name:"",preparationTime:"15",difficulty:"easy",description:"",preparationSteps:["","",""],tags:[],likedBy:[]}),[s,o]=y.useState({categoryError:!1,imageError:!1,ingredientsErrors:[!1,!1,!1],nameError:!1,preparationStepsErrors:[!1,!1,!1]}),[a,l]=y.useState(!1),u=m=>{i(m)},c=m=>{o(m)};y.useEffect(()=>{t&&i(m=>({...m,addedBy:{user:t.displayName,photo:t.photoURL}}))},[t]);const d=async m=>{m.preventDefault(),l(!0);const E=Date.now(),_=await g8($_(sn,"recipes"),{addedBy:r.addedBy,category:r.category,createdAt:E,ingredients:r.ingredients,likes:r.likes,name:r.name,likedBy:r.likedBy,preparationTime:r.preparationTime,difficulty:r.difficulty,description:r.description,steps:r.preparationSteps,tags:r.tags}),v=ms(gs,`recipe/${_.id}/${r.image.name}`);await tw(v,r.image);const g=ms(gs,`/recipe/${_.id}/${r.image.name}`);await nw(g).then(w=>{ps(Vn(sn,"recipes",_.id),{image:w}),i(T=>({...T,image:w})),e(T=>[...T,{...r,image:w,id:_.id}])}),n("/dashboard")},h=m=>{i(E=>({...E,tags:[...E.tags,m]}))},p=m=>{i(E=>({...E,tags:m}))};return f.jsx(f.Fragment,{children:f.jsx(GN,{newRecipeDetails:r,updateNewRecipeDetails:u,h2Text:"Dodaj",updateNewRecipeErrors:c,newRecipeErrors:s,isSubmitted:a,handleSubmitForm:d,updateRecipeTags:h,updateTagsArray:p})})},Qq=()=>{const{user:t}=Ke();return t?f.jsx(zv,{}):f.jsx(qx,{to:"/signin"})},Yq=()=>f.jsx("section",{style:{maxWidth:"100%",maxHeight:"100vh",display:"flex"},children:f.jsx(Na,{children:f.jsx("div",{style:{margin:"50px 0",backgroundColor:"rgba(33, 37, 41, 0.1)",padding:10,borderRadius:6,textAlign:"center"},children:f.jsxs("p",{style:{fontSize:22,color:"tomato",fontWeight:500},children:["Dodawanie wulgarnych słów na naszej stronie internetowej jest sprzeczne z zasadami. Taka treść może poważnie zaszkodzić użytkownikom. Ważne jest, abyś respektował wytyczne i dbał o poziom kultury na platformie, tworząc przyjazne miejsce dla wszystkich użytkowników, dlatego prosimy o nie dodawanie słów "," ",f.jsx("strong",{children:"niecenzuralnych"}),". Spróbuj jeszcze raz."]})})})}),Xq=()=>{const{recipes:t,isRecipeAdded:e}=Ke(),n=a=>new Date(a),r=St(),[i,s]=y.useState([]);y.useEffect(()=>{const l=[...[...t].filter(u=>u.category==="Zupy")].sort((u,c)=>n(c.createdAt)-n(u.createdAt));s(l)},[t,e]);const o=()=>{r("/category/soups")};return f.jsxs(f.Fragment,{children:[f.jsx(pr,{children:"Zupy"}),f.jsx(Xi,{title:"Zupy",array:i,onClick:o,addButton:!0,sliceBy:4})]})},Jq=()=>{const{recipes:t,isRecipeAdded:e}=Ke(),n=a=>new Date(a),r=St(),[i,s]=y.useState([]);y.useEffect(()=>{const l=[...t].filter(u=>u.category==="Desery").sort((u,c)=>n(c.createdAt)-n(u.createdAt));s(l)},[t,e]);const o=()=>{r("/category/desserts")};return f.jsxs(f.Fragment,{children:[f.jsx(pr,{children:"Desery"}),f.jsx(Xi,{title:"Desery",array:i,onClick:o,addButton:!0,sliceBy:4})]})},Zq=()=>{const{recipes:t}=Ke(),{categoryName:e}=Fv(),[n,r]=y.useState([]),i=m=>new Date(m),[s,o]=y.useState({category:"",prepTime:"Wszystko",difficulty:"Wszystko"}),[a,l]=y.useState(!0),u=St(),c={"newest-recipes":"Najnowsze przepisy","popular-recipes":"Najpopularniejsze przepisy",soups:"Zupy",desserts:"Desery","main-dishes":"Dania główne",breakfasts:"Śniadania",supper:"Kolacje",snacks:"Przekąski",beverages:"Napoje"},d=["Wszystko","15 minut","30 minut","60 minut","90 minut"];y.useEffect(()=>{o(_=>({..._,category:c[e]}));const m=_=>_.sort((v,g)=>i(g.createdAt)-i(v.createdAt)),E=_=>_.filter(v=>v.preparationTime===s.prepTime);if(c[e]==="Najnowsze przepisy"&&s.prepTime==="Wszystko"){const _=m([...t]);r(_)}else if(c[e]==="Najnowsze przepisy"&&s.prepTime!=="Wszystko"){const _=E([...t]),v=m(_);r(v)}if(c[e]==="Najpopularniejsze przepisy"&&s.prepTime==="Wszystko"){const _=[...t].sort((v,g)=>g.likes-v.likes);r(_)}else if(c[e]==="Najpopularniejsze przepisy"&&s.prepTime!=="Wszystko"){const v=E([...t]).sort((g,w)=>w.likes-g.likes);r(v)}if(c[e]!=="Najpopularniejsze przepisy"&&c[e]!=="Najnowsze przepisy"&&s.prepTime==="Wszystko"){const _=[...t].filter(v=>v.category===c[e]);r(_)}else if(c[e]!=="Najpopularniejsze przepisy"&&c[e]!=="Najnowsze przepisy"&&s.prepTime!=="Wszystko"){const _=[...t].filter(g=>g.category===c[e]);console.log(_);const v=E(_);r(v)}if(a){const _=setTimeout(()=>{l(!1)},500);return()=>clearTimeout(_)}},[a,c[e],t]);const h=m=>{o(v=>({...v,prepTime:"Wszystko"}));const E=Object.entries(c);o(v=>({...v,category:m.target.value}));const _=E.filter(v=>v[1]===m.target.value);u(`/category/${_[0][0]}`),l(!0)},p=m=>{o(E=>({...E,prepTime:m.target.value})),l(!0)};return f.jsx(f.Fragment,{children:t?f.jsx("section",{children:f.jsxs(at,{children:[f.jsx(pr,{children:c[e]}),f.jsxs(yq,{children:[f.jsx("h4",{children:f.jsx("strong",{children:"Szukanie zaawansowane"})}),f.jsxs(at,{children:[f.jsx(se.Label,{htmlFor:"category_filter",children:"Kategoria"}),f.jsx(WN,{id:"category_filter",value:c[e],onChange:h,filterIncluded:!0,array:Object.values(c)})]}),s.category!==""?f.jsxs(f.Fragment,{children:[" ",f.jsxs(at,{children:[f.jsx(nb,{htmlFor:"prep_filter",children:"Czas przygotowania"}),f.jsx(KN,{id:"prep_filter",onChange:p,array:d,value:s.prepTime})]}),f.jsxs(at,{children:[f.jsx(se.Label,{children:"Poziom trudności"}),f.jsx(qN,{})]})]}):null]}),a?f.jsx(uW,{children:f.jsx(Ni,{})}):f.jsxs(f.Fragment,{children:[f.jsx(Xi,{array:n}),n.length===0?f.jsx("div",{style:{textAlign:"center",height:100},children:f.jsx("h5",{children:"Brak wyników"})}):null]})]})}):f.jsx(Ni,{})})},eK=()=>{const{handleAddedRecipe:t,recipes:e,user:n}=Ke(),r=St(),{recipeId:i}=Fv(),[s,o]=y.useState({category:"",createdAt:"",image:"",ingredients:"",likes:"",likedBy:"",name:"",preparationTime:"",difficulty:"",description:"",preparationSteps:"",tags:""}),[a,l]=y.useState({categoryError:!1,imageError:!1,ingredientsErrors:[!1,!1,!1],nameError:!1,preparationStepsErrors:[!1,!1,!1]});y.useEffect(()=>{const _=e.find(v=>v.id===i);_!==void 0&&_.addedBy.user===n.displayName?(o({addedBy:{user:_.addedBy.user,photo:_.addedBy.photo},category:_.category,createdAt:_.createdAt,image:_.image,ingredients:_.ingredients,likes:_.likes,likedBy:_.likedBy,name:_.name,preparationTime:_.preparationTime,difficulty:_.difficulty,description:_.description,preparationSteps:_.steps,tags:_.tags}),l(v=>({...v,ingredientsErrors:_.ingredients.map(()=>!1),preparationStepsErrors:_.steps.map(()=>!1)}))):r("/")},[e,n]);const[u,c]=y.useState(!1),d=_=>{o(_)},h=_=>{l(_)},p=_=>{o(v=>({...v,tags:[...v.tags,_]}))},m=_=>{o(v=>({...v,tags:_}))},E=async _=>{_.preventDefault(),c(!0);const v=Vn(sn,"recipes",i);if(await ps(v,{addedBy:{user:s.addedBy.user,photo:s.addedBy.photo},category:s.category,createdAt:s.createdAt,ingredients:s.ingredients,likes:s.likes,name:s.name,image:s.image.name!==void 0?"":s.image,likedBy:s.likedBy,preparationTime:s.preparationTime,difficulty:s.difficulty,description:s.description,steps:s.preparationSteps,tags:s.tags}),s.image.name!==void 0){const g=ms(gs,`recipe/${i}`);await jH(g).then(x=>DH(ms(gs,x.items[0]._location.path_)));const w=ms(gs,`recipe/${i}/${s.image.name}`);await tw(w,s.image);const T=ms(gs,`/recipe/${i}/${s.image.name}`);await nw(T).then(x=>{ps(Vn(sn,"recipes",i),{image:x})})}t(),r("/dashboard")};return f.jsx(f.Fragment,{children:f.jsx(GN,{newRecipeDetails:s,updateNewRecipeDetails:d,h2Text:"Edytuj",updateNewRecipeErrors:h,newRecipeErrors:a,isSubmitted:u,handleSubmitForm:E,updateRecipeTags:p,updateTagsArray:m})})},tK=()=>{const{pathname:t}=Bs();return y.useEffect(()=>{window.scrollTo(0,0)},[t]),null},nK=()=>{const{recipes:t}=Ke(),[e,n]=Kx(),r=e.get("tag"),[i,s]=y.useState([]),o=a=>a.split("").splice(0,1).join("").toUpperCase()+a.split("").splice(1,a.length).join("");return y.useEffect(()=>{const a=t.filter(l=>l.tags.includes(r));s(a)},[t]),f.jsx("section",{children:i.length===0?f.jsx(dc,{children:f.jsx(Ni,{})}):f.jsxs(f.Fragment,{children:[f.jsxs(pr,{children:["Przepisy z tagiem ",f.jsx("strong",{style:{color:"#8a6565"},children:o(r)})," "]}),f.jsx(at,{children:f.jsx(Xi,{array:i})})]})})},rK=()=>{const{recipes:t}=Ke(),e=St(),[n,r]=y.useState([]);y.useEffect(()=>{const s=[...t].filter(o=>o.category==="Dania główne").sort((o,a)=>a.likes-o.likes);r(s)},[t]);const i=()=>{e("/category/main-dishes")};return f.jsxs(f.Fragment,{children:[f.jsx(pr,{children:"Dania główne"}),f.jsx(Xi,{array:n,onClick:i,addButton:!0,sliceBy:4})]})},iK=()=>{const{user:t}=Ke();return t?f.jsx(qx,{to:"/"}):f.jsx(zv,{})};function sK(){return f.jsx(UH,{children:f.jsxs(yD,{children:[f.jsx(zq,{}),f.jsx(tK,{}),f.jsxs(cD,{children:[f.jsxs(yt,{path:"/",element:f.jsx(sW,{}),children:[f.jsx(yt,{index:!0,element:f.jsxs(f.Fragment,{children:[f.jsx(sq,{}),f.jsx(zN,{}),f.jsx(UN,{}),f.jsx(rK,{}),f.jsx(Xq,{}),f.jsx(Jq,{})]})}),f.jsx(yt,{path:"/category/:categoryName",element:f.jsx(Zq,{})}),f.jsx(yt,{path:"/recipes/:recipeId",element:f.jsx(Tq,{})}),f.jsx(yt,{path:"/search",element:f.jsx(Fq,{})}),f.jsx(yt,{path:"/show",element:f.jsx(nK,{})}),f.jsx(yt,{path:"/violation",element:f.jsx(Yq,{})}),f.jsxs(yt,{element:f.jsx(Qq,{}),children:[f.jsx(yt,{path:"/dashboard",element:f.jsx(II,{})}),f.jsx(yt,{path:"/add-recipe",element:f.jsx(Gq,{})}),f.jsx(yt,{path:"/recipes/edit/:recipeId",element:f.jsx(eK,{})}),f.jsx(yt,{path:"/dashboard",element:f.jsx(II,{})})]})]}),f.jsxs(yt,{element:f.jsx(iK,{}),children:[f.jsx(yt,{path:"/signup",element:f.jsx(Iq,{})}),f.jsx(yt,{path:"/signin",element:f.jsx(kq,{})})]}),f.jsx(yt,{path:"*",element:f.jsx(Vq,{})})]})]})})}const oK=_m.createRoot(document.getElementById("root"));oK.render(f.jsx(sK,{}));
