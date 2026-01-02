function R0(r,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function P0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Sd={exports:{}},za={},Ad={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function k0(){if(Ag)return Ce;Ag=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),E=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=E&&O[E]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,q={};function j(O,K,Ie){this.props=O,this.context=K,this.refs=q,this.updater=Ie||b}j.prototype.isReactComponent={},j.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},j.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function re(){}re.prototype=j.prototype;function te(O,K,Ie){this.props=O,this.context=K,this.refs=q,this.updater=Ie||b}var oe=te.prototype=new re;oe.constructor=te,$(oe,j.prototype),oe.isPureReactComponent=!0;var fe=Array.isArray,De=Object.prototype.hasOwnProperty,Ae={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function A(O,K,Ie){var Se,Re={},Pe=null,Fe=null;if(K!=null)for(Se in K.ref!==void 0&&(Fe=K.ref),K.key!==void 0&&(Pe=""+K.key),K)De.call(K,Se)&&!x.hasOwnProperty(Se)&&(Re[Se]=K[Se]);var Oe=arguments.length-2;if(Oe===1)Re.children=Ie;else if(1<Oe){for(var Be=Array(Oe),Bt=0;Bt<Oe;Bt++)Be[Bt]=arguments[Bt+2];Re.children=Be}if(O&&O.defaultProps)for(Se in Oe=O.defaultProps,Oe)Re[Se]===void 0&&(Re[Se]=Oe[Se]);return{$$typeof:r,type:O,key:Pe,ref:Fe,props:Re,_owner:Ae.current}}function P(O,K){return{$$typeof:r,type:O.type,key:K,ref:O.ref,props:O.props,_owner:O._owner}}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function N(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ie){return K[Ie]})}var L=/\/+/g;function R(O,K){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):K.toString(36)}function qe(O,K,Ie,Se,Re){var Pe=typeof O;(Pe==="undefined"||Pe==="boolean")&&(O=null);var Fe=!1;if(O===null)Fe=!0;else switch(Pe){case"string":case"number":Fe=!0;break;case"object":switch(O.$$typeof){case r:case e:Fe=!0}}if(Fe)return Fe=O,Re=Re(Fe),O=Se===""?"."+R(Fe,0):Se,fe(Re)?(Ie="",O!=null&&(Ie=O.replace(L,"$&/")+"/"),qe(Re,K,Ie,"",function(Bt){return Bt})):Re!=null&&(V(Re)&&(Re=P(Re,Ie+(!Re.key||Fe&&Fe.key===Re.key?"":(""+Re.key).replace(L,"$&/")+"/")+O)),K.push(Re)),1;if(Fe=0,Se=Se===""?".":Se+":",fe(O))for(var Oe=0;Oe<O.length;Oe++){Pe=O[Oe];var Be=Se+R(Pe,Oe);Fe+=qe(Pe,K,Ie,Be,Re)}else if(Be=S(O),typeof Be=="function")for(O=Be.call(O),Oe=0;!(Pe=O.next()).done;)Pe=Pe.value,Be=Se+R(Pe,Oe++),Fe+=qe(Pe,K,Ie,Be,Re);else if(Pe==="object")throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Fe}function wt(O,K,Ie){if(O==null)return O;var Se=[],Re=0;return qe(O,Se,"","",function(Pe){return K.call(Ie,Pe,Re++)}),Se}function Dt(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(Ie){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ie)},function(Ie){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ie)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var Xe={current:null},ee={transition:null},pe={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Ae};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:wt,forEach:function(O,K,Ie){wt(O,function(){K.apply(this,arguments)},Ie)},count:function(O){var K=0;return wt(O,function(){K++}),K},toArray:function(O){return wt(O,function(K){return K})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ce.Component=j,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=te,Ce.StrictMode=i,Ce.Suspense=g,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ce.act=ae,Ce.cloneElement=function(O,K,Ie){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Se=$({},O.props),Re=O.key,Pe=O.ref,Fe=O._owner;if(K!=null){if(K.ref!==void 0&&(Pe=K.ref,Fe=Ae.current),K.key!==void 0&&(Re=""+K.key),O.type&&O.type.defaultProps)var Oe=O.type.defaultProps;for(Be in K)De.call(K,Be)&&!x.hasOwnProperty(Be)&&(Se[Be]=K[Be]===void 0&&Oe!==void 0?Oe[Be]:K[Be])}var Be=arguments.length-2;if(Be===1)Se.children=Ie;else if(1<Be){Oe=Array(Be);for(var Bt=0;Bt<Be;Bt++)Oe[Bt]=arguments[Bt+2];Se.children=Oe}return{$$typeof:r,type:O.type,key:Re,ref:Pe,props:Se,_owner:Fe}},Ce.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Ce.createElement=A,Ce.createFactory=function(O){var K=A.bind(null,O);return K.type=O,K},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(O){return{$$typeof:f,render:O}},Ce.isValidElement=V,Ce.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Dt}},Ce.memo=function(O,K){return{$$typeof:y,type:O,compare:K===void 0?null:K}},Ce.startTransition=function(O){var K=ee.transition;ee.transition={};try{O()}finally{ee.transition=K}},Ce.unstable_act=ae,Ce.useCallback=function(O,K){return Xe.current.useCallback(O,K)},Ce.useContext=function(O){return Xe.current.useContext(O)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(O){return Xe.current.useDeferredValue(O)},Ce.useEffect=function(O,K){return Xe.current.useEffect(O,K)},Ce.useId=function(){return Xe.current.useId()},Ce.useImperativeHandle=function(O,K,Ie){return Xe.current.useImperativeHandle(O,K,Ie)},Ce.useInsertionEffect=function(O,K){return Xe.current.useInsertionEffect(O,K)},Ce.useLayoutEffect=function(O,K){return Xe.current.useLayoutEffect(O,K)},Ce.useMemo=function(O,K){return Xe.current.useMemo(O,K)},Ce.useReducer=function(O,K,Ie){return Xe.current.useReducer(O,K,Ie)},Ce.useRef=function(O){return Xe.current.useRef(O)},Ce.useState=function(O){return Xe.current.useState(O)},Ce.useSyncExternalStore=function(O,K,Ie){return Xe.current.useSyncExternalStore(O,K,Ie)},Ce.useTransition=function(){return Xe.current.useTransition()},Ce.version="18.3.1",Ce}var Cg;function vf(){return Cg||(Cg=1,Ad.exports=k0()),Ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function x0(){if(Rg)return za;Rg=1;var r=vf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,y){var w,E={},S=null,b=null;y!==void 0&&(S=""+y),g.key!==void 0&&(S=""+g.key),g.ref!==void 0&&(b=g.ref);for(w in g)i.call(g,w)&&!l.hasOwnProperty(w)&&(E[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)E[w]===void 0&&(E[w]=g[w]);return{$$typeof:e,type:f,key:S,ref:b,props:E,_owner:o.current}}return za.Fragment=t,za.jsx=h,za.jsxs=h,za}var Pg;function N0(){return Pg||(Pg=1,Sd.exports=x0()),Sd.exports}var C=N0(),W=vf();const Ku=P0(W),D0=R0({__proto__:null,default:Ku},[W]);var zu={},Cd={exports:{}},Yt={},Rd={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function V0(){return kg||(kg=1,(function(r){function e(ee,pe){var ae=ee.length;ee.push(pe);e:for(;0<ae;){var O=ae-1>>>1,K=ee[O];if(0<o(K,pe))ee[O]=pe,ee[ae]=K,ae=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var pe=ee[0],ae=ee.pop();if(ae!==pe){ee[0]=ae;e:for(var O=0,K=ee.length,Ie=K>>>1;O<Ie;){var Se=2*(O+1)-1,Re=ee[Se],Pe=Se+1,Fe=ee[Pe];if(0>o(Re,ae))Pe<K&&0>o(Fe,Re)?(ee[O]=Fe,ee[Pe]=ae,O=Pe):(ee[O]=Re,ee[Se]=ae,O=Se);else if(Pe<K&&0>o(Fe,ae))ee[O]=Fe,ee[Pe]=ae,O=Pe;else break e}}return pe}function o(ee,pe){var ae=ee.sortIndex-pe.sortIndex;return ae!==0?ae:ee.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],y=[],w=1,E=null,S=3,b=!1,$=!1,q=!1,j=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(ee){for(var pe=t(y);pe!==null;){if(pe.callback===null)i(y);else if(pe.startTime<=ee)i(y),pe.sortIndex=pe.expirationTime,e(g,pe);else break;pe=t(y)}}function fe(ee){if(q=!1,oe(ee),!$)if(t(g)!==null)$=!0,Dt(De);else{var pe=t(y);pe!==null&&Xe(fe,pe.startTime-ee)}}function De(ee,pe){$=!1,q&&(q=!1,re(A),A=-1),b=!0;var ae=S;try{for(oe(pe),E=t(g);E!==null&&(!(E.expirationTime>pe)||ee&&!N());){var O=E.callback;if(typeof O=="function"){E.callback=null,S=E.priorityLevel;var K=O(E.expirationTime<=pe);pe=r.unstable_now(),typeof K=="function"?E.callback=K:E===t(g)&&i(g),oe(pe)}else i(g);E=t(g)}if(E!==null)var Ie=!0;else{var Se=t(y);Se!==null&&Xe(fe,Se.startTime-pe),Ie=!1}return Ie}finally{E=null,S=ae,b=!1}}var Ae=!1,x=null,A=-1,P=5,V=-1;function N(){return!(r.unstable_now()-V<P)}function L(){if(x!==null){var ee=r.unstable_now();V=ee;var pe=!0;try{pe=x(!0,ee)}finally{pe?R():(Ae=!1,x=null)}}else Ae=!1}var R;if(typeof te=="function")R=function(){te(L)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,wt=qe.port2;qe.port1.onmessage=L,R=function(){wt.postMessage(null)}}else R=function(){j(L,0)};function Dt(ee){x=ee,Ae||(Ae=!0,R())}function Xe(ee,pe){A=j(function(){ee(r.unstable_now())},pe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){$||b||($=!0,Dt(De))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(S){case 1:case 2:case 3:var pe=3;break;default:pe=S}var ae=S;S=pe;try{return ee()}finally{S=ae}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,pe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ae=S;S=ee;try{return pe()}finally{S=ae}},r.unstable_scheduleCallback=function(ee,pe,ae){var O=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?O+ae:O):ae=O,ee){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ae+K,ee={id:w++,callback:pe,priorityLevel:ee,startTime:ae,expirationTime:K,sortIndex:-1},ae>O?(ee.sortIndex=ae,e(y,ee),t(g)===null&&ee===t(y)&&(q?(re(A),A=-1):q=!0,Xe(fe,ae-O))):(ee.sortIndex=K,e(g,ee),$||b||($=!0,Dt(De))),ee},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(ee){var pe=S;return function(){var ae=S;S=pe;try{return ee.apply(this,arguments)}finally{S=ae}}}})(Pd)),Pd}var xg;function b0(){return xg||(xg=1,Rd.exports=V0()),Rd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function O0(){if(Ng)return Yt;Ng=1;var r=vf(),e=b0();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},E={};function S(n){return g.call(E,n)?!0:g.call(w,n)?!1:y.test(n)?E[n]=!0:(w[n]=!0,!1)}function b(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $(n,s,a,c){if(s===null||typeof s>"u"||b(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(n,s,a,c,d,p,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=p,this.removeEmptyString=v}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){j[n]=new q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];j[s]=new q(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){j[n]=new q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){j[n]=new q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){j[n]=new q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){j[n]=new q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){j[n]=new q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){j[n]=new q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){j[n]=new q(n,5,!1,n.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function te(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(re,te);j[s]=new q(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(re,te);j[s]=new q(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(re,te);j[s]=new q(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){j[n]=new q(n,1,!1,n.toLowerCase(),null,!1,!1)}),j.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){j[n]=new q(n,1,!1,n.toLowerCase(),null,!0,!0)});function oe(n,s,a,c){var d=j.hasOwnProperty(s)?j[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,d,c)&&(a=null),c||d===null?S(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var fe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,De=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),N=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),wt=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Xe=Symbol.for("react.offscreen"),ee=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,O;function K(n){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+n}var Ie=!1;function Se(n,s){if(!n||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var c=z}Reflect.construct(n,[],s)}else{try{s.call()}catch(z){c=z}n.call(s.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,I=p.length-1;1<=v&&0<=I&&d[v]!==p[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==p[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==p[I]){var k=`
`+d[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=I);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?K(n):""}function Re(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function Pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case Ae:return"Portal";case P:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case qe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case L:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case wt:return s=n.displayName||null,s!==null?s:Pe(n.type)||"Memo";case Dt:s=n._payload,n=n._init;try{return Pe(n(s))}catch{}}return null}function Fe(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Bt(n){var s=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function ks(n){n._valueTracker||(n._valueTracker=Bt(n))}function Go(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Br(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xs(n,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Cl(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Oe(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ns(n,s){s=s.checked,s!=null&&oe(n,"checked",s,!1)}function $i(n,s){Ns(n,s);var a=Oe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?ct(n,s.type,a):s.hasOwnProperty("defaultValue")&&ct(n,s.type,Oe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Ko(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ct(n,s,a){(s!=="number"||Br(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ot=Array.isArray;function Tn(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Oe(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Qo(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Yo(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(ot(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Oe(a)}}function Rl(n,s){var a=Oe(s.value),c=Oe(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function $r(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function Xo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ds(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?Xo(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qr,Pl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=qr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function qi(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kl=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(n){kl.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Wr[s]=Wr[n]})});function Hr(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Wr.hasOwnProperty(n)&&Wr[n]?(""+s).trim():s+"px"}function Vs(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Hr(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Jo=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function In(n,s){if(s){if(Jo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function bs(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gr=null;function Os(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var cr=null,hr=null,rt=null;function Zo(n){if(n=Ca(n)){if(typeof cr!="function")throw Error(t(280));var s=n.stateNode;s&&(s=nu(s),cr(n.stateNode,n.type,s))}}function Kr(n){hr?rt?rt.push(n):rt=[n]:hr=n}function Qr(){if(hr){var n=hr,s=rt;if(rt=hr=null,Zo(n),s)for(n=0;n<s.length;n++)Zo(s[n])}}function xl(n,s){return n(s)}function Nl(){}var Un=!1;function Dl(n,s,a){if(Un)return n(s,a);Un=!0;try{return xl(n,s,a)}finally{Un=!1,(hr!==null||rt!==null)&&(Nl(),Qr())}}function Wi(n,s){var a=n.stateNode;if(a===null)return null;var c=nu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Yr=!1;if(f)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Yr=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Yr=!1}function Vl(n,s,a,c,d,p,v,I,k){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(Y){this.onError(Y)}}var dr=!1,Fn=null,Ls=!1,cn=null,bl={onError:function(n){dr=!0,Fn=n}};function Ol(n,s,a,c,d,p,v,I,k){dr=!1,Fn=null,Vl.apply(bl,arguments)}function ea(n,s,a,c,d,p,v,I,k){if(Ol.apply(this,arguments),dr){if(dr){var z=Fn;dr=!1,Fn=null}else throw Error(t(198));Ls||(Ls=!0,cn=z)}}function Sn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function ta(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Ll(n){if(Sn(n)!==n)throw Error(t(188))}function Ml(n){var s=n.alternate;if(!s){if(s=Sn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Ll(d),n;if(p===c)return Ll(d),s;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=p;break}if(I===c){v=!0,c=d,a=p;break}I=I.sibling}if(!v){for(I=p.child;I;){if(I===a){v=!0,a=p,c=d;break}if(I===c){v=!0,c=p,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function Ul(n){return n=Ml(n),n!==null?Hi(n):null}function Hi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Hi(n);if(s!==null)return s;n=n.sibling}return null}var na=e.unstable_scheduleCallback,Ms=e.unstable_cancelCallback,Gi=e.unstable_shouldYield,fr=e.unstable_requestPaint,Ge=e.unstable_now,th=e.unstable_getCurrentPriorityLevel,Us=e.unstable_ImmediatePriority,ra=e.unstable_UserBlockingPriority,Ki=e.unstable_NormalPriority,ia=e.unstable_LowPriority,Fs=e.unstable_IdlePriority,Qi=null,Zt=null;function Fl(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Qi,n,void 0,(n.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Yi,jn=Math.log,hn=Math.LN2;function Yi(n){return n>>>=0,n===0?32:31-(jn(n)/hn|0)|0}var zn=64,Jr=4194304;function Ue(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pr(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Ue(I):(p&=v,p!==0&&(c=Ue(p)))}else v=a&~d,v!==0?c=Ue(v):p!==0&&(c=Ue(p));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-en(s),d=1<<a,c|=n[a],s&=~d;return c}function Xi(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ji(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-en(p),I=1<<v,k=d[v];k===-1?((I&a)===0||(I&c)!==0)&&(d[v]=Xi(I,s)):k<=s&&(n.expiredLanes|=I),p&=~I}}function sa(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function oa(){var n=zn;return zn<<=1,(zn&4194240)===0&&(zn=64),n}function aa(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function Zi(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-en(s),n[s]=a}function nh(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-en(a),p=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function la(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-en(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var Ve=0;function Bn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ua,js,ca,ha,da,$n=!1,zs=[],qn=null,Wn=null,At=null,es=new Map,mr=new Map,tn=[],jl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zr(n,s){switch(n){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":es.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(s.pointerId)}}function An(n,s,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},s!==null&&(s=Ca(s),s!==null&&js(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function zl(n,s,a,c,d){switch(s){case"focusin":return qn=An(qn,n,s,a,c,d),!0;case"dragenter":return Wn=An(Wn,n,s,a,c,d),!0;case"mouseover":return At=An(At,n,s,a,c,d),!0;case"pointerover":var p=d.pointerId;return es.set(p,An(es.get(p)||null,n,s,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,mr.set(p,An(mr.get(p)||null,n,s,a,c,d)),!0}return!1}function Bs(n){var s=is(n.target);if(s!==null){var a=Sn(s);if(a!==null){if(s=a.tag,s===13){if(s=ta(a),s!==null){n.blockedOn=s,da(n.priority,function(){ca(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $e(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=$s(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Gr=c,a.target.dispatchEvent(c),Gr=null}else return s=Ca(a),s!==null&&js(s),n.blockedOn=a,!1;s.shift()}return!0}function Bl(n,s,a){$e(n)&&a.delete(s)}function rh(){$n=!1,qn!==null&&$e(qn)&&(qn=null),Wn!==null&&$e(Wn)&&(Wn=null),At!==null&&$e(At)&&(At=null),es.forEach(Bl),mr.forEach(Bl)}function ei(n,s){n.blockedOn===s&&(n.blockedOn=null,$n||($n=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rh)))}function ti(n){function s(d){return ei(d,n)}if(0<zs.length){ei(zs[0],n);for(var a=1;a<zs.length;a++){var c=zs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(qn!==null&&ei(qn,n),Wn!==null&&ei(Wn,n),At!==null&&ei(At,n),es.forEach(s),mr.forEach(s),a=0;a<tn.length;a++)c=tn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tn.length&&(a=tn[0],a.blockedOn===null);)Bs(a),a.blockedOn===null&&tn.shift()}var gr=fe.ReactCurrentBatchConfig,yr=!0;function Hn(n,s,a,c){var d=Ve,p=gr.transition;gr.transition=null;try{Ve=1,fa(n,s,a,c)}finally{Ve=d,gr.transition=p}}function $l(n,s,a,c){var d=Ve,p=gr.transition;gr.transition=null;try{Ve=4,fa(n,s,a,c)}finally{Ve=d,gr.transition=p}}function fa(n,s,a,c){if(yr){var d=$s(n,s,a,c);if(d===null)ph(n,s,c,Gn,a),Zr(n,c);else if(zl(d,n,s,a,c))c.stopPropagation();else if(Zr(n,c),s&4&&-1<jl.indexOf(n)){for(;d!==null;){var p=Ca(d);if(p!==null&&ua(p),p=$s(n,s,a,c),p===null&&ph(n,s,c,Gn,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else ph(n,s,c,null,a)}}var Gn=null;function $s(n,s,a,c){if(Gn=null,n=Os(c),n=is(n),n!==null)if(s=Sn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=ta(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Gn=n,null}function qs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(th()){case Us:return 1;case ra:return 4;case Ki:case ia:return 16;case Fs:return 536870912;default:return 16}default:return 16}}var nn=null,Ws=null,_r=null;function ql(){if(_r)return _r;var n,s=Ws,a=s.length,c,d="value"in nn?nn.value:nn.textContent,p=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[p-c];c++);return _r=d.slice(n,1<c?1-c:void 0)}function ts(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Kn(){return!0}function pa(){return!1}function Vt(n){function s(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Kn:pa,this.isPropagationStopped=pa,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),s}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=Vt(Qn),ni=ae({},Qn,{view:0,detail:0}),Hs=Vt(ni),Gs,Ks,rn,rs=ae({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ee,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rn&&(rn&&n.type==="mousemove"?(Gs=n.screenX-rn.screenX,Ks=n.screenY-rn.screenY):Ks=Gs=0,rn=n),Gs)},movementY:function(n){return"movementY"in n?n.movementY:Ks}}),ma=Vt(rs),Wl=ae({},rs,{dataTransfer:0}),Hl=Vt(Wl),Qs=ae({},ni,{relatedTarget:0}),Ct=Vt(Qs),Gl=ae({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Kl=Vt(Gl),ri=ae({},Qn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=Vt(ri),m=ae({},Qn,{data:0}),_=Vt(m),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=B[n])?!!s[n]:!1}function Ee(){return Z}var at=ae({},ni,{key:function(n){if(n.key){var s=T[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=ts(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?U[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ee,charCode:function(n){return n.type==="keypress"?ts(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ts(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ze=Vt(at),ht=ae({},rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sn=Vt(ht),vr=ae({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ee}),Yn=Vt(vr),Xn=ae({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ys=Vt(Xn),ga=ae({},rs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),EE=Vt(ga),TE=[9,13,27,32],ih=f&&"CompositionEvent"in window,ya=null;f&&"documentMode"in document&&(ya=document.documentMode);var IE=f&&"TextEvent"in window&&!ya,yp=f&&(!ih||ya&&8<ya&&11>=ya),_p=" ",vp=!1;function wp(n,s){switch(n){case"keyup":return TE.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Xs=!1;function SE(n,s){switch(n){case"compositionend":return Ep(s);case"keypress":return s.which!==32?null:(vp=!0,_p);case"textInput":return n=s.data,n===_p&&vp?null:n;default:return null}}function AE(n,s){if(Xs)return n==="compositionend"||!ih&&wp(n,s)?(n=ql(),_r=Ws=nn=null,Xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return yp&&s.locale!=="ko"?null:s.data;default:return null}}var CE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!CE[n.type]:s==="textarea"}function Ip(n,s,a,c){Kr(c),s=Zl(s,"onChange"),0<s.length&&(a=new ns("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var _a=null,va=null;function RE(n){zp(n,0)}function Ql(n){var s=no(n);if(Go(s))return n}function PE(n,s){if(n==="change")return s}var Sp=!1;if(f){var sh;if(f){var oh="oninput"in document;if(!oh){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),oh=typeof Ap.oninput=="function"}sh=oh}else sh=!1;Sp=sh&&(!document.documentMode||9<document.documentMode)}function Cp(){_a&&(_a.detachEvent("onpropertychange",Rp),va=_a=null)}function Rp(n){if(n.propertyName==="value"&&Ql(va)){var s=[];Ip(s,va,n,Os(n)),Dl(RE,s)}}function kE(n,s,a){n==="focusin"?(Cp(),_a=s,va=a,_a.attachEvent("onpropertychange",Rp)):n==="focusout"&&Cp()}function xE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ql(va)}function NE(n,s){if(n==="click")return Ql(s)}function DE(n,s){if(n==="input"||n==="change")return Ql(s)}function VE(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Cn=typeof Object.is=="function"?Object.is:VE;function wa(n,s){if(Cn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!Cn(n[d],s[d]))return!1}return!0}function Pp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kp(n,s){var a=Pp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pp(a)}}function xp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?xp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Np(){for(var n=window,s=Br();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Br(n.document)}return s}function ah(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function bE(n){var s=Np(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&xp(a.ownerDocument.documentElement,a)){if(c!==null&&ah(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=kp(a,p);var v=kp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var OE=f&&"documentMode"in document&&11>=document.documentMode,Js=null,lh=null,Ea=null,uh=!1;function Dp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uh||Js==null||Js!==Br(c)||(c=Js,"selectionStart"in c&&ah(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ea&&wa(Ea,c)||(Ea=c,c=Zl(lh,"onSelect"),0<c.length&&(s=new ns("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=Js)))}function Yl(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var Zs={animationend:Yl("Animation","AnimationEnd"),animationiteration:Yl("Animation","AnimationIteration"),animationstart:Yl("Animation","AnimationStart"),transitionend:Yl("Transition","TransitionEnd")},ch={},Vp={};f&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Xl(n){if(ch[n])return ch[n];if(!Zs[n])return n;var s=Zs[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in Vp)return ch[n]=s[a];return n}var bp=Xl("animationend"),Op=Xl("animationiteration"),Lp=Xl("animationstart"),Mp=Xl("transitionend"),Up=new Map,Fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(n,s){Up.set(n,s),l(s,[n])}for(var hh=0;hh<Fp.length;hh++){var dh=Fp[hh],LE=dh.toLowerCase(),ME=dh[0].toUpperCase()+dh.slice(1);ii(LE,"on"+ME)}ii(bp,"onAnimationEnd"),ii(Op,"onAnimationIteration"),ii(Lp,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(Mp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function jp(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,ea(c,s,void 0,n),n.currentTarget=null}function zp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(s)for(var v=c.length-1;0<=v;v--){var I=c[v],k=I.instance,z=I.currentTarget;if(I=I.listener,k!==p&&d.isPropagationStopped())break e;jp(d,I,z),p=k}else for(v=0;v<c.length;v++){if(I=c[v],k=I.instance,z=I.currentTarget,I=I.listener,k!==p&&d.isPropagationStopped())break e;jp(d,I,z),p=k}}}if(Ls)throw n=cn,Ls=!1,cn=null,n}function Ke(n,s){var a=s[wh];a===void 0&&(a=s[wh]=new Set);var c=n+"__bubble";a.has(c)||(Bp(s,n,2,!1),a.add(c))}function fh(n,s,a){var c=0;s&&(c|=4),Bp(a,n,c,s)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Ia(n){if(!n[Jl]){n[Jl]=!0,i.forEach(function(a){a!=="selectionchange"&&(UE.has(a)||fh(a,!1,n),fh(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Jl]||(s[Jl]=!0,fh("selectionchange",!1,s))}}function Bp(n,s,a,c){switch(qs(s)){case 1:var d=Hn;break;case 4:d=$l;break;default:d=fa}a=d.bind(null,s,a,n),d=void 0,!Yr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function ph(n,s,a,c,d){var p=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;I!==null;){if(v=is(I),v===null)return;if(k=v.tag,k===5||k===6){c=p=v;continue e}I=I.parentNode}}c=c.return}Dl(function(){var z=p,Y=Os(a),X=[];e:{var Q=Up.get(n);if(Q!==void 0){var ie=ns,ue=n;switch(n){case"keypress":if(ts(a)===0)break e;case"keydown":case"keyup":ie=ze;break;case"focusin":ue="focus",ie=Ct;break;case"focusout":ue="blur",ie=Ct;break;case"beforeblur":case"afterblur":ie=Ct;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=ma;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Hl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Yn;break;case bp:case Op:case Lp:ie=Kl;break;case Mp:ie=Ys;break;case"scroll":ie=Hs;break;case"wheel":ie=EE;break;case"copy":case"cut":case"paste":ie=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=sn}var ce=(s&4)!==0,lt=!ce&&n==="scroll",M=ce?Q!==null?Q+"Capture":null:Q;ce=[];for(var D=z,F;D!==null;){F=D;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,M!==null&&(J=Wi(D,M),J!=null&&ce.push(Sa(D,J,F)))),lt)break;D=D.return}0<ce.length&&(Q=new ie(Q,ue,null,a,Y),X.push({event:Q,listeners:ce}))}}if((s&7)===0){e:{if(Q=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",Q&&a!==Gr&&(ue=a.relatedTarget||a.fromElement)&&(is(ue)||ue[wr]))break e;if((ie||Q)&&(Q=Y.window===Y?Y:(Q=Y.ownerDocument)?Q.defaultView||Q.parentWindow:window,ie?(ue=a.relatedTarget||a.toElement,ie=z,ue=ue?is(ue):null,ue!==null&&(lt=Sn(ue),ue!==lt||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=z),ie!==ue)){if(ce=ma,J="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(ce=sn,J="onPointerLeave",M="onPointerEnter",D="pointer"),lt=ie==null?Q:no(ie),F=ue==null?Q:no(ue),Q=new ce(J,D+"leave",ie,a,Y),Q.target=lt,Q.relatedTarget=F,J=null,is(Y)===z&&(ce=new ce(M,D+"enter",ue,a,Y),ce.target=F,ce.relatedTarget=lt,J=ce),lt=J,ie&&ue)t:{for(ce=ie,M=ue,D=0,F=ce;F;F=eo(F))D++;for(F=0,J=M;J;J=eo(J))F++;for(;0<D-F;)ce=eo(ce),D--;for(;0<F-D;)M=eo(M),F--;for(;D--;){if(ce===M||M!==null&&ce===M.alternate)break t;ce=eo(ce),M=eo(M)}ce=null}else ce=null;ie!==null&&$p(X,Q,ie,ce,!1),ue!==null&&lt!==null&&$p(X,lt,ue,ce,!0)}}e:{if(Q=z?no(z):window,ie=Q.nodeName&&Q.nodeName.toLowerCase(),ie==="select"||ie==="input"&&Q.type==="file")var he=PE;else if(Tp(Q))if(Sp)he=DE;else{he=xE;var me=kE}else(ie=Q.nodeName)&&ie.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(he=NE);if(he&&(he=he(n,z))){Ip(X,he,a,Y);break e}me&&me(n,Q,z),n==="focusout"&&(me=Q._wrapperState)&&me.controlled&&Q.type==="number"&&ct(Q,"number",Q.value)}switch(me=z?no(z):window,n){case"focusin":(Tp(me)||me.contentEditable==="true")&&(Js=me,lh=z,Ea=null);break;case"focusout":Ea=lh=Js=null;break;case"mousedown":uh=!0;break;case"contextmenu":case"mouseup":case"dragend":uh=!1,Dp(X,a,Y);break;case"selectionchange":if(OE)break;case"keydown":case"keyup":Dp(X,a,Y)}var ge;if(ih)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Xs?wp(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(yp&&a.locale!=="ko"&&(Xs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Xs&&(ge=ql()):(nn=Y,Ws="value"in nn?nn.value:nn.textContent,Xs=!0)),me=Zl(z,ve),0<me.length&&(ve=new _(ve,n,null,a,Y),X.push({event:ve,listeners:me}),ge?ve.data=ge:(ge=Ep(a),ge!==null&&(ve.data=ge)))),(ge=IE?SE(n,a):AE(n,a))&&(z=Zl(z,"onBeforeInput"),0<z.length&&(Y=new _("onBeforeInput","beforeinput",null,a,Y),X.push({event:Y,listeners:z}),Y.data=ge))}zp(X,s)})}function Sa(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Zl(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Wi(n,a),p!=null&&c.unshift(Sa(n,p,d)),p=Wi(n,s),p!=null&&c.push(Sa(n,p,d))),n=n.return}return c}function eo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $p(n,s,a,c,d){for(var p=s._reactName,v=[];a!==null&&a!==c;){var I=a,k=I.alternate,z=I.stateNode;if(k!==null&&k===c)break;I.tag===5&&z!==null&&(I=z,d?(k=Wi(a,p),k!=null&&v.unshift(Sa(a,k,I))):d||(k=Wi(a,p),k!=null&&v.push(Sa(a,k,I)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var FE=/\r\n?/g,jE=/\u0000|\uFFFD/g;function qp(n){return(typeof n=="string"?n:""+n).replace(FE,`
`).replace(jE,"")}function eu(n,s,a){if(s=qp(s),qp(n)!==s&&a)throw Error(t(425))}function tu(){}var mh=null,gh=null;function yh(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var _h=typeof setTimeout=="function"?setTimeout:void 0,zE=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=typeof Promise=="function"?Promise:void 0,BE=typeof queueMicrotask=="function"?queueMicrotask:typeof Wp<"u"?function(n){return Wp.resolve(null).then(n).catch($E)}:_h;function $E(n){setTimeout(function(){throw n})}function vh(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ti(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ti(s)}function si(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Hp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var to=Math.random().toString(36).slice(2),Jn="__reactFiber$"+to,Aa="__reactProps$"+to,wr="__reactContainer$"+to,wh="__reactEvents$"+to,qE="__reactListeners$"+to,WE="__reactHandles$"+to;function is(n){var s=n[Jn];if(s)return s;for(var a=n.parentNode;a;){if(s=a[wr]||a[Jn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Hp(n);n!==null;){if(a=n[Jn])return a;n=Hp(n)}return s}n=a,a=n.parentNode}return null}function Ca(n){return n=n[Jn]||n[wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function no(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function nu(n){return n[Aa]||null}var Eh=[],ro=-1;function oi(n){return{current:n}}function Qe(n){0>ro||(n.current=Eh[ro],Eh[ro]=null,ro--)}function We(n,s){ro++,Eh[ro]=n.current,n.current=s}var ai={},bt=oi(ai),Wt=oi(!1),ss=ai;function io(n,s){var a=n.type.contextTypes;if(!a)return ai;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=s[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function ru(){Qe(Wt),Qe(bt)}function Gp(n,s,a){if(bt.current!==ai)throw Error(t(168));We(bt,s),We(Wt,a)}function Kp(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Fe(n)||"Unknown",d));return ae({},a,c)}function iu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ai,ss=bt.current,We(bt,n),We(Wt,Wt.current),!0}function Qp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Kp(n,s,ss),c.__reactInternalMemoizedMergedChildContext=n,Qe(Wt),Qe(bt),We(bt,n)):Qe(Wt),We(Wt,a)}var Er=null,su=!1,Th=!1;function Yp(n){Er===null?Er=[n]:Er.push(n)}function HE(n){su=!0,Yp(n)}function li(){if(!Th&&Er!==null){Th=!0;var n=0,s=Ve;try{var a=Er;for(Ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Er=null,su=!1}catch(d){throw Er!==null&&(Er=Er.slice(n+1)),na(Us,li),d}finally{Ve=s,Th=!1}}return null}var so=[],oo=0,ou=null,au=0,dn=[],fn=0,os=null,Tr=1,Ir="";function as(n,s){so[oo++]=au,so[oo++]=ou,ou=n,au=s}function Xp(n,s,a){dn[fn++]=Tr,dn[fn++]=Ir,dn[fn++]=os,os=n;var c=Tr;n=Ir;var d=32-en(c)-1;c&=~(1<<d),a+=1;var p=32-en(s)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Tr=1<<32-en(s)+d|a<<d|c,Ir=p+n}else Tr=1<<p|a<<d|c,Ir=n}function Ih(n){n.return!==null&&(as(n,1),Xp(n,1,0))}function Sh(n){for(;n===ou;)ou=so[--oo],so[oo]=null,au=so[--oo],so[oo]=null;for(;n===os;)os=dn[--fn],dn[fn]=null,Ir=dn[--fn],dn[fn]=null,Tr=dn[--fn],dn[fn]=null}var on=null,an=null,Je=!1,Rn=null;function Jp(n,s){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Zp(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,on=n,an=si(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,on=n,an=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=os!==null?{id:Tr,overflow:Ir}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function Ah(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ch(n){if(Je){var s=an;if(s){var a=s;if(!Zp(n,s)){if(Ah(n))throw Error(t(418));s=si(a.nextSibling);var c=on;s&&Zp(n,s)?Jp(c,a):(n.flags=n.flags&-4097|2,Je=!1,on=n)}}else{if(Ah(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,on=n}}}function em(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function lu(n){if(n!==on)return!1;if(!Je)return em(n),Je=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!yh(n.type,n.memoizedProps)),s&&(s=an)){if(Ah(n))throw tm(),Error(t(418));for(;s;)Jp(n,s),s=si(s.nextSibling)}if(em(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){an=si(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}an=null}}else an=on?si(n.stateNode.nextSibling):null;return!0}function tm(){for(var n=an;n;)n=si(n.nextSibling)}function ao(){an=on=null,Je=!1}function Rh(n){Rn===null?Rn=[n]:Rn.push(n)}var GE=fe.ReactCurrentBatchConfig;function Ra(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(v){var I=d.refs;v===null?delete I[p]:I[p]=v},s._stringRef=p,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function uu(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function nm(n){var s=n._init;return s(n._payload)}function rm(n){function s(M,D){if(n){var F=M.deletions;F===null?(M.deletions=[D],M.flags|=16):F.push(D)}}function a(M,D){if(!n)return null;for(;D!==null;)s(M,D),D=D.sibling;return null}function c(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function d(M,D){return M=gi(M,D),M.index=0,M.sibling=null,M}function p(M,D,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<D?(M.flags|=2,D):F):(M.flags|=2,D)):(M.flags|=1048576,D)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,D,F,J){return D===null||D.tag!==6?(D=_d(F,M.mode,J),D.return=M,D):(D=d(D,F),D.return=M,D)}function k(M,D,F,J){var he=F.type;return he===x?Y(M,D,F.props.children,J,F.key):D!==null&&(D.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&nm(he)===D.type)?(J=d(D,F.props),J.ref=Ra(M,D,F),J.return=M,J):(J=Vu(F.type,F.key,F.props,null,M.mode,J),J.ref=Ra(M,D,F),J.return=M,J)}function z(M,D,F,J){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=vd(F,M.mode,J),D.return=M,D):(D=d(D,F.children||[]),D.return=M,D)}function Y(M,D,F,J,he){return D===null||D.tag!==7?(D=ms(F,M.mode,J,he),D.return=M,D):(D=d(D,F),D.return=M,D)}function X(M,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=_d(""+D,M.mode,F),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case De:return F=Vu(D.type,D.key,D.props,null,M.mode,F),F.ref=Ra(M,null,D),F.return=M,F;case Ae:return D=vd(D,M.mode,F),D.return=M,D;case Dt:var J=D._init;return X(M,J(D._payload),F)}if(ot(D)||pe(D))return D=ms(D,M.mode,F,null),D.return=M,D;uu(M,D)}return null}function Q(M,D,F,J){var he=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:I(M,D,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case De:return F.key===he?k(M,D,F,J):null;case Ae:return F.key===he?z(M,D,F,J):null;case Dt:return he=F._init,Q(M,D,he(F._payload),J)}if(ot(F)||pe(F))return he!==null?null:Y(M,D,F,J,null);uu(M,F)}return null}function ie(M,D,F,J,he){if(typeof J=="string"&&J!==""||typeof J=="number")return M=M.get(F)||null,I(D,M,""+J,he);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case De:return M=M.get(J.key===null?F:J.key)||null,k(D,M,J,he);case Ae:return M=M.get(J.key===null?F:J.key)||null,z(D,M,J,he);case Dt:var me=J._init;return ie(M,D,F,me(J._payload),he)}if(ot(J)||pe(J))return M=M.get(F)||null,Y(D,M,J,he,null);uu(D,J)}return null}function ue(M,D,F,J){for(var he=null,me=null,ge=D,ve=D=0,It=null;ge!==null&&ve<F.length;ve++){ge.index>ve?(It=ge,ge=null):It=ge.sibling;var Me=Q(M,ge,F[ve],J);if(Me===null){ge===null&&(ge=It);break}n&&ge&&Me.alternate===null&&s(M,ge),D=p(Me,D,ve),me===null?he=Me:me.sibling=Me,me=Me,ge=It}if(ve===F.length)return a(M,ge),Je&&as(M,ve),he;if(ge===null){for(;ve<F.length;ve++)ge=X(M,F[ve],J),ge!==null&&(D=p(ge,D,ve),me===null?he=ge:me.sibling=ge,me=ge);return Je&&as(M,ve),he}for(ge=c(M,ge);ve<F.length;ve++)It=ie(ge,M,ve,F[ve],J),It!==null&&(n&&It.alternate!==null&&ge.delete(It.key===null?ve:It.key),D=p(It,D,ve),me===null?he=It:me.sibling=It,me=It);return n&&ge.forEach(function(yi){return s(M,yi)}),Je&&as(M,ve),he}function ce(M,D,F,J){var he=pe(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var me=he=null,ge=D,ve=D=0,It=null,Me=F.next();ge!==null&&!Me.done;ve++,Me=F.next()){ge.index>ve?(It=ge,ge=null):It=ge.sibling;var yi=Q(M,ge,Me.value,J);if(yi===null){ge===null&&(ge=It);break}n&&ge&&yi.alternate===null&&s(M,ge),D=p(yi,D,ve),me===null?he=yi:me.sibling=yi,me=yi,ge=It}if(Me.done)return a(M,ge),Je&&as(M,ve),he;if(ge===null){for(;!Me.done;ve++,Me=F.next())Me=X(M,Me.value,J),Me!==null&&(D=p(Me,D,ve),me===null?he=Me:me.sibling=Me,me=Me);return Je&&as(M,ve),he}for(ge=c(M,ge);!Me.done;ve++,Me=F.next())Me=ie(ge,M,ve,Me.value,J),Me!==null&&(n&&Me.alternate!==null&&ge.delete(Me.key===null?ve:Me.key),D=p(Me,D,ve),me===null?he=Me:me.sibling=Me,me=Me);return n&&ge.forEach(function(C0){return s(M,C0)}),Je&&as(M,ve),he}function lt(M,D,F,J){if(typeof F=="object"&&F!==null&&F.type===x&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case De:e:{for(var he=F.key,me=D;me!==null;){if(me.key===he){if(he=F.type,he===x){if(me.tag===7){a(M,me.sibling),D=d(me,F.props.children),D.return=M,M=D;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&nm(he)===me.type){a(M,me.sibling),D=d(me,F.props),D.ref=Ra(M,me,F),D.return=M,M=D;break e}a(M,me);break}else s(M,me);me=me.sibling}F.type===x?(D=ms(F.props.children,M.mode,J,F.key),D.return=M,M=D):(J=Vu(F.type,F.key,F.props,null,M.mode,J),J.ref=Ra(M,D,F),J.return=M,M=J)}return v(M);case Ae:e:{for(me=F.key;D!==null;){if(D.key===me)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){a(M,D.sibling),D=d(D,F.children||[]),D.return=M,M=D;break e}else{a(M,D);break}else s(M,D);D=D.sibling}D=vd(F,M.mode,J),D.return=M,M=D}return v(M);case Dt:return me=F._init,lt(M,D,me(F._payload),J)}if(ot(F))return ue(M,D,F,J);if(pe(F))return ce(M,D,F,J);uu(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(a(M,D.sibling),D=d(D,F),D.return=M,M=D):(a(M,D),D=_d(F,M.mode,J),D.return=M,M=D),v(M)):a(M,D)}return lt}var lo=rm(!0),im=rm(!1),cu=oi(null),hu=null,uo=null,Ph=null;function kh(){Ph=uo=hu=null}function xh(n){var s=cu.current;Qe(cu),n._currentValue=s}function Nh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function co(n,s){hu=n,Ph=uo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Gt=!0),n.firstContext=null)}function pn(n){var s=n._currentValue;if(Ph!==n)if(n={context:n,memoizedValue:s,next:null},uo===null){if(hu===null)throw Error(t(308));uo=n,hu.dependencies={lanes:0,firstContext:n}}else uo=uo.next=n;return s}var ls=null;function Dh(n){ls===null?ls=[n]:ls.push(n)}function sm(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Dh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Sr(n,c)}function Sr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ui=!1;function Vh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function om(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ar(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ci(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Sr(n,a)}return d=c.interleaved,d===null?(s.next=s,Dh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Sr(n,a)}function du(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,la(n,a)}}function am(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=s:p=p.next=s}else d=p=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function fu(n,s,a,c){var d=n.updateQueue;ui=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var k=I,z=k.next;k.next=null,v===null?p=z:v.next=z,v=k;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,I=Y.lastBaseUpdate,I!==v&&(I===null?Y.firstBaseUpdate=z:I.next=z,Y.lastBaseUpdate=k))}if(p!==null){var X=d.baseState;v=0,Y=z=k=null,I=p;do{var Q=I.lane,ie=I.eventTime;if((c&Q)===Q){Y!==null&&(Y=Y.next={eventTime:ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ue=n,ce=I;switch(Q=s,ie=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){X=ue.call(ie,X,Q);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,Q=typeof ue=="function"?ue.call(ie,X,Q):ue,Q==null)break e;X=ae({},X,Q);break e;case 2:ui=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,Q=d.effects,Q===null?d.effects=[I]:Q.push(I))}else ie={eventTime:ie,lane:Q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Y===null?(z=Y=ie,k=X):Y=Y.next=ie,v|=Q;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;Q=I,I=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);if(Y===null&&(k=X),d.baseState=k,d.firstBaseUpdate=z,d.lastBaseUpdate=Y,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);hs|=v,n.lanes=v,n.memoizedState=X}}function lm(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Pa={},Zn=oi(Pa),ka=oi(Pa),xa=oi(Pa);function us(n){if(n===Pa)throw Error(t(174));return n}function bh(n,s){switch(We(xa,s),We(ka,n),We(Zn,Pa),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ds(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=Ds(s,n)}Qe(Zn),We(Zn,s)}function ho(){Qe(Zn),Qe(ka),Qe(xa)}function um(n){us(xa.current);var s=us(Zn.current),a=Ds(s,n.type);s!==a&&(We(ka,n),We(Zn,a))}function Oh(n){ka.current===n&&(Qe(Zn),Qe(ka))}var Ze=oi(0);function pu(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Lh=[];function Mh(){for(var n=0;n<Lh.length;n++)Lh[n]._workInProgressVersionPrimary=null;Lh.length=0}var mu=fe.ReactCurrentDispatcher,Uh=fe.ReactCurrentBatchConfig,cs=0,et=null,yt=null,Et=null,gu=!1,Na=!1,Da=0,KE=0;function Ot(){throw Error(t(321))}function Fh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!Cn(n[a],s[a]))return!1;return!0}function jh(n,s,a,c,d,p){if(cs=p,et=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,mu.current=n===null||n.memoizedState===null?JE:ZE,n=a(c,d),Na){p=0;do{if(Na=!1,Da=0,25<=p)throw Error(t(301));p+=1,Et=yt=null,s.updateQueue=null,mu.current=e0,n=a(c,d)}while(Na)}if(mu.current=vu,s=yt!==null&&yt.next!==null,cs=0,Et=yt=et=null,gu=!1,s)throw Error(t(300));return n}function zh(){var n=Da!==0;return Da=0,n}function er(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?et.memoizedState=Et=n:Et=Et.next=n,Et}function mn(){if(yt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var s=Et===null?et.memoizedState:Et.next;if(s!==null)Et=s,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Et===null?et.memoizedState=Et=n:Et=Et.next=n}return Et}function Va(n,s){return typeof s=="function"?s(n):s}function Bh(n){var s=mn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=v=null,k=null,z=p;do{var Y=z.lane;if((cs&Y)===Y)k!==null&&(k=k.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var X={lane:Y,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};k===null?(I=k=X,v=c):k=k.next=X,et.lanes|=Y,hs|=Y}z=z.next}while(z!==null&&z!==p);k===null?v=c:k.next=I,Cn(c,s.memoizedState)||(Gt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,et.lanes|=p,hs|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function $h(n){var s=mn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);Cn(p,s.memoizedState)||(Gt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),a.lastRenderedState=p}return[p,c]}function cm(){}function hm(n,s){var a=et,c=mn(),d=s(),p=!Cn(c.memoizedState,d);if(p&&(c.memoizedState=d,Gt=!0),c=c.queue,qh(pm.bind(null,a,c,n),[n]),c.getSnapshot!==s||p||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,ba(9,fm.bind(null,a,c,d,s),void 0,null),Tt===null)throw Error(t(349));(cs&30)!==0||dm(a,s,d)}return d}function dm(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function fm(n,s,a,c){s.value=a,s.getSnapshot=c,mm(s)&&gm(n)}function pm(n,s,a){return a(function(){mm(s)&&gm(n)})}function mm(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!Cn(n,a)}catch{return!0}}function gm(n){var s=Sr(n,1);s!==null&&Nn(s,n,1,-1)}function ym(n){var s=er();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:n},s.queue=n,n=n.dispatch=XE.bind(null,et,n),[s.memoizedState,n]}function ba(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function _m(){return mn().memoizedState}function yu(n,s,a,c){var d=er();et.flags|=n,d.memoizedState=ba(1|s,a,void 0,c===void 0?null:c)}function _u(n,s,a,c){var d=mn();c=c===void 0?null:c;var p=void 0;if(yt!==null){var v=yt.memoizedState;if(p=v.destroy,c!==null&&Fh(c,v.deps)){d.memoizedState=ba(s,a,p,c);return}}et.flags|=n,d.memoizedState=ba(1|s,a,p,c)}function vm(n,s){return yu(8390656,8,n,s)}function qh(n,s){return _u(2048,8,n,s)}function wm(n,s){return _u(4,2,n,s)}function Em(n,s){return _u(4,4,n,s)}function Tm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Im(n,s,a){return a=a!=null?a.concat([n]):null,_u(4,4,Tm.bind(null,s,n),a)}function Wh(){}function Sm(n,s){var a=mn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Fh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function Am(n,s){var a=mn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Fh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function Cm(n,s,a){return(cs&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a):(Cn(a,s)||(a=oa(),et.lanes|=a,hs|=a,n.baseState=!0),s)}function QE(n,s){var a=Ve;Ve=a!==0&&4>a?a:4,n(!0);var c=Uh.transition;Uh.transition={};try{n(!1),s()}finally{Ve=a,Uh.transition=c}}function Rm(){return mn().memoizedState}function YE(n,s,a){var c=pi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Pm(n))km(s,a);else if(a=sm(n,s,a,c),a!==null){var d=qt();Nn(a,n,c,d),xm(a,s,c)}}function XE(n,s,a){var c=pi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pm(n))km(s,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var v=s.lastRenderedState,I=p(v,a);if(d.hasEagerState=!0,d.eagerState=I,Cn(I,v)){var k=s.interleaved;k===null?(d.next=d,Dh(s)):(d.next=k.next,k.next=d),s.interleaved=d;return}}catch{}finally{}a=sm(n,s,d,c),a!==null&&(d=qt(),Nn(a,n,c,d),xm(a,s,c))}}function Pm(n){var s=n.alternate;return n===et||s!==null&&s===et}function km(n,s){Na=gu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function xm(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,la(n,a)}}var vu={readContext:pn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},JE={readContext:pn,useCallback:function(n,s){return er().memoizedState=[n,s===void 0?null:s],n},useContext:pn,useEffect:vm,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,yu(4194308,4,Tm.bind(null,s,n),a)},useLayoutEffect:function(n,s){return yu(4194308,4,n,s)},useInsertionEffect:function(n,s){return yu(4,2,n,s)},useMemo:function(n,s){var a=er();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=er();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=YE.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var s=er();return n={current:n},s.memoizedState=n},useState:ym,useDebugValue:Wh,useDeferredValue:function(n){return er().memoizedState=n},useTransition:function(){var n=ym(!1),s=n[0];return n=QE.bind(null,n[1]),er().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=et,d=er();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));(cs&30)!==0||dm(c,s,a)}d.memoizedState=a;var p={value:a,getSnapshot:s};return d.queue=p,vm(pm.bind(null,c,p,n),[n]),c.flags|=2048,ba(9,fm.bind(null,c,p,a,s),void 0,null),a},useId:function(){var n=er(),s=Tt.identifierPrefix;if(Je){var a=Ir,c=Tr;a=(c&~(1<<32-en(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Da++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=KE++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},ZE={readContext:pn,useCallback:Sm,useContext:pn,useEffect:qh,useImperativeHandle:Im,useInsertionEffect:wm,useLayoutEffect:Em,useMemo:Am,useReducer:Bh,useRef:_m,useState:function(){return Bh(Va)},useDebugValue:Wh,useDeferredValue:function(n){var s=mn();return Cm(s,yt.memoizedState,n)},useTransition:function(){var n=Bh(Va)[0],s=mn().memoizedState;return[n,s]},useMutableSource:cm,useSyncExternalStore:hm,useId:Rm,unstable_isNewReconciler:!1},e0={readContext:pn,useCallback:Sm,useContext:pn,useEffect:qh,useImperativeHandle:Im,useInsertionEffect:wm,useLayoutEffect:Em,useMemo:Am,useReducer:$h,useRef:_m,useState:function(){return $h(Va)},useDebugValue:Wh,useDeferredValue:function(n){var s=mn();return yt===null?s.memoizedState=n:Cm(s,yt.memoizedState,n)},useTransition:function(){var n=$h(Va)[0],s=mn().memoizedState;return[n,s]},useMutableSource:cm,useSyncExternalStore:hm,useId:Rm,unstable_isNewReconciler:!1};function Pn(n,s){if(n&&n.defaultProps){s=ae({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function Hh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:ae({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var wu={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=qt(),d=pi(n),p=Ar(c,d);p.payload=s,a!=null&&(p.callback=a),s=ci(n,p,d),s!==null&&(Nn(s,n,d,c),du(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=qt(),d=pi(n),p=Ar(c,d);p.tag=1,p.payload=s,a!=null&&(p.callback=a),s=ci(n,p,d),s!==null&&(Nn(s,n,d,c),du(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=qt(),c=pi(n),d=Ar(a,c);d.tag=2,s!=null&&(d.callback=s),s=ci(n,d,c),s!==null&&(Nn(s,n,c,a),du(s,n,c))}};function Nm(n,s,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):s.prototype&&s.prototype.isPureReactComponent?!wa(a,c)||!wa(d,p):!0}function Dm(n,s,a){var c=!1,d=ai,p=s.contextType;return typeof p=="object"&&p!==null?p=pn(p):(d=Ht(s)?ss:bt.current,c=s.contextTypes,p=(c=c!=null)?io(n,d):ai),s=new s(a,p),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=wu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),s}function Vm(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&wu.enqueueReplaceState(s,s.state,null)}function Gh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Vh(n);var p=s.contextType;typeof p=="object"&&p!==null?d.context=pn(p):(p=Ht(s)?ss:bt.current,d.context=io(n,p)),d.state=n.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(Hh(n,s,p,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&wu.enqueueReplaceState(d,d.state,null),fu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function fo(n,s){try{var a="",c=s;do a+=Re(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:s,stack:d,digest:null}}function Kh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Qh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var t0=typeof WeakMap=="function"?WeakMap:Map;function bm(n,s,a){a=Ar(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Ru||(Ru=!0,cd=c),Qh(n,s)},a}function Om(n,s,a){a=Ar(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Qh(n,s)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Qh(n,s),typeof c!="function"&&(di===null?di=new Set([this]):di.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Lm(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new t0;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=m0.bind(null,n,s,a),s.then(n,n))}function Mm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Um(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Ar(-1,1),s.tag=2,ci(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var n0=fe.ReactCurrentOwner,Gt=!1;function $t(n,s,a,c){s.child=n===null?im(s,null,a,c):lo(s,n.child,a,c)}function Fm(n,s,a,c,d){a=a.render;var p=s.ref;return co(s,d),c=jh(n,s,a,c,p,d),a=zh(),n!==null&&!Gt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Cr(n,s,d)):(Je&&a&&Ih(s),s.flags|=1,$t(n,s,c,d),s.child)}function jm(n,s,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!yd(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=p,zm(n,s,p,c,d)):(n=Vu(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:wa,a(v,c)&&n.ref===s.ref)return Cr(n,s,d)}return s.flags|=1,n=gi(p,c),n.ref=s.ref,n.return=s,s.child=n}function zm(n,s,a,c,d){if(n!==null){var p=n.memoizedProps;if(wa(p,c)&&n.ref===s.ref)if(Gt=!1,s.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return s.lanes=n.lanes,Cr(n,s,d)}return Yh(n,s,a,c,d)}function Bm(n,s,a){var c=s.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(mo,ln),ln|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,We(mo,ln),ln|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,We(mo,ln),ln|=c}else p!==null?(c=p.baseLanes|a,s.memoizedState=null):c=a,We(mo,ln),ln|=c;return $t(n,s,d,a),s.child}function $m(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Yh(n,s,a,c,d){var p=Ht(a)?ss:bt.current;return p=io(s,p),co(s,d),a=jh(n,s,a,c,p,d),c=zh(),n!==null&&!Gt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Cr(n,s,d)):(Je&&c&&Ih(s),s.flags|=1,$t(n,s,a,d),s.child)}function qm(n,s,a,c,d){if(Ht(a)){var p=!0;iu(s)}else p=!1;if(co(s,d),s.stateNode===null)Tu(n,s),Dm(s,a,c),Gh(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,I=s.memoizedProps;v.props=I;var k=v.context,z=a.contextType;typeof z=="object"&&z!==null?z=pn(z):(z=Ht(a)?ss:bt.current,z=io(s,z));var Y=a.getDerivedStateFromProps,X=typeof Y=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||k!==z)&&Vm(s,v,c,z),ui=!1;var Q=s.memoizedState;v.state=Q,fu(s,c,v,d),k=s.memoizedState,I!==c||Q!==k||Wt.current||ui?(typeof Y=="function"&&(Hh(s,a,Y,c),k=s.memoizedState),(I=ui||Nm(s,a,I,c,Q,k,z))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=k),v.props=c,v.state=k,v.context=z,c=I):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,om(n,s),I=s.memoizedProps,z=s.type===s.elementType?I:Pn(s.type,I),v.props=z,X=s.pendingProps,Q=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=pn(k):(k=Ht(a)?ss:bt.current,k=io(s,k));var ie=a.getDerivedStateFromProps;(Y=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==X||Q!==k)&&Vm(s,v,c,k),ui=!1,Q=s.memoizedState,v.state=Q,fu(s,c,v,d);var ue=s.memoizedState;I!==X||Q!==ue||Wt.current||ui?(typeof ie=="function"&&(Hh(s,a,ie,c),ue=s.memoizedState),(z=ui||Nm(s,a,z,c,Q,ue,k)||!1)?(Y||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,k)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=k,c=z):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(s.flags|=1024),c=!1)}return Xh(n,s,a,c,p,d)}function Xh(n,s,a,c,d,p){$m(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Qp(s,a,!1),Cr(n,s,p);c=s.stateNode,n0.current=s;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=lo(s,n.child,null,p),s.child=lo(s,null,I,p)):$t(n,s,I,p),s.memoizedState=c.state,d&&Qp(s,a,!0),s.child}function Wm(n){var s=n.stateNode;s.pendingContext?Gp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Gp(n,s.context,!1),bh(n,s.containerInfo)}function Hm(n,s,a,c,d){return ao(),Rh(d),s.flags|=256,$t(n,s,a,c),s.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function Zh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gm(n,s,a){var c=s.pendingProps,d=Ze.current,p=!1,v=(s.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(Ze,d&1),n===null)return Ch(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=s.mode,p=s.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=bu(v,c,0,null),n=ms(n,c,a,null),p.return=s,n.return=s,p.sibling=n,s.child=p,s.child.memoizedState=Zh(a),s.memoizedState=Jh,n):ed(s,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return r0(n,s,v,c,I,d,a);if(p){p=c.fallback,v=s.mode,d=n.child,I=d.sibling;var k={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=k,s.deletions=null):(c=gi(d,k),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=gi(I,p):(p=ms(p,v,a,null),p.flags|=2),p.return=s,c.return=s,c.sibling=p,s.child=c,c=p,p=s.child,v=n.child.memoizedState,v=v===null?Zh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,s.memoizedState=Jh,c}return p=n.child,n=p.sibling,c=gi(p,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function ed(n,s){return s=bu({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Eu(n,s,a,c){return c!==null&&Rh(c),lo(s,n.child,null,a),n=ed(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function r0(n,s,a,c,d,p,v){if(a)return s.flags&256?(s.flags&=-257,c=Kh(Error(t(422))),Eu(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(p=c.fallback,d=s.mode,c=bu({mode:"visible",children:c.children},d,0,null),p=ms(p,d,v,null),p.flags|=2,c.return=s,p.return=s,c.sibling=p,s.child=c,(s.mode&1)!==0&&lo(s,n.child,null,v),s.child.memoizedState=Zh(v),s.memoizedState=Jh,p);if((s.mode&1)===0)return Eu(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=Kh(p,c,void 0),Eu(n,s,v,c)}if(I=(v&n.childLanes)!==0,Gt||I){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Sr(n,d),Nn(c,n,d,-1))}return gd(),c=Kh(Error(t(421))),Eu(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=g0.bind(null,n),d._reactRetry=s,null):(n=p.treeContext,an=si(d.nextSibling),on=s,Je=!0,Rn=null,n!==null&&(dn[fn++]=Tr,dn[fn++]=Ir,dn[fn++]=os,Tr=n.id,Ir=n.overflow,os=s),s=ed(s,c.children),s.flags|=4096,s)}function Km(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),Nh(n.return,s,a)}function td(n,s,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Qm(n,s,a){var c=s.pendingProps,d=c.revealOrder,p=c.tail;if($t(n,s,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Km(n,a,s);else if(n.tag===19)Km(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(Ze,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&pu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),td(s,!1,d,a,p);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&pu(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}td(s,!0,a,null,p);break;case"together":td(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Tu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Cr(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),hs|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=gi(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=gi(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function i0(n,s,a){switch(s.tag){case 3:Wm(s),ao();break;case 5:um(s);break;case 1:Ht(s.type)&&iu(s);break;case 4:bh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;We(cu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(We(Ze,Ze.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Gm(n,s,a):(We(Ze,Ze.current&1),n=Cr(n,s,a),n!==null?n.sibling:null);We(Ze,Ze.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return Qm(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ze,Ze.current),c)break;return null;case 22:case 23:return s.lanes=0,Bm(n,s,a)}return Cr(n,s,a)}var Ym,nd,Xm,Jm;Ym=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},nd=function(){},Xm=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,us(Zn.current);var p=null;switch(a){case"input":d=xs(n,d),c=xs(n,c),p=[];break;case"select":d=ae({},d,{value:void 0}),c=ae({},c,{value:void 0}),p=[];break;case"textarea":d=Qo(n,d),c=Qo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=tu)}In(a,c);var v;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var I=d[z];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?p||(p=[]):(p=p||[]).push(z,null));for(z in c){var k=c[z];if(I=d?.[z],c.hasOwnProperty(z)&&k!==I&&(k!=null||I!=null))if(z==="style")if(I){for(v in I)!I.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&I[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(p||(p=[]),p.push(z,a)),a=k;else z==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(p=p||[]).push(z,k)):z==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(z,""+k):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(k!=null&&z==="onScroll"&&Ke("scroll",n),p||I===k||(p=[])):(p=p||[]).push(z,k))}a&&(p=p||[]).push("style",a);var z=p;(s.updateQueue=z)&&(s.flags|=4)}},Jm=function(n,s,a,c){a!==c&&(s.flags|=4)};function Oa(n,s){if(!Je)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function s0(n,s,a){var c=s.pendingProps;switch(Sh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(s),null;case 1:return Ht(s.type)&&ru(),Lt(s),null;case 3:return c=s.stateNode,ho(),Qe(Wt),Qe(bt),Mh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(lu(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Rn!==null&&(fd(Rn),Rn=null))),nd(n,s),Lt(s),null;case 5:Oh(s);var d=us(xa.current);if(a=s.type,n!==null&&s.stateNode!=null)Xm(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Lt(s),null}if(n=us(Zn.current),lu(s)){c=s.stateNode,a=s.type;var p=s.memoizedProps;switch(c[Jn]=s,c[Aa]=p,n=(s.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<Ta.length;d++)Ke(Ta[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":Cl(c,p),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ke("invalid",c);break;case"textarea":Yo(c,p),Ke("invalid",c)}In(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var I=p[v];v==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&eu(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&eu(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":ks(c),Ko(c,p,!0);break;case"textarea":ks(c),$r(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=tu)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Xo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Jn]=s,n[Aa]=c,Ym(n,s,!1,!1),s.stateNode=n;e:{switch(v=bs(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ta.length;d++)Ke(Ta[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":Cl(n,c),d=xs(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ae({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Yo(n,c),d=Qo(n,c),Ke("invalid",n);break;default:d=c}In(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var k=I[p];p==="style"?Vs(n,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Pl(n,k)):p==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&qi(n,k):typeof k=="number"&&qi(n,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Ke("scroll",n):k!=null&&oe(n,p,k,v))}switch(a){case"input":ks(n),Ko(n,c,!1);break;case"textarea":ks(n),$r(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Oe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Tn(n,!!c.multiple,p,!1):c.defaultValue!=null&&Tn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=tu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Lt(s),null;case 6:if(n&&s.stateNode!=null)Jm(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=us(xa.current),us(Zn.current),lu(s)){if(c=s.stateNode,a=s.memoizedProps,c[Jn]=s,(p=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:eu(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&eu(c.nodeValue,a,(n.mode&1)!==0)}p&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Jn]=s,s.stateNode=c}return Lt(s),null;case 13:if(Qe(Ze),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&an!==null&&(s.mode&1)!==0&&(s.flags&128)===0)tm(),ao(),s.flags|=98560,p=!1;else if(p=lu(s),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Jn]=s}else ao(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Lt(s),p=!1}else Rn!==null&&(fd(Rn),Rn=null),p=!0;if(!p)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(Ze.current&1)!==0?_t===0&&(_t=3):gd())),s.updateQueue!==null&&(s.flags|=4),Lt(s),null);case 4:return ho(),nd(n,s),n===null&&Ia(s.stateNode.containerInfo),Lt(s),null;case 10:return xh(s.type._context),Lt(s),null;case 17:return Ht(s.type)&&ru(),Lt(s),null;case 19:if(Qe(Ze),p=s.memoizedState,p===null)return Lt(s),null;if(c=(s.flags&128)!==0,v=p.rendering,v===null)if(c)Oa(p,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(v=pu(n),v!==null){for(s.flags|=128,Oa(p,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(Ze,Ze.current&1|2),s.child}n=n.sibling}p.tail!==null&&Ge()>go&&(s.flags|=128,c=!0,Oa(p,!1),s.lanes=4194304)}else{if(!c)if(n=pu(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Oa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Je)return Lt(s),null}else 2*Ge()-p.renderingStartTime>go&&a!==1073741824&&(s.flags|=128,c=!0,Oa(p,!1),s.lanes=4194304);p.isBackwards?(v.sibling=s.child,s.child=v):(a=p.last,a!==null?a.sibling=v:s.child=v,p.last=v)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=Ge(),s.sibling=null,a=Ze.current,We(Ze,c?a&1|2:a&1),s):(Lt(s),null);case 22:case 23:return md(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(ln&1073741824)!==0&&(Lt(s),s.subtreeFlags&6&&(s.flags|=8192)):Lt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function o0(n,s){switch(Sh(s),s.tag){case 1:return Ht(s.type)&&ru(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return ho(),Qe(Wt),Qe(bt),Mh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Oh(s),null;case 13:if(Qe(Ze),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ao()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Qe(Ze),null;case 4:return ho(),null;case 10:return xh(s.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var Iu=!1,Mt=!1,a0=typeof WeakSet=="function"?WeakSet:Set,le=null;function po(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,s,c)}else a.current=null}function rd(n,s,a){try{a()}catch(c){it(n,s,c)}}var Zm=!1;function l0(n,s){if(mh=yr,n=Np(),ah(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,I=-1,k=-1,z=0,Y=0,X=n,Q=null;t:for(;;){for(var ie;X!==a||d!==0&&X.nodeType!==3||(I=v+d),X!==p||c!==0&&X.nodeType!==3||(k=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(ie=X.firstChild)!==null;)Q=X,X=ie;for(;;){if(X===n)break t;if(Q===a&&++z===d&&(I=v),Q===p&&++Y===c&&(k=v),(ie=X.nextSibling)!==null)break;X=Q,Q=X.parentNode}X=ie}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(gh={focusedElem:n,selectionRange:a},yr=!1,le=s;le!==null;)if(s=le,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,le=n;else for(;le!==null;){s=le;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,lt=ue.memoizedState,M=s.stateNode,D=M.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Pn(s.type,ce),lt);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){it(s,s.return,J)}if(n=s.sibling,n!==null){n.return=s.return,le=n;break}le=s.return}return ue=Zm,Zm=!1,ue}function La(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&rd(s,a,p)}d=d.next}while(d!==c)}}function Su(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function id(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function eg(n){var s=n.alternate;s!==null&&(n.alternate=null,eg(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Jn],delete s[Aa],delete s[wh],delete s[qE],delete s[WE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tg(n){return n.tag===5||n.tag===3||n.tag===4}function ng(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sd(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=tu));else if(c!==4&&(n=n.child,n!==null))for(sd(n,s,a),n=n.sibling;n!==null;)sd(n,s,a),n=n.sibling}function od(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(od(n,s,a),n=n.sibling;n!==null;)od(n,s,a),n=n.sibling}var Rt=null,kn=!1;function hi(n,s,a){for(a=a.child;a!==null;)rg(n,s,a),a=a.sibling}function rg(n,s,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Qi,a)}catch{}switch(a.tag){case 5:Mt||po(a,s);case 6:var c=Rt,d=kn;Rt=null,hi(n,s,a),Rt=c,kn=d,Rt!==null&&(kn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(kn?(n=Rt,a=a.stateNode,n.nodeType===8?vh(n.parentNode,a):n.nodeType===1&&vh(n,a),ti(n)):vh(Rt,a.stateNode));break;case 4:c=Rt,d=kn,Rt=a.stateNode.containerInfo,kn=!0,hi(n,s,a),Rt=c,kn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&rd(a,s,v),d=d.next}while(d!==c)}hi(n,s,a);break;case 1:if(!Mt&&(po(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){it(a,s,I)}hi(n,s,a);break;case 21:hi(n,s,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,hi(n,s,a),Mt=c):hi(n,s,a);break;default:hi(n,s,a)}}function ig(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new a0),s.forEach(function(c){var d=y0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function xn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=s,I=v;e:for(;I!==null;){switch(I.tag){case 5:Rt=I.stateNode,kn=!1;break e;case 3:Rt=I.stateNode.containerInfo,kn=!0;break e;case 4:Rt=I.stateNode.containerInfo,kn=!0;break e}I=I.return}if(Rt===null)throw Error(t(160));rg(p,v,d),Rt=null,kn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(z){it(d,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)sg(s,n),s=s.sibling}function sg(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xn(s,n),tr(n),c&4){try{La(3,n,n.return),Su(3,n)}catch(ce){it(n,n.return,ce)}try{La(5,n,n.return)}catch(ce){it(n,n.return,ce)}}break;case 1:xn(s,n),tr(n),c&512&&a!==null&&po(a,a.return);break;case 5:if(xn(s,n),tr(n),c&512&&a!==null&&po(a,a.return),n.flags&32){var d=n.stateNode;try{qi(d,"")}catch(ce){it(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Ns(d,p),bs(I,v);var z=bs(I,p);for(v=0;v<k.length;v+=2){var Y=k[v],X=k[v+1];Y==="style"?Vs(d,X):Y==="dangerouslySetInnerHTML"?Pl(d,X):Y==="children"?qi(d,X):oe(d,Y,X,z)}switch(I){case"input":$i(d,p);break;case"textarea":Rl(d,p);break;case"select":var Q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ie=p.value;ie!=null?Tn(d,!!p.multiple,ie,!1):Q!==!!p.multiple&&(p.defaultValue!=null?Tn(d,!!p.multiple,p.defaultValue,!0):Tn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Aa]=p}catch(ce){it(n,n.return,ce)}}break;case 6:if(xn(s,n),tr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ce){it(n,n.return,ce)}}break;case 3:if(xn(s,n),tr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ti(s.containerInfo)}catch(ce){it(n,n.return,ce)}break;case 4:xn(s,n),tr(n);break;case 13:xn(s,n),tr(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(ud=Ge())),c&4&&ig(n);break;case 22:if(Y=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(z=Mt)||Y,xn(s,n),Mt=z):xn(s,n),tr(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!Y&&(n.mode&1)!==0)for(le=n,Y=n.child;Y!==null;){for(X=le=Y;le!==null;){switch(Q=le,ie=Q.child,Q.tag){case 0:case 11:case 14:case 15:La(4,Q,Q.return);break;case 1:po(Q,Q.return);var ue=Q.stateNode;if(typeof ue.componentWillUnmount=="function"){c=Q,a=Q.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){it(c,a,ce)}}break;case 5:po(Q,Q.return);break;case 22:if(Q.memoizedState!==null){lg(X);continue}}ie!==null?(ie.return=Q,le=ie):lg(X)}Y=Y.sibling}e:for(Y=null,X=n;;){if(X.tag===5){if(Y===null){Y=X;try{d=X.stateNode,z?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=X.stateNode,k=X.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=Hr("display",v))}catch(ce){it(n,n.return,ce)}}}else if(X.tag===6){if(Y===null)try{X.stateNode.nodeValue=z?"":X.memoizedProps}catch(ce){it(n,n.return,ce)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Y===X&&(Y=null),X=X.return}Y===X&&(Y=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:xn(s,n),tr(n),c&4&&ig(n);break;case 21:break;default:xn(s,n),tr(n)}}function tr(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(tg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(qi(d,""),c.flags&=-33);var p=ng(n);od(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=ng(n);sd(n,I,v);break;default:throw Error(t(161))}}catch(k){it(n,n.return,k)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function u0(n,s,a){le=n,og(n)}function og(n,s,a){for(var c=(n.mode&1)!==0;le!==null;){var d=le,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Iu;if(!v){var I=d.alternate,k=I!==null&&I.memoizedState!==null||Mt;I=Iu;var z=Mt;if(Iu=v,(Mt=k)&&!z)for(le=d;le!==null;)v=le,k=v.child,v.tag===22&&v.memoizedState!==null?ug(d):k!==null?(k.return=v,le=k):ug(d);for(;p!==null;)le=p,og(p),p=p.sibling;le=d,Iu=I,Mt=z}ag(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,le=p):ag(n)}}function ag(n){for(;le!==null;){var s=le;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Mt||Su(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Pn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&lm(s,p,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}lm(s,v,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var Y=z.memoizedState;if(Y!==null){var X=Y.dehydrated;X!==null&&ti(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||s.flags&512&&id(s)}catch(Q){it(s,s.return,Q)}}if(s===n){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function lg(n){for(;le!==null;){var s=le;if(s===n){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function ug(n){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Su(4,s)}catch(k){it(s,a,k)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(k){it(s,d,k)}}var p=s.return;try{id(s)}catch(k){it(s,p,k)}break;case 5:var v=s.return;try{id(s)}catch(k){it(s,v,k)}}}catch(k){it(s,s.return,k)}if(s===n){le=null;break}var I=s.sibling;if(I!==null){I.return=s.return,le=I;break}le=s.return}}var c0=Math.ceil,Au=fe.ReactCurrentDispatcher,ad=fe.ReactCurrentOwner,gn=fe.ReactCurrentBatchConfig,Le=0,Tt=null,dt=null,Pt=0,ln=0,mo=oi(0),_t=0,Ma=null,hs=0,Cu=0,ld=0,Ua=null,Kt=null,ud=0,go=1/0,Rr=null,Ru=!1,cd=null,di=null,Pu=!1,fi=null,ku=0,Fa=0,hd=null,xu=-1,Nu=0;function qt(){return(Le&6)!==0?Ge():xu!==-1?xu:xu=Ge()}function pi(n){return(n.mode&1)===0?1:(Le&2)!==0&&Pt!==0?Pt&-Pt:GE.transition!==null?(Nu===0&&(Nu=oa()),Nu):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:qs(n.type)),n)}function Nn(n,s,a,c){if(50<Fa)throw Fa=0,hd=null,Error(t(185));Zi(n,a,c),((Le&2)===0||n!==Tt)&&(n===Tt&&((Le&2)===0&&(Cu|=a),_t===4&&mi(n,Pt)),Qt(n,c),a===1&&Le===0&&(s.mode&1)===0&&(go=Ge()+500,su&&li()))}function Qt(n,s){var a=n.callbackNode;Ji(n,s);var c=pr(n,n===Tt?Pt:0);if(c===0)a!==null&&Ms(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&Ms(a),s===1)n.tag===0?HE(hg.bind(null,n)):Yp(hg.bind(null,n)),BE(function(){(Le&6)===0&&li()}),a=null;else{switch(Bn(c)){case 1:a=Us;break;case 4:a=ra;break;case 16:a=Ki;break;case 536870912:a=Fs;break;default:a=Ki}a=vg(a,cg.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function cg(n,s){if(xu=-1,Nu=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(yo()&&n.callbackNode!==a)return null;var c=pr(n,n===Tt?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=Du(n,c);else{s=c;var d=Le;Le|=2;var p=fg();(Tt!==n||Pt!==s)&&(Rr=null,go=Ge()+500,fs(n,s));do try{f0();break}catch(I){dg(n,I)}while(!0);kh(),Au.current=p,Le=d,dt!==null?s=0:(Tt=null,Pt=0,s=_t)}if(s!==0){if(s===2&&(d=sa(n),d!==0&&(c=d,s=dd(n,d))),s===1)throw a=Ma,fs(n,0),mi(n,c),Qt(n,Ge()),a;if(s===6)mi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!h0(d)&&(s=Du(n,c),s===2&&(p=sa(n),p!==0&&(c=p,s=dd(n,p))),s===1))throw a=Ma,fs(n,0),mi(n,c),Qt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ps(n,Kt,Rr);break;case 3:if(mi(n,c),(c&130023424)===c&&(s=ud+500-Ge(),10<s)){if(pr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=_h(ps.bind(null,n,Kt,Rr),s);break}ps(n,Kt,Rr);break;case 4:if(mi(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-en(c);p=1<<v,v=s[v],v>d&&(d=v),c&=~p}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*c0(c/1960))-c,10<c){n.timeoutHandle=_h(ps.bind(null,n,Kt,Rr),c);break}ps(n,Kt,Rr);break;case 5:ps(n,Kt,Rr);break;default:throw Error(t(329))}}}return Qt(n,Ge()),n.callbackNode===a?cg.bind(null,n):null}function dd(n,s){var a=Ua;return n.current.memoizedState.isDehydrated&&(fs(n,s).flags|=256),n=Du(n,s),n!==2&&(s=Kt,Kt=a,s!==null&&fd(s)),n}function fd(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function h0(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Cn(p(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function mi(n,s){for(s&=~ld,s&=~Cu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-en(s),c=1<<a;n[a]=-1,s&=~c}}function hg(n){if((Le&6)!==0)throw Error(t(327));yo();var s=pr(n,0);if((s&1)===0)return Qt(n,Ge()),null;var a=Du(n,s);if(n.tag!==0&&a===2){var c=sa(n);c!==0&&(s=c,a=dd(n,c))}if(a===1)throw a=Ma,fs(n,0),mi(n,s),Qt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,ps(n,Kt,Rr),Qt(n,Ge()),null}function pd(n,s){var a=Le;Le|=1;try{return n(s)}finally{Le=a,Le===0&&(go=Ge()+500,su&&li())}}function ds(n){fi!==null&&fi.tag===0&&(Le&6)===0&&yo();var s=Le;Le|=1;var a=gn.transition,c=Ve;try{if(gn.transition=null,Ve=1,n)return n()}finally{Ve=c,gn.transition=a,Le=s,(Le&6)===0&&li()}}function md(){ln=mo.current,Qe(mo)}function fs(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,zE(a)),dt!==null)for(a=dt.return;a!==null;){var c=a;switch(Sh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ru();break;case 3:ho(),Qe(Wt),Qe(bt),Mh();break;case 5:Oh(c);break;case 4:ho();break;case 13:Qe(Ze);break;case 19:Qe(Ze);break;case 10:xh(c.type._context);break;case 22:case 23:md()}a=a.return}if(Tt=n,dt=n=gi(n.current,null),Pt=ln=s,_t=0,Ma=null,ld=Cu=hs=0,Kt=Ua=null,ls!==null){for(s=0;s<ls.length;s++)if(a=ls[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}ls=null}return n}function dg(n,s){do{var a=dt;try{if(kh(),mu.current=vu,gu){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}gu=!1}if(cs=0,Et=yt=et=null,Na=!1,Da=0,ad.current=null,a===null||a.return===null){_t=1,Ma=s,dt=null;break}e:{var p=n,v=a.return,I=a,k=s;if(s=Pt,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var z=k,Y=I,X=Y.tag;if((Y.mode&1)===0&&(X===0||X===11||X===15)){var Q=Y.alternate;Q?(Y.updateQueue=Q.updateQueue,Y.memoizedState=Q.memoizedState,Y.lanes=Q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var ie=Mm(v);if(ie!==null){ie.flags&=-257,Um(ie,v,I,p,s),ie.mode&1&&Lm(p,z,s),s=ie,k=z;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(k),s.updateQueue=ce}else ue.add(k);break e}else{if((s&1)===0){Lm(p,z,s),gd();break e}k=Error(t(426))}}else if(Je&&I.mode&1){var lt=Mm(v);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),Um(lt,v,I,p,s),Rh(fo(k,I));break e}}p=k=fo(k,I),_t!==4&&(_t=2),Ua===null?Ua=[p]:Ua.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var M=bm(p,k,s);am(p,M);break e;case 1:I=k;var D=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(di===null||!di.has(F)))){p.flags|=65536,s&=-s,p.lanes|=s;var J=Om(p,I,s);am(p,J);break e}}p=p.return}while(p!==null)}mg(a)}catch(he){s=he,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function fg(){var n=Au.current;return Au.current=vu,n===null?vu:n}function gd(){(_t===0||_t===3||_t===2)&&(_t=4),Tt===null||(hs&268435455)===0&&(Cu&268435455)===0||mi(Tt,Pt)}function Du(n,s){var a=Le;Le|=2;var c=fg();(Tt!==n||Pt!==s)&&(Rr=null,fs(n,s));do try{d0();break}catch(d){dg(n,d)}while(!0);if(kh(),Le=a,Au.current=c,dt!==null)throw Error(t(261));return Tt=null,Pt=0,_t}function d0(){for(;dt!==null;)pg(dt)}function f0(){for(;dt!==null&&!Gi();)pg(dt)}function pg(n){var s=_g(n.alternate,n,ln);n.memoizedProps=n.pendingProps,s===null?mg(n):dt=s,ad.current=null}function mg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=s0(a,s,ln),a!==null){dt=a;return}}else{if(a=o0(a,s),a!==null){a.flags&=32767,dt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,dt=null;return}}if(s=s.sibling,s!==null){dt=s;return}dt=s=n}while(s!==null);_t===0&&(_t=5)}function ps(n,s,a){var c=Ve,d=gn.transition;try{gn.transition=null,Ve=1,p0(n,s,a,c)}finally{gn.transition=d,Ve=c}return null}function p0(n,s,a,c){do yo();while(fi!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(nh(n,p),n===Tt&&(dt=Tt=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Pu||(Pu=!0,vg(Ki,function(){return yo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=gn.transition,gn.transition=null;var v=Ve;Ve=1;var I=Le;Le|=4,ad.current=null,l0(n,a),sg(a,n),bE(gh),yr=!!mh,gh=mh=null,n.current=a,u0(a),fr(),Le=I,Ve=v,gn.transition=p}else n.current=a;if(Pu&&(Pu=!1,fi=n,ku=d),p=n.pendingLanes,p===0&&(di=null),Fl(a.stateNode),Qt(n,Ge()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Ru)throw Ru=!1,n=cd,cd=null,n;return(ku&1)!==0&&n.tag!==0&&yo(),p=n.pendingLanes,(p&1)!==0?n===hd?Fa++:(Fa=0,hd=n):Fa=0,li(),null}function yo(){if(fi!==null){var n=Bn(ku),s=gn.transition,a=Ve;try{if(gn.transition=null,Ve=16>n?16:n,fi===null)var c=!1;else{if(n=fi,fi=null,ku=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,le=n.current;le!==null;){var p=le,v=p.child;if((le.flags&16)!==0){var I=p.deletions;if(I!==null){for(var k=0;k<I.length;k++){var z=I[k];for(le=z;le!==null;){var Y=le;switch(Y.tag){case 0:case 11:case 15:La(8,Y,p)}var X=Y.child;if(X!==null)X.return=Y,le=X;else for(;le!==null;){Y=le;var Q=Y.sibling,ie=Y.return;if(eg(Y),Y===z){le=null;break}if(Q!==null){Q.return=ie,le=Q;break}le=ie}}}var ue=p.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var lt=ce.sibling;ce.sibling=null,ce=lt}while(ce!==null)}}le=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,le=v;else e:for(;le!==null;){if(p=le,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:La(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,le=M;break e}le=p.return}}var D=n.current;for(le=D;le!==null;){v=le;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,le=F;else e:for(v=D;le!==null;){if(I=le,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Su(9,I)}}catch(he){it(I,I.return,he)}if(I===v){le=null;break e}var J=I.sibling;if(J!==null){J.return=I.return,le=J;break e}le=I.return}}if(Le=d,li(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Qi,n)}catch{}c=!0}return c}finally{Ve=a,gn.transition=s}}return!1}function gg(n,s,a){s=fo(a,s),s=bm(n,s,1),n=ci(n,s,1),s=qt(),n!==null&&(Zi(n,1,s),Qt(n,s))}function it(n,s,a){if(n.tag===3)gg(n,n,a);else for(;s!==null;){if(s.tag===3){gg(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(di===null||!di.has(c))){n=fo(a,n),n=Om(s,n,1),s=ci(s,n,1),n=qt(),s!==null&&(Zi(s,1,n),Qt(s,n));break}}s=s.return}}function m0(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=qt(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Pt&a)===a&&(_t===4||_t===3&&(Pt&130023424)===Pt&&500>Ge()-ud?fs(n,0):ld|=a),Qt(n,s)}function yg(n,s){s===0&&((n.mode&1)===0?s=1:(s=Jr,Jr<<=1,(Jr&130023424)===0&&(Jr=4194304)));var a=qt();n=Sr(n,s),n!==null&&(Zi(n,s,a),Qt(n,a))}function g0(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),yg(n,a)}function y0(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),yg(n,a)}var _g;_g=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Wt.current)Gt=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return Gt=!1,i0(n,s,a);Gt=(n.flags&131072)!==0}else Gt=!1,Je&&(s.flags&1048576)!==0&&Xp(s,au,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Tu(n,s),n=s.pendingProps;var d=io(s,bt.current);co(s,a),d=jh(null,s,c,n,d,a);var p=zh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Ht(c)?(p=!0,iu(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Vh(s),d.updater=wu,s.stateNode=d,d._reactInternals=s,Gh(s,c,n,a),s=Xh(null,s,c,!0,p,a)):(s.tag=0,Je&&p&&Ih(s),$t(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Tu(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=v0(c),n=Pn(c,n),d){case 0:s=Yh(null,s,c,n,a);break e;case 1:s=qm(null,s,c,n,a);break e;case 11:s=Fm(null,s,c,n,a);break e;case 14:s=jm(null,s,c,Pn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Pn(c,d),Yh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Pn(c,d),qm(n,s,c,d,a);case 3:e:{if(Wm(s),n===null)throw Error(t(387));c=s.pendingProps,p=s.memoizedState,d=p.element,om(n,s),fu(s,c,null,a);var v=s.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=fo(Error(t(423)),s),s=Hm(n,s,c,a,d);break e}else if(c!==d){d=fo(Error(t(424)),s),s=Hm(n,s,c,a,d);break e}else for(an=si(s.stateNode.containerInfo.firstChild),on=s,Je=!0,Rn=null,a=im(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ao(),c===d){s=Cr(n,s,a);break e}$t(n,s,c,a)}s=s.child}return s;case 5:return um(s),n===null&&Ch(s),c=s.type,d=s.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,yh(c,d)?v=null:p!==null&&yh(c,p)&&(s.flags|=32),$m(n,s),$t(n,s,v,a),s.child;case 6:return n===null&&Ch(s),null;case 13:return Gm(n,s,a);case 4:return bh(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=lo(s,null,c,a):$t(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Pn(c,d),Fm(n,s,c,d,a);case 7:return $t(n,s,s.pendingProps,a),s.child;case 8:return $t(n,s,s.pendingProps.children,a),s.child;case 12:return $t(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,p=s.memoizedProps,v=d.value,We(cu,c._currentValue),c._currentValue=v,p!==null)if(Cn(p.value,v)){if(p.children===d.children&&!Wt.current){s=Cr(n,s,a);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var I=p.dependencies;if(I!==null){v=p.child;for(var k=I.firstContext;k!==null;){if(k.context===c){if(p.tag===1){k=Ar(-1,a&-a),k.tag=2;var z=p.updateQueue;if(z!==null){z=z.shared;var Y=z.pending;Y===null?k.next=k:(k.next=Y.next,Y.next=k),z.pending=k}}p.lanes|=a,k=p.alternate,k!==null&&(k.lanes|=a),Nh(p.return,a,s),I.lanes|=a;break}k=k.next}}else if(p.tag===10)v=p.type===s.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),Nh(v,a,s),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===s){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}$t(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,co(s,a),d=pn(d),c=c(d),s.flags|=1,$t(n,s,c,a),s.child;case 14:return c=s.type,d=Pn(c,s.pendingProps),d=Pn(c.type,d),jm(n,s,c,d,a);case 15:return zm(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Pn(c,d),Tu(n,s),s.tag=1,Ht(c)?(n=!0,iu(s)):n=!1,co(s,a),Dm(s,c,d),Gh(s,c,d,a),Xh(null,s,c,!0,n,a);case 19:return Qm(n,s,a);case 22:return Bm(n,s,a)}throw Error(t(156,s.tag))};function vg(n,s){return na(n,s)}function _0(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,s,a,c){return new _0(n,s,a,c)}function yd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function v0(n){if(typeof n=="function")return yd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===wt)return 14}return 2}function gi(n,s){var a=n.alternate;return a===null?(a=yn(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Vu(n,s,a,c,d,p){var v=2;if(c=n,typeof n=="function")yd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case x:return ms(a.children,d,p,s);case A:v=8,d|=8;break;case P:return n=yn(12,a,s,d|2),n.elementType=P,n.lanes=p,n;case R:return n=yn(13,a,s,d),n.elementType=R,n.lanes=p,n;case qe:return n=yn(19,a,s,d),n.elementType=qe,n.lanes=p,n;case Xe:return bu(a,d,p,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:v=10;break e;case N:v=9;break e;case L:v=11;break e;case wt:v=14;break e;case Dt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=yn(v,a,s,d),s.elementType=n,s.type=c,s.lanes=p,s}function ms(n,s,a,c){return n=yn(7,n,c,s),n.lanes=a,n}function bu(n,s,a,c){return n=yn(22,n,c,s),n.elementType=Xe,n.lanes=a,n.stateNode={isHidden:!1},n}function _d(n,s,a){return n=yn(6,n,null,s),n.lanes=a,n}function vd(n,s,a){return s=yn(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function w0(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function wd(n,s,a,c,d,p,v,I,k){return n=new w0(n,s,a,I,k),s===1?(s=1,p===!0&&(s|=8)):s=0,p=yn(3,null,null,s),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vh(p),n}function E0(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function wg(n){if(!n)return ai;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Ht(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return Kp(n,a,s)}return s}function Eg(n,s,a,c,d,p,v,I,k){return n=wd(a,c,!0,n,d,p,v,I,k),n.context=wg(null),a=n.current,c=qt(),d=pi(a),p=Ar(c,d),p.callback=s??null,ci(a,p,d),n.current.lanes=d,Zi(n,d,c),Qt(n,c),n}function Ou(n,s,a,c){var d=s.current,p=qt(),v=pi(d);return a=wg(a),s.context===null?s.context=a:s.pendingContext=a,s=Ar(p,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=ci(d,s,v),n!==null&&(Nn(n,d,v,p),du(n,d,v)),v}function Lu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function Ed(n,s){Tg(n,s),(n=n.alternate)&&Tg(n,s)}function T0(){return null}var Ig=typeof reportError=="function"?reportError:function(n){console.error(n)};function Td(n){this._internalRoot=n}Mu.prototype.render=Td.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Ou(n,s,null,null)},Mu.prototype.unmount=Td.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ds(function(){Ou(null,n,null,null)}),s[wr]=null}};function Mu(n){this._internalRoot=n}Mu.prototype.unstable_scheduleHydration=function(n){if(n){var s=ha();n={blockedOn:null,target:n,priority:s};for(var a=0;a<tn.length&&s!==0&&s<tn[a].priority;a++);tn.splice(a,0,n),a===0&&Bs(n)}};function Id(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Uu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Sg(){}function I0(n,s,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var z=Lu(v);p.call(z)}}var v=Eg(s,c,n,0,null,!1,!1,"",Sg);return n._reactRootContainer=v,n[wr]=v.current,Ia(n.nodeType===8?n.parentNode:n),ds(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var z=Lu(k);I.call(z)}}var k=wd(n,0,!1,null,null,!1,!1,"",Sg);return n._reactRootContainer=k,n[wr]=k.current,Ia(n.nodeType===8?n.parentNode:n),ds(function(){Ou(s,k,a,c)}),k}function Fu(n,s,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var I=d;d=function(){var k=Lu(v);I.call(k)}}Ou(s,v,n,d)}else v=I0(a,s,n,d,c);return Lu(v)}ua=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=Ue(s.pendingLanes);a!==0&&(la(s,a|1),Qt(s,Ge()),(Le&6)===0&&(go=Ge()+500,li()))}break;case 13:ds(function(){var c=Sr(n,1);if(c!==null){var d=qt();Nn(c,n,1,d)}}),Ed(n,1)}},js=function(n){if(n.tag===13){var s=Sr(n,134217728);if(s!==null){var a=qt();Nn(s,n,134217728,a)}Ed(n,134217728)}},ca=function(n){if(n.tag===13){var s=pi(n),a=Sr(n,s);if(a!==null){var c=qt();Nn(a,n,s,c)}Ed(n,s)}},ha=function(){return Ve},da=function(n,s){var a=Ve;try{return Ve=n,s()}finally{Ve=a}},cr=function(n,s,a){switch(s){case"input":if($i(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=nu(c);if(!d)throw Error(t(90));Go(c),$i(c,d)}}}break;case"textarea":Rl(n,a);break;case"select":s=a.value,s!=null&&Tn(n,!!a.multiple,s,!1)}},xl=pd,Nl=ds;var S0={usingClientEntryPoint:!1,Events:[Ca,no,nu,Kr,Qr,pd]},ja={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A0={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ul(n),n===null?null:n.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||T0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ju.isDisabled&&ju.supportsFiber)try{Qi=ju.inject(A0),Zt=ju}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S0,Yt.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(s))throw Error(t(200));return E0(n,s,null,a)},Yt.createRoot=function(n,s){if(!Id(n))throw Error(t(299));var a=!1,c="",d=Ig;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=wd(n,1,!1,null,null,a,!1,c,d),n[wr]=s.current,Ia(n.nodeType===8?n.parentNode:n),new Td(s)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ul(s),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return ds(n)},Yt.hydrate=function(n,s,a){if(!Uu(s))throw Error(t(200));return Fu(null,n,s,!0,a)},Yt.hydrateRoot=function(n,s,a){if(!Id(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=Ig;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Eg(s,null,n,1,a??null,d,!1,p,v),n[wr]=s.current,Ia(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Mu(s)},Yt.render=function(n,s,a){if(!Uu(s))throw Error(t(200));return Fu(null,n,s,!1,a)},Yt.unmountComponentAtNode=function(n){if(!Uu(n))throw Error(t(40));return n._reactRootContainer?(ds(function(){Fu(null,null,n,!1,function(){n._reactRootContainer=null,n[wr]=null})}),!0):!1},Yt.unstable_batchedUpdates=pd,Yt.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Uu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Fu(n,s,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Dg;function w_(){if(Dg)return Cd.exports;Dg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Cd.exports=O0(),Cd.exports}var Vg;function L0(){if(Vg)return zu;Vg=1;var r=w_();return zu.createRoot=r.createRoot,zu.hydrateRoot=r.hydrateRoot,zu}var M0=L0();w_();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},el.apply(this,arguments)}var Ii;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Ii||(Ii={}));const bg="popstate";function U0(r){r===void 0&&(r={});function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return Bd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:sc(o)}return j0(e,t,null,r)}function tt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function E_(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function F0(){return Math.random().toString(36).substr(2,8)}function Og(r,e){return{usr:r.state,key:r.key,idx:e}}function Bd(r,e,t,i){return t===void 0&&(t=null),el({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Mo(e):e,{state:t,key:e&&e.key||i||F0()})}function sc(r){let{pathname:e="/",search:t="",hash:i=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Mo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let i=r.indexOf("?");i>=0&&(e.search=r.substr(i),r=r.substr(0,i)),r&&(e.pathname=r)}return e}function j0(r,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f=Ii.Pop,g=null,y=w();y==null&&(y=0,h.replaceState(el({},h.state,{idx:y}),""));function w(){return(h.state||{idx:null}).idx}function E(){f=Ii.Pop;let j=w(),re=j==null?null:j-y;y=j,g&&g({action:f,location:q.location,delta:re})}function S(j,re){f=Ii.Push;let te=Bd(q.location,j,re);y=w()+1;let oe=Og(te,y),fe=q.createHref(te);try{h.pushState(oe,"",fe)}catch(De){if(De instanceof DOMException&&De.name==="DataCloneError")throw De;o.location.assign(fe)}l&&g&&g({action:f,location:q.location,delta:1})}function b(j,re){f=Ii.Replace;let te=Bd(q.location,j,re);y=w();let oe=Og(te,y),fe=q.createHref(te);h.replaceState(oe,"",fe),l&&g&&g({action:f,location:q.location,delta:0})}function $(j){let re=o.location.origin!=="null"?o.location.origin:o.location.href,te=typeof j=="string"?j:sc(j);return te=te.replace(/ $/,"%20"),tt(re,"No window.location.(origin|href) available to create URL for href: "+te),new URL(te,re)}let q={get action(){return f},get location(){return r(o,h)},listen(j){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(bg,E),g=j,()=>{o.removeEventListener(bg,E),g=null}},createHref(j){return e(o,j)},createURL:$,encodeLocation(j){let re=$(j);return{pathname:re.pathname,search:re.search,hash:re.hash}},push:S,replace:b,go(j){return h.go(j)}};return q}var Lg;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Lg||(Lg={}));function z0(r,e,t){return t===void 0&&(t="/"),B0(r,e,t)}function B0(r,e,t,i){let o=typeof e=="string"?Mo(e):e,l=ko(o.pathname||"/",t);if(l==null)return null;let h=T_(r);$0(h);let f=null;for(let g=0;f==null&&g<h.length;++g){let y=eT(l);f=J0(h[g],y)}return f}function T_(r,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,h,f)=>{let g={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(tt(g.relativePath.startsWith(i),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(i.length));let y=Ai([i,g.relativePath]),w=t.concat(g);l.children&&l.children.length>0&&(tt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),T_(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:Y0(y,l.index),routesMeta:w})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let g of I_(l.path))o(l,h,g)}),e}function I_(r){let e=r.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=I_(i.join("/")),f=[];return f.push(...h.map(g=>g===""?l:[l,g].join("/"))),o&&f.push(...h),f.map(g=>r.startsWith("/")&&g===""?"/":g)}function $0(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:X0(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const q0=/^:[\w-]+$/,W0=3,H0=2,G0=1,K0=10,Q0=-2,Mg=r=>r==="*";function Y0(r,e){let t=r.split("/"),i=t.length;return t.some(Mg)&&(i+=Q0),e&&(i+=H0),t.filter(o=>!Mg(o)).reduce((o,l)=>o+(q0.test(l)?W0:l===""?G0:K0),i)}function X0(r,e){return r.length===e.length&&r.slice(0,-1).every((i,o)=>i===e[o])?r[r.length-1]-e[e.length-1]:0}function J0(r,e,t){let{routesMeta:i}=r,o={},l="/",h=[];for(let f=0;f<i.length;++f){let g=i[f],y=f===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",E=$d({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},w),S=g.route;if(!E)return null;Object.assign(o,E.params),h.push({params:o,pathname:Ai([l,E.pathname]),pathnameBase:iT(Ai([l,E.pathnameBase])),route:S}),E.pathnameBase!=="/"&&(l=Ai([l,E.pathnameBase]))}return h}function $d(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,i]=Z0(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,w,E)=>{let{paramName:S,isOptional:b}=w;if(S==="*"){let q=f[E]||"";h=l.slice(0,l.length-q.length).replace(/(.)\/+$/,"$1")}const $=f[E];return b&&!$?y[S]=void 0:y[S]=($||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:r}}function Z0(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),E_(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let i=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,g)=>(i.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(i.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function eT(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return E_(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function ko(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=r.charAt(t);return i&&i!=="/"?null:r.slice(t)||"/"}function tT(r,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof r=="string"?Mo(r):r;return{pathname:t?t.startsWith("/")?t:nT(t,e):e,search:sT(i),hash:oT(o)}}function nT(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function kd(r,e,t,i){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rT(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function wf(r,e){let t=rT(r);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Ef(r,e,t,i){i===void 0&&(i=!1);let o;typeof r=="string"?o=Mo(r):(o=el({},r),tt(!o.pathname||!o.pathname.includes("?"),kd("?","pathname","search",o)),tt(!o.pathname||!o.pathname.includes("#"),kd("#","pathname","hash",o)),tt(!o.search||!o.search.includes("#"),kd("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let E=e.length-1;if(!i&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),E-=1;o.pathname=S.join("/")}f=E>=0?e[E]:"/"}let g=tT(o,f),y=h&&h!=="/"&&h.endsWith("/"),w=(l||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(y||w)&&(g.pathname+="/"),g}const Ai=r=>r.join("/").replace(/\/\/+/g,"/"),iT=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),sT=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,oT=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function aT(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const S_=["post","put","patch","delete"];new Set(S_);const lT=["get",...S_];new Set(lT);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},tl.apply(this,arguments)}const Rc=W.createContext(null),A_=W.createContext(null),Mr=W.createContext(null),Pc=W.createContext(null),Ur=W.createContext({outlet:null,matches:[],isDataRoute:!1}),C_=W.createContext(null);function uT(r,e){let{relative:t}=e===void 0?{}:e;Uo()||tt(!1);let{basename:i,navigator:o}=W.useContext(Mr),{hash:l,pathname:h,search:f}=kc(r,{relative:t}),g=h;return i!=="/"&&(g=h==="/"?i:Ai([i,h])),o.createHref({pathname:g,search:f,hash:l})}function Uo(){return W.useContext(Pc)!=null}function Cs(){return Uo()||tt(!1),W.useContext(Pc).location}function R_(r){W.useContext(Mr).static||W.useLayoutEffect(r)}function Ui(){let{isDataRoute:r}=W.useContext(Ur);return r?ST():cT()}function cT(){Uo()||tt(!1);let r=W.useContext(Rc),{basename:e,future:t,navigator:i}=W.useContext(Mr),{matches:o}=W.useContext(Ur),{pathname:l}=Cs(),h=JSON.stringify(wf(o,t.v7_relativeSplatPath)),f=W.useRef(!1);return R_(()=>{f.current=!0}),W.useCallback(function(y,w){if(w===void 0&&(w={}),!f.current)return;if(typeof y=="number"){i.go(y);return}let E=Ef(y,JSON.parse(h),l,w.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Ai([e,E.pathname])),(w.replace?i.replace:i.push)(E,w.state,w)},[e,i,h,l,r])}const hT=W.createContext(null);function dT(r){let e=W.useContext(Ur).outlet;return e&&W.createElement(hT.Provider,{value:r},e)}function kc(r,e){let{relative:t}=e===void 0?{}:e,{future:i}=W.useContext(Mr),{matches:o}=W.useContext(Ur),{pathname:l}=Cs(),h=JSON.stringify(wf(o,i.v7_relativeSplatPath));return W.useMemo(()=>Ef(r,JSON.parse(h),l,t==="path"),[r,h,l,t])}function fT(r,e){return pT(r,e)}function pT(r,e,t,i){Uo()||tt(!1);let{navigator:o}=W.useContext(Mr),{matches:l}=W.useContext(Ur),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let g=h?h.pathnameBase:"/";h&&h.route;let y=Cs(),w;if(e){var E;let j=typeof e=="string"?Mo(e):e;g==="/"||(E=j.pathname)!=null&&E.startsWith(g)||tt(!1),w=j}else w=y;let S=w.pathname||"/",b=S;if(g!=="/"){let j=g.replace(/^\//,"").split("/");b="/"+S.replace(/^\//,"").split("/").slice(j.length).join("/")}let $=z0(r,{pathname:b}),q=vT($&&$.map(j=>Object.assign({},j,{params:Object.assign({},f,j.params),pathname:Ai([g,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?g:Ai([g,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),l,t,i);return e&&q?W.createElement(Pc.Provider,{value:{location:tl({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:Ii.Pop}},q):q}function mT(){let r=IT(),e=aT(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,null)}const gT=W.createElement(mT,null);class yT extends W.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?W.createElement(Ur.Provider,{value:this.props.routeContext},W.createElement(C_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _T(r){let{routeContext:e,match:t,children:i}=r,o=W.useContext(Rc);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),W.createElement(Ur.Provider,{value:e},i)}function vT(r,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let h=r,f=(o=t)==null?void 0:o.errors;if(f!=null){let w=h.findIndex(E=>E.route.id&&f?.[E.route.id]!==void 0);w>=0||tt(!1),h=h.slice(0,Math.min(h.length,w+1))}let g=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let w=0;w<h.length;w++){let E=h[w];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=w),E.route.id){let{loaderData:S,errors:b}=t,$=E.route.loader&&S[E.route.id]===void 0&&(!b||b[E.route.id]===void 0);if(E.route.lazy||$){g=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((w,E,S)=>{let b,$=!1,q=null,j=null;t&&(b=f&&E.route.id?f[E.route.id]:void 0,q=E.route.errorElement||gT,g&&(y<0&&S===0?(AT("route-fallback"),$=!0,j=null):y===S&&($=!0,j=E.route.hydrateFallbackElement||null)));let re=e.concat(h.slice(0,S+1)),te=()=>{let oe;return b?oe=q:$?oe=j:E.route.Component?oe=W.createElement(E.route.Component,null):E.route.element?oe=E.route.element:oe=w,W.createElement(_T,{match:E,routeContext:{outlet:w,matches:re,isDataRoute:t!=null},children:oe})};return t&&(E.route.ErrorBoundary||E.route.errorElement||S===0)?W.createElement(yT,{location:t.location,revalidation:t.revalidation,component:q,error:b,children:te(),routeContext:{outlet:null,matches:re,isDataRoute:!0}}):te()},null)}var P_=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(P_||{}),k_=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(k_||{});function wT(r){let e=W.useContext(Rc);return e||tt(!1),e}function ET(r){let e=W.useContext(A_);return e||tt(!1),e}function TT(r){let e=W.useContext(Ur);return e||tt(!1),e}function x_(r){let e=TT(),t=e.matches[e.matches.length-1];return t.route.id||tt(!1),t.route.id}function IT(){var r;let e=W.useContext(C_),t=ET(),i=x_();return e!==void 0?e:(r=t.errors)==null?void 0:r[i]}function ST(){let{router:r}=wT(P_.UseNavigateStable),e=x_(k_.UseNavigateStable),t=W.useRef(!1);return R_(()=>{t.current=!0}),W.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,tl({fromRouteId:e},l)))},[r,e])}const Ug={};function AT(r,e,t){Ug[r]||(Ug[r]=!0)}function CT(r,e){r?.v7_startTransition,r?.v7_relativeSplatPath}function RT(r){let{to:e,replace:t,state:i,relative:o}=r;Uo()||tt(!1);let{future:l,static:h}=W.useContext(Mr),{matches:f}=W.useContext(Ur),{pathname:g}=Cs(),y=Ui(),w=Ef(e,wf(f,l.v7_relativeSplatPath),g,o==="path"),E=JSON.stringify(w);return W.useEffect(()=>y(JSON.parse(E),{replace:t,state:i,relative:o}),[y,E,o,t,i]),null}function PT(r){return dT(r.context)}function Pr(r){tt(!1)}function kT(r){let{basename:e="/",children:t=null,location:i,navigationType:o=Ii.Pop,navigator:l,static:h=!1,future:f}=r;Uo()&&tt(!1);let g=e.replace(/^\/*/,"/"),y=W.useMemo(()=>({basename:g,navigator:l,static:h,future:tl({v7_relativeSplatPath:!1},f)}),[g,f,l,h]);typeof i=="string"&&(i=Mo(i));let{pathname:w="/",search:E="",hash:S="",state:b=null,key:$="default"}=i,q=W.useMemo(()=>{let j=ko(w,g);return j==null?null:{location:{pathname:j,search:E,hash:S,state:b,key:$},navigationType:o}},[g,w,E,S,b,$,o]);return q==null?null:W.createElement(Mr.Provider,{value:y},W.createElement(Pc.Provider,{children:t,value:q}))}function xT(r){let{children:e,location:t}=r;return fT(qd(e),t)}new Promise(()=>{});function qd(r,e){e===void 0&&(e=[]);let t=[];return W.Children.forEach(r,(i,o)=>{if(!W.isValidElement(i))return;let l=[...e,o];if(i.type===W.Fragment){t.push.apply(t,qd(i.props.children,l));return}i.type!==Pr&&tt(!1),!i.props.index||!i.props.children||tt(!1);let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=qd(i.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oc(){return oc=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},oc.apply(this,arguments)}function N_(r,e){if(r==null)return{};var t={},i=Object.keys(r),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function NT(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function DT(r,e){return r.button===0&&(!e||e==="_self")&&!NT(r)}const VT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bT=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],OT="6";try{window.__reactRouterVersion=OT}catch{}const LT=W.createContext({isTransitioning:!1}),MT="startTransition",Fg=D0[MT];function UT(r){let{basename:e,children:t,future:i,window:o}=r,l=W.useRef();l.current==null&&(l.current=U0({window:o,v5Compat:!0}));let h=l.current,[f,g]=W.useState({action:h.action,location:h.location}),{v7_startTransition:y}=i||{},w=W.useCallback(E=>{y&&Fg?Fg(()=>g(E)):g(E)},[g,y]);return W.useLayoutEffect(()=>h.listen(w),[h,w]),W.useEffect(()=>CT(i),[i]),W.createElement(kT,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:i})}const FT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zT=W.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:h,state:f,target:g,to:y,preventScrollReset:w,viewTransition:E}=e,S=N_(e,VT),{basename:b}=W.useContext(Mr),$,q=!1;if(typeof y=="string"&&jT.test(y)&&($=y,FT))try{let oe=new URL(window.location.href),fe=y.startsWith("//")?new URL(oe.protocol+y):new URL(y),De=ko(fe.pathname,b);fe.origin===oe.origin&&De!=null?y=De+fe.search+fe.hash:q=!0}catch{}let j=uT(y,{relative:o}),re=qT(y,{replace:h,state:f,target:g,preventScrollReset:w,relative:o,viewTransition:E});function te(oe){i&&i(oe),oe.defaultPrevented||re(oe)}return W.createElement("a",oc({},S,{href:$||j,onClick:q||l?i:te,ref:t,target:g}))}),BT=W.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:o=!1,className:l="",end:h=!1,style:f,to:g,viewTransition:y,children:w}=e,E=N_(e,bT),S=kc(g,{relative:E.relative}),b=Cs(),$=W.useContext(A_),{navigator:q,basename:j}=W.useContext(Mr),re=$!=null&&WT(S)&&y===!0,te=q.encodeLocation?q.encodeLocation(S).pathname:S.pathname,oe=b.pathname,fe=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;o||(oe=oe.toLowerCase(),fe=fe?fe.toLowerCase():null,te=te.toLowerCase()),fe&&j&&(fe=ko(fe,j)||fe);const De=te!=="/"&&te.endsWith("/")?te.length-1:te.length;let Ae=oe===te||!h&&oe.startsWith(te)&&oe.charAt(De)==="/",x=fe!=null&&(fe===te||!h&&fe.startsWith(te)&&fe.charAt(te.length)==="/"),A={isActive:Ae,isPending:x,isTransitioning:re},P=Ae?i:void 0,V;typeof l=="function"?V=l(A):V=[l,Ae?"active":null,x?"pending":null,re?"transitioning":null].filter(Boolean).join(" ");let N=typeof f=="function"?f(A):f;return W.createElement(zT,oc({},E,{"aria-current":P,className:V,ref:t,style:N,to:g,viewTransition:y}),typeof w=="function"?w(A):w)});var Wd;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Wd||(Wd={}));var jg;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(jg||(jg={}));function $T(r){let e=W.useContext(Rc);return e||tt(!1),e}function qT(r,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:h,viewTransition:f}=e===void 0?{}:e,g=Ui(),y=Cs(),w=kc(r,{relative:h});return W.useCallback(E=>{if(DT(E,t)){E.preventDefault();let S=i!==void 0?i:sc(y)===sc(w);g(r,{replace:S,state:o,preventScrollReset:l,relative:h,viewTransition:f})}},[y,g,w,i,o,t,r,l,h,f])}function WT(r,e){e===void 0&&(e={});let t=W.useContext(LT);t==null&&tt(!1);let{basename:i}=$T(Wd.useViewTransitionState),o=kc(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=ko(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=ko(t.nextLocation.pathname,i)||t.nextLocation.pathname;return $d(o.pathname,h)!=null||$d(o.pathname,l)!=null}const HT=()=>{};var zg={};/**
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
 */const D_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},GT=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},V_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,w=l>>2,E=(l&3)<<4|f>>4;let S=(f&15)<<2|y>>6,b=y&63;g||(b=64,h||(S=64)),i.push(t[w],t[E],t[S],t[b])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(D_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):GT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const y=o<r.length?t[r.charAt(o)]:64;++o;const E=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||y==null||E==null)throw new KT;const S=l<<2|f>>4;if(i.push(S),y!==64){const b=f<<4&240|y>>2;if(i.push(b),E!==64){const $=y<<6&192|E;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class KT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QT=function(r){const e=D_(r);return V_.encodeByteArray(e,!0)},ac=function(r){return QT(r).replace(/\./g,"")},b_=function(r){try{return V_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function YT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const XT=()=>YT().__FIREBASE_DEFAULTS__,JT=()=>{if(typeof process>"u"||typeof zg>"u")return;const r=zg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ZT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&b_(r[1]);return e&&JSON.parse(e)},xc=()=>{try{return HT()||XT()||JT()||ZT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},O_=r=>xc()?.emulatorHosts?.[r],eI=r=>{const e=O_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},L_=()=>xc()?.config,M_=r=>xc()?.[`_${r}`];/**
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
 */class tI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Fo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function U_(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function nI(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[ac(JSON.stringify(t)),ac(JSON.stringify(h)),""].join(".")}const Ka={};function rI(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ka))Ka[e]?r.emulator.push(e):r.prod.push(e);return r}function iI(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Bg=!1;function F_(r,e){if(typeof window>"u"||typeof document>"u"||!Fo(window.location.host)||Ka[r]===e||Ka[r]||Bg)return;Ka[r]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",l=rI().prod.length>0;function h(){const S=document.getElementById(i);S&&S.remove()}function f(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function g(S,b){S.setAttribute("width","24"),S.setAttribute("id",b),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function y(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Bg=!0,h()},S}function w(S,b){S.setAttribute("id",b),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=iI(i),b=t("text"),$=document.getElementById(b)||document.createElement("span"),q=t("learnmore"),j=document.getElementById(q)||document.createElement("a"),re=t("preprendIcon"),te=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const oe=S.element;f(oe),w(j,q);const fe=y();g(te,re),oe.append(te,$,j,fe),document.body.appendChild(oe)}l?($.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function oI(){const r=xc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lI(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function uI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cI(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function hI(){return!oI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dI(){try{return typeof indexedDB=="object"}catch{return!1}}function fI(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const pI="FirebaseError";class Fr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=pI,Object.setPrototypeOf(this,Fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fl.prototype.create)}}class fl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?mI(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Fr(o,f,i)}}function mI(r,e){return r.replace(gI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const gI=/\{\$([^}]+)}/g;function yI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function vs(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if($g(l)&&$g(h)){if(!vs(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function $g(r){return r!==null&&typeof r=="object"}/**
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
 */function pl(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ba(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function $a(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function _I(r,e){const t=new vI(r,e);return t.subscribe.bind(t)}class vI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");wI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=xd),o.error===void 0&&(o.error=xd),o.complete===void 0&&(o.complete=xd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function xd(){}/**
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
 */function gt(r){return r&&r._delegate?r._delegate:r}class ws{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class EI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new tI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(II(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:TI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TI(r){return r===gs?void 0:r}function II(r){return r.instantiationMode==="EAGER"}/**
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
 */class SI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new EI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ke||(ke={}));const AI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},CI=ke.INFO,RI={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},PI=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=RI[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tf{constructor(e){this.name=e,this._logLevel=CI,this._logHandler=PI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const kI=(r,e)=>e.some(t=>r instanceof t);let qg,Wg;function xI(){return qg||(qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NI(){return Wg||(Wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j_=new WeakMap,Hd=new WeakMap,z_=new WeakMap,Nd=new WeakMap,If=new WeakMap;function DI(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Ci(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&j_.set(t,r)}).catch(()=>{}),If.set(e,r),e}function VI(r){if(Hd.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Hd.set(r,e)}let Gd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Hd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||z_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ci(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function bI(r){Gd=r(Gd)}function OI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(Dd(this),e,...t);return z_.set(i,e.sort?e.sort():[e]),Ci(i)}:NI().includes(r)?function(...e){return r.apply(Dd(this),e),Ci(j_.get(this))}:function(...e){return Ci(r.apply(Dd(this),e))}}function LI(r){return typeof r=="function"?OI(r):(r instanceof IDBTransaction&&VI(r),kI(r,xI())?new Proxy(r,Gd):r)}function Ci(r){if(r instanceof IDBRequest)return DI(r);if(Nd.has(r))return Nd.get(r);const e=LI(r);return e!==r&&(Nd.set(r,e),If.set(e,r)),e}const Dd=r=>If.get(r);function MI(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=Ci(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Ci(h.result),g.oldVersion,g.newVersion,Ci(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const UI=["get","getKey","getAll","getAllKeys","count"],FI=["put","add","delete","clear"],Vd=new Map;function Hg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Vd.get(e))return Vd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=FI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||UI.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&g.done]))[0]};return Vd.set(e,l),l}bI(r=>({...r,get:(e,t,i)=>Hg(e,t)||r.get(e,t,i),has:(e,t)=>!!Hg(e,t)||r.has(e,t)}));/**
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
 */class jI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function zI(r){return r.getComponent()?.type==="VERSION"}const Kd="@firebase/app",Gg="0.14.3";/**
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
 */const Dr=new Tf("@firebase/app"),BI="@firebase/app-compat",$I="@firebase/analytics-compat",qI="@firebase/analytics",WI="@firebase/app-check-compat",HI="@firebase/app-check",GI="@firebase/auth",KI="@firebase/auth-compat",QI="@firebase/database",YI="@firebase/data-connect",XI="@firebase/database-compat",JI="@firebase/functions",ZI="@firebase/functions-compat",e1="@firebase/installations",t1="@firebase/installations-compat",n1="@firebase/messaging",r1="@firebase/messaging-compat",i1="@firebase/performance",s1="@firebase/performance-compat",o1="@firebase/remote-config",a1="@firebase/remote-config-compat",l1="@firebase/storage",u1="@firebase/storage-compat",c1="@firebase/firestore",h1="@firebase/ai",d1="@firebase/firestore-compat",f1="firebase",p1="12.3.0";/**
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
 */const Qd="[DEFAULT]",m1={[Kd]:"fire-core",[BI]:"fire-core-compat",[qI]:"fire-analytics",[$I]:"fire-analytics-compat",[HI]:"fire-app-check",[WI]:"fire-app-check-compat",[GI]:"fire-auth",[KI]:"fire-auth-compat",[QI]:"fire-rtdb",[YI]:"fire-data-connect",[XI]:"fire-rtdb-compat",[JI]:"fire-fn",[ZI]:"fire-fn-compat",[e1]:"fire-iid",[t1]:"fire-iid-compat",[n1]:"fire-fcm",[r1]:"fire-fcm-compat",[i1]:"fire-perf",[s1]:"fire-perf-compat",[o1]:"fire-rc",[a1]:"fire-rc-compat",[l1]:"fire-gcs",[u1]:"fire-gcs-compat",[c1]:"fire-fst",[d1]:"fire-fst-compat",[h1]:"fire-vertex","fire-js":"fire-js",[f1]:"fire-js-all"};/**
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
 */const lc=new Map,g1=new Map,Yd=new Map;function Kg(r,e){try{r.container.addComponent(e)}catch(t){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function xo(r){const e=r.name;if(Yd.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;Yd.set(e,r);for(const t of lc.values())Kg(t,r);for(const t of g1.values())Kg(t,r);return!0}function Sf(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function _n(r){return r==null?!1:r.settings!==void 0}/**
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
 */const y1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ri=new fl("app","Firebase",y1);/**
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
 */class _1{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ri.create("app-deleted",{appName:this._name})}}/**
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
 */const jo=p1;function B_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:Qd,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Ri.create("bad-app-name",{appName:String(o)});if(t||(t=L_()),!t)throw Ri.create("no-options");const l=lc.get(o);if(l){if(vs(t,l.options)&&vs(i,l.config))return l;throw Ri.create("duplicate-app",{appName:o})}const h=new SI(o);for(const g of Yd.values())h.addComponent(g);const f=new _1(t,i,h);return lc.set(o,f),f}function $_(r=Qd){const e=lc.get(r);if(!e&&r===Qd&&L_())return B_();if(!e)throw Ri.create("no-app",{appName:r});return e}function Pi(r,e,t){let i=m1[r]??r;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(h.join(" "));return}xo(new ws(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const v1="firebase-heartbeat-database",w1=1,nl="firebase-heartbeat-store";let bd=null;function q_(){return bd||(bd=MI(v1,w1,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(nl)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ri.create("idb-open",{originalErrorMessage:r.message})})),bd}async function E1(r){try{const t=(await q_()).transaction(nl),i=await t.objectStore(nl).get(W_(r));return await t.done,i}catch(e){if(e instanceof Fr)Dr.warn(e.message);else{const t=Ri.create("idb-get",{originalErrorMessage:e?.message});Dr.warn(t.message)}}}async function Qg(r,e){try{const i=(await q_()).transaction(nl,"readwrite");await i.objectStore(nl).put(e,W_(r)),await i.done}catch(t){if(t instanceof Fr)Dr.warn(t.message);else{const i=Ri.create("idb-set",{originalErrorMessage:t?.message});Dr.warn(i.message)}}}function W_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const T1=1024,I1=30;class S1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new C1(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>I1){const o=R1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Dr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yg(),{heartbeatsToSend:t,unsentEntries:i}=A1(this._heartbeatsCache.heartbeats),o=ac(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Dr.warn(e),""}}}function Yg(){return new Date().toISOString().substring(0,10)}function A1(r,e=T1){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Xg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Xg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class C1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dI()?fI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await E1(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Qg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Qg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xg(r){return ac(JSON.stringify({version:2,heartbeats:r})).length}function R1(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function P1(r){xo(new ws("platform-logger",e=>new jI(e),"PRIVATE")),xo(new ws("heartbeat",e=>new S1(e),"PRIVATE")),Pi(Kd,Gg,r),Pi(Kd,Gg,"esm2020"),Pi("fire-js","")}P1("");var k1="firebase",x1="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pi(k1,x1,"app");function H_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const N1=H_,G_=new fl("auth","Firebase",H_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Tf("@firebase/auth");function D1(r,...e){uc.logLevel<=ke.WARN&&uc.warn(`Auth (${jo}): ${r}`,...e)}function Qu(r,...e){uc.logLevel<=ke.ERROR&&uc.error(`Auth (${jo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(r,...e){throw Af(r,...e)}function rr(r,...e){return Af(r,...e)}function K_(r,e,t){const i={...N1(),[e]:t};return new fl("auth","Firebase",i).create(e,{appName:r.name})}function Nr(r){return K_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Af(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return G_.create(r,...e)}function ye(r,e,...t){if(!r)throw Af(e,...t)}function kr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Qu(e),new Error(e)}function Vr(r,e){r||kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){return typeof self<"u"&&self.location?.href||""}function V1(){return Jg()==="http:"||Jg()==="https:"}function Jg(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(V1()||lI()||"connection"in navigator)?navigator.onLine:!0}function O1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile=sI()||uI()}get(){return b1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(r,e){Vr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],U1=new ml(3e4,6e4);function jr(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function zr(r,e,t,i,o={}){return Y_(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=pl({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:g,...l};return aI()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Fo(r.emulatorConfig.host)&&(y.credentials="include"),Q_.fetch()(await X_(r,r.config.apiHost,t,f),y)})}async function Y_(r,e,t){r._canInitEmulator=!1;const i={...L1,...e};try{const o=new j1(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Bu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,y]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Bu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Bu(r,"user-disabled",h);const w=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw K_(r,w,y);On(r,w)}}catch(o){if(o instanceof Fr)throw o;On(r,"network-request-failed",{message:String(o)})}}async function gl(r,e,t,i,o={}){const l=await zr(r,e,t,i,o);return"mfaPendingCredential"in l&&On(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function X_(r,e,t,i){const o=`${e}${t}?${i}`,l=r,h=l.config.emulator?Cf(r.config,o):`${r.config.apiScheme}://${o}`;return M1.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function F1(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class j1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(rr(this.auth,"network-request-failed")),U1.get())})}}function Bu(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=rr(r,e,i);return o.customData._tokenResponse=t,o}function Zg(r){return r!==void 0&&r.enterprise!==void 0}class z1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return F1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function B1(r,e){return zr(r,"GET","/v2/recaptchaConfig",jr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(r,e){return zr(r,"POST","/v1/accounts:delete",e)}async function cc(r,e){return zr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function q1(r,e=!1){const t=gt(r),i=await t.getIdToken(e),o=Rf(i);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:i,authTime:Qa(Od(o.auth_time)),issuedAtTime:Qa(Od(o.iat)),expirationTime:Qa(Od(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Od(r){return Number(r)*1e3}function Rf(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Qu("JWT malformed, contained fewer than 3 sections"),null;try{const o=b_(t);return o?JSON.parse(o):(Qu("Failed to decode base64 JWT payload"),null)}catch(o){return Qu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function ey(r){const e=Rf(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Fr&&W1(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function W1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hc(r){const e=r.auth,t=await r.getIdToken(),i=await rl(r,cc(e,{idToken:t}));ye(i?.users.length,e,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const l=o.providerUserInfo?.length?J_(o.providerUserInfo):[],h=K1(r.providerData,l),f=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!h?.length,y=f?g:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Jd(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,w)}async function G1(r){const e=gt(r);await hc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K1(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function J_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q1(r,e){const t=await Y_(r,{},async()=>{const i=pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await X_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return r.emulatorConfig&&Fo(r.emulatorConfig.host)&&(g.credentials="include"),Q_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Y1(r,e){return zr(r,"POST","/v2/accounts:revokeToken",jr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ey(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=ey(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await Q1(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new So;return i&&(ye(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new So,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Dn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new H1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Jd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await rl(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q1(this,e)}reload(){return G1(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await hc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Nr(this.auth));const e=await this.getIdToken();return await rl(this,$1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,y=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:E,emailVerified:S,isAnonymous:b,providerData:$,stsTokenManager:q}=t;ye(E&&q,e,"internal-error");const j=So.fromJSON(this.name,q);ye(typeof E=="string",e,"internal-error"),_i(i,e.name),_i(o,e.name),ye(typeof S=="boolean",e,"internal-error"),ye(typeof b=="boolean",e,"internal-error"),_i(l,e.name),_i(h,e.name),_i(f,e.name),_i(g,e.name),_i(y,e.name),_i(w,e.name);const re=new Dn({uid:E,auth:e,email:o,emailVerified:S,displayName:i,isAnonymous:b,photoURL:h,phoneNumber:l,tenantId:f,stsTokenManager:j,createdAt:y,lastLoginAt:w});return $&&Array.isArray($)&&(re.providerData=$.map(te=>({...te}))),g&&(re._redirectEventId=g),re}static async _fromIdTokenResponse(e,t,i=!1){const o=new So;o.updateFromServerResponse(t);const l=new Dn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await hc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?J_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,f=new So;f.updateFromIdToken(i);const g=new Dn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Jd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Map;function xr(r){Vr(r instanceof Function,"Expected a class definition");let e=ty.get(r);return e?(Vr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ty.set(r,e),e)}/**
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
 */class Z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Z_.type="NONE";const ny=Z_;/**
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
 */function Yu(r,e,t){return`firebase:${r}:${e}:${t}`}class Ao{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Yu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Yu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await cc(this.auth,{idToken:e}).catch(()=>{});return t?Dn._fromGetAccountInfoResponse(this.auth,t,e):null}return Dn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ao(xr(ny),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||xr(ny);const h=Yu(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const w=await y._get(h);if(w){let E;if(typeof w=="string"){const S=await cc(e,{idToken:w}).catch(()=>{});if(!S)break;E=await Dn._fromGetAccountInfoResponse(e,S,w)}else E=Dn._fromJSON(e,w);y!==l&&(f=E),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Ao(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new Ao(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ev(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sv(e))return"Blackberry";if(ov(e))return"Webos";if(tv(e))return"Safari";if((e.includes("chrome/")||nv(e))&&!e.includes("edge/"))return"Chrome";if(iv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function ev(r=zt()){return/firefox\//i.test(r)}function tv(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nv(r=zt()){return/crios\//i.test(r)}function rv(r=zt()){return/iemobile/i.test(r)}function iv(r=zt()){return/android/i.test(r)}function sv(r=zt()){return/blackberry/i.test(r)}function ov(r=zt()){return/webos/i.test(r)}function Pf(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function X1(r=zt()){return Pf(r)&&!!window.navigator?.standalone}function J1(){return cI()&&document.documentMode===10}function av(r=zt()){return Pf(r)||iv(r)||ov(r)||sv(r)||/windows phone/i.test(r)||rv(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(r,e=[]){let t;switch(r){case"Browser":t=ry(zt());break;case"Worker":t=`${ry(zt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jo}/${i}`}/**
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
 */class Z1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function eS(r,e={}){return zr(r,"GET","/v2/passwordPolicy",jr(r,e))}/**
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
 */const tS=6;class nS{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??tS,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iy(this),this.idTokenSubscription=new iy(this),this.beforeStateQueue=new Z1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ao.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await cc(this,{idToken:e}),i=await Dn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(_n(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,h=i?._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===h)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(Nr(this));const t=e?gt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(Nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eS(this),t=new nS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Y1(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await Ao.create(this,[xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&D1(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Fi(r){return gt(r)}class iy{constructor(e){this.auth=e,this.observer=null,this.addObserver=_I(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iS(r){Nc=r}function uv(r){return Nc.loadJS(r)}function sS(){return Nc.recaptchaEnterpriseScript}function oS(){return Nc.gapiScript}function aS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class lS{constructor(){this.enterprise=new uS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class uS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const cS="recaptcha-enterprise",cv="NO_RECAPTCHA";class hS{constructor(e){this.type=cS,this.auth=Fi(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{B1(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new z1(g);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;Zg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(cv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&Zg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=sS();g.length!==0&&(g+=f),uv(g).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function sy(r,e,t,i=!1,o=!1){const l=new hS(r);let h;if(o)h=cv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function dc(r,e,t,i,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await sy(r,e,t,t==="getOobCode");return i(r,l)}else return i(r,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await sy(r,e,t,t==="getOobCode");return i(r,h)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(r,e){const t=Sf(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(vs(l,e??{}))return o;On(o,"already-initialized")}return t.initialize({options:e})}function fS(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(xr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function pS(r,e,t){const i=Fi(r);ye(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=hv(e),{host:h,port:f}=mS(e),g=f===null?"":`:${f}`,y={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ye(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ye(vs(y,i.config.emulator)&&vs(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Fo(h)?(U_(`${l}//${h}${g}`),F_("Auth",!0)):gS()}function hv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function mS(r){const e=hv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:oy(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:oy(h)}}}function oy(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function gS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,t){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}async function yS(r,e){return zr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(r,e){return gl(r,"POST","/v1/accounts:signInWithPassword",jr(r,e))}async function dv(r,e){return zr(r,"POST","/v1/accounts:sendOobCode",jr(r,e))}async function vS(r,e){return dv(r,e)}async function wS(r,e){return dv(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(r,e){return gl(r,"POST","/v1/accounts:signInWithEmailLink",jr(r,e))}async function TS(r,e){return gl(r,"POST","/v1/accounts:signInWithEmailLink",jr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends kf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new il(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new il(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dc(e,t,"signInWithPassword",_S);case"emailLink":return ES(e,{email:this._email,oobCode:this._password});default:On(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dc(e,i,"signUpPassword",yS);case"emailLink":return TS(e,{idToken:t,email:this._email,oobCode:this._password});default:On(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(r,e){return gl(r,"POST","/v1/accounts:signInWithIdp",jr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS="http://localhost";class Es extends kf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):On("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const h=new Es(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Co(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Co(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Co(e,t)}buildRequest(){const e={requestUri:IS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AS(r){const e=Ba($a(r)).link,t=e?Ba($a(e)).deep_link_id:null,i=Ba($a(r)).deep_link_id;return(i?Ba($a(i)).link:null)||i||t||e||r}class xf{constructor(e){const t=Ba($a(e)),i=t.apiKey??null,o=t.oobCode??null,l=SS(t.mode??null);ye(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=AS(e);try{return new xf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.providerId=zo.PROVIDER_ID}static credential(e,t){return il._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=xf.parseLink(t);return ye(i,"argument-error"),il._fromEmailAndCode(e,i.code,i.tenantId)}}zo.PROVIDER_ID="password";zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yl extends fv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends yl{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.FACEBOOK_SIGN_IN_METHOD="facebook.com";vi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Es._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return wi.credential(t,i)}catch{return null}}}wi.GOOGLE_SIGN_IN_METHOD="google.com";wi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends yl{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.GITHUB_SIGN_IN_METHOD="github.com";Ei.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends yl{constructor(){super("twitter.com")}static credential(e,t){return Es._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ti.credential(t,i)}catch{return null}}}Ti.TWITTER_SIGN_IN_METHOD="twitter.com";Ti.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(r,e){return gl(r,"POST","/v1/accounts:signUp",jr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Dn._fromIdTokenResponse(e,i,o),h=ay(i);return new Ts({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=ay(i);return new Ts({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function ay(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends Fr{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,fc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new fc(e,t,i,o)}}function pv(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?fc._fromErrorAndOperation(r,l,e,i):l})}async function RS(r,e,t=!1){const i=await rl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ts._forOperation(r,"link",i)}/**
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
 */async function PS(r,e,t=!1){const{auth:i}=r;if(_n(i.app))return Promise.reject(Nr(i));const o="reauthenticate";try{const l=await rl(r,pv(i,o,e,r),t);ye(l.idToken,i,"internal-error");const h=Rf(l.idToken);ye(h,i,"internal-error");const{sub:f}=h;return ye(r.uid===f,i,"user-mismatch"),Ts._forOperation(r,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&On(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(r,e,t=!1){if(_n(r.app))return Promise.reject(Nr(r));const i="signIn",o=await pv(r,i,e),l=await Ts._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}async function kS(r,e){return mv(Fi(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(r){const e=Fi(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xS(r,e,t){const i=Fi(r);await dc(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",wS)}async function NS(r,e,t){if(_n(r.app))return Promise.reject(Nr(r));const i=Fi(r),h=await dc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CS).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&gv(r),g}),f=await Ts._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function DS(r,e,t){return _n(r.app)?Promise.reject(Nr(r)):kS(gt(r),zo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&gv(r),i})}async function VS(r,e){const t=gt(r),o={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()},{email:l}=await vS(t.auth,o);l!==r.email&&await r.reload()}function bS(r,e,t,i){return gt(r).onIdTokenChanged(e,t,i)}function OS(r,e,t){return gt(r).beforeAuthStateChanged(e,t)}function yv(r,e,t,i){return gt(r).onAuthStateChanged(e,t,i)}function LS(r){return gt(r).signOut()}const pc="__sak";/**
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
 */class _v{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pc,"1"),this.storage.removeItem(pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=1e3,US=10;class vv extends _v{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=av(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);J1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,US):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},MS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vv.type="LOCAL";const FS=vv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv extends _v{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wv.type="SESSION";const Ev=wv;/**
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
 */function jS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Dc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),g=await jS(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class zS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const y=Nf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(E){const S=E;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(S.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return window}function BS(r){ir().location.href=r}/**
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
 */function Tv(){return typeof ir().WorkerGlobalScope<"u"&&typeof ir().importScripts=="function"}async function $S(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qS(){return navigator?.serviceWorker?.controller||null}function WS(){return Tv()?self:null}/**
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
 */const Iv="firebaseLocalStorageDb",HS=1,mc="firebaseLocalStorage",Sv="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vc(r,e){return r.transaction([mc],e?"readwrite":"readonly").objectStore(mc)}function GS(){const r=indexedDB.deleteDatabase(Iv);return new _l(r).toPromise()}function Zd(){const r=indexedDB.open(Iv,HS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(mc,{keyPath:Sv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(mc)?e(i):(i.close(),await GS(),e(await Zd()))})})}async function ly(r,e,t){const i=Vc(r,!0).put({[Sv]:e,value:t});return new _l(i).toPromise()}async function KS(r,e){const t=Vc(r,!1).get(e),i=await new _l(t).toPromise();return i===void 0?null:i.value}function uy(r,e){const t=Vc(r,!0).delete(e);return new _l(t).toPromise()}const QS=800,YS=3;class Av{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>YS)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(WS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await $S(),!this.activeServiceWorker)return;this.sender=new zS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zd();return await ly(e,pc,"1"),await uy(e,pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ly(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>KS(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>uy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Vc(o,!1).getAll();return new _l(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Av.type="LOCAL";const XS=Av;new ml(3e4,6e4);/**
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
 */function JS(r,e){return e?xr(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Df extends kf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Co(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Co(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Co(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ZS(r){return mv(r.auth,new Df(r),r.bypassAuthState)}function eA(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),PS(t,new Df(r),r.bypassAuthState)}async function tA(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),RS(t,new Df(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZS;case"linkViaPopup":case"linkViaRedirect":return tA;case"reauthViaPopup":case"reauthViaRedirect":return eA;default:On(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=new ml(2e3,1e4);class To extends Cv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,To.currentPopupAction&&To.currentPopupAction.cancel(),To.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=Nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,To.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nA.get())};e()}}To.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="pendingRedirect",Xu=new Map;class iA extends Cv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Xu.get(this.auth._key());if(!e){try{const i=await sA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Xu.set(this.auth._key(),e)}return this.bypassAuthState||Xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sA(r,e){const t=lA(e),i=aA(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function oA(r,e){Xu.set(r._key(),e)}function aA(r){return xr(r._redirectPersistence)}function lA(r){return Yu(rA,r.config.apiKey,r.name)}async function uA(r,e,t=!1){if(_n(r.app))return Promise.reject(Nr(r));const i=Fi(r),o=JS(i,e),h=await new iA(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=600*1e3;class hA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Rv(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(rr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cA&&this.cachedEventUids.clear(),this.cachedEventUids.has(cy(e))}saveEventToCache(e){this.cachedEventUids.add(cy(e)),this.lastProcessedEventTime=Date.now()}}function cy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Rv({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function dA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(r,e={}){return zr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mA=/^https?/;async function gA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await fA(r);for(const t of e)try{if(yA(t))return}catch{}On(r,"unauthorized-domain")}function yA(r){const e=Xd(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!mA.test(t))return!1;if(pA.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const _A=new ml(3e4,6e4);function hy(){const r=ir().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function vA(r){return new Promise((e,t)=>{function i(){hy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hy(),t(rr(r,"network-request-failed"))},timeout:_A.get()})}if(ir().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ir().gapi?.load)i();else{const o=aS("iframefcb");return ir()[o]=()=>{gapi.load?i():t(rr(r,"network-request-failed"))},uv(`${oS()}?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw Ju=null,e})}let Ju=null;function wA(r){return Ju=Ju||vA(r),Ju}/**
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
 */const EA=new ml(5e3,15e3),TA="__/auth/iframe",IA="emulator/auth/iframe",SA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CA(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Cf(e,IA):`https://${r.config.authDomain}/${TA}`,i={apiKey:e.apiKey,appName:r.name,v:jo},o=AA.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${pl(i).slice(1)}`}async function RA(r){const e=await wA(r),t=ir().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:CA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=rr(r,"network-request-failed"),f=ir().setTimeout(()=>{l(h)},EA.get());function g(){ir().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const PA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kA=500,xA=600,NA="_blank",DA="http://localhost";class dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VA(r,e,t,i=kA,o=xA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g={...PA,width:i.toString(),height:o.toString(),top:l,left:h},y=zt().toLowerCase();t&&(f=nv(y)?NA:t),ev(y)&&(e=e||DA,g.scrollbars="yes");const w=Object.entries(g).reduce((S,[b,$])=>`${S}${b}=${$},`,"");if(X1(y)&&f!=="_self")return bA(e||"",f),new dy(null);const E=window.open(e||"",f,w);ye(E,r,"popup-blocked");try{E.focus()}catch{}return new dy(E)}function bA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const OA="__/auth/handler",LA="emulator/auth/handler",MA=encodeURIComponent("fac");async function fy(r,e,t,i,o,l){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:jo,eventId:o};if(e instanceof fv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",yI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,E]of Object.entries({}))h[w]=E}if(e instanceof yl){const w=e.getScopes().filter(E=>E!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await r._getAppCheckToken(),y=g?`#${MA}=${encodeURIComponent(g)}`:"";return`${UA(r)}?${pl(f).slice(1)}${y}`}function UA({config:r}){return r.emulator?Cf(r,LA):`https://${r.authDomain}/${OA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="webStorageSupport";class FA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ev,this._completeRedirectFn=uA,this._overrideRedirectResult=oA}async _openPopup(e,t,i,o){Vr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await fy(e,t,i,Xd(),o);return VA(e,l,Nf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await fy(e,t,i,Xd(),o);return BS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Vr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await RA(e),i=new hA(e);return t.register("authEvent",o=>(ye(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ld,{type:Ld},o=>{const l=o?.[0]?.[Ld];l!==void 0&&t(!!l),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return av()||tv()||Pf()}}const jA=FA;var py="@firebase/auth",my="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $A(r){xo(new ws("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lv(r)},y=new rS(i,o,l,g);return fS(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),xo(new ws("auth-internal",e=>{const t=Fi(e.getProvider("auth").getImmediate());return(i=>new zA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pi(py,my,BA(r)),Pi(py,my,"esm2020")}/**
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
 */const qA=300,WA=M_("authIdTokenMaxAge")||qA;let gy=null;const HA=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>WA)return;const o=t?.token;gy!==o&&(gy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function GA(r=$_()){const e=Sf(r,"auth");if(e.isInitialized())return e.getImmediate();const t=dS(r,{popupRedirectResolver:jA,persistence:[XS,FS,Ev]}),i=M_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=HA(l.toString());OS(t,h,()=>h(t.currentUser)),bS(t,f=>h(f))}}const o=O_("auth");return o&&pS(t,`http://${o}`),t}function KA(){return document.getElementsByTagName("head")?.[0]??document}iS({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=rr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",KA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$A("Browser");var yy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ki,Pv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,A){function P(){}P.prototype=A.prototype,x.F=A.prototype,x.prototype=new P,x.prototype.constructor=x,x.D=function(V,N,L){for(var R=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)R[qe-2]=arguments[qe];return A.prototype[N].apply(V,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,A,P){P||(P=0);const V=Array(16);if(typeof A=="string")for(var N=0;N<16;++N)V[N]=A.charCodeAt(P++)|A.charCodeAt(P++)<<8|A.charCodeAt(P++)<<16|A.charCodeAt(P++)<<24;else for(N=0;N<16;++N)V[N]=A[P++]|A[P++]<<8|A[P++]<<16|A[P++]<<24;A=x.g[0],P=x.g[1],N=x.g[2];let L=x.g[3],R;R=A+(L^P&(N^L))+V[0]+3614090360&4294967295,A=P+(R<<7&4294967295|R>>>25),R=L+(N^A&(P^N))+V[1]+3905402710&4294967295,L=A+(R<<12&4294967295|R>>>20),R=N+(P^L&(A^P))+V[2]+606105819&4294967295,N=L+(R<<17&4294967295|R>>>15),R=P+(A^N&(L^A))+V[3]+3250441966&4294967295,P=N+(R<<22&4294967295|R>>>10),R=A+(L^P&(N^L))+V[4]+4118548399&4294967295,A=P+(R<<7&4294967295|R>>>25),R=L+(N^A&(P^N))+V[5]+1200080426&4294967295,L=A+(R<<12&4294967295|R>>>20),R=N+(P^L&(A^P))+V[6]+2821735955&4294967295,N=L+(R<<17&4294967295|R>>>15),R=P+(A^N&(L^A))+V[7]+4249261313&4294967295,P=N+(R<<22&4294967295|R>>>10),R=A+(L^P&(N^L))+V[8]+1770035416&4294967295,A=P+(R<<7&4294967295|R>>>25),R=L+(N^A&(P^N))+V[9]+2336552879&4294967295,L=A+(R<<12&4294967295|R>>>20),R=N+(P^L&(A^P))+V[10]+4294925233&4294967295,N=L+(R<<17&4294967295|R>>>15),R=P+(A^N&(L^A))+V[11]+2304563134&4294967295,P=N+(R<<22&4294967295|R>>>10),R=A+(L^P&(N^L))+V[12]+1804603682&4294967295,A=P+(R<<7&4294967295|R>>>25),R=L+(N^A&(P^N))+V[13]+4254626195&4294967295,L=A+(R<<12&4294967295|R>>>20),R=N+(P^L&(A^P))+V[14]+2792965006&4294967295,N=L+(R<<17&4294967295|R>>>15),R=P+(A^N&(L^A))+V[15]+1236535329&4294967295,P=N+(R<<22&4294967295|R>>>10),R=A+(N^L&(P^N))+V[1]+4129170786&4294967295,A=P+(R<<5&4294967295|R>>>27),R=L+(P^N&(A^P))+V[6]+3225465664&4294967295,L=A+(R<<9&4294967295|R>>>23),R=N+(A^P&(L^A))+V[11]+643717713&4294967295,N=L+(R<<14&4294967295|R>>>18),R=P+(L^A&(N^L))+V[0]+3921069994&4294967295,P=N+(R<<20&4294967295|R>>>12),R=A+(N^L&(P^N))+V[5]+3593408605&4294967295,A=P+(R<<5&4294967295|R>>>27),R=L+(P^N&(A^P))+V[10]+38016083&4294967295,L=A+(R<<9&4294967295|R>>>23),R=N+(A^P&(L^A))+V[15]+3634488961&4294967295,N=L+(R<<14&4294967295|R>>>18),R=P+(L^A&(N^L))+V[4]+3889429448&4294967295,P=N+(R<<20&4294967295|R>>>12),R=A+(N^L&(P^N))+V[9]+568446438&4294967295,A=P+(R<<5&4294967295|R>>>27),R=L+(P^N&(A^P))+V[14]+3275163606&4294967295,L=A+(R<<9&4294967295|R>>>23),R=N+(A^P&(L^A))+V[3]+4107603335&4294967295,N=L+(R<<14&4294967295|R>>>18),R=P+(L^A&(N^L))+V[8]+1163531501&4294967295,P=N+(R<<20&4294967295|R>>>12),R=A+(N^L&(P^N))+V[13]+2850285829&4294967295,A=P+(R<<5&4294967295|R>>>27),R=L+(P^N&(A^P))+V[2]+4243563512&4294967295,L=A+(R<<9&4294967295|R>>>23),R=N+(A^P&(L^A))+V[7]+1735328473&4294967295,N=L+(R<<14&4294967295|R>>>18),R=P+(L^A&(N^L))+V[12]+2368359562&4294967295,P=N+(R<<20&4294967295|R>>>12),R=A+(P^N^L)+V[5]+4294588738&4294967295,A=P+(R<<4&4294967295|R>>>28),R=L+(A^P^N)+V[8]+2272392833&4294967295,L=A+(R<<11&4294967295|R>>>21),R=N+(L^A^P)+V[11]+1839030562&4294967295,N=L+(R<<16&4294967295|R>>>16),R=P+(N^L^A)+V[14]+4259657740&4294967295,P=N+(R<<23&4294967295|R>>>9),R=A+(P^N^L)+V[1]+2763975236&4294967295,A=P+(R<<4&4294967295|R>>>28),R=L+(A^P^N)+V[4]+1272893353&4294967295,L=A+(R<<11&4294967295|R>>>21),R=N+(L^A^P)+V[7]+4139469664&4294967295,N=L+(R<<16&4294967295|R>>>16),R=P+(N^L^A)+V[10]+3200236656&4294967295,P=N+(R<<23&4294967295|R>>>9),R=A+(P^N^L)+V[13]+681279174&4294967295,A=P+(R<<4&4294967295|R>>>28),R=L+(A^P^N)+V[0]+3936430074&4294967295,L=A+(R<<11&4294967295|R>>>21),R=N+(L^A^P)+V[3]+3572445317&4294967295,N=L+(R<<16&4294967295|R>>>16),R=P+(N^L^A)+V[6]+76029189&4294967295,P=N+(R<<23&4294967295|R>>>9),R=A+(P^N^L)+V[9]+3654602809&4294967295,A=P+(R<<4&4294967295|R>>>28),R=L+(A^P^N)+V[12]+3873151461&4294967295,L=A+(R<<11&4294967295|R>>>21),R=N+(L^A^P)+V[15]+530742520&4294967295,N=L+(R<<16&4294967295|R>>>16),R=P+(N^L^A)+V[2]+3299628645&4294967295,P=N+(R<<23&4294967295|R>>>9),R=A+(N^(P|~L))+V[0]+4096336452&4294967295,A=P+(R<<6&4294967295|R>>>26),R=L+(P^(A|~N))+V[7]+1126891415&4294967295,L=A+(R<<10&4294967295|R>>>22),R=N+(A^(L|~P))+V[14]+2878612391&4294967295,N=L+(R<<15&4294967295|R>>>17),R=P+(L^(N|~A))+V[5]+4237533241&4294967295,P=N+(R<<21&4294967295|R>>>11),R=A+(N^(P|~L))+V[12]+1700485571&4294967295,A=P+(R<<6&4294967295|R>>>26),R=L+(P^(A|~N))+V[3]+2399980690&4294967295,L=A+(R<<10&4294967295|R>>>22),R=N+(A^(L|~P))+V[10]+4293915773&4294967295,N=L+(R<<15&4294967295|R>>>17),R=P+(L^(N|~A))+V[1]+2240044497&4294967295,P=N+(R<<21&4294967295|R>>>11),R=A+(N^(P|~L))+V[8]+1873313359&4294967295,A=P+(R<<6&4294967295|R>>>26),R=L+(P^(A|~N))+V[15]+4264355552&4294967295,L=A+(R<<10&4294967295|R>>>22),R=N+(A^(L|~P))+V[6]+2734768916&4294967295,N=L+(R<<15&4294967295|R>>>17),R=P+(L^(N|~A))+V[13]+1309151649&4294967295,P=N+(R<<21&4294967295|R>>>11),R=A+(N^(P|~L))+V[4]+4149444226&4294967295,A=P+(R<<6&4294967295|R>>>26),R=L+(P^(A|~N))+V[11]+3174756917&4294967295,L=A+(R<<10&4294967295|R>>>22),R=N+(A^(L|~P))+V[2]+718787259&4294967295,N=L+(R<<15&4294967295|R>>>17),R=P+(L^(N|~A))+V[9]+3951481745&4294967295,x.g[0]=x.g[0]+A&4294967295,x.g[1]=x.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,x.g[2]=x.g[2]+N&4294967295,x.g[3]=x.g[3]+L&4294967295}i.prototype.v=function(x,A){A===void 0&&(A=x.length);const P=A-this.blockSize,V=this.C;let N=this.h,L=0;for(;L<A;){if(N==0)for(;L<=P;)o(this,x,L),L+=this.blockSize;if(typeof x=="string"){for(;L<A;)if(V[N++]=x.charCodeAt(L++),N==this.blockSize){o(this,V),N=0;break}}else for(;L<A;)if(V[N++]=x[L++],N==this.blockSize){o(this,V),N=0;break}}this.h=N,this.o+=A},i.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var A=1;A<x.length-8;++A)x[A]=0;A=this.o*8;for(var P=x.length-8;P<x.length;++P)x[P]=A&255,A/=256;for(this.v(x),x=Array(16),A=0,P=0;P<4;++P)for(let V=0;V<32;V+=8)x[A++]=this.g[P]>>>V&255;return x};function l(x,A){var P=f;return Object.prototype.hasOwnProperty.call(P,x)?P[x]:P[x]=A(x)}function h(x,A){this.h=A;const P=[];let V=!0;for(let N=x.length-1;N>=0;N--){const L=x[N]|0;V&&L==A||(P[N]=L,V=!1)}this.g=P}var f={};function g(x){return-128<=x&&x<128?l(x,function(A){return new h([A|0],A<0?-1:0)}):new h([x|0],x<0?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return E;if(x<0)return j(y(-x));const A=[];let P=1;for(let V=0;x>=P;V++)A[V]=x/P|0,P*=4294967296;return new h(A,0)}function w(x,A){if(x.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(x.charAt(0)=="-")return j(w(x.substring(1),A));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const P=y(Math.pow(A,8));let V=E;for(let L=0;L<x.length;L+=8){var N=Math.min(8,x.length-L);const R=parseInt(x.substring(L,L+N),A);N<8?(N=y(Math.pow(A,N)),V=V.j(N).add(y(R))):(V=V.j(P),V=V.add(y(R)))}return V}var E=g(0),S=g(1),b=g(16777216);r=h.prototype,r.m=function(){if(q(this))return-j(this).m();let x=0,A=1;for(let P=0;P<this.g.length;P++){const V=this.i(P);x+=(V>=0?V:4294967296+V)*A,A*=4294967296}return x},r.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if($(this))return"0";if(q(this))return"-"+j(this).toString(x);const A=y(Math.pow(x,6));var P=this;let V="";for(;;){const N=fe(P,A).g;P=re(P,N.j(A));let L=((P.g.length>0?P.g[0]:P.h)>>>0).toString(x);if(P=N,$(P))return L+V;for(;L.length<6;)L="0"+L;V=L+V}},r.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function $(x){if(x.h!=0)return!1;for(let A=0;A<x.g.length;A++)if(x.g[A]!=0)return!1;return!0}function q(x){return x.h==-1}r.l=function(x){return x=re(this,x),q(x)?-1:$(x)?0:1};function j(x){const A=x.g.length,P=[];for(let V=0;V<A;V++)P[V]=~x.g[V];return new h(P,~x.h).add(S)}r.abs=function(){return q(this)?j(this):this},r.add=function(x){const A=Math.max(this.g.length,x.g.length),P=[];let V=0;for(let N=0;N<=A;N++){let L=V+(this.i(N)&65535)+(x.i(N)&65535),R=(L>>>16)+(this.i(N)>>>16)+(x.i(N)>>>16);V=R>>>16,L&=65535,R&=65535,P[N]=R<<16|L}return new h(P,P[P.length-1]&-2147483648?-1:0)};function re(x,A){return x.add(j(A))}r.j=function(x){if($(this)||$(x))return E;if(q(this))return q(x)?j(this).j(j(x)):j(j(this).j(x));if(q(x))return j(this.j(j(x)));if(this.l(b)<0&&x.l(b)<0)return y(this.m()*x.m());const A=this.g.length+x.g.length,P=[];for(var V=0;V<2*A;V++)P[V]=0;for(V=0;V<this.g.length;V++)for(let N=0;N<x.g.length;N++){const L=this.i(V)>>>16,R=this.i(V)&65535,qe=x.i(N)>>>16,wt=x.i(N)&65535;P[2*V+2*N]+=R*wt,te(P,2*V+2*N),P[2*V+2*N+1]+=L*wt,te(P,2*V+2*N+1),P[2*V+2*N+1]+=R*qe,te(P,2*V+2*N+1),P[2*V+2*N+2]+=L*qe,te(P,2*V+2*N+2)}for(x=0;x<A;x++)P[x]=P[2*x+1]<<16|P[2*x];for(x=A;x<2*A;x++)P[x]=0;return new h(P,0)};function te(x,A){for(;(x[A]&65535)!=x[A];)x[A+1]+=x[A]>>>16,x[A]&=65535,A++}function oe(x,A){this.g=x,this.h=A}function fe(x,A){if($(A))throw Error("division by zero");if($(x))return new oe(E,E);if(q(x))return A=fe(j(x),A),new oe(j(A.g),j(A.h));if(q(A))return A=fe(x,j(A)),new oe(j(A.g),A.h);if(x.g.length>30){if(q(x)||q(A))throw Error("slowDivide_ only works with positive integers.");for(var P=S,V=A;V.l(x)<=0;)P=De(P),V=De(V);var N=Ae(P,1),L=Ae(V,1);for(V=Ae(V,2),P=Ae(P,2);!$(V);){var R=L.add(V);R.l(x)<=0&&(N=N.add(P),L=R),V=Ae(V,1),P=Ae(P,1)}return A=re(x,N.j(A)),new oe(N,A)}for(N=E;x.l(A)>=0;){for(P=Math.max(1,Math.floor(x.m()/A.m())),V=Math.ceil(Math.log(P)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),L=y(P),R=L.j(A);q(R)||R.l(x)>0;)P-=V,L=y(P),R=L.j(A);$(L)&&(L=S),N=N.add(L),x=re(x,R)}return new oe(N,x)}r.B=function(x){return fe(this,x).h},r.and=function(x){const A=Math.max(this.g.length,x.g.length),P=[];for(let V=0;V<A;V++)P[V]=this.i(V)&x.i(V);return new h(P,this.h&x.h)},r.or=function(x){const A=Math.max(this.g.length,x.g.length),P=[];for(let V=0;V<A;V++)P[V]=this.i(V)|x.i(V);return new h(P,this.h|x.h)},r.xor=function(x){const A=Math.max(this.g.length,x.g.length),P=[];for(let V=0;V<A;V++)P[V]=this.i(V)^x.i(V);return new h(P,this.h^x.h)};function De(x){const A=x.g.length+1,P=[];for(let V=0;V<A;V++)P[V]=x.i(V)<<1|x.i(V-1)>>>31;return new h(P,x.h)}function Ae(x,A){const P=A>>5;A%=32;const V=x.g.length-P,N=[];for(let L=0;L<V;L++)N[L]=A>0?x.i(L+P)>>>A|x.i(L+P+1)<<32-A:x.i(L+P);return new h(N,x.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Pv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=w,ki=h}).apply(typeof yy<"u"?yy:typeof self<"u"?self:typeof window<"u"?window:{});var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kv,qa,xv,Zu,ef,Nv,Dv,Vv;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof $u=="object"&&$u];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var U=u[T];if(!(U in _))break e;_=_[U]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var _=[],T;for(T in m)Object.prototype.hasOwnProperty.call(m,T)&&_.push([T,m[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,_){return u.call.apply(u.bind,arguments)}function y(u,m,_){return y=g,y.apply(null,arguments)}function w(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function E(u,m){function _(){}_.prototype=m.prototype,u.Z=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(T,U,B){for(var Z=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)Z[Ee-2]=arguments[Ee];return m.prototype[U].apply(T,Z)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function b(u){const m=u.length;if(m>0){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function $(u,m){for(let T=1;T<arguments.length;T++){const U=arguments[T];var _=typeof U;if(_=_!="object"?_:U?Array.isArray(U)?"array":_:"null",_=="array"||_=="object"&&typeof U.length=="number"){_=u.length||0;const B=U.length||0;u.length=_+B;for(let Z=0;Z<B;Z++)u[_+Z]=U[Z]}else u.push(U)}}class q{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function j(u){h.setTimeout(()=>{throw u},0)}function re(){var u=x;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class te{constructor(){this.h=this.g=null}add(m,_){const T=oe.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var oe=new q(()=>new fe,u=>u.reset());class fe{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let De,Ae=!1,x=new te,A=()=>{const u=Promise.resolve(void 0);De=()=>{u.then(P)}};function P(){for(var u;u=re();){try{u.h.call(u.g)}catch(_){j(_)}var m=oe;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}Ae=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,m),h.removeEventListener("test",_,m)}catch{}return u})();function R(u){return/^[\s\xa0]*$/.test(u)}function qe(u,m){N.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}E(qe,N),qe.prototype.init=function(u,m){const _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(_=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var wt="closure_listenable_"+(Math.random()*1e6|0),Dt=0;function Xe(u,m,_,T,U){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=U,this.key=++Dt,this.da=this.fa=!1}function ee(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pe(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function ae(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function O(u){const m={};for(const _ in u)m[_]=u[_];return m}const K="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ie(u,m){let _,T;for(let U=1;U<arguments.length;U++){T=arguments[U];for(_ in T)u[_]=T[_];for(let B=0;B<K.length;B++)_=K[B],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function Se(u){this.src=u,this.g={},this.h=0}Se.prototype.add=function(u,m,_,T,U){const B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);const Z=Pe(u,m,T,U);return Z>-1?(m=u[Z],_||(m.fa=!1)):(m=new Xe(m,this.src,B,!!T,U),m.fa=_,u.push(m)),m};function Re(u,m){const _=m.type;if(_ in u.g){var T=u.g[_],U=Array.prototype.indexOf.call(T,m,void 0),B;(B=U>=0)&&Array.prototype.splice.call(T,U,1),B&&(ee(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Pe(u,m,_,T){for(let U=0;U<u.length;++U){const B=u[U];if(!B.da&&B.listener==m&&B.capture==!!_&&B.ha==T)return U}return-1}var Fe="closure_lm_"+(Math.random()*1e6|0),Oe={};function Be(u,m,_,T,U){if(Array.isArray(m)){for(let B=0;B<m.length;B++)Be(u,m[B],_,T,U);return null}return _=Ko(_),u&&u[wt]?u.J(m,_,f(T)?!!T.capture:!1,U):Bt(u,m,_,!1,T,U)}function Bt(u,m,_,T,U,B){if(!m)throw Error("Invalid event type");const Z=f(U)?!!U.capture:!!U;let Ee=Ns(u);if(Ee||(u[Fe]=Ee=new Se(u)),_=Ee.add(m,_,T,Z,B),_.proxy)return _;if(T=ks(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)L||(U=Z),U===void 0&&(U=!1),u.addEventListener(m.toString(),T,U);else if(u.attachEvent)u.attachEvent(xs(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ks(){function u(_){return m.call(u.src,u.listener,_)}const m=Cl;return u}function Go(u,m,_,T,U){if(Array.isArray(m))for(var B=0;B<m.length;B++)Go(u,m[B],_,T,U);else T=f(T)?!!T.capture:!!T,_=Ko(_),u&&u[wt]?(u=u.i,B=String(m).toString(),B in u.g&&(m=u.g[B],_=Pe(m,_,T,U),_>-1&&(ee(m[_]),Array.prototype.splice.call(m,_,1),m.length==0&&(delete u.g[B],u.h--)))):u&&(u=Ns(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Pe(m,_,T,U)),(_=u>-1?m[u]:null)&&Br(_))}function Br(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[wt])Re(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(xs(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=Ns(m))?(Re(_,u),_.h==0&&(_.src=null,m[Fe]=null)):ee(u)}}}function xs(u){return u in Oe?Oe[u]:Oe[u]="on"+u}function Cl(u,m){if(u.da)u=!0;else{m=new qe(m,this);const _=u.listener,T=u.ha||u.src;u.fa&&Br(u),u=_.call(T,m)}return u}function Ns(u){return u=u[Fe],u instanceof Se?u:null}var $i="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ko(u){return typeof u=="function"?u:(u[$i]||(u[$i]=function(m){return u.handleEvent(m)}),u[$i])}function ct(){V.call(this),this.i=new Se(this),this.M=this,this.G=null}E(ct,V),ct.prototype[wt]=!0,ct.prototype.removeEventListener=function(u,m,_,T){Go(this,u,m,_,T)};function ot(u,m){var _,T=u.G;if(T)for(_=[];T;T=T.G)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new N(m,u);else if(m instanceof N)m.target=m.target||u;else{var U=m;m=new N(T,u),Ie(m,U)}U=!0;let B,Z;if(_)for(Z=_.length-1;Z>=0;Z--)B=m.g=_[Z],U=Tn(B,T,!0,m)&&U;if(B=m.g=u,U=Tn(B,T,!0,m)&&U,U=Tn(B,T,!1,m)&&U,_)for(Z=0;Z<_.length;Z++)B=m.g=_[Z],U=Tn(B,T,!1,m)&&U}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const _=u.g[m];for(let T=0;T<_.length;T++)ee(_[T]);delete u.g[m],u.h--}}this.G=null},ct.prototype.J=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},ct.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function Tn(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let U=!0;for(let B=0;B<m.length;++B){const Z=m[B];if(Z&&!Z.da&&Z.capture==_){const Ee=Z.listener,at=Z.ha||Z.src;Z.fa&&Re(u.i,Z),U=Ee.call(at,T)!==!1&&U}}return U&&!T.defaultPrevented}function Qo(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:h.setTimeout(u,m||0)}function Yo(u){u.g=Qo(()=>{u.g=null,u.i&&(u.i=!1,Yo(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Rl extends V{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Yo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(u){V.call(this),this.h=u,this.g={}}E($r,V);var Xo=[];function Ds(u){pe(u.g,function(m,_){this.g.hasOwnProperty(_)&&Br(m)},u),u.g={}}$r.prototype.N=function(){$r.Z.N.call(this),Ds(this)},$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=h.JSON.stringify,Pl=h.JSON.parse,qi=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Wr(){}function kl(){}var Hr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vs(){N.call(this,"d")}E(Vs,N);function Jo(){N.call(this,"c")}E(Jo,N);var In={},bs=null;function Gr(){return bs=bs||new ct}In.Ia="serverreachability";function Os(u){N.call(this,In.Ia,u)}E(Os,N);function cr(u){const m=Gr();ot(m,new Os(m))}In.STAT_EVENT="statevent";function hr(u,m){N.call(this,In.STAT_EVENT,u),this.stat=m}E(hr,N);function rt(u){const m=Gr();ot(m,new hr(m,u))}In.Ja="timingevent";function Zo(u,m){N.call(this,In.Ja,u),this.size=m}E(Zo,N);function Kr(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function Qr(){this.g=!0}Qr.prototype.ua=function(){this.g=!1};function xl(u,m,_,T,U,B){u.info(function(){if(u.g)if(B){var Z="",Ee=B.split("&");for(let ze=0;ze<Ee.length;ze++){var at=Ee[ze].split("=");if(at.length>1){const ht=at[0];at=at[1];const sn=ht.split("_");Z=sn.length>=2&&sn[1]=="type"?Z+(ht+"="+at+"&"):Z+(ht+"=redacted&")}}}else Z=null;else Z=B;return"XMLHTTP REQ ("+T+") [attempt "+U+"]: "+m+`
`+_+`
`+Z})}function Nl(u,m,_,T,U,B,Z){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+U+"]: "+m+`
`+_+`
`+B+" "+Z})}function Un(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Wi(u,_)+(T?" "+T:"")})}function Dl(u,m){u.info(function(){return"TIMEOUT: "+m})}Qr.prototype.info=function(){};function Wi(u,m){if(!u.g)return m;if(!m)return null;try{const B=JSON.parse(m);if(B){for(u=0;u<B.length;u++)if(Array.isArray(B[u])){var _=B[u];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var U=T[0];if(U!="noop"&&U!="stop"&&U!="close")for(let Z=1;Z<T.length;Z++)T[Z]=""}}}}return qr(B)}catch{return m}}var Yr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vl;function dr(){}E(dr,Wr),dr.prototype.g=function(){return new XMLHttpRequest},Vl=new dr;function Fn(u){return encodeURIComponent(String(u))}function Ls(u){var m=1;u=u.split(":");const _=[];for(;m>0&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function cn(u,m,_,T){this.j=u,this.i=m,this.l=_,this.S=T||1,this.V=new $r(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bl}function bl(){this.i=null,this.g="",this.h=!1}var Ol={},ea={};function Sn(u,m,_){u.M=1,u.A=pr(hn(m)),u.u=_,u.R=!0,ta(u,null)}function ta(u,m){u.F=Date.now(),Hi(u),u.B=hn(u.A);var _=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),ha(_.i,"t",T),u.C=0,_=u.j.L,u.h=new bl,u.g=Wl(u.j,_?m:null,!u.u),u.P>0&&(u.O=new Rl(y(u.Y,u,u.g),u.P)),m=u.V,_=u.g,T=u.ba;var U="readystatechange";Array.isArray(U)||(U&&(Xo[0]=U.toString()),U=Xo);for(let B=0;B<U.length;B++){const Z=Be(_,U[B],T||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=u.J?O(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),cr(),xl(u.i,u.v,u.B,u.l,u.S,u.u)}cn.prototype.ba=function(u){u=u.target;const m=this.O;m&&Hn(u)==3?m.j():this.Y(u)},cn.prototype.Y=function(u){try{if(u==this.g)e:{const Ee=Hn(this.g),at=this.g.ya(),ze=this.g.ca();if(!(Ee<3)&&(Ee!=3||this.g&&(this.h.h||this.g.la()||$l(this.g)))){this.K||Ee!=4||at==7||(at==8||ze<=0?cr(3):cr(2)),Ms(this);var m=this.g.ca();this.X=m;var _=Ll(this);if(this.o=m==200,Nl(this.i,this.v,this.B,this.l,this.S,Ee,m),this.o){if(this.U&&!this.L){t:{if(this.g){var T,U=this.g;if((T=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(T)){var B=T;break t}}B=null}if(u=B)Un(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,u);else{this.o=!1,this.m=3,rt(12),fr(this),Gi(this);break e}}if(this.R){u=!0;let ht;for(;!this.K&&this.C<_.length;)if(ht=Ul(this,_),ht==ea){Ee==4&&(this.m=4,rt(14),u=!1),Un(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==Ol){this.m=4,rt(15),Un(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else Un(this.i,this.l,ht,null),Ge(this,ht);if(Ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||_.length!=0||this.h.h||(this.m=1,rt(16),u=!1),this.o=this.o&&u,!u)Un(this.i,this.l,_,"[Invalid Chunked Response]"),fr(this),Gi(this);else if(_.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),ns(Z),Z.P=!0,rt(11))}}else Un(this.i,this.l,_,null),Ge(this,_);Ee==4&&fr(this),this.o&&!this.K&&(Ee==4?Gs(this.j,this):(this.o=!1,Hi(this)))}else fa(this.g),m==400&&_.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),fr(this),Gi(this)}}}catch{}finally{}};function Ll(u){if(!Ml(u))return u.g.la();const m=$l(u.g);if(m==="")return"";let _="";const T=m.length,U=Hn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return fr(u),Gi(u),"";u.h.i=new h.TextDecoder}for(let B=0;B<T;B++)u.h.h=!0,_+=u.h.i.decode(m[B],{stream:!(U&&B==T-1)});return m.length=0,u.h.g+=_,u.C=0,u.h.g}function Ml(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Ul(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?ea:(_=Number(m.substring(_,T)),isNaN(_)?Ol:(T+=1,T+_>m.length?ea:(m=m.slice(T,T+_),u.C=T+_,m)))}cn.prototype.cancel=function(){this.K=!0,fr(this)};function Hi(u){u.T=Date.now()+u.H,na(u,u.H)}function na(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Kr(y(u.aa,u),m)}function Ms(u){u.D&&(h.clearTimeout(u.D),u.D=null)}cn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Dl(this.i,this.B),this.M!=2&&(cr(),rt(17)),fr(this),this.m=2,Gi(this)):na(this,this.T-u)};function Gi(u){u.j.I==0||u.K||Gs(u.j,u)}function fr(u){Ms(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,Ds(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ge(u,m){try{var _=u.j;if(_.I!=0&&(_.g==u||ia(_.h,u))){if(!u.L&&ia(_.h,u)&&_.I==3){try{var T=_.Ba.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var U=T;if(U[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)Hs(_),nn(_);else break e;Qn(_),rt(18)}}else _.xa=U[1],0<_.xa-_.K&&U[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=Kr(y(_.Va,_),6e3));Ki(_.h)<=1&&_.ta&&(_.ta=void 0)}else rn(_,11)}else if((u.L||_.g==u)&&Hs(_),!R(m))for(U=_.Ba.g.parse(m),m=0;m<U.length;m++){let ze=U[m];const ht=ze[0];if(!(ht<=_.K))if(_.K=ht,ze=ze[1],_.I==2)if(ze[0]=="c"){_.M=ze[1],_.ba=ze[2];const sn=ze[3];sn!=null&&(_.ka=sn,_.j.info("VER="+_.ka));const vr=ze[4];vr!=null&&(_.za=vr,_.j.info("SVER="+_.za));const Yn=ze[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(T=1.5*Yn,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const Xn=u.g;if(Xn){const Ys=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ys){var B=T.h;B.g||Ys.indexOf("spdy")==-1&&Ys.indexOf("quic")==-1&&Ys.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Fs(B,B.h),B.h=null))}if(T.G){const ga=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;ga&&(T.wa=ga,Ue(T.J,T.G,ga))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var Z=u;if(T.na=ma(T,T.L?T.ba:null,T.W),Z.L){Qi(T.h,Z);var Ee=Z,at=T.O;at&&(Ee.H=at),Ee.D&&(Ms(Ee),Hi(Ee)),T.g=Z}else Vt(T);_.i.length>0&&_r(_)}else ze[0]!="stop"&&ze[0]!="close"||rn(_,7);else _.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?rn(_,7):qs(_):ze[0]!="noop"&&_.l&&_.l.qa(ze),_.A=0)}}cr(4)}catch{}}var th=class{constructor(u,m){this.g=u,this.map=m}};function Us(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ra(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ki(u){return u.h?1:u.g?u.g.size:0}function ia(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Fs(u,m){u.g?u.g.add(m):u.h=m}function Qi(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Us.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Zt(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.G);return m}return b(u.i)}var Fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function en(u,m){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const T=u[_].indexOf("=");let U,B=null;T>=0?(U=u[_].substring(0,T),B=u[_].substring(T+1)):U=u[_],m(U,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function jn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof jn?(this.l=u.l,Yi(this,u.j),this.o=u.o,this.g=u.g,zn(this,u.u),this.h=u.h,Jr(this,da(u.i)),this.m=u.m):u&&(m=String(u).match(Fl))?(this.l=!1,Yi(this,m[1]||"",!0),this.o=Xi(m[2]||""),this.g=Xi(m[3]||"",!0),zn(this,m[4]),this.h=Xi(m[5]||"",!0),Jr(this,m[6]||"",!0),this.m=Xi(m[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}jn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(Ji(m,oa,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Ji(m,oa,!0),"@"),u.push(Fn(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Ji(_,_.charAt(0)=="/"?Zi:aa,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Ji(_,la)),u.join("")},jn.prototype.resolve=function(u){const m=hn(this);let _=!!u.j;_?Yi(m,u.j):_=!!u.o,_?m.o=u.o:_=!!u.g,_?m.g=u.g:_=u.u!=null;var T=u.h;if(_)zn(m,u.u);else if(_=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var U=m.h.lastIndexOf("/");U!=-1&&(T=m.h.slice(0,U+1)+T)}if(U=T,U==".."||U==".")T="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){T=U.lastIndexOf("/",0)==0,U=U.split("/");const B=[];for(let Z=0;Z<U.length;){const Ee=U[Z++];Ee=="."?T&&Z==U.length&&B.push(""):Ee==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),T&&Z==U.length&&B.push("")):(B.push(Ee),T=!0)}T=B.join("/")}else T=U}return _?m.h=T:_=u.i.toString()!=="",_?Jr(m,da(u.i)):_=!!u.m,_&&(m.m=u.m),m};function hn(u){return new jn(u)}function Yi(u,m,_){u.j=_?Xi(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function zn(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function Jr(u,m,_){m instanceof Ve?(u.i=m,zs(u.i,u.l)):(_||(m=Ji(m,nh)),u.i=new Ve(m,u.l))}function Ue(u,m,_){u.i.set(m,_)}function pr(u){return Ue(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Xi(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ji(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,sa),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function sa(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var oa=/[#\/\?@]/g,aa=/[#\?:]/g,Zi=/[#\?]/g,nh=/[#\?@]/g,la=/#/g;function Ve(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Bn(u){u.g||(u.g=new Map,u.h=0,u.i&&en(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Ve.prototype,r.add=function(u,m){Bn(this),this.i=null,u=$n(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function ua(u,m){Bn(u),m=$n(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function js(u,m){return Bn(u),m=$n(u,m),u.g.has(m)}r.forEach=function(u,m){Bn(this),this.g.forEach(function(_,T){_.forEach(function(U){u.call(m,U,T,this)},this)},this)};function ca(u,m){Bn(u);let _=[];if(typeof m=="string")js(u,m)&&(_=_.concat(u.g.get($n(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)_=_.concat(u[m]);return _}r.set=function(u,m){return Bn(this),this.i=null,u=$n(this,u),js(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=ca(this,u),u.length>0?String(u[0]):m):m};function ha(u,m,_){ua(u,m),_.length>0&&(u.i=null,u.g.set($n(u,m),b(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let T=0;T<m.length;T++){var _=m[T];const U=Fn(_);_=ca(this,_);for(let B=0;B<_.length;B++){let Z=U;_[B]!==""&&(Z+="="+Fn(_[B])),u.push(Z)}}return this.i=u.join("&")};function da(u){const m=new Ve;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function $n(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function zs(u,m){m&&!u.j&&(Bn(u),u.i=null,u.g.forEach(function(_,T){const U=T.toLowerCase();T!=U&&(ua(this,T),ha(this,U,_))},u)),u.j=m}function qn(u,m){const _=new Qr;if(h.Image){const T=new Image;T.onload=w(At,_,"TestLoadImage: loaded",!0,m,T),T.onerror=w(At,_,"TestLoadImage: error",!1,m,T),T.onabort=w(At,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=w(At,_,"TestLoadImage: timeout",!1,m,T),h.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Wn(u,m){const _=new Qr,T=new AbortController,U=setTimeout(()=>{T.abort(),At(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(B=>{clearTimeout(U),B.ok?At(_,"TestPingServer: ok",!0,m):At(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),At(_,"TestPingServer: error",!1,m)})}function At(u,m,_,T,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),T(_)}catch{}}function es(){this.g=new qi}function mr(u){this.i=u.Sb||null,this.h=u.ab||!1}E(mr,Wr),mr.prototype.g=function(){return new tn(this.i,this.h)};function tn(u,m){ct.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(tn,ct),r=tn.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,An(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||h).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;jl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function jl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Zr(this):An(this),this.readyState==3&&jl(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,Zr(this))},r.Na=function(u){this.g&&(this.response=u,Zr(this))},r.ga=function(){this.g&&Zr(this)};function Zr(u){u.readyState=4,u.l=null,u.j=null,u.B=null,An(u)}r.setRequestHeader=function(u,m){this.A.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function An(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function zl(u){let m="";return pe(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function Bs(u,m,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=zl(_),typeof u=="string"?_!=null&&Fn(_):Ue(u,m,_))}function $e(u){ct.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E($e,ct);var Bl=/^https?$/i,rh=["POST","PUT"];r=$e.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vl.g(),this.g.onreadystatechange=S(y(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){ei(this,B);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var U in T)_.set(U,T[U]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const B of T.keys())_.set(B,T.get(B));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),U=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(rh,m,void 0)>=0)||T||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of _)this.g.setRequestHeader(B,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(B){ei(this,B)}};function ei(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,ti(u),yr(u)}function ti(u){u.A||(u.A=!0,ot(u,"complete"),ot(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,ot(this,"complete"),ot(this,"abort"),yr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yr(this,!0)),$e.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?gr(this):this.Xa())},r.Xa=function(){gr(this)};function gr(u){if(u.h&&typeof l<"u"){if(u.v&&Hn(u)==4)setTimeout(u.Ca.bind(u),0);else if(ot(u,"readystatechange"),Hn(u)==4){u.h=!1;try{const B=u.ca();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var T;if(T=B===0){let Z=String(u.D).match(Fl)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),T=!Bl.test(Z?Z.toLowerCase():"")}_=T}if(_)ot(u,"complete"),ot(u,"success");else{u.o=6;try{var U=Hn(u)>2?u.g.statusText:""}catch{U=""}u.l=U+" ["+u.ca()+"]",ti(u)}}finally{yr(u)}}}}function yr(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,m||ot(u,"ready");try{_.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Hn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Hn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Pl(m)}};function $l(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function fa(u){const m={};u=(u.g&&Hn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(R(u[T]))continue;var _=Ls(u[T]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=m[U]||[];m[U]=B,B.push(_)}ae(m,function(T){return T.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function $s(u){this.za=0,this.i=[],this.j=new Qr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Gn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Gn("baseRetryDelayMs",5e3,u),this.Za=Gn("retryDelaySeedMs",1e4,u),this.Ta=Gn("forwardChannelMaxRetries",2,u),this.va=Gn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Us(u&&u.concurrentRequestLimit),this.Ba=new es,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=$s.prototype,r.ka=8,r.I=1,r.connect=function(u,m,_,T){rt(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=ma(this,null,this.W),_r(this)};function qs(u){if(Ws(u),u.I==3){var m=u.V++,_=hn(u.J);if(Ue(_,"SID",u.M),Ue(_,"RID",m),Ue(_,"TYPE","terminate"),Kn(u,_),m=new cn(u,u.j,m),m.M=2,m.A=pr(hn(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(m.A.toString(),"")}catch{}!_&&h.Image&&(new Image().src=m.A,_=!0),_||(m.g=Wl(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Hi(m)}rs(u)}function nn(u){u.g&&(ns(u),u.g.cancel(),u.g=null)}function Ws(u){nn(u),u.v&&(h.clearTimeout(u.v),u.v=null),Hs(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function _r(u){if(!ra(u.h)&&!u.m){u.m=!0;var m=u.Ea;De||A(),Ae||(De(),Ae=!0),x.add(m,u),u.D=0}}function ql(u,m){return Ki(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Kr(y(u.Ea,u,m),Ks(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const U=new cn(this,this.j,u);let B=this.o;if(this.U&&(B?(B=O(B),Ie(B,this.U)):B=this.U),this.u!==null||this.R||(U.J=B,B=null),this.S)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,m>4096){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=pa(this,U,m),_=hn(this.J),Ue(_,"RID",u),Ue(_,"CVER",22),this.G&&Ue(_,"X-HTTP-Session-Id",this.G),Kn(this,_),B&&(this.R?m="headers="+Fn(zl(B))+"&"+m:this.u&&Bs(_,this.u,B)),Fs(this.h,U),this.Ra&&Ue(_,"TYPE","init"),this.S?(Ue(_,"$req",m),Ue(_,"SID","null"),U.U=!0,Sn(U,_,null)):Sn(U,_,m),this.I=2}}else this.I==3&&(u?ts(this,u):this.i.length==0||ra(this.h)||ts(this))};function ts(u,m){var _;m?_=m.l:_=u.V++;const T=hn(u.J);Ue(T,"SID",u.M),Ue(T,"RID",_),Ue(T,"AID",u.K),Kn(u,T),u.u&&u.o&&Bs(T,u.u,u.o),_=new cn(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),m&&(u.i=m.G.concat(u.i)),m=pa(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Fs(u.h,_),Sn(_,T,m)}function Kn(u,m){u.H&&pe(u.H,function(_,T){Ue(m,T,_)}),u.l&&pe({},function(_,T){Ue(m,T,_)})}function pa(u,m,_){_=Math.min(u.i.length,_);const T=u.l?y(u.l.Ka,u.l,u):null;e:{var U=u.i;let Ee=-1;for(;;){const at=["count="+_];Ee==-1?_>0?(Ee=U[0].g,at.push("ofs="+Ee)):Ee=0:at.push("ofs="+Ee);let ze=!0;for(let ht=0;ht<_;ht++){var B=U[ht].g;const sn=U[ht].map;if(B-=Ee,B<0)Ee=Math.max(0,U[ht].g-100),ze=!1;else try{B="req"+B+"_"||"";try{var Z=sn instanceof Map?sn:Object.entries(sn);for(const[vr,Yn]of Z){let Xn=Yn;f(Yn)&&(Xn=qr(Yn)),at.push(B+vr+"="+encodeURIComponent(Xn))}}catch(vr){throw at.push(B+"type="+encodeURIComponent("_badmap")),vr}}catch{T&&T(sn)}}if(ze){Z=at.join("&");break e}}Z=void 0}return u=u.i.splice(0,_),m.G=u,Z}function Vt(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;De||A(),Ae||(De(),Ae=!0),x.add(m,u),u.A=0}}function Qn(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Kr(y(u.Da,u),Ks(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,ni(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Kr(y(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),nn(this),ni(this))};function ns(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function ni(u){u.g=new cn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=hn(u.na);Ue(m,"RID","rpc"),Ue(m,"SID",u.M),Ue(m,"AID",u.K),Ue(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&Ue(m,"TO",u.ia),Ue(m,"TYPE","xmlhttp"),Kn(u,m),u.u&&u.o&&Bs(m,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=pr(hn(m)),_.u=null,_.R=!0,ta(_,u)}r.Va=function(){this.C!=null&&(this.C=null,nn(this),Qn(this),rt(19))};function Hs(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Gs(u,m){var _=null;if(u.g==m){Hs(u),ns(u),u.g=null;var T=2}else if(ia(u.h,m))_=m.G,Qi(u.h,m),T=1;else return;if(u.I!=0){if(m.o)if(T==1){_=m.u?m.u.length:0,m=Date.now()-m.F;var U=u.D;T=Gr(),ot(T,new Zo(T,_)),_r(u)}else Vt(u);else if(U=m.m,U==3||U==0&&m.X>0||!(T==1&&ql(u,m)||T==2&&Qn(u)))switch(_&&_.length>0&&(m=u.h,m.i=m.i.concat(_)),U){case 1:rn(u,5);break;case 4:rn(u,10);break;case 3:rn(u,6);break;default:rn(u,2)}}}function Ks(u,m){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*m}function rn(u,m){if(u.j.info("Error code "+m),m==2){var _=y(u.bb,u),T=u.Ua;const U=!T;T=new jn(T||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Yi(T,"https"),pr(T),U?qn(T.toString(),_):Wn(T.toString(),_)}else rt(2);u.I=0,u.l&&u.l.pa(m),rs(u),Ws(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function rs(u){if(u.I=0,u.ja=[],u.l){const m=Zt(u.h);(m.length!=0||u.i.length!=0)&&($(u.ja,m),$(u.ja,u.i),u.h.i.length=0,b(u.i),u.i.length=0),u.l.oa()}}function ma(u,m,_){var T=_ instanceof jn?hn(_):new jn(_);if(T.g!="")m&&(T.g=m+"."+T.g),zn(T,T.u);else{var U=h.location;T=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;const B=new jn(null);T&&Yi(B,T),m&&(B.g=m),U&&zn(B,U),_&&(B.h=_),T=B}return _=u.G,m=u.wa,_&&m&&Ue(T,_,m),Ue(T,"VER",u.ka),Kn(u,T),T}function Wl(u,m,_){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new $e(new mr({ab:_})):new $e(u.ma),m.Fa(u.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hl(){}r=Hl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Qs(){}Qs.prototype.g=function(u,m){return new Ct(u,m)};function Ct(u,m){ct.call(this),this.g=new $s(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!R(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!R(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ri(this)}E(Ct,ct),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){qs(this.g)},Ct.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=qr(u),u=_);m.i.push(new th(m.Ya++,u)),m.I==3&&_r(m)},Ct.prototype.N=function(){this.g.l=null,delete this.j,qs(this.g),delete this.g,Ct.Z.N.call(this)};function Gl(u){Vs.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}E(Gl,Vs);function Kl(){Jo.call(this),this.status=1}E(Kl,Jo);function ri(u){this.g=u}E(ri,Hl),ri.prototype.ra=function(){ot(this.g,"a")},ri.prototype.qa=function(u){ot(this.g,new Gl(u))},ri.prototype.pa=function(u){ot(this.g,new Kl)},ri.prototype.oa=function(){ot(this.g,"b")},Qs.prototype.createWebChannel=Qs.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,Vv=function(){return new Qs},Dv=function(){return Gr()},Nv=In,ef={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Yr.NO_ERROR=0,Yr.TIMEOUT=8,Yr.HTTP_ERROR=6,Zu=Yr,Xr.COMPLETE="complete",xv=Xr,kl.EventType=Hr,Hr.OPEN="a",Hr.CLOSE="b",Hr.ERROR="c",Hr.MESSAGE="d",ct.prototype.listen=ct.prototype.J,qa=kl,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,kv=$e}).apply(typeof $u<"u"?$u:typeof self<"u"?self:typeof window<"u"?window:{});const _y="@firebase/firestore",vy="4.9.2";/**
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
 */const Is=new Tf("@firebase/firestore");function _o(){return Is.logLevel}function se(r,...e){if(Is.logLevel<=ke.DEBUG){const t=e.map(Vf);Is.debug(`Firestore (${Bo}): ${r}`,...t)}}function br(r,...e){if(Is.logLevel<=ke.ERROR){const t=e.map(Vf);Is.error(`Firestore (${Bo}): ${r}`,...t)}}function No(r,...e){if(Is.logLevel<=ke.WARN){const t=e.map(Vf);Is.warn(`Firestore (${Bo}): ${r}`,...t)}}function Vf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function _e(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,bv(r,i,t)}function bv(r,e,t){let i=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw br(i),new Error(i)}function je(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||bv(e,o,i)}function Te(r,e){return r}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Fr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Ov{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class YA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class XA{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new xi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new xi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new xi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string",31837,{l:i}),new Ov(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class JA{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ZA{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new JA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class wy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_n(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){je(this.o===void 0,3512);const i=l=>{l.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new wy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new wy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class bf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=tC(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function xe(r,e){return r<e?-1:r>e?1:0}function tf(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const o=r.charAt(i),l=e.charAt(i);if(o!==l)return Md(o)===Md(l)?xe(o,l):Md(o)?1:-1}return xe(r.length,e.length)}const nC=55296,rC=57343;function Md(r){const e=r.charCodeAt(0);return e>=nC&&e<=rC}function Do(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
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
 */const Ey="__name__";class nr{constructor(e,t,i){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&_e(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=nr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return xe(e.length,t.length)}static compareSegments(e,t){const i=nr.isNumericId(e),o=nr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?nr.extractNumericId(e).compare(nr.extractNumericId(t)):tf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ki.fromString(e.substring(4,e.length-2))}}class He extends nr{construct(e,t,i){return new He(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ne(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const iC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends nr{construct(e,t,i){return new xt(e,t,i)}static isValidIdentifier(e){return iC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ey}static keyField(){return new xt([Ey])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ne(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ne(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ne(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new ne(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(t)}static emptyPath(){return new xt([])}}/**
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
 */function Lv(r,e,t){if(!t)throw new ne(H.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function sC(r,e,t,i){if(e===!0&&i===!0)throw new ne(H.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ty(r){if(!de.isDocumentKey(r))throw new ne(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Iy(r){if(de.isDocumentKey(r))throw new ne(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Mv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function bc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function Vn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ne(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bc(r);throw new ne(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function mt(r,e){const t={typeString:r};return e&&(t.value=e),t}function vl(r,e){if(!Mv(r))throw new ne(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ne(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const Sy=-62135596800,Ay=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Ay);return new Ye(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sy)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ay}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vl(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:mt("string",Ye._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Ye(0,0))}static max(){return new we(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const sl=-1;function oC(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(i===1e9?new Ye(t+1,0):new Ye(t,i));return new Di(o,de.empty(),e)}function aC(r){return new Di(r.readTime,r.key,sl)}class Di{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Di(we.min(),de.empty(),sl)}static max(){return new Di(we.max(),de.empty(),sl)}}function lC(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(r.documentKey,e.documentKey),t!==0?t:xe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function $o(r){if(r.code!==H.FAILED_PRECONDITION||r.message!==uC)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,i)=>{t(e)}))}static reject(e){return new G(((t,i)=>{i(e)}))}static waitFor(e){return new G(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next((o=>o?G.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new G(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next((w=>{h[y]=w,++f,f===l&&i(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new G(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function hC(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Oc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Oc.ce=-1;/**
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
 */const Of=-1;function Lc(r){return r==null}function gc(r){return r===0&&1/r==-1/0}function dC(r){return typeof r=="number"&&Number.isInteger(r)&&!gc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Uv="";function fC(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Cy(e)),e=pC(r.get(t),e);return Cy(e)}function pC(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case Uv:t+="";break;default:t+=l}}return t}function Cy(r){return r+Uv+""}/**
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
 */function Ry(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ji(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Fv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qu(this.root,e,this.comparator,!1)}getReverseIterator(){return new qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qu(this.root,e,this.comparator,!0)}}class qu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??kt.RED,this.left=o??kt.EMPTY,this.right=l??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new kt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Py(this.data.getIterator())}getIteratorFrom(e){return new Py(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Py{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new un([])}unionWith(e){let t=new vt(xt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class jv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new jv("Invalid base64 string: "+l):l}})(e);return new Nt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const mC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vi(r){if(je(!!r,39018),typeof r=="string"){let e=0;const t=mC.exec(r);if(je(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(r.seconds),nanos:ut(r.nanos)}}function ut(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function bi(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="server_timestamp",Bv="__type__",$v="__previous_value__",qv="__local_write_time__";function Lf(r){return(r?.mapValue?.fields||{})[Bv]?.stringValue===zv}function Mc(r){const e=r.mapValue.fields[$v];return Lf(e)?Mc(e):e}function ol(r){const e=Vi(r.mapValue.fields[qv].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class gC{constructor(e,t,i,o,l,h,f,g,y,w){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=w}}const yc="(default)";class al{constructor(e,t){this.projectId=e,this.database=t||yc}static empty(){return new al("","")}get isDefaultDatabase(){return this.database===yc}isEqual(e){return e instanceof al&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="__type__",yC="__max__",Wu={mapValue:{}},Hv="__vector__",_c="value";function Oi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Lf(r)?4:vC(r)?9007199254740991:_C(r)?10:11:_e(28295,{value:r})}function ur(r,e){if(r===e)return!0;const t=Oi(r);if(t!==Oi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ol(r).isEqual(ol(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Vi(o.timestampValue),f=Vi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return bi(o.bytesValue).isEqual(bi(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ut(o.doubleValue),f=ut(l.doubleValue);return h===f?gc(h)===gc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Do(r.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Ry(h)!==Ry(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!ur(h[g],f[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function ll(r,e){return(r.values||[]).find((t=>ur(t,e)))!==void 0}function Vo(r,e){if(r===e)return 0;const t=Oi(r),i=Oi(e);if(t!==i)return xe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=ut(l.integerValue||l.doubleValue),g=ut(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return ky(r.timestampValue,e.timestampValue);case 4:return ky(ol(r),ol(e));case 5:return tf(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=bi(l),g=bi(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let y=0;y<f.length&&y<g.length;y++){const w=xe(f[y],g[y]);if(w!==0)return w}return xe(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=xe(ut(l.latitude),ut(h.latitude));return f!==0?f:xe(ut(l.longitude),ut(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return xy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){const f=l.fields||{},g=h.fields||{},y=f[_c]?.arrayValue,w=g[_c]?.arrayValue,E=xe(y?.values?.length||0,w?.values?.length||0);return E!==0?E:xy(y,w)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Wu.mapValue&&h===Wu.mapValue)return 0;if(l===Wu.mapValue)return 1;if(h===Wu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),y=h.fields||{},w=Object.keys(y);g.sort(),w.sort();for(let E=0;E<g.length&&E<w.length;++E){const S=tf(g[E],w[E]);if(S!==0)return S;const b=Vo(f[g[E]],y[w[E]]);if(b!==0)return b}return xe(g.length,w.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function ky(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return xe(r,e);const t=Vi(r),i=Vi(e),o=xe(t.seconds,i.seconds);return o!==0?o:xe(t.nanos,i.nanos)}function xy(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Vo(t[o],i[o]);if(l)return l}return xe(t.length,i.length)}function bo(r){return nf(r)}function nf(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Vi(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return bi(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return de.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=nf(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${nf(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function ec(r){switch(Oi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mc(r);return e?16+ec(e):16;case 5:return 2*r.stringValue.length;case 6:return bi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+ec(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return ji(i.fields,((l,h)=>{o+=l.length+ec(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function Ny(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function rf(r){return!!r&&"integerValue"in r}function Mf(r){return!!r&&"arrayValue"in r}function Dy(r){return!!r&&"nullValue"in r}function Vy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function tc(r){return!!r&&"mapValue"in r}function _C(r){return(r?.mapValue?.fields||{})[Wv]?.stringValue===Hv}function Ya(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ji(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Ya(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ya(r.arrayValue.values[t]);return e}return{...r}}function vC(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===yC}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!tc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ya(t)}setAll(e){let t=xt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Ya(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());tc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];tc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ji(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new Jt(Ya(this.value))}}function Gv(r){const e=[];return ji(r.fields,((t,i)=>{const o=new xt([t]);if(tc(i)){const l=Gv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new un(e)}/**
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
 */class jt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new jt(e,0,we.min(),we.min(),we.min(),Jt.empty(),0)}static newFoundDocument(e,t,i,o){return new jt(e,1,t,we.min(),i,o,0)}static newNoDocument(e,t){return new jt(e,2,t,we.min(),we.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,we.min(),we.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vc{constructor(e,t){this.position=e,this.inclusive=t}}function by(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=de.comparator(de.fromName(h.referenceValue),t.key):i=Vo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Oy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ur(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ul{constructor(e,t="asc"){this.field=e,this.dir=t}}function wC(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Kv{}class pt extends Kv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new TC(e,t,i):t==="array-contains"?new AC(e,i):t==="in"?new CC(e,i):t==="not-in"?new RC(e,i):t==="array-contains-any"?new PC(e,i):new pt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new IC(e,i):new SC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Vo(t,this.value)):t!==null&&Oi(this.value)===Oi(t)&&this.matchesComparison(Vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends Kv{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ln(e,t)}matches(e){return Qv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Qv(r){return r.op==="and"}function Yv(r){return EC(r)&&Qv(r)}function EC(r){for(const e of r.filters)if(e instanceof Ln)return!1;return!0}function sf(r){if(r instanceof pt)return r.field.canonicalString()+r.op.toString()+bo(r.value);if(Yv(r))return r.filters.map((e=>sf(e))).join(",");{const e=r.filters.map((t=>sf(t))).join(",");return`${r.op}(${e})`}}function Xv(r,e){return r instanceof pt?(function(i,o){return o instanceof pt&&i.op===o.op&&i.field.isEqual(o.field)&&ur(i.value,o.value)})(r,e):r instanceof Ln?(function(i,o){return o instanceof Ln&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&Xv(h,o.filters[f])),!0):!1})(r,e):void _e(19439)}function Jv(r){return r instanceof pt?(function(t){return`${t.field.canonicalString()} ${t.op} ${bo(t.value)}`})(r):r instanceof Ln?(function(t){return t.op.toString()+" {"+t.getFilters().map(Jv).join(" ,")+"}"})(r):"Filter"}class TC extends pt{constructor(e,t,i){super(e,t,i),this.key=de.fromName(i.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class IC extends pt{constructor(e,t){super(e,"in",t),this.keys=Zv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class SC extends pt{constructor(e,t){super(e,"not-in",t),this.keys=Zv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Zv(r,e){return(e.arrayValue?.values||[]).map((t=>de.fromName(t.referenceValue)))}class AC extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mf(t)&&ll(t.arrayValue,this.value)}}class CC extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ll(this.value.arrayValue,t)}}class RC extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ll(this.value.arrayValue,t)}}class PC extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>ll(this.value.arrayValue,i)))}}/**
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
 */class kC{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Te=null}}function Ly(r,e=null,t=[],i=[],o=null,l=null,h=null){return new kC(r,e,t,i,o,l,h)}function Uf(r){const e=Te(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>sf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Lc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>bo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>bo(i))).join(",")),e.Te=t}return e.Te}function Ff(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!wC(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Xv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Oy(r.startAt,e.startAt)&&Oy(r.endAt,e.endAt)}function of(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Wo{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function xC(r,e,t,i,o,l,h,f){return new Wo(r,e,t,i,o,l,h,f)}function Uc(r){return new Wo(r)}function My(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ew(r){return r.collectionGroup!==null}function Xa(r){const e=Te(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new vt(xt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new ul(l,i))})),t.has(xt.keyField().canonicalString())||e.Ie.push(new ul(xt.keyField(),i))}return e.Ie}function sr(r){const e=Te(r);return e.Ee||(e.Ee=NC(e,Xa(r))),e.Ee}function NC(r,e){if(r.limitType==="F")return Ly(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new ul(o.field,l)}));const t=r.endAt?new vc(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new vc(r.startAt.position,r.startAt.inclusive):null;return Ly(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function af(r,e){const t=r.filters.concat([e]);return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function wc(r,e,t){return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Fc(r,e){return Ff(sr(r),sr(e))&&r.limitType===e.limitType}function tw(r){return`${Uf(sr(r))}|lt:${r.limitType}`}function vo(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Jv(o))).join(", ")}]`),Lc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>bo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>bo(o))).join(",")),`Target(${i})`})(sr(r))}; limitType=${r.limitType})`}function jc(r,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):de.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,o){for(const l of Xa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const y=by(h,f,g);return h.inclusive?y<=0:y<0})(i.startAt,Xa(i),o)||i.endAt&&!(function(h,f,g){const y=by(h,f,g);return h.inclusive?y>=0:y>0})(i.endAt,Xa(i),o))})(r,e)}function DC(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function nw(r){return(e,t)=>{let i=!1;for(const o of Xa(r)){const l=VC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function VC(r,e,t){const i=r.field.isKeyField()?de.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),y=f.data.field(l);return g!==null&&y!==null?Vo(g,y):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return _e(19790,{direction:r.dir})}}/**
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
 */class Rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Fv(this.inner)}size(){return this.innerSize}}/**
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
 */const bC=new nt(de.comparator);function Or(){return bC}const rw=new nt(de.comparator);function Wa(...r){let e=rw;for(const t of r)e=e.insert(t.key,t);return e}function iw(r){let e=rw;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ys(){return Ja()}function sw(){return Ja()}function Ja(){return new Rs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const OC=new nt(de.comparator),LC=new vt(de.comparator);function Ne(...r){let e=LC;for(const t of r)e=e.add(t);return e}const MC=new vt(xe);function UC(){return MC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function ow(r){return{integerValue:""+r}}function FC(r,e){return dC(e)?ow(e):jf(r,e)}/**
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
 */class zc{constructor(){this._=void 0}}function jC(r,e,t){return r instanceof cl?(function(o,l){const h={fields:{[Bv]:{stringValue:zv},[qv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Lf(l)&&(l=Mc(l)),l&&(h.fields[$v]=l),{mapValue:h}})(t,e):r instanceof hl?lw(r,e):r instanceof dl?uw(r,e):(function(o,l){const h=aw(o,l),f=Uy(h)+Uy(o.Ae);return rf(h)&&rf(o.Ae)?ow(f):jf(o.serializer,f)})(r,e)}function zC(r,e,t){return r instanceof hl?lw(r,e):r instanceof dl?uw(r,e):t}function aw(r,e){return r instanceof Ec?(function(i){return rf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class cl extends zc{}class hl extends zc{constructor(e){super(),this.elements=e}}function lw(r,e){const t=cw(e);for(const i of r.elements)t.some((o=>ur(o,i)))||t.push(i);return{arrayValue:{values:t}}}class dl extends zc{constructor(e){super(),this.elements=e}}function uw(r,e){let t=cw(e);for(const i of r.elements)t=t.filter((o=>!ur(o,i)));return{arrayValue:{values:t}}}class Ec extends zc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Uy(r){return ut(r.integerValue||r.doubleValue)}function cw(r){return Mf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class BC{constructor(e,t){this.field=e,this.transform=t}}function $C(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof hl&&o instanceof hl||i instanceof dl&&o instanceof dl?Do(i.elements,o.elements,ur):i instanceof Ec&&o instanceof Ec?ur(i.Ae,o.Ae):i instanceof cl&&o instanceof cl})(r.transform,e.transform)}class qC{constructor(e,t){this.version=e,this.transformResults=t}}class bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Bc{}function hw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new fw(r.key,bn.none()):new wl(r.key,r.data,bn.none());{const t=r.data,i=Jt.empty();let o=new vt(xt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new zi(r.key,i,new un(o.toArray()),bn.none())}}function WC(r,e,t){r instanceof wl?(function(o,l,h){const f=o.value.clone(),g=jy(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof zi?(function(o,l,h){if(!nc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=jy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(dw(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Za(r,e,t,i){return r instanceof wl?(function(l,h,f,g){if(!nc(l.precondition,h))return f;const y=l.value.clone(),w=zy(l.fieldTransforms,g,h);return y.setAll(w),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(r,e,t,i):r instanceof zi?(function(l,h,f,g){if(!nc(l.precondition,h))return f;const y=zy(l.fieldTransforms,g,h),w=h.data;return w.setAll(dw(l)),w.setAll(y),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((E=>E.field)))})(r,e,t,i):(function(l,h,f){return nc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function HC(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=aw(i.transform,o||null);l!=null&&(t===null&&(t=Jt.empty()),t.set(i.field,l))}return t||null}function Fy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Do(i,o,((l,h)=>$C(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class wl extends Bc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class zi extends Bc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function dw(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function jy(r,e,t){const i=new Map;je(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,zC(h,f,t[o]))}return i}function zy(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,jC(l,h,e))}return i}class fw extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GC extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class KC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&WC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Za(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Za(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=sw();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=hw(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,((t,i)=>Fy(t,i)))&&Do(this.baseMutations,e.baseMutations,((t,i)=>Fy(t,i)))}}class zf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return OC})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new zf(e,t,i,o)}}/**
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
 */class QC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class YC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,be;function XC(r){switch(r){case H.OK:return _e(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function pw(r){if(r===void 0)return br("GRPC error has no .code"),H.UNKNOWN;switch(r){case ft.OK:return H.OK;case ft.CANCELLED:return H.CANCELLED;case ft.UNKNOWN:return H.UNKNOWN;case ft.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ft.INTERNAL:return H.INTERNAL;case ft.UNAVAILABLE:return H.UNAVAILABLE;case ft.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ft.NOT_FOUND:return H.NOT_FOUND;case ft.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ft.ABORTED:return H.ABORTED;case ft.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ft.DATA_LOSS:return H.DATA_LOSS;default:return _e(39323,{code:r})}}(be=ft||(ft={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function JC(){return new TextEncoder}/**
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
 */const ZC=new ki([4294967295,4294967295],0);function By(r){const e=JC().encode(r),t=new Pv;return t.update(e),new Uint8Array(t.digest())}function $y(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ki([t,i],0),new ki([o,l],0)]}class Bf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ha(`Invalid padding: ${t}`);if(i<0)throw new Ha(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ha(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ha(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ki.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(ki.fromNumber(i)));return o.compare(ZC)===1&&(o=new ki([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=By(e),[i,o]=$y(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Bf(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=By(e),[i,o]=$y(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ha extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $c{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new $c(we.min(),o,new nt(xe),Or(),Ne())}}class El{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new El(i,t,Ne(),Ne(),Ne())}}/**
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
 */class rc{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class mw{constructor(e,t){this.targetId=e,this.Ce=t}}class gw{constructor(e,t,i=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class qy{constructor(){this.ve=0,this.Fe=Wy(),this.Me=Nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ne(),t=Ne(),i=Ne();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:_e(38017,{changeType:l})}})),new El(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=Wy()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class eR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Or(),this.Je=Hu(),this.He=Hu(),this.Ye=new nt(xe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(of(l))if(i===0){const h=new de(l.path);this.et(t,h,jt.newNoDocument(h,we.min()))}else je(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const f=this.ut(e),g=f?this.ct(f,e,h):1;if(g!==0){this.it(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=bi(i).toUint8Array()}catch(g){if(g instanceof jv)return No("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Bf(h,o,l)}catch(g){return No(g instanceof Ha?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const f=this.ot(h);if(f){if(l.current&&of(f.target)){const g=new de(f.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,jt.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let i=Ne();this.He.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new $c(e,t,this.Ye,this.je,i);return this.je=Or(),this.Je=Hu(),this.He=Hu(),this.Ye=new nt(xe),o}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new qy,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new vt(xe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new vt(xe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new qy),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Hu(){return new nt(de.comparator)}function Wy(){return new nt(de.comparator)}const tR={asc:"ASCENDING",desc:"DESCENDING"},nR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rR={and:"AND",or:"OR"};class iR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lf(r,e){return r.useProto3Json||Lc(e)?e:{value:e}}function Tc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function sR(r,e){return Tc(r,e.toTimestamp())}function or(r){return je(!!r,49232),we.fromTimestamp((function(t){const i=Vi(t);return new Ye(i.seconds,i.nanos)})(r))}function $f(r,e){return uf(r,e).canonicalString()}function uf(r,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function _w(r){const e=He.fromString(r);return je(Iw(e),10190,{key:e.toString()}),e}function cf(r,e){return $f(r.databaseId,e.path)}function Ud(r,e){const t=_w(e);if(t.get(1)!==r.databaseId.projectId)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new de(ww(t))}function vw(r,e){return $f(r.databaseId,e)}function oR(r){const e=_w(r);return e.length===4?He.emptyPath():ww(e)}function hf(r){return new He(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ww(r){return je(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Hy(r,e,t){return{name:cf(r,e),fields:t.value.mapValue.fields}}function aR(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_e(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,w){return y.useProto3Json?(je(w===void 0||typeof w=="string",58123),Nt.fromBase64String(w||"")):(je(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Nt.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(y){const w=y.code===void 0?H.UNKNOWN:pw(y.code);return new ne(w,y.message||"")})(h);t=new gw(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Ud(r,i.document.name),l=or(i.document.updateTime),h=i.document.createTime?or(i.document.createTime):we.min(),f=new Jt({mapValue:{fields:i.document.fields}}),g=jt.newFoundDocument(o,l,h,f),y=i.targetIds||[],w=i.removedTargetIds||[];t=new rc(y,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Ud(r,i.document),l=i.readTime?or(i.readTime):we.min(),h=jt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new rc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Ud(r,i.document),l=i.removedTargetIds||[];t=new rc([],l,o,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new YC(o,l),f=i.targetId;t=new mw(f,h)}}return t}function lR(r,e){let t;if(e instanceof wl)t={update:Hy(r,e.key,e.value)};else if(e instanceof fw)t={delete:cf(r,e.key)};else if(e instanceof zi)t={update:Hy(r,e.key,e.data),updateMask:yR(e.fieldMask)};else{if(!(e instanceof GC))return _e(16599,{Vt:e.type});t={verify:cf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof cl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof hl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof dl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Ec)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw _e(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:sR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(r,e.precondition)),t}function uR(r,e){return r&&r.length>0?(je(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?or(o.updateTime):or(l);return h.isEqual(we.min())&&(h=or(l)),new qC(h,o.transformResults||[])})(t,e)))):[]}function cR(r,e){return{documents:[vw(r,e.path)]}}function hR(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=vw(r,o);const l=(function(y){if(y.length!==0)return Tw(Ln.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((w=>(function(S){return{field:wo(S.field),direction:pR(S.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=lf(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function dR(r){let e=oR(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(E){const S=Ew(E);return S instanceof Ln&&Yv(S)?S.getFilters():[S]})(t.where));let h=[];t.orderBy&&(h=(function(E){return E.map((S=>(function($){return new ul(Eo($.field),(function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(S)))})(t.orderBy));let f=null;t.limit&&(f=(function(E){let S;return S=typeof E=="object"?E.value:E,Lc(S)?null:S})(t.limit));let g=null;t.startAt&&(g=(function(E){const S=!!E.before,b=E.values||[];return new vc(b,S)})(t.startAt));let y=null;return t.endAt&&(y=(function(E){const S=!E.before,b=E.values||[];return new vc(b,S)})(t.endAt)),xC(e,o,h,l,f,"F",g,y)}function fR(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ew(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Eo(t.unaryFilter.field);return pt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Eo(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Eo(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Eo(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return pt.create(Eo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Ln.create(t.compositeFilter.filters.map((i=>Ew(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function pR(r){return tR[r]}function mR(r){return nR[r]}function gR(r){return rR[r]}function wo(r){return{fieldPath:r.canonicalString()}}function Eo(r){return xt.fromServerFormat(r.fieldPath)}function Tw(r){return r instanceof pt?(function(t){if(t.op==="=="){if(Vy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NAN"}};if(Dy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NOT_NAN"}};if(Dy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wo(t.field),op:mR(t.op),value:t.value}}})(r):r instanceof Ln?(function(t){const i=t.getFilters().map((o=>Tw(o)));return i.length===1?i[0]:{compositeFilter:{op:gR(t.op),filters:i}}})(r):_e(54877,{filter:r})}function yR(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Iw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Si{constructor(e,t,i,o,l=we.min(),h=we.min(),f=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class _R{constructor(e){this.yt=e}}function vR(r){const e=dR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?wc(e,e.limit,"L"):e}/**
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
 */class wR{constructor(){this.Cn=new ER}addToCollectionParentIndex(e,t){return this.Cn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Di.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Di.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class ER{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(He.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(He.comparator)).toArray()}}/**
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
 */const Gy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sw=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(Sw,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */const Ky="LruGarbageCollector",TR=1048576;function Qy([r,e],[t,i]){const o=xe(r,t);return o===0?xe(e,i):o}class IR{constructor(e){this.Ir=e,this.buffer=new vt(Qy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Qy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class SR{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){se(Ky,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qo(t)?se(Ky,"Ignoring IndexedDB error during garbage collection: ",t):await $o(t)}await this.Vr(3e5)}))}}class AR{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return G.resolve(Oc.ce);const i=new IR(t);return this.mr.forEachTarget(e,(o=>i.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>i.Ar(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Gy)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gy):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,o,l,h,f,g,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,h=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(i=E,f=Date.now(),this.removeTargets(e,i,t)))).next((E=>(l=E,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((E=>(y=Date.now(),_o()<=ke.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${E} documents in `+(y-g)+`ms
Total Duration: ${y-w}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:E}))))}}function CR(r,e){return new AR(r,e)}/**
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
 */class RR{constructor(){this.changes=new Rs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class kR{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Za(i.mutation,o,un.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ne()){const o=ys();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Wa();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=ys();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ne())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=Or();const h=Ja(),f=(function(){return Ja()})();return t.forEach(((g,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof zi)?l=l.insert(y.key,y):w!==void 0?(h.set(y.key,w.mutation.getFieldMask()),Za(w.mutation,y,w.mutation.getFieldMask(),Ye.now())):h.set(y.key,un.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((y,w)=>h.set(y,w))),t.forEach(((y,w)=>f.set(y,new PR(w,h.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=Ja();let o=new nt(((h,f)=>h-f)),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const y=t.get(g);if(y===null)return;let w=i.get(g)||un.empty();w=f.applyToLocalView(y,w),i.set(g,w);const E=(o.get(f.batchId)||Ne()).add(g);o=o.insert(f.batchId,E)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),y=g.key,w=g.value,E=sw();w.forEach((S=>{if(!l.has(S)){const b=hw(t.get(S),i.get(S));b!==null&&E.set(S,b),l=l.add(S)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,E))}return G.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ew(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(ys());let f=sl,g=l;return h.next((y=>G.forEach(y,((w,E)=>(f<E.largestBatchId&&(f=E.largestBatchId),l.get(w)?G.resolve():this.remoteDocumentCache.getEntry(e,w).next((S=>{g=g.insert(w,S)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,g,y,Ne()))).next((w=>({batchId:f,changes:iw(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((i=>{let o=Wa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Wa();return this.indexManager.getCollectionParents(e,l).next((f=>G.forEach(f,(g=>{const y=(function(E,S){return new Wo(S,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((w=>{w.forEach(((E,S)=>{h=h.insert(E,S)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,y)=>{const w=y.getKey();h.get(w)===null&&(h=h.insert(w,jt.newInvalidDocument(w)))}));let f=Wa();return h.forEach(((g,y)=>{const w=l.get(g);w!==void 0&&Za(w.mutation,y,un.empty(),Ye.now()),jc(t,y)&&(f=f.insert(g,y))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return G.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:or(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:vR(o.bundledQuery),readTime:or(o.readTime)}})(t)),G.resolve()}}/**
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
 */class NR{constructor(){this.overlays=new nt(de.comparator),this.qr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ys();return G.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.qr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=ys(),l=t.length+1,h=new de(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new nt(((y,w)=>y-w));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=ys(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const f=ys(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,w)=>f.set(y,w))),!(f.size()>=o)););return G.resolve(f)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(i.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new QC(t,i));let l=this.qr.get(t);l===void 0&&(l=Ne(),this.qr.set(t,l)),this.qr.set(t,l.add(i.key))}}/**
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
 */class DR{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
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
 */class qf{constructor(){this.Qr=new vt(St.$r),this.Ur=new vt(St.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new St(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new St(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new de(new He([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.Ur.forEachInRange([i,o],(h=>{this.Gr(h),l.push(h.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new de(new He([])),i=new St(t,e),o=new St(t,e+1);let l=Ne();return this.Ur.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new St(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return de.comparator(e.key,t.key)||xe(e.Yr,t.Yr)}static Kr(e,t){return xe(e.Yr,t.Yr)||de.comparator(e.key,t.key)}}/**
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
 */class VR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new vt(St.$r)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new KC(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Zr=this.Zr.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return G.resolve(h)}lookupMutationBatch(e,t){return G.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.ei(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?Of:this.tr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,o],(h=>{const f=this.Xr(h.Yr);l.push(f)})),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(xe);return t.forEach((o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,h],(f=>{i=i.add(f.Yr)}))})),G.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;de.isDocumentKey(l)||(l=l.child(""));const h=new St(new de(l),0);let f=new vt(xe);return this.Zr.forEachWhile((g=>{const y=g.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(g.Yr)),!0)}),h),G.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((i=>{const o=this.Xr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){je(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return G.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new St(t,0),o=this.Zr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class bR{constructor(e){this.ri=e,this.docs=(function(){return new nt(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let i=Or();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():jt.newInvalidDocument(o))})),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Or();const h=t.path,f=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:y,value:{document:w}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||lC(aC(w),i)<=0||(o.has(w.key)||jc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){_e(9500)}ii(e,t){return G.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new OR(this)}getSize(e){return G.resolve(this.size)}}class OR extends RR{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(i)})),G.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class LR{constructor(e){this.persistence=e,this.si=new Rs((t=>Uf(t)),Ff),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.oi=0,this._i=new qf,this.targetCount=0,this.ai=Oo.ur()}forEachTarget(e,t){return this.si.forEach(((i,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),G.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Oo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Pr(t),G.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.si.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.si.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),G.waitFor(l).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this._i.containsKey(t))}}/**
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
 */class Aw{constructor(e,t){this.ui={},this.overlays={},this.ci=new Oc(0),this.li=!1,this.li=!0,this.hi=new DR,this.referenceDelegate=e(this),this.Pi=new LR(this),this.indexManager=new wR,this.remoteDocumentCache=(function(o){return new bR(o)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new _R(t),this.Ii=new xR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new NR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new VR(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){se("MemoryPersistence","Starting transaction:",e);const o=new MR(this.ci.next());return this.referenceDelegate.Ei(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ai(e,t){return G.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class MR extends cC{constructor(e){super(),this.currentSequenceNumber=e}}class Wf{constructor(e){this.persistence=e,this.Ri=new qf,this.Vi=null}static mi(e){return new Wf(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.fi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.fi,(i=>{const o=de.fromPath(i);return this.gi(e,o).next((l=>{l||t.removeEntry(o,we.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return G.or([()=>G.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ic{constructor(e,t){this.persistence=e,this.pi=new Rs((i=>fC(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=CR(this,t)}static mi(e,t){return new Ic(e,t)}Ei(){}di(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return G.forEach(this.pi,((i,o)=>this.br(e,i,o).next((l=>l?G.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((f=>{f||(i++,l.removeEntry(h,we.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),G.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ec(e.data.value)),t}br(e,t,i){return G.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Hf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=o}static As(e,t){let i=Ne(),o=Ne();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Hf(e,t.fromCache,i,o)}}/**
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
 */class UR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class FR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return hI()?8:hC(zt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ys(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ws(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new UR;return this.Ss(e,t,h).next((f=>{if(l.result=f,this.Vs)return this.bs(e,t,h,f.size)}))})).next((()=>l.result))}bs(e,t,i,o){return i.documentReadCount<this.fs?(_o()<=ke.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),G.resolve()):(_o()<=ke.DEBUG&&se("QueryEngine","Query:",vo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.gs*o?(_o()<=ke.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sr(t))):G.resolve())}ys(e,t){if(My(t))return G.resolve(null);let i=sr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=wc(t,null,"F"),i=sr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=Ne(...l);return this.ps.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const y=this.Ds(t,f);return this.Cs(t,y,h,g.readTime)?this.ys(e,wc(t,null,"F")):this.vs(e,y,t,g)}))))})))))}ws(e,t,i,o){return My(t)||o.isEqual(we.min())?G.resolve(null):this.ps.getDocuments(e,i).next((l=>{const h=this.Ds(t,l);return this.Cs(t,h,i,o)?G.resolve(null):(_o()<=ke.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),vo(t)),this.vs(e,h,t,oC(o,sl)).next((f=>f)))}))}Ds(e,t){let i=new vt(nw(e));return t.forEach(((o,l)=>{jc(e,l)&&(i=i.add(l))})),i}Cs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Ss(e,t,i){return _o()<=ke.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",vo(t)),this.ps.getDocumentsMatchingQuery(e,t,Di.min(),i)}vs(e,t,i,o){return this.ps.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="LocalStore",jR=3e8;class zR{constructor(e,t,i,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new nt(xe),this.xs=new Rs((l=>Uf(l)),Ff),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function BR(r,e,t,i){return new zR(r,e,t,i)}async function Cw(r,e){const t=Te(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=Ne();for(const y of o){h.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}for(const y of l){f.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(i,g).next((y=>({Ls:y,removedBatchIds:h,addedBatchIds:f})))}))}))}function $R(r,e){const t=Te(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,g,y,w){const E=y.batch,S=E.keys();let b=G.resolve();return S.forEach(($=>{b=b.next((()=>w.getEntry(g,$))).next((q=>{const j=y.docVersions.get($);je(j!==null,48541),q.version.compareTo(j)<0&&(E.applyToRemoteDocument(q,y),q.isValidDocument()&&(q.setReadTime(y.commitVersion),w.addEntry(q)))}))})),b.next((()=>f.mutationQueue.removeMutationBatch(g,E)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=Ne();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(g=g.add(f.batch.mutations[y].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function Rw(r){const e=Te(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function qR(r,e){const t=Te(r),i=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const f=[];e.targetChanges.forEach(((w,E)=>{const S=o.get(E);if(!S)return;f.push(t.Pi.removeMatchingKeys(l,w.removedDocuments,E).next((()=>t.Pi.addMatchingKeys(l,w.addedDocuments,E))));let b=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?b=b.withResumeToken(Nt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(w.resumeToken,i)),o=o.insert(E,b),(function(q,j,re){return q.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=jR?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(S,b,w)&&f.push(t.Pi.updateTargetData(l,b))}));let g=Or(),y=Ne();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(WR(l,h,e.documentUpdates).next((w=>{g=w.ks,y=w.qs}))),!i.isEqual(we.min())){const w=t.Pi.getLastRemoteSnapshotVersion(l).next((E=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(w)}return G.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,y))).next((()=>g))})).then((l=>(t.Ms=o,l)))}function WR(r,e,t){let i=Ne(),o=Ne();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let h=Or();return t.forEach(((f,g)=>{const y=l.get(f);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):se(Gf,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",g.version)})),{ks:h,qs:o}}))}function HR(r,e){const t=Te(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Of),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function GR(r,e){const t=Te(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Pi.getTargetData(i,e).next((l=>l?(o=l,G.resolve(o)):t.Pi.allocateTargetId(i).next((h=>(o=new Si(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Ms.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function df(r,e,t){const i=Te(r),o=i.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!qo(h))throw h;se(Gf,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Ms=i.Ms.remove(e),i.xs.delete(o.target)}function Yy(r,e,t){const i=Te(r);let o=we.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,y,w){const E=Te(g),S=E.xs.get(w);return S!==void 0?G.resolve(E.Ms.get(S)):E.Pi.getTargetData(y,w)})(i,h,sr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Fs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:Ne()))).next((f=>(KR(i,DC(e),f),{documents:f,Qs:l})))))}function KR(r,e,t){let i=r.Os.get(e)||we.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.Os.set(e,i)}class Xy{constructor(){this.activeTargetIds=UC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QR{constructor(){this.Mo=new Xy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Xy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YR{Oo(e){}shutdown(){}}/**
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
 */const Jy="ConnectivityMonitor";class Zy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){se(Jy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){se(Jy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gu=null;function ff(){return Gu===null?Gu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Gu++,"0x"+Gu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="RestConnection",XR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class JR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${o}`,this.Wo=this.databaseId.database===yc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Go(e,t,i,o,l){const h=ff(),f=this.zo(e,t.toUriEncodedString());se(Fd,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,l);const{host:y}=new URL(f),w=Fo(y);return this.Jo(e,f,g,i,w).then((E=>(se(Fd,`Received RPC '${e}' ${h}: `,E),E)),(E=>{throw No(Fd,`RPC '${e}' ${h} failed with error: `,E,"url: ",f,"request:",i),E}))}Ho(e,t,i,o,l,h){return this.Go(e,t,i,o,l)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}zo(e,t){const i=XR[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
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
 */class ZR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ut="WebChannelConnection";class eP extends JR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,o,l){const h=ff();return new Promise(((f,g)=>{const y=new kv;y.setWithCredentials(!0),y.listenOnce(xv.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Zu.NO_ERROR:const E=y.getResponseJson();se(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(E)),f(E);break;case Zu.TIMEOUT:se(Ut,`RPC '${e}' ${h} timed out`),g(new ne(H.DEADLINE_EXCEEDED,"Request time out"));break;case Zu.HTTP_ERROR:const S=y.getStatus();if(se(Ut,`RPC '${e}' ${h} failed with status:`,S,"response text:",y.getResponseText()),S>0){let b=y.getResponseJson();Array.isArray(b)&&(b=b[0]);const $=b?.error;if($&&$.status&&$.message){const q=(function(re){const te=re.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(te)>=0?te:H.UNKNOWN})($.status);g(new ne(q,$.message))}else g(new ne(H.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ne(H.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{se(Ut,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);se(Ut,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",w,i,15)}))}T_(e,t,i){const o=ff(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Vv(),f=Dv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const w=l.join("");se(Ut,`Creating RPC '${e}' stream ${o}: ${w}`,g);const E=h.createWebChannel(w,g);this.I_(E);let S=!1,b=!1;const $=new ZR({Yo:j=>{b?se(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,j):(S||(se(Ut,`Opening RPC '${e}' stream ${o} transport.`),E.open(),S=!0),se(Ut,`RPC '${e}' stream ${o} sending:`,j),E.send(j))},Zo:()=>E.close()}),q=(j,re,te)=>{j.listen(re,(oe=>{try{te(oe)}catch(fe){setTimeout((()=>{throw fe}),0)}}))};return q(E,qa.EventType.OPEN,(()=>{b||(se(Ut,`RPC '${e}' stream ${o} transport opened.`),$.o_())})),q(E,qa.EventType.CLOSE,(()=>{b||(b=!0,se(Ut,`RPC '${e}' stream ${o} transport closed`),$.a_(),this.E_(E))})),q(E,qa.EventType.ERROR,(j=>{b||(b=!0,No(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,j.name,"Message:",j.message),$.a_(new ne(H.UNAVAILABLE,"The operation could not be completed")))})),q(E,qa.EventType.MESSAGE,(j=>{if(!b){const re=j.data[0];je(!!re,16349);const te=re,oe=te?.error||te[0]?.error;if(oe){se(Ut,`RPC '${e}' stream ${o} received error:`,oe);const fe=oe.status;let De=(function(A){const P=ft[A];if(P!==void 0)return pw(P)})(fe),Ae=oe.message;De===void 0&&(De=H.INTERNAL,Ae="Unknown error status: "+fe+" with message "+oe.message),b=!0,$.a_(new ne(De,Ae)),E.close()}else se(Ut,`RPC '${e}' stream ${o} received:`,re),$.u_(re)}})),q(f,Nv.STAT_EVENT,(j=>{j.stat===ef.PROXY?se(Ut,`RPC '${e}' stream ${o} detected buffering proxy`):j.stat===ef.NOPROXY&&se(Ut,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function jd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(r){return new iR(r,!0)}/**
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
 */class Pw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=o,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const e_="PersistentStream";class kw{constructor(e,t,i,o,l,h,f,g){this.Mi=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Pw(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(br(t.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new ne(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return se(e_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(se(e_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tP extends kw{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=aR(this.serializer,e),i=(function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?or(h.readTime):we.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=hf(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=of(g)?{documents:cR(l,g)}:{query:hR(l,g).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=yw(l,h.resumeToken);const y=lf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(we.min())>0){f.readTime=Tc(l,h.snapshotVersion.toTimestamp());const y=lf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=fR(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=hf(this.serializer),t.removeTarget=e,this.q_(t)}}class nP extends kw{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=uR(e.writeResults,e.commitTime),i=or(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=hf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>lR(this.serializer,i)))};this.q_(t)}}/**
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
 */class rP{}class iP extends rP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Go(e,uf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ne(H.UNKNOWN,l.toString())}))}Ho(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Ho(e,uf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ne(H.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class sP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Ss="RemoteStore";class oP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((h=>{i.enqueueAndForget((async()=>{Ps(this)&&(se(Ss,"Restarting streams for network reachability change."),await(async function(g){const y=Te(g);y.Ea.add(4),await Tl(y),y.Ra.set("Unknown"),y.Ea.delete(4),await Wc(y)})(this))}))})),this.Ra=new sP(i,o)}}async function Wc(r){if(Ps(r))for(const e of r.da)await e(!0)}async function Tl(r){for(const e of r.da)await e(!1)}function xw(r,e){const t=Te(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Xf(t)?Yf(t):Ho(t).O_()&&Qf(t,e))}function Kf(r,e){const t=Te(r),i=Ho(t);t.Ia.delete(e),i.O_()&&Nw(t,e),t.Ia.size===0&&(i.O_()?i.L_():Ps(t)&&t.Ra.set("Unknown"))}function Qf(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ho(r).Y_(e)}function Nw(r,e){r.Va.Ue(e),Ho(r).Z_(e)}function Yf(r){r.Va=new eR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Ho(r).start(),r.Ra.ua()}function Xf(r){return Ps(r)&&!Ho(r).x_()&&r.Ia.size>0}function Ps(r){return Te(r).Ea.size===0}function Dw(r){r.Va=void 0}async function aP(r){r.Ra.set("Online")}async function lP(r){r.Ia.forEach(((e,t)=>{Qf(r,e)}))}async function uP(r,e){Dw(r),Xf(r)?(r.Ra.ha(e),Yf(r)):r.Ra.set("Unknown")}async function cP(r,e,t){if(r.Ra.set("Online"),e instanceof gw&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ia.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ia.delete(f),o.Va.removeTarget(f))})(r,e)}catch(i){se(Ss,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Sc(r,i)}else if(e instanceof rc?r.Va.Ze(e):e instanceof mw?r.Va.st(e):r.Va.tt(e),!t.isEqual(we.min()))try{const i=await Rw(r.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Va.Tt(h);return f.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ia.get(y);w&&l.Ia.set(y,w.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,y)=>{const w=l.Ia.get(g);if(!w)return;l.Ia.set(g,w.withResumeToken(Nt.EMPTY_BYTE_STRING,w.snapshotVersion)),Nw(l,g);const E=new Si(w.target,g,y,w.sequenceNumber);Qf(l,E)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){se(Ss,"Failed to raise snapshot:",i),await Sc(r,i)}}async function Sc(r,e,t){if(!qo(e))throw e;r.Ea.add(1),await Tl(r),r.Ra.set("Offline"),t||(t=()=>Rw(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{se(Ss,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Wc(r)}))}function Vw(r,e){return e().catch((t=>Sc(r,t,e)))}async function Hc(r){const e=Te(r),t=Li(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Of;for(;hP(e);)try{const o=await HR(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,dP(e,o)}catch(o){await Sc(e,o)}bw(e)&&Ow(e)}function hP(r){return Ps(r)&&r.Ta.length<10}function dP(r,e){r.Ta.push(e);const t=Li(r);t.O_()&&t.X_&&t.ea(e.mutations)}function bw(r){return Ps(r)&&!Li(r).x_()&&r.Ta.length>0}function Ow(r){Li(r).start()}async function fP(r){Li(r).ra()}async function pP(r){const e=Li(r);for(const t of r.Ta)e.ea(t.mutations)}async function mP(r,e,t){const i=r.Ta.shift(),o=zf.from(i,e,t);await Vw(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Hc(r)}async function gP(r,e){e&&Li(r).X_&&await(async function(i,o){if((function(h){return XC(h)&&h!==H.ABORTED})(o.code)){const l=i.Ta.shift();Li(i).B_(),await Vw(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Hc(i)}})(r,e),bw(r)&&Ow(r)}async function t_(r,e){const t=Te(r);t.asyncQueue.verifyOperationInProgress(),se(Ss,"RemoteStore received new credentials");const i=Ps(t);t.Ea.add(3),await Tl(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Wc(t)}async function yP(r,e){const t=Te(r);e?(t.Ea.delete(2),await Wc(t)):e||(t.Ea.add(2),await Tl(t),t.Ra.set("Unknown"))}function Ho(r){return r.ma||(r.ma=(function(t,i,o){const l=Te(t);return l.sa(),new tP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:aP.bind(null,r),t_:lP.bind(null,r),r_:uP.bind(null,r),H_:cP.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Xf(r)?Yf(r):r.Ra.set("Unknown")):(await r.ma.stop(),Dw(r))}))),r.ma}function Li(r){return r.fa||(r.fa=(function(t,i,o){const l=Te(t);return l.sa(),new nP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:fP.bind(null,r),r_:gP.bind(null,r),ta:pP.bind(null,r),na:mP.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await Hc(r)):(await r.fa.stop(),r.Ta.length>0&&(se(Ss,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Jf{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Jf(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zf(r,e){if(br("AsyncQueue",`${e}: ${r}`),qo(r))return new ne(H.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Ro{static emptySet(e){return new Ro(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||de.comparator(t.key,i.key):(t,i)=>de.comparator(t.key,i.key),this.keyedMap=Wa(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ro)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ro;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class n_{constructor(){this.ga=new nt(de.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Lo{constructor(e,t,i,o,l,h,f,g,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Lo(e,t,Ro.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class _P{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class vP{constructor(){this.queries=r_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=r_(),l.forEach(((h,f)=>{for(const g of f.Sa)g.onError(i)}))})(this,new ne(H.ABORTED,"Firestore shutting down"))}}function r_(){return new Rs((r=>tw(r)),Fc)}async function Lw(r,e){const t=Te(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new _P,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Zf(h,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&ep(t)}async function Mw(r,e){const t=Te(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function wP(r,e){const t=Te(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.Sa)f.Fa(o)&&(i=!0);h.wa=o}}i&&ep(t)}function EP(r,e,t){const i=Te(r),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function ep(r){r.Ca.forEach((e=>{e.next()}))}var pf,i_;(i_=pf||(pf={})).Ma="default",i_.Cache="cache";class Uw{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Lo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==pf.Cache}}/**
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
 */class Fw{constructor(e){this.key=e}}class jw{constructor(e){this.key=e}}class TP{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ne(),this.mutatedKeys=Ne(),this.eu=nw(e),this.tu=new Ro(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new n_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,E)=>{const S=o.get(w),b=jc(this.query,E)?E:null,$=!!S&&this.mutatedKeys.has(S.key),q=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let j=!1;S&&b?S.data.isEqual(b.data)?$!==q&&(i.track({type:3,doc:b}),j=!0):this.su(S,b)||(i.track({type:2,doc:b}),j=!0,(g&&this.eu(b,g)>0||y&&this.eu(b,y)<0)&&(f=!0)):!S&&b?(i.track({type:0,doc:b}),j=!0):S&&!b&&(i.track({type:1,doc:S}),j=!0,(g||y)&&(f=!0)),j&&(b?(h=h.add(b),l=q?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{tu:h,iu:i,Cs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,E)=>(function(b,$){const q=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:j})}};return q(b)-q($)})(w.type,E.type)||this.eu(w.doc,E.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,y=g!==this.Za;return this.Za=g,h.length!==0||y?{snapshot:new Lo(this.query,e.tu,l,h,e.mutatedKeys,g===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new n_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ne(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new jw(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new Fw(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Lo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const tp="SyncEngine";class IP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class SP{constructor(e){this.key=e,this.hu=!1}}class AP{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Rs((f=>tw(f)),Fc),this.Iu=new Map,this.Eu=new Set,this.du=new nt(de.comparator),this.Au=new Map,this.Ru=new qf,this.Vu={},this.mu=new Map,this.fu=Oo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function CP(r,e,t=!0){const i=Hw(r);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await zw(i,e,t,!0),o}async function RP(r,e){const t=Hw(r);await zw(t,e,!0,!1)}async function zw(r,e,t,i){const o=await GR(r.localStore,sr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await PP(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&xw(r.remoteStore,o),f}async function PP(r,e,t,i,o){r.pu=(E,S,b)=>(async function(q,j,re,te){let oe=j.view.ru(re);oe.Cs&&(oe=await Yy(q.localStore,j.query,!1).then((({documents:x})=>j.view.ru(x,oe))));const fe=te&&te.targetChanges.get(j.targetId),De=te&&te.targetMismatches.get(j.targetId)!=null,Ae=j.view.applyChanges(oe,q.isPrimaryClient,fe,De);return o_(q,j.targetId,Ae.au),Ae.snapshot})(r,E,S,b);const l=await Yy(r.localStore,e,!0),h=new TP(e,l.Qs),f=h.ru(l.documents),g=El.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),y=h.applyChanges(f,r.isPrimaryClient,g);o_(r,t,y.au);const w=new IP(e,t,h);return r.Tu.set(e,w),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),y.snapshot}async function kP(r,e,t){const i=Te(r),o=i.Tu.get(e),l=i.Iu.get(o.targetId);if(l.length>1)return i.Iu.set(o.targetId,l.filter((h=>!Fc(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await df(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Kf(i.remoteStore,o.targetId),mf(i,o.targetId)})).catch($o)):(mf(i,o.targetId),await df(i.localStore,o.targetId,!0))}async function xP(r,e){const t=Te(r),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Kf(t.remoteStore,i.targetId))}async function NP(r,e,t){const i=UP(r);try{const o=await(function(h,f){const g=Te(h),y=Ye.now(),w=f.reduce(((b,$)=>b.add($.key)),Ne());let E,S;return g.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let $=Or(),q=Ne();return g.Ns.getEntries(b,w).next((j=>{$=j,$.forEach(((re,te)=>{te.isValidDocument()||(q=q.add(re))}))})).next((()=>g.localDocuments.getOverlayedDocuments(b,$))).next((j=>{E=j;const re=[];for(const te of f){const oe=HC(te,E.get(te.key).overlayedDocument);oe!=null&&re.push(new zi(te.key,oe,Gv(oe.value.mapValue),bn.exists(!0)))}return g.mutationQueue.addMutationBatch(b,y,re,f)})).next((j=>{S=j;const re=j.applyToLocalDocumentSet(E,q);return g.documentOverlayCache.saveOverlays(b,j.batchId,re)}))})).then((()=>({batchId:S.batchId,changes:iw(E)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let y=h.Vu[h.currentUser.toKey()];y||(y=new nt(xe)),y=y.insert(f,g),h.Vu[h.currentUser.toKey()]=y})(i,o.batchId,t),await Il(i,o.changes),await Hc(i.remoteStore)}catch(o){const l=Zf(o,"Failed to persist write");t.reject(l)}}async function Bw(r,e){const t=Te(r);try{const i=await qR(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?je(h.hu,14607):o.removedDocuments.size>0&&(je(h.hu,42227),h.hu=!1))})),await Il(t,i,e)}catch(i){await $o(i)}}function s_(r,e,t){const i=Te(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Te(h);g.onlineState=f;let y=!1;g.queries.forEach(((w,E)=>{for(const S of E.Sa)S.va(f)&&(y=!0)})),y&&ep(g)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function DP(r,e,t){const i=Te(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let h=new nt(de.comparator);h=h.insert(l,jt.newNoDocument(l,we.min()));const f=Ne().add(l),g=new $c(we.min(),new Map,new nt(xe),h,f);await Bw(i,g),i.du=i.du.remove(l),i.Au.delete(e),np(i)}else await df(i.localStore,e,!1).then((()=>mf(i,e,t))).catch($o)}async function VP(r,e){const t=Te(r),i=e.batch.batchId;try{const o=await $R(t.localStore,e);qw(t,i,null),$w(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Il(t,o)}catch(o){await $o(o)}}async function bP(r,e,t){const i=Te(r);try{const o=await(function(h,f){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let w;return g.mutationQueue.lookupMutationBatch(y,f).next((E=>(je(E!==null,37113),w=E.keys(),g.mutationQueue.removeMutationBatch(y,E)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,w,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w))).next((()=>g.localDocuments.getDocuments(y,w)))}))})(i.localStore,e);qw(i,e,t),$w(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Il(i,o)}catch(o){await $o(o)}}function $w(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function qw(r,e,t){const i=Te(r);let o=i.Vu[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Vu[i.currentUser.toKey()]=o}}function mf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Iu.get(e))r.Tu.delete(i),t&&r.Pu.yu(i,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((i=>{r.Ru.containsKey(i)||Ww(r,i)}))}function Ww(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Kf(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),np(r))}function o_(r,e,t){for(const i of t)i instanceof Fw?(r.Ru.addReference(i.key,e),OP(r,i)):i instanceof jw?(se(tp,"Document no longer in limbo: "+i.key),r.Ru.removeReference(i.key,e),r.Ru.containsKey(i.key)||Ww(r,i.key)):_e(19791,{wu:i})}function OP(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Eu.has(i)||(se(tp,"New document in limbo: "+t),r.Eu.add(i),np(r))}function np(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new de(He.fromString(e)),i=r.fu.next();r.Au.set(i,new SP(t)),r.du=r.du.insert(t,i),xw(r.remoteStore,new Si(sr(Uc(t.path)),i,"TargetPurposeLimboResolution",Oc.ce))}}async function Il(r,e,t){const i=Te(r),o=[],l=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,g)=>{h.push(i.pu(g,e,t).then((y=>{if((y||t)&&i.isPrimaryClient){const w=y?!y.fromCache:t?.targetChanges.get(g.targetId)?.current;i.sharedClientState.updateQueryState(g.targetId,w?"current":"not-current")}if(y){o.push(y);const w=Hf.As(g.targetId,y);l.push(w)}})))})),await Promise.all(h),i.Pu.H_(o),await(async function(g,y){const w=Te(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>G.forEach(y,(S=>G.forEach(S.Es,(b=>w.persistence.referenceDelegate.addReference(E,S.targetId,b))).next((()=>G.forEach(S.ds,(b=>w.persistence.referenceDelegate.removeReference(E,S.targetId,b)))))))))}catch(E){if(!qo(E))throw E;se(Gf,"Failed to update sequence numbers: "+E)}for(const E of y){const S=E.targetId;if(!E.fromCache){const b=w.Ms.get(S),$=b.snapshotVersion,q=b.withLastLimboFreeSnapshotVersion($);w.Ms=w.Ms.insert(S,q)}}})(i.localStore,l))}async function LP(r,e){const t=Te(r);if(!t.currentUser.isEqual(e)){se(tp,"User change. New user:",e.toKey());const i=await Cw(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((f=>{f.forEach((g=>{g.reject(new ne(H.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Il(t,i.Ls)}}function MP(r,e){const t=Te(r),i=t.Au.get(e);if(i&&i.hu)return Ne().add(i.key);{let o=Ne();const l=t.Iu.get(e);if(!l)return o;for(const h of l){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function Hw(r){const e=Te(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DP.bind(null,e),e.Pu.H_=wP.bind(null,e.eventManager),e.Pu.yu=EP.bind(null,e.eventManager),e}function UP(r){const e=Te(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bP.bind(null,e),e}class Ac{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return BR(this.persistence,new FR,e.initialUser,this.serializer)}Cu(e){return new Aw(Wf.mi,this.serializer)}Du(e){return new QR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ac.provider={build:()=>new Ac};class FP extends Ac{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){je(this.persistence.referenceDelegate instanceof Ic,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new SR(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new Aw((i=>Ic.mi(i,t)),this.serializer)}}class gf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>s_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=LP.bind(null,this.syncEngine),await yP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vP})()}createDatastore(e){const t=qc(e.databaseInfo.databaseId),i=(function(l){return new eP(l)})(e.databaseInfo);return(function(l,h,f,g){return new iP(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new oP(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>s_(this.syncEngine,t,0)),(function(){return Zy.v()?new Zy:new YR})())}createSyncEngine(e,t){return(function(o,l,h,f,g,y,w){const E=new AP(o,l,h,f,g,y);return w&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const i=Te(t);se(Ss,"RemoteStore shutting down."),i.Ea.add(5),await Tl(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}gf.provider={build:()=>new gf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Mi="FirestoreClient";class jP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=bf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{se(Mi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(se(Mi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Zf(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function zd(r,e){r.asyncQueue.verifyOperationInProgress(),se(Mi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await Cw(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function a_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await zP(r);se(Mi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>t_(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>t_(e.remoteStore,o))),r._onlineComponents=e}async function zP(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se(Mi,"Using user provided OfflineComponentProvider");try{await zd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;No("Error using user provided cache. Falling back to memory cache: "+t),await zd(r,new Ac)}}else se(Mi,"Using default OfflineComponentProvider"),await zd(r,new FP(void 0));return r._offlineComponents}async function Kw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se(Mi,"Using user provided OnlineComponentProvider"),await a_(r,r._uninitializedComponentsProvider._online)):(se(Mi,"Using default OnlineComponentProvider"),await a_(r,new gf))),r._onlineComponents}function BP(r){return Kw(r).then((e=>e.syncEngine))}async function yf(r){const e=await Kw(r),t=e.eventManager;return t.onListen=CP.bind(null,e.syncEngine),t.onUnlisten=kP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xP.bind(null,e.syncEngine),t}function $P(r,e,t={}){const i=new xi;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,y){const w=new Gw({next:S=>{w.Nu(),h.enqueueAndForget((()=>Mw(l,E)));const b=S.docs.has(f);!b&&S.fromCache?y.reject(new ne(H.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&S.fromCache&&g&&g.source==="server"?y.reject(new ne(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),E=new Uw(Uc(f.path),w,{includeMetadataChanges:!0,qa:!0});return Lw(l,E)})(await yf(r),r.asyncQueue,e,t,i))),i.promise}/**
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
 */function Qw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="firestore.googleapis.com",u_=!0;class c_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yw,this.ssl=u_}else this.host=e.host,this.ssl=e.ssl??u_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<TR)throw new ne(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qw(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new c_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new c_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new QA;switch(i.type){case"firstParty":return new ZA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ne(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=l_.get(t);i&&(se("ComponentProvider","Removing Datastore"),l_.delete(t),i.terminate())})(this),Promise.resolve()}}function qP(r,e,t,i={}){r=Vn(r,Gc);const o=Fo(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},f=`${e}:${t}`;o&&(U_(`https://${f}`),F_("Firestore",!0)),l.host!==Yw&&l.host!==f&&No("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:f,ssl:o,emulatorOptions:i};if(!vs(g,h)&&(r._setSettings(g),i.mockUserToken)){let y,w;if(typeof i.mockUserToken=="string")y=i.mockUserToken,w=Ft.MOCK_USER;else{y=nI(i.mockUserToken,r._app?.options.projectId);const E=i.mockUserToken.sub||i.mockUserToken.user_id;if(!E)throw new ne(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Ft(E)}r._authCredentials=new YA(new Ov(y,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Bi(this.firestore,e,this._query)}}class st{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ni(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(vl(t,st._jsonSchema))return new st(e,i||null,new de(He.fromString(t.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:mt("string",st._jsonSchemaVersion),referencePath:mt("string")};class Ni extends Bi{constructor(e,t,i){super(e,t,Uc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new de(e))}withConverter(e){return new Ni(this.firestore,e,this._path)}}function rp(r,e,...t){if(r=gt(r),Lv("collection","path",e),r instanceof Gc){const i=He.fromString(e,...t);return Iy(i),new Ni(r,null,i)}{if(!(r instanceof st||r instanceof Ni))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(He.fromString(e,...t));return Iy(i),new Ni(r.firestore,null,i)}}function Lr(r,e,...t){if(r=gt(r),arguments.length===1&&(e=bf.newId()),Lv("doc","path",e),r instanceof Gc){const i=He.fromString(e,...t);return Ty(i),new st(r,null,new de(i))}{if(!(r instanceof st||r instanceof Ni))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(He.fromString(e,...t));return Ty(i),new st(r.firestore,r instanceof Ni?r.converter:null,new de(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="AsyncQueue";class d_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Pw(this,"async_queue_retry"),this._c=()=>{const i=jd();i&&se(h_,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=jd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=jd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new xi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!qo(e))throw e;se(h_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,br("INTERNAL UNHANDLED ERROR: ",f_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Jf.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:f_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function f_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function p_(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class As extends Gc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new d_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new d_(e),this._firestoreClient=void 0,await e}}}function WP(r,e){const t=typeof r=="object"?r:$_(),i=typeof r=="string"?r:yc,o=Sf(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=eI("firestore");l&&qP(o,...l)}return o}function ip(r){if(r._terminated)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||HP(r),r._firestoreClient}function HP(r){const e=r._freezeSettings(),t=(function(o,l,h,f){return new gC(o,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Qw(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new jP(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(o){const l=o?._online.build();return{_offline:o?._offline.build(l),_online:l}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(Nt.fromBase64String(e))}catch(t){throw new ne(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vl(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:mt("string",vn._jsonSchemaVersion),bytes:mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this._methodName=e}}/**
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
 */class ar{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ar._jsonSchemaVersion}}static fromJSON(e){if(vl(e,ar._jsonSchema))return new ar(e.latitude,e.longitude)}}ar._jsonSchemaVersion="firestore/geoPoint/1.0",ar._jsonSchema={type:mt("string",ar._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
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
 */class lr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:lr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vl(e,lr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new lr(e.vectorValues);throw new ne(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}lr._jsonSchemaVersion="firestore/vectorValue/1.0",lr._jsonSchema={type:mt("string",lr._jsonSchemaVersion),vectorValues:mt("object")};/**
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
 */const GP=/^__.*__$/;class KP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new zi(e,this.data,this.fieldMask,t,this.fieldTransforms):new wl(e,this.data,t,this.fieldTransforms)}}class Xw{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new zi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Jw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:r})}}class sp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new sp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Cc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Jw(this.Ac)&&GP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class QP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||qc(e)}Cc(e,t,i,o=!1){return new sp({Ac:e,methodName:t,Dc:i,path:xt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yc(r){const e=r._freezeSettings(),t=qc(r._databaseId);return new QP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Zw(r,e,t,i,o,l={}){const h=r.Cc(l.merge||l.mergeFields?2:0,e,t,o);ap("Data must be an object, but it was:",h,i);const f=eE(i,h);let g,y;if(l.merge)g=new un(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const E of l.mergeFields){const S=_f(e,E,t);if(!h.contains(S))throw new ne(H.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);nE(w,S)||w.push(S)}g=new un(w),y=h.fieldTransforms.filter((E=>g.covers(E.field)))}else g=null,y=h.fieldTransforms;return new KP(new Jt(f),g,y)}class Xc extends Qc{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xc}}class op extends Qc{_toFieldTransform(e){return new BC(e.path,new cl)}isEqual(e){return e instanceof op}}function YP(r,e,t,i){const o=r.Cc(1,e,t);ap("Data must be an object, but it was:",o,i);const l=[],h=Jt.empty();ji(i,((g,y)=>{const w=lp(e,g,t);y=gt(y);const E=o.yc(w);if(y instanceof Xc)l.push(w);else{const S=Sl(y,E);S!=null&&(l.push(w),h.set(w,S))}}));const f=new un(l);return new Xw(h,f,o.fieldTransforms)}function XP(r,e,t,i,o,l){const h=r.Cc(1,e,t),f=[_f(e,i,t)],g=[o];if(l.length%2!=0)throw new ne(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)f.push(_f(e,l[S])),g.push(l[S+1]);const y=[],w=Jt.empty();for(let S=f.length-1;S>=0;--S)if(!nE(y,f[S])){const b=f[S];let $=g[S];$=gt($);const q=h.yc(b);if($ instanceof Xc)y.push(b);else{const j=Sl($,q);j!=null&&(y.push(b),w.set(b,j))}}const E=new un(y);return new Xw(w,E,h.fieldTransforms)}function JP(r,e,t,i=!1){return Sl(t,r.Cc(i?4:3,e))}function Sl(r,e){if(tE(r=gt(r)))return ap("Unsupported field value:",e,r),eE(r,e);if(r instanceof Qc)return(function(i,o){if(!Jw(o.Ac))throw o.Sc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=Sl(f,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(i,o){if((i=gt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return FC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ye.fromDate(i);return{timestampValue:Tc(o.serializer,l)}}if(i instanceof Ye){const l=new Ye(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Tc(o.serializer,l)}}if(i instanceof ar)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof vn)return{bytesValue:yw(o.serializer,i._byteString)};if(i instanceof st){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:$f(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof lr)return(function(h,f){return{mapValue:{fields:{[Wv]:{stringValue:Hv},[_c]:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw f.Sc("VectorValues must only contain numeric values.");return jf(f.serializer,y)}))}}}}}})(i,o);throw o.Sc(`Unsupported field value: ${bc(i)}`)})(r,e)}function eE(r,e){const t={};return Fv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(r,((i,o)=>{const l=Sl(o,e.mc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function tE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ye||r instanceof ar||r instanceof vn||r instanceof st||r instanceof Qc||r instanceof lr)}function ap(r,e,t){if(!tE(t)||!Mv(t)){const i=bc(t);throw i==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+i)}}function _f(r,e,t){if((e=gt(e))instanceof Kc)return e._internalPath;if(typeof e=="string")return lp(r,e);throw Cc("Field path arguments must be of type string or ",r,!1,void 0,t)}const ZP=new RegExp("[~\\*/\\[\\]]");function lp(r,e,t){if(e.search(ZP)>=0)throw Cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Kc(...e.split("."))._internalPath}catch{throw Cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Cc(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new ne(H.INVALID_ARGUMENT,f+r+g)}function nE(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ek(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ek extends rE{data(){return super.data()}}function Jc(r,e){return typeof e=="string"?lp(r,e):e instanceof Kc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ne(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class up{}class cp extends up{}function iE(r,e,...t){let i=[];e instanceof up&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof hp)).length,f=l.filter((g=>g instanceof Zc)).length;if(h>1||h>0&&f>0)throw new ne(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class Zc extends cp{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Zc(e,t,i)}_apply(e){const t=this._parse(e);return aE(e._query,t),new Bi(e.firestore,e.converter,af(e._query,t))}_parse(e){const t=Yc(e.firestore);return(function(l,h,f,g,y,w,E){let S;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ne(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){g_(E,w);const $=[];for(const q of E)$.push(m_(g,l,q));S={arrayValue:{values:$}}}else S=m_(g,l,E)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||g_(E,w),S=JP(f,h,E,w==="in"||w==="not-in");return pt.create(y,w,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function sE(r,e,t){const i=e,o=Jc("where",r);return Zc._create(o,i,t)}class hp extends up{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Ln.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)aE(h,g),h=af(h,g)})(e._query,t),new Bi(e.firestore,e.converter,af(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dp extends cp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new dp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ne(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ne(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ul(l,h)})(e._query,this._field,this._direction);return new Bi(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Wo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function oE(r,e="asc"){const t=e,i=Jc("orderBy",r);return dp._create(i,t)}class fp extends cp{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new fp(e,t,i)}_apply(e){return new Bi(e.firestore,e.converter,wc(e._query,this._limit,this._limitType))}}function nk(r){return fp._create("limit",r,"F")}function m_(r,e,t){if(typeof(t=gt(t))=="string"){if(t==="")throw new ne(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ew(e)&&t.indexOf("/")!==-1)throw new ne(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(He.fromString(t));if(!de.isDocumentKey(i))throw new ne(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Ny(r,new de(i))}if(t instanceof st)return Ny(r,t._key);throw new ne(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bc(t)}.`)}function g_(r,e){if(!Array.isArray(r)||r.length===0)throw new ne(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aE(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ne(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class rk{convertValue(e,t="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ji(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){const t=e.fields?.[_c].arrayValue?.values?.map((i=>ut(i.doubleValue)));return new lr(t)}convertGeoPoint(e){return new ar(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Mc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ol(e));default:return null}}convertTimestamp(e){const t=Vi(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=He.fromString(e);je(Iw(i),9688,{name:e});const o=new al(i.get(1),i.get(3)),l=new de(i.popFirst(5));return o.isEqual(t)||br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(r,e,t){let i;return i=r?r.toFirestore(e):e,i}class Ga{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _s extends rE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ic(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Jc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_s._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_s._jsonSchemaVersion="firestore/documentSnapshot/1.0",_s._jsonSchema={type:mt("string",_s._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class ic extends _s{data(e={}){return super.data(e)}}class Po{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ga(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new ic(this._firestore,this._userDataWriter,i.key,i,new Ga(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new ic(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new ic(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:ik(f.type),doc:g,oldIndex:y,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Po._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ik(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(r){r=Vn(r,st);const e=Vn(r.firestore,As);return $P(ip(e),r._key).then((t=>hE(e,r,t)))}Po._jsonSchemaVersion="firestore/querySnapshot/1.0",Po._jsonSchema={type:mt("string",Po._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class uE extends rk{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}function sk(r,e,t){r=Vn(r,st);const i=Vn(r.firestore,As),o=lE(r.converter,e);return mp(i,[Zw(Yc(i),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,bn.none())])}function cE(r,e,t,...i){r=Vn(r,st);const o=Vn(r.firestore,As),l=Yc(o);let h;return h=typeof(e=gt(e))=="string"||e instanceof Kc?XP(l,"updateDoc",r._key,e,t,i):YP(l,"updateDoc",r._key,e),mp(o,[h.toMutation(r._key,bn.exists(!0))])}function ok(r,e){const t=Vn(r.firestore,As),i=Lr(r),o=lE(r.converter,e);return mp(t,[Zw(Yc(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,bn.exists(!1))]).then((()=>i))}function pp(r,...e){r=gt(r);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||p_(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(p_(e[i])){const g=e[i];e[i]=g.next?.bind(g),e[i+1]=g.error?.bind(g),e[i+2]=g.complete?.bind(g)}let l,h,f;if(r instanceof st)h=Vn(r.firestore,As),f=Uc(r._key.path),l={next:g=>{e[i]&&e[i](hE(h,r,g))},error:e[i+1],complete:e[i+2]};else{const g=Vn(r,Bi);h=Vn(g.firestore,As),f=g._query;const y=new uE(h);l={next:w=>{e[i]&&e[i](new Po(h,y,g,w))},error:e[i+1],complete:e[i+2]},tk(r._query)}return(function(y,w,E,S){const b=new Gw(S),$=new Uw(w,b,E);return y.asyncQueue.enqueueAndForget((async()=>Lw(await yf(y),$))),()=>{b.Nu(),y.asyncQueue.enqueueAndForget((async()=>Mw(await yf(y),$)))}})(ip(h),f,o,l)}function mp(r,e){return(function(i,o){const l=new xi;return i.asyncQueue.enqueueAndForget((async()=>NP(await BP(i),o,l))),l.promise})(ip(r),e)}function hE(r,e,t){const i=t.docs.get(e._key),o=new uE(r);return new _s(r,o,e._key,i,new Ga(t.hasPendingWrites,t.fromCache),e.converter)}function ak(){return new op("serverTimestamp")}(function(e,t=!0){(function(o){Bo=o})(jo),xo(new ws("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new As(new XA(i.getProvider("auth-internal")),new eC(h,i.getProvider("app-check-internal")),(function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ne(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new al(y.options.projectId,w)})(h,o),h);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Pi(_y,vy,e),Pi(_y,vy,"esm2020")})();const lk={apiKey:"AIzaSyCoB8FqB0CxRIwGzcG0i7821NiWWxt9NN0",authDomain:"nea-school-portal-1.firebaseapp.com",projectId:"nea-school-portal-1",storageBucket:"nea-school-portal-1.appspot.com",messagingSenderId:"617530386669",appId:"1:617530386669:web:d62556d81aa4ab769984e4"},dE=B_(lk),wn=GA(dE),Mn=WP(dE),fE=async(r,e)=>{try{await ok(rp(Mn,"users",r,"activities"),{description:e,timestamp:ak()})}catch(t){console.error("Error logging activity:",t)}},pE="/NEA-School-Portal/assets/School-bg-L5f_TUMo.jpg";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ck=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),y_=r=>{const e=ck(r);return e.charAt(0).toUpperCase()+e.slice(1)},mE=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim(),hk=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=W.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:h,...f},g)=>W.createElement("svg",{ref:g,...dk,width:e,height:e,stroke:r,strokeWidth:i?Number(t)*24/Number(e):t,className:mE("lucide",o),...!l&&!hk(f)&&{"aria-hidden":"true"},...f},[...h.map(([y,w])=>W.createElement(y,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=(r,e)=>{const t=W.forwardRef(({className:i,...o},l)=>W.createElement(fk,{ref:l,iconNode:e,className:mE(`lucide-${uk(y_(r))}`,`lucide-${r}`,i),...o}));return t.displayName=y_(r),t};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],mk=En("eye-off",pk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],yk=En("eye",gk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],vk=En("house",_k);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],gE=En("info",wk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Tk=En("log-out",Ek);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Sk=En("lock",Ik);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Ck=En("mail",Ak);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Pk=En("menu",Rk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],xk=En("settings",kk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],yE=En("user-plus",Nk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Vk=En("user",Dk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ok=En("x",bk),__=()=>{const[r,e]=W.useState(!1),[t,i]=W.useState(""),[o,l]=W.useState({}),[h,f]=W.useState(!1),g=Ui(),[y,w]=W.useState({email:"",password:""});function E(b){w({...y,[b.target.name]:b.target.value}),l({...o,[b.target.name]:""})}const S=async b=>{b.preventDefault();let $={};if(y.email||($.email="Email is required"),y.password||($.password="Password is required"),Object.keys($).length>0){l($);return}try{f(!0),await DS(wn,y.email,y.password),await fE(wn.currentUser.uid,"User logged in successfully"),i("Logged in successfully🎉🎉"),setTimeout(()=>{i(""),g("/dashboard")},2e3)}catch(q){console.error("Login error:",q.code,q.message),q.code==="auth/user-not-found"?l({email:"No user found with this email"}):q.code==="auth/wrong-password"||q.code==="auth/invalid-credential"?l({password:"Incorrect password"}):q.code==="auth/too-many-requests"?l({email:"Too many failed attempts. Try again later."}):l({email:"Failed to log in. Please try again."})}finally{f(!1)}};return C.jsxs("div",{className:`min-h-screen bg-center relative\r
     flex justify-center items-center`,style:{backgroundImage:`url(${pE})`},children:[C.jsx("div",{className:"absolute inset-0 bg-white opacity-70"}),t&&C.jsx("div",{className:`absolute bg-black/30 inset-0 backdrop-blur-sm z-10\r
        transition-all duration-300`}),t&&C.jsx("div",{className:`absolute bg-green-300 z-20 text-gray-700 border border-gray-300\r
        px-6 py-4 rounded-lg shadow-lg text-center animate-fade-in`,children:C.jsx("p",{children:t})}),C.jsxs("form",{onSubmit:S,className:"w-full z-10  mx-5 max-w-md bg-white py-4 px-6 text-gray-900 rounded shadow-2xl",children:[C.jsx("h2",{className:"text-center mb-1 font-bold uppercase text-xl",children:"Admission Portal"}),C.jsxs("div",{className:`bg-[#ffaa33] mb-8 shadow-md border-l-[#ff9500] border-l-4\r
         px-4 py-4 flex justify-between gap-5 items-center rounded-md `,children:[C.jsx("span",{className:"text-[#663c00]",children:C.jsx(gE,{size:50})}),C.jsxs("div",{className:"",children:[C.jsx("h4",{className:"text-2xl font-bold lg:text-lg mb-1 text-[#663c00]",children:"Notice:"}),C.jsxs("p",{className:"text-[12px] text-[#8e580d]",children:["Enter the email address and password provided during sign-up, if you do not have an account, click on"," ",C.jsx("strong",{className:"",children:"SIGN UP"})]})]})]}),C.jsxs("div",{className:"relative",children:[C.jsx("h2",{className:"uppercase lg:text-lg lg:mb-1 font-bold mb-4",children:"Log In"}),C.jsx("span",{type:"button",className:"absolute text-gray-950 font-bold p-1 right-1 top-0",children:C.jsx(Sk,{})})]}),C.jsxs("div",{className:"relative",children:[C.jsx("label",{className:"block mb-1",children:"Email"}),C.jsx("input",{onChange:E,className:"w-full text-gray-700 py-1 px-2 rounded mb-2 border-gray-700 border",type:"email",value:y.email,name:"email",placeholder:"Enter Your Email"}),C.jsx("p",{className:"absolute right-3 top-8 text-gray-500",children:C.jsx(Ck,{})}),o.email&&C.jsx("p",{className:"text-red-300 text-sm mb-2",children:o.email})]}),C.jsxs("div",{className:"relative",children:[C.jsx("label",{className:"block mb-1",children:"Password"}),C.jsx("input",{onChange:E,value:y.password,className:"w-full text-gray-700 py-1 px-2 rounded lg:mb-2 mb-7 border border-gray-700",type:r?"text":"password",name:"password",placeholder:"Enter Your Password"}),C.jsx("button",{type:"button",onClick:()=>e(!r),className:"absolute right-3 top-9 text-gray-500",children:r?C.jsx(mk,{size:20}):C.jsx(yk,{size:20})}),o.password&&C.jsx("p",{className:"text-red-300 text-sm mb-2",children:o.password})]}),C.jsx("button",{type:"submit",disabled:h,className:`w-full py-2 text-lg my-3 rounded text-white transition duration-500 ease-in-out ${h?"bg-[#0f9c37] cursor-not-allowed":"bg-[#0f9c37] hover:bg-[#106e1d]"}`,children:h?"Logging in...":"Log In"}),C.jsxs("div",{className:"flex justify-between items-center gap-5 mt-4",children:[C.jsxs("p",{className:"mt-2 text-sm text-center",children:["Don't have an account yet?"," "]}),C.jsxs("div",{onClick:()=>g("/signup"),className:`flex items-center justify-between px-2 cursor-pointer md:max-w-40 lg:max-w-48\r
             w-full bg-[#17b6a4] rounded-lg py-2`,children:[C.jsx("button",{className:`text-white text-lg font-bold flex\r
             rounded-md`,children:"Sign Up"}),C.jsx("span",{className:`\r
             text-white font-bold`,children:C.jsx(yE,{})})]})]}),C.jsx("p",{className:"text-center mb-4",children:C.jsx("a",{href:"/forgot-password",className:"text-blue-700 hover:underline text-sm",children:"Forgot Password?"})})]})]})},Lk=()=>{const[r,e]=W.useState({fullname:"",email:"",password:"",confirmPassword:"",role:"Student",department:"",level:"",studentId:"",staffId:"",position:"",adminId:""}),[t,i]=W.useState({}),[o,l]=W.useState(!1),[h,f]=W.useState(""),g=Ui();function y(E){e({...r,[E.target.name]:E.target.value}),i({...t,[E.target.name]:""})}const w=async E=>{E.preventDefault(),i({}),l(!0);const{fullname:S,email:b,password:$,confirmPassword:q,role:j}=r;if($!==q){i({confirmPassword:"Passwords do not match"}),l(!1);return}try{const te=(await NS(wn,b,$)).user;await sk(Lr(Mn,"users",te.uid),{fullname:S,email:b,role:j,password:$,department:r.department||null,level:r.level||null,studentId:r.studentId||null,staffId:r.staffId||null,position:r.position||null,adminId:r.adminId||null,createdAt:new Date}),await VS(te),f("✅ Account created successfully."),g("/login")}catch(re){console.error("Signup Error:",re.message),i({general:re.message})}finally{l(!1)}};return C.jsxs("div",{className:"min-h-screen bg-center flex justify-center items-center",style:{backgroundImage:`url(${pE})`},children:[h&&C.jsx("div",{className:`absolute bg-black/30 inset-0 backdrop-blur-sm z-10\r
        transition-all duration-300`}),h&&C.jsx("div",{className:`absolute bg-green-300 z-20 text-gray-700 border border-gray-300\r
        px-6 py-4 rounded-lg shadow-lg text-center animate-fade-in`,children:C.jsx("p",{children:h})}),C.jsxs("form",{onSubmit:w,className:"w-full mx-5 max-w-md bg-white p-8 mt-5 text-gray-900 rounded shadow-2xl",children:[C.jsx("h2",{className:"text-center mb-1 font-bold uppercase text-xl",children:"Admission Portal"}),C.jsxs("div",{className:"bg-[#ffaa33] mb-8 shadow-md border-l-[#ff9500] border-l-4 px-4 py-4 flex gap-5 items-center rounded-md",children:[C.jsx("span",{className:"text-[#663c00]",children:C.jsx(gE,{size:50})}),C.jsxs("div",{children:[C.jsx("h4",{className:"text-2xl lg:text-lg mb-3 font-semibold",children:"Notice:"}),C.jsx("p",{className:"text-[12px] text-[#8e580d]",children:"Sign up with your information as shown on your certificate"})]})]}),C.jsx("h2",{className:"text-xl uppercase font-semibold mb-2 text-center",children:"Create Account"}),C.jsx("label",{className:"block mb-1",children:"Full Name"}),C.jsx("input",{onChange:y,value:r.fullname,name:"fullname",className:"w-full text-red-700 text-sm py-1 px-2 rounded mb-2 border border-gray-700",type:"text",placeholder:"Enter Full Name",required:!0}),C.jsx("label",{className:"block mb-1",children:"Email Address"}),C.jsx("input",{value:r.email,onChange:y,name:"email",className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",type:"email",placeholder:"Enter Email",required:!0}),C.jsx("label",{className:"block mb-1",children:"Create Password"}),C.jsx("input",{onChange:y,name:"password",value:r.password,className:"w-full text-red-700 px-2 py-1 rounded mb-2 border border-gray-700",type:"password",placeholder:"Create New Password",required:!0}),C.jsx("label",{className:"block mb-1",children:"Confirm Password"}),C.jsx("input",{onChange:y,value:r.confirmPassword,name:"confirmPassword",className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",type:"password",placeholder:"Confirm Password",required:!0}),t.confirmPassword&&C.jsx("p",{className:"mb-2 text-sm text-red-500",children:t.confirmPassword}),C.jsx("label",{className:"block mb-1",children:"Role"}),C.jsxs("select",{value:r.role,name:"role",onChange:y,className:"w-full text-gray-700 py-1 px-2 rounded mb-2 border border-gray-700",children:[C.jsx("option",{value:"Student",children:"Student"}),C.jsx("option",{value:"Staff",children:"Staff"}),C.jsx("option",{value:"Admin",children:"Admin"})]}),r.role==="Student"&&C.jsxs(C.Fragment,{children:[C.jsx("label",{className:"block mb-1",children:"Department"}),C.jsx("input",{name:"department",onChange:y,value:r.department,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Department",required:!0}),C.jsx("label",{className:"block mb-1",children:"Level"}),C.jsx("input",{name:"level",onChange:y,value:r.level,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Level",required:!0}),C.jsx("label",{className:"block mb-1",children:"Student ID"}),C.jsx("input",{name:"studentId",onChange:y,value:r.studentId,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Student ID",required:!0})]}),r.role==="Staff"&&C.jsxs(C.Fragment,{children:[C.jsx("label",{className:"block mb-1",children:"Department"}),C.jsx("input",{name:"department",onChange:y,value:r.department,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Department",required:!0}),C.jsx("label",{className:"block mb-1",children:"Staff ID"}),C.jsx("input",{name:"staffId",onChange:y,value:r.staffId,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Staff ID",required:!0}),C.jsx("label",{className:"block mb-1",children:"Position"}),C.jsx("input",{name:"position",onChange:y,value:r.position,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Position",required:!0})]}),r.role==="Admin"&&C.jsxs(C.Fragment,{children:[C.jsx("label",{className:"block mb-1",children:"Admin ID"}),C.jsx("input",{name:"adminId",onChange:y,value:r.adminId,className:"w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700",placeholder:"Enter Admin ID",required:!0})]}),C.jsx("button",{type:"submit",disabled:o,className:`w-full py-1 px-2 rounded mt-5 transition duration-500 ease-in-out text-white ${o?"bg-[#0f9c37] cursor-not-allowed":"bg-[#0f9c37] hover:bg-[#106e1d] font-bold"}`,children:o?"Creating Account...":"Sign Up"}),C.jsxs("div",{className:"flex justify-between items-center gap-5 mt-4",children:[C.jsx("p",{className:"mt-4 text-center lg:text-sm",children:"Already have an account?"}),C.jsxs("div",{onClick:()=>g("/login"),className:"flex items-center cursor-pointer w-full bg-[#17b6a4] rounded-lg py-2 px-2 justify-between",children:[C.jsx("button",{className:"text-white text-lg font-bold",children:"Sign In"}),C.jsx("span",{className:"text-white font-bold",children:C.jsx(yE,{})})]})]})]})]})},_E=W.createContext(),Mk=({children:r})=>{const[e,t]=W.useState(null),[i,o]=W.useState(null),[l,h]=W.useState(!0);W.useEffect(()=>{let g=null;const y=yv(wn,w=>{if(w){t(w);const E=Lr(Mn,"users",w.uid);g=pp(E,S=>{S.exists()&&o(S.data())})}else t(null),o(null);h(!1)});return()=>{y(),g&&g()}},[]);const f=async()=>{await LS(wn)};return C.jsx(_E.Provider,{value:{currentUser:e,userData:i,logout:f},children:!l&&r})},Al=()=>W.useContext(_E),Uk=({children:r})=>{const{currentUser:e}=Al();return e?r:C.jsx(RT,{to:"/login",replace:!0})},Fk=[{title:"Dashboard",id:1,icon:Ku.createElement(vk,{size:20})},{title:"Profile",id:2,icon:Ku.createElement(Vk,{size:20})},{title:"Settings",id:3,icon:Ku.createElement(xk,{size:20})}],v_={student:{stats:[{title:"Courses Enrolled",value:6},{title:"Assignments Due",value:3},{title:"Messages",value:12},{title:"Attendance",value:"92%"}],activities:[{recentAct:"Submitted Assignment 3"},{recentAct:"Checked Attendance Report"},{recentAct:"Updated Profile Information"},{recentAct:"Viewed Exam Timetable"}]},staff:{stats:[{title:"Courses Teaching",value:5},{title:"Pending Grading",value:12},{title:"Messages",value:8},{title:"Attendance Today",value:"95%"}],activities:[{recentAct:"Uploaded Lecture Notes"},{recentAct:"Graded Assignment 2"},{recentAct:"Sent Message to Students"},{recentAct:"Scheduled Class Meeting"}]},admin:{stats:[{title:"Total Students",value:1200},{title:"Total Staff",value:85},{title:"Pending Approvals",value:7},{title:"System Alerts",value:3}],activities:[{recentAct:"Approved Student Enrollment"},{recentAct:"Reviewed Staff Leave Requests"},{recentAct:"Updated School Timetable"},{recentAct:"Generated Monthly Reports"}]}};/*! *****************************************************************************
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
***************************************************************************** */function jk(r,e,t,i){function o(l){return l instanceof t?l:new t(function(h){h(l)})}return new(t||(t=Promise))(function(l,h){function f(w){try{y(i.next(w))}catch(E){h(E)}}function g(w){try{y(i.throw(w))}catch(E){h(E)}}function y(w){w.done?l(w.value):o(w.value).then(f,g)}y((i=i.apply(r,[])).next())})}function zk(r,e){var t={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},i,o,l,h;return h={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function f(y){return function(w){return g([y,w])}}function g(y){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,o&&(l=y[0]&2?o.return:y[0]?o.throw||((l=o.return)&&l.call(o),0):o.next)&&!(l=l.call(o,y[1])).done)return l;switch(o=0,l&&(y=[y[0]&2,l.value]),y[0]){case 0:case 1:l=y;break;case 4:return t.label++,{value:y[1],done:!1};case 5:t.label++,o=y[1],y=[0];continue;case 7:y=t.ops.pop(),t.trys.pop();continue;default:if(l=t.trys,!(l=l.length>0&&l[l.length-1])&&(y[0]===6||y[0]===2)){t=0;continue}if(y[0]===3&&(!l||y[1]>l[0]&&y[1]<l[3])){t.label=y[1];break}if(y[0]===6&&t.label<l[1]){t.label=l[1],l=y;break}if(l&&t.label<l[2]){t.label=l[2],t.ops.push(y);break}l[2]&&t.ops.pop(),t.trys.pop();continue}y=e.call(r,t)}catch(w){y=[6,w],o=0}finally{i=l=0}if(y[0]&5)throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var Io=function(){return Io=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Io.apply(this,arguments)},vE=function(r){return{loading:r==null,value:r}},Bk=function(){return function(r,e){switch(e.type){case"error":return Io(Io({},r),{error:e.error,loading:!1,value:void 0});case"reset":return vE(e.defaultValue);case"value":return Io(Io({},r),{error:void 0,loading:!1,value:e.value});default:return r}}},$k=(function(r){var e=r?r():void 0,t=W.useReducer(Bk(),vE(e)),i=t[0],o=t[1],l=W.useCallback(function(){var g=r?r():void 0;o({type:"reset",defaultValue:g})},[r]),h=W.useCallback(function(g){o({type:"error",error:g})},[]),f=W.useCallback(function(g){o({type:"value",value:g})},[]);return W.useMemo(function(){return{error:i.error,loading:i.loading,reset:l,setError:h,setValue:f,value:i.value}},[i.error,i.loading,l,h,f,i.value])}),gp=(function(r,e){var t=$k(function(){return r.currentUser}),i=t.error,o=t.loading,l=t.setError,h=t.setValue,f=t.value;return W.useEffect(function(){var g=yv(r,function(y){return jk(void 0,void 0,void 0,function(){var w;return zk(this,function(E){switch(E.label){case 0:return[3,4];case 1:return E.trys.push([1,3,,4]),[4,e.onUserChanged(y)];case 2:return E.sent(),[3,4];case 3:return w=E.sent(),l(w),[3,4];case 4:return h(y),[2]}})})},l);return function(){g()}},[r]),[f,o,i]});const qk=()=>{const{currentUser:r}=Al(),[e,t]=W.useState(null);return W.useEffect(()=>{(async()=>{if(r)try{const o=await eh(Lr(Mn,"users",r.uid));o.exists()&&t(o.data())}catch(o){console.error("Error fetching user info:",o)}})()},[r]),e?C.jsxs("div",{className:"bg-white p-6 rounded-xl shadow mb-6",children:[C.jsx("h2",{className:"text-xl font-semibold mb-4",children:"User Info"}),C.jsxs("ul",{className:"space-y-4 text-gray-900",children:[C.jsxs("li",{children:[C.jsx("strong",{children:"Name:"})," ",e.fullname]}),C.jsxs("li",{children:[C.jsx("strong",{children:"Role:"})," ",e.role]}),e.role==="Student"&&C.jsxs(C.Fragment,{children:[C.jsxs("li",{children:[C.jsx("strong",{children:"Department: "})," ",e.department||"N/A"]}),C.jsxs("li",{children:[C.jsx("strong",{children:"Level: "})," ",e.level||"N/A"]}),C.jsxs("li",{children:[C.jsx("strong",{children:"Student ID: "})," ",e.studentId.toUpperCase()||"N/A"]})]}),e.role==="Staff"&&C.jsxs(C.Fragment,{children:[C.jsxs("li",{children:[C.jsx("strong",{children:"Staff ID:"})," ",e.staffId.toUpperCase()||"N/A"]}),C.jsxs("li",{children:[C.jsx("strong",{children:"Position:"})," ",e.position||"N/A"]})]}),e.role==="Admin"&&C.jsxs("li",{children:[C.jsx("strong",{children:"Admin ID:"})," ",e.adminId||"N/A"]})]})]}):C.jsx("div",{className:"bg-white p-6 rounded-xl shadow mb-6 text-gray-500",children:"Loading user info..."})},Wk=()=>{const[r,e]=W.useState([]);return W.useEffect(()=>{const t=wn.currentUser?.uid;if(!t)return;const i=iE(rp(Mn,"activities"),sE("userId","==",t),oE("timestamp","desc")),o=pp(i,l=>{const h=l.docs.map(f=>({id:f.id,...f.data()}));e(h)},l=>{console.error("Failed to fetch activities:",l)});return()=>o()},[]),C.jsxs("div",{className:"bg-white shadow-md p-4 rounded-md",children:[C.jsx("h2",{className:"text-lg font-bold mb-3",children:"Recent Activities"}),C.jsx("ul",{className:"text-sm space-y-2",children:r.length>0?r.map(t=>C.jsxs("li",{className:"border-b pb-1",children:[C.jsx("span",{className:"font-medium",children:t.action}),C.jsx("br",{}),C.jsx("span",{className:"text-gray-500 text-xs",children:t.timestamp?.toDate().toLocaleString()})]},t.id)):C.jsx("p",{className:"text-gray-500",children:"No recent activities yet."})})]})},Hk=()=>{const{logout:r}=Al(),[e,t]=W.useState(null),[i,o]=W.useState([]),[l,h]=W.useState({stats:[],activities:[]}),[f]=gp(wn),g=Ui();return W.useEffect(()=>{if(!f){g("/login");return}wn.currentUser&&fE(wn.currentUser.uid,"Opened Dashboard"),(async()=>{try{const b=await eh(Lr(Mn,"users",f.uid));if(!b.exists()){alert("User data not found");return}const $=b.data();t($);const q=$.role?.toLowerCase();h(v_[q]||v_.student)}catch(b){console.error("Error fetching user data:",b)}})();const w=iE(rp(Mn,"activities"),sE("userId","==",f.uid),oE("timestamp","desc"),nk(5)),E=pp(w,b=>{const $=b.docs.map(q=>({id:q.id,...q.data()}));o($)}),S=setTimeout(()=>{r(),g("/login")},3e5);return()=>{clearTimeout(S),E()}},[f,g,r]),C.jsxs("div",{className:"mb-32",children:[C.jsx("div",{className:"grid lg:grid-cols-4 gap-6 mx-5 my-2",children:l.stats.map((y,w)=>C.jsxs("div",{className:"bg-white p-6 rounded-xl shadow hover:shadow-lg transition",children:[C.jsx("h2",{className:"text-lg text-gray-400",children:y.title}),C.jsx("p",{className:"text-xl text-center font-semibold",children:y.value})]},w))}),C.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 mx-5 gap-6",children:[C.jsx(qk,{user:e}),C.jsx(Wk,{activities:i})]})]})},Gk="/NEA-School-Portal/assets/bg-logo-CLNqAsED.jpg",Kk=()=>{const[r,e]=W.useState(""),[t,i]=W.useState(""),[o,l]=W.useState(""),h=async f=>{f.preventDefault(),i(""),l("");try{await xS(wn,r),i("Password reset link sent to your email ✅")}catch(g){l(g.message)}};return C.jsx("div",{className:"min-h-screen flex justify-center items-center bg-cover",style:{backgroundImage:`url(${Gk})`},children:C.jsxs("form",{onSubmit:h,className:"w-full mx-5 max-w-md bg-gray-900 bg-opacity-80 text-white p-8 rounded-lg shadow-2xl",children:[C.jsx("h2",{className:"text-3xl uppercase font-semibold mb-6",children:"Reset Password"}),C.jsx("label",{className:"block mb-1 text-lg",children:"Email Address"}),C.jsx("input",{type:"email",placeholder:"Enter your email",value:r,onChange:f=>e(f.target.value),required:!0,className:"w-full p-2 rounded text-gray-800 mb-5 border"}),t&&C.jsx("p",{className:"text-green-400 mb-4",children:t}),o&&C.jsx("p",{className:"text-red-400 mb-4",children:o}),C.jsx("button",{type:"submit",className:`w-full py-2 bg-blue-500 hover:bg-blue-700 \r
          transition duration-500 ease-in-out text-xl text-white rounded`,children:"Send Reset Link"}),C.jsxs("p",{className:"mt-4 text-center text-sm",children:["Remember your password?",C.jsx("a",{href:"/login",className:"text-blue-300 hover:underline ml-2",children:"Go back to Login"})]})]})})},wE="/NEA-School-Portal/assets/Passport-CquYe6r7.png",Qk=()=>{const[r]=gp(wn),[e,t]=W.useState(null),[i,o]=W.useState(!0),[l,h]=W.useState(!1),[f,g]=W.useState(""),y=Ui();W.useEffect(()=>{if(!r){y("/login");return}(async()=>{try{const S=await eh(Lr(Mn,"users",r.uid));if(S.exists()){const b=S.data();t(b),g(b.fullname||"")}else console.log("User document not found");o(!1)}catch(S){console.error("error fetching user data",S)}})()},[r,y]);const w=async()=>{const E=f.split(" ").map(b=>b.charAt(0).toUpperCase()+b.slice(1).toLowerCase()).join(" "),S=Lr(Mn,"users",r.uid);await cE(S,{fullname:E}),t(b=>({...b,fullname:E})),h(!1)};return i?C.jsx("p",{className:"text-center mt-20",children:"Loading..."}):C.jsxs("div",{className:"p-6 bg-slate-100 min-h-screen",children:[C.jsx("h2",{className:"text-2xl font-bold mb-4",children:"User Profile"}),C.jsxs("div",{className:"bg-white p-6 shadow-md rounded-lg mx-auto max-w-sm",children:[C.jsx("img",{src:e?.photoURL||wE,className:"w-32 h-32 rounded-full mx-auto mb-4",alt:"user profile"}),l?C.jsxs(C.Fragment,{children:[C.jsx("input",{type:"text",value:f,onChange:E=>g(E.target.value),className:"border p-2 rounded w-full mb-2",placeholder:"Enter full name"}),C.jsx("button",{onClick:w,className:"w-full bg-green-500 text-white py-2 rounded-md mb-2",children:"Save"}),C.jsx("button",{onClick:()=>h(!1),className:"w-full bg-gray-400 text-white py-2 rounded-md",children:"Cancel"})]}):C.jsxs(C.Fragment,{children:[C.jsx("h3",{className:"text-center font-semibold text-xl",children:e?.fullname.split(" ").map(E=>E.charAt(0).toUpperCase()+E.slice(1).toLowerCase()).join(" ")||"No Name"}),C.jsx("p",{className:"text-gray-600 text-center",children:e?.email||r?.email}),C.jsxs("p",{className:"text-center mt-2 text-sm text-gray-500",children:["Role: ",e?.role||"N/A"]}),C.jsx("div",{className:"mt-4 text-center",children:C.jsx("button",{onClick:()=>h(!0),className:"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",children:"Edit Profile"})})]})]})]})},Yk=()=>{const{logout:r}=Al(),e=Ui(),[t,i]=W.useState(!1),o=async()=>{await r(),e("/login")};return C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"flex items-center justify-between bg-gray-800 text-white p-4 lg:hidden",children:[C.jsx("h2",{className:"text-2xl font-bold",children:"NEA Portal"}),C.jsx("button",{onClick:()=>i(!0),className:"p-2 rounded hover:bg-gray-700",children:C.jsx(Pk,{size:26})})]}),C.jsxs("aside",{className:`fixed top-0 left-0 flex flex-col h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${t?"translate-x-0":"-translate-x-full"} 
        lg:translate-x-0 lg:static`,children:[C.jsxs("div",{className:"flex items-center justify-between p-6 border-b",children:[C.jsx("h2",{className:"text-2xl font-bold",children:"NEA Portal"}),C.jsx("button",{onClick:()=>i(!1),className:"lg:hidden text-gray-600 hover:text-red-500",children:C.jsx(Ok,{size:26})})]}),C.jsx("nav",{className:"flex-1 p-4 space-y-2 overflow-y-auto",children:Fk.map(l=>C.jsxs(BT,{onClick:()=>i(!1),to:l.title==="Dashboard"?"/dashboard":`/dashboard/${l.title.toLowerCase()}`,end:l.title==="Dashboard",className:({isActive:h})=>`flex items-center w-full p-2 rounded transition ${h?"bg-blue-500 text-white":"text-gray-700 hover:bg-gray-100"}`,children:[C.jsx("span",{className:"mr-3",children:l.icon}),l.title]},l.id))}),C.jsx("div",{className:"my-auto mb-2",children:C.jsxs("button",{onClick:o,className:`flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white \r
            p-4 w-full transition duration-300 rounded-md`,children:[C.jsx(Tk,{size:20})," Logout"]})})]}),t&&C.jsx("div",{onClick:()=>i(!1),className:"fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"})]})},Xk=()=>{const{userData:r}=Al(),t=Cs().pathname.split("/").pop(),i=t==="dashboard"||t===""?"Dashboard":t.charAt(0).toUpperCase()+t.slice(1);return C.jsxs("header",{className:"flex flex-col lg:flex-row items-center justify-between px-6 py-1 mx-5 my-3",children:[C.jsx("h2",{className:"text-3xl font-semibold text-red-500",children:i}),C.jsxs("div",{className:"flex items-center gap-6",children:[C.jsxs("h1",{className:"text-xl font-bold mb-5 capitalize",children:["Hello, ",r?.fullname||"User"]}),C.jsxs("figure",{className:"items-center mb-5",children:[C.jsx("img",{src:wE,alt:"user",className:"w-16 h-16 border rounded-full"}),C.jsx("figcaption",{className:"text-center mt-4 uppercase font-semibold text-sm",children:r?.role})]})]})]})},Jk=({children:r})=>C.jsxs("div",{className:"lg:flex h-screen bg-gray-100",children:[C.jsx(Yk,{}),C.jsxs("div",{className:"flex-1 flex flex-col",children:[C.jsx(Xk,{}),C.jsx("main",{className:"flex-1 overflow-y-auto",children:r}),C.jsx(PT,{})]})]}),Zk=()=>{const[r]=gp(wn),[e,t]=W.useState(null),[i,o]=W.useState(!0),[l,h]=W.useState(""),[f,g]=W.useState(""),[y,w]=W.useState(""),E=Ui();W.useEffect(()=>{if(!r){E("/login");return}(async()=>{try{const $=await eh(Lr(Mn,"users",r.uid));if($.exists()){const q=$.data();t(q),h(q.fullname||""),g(q.role||"")}else console.log("User not found");o(!1)}catch($){console.error("Error fetching user data:",$)}})()},[r,E]);const S=async b=>{b.preventDefault();try{const $=l.split(" ").map(q=>q.charAt(0).toUpperCase()+q.slice(1).toLowerCase()).join(" ");await cE(Lr(Mn,"users",r.uid),{fullname:$,role:f}),w("Profile updated successfully 🎉"),setTimeout(()=>w(""),3e3)}catch($){console.error("Error updating profile:",$),w("Failed to update profile ❌")}};return i?C.jsx("p",{className:"text-center mt-20",children:"Loading..."}):C.jsxs("div",{className:"mx-20 bg-white mb-36 p-6 rounded-lg shadow",children:[C.jsx("h2",{className:"text-2xl font-bold text-center mb-4",children:"Settings"}),y&&C.jsx("p",{className:"text-center text-sm text-green-600 mb-4",children:y}),C.jsxs("form",{onSubmit:S,className:"space-y-4",children:[C.jsxs("div",{children:[C.jsx("label",{className:"block text-gray-600 mb-1",children:"Full Name"}),C.jsx("input",{type:"text",value:l,onChange:b=>h(b.target.value),className:"w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",required:!0})]}),C.jsxs("div",{children:[C.jsx("label",{className:"block text-gray-600 mb-1",children:"Role"}),C.jsxs("select",{required:!0,value:f,onChange:b=>g(b.target.value),className:"w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",children:[C.jsx("option",{value:"",children:"Select role"}),C.jsx("option",{value:"Student",children:"Student"}),C.jsx("option",{value:"Admin",children:"Admin"}),C.jsx("option",{value:"Staff",children:"Staff"}),C.jsx("option",{value:"Founder",children:"Founder"})]})]}),C.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition",children:"Save Changes"})]})]})};function ex(){return C.jsx(C.Fragment,{children:C.jsxs(xT,{children:[C.jsx(Pr,{path:"/",element:C.jsx(__,{})}),C.jsx(Pr,{path:"/login",element:C.jsx(__,{})}),C.jsx(Pr,{path:"/signup",element:C.jsx(Lk,{})}),C.jsx(Pr,{path:"/forgot-password",element:C.jsx(Kk,{})}),C.jsxs(Pr,{path:"/dashboard",element:C.jsx(Uk,{children:C.jsx(Jk,{})}),children:[C.jsx(Pr,{index:!0,element:C.jsx(Hk,{})})," ",C.jsx(Pr,{path:"profile",element:C.jsx(Qk,{})}),C.jsx(Pr,{path:"settings",element:C.jsx(Zk,{})})]})]})})}M0.createRoot(document.getElementById("root")).render(C.jsx(W.StrictMode,{children:C.jsx(UT,{basename:"/NEA-School-Portal",children:C.jsx(Mk,{children:C.jsx(ex,{})})})}));
