function T0(r,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function I0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Td={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function S0(){if(wg)return Ae;wg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function R(V){return V===null||typeof V!="object"?null:(V=w&&V[w]||V["@@iterator"],typeof V=="function"?V:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,$={};function F(V,G,Ie){this.props=V,this.context=G,this.refs=$,this.updater=Ie||b}F.prototype.isReactComponent={},F.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},F.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function re(){}re.prototype=F.prototype;function te(V,G,Ie){this.props=V,this.context=G,this.refs=$,this.updater=Ie||b}var oe=te.prototype=new re;oe.constructor=te,B(oe,F.prototype),oe.isPureReactComponent=!0;var fe=Array.isArray,De=Object.prototype.hasOwnProperty,Re={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(V,G,Ie){var Se,Ce={},Pe=null,Fe=null;if(G!=null)for(Se in G.ref!==void 0&&(Fe=G.ref),G.key!==void 0&&(Pe=""+G.key),G)De.call(G,Se)&&!k.hasOwnProperty(Se)&&(Ce[Se]=G[Se]);var Oe=arguments.length-2;if(Oe===1)Ce.children=Ie;else if(1<Oe){for(var Be=Array(Oe),Bt=0;Bt<Oe;Bt++)Be[Bt]=arguments[Bt+2];Ce.children=Be}if(V&&V.defaultProps)for(Se in Oe=V.defaultProps,Oe)Ce[Se]===void 0&&(Ce[Se]=Oe[Se]);return{$$typeof:r,type:V,key:Pe,ref:Fe,props:Ce,_owner:Re.current}}function C(V,G){return{$$typeof:r,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function N(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Ie){return G[Ie]})}var O=/\/+/g;function A(V,G){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):G.toString(36)}function qe(V,G,Ie,Se,Ce){var Pe=typeof V;(Pe==="undefined"||Pe==="boolean")&&(V=null);var Fe=!1;if(V===null)Fe=!0;else switch(Pe){case"string":case"number":Fe=!0;break;case"object":switch(V.$$typeof){case r:case e:Fe=!0}}if(Fe)return Fe=V,Ce=Ce(Fe),V=Se===""?"."+A(Fe,0):Se,fe(Ce)?(Ie="",V!=null&&(Ie=V.replace(O,"$&/")+"/"),qe(Ce,G,Ie,"",function(Bt){return Bt})):Ce!=null&&(D(Ce)&&(Ce=C(Ce,Ie+(!Ce.key||Fe&&Fe.key===Ce.key?"":(""+Ce.key).replace(O,"$&/")+"/")+V)),G.push(Ce)),1;if(Fe=0,Se=Se===""?".":Se+":",fe(V))for(var Oe=0;Oe<V.length;Oe++){Pe=V[Oe];var Be=Se+A(Pe,Oe);Fe+=qe(Pe,G,Ie,Be,Ce)}else if(Be=R(V),typeof Be=="function")for(V=Be.call(V),Oe=0;!(Pe=V.next()).done;)Pe=Pe.value,Be=Se+A(Pe,Oe++),Fe+=qe(Pe,G,Ie,Be,Ce);else if(Pe==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Fe}function Et(V,G,Ie){if(V==null)return V;var Se=[],Ce=0;return qe(V,Se,"","",function(Pe){return G.call(Ie,Pe,Ce++)}),Se}function Dt(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(Ie){(V._status===0||V._status===-1)&&(V._status=1,V._result=Ie)},function(Ie){(V._status===0||V._status===-1)&&(V._status=2,V._result=Ie)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var Xe={current:null},ee={transition:null},pe={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Re};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Et,forEach:function(V,G,Ie){Et(V,function(){G.apply(this,arguments)},Ie)},count:function(V){var G=0;return Et(V,function(){G++}),G},toArray:function(V){return Et(V,function(G){return G})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ae.Component=F,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=te,Ae.StrictMode=i,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ae.act=ae,Ae.cloneElement=function(V,G,Ie){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Se=B({},V.props),Ce=V.key,Pe=V.ref,Fe=V._owner;if(G!=null){if(G.ref!==void 0&&(Pe=G.ref,Fe=Re.current),G.key!==void 0&&(Ce=""+G.key),V.type&&V.type.defaultProps)var Oe=V.type.defaultProps;for(Be in G)De.call(G,Be)&&!k.hasOwnProperty(Be)&&(Se[Be]=G[Be]===void 0&&Oe!==void 0?Oe[Be]:G[Be])}var Be=arguments.length-2;if(Be===1)Se.children=Ie;else if(1<Be){Oe=Array(Be);for(var Bt=0;Bt<Be;Bt++)Oe[Bt]=arguments[Bt+2];Se.children=Oe}return{$$typeof:r,type:V.type,key:Ce,ref:Pe,props:Se,_owner:Fe}},Ae.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ae.createElement=S,Ae.createFactory=function(V){var G=S.bind(null,V);return G.type=V,G},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(V){return{$$typeof:f,render:V}},Ae.isValidElement=D,Ae.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:Dt}},Ae.memo=function(V,G){return{$$typeof:y,type:V,compare:G===void 0?null:G}},Ae.startTransition=function(V){var G=ee.transition;ee.transition={};try{V()}finally{ee.transition=G}},Ae.unstable_act=ae,Ae.useCallback=function(V,G){return Xe.current.useCallback(V,G)},Ae.useContext=function(V){return Xe.current.useContext(V)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(V){return Xe.current.useDeferredValue(V)},Ae.useEffect=function(V,G){return Xe.current.useEffect(V,G)},Ae.useId=function(){return Xe.current.useId()},Ae.useImperativeHandle=function(V,G,Ie){return Xe.current.useImperativeHandle(V,G,Ie)},Ae.useInsertionEffect=function(V,G){return Xe.current.useInsertionEffect(V,G)},Ae.useLayoutEffect=function(V,G){return Xe.current.useLayoutEffect(V,G)},Ae.useMemo=function(V,G){return Xe.current.useMemo(V,G)},Ae.useReducer=function(V,G,Ie){return Xe.current.useReducer(V,G,Ie)},Ae.useRef=function(V){return Xe.current.useRef(V)},Ae.useState=function(V){return Xe.current.useState(V)},Ae.useSyncExternalStore=function(V,G,Ie){return Xe.current.useSyncExternalStore(V,G,Ie)},Ae.useTransition=function(){return Xe.current.useTransition()},Ae.version="18.3.1",Ae}var Tg;function p_(){return Tg||(Tg=1,Td.exports=S0()),Td.exports}var q=p_();const Q=I0(q),R0=T0({__proto__:null,default:Q},[q]);var zu={},Id={exports:{}},Yt={},Sd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function A0(){return Ig||(Ig=1,(function(r){function e(ee,pe){var ae=ee.length;ee.push(pe);e:for(;0<ae;){var V=ae-1>>>1,G=ee[V];if(0<o(G,pe))ee[V]=pe,ee[ae]=G,ae=V;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var pe=ee[0],ae=ee.pop();if(ae!==pe){ee[0]=ae;e:for(var V=0,G=ee.length,Ie=G>>>1;V<Ie;){var Se=2*(V+1)-1,Ce=ee[Se],Pe=Se+1,Fe=ee[Pe];if(0>o(Ce,ae))Pe<G&&0>o(Fe,Ce)?(ee[V]=Fe,ee[Pe]=ae,V=Pe):(ee[V]=Ce,ee[Se]=ae,V=Se);else if(Pe<G&&0>o(Fe,ae))ee[V]=Fe,ee[Pe]=ae,V=Pe;else break e}}return pe}function o(ee,pe){var ae=ee.sortIndex-pe.sortIndex;return ae!==0?ae:ee.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],y=[],E=1,w=null,R=3,b=!1,B=!1,$=!1,F=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(ee){for(var pe=t(y);pe!==null;){if(pe.callback===null)i(y);else if(pe.startTime<=ee)i(y),pe.sortIndex=pe.expirationTime,e(g,pe);else break;pe=t(y)}}function fe(ee){if($=!1,oe(ee),!B)if(t(g)!==null)B=!0,Dt(De);else{var pe=t(y);pe!==null&&Xe(fe,pe.startTime-ee)}}function De(ee,pe){B=!1,$&&($=!1,re(S),S=-1),b=!0;var ae=R;try{for(oe(pe),w=t(g);w!==null&&(!(w.expirationTime>pe)||ee&&!N());){var V=w.callback;if(typeof V=="function"){w.callback=null,R=w.priorityLevel;var G=V(w.expirationTime<=pe);pe=r.unstable_now(),typeof G=="function"?w.callback=G:w===t(g)&&i(g),oe(pe)}else i(g);w=t(g)}if(w!==null)var Ie=!0;else{var Se=t(y);Se!==null&&Xe(fe,Se.startTime-pe),Ie=!1}return Ie}finally{w=null,R=ae,b=!1}}var Re=!1,k=null,S=-1,C=5,D=-1;function N(){return!(r.unstable_now()-D<C)}function O(){if(k!==null){var ee=r.unstable_now();D=ee;var pe=!0;try{pe=k(!0,ee)}finally{pe?A():(Re=!1,k=null)}}else Re=!1}var A;if(typeof te=="function")A=function(){te(O)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,Et=qe.port2;qe.port1.onmessage=O,A=function(){Et.postMessage(null)}}else A=function(){F(O,0)};function Dt(ee){k=ee,Re||(Re=!0,A())}function Xe(ee,pe){S=F(function(){ee(r.unstable_now())},pe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){B||b||(B=!0,Dt(De))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(R){case 1:case 2:case 3:var pe=3;break;default:pe=R}var ae=R;R=pe;try{return ee()}finally{R=ae}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,pe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ae=R;R=ee;try{return pe()}finally{R=ae}},r.unstable_scheduleCallback=function(ee,pe,ae){var V=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,ee){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ae+G,ee={id:E++,callback:pe,priorityLevel:ee,startTime:ae,expirationTime:G,sortIndex:-1},ae>V?(ee.sortIndex=ae,e(y,ee),t(g)===null&&ee===t(y)&&($?(re(S),S=-1):$=!0,Xe(fe,ae-V))):(ee.sortIndex=G,e(g,ee),B||b||(B=!0,Dt(De))),ee},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(ee){var pe=R;return function(){var ae=R;R=pe;try{return ee.apply(this,arguments)}finally{R=ae}}}})(Rd)),Rd}var Sg;function C0(){return Sg||(Sg=1,Sd.exports=A0()),Sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function P0(){if(Rg)return Yt;Rg=1;var r=p_(),e=C0();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},w={};function R(n){return g.call(w,n)?!0:g.call(E,n)?!1:y.test(n)?w[n]=!0:(E[n]=!0,!1)}function b(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function B(n,s,a,c){if(s===null||typeof s>"u"||b(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(n,s,a,c,d,p,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=p,this.removeEmptyString=v}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){F[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];F[s]=new $(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){F[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){F[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){F[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){F[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){F[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){F[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){F[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function te(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(re,te);F[s]=new $(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(re,te);F[s]=new $(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(re,te);F[s]=new $(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){F[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),F.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){F[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function oe(n,s,a,c){var d=F.hasOwnProperty(s)?F[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(B(s,a,d,c)&&(a=null),c||d===null?R(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var fe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,De=Symbol.for("react.element"),Re=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Xe=Symbol.for("react.offscreen"),ee=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,V;function G(n){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+n}var Ie=!1;function Se(n,s){if(!n||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var c=z}Reflect.construct(n,[],s)}else{try{s.call()}catch(z){c=z}n.call(s.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,I=p.length-1;1<=v&&0<=I&&d[v]!==p[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==p[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==p[I]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=I);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?G(n):""}function Ce(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function Pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Re:return"Portal";case C:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case qe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case O:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Et:return s=n.displayName||null,s!==null?s:Pe(n.type)||"Memo";case Dt:s=n._payload,n=n._init;try{return Pe(n(s))}catch{}}return null}function Fe(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Bt(n){var s=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function ks(n){n._valueTracker||(n._valueTracker=Bt(n))}function Go(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Br(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ns(n,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Rl(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Oe(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function xs(n,s){s=s.checked,s!=null&&oe(n,"checked",s,!1)}function $i(n,s){xs(n,s);var a=Oe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?ct(n,s.type,a):s.hasOwnProperty("defaultValue")&&ct(n,s.type,Oe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Ko(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ct(n,s,a){(s!=="number"||Br(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ot=Array.isArray;function Tn(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Oe(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Qo(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Yo(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(ot(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Oe(a)}}function Al(n,s){var a=Oe(s.value),c=Oe(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function $r(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function Xo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ds(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?Xo(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qr,Cl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=qr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function qi(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pl=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(n){Pl.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Wr[s]=Wr[n]})});function Hr(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Wr.hasOwnProperty(n)&&Wr[n]?(""+s).trim():s+"px"}function Vs(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Hr(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Jo=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function In(n,s){if(s){if(Jo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function bs(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gr=null;function Os(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var cr=null,hr=null,rt=null;function Zo(n){if(n=Aa(n)){if(typeof cr!="function")throw Error(t(280));var s=n.stateNode;s&&(s=tu(s),cr(n.stateNode,n.type,s))}}function Kr(n){hr?rt?rt.push(n):rt=[n]:hr=n}function Qr(){if(hr){var n=hr,s=rt;if(rt=hr=null,Zo(n),s)for(n=0;n<s.length;n++)Zo(s[n])}}function kl(n,s){return n(s)}function Nl(){}var Un=!1;function xl(n,s,a){if(Un)return n(s,a);Un=!0;try{return kl(n,s,a)}finally{Un=!1,(hr!==null||rt!==null)&&(Nl(),Qr())}}function Wi(n,s){var a=n.stateNode;if(a===null)return null;var c=tu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Yr=!1;if(f)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Yr=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Yr=!1}function Dl(n,s,a,c,d,p,v,I,P){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(Y){this.onError(Y)}}var dr=!1,Fn=null,Ls=!1,cn=null,Vl={onError:function(n){dr=!0,Fn=n}};function bl(n,s,a,c,d,p,v,I,P){dr=!1,Fn=null,Dl.apply(Vl,arguments)}function ea(n,s,a,c,d,p,v,I,P){if(bl.apply(this,arguments),dr){if(dr){var z=Fn;dr=!1,Fn=null}else throw Error(t(198));Ls||(Ls=!0,cn=z)}}function Sn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function ta(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Ol(n){if(Sn(n)!==n)throw Error(t(188))}function Ll(n){var s=n.alternate;if(!s){if(s=Sn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Ol(d),n;if(p===c)return Ol(d),s;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=p;break}if(I===c){v=!0,c=d,a=p;break}I=I.sibling}if(!v){for(I=p.child;I;){if(I===a){v=!0,a=p,c=d;break}if(I===c){v=!0,c=p,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function Ml(n){return n=Ll(n),n!==null?Hi(n):null}function Hi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Hi(n);if(s!==null)return s;n=n.sibling}return null}var na=e.unstable_scheduleCallback,Ms=e.unstable_cancelCallback,Gi=e.unstable_shouldYield,fr=e.unstable_requestPaint,Ge=e.unstable_now,Zc=e.unstable_getCurrentPriorityLevel,Us=e.unstable_ImmediatePriority,ra=e.unstable_UserBlockingPriority,Ki=e.unstable_NormalPriority,ia=e.unstable_LowPriority,Fs=e.unstable_IdlePriority,Qi=null,Zt=null;function Ul(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Qi,n,void 0,(n.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Yi,zn=Math.log,hn=Math.LN2;function Yi(n){return n>>>=0,n===0?32:31-(zn(n)/hn|0)|0}var jn=64,Jr=4194304;function Ue(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pr(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Ue(I):(p&=v,p!==0&&(c=Ue(p)))}else v=a&~d,v!==0?c=Ue(v):p!==0&&(c=Ue(p));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-en(s),d=1<<a,c|=n[a],s&=~d;return c}function Xi(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ji(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-en(p),I=1<<v,P=d[v];P===-1?((I&a)===0||(I&c)!==0)&&(d[v]=Xi(I,s)):P<=s&&(n.expiredLanes|=I),p&=~I}}function sa(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function oa(){var n=jn;return jn<<=1,(jn&4194240)===0&&(jn=64),n}function aa(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function Zi(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-en(s),n[s]=a}function eh(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-en(a),p=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function la(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-en(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var Ve=0;function Bn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ua,zs,ca,ha,da,$n=!1,js=[],qn=null,Wn=null,Rt=null,es=new Map,mr=new Map,tn=[],Fl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zr(n,s){switch(n){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":es.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(s.pointerId)}}function Rn(n,s,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},s!==null&&(s=Aa(s),s!==null&&zs(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function zl(n,s,a,c,d){switch(s){case"focusin":return qn=Rn(qn,n,s,a,c,d),!0;case"dragenter":return Wn=Rn(Wn,n,s,a,c,d),!0;case"mouseover":return Rt=Rn(Rt,n,s,a,c,d),!0;case"pointerover":var p=d.pointerId;return es.set(p,Rn(es.get(p)||null,n,s,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,mr.set(p,Rn(mr.get(p)||null,n,s,a,c,d)),!0}return!1}function Bs(n){var s=is(n.target);if(s!==null){var a=Sn(s);if(a!==null){if(s=a.tag,s===13){if(s=ta(a),s!==null){n.blockedOn=s,da(n.priority,function(){ca(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $e(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=$s(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Gr=c,a.target.dispatchEvent(c),Gr=null}else return s=Aa(a),s!==null&&zs(s),n.blockedOn=a,!1;s.shift()}return!0}function jl(n,s,a){$e(n)&&a.delete(s)}function th(){$n=!1,qn!==null&&$e(qn)&&(qn=null),Wn!==null&&$e(Wn)&&(Wn=null),Rt!==null&&$e(Rt)&&(Rt=null),es.forEach(jl),mr.forEach(jl)}function ei(n,s){n.blockedOn===s&&(n.blockedOn=null,$n||($n=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,th)))}function ti(n){function s(d){return ei(d,n)}if(0<js.length){ei(js[0],n);for(var a=1;a<js.length;a++){var c=js[a];c.blockedOn===n&&(c.blockedOn=null)}}for(qn!==null&&ei(qn,n),Wn!==null&&ei(Wn,n),Rt!==null&&ei(Rt,n),es.forEach(s),mr.forEach(s),a=0;a<tn.length;a++)c=tn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tn.length&&(a=tn[0],a.blockedOn===null);)Bs(a),a.blockedOn===null&&tn.shift()}var gr=fe.ReactCurrentBatchConfig,yr=!0;function Hn(n,s,a,c){var d=Ve,p=gr.transition;gr.transition=null;try{Ve=1,fa(n,s,a,c)}finally{Ve=d,gr.transition=p}}function Bl(n,s,a,c){var d=Ve,p=gr.transition;gr.transition=null;try{Ve=4,fa(n,s,a,c)}finally{Ve=d,gr.transition=p}}function fa(n,s,a,c){if(yr){var d=$s(n,s,a,c);if(d===null)dh(n,s,c,Gn,a),Zr(n,c);else if(zl(d,n,s,a,c))c.stopPropagation();else if(Zr(n,c),s&4&&-1<Fl.indexOf(n)){for(;d!==null;){var p=Aa(d);if(p!==null&&ua(p),p=$s(n,s,a,c),p===null&&dh(n,s,c,Gn,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else dh(n,s,c,null,a)}}var Gn=null;function $s(n,s,a,c){if(Gn=null,n=Os(c),n=is(n),n!==null)if(s=Sn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=ta(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Gn=n,null}function qs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case Us:return 1;case ra:return 4;case Ki:case ia:return 16;case Fs:return 536870912;default:return 16}default:return 16}}var nn=null,Ws=null,_r=null;function $l(){if(_r)return _r;var n,s=Ws,a=s.length,c,d="value"in nn?nn.value:nn.textContent,p=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[p-c];c++);return _r=d.slice(n,1<c?1-c:void 0)}function ts(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Kn(){return!0}function pa(){return!1}function Vt(n){function s(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Kn:pa,this.isPropagationStopped=pa,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),s}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=Vt(Qn),ni=ae({},Qn,{view:0,detail:0}),Hs=Vt(ni),Gs,Ks,rn,rs=ae({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:we,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rn&&(rn&&n.type==="mousemove"?(Gs=n.screenX-rn.screenX,Ks=n.screenY-rn.screenY):Ks=Gs=0,rn=n),Gs)},movementY:function(n){return"movementY"in n?n.movementY:Ks}}),ma=Vt(rs),ql=ae({},rs,{dataTransfer:0}),Wl=Vt(ql),Qs=ae({},ni,{relatedTarget:0}),At=Vt(Qs),Hl=ae({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gl=Vt(Hl),ri=ae({},Qn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=Vt(ri),m=ae({},Qn,{data:0}),_=Vt(m),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=j[n])?!!s[n]:!1}function we(){return Z}var at=ae({},ni,{key:function(n){if(n.key){var s=T[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=ts(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:we,charCode:function(n){return n.type==="keypress"?ts(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ts(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),je=Vt(at),ht=ae({},rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sn=Vt(ht),vr=ae({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:we}),Yn=Vt(vr),Xn=ae({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ys=Vt(Xn),ga=ae({},rs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gw=Vt(ga),yw=[9,13,27,32],nh=f&&"CompositionEvent"in window,ya=null;f&&"documentMode"in document&&(ya=document.documentMode);var _w=f&&"TextEvent"in window&&!ya,fp=f&&(!nh||ya&&8<ya&&11>=ya),pp=" ",mp=!1;function gp(n,s){switch(n){case"keyup":return yw.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Xs=!1;function vw(n,s){switch(n){case"compositionend":return yp(s);case"keypress":return s.which!==32?null:(mp=!0,pp);case"textInput":return n=s.data,n===pp&&mp?null:n;default:return null}}function Ew(n,s){if(Xs)return n==="compositionend"||!nh&&gp(n,s)?(n=$l(),_r=Ws=nn=null,Xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return fp&&s.locale!=="ko"?null:s.data;default:return null}}var ww={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!ww[n.type]:s==="textarea"}function vp(n,s,a,c){Kr(c),s=Jl(s,"onChange"),0<s.length&&(a=new ns("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var _a=null,va=null;function Tw(n){Mp(n,0)}function Kl(n){var s=no(n);if(Go(s))return n}function Iw(n,s){if(n==="change")return s}var Ep=!1;if(f){var rh;if(f){var ih="oninput"in document;if(!ih){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),ih=typeof wp.oninput=="function"}rh=ih}else rh=!1;Ep=rh&&(!document.documentMode||9<document.documentMode)}function Tp(){_a&&(_a.detachEvent("onpropertychange",Ip),va=_a=null)}function Ip(n){if(n.propertyName==="value"&&Kl(va)){var s=[];vp(s,va,n,Os(n)),xl(Tw,s)}}function Sw(n,s,a){n==="focusin"?(Tp(),_a=s,va=a,_a.attachEvent("onpropertychange",Ip)):n==="focusout"&&Tp()}function Rw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Kl(va)}function Aw(n,s){if(n==="click")return Kl(s)}function Cw(n,s){if(n==="input"||n==="change")return Kl(s)}function Pw(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var An=typeof Object.is=="function"?Object.is:Pw;function Ea(n,s){if(An(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!An(n[d],s[d]))return!1}return!0}function Sp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Rp(n,s){var a=Sp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sp(a)}}function Ap(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Ap(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Cp(){for(var n=window,s=Br();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Br(n.document)}return s}function sh(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function kw(n){var s=Cp(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&Ap(a.ownerDocument.documentElement,a)){if(c!==null&&sh(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Rp(a,p);var v=Rp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Nw=f&&"documentMode"in document&&11>=document.documentMode,Js=null,oh=null,wa=null,ah=!1;function Pp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ah||Js==null||Js!==Br(c)||(c=Js,"selectionStart"in c&&sh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),wa&&Ea(wa,c)||(wa=c,c=Jl(oh,"onSelect"),0<c.length&&(s=new ns("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=Js)))}function Ql(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var Zs={animationend:Ql("Animation","AnimationEnd"),animationiteration:Ql("Animation","AnimationIteration"),animationstart:Ql("Animation","AnimationStart"),transitionend:Ql("Transition","TransitionEnd")},lh={},kp={};f&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Yl(n){if(lh[n])return lh[n];if(!Zs[n])return n;var s=Zs[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in kp)return lh[n]=s[a];return n}var Np=Yl("animationend"),xp=Yl("animationiteration"),Dp=Yl("animationstart"),Vp=Yl("transitionend"),bp=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(n,s){bp.set(n,s),l(s,[n])}for(var uh=0;uh<Op.length;uh++){var ch=Op[uh],xw=ch.toLowerCase(),Dw=ch[0].toUpperCase()+ch.slice(1);ii(xw,"on"+Dw)}ii(Np,"onAnimationEnd"),ii(xp,"onAnimationIteration"),ii(Dp,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(Vp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Lp(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,ea(c,s,void 0,n),n.currentTarget=null}function Mp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(s)for(var v=c.length-1;0<=v;v--){var I=c[v],P=I.instance,z=I.currentTarget;if(I=I.listener,P!==p&&d.isPropagationStopped())break e;Lp(d,I,z),p=P}else for(v=0;v<c.length;v++){if(I=c[v],P=I.instance,z=I.currentTarget,I=I.listener,P!==p&&d.isPropagationStopped())break e;Lp(d,I,z),p=P}}}if(Ls)throw n=cn,Ls=!1,cn=null,n}function Ke(n,s){var a=s[_h];a===void 0&&(a=s[_h]=new Set);var c=n+"__bubble";a.has(c)||(Up(s,n,2,!1),a.add(c))}function hh(n,s,a){var c=0;s&&(c|=4),Up(a,n,c,s)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Ia(n){if(!n[Xl]){n[Xl]=!0,i.forEach(function(a){a!=="selectionchange"&&(Vw.has(a)||hh(a,!1,n),hh(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Xl]||(s[Xl]=!0,hh("selectionchange",!1,s))}}function Up(n,s,a,c){switch(qs(s)){case 1:var d=Hn;break;case 4:d=Bl;break;default:d=fa}a=d.bind(null,s,a,n),d=void 0,!Yr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function dh(n,s,a,c,d){var p=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;I!==null;){if(v=is(I),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}I=I.parentNode}}c=c.return}xl(function(){var z=p,Y=Os(a),X=[];e:{var K=bp.get(n);if(K!==void 0){var ie=ns,ue=n;switch(n){case"keypress":if(ts(a)===0)break e;case"keydown":case"keyup":ie=je;break;case"focusin":ue="focus",ie=At;break;case"focusout":ue="blur",ie=At;break;case"beforeblur":case"afterblur":ie=At;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=ma;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Wl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Yn;break;case Np:case xp:case Dp:ie=Gl;break;case Vp:ie=Ys;break;case"scroll":ie=Hs;break;case"wheel":ie=gw;break;case"copy":case"cut":case"paste":ie=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=sn}var ce=(s&4)!==0,lt=!ce&&n==="scroll",L=ce?K!==null?K+"Capture":null:K;ce=[];for(var x=z,U;x!==null;){U=x;var J=U.stateNode;if(U.tag===5&&J!==null&&(U=J,L!==null&&(J=Wi(x,L),J!=null&&ce.push(Sa(x,J,U)))),lt)break;x=x.return}0<ce.length&&(K=new ie(K,ue,null,a,Y),X.push({event:K,listeners:ce}))}}if((s&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",K&&a!==Gr&&(ue=a.relatedTarget||a.fromElement)&&(is(ue)||ue[Er]))break e;if((ie||K)&&(K=Y.window===Y?Y:(K=Y.ownerDocument)?K.defaultView||K.parentWindow:window,ie?(ue=a.relatedTarget||a.toElement,ie=z,ue=ue?is(ue):null,ue!==null&&(lt=Sn(ue),ue!==lt||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=z),ie!==ue)){if(ce=ma,J="onMouseLeave",L="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(ce=sn,J="onPointerLeave",L="onPointerEnter",x="pointer"),lt=ie==null?K:no(ie),U=ue==null?K:no(ue),K=new ce(J,x+"leave",ie,a,Y),K.target=lt,K.relatedTarget=U,J=null,is(Y)===z&&(ce=new ce(L,x+"enter",ue,a,Y),ce.target=U,ce.relatedTarget=lt,J=ce),lt=J,ie&&ue)t:{for(ce=ie,L=ue,x=0,U=ce;U;U=eo(U))x++;for(U=0,J=L;J;J=eo(J))U++;for(;0<x-U;)ce=eo(ce),x--;for(;0<U-x;)L=eo(L),U--;for(;x--;){if(ce===L||L!==null&&ce===L.alternate)break t;ce=eo(ce),L=eo(L)}ce=null}else ce=null;ie!==null&&Fp(X,K,ie,ce,!1),ue!==null&&lt!==null&&Fp(X,lt,ue,ce,!0)}}e:{if(K=z?no(z):window,ie=K.nodeName&&K.nodeName.toLowerCase(),ie==="select"||ie==="input"&&K.type==="file")var he=Iw;else if(_p(K))if(Ep)he=Cw;else{he=Rw;var me=Sw}else(ie=K.nodeName)&&ie.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(he=Aw);if(he&&(he=he(n,z))){vp(X,he,a,Y);break e}me&&me(n,K,z),n==="focusout"&&(me=K._wrapperState)&&me.controlled&&K.type==="number"&&ct(K,"number",K.value)}switch(me=z?no(z):window,n){case"focusin":(_p(me)||me.contentEditable==="true")&&(Js=me,oh=z,wa=null);break;case"focusout":wa=oh=Js=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,Pp(X,a,Y);break;case"selectionchange":if(Nw)break;case"keydown":case"keyup":Pp(X,a,Y)}var ge;if(nh)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Xs?gp(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(fp&&a.locale!=="ko"&&(Xs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Xs&&(ge=$l()):(nn=Y,Ws="value"in nn?nn.value:nn.textContent,Xs=!0)),me=Jl(z,ve),0<me.length&&(ve=new _(ve,n,null,a,Y),X.push({event:ve,listeners:me}),ge?ve.data=ge:(ge=yp(a),ge!==null&&(ve.data=ge)))),(ge=_w?vw(n,a):Ew(n,a))&&(z=Jl(z,"onBeforeInput"),0<z.length&&(Y=new _("onBeforeInput","beforeinput",null,a,Y),X.push({event:Y,listeners:z}),Y.data=ge))}Mp(X,s)})}function Sa(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Jl(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Wi(n,a),p!=null&&c.unshift(Sa(n,p,d)),p=Wi(n,s),p!=null&&c.push(Sa(n,p,d))),n=n.return}return c}function eo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Fp(n,s,a,c,d){for(var p=s._reactName,v=[];a!==null&&a!==c;){var I=a,P=I.alternate,z=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&z!==null&&(I=z,d?(P=Wi(a,p),P!=null&&v.unshift(Sa(a,P,I))):d||(P=Wi(a,p),P!=null&&v.push(Sa(a,P,I)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var bw=/\r\n?/g,Ow=/\u0000|\uFFFD/g;function zp(n){return(typeof n=="string"?n:""+n).replace(bw,`
`).replace(Ow,"")}function Zl(n,s,a){if(s=zp(s),zp(n)!==s&&a)throw Error(t(425))}function eu(){}var fh=null,ph=null;function mh(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var gh=typeof setTimeout=="function"?setTimeout:void 0,Lw=typeof clearTimeout=="function"?clearTimeout:void 0,jp=typeof Promise=="function"?Promise:void 0,Mw=typeof queueMicrotask=="function"?queueMicrotask:typeof jp<"u"?function(n){return jp.resolve(null).then(n).catch(Uw)}:gh;function Uw(n){setTimeout(function(){throw n})}function yh(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ti(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ti(s)}function si(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Bp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var to=Math.random().toString(36).slice(2),Jn="__reactFiber$"+to,Ra="__reactProps$"+to,Er="__reactContainer$"+to,_h="__reactEvents$"+to,Fw="__reactListeners$"+to,zw="__reactHandles$"+to;function is(n){var s=n[Jn];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Er]||a[Jn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Bp(n);n!==null;){if(a=n[Jn])return a;n=Bp(n)}return s}n=a,a=n.parentNode}return null}function Aa(n){return n=n[Jn]||n[Er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function no(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function tu(n){return n[Ra]||null}var vh=[],ro=-1;function oi(n){return{current:n}}function Qe(n){0>ro||(n.current=vh[ro],vh[ro]=null,ro--)}function We(n,s){ro++,vh[ro]=n.current,n.current=s}var ai={},bt=oi(ai),Wt=oi(!1),ss=ai;function io(n,s){var a=n.type.contextTypes;if(!a)return ai;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=s[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function nu(){Qe(Wt),Qe(bt)}function $p(n,s,a){if(bt.current!==ai)throw Error(t(168));We(bt,s),We(Wt,a)}function qp(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Fe(n)||"Unknown",d));return ae({},a,c)}function ru(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ai,ss=bt.current,We(bt,n),We(Wt,Wt.current),!0}function Wp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=qp(n,s,ss),c.__reactInternalMemoizedMergedChildContext=n,Qe(Wt),Qe(bt),We(bt,n)):Qe(Wt),We(Wt,a)}var wr=null,iu=!1,Eh=!1;function Hp(n){wr===null?wr=[n]:wr.push(n)}function jw(n){iu=!0,Hp(n)}function li(){if(!Eh&&wr!==null){Eh=!0;var n=0,s=Ve;try{var a=wr;for(Ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}wr=null,iu=!1}catch(d){throw wr!==null&&(wr=wr.slice(n+1)),na(Us,li),d}finally{Ve=s,Eh=!1}}return null}var so=[],oo=0,su=null,ou=0,dn=[],fn=0,os=null,Tr=1,Ir="";function as(n,s){so[oo++]=ou,so[oo++]=su,su=n,ou=s}function Gp(n,s,a){dn[fn++]=Tr,dn[fn++]=Ir,dn[fn++]=os,os=n;var c=Tr;n=Ir;var d=32-en(c)-1;c&=~(1<<d),a+=1;var p=32-en(s)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Tr=1<<32-en(s)+d|a<<d|c,Ir=p+n}else Tr=1<<p|a<<d|c,Ir=n}function wh(n){n.return!==null&&(as(n,1),Gp(n,1,0))}function Th(n){for(;n===su;)su=so[--oo],so[oo]=null,ou=so[--oo],so[oo]=null;for(;n===os;)os=dn[--fn],dn[fn]=null,Ir=dn[--fn],dn[fn]=null,Tr=dn[--fn],dn[fn]=null}var on=null,an=null,Je=!1,Cn=null;function Kp(n,s){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Qp(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,on=n,an=si(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,on=n,an=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=os!==null?{id:Tr,overflow:Ir}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function Ih(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Sh(n){if(Je){var s=an;if(s){var a=s;if(!Qp(n,s)){if(Ih(n))throw Error(t(418));s=si(a.nextSibling);var c=on;s&&Qp(n,s)?Kp(c,a):(n.flags=n.flags&-4097|2,Je=!1,on=n)}}else{if(Ih(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,on=n}}}function Yp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function au(n){if(n!==on)return!1;if(!Je)return Yp(n),Je=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!mh(n.type,n.memoizedProps)),s&&(s=an)){if(Ih(n))throw Xp(),Error(t(418));for(;s;)Kp(n,s),s=si(s.nextSibling)}if(Yp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){an=si(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}an=null}}else an=on?si(n.stateNode.nextSibling):null;return!0}function Xp(){for(var n=an;n;)n=si(n.nextSibling)}function ao(){an=on=null,Je=!1}function Rh(n){Cn===null?Cn=[n]:Cn.push(n)}var Bw=fe.ReactCurrentBatchConfig;function Ca(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(v){var I=d.refs;v===null?delete I[p]:I[p]=v},s._stringRef=p,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function lu(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Jp(n){var s=n._init;return s(n._payload)}function Zp(n){function s(L,x){if(n){var U=L.deletions;U===null?(L.deletions=[x],L.flags|=16):U.push(x)}}function a(L,x){if(!n)return null;for(;x!==null;)s(L,x),x=x.sibling;return null}function c(L,x){for(L=new Map;x!==null;)x.key!==null?L.set(x.key,x):L.set(x.index,x),x=x.sibling;return L}function d(L,x){return L=gi(L,x),L.index=0,L.sibling=null,L}function p(L,x,U){return L.index=U,n?(U=L.alternate,U!==null?(U=U.index,U<x?(L.flags|=2,x):U):(L.flags|=2,x)):(L.flags|=1048576,x)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,x,U,J){return x===null||x.tag!==6?(x=gd(U,L.mode,J),x.return=L,x):(x=d(x,U),x.return=L,x)}function P(L,x,U,J){var he=U.type;return he===k?Y(L,x,U.props.children,J,U.key):x!==null&&(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&Jp(he)===x.type)?(J=d(x,U.props),J.ref=Ca(L,x,U),J.return=L,J):(J=Du(U.type,U.key,U.props,null,L.mode,J),J.ref=Ca(L,x,U),J.return=L,J)}function z(L,x,U,J){return x===null||x.tag!==4||x.stateNode.containerInfo!==U.containerInfo||x.stateNode.implementation!==U.implementation?(x=yd(U,L.mode,J),x.return=L,x):(x=d(x,U.children||[]),x.return=L,x)}function Y(L,x,U,J,he){return x===null||x.tag!==7?(x=ms(U,L.mode,J,he),x.return=L,x):(x=d(x,U),x.return=L,x)}function X(L,x,U){if(typeof x=="string"&&x!==""||typeof x=="number")return x=gd(""+x,L.mode,U),x.return=L,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case De:return U=Du(x.type,x.key,x.props,null,L.mode,U),U.ref=Ca(L,null,x),U.return=L,U;case Re:return x=yd(x,L.mode,U),x.return=L,x;case Dt:var J=x._init;return X(L,J(x._payload),U)}if(ot(x)||pe(x))return x=ms(x,L.mode,U,null),x.return=L,x;lu(L,x)}return null}function K(L,x,U,J){var he=x!==null?x.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return he!==null?null:I(L,x,""+U,J);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case De:return U.key===he?P(L,x,U,J):null;case Re:return U.key===he?z(L,x,U,J):null;case Dt:return he=U._init,K(L,x,he(U._payload),J)}if(ot(U)||pe(U))return he!==null?null:Y(L,x,U,J,null);lu(L,U)}return null}function ie(L,x,U,J,he){if(typeof J=="string"&&J!==""||typeof J=="number")return L=L.get(U)||null,I(x,L,""+J,he);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case De:return L=L.get(J.key===null?U:J.key)||null,P(x,L,J,he);case Re:return L=L.get(J.key===null?U:J.key)||null,z(x,L,J,he);case Dt:var me=J._init;return ie(L,x,U,me(J._payload),he)}if(ot(J)||pe(J))return L=L.get(U)||null,Y(x,L,J,he,null);lu(x,J)}return null}function ue(L,x,U,J){for(var he=null,me=null,ge=x,ve=x=0,It=null;ge!==null&&ve<U.length;ve++){ge.index>ve?(It=ge,ge=null):It=ge.sibling;var Me=K(L,ge,U[ve],J);if(Me===null){ge===null&&(ge=It);break}n&&ge&&Me.alternate===null&&s(L,ge),x=p(Me,x,ve),me===null?he=Me:me.sibling=Me,me=Me,ge=It}if(ve===U.length)return a(L,ge),Je&&as(L,ve),he;if(ge===null){for(;ve<U.length;ve++)ge=X(L,U[ve],J),ge!==null&&(x=p(ge,x,ve),me===null?he=ge:me.sibling=ge,me=ge);return Je&&as(L,ve),he}for(ge=c(L,ge);ve<U.length;ve++)It=ie(ge,L,ve,U[ve],J),It!==null&&(n&&It.alternate!==null&&ge.delete(It.key===null?ve:It.key),x=p(It,x,ve),me===null?he=It:me.sibling=It,me=It);return n&&ge.forEach(function(yi){return s(L,yi)}),Je&&as(L,ve),he}function ce(L,x,U,J){var he=pe(U);if(typeof he!="function")throw Error(t(150));if(U=he.call(U),U==null)throw Error(t(151));for(var me=he=null,ge=x,ve=x=0,It=null,Me=U.next();ge!==null&&!Me.done;ve++,Me=U.next()){ge.index>ve?(It=ge,ge=null):It=ge.sibling;var yi=K(L,ge,Me.value,J);if(yi===null){ge===null&&(ge=It);break}n&&ge&&yi.alternate===null&&s(L,ge),x=p(yi,x,ve),me===null?he=yi:me.sibling=yi,me=yi,ge=It}if(Me.done)return a(L,ge),Je&&as(L,ve),he;if(ge===null){for(;!Me.done;ve++,Me=U.next())Me=X(L,Me.value,J),Me!==null&&(x=p(Me,x,ve),me===null?he=Me:me.sibling=Me,me=Me);return Je&&as(L,ve),he}for(ge=c(L,ge);!Me.done;ve++,Me=U.next())Me=ie(ge,L,ve,Me.value,J),Me!==null&&(n&&Me.alternate!==null&&ge.delete(Me.key===null?ve:Me.key),x=p(Me,x,ve),me===null?he=Me:me.sibling=Me,me=Me);return n&&ge.forEach(function(w0){return s(L,w0)}),Je&&as(L,ve),he}function lt(L,x,U,J){if(typeof U=="object"&&U!==null&&U.type===k&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case De:e:{for(var he=U.key,me=x;me!==null;){if(me.key===he){if(he=U.type,he===k){if(me.tag===7){a(L,me.sibling),x=d(me,U.props.children),x.return=L,L=x;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&Jp(he)===me.type){a(L,me.sibling),x=d(me,U.props),x.ref=Ca(L,me,U),x.return=L,L=x;break e}a(L,me);break}else s(L,me);me=me.sibling}U.type===k?(x=ms(U.props.children,L.mode,J,U.key),x.return=L,L=x):(J=Du(U.type,U.key,U.props,null,L.mode,J),J.ref=Ca(L,x,U),J.return=L,L=J)}return v(L);case Re:e:{for(me=U.key;x!==null;){if(x.key===me)if(x.tag===4&&x.stateNode.containerInfo===U.containerInfo&&x.stateNode.implementation===U.implementation){a(L,x.sibling),x=d(x,U.children||[]),x.return=L,L=x;break e}else{a(L,x);break}else s(L,x);x=x.sibling}x=yd(U,L.mode,J),x.return=L,L=x}return v(L);case Dt:return me=U._init,lt(L,x,me(U._payload),J)}if(ot(U))return ue(L,x,U,J);if(pe(U))return ce(L,x,U,J);lu(L,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,x!==null&&x.tag===6?(a(L,x.sibling),x=d(x,U),x.return=L,L=x):(a(L,x),x=gd(U,L.mode,J),x.return=L,L=x),v(L)):a(L,x)}return lt}var lo=Zp(!0),em=Zp(!1),uu=oi(null),cu=null,uo=null,Ah=null;function Ch(){Ah=uo=cu=null}function Ph(n){var s=uu.current;Qe(uu),n._currentValue=s}function kh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function co(n,s){cu=n,Ah=uo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Gt=!0),n.firstContext=null)}function pn(n){var s=n._currentValue;if(Ah!==n)if(n={context:n,memoizedValue:s,next:null},uo===null){if(cu===null)throw Error(t(308));uo=n,cu.dependencies={lanes:0,firstContext:n}}else uo=uo.next=n;return s}var ls=null;function Nh(n){ls===null?ls=[n]:ls.push(n)}function tm(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Nh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Sr(n,c)}function Sr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ui=!1;function xh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Rr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ci(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Sr(n,a)}return d=c.interleaved,d===null?(s.next=s,Nh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Sr(n,a)}function hu(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,la(n,a)}}function rm(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=s:p=p.next=s}else d=p=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function du(n,s,a,c){var d=n.updateQueue;ui=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,z=P.next;P.next=null,v===null?p=z:v.next=z,v=P;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,I=Y.lastBaseUpdate,I!==v&&(I===null?Y.firstBaseUpdate=z:I.next=z,Y.lastBaseUpdate=P))}if(p!==null){var X=d.baseState;v=0,Y=z=P=null,I=p;do{var K=I.lane,ie=I.eventTime;if((c&K)===K){Y!==null&&(Y=Y.next={eventTime:ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ue=n,ce=I;switch(K=s,ie=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){X=ue.call(ie,X,K);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,K=typeof ue=="function"?ue.call(ie,X,K):ue,K==null)break e;X=ae({},X,K);break e;case 2:ui=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[I]:K.push(I))}else ie={eventTime:ie,lane:K,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Y===null?(z=Y=ie,P=X):Y=Y.next=ie,v|=K;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;K=I,I=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Y===null&&(P=X),d.baseState=P,d.firstBaseUpdate=z,d.lastBaseUpdate=Y,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);hs|=v,n.lanes=v,n.memoizedState=X}}function im(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Pa={},Zn=oi(Pa),ka=oi(Pa),Na=oi(Pa);function us(n){if(n===Pa)throw Error(t(174));return n}function Dh(n,s){switch(We(Na,s),We(ka,n),We(Zn,Pa),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ds(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=Ds(s,n)}Qe(Zn),We(Zn,s)}function ho(){Qe(Zn),Qe(ka),Qe(Na)}function sm(n){us(Na.current);var s=us(Zn.current),a=Ds(s,n.type);s!==a&&(We(ka,n),We(Zn,a))}function Vh(n){ka.current===n&&(Qe(Zn),Qe(ka))}var Ze=oi(0);function fu(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var bh=[];function Oh(){for(var n=0;n<bh.length;n++)bh[n]._workInProgressVersionPrimary=null;bh.length=0}var pu=fe.ReactCurrentDispatcher,Lh=fe.ReactCurrentBatchConfig,cs=0,et=null,yt=null,wt=null,mu=!1,xa=!1,Da=0,$w=0;function Ot(){throw Error(t(321))}function Mh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!An(n[a],s[a]))return!1;return!0}function Uh(n,s,a,c,d,p){if(cs=p,et=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,pu.current=n===null||n.memoizedState===null?Gw:Kw,n=a(c,d),xa){p=0;do{if(xa=!1,Da=0,25<=p)throw Error(t(301));p+=1,wt=yt=null,s.updateQueue=null,pu.current=Qw,n=a(c,d)}while(xa)}if(pu.current=_u,s=yt!==null&&yt.next!==null,cs=0,wt=yt=et=null,mu=!1,s)throw Error(t(300));return n}function Fh(){var n=Da!==0;return Da=0,n}function er(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?et.memoizedState=wt=n:wt=wt.next=n,wt}function mn(){if(yt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var s=wt===null?et.memoizedState:wt.next;if(s!==null)wt=s,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},wt===null?et.memoizedState=wt=n:wt=wt.next=n}return wt}function Va(n,s){return typeof s=="function"?s(n):s}function zh(n){var s=mn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=v=null,P=null,z=p;do{var Y=z.lane;if((cs&Y)===Y)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var X={lane:Y,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(I=P=X,v=c):P=P.next=X,et.lanes|=Y,hs|=Y}z=z.next}while(z!==null&&z!==p);P===null?v=c:P.next=I,An(c,s.memoizedState)||(Gt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,et.lanes|=p,hs|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function jh(n){var s=mn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);An(p,s.memoizedState)||(Gt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),a.lastRenderedState=p}return[p,c]}function om(){}function am(n,s){var a=et,c=mn(),d=s(),p=!An(c.memoizedState,d);if(p&&(c.memoizedState=d,Gt=!0),c=c.queue,Bh(cm.bind(null,a,c,n),[n]),c.getSnapshot!==s||p||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,ba(9,um.bind(null,a,c,d,s),void 0,null),Tt===null)throw Error(t(349));(cs&30)!==0||lm(a,s,d)}return d}function lm(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function um(n,s,a,c){s.value=a,s.getSnapshot=c,hm(s)&&dm(n)}function cm(n,s,a){return a(function(){hm(s)&&dm(n)})}function hm(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!An(n,a)}catch{return!0}}function dm(n){var s=Sr(n,1);s!==null&&xn(s,n,1,-1)}function fm(n){var s=er();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:n},s.queue=n,n=n.dispatch=Hw.bind(null,et,n),[s.memoizedState,n]}function ba(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function pm(){return mn().memoizedState}function gu(n,s,a,c){var d=er();et.flags|=n,d.memoizedState=ba(1|s,a,void 0,c===void 0?null:c)}function yu(n,s,a,c){var d=mn();c=c===void 0?null:c;var p=void 0;if(yt!==null){var v=yt.memoizedState;if(p=v.destroy,c!==null&&Mh(c,v.deps)){d.memoizedState=ba(s,a,p,c);return}}et.flags|=n,d.memoizedState=ba(1|s,a,p,c)}function mm(n,s){return gu(8390656,8,n,s)}function Bh(n,s){return yu(2048,8,n,s)}function gm(n,s){return yu(4,2,n,s)}function ym(n,s){return yu(4,4,n,s)}function _m(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function vm(n,s,a){return a=a!=null?a.concat([n]):null,yu(4,4,_m.bind(null,s,n),a)}function $h(){}function Em(n,s){var a=mn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Mh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function wm(n,s){var a=mn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Mh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function Tm(n,s,a){return(cs&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a):(An(a,s)||(a=oa(),et.lanes|=a,hs|=a,n.baseState=!0),s)}function qw(n,s){var a=Ve;Ve=a!==0&&4>a?a:4,n(!0);var c=Lh.transition;Lh.transition={};try{n(!1),s()}finally{Ve=a,Lh.transition=c}}function Im(){return mn().memoizedState}function Ww(n,s,a){var c=pi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Sm(n))Rm(s,a);else if(a=tm(n,s,a,c),a!==null){var d=qt();xn(a,n,c,d),Am(a,s,c)}}function Hw(n,s,a){var c=pi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sm(n))Rm(s,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var v=s.lastRenderedState,I=p(v,a);if(d.hasEagerState=!0,d.eagerState=I,An(I,v)){var P=s.interleaved;P===null?(d.next=d,Nh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=tm(n,s,d,c),a!==null&&(d=qt(),xn(a,n,c,d),Am(a,s,c))}}function Sm(n){var s=n.alternate;return n===et||s!==null&&s===et}function Rm(n,s){xa=mu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function Am(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,la(n,a)}}var _u={readContext:pn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},Gw={readContext:pn,useCallback:function(n,s){return er().memoizedState=[n,s===void 0?null:s],n},useContext:pn,useEffect:mm,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,gu(4194308,4,_m.bind(null,s,n),a)},useLayoutEffect:function(n,s){return gu(4194308,4,n,s)},useInsertionEffect:function(n,s){return gu(4,2,n,s)},useMemo:function(n,s){var a=er();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=er();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=Ww.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var s=er();return n={current:n},s.memoizedState=n},useState:fm,useDebugValue:$h,useDeferredValue:function(n){return er().memoizedState=n},useTransition:function(){var n=fm(!1),s=n[0];return n=qw.bind(null,n[1]),er().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=et,d=er();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));(cs&30)!==0||lm(c,s,a)}d.memoizedState=a;var p={value:a,getSnapshot:s};return d.queue=p,mm(cm.bind(null,c,p,n),[n]),c.flags|=2048,ba(9,um.bind(null,c,p,a,s),void 0,null),a},useId:function(){var n=er(),s=Tt.identifierPrefix;if(Je){var a=Ir,c=Tr;a=(c&~(1<<32-en(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Da++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=$w++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},Kw={readContext:pn,useCallback:Em,useContext:pn,useEffect:Bh,useImperativeHandle:vm,useInsertionEffect:gm,useLayoutEffect:ym,useMemo:wm,useReducer:zh,useRef:pm,useState:function(){return zh(Va)},useDebugValue:$h,useDeferredValue:function(n){var s=mn();return Tm(s,yt.memoizedState,n)},useTransition:function(){var n=zh(Va)[0],s=mn().memoizedState;return[n,s]},useMutableSource:om,useSyncExternalStore:am,useId:Im,unstable_isNewReconciler:!1},Qw={readContext:pn,useCallback:Em,useContext:pn,useEffect:Bh,useImperativeHandle:vm,useInsertionEffect:gm,useLayoutEffect:ym,useMemo:wm,useReducer:jh,useRef:pm,useState:function(){return jh(Va)},useDebugValue:$h,useDeferredValue:function(n){var s=mn();return yt===null?s.memoizedState=n:Tm(s,yt.memoizedState,n)},useTransition:function(){var n=jh(Va)[0],s=mn().memoizedState;return[n,s]},useMutableSource:om,useSyncExternalStore:am,useId:Im,unstable_isNewReconciler:!1};function Pn(n,s){if(n&&n.defaultProps){s=ae({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function qh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:ae({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var vu={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=qt(),d=pi(n),p=Rr(c,d);p.payload=s,a!=null&&(p.callback=a),s=ci(n,p,d),s!==null&&(xn(s,n,d,c),hu(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=qt(),d=pi(n),p=Rr(c,d);p.tag=1,p.payload=s,a!=null&&(p.callback=a),s=ci(n,p,d),s!==null&&(xn(s,n,d,c),hu(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=qt(),c=pi(n),d=Rr(a,c);d.tag=2,s!=null&&(d.callback=s),s=ci(n,d,c),s!==null&&(xn(s,n,c,a),hu(s,n,c))}};function Cm(n,s,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):s.prototype&&s.prototype.isPureReactComponent?!Ea(a,c)||!Ea(d,p):!0}function Pm(n,s,a){var c=!1,d=ai,p=s.contextType;return typeof p=="object"&&p!==null?p=pn(p):(d=Ht(s)?ss:bt.current,c=s.contextTypes,p=(c=c!=null)?io(n,d):ai),s=new s(a,p),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=vu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),s}function km(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&vu.enqueueReplaceState(s,s.state,null)}function Wh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},xh(n);var p=s.contextType;typeof p=="object"&&p!==null?d.context=pn(p):(p=Ht(s)?ss:bt.current,d.context=io(n,p)),d.state=n.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(qh(n,s,p,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&vu.enqueueReplaceState(d,d.state,null),du(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function fo(n,s){try{var a="",c=s;do a+=Ce(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:s,stack:d,digest:null}}function Hh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Gh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Yw=typeof WeakMap=="function"?WeakMap:Map;function Nm(n,s,a){a=Rr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Au||(Au=!0,ld=c),Gh(n,s)},a}function xm(n,s,a){a=Rr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Gh(n,s)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Gh(n,s),typeof c!="function"&&(di===null?di=new Set([this]):di.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Dm(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Yw;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=c0.bind(null,n,s,a),s.then(n,n))}function Vm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function bm(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Rr(-1,1),s.tag=2,ci(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Xw=fe.ReactCurrentOwner,Gt=!1;function $t(n,s,a,c){s.child=n===null?em(s,null,a,c):lo(s,n.child,a,c)}function Om(n,s,a,c,d){a=a.render;var p=s.ref;return co(s,d),c=Uh(n,s,a,c,p,d),a=Fh(),n!==null&&!Gt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Ar(n,s,d)):(Je&&a&&wh(s),s.flags|=1,$t(n,s,c,d),s.child)}function Lm(n,s,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!md(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=p,Mm(n,s,p,c,d)):(n=Du(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ea,a(v,c)&&n.ref===s.ref)return Ar(n,s,d)}return s.flags|=1,n=gi(p,c),n.ref=s.ref,n.return=s,s.child=n}function Mm(n,s,a,c,d){if(n!==null){var p=n.memoizedProps;if(Ea(p,c)&&n.ref===s.ref)if(Gt=!1,s.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return s.lanes=n.lanes,Ar(n,s,d)}return Kh(n,s,a,c,d)}function Um(n,s,a){var c=s.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(mo,ln),ln|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,We(mo,ln),ln|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,We(mo,ln),ln|=c}else p!==null?(c=p.baseLanes|a,s.memoizedState=null):c=a,We(mo,ln),ln|=c;return $t(n,s,d,a),s.child}function Fm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Kh(n,s,a,c,d){var p=Ht(a)?ss:bt.current;return p=io(s,p),co(s,d),a=Uh(n,s,a,c,p,d),c=Fh(),n!==null&&!Gt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Ar(n,s,d)):(Je&&c&&wh(s),s.flags|=1,$t(n,s,a,d),s.child)}function zm(n,s,a,c,d){if(Ht(a)){var p=!0;ru(s)}else p=!1;if(co(s,d),s.stateNode===null)wu(n,s),Pm(s,a,c),Wh(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,I=s.memoizedProps;v.props=I;var P=v.context,z=a.contextType;typeof z=="object"&&z!==null?z=pn(z):(z=Ht(a)?ss:bt.current,z=io(s,z));var Y=a.getDerivedStateFromProps,X=typeof Y=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||P!==z)&&km(s,v,c,z),ui=!1;var K=s.memoizedState;v.state=K,du(s,c,v,d),P=s.memoizedState,I!==c||K!==P||Wt.current||ui?(typeof Y=="function"&&(qh(s,a,Y,c),P=s.memoizedState),(I=ui||Cm(s,a,I,c,K,P,z))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=z,c=I):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,nm(n,s),I=s.memoizedProps,z=s.type===s.elementType?I:Pn(s.type,I),v.props=z,X=s.pendingProps,K=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=pn(P):(P=Ht(a)?ss:bt.current,P=io(s,P));var ie=a.getDerivedStateFromProps;(Y=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==X||K!==P)&&km(s,v,c,P),ui=!1,K=s.memoizedState,v.state=K,du(s,c,v,d);var ue=s.memoizedState;I!==X||K!==ue||Wt.current||ui?(typeof ie=="function"&&(qh(s,a,ie,c),ue=s.memoizedState),(z=ui||Cm(s,a,z,c,K,ue,P)||!1)?(Y||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=P,c=z):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),c=!1)}return Qh(n,s,a,c,p,d)}function Qh(n,s,a,c,d,p){Fm(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Wp(s,a,!1),Ar(n,s,p);c=s.stateNode,Xw.current=s;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=lo(s,n.child,null,p),s.child=lo(s,null,I,p)):$t(n,s,I,p),s.memoizedState=c.state,d&&Wp(s,a,!0),s.child}function jm(n){var s=n.stateNode;s.pendingContext?$p(n,s.pendingContext,s.pendingContext!==s.context):s.context&&$p(n,s.context,!1),Dh(n,s.containerInfo)}function Bm(n,s,a,c,d){return ao(),Rh(d),s.flags|=256,$t(n,s,a,c),s.child}var Yh={dehydrated:null,treeContext:null,retryLane:0};function Xh(n){return{baseLanes:n,cachePool:null,transitions:null}}function $m(n,s,a){var c=s.pendingProps,d=Ze.current,p=!1,v=(s.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(Ze,d&1),n===null)return Sh(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=s.mode,p=s.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Vu(v,c,0,null),n=ms(n,c,a,null),p.return=s,n.return=s,p.sibling=n,s.child=p,s.child.memoizedState=Xh(a),s.memoizedState=Yh,n):Jh(s,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Jw(n,s,v,c,I,d,a);if(p){p=c.fallback,v=s.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=gi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=gi(I,p):(p=ms(p,v,a,null),p.flags|=2),p.return=s,c.return=s,c.sibling=p,s.child=c,c=p,p=s.child,v=n.child.memoizedState,v=v===null?Xh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,s.memoizedState=Yh,c}return p=n.child,n=p.sibling,c=gi(p,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function Jh(n,s){return s=Vu({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Eu(n,s,a,c){return c!==null&&Rh(c),lo(s,n.child,null,a),n=Jh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function Jw(n,s,a,c,d,p,v){if(a)return s.flags&256?(s.flags&=-257,c=Hh(Error(t(422))),Eu(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(p=c.fallback,d=s.mode,c=Vu({mode:"visible",children:c.children},d,0,null),p=ms(p,d,v,null),p.flags|=2,c.return=s,p.return=s,c.sibling=p,s.child=c,(s.mode&1)!==0&&lo(s,n.child,null,v),s.child.memoizedState=Xh(v),s.memoizedState=Yh,p);if((s.mode&1)===0)return Eu(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=Hh(p,c,void 0),Eu(n,s,v,c)}if(I=(v&n.childLanes)!==0,Gt||I){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Sr(n,d),xn(c,n,d,-1))}return pd(),c=Hh(Error(t(421))),Eu(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=h0.bind(null,n),d._reactRetry=s,null):(n=p.treeContext,an=si(d.nextSibling),on=s,Je=!0,Cn=null,n!==null&&(dn[fn++]=Tr,dn[fn++]=Ir,dn[fn++]=os,Tr=n.id,Ir=n.overflow,os=s),s=Jh(s,c.children),s.flags|=4096,s)}function qm(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),kh(n.return,s,a)}function Zh(n,s,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Wm(n,s,a){var c=s.pendingProps,d=c.revealOrder,p=c.tail;if($t(n,s,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qm(n,a,s);else if(n.tag===19)qm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(Ze,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&fu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Zh(s,!1,d,a,p);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&fu(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Zh(s,!0,a,null,p);break;case"together":Zh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function wu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Ar(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),hs|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=gi(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=gi(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function Zw(n,s,a){switch(s.tag){case 3:jm(s),ao();break;case 5:sm(s);break;case 1:Ht(s.type)&&ru(s);break;case 4:Dh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;We(uu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(We(Ze,Ze.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?$m(n,s,a):(We(Ze,Ze.current&1),n=Ar(n,s,a),n!==null?n.sibling:null);We(Ze,Ze.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return Wm(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ze,Ze.current),c)break;return null;case 22:case 23:return s.lanes=0,Um(n,s,a)}return Ar(n,s,a)}var Hm,ed,Gm,Km;Hm=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ed=function(){},Gm=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,us(Zn.current);var p=null;switch(a){case"input":d=Ns(n,d),c=Ns(n,c),p=[];break;case"select":d=ae({},d,{value:void 0}),c=ae({},c,{value:void 0}),p=[];break;case"textarea":d=Qo(n,d),c=Qo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=eu)}In(a,c);var v;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var I=d[z];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?p||(p=[]):(p=p||[]).push(z,null));for(z in c){var P=c[z];if(I=d?.[z],c.hasOwnProperty(z)&&P!==I&&(P!=null||I!=null))if(z==="style")if(I){for(v in I)!I.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&I[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(p=p||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&Ke("scroll",n),p||I===P||(p=[])):(p=p||[]).push(z,P))}a&&(p=p||[]).push("style",a);var z=p;(s.updateQueue=z)&&(s.flags|=4)}},Km=function(n,s,a,c){a!==c&&(s.flags|=4)};function Oa(n,s){if(!Je)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function e0(n,s,a){var c=s.pendingProps;switch(Th(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(s),null;case 1:return Ht(s.type)&&nu(),Lt(s),null;case 3:return c=s.stateNode,ho(),Qe(Wt),Qe(bt),Oh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(au(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Cn!==null&&(hd(Cn),Cn=null))),ed(n,s),Lt(s),null;case 5:Vh(s);var d=us(Na.current);if(a=s.type,n!==null&&s.stateNode!=null)Gm(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Lt(s),null}if(n=us(Zn.current),au(s)){c=s.stateNode,a=s.type;var p=s.memoizedProps;switch(c[Jn]=s,c[Ra]=p,n=(s.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<Ta.length;d++)Ke(Ta[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":Rl(c,p),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ke("invalid",c);break;case"textarea":Yo(c,p),Ke("invalid",c)}In(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var I=p[v];v==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Zl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Zl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":ks(c),Ko(c,p,!0);break;case"textarea":ks(c),$r(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=eu)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Xo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Jn]=s,n[Ra]=c,Hm(n,s,!1,!1),s.stateNode=n;e:{switch(v=bs(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ta.length;d++)Ke(Ta[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":Rl(n,c),d=Ns(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ae({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Yo(n,c),d=Qo(n,c),Ke("invalid",n);break;default:d=c}In(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var P=I[p];p==="style"?Vs(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Cl(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&qi(n,P):typeof P=="number"&&qi(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&Ke("scroll",n):P!=null&&oe(n,p,P,v))}switch(a){case"input":ks(n),Ko(n,c,!1);break;case"textarea":ks(n),$r(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Oe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Tn(n,!!c.multiple,p,!1):c.defaultValue!=null&&Tn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=eu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Lt(s),null;case 6:if(n&&s.stateNode!=null)Km(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=us(Na.current),us(Zn.current),au(s)){if(c=s.stateNode,a=s.memoizedProps,c[Jn]=s,(p=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Zl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Zl(c.nodeValue,a,(n.mode&1)!==0)}p&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Jn]=s,s.stateNode=c}return Lt(s),null;case 13:if(Qe(Ze),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&an!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Xp(),ao(),s.flags|=98560,p=!1;else if(p=au(s),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Jn]=s}else ao(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Lt(s),p=!1}else Cn!==null&&(hd(Cn),Cn=null),p=!0;if(!p)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(Ze.current&1)!==0?_t===0&&(_t=3):pd())),s.updateQueue!==null&&(s.flags|=4),Lt(s),null);case 4:return ho(),ed(n,s),n===null&&Ia(s.stateNode.containerInfo),Lt(s),null;case 10:return Ph(s.type._context),Lt(s),null;case 17:return Ht(s.type)&&nu(),Lt(s),null;case 19:if(Qe(Ze),p=s.memoizedState,p===null)return Lt(s),null;if(c=(s.flags&128)!==0,v=p.rendering,v===null)if(c)Oa(p,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(v=fu(n),v!==null){for(s.flags|=128,Oa(p,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(Ze,Ze.current&1|2),s.child}n=n.sibling}p.tail!==null&&Ge()>go&&(s.flags|=128,c=!0,Oa(p,!1),s.lanes=4194304)}else{if(!c)if(n=fu(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Oa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Je)return Lt(s),null}else 2*Ge()-p.renderingStartTime>go&&a!==1073741824&&(s.flags|=128,c=!0,Oa(p,!1),s.lanes=4194304);p.isBackwards?(v.sibling=s.child,s.child=v):(a=p.last,a!==null?a.sibling=v:s.child=v,p.last=v)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=Ge(),s.sibling=null,a=Ze.current,We(Ze,c?a&1|2:a&1),s):(Lt(s),null);case 22:case 23:return fd(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(ln&1073741824)!==0&&(Lt(s),s.subtreeFlags&6&&(s.flags|=8192)):Lt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function t0(n,s){switch(Th(s),s.tag){case 1:return Ht(s.type)&&nu(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return ho(),Qe(Wt),Qe(bt),Oh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Vh(s),null;case 13:if(Qe(Ze),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ao()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Qe(Ze),null;case 4:return ho(),null;case 10:return Ph(s.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var Tu=!1,Mt=!1,n0=typeof WeakSet=="function"?WeakSet:Set,le=null;function po(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,s,c)}else a.current=null}function td(n,s,a){try{a()}catch(c){it(n,s,c)}}var Qm=!1;function r0(n,s){if(fh=yr,n=Cp(),sh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,I=-1,P=-1,z=0,Y=0,X=n,K=null;t:for(;;){for(var ie;X!==a||d!==0&&X.nodeType!==3||(I=v+d),X!==p||c!==0&&X.nodeType!==3||(P=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(ie=X.firstChild)!==null;)K=X,X=ie;for(;;){if(X===n)break t;if(K===a&&++z===d&&(I=v),K===p&&++Y===c&&(P=v),(ie=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=ie}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(ph={focusedElem:n,selectionRange:a},yr=!1,le=s;le!==null;)if(s=le,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,le=n;else for(;le!==null;){s=le;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,lt=ue.memoizedState,L=s.stateNode,x=L.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Pn(s.type,ce),lt);L.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var U=s.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){it(s,s.return,J)}if(n=s.sibling,n!==null){n.return=s.return,le=n;break}le=s.return}return ue=Qm,Qm=!1,ue}function La(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&td(s,a,p)}d=d.next}while(d!==c)}}function Iu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function nd(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function Ym(n){var s=n.alternate;s!==null&&(n.alternate=null,Ym(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Jn],delete s[Ra],delete s[_h],delete s[Fw],delete s[zw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xm(n){return n.tag===5||n.tag===3||n.tag===4}function Jm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rd(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=eu));else if(c!==4&&(n=n.child,n!==null))for(rd(n,s,a),n=n.sibling;n!==null;)rd(n,s,a),n=n.sibling}function id(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(id(n,s,a),n=n.sibling;n!==null;)id(n,s,a),n=n.sibling}var Ct=null,kn=!1;function hi(n,s,a){for(a=a.child;a!==null;)Zm(n,s,a),a=a.sibling}function Zm(n,s,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Qi,a)}catch{}switch(a.tag){case 5:Mt||po(a,s);case 6:var c=Ct,d=kn;Ct=null,hi(n,s,a),Ct=c,kn=d,Ct!==null&&(kn?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(kn?(n=Ct,a=a.stateNode,n.nodeType===8?yh(n.parentNode,a):n.nodeType===1&&yh(n,a),ti(n)):yh(Ct,a.stateNode));break;case 4:c=Ct,d=kn,Ct=a.stateNode.containerInfo,kn=!0,hi(n,s,a),Ct=c,kn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&td(a,s,v),d=d.next}while(d!==c)}hi(n,s,a);break;case 1:if(!Mt&&(po(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){it(a,s,I)}hi(n,s,a);break;case 21:hi(n,s,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,hi(n,s,a),Mt=c):hi(n,s,a);break;default:hi(n,s,a)}}function eg(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new n0),s.forEach(function(c){var d=d0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Nn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=s,I=v;e:for(;I!==null;){switch(I.tag){case 5:Ct=I.stateNode,kn=!1;break e;case 3:Ct=I.stateNode.containerInfo,kn=!0;break e;case 4:Ct=I.stateNode.containerInfo,kn=!0;break e}I=I.return}if(Ct===null)throw Error(t(160));Zm(p,v,d),Ct=null,kn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(z){it(d,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)tg(s,n),s=s.sibling}function tg(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Nn(s,n),tr(n),c&4){try{La(3,n,n.return),Iu(3,n)}catch(ce){it(n,n.return,ce)}try{La(5,n,n.return)}catch(ce){it(n,n.return,ce)}}break;case 1:Nn(s,n),tr(n),c&512&&a!==null&&po(a,a.return);break;case 5:if(Nn(s,n),tr(n),c&512&&a!==null&&po(a,a.return),n.flags&32){var d=n.stateNode;try{qi(d,"")}catch(ce){it(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&xs(d,p),bs(I,v);var z=bs(I,p);for(v=0;v<P.length;v+=2){var Y=P[v],X=P[v+1];Y==="style"?Vs(d,X):Y==="dangerouslySetInnerHTML"?Cl(d,X):Y==="children"?qi(d,X):oe(d,Y,X,z)}switch(I){case"input":$i(d,p);break;case"textarea":Al(d,p);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ie=p.value;ie!=null?Tn(d,!!p.multiple,ie,!1):K!==!!p.multiple&&(p.defaultValue!=null?Tn(d,!!p.multiple,p.defaultValue,!0):Tn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Ra]=p}catch(ce){it(n,n.return,ce)}}break;case 6:if(Nn(s,n),tr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ce){it(n,n.return,ce)}}break;case 3:if(Nn(s,n),tr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ti(s.containerInfo)}catch(ce){it(n,n.return,ce)}break;case 4:Nn(s,n),tr(n);break;case 13:Nn(s,n),tr(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(ad=Ge())),c&4&&eg(n);break;case 22:if(Y=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(z=Mt)||Y,Nn(s,n),Mt=z):Nn(s,n),tr(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!Y&&(n.mode&1)!==0)for(le=n,Y=n.child;Y!==null;){for(X=le=Y;le!==null;){switch(K=le,ie=K.child,K.tag){case 0:case 11:case 14:case 15:La(4,K,K.return);break;case 1:po(K,K.return);var ue=K.stateNode;if(typeof ue.componentWillUnmount=="function"){c=K,a=K.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){it(c,a,ce)}}break;case 5:po(K,K.return);break;case 22:if(K.memoizedState!==null){ig(X);continue}}ie!==null?(ie.return=K,le=ie):ig(X)}Y=Y.sibling}e:for(Y=null,X=n;;){if(X.tag===5){if(Y===null){Y=X;try{d=X.stateNode,z?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=X.stateNode,P=X.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=Hr("display",v))}catch(ce){it(n,n.return,ce)}}}else if(X.tag===6){if(Y===null)try{X.stateNode.nodeValue=z?"":X.memoizedProps}catch(ce){it(n,n.return,ce)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Y===X&&(Y=null),X=X.return}Y===X&&(Y=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Nn(s,n),tr(n),c&4&&eg(n);break;case 21:break;default:Nn(s,n),tr(n)}}function tr(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(Xm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(qi(d,""),c.flags&=-33);var p=Jm(n);id(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=Jm(n);rd(n,I,v);break;default:throw Error(t(161))}}catch(P){it(n,n.return,P)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function i0(n,s,a){le=n,ng(n)}function ng(n,s,a){for(var c=(n.mode&1)!==0;le!==null;){var d=le,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Tu;if(!v){var I=d.alternate,P=I!==null&&I.memoizedState!==null||Mt;I=Tu;var z=Mt;if(Tu=v,(Mt=P)&&!z)for(le=d;le!==null;)v=le,P=v.child,v.tag===22&&v.memoizedState!==null?sg(d):P!==null?(P.return=v,le=P):sg(d);for(;p!==null;)le=p,ng(p),p=p.sibling;le=d,Tu=I,Mt=z}rg(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,le=p):rg(n)}}function rg(n){for(;le!==null;){var s=le;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Mt||Iu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Pn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&im(s,p,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}im(s,v,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var Y=z.memoizedState;if(Y!==null){var X=Y.dehydrated;X!==null&&ti(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||s.flags&512&&nd(s)}catch(K){it(s,s.return,K)}}if(s===n){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function ig(n){for(;le!==null;){var s=le;if(s===n){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function sg(n){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Iu(4,s)}catch(P){it(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){it(s,d,P)}}var p=s.return;try{nd(s)}catch(P){it(s,p,P)}break;case 5:var v=s.return;try{nd(s)}catch(P){it(s,v,P)}}}catch(P){it(s,s.return,P)}if(s===n){le=null;break}var I=s.sibling;if(I!==null){I.return=s.return,le=I;break}le=s.return}}var s0=Math.ceil,Su=fe.ReactCurrentDispatcher,sd=fe.ReactCurrentOwner,gn=fe.ReactCurrentBatchConfig,Le=0,Tt=null,dt=null,Pt=0,ln=0,mo=oi(0),_t=0,Ma=null,hs=0,Ru=0,od=0,Ua=null,Kt=null,ad=0,go=1/0,Cr=null,Au=!1,ld=null,di=null,Cu=!1,fi=null,Pu=0,Fa=0,ud=null,ku=-1,Nu=0;function qt(){return(Le&6)!==0?Ge():ku!==-1?ku:ku=Ge()}function pi(n){return(n.mode&1)===0?1:(Le&2)!==0&&Pt!==0?Pt&-Pt:Bw.transition!==null?(Nu===0&&(Nu=oa()),Nu):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:qs(n.type)),n)}function xn(n,s,a,c){if(50<Fa)throw Fa=0,ud=null,Error(t(185));Zi(n,a,c),((Le&2)===0||n!==Tt)&&(n===Tt&&((Le&2)===0&&(Ru|=a),_t===4&&mi(n,Pt)),Qt(n,c),a===1&&Le===0&&(s.mode&1)===0&&(go=Ge()+500,iu&&li()))}function Qt(n,s){var a=n.callbackNode;Ji(n,s);var c=pr(n,n===Tt?Pt:0);if(c===0)a!==null&&Ms(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&Ms(a),s===1)n.tag===0?jw(ag.bind(null,n)):Hp(ag.bind(null,n)),Mw(function(){(Le&6)===0&&li()}),a=null;else{switch(Bn(c)){case 1:a=Us;break;case 4:a=ra;break;case 16:a=Ki;break;case 536870912:a=Fs;break;default:a=Ki}a=mg(a,og.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function og(n,s){if(ku=-1,Nu=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(yo()&&n.callbackNode!==a)return null;var c=pr(n,n===Tt?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=xu(n,c);else{s=c;var d=Le;Le|=2;var p=ug();(Tt!==n||Pt!==s)&&(Cr=null,go=Ge()+500,fs(n,s));do try{l0();break}catch(I){lg(n,I)}while(!0);Ch(),Su.current=p,Le=d,dt!==null?s=0:(Tt=null,Pt=0,s=_t)}if(s!==0){if(s===2&&(d=sa(n),d!==0&&(c=d,s=cd(n,d))),s===1)throw a=Ma,fs(n,0),mi(n,c),Qt(n,Ge()),a;if(s===6)mi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!o0(d)&&(s=xu(n,c),s===2&&(p=sa(n),p!==0&&(c=p,s=cd(n,p))),s===1))throw a=Ma,fs(n,0),mi(n,c),Qt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ps(n,Kt,Cr);break;case 3:if(mi(n,c),(c&130023424)===c&&(s=ad+500-Ge(),10<s)){if(pr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=gh(ps.bind(null,n,Kt,Cr),s);break}ps(n,Kt,Cr);break;case 4:if(mi(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-en(c);p=1<<v,v=s[v],v>d&&(d=v),c&=~p}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*s0(c/1960))-c,10<c){n.timeoutHandle=gh(ps.bind(null,n,Kt,Cr),c);break}ps(n,Kt,Cr);break;case 5:ps(n,Kt,Cr);break;default:throw Error(t(329))}}}return Qt(n,Ge()),n.callbackNode===a?og.bind(null,n):null}function cd(n,s){var a=Ua;return n.current.memoizedState.isDehydrated&&(fs(n,s).flags|=256),n=xu(n,s),n!==2&&(s=Kt,Kt=a,s!==null&&hd(s)),n}function hd(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function o0(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!An(p(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function mi(n,s){for(s&=~od,s&=~Ru,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-en(s),c=1<<a;n[a]=-1,s&=~c}}function ag(n){if((Le&6)!==0)throw Error(t(327));yo();var s=pr(n,0);if((s&1)===0)return Qt(n,Ge()),null;var a=xu(n,s);if(n.tag!==0&&a===2){var c=sa(n);c!==0&&(s=c,a=cd(n,c))}if(a===1)throw a=Ma,fs(n,0),mi(n,s),Qt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,ps(n,Kt,Cr),Qt(n,Ge()),null}function dd(n,s){var a=Le;Le|=1;try{return n(s)}finally{Le=a,Le===0&&(go=Ge()+500,iu&&li())}}function ds(n){fi!==null&&fi.tag===0&&(Le&6)===0&&yo();var s=Le;Le|=1;var a=gn.transition,c=Ve;try{if(gn.transition=null,Ve=1,n)return n()}finally{Ve=c,gn.transition=a,Le=s,(Le&6)===0&&li()}}function fd(){ln=mo.current,Qe(mo)}function fs(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Lw(a)),dt!==null)for(a=dt.return;a!==null;){var c=a;switch(Th(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&nu();break;case 3:ho(),Qe(Wt),Qe(bt),Oh();break;case 5:Vh(c);break;case 4:ho();break;case 13:Qe(Ze);break;case 19:Qe(Ze);break;case 10:Ph(c.type._context);break;case 22:case 23:fd()}a=a.return}if(Tt=n,dt=n=gi(n.current,null),Pt=ln=s,_t=0,Ma=null,od=Ru=hs=0,Kt=Ua=null,ls!==null){for(s=0;s<ls.length;s++)if(a=ls[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}ls=null}return n}function lg(n,s){do{var a=dt;try{if(Ch(),pu.current=_u,mu){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}mu=!1}if(cs=0,wt=yt=et=null,xa=!1,Da=0,sd.current=null,a===null||a.return===null){_t=1,Ma=s,dt=null;break}e:{var p=n,v=a.return,I=a,P=s;if(s=Pt,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,Y=I,X=Y.tag;if((Y.mode&1)===0&&(X===0||X===11||X===15)){var K=Y.alternate;K?(Y.updateQueue=K.updateQueue,Y.memoizedState=K.memoizedState,Y.lanes=K.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var ie=Vm(v);if(ie!==null){ie.flags&=-257,bm(ie,v,I,p,s),ie.mode&1&&Dm(p,z,s),s=ie,P=z;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(P),s.updateQueue=ce}else ue.add(P);break e}else{if((s&1)===0){Dm(p,z,s),pd();break e}P=Error(t(426))}}else if(Je&&I.mode&1){var lt=Vm(v);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),bm(lt,v,I,p,s),Rh(fo(P,I));break e}}p=P=fo(P,I),_t!==4&&(_t=2),Ua===null?Ua=[p]:Ua.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var L=Nm(p,P,s);rm(p,L);break e;case 1:I=P;var x=p.type,U=p.stateNode;if((p.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(di===null||!di.has(U)))){p.flags|=65536,s&=-s,p.lanes|=s;var J=xm(p,I,s);rm(p,J);break e}}p=p.return}while(p!==null)}hg(a)}catch(he){s=he,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function ug(){var n=Su.current;return Su.current=_u,n===null?_u:n}function pd(){(_t===0||_t===3||_t===2)&&(_t=4),Tt===null||(hs&268435455)===0&&(Ru&268435455)===0||mi(Tt,Pt)}function xu(n,s){var a=Le;Le|=2;var c=ug();(Tt!==n||Pt!==s)&&(Cr=null,fs(n,s));do try{a0();break}catch(d){lg(n,d)}while(!0);if(Ch(),Le=a,Su.current=c,dt!==null)throw Error(t(261));return Tt=null,Pt=0,_t}function a0(){for(;dt!==null;)cg(dt)}function l0(){for(;dt!==null&&!Gi();)cg(dt)}function cg(n){var s=pg(n.alternate,n,ln);n.memoizedProps=n.pendingProps,s===null?hg(n):dt=s,sd.current=null}function hg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=e0(a,s,ln),a!==null){dt=a;return}}else{if(a=t0(a,s),a!==null){a.flags&=32767,dt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,dt=null;return}}if(s=s.sibling,s!==null){dt=s;return}dt=s=n}while(s!==null);_t===0&&(_t=5)}function ps(n,s,a){var c=Ve,d=gn.transition;try{gn.transition=null,Ve=1,u0(n,s,a,c)}finally{gn.transition=d,Ve=c}return null}function u0(n,s,a,c){do yo();while(fi!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(eh(n,p),n===Tt&&(dt=Tt=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Cu||(Cu=!0,mg(Ki,function(){return yo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=gn.transition,gn.transition=null;var v=Ve;Ve=1;var I=Le;Le|=4,sd.current=null,r0(n,a),tg(a,n),kw(ph),yr=!!fh,ph=fh=null,n.current=a,i0(a),fr(),Le=I,Ve=v,gn.transition=p}else n.current=a;if(Cu&&(Cu=!1,fi=n,Pu=d),p=n.pendingLanes,p===0&&(di=null),Ul(a.stateNode),Qt(n,Ge()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Au)throw Au=!1,n=ld,ld=null,n;return(Pu&1)!==0&&n.tag!==0&&yo(),p=n.pendingLanes,(p&1)!==0?n===ud?Fa++:(Fa=0,ud=n):Fa=0,li(),null}function yo(){if(fi!==null){var n=Bn(Pu),s=gn.transition,a=Ve;try{if(gn.transition=null,Ve=16>n?16:n,fi===null)var c=!1;else{if(n=fi,fi=null,Pu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,le=n.current;le!==null;){var p=le,v=p.child;if((le.flags&16)!==0){var I=p.deletions;if(I!==null){for(var P=0;P<I.length;P++){var z=I[P];for(le=z;le!==null;){var Y=le;switch(Y.tag){case 0:case 11:case 15:La(8,Y,p)}var X=Y.child;if(X!==null)X.return=Y,le=X;else for(;le!==null;){Y=le;var K=Y.sibling,ie=Y.return;if(Ym(Y),Y===z){le=null;break}if(K!==null){K.return=ie,le=K;break}le=ie}}}var ue=p.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var lt=ce.sibling;ce.sibling=null,ce=lt}while(ce!==null)}}le=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,le=v;else e:for(;le!==null;){if(p=le,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:La(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,le=L;break e}le=p.return}}var x=n.current;for(le=x;le!==null;){v=le;var U=v.child;if((v.subtreeFlags&2064)!==0&&U!==null)U.return=v,le=U;else e:for(v=x;le!==null;){if(I=le,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Iu(9,I)}}catch(he){it(I,I.return,he)}if(I===v){le=null;break e}var J=I.sibling;if(J!==null){J.return=I.return,le=J;break e}le=I.return}}if(Le=d,li(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Qi,n)}catch{}c=!0}return c}finally{Ve=a,gn.transition=s}}return!1}function dg(n,s,a){s=fo(a,s),s=Nm(n,s,1),n=ci(n,s,1),s=qt(),n!==null&&(Zi(n,1,s),Qt(n,s))}function it(n,s,a){if(n.tag===3)dg(n,n,a);else for(;s!==null;){if(s.tag===3){dg(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(di===null||!di.has(c))){n=fo(a,n),n=xm(s,n,1),s=ci(s,n,1),n=qt(),s!==null&&(Zi(s,1,n),Qt(s,n));break}}s=s.return}}function c0(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=qt(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Pt&a)===a&&(_t===4||_t===3&&(Pt&130023424)===Pt&&500>Ge()-ad?fs(n,0):od|=a),Qt(n,s)}function fg(n,s){s===0&&((n.mode&1)===0?s=1:(s=Jr,Jr<<=1,(Jr&130023424)===0&&(Jr=4194304)));var a=qt();n=Sr(n,s),n!==null&&(Zi(n,s,a),Qt(n,a))}function h0(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),fg(n,a)}function d0(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),fg(n,a)}var pg;pg=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Wt.current)Gt=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return Gt=!1,Zw(n,s,a);Gt=(n.flags&131072)!==0}else Gt=!1,Je&&(s.flags&1048576)!==0&&Gp(s,ou,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;wu(n,s),n=s.pendingProps;var d=io(s,bt.current);co(s,a),d=Uh(null,s,c,n,d,a);var p=Fh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Ht(c)?(p=!0,ru(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,xh(s),d.updater=vu,s.stateNode=d,d._reactInternals=s,Wh(s,c,n,a),s=Qh(null,s,c,!0,p,a)):(s.tag=0,Je&&p&&wh(s),$t(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(wu(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=p0(c),n=Pn(c,n),d){case 0:s=Kh(null,s,c,n,a);break e;case 1:s=zm(null,s,c,n,a);break e;case 11:s=Om(null,s,c,n,a);break e;case 14:s=Lm(null,s,c,Pn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Pn(c,d),Kh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Pn(c,d),zm(n,s,c,d,a);case 3:e:{if(jm(s),n===null)throw Error(t(387));c=s.pendingProps,p=s.memoizedState,d=p.element,nm(n,s),du(s,c,null,a);var v=s.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=fo(Error(t(423)),s),s=Bm(n,s,c,a,d);break e}else if(c!==d){d=fo(Error(t(424)),s),s=Bm(n,s,c,a,d);break e}else for(an=si(s.stateNode.containerInfo.firstChild),on=s,Je=!0,Cn=null,a=em(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ao(),c===d){s=Ar(n,s,a);break e}$t(n,s,c,a)}s=s.child}return s;case 5:return sm(s),n===null&&Sh(s),c=s.type,d=s.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,mh(c,d)?v=null:p!==null&&mh(c,p)&&(s.flags|=32),Fm(n,s),$t(n,s,v,a),s.child;case 6:return n===null&&Sh(s),null;case 13:return $m(n,s,a);case 4:return Dh(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=lo(s,null,c,a):$t(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Pn(c,d),Om(n,s,c,d,a);case 7:return $t(n,s,s.pendingProps,a),s.child;case 8:return $t(n,s,s.pendingProps.children,a),s.child;case 12:return $t(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,p=s.memoizedProps,v=d.value,We(uu,c._currentValue),c._currentValue=v,p!==null)if(An(p.value,v)){if(p.children===d.children&&!Wt.current){s=Ar(n,s,a);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var I=p.dependencies;if(I!==null){v=p.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=Rr(-1,a&-a),P.tag=2;var z=p.updateQueue;if(z!==null){z=z.shared;var Y=z.pending;Y===null?P.next=P:(P.next=Y.next,Y.next=P),z.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),kh(p.return,a,s),I.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===s.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),kh(v,a,s),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===s){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}$t(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,co(s,a),d=pn(d),c=c(d),s.flags|=1,$t(n,s,c,a),s.child;case 14:return c=s.type,d=Pn(c,s.pendingProps),d=Pn(c.type,d),Lm(n,s,c,d,a);case 15:return Mm(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Pn(c,d),wu(n,s),s.tag=1,Ht(c)?(n=!0,ru(s)):n=!1,co(s,a),Pm(s,c,d),Wh(s,c,d,a),Qh(null,s,c,!0,n,a);case 19:return Wm(n,s,a);case 22:return Um(n,s,a)}throw Error(t(156,s.tag))};function mg(n,s){return na(n,s)}function f0(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,s,a,c){return new f0(n,s,a,c)}function md(n){return n=n.prototype,!(!n||!n.isReactComponent)}function p0(n){if(typeof n=="function")return md(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Et)return 14}return 2}function gi(n,s){var a=n.alternate;return a===null?(a=yn(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Du(n,s,a,c,d,p){var v=2;if(c=n,typeof n=="function")md(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return ms(a.children,d,p,s);case S:v=8,d|=8;break;case C:return n=yn(12,a,s,d|2),n.elementType=C,n.lanes=p,n;case A:return n=yn(13,a,s,d),n.elementType=A,n.lanes=p,n;case qe:return n=yn(19,a,s,d),n.elementType=qe,n.lanes=p,n;case Xe:return Vu(a,d,p,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:v=10;break e;case N:v=9;break e;case O:v=11;break e;case Et:v=14;break e;case Dt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=yn(v,a,s,d),s.elementType=n,s.type=c,s.lanes=p,s}function ms(n,s,a,c){return n=yn(7,n,c,s),n.lanes=a,n}function Vu(n,s,a,c){return n=yn(22,n,c,s),n.elementType=Xe,n.lanes=a,n.stateNode={isHidden:!1},n}function gd(n,s,a){return n=yn(6,n,null,s),n.lanes=a,n}function yd(n,s,a){return s=yn(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function m0(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _d(n,s,a,c,d,p,v,I,P){return n=new m0(n,s,a,I,P),s===1?(s=1,p===!0&&(s|=8)):s=0,p=yn(3,null,null,s),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},xh(p),n}function g0(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function gg(n){if(!n)return ai;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Ht(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return qp(n,a,s)}return s}function yg(n,s,a,c,d,p,v,I,P){return n=_d(a,c,!0,n,d,p,v,I,P),n.context=gg(null),a=n.current,c=qt(),d=pi(a),p=Rr(c,d),p.callback=s??null,ci(a,p,d),n.current.lanes=d,Zi(n,d,c),Qt(n,c),n}function bu(n,s,a,c){var d=s.current,p=qt(),v=pi(d);return a=gg(a),s.context===null?s.context=a:s.pendingContext=a,s=Rr(p,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=ci(d,s,v),n!==null&&(xn(n,d,v,p),hu(n,d,v)),v}function Ou(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _g(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function vd(n,s){_g(n,s),(n=n.alternate)&&_g(n,s)}function y0(){return null}var vg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ed(n){this._internalRoot=n}Lu.prototype.render=Ed.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));bu(n,s,null,null)},Lu.prototype.unmount=Ed.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ds(function(){bu(null,n,null,null)}),s[Er]=null}};function Lu(n){this._internalRoot=n}Lu.prototype.unstable_scheduleHydration=function(n){if(n){var s=ha();n={blockedOn:null,target:n,priority:s};for(var a=0;a<tn.length&&s!==0&&s<tn[a].priority;a++);tn.splice(a,0,n),a===0&&Bs(n)}};function wd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Mu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Eg(){}function _0(n,s,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var z=Ou(v);p.call(z)}}var v=yg(s,c,n,0,null,!1,!1,"",Eg);return n._reactRootContainer=v,n[Er]=v.current,Ia(n.nodeType===8?n.parentNode:n),ds(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var z=Ou(P);I.call(z)}}var P=_d(n,0,!1,null,null,!1,!1,"",Eg);return n._reactRootContainer=P,n[Er]=P.current,Ia(n.nodeType===8?n.parentNode:n),ds(function(){bu(s,P,a,c)}),P}function Uu(n,s,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var I=d;d=function(){var P=Ou(v);I.call(P)}}bu(s,v,n,d)}else v=_0(a,s,n,d,c);return Ou(v)}ua=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=Ue(s.pendingLanes);a!==0&&(la(s,a|1),Qt(s,Ge()),(Le&6)===0&&(go=Ge()+500,li()))}break;case 13:ds(function(){var c=Sr(n,1);if(c!==null){var d=qt();xn(c,n,1,d)}}),vd(n,1)}},zs=function(n){if(n.tag===13){var s=Sr(n,134217728);if(s!==null){var a=qt();xn(s,n,134217728,a)}vd(n,134217728)}},ca=function(n){if(n.tag===13){var s=pi(n),a=Sr(n,s);if(a!==null){var c=qt();xn(a,n,s,c)}vd(n,s)}},ha=function(){return Ve},da=function(n,s){var a=Ve;try{return Ve=n,s()}finally{Ve=a}},cr=function(n,s,a){switch(s){case"input":if($i(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=tu(c);if(!d)throw Error(t(90));Go(c),$i(c,d)}}}break;case"textarea":Al(n,a);break;case"select":s=a.value,s!=null&&Tn(n,!!a.multiple,s,!1)}},kl=dd,Nl=ds;var v0={usingClientEntryPoint:!1,Events:[Aa,no,tu,Kr,Qr,dd]},za={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},E0={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ml(n),n===null?null:n.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||y0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fu.isDisabled&&Fu.supportsFiber)try{Qi=Fu.inject(E0),Zt=Fu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v0,Yt.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(s))throw Error(t(200));return g0(n,s,null,a)},Yt.createRoot=function(n,s){if(!wd(n))throw Error(t(299));var a=!1,c="",d=vg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=_d(n,1,!1,null,null,a,!1,c,d),n[Er]=s.current,Ia(n.nodeType===8?n.parentNode:n),new Ed(s)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ml(s),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return ds(n)},Yt.hydrate=function(n,s,a){if(!Mu(s))throw Error(t(200));return Uu(null,n,s,!0,a)},Yt.hydrateRoot=function(n,s,a){if(!wd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=vg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=yg(s,null,n,1,a??null,d,!1,p,v),n[Er]=s.current,Ia(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Lu(s)},Yt.render=function(n,s,a){if(!Mu(s))throw Error(t(200));return Uu(null,n,s,!1,a)},Yt.unmountComponentAtNode=function(n){if(!Mu(n))throw Error(t(40));return n._reactRootContainer?(ds(function(){Uu(null,null,n,!1,function(){n._reactRootContainer=null,n[Er]=null})}),!0):!1},Yt.unstable_batchedUpdates=dd,Yt.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Mu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Uu(n,s,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Ag;function m_(){if(Ag)return Id.exports;Ag=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Id.exports=P0(),Id.exports}var Cg;function k0(){if(Cg)return zu;Cg=1;var r=m_();return zu.createRoot=r.createRoot,zu.hydrateRoot=r.hydrateRoot,zu}var N0=k0();m_();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},Za.apply(this,arguments)}var Ii;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Ii||(Ii={}));const Pg="popstate";function x0(r){r===void 0&&(r={});function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return Fd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:rc(o)}return V0(e,t,null,r)}function tt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function g_(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function D0(){return Math.random().toString(36).substr(2,8)}function kg(r,e){return{usr:r.state,key:r.key,idx:e}}function Fd(r,e,t,i){return t===void 0&&(t=null),Za({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Mo(e):e,{state:t,key:e&&e.key||i||D0()})}function rc(r){let{pathname:e="/",search:t="",hash:i=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Mo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let i=r.indexOf("?");i>=0&&(e.search=r.substr(i),r=r.substr(0,i)),r&&(e.pathname=r)}return e}function V0(r,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f=Ii.Pop,g=null,y=E();y==null&&(y=0,h.replaceState(Za({},h.state,{idx:y}),""));function E(){return(h.state||{idx:null}).idx}function w(){f=Ii.Pop;let F=E(),re=F==null?null:F-y;y=F,g&&g({action:f,location:$.location,delta:re})}function R(F,re){f=Ii.Push;let te=Fd($.location,F,re);y=E()+1;let oe=kg(te,y),fe=$.createHref(te);try{h.pushState(oe,"",fe)}catch(De){if(De instanceof DOMException&&De.name==="DataCloneError")throw De;o.location.assign(fe)}l&&g&&g({action:f,location:$.location,delta:1})}function b(F,re){f=Ii.Replace;let te=Fd($.location,F,re);y=E();let oe=kg(te,y),fe=$.createHref(te);h.replaceState(oe,"",fe),l&&g&&g({action:f,location:$.location,delta:0})}function B(F){let re=o.location.origin!=="null"?o.location.origin:o.location.href,te=typeof F=="string"?F:rc(F);return te=te.replace(/ $/,"%20"),tt(re,"No window.location.(origin|href) available to create URL for href: "+te),new URL(te,re)}let $={get action(){return f},get location(){return r(o,h)},listen(F){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Pg,w),g=F,()=>{o.removeEventListener(Pg,w),g=null}},createHref(F){return e(o,F)},createURL:B,encodeLocation(F){let re=B(F);return{pathname:re.pathname,search:re.search,hash:re.hash}},push:R,replace:b,go(F){return h.go(F)}};return $}var Ng;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Ng||(Ng={}));function b0(r,e,t){return t===void 0&&(t="/"),O0(r,e,t)}function O0(r,e,t,i){let o=typeof e=="string"?Mo(e):e,l=ko(o.pathname||"/",t);if(l==null)return null;let h=y_(r);L0(h);let f=null;for(let g=0;f==null&&g<h.length;++g){let y=G0(l);f=W0(h[g],y)}return f}function y_(r,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,h,f)=>{let g={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(tt(g.relativePath.startsWith(i),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(i.length));let y=Ri([i,g.relativePath]),E=t.concat(g);l.children&&l.children.length>0&&(tt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),y_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:$0(y,l.index),routesMeta:E})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let g of __(l.path))o(l,h,g)}),e}function __(r){let e=r.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=__(i.join("/")),f=[];return f.push(...h.map(g=>g===""?l:[l,g].join("/"))),o&&f.push(...h),f.map(g=>r.startsWith("/")&&g===""?"/":g)}function L0(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:q0(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const M0=/^:[\w-]+$/,U0=3,F0=2,z0=1,j0=10,B0=-2,xg=r=>r==="*";function $0(r,e){let t=r.split("/"),i=t.length;return t.some(xg)&&(i+=B0),e&&(i+=F0),t.filter(o=>!xg(o)).reduce((o,l)=>o+(M0.test(l)?U0:l===""?z0:j0),i)}function q0(r,e){return r.length===e.length&&r.slice(0,-1).every((i,o)=>i===e[o])?r[r.length-1]-e[e.length-1]:0}function W0(r,e,t){let{routesMeta:i}=r,o={},l="/",h=[];for(let f=0;f<i.length;++f){let g=i[f],y=f===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",w=zd({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},E),R=g.route;if(!w)return null;Object.assign(o,w.params),h.push({params:o,pathname:Ri([l,w.pathname]),pathnameBase:X0(Ri([l,w.pathnameBase])),route:R}),w.pathnameBase!=="/"&&(l=Ri([l,w.pathnameBase]))}return h}function zd(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,i]=H0(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,E,w)=>{let{paramName:R,isOptional:b}=E;if(R==="*"){let $=f[w]||"";h=l.slice(0,l.length-$.length).replace(/(.)\/+$/,"$1")}const B=f[w];return b&&!B?y[R]=void 0:y[R]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:r}}function H0(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),g_(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let i=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,g)=>(i.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(i.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function G0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return g_(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function ko(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=r.charAt(t);return i&&i!=="/"?null:r.slice(t)||"/"}function K0(r,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof r=="string"?Mo(r):r;return{pathname:t?t.startsWith("/")?t:Q0(t,e):e,search:J0(i),hash:Z0(o)}}function Q0(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ad(r,e,t,i){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Y0(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function gf(r,e){let t=Y0(r);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function yf(r,e,t,i){i===void 0&&(i=!1);let o;typeof r=="string"?o=Mo(r):(o=Za({},r),tt(!o.pathname||!o.pathname.includes("?"),Ad("?","pathname","search",o)),tt(!o.pathname||!o.pathname.includes("#"),Ad("#","pathname","hash",o)),tt(!o.search||!o.search.includes("#"),Ad("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let w=e.length-1;if(!i&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),w-=1;o.pathname=R.join("/")}f=w>=0?e[w]:"/"}let g=K0(o,f),y=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(y||E)&&(g.pathname+="/"),g}const Ri=r=>r.join("/").replace(/\/\/+/g,"/"),X0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),J0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Z0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function eT(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const v_=["post","put","patch","delete"];new Set(v_);const tT=["get",...v_];new Set(tT);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},el.apply(this,arguments)}const Rc=q.createContext(null),E_=q.createContext(null),Mr=q.createContext(null),Ac=q.createContext(null),Ur=q.createContext({outlet:null,matches:[],isDataRoute:!1}),w_=q.createContext(null);function nT(r,e){let{relative:t}=e===void 0?{}:e;Uo()||tt(!1);let{basename:i,navigator:o}=q.useContext(Mr),{hash:l,pathname:h,search:f}=Cc(r,{relative:t}),g=h;return i!=="/"&&(g=h==="/"?i:Ri([i,h])),o.createHref({pathname:g,search:f,hash:l})}function Uo(){return q.useContext(Ac)!=null}function As(){return Uo()||tt(!1),q.useContext(Ac).location}function T_(r){q.useContext(Mr).static||q.useLayoutEffect(r)}function Ui(){let{isDataRoute:r}=q.useContext(Ur);return r?yT():rT()}function rT(){Uo()||tt(!1);let r=q.useContext(Rc),{basename:e,future:t,navigator:i}=q.useContext(Mr),{matches:o}=q.useContext(Ur),{pathname:l}=As(),h=JSON.stringify(gf(o,t.v7_relativeSplatPath)),f=q.useRef(!1);return T_(()=>{f.current=!0}),q.useCallback(function(y,E){if(E===void 0&&(E={}),!f.current)return;if(typeof y=="number"){i.go(y);return}let w=yf(y,JSON.parse(h),l,E.relative==="path");r==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Ri([e,w.pathname])),(E.replace?i.replace:i.push)(w,E.state,E)},[e,i,h,l,r])}const iT=q.createContext(null);function sT(r){let e=q.useContext(Ur).outlet;return e&&q.createElement(iT.Provider,{value:r},e)}function Cc(r,e){let{relative:t}=e===void 0?{}:e,{future:i}=q.useContext(Mr),{matches:o}=q.useContext(Ur),{pathname:l}=As(),h=JSON.stringify(gf(o,i.v7_relativeSplatPath));return q.useMemo(()=>yf(r,JSON.parse(h),l,t==="path"),[r,h,l,t])}function oT(r,e){return aT(r,e)}function aT(r,e,t,i){Uo()||tt(!1);let{navigator:o}=q.useContext(Mr),{matches:l}=q.useContext(Ur),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let g=h?h.pathnameBase:"/";h&&h.route;let y=As(),E;if(e){var w;let F=typeof e=="string"?Mo(e):e;g==="/"||(w=F.pathname)!=null&&w.startsWith(g)||tt(!1),E=F}else E=y;let R=E.pathname||"/",b=R;if(g!=="/"){let F=g.replace(/^\//,"").split("/");b="/"+R.replace(/^\//,"").split("/").slice(F.length).join("/")}let B=b0(r,{pathname:b}),$=dT(B&&B.map(F=>Object.assign({},F,{params:Object.assign({},f,F.params),pathname:Ri([g,o.encodeLocation?o.encodeLocation(F.pathname).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?g:Ri([g,o.encodeLocation?o.encodeLocation(F.pathnameBase).pathname:F.pathnameBase])})),l,t,i);return e&&$?q.createElement(Ac.Provider,{value:{location:el({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:Ii.Pop}},$):$}function lT(){let r=gT(),e=eT(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),t?q.createElement("pre",{style:o},t):null,null)}const uT=q.createElement(lT,null);class cT extends q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?q.createElement(Ur.Provider,{value:this.props.routeContext},q.createElement(w_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hT(r){let{routeContext:e,match:t,children:i}=r,o=q.useContext(Rc);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),q.createElement(Ur.Provider,{value:e},i)}function dT(r,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let h=r,f=(o=t)==null?void 0:o.errors;if(f!=null){let E=h.findIndex(w=>w.route.id&&f?.[w.route.id]!==void 0);E>=0||tt(!1),h=h.slice(0,Math.min(h.length,E+1))}let g=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let E=0;E<h.length;E++){let w=h[E];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=E),w.route.id){let{loaderData:R,errors:b}=t,B=w.route.loader&&R[w.route.id]===void 0&&(!b||b[w.route.id]===void 0);if(w.route.lazy||B){g=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((E,w,R)=>{let b,B=!1,$=null,F=null;t&&(b=f&&w.route.id?f[w.route.id]:void 0,$=w.route.errorElement||uT,g&&(y<0&&R===0?(_T("route-fallback"),B=!0,F=null):y===R&&(B=!0,F=w.route.hydrateFallbackElement||null)));let re=e.concat(h.slice(0,R+1)),te=()=>{let oe;return b?oe=$:B?oe=F:w.route.Component?oe=q.createElement(w.route.Component,null):w.route.element?oe=w.route.element:oe=E,q.createElement(hT,{match:w,routeContext:{outlet:E,matches:re,isDataRoute:t!=null},children:oe})};return t&&(w.route.ErrorBoundary||w.route.errorElement||R===0)?q.createElement(cT,{location:t.location,revalidation:t.revalidation,component:$,error:b,children:te(),routeContext:{outlet:null,matches:re,isDataRoute:!0}}):te()},null)}var I_=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(I_||{}),S_=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(S_||{});function fT(r){let e=q.useContext(Rc);return e||tt(!1),e}function pT(r){let e=q.useContext(E_);return e||tt(!1),e}function mT(r){let e=q.useContext(Ur);return e||tt(!1),e}function R_(r){let e=mT(),t=e.matches[e.matches.length-1];return t.route.id||tt(!1),t.route.id}function gT(){var r;let e=q.useContext(w_),t=pT(),i=R_();return e!==void 0?e:(r=t.errors)==null?void 0:r[i]}function yT(){let{router:r}=fT(I_.UseNavigateStable),e=R_(S_.UseNavigateStable),t=q.useRef(!1);return T_(()=>{t.current=!0}),q.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,el({fromRouteId:e},l)))},[r,e])}const Dg={};function _T(r,e,t){Dg[r]||(Dg[r]=!0)}function vT(r,e){r?.v7_startTransition,r?.v7_relativeSplatPath}function ET(r){let{to:e,replace:t,state:i,relative:o}=r;Uo()||tt(!1);let{future:l,static:h}=q.useContext(Mr),{matches:f}=q.useContext(Ur),{pathname:g}=As(),y=Ui(),E=yf(e,gf(f,l.v7_relativeSplatPath),g,o==="path"),w=JSON.stringify(E);return q.useEffect(()=>y(JSON.parse(w),{replace:t,state:i,relative:o}),[y,w,o,t,i]),null}function wT(r){return sT(r.context)}function Pr(r){tt(!1)}function TT(r){let{basename:e="/",children:t=null,location:i,navigationType:o=Ii.Pop,navigator:l,static:h=!1,future:f}=r;Uo()&&tt(!1);let g=e.replace(/^\/*/,"/"),y=q.useMemo(()=>({basename:g,navigator:l,static:h,future:el({v7_relativeSplatPath:!1},f)}),[g,f,l,h]);typeof i=="string"&&(i=Mo(i));let{pathname:E="/",search:w="",hash:R="",state:b=null,key:B="default"}=i,$=q.useMemo(()=>{let F=ko(E,g);return F==null?null:{location:{pathname:F,search:w,hash:R,state:b,key:B},navigationType:o}},[g,E,w,R,b,B,o]);return $==null?null:q.createElement(Mr.Provider,{value:y},q.createElement(Ac.Provider,{children:t,value:$}))}function IT(r){let{children:e,location:t}=r;return oT(jd(e),t)}new Promise(()=>{});function jd(r,e){e===void 0&&(e=[]);let t=[];return q.Children.forEach(r,(i,o)=>{if(!q.isValidElement(i))return;let l=[...e,o];if(i.type===q.Fragment){t.push.apply(t,jd(i.props.children,l));return}i.type!==Pr&&tt(!1),!i.props.index||!i.props.children||tt(!1);let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=jd(i.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ic(){return ic=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},ic.apply(this,arguments)}function A_(r,e){if(r==null)return{};var t={},i=Object.keys(r),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function ST(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function RT(r,e){return r.button===0&&(!e||e==="_self")&&!ST(r)}const AT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],CT=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],PT="6";try{window.__reactRouterVersion=PT}catch{}const kT=q.createContext({isTransitioning:!1}),NT="startTransition",Vg=R0[NT];function xT(r){let{basename:e,children:t,future:i,window:o}=r,l=q.useRef();l.current==null&&(l.current=x0({window:o,v5Compat:!0}));let h=l.current,[f,g]=q.useState({action:h.action,location:h.location}),{v7_startTransition:y}=i||{},E=q.useCallback(w=>{y&&Vg?Vg(()=>g(w)):g(w)},[g,y]);return q.useLayoutEffect(()=>h.listen(E),[h,E]),q.useEffect(()=>vT(i),[i]),q.createElement(TT,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:i})}const DT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",VT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bT=q.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:h,state:f,target:g,to:y,preventScrollReset:E,viewTransition:w}=e,R=A_(e,AT),{basename:b}=q.useContext(Mr),B,$=!1;if(typeof y=="string"&&VT.test(y)&&(B=y,DT))try{let oe=new URL(window.location.href),fe=y.startsWith("//")?new URL(oe.protocol+y):new URL(y),De=ko(fe.pathname,b);fe.origin===oe.origin&&De!=null?y=De+fe.search+fe.hash:$=!0}catch{}let F=nT(y,{relative:o}),re=MT(y,{replace:h,state:f,target:g,preventScrollReset:E,relative:o,viewTransition:w});function te(oe){i&&i(oe),oe.defaultPrevented||re(oe)}return q.createElement("a",ic({},R,{href:B||F,onClick:$||l?i:te,ref:t,target:g}))}),OT=q.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:o=!1,className:l="",end:h=!1,style:f,to:g,viewTransition:y,children:E}=e,w=A_(e,CT),R=Cc(g,{relative:w.relative}),b=As(),B=q.useContext(E_),{navigator:$,basename:F}=q.useContext(Mr),re=B!=null&&UT(R)&&y===!0,te=$.encodeLocation?$.encodeLocation(R).pathname:R.pathname,oe=b.pathname,fe=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;o||(oe=oe.toLowerCase(),fe=fe?fe.toLowerCase():null,te=te.toLowerCase()),fe&&F&&(fe=ko(fe,F)||fe);const De=te!=="/"&&te.endsWith("/")?te.length-1:te.length;let Re=oe===te||!h&&oe.startsWith(te)&&oe.charAt(De)==="/",k=fe!=null&&(fe===te||!h&&fe.startsWith(te)&&fe.charAt(te.length)==="/"),S={isActive:Re,isPending:k,isTransitioning:re},C=Re?i:void 0,D;typeof l=="function"?D=l(S):D=[l,Re?"active":null,k?"pending":null,re?"transitioning":null].filter(Boolean).join(" ");let N=typeof f=="function"?f(S):f;return q.createElement(bT,ic({},w,{"aria-current":C,className:D,ref:t,style:N,to:g,viewTransition:y}),typeof E=="function"?E(S):E)});var Bd;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Bd||(Bd={}));var bg;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(bg||(bg={}));function LT(r){let e=q.useContext(Rc);return e||tt(!1),e}function MT(r,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:h,viewTransition:f}=e===void 0?{}:e,g=Ui(),y=As(),E=Cc(r,{relative:h});return q.useCallback(w=>{if(RT(w,t)){w.preventDefault();let R=i!==void 0?i:rc(y)===rc(E);g(r,{replace:R,state:o,preventScrollReset:l,relative:h,viewTransition:f})}},[y,g,E,i,o,t,r,l,h,f])}function UT(r,e){e===void 0&&(e={});let t=q.useContext(kT);t==null&&tt(!1);let{basename:i}=LT(Bd.useViewTransitionState),o=Cc(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=ko(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=ko(t.nextLocation.pathname,i)||t.nextLocation.pathname;return zd(o.pathname,h)!=null||zd(o.pathname,l)!=null}const FT=()=>{};var Og={};/**
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
 */const C_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},zT=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},P_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,E=l>>2,w=(l&3)<<4|f>>4;let R=(f&15)<<2|y>>6,b=y&63;g||(b=64,h||(R=64)),i.push(t[E],t[w],t[R],t[b])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(C_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):zT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const y=o<r.length?t[r.charAt(o)]:64;++o;const w=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||y==null||w==null)throw new jT;const R=l<<2|f>>4;if(i.push(R),y!==64){const b=f<<4&240|y>>2;if(i.push(b),w!==64){const B=y<<6&192|w;i.push(B)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class jT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BT=function(r){const e=C_(r);return P_.encodeByteArray(e,!0)},sc=function(r){return BT(r).replace(/\./g,"")},k_=function(r){try{return P_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $T(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qT=()=>$T().__FIREBASE_DEFAULTS__,WT=()=>{if(typeof process>"u"||typeof Og>"u")return;const r=Og.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},HT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&k_(r[1]);return e&&JSON.parse(e)},Pc=()=>{try{return FT()||qT()||WT()||HT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},N_=r=>Pc()?.emulatorHosts?.[r],GT=r=>{const e=N_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},x_=()=>Pc()?.config,D_=r=>Pc()?.[`_${r}`];/**
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
 */class KT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function V_(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function QT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[sc(JSON.stringify(t)),sc(JSON.stringify(h)),""].join(".")}const Ga={};function YT(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ga))Ga[e]?r.emulator.push(e):r.prod.push(e);return r}function XT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Lg=!1;function b_(r,e){if(typeof window>"u"||typeof document>"u"||!Fo(window.location.host)||Ga[r]===e||Ga[r]||Lg)return;Ga[r]=e;function t(R){return`__firebase__banner__${R}`}const i="__firebase__banner",l=YT().prod.length>0;function h(){const R=document.getElementById(i);R&&R.remove()}function f(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function g(R,b){R.setAttribute("width","24"),R.setAttribute("id",b),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function y(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Lg=!0,h()},R}function E(R,b){R.setAttribute("id",b),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function w(){const R=XT(i),b=t("text"),B=document.getElementById(b)||document.createElement("span"),$=t("learnmore"),F=document.getElementById($)||document.createElement("a"),re=t("preprendIcon"),te=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const oe=R.element;f(oe),E(F,$);const fe=y();g(te,re),oe.append(te,B,F,fe),document.body.appendChild(oe)}l?(B.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(te.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function ZT(){const r=Pc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tI(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function nI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rI(){const r=jt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function iI(){return!ZT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sI(){try{return typeof indexedDB=="object"}catch{return!1}}function oI(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const aI="FirebaseError";class Fr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=aI,Object.setPrototypeOf(this,Fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dl.prototype.create)}}class dl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?lI(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Fr(o,f,i)}}function lI(r,e){return r.replace(uI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const uI=/\{\$([^}]+)}/g;function cI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function vs(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if(Mg(l)&&Mg(h)){if(!vs(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Mg(r){return r!==null&&typeof r=="object"}/**
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
 */function fl(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ja(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ba(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function hI(r,e){const t=new dI(r,e);return t.subscribe.bind(t)}class dI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");fI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Cd),o.error===void 0&&(o.error=Cd),o.complete===void 0&&(o.complete=Cd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Cd(){}/**
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
 */function gt(r){return r&&r._delegate?r._delegate:r}class Es{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gs="[DEFAULT]";/**
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
 */class pI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new KT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gI(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:mI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mI(r){return r===gs?void 0:r}function gI(r){return r.instantiationMode==="EAGER"}/**
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
 */class yI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ke||(ke={}));const _I={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},vI=ke.INFO,EI={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},wI=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=EI[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _f{constructor(e){this.name=e,this._logLevel=vI,this._logHandler=wI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_I[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const TI=(r,e)=>e.some(t=>r instanceof t);let Ug,Fg;function II(){return Ug||(Ug=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SI(){return Fg||(Fg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O_=new WeakMap,$d=new WeakMap,L_=new WeakMap,Pd=new WeakMap,vf=new WeakMap;function RI(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Ai(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&O_.set(t,r)}).catch(()=>{}),vf.set(e,r),e}function AI(r){if($d.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});$d.set(r,e)}let qd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return $d.get(r);if(e==="objectStoreNames")return r.objectStoreNames||L_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ai(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function CI(r){qd=r(qd)}function PI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(kd(this),e,...t);return L_.set(i,e.sort?e.sort():[e]),Ai(i)}:SI().includes(r)?function(...e){return r.apply(kd(this),e),Ai(O_.get(this))}:function(...e){return Ai(r.apply(kd(this),e))}}function kI(r){return typeof r=="function"?PI(r):(r instanceof IDBTransaction&&AI(r),TI(r,II())?new Proxy(r,qd):r)}function Ai(r){if(r instanceof IDBRequest)return RI(r);if(Pd.has(r))return Pd.get(r);const e=kI(r);return e!==r&&(Pd.set(r,e),vf.set(e,r)),e}const kd=r=>vf.get(r);function NI(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=Ai(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Ai(h.result),g.oldVersion,g.newVersion,Ai(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const xI=["get","getKey","getAll","getAllKeys","count"],DI=["put","add","delete","clear"],Nd=new Map;function zg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Nd.get(e))return Nd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=DI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||xI.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&g.done]))[0]};return Nd.set(e,l),l}CI(r=>({...r,get:(e,t,i)=>zg(e,t)||r.get(e,t,i),has:(e,t)=>!!zg(e,t)||r.has(e,t)}));/**
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
 */class VI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function bI(r){return r.getComponent()?.type==="VERSION"}const Wd="@firebase/app",jg="0.14.3";/**
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
 */const Dr=new _f("@firebase/app"),OI="@firebase/app-compat",LI="@firebase/analytics-compat",MI="@firebase/analytics",UI="@firebase/app-check-compat",FI="@firebase/app-check",zI="@firebase/auth",jI="@firebase/auth-compat",BI="@firebase/database",$I="@firebase/data-connect",qI="@firebase/database-compat",WI="@firebase/functions",HI="@firebase/functions-compat",GI="@firebase/installations",KI="@firebase/installations-compat",QI="@firebase/messaging",YI="@firebase/messaging-compat",XI="@firebase/performance",JI="@firebase/performance-compat",ZI="@firebase/remote-config",e1="@firebase/remote-config-compat",t1="@firebase/storage",n1="@firebase/storage-compat",r1="@firebase/firestore",i1="@firebase/ai",s1="@firebase/firestore-compat",o1="firebase",a1="12.3.0";/**
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
 */const Hd="[DEFAULT]",l1={[Wd]:"fire-core",[OI]:"fire-core-compat",[MI]:"fire-analytics",[LI]:"fire-analytics-compat",[FI]:"fire-app-check",[UI]:"fire-app-check-compat",[zI]:"fire-auth",[jI]:"fire-auth-compat",[BI]:"fire-rtdb",[$I]:"fire-data-connect",[qI]:"fire-rtdb-compat",[WI]:"fire-fn",[HI]:"fire-fn-compat",[GI]:"fire-iid",[KI]:"fire-iid-compat",[QI]:"fire-fcm",[YI]:"fire-fcm-compat",[XI]:"fire-perf",[JI]:"fire-perf-compat",[ZI]:"fire-rc",[e1]:"fire-rc-compat",[t1]:"fire-gcs",[n1]:"fire-gcs-compat",[r1]:"fire-fst",[s1]:"fire-fst-compat",[i1]:"fire-vertex","fire-js":"fire-js",[o1]:"fire-js-all"};/**
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
 */const oc=new Map,u1=new Map,Gd=new Map;function Bg(r,e){try{r.container.addComponent(e)}catch(t){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function No(r){const e=r.name;if(Gd.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;Gd.set(e,r);for(const t of oc.values())Bg(t,r);for(const t of u1.values())Bg(t,r);return!0}function Ef(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function _n(r){return r==null?!1:r.settings!==void 0}/**
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
 */const c1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ci=new dl("app","Firebase",c1);/**
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
 */class h1{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ci.create("app-deleted",{appName:this._name})}}/**
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
 */const zo=a1;function M_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:Hd,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Ci.create("bad-app-name",{appName:String(o)});if(t||(t=x_()),!t)throw Ci.create("no-options");const l=oc.get(o);if(l){if(vs(t,l.options)&&vs(i,l.config))return l;throw Ci.create("duplicate-app",{appName:o})}const h=new yI(o);for(const g of Gd.values())h.addComponent(g);const f=new h1(t,i,h);return oc.set(o,f),f}function U_(r=Hd){const e=oc.get(r);if(!e&&r===Hd&&x_())return M_();if(!e)throw Ci.create("no-app",{appName:r});return e}function Pi(r,e,t){let i=l1[r]??r;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(h.join(" "));return}No(new Es(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const d1="firebase-heartbeat-database",f1=1,tl="firebase-heartbeat-store";let xd=null;function F_(){return xd||(xd=NI(d1,f1,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(tl)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ci.create("idb-open",{originalErrorMessage:r.message})})),xd}async function p1(r){try{const t=(await F_()).transaction(tl),i=await t.objectStore(tl).get(z_(r));return await t.done,i}catch(e){if(e instanceof Fr)Dr.warn(e.message);else{const t=Ci.create("idb-get",{originalErrorMessage:e?.message});Dr.warn(t.message)}}}async function $g(r,e){try{const i=(await F_()).transaction(tl,"readwrite");await i.objectStore(tl).put(e,z_(r)),await i.done}catch(t){if(t instanceof Fr)Dr.warn(t.message);else{const i=Ci.create("idb-set",{originalErrorMessage:t?.message});Dr.warn(i.message)}}}function z_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const m1=1024,g1=30;class y1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new v1(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>g1){const o=E1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Dr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qg(),{heartbeatsToSend:t,unsentEntries:i}=_1(this._heartbeatsCache.heartbeats),o=sc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Dr.warn(e),""}}}function qg(){return new Date().toISOString().substring(0,10)}function _1(r,e=m1){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Wg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Wg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class v1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sI()?oI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await p1(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $g(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $g(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wg(r){return sc(JSON.stringify({version:2,heartbeats:r})).length}function E1(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function w1(r){No(new Es("platform-logger",e=>new VI(e),"PRIVATE")),No(new Es("heartbeat",e=>new y1(e),"PRIVATE")),Pi(Wd,jg,r),Pi(Wd,jg,"esm2020"),Pi("fire-js","")}w1("");var T1="firebase",I1="12.3.0";/**
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
 */Pi(T1,I1,"app");function j_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S1=j_,B_=new dl("auth","Firebase",j_());/**
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
 */const ac=new _f("@firebase/auth");function R1(r,...e){ac.logLevel<=ke.WARN&&ac.warn(`Auth (${zo}): ${r}`,...e)}function Gu(r,...e){ac.logLevel<=ke.ERROR&&ac.error(`Auth (${zo}): ${r}`,...e)}/**
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
 */function On(r,...e){throw wf(r,...e)}function rr(r,...e){return wf(r,...e)}function $_(r,e,t){const i={...S1(),[e]:t};return new dl("auth","Firebase",i).create(e,{appName:r.name})}function xr(r){return $_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wf(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return B_.create(r,...e)}function ye(r,e,...t){if(!r)throw wf(e,...t)}function kr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Gu(e),new Error(e)}function Vr(r,e){r||kr(e)}/**
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
 */function Kd(){return typeof self<"u"&&self.location?.href||""}function A1(){return Hg()==="http:"||Hg()==="https:"}function Hg(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function C1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A1()||tI()||"connection"in navigator)?navigator.onLine:!0}function P1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class pl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile=JT()||nI()}get(){return C1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tf(r,e){Vr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class q_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const k1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const N1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],x1=new pl(3e4,6e4);function zr(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function jr(r,e,t,i,o={}){return W_(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=fl({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:g,...l};return eI()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Fo(r.emulatorConfig.host)&&(y.credentials="include"),q_.fetch()(await H_(r,r.config.apiHost,t,f),y)})}async function W_(r,e,t){r._canInitEmulator=!1;const i={...k1,...e};try{const o=new V1(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw ju(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,y]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw ju(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw ju(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw ju(r,"user-disabled",h);const E=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw $_(r,E,y);On(r,E)}}catch(o){if(o instanceof Fr)throw o;On(r,"network-request-failed",{message:String(o)})}}async function ml(r,e,t,i,o={}){const l=await jr(r,e,t,i,o);return"mfaPendingCredential"in l&&On(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function H_(r,e,t,i){const o=`${e}${t}?${i}`,l=r,h=l.config.emulator?Tf(r.config,o):`${r.config.apiScheme}://${o}`;return N1.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function D1(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class V1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(rr(this.auth,"network-request-failed")),x1.get())})}}function ju(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=rr(r,e,i);return o.customData._tokenResponse=t,o}function Gg(r){return r!==void 0&&r.enterprise!==void 0}class b1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return D1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function O1(r,e){return jr(r,"GET","/v2/recaptchaConfig",zr(r,e))}/**
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
 */async function L1(r,e){return jr(r,"POST","/v1/accounts:delete",e)}async function lc(r,e){return jr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ka(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function M1(r,e=!1){const t=gt(r),i=await t.getIdToken(e),o=If(i);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:i,authTime:Ka(Dd(o.auth_time)),issuedAtTime:Ka(Dd(o.iat)),expirationTime:Ka(Dd(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Dd(r){return Number(r)*1e3}function If(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Gu("JWT malformed, contained fewer than 3 sections"),null;try{const o=k_(t);return o?JSON.parse(o):(Gu("Failed to decode base64 JWT payload"),null)}catch(o){return Gu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Kg(r){const e=If(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nl(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Fr&&U1(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function U1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class F1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ka(this.lastLoginAt),this.creationTime=Ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uc(r){const e=r.auth,t=await r.getIdToken(),i=await nl(r,lc(e,{idToken:t}));ye(i?.users.length,e,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const l=o.providerUserInfo?.length?G_(o.providerUserInfo):[],h=j1(r.providerData,l),f=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!h?.length,y=f?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Qd(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,E)}async function z1(r){const e=gt(r);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j1(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function G_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function B1(r,e){const t=await W_(r,{},async()=>{const i=fl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await H_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return r.emulatorConfig&&Fo(r.emulatorConfig.host)&&(g.credentials="include"),q_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $1(r,e){return jr(r,"POST","/v2/accounts:revokeToken",zr(r,e))}/**
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
 */class So{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=Kg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await B1(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new So;return i&&(ye(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new So,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
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
 */function _i(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Dn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new F1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Qd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await nl(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return M1(this,e)}reload(){return z1(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await uc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await nl(this,L1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,y=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:w,emailVerified:R,isAnonymous:b,providerData:B,stsTokenManager:$}=t;ye(w&&$,e,"internal-error");const F=So.fromJSON(this.name,$);ye(typeof w=="string",e,"internal-error"),_i(i,e.name),_i(o,e.name),ye(typeof R=="boolean",e,"internal-error"),ye(typeof b=="boolean",e,"internal-error"),_i(l,e.name),_i(h,e.name),_i(f,e.name),_i(g,e.name),_i(y,e.name),_i(E,e.name);const re=new Dn({uid:w,auth:e,email:o,emailVerified:R,displayName:i,isAnonymous:b,photoURL:h,phoneNumber:l,tenantId:f,stsTokenManager:F,createdAt:y,lastLoginAt:E});return B&&Array.isArray(B)&&(re.providerData=B.map(te=>({...te}))),g&&(re._redirectEventId=g),re}static async _fromIdTokenResponse(e,t,i=!1){const o=new So;o.updateFromServerResponse(t);const l=new Dn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await uc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?G_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,f=new So;f.updateFromIdToken(i);const g=new Dn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Qd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(g,y),g}}/**
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
 */const Qg=new Map;function Nr(r){Vr(r instanceof Function,"Expected a class definition");let e=Qg.get(r);return e?(Vr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Qg.set(r,e),e)}/**
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
 */class K_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}K_.type="NONE";const Yg=K_;/**
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
 */function Ku(r,e,t){return`firebase:${r}:${e}:${t}`}class Ro{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Ku(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ku("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await lc(this.auth,{idToken:e}).catch(()=>{});return t?Dn._fromGetAccountInfoResponse(this.auth,t,e):null}return Dn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ro(Nr(Yg),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Nr(Yg);const h=Ku(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const E=await y._get(h);if(E){let w;if(typeof E=="string"){const R=await lc(e,{idToken:E}).catch(()=>{});if(!R)break;w=await Dn._fromGetAccountInfoResponse(e,R,E)}else w=Dn._fromJSON(e,E);y!==l&&(f=w),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Ro(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new Ro(l,e,i))}}/**
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
 */function Xg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(J_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Q_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ev(e))return"Blackberry";if(tv(e))return"Webos";if(Y_(e))return"Safari";if((e.includes("chrome/")||X_(e))&&!e.includes("edge/"))return"Chrome";if(Z_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function Q_(r=jt()){return/firefox\//i.test(r)}function Y_(r=jt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function X_(r=jt()){return/crios\//i.test(r)}function J_(r=jt()){return/iemobile/i.test(r)}function Z_(r=jt()){return/android/i.test(r)}function ev(r=jt()){return/blackberry/i.test(r)}function tv(r=jt()){return/webos/i.test(r)}function Sf(r=jt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function q1(r=jt()){return Sf(r)&&!!window.navigator?.standalone}function W1(){return rI()&&document.documentMode===10}function nv(r=jt()){return Sf(r)||Z_(r)||tv(r)||ev(r)||/windows phone/i.test(r)||J_(r)}/**
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
 */function rv(r,e=[]){let t;switch(r){case"Browser":t=Xg(jt());break;case"Worker":t=`${Xg(jt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zo}/${i}`}/**
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
 */class H1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function G1(r,e={}){return jr(r,"GET","/v2/passwordPolicy",zr(r,e))}/**
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
 */const K1=6;class Q1{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??K1,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Y1{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jg(this),this.idTokenSubscription=new Jg(this),this.beforeStateQueue=new H1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=B_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ro.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lc(this,{idToken:e}),i=await Dn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(_n(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,h=i?._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===h)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(xr(this));const t=e?gt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await G1(this),t=new Q1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new dl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await $1(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Nr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await Ro.create(this,[Nr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&R1(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Fi(r){return gt(r)}class Jg{constructor(e){this.auth=e,this.observer=null,this.addObserver=hI(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function X1(r){kc=r}function iv(r){return kc.loadJS(r)}function J1(){return kc.recaptchaEnterpriseScript}function Z1(){return kc.gapiScript}function eS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class tS{constructor(){this.enterprise=new nS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class nS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const rS="recaptcha-enterprise",sv="NO_RECAPTCHA";class iS{constructor(e){this.type=rS,this.auth=Fi(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{O1(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new b1(g);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;Gg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(sv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&Gg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=J1();g.length!==0&&(g+=f),iv(g).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function Zg(r,e,t,i=!1,o=!1){const l=new iS(r);let h;if(o)h=sv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function cc(r,e,t,i,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Zg(r,e,t,t==="getOobCode");return i(r,l)}else return i(r,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Zg(r,e,t,t==="getOobCode");return i(r,h)}else return Promise.reject(l)})}/**
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
 */function sS(r,e){const t=Ef(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(vs(l,e??{}))return o;On(o,"already-initialized")}return t.initialize({options:e})}function oS(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Nr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function aS(r,e,t){const i=Fi(r);ye(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=ov(e),{host:h,port:f}=lS(e),g=f===null?"":`:${f}`,y={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ye(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ye(vs(y,i.config.emulator)&&vs(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,Fo(h)?(V_(`${l}//${h}${g}`),b_("Auth",!0)):uS()}function ov(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function lS(r){const e=ov(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:ey(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:ey(h)}}}function ey(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function uS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Rf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,t){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}async function cS(r,e){return jr(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function hS(r,e){return ml(r,"POST","/v1/accounts:signInWithPassword",zr(r,e))}async function av(r,e){return jr(r,"POST","/v1/accounts:sendOobCode",zr(r,e))}async function dS(r,e){return av(r,e)}async function fS(r,e){return av(r,e)}/**
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
 */async function pS(r,e){return ml(r,"POST","/v1/accounts:signInWithEmailLink",zr(r,e))}async function mS(r,e){return ml(r,"POST","/v1/accounts:signInWithEmailLink",zr(r,e))}/**
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
 */class rl extends Rf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new rl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new rl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cc(e,t,"signInWithPassword",hS);case"emailLink":return pS(e,{email:this._email,oobCode:this._password});default:On(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cc(e,i,"signUpPassword",cS);case"emailLink":return mS(e,{idToken:t,email:this._email,oobCode:this._password});default:On(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ao(r,e){return ml(r,"POST","/v1/accounts:signInWithIdp",zr(r,e))}/**
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
 */const gS="http://localhost";class ws extends Rf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):On("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const h=new ws(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Ao(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ao(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ao(e,t)}buildRequest(){const e={requestUri:gS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fl(t)}return e}}/**
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
 */function yS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _S(r){const e=ja(Ba(r)).link,t=e?ja(Ba(e)).deep_link_id:null,i=ja(Ba(r)).deep_link_id;return(i?ja(Ba(i)).link:null)||i||t||e||r}class Af{constructor(e){const t=ja(Ba(e)),i=t.apiKey??null,o=t.oobCode??null,l=yS(t.mode??null);ye(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=_S(e);try{return new Af(t)}catch{return null}}}/**
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
 */class jo{constructor(){this.providerId=jo.PROVIDER_ID}static credential(e,t){return rl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Af.parseLink(t);return ye(i,"argument-error"),rl._fromEmailAndCode(e,i.code,i.tenantId)}}jo.PROVIDER_ID="password";jo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gl extends lv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vi extends gl{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.FACEBOOK_SIGN_IN_METHOD="facebook.com";vi.PROVIDER_ID="facebook.com";/**
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
 */class Ei extends gl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ws._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ei.credential(t,i)}catch{return null}}}Ei.GOOGLE_SIGN_IN_METHOD="google.com";Ei.PROVIDER_ID="google.com";/**
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
 */class wi extends gl{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.GITHUB_SIGN_IN_METHOD="github.com";wi.PROVIDER_ID="github.com";/**
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
 */class Ti extends gl{constructor(){super("twitter.com")}static credential(e,t){return ws._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ti.credential(t,i)}catch{return null}}}Ti.TWITTER_SIGN_IN_METHOD="twitter.com";Ti.PROVIDER_ID="twitter.com";/**
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
 */async function vS(r,e){return ml(r,"POST","/v1/accounts:signUp",zr(r,e))}/**
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
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Dn._fromIdTokenResponse(e,i,o),h=ty(i);return new Ts({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=ty(i);return new Ts({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function ty(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class hc extends Fr{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new hc(e,t,i,o)}}function uv(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(r,l,e,i):l})}async function ES(r,e,t=!1){const i=await nl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ts._forOperation(r,"link",i)}/**
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
 */async function wS(r,e,t=!1){const{auth:i}=r;if(_n(i.app))return Promise.reject(xr(i));const o="reauthenticate";try{const l=await nl(r,uv(i,o,e,r),t);ye(l.idToken,i,"internal-error");const h=If(l.idToken);ye(h,i,"internal-error");const{sub:f}=h;return ye(r.uid===f,i,"user-mismatch"),Ts._forOperation(r,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&On(i,"user-mismatch"),l}}/**
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
 */async function cv(r,e,t=!1){if(_n(r.app))return Promise.reject(xr(r));const i="signIn",o=await uv(r,i,e),l=await Ts._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}async function TS(r,e){return cv(Fi(r),e)}/**
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
 */async function hv(r){const e=Fi(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function IS(r,e,t){const i=Fi(r);await cc(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",fS)}async function SS(r,e,t){if(_n(r.app))return Promise.reject(xr(r));const i=Fi(r),h=await cc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vS).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&hv(r),g}),f=await Ts._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function RS(r,e,t){return _n(r.app)?Promise.reject(xr(r)):TS(gt(r),jo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&hv(r),i})}async function AS(r,e){const t=gt(r),o={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()},{email:l}=await dS(t.auth,o);l!==r.email&&await r.reload()}function CS(r,e,t,i){return gt(r).onIdTokenChanged(e,t,i)}function PS(r,e,t){return gt(r).beforeAuthStateChanged(e,t)}function dv(r,e,t,i){return gt(r).onAuthStateChanged(e,t,i)}function kS(r){return gt(r).signOut()}const dc="__sak";/**
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
 */class fv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const NS=1e3,xS=10;class pv extends fv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);W1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,xS):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},NS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pv.type="LOCAL";const DS=pv;/**
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
 */class mv extends fv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mv.type="SESSION";const gv=mv;/**
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
 */function VS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Nc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),g=await VS(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nc.receivers=[];/**
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
 */function Cf(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class bS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const y=Cf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(w){const R=w;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(R.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ir(){return window}function OS(r){ir().location.href=r}/**
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
 */function yv(){return typeof ir().WorkerGlobalScope<"u"&&typeof ir().importScripts=="function"}async function LS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MS(){return navigator?.serviceWorker?.controller||null}function US(){return yv()?self:null}/**
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
 */const _v="firebaseLocalStorageDb",FS=1,fc="firebaseLocalStorage",vv="fbase_key";class yl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xc(r,e){return r.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function zS(){const r=indexedDB.deleteDatabase(_v);return new yl(r).toPromise()}function Yd(){const r=indexedDB.open(_v,FS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(fc,{keyPath:vv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(fc)?e(i):(i.close(),await zS(),e(await Yd()))})})}async function ny(r,e,t){const i=xc(r,!0).put({[vv]:e,value:t});return new yl(i).toPromise()}async function jS(r,e){const t=xc(r,!1).get(e),i=await new yl(t).toPromise();return i===void 0?null:i.value}function ry(r,e){const t=xc(r,!0).delete(e);return new yl(t).toPromise()}const BS=800,$S=3;class Ev{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>$S)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nc._getInstance(US()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await LS(),!this.activeServiceWorker)return;this.sender=new bS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yd();return await ny(e,dc,"1"),await ry(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ny(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>jS(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ry(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=xc(o,!1).getAll();return new yl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ev.type="LOCAL";const qS=Ev;new pl(3e4,6e4);/**
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
 */function WS(r,e){return e?Nr(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Pf extends Rf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ao(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ao(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function HS(r){return cv(r.auth,new Pf(r),r.bypassAuthState)}function GS(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),wS(t,new Pf(r),r.bypassAuthState)}async function KS(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),ES(t,new Pf(r),r.bypassAuthState)}/**
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
 */class wv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HS;case"linkViaPopup":case"linkViaRedirect":return KS;case"reauthViaPopup":case"reauthViaRedirect":return GS;default:On(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const QS=new pl(2e3,1e4);class To extends wv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,To.currentPopupAction&&To.currentPopupAction.cancel(),To.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=Cf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,To.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QS.get())};e()}}To.currentPopupAction=null;/**
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
 */const YS="pendingRedirect",Qu=new Map;class XS extends wv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Qu.get(this.auth._key());if(!e){try{const i=await JS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Qu.set(this.auth._key(),e)}return this.bypassAuthState||Qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JS(r,e){const t=tR(e),i=eR(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function ZS(r,e){Qu.set(r._key(),e)}function eR(r){return Nr(r._redirectPersistence)}function tR(r){return Ku(YS,r.config.apiKey,r.name)}async function nR(r,e,t=!1){if(_n(r.app))return Promise.reject(xr(r));const i=Fi(r),o=WS(i,e),h=await new XS(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const rR=600*1e3;class iR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Tv(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(rr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rR&&this.cachedEventUids.clear(),this.cachedEventUids.has(iy(e))}saveEventToCache(e){this.cachedEventUids.add(iy(e)),this.lastProcessedEventTime=Date.now()}}function iy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Tv({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function sR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tv(r);default:return!1}}/**
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
 */async function oR(r,e={}){return jr(r,"GET","/v1/projects",e)}/**
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
 */const aR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lR=/^https?/;async function uR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await oR(r);for(const t of e)try{if(cR(t))return}catch{}On(r,"unauthorized-domain")}function cR(r){const e=Kd(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!lR.test(t))return!1;if(aR.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const hR=new pl(3e4,6e4);function sy(){const r=ir().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function dR(r){return new Promise((e,t)=>{function i(){sy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sy(),t(rr(r,"network-request-failed"))},timeout:hR.get()})}if(ir().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ir().gapi?.load)i();else{const o=eS("iframefcb");return ir()[o]=()=>{gapi.load?i():t(rr(r,"network-request-failed"))},iv(`${Z1()}?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw Yu=null,e})}let Yu=null;function fR(r){return Yu=Yu||dR(r),Yu}/**
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
 */const pR=new pl(5e3,15e3),mR="__/auth/iframe",gR="emulator/auth/iframe",yR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_R=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vR(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Tf(e,gR):`https://${r.config.authDomain}/${mR}`,i={apiKey:e.apiKey,appName:r.name,v:zo},o=_R.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${fl(i).slice(1)}`}async function ER(r){const e=await fR(r),t=ir().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:vR(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=rr(r,"network-request-failed"),f=ir().setTimeout(()=>{l(h)},pR.get());function g(){ir().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const wR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TR=500,IR=600,SR="_blank",RR="http://localhost";class oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AR(r,e,t,i=TR,o=IR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g={...wR,width:i.toString(),height:o.toString(),top:l,left:h},y=jt().toLowerCase();t&&(f=X_(y)?SR:t),Q_(y)&&(e=e||RR,g.scrollbars="yes");const E=Object.entries(g).reduce((R,[b,B])=>`${R}${b}=${B},`,"");if(q1(y)&&f!=="_self")return CR(e||"",f),new oy(null);const w=window.open(e||"",f,E);ye(w,r,"popup-blocked");try{w.focus()}catch{}return new oy(w)}function CR(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const PR="__/auth/handler",kR="emulator/auth/handler",NR=encodeURIComponent("fac");async function ay(r,e,t,i,o,l){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:zo,eventId:o};if(e instanceof lv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",cI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))h[E]=w}if(e instanceof gl){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await r._getAppCheckToken(),y=g?`#${NR}=${encodeURIComponent(g)}`:"";return`${xR(r)}?${fl(f).slice(1)}${y}`}function xR({config:r}){return r.emulator?Tf(r,kR):`https://${r.authDomain}/${PR}`}/**
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
 */const Vd="webStorageSupport";class DR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gv,this._completeRedirectFn=nR,this._overrideRedirectResult=ZS}async _openPopup(e,t,i,o){Vr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await ay(e,t,i,Kd(),o);return AR(e,l,Cf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await ay(e,t,i,Kd(),o);return OS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Vr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await ER(e),i=new iR(e);return t.register("authEvent",o=>(ye(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vd,{type:Vd},o=>{const l=o?.[0]?.[Vd];l!==void 0&&t(!!l),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nv()||Y_()||Sf()}}const VR=DR;var ly="@firebase/auth",uy="1.11.0";/**
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
 */class bR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LR(r){No(new Es("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rv(r)},y=new Y1(i,o,l,g);return oS(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),No(new Es("auth-internal",e=>{const t=Fi(e.getProvider("auth").getImmediate());return(i=>new bR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pi(ly,uy,OR(r)),Pi(ly,uy,"esm2020")}/**
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
 */const MR=300,UR=D_("authIdTokenMaxAge")||MR;let cy=null;const FR=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>UR)return;const o=t?.token;cy!==o&&(cy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function zR(r=U_()){const e=Ef(r,"auth");if(e.isInitialized())return e.getImmediate();const t=sS(r,{popupRedirectResolver:VR,persistence:[qS,DS,gv]}),i=D_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=FR(l.toString());PS(t,h,()=>h(t.currentUser)),CS(t,f=>h(f))}}const o=N_("auth");return o&&aS(t,`http://${o}`),t}function jR(){return document.getElementsByTagName("head")?.[0]??document}X1({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=rr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",jR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LR("Browser");var hy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ki,Iv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function C(){}C.prototype=S.prototype,k.F=S.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(D,N,O){for(var A=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)A[qe-2]=arguments[qe];return S.prototype[N].apply(D,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,C){C||(C=0);const D=Array(16);if(typeof S=="string")for(var N=0;N<16;++N)D[N]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(N=0;N<16;++N)D[N]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=k.g[0],C=k.g[1],N=k.g[2];let O=k.g[3],A;A=S+(O^C&(N^O))+D[0]+3614090360&4294967295,S=C+(A<<7&4294967295|A>>>25),A=O+(N^S&(C^N))+D[1]+3905402710&4294967295,O=S+(A<<12&4294967295|A>>>20),A=N+(C^O&(S^C))+D[2]+606105819&4294967295,N=O+(A<<17&4294967295|A>>>15),A=C+(S^N&(O^S))+D[3]+3250441966&4294967295,C=N+(A<<22&4294967295|A>>>10),A=S+(O^C&(N^O))+D[4]+4118548399&4294967295,S=C+(A<<7&4294967295|A>>>25),A=O+(N^S&(C^N))+D[5]+1200080426&4294967295,O=S+(A<<12&4294967295|A>>>20),A=N+(C^O&(S^C))+D[6]+2821735955&4294967295,N=O+(A<<17&4294967295|A>>>15),A=C+(S^N&(O^S))+D[7]+4249261313&4294967295,C=N+(A<<22&4294967295|A>>>10),A=S+(O^C&(N^O))+D[8]+1770035416&4294967295,S=C+(A<<7&4294967295|A>>>25),A=O+(N^S&(C^N))+D[9]+2336552879&4294967295,O=S+(A<<12&4294967295|A>>>20),A=N+(C^O&(S^C))+D[10]+4294925233&4294967295,N=O+(A<<17&4294967295|A>>>15),A=C+(S^N&(O^S))+D[11]+2304563134&4294967295,C=N+(A<<22&4294967295|A>>>10),A=S+(O^C&(N^O))+D[12]+1804603682&4294967295,S=C+(A<<7&4294967295|A>>>25),A=O+(N^S&(C^N))+D[13]+4254626195&4294967295,O=S+(A<<12&4294967295|A>>>20),A=N+(C^O&(S^C))+D[14]+2792965006&4294967295,N=O+(A<<17&4294967295|A>>>15),A=C+(S^N&(O^S))+D[15]+1236535329&4294967295,C=N+(A<<22&4294967295|A>>>10),A=S+(N^O&(C^N))+D[1]+4129170786&4294967295,S=C+(A<<5&4294967295|A>>>27),A=O+(C^N&(S^C))+D[6]+3225465664&4294967295,O=S+(A<<9&4294967295|A>>>23),A=N+(S^C&(O^S))+D[11]+643717713&4294967295,N=O+(A<<14&4294967295|A>>>18),A=C+(O^S&(N^O))+D[0]+3921069994&4294967295,C=N+(A<<20&4294967295|A>>>12),A=S+(N^O&(C^N))+D[5]+3593408605&4294967295,S=C+(A<<5&4294967295|A>>>27),A=O+(C^N&(S^C))+D[10]+38016083&4294967295,O=S+(A<<9&4294967295|A>>>23),A=N+(S^C&(O^S))+D[15]+3634488961&4294967295,N=O+(A<<14&4294967295|A>>>18),A=C+(O^S&(N^O))+D[4]+3889429448&4294967295,C=N+(A<<20&4294967295|A>>>12),A=S+(N^O&(C^N))+D[9]+568446438&4294967295,S=C+(A<<5&4294967295|A>>>27),A=O+(C^N&(S^C))+D[14]+3275163606&4294967295,O=S+(A<<9&4294967295|A>>>23),A=N+(S^C&(O^S))+D[3]+4107603335&4294967295,N=O+(A<<14&4294967295|A>>>18),A=C+(O^S&(N^O))+D[8]+1163531501&4294967295,C=N+(A<<20&4294967295|A>>>12),A=S+(N^O&(C^N))+D[13]+2850285829&4294967295,S=C+(A<<5&4294967295|A>>>27),A=O+(C^N&(S^C))+D[2]+4243563512&4294967295,O=S+(A<<9&4294967295|A>>>23),A=N+(S^C&(O^S))+D[7]+1735328473&4294967295,N=O+(A<<14&4294967295|A>>>18),A=C+(O^S&(N^O))+D[12]+2368359562&4294967295,C=N+(A<<20&4294967295|A>>>12),A=S+(C^N^O)+D[5]+4294588738&4294967295,S=C+(A<<4&4294967295|A>>>28),A=O+(S^C^N)+D[8]+2272392833&4294967295,O=S+(A<<11&4294967295|A>>>21),A=N+(O^S^C)+D[11]+1839030562&4294967295,N=O+(A<<16&4294967295|A>>>16),A=C+(N^O^S)+D[14]+4259657740&4294967295,C=N+(A<<23&4294967295|A>>>9),A=S+(C^N^O)+D[1]+2763975236&4294967295,S=C+(A<<4&4294967295|A>>>28),A=O+(S^C^N)+D[4]+1272893353&4294967295,O=S+(A<<11&4294967295|A>>>21),A=N+(O^S^C)+D[7]+4139469664&4294967295,N=O+(A<<16&4294967295|A>>>16),A=C+(N^O^S)+D[10]+3200236656&4294967295,C=N+(A<<23&4294967295|A>>>9),A=S+(C^N^O)+D[13]+681279174&4294967295,S=C+(A<<4&4294967295|A>>>28),A=O+(S^C^N)+D[0]+3936430074&4294967295,O=S+(A<<11&4294967295|A>>>21),A=N+(O^S^C)+D[3]+3572445317&4294967295,N=O+(A<<16&4294967295|A>>>16),A=C+(N^O^S)+D[6]+76029189&4294967295,C=N+(A<<23&4294967295|A>>>9),A=S+(C^N^O)+D[9]+3654602809&4294967295,S=C+(A<<4&4294967295|A>>>28),A=O+(S^C^N)+D[12]+3873151461&4294967295,O=S+(A<<11&4294967295|A>>>21),A=N+(O^S^C)+D[15]+530742520&4294967295,N=O+(A<<16&4294967295|A>>>16),A=C+(N^O^S)+D[2]+3299628645&4294967295,C=N+(A<<23&4294967295|A>>>9),A=S+(N^(C|~O))+D[0]+4096336452&4294967295,S=C+(A<<6&4294967295|A>>>26),A=O+(C^(S|~N))+D[7]+1126891415&4294967295,O=S+(A<<10&4294967295|A>>>22),A=N+(S^(O|~C))+D[14]+2878612391&4294967295,N=O+(A<<15&4294967295|A>>>17),A=C+(O^(N|~S))+D[5]+4237533241&4294967295,C=N+(A<<21&4294967295|A>>>11),A=S+(N^(C|~O))+D[12]+1700485571&4294967295,S=C+(A<<6&4294967295|A>>>26),A=O+(C^(S|~N))+D[3]+2399980690&4294967295,O=S+(A<<10&4294967295|A>>>22),A=N+(S^(O|~C))+D[10]+4293915773&4294967295,N=O+(A<<15&4294967295|A>>>17),A=C+(O^(N|~S))+D[1]+2240044497&4294967295,C=N+(A<<21&4294967295|A>>>11),A=S+(N^(C|~O))+D[8]+1873313359&4294967295,S=C+(A<<6&4294967295|A>>>26),A=O+(C^(S|~N))+D[15]+4264355552&4294967295,O=S+(A<<10&4294967295|A>>>22),A=N+(S^(O|~C))+D[6]+2734768916&4294967295,N=O+(A<<15&4294967295|A>>>17),A=C+(O^(N|~S))+D[13]+1309151649&4294967295,C=N+(A<<21&4294967295|A>>>11),A=S+(N^(C|~O))+D[4]+4149444226&4294967295,S=C+(A<<6&4294967295|A>>>26),A=O+(C^(S|~N))+D[11]+3174756917&4294967295,O=S+(A<<10&4294967295|A>>>22),A=N+(S^(O|~C))+D[2]+718787259&4294967295,N=O+(A<<15&4294967295|A>>>17),A=C+(O^(N|~S))+D[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,k.g[2]=k.g[2]+N&4294967295,k.g[3]=k.g[3]+O&4294967295}i.prototype.v=function(k,S){S===void 0&&(S=k.length);const C=S-this.blockSize,D=this.C;let N=this.h,O=0;for(;O<S;){if(N==0)for(;O<=C;)o(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<S;)if(D[N++]=k.charCodeAt(O++),N==this.blockSize){o(this,D),N=0;break}}else for(;O<S;)if(D[N++]=k[O++],N==this.blockSize){o(this,D),N=0;break}}this.h=N,this.o+=S},i.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;S=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=S&255,S/=256;for(this.v(k),k=Array(16),S=0,C=0;C<4;++C)for(let D=0;D<32;D+=8)k[S++]=this.g[C]>>>D&255;return k};function l(k,S){var C=f;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=S(k)}function h(k,S){this.h=S;const C=[];let D=!0;for(let N=k.length-1;N>=0;N--){const O=k[N]|0;D&&O==S||(C[N]=O,D=!1)}this.g=C}var f={};function g(k){return-128<=k&&k<128?l(k,function(S){return new h([S|0],S<0?-1:0)}):new h([k|0],k<0?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return w;if(k<0)return F(y(-k));const S=[];let C=1;for(let D=0;k>=C;D++)S[D]=k/C|0,C*=4294967296;return new h(S,0)}function E(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return F(E(k.substring(1),S));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(S,8));let D=w;for(let O=0;O<k.length;O+=8){var N=Math.min(8,k.length-O);const A=parseInt(k.substring(O,O+N),S);N<8?(N=y(Math.pow(S,N)),D=D.j(N).add(y(A))):(D=D.j(C),D=D.add(y(A)))}return D}var w=g(0),R=g(1),b=g(16777216);r=h.prototype,r.m=function(){if($(this))return-F(this).m();let k=0,S=1;for(let C=0;C<this.g.length;C++){const D=this.i(C);k+=(D>=0?D:4294967296+D)*S,S*=4294967296}return k},r.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(B(this))return"0";if($(this))return"-"+F(this).toString(k);const S=y(Math.pow(k,6));var C=this;let D="";for(;;){const N=fe(C,S).g;C=re(C,N.j(S));let O=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=N,B(C))return O+D;for(;O.length<6;)O="0"+O;D=O+D}},r.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function B(k){if(k.h!=0)return!1;for(let S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function $(k){return k.h==-1}r.l=function(k){return k=re(this,k),$(k)?-1:B(k)?0:1};function F(k){const S=k.g.length,C=[];for(let D=0;D<S;D++)C[D]=~k.g[D];return new h(C,~k.h).add(R)}r.abs=function(){return $(this)?F(this):this},r.add=function(k){const S=Math.max(this.g.length,k.g.length),C=[];let D=0;for(let N=0;N<=S;N++){let O=D+(this.i(N)&65535)+(k.i(N)&65535),A=(O>>>16)+(this.i(N)>>>16)+(k.i(N)>>>16);D=A>>>16,O&=65535,A&=65535,C[N]=A<<16|O}return new h(C,C[C.length-1]&-2147483648?-1:0)};function re(k,S){return k.add(F(S))}r.j=function(k){if(B(this)||B(k))return w;if($(this))return $(k)?F(this).j(F(k)):F(F(this).j(k));if($(k))return F(this.j(F(k)));if(this.l(b)<0&&k.l(b)<0)return y(this.m()*k.m());const S=this.g.length+k.g.length,C=[];for(var D=0;D<2*S;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(let N=0;N<k.g.length;N++){const O=this.i(D)>>>16,A=this.i(D)&65535,qe=k.i(N)>>>16,Et=k.i(N)&65535;C[2*D+2*N]+=A*Et,te(C,2*D+2*N),C[2*D+2*N+1]+=O*Et,te(C,2*D+2*N+1),C[2*D+2*N+1]+=A*qe,te(C,2*D+2*N+1),C[2*D+2*N+2]+=O*qe,te(C,2*D+2*N+2)}for(k=0;k<S;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=S;k<2*S;k++)C[k]=0;return new h(C,0)};function te(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function oe(k,S){this.g=k,this.h=S}function fe(k,S){if(B(S))throw Error("division by zero");if(B(k))return new oe(w,w);if($(k))return S=fe(F(k),S),new oe(F(S.g),F(S.h));if($(S))return S=fe(k,F(S)),new oe(F(S.g),S.h);if(k.g.length>30){if($(k)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var C=R,D=S;D.l(k)<=0;)C=De(C),D=De(D);var N=Re(C,1),O=Re(D,1);for(D=Re(D,2),C=Re(C,2);!B(D);){var A=O.add(D);A.l(k)<=0&&(N=N.add(C),O=A),D=Re(D,1),C=Re(C,1)}return S=re(k,N.j(S)),new oe(N,S)}for(N=w;k.l(S)>=0;){for(C=Math.max(1,Math.floor(k.m()/S.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),O=y(C),A=O.j(S);$(A)||A.l(k)>0;)C-=D,O=y(C),A=O.j(S);B(O)&&(O=R),N=N.add(O),k=re(k,A)}return new oe(N,k)}r.B=function(k){return fe(this,k).h},r.and=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<S;D++)C[D]=this.i(D)&k.i(D);return new h(C,this.h&k.h)},r.or=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<S;D++)C[D]=this.i(D)|k.i(D);return new h(C,this.h|k.h)},r.xor=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<S;D++)C[D]=this.i(D)^k.i(D);return new h(C,this.h^k.h)};function De(k){const S=k.g.length+1,C=[];for(let D=0;D<S;D++)C[D]=k.i(D)<<1|k.i(D-1)>>>31;return new h(C,k.h)}function Re(k,S){const C=S>>5;S%=32;const D=k.g.length-C,N=[];for(let O=0;O<D;O++)N[O]=S>0?k.i(O+C)>>>S|k.i(O+C+1)<<32-S:k.i(O+C);return new h(N,k.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Iv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,ki=h}).apply(typeof hy<"u"?hy:typeof self<"u"?self:typeof window<"u"?window:{});var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sv,$a,Rv,Xu,Xd,Av,Cv,Pv;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bu=="object"&&Bu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var M=u[T];if(!(M in _))break e;_=_[M]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var _=[],T;for(T in m)Object.prototype.hasOwnProperty.call(m,T)&&_.push([T,m[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,_){return u.call.apply(u.bind,arguments)}function y(u,m,_){return y=g,y.apply(null,arguments)}function E(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function w(u,m){function _(){}_.prototype=m.prototype,u.Z=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(T,M,j){for(var Z=Array(arguments.length-2),we=2;we<arguments.length;we++)Z[we-2]=arguments[we];return m.prototype[M].apply(T,Z)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function b(u){const m=u.length;if(m>0){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function B(u,m){for(let T=1;T<arguments.length;T++){const M=arguments[T];var _=typeof M;if(_=_!="object"?_:M?Array.isArray(M)?"array":_:"null",_=="array"||_=="object"&&typeof M.length=="number"){_=u.length||0;const j=M.length||0;u.length=_+j;for(let Z=0;Z<j;Z++)u[_+Z]=M[Z]}else u.push(M)}}class ${constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function F(u){h.setTimeout(()=>{throw u},0)}function re(){var u=k;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class te{constructor(){this.h=this.g=null}add(m,_){const T=oe.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var oe=new $(()=>new fe,u=>u.reset());class fe{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let De,Re=!1,k=new te,S=()=>{const u=Promise.resolve(void 0);De=()=>{u.then(C)}};function C(){for(var u;u=re();){try{u.h.call(u.g)}catch(_){F(_)}var m=oe;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}Re=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,m),h.removeEventListener("test",_,m)}catch{}return u})();function A(u){return/^[\s\xa0]*$/.test(u)}function qe(u,m){N.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}w(qe,N),qe.prototype.init=function(u,m){const _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(_=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Et="closure_listenable_"+(Math.random()*1e6|0),Dt=0;function Xe(u,m,_,T,M){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=M,this.key=++Dt,this.da=this.fa=!1}function ee(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pe(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function ae(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function V(u){const m={};for(const _ in u)m[_]=u[_];return m}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ie(u,m){let _,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(_ in T)u[_]=T[_];for(let j=0;j<G.length;j++)_=G[j],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function Se(u){this.src=u,this.g={},this.h=0}Se.prototype.add=function(u,m,_,T,M){const j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);const Z=Pe(u,m,T,M);return Z>-1?(m=u[Z],_||(m.fa=!1)):(m=new Xe(m,this.src,j,!!T,M),m.fa=_,u.push(m)),m};function Ce(u,m){const _=m.type;if(_ in u.g){var T=u.g[_],M=Array.prototype.indexOf.call(T,m,void 0),j;(j=M>=0)&&Array.prototype.splice.call(T,M,1),j&&(ee(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Pe(u,m,_,T){for(let M=0;M<u.length;++M){const j=u[M];if(!j.da&&j.listener==m&&j.capture==!!_&&j.ha==T)return M}return-1}var Fe="closure_lm_"+(Math.random()*1e6|0),Oe={};function Be(u,m,_,T,M){if(Array.isArray(m)){for(let j=0;j<m.length;j++)Be(u,m[j],_,T,M);return null}return _=Ko(_),u&&u[Et]?u.J(m,_,f(T)?!!T.capture:!1,M):Bt(u,m,_,!1,T,M)}function Bt(u,m,_,T,M,j){if(!m)throw Error("Invalid event type");const Z=f(M)?!!M.capture:!!M;let we=xs(u);if(we||(u[Fe]=we=new Se(u)),_=we.add(m,_,T,Z,j),_.proxy)return _;if(T=ks(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)O||(M=Z),M===void 0&&(M=!1),u.addEventListener(m.toString(),T,M);else if(u.attachEvent)u.attachEvent(Ns(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ks(){function u(_){return m.call(u.src,u.listener,_)}const m=Rl;return u}function Go(u,m,_,T,M){if(Array.isArray(m))for(var j=0;j<m.length;j++)Go(u,m[j],_,T,M);else T=f(T)?!!T.capture:!!T,_=Ko(_),u&&u[Et]?(u=u.i,j=String(m).toString(),j in u.g&&(m=u.g[j],_=Pe(m,_,T,M),_>-1&&(ee(m[_]),Array.prototype.splice.call(m,_,1),m.length==0&&(delete u.g[j],u.h--)))):u&&(u=xs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Pe(m,_,T,M)),(_=u>-1?m[u]:null)&&Br(_))}function Br(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Et])Ce(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(Ns(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=xs(m))?(Ce(_,u),_.h==0&&(_.src=null,m[Fe]=null)):ee(u)}}}function Ns(u){return u in Oe?Oe[u]:Oe[u]="on"+u}function Rl(u,m){if(u.da)u=!0;else{m=new qe(m,this);const _=u.listener,T=u.ha||u.src;u.fa&&Br(u),u=_.call(T,m)}return u}function xs(u){return u=u[Fe],u instanceof Se?u:null}var $i="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ko(u){return typeof u=="function"?u:(u[$i]||(u[$i]=function(m){return u.handleEvent(m)}),u[$i])}function ct(){D.call(this),this.i=new Se(this),this.M=this,this.G=null}w(ct,D),ct.prototype[Et]=!0,ct.prototype.removeEventListener=function(u,m,_,T){Go(this,u,m,_,T)};function ot(u,m){var _,T=u.G;if(T)for(_=[];T;T=T.G)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new N(m,u);else if(m instanceof N)m.target=m.target||u;else{var M=m;m=new N(T,u),Ie(m,M)}M=!0;let j,Z;if(_)for(Z=_.length-1;Z>=0;Z--)j=m.g=_[Z],M=Tn(j,T,!0,m)&&M;if(j=m.g=u,M=Tn(j,T,!0,m)&&M,M=Tn(j,T,!1,m)&&M,_)for(Z=0;Z<_.length;Z++)j=m.g=_[Z],M=Tn(j,T,!1,m)&&M}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const _=u.g[m];for(let T=0;T<_.length;T++)ee(_[T]);delete u.g[m],u.h--}}this.G=null},ct.prototype.J=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},ct.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function Tn(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let M=!0;for(let j=0;j<m.length;++j){const Z=m[j];if(Z&&!Z.da&&Z.capture==_){const we=Z.listener,at=Z.ha||Z.src;Z.fa&&Ce(u.i,Z),M=we.call(at,T)!==!1&&M}}return M&&!T.defaultPrevented}function Qo(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:h.setTimeout(u,m||0)}function Yo(u){u.g=Qo(()=>{u.g=null,u.i&&(u.i=!1,Yo(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Al extends D{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Yo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(u){D.call(this),this.h=u,this.g={}}w($r,D);var Xo=[];function Ds(u){pe(u.g,function(m,_){this.g.hasOwnProperty(_)&&Br(m)},u),u.g={}}$r.prototype.N=function(){$r.Z.N.call(this),Ds(this)},$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=h.JSON.stringify,Cl=h.JSON.parse,qi=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Wr(){}function Pl(){}var Hr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vs(){N.call(this,"d")}w(Vs,N);function Jo(){N.call(this,"c")}w(Jo,N);var In={},bs=null;function Gr(){return bs=bs||new ct}In.Ia="serverreachability";function Os(u){N.call(this,In.Ia,u)}w(Os,N);function cr(u){const m=Gr();ot(m,new Os(m))}In.STAT_EVENT="statevent";function hr(u,m){N.call(this,In.STAT_EVENT,u),this.stat=m}w(hr,N);function rt(u){const m=Gr();ot(m,new hr(m,u))}In.Ja="timingevent";function Zo(u,m){N.call(this,In.Ja,u),this.size=m}w(Zo,N);function Kr(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function Qr(){this.g=!0}Qr.prototype.ua=function(){this.g=!1};function kl(u,m,_,T,M,j){u.info(function(){if(u.g)if(j){var Z="",we=j.split("&");for(let je=0;je<we.length;je++){var at=we[je].split("=");if(at.length>1){const ht=at[0];at=at[1];const sn=ht.split("_");Z=sn.length>=2&&sn[1]=="type"?Z+(ht+"="+at+"&"):Z+(ht+"=redacted&")}}}else Z=null;else Z=j;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+m+`
`+_+`
`+Z})}function Nl(u,m,_,T,M,j,Z){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+m+`
`+_+`
`+j+" "+Z})}function Un(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Wi(u,_)+(T?" "+T:"")})}function xl(u,m){u.info(function(){return"TIMEOUT: "+m})}Qr.prototype.info=function(){};function Wi(u,m){if(!u.g)return m;if(!m)return null;try{const j=JSON.parse(m);if(j){for(u=0;u<j.length;u++)if(Array.isArray(j[u])){var _=j[u];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var M=T[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Z=1;Z<T.length;Z++)T[Z]=""}}}}return qr(j)}catch{return m}}var Yr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dl;function dr(){}w(dr,Wr),dr.prototype.g=function(){return new XMLHttpRequest},Dl=new dr;function Fn(u){return encodeURIComponent(String(u))}function Ls(u){var m=1;u=u.split(":");const _=[];for(;m>0&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function cn(u,m,_,T){this.j=u,this.i=m,this.l=_,this.S=T||1,this.V=new $r(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vl}function Vl(){this.i=null,this.g="",this.h=!1}var bl={},ea={};function Sn(u,m,_){u.M=1,u.A=pr(hn(m)),u.u=_,u.R=!0,ta(u,null)}function ta(u,m){u.F=Date.now(),Hi(u),u.B=hn(u.A);var _=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),ha(_.i,"t",T),u.C=0,_=u.j.L,u.h=new Vl,u.g=ql(u.j,_?m:null,!u.u),u.P>0&&(u.O=new Al(y(u.Y,u,u.g),u.P)),m=u.V,_=u.g,T=u.ba;var M="readystatechange";Array.isArray(M)||(M&&(Xo[0]=M.toString()),M=Xo);for(let j=0;j<M.length;j++){const Z=Be(_,M[j],T||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=u.J?V(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),cr(),kl(u.i,u.v,u.B,u.l,u.S,u.u)}cn.prototype.ba=function(u){u=u.target;const m=this.O;m&&Hn(u)==3?m.j():this.Y(u)},cn.prototype.Y=function(u){try{if(u==this.g)e:{const we=Hn(this.g),at=this.g.ya(),je=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||Bl(this.g)))){this.K||we!=4||at==7||(at==8||je<=0?cr(3):cr(2)),Ms(this);var m=this.g.ca();this.X=m;var _=Ol(this);if(this.o=m==200,Nl(this.i,this.v,this.B,this.l,this.S,we,m),this.o){if(this.U&&!this.L){t:{if(this.g){var T,M=this.g;if((T=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(T)){var j=T;break t}}j=null}if(u=j)Un(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,u);else{this.o=!1,this.m=3,rt(12),fr(this),Gi(this);break e}}if(this.R){u=!0;let ht;for(;!this.K&&this.C<_.length;)if(ht=Ml(this,_),ht==ea){we==4&&(this.m=4,rt(14),u=!1),Un(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==bl){this.m=4,rt(15),Un(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else Un(this.i,this.l,ht,null),Ge(this,ht);if(Ll(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||_.length!=0||this.h.h||(this.m=1,rt(16),u=!1),this.o=this.o&&u,!u)Un(this.i,this.l,_,"[Invalid Chunked Response]"),fr(this),Gi(this);else if(_.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),ns(Z),Z.P=!0,rt(11))}}else Un(this.i,this.l,_,null),Ge(this,_);we==4&&fr(this),this.o&&!this.K&&(we==4?Gs(this.j,this):(this.o=!1,Hi(this)))}else fa(this.g),m==400&&_.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),fr(this),Gi(this)}}}catch{}finally{}};function Ol(u){if(!Ll(u))return u.g.la();const m=Bl(u.g);if(m==="")return"";let _="";const T=m.length,M=Hn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return fr(u),Gi(u),"";u.h.i=new h.TextDecoder}for(let j=0;j<T;j++)u.h.h=!0,_+=u.h.i.decode(m[j],{stream:!(M&&j==T-1)});return m.length=0,u.h.g+=_,u.C=0,u.h.g}function Ll(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Ml(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?ea:(_=Number(m.substring(_,T)),isNaN(_)?bl:(T+=1,T+_>m.length?ea:(m=m.slice(T,T+_),u.C=T+_,m)))}cn.prototype.cancel=function(){this.K=!0,fr(this)};function Hi(u){u.T=Date.now()+u.H,na(u,u.H)}function na(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Kr(y(u.aa,u),m)}function Ms(u){u.D&&(h.clearTimeout(u.D),u.D=null)}cn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(xl(this.i,this.B),this.M!=2&&(cr(),rt(17)),fr(this),this.m=2,Gi(this)):na(this,this.T-u)};function Gi(u){u.j.I==0||u.K||Gs(u.j,u)}function fr(u){Ms(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,Ds(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ge(u,m){try{var _=u.j;if(_.I!=0&&(_.g==u||ia(_.h,u))){if(!u.L&&ia(_.h,u)&&_.I==3){try{var T=_.Ba.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)Hs(_),nn(_);else break e;Qn(_),rt(18)}}else _.xa=M[1],0<_.xa-_.K&&M[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=Kr(y(_.Va,_),6e3));Ki(_.h)<=1&&_.ta&&(_.ta=void 0)}else rn(_,11)}else if((u.L||_.g==u)&&Hs(_),!A(m))for(M=_.Ba.g.parse(m),m=0;m<M.length;m++){let je=M[m];const ht=je[0];if(!(ht<=_.K))if(_.K=ht,je=je[1],_.I==2)if(je[0]=="c"){_.M=je[1],_.ba=je[2];const sn=je[3];sn!=null&&(_.ka=sn,_.j.info("VER="+_.ka));const vr=je[4];vr!=null&&(_.za=vr,_.j.info("SVER="+_.za));const Yn=je[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(T=1.5*Yn,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const Xn=u.g;if(Xn){const Ys=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ys){var j=T.h;j.g||Ys.indexOf("spdy")==-1&&Ys.indexOf("quic")==-1&&Ys.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Fs(j,j.h),j.h=null))}if(T.G){const ga=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;ga&&(T.wa=ga,Ue(T.J,T.G,ga))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var Z=u;if(T.na=ma(T,T.L?T.ba:null,T.W),Z.L){Qi(T.h,Z);var we=Z,at=T.O;at&&(we.H=at),we.D&&(Ms(we),Hi(we)),T.g=Z}else Vt(T);_.i.length>0&&_r(_)}else je[0]!="stop"&&je[0]!="close"||rn(_,7);else _.I==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?rn(_,7):qs(_):je[0]!="noop"&&_.l&&_.l.qa(je),_.A=0)}}cr(4)}catch{}}var Zc=class{constructor(u,m){this.g=u,this.map=m}};function Us(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ra(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ki(u){return u.h?1:u.g?u.g.size:0}function ia(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Fs(u,m){u.g?u.g.add(m):u.h=m}function Qi(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Us.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Zt(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.G);return m}return b(u.i)}var Ul=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function en(u,m){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const T=u[_].indexOf("=");let M,j=null;T>=0?(M=u[_].substring(0,T),j=u[_].substring(T+1)):M=u[_],m(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function zn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof zn?(this.l=u.l,Yi(this,u.j),this.o=u.o,this.g=u.g,jn(this,u.u),this.h=u.h,Jr(this,da(u.i)),this.m=u.m):u&&(m=String(u).match(Ul))?(this.l=!1,Yi(this,m[1]||"",!0),this.o=Xi(m[2]||""),this.g=Xi(m[3]||"",!0),jn(this,m[4]),this.h=Xi(m[5]||"",!0),Jr(this,m[6]||"",!0),this.m=Xi(m[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}zn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(Ji(m,oa,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Ji(m,oa,!0),"@"),u.push(Fn(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Ji(_,_.charAt(0)=="/"?Zi:aa,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Ji(_,la)),u.join("")},zn.prototype.resolve=function(u){const m=hn(this);let _=!!u.j;_?Yi(m,u.j):_=!!u.o,_?m.o=u.o:_=!!u.g,_?m.g=u.g:_=u.u!=null;var T=u.h;if(_)jn(m,u.u);else if(_=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var M=m.h.lastIndexOf("/");M!=-1&&(T=m.h.slice(0,M+1)+T)}if(M=T,M==".."||M==".")T="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){T=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let Z=0;Z<M.length;){const we=M[Z++];we=="."?T&&Z==M.length&&j.push(""):we==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),T&&Z==M.length&&j.push("")):(j.push(we),T=!0)}T=j.join("/")}else T=M}return _?m.h=T:_=u.i.toString()!=="",_?Jr(m,da(u.i)):_=!!u.m,_&&(m.m=u.m),m};function hn(u){return new zn(u)}function Yi(u,m,_){u.j=_?Xi(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function jn(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function Jr(u,m,_){m instanceof Ve?(u.i=m,js(u.i,u.l)):(_||(m=Ji(m,eh)),u.i=new Ve(m,u.l))}function Ue(u,m,_){u.i.set(m,_)}function pr(u){return Ue(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Xi(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ji(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,sa),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function sa(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var oa=/[#\/\?@]/g,aa=/[#\?:]/g,Zi=/[#\?]/g,eh=/[#\?@]/g,la=/#/g;function Ve(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Bn(u){u.g||(u.g=new Map,u.h=0,u.i&&en(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Ve.prototype,r.add=function(u,m){Bn(this),this.i=null,u=$n(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function ua(u,m){Bn(u),m=$n(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function zs(u,m){return Bn(u),m=$n(u,m),u.g.has(m)}r.forEach=function(u,m){Bn(this),this.g.forEach(function(_,T){_.forEach(function(M){u.call(m,M,T,this)},this)},this)};function ca(u,m){Bn(u);let _=[];if(typeof m=="string")zs(u,m)&&(_=_.concat(u.g.get($n(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)_=_.concat(u[m]);return _}r.set=function(u,m){return Bn(this),this.i=null,u=$n(this,u),zs(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=ca(this,u),u.length>0?String(u[0]):m):m};function ha(u,m,_){ua(u,m),_.length>0&&(u.i=null,u.g.set($n(u,m),b(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let T=0;T<m.length;T++){var _=m[T];const M=Fn(_);_=ca(this,_);for(let j=0;j<_.length;j++){let Z=M;_[j]!==""&&(Z+="="+Fn(_[j])),u.push(Z)}}return this.i=u.join("&")};function da(u){const m=new Ve;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function $n(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function js(u,m){m&&!u.j&&(Bn(u),u.i=null,u.g.forEach(function(_,T){const M=T.toLowerCase();T!=M&&(ua(this,T),ha(this,M,_))},u)),u.j=m}function qn(u,m){const _=new Qr;if(h.Image){const T=new Image;T.onload=E(Rt,_,"TestLoadImage: loaded",!0,m,T),T.onerror=E(Rt,_,"TestLoadImage: error",!1,m,T),T.onabort=E(Rt,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=E(Rt,_,"TestLoadImage: timeout",!1,m,T),h.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Wn(u,m){const _=new Qr,T=new AbortController,M=setTimeout(()=>{T.abort(),Rt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(j=>{clearTimeout(M),j.ok?Rt(_,"TestPingServer: ok",!0,m):Rt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),Rt(_,"TestPingServer: error",!1,m)})}function Rt(u,m,_,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(_)}catch{}}function es(){this.g=new qi}function mr(u){this.i=u.Sb||null,this.h=u.ab||!1}w(mr,Wr),mr.prototype.g=function(){return new tn(this.i,this.h)};function tn(u,m){ct.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(tn,ct),r=tn.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,Rn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||h).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Zr(this):Rn(this),this.readyState==3&&Fl(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,Zr(this))},r.Na=function(u){this.g&&(this.response=u,Zr(this))},r.ga=function(){this.g&&Zr(this)};function Zr(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Rn(u)}r.setRequestHeader=function(u,m){this.A.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Rn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function zl(u){let m="";return pe(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function Bs(u,m,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=zl(_),typeof u=="string"?_!=null&&Fn(_):Ue(u,m,_))}function $e(u){ct.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w($e,ct);var jl=/^https?$/i,th=["POST","PUT"];r=$e.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dl.g(),this.g.onreadystatechange=R(y(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(j){ei(this,j);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)_.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const j of T.keys())_.set(j,T.get(j));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(th,m,void 0)>=0)||T||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of _)this.g.setRequestHeader(j,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(j){ei(this,j)}};function ei(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,ti(u),yr(u)}function ti(u){u.A||(u.A=!0,ot(u,"complete"),ot(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,ot(this,"complete"),ot(this,"abort"),yr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yr(this,!0)),$e.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?gr(this):this.Xa())},r.Xa=function(){gr(this)};function gr(u){if(u.h&&typeof l<"u"){if(u.v&&Hn(u)==4)setTimeout(u.Ca.bind(u),0);else if(ot(u,"readystatechange"),Hn(u)==4){u.h=!1;try{const j=u.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var T;if(T=j===0){let Z=String(u.D).match(Ul)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),T=!jl.test(Z?Z.toLowerCase():"")}_=T}if(_)ot(u,"complete"),ot(u,"success");else{u.o=6;try{var M=Hn(u)>2?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.ca()+"]",ti(u)}}finally{yr(u)}}}}function yr(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,m||ot(u,"ready");try{_.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Hn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Hn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Cl(m)}};function Bl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function fa(u){const m={};u=(u.g&&Hn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(A(u[T]))continue;var _=Ls(u[T]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const j=m[M]||[];m[M]=j,j.push(_)}ae(m,function(T){return T.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function $s(u){this.za=0,this.i=[],this.j=new Qr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Gn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Gn("baseRetryDelayMs",5e3,u),this.Za=Gn("retryDelaySeedMs",1e4,u),this.Ta=Gn("forwardChannelMaxRetries",2,u),this.va=Gn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Us(u&&u.concurrentRequestLimit),this.Ba=new es,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=$s.prototype,r.ka=8,r.I=1,r.connect=function(u,m,_,T){rt(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=ma(this,null,this.W),_r(this)};function qs(u){if(Ws(u),u.I==3){var m=u.V++,_=hn(u.J);if(Ue(_,"SID",u.M),Ue(_,"RID",m),Ue(_,"TYPE","terminate"),Kn(u,_),m=new cn(u,u.j,m),m.M=2,m.A=pr(hn(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(m.A.toString(),"")}catch{}!_&&h.Image&&(new Image().src=m.A,_=!0),_||(m.g=ql(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Hi(m)}rs(u)}function nn(u){u.g&&(ns(u),u.g.cancel(),u.g=null)}function Ws(u){nn(u),u.v&&(h.clearTimeout(u.v),u.v=null),Hs(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function _r(u){if(!ra(u.h)&&!u.m){u.m=!0;var m=u.Ea;De||S(),Re||(De(),Re=!0),k.add(m,u),u.D=0}}function $l(u,m){return Ki(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Kr(y(u.Ea,u,m),Ks(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const M=new cn(this,this.j,u);let j=this.o;if(this.U&&(j?(j=V(j),Ie(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,m>4096){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=pa(this,M,m),_=hn(this.J),Ue(_,"RID",u),Ue(_,"CVER",22),this.G&&Ue(_,"X-HTTP-Session-Id",this.G),Kn(this,_),j&&(this.R?m="headers="+Fn(zl(j))+"&"+m:this.u&&Bs(_,this.u,j)),Fs(this.h,M),this.Ra&&Ue(_,"TYPE","init"),this.S?(Ue(_,"$req",m),Ue(_,"SID","null"),M.U=!0,Sn(M,_,null)):Sn(M,_,m),this.I=2}}else this.I==3&&(u?ts(this,u):this.i.length==0||ra(this.h)||ts(this))};function ts(u,m){var _;m?_=m.l:_=u.V++;const T=hn(u.J);Ue(T,"SID",u.M),Ue(T,"RID",_),Ue(T,"AID",u.K),Kn(u,T),u.u&&u.o&&Bs(T,u.u,u.o),_=new cn(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),m&&(u.i=m.G.concat(u.i)),m=pa(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Fs(u.h,_),Sn(_,T,m)}function Kn(u,m){u.H&&pe(u.H,function(_,T){Ue(m,T,_)}),u.l&&pe({},function(_,T){Ue(m,T,_)})}function pa(u,m,_){_=Math.min(u.i.length,_);const T=u.l?y(u.l.Ka,u.l,u):null;e:{var M=u.i;let we=-1;for(;;){const at=["count="+_];we==-1?_>0?(we=M[0].g,at.push("ofs="+we)):we=0:at.push("ofs="+we);let je=!0;for(let ht=0;ht<_;ht++){var j=M[ht].g;const sn=M[ht].map;if(j-=we,j<0)we=Math.max(0,M[ht].g-100),je=!1;else try{j="req"+j+"_"||"";try{var Z=sn instanceof Map?sn:Object.entries(sn);for(const[vr,Yn]of Z){let Xn=Yn;f(Yn)&&(Xn=qr(Yn)),at.push(j+vr+"="+encodeURIComponent(Xn))}}catch(vr){throw at.push(j+"type="+encodeURIComponent("_badmap")),vr}}catch{T&&T(sn)}}if(je){Z=at.join("&");break e}}Z=void 0}return u=u.i.splice(0,_),m.G=u,Z}function Vt(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;De||S(),Re||(De(),Re=!0),k.add(m,u),u.A=0}}function Qn(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Kr(y(u.Da,u),Ks(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,ni(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Kr(y(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),nn(this),ni(this))};function ns(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function ni(u){u.g=new cn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=hn(u.na);Ue(m,"RID","rpc"),Ue(m,"SID",u.M),Ue(m,"AID",u.K),Ue(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&Ue(m,"TO",u.ia),Ue(m,"TYPE","xmlhttp"),Kn(u,m),u.u&&u.o&&Bs(m,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=pr(hn(m)),_.u=null,_.R=!0,ta(_,u)}r.Va=function(){this.C!=null&&(this.C=null,nn(this),Qn(this),rt(19))};function Hs(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Gs(u,m){var _=null;if(u.g==m){Hs(u),ns(u),u.g=null;var T=2}else if(ia(u.h,m))_=m.G,Qi(u.h,m),T=1;else return;if(u.I!=0){if(m.o)if(T==1){_=m.u?m.u.length:0,m=Date.now()-m.F;var M=u.D;T=Gr(),ot(T,new Zo(T,_)),_r(u)}else Vt(u);else if(M=m.m,M==3||M==0&&m.X>0||!(T==1&&$l(u,m)||T==2&&Qn(u)))switch(_&&_.length>0&&(m=u.h,m.i=m.i.concat(_)),M){case 1:rn(u,5);break;case 4:rn(u,10);break;case 3:rn(u,6);break;default:rn(u,2)}}}function Ks(u,m){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*m}function rn(u,m){if(u.j.info("Error code "+m),m==2){var _=y(u.bb,u),T=u.Ua;const M=!T;T=new zn(T||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Yi(T,"https"),pr(T),M?qn(T.toString(),_):Wn(T.toString(),_)}else rt(2);u.I=0,u.l&&u.l.pa(m),rs(u),Ws(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function rs(u){if(u.I=0,u.ja=[],u.l){const m=Zt(u.h);(m.length!=0||u.i.length!=0)&&(B(u.ja,m),B(u.ja,u.i),u.h.i.length=0,b(u.i),u.i.length=0),u.l.oa()}}function ma(u,m,_){var T=_ instanceof zn?hn(_):new zn(_);if(T.g!="")m&&(T.g=m+"."+T.g),jn(T,T.u);else{var M=h.location;T=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;const j=new zn(null);T&&Yi(j,T),m&&(j.g=m),M&&jn(j,M),_&&(j.h=_),T=j}return _=u.G,m=u.wa,_&&m&&Ue(T,_,m),Ue(T,"VER",u.ka),Kn(u,T),T}function ql(u,m,_){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new $e(new mr({ab:_})):new $e(u.ma),m.Fa(u.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wl(){}r=Wl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Qs(){}Qs.prototype.g=function(u,m){return new At(u,m)};function At(u,m){ct.call(this),this.g=new $s(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!A(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!A(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ri(this)}w(At,ct),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){qs(this.g)},At.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=qr(u),u=_);m.i.push(new Zc(m.Ya++,u)),m.I==3&&_r(m)},At.prototype.N=function(){this.g.l=null,delete this.j,qs(this.g),delete this.g,At.Z.N.call(this)};function Hl(u){Vs.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}w(Hl,Vs);function Gl(){Jo.call(this),this.status=1}w(Gl,Jo);function ri(u){this.g=u}w(ri,Wl),ri.prototype.ra=function(){ot(this.g,"a")},ri.prototype.qa=function(u){ot(this.g,new Hl(u))},ri.prototype.pa=function(u){ot(this.g,new Gl)},ri.prototype.oa=function(){ot(this.g,"b")},Qs.prototype.createWebChannel=Qs.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Pv=function(){return new Qs},Cv=function(){return Gr()},Av=In,Xd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Yr.NO_ERROR=0,Yr.TIMEOUT=8,Yr.HTTP_ERROR=6,Xu=Yr,Xr.COMPLETE="complete",Rv=Xr,Pl.EventType=Hr,Hr.OPEN="a",Hr.CLOSE="b",Hr.ERROR="c",Hr.MESSAGE="d",ct.prototype.listen=ct.prototype.J,$a=Pl,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,Sv=$e}).apply(typeof Bu<"u"?Bu:typeof self<"u"?self:typeof window<"u"?window:{});const dy="@firebase/firestore",fy="4.9.2";/**
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
 */let Ft=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let Bo="12.3.0";/**
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
 */const Is=new _f("@firebase/firestore");function _o(){return Is.logLevel}function se(r,...e){if(Is.logLevel<=ke.DEBUG){const t=e.map(kf);Is.debug(`Firestore (${Bo}): ${r}`,...t)}}function br(r,...e){if(Is.logLevel<=ke.ERROR){const t=e.map(kf);Is.error(`Firestore (${Bo}): ${r}`,...t)}}function xo(r,...e){if(Is.logLevel<=ke.WARN){const t=e.map(kf);Is.warn(`Firestore (${Bo}): ${r}`,...t)}}function kf(r){if(typeof r=="string")return r;try{/**
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
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function _e(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,kv(r,i,t)}function kv(r,e,t){let i=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw br(i),new Error(i)}function ze(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||kv(e,o,i)}function Te(r,e){return r}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Fr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ni{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Nv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class $R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class qR{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new Ni;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ni,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ni)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ze(typeof i.accessToken=="string",31837,{l:i}),new Nv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class WR{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class HR{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new WR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class py{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_n(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const i=l=>{l.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new py(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new py(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function KR(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Nf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=KR(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ne(r,e){return r<e?-1:r>e?1:0}function Jd(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const o=r.charAt(i),l=e.charAt(i);if(o!==l)return bd(o)===bd(l)?Ne(o,l):bd(o)?1:-1}return Ne(r.length,e.length)}const QR=55296,YR=57343;function bd(r){const e=r.charCodeAt(0);return e>=QR&&e<=YR}function Do(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
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
 */const my="__name__";class nr{constructor(e,t,i){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&_e(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=nr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ne(e.length,t.length)}static compareSegments(e,t){const i=nr.isNumericId(e),o=nr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?nr.extractNumericId(e).compare(nr.extractNumericId(t)):Jd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ki.fromString(e.substring(4,e.length-2))}}class He extends nr{construct(e,t,i){return new He(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ne(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const XR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends nr{construct(e,t,i){return new Nt(e,t,i)}static isValidIdentifier(e){return XR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===my}static keyField(){return new Nt([my])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ne(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ne(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ne(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new ne(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(He.fromString(e))}static fromName(e){return new de(He.fromString(e).popFirst(5))}static empty(){return new de(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new He(e.slice()))}}/**
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
 */function xv(r,e,t){if(!t)throw new ne(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function JR(r,e,t,i){if(e===!0&&i===!0)throw new ne(W.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function gy(r){if(!de.isDocumentKey(r))throw new ne(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function yy(r){if(de.isDocumentKey(r))throw new ne(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Dv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Dc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function Vn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ne(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Dc(r);throw new ne(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(r,e){const t={typeString:r};return e&&(t.value=e),t}function _l(r,e){if(!Dv(r))throw new ne(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ne(W.INVALID_ARGUMENT,t);return!0}/**
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
 */const _y=-62135596800,vy=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*vy);return new Ye(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<_y)throw new ne(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vy}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_l(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_y;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:mt("string",Ye._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Ye(0,0))}static max(){return new Ee(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const il=-1;function ZR(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new Ye(t+1,0):new Ye(t,i));return new Di(o,de.empty(),e)}function eA(r){return new Di(r.readTime,r.key,il)}class Di{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Di(Ee.min(),de.empty(),il)}static max(){return new Di(Ee.max(),de.empty(),il)}}function tA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(r.documentKey,e.documentKey),t!==0?t:Ne(r.largestBatchId,e.largestBatchId))}/**
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
 */const nA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function $o(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==nA)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,i)=>{t(e)}))}static reject(e){return new H(((t,i)=>{i(e)}))}static waitFor(e){return new H(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=H.resolve(!1);for(const i of e)t=t.next((o=>o?H.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new H(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next((E=>{h[y]=E,++f,f===l&&i(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new H(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function iA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Vc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Vc.ce=-1;/**
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
 */const xf=-1;function bc(r){return r==null}function pc(r){return r===0&&1/r==-1/0}function sA(r){return typeof r=="number"&&Number.isInteger(r)&&!pc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Vv="";function oA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ey(e)),e=aA(r.get(t),e);return Ey(e)}function aA(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case Vv:t+="";break;default:t+=l}}return t}function Ey(r){return r+Vv+""}/**
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
 */function wy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function zi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function bv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $u(this.root,e,this.comparator,!1)}getReverseIterator(){return new $u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $u(this.root,e,this.comparator,!0)}}class $u{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??kt.RED,this.left=o??kt.EMPTY,this.right=l??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new kt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ty(this.data.getIterator())}getIteratorFrom(e){return new Ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new un([])}unionWith(e){let t=new vt(Nt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Ov extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Ov("Invalid base64 string: "+l):l}})(e);return new xt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const lA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vi(r){if(ze(!!r,39018),typeof r=="string"){let e=0;const t=lA.exec(r);if(ze(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(r.seconds),nanos:ut(r.nanos)}}function ut(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function bi(r){return typeof r=="string"?xt.fromBase64String(r):xt.fromUint8Array(r)}/**
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
 */const Lv="server_timestamp",Mv="__type__",Uv="__previous_value__",Fv="__local_write_time__";function Df(r){return(r?.mapValue?.fields||{})[Mv]?.stringValue===Lv}function Oc(r){const e=r.mapValue.fields[Uv];return Df(e)?Oc(e):e}function sl(r){const e=Vi(r.mapValue.fields[Fv].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class uA{constructor(e,t,i,o,l,h,f,g,y,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=E}}const mc="(default)";class ol{constructor(e,t){this.projectId=e,this.database=t||mc}static empty(){return new ol("","")}get isDefaultDatabase(){return this.database===mc}isEqual(e){return e instanceof ol&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zv="__type__",cA="__max__",qu={mapValue:{}},jv="__vector__",gc="value";function Oi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Df(r)?4:dA(r)?9007199254740991:hA(r)?10:11:_e(28295,{value:r})}function ur(r,e){if(r===e)return!0;const t=Oi(r);if(t!==Oi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return sl(r).isEqual(sl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Vi(o.timestampValue),f=Vi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return bi(o.bytesValue).isEqual(bi(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ut(o.doubleValue),f=ut(l.doubleValue);return h===f?pc(h)===pc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Do(r.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(wy(h)!==wy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!ur(h[g],f[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function al(r,e){return(r.values||[]).find((t=>ur(t,e)))!==void 0}function Vo(r,e){if(r===e)return 0;const t=Oi(r),i=Oi(e);if(t!==i)return Ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=ut(l.integerValue||l.doubleValue),g=ut(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return Iy(r.timestampValue,e.timestampValue);case 4:return Iy(sl(r),sl(e));case 5:return Jd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=bi(l),g=bi(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let y=0;y<f.length&&y<g.length;y++){const E=Ne(f[y],g[y]);if(E!==0)return E}return Ne(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Ne(ut(l.latitude),ut(h.latitude));return f!==0?f:Ne(ut(l.longitude),ut(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Sy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){const f=l.fields||{},g=h.fields||{},y=f[gc]?.arrayValue,E=g[gc]?.arrayValue,w=Ne(y?.values?.length||0,E?.values?.length||0);return w!==0?w:Sy(y,E)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===qu.mapValue&&h===qu.mapValue)return 0;if(l===qu.mapValue)return 1;if(h===qu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),y=h.fields||{},E=Object.keys(y);g.sort(),E.sort();for(let w=0;w<g.length&&w<E.length;++w){const R=Jd(g[w],E[w]);if(R!==0)return R;const b=Vo(f[g[w]],y[E[w]]);if(b!==0)return b}return Ne(g.length,E.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function Iy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ne(r,e);const t=Vi(r),i=Vi(e),o=Ne(t.seconds,i.seconds);return o!==0?o:Ne(t.nanos,i.nanos)}function Sy(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Vo(t[o],i[o]);if(l)return l}return Ne(t.length,i.length)}function bo(r){return Zd(r)}function Zd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Vi(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return bi(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return de.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Zd(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Zd(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function Ju(r){switch(Oi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oc(r);return e?16+Ju(e):16;case 5:return 2*r.stringValue.length;case 6:return bi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Ju(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return zi(i.fields,((l,h)=>{o+=l.length+Ju(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function Ry(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ef(r){return!!r&&"integerValue"in r}function Vf(r){return!!r&&"arrayValue"in r}function Ay(r){return!!r&&"nullValue"in r}function Cy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Zu(r){return!!r&&"mapValue"in r}function hA(r){return(r?.mapValue?.fields||{})[zv]?.stringValue===jv}function Qa(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return zi(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Qa(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qa(r.arrayValue.values[t]);return e}return{...r}}function dA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===cA}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Zu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qa(t)}setAll(e){let t=Nt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Qa(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Zu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Zu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){zi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new Jt(Qa(this.value))}}function Bv(r){const e=[];return zi(r.fields,((t,i)=>{const o=new Nt([t]);if(Zu(i)){const l=Bv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new un(e)}/**
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
 */class zt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new zt(e,0,Ee.min(),Ee.min(),Ee.min(),Jt.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Ee.min(),Ee.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Ee.min(),Ee.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yc{constructor(e,t){this.position=e,this.inclusive=t}}function Py(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=de.comparator(de.fromName(h.referenceValue),t.key):i=Vo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function ky(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ur(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ll{constructor(e,t="asc"){this.field=e,this.dir=t}}function fA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class $v{}class pt extends $v{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new mA(e,t,i):t==="array-contains"?new _A(e,i):t==="in"?new vA(e,i):t==="not-in"?new EA(e,i):t==="array-contains-any"?new wA(e,i):new pt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new gA(e,i):new yA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Vo(t,this.value)):t!==null&&Oi(this.value)===Oi(t)&&this.matchesComparison(Vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends $v{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ln(e,t)}matches(e){return qv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function qv(r){return r.op==="and"}function Wv(r){return pA(r)&&qv(r)}function pA(r){for(const e of r.filters)if(e instanceof Ln)return!1;return!0}function tf(r){if(r instanceof pt)return r.field.canonicalString()+r.op.toString()+bo(r.value);if(Wv(r))return r.filters.map((e=>tf(e))).join(",");{const e=r.filters.map((t=>tf(t))).join(",");return`${r.op}(${e})`}}function Hv(r,e){return r instanceof pt?(function(i,o){return o instanceof pt&&i.op===o.op&&i.field.isEqual(o.field)&&ur(i.value,o.value)})(r,e):r instanceof Ln?(function(i,o){return o instanceof Ln&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&Hv(h,o.filters[f])),!0):!1})(r,e):void _e(19439)}function Gv(r){return r instanceof pt?(function(t){return`${t.field.canonicalString()} ${t.op} ${bo(t.value)}`})(r):r instanceof Ln?(function(t){return t.op.toString()+" {"+t.getFilters().map(Gv).join(" ,")+"}"})(r):"Filter"}class mA extends pt{constructor(e,t,i){super(e,t,i),this.key=de.fromName(i.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class gA extends pt{constructor(e,t){super(e,"in",t),this.keys=Kv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class yA extends pt{constructor(e,t){super(e,"not-in",t),this.keys=Kv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Kv(r,e){return(e.arrayValue?.values||[]).map((t=>de.fromName(t.referenceValue)))}class _A extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vf(t)&&al(t.arrayValue,this.value)}}class vA extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&al(this.value.arrayValue,t)}}class EA extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!al(this.value.arrayValue,t)}}class wA extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>al(this.value.arrayValue,i)))}}/**
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
 */class TA{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Te=null}}function Ny(r,e=null,t=[],i=[],o=null,l=null,h=null){return new TA(r,e,t,i,o,l,h)}function bf(r){const e=Te(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>tf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),bc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>bo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>bo(i))).join(",")),e.Te=t}return e.Te}function Of(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!fA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Hv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ky(r.startAt,e.startAt)&&ky(r.endAt,e.endAt)}function nf(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Wo{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function IA(r,e,t,i,o,l,h,f){return new Wo(r,e,t,i,o,l,h,f)}function Lc(r){return new Wo(r)}function xy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Qv(r){return r.collectionGroup!==null}function Ya(r){const e=Te(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new vt(Nt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new ll(l,i))})),t.has(Nt.keyField().canonicalString())||e.Ie.push(new ll(Nt.keyField(),i))}return e.Ie}function sr(r){const e=Te(r);return e.Ee||(e.Ee=SA(e,Ya(r))),e.Ee}function SA(r,e){if(r.limitType==="F")return Ny(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new ll(o.field,l)}));const t=r.endAt?new yc(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new yc(r.startAt.position,r.startAt.inclusive):null;return Ny(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function rf(r,e){const t=r.filters.concat([e]);return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function _c(r,e,t){return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Mc(r,e){return Of(sr(r),sr(e))&&r.limitType===e.limitType}function Yv(r){return`${bf(sr(r))}|lt:${r.limitType}`}function vo(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Gv(o))).join(", ")}]`),bc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>bo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>bo(o))).join(",")),`Target(${i})`})(sr(r))}; limitType=${r.limitType})`}function Uc(r,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):de.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,o){for(const l of Ya(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const y=Py(h,f,g);return h.inclusive?y<=0:y<0})(i.startAt,Ya(i),o)||i.endAt&&!(function(h,f,g){const y=Py(h,f,g);return h.inclusive?y>=0:y>0})(i.endAt,Ya(i),o))})(r,e)}function RA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Xv(r){return(e,t)=>{let i=!1;for(const o of Ya(r)){const l=AA(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function AA(r,e,t){const i=r.field.isKeyField()?de.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),y=f.data.field(l);return g!==null&&y!==null?Vo(g,y):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return _e(19790,{direction:r.dir})}}/**
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
 */class Cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){zi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return bv(this.inner)}size(){return this.innerSize}}/**
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
 */const CA=new nt(de.comparator);function Or(){return CA}const Jv=new nt(de.comparator);function qa(...r){let e=Jv;for(const t of r)e=e.insert(t.key,t);return e}function Zv(r){let e=Jv;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ys(){return Xa()}function eE(){return Xa()}function Xa(){return new Cs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const PA=new nt(de.comparator),kA=new vt(de.comparator);function xe(...r){let e=kA;for(const t of r)e=e.add(t);return e}const NA=new vt(Ne);function xA(){return NA}/**
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
 */function Lf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pc(e)?"-0":e}}function tE(r){return{integerValue:""+r}}function DA(r,e){return sA(e)?tE(e):Lf(r,e)}/**
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
 */class Fc{constructor(){this._=void 0}}function VA(r,e,t){return r instanceof ul?(function(o,l){const h={fields:{[Mv]:{stringValue:Lv},[Fv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Df(l)&&(l=Oc(l)),l&&(h.fields[Uv]=l),{mapValue:h}})(t,e):r instanceof cl?rE(r,e):r instanceof hl?iE(r,e):(function(o,l){const h=nE(o,l),f=Dy(h)+Dy(o.Ae);return ef(h)&&ef(o.Ae)?tE(f):Lf(o.serializer,f)})(r,e)}function bA(r,e,t){return r instanceof cl?rE(r,e):r instanceof hl?iE(r,e):t}function nE(r,e){return r instanceof vc?(function(i){return ef(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class ul extends Fc{}class cl extends Fc{constructor(e){super(),this.elements=e}}function rE(r,e){const t=sE(e);for(const i of r.elements)t.some((o=>ur(o,i)))||t.push(i);return{arrayValue:{values:t}}}class hl extends Fc{constructor(e){super(),this.elements=e}}function iE(r,e){let t=sE(e);for(const i of r.elements)t=t.filter((o=>!ur(o,i)));return{arrayValue:{values:t}}}class vc extends Fc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Dy(r){return ut(r.integerValue||r.doubleValue)}function sE(r){return Vf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class OA{constructor(e,t){this.field=e,this.transform=t}}function LA(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof cl&&o instanceof cl||i instanceof hl&&o instanceof hl?Do(i.elements,o.elements,ur):i instanceof vc&&o instanceof vc?ur(i.Ae,o.Ae):i instanceof ul&&o instanceof ul})(r.transform,e.transform)}class MA{constructor(e,t){this.version=e,this.transformResults=t}}class bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ec(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class zc{}function oE(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new lE(r.key,bn.none()):new vl(r.key,r.data,bn.none());{const t=r.data,i=Jt.empty();let o=new vt(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new ji(r.key,i,new un(o.toArray()),bn.none())}}function UA(r,e,t){r instanceof vl?(function(o,l,h){const f=o.value.clone(),g=by(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof ji?(function(o,l,h){if(!ec(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=by(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(aE(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ja(r,e,t,i){return r instanceof vl?(function(l,h,f,g){if(!ec(l.precondition,h))return f;const y=l.value.clone(),E=Oy(l.fieldTransforms,g,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(r,e,t,i):r instanceof ji?(function(l,h,f,g){if(!ec(l.precondition,h))return f;const y=Oy(l.fieldTransforms,g,h),E=h.data;return E.setAll(aE(l)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((w=>w.field)))})(r,e,t,i):(function(l,h,f){return ec(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function FA(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=nE(i.transform,o||null);l!=null&&(t===null&&(t=Jt.empty()),t.set(i.field,l))}return t||null}function Vy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Do(i,o,((l,h)=>LA(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class vl extends zc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ji extends zc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function aE(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function by(r,e,t){const i=new Map;ze(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,bA(h,f,t[o]))}return i}function Oy(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,VA(l,h,e))}return i}class lE extends zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zA extends zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jA{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&UA(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ja(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ja(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=eE();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=oE(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xe())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,((t,i)=>Vy(t,i)))&&Do(this.baseMutations,e.baseMutations,((t,i)=>Vy(t,i)))}}class Mf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){ze(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return PA})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Mf(e,t,i,o)}}/**
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
 */class BA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $A{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,be;function qA(r){switch(r){case W.OK:return _e(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function uE(r){if(r===void 0)return br("GRPC error has no .code"),W.UNKNOWN;switch(r){case ft.OK:return W.OK;case ft.CANCELLED:return W.CANCELLED;case ft.UNKNOWN:return W.UNKNOWN;case ft.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ft.INTERNAL:return W.INTERNAL;case ft.UNAVAILABLE:return W.UNAVAILABLE;case ft.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ft.NOT_FOUND:return W.NOT_FOUND;case ft.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ft.ABORTED:return W.ABORTED;case ft.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ft.DATA_LOSS:return W.DATA_LOSS;default:return _e(39323,{code:r})}}(be=ft||(ft={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function WA(){return new TextEncoder}/**
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
 */const HA=new ki([4294967295,4294967295],0);function Ly(r){const e=WA().encode(r),t=new Iv;return t.update(e),new Uint8Array(t.digest())}function My(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ki([t,i],0),new ki([o,l],0)]}class Uf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Wa(`Invalid padding: ${t}`);if(i<0)throw new Wa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Wa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Wa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ki.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(ki.fromNumber(i)));return o.compare(HA)===1&&(o=new ki([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ly(e),[i,o]=My(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Uf(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=Ly(e),[i,o]=My(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class jc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new jc(Ee.min(),o,new nt(Ne),Or(),xe())}}class El{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new El(i,t,xe(),xe(),xe())}}/**
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
 */class tc{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class cE{constructor(e,t){this.targetId=e,this.Ce=t}}class hE{constructor(e,t,i=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Uy{constructor(){this.ve=0,this.Fe=Fy(),this.Me=xt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=xe(),t=xe(),i=xe();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:_e(38017,{changeType:l})}})),new El(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=Fy()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class GA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Or(),this.Je=Wu(),this.He=Wu(),this.Ye=new nt(Ne)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(nf(l))if(i===0){const h=new de(l.path);this.et(t,h,zt.newNoDocument(h,Ee.min()))}else ze(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const f=this.ut(e),g=f?this.ct(f,e,h):1;if(g!==0){this.it(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=bi(i).toUint8Array()}catch(g){if(g instanceof Ov)return xo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Uf(h,o,l)}catch(g){return xo(g instanceof Wa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const f=this.ot(h);if(f){if(l.current&&nf(f.target)){const g=new de(f.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,zt.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let i=xe();this.He.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new jc(e,t,this.Ye,this.je,i);return this.je=Or(),this.Je=Wu(),this.He=Wu(),this.Ye=new nt(Ne),o}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Uy,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new vt(Ne),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new vt(Ne),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Uy),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Wu(){return new nt(de.comparator)}function Fy(){return new nt(de.comparator)}const KA={asc:"ASCENDING",desc:"DESCENDING"},QA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YA={and:"AND",or:"OR"};class XA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sf(r,e){return r.useProto3Json||bc(e)?e:{value:e}}function Ec(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dE(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function JA(r,e){return Ec(r,e.toTimestamp())}function or(r){return ze(!!r,49232),Ee.fromTimestamp((function(t){const i=Vi(t);return new Ye(i.seconds,i.nanos)})(r))}function Ff(r,e){return of(r,e).canonicalString()}function of(r,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function fE(r){const e=He.fromString(r);return ze(_E(e),10190,{key:e.toString()}),e}function af(r,e){return Ff(r.databaseId,e.path)}function Od(r,e){const t=fE(e);if(t.get(1)!==r.databaseId.projectId)throw new ne(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ne(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new de(mE(t))}function pE(r,e){return Ff(r.databaseId,e)}function ZA(r){const e=fE(r);return e.length===4?He.emptyPath():mE(e)}function lf(r){return new He(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function mE(r){return ze(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function zy(r,e,t){return{name:af(r,e),fields:t.value.mapValue.fields}}function eC(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_e(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,E){return y.useProto3Json?(ze(E===void 0||typeof E=="string",58123),xt.fromBase64String(E||"")):(ze(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),xt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(y){const E=y.code===void 0?W.UNKNOWN:uE(y.code);return new ne(E,y.message||"")})(h);t=new hE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Od(r,i.document.name),l=or(i.document.updateTime),h=i.document.createTime?or(i.document.createTime):Ee.min(),f=new Jt({mapValue:{fields:i.document.fields}}),g=zt.newFoundDocument(o,l,h,f),y=i.targetIds||[],E=i.removedTargetIds||[];t=new tc(y,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Od(r,i.document),l=i.readTime?or(i.readTime):Ee.min(),h=zt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new tc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Od(r,i.document),l=i.removedTargetIds||[];t=new tc([],l,o,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new $A(o,l),f=i.targetId;t=new cE(f,h)}}return t}function tC(r,e){let t;if(e instanceof vl)t={update:zy(r,e.key,e.value)};else if(e instanceof lE)t={delete:af(r,e.key)};else if(e instanceof ji)t={update:zy(r,e.key,e.data),updateMask:cC(e.fieldMask)};else{if(!(e instanceof zA))return _e(16599,{Vt:e.type});t={verify:af(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof ul)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof cl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof hl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof vc)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw _e(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:JA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(r,e.precondition)),t}function nC(r,e){return r&&r.length>0?(ze(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?or(o.updateTime):or(l);return h.isEqual(Ee.min())&&(h=or(l)),new MA(h,o.transformResults||[])})(t,e)))):[]}function rC(r,e){return{documents:[pE(r,e.path)]}}function iC(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=pE(r,o);const l=(function(y){if(y.length!==0)return yE(Ln.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((E=>(function(R){return{field:Eo(R.field),direction:aC(R.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=sf(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function sC(r){let e=ZA(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){ze(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(w){const R=gE(w);return R instanceof Ln&&Wv(R)?R.getFilters():[R]})(t.where));let h=[];t.orderBy&&(h=(function(w){return w.map((R=>(function(B){return new ll(wo(B.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(R)))})(t.orderBy));let f=null;t.limit&&(f=(function(w){let R;return R=typeof w=="object"?w.value:w,bc(R)?null:R})(t.limit));let g=null;t.startAt&&(g=(function(w){const R=!!w.before,b=w.values||[];return new yc(b,R)})(t.startAt));let y=null;return t.endAt&&(y=(function(w){const R=!w.before,b=w.values||[];return new yc(b,R)})(t.endAt)),IA(e,o,h,l,f,"F",g,y)}function oC(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gE(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=wo(t.unaryFilter.field);return pt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=wo(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=wo(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=wo(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return pt.create(wo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Ln.create(t.compositeFilter.filters.map((i=>gE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function aC(r){return KA[r]}function lC(r){return QA[r]}function uC(r){return YA[r]}function Eo(r){return{fieldPath:r.canonicalString()}}function wo(r){return Nt.fromServerFormat(r.fieldPath)}function yE(r){return r instanceof pt?(function(t){if(t.op==="=="){if(Cy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NAN"}};if(Ay(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Cy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NAN"}};if(Ay(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Eo(t.field),op:lC(t.op),value:t.value}}})(r):r instanceof Ln?(function(t){const i=t.getFilters().map((o=>yE(o)));return i.length===1?i[0]:{compositeFilter:{op:uC(t.op),filters:i}}})(r):_e(54877,{filter:r})}function cC(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function _E(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Si{constructor(e,t,i,o,l=Ee.min(),h=Ee.min(),f=xt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class hC{constructor(e){this.yt=e}}function dC(r){const e=sC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?_c(e,e.limit,"L"):e}/**
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
 */class fC{constructor(){this.Cn=new pC}addToCollectionParentIndex(e,t){return this.Cn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Di.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Di.min())}updateCollectionGroup(e,t,i){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class pC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(He.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(He.comparator)).toArray()}}/**
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
 */const jy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vE=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(vE,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */class Oo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Oo(0)}static cr(){return new Oo(-1)}}/**
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
 */const By="LruGarbageCollector",mC=1048576;function $y([r,e],[t,i]){const o=Ne(r,t);return o===0?Ne(e,i):o}class gC{constructor(e){this.Ir=e,this.buffer=new vt($y),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();$y(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){se(By,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qo(t)?se(By,"Ignoring IndexedDB error during garbage collection: ",t):await $o(t)}await this.Vr(3e5)}))}}class _C{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(Vc.ce);const i=new gC(t);return this.mr.forEachTarget(e,(o=>i.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>i.Ar(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(jy)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jy):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,o,l,h,f,g,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,h=Date.now(),this.nthSequenceNumber(e,o)))).next((w=>(i=w,f=Date.now(),this.removeTargets(e,i,t)))).next((w=>(l=w,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((w=>(y=Date.now(),_o()<=ke.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${w} documents in `+(y-g)+`ms
Total Duration: ${y-E}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:w}))))}}function vC(r,e){return new _C(r,e)}/**
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
 */class EC{constructor(){this.changes=new Cs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?H.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class TC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Ja(i.mutation,o,un.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,xe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=xe()){const o=ys();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=qa();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=ys();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,xe())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=Or();const h=Xa(),f=(function(){return Xa()})();return t.forEach(((g,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof ji)?l=l.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),Ja(E.mutation,y,E.mutation.getFieldMask(),Ye.now())):h.set(y.key,un.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((y,E)=>h.set(y,E))),t.forEach(((y,E)=>f.set(y,new wC(E,h.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=Xa();let o=new nt(((h,f)=>h-f)),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const y=t.get(g);if(y===null)return;let E=i.get(g)||un.empty();E=f.applyToLocalView(y,E),i.set(g,E);const w=(o.get(f.batchId)||xe()).add(g);o=o.insert(f.batchId,w)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),y=g.key,E=g.value,w=eE();E.forEach((R=>{if(!l.has(R)){const b=oE(t.get(R),i.get(R));b!==null&&w.set(R,b),l=l.add(R)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,w))}return H.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Qv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):H.resolve(ys());let f=il,g=l;return h.next((y=>H.forEach(y,((E,w)=>(f<w.largestBatchId&&(f=w.largestBatchId),l.get(E)?H.resolve():this.remoteDocumentCache.getEntry(e,E).next((R=>{g=g.insert(E,R)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,g,y,xe()))).next((E=>({batchId:f,changes:Zv(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((i=>{let o=qa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=qa();return this.indexManager.getCollectionParents(e,l).next((f=>H.forEach(f,(g=>{const y=(function(w,R){return new Wo(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((E=>{E.forEach(((w,R)=>{h=h.insert(w,R)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,zt.newInvalidDocument(E)))}));let f=qa();return h.forEach(((g,y)=>{const E=l.get(g);E!==void 0&&Ja(E.mutation,y,un.empty(),Ye.now()),Uc(t,y)&&(f=f.insert(g,y))})),f}))}}/**
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
 */class IC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return H.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:or(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:dC(o.bundledQuery),readTime:or(o.readTime)}})(t)),H.resolve()}}/**
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
 */class SC{constructor(){this.overlays=new nt(de.comparator),this.qr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ys();return H.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),H.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.qr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(i)),H.resolve()}getOverlaysForCollection(e,t,i){const o=ys(),l=t.length+1,h=new de(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new nt(((y,E)=>y-E));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=ys(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const f=ys(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,E)=>f.set(y,E))),!(f.size()>=o)););return H.resolve(f)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(i.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new BA(t,i));let l=this.qr.get(t);l===void 0&&(l=xe(),this.qr.set(t,l)),this.qr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class zf{constructor(){this.Qr=new vt(St.$r),this.Ur=new vt(St.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new St(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new St(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new de(new He([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.Ur.forEachInRange([i,o],(h=>{this.Gr(h),l.push(h.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new de(new He([])),i=new St(t,e),o=new St(t,e+1);let l=xe();return this.Ur.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new St(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return de.comparator(e.key,t.key)||Ne(e.Yr,t.Yr)}static Kr(e,t){return Ne(e.Yr,t.Yr)||de.comparator(e.key,t.key)}}/**
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
 */class AC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new vt(St.$r)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new jA(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Zr=this.Zr.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.ei(i),l=o<0?0:o;return H.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?xf:this.tr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,o],(h=>{const f=this.Xr(h.Yr);l.push(f)})),H.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(Ne);return t.forEach((o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,h],(f=>{i=i.add(f.Yr)}))})),H.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;de.isDocumentKey(l)||(l=l.child(""));const h=new St(new de(l),0);let f=new vt(Ne);return this.Zr.forEachWhile((g=>{const y=g.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(g.Yr)),!0)}),h),H.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((i=>{const o=this.Xr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return H.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new St(t,0),o=this.Zr.firstAfterOrEqual(i);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class CC{constructor(e){this.ri=e,this.docs=(function(){return new nt(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return H.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=Or();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),H.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Or();const h=t.path,f=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:y,value:{document:E}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||tA(eA(E),i)<=0||(o.has(E.key)||Uc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return H.resolve(l)}getAllFromCollectionGroup(e,t,i,o){_e(9500)}ii(e,t){return H.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new PC(this)}getSize(e){return H.resolve(this.size)}}class PC extends EC{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(i)})),H.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class kC{constructor(e){this.persistence=e,this.si=new Cs((t=>bf(t)),Of),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.oi=0,this._i=new zf,this.targetCount=0,this.ai=Oo.ur()}forEachTarget(e,t){return this.si.forEach(((i,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),H.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Oo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Pr(t),H.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.si.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.si.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),H.waitFor(l).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return H.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),H.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return H.resolve(i)}containsKey(e,t){return H.resolve(this._i.containsKey(t))}}/**
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
 */class EE{constructor(e,t){this.ui={},this.overlays={},this.ci=new Vc(0),this.li=!1,this.li=!0,this.hi=new RC,this.referenceDelegate=e(this),this.Pi=new kC(this),this.indexManager=new fC,this.remoteDocumentCache=(function(o){return new CC(o)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new hC(t),this.Ii=new IC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new SC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new AC(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){se("MemoryPersistence","Starting transaction:",e);const o=new NC(this.ci.next());return this.referenceDelegate.Ei(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ai(e,t){return H.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class NC extends rA{constructor(e){super(),this.currentSequenceNumber=e}}class jf{constructor(e){this.persistence=e,this.Ri=new zf,this.Vi=null}static mi(e){return new jf(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),H.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.fi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.fi,(i=>{const o=de.fromPath(i);return this.gi(e,o).next((l=>{l||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class wc{constructor(e,t){this.persistence=e,this.pi=new Cs((i=>oA(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=vC(this,t)}static mi(e,t){return new wc(e,t)}Ei(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return H.forEach(this.pi,((i,o)=>this.br(e,i,o).next((l=>l?H.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Ee.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),H.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ju(e.data.value)),t}br(e,t,i){return H.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return H.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=o}static As(e,t){let i=xe(),o=xe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Bf(e,t.fromCache,i,o)}}/**
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
 */class xC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class DC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return iI()?8:iA(jt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ys(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ws(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new xC;return this.Ss(e,t,h).next((f=>{if(l.result=f,this.Vs)return this.bs(e,t,h,f.size)}))})).next((()=>l.result))}bs(e,t,i,o){return i.documentReadCount<this.fs?(_o()<=ke.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),H.resolve()):(_o()<=ke.DEBUG&&se("QueryEngine","Query:",vo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.gs*o?(_o()<=ke.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sr(t))):H.resolve())}ys(e,t){if(xy(t))return H.resolve(null);let i=sr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=_c(t,null,"F"),i=sr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=xe(...l);return this.ps.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const y=this.Ds(t,f);return this.Cs(t,y,h,g.readTime)?this.ys(e,_c(t,null,"F")):this.vs(e,y,t,g)}))))})))))}ws(e,t,i,o){return xy(t)||o.isEqual(Ee.min())?H.resolve(null):this.ps.getDocuments(e,i).next((l=>{const h=this.Ds(t,l);return this.Cs(t,h,i,o)?H.resolve(null):(_o()<=ke.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),vo(t)),this.vs(e,h,t,ZR(o,il)).next((f=>f)))}))}Ds(e,t){let i=new vt(Xv(e));return t.forEach(((o,l)=>{Uc(e,l)&&(i=i.add(l))})),i}Cs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Ss(e,t,i){return _o()<=ke.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",vo(t)),this.ps.getDocumentsMatchingQuery(e,t,Di.min(),i)}vs(e,t,i,o){return this.ps.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const $f="LocalStore",VC=3e8;class bC{constructor(e,t,i,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new nt(Ne),this.xs=new Cs((l=>bf(l)),Of),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function OC(r,e,t,i){return new bC(r,e,t,i)}async function wE(r,e){const t=Te(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=xe();for(const y of o){h.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}for(const y of l){f.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(i,g).next((y=>({Ls:y,removedBatchIds:h,addedBatchIds:f})))}))}))}function LC(r,e){const t=Te(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,g,y,E){const w=y.batch,R=w.keys();let b=H.resolve();return R.forEach((B=>{b=b.next((()=>E.getEntry(g,B))).next(($=>{const F=y.docVersions.get(B);ze(F!==null,48541),$.version.compareTo(F)<0&&(w.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),E.addEntry($)))}))})),b.next((()=>f.mutationQueue.removeMutationBatch(g,w)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=xe();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(g=g.add(f.batch.mutations[y].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function TE(r){const e=Te(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function MC(r,e){const t=Te(r),i=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const f=[];e.targetChanges.forEach(((E,w)=>{const R=o.get(w);if(!R)return;f.push(t.Pi.removeMatchingKeys(l,E.removedDocuments,w).next((()=>t.Pi.addMatchingKeys(l,E.addedDocuments,w))));let b=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(w)!==null?b=b.withResumeToken(xt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):E.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(E.resumeToken,i)),o=o.insert(w,b),(function($,F,re){return $.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=VC?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(R,b,E)&&f.push(t.Pi.updateTargetData(l,b))}));let g=Or(),y=xe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(UC(l,h,e.documentUpdates).next((E=>{g=E.ks,y=E.qs}))),!i.isEqual(Ee.min())){const E=t.Pi.getLastRemoteSnapshotVersion(l).next((w=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(E)}return H.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,y))).next((()=>g))})).then((l=>(t.Ms=o,l)))}function UC(r,e,t){let i=xe(),o=xe();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let h=Or();return t.forEach(((f,g)=>{const y=l.get(f);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):se($f,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",g.version)})),{ks:h,qs:o}}))}function FC(r,e){const t=Te(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=xf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function zC(r,e){const t=Te(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Pi.getTargetData(i,e).next((l=>l?(o=l,H.resolve(o)):t.Pi.allocateTargetId(i).next((h=>(o=new Si(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Ms.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function uf(r,e,t){const i=Te(r),o=i.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!qo(h))throw h;se($f,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Ms=i.Ms.remove(e),i.xs.delete(o.target)}function qy(r,e,t){const i=Te(r);let o=Ee.min(),l=xe();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,y,E){const w=Te(g),R=w.xs.get(E);return R!==void 0?H.resolve(w.Ms.get(R)):w.Pi.getTargetData(y,E)})(i,h,sr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Fs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:xe()))).next((f=>(jC(i,RA(e),f),{documents:f,Qs:l})))))}function jC(r,e,t){let i=r.Os.get(e)||Ee.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.Os.set(e,i)}class Wy{constructor(){this.activeTargetIds=xA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BC{constructor(){this.Mo=new Wy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Wy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $C{Oo(e){}shutdown(){}}/**
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
 */const Hy="ConnectivityMonitor";class Gy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){se(Hy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){se(Hy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hu=null;function cf(){return Hu===null?Hu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hu++,"0x"+Hu.toString(16)}/**
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
 */const Ld="RestConnection",qC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class WC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${o}`,this.Wo=this.databaseId.database===mc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Go(e,t,i,o,l){const h=cf(),f=this.zo(e,t.toUriEncodedString());se(Ld,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,l);const{host:y}=new URL(f),E=Fo(y);return this.Jo(e,f,g,i,E).then((w=>(se(Ld,`Received RPC '${e}' ${h}: `,w),w)),(w=>{throw xo(Ld,`RPC '${e}' ${h} failed with error: `,w,"url: ",f,"request:",i),w}))}Ho(e,t,i,o,l,h){return this.Go(e,t,i,o,l)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}zo(e,t){const i=qC[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
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
 */class HC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ut="WebChannelConnection";class GC extends WC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,o,l){const h=cf();return new Promise(((f,g)=>{const y=new Sv;y.setWithCredentials(!0),y.listenOnce(Rv.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Xu.NO_ERROR:const w=y.getResponseJson();se(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(w)),f(w);break;case Xu.TIMEOUT:se(Ut,`RPC '${e}' ${h} timed out`),g(new ne(W.DEADLINE_EXCEEDED,"Request time out"));break;case Xu.HTTP_ERROR:const R=y.getStatus();if(se(Ut,`RPC '${e}' ${h} failed with status:`,R,"response text:",y.getResponseText()),R>0){let b=y.getResponseJson();Array.isArray(b)&&(b=b[0]);const B=b?.error;if(B&&B.status&&B.message){const $=(function(re){const te=re.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(te)>=0?te:W.UNKNOWN})(B.status);g(new ne($,B.message))}else g(new ne(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ne(W.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{se(Ut,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);se(Ut,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",E,i,15)}))}T_(e,t,i){const o=cf(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Pv(),f=Cv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const E=l.join("");se(Ut,`Creating RPC '${e}' stream ${o}: ${E}`,g);const w=h.createWebChannel(E,g);this.I_(w);let R=!1,b=!1;const B=new HC({Yo:F=>{b?se(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,F):(R||(se(Ut,`Opening RPC '${e}' stream ${o} transport.`),w.open(),R=!0),se(Ut,`RPC '${e}' stream ${o} sending:`,F),w.send(F))},Zo:()=>w.close()}),$=(F,re,te)=>{F.listen(re,(oe=>{try{te(oe)}catch(fe){setTimeout((()=>{throw fe}),0)}}))};return $(w,$a.EventType.OPEN,(()=>{b||(se(Ut,`RPC '${e}' stream ${o} transport opened.`),B.o_())})),$(w,$a.EventType.CLOSE,(()=>{b||(b=!0,se(Ut,`RPC '${e}' stream ${o} transport closed`),B.a_(),this.E_(w))})),$(w,$a.EventType.ERROR,(F=>{b||(b=!0,xo(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,F.name,"Message:",F.message),B.a_(new ne(W.UNAVAILABLE,"The operation could not be completed")))})),$(w,$a.EventType.MESSAGE,(F=>{if(!b){const re=F.data[0];ze(!!re,16349);const te=re,oe=te?.error||te[0]?.error;if(oe){se(Ut,`RPC '${e}' stream ${o} received error:`,oe);const fe=oe.status;let De=(function(S){const C=ft[S];if(C!==void 0)return uE(C)})(fe),Re=oe.message;De===void 0&&(De=W.INTERNAL,Re="Unknown error status: "+fe+" with message "+oe.message),b=!0,B.a_(new ne(De,Re)),w.close()}else se(Ut,`RPC '${e}' stream ${o} received:`,re),B.u_(re)}})),$(f,Av.STAT_EVENT,(F=>{F.stat===Xd.PROXY?se(Ut,`RPC '${e}' stream ${o} detected buffering proxy`):F.stat===Xd.NOPROXY&&se(Ut,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{B.__()}),0),B}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Md(){return typeof document<"u"?document:null}/**
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
 */function Bc(r){return new XA(r,!0)}/**
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
 */class IE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=o,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ky="PersistentStream";class SE{constructor(e,t,i,o,l,h,f,g){this.Mi=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new IE(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(br(t.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new ne(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return se(Ky,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(se(Ky,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class KC extends SE{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=eC(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?or(h.readTime):Ee.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=lf(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=nf(g)?{documents:rC(l,g)}:{query:iC(l,g).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=dE(l,h.resumeToken);const y=sf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Ee.min())>0){f.readTime=Ec(l,h.snapshotVersion.toTimestamp());const y=sf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=oC(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=lf(this.serializer),t.removeTarget=e,this.q_(t)}}class QC extends SE{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=nC(e.writeResults,e.commitTime),i=or(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=lf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>tC(this.serializer,i)))};this.q_(t)}}/**
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
 */class YC{}class XC extends YC{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ne(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Go(e,of(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ne(W.UNKNOWN,l.toString())}))}Ho(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Ho(e,of(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ne(W.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class JC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(br(t),this.aa=!1):se("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ss="RemoteStore";class ZC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((h=>{i.enqueueAndForget((async()=>{Ps(this)&&(se(Ss,"Restarting streams for network reachability change."),await(async function(g){const y=Te(g);y.Ea.add(4),await wl(y),y.Ra.set("Unknown"),y.Ea.delete(4),await $c(y)})(this))}))})),this.Ra=new JC(i,o)}}async function $c(r){if(Ps(r))for(const e of r.da)await e(!0)}async function wl(r){for(const e of r.da)await e(!1)}function RE(r,e){const t=Te(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Gf(t)?Hf(t):Ho(t).O_()&&Wf(t,e))}function qf(r,e){const t=Te(r),i=Ho(t);t.Ia.delete(e),i.O_()&&AE(t,e),t.Ia.size===0&&(i.O_()?i.L_():Ps(t)&&t.Ra.set("Unknown"))}function Wf(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ho(r).Y_(e)}function AE(r,e){r.Va.Ue(e),Ho(r).Z_(e)}function Hf(r){r.Va=new GA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Ho(r).start(),r.Ra.ua()}function Gf(r){return Ps(r)&&!Ho(r).x_()&&r.Ia.size>0}function Ps(r){return Te(r).Ea.size===0}function CE(r){r.Va=void 0}async function eP(r){r.Ra.set("Online")}async function tP(r){r.Ia.forEach(((e,t)=>{Wf(r,e)}))}async function nP(r,e){CE(r),Gf(r)?(r.Ra.ha(e),Hf(r)):r.Ra.set("Unknown")}async function rP(r,e,t){if(r.Ra.set("Online"),e instanceof hE&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ia.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ia.delete(f),o.Va.removeTarget(f))})(r,e)}catch(i){se(Ss,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Tc(r,i)}else if(e instanceof tc?r.Va.Ze(e):e instanceof cE?r.Va.st(e):r.Va.tt(e),!t.isEqual(Ee.min()))try{const i=await TE(r.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Va.Tt(h);return f.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ia.get(y);E&&l.Ia.set(y,E.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,y)=>{const E=l.Ia.get(g);if(!E)return;l.Ia.set(g,E.withResumeToken(xt.EMPTY_BYTE_STRING,E.snapshotVersion)),AE(l,g);const w=new Si(E.target,g,y,E.sequenceNumber);Wf(l,w)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){se(Ss,"Failed to raise snapshot:",i),await Tc(r,i)}}async function Tc(r,e,t){if(!qo(e))throw e;r.Ea.add(1),await wl(r),r.Ra.set("Offline"),t||(t=()=>TE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{se(Ss,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await $c(r)}))}function PE(r,e){return e().catch((t=>Tc(r,t,e)))}async function qc(r){const e=Te(r),t=Li(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:xf;for(;iP(e);)try{const o=await FC(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,sP(e,o)}catch(o){await Tc(e,o)}kE(e)&&NE(e)}function iP(r){return Ps(r)&&r.Ta.length<10}function sP(r,e){r.Ta.push(e);const t=Li(r);t.O_()&&t.X_&&t.ea(e.mutations)}function kE(r){return Ps(r)&&!Li(r).x_()&&r.Ta.length>0}function NE(r){Li(r).start()}async function oP(r){Li(r).ra()}async function aP(r){const e=Li(r);for(const t of r.Ta)e.ea(t.mutations)}async function lP(r,e,t){const i=r.Ta.shift(),o=Mf.from(i,e,t);await PE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await qc(r)}async function uP(r,e){e&&Li(r).X_&&await(async function(i,o){if((function(h){return qA(h)&&h!==W.ABORTED})(o.code)){const l=i.Ta.shift();Li(i).B_(),await PE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await qc(i)}})(r,e),kE(r)&&NE(r)}async function Qy(r,e){const t=Te(r);t.asyncQueue.verifyOperationInProgress(),se(Ss,"RemoteStore received new credentials");const i=Ps(t);t.Ea.add(3),await wl(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await $c(t)}async function cP(r,e){const t=Te(r);e?(t.Ea.delete(2),await $c(t)):e||(t.Ea.add(2),await wl(t),t.Ra.set("Unknown"))}function Ho(r){return r.ma||(r.ma=(function(t,i,o){const l=Te(t);return l.sa(),new KC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:eP.bind(null,r),t_:tP.bind(null,r),r_:nP.bind(null,r),H_:rP.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Gf(r)?Hf(r):r.Ra.set("Unknown")):(await r.ma.stop(),CE(r))}))),r.ma}function Li(r){return r.fa||(r.fa=(function(t,i,o){const l=Te(t);return l.sa(),new QC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:oP.bind(null,r),r_:uP.bind(null,r),ta:aP.bind(null,r),na:lP.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await qc(r)):(await r.fa.stop(),r.Ta.length>0&&(se(Ss,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Kf{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Kf(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qf(r,e){if(br("AsyncQueue",`${e}: ${r}`),qo(r))return new ne(W.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Co{static emptySet(e){return new Co(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||de.comparator(t.key,i.key):(t,i)=>de.comparator(t.key,i.key),this.keyedMap=qa(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Co)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Co;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Yy{constructor(){this.ga=new nt(de.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Lo{constructor(e,t,i,o,l,h,f,g,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Lo(e,t,Co.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class hP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class dP{constructor(){this.queries=Xy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=Xy(),l.forEach(((h,f)=>{for(const g of f.Sa)g.onError(i)}))})(this,new ne(W.ABORTED,"Firestore shutting down"))}}function Xy(){return new Cs((r=>Yv(r)),Mc)}async function xE(r,e){const t=Te(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new hP,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Qf(h,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Yf(t)}async function DE(r,e){const t=Te(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function fP(r,e){const t=Te(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.Sa)f.Fa(o)&&(i=!0);h.wa=o}}i&&Yf(t)}function pP(r,e,t){const i=Te(r),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function Yf(r){r.Ca.forEach((e=>{e.next()}))}var hf,Jy;(Jy=hf||(hf={})).Ma="default",Jy.Cache="cache";class VE{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Lo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==hf.Cache}}/**
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
 */class bE{constructor(e){this.key=e}}class OE{constructor(e){this.key=e}}class mP{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=xe(),this.mutatedKeys=xe(),this.eu=Xv(e),this.tu=new Co(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new Yy,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,w)=>{const R=o.get(E),b=Uc(this.query,w)?w:null,B=!!R&&this.mutatedKeys.has(R.key),$=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let F=!1;R&&b?R.data.isEqual(b.data)?B!==$&&(i.track({type:3,doc:b}),F=!0):this.su(R,b)||(i.track({type:2,doc:b}),F=!0,(g&&this.eu(b,g)>0||y&&this.eu(b,y)<0)&&(f=!0)):!R&&b?(i.track({type:0,doc:b}),F=!0):R&&!b&&(i.track({type:1,doc:R}),F=!0,(g||y)&&(f=!0)),F&&(b?(h=h.add(b),l=$?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{tu:h,iu:i,Cs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,w)=>(function(b,B){const $=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:F})}};return $(b)-$(B)})(E.type,w.type)||this.eu(E.doc,w.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,y=g!==this.Za;return this.Za=g,h.length!==0||y?{snapshot:new Lo(this.query,e.tu,l,h,e.mutatedKeys,g===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Yy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=xe(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new OE(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new bE(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=xe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Lo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Xf="SyncEngine";class gP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class yP{constructor(e){this.key=e,this.hu=!1}}class _P{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Cs((f=>Yv(f)),Mc),this.Iu=new Map,this.Eu=new Set,this.du=new nt(de.comparator),this.Au=new Map,this.Ru=new zf,this.Vu={},this.mu=new Map,this.fu=Oo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vP(r,e,t=!0){const i=jE(r);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await LE(i,e,t,!0),o}async function EP(r,e){const t=jE(r);await LE(t,e,!0,!1)}async function LE(r,e,t,i){const o=await zC(r.localStore,sr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await wP(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&RE(r.remoteStore,o),f}async function wP(r,e,t,i,o){r.pu=(w,R,b)=>(async function($,F,re,te){let oe=F.view.ru(re);oe.Cs&&(oe=await qy($.localStore,F.query,!1).then((({documents:k})=>F.view.ru(k,oe))));const fe=te&&te.targetChanges.get(F.targetId),De=te&&te.targetMismatches.get(F.targetId)!=null,Re=F.view.applyChanges(oe,$.isPrimaryClient,fe,De);return e_($,F.targetId,Re.au),Re.snapshot})(r,w,R,b);const l=await qy(r.localStore,e,!0),h=new mP(e,l.Qs),f=h.ru(l.documents),g=El.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),y=h.applyChanges(f,r.isPrimaryClient,g);e_(r,t,y.au);const E=new gP(e,t,h);return r.Tu.set(e,E),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),y.snapshot}async function TP(r,e,t){const i=Te(r),o=i.Tu.get(e),l=i.Iu.get(o.targetId);if(l.length>1)return i.Iu.set(o.targetId,l.filter((h=>!Mc(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await uf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&qf(i.remoteStore,o.targetId),df(i,o.targetId)})).catch($o)):(df(i,o.targetId),await uf(i.localStore,o.targetId,!0))}async function IP(r,e){const t=Te(r),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),qf(t.remoteStore,i.targetId))}async function SP(r,e,t){const i=xP(r);try{const o=await(function(h,f){const g=Te(h),y=Ye.now(),E=f.reduce(((b,B)=>b.add(B.key)),xe());let w,R;return g.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let B=Or(),$=xe();return g.Ns.getEntries(b,E).next((F=>{B=F,B.forEach(((re,te)=>{te.isValidDocument()||($=$.add(re))}))})).next((()=>g.localDocuments.getOverlayedDocuments(b,B))).next((F=>{w=F;const re=[];for(const te of f){const oe=FA(te,w.get(te.key).overlayedDocument);oe!=null&&re.push(new ji(te.key,oe,Bv(oe.value.mapValue),bn.exists(!0)))}return g.mutationQueue.addMutationBatch(b,y,re,f)})).next((F=>{R=F;const re=F.applyToLocalDocumentSet(w,$);return g.documentOverlayCache.saveOverlays(b,F.batchId,re)}))})).then((()=>({batchId:R.batchId,changes:Zv(w)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let y=h.Vu[h.currentUser.toKey()];y||(y=new nt(Ne)),y=y.insert(f,g),h.Vu[h.currentUser.toKey()]=y})(i,o.batchId,t),await Tl(i,o.changes),await qc(i.remoteStore)}catch(o){const l=Qf(o,"Failed to persist write");t.reject(l)}}async function ME(r,e){const t=Te(r);try{const i=await MC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))})),await Tl(t,i,e)}catch(i){await $o(i)}}function Zy(r,e,t){const i=Te(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Te(h);g.onlineState=f;let y=!1;g.queries.forEach(((E,w)=>{for(const R of w.Sa)R.va(f)&&(y=!0)})),y&&Yf(g)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function RP(r,e,t){const i=Te(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let h=new nt(de.comparator);h=h.insert(l,zt.newNoDocument(l,Ee.min()));const f=xe().add(l),g=new jc(Ee.min(),new Map,new nt(Ne),h,f);await ME(i,g),i.du=i.du.remove(l),i.Au.delete(e),Jf(i)}else await uf(i.localStore,e,!1).then((()=>df(i,e,t))).catch($o)}async function AP(r,e){const t=Te(r),i=e.batch.batchId;try{const o=await LC(t.localStore,e);FE(t,i,null),UE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Tl(t,o)}catch(o){await $o(o)}}async function CP(r,e,t){const i=Te(r);try{const o=await(function(h,f){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let E;return g.mutationQueue.lookupMutationBatch(y,f).next((w=>(ze(w!==null,37113),E=w.keys(),g.mutationQueue.removeMutationBatch(y,w)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,E,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E))).next((()=>g.localDocuments.getDocuments(y,E)))}))})(i.localStore,e);FE(i,e,t),UE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Tl(i,o)}catch(o){await $o(o)}}function UE(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function FE(r,e,t){const i=Te(r);let o=i.Vu[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Vu[i.currentUser.toKey()]=o}}function df(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Iu.get(e))r.Tu.delete(i),t&&r.Pu.yu(i,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((i=>{r.Ru.containsKey(i)||zE(r,i)}))}function zE(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(qf(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Jf(r))}function e_(r,e,t){for(const i of t)i instanceof bE?(r.Ru.addReference(i.key,e),PP(r,i)):i instanceof OE?(se(Xf,"Document no longer in limbo: "+i.key),r.Ru.removeReference(i.key,e),r.Ru.containsKey(i.key)||zE(r,i.key)):_e(19791,{wu:i})}function PP(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Eu.has(i)||(se(Xf,"New document in limbo: "+t),r.Eu.add(i),Jf(r))}function Jf(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new de(He.fromString(e)),i=r.fu.next();r.Au.set(i,new yP(t)),r.du=r.du.insert(t,i),RE(r.remoteStore,new Si(sr(Lc(t.path)),i,"TargetPurposeLimboResolution",Vc.ce))}}async function Tl(r,e,t){const i=Te(r),o=[],l=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,g)=>{h.push(i.pu(g,e,t).then((y=>{if((y||t)&&i.isPrimaryClient){const E=y?!y.fromCache:t?.targetChanges.get(g.targetId)?.current;i.sharedClientState.updateQueryState(g.targetId,E?"current":"not-current")}if(y){o.push(y);const E=Bf.As(g.targetId,y);l.push(E)}})))})),await Promise.all(h),i.Pu.H_(o),await(async function(g,y){const E=Te(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>H.forEach(y,(R=>H.forEach(R.Es,(b=>E.persistence.referenceDelegate.addReference(w,R.targetId,b))).next((()=>H.forEach(R.ds,(b=>E.persistence.referenceDelegate.removeReference(w,R.targetId,b)))))))))}catch(w){if(!qo(w))throw w;se($f,"Failed to update sequence numbers: "+w)}for(const w of y){const R=w.targetId;if(!w.fromCache){const b=E.Ms.get(R),B=b.snapshotVersion,$=b.withLastLimboFreeSnapshotVersion(B);E.Ms=E.Ms.insert(R,$)}}})(i.localStore,l))}async function kP(r,e){const t=Te(r);if(!t.currentUser.isEqual(e)){se(Xf,"User change. New user:",e.toKey());const i=await wE(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((f=>{f.forEach((g=>{g.reject(new ne(W.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Tl(t,i.Ls)}}function NP(r,e){const t=Te(r),i=t.Au.get(e);if(i&&i.hu)return xe().add(i.key);{let o=xe();const l=t.Iu.get(e);if(!l)return o;for(const h of l){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function jE(r){const e=Te(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=ME.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RP.bind(null,e),e.Pu.H_=fP.bind(null,e.eventManager),e.Pu.yu=pP.bind(null,e.eventManager),e}function xP(r){const e=Te(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CP.bind(null,e),e}class Ic{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return OC(this.persistence,new DC,e.initialUser,this.serializer)}Cu(e){return new EE(jf.mi,this.serializer)}Du(e){return new BC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ic.provider={build:()=>new Ic};class DP extends Ic{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof wc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new yC(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new EE((i=>wc.mi(i,t)),this.serializer)}}class ff{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Zy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=kP.bind(null,this.syncEngine),await cP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new dP})()}createDatastore(e){const t=Bc(e.databaseInfo.databaseId),i=(function(l){return new GC(l)})(e.databaseInfo);return(function(l,h,f,g){return new XC(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new ZC(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Zy(this.syncEngine,t,0)),(function(){return Gy.v()?new Gy:new $C})())}createSyncEngine(e,t){return(function(o,l,h,f,g,y,E){const w=new _P(o,l,h,f,g,y);return E&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const i=Te(t);se(Ss,"RemoteStore shutting down."),i.Ea.add(5),await wl(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ff.provider={build:()=>new ff};/**
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
 */class BE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Mi="FirestoreClient";class VP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=Nf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{se(Mi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(se(Mi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Qf(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Ud(r,e){r.asyncQueue.verifyOperationInProgress(),se(Mi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await wE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function t_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await bP(r);se(Mi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>Qy(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>Qy(e.remoteStore,o))),r._onlineComponents=e}async function bP(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se(Mi,"Using user provided OfflineComponentProvider");try{await Ud(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;xo("Error using user provided cache. Falling back to memory cache: "+t),await Ud(r,new Ic)}}else se(Mi,"Using default OfflineComponentProvider"),await Ud(r,new DP(void 0));return r._offlineComponents}async function $E(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se(Mi,"Using user provided OnlineComponentProvider"),await t_(r,r._uninitializedComponentsProvider._online)):(se(Mi,"Using default OnlineComponentProvider"),await t_(r,new ff))),r._onlineComponents}function OP(r){return $E(r).then((e=>e.syncEngine))}async function pf(r){const e=await $E(r),t=e.eventManager;return t.onListen=vP.bind(null,e.syncEngine),t.onUnlisten=TP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=EP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=IP.bind(null,e.syncEngine),t}function LP(r,e,t={}){const i=new Ni;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,y){const E=new BE({next:R=>{E.Nu(),h.enqueueAndForget((()=>DE(l,w)));const b=R.docs.has(f);!b&&R.fromCache?y.reject(new ne(W.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&R.fromCache&&g&&g.source==="server"?y.reject(new ne(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(R)},error:R=>y.reject(R)}),w=new VE(Lc(f.path),E,{includeMetadataChanges:!0,qa:!0});return xE(l,w)})(await pf(r),r.asyncQueue,e,t,i))),i.promise}/**
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
 */function qE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const n_=new Map;/**
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
 */const WE="firestore.googleapis.com",r_=!0;class i_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=WE,this.ssl=r_}else this.host=e.host,this.ssl=e.ssl??r_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mC)throw new ne(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qE(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new BR;switch(i.type){case"firstParty":return new HR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ne(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=n_.get(t);i&&(se("ComponentProvider","Removing Datastore"),n_.delete(t),i.terminate())})(this),Promise.resolve()}}function MP(r,e,t,i={}){r=Vn(r,Wc);const o=Fo(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},f=`${e}:${t}`;o&&(V_(`https://${f}`),b_("Firestore",!0)),l.host!==WE&&l.host!==f&&xo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:f,ssl:o,emulatorOptions:i};if(!vs(g,h)&&(r._setSettings(g),i.mockUserToken)){let y,E;if(typeof i.mockUserToken=="string")y=i.mockUserToken,E=Ft.MOCK_USER;else{y=QT(i.mockUserToken,r._app?.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new ne(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Ft(w)}r._authCredentials=new $R(new Nv(y,E))}}/**
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
 */class Bi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Bi(this.firestore,e,this._query)}}class st{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(_l(t,st._jsonSchema))return new st(e,i||null,new de(He.fromString(t.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:mt("string",st._jsonSchemaVersion),referencePath:mt("string")};class xi extends Bi{constructor(e,t,i){super(e,t,Lc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new de(e))}withConverter(e){return new xi(this.firestore,e,this._path)}}function Zf(r,e,...t){if(r=gt(r),xv("collection","path",e),r instanceof Wc){const i=He.fromString(e,...t);return yy(i),new xi(r,null,i)}{if(!(r instanceof st||r instanceof xi))throw new ne(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(He.fromString(e,...t));return yy(i),new xi(r.firestore,null,i)}}function Lr(r,e,...t){if(r=gt(r),arguments.length===1&&(e=Nf.newId()),xv("doc","path",e),r instanceof Wc){const i=He.fromString(e,...t);return gy(i),new st(r,null,new de(i))}{if(!(r instanceof st||r instanceof xi))throw new ne(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(He.fromString(e,...t));return gy(i),new st(r.firestore,r instanceof xi?r.converter:null,new de(i))}}/**
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
 */const s_="AsyncQueue";class o_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new IE(this,"async_queue_retry"),this._c=()=>{const i=Md();i&&se(s_,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Md();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Md();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ni;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!qo(e))throw e;se(s_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,br("INTERNAL UNHANDLED ERROR: ",a_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Kf.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:a_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function a_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function l_(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class Rs extends Wc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new o_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new o_(e),this._firestoreClient=void 0,await e}}}function UP(r,e){const t=typeof r=="object"?r:U_(),i=typeof r=="string"?r:mc,o=Ef(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=GT("firestore");l&&MP(o,...l)}return o}function ep(r){if(r._terminated)throw new ne(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||FP(r),r._firestoreClient}function FP(r){const e=r._freezeSettings(),t=(function(o,l,h,f){return new uA(o,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,qE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new VP(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(o){const l=o?._online.build();return{_offline:o?._offline.build(l),_online:l}})(r._componentsProvider))}/**
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
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(xt.fromBase64String(e))}catch(t){throw new ne(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_l(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:mt("string",vn._jsonSchemaVersion),bytes:mt("string")};/**
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
 */class Hc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Gc{constructor(e){this._methodName=e}}/**
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
 */class ar{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ar._jsonSchemaVersion}}static fromJSON(e){if(_l(e,ar._jsonSchema))return new ar(e.latitude,e.longitude)}}ar._jsonSchemaVersion="firestore/geoPoint/1.0",ar._jsonSchema={type:mt("string",ar._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:lr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_l(e,lr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new lr(e.vectorValues);throw new ne(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}lr._jsonSchemaVersion="firestore/vectorValue/1.0",lr._jsonSchema={type:mt("string",lr._jsonSchemaVersion),vectorValues:mt("object")};/**
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
 */const zP=/^__.*__$/;class jP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,t,this.fieldTransforms):new vl(e,this.data,t,this.fieldTransforms)}}class HE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new ji(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function GE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:r})}}class tp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new tp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Sc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(GE(this.Ac)&&zP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class BP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Bc(e)}Cc(e,t,i,o=!1){return new tp({Ac:e,methodName:t,Dc:i,path:Nt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kc(r){const e=r._freezeSettings(),t=Bc(r._databaseId);return new BP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function KE(r,e,t,i,o,l={}){const h=r.Cc(l.merge||l.mergeFields?2:0,e,t,o);rp("Data must be an object, but it was:",h,i);const f=QE(i,h);let g,y;if(l.merge)g=new un(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const w of l.mergeFields){const R=mf(e,w,t);if(!h.contains(R))throw new ne(W.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);XE(E,R)||E.push(R)}g=new un(E),y=h.fieldTransforms.filter((w=>g.covers(w.field)))}else g=null,y=h.fieldTransforms;return new jP(new Jt(f),g,y)}class Qc extends Gc{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qc}}class np extends Gc{_toFieldTransform(e){return new OA(e.path,new ul)}isEqual(e){return e instanceof np}}function $P(r,e,t,i){const o=r.Cc(1,e,t);rp("Data must be an object, but it was:",o,i);const l=[],h=Jt.empty();zi(i,((g,y)=>{const E=ip(e,g,t);y=gt(y);const w=o.yc(E);if(y instanceof Qc)l.push(E);else{const R=Il(y,w);R!=null&&(l.push(E),h.set(E,R))}}));const f=new un(l);return new HE(h,f,o.fieldTransforms)}function qP(r,e,t,i,o,l){const h=r.Cc(1,e,t),f=[mf(e,i,t)],g=[o];if(l.length%2!=0)throw new ne(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<l.length;R+=2)f.push(mf(e,l[R])),g.push(l[R+1]);const y=[],E=Jt.empty();for(let R=f.length-1;R>=0;--R)if(!XE(y,f[R])){const b=f[R];let B=g[R];B=gt(B);const $=h.yc(b);if(B instanceof Qc)y.push(b);else{const F=Il(B,$);F!=null&&(y.push(b),E.set(b,F))}}const w=new un(y);return new HE(E,w,h.fieldTransforms)}function WP(r,e,t,i=!1){return Il(t,r.Cc(i?4:3,e))}function Il(r,e){if(YE(r=gt(r)))return rp("Unsupported field value:",e,r),QE(r,e);if(r instanceof Gc)return(function(i,o){if(!GE(o.Ac))throw o.Sc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=Il(f,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(i,o){if((i=gt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return DA(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ye.fromDate(i);return{timestampValue:Ec(o.serializer,l)}}if(i instanceof Ye){const l=new Ye(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ec(o.serializer,l)}}if(i instanceof ar)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof vn)return{bytesValue:dE(o.serializer,i._byteString)};if(i instanceof st){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Ff(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof lr)return(function(h,f){return{mapValue:{fields:{[zv]:{stringValue:jv},[gc]:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw f.Sc("VectorValues must only contain numeric values.");return Lf(f.serializer,y)}))}}}}}})(i,o);throw o.Sc(`Unsupported field value: ${Dc(i)}`)})(r,e)}function QE(r,e){const t={};return bv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zi(r,((i,o)=>{const l=Il(o,e.mc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function YE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ye||r instanceof ar||r instanceof vn||r instanceof st||r instanceof Gc||r instanceof lr)}function rp(r,e,t){if(!YE(t)||!Dv(t)){const i=Dc(t);throw i==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+i)}}function mf(r,e,t){if((e=gt(e))instanceof Hc)return e._internalPath;if(typeof e=="string")return ip(r,e);throw Sc("Field path arguments must be of type string or ",r,!1,void 0,t)}const HP=new RegExp("[~\\*/\\[\\]]");function ip(r,e,t){if(e.search(HP)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Hc(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Sc(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new ne(W.INVALID_ARGUMENT,f+r+g)}function XE(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class JE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class GP extends JE{data(){return super.data()}}function Yc(r,e){return typeof e=="string"?ip(r,e):e instanceof Hc?e._internalPath:e._delegate._internalPath}/**
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
 */function KP(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ne(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sp{}class op extends sp{}function ZE(r,e,...t){let i=[];e instanceof sp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof ap)).length,f=l.filter((g=>g instanceof Xc)).length;if(h>1||h>0&&f>0)throw new ne(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class Xc extends op{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Xc(e,t,i)}_apply(e){const t=this._parse(e);return nw(e._query,t),new Bi(e.firestore,e.converter,rf(e._query,t))}_parse(e){const t=Kc(e.firestore);return(function(l,h,f,g,y,E,w){let R;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ne(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){c_(w,E);const B=[];for(const $ of w)B.push(u_(g,l,$));R={arrayValue:{values:B}}}else R=u_(g,l,w)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||c_(w,E),R=WP(f,h,w,E==="in"||E==="not-in");return pt.create(y,E,R)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ew(r,e,t){const i=e,o=Yc("where",r);return Xc._create(o,i,t)}class ap extends sp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ap(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Ln.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)nw(h,g),h=rf(h,g)})(e._query,t),new Bi(e.firestore,e.converter,rf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lp extends op{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ne(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ne(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ll(l,h)})(e._query,this._field,this._direction);return new Bi(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Wo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function tw(r,e="asc"){const t=e,i=Yc("orderBy",r);return lp._create(i,t)}class up extends op{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new up(e,t,i)}_apply(e){return new Bi(e.firestore,e.converter,_c(e._query,this._limit,this._limitType))}}function QP(r){return up._create("limit",r,"F")}function u_(r,e,t){if(typeof(t=gt(t))=="string"){if(t==="")throw new ne(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qv(e)&&t.indexOf("/")!==-1)throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(He.fromString(t));if(!de.isDocumentKey(i))throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Ry(r,new de(i))}if(t instanceof st)return Ry(r,t._key);throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dc(t)}.`)}function c_(r,e){if(!Array.isArray(r)||r.length===0)throw new ne(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function nw(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ne(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class YP{convertValue(e,t="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return zi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){const t=e.fields?.[gc].arrayValue?.values?.map((i=>ut(i.doubleValue)));return new lr(t)}convertGeoPoint(e){return new ar(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Oc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const t=Vi(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=He.fromString(e);ze(_E(i),9688,{name:e});const o=new ol(i.get(1),i.get(3)),l=new de(i.popFirst(5));return o.isEqual(t)||br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function rw(r,e,t){let i;return i=r?r.toFirestore(e):e,i}class Ha{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _s extends JE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new nc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Yc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_s._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_s._jsonSchemaVersion="firestore/documentSnapshot/1.0",_s._jsonSchema={type:mt("string",_s._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class nc extends _s{data(e={}){return super.data(e)}}class Po{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ha(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new nc(this._firestore,this._userDataWriter,i.key,i,new Ha(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new nc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ha(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new nc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ha(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:XP(f.type),doc:g,oldIndex:y,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Po._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Nf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XP(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
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
 */function Jc(r){r=Vn(r,st);const e=Vn(r.firestore,Rs);return LP(ep(e),r._key).then((t=>ow(e,r,t)))}Po._jsonSchemaVersion="firestore/querySnapshot/1.0",Po._jsonSchema={type:mt("string",Po._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class iw extends YP{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}function JP(r,e,t){r=Vn(r,st);const i=Vn(r.firestore,Rs),o=rw(r.converter,e);return hp(i,[KE(Kc(i),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,bn.none())])}function sw(r,e,t,...i){r=Vn(r,st);const o=Vn(r.firestore,Rs),l=Kc(o);let h;return h=typeof(e=gt(e))=="string"||e instanceof Hc?qP(l,"updateDoc",r._key,e,t,i):$P(l,"updateDoc",r._key,e),hp(o,[h.toMutation(r._key,bn.exists(!0))])}function ZP(r,e){const t=Vn(r.firestore,Rs),i=Lr(r),o=rw(r.converter,e);return hp(t,[KE(Kc(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,bn.exists(!1))]).then((()=>i))}function cp(r,...e){r=gt(r);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||l_(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(l_(e[i])){const g=e[i];e[i]=g.next?.bind(g),e[i+1]=g.error?.bind(g),e[i+2]=g.complete?.bind(g)}let l,h,f;if(r instanceof st)h=Vn(r.firestore,Rs),f=Lc(r._key.path),l={next:g=>{e[i]&&e[i](ow(h,r,g))},error:e[i+1],complete:e[i+2]};else{const g=Vn(r,Bi);h=Vn(g.firestore,Rs),f=g._query;const y=new iw(h);l={next:E=>{e[i]&&e[i](new Po(h,y,g,E))},error:e[i+1],complete:e[i+2]},KP(r._query)}return(function(y,E,w,R){const b=new BE(R),B=new VE(E,b,w);return y.asyncQueue.enqueueAndForget((async()=>xE(await pf(y),B))),()=>{b.Nu(),y.asyncQueue.enqueueAndForget((async()=>DE(await pf(y),B)))}})(ep(h),f,o,l)}function hp(r,e){return(function(i,o){const l=new Ni;return i.asyncQueue.enqueueAndForget((async()=>SP(await OP(i),o,l))),l.promise})(ep(r),e)}function ow(r,e,t){const i=t.docs.get(e._key),o=new iw(r);return new _s(r,o,e._key,i,new Ha(t.hasPendingWrites,t.fromCache),e.converter)}function ek(){return new np("serverTimestamp")}(function(e,t=!0){(function(o){Bo=o})(zo),No(new Es("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Rs(new qR(i.getProvider("auth-internal")),new GR(h,i.getProvider("app-check-internal")),(function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ne(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ol(y.options.projectId,E)})(h,o),h);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Pi(dy,fy,e),Pi(dy,fy,"esm2020")})();const tk={apiKey:"AIzaSyCoB8FqB0CxRIwGzcG0i7821NiWWxt9NN0",authDomain:"nea-school-portal-1.firebaseapp.com",projectId:"nea-school-portal-1",storageBucket:"nea-school-portal-1.appspot.com",messagingSenderId:"617530386669",appId:"1:617530386669:web:d62556d81aa4ab769984e4"},aw=M_(tk),En=zR(aw),Mn=UP(aw),lw=async(r,e)=>{try{await ZP(Zf(Mn,"users",r,"activities"),{description:e,timestamp:ek()})}catch(t){console.error("Error logging activity:",t)}},uw="/NEA-School-Portal/assets/School-bg-L5f_TUMo.jpg";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rk=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),h_=r=>{const e=rk(r);return e.charAt(0).toUpperCase()+e.slice(1)},cw=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim(),ik=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=q.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:h,...f},g)=>q.createElement("svg",{ref:g,...sk,width:e,height:e,stroke:r,strokeWidth:i?Number(t)*24/Number(e):t,className:cw("lucide",o),...!l&&!ik(f)&&{"aria-hidden":"true"},...f},[...h.map(([y,E])=>q.createElement(y,E)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=(r,e)=>{const t=q.forwardRef(({className:i,...o},l)=>q.createElement(ok,{ref:l,iconNode:e,className:cw(`lucide-${nk(h_(r))}`,`lucide-${r}`,i),...o}));return t.displayName=h_(r),t};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],lk=wn("eye-off",ak);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ck=wn("eye",uk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],dk=wn("house",hk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],hw=wn("info",fk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],mk=wn("log-out",pk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],yk=wn("lock",gk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],vk=wn("mail",_k);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],wk=wn("menu",Ek);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ik=wn("settings",Tk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],dw=wn("user-plus",Sk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ak=wn("user",Rk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Pk=wn("x",Ck),d_=()=>{const[r,e]=q.useState(!1),[t,i]=q.useState(""),[o,l]=q.useState({}),[h,f]=q.useState(!1),g=Ui(),[y,E]=q.useState({email:"",password:""});function w(b){E({...y,[b.target.name]:b.target.value}),l({...o,[b.target.name]:""})}const R=async b=>{b.preventDefault();let B={};if(y.email||(B.email="Email is required"),y.password||(B.password="Password is required"),Object.keys(B).length>0){l(B);return}try{f(!0),await RS(En,y.email,y.password),await lw(En.currentUser.uid,"User logged in successfully"),i("Logged in successfully🎉🎉"),setTimeout(()=>{i(""),g("/dashboard")},2e3)}catch($){console.error("Login error:",$.code,$.message),$.code==="auth/user-not-found"?l({email:"No user found with this email"}):$.code==="auth/wrong-password"||$.code==="auth/invalid-credential"?l({password:"Incorrect password"}):$.code==="auth/too-many-requests"?l({email:"Too many failed attempts. Try again later."}):l({email:"Failed to log in. Please try again."})}finally{f(!1)}};return React.createElement("div",{className:`min-h-screen bg-center relative\r
     flex justify-center items-center`,style:{backgroundImage:`url(${uw})`}},React.createElement("div",{className:"absolute inset-0 bg-white opacity-70"}),t&&React.createElement("div",{className:`absolute bg-black/30 inset-0 backdrop-blur-sm z-10\r
        transition-all duration-300`}),t&&React.createElement("div",{className:`absolute bg-green-300 z-20 text-gray-700 border border-gray-300\r
        px-6 py-4 rounded-lg shadow-lg text-center animate-fade-in`},React.createElement("p",null,t)),React.createElement("form",{onSubmit:R,className:"w-full z-10  mx-5 max-w-md bg-white py-4 px-6 text-gray-900 rounded shadow-2xl"},React.createElement("h2",{className:"text-center mb-1 font-bold uppercase text-xl"},"Admission Portal"),React.createElement("div",{className:`bg-[#ffaa33] mb-8 shadow-md border-l-[#ff9500] border-l-4\r
         px-4 py-4 flex justify-between gap-5 items-center rounded-md `},React.createElement("span",{className:"text-[#663c00]"},React.createElement(hw,{size:50})),React.createElement("div",{className:""},React.createElement("h4",{className:"text-2xl font-bold lg:text-lg mb-1 text-[#663c00]"},"Notice:"),React.createElement("p",{className:"text-[12px] text-[#8e580d]"},"Enter the email address and password provided during sign-up, if you do not have an account, click on"," ",React.createElement("strong",{className:""},"SIGN UP")))),React.createElement("div",{className:"relative"},React.createElement("h2",{className:"uppercase lg:text-lg lg:mb-1 font-bold mb-4"},"Log In"),React.createElement("span",{type:"button",className:"absolute text-gray-950 font-bold p-1 right-1 top-0"},React.createElement(yk,null))),React.createElement("div",{className:"relative"},React.createElement("label",{className:"block mb-1"},"Email"),React.createElement("input",{onChange:w,className:"w-full text-gray-700 py-1 px-2 rounded mb-2 border-gray-700 border",type:"email",value:y.email,name:"email",placeholder:"Enter Your Email"}),React.createElement("p",{className:"absolute right-3 top-8 text-gray-500"},React.createElement(vk,null)),o.email&&React.createElement("p",{className:"text-red-300 text-sm mb-2"},o.email)),React.createElement("div",{className:"relative"},React.createElement("label",{className:"block mb-1"},"Password"),React.createElement("input",{onChange:w,value:y.password,className:"w-full text-gray-700 py-1 px-2 rounded lg:mb-2 mb-7 border border-gray-700",type:r?"text":"password",name:"password",placeholder:"Enter Your Password"}),React.createElement("button",{type:"button",onClick:()=>e(!r),className:"absolute right-3 top-9 text-gray-500"},r?React.createElement(lk,{size:20}):React.createElement(ck,{size:20})),o.password&&React.createElement("p",{className:"text-red-300 text-sm mb-2"},o.password)),React.createElement("button",{type:"submit",disabled:h,className:`w-full py-2 text-lg my-3 rounded text-white transition duration-500 ease-in-out ${h?"bg-[#0f9c37] cursor-not-allowed":"bg-[#0f9c37] hover:bg-[#106e1d]"}`},h?"Logging in...":"Log In"),React.createElement("div",{className:"flex justify-between items-center gap-5 mt-4"},React.createElement("p",{className:"mt-2 text-sm text-center"},"Don't have an account yet?"," "),React.createElement("div",{onClick:()=>g("/signup"),className:`flex items-center justify-between px-2 cursor-pointer md:max-w-40 lg:max-w-48\r
             w-full bg-[#17b6a4] rounded-lg py-2`},React.createElement("button",{className:`text-white text-lg font-bold flex\r
             rounded-md`},"Sign Up"),React.createElement("span",{className:`\r
             text-white font-bold`},React.createElement(dw,null)))),React.createElement("p",{className:"text-center mb-4"},React.createElement("a",{href:"/forgot-password",className:"text-blue-700 hover:underline text-sm"},"Forgot Password?"))))},kk=()=>{const[r,e]=q.useState({fullname:"",email:"",password:"",confirmPassword:"",role:"Student",department:"",level:"",studentId:"",staffId:"",position:"",adminId:""}),[t,i]=q.useState({}),[o,l]=q.useState(!1),[h,f]=q.useState(""),g=Ui();function y(w){e({...r,[w.target.name]:w.target.value}),i({...t,[w.target.name]:""})}const E=async w=>{w.preventDefault(),i({}),l(!0);const{fullname:R,email:b,password:B,confirmPassword:$,role:F}=r;if(B!==$){i({confirmPassword:"Passwords do not match"}),l(!1);return}try{const te=(await SS(En,b,B)).user;await JP(Lr(Mn,"users",te.uid),{fullname:R,email:b,role:F,password:B,department:r.department||null,level:r.level||null,studentId:r.studentId||null,staffId:r.staffId||null,position:r.position||null,adminId:r.adminId||null,createdAt:new Date}),await AS(te),f("✅ Account created successfully."),g("/login")}catch(re){console.error("Signup Error:",re.message),i({general:re.message})}finally{l(!1)}};return React.createElement("div",{className:"min-h-screen bg-center flex justify-center items-center",style:{backgroundImage:`url(${uw})`}},h&&React.createElement("div",{className:`absolute bg-black/30 inset-0 backdrop-blur-sm z-10\r
        transition-all duration-300`}),h&&React.createElement("div",{className:`absolute bg-green-300 z-20 text-gray-700 border border-gray-300\r
        px-6 py-4 rounded-lg shadow-lg text-center animate-fade-in`},React.createElement("p",null,h)),React.createElement("form",{onSubmit:E,className:"w-full mx-5 max-w-md bg-white p-8 mt-5 text-gray-900 rounded shadow-2xl"},React.createElement("h2",{className:"text-center mb-1 font-bold uppercase text-xl"},"Admission Portal"),React.createElement("div",{className:"bg-[#ffaa33] mb-8 shadow-md border-l-[#ff9500] border-l-4 px-4 py-4 flex gap-5 items-center rounded-md"},React.createElement("span",{className:"text-[#663c00]"},React.createElement(hw,{size:50})),React.createElement("div",null,React.createElement("h4",{className:"text-2xl lg:text-lg mb-3 font-semibold"},"Notice:"),React.createElement("p",{className:"text-[12px] text-[#8e580d]"},"Sign up with your information as shown on your certificate"))),React.createElement("h2",{className:"text-xl uppercase font-semibold mb-2 text-center"},"Create Account"),React.createElement("label",{className:"block mb-1"},"Full Name"),React.createElement("input",{onChange:y,value:r.fullname,name:"fullname",className:"w-full text-red-700 text-sm py-1 px-2 rounded mb-2 border border-gray-700",type:"text",placeholder:"Enter Full Name",required:!0}),React.createElement("label",{className:"block mb-1"},"Email Address"),React.createElement("input",{value:r.email,onChange:y,name:"email",className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",type:"email",placeholder:"Enter Email",required:!0}),React.createElement("label",{className:"block mb-1"},"Create Password"),React.createElement("input",{onChange:y,name:"password",value:r.password,className:"w-full text-red-700 px-2 py-1 rounded mb-2 border border-gray-700",type:"password",placeholder:"Create New Password",required:!0}),React.createElement("label",{className:"block mb-1"},"Confirm Password"),React.createElement("input",{onChange:y,value:r.confirmPassword,name:"confirmPassword",className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",type:"password",placeholder:"Confirm Password",required:!0}),t.confirmPassword&&React.createElement("p",{className:"mb-2 text-sm text-red-500"},t.confirmPassword),React.createElement("label",{className:"block mb-1"},"Role"),React.createElement("select",{value:r.role,name:"role",onChange:y,className:"w-full text-gray-700 py-1 px-2 rounded mb-2 border border-gray-700"},React.createElement("option",{value:"Student"},"Student"),React.createElement("option",{value:"Staff"},"Staff"),React.createElement("option",{value:"Admin"},"Admin")),r.role==="Student"&&React.createElement(React.Fragment,null,React.createElement("label",{className:"block mb-1"},"Department"),React.createElement("input",{name:"department",onChange:y,value:r.department,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Department",required:!0}),React.createElement("label",{className:"block mb-1"},"Level"),React.createElement("input",{name:"level",onChange:y,value:r.level,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Level",required:!0}),React.createElement("label",{className:"block mb-1"},"Student ID"),React.createElement("input",{name:"studentId",onChange:y,value:r.studentId,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Student ID",required:!0})),r.role==="Staff"&&React.createElement(React.Fragment,null,React.createElement("label",{className:"block mb-1"},"Department"),React.createElement("input",{name:"department",onChange:y,value:r.department,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Department",required:!0}),React.createElement("label",{className:"block mb-1"},"Staff ID"),React.createElement("input",{name:"staffId",onChange:y,value:r.staffId,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Staff ID",required:!0}),React.createElement("label",{className:"block mb-1"},"Position"),React.createElement("input",{name:"position",onChange:y,value:r.position,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Position",required:!0})),r.role==="Admin"&&React.createElement(React.Fragment,null,React.createElement("label",{className:"block mb-1"},"Admin ID"),React.createElement("input",{name:"adminId",onChange:y,value:r.adminId,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Admin ID",required:!0})),React.createElement("button",{type:"submit",disabled:o,className:`w-full py-1 px-2 rounded mt-5 transition duration-500 ease-in-out text-white ${o?"bg-[#0f9c37] cursor-not-allowed":"bg-[#0f9c37] hover:bg-[#106e1d] font-bold"}`},o?"Creating Account...":"Sign Up"),React.createElement("div",{className:"flex justify-between items-center gap-5 mt-4"},React.createElement("p",{className:"mt-4 text-center lg:text-sm"},"Already have an account?"),React.createElement("div",{onClick:()=>g("/login"),className:"flex items-center cursor-pointer w-full bg-[#17b6a4] rounded-lg py-2 px-2 justify-between"},React.createElement("button",{className:"text-white text-lg font-bold"},"Sign In"),React.createElement("span",{className:"text-white font-bold"},React.createElement(dw,null))))))},fw=q.createContext(),Nk=({children:r})=>{const[e,t]=q.useState(null),[i,o]=q.useState(null),[l,h]=q.useState(!0);q.useEffect(()=>{let g=null;const y=dv(En,E=>{if(E){t(E);const w=Lr(Mn,"users",E.uid);g=cp(w,R=>{R.exists()&&o(R.data())})}else t(null),o(null);h(!1)});return()=>{y(),g&&g()}},[]);const f=async()=>{await kS(En)};return React.createElement(fw.Provider,{value:{currentUser:e,userData:i,logout:f}},!l&&r)},Sl=()=>q.useContext(fw),xk=({children:r})=>{const{currentUser:e}=Sl();return e?r:React.createElement(ET,{to:"/login",replace:!0})},Dk=[{title:"Dashboard",id:1,icon:Q.createElement(dk,{size:20})},{title:"Profile",id:2,icon:Q.createElement(Ak,{size:20})},{title:"Settings",id:3,icon:Q.createElement(Ik,{size:20})}],f_={student:{stats:[{title:"Courses Enrolled",value:6},{title:"Assignments Due",value:3},{title:"Messages",value:12},{title:"Attendance",value:"92%"}],activities:[{recentAct:"Submitted Assignment 3"},{recentAct:"Checked Attendance Report"},{recentAct:"Updated Profile Information"},{recentAct:"Viewed Exam Timetable"}]},staff:{stats:[{title:"Courses Teaching",value:5},{title:"Pending Grading",value:12},{title:"Messages",value:8},{title:"Attendance Today",value:"95%"}],activities:[{recentAct:"Uploaded Lecture Notes"},{recentAct:"Graded Assignment 2"},{recentAct:"Sent Message to Students"},{recentAct:"Scheduled Class Meeting"}]},admin:{stats:[{title:"Total Students",value:1200},{title:"Total Staff",value:85},{title:"Pending Approvals",value:7},{title:"System Alerts",value:3}],activities:[{recentAct:"Approved Student Enrollment"},{recentAct:"Reviewed Staff Leave Requests"},{recentAct:"Updated School Timetable"},{recentAct:"Generated Monthly Reports"}]}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Vk(r,e,t,i){function o(l){return l instanceof t?l:new t(function(h){h(l)})}return new(t||(t=Promise))(function(l,h){function f(E){try{y(i.next(E))}catch(w){h(w)}}function g(E){try{y(i.throw(E))}catch(w){h(w)}}function y(E){E.done?l(E.value):o(E.value).then(f,g)}y((i=i.apply(r,[])).next())})}function bk(r,e){var t={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},i,o,l,h;return h={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function f(y){return function(E){return g([y,E])}}function g(y){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,o&&(l=y[0]&2?o.return:y[0]?o.throw||((l=o.return)&&l.call(o),0):o.next)&&!(l=l.call(o,y[1])).done)return l;switch(o=0,l&&(y=[y[0]&2,l.value]),y[0]){case 0:case 1:l=y;break;case 4:return t.label++,{value:y[1],done:!1};case 5:t.label++,o=y[1],y=[0];continue;case 7:y=t.ops.pop(),t.trys.pop();continue;default:if(l=t.trys,!(l=l.length>0&&l[l.length-1])&&(y[0]===6||y[0]===2)){t=0;continue}if(y[0]===3&&(!l||y[1]>l[0]&&y[1]<l[3])){t.label=y[1];break}if(y[0]===6&&t.label<l[1]){t.label=l[1],l=y;break}if(l&&t.label<l[2]){t.label=l[2],t.ops.push(y);break}l[2]&&t.ops.pop(),t.trys.pop();continue}y=e.call(r,t)}catch(E){y=[6,E],o=0}finally{i=l=0}if(y[0]&5)throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Io=function(){return Io=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Io.apply(this,arguments)},pw=function(r){return{loading:r==null,value:r}},Ok=function(){return function(r,e){switch(e.type){case"error":return Io(Io({},r),{error:e.error,loading:!1,value:void 0});case"reset":return pw(e.defaultValue);case"value":return Io(Io({},r),{error:void 0,loading:!1,value:e.value});default:return r}}},Lk=(function(r){var e=r?r():void 0,t=q.useReducer(Ok(),pw(e)),i=t[0],o=t[1],l=q.useCallback(function(){var g=r?r():void 0;o({type:"reset",defaultValue:g})},[r]),h=q.useCallback(function(g){o({type:"error",error:g})},[]),f=q.useCallback(function(g){o({type:"value",value:g})},[]);return q.useMemo(function(){return{error:i.error,loading:i.loading,reset:l,setError:h,setValue:f,value:i.value}},[i.error,i.loading,l,h,f,i.value])}),dp=(function(r,e){var t=Lk(function(){return r.currentUser}),i=t.error,o=t.loading,l=t.setError,h=t.setValue,f=t.value;return q.useEffect(function(){var g=dv(r,function(y){return Vk(void 0,void 0,void 0,function(){var E;return bk(this,function(w){switch(w.label){case 0:return[3,4];case 1:return w.trys.push([1,3,,4]),[4,e.onUserChanged(y)];case 2:return w.sent(),[3,4];case 3:return E=w.sent(),l(E),[3,4];case 4:return h(y),[2]}})})},l);return function(){g()}},[r]),[f,o,i]});const Mk=()=>{const{currentUser:r}=Sl(),[e,t]=q.useState(null);return q.useEffect(()=>{(async()=>{if(r)try{const o=await Jc(Lr(Mn,"users",r.uid));o.exists()&&t(o.data())}catch(o){console.error("Error fetching user info:",o)}})()},[r]),e?Q.createElement("div",{className:"bg-white p-6 rounded-xl shadow mb-6"},Q.createElement("h2",{className:"text-xl font-semibold mb-4"},"User Info"),Q.createElement("ul",{className:"space-y-4 text-gray-900"},Q.createElement("li",null,Q.createElement("strong",null,"Name:")," ",e.fullname),Q.createElement("li",null,Q.createElement("strong",null,"Role:")," ",e.role),e.role==="Student"&&Q.createElement(Q.Fragment,null,Q.createElement("li",null,Q.createElement("strong",null,"Department: ")," ",e.department||"N/A"),Q.createElement("li",null,Q.createElement("strong",null,"Level: ")," ",e.level||"N/A"),Q.createElement("li",null,Q.createElement("strong",null,"Student ID: ")," ",e.studentId.toUpperCase()||"N/A")),e.role==="Staff"&&Q.createElement(Q.Fragment,null,Q.createElement("li",null,Q.createElement("strong",null,"Staff ID:")," ",e.staffId.toUpperCase()||"N/A"),Q.createElement("li",null,Q.createElement("strong",null,"Position:")," ",e.position||"N/A")),e.role==="Admin"&&Q.createElement("li",null,Q.createElement("strong",null,"Admin ID:")," ",e.adminId||"N/A"))):Q.createElement("div",{className:"bg-white p-6 rounded-xl shadow mb-6 text-gray-500"},"Loading user info...")},Uk=()=>{const[r,e]=q.useState([]);return q.useEffect(()=>{const t=En.currentUser?.uid;if(!t)return;const i=ZE(Zf(Mn,"activities"),ew("userId","==",t),tw("timestamp","desc")),o=cp(i,l=>{const h=l.docs.map(f=>({id:f.id,...f.data()}));e(h)},l=>{console.error("Failed to fetch activities:",l)});return()=>o()},[]),Q.createElement("div",{className:"bg-white shadow-md p-4 rounded-md"},Q.createElement("h2",{className:"text-lg font-bold mb-3"},"Recent Activities"),Q.createElement("ul",{className:"text-sm space-y-2"},r.length>0?r.map(t=>Q.createElement("li",{key:t.id,className:"border-b pb-1"},Q.createElement("span",{className:"font-medium"},t.action),Q.createElement("br",null),Q.createElement("span",{className:"text-gray-500 text-xs"},t.timestamp?.toDate().toLocaleString()))):Q.createElement("p",{className:"text-gray-500"},"No recent activities yet.")))},Fk=()=>{const{logout:r}=Sl(),[e,t]=q.useState(null),[i,o]=q.useState([]),[l,h]=q.useState({stats:[],activities:[]}),[f]=dp(En),g=Ui();return q.useEffect(()=>{if(!f){g("/login");return}En.currentUser&&lw(En.currentUser.uid,"Opened Dashboard"),(async()=>{try{const b=await Jc(Lr(Mn,"users",f.uid));if(!b.exists()){alert("User data not found");return}const B=b.data();t(B);const $=B.role?.toLowerCase();h(f_[$]||f_.student)}catch(b){console.error("Error fetching user data:",b)}})();const E=ZE(Zf(Mn,"activities"),ew("userId","==",f.uid),tw("timestamp","desc"),QP(5)),w=cp(E,b=>{const B=b.docs.map($=>({id:$.id,...$.data()}));o(B)}),R=setTimeout(()=>{r(),g("/login")},3e5);return()=>{clearTimeout(R),w()}},[f,g,r]),Q.createElement("div",{className:"mb-32"},Q.createElement("div",{className:"grid lg:grid-cols-4 gap-6 mx-5 my-2"},l.stats.map((y,E)=>Q.createElement("div",{key:E,className:"bg-white p-6 rounded-xl shadow hover:shadow-lg transition"},Q.createElement("h2",{className:"text-lg text-gray-400"},y.title),Q.createElement("p",{className:"text-xl text-center font-semibold"},y.value)))),Q.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 mx-5 gap-6"},Q.createElement(Mk,{user:e}),Q.createElement(Uk,{activities:i})))},zk="/NEA-School-Portal/assets/bg-logo-CLNqAsED.jpg",jk=()=>{const[r,e]=q.useState(""),[t,i]=q.useState(""),[o,l]=q.useState(""),h=async f=>{f.preventDefault(),i(""),l("");try{await IS(En,r),i("Password reset link sent to your email ✅")}catch(g){l(g.message)}};return React.createElement("div",{className:"min-h-screen flex justify-center items-center bg-cover",style:{backgroundImage:`url(${zk})`}},React.createElement("form",{onSubmit:h,className:"w-full mx-5 max-w-md bg-gray-900 bg-opacity-80 text-white p-8 rounded-lg shadow-2xl"},React.createElement("h2",{className:"text-3xl uppercase font-semibold mb-6"},"Reset Password"),React.createElement("label",{className:"block mb-1 text-lg"},"Email Address"),React.createElement("input",{type:"email",placeholder:"Enter your email",value:r,onChange:f=>e(f.target.value),required:!0,className:"w-full p-2 rounded text-gray-800 mb-5 border"}),t&&React.createElement("p",{className:"text-green-400 mb-4"},t),o&&React.createElement("p",{className:"text-red-400 mb-4"},o),React.createElement("button",{type:"submit",className:`w-full py-2 bg-blue-500 hover:bg-blue-700 \r
          transition duration-500 ease-in-out text-xl text-white rounded`},"Send Reset Link"),React.createElement("p",{className:"mt-4 text-center text-sm"},"Remember your password?",React.createElement("a",{href:"/login",className:"text-blue-300 hover:underline ml-2"},"Go back to Login"))))},mw="/NEA-School-Portal/assets/Passport-CquYe6r7.png",Bk=()=>{const[r]=dp(En),[e,t]=q.useState(null),[i,o]=q.useState(!0),[l,h]=q.useState(!1),[f,g]=q.useState(""),y=Ui();q.useEffect(()=>{if(!r){y("/login");return}(async()=>{try{const R=await Jc(Lr(Mn,"users",r.uid));if(R.exists()){const b=R.data();t(b),g(b.fullname||"")}else console.log("User document not found");o(!1)}catch(R){console.error("error fetching user data",R)}})()},[r,y]);const E=async()=>{const w=f.split(" ").map(b=>b.charAt(0).toUpperCase()+b.slice(1).toLowerCase()).join(" "),R=Lr(Mn,"users",r.uid);await sw(R,{fullname:w}),t(b=>({...b,fullname:w})),h(!1)};return i?Q.createElement("p",{className:"text-center mt-20"},"Loading..."):Q.createElement("div",{className:"p-6 bg-slate-100 min-h-screen"},Q.createElement("h2",{className:"text-2xl font-bold mb-4"},"User Profile"),Q.createElement("div",{className:"bg-white p-6 shadow-md rounded-lg mx-auto max-w-sm"},Q.createElement("img",{src:e?.photoURL||mw,className:"w-32 h-32 rounded-full mx-auto mb-4",alt:"user profile"}),l?Q.createElement(Q.Fragment,null,Q.createElement("input",{type:"text",value:f,onChange:w=>g(w.target.value),className:"border p-2 rounded w-full mb-2",placeholder:"Enter full name"}),Q.createElement("button",{onClick:E,className:"w-full bg-green-500 text-white py-2 rounded-md mb-2"},"Save"),Q.createElement("button",{onClick:()=>h(!1),className:"w-full bg-gray-400 text-white py-2 rounded-md"},"Cancel")):Q.createElement(Q.Fragment,null,Q.createElement("h3",{className:"text-center font-semibold text-xl"},e?.fullname.split(" ").map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(" ")||"No Name"),Q.createElement("p",{className:"text-gray-600 text-center"},e?.email||r?.email),Q.createElement("p",{className:"text-center mt-2 text-sm text-gray-500"},"Role: ",e?.role||"N/A"),Q.createElement("div",{className:"mt-4 text-center"},Q.createElement("button",{onClick:()=>h(!0),className:"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"},"Edit Profile")))))},$k=()=>{const{logout:r}=Sl(),e=Ui(),[t,i]=q.useState(!1),o=async()=>{await r(),e("/login")};return Q.createElement(Q.Fragment,null,Q.createElement("div",{className:"flex items-center justify-between bg-gray-800 text-white p-4 lg:hidden"},Q.createElement("h2",{className:"text-2xl font-bold"},"NEA Portal"),Q.createElement("button",{onClick:()=>i(!0),className:"p-2 rounded hover:bg-gray-700"},Q.createElement(wk,{size:26}))),Q.createElement("aside",{className:`fixed top-0 left-0 flex flex-col h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${t?"translate-x-0":"-translate-x-full"} 
        lg:translate-x-0 lg:static`},Q.createElement("div",{className:"flex items-center justify-between p-6 border-b"},Q.createElement("h2",{className:"text-2xl font-bold"},"NEA Portal"),Q.createElement("button",{onClick:()=>i(!1),className:"lg:hidden text-gray-600 hover:text-red-500"},Q.createElement(Pk,{size:26}))),Q.createElement("nav",{className:"flex-1 p-4 space-y-2 overflow-y-auto"},Dk.map(l=>Q.createElement(OT,{key:l.id,onClick:()=>i(!1),to:l.title==="Dashboard"?"/dashboard":`/dashboard/${l.title.toLowerCase()}`,end:l.title==="Dashboard",className:({isActive:h})=>`flex items-center w-full p-2 rounded transition ${h?"bg-blue-500 text-white":"text-gray-700 hover:bg-gray-100"}`},Q.createElement("span",{className:"mr-3"},l.icon),l.title))),Q.createElement("div",{className:"my-auto mb-2"},Q.createElement("button",{onClick:o,className:`flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white \r
            p-4 w-full transition duration-300 rounded-md`},Q.createElement(mk,{size:20})," Logout"))),t&&Q.createElement("div",{onClick:()=>i(!1),className:"fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"}))},qk=()=>{const{userData:r}=Sl(),t=As().pathname.split("/").pop(),i=t==="dashboard"||t===""?"Dashboard":t.charAt(0).toUpperCase()+t.slice(1);return React.createElement("header",{className:"flex flex-col lg:flex-row items-center justify-between px-6 py-1 mx-5 my-3"},React.createElement("h2",{className:"text-3xl font-semibold text-red-500"},i),React.createElement("div",{className:"flex items-center gap-6"},React.createElement("h1",{className:"text-xl font-bold mb-5 capitalize"},"Hello, ",r?.fullname||"User"),React.createElement("figure",{className:"items-center mb-5"},React.createElement("img",{src:mw,alt:"user",className:"w-16 h-16 border rounded-full"}),React.createElement("figcaption",{className:"text-center mt-4 uppercase font-semibold text-sm"},r?.role))))},Wk=({children:r})=>Q.createElement("div",{className:"lg:flex h-screen bg-gray-100"},Q.createElement($k,null),Q.createElement("div",{className:"flex-1 flex flex-col"},Q.createElement(qk,null),Q.createElement("main",{className:"flex-1 overflow-y-auto"},r),Q.createElement(wT,null))),Hk=()=>{const[r]=dp(En),[e,t]=q.useState(null),[i,o]=q.useState(!0),[l,h]=q.useState(""),[f,g]=q.useState(""),[y,E]=q.useState(""),w=Ui();q.useEffect(()=>{if(!r){w("/login");return}(async()=>{try{const B=await Jc(Lr(Mn,"users",r.uid));if(B.exists()){const $=B.data();t($),h($.fullname||""),g($.role||"")}else console.log("User not found");o(!1)}catch(B){console.error("Error fetching user data:",B)}})()},[r,w]);const R=async b=>{b.preventDefault();try{const B=l.split(" ").map($=>$.charAt(0).toUpperCase()+$.slice(1).toLowerCase()).join(" ");await sw(Lr(Mn,"users",r.uid),{fullname:B,role:f}),E("Profile updated successfully 🎉"),setTimeout(()=>E(""),3e3)}catch(B){console.error("Error updating profile:",B),E("Failed to update profile ❌")}};return i?Q.createElement("p",{className:"text-center mt-20"},"Loading..."):Q.createElement("div",{className:"mx-20 bg-white mb-36 p-6 rounded-lg shadow"},Q.createElement("h2",{className:"text-2xl font-bold text-center mb-4"},"Settings"),y&&Q.createElement("p",{className:"text-center text-sm text-green-600 mb-4"},y),Q.createElement("form",{onSubmit:R,className:"space-y-4"},Q.createElement("div",null,Q.createElement("label",{className:"block text-gray-600 mb-1"},"Full Name"),Q.createElement("input",{type:"text",value:l,onChange:b=>h(b.target.value),className:"w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",required:!0})),Q.createElement("div",null,Q.createElement("label",{className:"block text-gray-600 mb-1"},"Role"),Q.createElement("select",{required:!0,value:f,onChange:b=>g(b.target.value),className:"w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"},Q.createElement("option",{value:""},"Select role"),Q.createElement("option",{value:"Student"},"Student"),Q.createElement("option",{value:"Admin"},"Admin"),Q.createElement("option",{value:"Staff"},"Staff"),Q.createElement("option",{value:"Founder"},"Founder"))),Q.createElement("button",{type:"submit",className:"w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"},"Save Changes")))};function Gk(){return React.createElement(React.Fragment,null,React.createElement(IT,null,React.createElement(Pr,{path:"/",element:React.createElement(d_,null)}),React.createElement(Pr,{path:"/login",element:React.createElement(d_,null)}),React.createElement(Pr,{path:"/signup",element:React.createElement(kk,null)}),React.createElement(Pr,{path:"/forgot-password",element:React.createElement(jk,null)}),React.createElement(Pr,{path:"/dashboard",element:React.createElement(xk,null,React.createElement(Wk,null))},React.createElement(Pr,{index:!0,element:React.createElement(Fk,null)})," ",React.createElement(Pr,{path:"profile",element:React.createElement(Bk,null)}),React.createElement(Pr,{path:"settings",element:React.createElement(Hk,null)}))))}N0.createRoot(document.getElementById("root")).render(React.createElement(q.StrictMode,null,React.createElement(xT,null,React.createElement(Nk,null,React.createElement(Gk,null)))));
