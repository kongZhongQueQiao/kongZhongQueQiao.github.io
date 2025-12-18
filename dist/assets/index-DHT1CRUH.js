(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function Y_(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var yd={exports:{}},rl={},Sd={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx;function rS(){if(yx)return wt;yx=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),x=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(O,J,Le){this.props=O,this.context=J,this.refs=M,this.updater=Le||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=S.prototype;function L(O,J,Le){this.props=O,this.context=J,this.refs=M,this.updater=Le||y}var C=L.prototype=new v;C.constructor=L,E(C,S.prototype),C.isPureReactComponent=!0;var D=Array.isArray,U=Object.prototype.hasOwnProperty,R={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function k(O,J,Le){var Pe,Oe={},te=null,se=null;if(J!=null)for(Pe in J.ref!==void 0&&(se=J.ref),J.key!==void 0&&(te=""+J.key),J)U.call(J,Pe)&&!I.hasOwnProperty(Pe)&&(Oe[Pe]=J[Pe]);var _e=arguments.length-2;if(_e===1)Oe.children=Le;else if(1<_e){for(var Ie=Array(_e),Ue=0;Ue<_e;Ue++)Ie[Ue]=arguments[Ue+2];Oe.children=Ie}if(O&&O.defaultProps)for(Pe in _e=O.defaultProps,_e)Oe[Pe]===void 0&&(Oe[Pe]=_e[Pe]);return{$$typeof:a,type:O,key:te,ref:se,props:Oe,_owner:R.current}}function w(O,J){return{$$typeof:a,type:O.type,key:J,ref:O.ref,props:O.props,_owner:O._owner}}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function B(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Le){return J[Le]})}var W=/\/+/g;function Y(O,J){return typeof O=="object"&&O!==null&&O.key!=null?B(""+O.key):J.toString(36)}function oe(O,J,Le,Pe,Oe){var te=typeof O;(te==="undefined"||te==="boolean")&&(O=null);var se=!1;if(O===null)se=!0;else switch(te){case"string":case"number":se=!0;break;case"object":switch(O.$$typeof){case a:case e:se=!0}}if(se)return se=O,Oe=Oe(se),O=Pe===""?"."+Y(se,0):Pe,D(Oe)?(Le="",O!=null&&(Le=O.replace(W,"$&/")+"/"),oe(Oe,J,Le,"",function(Ue){return Ue})):Oe!=null&&(A(Oe)&&(Oe=w(Oe,Le+(!Oe.key||se&&se.key===Oe.key?"":(""+Oe.key).replace(W,"$&/")+"/")+O)),J.push(Oe)),1;if(se=0,Pe=Pe===""?".":Pe+":",D(O))for(var _e=0;_e<O.length;_e++){te=O[_e];var Ie=Pe+Y(te,_e);se+=oe(te,J,Le,Ie,Oe)}else if(Ie=_(O),typeof Ie=="function")for(O=Ie.call(O),_e=0;!(te=O.next()).done;)te=te.value,Ie=Pe+Y(te,_e++),se+=oe(te,J,Le,Ie,Oe);else if(te==="object")throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return se}function ie(O,J,Le){if(O==null)return O;var Pe=[],Oe=0;return oe(O,Pe,"","",function(te){return J.call(Le,te,Oe++)}),Pe}function re(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(Le){(O._status===0||O._status===-1)&&(O._status=1,O._result=Le)},function(Le){(O._status===0||O._status===-1)&&(O._status=2,O._result=Le)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var fe={current:null},H={transition:null},de={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:H,ReactCurrentOwner:R};function $(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:ie,forEach:function(O,J,Le){ie(O,function(){J.apply(this,arguments)},Le)},count:function(O){var J=0;return ie(O,function(){J++}),J},toArray:function(O){return ie(O,function(J){return J})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},wt.Component=S,wt.Fragment=t,wt.Profiler=s,wt.PureComponent=L,wt.StrictMode=i,wt.Suspense=d,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,wt.act=$,wt.cloneElement=function(O,J,Le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Pe=E({},O.props),Oe=O.key,te=O.ref,se=O._owner;if(J!=null){if(J.ref!==void 0&&(te=J.ref,se=R.current),J.key!==void 0&&(Oe=""+J.key),O.type&&O.type.defaultProps)var _e=O.type.defaultProps;for(Ie in J)U.call(J,Ie)&&!I.hasOwnProperty(Ie)&&(Pe[Ie]=J[Ie]===void 0&&_e!==void 0?_e[Ie]:J[Ie])}var Ie=arguments.length-2;if(Ie===1)Pe.children=Le;else if(1<Ie){_e=Array(Ie);for(var Ue=0;Ue<Ie;Ue++)_e[Ue]=arguments[Ue+2];Pe.children=_e}return{$$typeof:a,type:O.type,key:Oe,ref:te,props:Pe,_owner:se}},wt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},wt.createElement=k,wt.createFactory=function(O){var J=k.bind(null,O);return J.type=O,J},wt.createRef=function(){return{current:null}},wt.forwardRef=function(O){return{$$typeof:c,render:O}},wt.isValidElement=A,wt.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:re}},wt.memo=function(O,J){return{$$typeof:h,type:O,compare:J===void 0?null:J}},wt.startTransition=function(O){var J=H.transition;H.transition={};try{O()}finally{H.transition=J}},wt.unstable_act=$,wt.useCallback=function(O,J){return fe.current.useCallback(O,J)},wt.useContext=function(O){return fe.current.useContext(O)},wt.useDebugValue=function(){},wt.useDeferredValue=function(O){return fe.current.useDeferredValue(O)},wt.useEffect=function(O,J){return fe.current.useEffect(O,J)},wt.useId=function(){return fe.current.useId()},wt.useImperativeHandle=function(O,J,Le){return fe.current.useImperativeHandle(O,J,Le)},wt.useInsertionEffect=function(O,J){return fe.current.useInsertionEffect(O,J)},wt.useLayoutEffect=function(O,J){return fe.current.useLayoutEffect(O,J)},wt.useMemo=function(O,J){return fe.current.useMemo(O,J)},wt.useReducer=function(O,J,Le){return fe.current.useReducer(O,J,Le)},wt.useRef=function(O){return fe.current.useRef(O)},wt.useState=function(O){return fe.current.useState(O)},wt.useSyncExternalStore=function(O,J,Le){return fe.current.useSyncExternalStore(O,J,Le)},wt.useTransition=function(){return fe.current.useTransition()},wt.version="18.3.1",wt}var Sx;function Sp(){return Sx||(Sx=1,Sd.exports=rS()),Sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx;function sS(){if(Mx)return rl;Mx=1;var a=Sp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,x={},_=null,y=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(y=d.ref);for(p in d)i.call(d,p)&&!o.hasOwnProperty(p)&&(x[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)x[p]===void 0&&(x[p]=d[p]);return{$$typeof:e,type:c,key:_,ref:y,props:x,_owner:s.current}}return rl.Fragment=t,rl.jsx=u,rl.jsxs=u,rl}var Ex;function aS(){return Ex||(Ex=1,yd.exports=sS()),yd.exports}var gt=aS(),At=Sp();const oS=Y_(At);var Bu={},Md={exports:{}},di={},Ed={exports:{}},Td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tx;function lS(){return Tx||(Tx=1,(function(a){function e(H,de){var $=H.length;H.push(de);e:for(;0<$;){var O=$-1>>>1,J=H[O];if(0<s(J,de))H[O]=de,H[$]=J,$=O;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var de=H[0],$=H.pop();if($!==de){H[0]=$;e:for(var O=0,J=H.length,Le=J>>>1;O<Le;){var Pe=2*(O+1)-1,Oe=H[Pe],te=Pe+1,se=H[te];if(0>s(Oe,$))te<J&&0>s(se,Oe)?(H[O]=se,H[te]=$,O=te):(H[O]=Oe,H[Pe]=$,O=Pe);else if(te<J&&0>s(se,$))H[O]=se,H[te]=$,O=te;else break e}}return de}function s(H,de){var $=H.sortIndex-de.sortIndex;return $!==0?$:H.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var u=Date,c=u.now();a.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,x=null,_=3,y=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(H){for(var de=t(h);de!==null;){if(de.callback===null)i(h);else if(de.startTime<=H)i(h),de.sortIndex=de.expirationTime,e(d,de);else break;de=t(h)}}function D(H){if(M=!1,C(H),!E)if(t(d)!==null)E=!0,re(U);else{var de=t(h);de!==null&&fe(D,de.startTime-H)}}function U(H,de){E=!1,M&&(M=!1,v(k),k=-1),y=!0;var $=_;try{for(C(de),x=t(d);x!==null&&(!(x.expirationTime>de)||H&&!B());){var O=x.callback;if(typeof O=="function"){x.callback=null,_=x.priorityLevel;var J=O(x.expirationTime<=de);de=a.unstable_now(),typeof J=="function"?x.callback=J:x===t(d)&&i(d),C(de)}else i(d);x=t(d)}if(x!==null)var Le=!0;else{var Pe=t(h);Pe!==null&&fe(D,Pe.startTime-de),Le=!1}return Le}finally{x=null,_=$,y=!1}}var R=!1,I=null,k=-1,w=5,A=-1;function B(){return!(a.unstable_now()-A<w)}function W(){if(I!==null){var H=a.unstable_now();A=H;var de=!0;try{de=I(!0,H)}finally{de?Y():(R=!1,I=null)}}else R=!1}var Y;if(typeof L=="function")Y=function(){L(W)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ie=oe.port2;oe.port1.onmessage=W,Y=function(){ie.postMessage(null)}}else Y=function(){S(W,0)};function re(H){I=H,R||(R=!0,Y())}function fe(H,de){k=S(function(){H(a.unstable_now())},de)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_continueExecution=function(){E||y||(E=!0,re(U))},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_getFirstCallbackNode=function(){return t(d)},a.unstable_next=function(H){switch(_){case 1:case 2:case 3:var de=3;break;default:de=_}var $=_;_=de;try{return H()}finally{_=$}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(H,de){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var $=_;_=H;try{return de()}finally{_=$}},a.unstable_scheduleCallback=function(H,de,$){var O=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?O+$:O):$=O,H){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=$+J,H={id:p++,callback:de,priorityLevel:H,startTime:$,expirationTime:J,sortIndex:-1},$>O?(H.sortIndex=$,e(h,H),t(d)===null&&H===t(h)&&(M?(v(k),k=-1):M=!0,fe(D,$-O))):(H.sortIndex=J,e(d,H),E||y||(E=!0,re(U))),H},a.unstable_shouldYield=B,a.unstable_wrapCallback=function(H){var de=_;return function(){var $=_;_=de;try{return H.apply(this,arguments)}finally{_=$}}}})(Td)),Td}var wx;function uS(){return wx||(wx=1,Ed.exports=lS()),Ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bx;function cS(){if(bx)return di;bx=1;var a=Sp(),e=uS();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function o(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},x={};function _(n){return d.call(x,n)?!0:d.call(p,n)?!1:h.test(n)?x[n]=!0:(p[n]=!0,!1)}function y(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,f){if(r===null||typeof r>"u"||y(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,f,m,g,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(v,L);S[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(v,L);S[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(v,L);S[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,r,l,f){var m=S.hasOwnProperty(r)?S[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,m,f)&&(l=null),f||m===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,f=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var D=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),R=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),H=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,O;function J(n){if(O===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var Le=!1;function Pe(n,r){if(!n||Le)return"";Le=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(le){var f=le}Reflect.construct(n,[],r)}else{try{r.call()}catch(le){f=le}n.call(r.prototype)}else{try{throw Error()}catch(le){f=le}n()}}catch(le){if(le&&f&&typeof le.stack=="string"){for(var m=le.stack.split(`
`),g=f.stack.split(`
`),T=m.length-1,F=g.length-1;1<=T&&0<=F&&m[T]!==g[F];)F--;for(;1<=T&&0<=F;T--,F--)if(m[T]!==g[F]){if(T!==1||F!==1)do if(T--,F--,0>F||m[T]!==g[F]){var G=`
`+m[T].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=T&&0<=F);break}}}finally{Le=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?J(n):""}function Oe(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Pe(n.type,!1),n;case 11:return n=Pe(n.type.render,!1),n;case 1:return n=Pe(n.type,!0),n;default:return""}}function te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case R:return"Portal";case w:return"Profiler";case k:return"StrictMode";case Y:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case W:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return r=n.displayName||null,r!==null?r:te(n.type)||"Memo";case re:r=n._payload,n=n._init;try{return te(n(r))}catch{}}return null}function se(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(r);case 8:return r===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ue(n){var r=Ie(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,g=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(T){f=""+T,g.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ut(n){n._valueTracker||(n._valueTracker=Ue(n))}function Vt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Ie(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Dt(n,r){var l=r.checked;return $({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function z(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=_e(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function xt(n,r){r=r.checked,r!=null&&C(n,"checked",r,!1)}function pt(n,r){xt(n,r);var l=_e(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Ge(n,r.type,l):r.hasOwnProperty("defaultValue")&&Ge(n,r.type,_e(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Mt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Ge(n,r,l){(r!=="number"||ct(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Pt=Array.isArray;function ke(n,r,l,f){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&f&&(n[l].defaultSelected=!0)}else{for(l=""+_e(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,f&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function et(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Pt(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:_e(l)}}function b(n,r){var l=_e(r.value),f=_e(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function K(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?he(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,We=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ae(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){Be.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),ze[r]=ze[n]})});function me(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||ze.hasOwnProperty(n)&&ze[n]?(""+r).trim():r+"px"}function Me(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=me(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,m):n[l]=m}}var Ke=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(n,r){if(r){if(Ke[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Re(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qe=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,Ee=null,Te=null;function ge(n){if(n=Ho(n)){if(typeof be!="function")throw Error(t(280));var r=n.stateNode;r&&(r=tu(r),be(n.stateNode,n.type,r))}}function ne(n){Ee?Te?Te.push(n):Te=[n]:Ee=n}function pe(){if(Ee){var n=Ee,r=Te;if(Te=Ee=null,ge(n),r)for(n=0;n<r.length;n++)ge(r[n])}}function De(n,r){return n(r)}function Et(){}var _t=!1;function nn(n,r,l){if(_t)return n(r,l);_t=!0;try{return De(n,r,l)}finally{_t=!1,(Ee!==null||Te!==null)&&(Et(),pe())}}function Kt(n,r){var l=n.stateNode;if(l===null)return null;var f=tu(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Li=!1;if(c)try{var si={};Object.defineProperty(si,"passive",{get:function(){Li=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{Li=!1}function qr(n,r,l,f,m,g,T,F,G){var le=Array.prototype.slice.call(arguments,3);try{r.apply(l,le)}catch(ye){this.onError(ye)}}var tt=!1,ht=null,Ft=!1,Gt=null,$n={onError:function(n){tt=!0,ht=n}};function Kn(n,r,l,f,m,g,T,F,G){tt=!1,ht=null,qr.apply($n,arguments)}function In(n,r,l,f,m,g,T,F,G){if(Kn.apply(this,arguments),tt){if(tt){var le=ht;tt=!1,ht=null}else throw Error(t(198));Ft||(Ft=!0,Gt=le)}}function Tt(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Zt(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function qt(n){if(Tt(n)!==n)throw Error(t(188))}function Zn(n){var r=n.alternate;if(!r){if(r=Tt(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var m=l.return;if(m===null)break;var g=m.alternate;if(g===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===g.child){for(g=m.child;g;){if(g===l)return qt(m),n;if(g===f)return qt(m),r;g=g.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=g;else{for(var T=!1,F=m.child;F;){if(F===l){T=!0,l=m,f=g;break}if(F===f){T=!0,f=m,l=g;break}F=F.sibling}if(!T){for(F=g.child;F;){if(F===l){T=!0,l=g,f=m;break}if(F===f){T=!0,f=g,l=m;break}F=F.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function bn(n){return n=Zn(n),n!==null?An(n):null}function An(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=An(n);if(r!==null)return r;n=n.sibling}return null}var kl=e.unstable_scheduleCallback,zl=e.unstable_cancelCallback,P=e.unstable_shouldYield,q=e.unstable_requestPaint,Q=e.unstable_now,ue=e.unstable_getCurrentPriorityLevel,j=e.unstable_ImmediatePriority,Ce=e.unstable_UserBlockingPriority,Ne=e.unstable_NormalPriority,je=e.unstable_LowPriority,He=e.unstable_IdlePriority,st=null,Je=null;function rt(n){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(st,n,void 0,(n.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Jt,Ot=Math.log,Qt=Math.LN2;function Jt(n){return n>>>=0,n===0?32:31-(Ot(n)/Qt|0)|0}var Ut=64,nt=4194304;function kt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bt(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,g=n.pingedLanes,T=l&268435455;if(T!==0){var F=T&~m;F!==0?f=kt(F):(g&=T,g!==0&&(f=kt(g)))}else T=l&~m,T!==0?f=kt(T):g!==0&&(f=kt(g));if(f===0)return 0;if(r!==0&&r!==f&&(r&m)===0&&(m=f&-f,g=r&-r,m>=g||m===16&&(g&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-ft(r),m=1<<l,f|=n[l],r&=~m;return f}function Qn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jr(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,m=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-ft(g),F=1<<T,G=m[T];G===-1?((F&l)===0||(F&f)!==0)&&(m[T]=Qn(F,r)):G<=r&&(n.expiredLanes|=F),g&=~F}}function Nn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $r(){var n=Ut;return Ut<<=1,(Ut&4194240)===0&&(Ut=64),n}function Ht(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function mn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ft(r),n[r]=l}function ai(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-ft(l),g=1<<m;r[m]=0,f[m]=-1,n[m]=-1,l&=~g}}function yn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-ft(l),m=1<<f;m&r|n[f]&r&&(n[f]|=r),l&=~m}}var mt=0;function xa(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var or,Hc,em,tm,nm,Wc=!1,Bl=[],Kr=null,Zr=null,Qr=null,Ao=new Map,Co=new Map,Jr=[],bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function im(n,r){switch(n){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":Ao.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(r.pointerId)}}function Ro(n,r,l,f,m,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:g,targetContainers:[m]},r!==null&&(r=Ho(r),r!==null&&Hc(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function Av(n,r,l,f,m){switch(r){case"focusin":return Kr=Ro(Kr,n,r,l,f,m),!0;case"dragenter":return Zr=Ro(Zr,n,r,l,f,m),!0;case"mouseover":return Qr=Ro(Qr,n,r,l,f,m),!0;case"pointerover":var g=m.pointerId;return Ao.set(g,Ro(Ao.get(g)||null,n,r,l,f,m)),!0;case"gotpointercapture":return g=m.pointerId,Co.set(g,Ro(Co.get(g)||null,n,r,l,f,m)),!0}return!1}function rm(n){var r=Is(n.target);if(r!==null){var l=Tt(r);if(l!==null){if(r=l.tag,r===13){if(r=Zt(l),r!==null){n.blockedOn=r,nm(n.priority,function(){em(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Vl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Yc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);Qe=f,l.target.dispatchEvent(f),Qe=null}else return r=Ho(l),r!==null&&Hc(r),n.blockedOn=l,!1;r.shift()}return!0}function sm(n,r,l){Vl(n)&&l.delete(r)}function Cv(){Wc=!1,Kr!==null&&Vl(Kr)&&(Kr=null),Zr!==null&&Vl(Zr)&&(Zr=null),Qr!==null&&Vl(Qr)&&(Qr=null),Ao.forEach(sm),Co.forEach(sm)}function Po(n,r){n.blockedOn===r&&(n.blockedOn=null,Wc||(Wc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cv)))}function Do(n){function r(m){return Po(m,n)}if(0<Bl.length){Po(Bl[0],n);for(var l=1;l<Bl.length;l++){var f=Bl[l];f.blockedOn===n&&(f.blockedOn=null)}}for(Kr!==null&&Po(Kr,n),Zr!==null&&Po(Zr,n),Qr!==null&&Po(Qr,n),Ao.forEach(r),Co.forEach(r),l=0;l<Jr.length;l++)f=Jr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<Jr.length&&(l=Jr[0],l.blockedOn===null);)rm(l),l.blockedOn===null&&Jr.shift()}var _a=D.ReactCurrentBatchConfig,Gl=!0;function Rv(n,r,l,f){var m=mt,g=_a.transition;_a.transition=null;try{mt=1,Xc(n,r,l,f)}finally{mt=m,_a.transition=g}}function Pv(n,r,l,f){var m=mt,g=_a.transition;_a.transition=null;try{mt=4,Xc(n,r,l,f)}finally{mt=m,_a.transition=g}}function Xc(n,r,l,f){if(Gl){var m=Yc(n,r,l,f);if(m===null)cf(n,r,f,Hl,l),im(n,f);else if(Av(m,n,r,l,f))f.stopPropagation();else if(im(n,f),r&4&&-1<bv.indexOf(n)){for(;m!==null;){var g=Ho(m);if(g!==null&&or(g),g=Yc(n,r,l,f),g===null&&cf(n,r,f,Hl,l),g===m)break;m=g}m!==null&&f.stopPropagation()}else cf(n,r,f,null,l)}}var Hl=null;function Yc(n,r,l,f){if(Hl=null,n=V(f),n=Is(n),n!==null)if(r=Tt(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Zt(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Hl=n,null}function am(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ue()){case j:return 1;case Ce:return 4;case Ne:case je:return 16;case He:return 536870912;default:return 16}default:return 16}}var es=null,qc=null,Wl=null;function om(){if(Wl)return Wl;var n,r=qc,l=r.length,f,m="value"in es?es.value:es.textContent,g=m.length;for(n=0;n<l&&r[n]===m[n];n++);var T=l-n;for(f=1;f<=T&&r[l-f]===m[g-f];f++);return Wl=m.slice(n,1<f?1-f:void 0)}function Xl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Yl(){return!0}function lm(){return!1}function vi(n){function r(l,f,m,g,T){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(l=n[F],this[F]=l?l(g):g[F]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Yl:lm,this.isPropagationStopped=lm,this}return $(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),r}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jc=vi(ga),Lo=$({},ga,{view:0,detail:0}),Dv=vi(Lo),$c,Kc,Uo,ql=$({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Uo&&(Uo&&n.type==="mousemove"?($c=n.screenX-Uo.screenX,Kc=n.screenY-Uo.screenY):Kc=$c=0,Uo=n),$c)},movementY:function(n){return"movementY"in n?n.movementY:Kc}}),um=vi(ql),Lv=$({},ql,{dataTransfer:0}),Uv=vi(Lv),Iv=$({},Lo,{relatedTarget:0}),Zc=vi(Iv),Nv=$({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=vi(Nv),Ov=$({},ga,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),kv=vi(Ov),zv=$({},ga,{data:0}),cm=vi(zv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Gv[n])?!!r[n]:!1}function Qc(){return Hv}var Wv=$({},Lo,{key:function(n){if(n.key){var r=Bv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Xl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Vv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(n){return n.type==="keypress"?Xl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Xv=vi(Wv),Yv=$({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fm=vi(Yv),qv=$({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),jv=vi(qv),$v=$({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=vi($v),Zv=$({},ql,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=vi(Zv),Jv=[9,13,27,32],Jc=c&&"CompositionEvent"in window,Io=null;c&&"documentMode"in document&&(Io=document.documentMode);var ey=c&&"TextEvent"in window&&!Io,dm=c&&(!Jc||Io&&8<Io&&11>=Io),hm=" ",pm=!1;function mm(n,r){switch(n){case"keyup":return Jv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var va=!1;function ty(n,r){switch(n){case"compositionend":return xm(r);case"keypress":return r.which!==32?null:(pm=!0,hm);case"textInput":return n=r.data,n===hm&&pm?null:n;default:return null}}function ny(n,r){if(va)return n==="compositionend"||!Jc&&mm(n,r)?(n=om(),Wl=qc=es=null,va=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return dm&&r.locale!=="ko"?null:r.data;default:return null}}var iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _m(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!iy[n.type]:r==="textarea"}function gm(n,r,l,f){ne(f),r=Ql(r,"onChange"),0<r.length&&(l=new jc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var No=null,Fo=null;function ry(n){Fm(n,0)}function jl(n){var r=Ta(n);if(Vt(r))return n}function sy(n,r){if(n==="change")return r}var vm=!1;if(c){var ef;if(c){var tf="oninput"in document;if(!tf){var ym=document.createElement("div");ym.setAttribute("oninput","return;"),tf=typeof ym.oninput=="function"}ef=tf}else ef=!1;vm=ef&&(!document.documentMode||9<document.documentMode)}function Sm(){No&&(No.detachEvent("onpropertychange",Mm),Fo=No=null)}function Mm(n){if(n.propertyName==="value"&&jl(Fo)){var r=[];gm(r,Fo,n,V(n)),nn(ry,r)}}function ay(n,r,l){n==="focusin"?(Sm(),No=r,Fo=l,No.attachEvent("onpropertychange",Mm)):n==="focusout"&&Sm()}function oy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return jl(Fo)}function ly(n,r){if(n==="click")return jl(r)}function uy(n,r){if(n==="input"||n==="change")return jl(r)}function cy(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var $i=typeof Object.is=="function"?Object.is:cy;function Oo(n,r){if($i(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(r,m)||!$i(n[m],r[m]))return!1}return!0}function Em(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Tm(n,r){var l=Em(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Em(l)}}function wm(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?wm(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function bm(){for(var n=window,r=ct();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=ct(n.document)}return r}function nf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function fy(n){var r=bm(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&wm(l.ownerDocument.documentElement,l)){if(f!==null&&nf(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,g=Math.min(f.start,m);f=f.end===void 0?g:Math.min(f.end,m),!n.extend&&g>f&&(m=f,f=g,g=m),m=Tm(l,g);var T=Tm(l,f);m&&T&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),g>f?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var dy=c&&"documentMode"in document&&11>=document.documentMode,ya=null,rf=null,ko=null,sf=!1;function Am(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;sf||ya==null||ya!==ct(f)||(f=ya,"selectionStart"in f&&nf(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ko&&Oo(ko,f)||(ko=f,f=Ql(rf,"onSelect"),0<f.length&&(r=new jc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=ya)))}function $l(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Sa={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionend:$l("Transition","TransitionEnd")},af={},Cm={};c&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete Sa.animationend.animation,delete Sa.animationiteration.animation,delete Sa.animationstart.animation),"TransitionEvent"in window||delete Sa.transitionend.transition);function Kl(n){if(af[n])return af[n];if(!Sa[n])return n;var r=Sa[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Cm)return af[n]=r[l];return n}var Rm=Kl("animationend"),Pm=Kl("animationiteration"),Dm=Kl("animationstart"),Lm=Kl("transitionend"),Um=new Map,Im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ts(n,r){Um.set(n,r),o(r,[n])}for(var of=0;of<Im.length;of++){var lf=Im[of],hy=lf.toLowerCase(),py=lf[0].toUpperCase()+lf.slice(1);ts(hy,"on"+py)}ts(Rm,"onAnimationEnd"),ts(Pm,"onAnimationIteration"),ts(Dm,"onAnimationStart"),ts("dblclick","onDoubleClick"),ts("focusin","onFocus"),ts("focusout","onBlur"),ts(Lm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),my=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function Nm(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,In(f,r,void 0,n),n.currentTarget=null}function Fm(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],m=f.event;f=f.listeners;e:{var g=void 0;if(r)for(var T=f.length-1;0<=T;T--){var F=f[T],G=F.instance,le=F.currentTarget;if(F=F.listener,G!==g&&m.isPropagationStopped())break e;Nm(m,F,le),g=G}else for(T=0;T<f.length;T++){if(F=f[T],G=F.instance,le=F.currentTarget,F=F.listener,G!==g&&m.isPropagationStopped())break e;Nm(m,F,le),g=G}}}if(Ft)throw n=Gt,Ft=!1,Gt=null,n}function jt(n,r){var l=r[xf];l===void 0&&(l=r[xf]=new Set);var f=n+"__bubble";l.has(f)||(Om(r,n,2,!1),l.add(f))}function uf(n,r,l){var f=0;r&&(f|=4),Om(l,n,f,r)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Bo(n){if(!n[Zl]){n[Zl]=!0,i.forEach(function(l){l!=="selectionchange"&&(my.has(l)||uf(l,!1,n),uf(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Zl]||(r[Zl]=!0,uf("selectionchange",!1,r))}}function Om(n,r,l,f){switch(am(r)){case 1:var m=Rv;break;case 4:m=Pv;break;default:m=Xc}l=m.bind(null,r,l,n),m=void 0,!Li||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function cf(n,r,l,f,m){var g=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var F=f.stateNode.containerInfo;if(F===m||F.nodeType===8&&F.parentNode===m)break;if(T===4)for(T=f.return;T!==null;){var G=T.tag;if((G===3||G===4)&&(G=T.stateNode.containerInfo,G===m||G.nodeType===8&&G.parentNode===m))return;T=T.return}for(;F!==null;){if(T=Is(F),T===null)return;if(G=T.tag,G===5||G===6){f=g=T;continue e}F=F.parentNode}}f=f.return}nn(function(){var le=g,ye=V(l),Se=[];e:{var ve=Um.get(n);if(ve!==void 0){var Ve=jc,qe=n;switch(n){case"keypress":if(Xl(l)===0)break e;case"keydown":case"keyup":Ve=Xv;break;case"focusin":qe="focus",Ve=Zc;break;case"focusout":qe="blur",Ve=Zc;break;case"beforeblur":case"afterblur":Ve=Zc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=jv;break;case Rm:case Pm:case Dm:Ve=Fv;break;case Lm:Ve=Kv;break;case"scroll":Ve=Dv;break;case"wheel":Ve=Qv;break;case"copy":case"cut":case"paste":Ve=kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=fm}var $e=(r&4)!==0,hn=!$e&&n==="scroll",Z=$e?ve!==null?ve+"Capture":null:ve;$e=[];for(var X=le,ee;X!==null;){ee=X;var we=ee.stateNode;if(ee.tag===5&&we!==null&&(ee=we,Z!==null&&(we=Kt(X,Z),we!=null&&$e.push(Vo(X,we,ee)))),hn)break;X=X.return}0<$e.length&&(ve=new Ve(ve,qe,null,l,ye),Se.push({event:ve,listeners:$e}))}}if((r&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",ve&&l!==Qe&&(qe=l.relatedTarget||l.fromElement)&&(Is(qe)||qe[Tr]))break e;if((Ve||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ve?(qe=l.relatedTarget||l.toElement,Ve=le,qe=qe?Is(qe):null,qe!==null&&(hn=Tt(qe),qe!==hn||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(Ve=null,qe=le),Ve!==qe)){if($e=um,we="onMouseLeave",Z="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&($e=fm,we="onPointerLeave",Z="onPointerEnter",X="pointer"),hn=Ve==null?ve:Ta(Ve),ee=qe==null?ve:Ta(qe),ve=new $e(we,X+"leave",Ve,l,ye),ve.target=hn,ve.relatedTarget=ee,we=null,Is(ye)===le&&($e=new $e(Z,X+"enter",qe,l,ye),$e.target=ee,$e.relatedTarget=hn,we=$e),hn=we,Ve&&qe)t:{for($e=Ve,Z=qe,X=0,ee=$e;ee;ee=Ma(ee))X++;for(ee=0,we=Z;we;we=Ma(we))ee++;for(;0<X-ee;)$e=Ma($e),X--;for(;0<ee-X;)Z=Ma(Z),ee--;for(;X--;){if($e===Z||Z!==null&&$e===Z.alternate)break t;$e=Ma($e),Z=Ma(Z)}$e=null}else $e=null;Ve!==null&&km(Se,ve,Ve,$e,!1),qe!==null&&hn!==null&&km(Se,hn,qe,$e,!0)}}e:{if(ve=le?Ta(le):window,Ve=ve.nodeName&&ve.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&ve.type==="file")var Ze=sy;else if(_m(ve))if(vm)Ze=uy;else{Ze=oy;var at=ay}else(Ve=ve.nodeName)&&Ve.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ze=ly);if(Ze&&(Ze=Ze(n,le))){gm(Se,Ze,l,ye);break e}at&&at(n,ve,le),n==="focusout"&&(at=ve._wrapperState)&&at.controlled&&ve.type==="number"&&Ge(ve,"number",ve.value)}switch(at=le?Ta(le):window,n){case"focusin":(_m(at)||at.contentEditable==="true")&&(ya=at,rf=le,ko=null);break;case"focusout":ko=rf=ya=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Am(Se,l,ye);break;case"selectionchange":if(dy)break;case"keydown":case"keyup":Am(Se,l,ye)}var ot;if(Jc)e:{switch(n){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else va?mm(n,l)&&(dt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(dt="onCompositionStart");dt&&(dm&&l.locale!=="ko"&&(va||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&va&&(ot=om()):(es=ye,qc="value"in es?es.value:es.textContent,va=!0)),at=Ql(le,dt),0<at.length&&(dt=new cm(dt,n,null,l,ye),Se.push({event:dt,listeners:at}),ot?dt.data=ot:(ot=xm(l),ot!==null&&(dt.data=ot)))),(ot=ey?ty(n,l):ny(n,l))&&(le=Ql(le,"onBeforeInput"),0<le.length&&(ye=new cm("onBeforeInput","beforeinput",null,l,ye),Se.push({event:ye,listeners:le}),ye.data=ot))}Fm(Se,r)})}function Vo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Ql(n,r){for(var l=r+"Capture",f=[];n!==null;){var m=n,g=m.stateNode;m.tag===5&&g!==null&&(m=g,g=Kt(n,l),g!=null&&f.unshift(Vo(n,g,m)),g=Kt(n,r),g!=null&&f.push(Vo(n,g,m))),n=n.return}return f}function Ma(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function km(n,r,l,f,m){for(var g=r._reactName,T=[];l!==null&&l!==f;){var F=l,G=F.alternate,le=F.stateNode;if(G!==null&&G===f)break;F.tag===5&&le!==null&&(F=le,m?(G=Kt(l,g),G!=null&&T.unshift(Vo(l,G,F))):m||(G=Kt(l,g),G!=null&&T.push(Vo(l,G,F)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var xy=/\r\n?/g,_y=/\u0000|\uFFFD/g;function zm(n){return(typeof n=="string"?n:""+n).replace(xy,`
`).replace(_y,"")}function Jl(n,r,l){if(r=zm(r),zm(n)!==r&&l)throw Error(t(425))}function eu(){}var ff=null,df=null;function hf(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var pf=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(n){return Bm.resolve(null).then(n).catch(yy)}:pf;function yy(n){setTimeout(function(){throw n})}function mf(n,r){var l=r,f=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){n.removeChild(m),Do(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Do(r)}function ns(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Vm(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ea=Math.random().toString(36).slice(2),lr="__reactFiber$"+Ea,Go="__reactProps$"+Ea,Tr="__reactContainer$"+Ea,xf="__reactEvents$"+Ea,Sy="__reactListeners$"+Ea,My="__reactHandles$"+Ea;function Is(n){var r=n[lr];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Tr]||l[lr]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Vm(n);n!==null;){if(l=n[lr])return l;n=Vm(n)}return r}n=l,l=n.parentNode}return null}function Ho(n){return n=n[lr]||n[Tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ta(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function tu(n){return n[Go]||null}var _f=[],wa=-1;function is(n){return{current:n}}function $t(n){0>wa||(n.current=_f[wa],_f[wa]=null,wa--)}function Yt(n,r){wa++,_f[wa]=n.current,n.current=r}var rs={},zn=is(rs),oi=is(!1),Ns=rs;function ba(n,r){var l=n.type.contextTypes;if(!l)return rs;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},g;for(g in l)m[g]=r[g];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function li(n){return n=n.childContextTypes,n!=null}function nu(){$t(oi),$t(zn)}function Gm(n,r,l){if(zn.current!==rs)throw Error(t(168));Yt(zn,r),Yt(oi,l)}function Hm(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,se(n)||"Unknown",m));return $({},l,f)}function iu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||rs,Ns=zn.current,Yt(zn,n),Yt(oi,oi.current),!0}function Wm(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=Hm(n,r,Ns),f.__reactInternalMemoizedMergedChildContext=n,$t(oi),$t(zn),Yt(zn,n)):$t(oi),Yt(oi,l)}var wr=null,ru=!1,gf=!1;function Xm(n){wr===null?wr=[n]:wr.push(n)}function Ey(n){ru=!0,Xm(n)}function ss(){if(!gf&&wr!==null){gf=!0;var n=0,r=mt;try{var l=wr;for(mt=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}wr=null,ru=!1}catch(m){throw wr!==null&&(wr=wr.slice(n+1)),kl(j,ss),m}finally{mt=r,gf=!1}}return null}var Aa=[],Ca=0,su=null,au=0,Ui=[],Ii=0,Fs=null,br=1,Ar="";function Os(n,r){Aa[Ca++]=au,Aa[Ca++]=su,su=n,au=r}function Ym(n,r,l){Ui[Ii++]=br,Ui[Ii++]=Ar,Ui[Ii++]=Fs,Fs=n;var f=br;n=Ar;var m=32-ft(f)-1;f&=~(1<<m),l+=1;var g=32-ft(r)+m;if(30<g){var T=m-m%5;g=(f&(1<<T)-1).toString(32),f>>=T,m-=T,br=1<<32-ft(r)+m|l<<m|f,Ar=g+n}else br=1<<g|l<<m|f,Ar=n}function vf(n){n.return!==null&&(Os(n,1),Ym(n,1,0))}function yf(n){for(;n===su;)su=Aa[--Ca],Aa[Ca]=null,au=Aa[--Ca],Aa[Ca]=null;for(;n===Fs;)Fs=Ui[--Ii],Ui[Ii]=null,Ar=Ui[--Ii],Ui[Ii]=null,br=Ui[--Ii],Ui[Ii]=null}var yi=null,Si=null,en=!1,Ki=null;function qm(n,r){var l=ki(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function jm(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,yi=n,Si=ns(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,yi=n,Si=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Fs!==null?{id:br,overflow:Ar}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ki(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,yi=n,Si=null,!0):!1;default:return!1}}function Sf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Mf(n){if(en){var r=Si;if(r){var l=r;if(!jm(n,r)){if(Sf(n))throw Error(t(418));r=ns(l.nextSibling);var f=yi;r&&jm(n,r)?qm(f,l):(n.flags=n.flags&-4097|2,en=!1,yi=n)}}else{if(Sf(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,yi=n}}}function $m(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;yi=n}function ou(n){if(n!==yi)return!1;if(!en)return $m(n),en=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!hf(n.type,n.memoizedProps)),r&&(r=Si)){if(Sf(n))throw Km(),Error(t(418));for(;r;)qm(n,r),r=ns(r.nextSibling)}if($m(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Si=ns(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Si=null}}else Si=yi?ns(n.stateNode.nextSibling):null;return!0}function Km(){for(var n=Si;n;)n=ns(n.nextSibling)}function Ra(){Si=yi=null,en=!1}function Ef(n){Ki===null?Ki=[n]:Ki.push(n)}var Ty=D.ReactCurrentBatchConfig;function Wo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var m=f,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(T){var F=m.refs;T===null?delete F[g]:F[g]=T},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function lu(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Zm(n){var r=n._init;return r(n._payload)}function Qm(n){function r(Z,X){if(n){var ee=Z.deletions;ee===null?(Z.deletions=[X],Z.flags|=16):ee.push(X)}}function l(Z,X){if(!n)return null;for(;X!==null;)r(Z,X),X=X.sibling;return null}function f(Z,X){for(Z=new Map;X!==null;)X.key!==null?Z.set(X.key,X):Z.set(X.index,X),X=X.sibling;return Z}function m(Z,X){return Z=hs(Z,X),Z.index=0,Z.sibling=null,Z}function g(Z,X,ee){return Z.index=ee,n?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<X?(Z.flags|=2,X):ee):(Z.flags|=2,X)):(Z.flags|=1048576,X)}function T(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function F(Z,X,ee,we){return X===null||X.tag!==6?(X=pd(ee,Z.mode,we),X.return=Z,X):(X=m(X,ee),X.return=Z,X)}function G(Z,X,ee,we){var Ze=ee.type;return Ze===I?ye(Z,X,ee.props.children,we,ee.key):X!==null&&(X.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===re&&Zm(Ze)===X.type)?(we=m(X,ee.props),we.ref=Wo(Z,X,ee),we.return=Z,we):(we=Lu(ee.type,ee.key,ee.props,null,Z.mode,we),we.ref=Wo(Z,X,ee),we.return=Z,we)}function le(Z,X,ee,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=md(ee,Z.mode,we),X.return=Z,X):(X=m(X,ee.children||[]),X.return=Z,X)}function ye(Z,X,ee,we,Ze){return X===null||X.tag!==7?(X=Xs(ee,Z.mode,we,Ze),X.return=Z,X):(X=m(X,ee),X.return=Z,X)}function Se(Z,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number")return X=pd(""+X,Z.mode,ee),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case U:return ee=Lu(X.type,X.key,X.props,null,Z.mode,ee),ee.ref=Wo(Z,null,X),ee.return=Z,ee;case R:return X=md(X,Z.mode,ee),X.return=Z,X;case re:var we=X._init;return Se(Z,we(X._payload),ee)}if(Pt(X)||de(X))return X=Xs(X,Z.mode,ee,null),X.return=Z,X;lu(Z,X)}return null}function ve(Z,X,ee,we){var Ze=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ze!==null?null:F(Z,X,""+ee,we);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case U:return ee.key===Ze?G(Z,X,ee,we):null;case R:return ee.key===Ze?le(Z,X,ee,we):null;case re:return Ze=ee._init,ve(Z,X,Ze(ee._payload),we)}if(Pt(ee)||de(ee))return Ze!==null?null:ye(Z,X,ee,we,null);lu(Z,ee)}return null}function Ve(Z,X,ee,we,Ze){if(typeof we=="string"&&we!==""||typeof we=="number")return Z=Z.get(ee)||null,F(X,Z,""+we,Ze);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case U:return Z=Z.get(we.key===null?ee:we.key)||null,G(X,Z,we,Ze);case R:return Z=Z.get(we.key===null?ee:we.key)||null,le(X,Z,we,Ze);case re:var at=we._init;return Ve(Z,X,ee,at(we._payload),Ze)}if(Pt(we)||de(we))return Z=Z.get(ee)||null,ye(X,Z,we,Ze,null);lu(X,we)}return null}function qe(Z,X,ee,we){for(var Ze=null,at=null,ot=X,dt=X=0,Pn=null;ot!==null&&dt<ee.length;dt++){ot.index>dt?(Pn=ot,ot=null):Pn=ot.sibling;var It=ve(Z,ot,ee[dt],we);if(It===null){ot===null&&(ot=Pn);break}n&&ot&&It.alternate===null&&r(Z,ot),X=g(It,X,dt),at===null?Ze=It:at.sibling=It,at=It,ot=Pn}if(dt===ee.length)return l(Z,ot),en&&Os(Z,dt),Ze;if(ot===null){for(;dt<ee.length;dt++)ot=Se(Z,ee[dt],we),ot!==null&&(X=g(ot,X,dt),at===null?Ze=ot:at.sibling=ot,at=ot);return en&&Os(Z,dt),Ze}for(ot=f(Z,ot);dt<ee.length;dt++)Pn=Ve(ot,Z,dt,ee[dt],we),Pn!==null&&(n&&Pn.alternate!==null&&ot.delete(Pn.key===null?dt:Pn.key),X=g(Pn,X,dt),at===null?Ze=Pn:at.sibling=Pn,at=Pn);return n&&ot.forEach(function(ps){return r(Z,ps)}),en&&Os(Z,dt),Ze}function $e(Z,X,ee,we){var Ze=de(ee);if(typeof Ze!="function")throw Error(t(150));if(ee=Ze.call(ee),ee==null)throw Error(t(151));for(var at=Ze=null,ot=X,dt=X=0,Pn=null,It=ee.next();ot!==null&&!It.done;dt++,It=ee.next()){ot.index>dt?(Pn=ot,ot=null):Pn=ot.sibling;var ps=ve(Z,ot,It.value,we);if(ps===null){ot===null&&(ot=Pn);break}n&&ot&&ps.alternate===null&&r(Z,ot),X=g(ps,X,dt),at===null?Ze=ps:at.sibling=ps,at=ps,ot=Pn}if(It.done)return l(Z,ot),en&&Os(Z,dt),Ze;if(ot===null){for(;!It.done;dt++,It=ee.next())It=Se(Z,It.value,we),It!==null&&(X=g(It,X,dt),at===null?Ze=It:at.sibling=It,at=It);return en&&Os(Z,dt),Ze}for(ot=f(Z,ot);!It.done;dt++,It=ee.next())It=Ve(ot,Z,dt,It.value,we),It!==null&&(n&&It.alternate!==null&&ot.delete(It.key===null?dt:It.key),X=g(It,X,dt),at===null?Ze=It:at.sibling=It,at=It);return n&&ot.forEach(function(iS){return r(Z,iS)}),en&&Os(Z,dt),Ze}function hn(Z,X,ee,we){if(typeof ee=="object"&&ee!==null&&ee.type===I&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case U:e:{for(var Ze=ee.key,at=X;at!==null;){if(at.key===Ze){if(Ze=ee.type,Ze===I){if(at.tag===7){l(Z,at.sibling),X=m(at,ee.props.children),X.return=Z,Z=X;break e}}else if(at.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===re&&Zm(Ze)===at.type){l(Z,at.sibling),X=m(at,ee.props),X.ref=Wo(Z,at,ee),X.return=Z,Z=X;break e}l(Z,at);break}else r(Z,at);at=at.sibling}ee.type===I?(X=Xs(ee.props.children,Z.mode,we,ee.key),X.return=Z,Z=X):(we=Lu(ee.type,ee.key,ee.props,null,Z.mode,we),we.ref=Wo(Z,X,ee),we.return=Z,Z=we)}return T(Z);case R:e:{for(at=ee.key;X!==null;){if(X.key===at)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){l(Z,X.sibling),X=m(X,ee.children||[]),X.return=Z,Z=X;break e}else{l(Z,X);break}else r(Z,X);X=X.sibling}X=md(ee,Z.mode,we),X.return=Z,Z=X}return T(Z);case re:return at=ee._init,hn(Z,X,at(ee._payload),we)}if(Pt(ee))return qe(Z,X,ee,we);if(de(ee))return $e(Z,X,ee,we);lu(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,X!==null&&X.tag===6?(l(Z,X.sibling),X=m(X,ee),X.return=Z,Z=X):(l(Z,X),X=pd(ee,Z.mode,we),X.return=Z,Z=X),T(Z)):l(Z,X)}return hn}var Pa=Qm(!0),Jm=Qm(!1),uu=is(null),cu=null,Da=null,Tf=null;function wf(){Tf=Da=cu=null}function bf(n){var r=uu.current;$t(uu),n._currentValue=r}function Af(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function La(n,r){cu=n,Tf=Da=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(ui=!0),n.firstContext=null)}function Ni(n){var r=n._currentValue;if(Tf!==n)if(n={context:n,memoizedValue:r,next:null},Da===null){if(cu===null)throw Error(t(308));Da=n,cu.dependencies={lanes:0,firstContext:n}}else Da=Da.next=n;return r}var ks=null;function Cf(n){ks===null?ks=[n]:ks.push(n)}function e0(n,r,l,f){var m=r.interleaved;return m===null?(l.next=l,Cf(r)):(l.next=m.next,m.next=l),r.interleaved=l,Cr(n,f)}function Cr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var as=!1;function Rf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t0(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Rr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function os(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(Lt&2)!==0){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,Cr(n,l)}return m=f.interleaved,m===null?(r.next=r,Cf(f)):(r.next=m.next,m.next=r),f.interleaved=r,Cr(n,l)}function fu(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,yn(n,l)}}function n0(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?m=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?m=g=r:g=g.next=r}else m=g=r;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:g,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function du(n,r,l,f){var m=n.updateQueue;as=!1;var g=m.firstBaseUpdate,T=m.lastBaseUpdate,F=m.shared.pending;if(F!==null){m.shared.pending=null;var G=F,le=G.next;G.next=null,T===null?g=le:T.next=le,T=G;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==T&&(F===null?ye.firstBaseUpdate=le:F.next=le,ye.lastBaseUpdate=G))}if(g!==null){var Se=m.baseState;T=0,ye=le=G=null,F=g;do{var ve=F.lane,Ve=F.eventTime;if((f&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Ve,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var qe=n,$e=F;switch(ve=r,Ve=l,$e.tag){case 1:if(qe=$e.payload,typeof qe=="function"){Se=qe.call(Ve,Se,ve);break e}Se=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=$e.payload,ve=typeof qe=="function"?qe.call(Ve,Se,ve):qe,ve==null)break e;Se=$({},Se,ve);break e;case 2:as=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,ve=m.effects,ve===null?m.effects=[F]:ve.push(F))}else Ve={eventTime:Ve,lane:ve,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(le=ye=Ve,G=Se):ye=ye.next=Ve,T|=ve;if(F=F.next,F===null){if(F=m.shared.pending,F===null)break;ve=F,F=ve.next,ve.next=null,m.lastBaseUpdate=ve,m.shared.pending=null}}while(!0);if(ye===null&&(G=Se),m.baseState=G,m.firstBaseUpdate=le,m.lastBaseUpdate=ye,r=m.shared.interleaved,r!==null){m=r;do T|=m.lane,m=m.next;while(m!==r)}else g===null&&(m.shared.lanes=0);Vs|=T,n.lanes=T,n.memoizedState=Se}}function i0(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Xo={},ur=is(Xo),Yo=is(Xo),qo=is(Xo);function zs(n){if(n===Xo)throw Error(t(174));return n}function Pf(n,r){switch(Yt(qo,r),Yt(Yo,n),Yt(ur,Xo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:xe(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=xe(r,n)}$t(ur),Yt(ur,r)}function Ua(){$t(ur),$t(Yo),$t(qo)}function r0(n){zs(qo.current);var r=zs(ur.current),l=xe(r,n.type);r!==l&&(Yt(Yo,n),Yt(ur,l))}function Df(n){Yo.current===n&&($t(ur),$t(Yo))}var rn=is(0);function hu(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Lf=[];function Uf(){for(var n=0;n<Lf.length;n++)Lf[n]._workInProgressVersionPrimary=null;Lf.length=0}var pu=D.ReactCurrentDispatcher,If=D.ReactCurrentBatchConfig,Bs=0,sn=null,Sn=null,Cn=null,mu=!1,jo=!1,$o=0,wy=0;function Bn(){throw Error(t(321))}function Nf(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!$i(n[l],r[l]))return!1;return!0}function Ff(n,r,l,f,m,g){if(Bs=g,sn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,pu.current=n===null||n.memoizedState===null?Ry:Py,n=l(f,m),jo){g=0;do{if(jo=!1,$o=0,25<=g)throw Error(t(301));g+=1,Cn=Sn=null,r.updateQueue=null,pu.current=Dy,n=l(f,m)}while(jo)}if(pu.current=gu,r=Sn!==null&&Sn.next!==null,Bs=0,Cn=Sn=sn=null,mu=!1,r)throw Error(t(300));return n}function Of(){var n=$o!==0;return $o=0,n}function cr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?sn.memoizedState=Cn=n:Cn=Cn.next=n,Cn}function Fi(){if(Sn===null){var n=sn.alternate;n=n!==null?n.memoizedState:null}else n=Sn.next;var r=Cn===null?sn.memoizedState:Cn.next;if(r!==null)Cn=r,Sn=n;else{if(n===null)throw Error(t(310));Sn=n,n={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},Cn===null?sn.memoizedState=Cn=n:Cn=Cn.next=n}return Cn}function Ko(n,r){return typeof r=="function"?r(n):r}function kf(n){var r=Fi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=Sn,m=f.baseQueue,g=l.pending;if(g!==null){if(m!==null){var T=m.next;m.next=g.next,g.next=T}f.baseQueue=m=g,l.pending=null}if(m!==null){g=m.next,f=f.baseState;var F=T=null,G=null,le=g;do{var ye=le.lane;if((Bs&ye)===ye)G!==null&&(G=G.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),f=le.hasEagerState?le.eagerState:n(f,le.action);else{var Se={lane:ye,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};G===null?(F=G=Se,T=f):G=G.next=Se,sn.lanes|=ye,Vs|=ye}le=le.next}while(le!==null&&le!==g);G===null?T=f:G.next=F,$i(f,r.memoizedState)||(ui=!0),r.memoizedState=f,r.baseState=T,r.baseQueue=G,l.lastRenderedState=f}if(n=l.interleaved,n!==null){m=n;do g=m.lane,sn.lanes|=g,Vs|=g,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function zf(n){var r=Fi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,m=l.pending,g=r.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do g=n(g,T.action),T=T.next;while(T!==m);$i(g,r.memoizedState)||(ui=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),l.lastRenderedState=g}return[g,f]}function s0(){}function a0(n,r){var l=sn,f=Fi(),m=r(),g=!$i(f.memoizedState,m);if(g&&(f.memoizedState=m,ui=!0),f=f.queue,Bf(u0.bind(null,l,f,n),[n]),f.getSnapshot!==r||g||Cn!==null&&Cn.memoizedState.tag&1){if(l.flags|=2048,Zo(9,l0.bind(null,l,f,m,r),void 0,null),Rn===null)throw Error(t(349));(Bs&30)!==0||o0(l,r,m)}return m}function o0(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=sn.updateQueue,r===null?(r={lastEffect:null,stores:null},sn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function l0(n,r,l,f){r.value=l,r.getSnapshot=f,c0(r)&&f0(n)}function u0(n,r,l){return l(function(){c0(r)&&f0(n)})}function c0(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!$i(n,l)}catch{return!0}}function f0(n){var r=Cr(n,1);r!==null&&er(r,n,1,-1)}function d0(n){var r=cr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:n},r.queue=n,n=n.dispatch=Cy.bind(null,sn,n),[r.memoizedState,n]}function Zo(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=sn.updateQueue,r===null?(r={lastEffect:null,stores:null},sn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function h0(){return Fi().memoizedState}function xu(n,r,l,f){var m=cr();sn.flags|=n,m.memoizedState=Zo(1|r,l,void 0,f===void 0?null:f)}function _u(n,r,l,f){var m=Fi();f=f===void 0?null:f;var g=void 0;if(Sn!==null){var T=Sn.memoizedState;if(g=T.destroy,f!==null&&Nf(f,T.deps)){m.memoizedState=Zo(r,l,g,f);return}}sn.flags|=n,m.memoizedState=Zo(1|r,l,g,f)}function p0(n,r){return xu(8390656,8,n,r)}function Bf(n,r){return _u(2048,8,n,r)}function m0(n,r){return _u(4,2,n,r)}function x0(n,r){return _u(4,4,n,r)}function _0(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function g0(n,r,l){return l=l!=null?l.concat([n]):null,_u(4,4,_0.bind(null,r,n),l)}function Vf(){}function v0(n,r){var l=Fi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Nf(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function y0(n,r){var l=Fi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Nf(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function S0(n,r,l){return(Bs&21)===0?(n.baseState&&(n.baseState=!1,ui=!0),n.memoizedState=l):($i(l,r)||(l=$r(),sn.lanes|=l,Vs|=l,n.baseState=!0),r)}function by(n,r){var l=mt;mt=l!==0&&4>l?l:4,n(!0);var f=If.transition;If.transition={};try{n(!1),r()}finally{mt=l,If.transition=f}}function M0(){return Fi().memoizedState}function Ay(n,r,l){var f=fs(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},E0(n))T0(r,l);else if(l=e0(n,r,l,f),l!==null){var m=ei();er(l,n,f,m),w0(l,r,f)}}function Cy(n,r,l){var f=fs(n),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(E0(n))T0(r,m);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var T=r.lastRenderedState,F=g(T,l);if(m.hasEagerState=!0,m.eagerState=F,$i(F,T)){var G=r.interleaved;G===null?(m.next=m,Cf(r)):(m.next=G.next,G.next=m),r.interleaved=m;return}}catch{}finally{}l=e0(n,r,m,f),l!==null&&(m=ei(),er(l,n,f,m),w0(l,r,f))}}function E0(n){var r=n.alternate;return n===sn||r!==null&&r===sn}function T0(n,r){jo=mu=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function w0(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,yn(n,l)}}var gu={readContext:Ni,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},Ry={readContext:Ni,useCallback:function(n,r){return cr().memoizedState=[n,r===void 0?null:r],n},useContext:Ni,useEffect:p0,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,xu(4194308,4,_0.bind(null,r,n),l)},useLayoutEffect:function(n,r){return xu(4194308,4,n,r)},useInsertionEffect:function(n,r){return xu(4,2,n,r)},useMemo:function(n,r){var l=cr();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=cr();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=Ay.bind(null,sn,n),[f.memoizedState,n]},useRef:function(n){var r=cr();return n={current:n},r.memoizedState=n},useState:d0,useDebugValue:Vf,useDeferredValue:function(n){return cr().memoizedState=n},useTransition:function(){var n=d0(!1),r=n[0];return n=by.bind(null,n[1]),cr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=sn,m=cr();if(en){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Rn===null)throw Error(t(349));(Bs&30)!==0||o0(f,r,l)}m.memoizedState=l;var g={value:l,getSnapshot:r};return m.queue=g,p0(u0.bind(null,f,g,n),[n]),f.flags|=2048,Zo(9,l0.bind(null,f,g,l,r),void 0,null),l},useId:function(){var n=cr(),r=Rn.identifierPrefix;if(en){var l=Ar,f=br;l=(f&~(1<<32-ft(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=$o++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=wy++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Py={readContext:Ni,useCallback:v0,useContext:Ni,useEffect:Bf,useImperativeHandle:g0,useInsertionEffect:m0,useLayoutEffect:x0,useMemo:y0,useReducer:kf,useRef:h0,useState:function(){return kf(Ko)},useDebugValue:Vf,useDeferredValue:function(n){var r=Fi();return S0(r,Sn.memoizedState,n)},useTransition:function(){var n=kf(Ko)[0],r=Fi().memoizedState;return[n,r]},useMutableSource:s0,useSyncExternalStore:a0,useId:M0,unstable_isNewReconciler:!1},Dy={readContext:Ni,useCallback:v0,useContext:Ni,useEffect:Bf,useImperativeHandle:g0,useInsertionEffect:m0,useLayoutEffect:x0,useMemo:y0,useReducer:zf,useRef:h0,useState:function(){return zf(Ko)},useDebugValue:Vf,useDeferredValue:function(n){var r=Fi();return Sn===null?r.memoizedState=n:S0(r,Sn.memoizedState,n)},useTransition:function(){var n=zf(Ko)[0],r=Fi().memoizedState;return[n,r]},useMutableSource:s0,useSyncExternalStore:a0,useId:M0,unstable_isNewReconciler:!1};function Zi(n,r){if(n&&n.defaultProps){r=$({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Gf(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:$({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var vu={isMounted:function(n){return(n=n._reactInternals)?Tt(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=ei(),m=fs(n),g=Rr(f,m);g.payload=r,l!=null&&(g.callback=l),r=os(n,g,m),r!==null&&(er(r,n,m,f),fu(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=ei(),m=fs(n),g=Rr(f,m);g.tag=1,g.payload=r,l!=null&&(g.callback=l),r=os(n,g,m),r!==null&&(er(r,n,m,f),fu(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=ei(),f=fs(n),m=Rr(l,f);m.tag=2,r!=null&&(m.callback=r),r=os(n,m,f),r!==null&&(er(r,n,f,l),fu(r,n,f))}};function b0(n,r,l,f,m,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,g,T):r.prototype&&r.prototype.isPureReactComponent?!Oo(l,f)||!Oo(m,g):!0}function A0(n,r,l){var f=!1,m=rs,g=r.contextType;return typeof g=="object"&&g!==null?g=Ni(g):(m=li(r)?Ns:zn.current,f=r.contextTypes,g=(f=f!=null)?ba(n,m):rs),r=new r(l,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=vu,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=g),r}function C0(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&vu.enqueueReplaceState(r,r.state,null)}function Hf(n,r,l,f){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},Rf(n);var g=r.contextType;typeof g=="object"&&g!==null?m.context=Ni(g):(g=li(r)?Ns:zn.current,m.context=ba(n,g)),m.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Gf(n,r,g,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&vu.enqueueReplaceState(m,m.state,null),du(n,l,m,f),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Ia(n,r){try{var l="",f=r;do l+=Oe(f),f=f.return;while(f);var m=l}catch(g){m=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:m,digest:null}}function Wf(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Xf(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Ly=typeof WeakMap=="function"?WeakMap:Map;function R0(n,r,l){l=Rr(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){bu||(bu=!0,ad=f),Xf(n,r)},l}function P0(n,r,l){l=Rr(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;l.payload=function(){return f(m)},l.callback=function(){Xf(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){Xf(n,r),typeof f!="function"&&(us===null?us=new Set([this]):us.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function D0(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new Ly;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(l)||(m.add(l),n=Yy.bind(null,n,r,l),r.then(n,n))}function L0(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function U0(n,r,l,f,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Rr(-1,1),r.tag=2,os(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var Uy=D.ReactCurrentOwner,ui=!1;function Jn(n,r,l,f){r.child=n===null?Jm(r,null,l,f):Pa(r,n.child,l,f)}function I0(n,r,l,f,m){l=l.render;var g=r.ref;return La(r,m),f=Ff(n,r,l,f,g,m),l=Of(),n!==null&&!ui?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,Pr(n,r,m)):(en&&l&&vf(r),r.flags|=1,Jn(n,r,f,m),r.child)}function N0(n,r,l,f,m){if(n===null){var g=l.type;return typeof g=="function"&&!hd(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=g,F0(n,r,g,f,m)):(n=Lu(l.type,null,f,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&m)===0){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:Oo,l(T,f)&&n.ref===r.ref)return Pr(n,r,m)}return r.flags|=1,n=hs(g,f),n.ref=r.ref,n.return=r,r.child=n}function F0(n,r,l,f,m){if(n!==null){var g=n.memoizedProps;if(Oo(g,f)&&n.ref===r.ref)if(ui=!1,r.pendingProps=f=g,(n.lanes&m)!==0)(n.flags&131072)!==0&&(ui=!0);else return r.lanes=n.lanes,Pr(n,r,m)}return Yf(n,r,l,f,m)}function O0(n,r,l){var f=r.pendingProps,m=f.children,g=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Yt(Fa,Mi),Mi|=l;else{if((l&1073741824)===0)return n=g!==null?g.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Yt(Fa,Mi),Mi|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=g!==null?g.baseLanes:l,Yt(Fa,Mi),Mi|=f}else g!==null?(f=g.baseLanes|l,r.memoizedState=null):f=l,Yt(Fa,Mi),Mi|=f;return Jn(n,r,m,l),r.child}function k0(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Yf(n,r,l,f,m){var g=li(l)?Ns:zn.current;return g=ba(r,g),La(r,m),l=Ff(n,r,l,f,g,m),f=Of(),n!==null&&!ui?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,Pr(n,r,m)):(en&&f&&vf(r),r.flags|=1,Jn(n,r,l,m),r.child)}function z0(n,r,l,f,m){if(li(l)){var g=!0;iu(r)}else g=!1;if(La(r,m),r.stateNode===null)Su(n,r),A0(r,l,f),Hf(r,l,f,m),f=!0;else if(n===null){var T=r.stateNode,F=r.memoizedProps;T.props=F;var G=T.context,le=l.contextType;typeof le=="object"&&le!==null?le=Ni(le):(le=li(l)?Ns:zn.current,le=ba(r,le));var ye=l.getDerivedStateFromProps,Se=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==f||G!==le)&&C0(r,T,f,le),as=!1;var ve=r.memoizedState;T.state=ve,du(r,f,T,m),G=r.memoizedState,F!==f||ve!==G||oi.current||as?(typeof ye=="function"&&(Gf(r,l,ye,f),G=r.memoizedState),(F=as||b0(r,l,F,f,ve,G,le))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=G),T.props=f,T.state=G,T.context=le,f=F):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{T=r.stateNode,t0(n,r),F=r.memoizedProps,le=r.type===r.elementType?F:Zi(r.type,F),T.props=le,Se=r.pendingProps,ve=T.context,G=l.contextType,typeof G=="object"&&G!==null?G=Ni(G):(G=li(l)?Ns:zn.current,G=ba(r,G));var Ve=l.getDerivedStateFromProps;(ye=typeof Ve=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==Se||ve!==G)&&C0(r,T,f,G),as=!1,ve=r.memoizedState,T.state=ve,du(r,f,T,m);var qe=r.memoizedState;F!==Se||ve!==qe||oi.current||as?(typeof Ve=="function"&&(Gf(r,l,Ve,f),qe=r.memoizedState),(le=as||b0(r,l,le,f,ve,qe,G)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,qe,G),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,qe,G)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=qe),T.props=f,T.state=qe,T.context=G,f=le):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),f=!1)}return qf(n,r,l,f,g,m)}function qf(n,r,l,f,m,g){k0(n,r);var T=(r.flags&128)!==0;if(!f&&!T)return m&&Wm(r,l,!1),Pr(n,r,g);f=r.stateNode,Uy.current=r;var F=T&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&T?(r.child=Pa(r,n.child,null,g),r.child=Pa(r,null,F,g)):Jn(n,r,F,g),r.memoizedState=f.state,m&&Wm(r,l,!0),r.child}function B0(n){var r=n.stateNode;r.pendingContext?Gm(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Gm(n,r.context,!1),Pf(n,r.containerInfo)}function V0(n,r,l,f,m){return Ra(),Ef(m),r.flags|=256,Jn(n,r,l,f),r.child}var jf={dehydrated:null,treeContext:null,retryLane:0};function $f(n){return{baseLanes:n,cachePool:null,transitions:null}}function G0(n,r,l){var f=r.pendingProps,m=rn.current,g=!1,T=(r.flags&128)!==0,F;if((F=T)||(F=n!==null&&n.memoizedState===null?!1:(m&2)!==0),F?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Yt(rn,m&1),n===null)return Mf(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=f.children,n=f.fallback,g?(f=r.mode,g=r.child,T={mode:"hidden",children:T},(f&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=Uu(T,f,0,null),n=Xs(n,f,l,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=$f(l),r.memoizedState=jf,n):Kf(r,T));if(m=n.memoizedState,m!==null&&(F=m.dehydrated,F!==null))return Iy(n,r,T,f,F,m,l);if(g){g=f.fallback,T=r.mode,m=n.child,F=m.sibling;var G={mode:"hidden",children:f.children};return(T&1)===0&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=G,r.deletions=null):(f=hs(m,G),f.subtreeFlags=m.subtreeFlags&14680064),F!==null?g=hs(F,g):(g=Xs(g,T,l,null),g.flags|=2),g.return=r,f.return=r,f.sibling=g,r.child=f,f=g,g=r.child,T=n.child.memoizedState,T=T===null?$f(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~l,r.memoizedState=jf,f}return g=n.child,n=g.sibling,f=hs(g,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Kf(n,r){return r=Uu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function yu(n,r,l,f){return f!==null&&Ef(f),Pa(r,n.child,null,l),n=Kf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Iy(n,r,l,f,m,g,T){if(l)return r.flags&256?(r.flags&=-257,f=Wf(Error(t(422))),yu(n,r,T,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=f.fallback,m=r.mode,f=Uu({mode:"visible",children:f.children},m,0,null),g=Xs(g,m,T,null),g.flags|=2,f.return=r,g.return=r,f.sibling=g,r.child=f,(r.mode&1)!==0&&Pa(r,n.child,null,T),r.child.memoizedState=$f(T),r.memoizedState=jf,g);if((r.mode&1)===0)return yu(n,r,T,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var F=f.dgst;return f=F,g=Error(t(419)),f=Wf(g,f,void 0),yu(n,r,T,f)}if(F=(T&n.childLanes)!==0,ui||F){if(f=Rn,f!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|T))!==0?0:m,m!==0&&m!==g.retryLane&&(g.retryLane=m,Cr(n,m),er(f,n,m,-1))}return dd(),f=Wf(Error(t(421))),yu(n,r,T,f)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=qy.bind(null,n),m._reactRetry=r,null):(n=g.treeContext,Si=ns(m.nextSibling),yi=r,en=!0,Ki=null,n!==null&&(Ui[Ii++]=br,Ui[Ii++]=Ar,Ui[Ii++]=Fs,br=n.id,Ar=n.overflow,Fs=r),r=Kf(r,f.children),r.flags|=4096,r)}function H0(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),Af(n.return,r,l)}function Zf(n,r,l,f,m){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=f,g.tail=l,g.tailMode=m)}function W0(n,r,l){var f=r.pendingProps,m=f.revealOrder,g=f.tail;if(Jn(n,r,f.children,l),f=rn.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&H0(n,l,r);else if(n.tag===19)H0(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Yt(rn,f),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&hu(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),Zf(r,!1,m,l,g);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&hu(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Zf(r,!0,l,null,g);break;case"together":Zf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Su(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Pr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Vs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=hs(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=hs(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Ny(n,r,l){switch(r.tag){case 3:B0(r),Ra();break;case 5:r0(r);break;case 1:li(r.type)&&iu(r);break;case 4:Pf(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;Yt(uu,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Yt(rn,rn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?G0(n,r,l):(Yt(rn,rn.current&1),n=Pr(n,r,l),n!==null?n.sibling:null);Yt(rn,rn.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return W0(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Yt(rn,rn.current),f)break;return null;case 22:case 23:return r.lanes=0,O0(n,r,l)}return Pr(n,r,l)}var X0,Qf,Y0,q0;X0=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Qf=function(){},Y0=function(n,r,l,f){var m=n.memoizedProps;if(m!==f){n=r.stateNode,zs(ur.current);var g=null;switch(l){case"input":m=Dt(n,m),f=Dt(n,f),g=[];break;case"select":m=$({},m,{value:void 0}),f=$({},f,{value:void 0}),g=[];break;case"textarea":m=et(n,m),f=et(n,f),g=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=eu)}Xe(l,f);var T;l=null;for(le in m)if(!f.hasOwnProperty(le)&&m.hasOwnProperty(le)&&m[le]!=null)if(le==="style"){var F=m[le];for(T in F)F.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(s.hasOwnProperty(le)?g||(g=[]):(g=g||[]).push(le,null));for(le in f){var G=f[le];if(F=m!=null?m[le]:void 0,f.hasOwnProperty(le)&&G!==F&&(G!=null||F!=null))if(le==="style")if(F){for(T in F)!F.hasOwnProperty(T)||G&&G.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in G)G.hasOwnProperty(T)&&F[T]!==G[T]&&(l||(l={}),l[T]=G[T])}else l||(g||(g=[]),g.push(le,l)),l=G;else le==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,F=F?F.__html:void 0,G!=null&&F!==G&&(g=g||[]).push(le,G)):le==="children"?typeof G!="string"&&typeof G!="number"||(g=g||[]).push(le,""+G):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(s.hasOwnProperty(le)?(G!=null&&le==="onScroll"&&jt("scroll",n),g||F===G||(g=[])):(g=g||[]).push(le,G))}l&&(g=g||[]).push("style",l);var le=g;(r.updateQueue=le)&&(r.flags|=4)}},q0=function(n,r,l,f){l!==f&&(r.flags|=4)};function Qo(n,r){if(!en)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Vn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function Fy(n,r,l){var f=r.pendingProps;switch(yf(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(r),null;case 1:return li(r.type)&&nu(),Vn(r),null;case 3:return f=r.stateNode,Ua(),$t(oi),$t(zn),Uf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(ou(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ki!==null&&(ud(Ki),Ki=null))),Qf(n,r),Vn(r),null;case 5:Df(r);var m=zs(qo.current);if(l=r.type,n!==null&&r.stateNode!=null)Y0(n,r,l,f,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Vn(r),null}if(n=zs(ur.current),ou(r)){f=r.stateNode,l=r.type;var g=r.memoizedProps;switch(f[lr]=r,f[Go]=g,n=(r.mode&1)!==0,l){case"dialog":jt("cancel",f),jt("close",f);break;case"iframe":case"object":case"embed":jt("load",f);break;case"video":case"audio":for(m=0;m<zo.length;m++)jt(zo[m],f);break;case"source":jt("error",f);break;case"img":case"image":case"link":jt("error",f),jt("load",f);break;case"details":jt("toggle",f);break;case"input":z(f,g),jt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!g.multiple},jt("invalid",f);break;case"textarea":N(f,g),jt("invalid",f)}Xe(l,g),m=null;for(var T in g)if(g.hasOwnProperty(T)){var F=g[T];T==="children"?typeof F=="string"?f.textContent!==F&&(g.suppressHydrationWarning!==!0&&Jl(f.textContent,F,n),m=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(g.suppressHydrationWarning!==!0&&Jl(f.textContent,F,n),m=["children",""+F]):s.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&jt("scroll",f)}switch(l){case"input":ut(f),Mt(f,g,!0);break;case"textarea":ut(f),K(f);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(f.onclick=eu)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=T.createElement(l,{is:f.is}):(n=T.createElement(l),l==="select"&&(T=n,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):n=T.createElementNS(n,l),n[lr]=r,n[Go]=f,X0(n,r,!1,!1),r.stateNode=n;e:{switch(T=Re(l,f),l){case"dialog":jt("cancel",n),jt("close",n),m=f;break;case"iframe":case"object":case"embed":jt("load",n),m=f;break;case"video":case"audio":for(m=0;m<zo.length;m++)jt(zo[m],n);m=f;break;case"source":jt("error",n),m=f;break;case"img":case"image":case"link":jt("error",n),jt("load",n),m=f;break;case"details":jt("toggle",n),m=f;break;case"input":z(n,f),m=Dt(n,f),jt("invalid",n);break;case"option":m=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},m=$({},f,{value:void 0}),jt("invalid",n);break;case"textarea":N(n,f),m=et(n,f),jt("invalid",n);break;default:m=f}Xe(l,m),F=m;for(g in F)if(F.hasOwnProperty(g)){var G=F[g];g==="style"?Me(n,G):g==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&We(n,G)):g==="children"?typeof G=="string"?(l!=="textarea"||G!=="")&&Ae(n,G):typeof G=="number"&&Ae(n,""+G):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?G!=null&&g==="onScroll"&&jt("scroll",n):G!=null&&C(n,g,G,T))}switch(l){case"input":ut(n),Mt(n,f,!1);break;case"textarea":ut(n),K(n);break;case"option":f.value!=null&&n.setAttribute("value",""+_e(f.value));break;case"select":n.multiple=!!f.multiple,g=f.value,g!=null?ke(n,!!f.multiple,g,!1):f.defaultValue!=null&&ke(n,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=eu)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vn(r),null;case 6:if(n&&r.stateNode!=null)q0(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=zs(qo.current),zs(ur.current),ou(r)){if(f=r.stateNode,l=r.memoizedProps,f[lr]=r,(g=f.nodeValue!==l)&&(n=yi,n!==null))switch(n.tag){case 3:Jl(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Jl(f.nodeValue,l,(n.mode&1)!==0)}g&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[lr]=r,r.stateNode=f}return Vn(r),null;case 13:if($t(rn),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&Si!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Km(),Ra(),r.flags|=98560,g=!1;else if(g=ou(r),f!==null&&f.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[lr]=r}else Ra(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Vn(r),g=!1}else Ki!==null&&(ud(Ki),Ki=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(rn.current&1)!==0?Mn===0&&(Mn=3):dd())),r.updateQueue!==null&&(r.flags|=4),Vn(r),null);case 4:return Ua(),Qf(n,r),n===null&&Bo(r.stateNode.containerInfo),Vn(r),null;case 10:return bf(r.type._context),Vn(r),null;case 17:return li(r.type)&&nu(),Vn(r),null;case 19:if($t(rn),g=r.memoizedState,g===null)return Vn(r),null;if(f=(r.flags&128)!==0,T=g.rendering,T===null)if(f)Qo(g,!1);else{if(Mn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=hu(n),T!==null){for(r.flags|=128,Qo(g,!1),f=T.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)g=l,n=f,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Yt(rn,rn.current&1|2),r.child}n=n.sibling}g.tail!==null&&Q()>Oa&&(r.flags|=128,f=!0,Qo(g,!1),r.lanes=4194304)}else{if(!f)if(n=hu(T),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Qo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!en)return Vn(r),null}else 2*Q()-g.renderingStartTime>Oa&&l!==1073741824&&(r.flags|=128,f=!0,Qo(g,!1),r.lanes=4194304);g.isBackwards?(T.sibling=r.child,r.child=T):(l=g.last,l!==null?l.sibling=T:r.child=T,g.last=T)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Q(),r.sibling=null,l=rn.current,Yt(rn,f?l&1|2:l&1),r):(Vn(r),null);case 22:case 23:return fd(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(Mi&1073741824)!==0&&(Vn(r),r.subtreeFlags&6&&(r.flags|=8192)):Vn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Oy(n,r){switch(yf(r),r.tag){case 1:return li(r.type)&&nu(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ua(),$t(oi),$t(zn),Uf(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Df(r),null;case 13:if($t(rn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ra()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return $t(rn),null;case 4:return Ua(),null;case 10:return bf(r.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var Mu=!1,Gn=!1,ky=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Na(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){un(n,r,f)}else l.current=null}function Jf(n,r,l){try{l()}catch(f){un(n,r,f)}}var j0=!1;function zy(n,r){if(ff=Gl,n=bm(),nf(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,g=f.focusNode;f=f.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,F=-1,G=-1,le=0,ye=0,Se=n,ve=null;t:for(;;){for(var Ve;Se!==l||m!==0&&Se.nodeType!==3||(F=T+m),Se!==g||f!==0&&Se.nodeType!==3||(G=T+f),Se.nodeType===3&&(T+=Se.nodeValue.length),(Ve=Se.firstChild)!==null;)ve=Se,Se=Ve;for(;;){if(Se===n)break t;if(ve===l&&++le===m&&(F=T),ve===g&&++ye===f&&(G=T),(Ve=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Ve}l=F===-1||G===-1?null:{start:F,end:G}}else l=null}l=l||{start:0,end:0}}else l=null;for(df={focusedElem:n,selectionRange:l},Gl=!1,Ye=r;Ye!==null;)if(r=Ye,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ye=n;else for(;Ye!==null;){r=Ye;try{var qe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var $e=qe.memoizedProps,hn=qe.memoizedState,Z=r.stateNode,X=Z.getSnapshotBeforeUpdate(r.elementType===r.type?$e:Zi(r.type,$e),hn);Z.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ee=r.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){un(r,r.return,we)}if(n=r.sibling,n!==null){n.return=r.return,Ye=n;break}Ye=r.return}return qe=j0,j0=!1,qe}function Jo(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&n)===n){var g=m.destroy;m.destroy=void 0,g!==void 0&&Jf(r,l,g)}m=m.next}while(m!==f)}}function Eu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function ed(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function $0(n){var r=n.alternate;r!==null&&(n.alternate=null,$0(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[lr],delete r[Go],delete r[xf],delete r[Sy],delete r[My])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function K0(n){return n.tag===5||n.tag===3||n.tag===4}function Z0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||K0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function td(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=eu));else if(f!==4&&(n=n.child,n!==null))for(td(n,r,l),n=n.sibling;n!==null;)td(n,r,l),n=n.sibling}function nd(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(nd(n,r,l),n=n.sibling;n!==null;)nd(n,r,l),n=n.sibling}var Fn=null,Qi=!1;function ls(n,r,l){for(l=l.child;l!==null;)Q0(n,r,l),l=l.sibling}function Q0(n,r,l){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(st,l)}catch{}switch(l.tag){case 5:Gn||Na(l,r);case 6:var f=Fn,m=Qi;Fn=null,ls(n,r,l),Fn=f,Qi=m,Fn!==null&&(Qi?(n=Fn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Fn.removeChild(l.stateNode));break;case 18:Fn!==null&&(Qi?(n=Fn,l=l.stateNode,n.nodeType===8?mf(n.parentNode,l):n.nodeType===1&&mf(n,l),Do(n)):mf(Fn,l.stateNode));break;case 4:f=Fn,m=Qi,Fn=l.stateNode.containerInfo,Qi=!0,ls(n,r,l),Fn=f,Qi=m;break;case 0:case 11:case 14:case 15:if(!Gn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var g=m,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&Jf(l,r,T),m=m.next}while(m!==f)}ls(n,r,l);break;case 1:if(!Gn&&(Na(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(F){un(l,r,F)}ls(n,r,l);break;case 21:ls(n,r,l);break;case 22:l.mode&1?(Gn=(f=Gn)||l.memoizedState!==null,ls(n,r,l),Gn=f):ls(n,r,l);break;default:ls(n,r,l)}}function J0(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new ky),r.forEach(function(f){var m=jy.bind(null,n,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Ji(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var g=n,T=r,F=T;e:for(;F!==null;){switch(F.tag){case 5:Fn=F.stateNode,Qi=!1;break e;case 3:Fn=F.stateNode.containerInfo,Qi=!0;break e;case 4:Fn=F.stateNode.containerInfo,Qi=!0;break e}F=F.return}if(Fn===null)throw Error(t(160));Q0(g,T,m),Fn=null,Qi=!1;var G=m.alternate;G!==null&&(G.return=null),m.return=null}catch(le){un(m,r,le)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)ex(r,n),r=r.sibling}function ex(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ji(r,n),fr(n),f&4){try{Jo(3,n,n.return),Eu(3,n)}catch($e){un(n,n.return,$e)}try{Jo(5,n,n.return)}catch($e){un(n,n.return,$e)}}break;case 1:Ji(r,n),fr(n),f&512&&l!==null&&Na(l,l.return);break;case 5:if(Ji(r,n),fr(n),f&512&&l!==null&&Na(l,l.return),n.flags&32){var m=n.stateNode;try{Ae(m,"")}catch($e){un(n,n.return,$e)}}if(f&4&&(m=n.stateNode,m!=null)){var g=n.memoizedProps,T=l!==null?l.memoizedProps:g,F=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{F==="input"&&g.type==="radio"&&g.name!=null&&xt(m,g),Re(F,T);var le=Re(F,g);for(T=0;T<G.length;T+=2){var ye=G[T],Se=G[T+1];ye==="style"?Me(m,Se):ye==="dangerouslySetInnerHTML"?We(m,Se):ye==="children"?Ae(m,Se):C(m,ye,Se,le)}switch(F){case"input":pt(m,g);break;case"textarea":b(m,g);break;case"select":var ve=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!g.multiple;var Ve=g.value;Ve!=null?ke(m,!!g.multiple,Ve,!1):ve!==!!g.multiple&&(g.defaultValue!=null?ke(m,!!g.multiple,g.defaultValue,!0):ke(m,!!g.multiple,g.multiple?[]:"",!1))}m[Go]=g}catch($e){un(n,n.return,$e)}}break;case 6:if(Ji(r,n),fr(n),f&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,g=n.memoizedProps;try{m.nodeValue=g}catch($e){un(n,n.return,$e)}}break;case 3:if(Ji(r,n),fr(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Do(r.containerInfo)}catch($e){un(n,n.return,$e)}break;case 4:Ji(r,n),fr(n);break;case 13:Ji(r,n),fr(n),m=n.child,m.flags&8192&&(g=m.memoizedState!==null,m.stateNode.isHidden=g,!g||m.alternate!==null&&m.alternate.memoizedState!==null||(sd=Q())),f&4&&J0(n);break;case 22:if(ye=l!==null&&l.memoizedState!==null,n.mode&1?(Gn=(le=Gn)||ye,Ji(r,n),Gn=le):Ji(r,n),fr(n),f&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!ye&&(n.mode&1)!==0)for(Ye=n,ye=n.child;ye!==null;){for(Se=Ye=ye;Ye!==null;){switch(ve=Ye,Ve=ve.child,ve.tag){case 0:case 11:case 14:case 15:Jo(4,ve,ve.return);break;case 1:Na(ve,ve.return);var qe=ve.stateNode;if(typeof qe.componentWillUnmount=="function"){f=ve,l=ve.return;try{r=f,qe.props=r.memoizedProps,qe.state=r.memoizedState,qe.componentWillUnmount()}catch($e){un(f,l,$e)}}break;case 5:Na(ve,ve.return);break;case 22:if(ve.memoizedState!==null){ix(Se);continue}}Ve!==null?(Ve.return=ve,Ye=Ve):ix(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{m=Se.stateNode,le?(g=m.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(F=Se.stateNode,G=Se.memoizedProps.style,T=G!=null&&G.hasOwnProperty("display")?G.display:null,F.style.display=me("display",T))}catch($e){un(n,n.return,$e)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=le?"":Se.memoizedProps}catch($e){un(n,n.return,$e)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Ji(r,n),fr(n),f&4&&J0(n);break;case 21:break;default:Ji(r,n),fr(n)}}function fr(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(K0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(Ae(m,""),f.flags&=-33);var g=Z0(n);nd(n,g,m);break;case 3:case 4:var T=f.stateNode.containerInfo,F=Z0(n);td(n,F,T);break;default:throw Error(t(161))}}catch(G){un(n,n.return,G)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function By(n,r,l){Ye=n,tx(n)}function tx(n,r,l){for(var f=(n.mode&1)!==0;Ye!==null;){var m=Ye,g=m.child;if(m.tag===22&&f){var T=m.memoizedState!==null||Mu;if(!T){var F=m.alternate,G=F!==null&&F.memoizedState!==null||Gn;F=Mu;var le=Gn;if(Mu=T,(Gn=G)&&!le)for(Ye=m;Ye!==null;)T=Ye,G=T.child,T.tag===22&&T.memoizedState!==null?rx(m):G!==null?(G.return=T,Ye=G):rx(m);for(;g!==null;)Ye=g,tx(g),g=g.sibling;Ye=m,Mu=F,Gn=le}nx(n)}else(m.subtreeFlags&8772)!==0&&g!==null?(g.return=m,Ye=g):nx(n)}}function nx(n){for(;Ye!==null;){var r=Ye;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Gn||Eu(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!Gn)if(l===null)f.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:Zi(r.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&i0(r,g,f);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}i0(r,T,l)}break;case 5:var F=r.stateNode;if(l===null&&r.flags&4){l=F;var G=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&l.focus();break;case"img":G.src&&(l.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var le=r.alternate;if(le!==null){var ye=le.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&Do(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Gn||r.flags&512&&ed(r)}catch(ve){un(r,r.return,ve)}}if(r===n){Ye=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ye=l;break}Ye=r.return}}function ix(n){for(;Ye!==null;){var r=Ye;if(r===n){Ye=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ye=l;break}Ye=r.return}}function rx(n){for(;Ye!==null;){var r=Ye;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Eu(4,r)}catch(G){un(r,l,G)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(G){un(r,m,G)}}var g=r.return;try{ed(r)}catch(G){un(r,g,G)}break;case 5:var T=r.return;try{ed(r)}catch(G){un(r,T,G)}}}catch(G){un(r,r.return,G)}if(r===n){Ye=null;break}var F=r.sibling;if(F!==null){F.return=r.return,Ye=F;break}Ye=r.return}}var Vy=Math.ceil,Tu=D.ReactCurrentDispatcher,id=D.ReactCurrentOwner,Oi=D.ReactCurrentBatchConfig,Lt=0,Rn=null,xn=null,On=0,Mi=0,Fa=is(0),Mn=0,el=null,Vs=0,wu=0,rd=0,tl=null,ci=null,sd=0,Oa=1/0,Dr=null,bu=!1,ad=null,us=null,Au=!1,cs=null,Cu=0,nl=0,od=null,Ru=-1,Pu=0;function ei(){return(Lt&6)!==0?Q():Ru!==-1?Ru:Ru=Q()}function fs(n){return(n.mode&1)===0?1:(Lt&2)!==0&&On!==0?On&-On:Ty.transition!==null?(Pu===0&&(Pu=$r()),Pu):(n=mt,n!==0||(n=window.event,n=n===void 0?16:am(n.type)),n)}function er(n,r,l,f){if(50<nl)throw nl=0,od=null,Error(t(185));mn(n,l,f),((Lt&2)===0||n!==Rn)&&(n===Rn&&((Lt&2)===0&&(wu|=l),Mn===4&&ds(n,On)),fi(n,f),l===1&&Lt===0&&(r.mode&1)===0&&(Oa=Q()+500,ru&&ss()))}function fi(n,r){var l=n.callbackNode;jr(n,r);var f=bt(n,n===Rn?On:0);if(f===0)l!==null&&zl(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&zl(l),r===1)n.tag===0?Ey(ax.bind(null,n)):Xm(ax.bind(null,n)),vy(function(){(Lt&6)===0&&ss()}),l=null;else{switch(xa(f)){case 1:l=j;break;case 4:l=Ce;break;case 16:l=Ne;break;case 536870912:l=He;break;default:l=Ne}l=px(l,sx.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function sx(n,r){if(Ru=-1,Pu=0,(Lt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(ka()&&n.callbackNode!==l)return null;var f=bt(n,n===Rn?On:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=Du(n,f);else{r=f;var m=Lt;Lt|=2;var g=lx();(Rn!==n||On!==r)&&(Dr=null,Oa=Q()+500,Hs(n,r));do try{Wy();break}catch(F){ox(n,F)}while(!0);wf(),Tu.current=g,Lt=m,xn!==null?r=0:(Rn=null,On=0,r=Mn)}if(r!==0){if(r===2&&(m=Nn(n),m!==0&&(f=m,r=ld(n,m))),r===1)throw l=el,Hs(n,0),ds(n,f),fi(n,Q()),l;if(r===6)ds(n,f);else{if(m=n.current.alternate,(f&30)===0&&!Gy(m)&&(r=Du(n,f),r===2&&(g=Nn(n),g!==0&&(f=g,r=ld(n,g))),r===1))throw l=el,Hs(n,0),ds(n,f),fi(n,Q()),l;switch(n.finishedWork=m,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:Ws(n,ci,Dr);break;case 3:if(ds(n,f),(f&130023424)===f&&(r=sd+500-Q(),10<r)){if(bt(n,0)!==0)break;if(m=n.suspendedLanes,(m&f)!==f){ei(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=pf(Ws.bind(null,n,ci,Dr),r);break}Ws(n,ci,Dr);break;case 4:if(ds(n,f),(f&4194240)===f)break;for(r=n.eventTimes,m=-1;0<f;){var T=31-ft(f);g=1<<T,T=r[T],T>m&&(m=T),f&=~g}if(f=m,f=Q()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*Vy(f/1960))-f,10<f){n.timeoutHandle=pf(Ws.bind(null,n,ci,Dr),f);break}Ws(n,ci,Dr);break;case 5:Ws(n,ci,Dr);break;default:throw Error(t(329))}}}return fi(n,Q()),n.callbackNode===l?sx.bind(null,n):null}function ld(n,r){var l=tl;return n.current.memoizedState.isDehydrated&&(Hs(n,r).flags|=256),n=Du(n,r),n!==2&&(r=ci,ci=l,r!==null&&ud(r)),n}function ud(n){ci===null?ci=n:ci.push.apply(ci,n)}function Gy(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],g=m.getSnapshot;m=m.value;try{if(!$i(g(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ds(n,r){for(r&=~rd,r&=~wu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-ft(r),f=1<<l;n[l]=-1,r&=~f}}function ax(n){if((Lt&6)!==0)throw Error(t(327));ka();var r=bt(n,0);if((r&1)===0)return fi(n,Q()),null;var l=Du(n,r);if(n.tag!==0&&l===2){var f=Nn(n);f!==0&&(r=f,l=ld(n,f))}if(l===1)throw l=el,Hs(n,0),ds(n,r),fi(n,Q()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ws(n,ci,Dr),fi(n,Q()),null}function cd(n,r){var l=Lt;Lt|=1;try{return n(r)}finally{Lt=l,Lt===0&&(Oa=Q()+500,ru&&ss())}}function Gs(n){cs!==null&&cs.tag===0&&(Lt&6)===0&&ka();var r=Lt;Lt|=1;var l=Oi.transition,f=mt;try{if(Oi.transition=null,mt=1,n)return n()}finally{mt=f,Oi.transition=l,Lt=r,(Lt&6)===0&&ss()}}function fd(){Mi=Fa.current,$t(Fa)}function Hs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,gy(l)),xn!==null)for(l=xn.return;l!==null;){var f=l;switch(yf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&nu();break;case 3:Ua(),$t(oi),$t(zn),Uf();break;case 5:Df(f);break;case 4:Ua();break;case 13:$t(rn);break;case 19:$t(rn);break;case 10:bf(f.type._context);break;case 22:case 23:fd()}l=l.return}if(Rn=n,xn=n=hs(n.current,null),On=Mi=r,Mn=0,el=null,rd=wu=Vs=0,ci=tl=null,ks!==null){for(r=0;r<ks.length;r++)if(l=ks[r],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,g=l.pending;if(g!==null){var T=g.next;g.next=m,f.next=T}l.pending=f}ks=null}return n}function ox(n,r){do{var l=xn;try{if(wf(),pu.current=gu,mu){for(var f=sn.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}mu=!1}if(Bs=0,Cn=Sn=sn=null,jo=!1,$o=0,id.current=null,l===null||l.return===null){Mn=1,el=r,xn=null;break}e:{var g=n,T=l.return,F=l,G=r;if(r=On,F.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var le=G,ye=F,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ve=L0(T);if(Ve!==null){Ve.flags&=-257,U0(Ve,T,F,g,r),Ve.mode&1&&D0(g,le,r),r=Ve,G=le;var qe=r.updateQueue;if(qe===null){var $e=new Set;$e.add(G),r.updateQueue=$e}else qe.add(G);break e}else{if((r&1)===0){D0(g,le,r),dd();break e}G=Error(t(426))}}else if(en&&F.mode&1){var hn=L0(T);if(hn!==null){(hn.flags&65536)===0&&(hn.flags|=256),U0(hn,T,F,g,r),Ef(Ia(G,F));break e}}g=G=Ia(G,F),Mn!==4&&(Mn=2),tl===null?tl=[g]:tl.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var Z=R0(g,G,r);n0(g,Z);break e;case 1:F=G;var X=g.type,ee=g.stateNode;if((g.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(us===null||!us.has(ee)))){g.flags|=65536,r&=-r,g.lanes|=r;var we=P0(g,F,r);n0(g,we);break e}}g=g.return}while(g!==null)}cx(l)}catch(Ze){r=Ze,xn===l&&l!==null&&(xn=l=l.return);continue}break}while(!0)}function lx(){var n=Tu.current;return Tu.current=gu,n===null?gu:n}function dd(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),Rn===null||(Vs&268435455)===0&&(wu&268435455)===0||ds(Rn,On)}function Du(n,r){var l=Lt;Lt|=2;var f=lx();(Rn!==n||On!==r)&&(Dr=null,Hs(n,r));do try{Hy();break}catch(m){ox(n,m)}while(!0);if(wf(),Lt=l,Tu.current=f,xn!==null)throw Error(t(261));return Rn=null,On=0,Mn}function Hy(){for(;xn!==null;)ux(xn)}function Wy(){for(;xn!==null&&!P();)ux(xn)}function ux(n){var r=hx(n.alternate,n,Mi);n.memoizedProps=n.pendingProps,r===null?cx(n):xn=r,id.current=null}function cx(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Fy(l,r,Mi),l!==null){xn=l;return}}else{if(l=Oy(l,r),l!==null){l.flags&=32767,xn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Mn=6,xn=null;return}}if(r=r.sibling,r!==null){xn=r;return}xn=r=n}while(r!==null);Mn===0&&(Mn=5)}function Ws(n,r,l){var f=mt,m=Oi.transition;try{Oi.transition=null,mt=1,Xy(n,r,l,f)}finally{Oi.transition=m,mt=f}return null}function Xy(n,r,l,f){do ka();while(cs!==null);if((Lt&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=l.lanes|l.childLanes;if(ai(n,g),n===Rn&&(xn=Rn=null,On=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Au||(Au=!0,px(Ne,function(){return ka(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=Oi.transition,Oi.transition=null;var T=mt;mt=1;var F=Lt;Lt|=4,id.current=null,zy(n,l),ex(l,n),fy(df),Gl=!!ff,df=ff=null,n.current=l,By(l),q(),Lt=F,mt=T,Oi.transition=g}else n.current=l;if(Au&&(Au=!1,cs=n,Cu=m),g=n.pendingLanes,g===0&&(us=null),rt(l.stateNode),fi(n,Q()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(bu)throw bu=!1,n=ad,ad=null,n;return(Cu&1)!==0&&n.tag!==0&&ka(),g=n.pendingLanes,(g&1)!==0?n===od?nl++:(nl=0,od=n):nl=0,ss(),null}function ka(){if(cs!==null){var n=xa(Cu),r=Oi.transition,l=mt;try{if(Oi.transition=null,mt=16>n?16:n,cs===null)var f=!1;else{if(n=cs,cs=null,Cu=0,(Lt&6)!==0)throw Error(t(331));var m=Lt;for(Lt|=4,Ye=n.current;Ye!==null;){var g=Ye,T=g.child;if((Ye.flags&16)!==0){var F=g.deletions;if(F!==null){for(var G=0;G<F.length;G++){var le=F[G];for(Ye=le;Ye!==null;){var ye=Ye;switch(ye.tag){case 0:case 11:case 15:Jo(8,ye,g)}var Se=ye.child;if(Se!==null)Se.return=ye,Ye=Se;else for(;Ye!==null;){ye=Ye;var ve=ye.sibling,Ve=ye.return;if($0(ye),ye===le){Ye=null;break}if(ve!==null){ve.return=Ve,Ye=ve;break}Ye=Ve}}}var qe=g.alternate;if(qe!==null){var $e=qe.child;if($e!==null){qe.child=null;do{var hn=$e.sibling;$e.sibling=null,$e=hn}while($e!==null)}}Ye=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,Ye=T;else e:for(;Ye!==null;){if(g=Ye,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Jo(9,g,g.return)}var Z=g.sibling;if(Z!==null){Z.return=g.return,Ye=Z;break e}Ye=g.return}}var X=n.current;for(Ye=X;Ye!==null;){T=Ye;var ee=T.child;if((T.subtreeFlags&2064)!==0&&ee!==null)ee.return=T,Ye=ee;else e:for(T=X;Ye!==null;){if(F=Ye,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Eu(9,F)}}catch(Ze){un(F,F.return,Ze)}if(F===T){Ye=null;break e}var we=F.sibling;if(we!==null){we.return=F.return,Ye=we;break e}Ye=F.return}}if(Lt=m,ss(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(st,n)}catch{}f=!0}return f}finally{mt=l,Oi.transition=r}}return!1}function fx(n,r,l){r=Ia(l,r),r=R0(n,r,1),n=os(n,r,1),r=ei(),n!==null&&(mn(n,1,r),fi(n,r))}function un(n,r,l){if(n.tag===3)fx(n,n,l);else for(;r!==null;){if(r.tag===3){fx(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(us===null||!us.has(f))){n=Ia(l,n),n=P0(r,n,1),r=os(r,n,1),n=ei(),r!==null&&(mn(r,1,n),fi(r,n));break}}r=r.return}}function Yy(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=ei(),n.pingedLanes|=n.suspendedLanes&l,Rn===n&&(On&l)===l&&(Mn===4||Mn===3&&(On&130023424)===On&&500>Q()-sd?Hs(n,0):rd|=l),fi(n,r)}function dx(n,r){r===0&&((n.mode&1)===0?r=1:(r=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var l=ei();n=Cr(n,r),n!==null&&(mn(n,r,l),fi(n,l))}function qy(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),dx(n,l)}function jy(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),dx(n,l)}var hx;hx=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||oi.current)ui=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return ui=!1,Ny(n,r,l);ui=(n.flags&131072)!==0}else ui=!1,en&&(r.flags&1048576)!==0&&Ym(r,au,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;Su(n,r),n=r.pendingProps;var m=ba(r,zn.current);La(r,l),m=Ff(null,r,f,n,m,l);var g=Of();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,li(f)?(g=!0,iu(r)):g=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Rf(r),m.updater=vu,r.stateNode=m,m._reactInternals=r,Hf(r,f,n,l),r=qf(null,r,f,!0,g,l)):(r.tag=0,en&&g&&vf(r),Jn(null,r,m,l),r=r.child),r;case 16:f=r.elementType;e:{switch(Su(n,r),n=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=Ky(f),n=Zi(f,n),m){case 0:r=Yf(null,r,f,n,l);break e;case 1:r=z0(null,r,f,n,l);break e;case 11:r=I0(null,r,f,n,l);break e;case 14:r=N0(null,r,f,Zi(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Zi(f,m),Yf(n,r,f,m,l);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Zi(f,m),z0(n,r,f,m,l);case 3:e:{if(B0(r),n===null)throw Error(t(387));f=r.pendingProps,g=r.memoizedState,m=g.element,t0(n,r),du(r,f,null,l);var T=r.memoizedState;if(f=T.element,g.isDehydrated)if(g={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){m=Ia(Error(t(423)),r),r=V0(n,r,f,l,m);break e}else if(f!==m){m=Ia(Error(t(424)),r),r=V0(n,r,f,l,m);break e}else for(Si=ns(r.stateNode.containerInfo.firstChild),yi=r,en=!0,Ki=null,l=Jm(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ra(),f===m){r=Pr(n,r,l);break e}Jn(n,r,f,l)}r=r.child}return r;case 5:return r0(r),n===null&&Mf(r),f=r.type,m=r.pendingProps,g=n!==null?n.memoizedProps:null,T=m.children,hf(f,m)?T=null:g!==null&&hf(f,g)&&(r.flags|=32),k0(n,r),Jn(n,r,T,l),r.child;case 6:return n===null&&Mf(r),null;case 13:return G0(n,r,l);case 4:return Pf(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=Pa(r,null,f,l):Jn(n,r,f,l),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Zi(f,m),I0(n,r,f,m,l);case 7:return Jn(n,r,r.pendingProps,l),r.child;case 8:return Jn(n,r,r.pendingProps.children,l),r.child;case 12:return Jn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,g=r.memoizedProps,T=m.value,Yt(uu,f._currentValue),f._currentValue=T,g!==null)if($i(g.value,T)){if(g.children===m.children&&!oi.current){r=Pr(n,r,l);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var F=g.dependencies;if(F!==null){T=g.child;for(var G=F.firstContext;G!==null;){if(G.context===f){if(g.tag===1){G=Rr(-1,l&-l),G.tag=2;var le=g.updateQueue;if(le!==null){le=le.shared;var ye=le.pending;ye===null?G.next=G:(G.next=ye.next,ye.next=G),le.pending=G}}g.lanes|=l,G=g.alternate,G!==null&&(G.lanes|=l),Af(g.return,l,r),F.lanes|=l;break}G=G.next}}else if(g.tag===10)T=g.type===r.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=l,F=T.alternate,F!==null&&(F.lanes|=l),Af(T,l,r),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===r){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}Jn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,La(r,l),m=Ni(m),f=f(m),r.flags|=1,Jn(n,r,f,l),r.child;case 14:return f=r.type,m=Zi(f,r.pendingProps),m=Zi(f.type,m),N0(n,r,f,m,l);case 15:return F0(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Zi(f,m),Su(n,r),r.tag=1,li(f)?(n=!0,iu(r)):n=!1,La(r,l),A0(r,f,m),Hf(r,f,m,l),qf(null,r,f,!0,n,l);case 19:return W0(n,r,l);case 22:return O0(n,r,l)}throw Error(t(156,r.tag))};function px(n,r){return kl(n,r)}function $y(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(n,r,l,f){return new $y(n,r,l,f)}function hd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ky(n){if(typeof n=="function")return hd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===ie)return 14}return 2}function hs(n,r){var l=n.alternate;return l===null?(l=ki(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Lu(n,r,l,f,m,g){var T=2;if(f=n,typeof n=="function")hd(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case I:return Xs(l.children,m,g,r);case k:T=8,m|=8;break;case w:return n=ki(12,l,r,m|2),n.elementType=w,n.lanes=g,n;case Y:return n=ki(13,l,r,m),n.elementType=Y,n.lanes=g,n;case oe:return n=ki(19,l,r,m),n.elementType=oe,n.lanes=g,n;case fe:return Uu(l,m,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:T=10;break e;case B:T=9;break e;case W:T=11;break e;case ie:T=14;break e;case re:T=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ki(T,l,r,m),r.elementType=n,r.type=f,r.lanes=g,r}function Xs(n,r,l,f){return n=ki(7,n,f,r),n.lanes=l,n}function Uu(n,r,l,f){return n=ki(22,n,f,r),n.elementType=fe,n.lanes=l,n.stateNode={isHidden:!1},n}function pd(n,r,l){return n=ki(6,n,null,r),n.lanes=l,n}function md(n,r,l){return r=ki(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Zy(n,r,l,f,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ht(0),this.expirationTimes=Ht(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ht(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function xd(n,r,l,f,m,g,T,F,G){return n=new Zy(n,r,l,F,G),r===1?(r=1,g===!0&&(r|=8)):r=0,g=ki(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(g),n}function Qy(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function mx(n){if(!n)return rs;n=n._reactInternals;e:{if(Tt(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(li(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(li(l))return Hm(n,l,r)}return r}function xx(n,r,l,f,m,g,T,F,G){return n=xd(l,f,!0,n,m,g,T,F,G),n.context=mx(null),l=n.current,f=ei(),m=fs(l),g=Rr(f,m),g.callback=r??null,os(l,g,m),n.current.lanes=m,mn(n,m,f),fi(n,f),n}function Iu(n,r,l,f){var m=r.current,g=ei(),T=fs(m);return l=mx(l),r.context===null?r.context=l:r.pendingContext=l,r=Rr(g,T),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=os(m,r,T),n!==null&&(er(n,m,T,g),fu(n,m,T)),T}function Nu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _x(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function _d(n,r){_x(n,r),(n=n.alternate)&&_x(n,r)}function Jy(){return null}var gx=typeof reportError=="function"?reportError:function(n){console.error(n)};function gd(n){this._internalRoot=n}Fu.prototype.render=gd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Iu(n,r,null,null)},Fu.prototype.unmount=gd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Gs(function(){Iu(null,n,null,null)}),r[Tr]=null}};function Fu(n){this._internalRoot=n}Fu.prototype.unstable_scheduleHydration=function(n){if(n){var r=tm();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Jr.length&&r!==0&&r<Jr[l].priority;l++);Jr.splice(l,0,n),l===0&&rm(n)}};function vd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vx(){}function eS(n,r,l,f,m){if(m){if(typeof f=="function"){var g=f;f=function(){var le=Nu(T);g.call(le)}}var T=xx(r,f,n,0,null,!1,!1,"",vx);return n._reactRootContainer=T,n[Tr]=T.current,Bo(n.nodeType===8?n.parentNode:n),Gs(),T}for(;m=n.lastChild;)n.removeChild(m);if(typeof f=="function"){var F=f;f=function(){var le=Nu(G);F.call(le)}}var G=xd(n,0,!1,null,null,!1,!1,"",vx);return n._reactRootContainer=G,n[Tr]=G.current,Bo(n.nodeType===8?n.parentNode:n),Gs(function(){Iu(r,G,l,f)}),G}function ku(n,r,l,f,m){var g=l._reactRootContainer;if(g){var T=g;if(typeof m=="function"){var F=m;m=function(){var G=Nu(T);F.call(G)}}Iu(r,T,n,m)}else T=eS(l,r,n,m,f);return Nu(T)}or=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=kt(r.pendingLanes);l!==0&&(yn(r,l|1),fi(r,Q()),(Lt&6)===0&&(Oa=Q()+500,ss()))}break;case 13:Gs(function(){var f=Cr(n,1);if(f!==null){var m=ei();er(f,n,1,m)}}),_d(n,1)}},Hc=function(n){if(n.tag===13){var r=Cr(n,134217728);if(r!==null){var l=ei();er(r,n,134217728,l)}_d(n,134217728)}},em=function(n){if(n.tag===13){var r=fs(n),l=Cr(n,r);if(l!==null){var f=ei();er(l,n,r,f)}_d(n,r)}},tm=function(){return mt},nm=function(n,r){var l=mt;try{return mt=n,r()}finally{mt=l}},be=function(n,r,l){switch(r){case"input":if(pt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var m=tu(f);if(!m)throw Error(t(90));Vt(f),pt(f,m)}}}break;case"textarea":b(n,l);break;case"select":r=l.value,r!=null&&ke(n,!!l.multiple,r,!1)}},De=cd,Et=Gs;var tS={usingClientEntryPoint:!1,Events:[Ho,Ta,tu,ne,pe,cd]},il={findFiberByHostInstance:Is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nS={bundleType:il.bundleType,version:il.version,rendererPackageName:il.rendererPackageName,rendererConfig:il.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=bn(n),n===null?null:n.stateNode},findFiberByHostInstance:il.findFiberByHostInstance||Jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{st=zu.inject(nS),Je=zu}catch{}}return di.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tS,di.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(r))throw Error(t(200));return Qy(n,r,null,l)},di.createRoot=function(n,r){if(!vd(n))throw Error(t(299));var l=!1,f="",m=gx;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=xd(n,1,!1,null,null,l,!1,f,m),n[Tr]=r.current,Bo(n.nodeType===8?n.parentNode:n),new gd(r)},di.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=bn(r),n=n===null?null:n.stateNode,n},di.flushSync=function(n){return Gs(n)},di.hydrate=function(n,r,l){if(!Ou(r))throw Error(t(200));return ku(null,n,r,!0,l)},di.hydrateRoot=function(n,r,l){if(!vd(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,g="",T=gx;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=xx(r,null,n,1,l??null,m,!1,g,T),n[Tr]=r.current,Bo(n),f)for(n=0;n<f.length;n++)l=f[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new Fu(r)},di.render=function(n,r,l){if(!Ou(r))throw Error(t(200));return ku(null,n,r,!1,l)},di.unmountComponentAtNode=function(n){if(!Ou(n))throw Error(t(40));return n._reactRootContainer?(Gs(function(){ku(null,null,n,!1,function(){n._reactRootContainer=null,n[Tr]=null})}),!0):!1},di.unstable_batchedUpdates=cd,di.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Ou(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ku(n,r,l,!1,f)},di.version="18.3.1-next-f1338f8080-20240426",di}var Ax;function fS(){if(Ax)return Md.exports;Ax=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Md.exports=cS(),Md.exports}var Cx;function dS(){if(Cx)return Bu;Cx=1;var a=fS();return Bu.createRoot=a.createRoot,Bu.hydrateRoot=a.hydrateRoot,Bu}var hS=dS();const pS=Y_(hS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="181",mS=0,Rx=1,xS=2,q_=1,_S=2,kr=3,Ps=0,hi=1,Vr=2,gr=0,oo=1,sa=2,Px=3,Dx=4,gS=5,ia=100,vS=101,yS=102,SS=103,MS=104,ES=200,TS=201,wS=202,bS=203,ph=204,mh=205,AS=206,CS=207,RS=208,PS=209,DS=210,LS=211,US=212,IS=213,NS=214,xh=0,_h=1,gh=2,ho=3,vh=4,yh=5,Sh=6,Mh=7,j_=0,FS=1,OS=2,bs=0,kS=1,zS=2,BS=3,VS=4,GS=5,HS=6,WS=7,$_=300,po=301,mo=302,Eh=303,Th=304,Nc=306,wh=1e3,Gr=1001,bh=1002,Ci=1003,XS=1004,Vu=1005,Wi=1006,wd=1007,aa=1008,yr=1009,K_=1010,Z_=1011,Sl=1012,Ep=1013,da=1014,Hr=1015,vr=1016,Tp=1017,wp=1018,Ml=1020,Q_=35902,J_=35899,eg=1021,tg=1022,sr=1023,El=1026,Tl=1027,ng=1028,bp=1029,Ap=1030,Cp=1031,Rp=1033,hc=33776,pc=33777,mc=33778,xc=33779,Ah=35840,Ch=35841,Rh=35842,Ph=35843,Dh=36196,Lh=37492,Uh=37496,Ih=37808,Nh=37809,Fh=37810,Oh=37811,kh=37812,zh=37813,Bh=37814,Vh=37815,Gh=37816,Hh=37817,Wh=37818,Xh=37819,Yh=37820,qh=37821,jh=36492,$h=36494,Kh=36495,Zh=36283,Qh=36284,Jh=36285,ep=36286,YS=3200,qS=3201,ig=0,jS=1,Ss="",Vi="srgb",xo="srgb-linear",Mc="linear",zt="srgb",za=7680,Lx=519,$S=512,KS=513,ZS=514,rg=515,QS=516,JS=517,e1=518,t1=519,tp=35044,bd=35048,Ux="300 es",xr=2e3,Ec=2001;function sg(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Tc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function n1(){const a=Tc("canvas");return a.style.display="block",a}const Ix={};function wc(...a){const e="THREE."+a.shift();console.log(e,...a)}function vt(...a){const e="THREE."+a.shift();console.warn(e,...a)}function cn(...a){const e="THREE."+a.shift();console.error(e,...a)}function wl(...a){const e=a.join(" ");e in Ix||(Ix[e]=!0,vt(...a))}function i1(a,e,t){return new Promise(function(i,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}class wo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ad=Math.PI/180,np=180/Math.PI;function As(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]).toLowerCase()}function Ct(a,e,t){return Math.max(e,Math.min(t,a))}function r1(a,e){return(a%e+e)%e}function Cd(a,e,t){return(1-t)*a+t*e}function pr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Bt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*s+e.x,this.y=o*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ul{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,u,c){let d=i[s+0],h=i[s+1],p=i[s+2],x=i[s+3],_=o[u+0],y=o[u+1],E=o[u+2],M=o[u+3];if(c<=0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(c>=1){e[t+0]=_,e[t+1]=y,e[t+2]=E,e[t+3]=M;return}if(x!==M||d!==_||h!==y||p!==E){let S=d*_+h*y+p*E+x*M;S<0&&(_=-_,y=-y,E=-E,M=-M,S=-S);let v=1-c;if(S<.9995){const L=Math.acos(S),C=Math.sin(L);v=Math.sin(v*L)/C,c=Math.sin(c*L)/C,d=d*v+_*c,h=h*v+y*c,p=p*v+E*c,x=x*v+M*c}else{d=d*v+_*c,h=h*v+y*c,p=p*v+E*c,x=x*v+M*c;const L=1/Math.sqrt(d*d+h*h+p*p+x*x);d*=L,h*=L,p*=L,x*=L}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=x}static multiplyQuaternionsFlat(e,t,i,s,o,u){const c=i[s],d=i[s+1],h=i[s+2],p=i[s+3],x=o[u],_=o[u+1],y=o[u+2],E=o[u+3];return e[t]=c*E+p*x+d*y-h*_,e[t+1]=d*E+p*_+h*x-c*y,e[t+2]=h*E+p*y+c*_-d*x,e[t+3]=p*E-c*x-d*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(i/2),p=c(s/2),x=c(o/2),_=d(i/2),y=d(s/2),E=d(o/2);switch(u){case"XYZ":this._x=_*p*x+h*y*E,this._y=h*y*x-_*p*E,this._z=h*p*E+_*y*x,this._w=h*p*x-_*y*E;break;case"YXZ":this._x=_*p*x+h*y*E,this._y=h*y*x-_*p*E,this._z=h*p*E-_*y*x,this._w=h*p*x+_*y*E;break;case"ZXY":this._x=_*p*x-h*y*E,this._y=h*y*x+_*p*E,this._z=h*p*E+_*y*x,this._w=h*p*x-_*y*E;break;case"ZYX":this._x=_*p*x-h*y*E,this._y=h*y*x+_*p*E,this._z=h*p*E-_*y*x,this._w=h*p*x+_*y*E;break;case"YZX":this._x=_*p*x+h*y*E,this._y=h*y*x+_*p*E,this._z=h*p*E-_*y*x,this._w=h*p*x-_*y*E;break;case"XZY":this._x=_*p*x-h*y*E,this._y=h*y*x-_*p*E,this._z=h*p*E+_*y*x,this._w=h*p*x+_*y*E;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],x=t[10],_=i+c+x;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(p-d)*y,this._y=(o-h)*y,this._z=(u-s)*y}else if(i>c&&i>x){const y=2*Math.sqrt(1+i-c-x);this._w=(p-d)/y,this._x=.25*y,this._y=(s+u)/y,this._z=(o+h)/y}else if(c>x){const y=2*Math.sqrt(1+c-i-x);this._w=(o-h)/y,this._x=(s+u)/y,this._y=.25*y,this._z=(d+p)/y}else{const y=2*Math.sqrt(1+x-i-c);this._w=(u-s)/y,this._x=(o+h)/y,this._y=(d+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+u*c+s*h-o*d,this._y=s*p+u*d+o*c-i*h,this._z=o*p+u*h+i*d-s*c,this._w=u*p-i*c-s*d-o*h,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,o=e._z,u=e._w,c=this.dot(e);c<0&&(i=-i,s=-s,o=-o,u=-u,c=-c);let d=1-t;if(c<.9995){const h=Math.acos(c),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,i=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*s-c*i),p=2*(c*t-o*s),x=2*(o*i-u*t);return this.x=t+d*h+u*x-c*p,this.y=i+d*p+c*h-o*x,this.z=s+d*x+o*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,u=t.x,c=t.y,d=t.z;return this.x=s*d-o*c,this.y=o*u-i*d,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rd.copy(this).projectOnVector(e),this.sub(Rd)}reflect(e){return this.sub(Rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rd=new ae,Nx=new Ul;class yt{constructor(e,t,i,s,o,u,c,d,h){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,u,c,d,h)}set(e,t,i,s,o,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=o,p[5]=d,p[6]=i,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[3],d=i[6],h=i[1],p=i[4],x=i[7],_=i[2],y=i[5],E=i[8],M=s[0],S=s[3],v=s[6],L=s[1],C=s[4],D=s[7],U=s[2],R=s[5],I=s[8];return o[0]=u*M+c*L+d*U,o[3]=u*S+c*C+d*R,o[6]=u*v+c*D+d*I,o[1]=h*M+p*L+x*U,o[4]=h*S+p*C+x*R,o[7]=h*v+p*D+x*I,o[2]=_*M+y*L+E*U,o[5]=_*S+y*C+E*R,o[8]=_*v+y*D+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-i*o*p+i*c*d+s*o*h-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],x=p*u-c*h,_=c*d-p*o,y=h*o-u*d,E=t*x+i*_+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=x*M,e[1]=(s*h-p*i)*M,e[2]=(c*i-s*u)*M,e[3]=_*M,e[4]=(p*t-s*d)*M,e[5]=(s*o-c*t)*M,e[6]=y*M,e[7]=(i*d-h*t)*M,e[8]=(u*t-i*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,u,c){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*u+h*c)+u+e,-s*h,s*d,-s*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Pd.makeScale(e,t)),this}rotate(e){return this.premultiply(Pd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pd=new yt,Fx=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ox=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s1(){const a={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(s,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===zt&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===zt&&(s.r=lo(s.r),s.g=lo(s.g),s.b=lo(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ss?Mc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,u){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return wl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return wl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[xo]:{primaries:e,whitePoint:i,transfer:Mc,toXYZ:Fx,fromXYZ:Ox,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vi},outputColorSpaceConfig:{drawingBufferColorSpace:Vi}},[Vi]:{primaries:e,whitePoint:i,transfer:zt,toXYZ:Fx,fromXYZ:Ox,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vi}}}),a}const Nt=s1();function Wr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function lo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ba;class a1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ba===void 0&&(Ba=Tc("canvas")),Ba.width=e.width,Ba.height=e.height;const s=Ba.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ba}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Wr(o[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wr(t[i]/255)*255):t[i]=Wr(t[i]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o1=0;class Pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=As(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?o.push(Dd(s[u].image)):o.push(Dd(s[u]))}else o=Dd(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Dd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?a1.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let l1=0;const Ld=new ae;class qn extends wo{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,i=Gr,s=Gr,o=Wi,u=aa,c=sr,d=yr,h=qn.DEFAULT_ANISOTROPY,p=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=As(),this.name="",this.source=new Pp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ld).x}get height(){return this.source.getSize(Ld).y}get depth(){return this.source.getSize(Ld).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wh:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wh:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=$_;qn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,t=0,i=0,s=1){fn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const d=e.elements,h=d[0],p=d[4],x=d[8],_=d[1],y=d[5],E=d[9],M=d[2],S=d[6],v=d[10];if(Math.abs(p-_)<.01&&Math.abs(x-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(p+_)<.1&&Math.abs(x+M)<.1&&Math.abs(E+S)<.1&&Math.abs(h+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,D=(y+1)/2,U=(v+1)/2,R=(p+_)/4,I=(x+M)/4,k=(E+S)/4;return C>D&&C>U?C<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(C),s=R/i,o=I/i):D>U?D<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(D),i=R/s,o=k/s):U<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(U),i=I/o,s=k/o),this.set(i,s,o,t),this}let L=Math.sqrt((S-E)*(S-E)+(x-M)*(x-M)+(_-p)*(_-p));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(x-M)/L,this.z=(_-p)/L,this.w=Math.acos((h+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u1 extends wo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new fn(0,0,e,t),this.scissorTest=!1,this.viewport=new fn(0,0,e,t);const s={width:e,height:t,depth:i.depth},o=new qn(s);this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Wi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Pp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends u1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ag extends qn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class c1 extends qn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,tr):tr.fromBufferAttribute(o,u),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gu.copy(i.boundingBox)),Gu.applyMatrix4(e.matrixWorld),this.union(Gu)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sl),Hu.subVectors(this.max,sl),Va.subVectors(e.a,sl),Ga.subVectors(e.b,sl),Ha.subVectors(e.c,sl),ms.subVectors(Ga,Va),xs.subVectors(Ha,Ga),Ys.subVectors(Va,Ha);let t=[0,-ms.z,ms.y,0,-xs.z,xs.y,0,-Ys.z,Ys.y,ms.z,0,-ms.x,xs.z,0,-xs.x,Ys.z,0,-Ys.x,-ms.y,ms.x,0,-xs.y,xs.x,0,-Ys.y,Ys.x,0];return!Ud(t,Va,Ga,Ha,Hu)||(t=[1,0,0,0,1,0,0,0,1],!Ud(t,Va,Ga,Ha,Hu))?!1:(Wu.crossVectors(ms,xs),t=[Wu.x,Wu.y,Wu.z],Ud(t,Va,Ga,Ha,Hu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Lr=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],tr=new ae,Gu=new Il,Va=new ae,Ga=new ae,Ha=new ae,ms=new ae,xs=new ae,Ys=new ae,sl=new ae,Hu=new ae,Wu=new ae,qs=new ae;function Ud(a,e,t,i,s){for(let o=0,u=a.length-3;o<=u;o+=3){qs.fromArray(a,o);const c=s.x*Math.abs(qs.x)+s.y*Math.abs(qs.y)+s.z*Math.abs(qs.z),d=e.dot(qs),h=t.dot(qs),p=i.dot(qs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const f1=new Il,al=new ae,Id=new ae;class Fc{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):f1.setFromPoints(e).getCenter(i);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);const t=al.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(al,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(Id)),this.expandByPoint(al.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ur=new ae,Nd=new ae,Xu=new ae,_s=new ae,Fd=new ae,Yu=new ae,Od=new ae;class og{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ur.copy(this.origin).addScaledVector(this.direction,t),Ur.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Nd.copy(e).add(t).multiplyScalar(.5),Xu.copy(t).sub(e).normalize(),_s.copy(this.origin).sub(Nd);const o=e.distanceTo(t)*.5,u=-this.direction.dot(Xu),c=_s.dot(this.direction),d=-_s.dot(Xu),h=_s.lengthSq(),p=Math.abs(1-u*u);let x,_,y,E;if(p>0)if(x=u*d-c,_=u*c-d,E=o*p,x>=0)if(_>=-E)if(_<=E){const M=1/p;x*=M,_*=M,y=x*(x+u*_+2*c)+_*(u*x+_+2*d)+h}else _=o,x=Math.max(0,-(u*_+c)),y=-x*x+_*(_+2*d)+h;else _=-o,x=Math.max(0,-(u*_+c)),y=-x*x+_*(_+2*d)+h;else _<=-E?(x=Math.max(0,-(-u*o+c)),_=x>0?-o:Math.min(Math.max(-o,-d),o),y=-x*x+_*(_+2*d)+h):_<=E?(x=0,_=Math.min(Math.max(-o,-d),o),y=_*(_+2*d)+h):(x=Math.max(0,-(u*o+c)),_=x>0?o:Math.min(Math.max(-o,-d),o),y=-x*x+_*(_+2*d)+h);else _=u>0?-o:o,x=Math.max(0,-(u*_+c)),y=-x*x+_*(_+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(Nd).addScaledVector(Xu,_),y}intersectSphere(e,t){Ur.subVectors(e.center,this.origin);const i=Ur.dot(this.direction),s=Ur.dot(Ur)-i*i,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),c=i-u,d=i+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,x=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),p>=0?(o=(e.min.y-_.y)*p,u=(e.max.y-_.y)*p):(o=(e.max.y-_.y)*p,u=(e.min.y-_.y)*p),i>u||o>s||((o>i||isNaN(i))&&(i=o),(u<s||isNaN(s))&&(s=u),x>=0?(c=(e.min.z-_.z)*x,d=(e.max.z-_.z)*x):(c=(e.max.z-_.z)*x,d=(e.min.z-_.z)*x),i>d||c>s)||((c>i||i!==i)&&(i=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ur)!==null}intersectTriangle(e,t,i,s,o){Fd.subVectors(t,e),Yu.subVectors(i,e),Od.crossVectors(Fd,Yu);let u=this.direction.dot(Od),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;_s.subVectors(this.origin,e);const d=c*this.direction.dot(Yu.crossVectors(_s,Yu));if(d<0)return null;const h=c*this.direction.dot(Fd.cross(_s));if(h<0||d+h>u)return null;const p=-c*_s.dot(Od);return p<0?null:this.at(p/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,t,i,s,o,u,c,d,h,p,x,_,y,E,M,S){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,u,c,d,h,p,x,_,y,E,M,S)}set(e,t,i,s,o,u,c,d,h,p,x,_,y,E,M,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=s,v[1]=o,v[5]=u,v[9]=c,v[13]=d,v[2]=h,v[6]=p,v[10]=x,v[14]=_,v[3]=y,v[7]=E,v[11]=M,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Wa.setFromMatrixColumn(e,0).length(),o=1/Wa.setFromMatrixColumn(e,1).length(),u=1/Wa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s),p=Math.cos(o),x=Math.sin(o);if(e.order==="XYZ"){const _=u*p,y=u*x,E=c*p,M=c*x;t[0]=d*p,t[4]=-d*x,t[8]=h,t[1]=y+E*h,t[5]=_-M*h,t[9]=-c*d,t[2]=M-_*h,t[6]=E+y*h,t[10]=u*d}else if(e.order==="YXZ"){const _=d*p,y=d*x,E=h*p,M=h*x;t[0]=_+M*c,t[4]=E*c-y,t[8]=u*h,t[1]=u*x,t[5]=u*p,t[9]=-c,t[2]=y*c-E,t[6]=M+_*c,t[10]=u*d}else if(e.order==="ZXY"){const _=d*p,y=d*x,E=h*p,M=h*x;t[0]=_-M*c,t[4]=-u*x,t[8]=E+y*c,t[1]=y+E*c,t[5]=u*p,t[9]=M-_*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const _=u*p,y=u*x,E=c*p,M=c*x;t[0]=d*p,t[4]=E*h-y,t[8]=_*h+M,t[1]=d*x,t[5]=M*h+_,t[9]=y*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,y=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=M-_*x,t[8]=E*x+y,t[1]=x,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=y*x+E,t[10]=_-M*x}else if(e.order==="XZY"){const _=u*d,y=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=-x,t[8]=h*p,t[1]=_*x+M,t[5]=u*p,t[9]=y*x-E,t[2]=E*x-y,t[6]=c*p,t[10]=M*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d1,e,h1)}lookAt(e,t,i){const s=this.elements;return Ei.subVectors(e,t),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),gs.crossVectors(i,Ei),gs.lengthSq()===0&&(Math.abs(i.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),gs.crossVectors(i,Ei)),gs.normalize(),qu.crossVectors(Ei,gs),s[0]=gs.x,s[4]=qu.x,s[8]=Ei.x,s[1]=gs.y,s[5]=qu.y,s[9]=Ei.y,s[2]=gs.z,s[6]=qu.z,s[10]=Ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[4],d=i[8],h=i[12],p=i[1],x=i[5],_=i[9],y=i[13],E=i[2],M=i[6],S=i[10],v=i[14],L=i[3],C=i[7],D=i[11],U=i[15],R=s[0],I=s[4],k=s[8],w=s[12],A=s[1],B=s[5],W=s[9],Y=s[13],oe=s[2],ie=s[6],re=s[10],fe=s[14],H=s[3],de=s[7],$=s[11],O=s[15];return o[0]=u*R+c*A+d*oe+h*H,o[4]=u*I+c*B+d*ie+h*de,o[8]=u*k+c*W+d*re+h*$,o[12]=u*w+c*Y+d*fe+h*O,o[1]=p*R+x*A+_*oe+y*H,o[5]=p*I+x*B+_*ie+y*de,o[9]=p*k+x*W+_*re+y*$,o[13]=p*w+x*Y+_*fe+y*O,o[2]=E*R+M*A+S*oe+v*H,o[6]=E*I+M*B+S*ie+v*de,o[10]=E*k+M*W+S*re+v*$,o[14]=E*w+M*Y+S*fe+v*O,o[3]=L*R+C*A+D*oe+U*H,o[7]=L*I+C*B+D*ie+U*de,o[11]=L*k+C*W+D*re+U*$,o[15]=L*w+C*Y+D*fe+U*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],x=e[6],_=e[10],y=e[14],E=e[3],M=e[7],S=e[11],v=e[15];return E*(+o*d*x-s*h*x-o*c*_+i*h*_+s*c*y-i*d*y)+M*(+t*d*y-t*h*_+o*u*_-s*u*y+s*h*p-o*d*p)+S*(+t*h*x-t*c*y-o*u*x+i*u*y+o*c*p-i*h*p)+v*(-s*c*p-t*d*x+t*c*_+s*u*x-i*u*_+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],x=e[9],_=e[10],y=e[11],E=e[12],M=e[13],S=e[14],v=e[15],L=x*S*h-M*_*h+M*d*y-c*S*y-x*d*v+c*_*v,C=E*_*h-p*S*h-E*d*y+u*S*y+p*d*v-u*_*v,D=p*M*h-E*x*h+E*c*y-u*M*y-p*c*v+u*x*v,U=E*x*d-p*M*d-E*c*_+u*M*_+p*c*S-u*x*S,R=t*L+i*C+s*D+o*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=L*I,e[1]=(M*_*o-x*S*o-M*s*y+i*S*y+x*s*v-i*_*v)*I,e[2]=(c*S*o-M*d*o+M*s*h-i*S*h-c*s*v+i*d*v)*I,e[3]=(x*d*o-c*_*o-x*s*h+i*_*h+c*s*y-i*d*y)*I,e[4]=C*I,e[5]=(p*S*o-E*_*o+E*s*y-t*S*y-p*s*v+t*_*v)*I,e[6]=(E*d*o-u*S*o-E*s*h+t*S*h+u*s*v-t*d*v)*I,e[7]=(u*_*o-p*d*o+p*s*h-t*_*h-u*s*y+t*d*y)*I,e[8]=D*I,e[9]=(E*x*o-p*M*o-E*i*y+t*M*y+p*i*v-t*x*v)*I,e[10]=(u*M*o-E*c*o+E*i*h-t*M*h-u*i*v+t*c*v)*I,e[11]=(p*c*o-u*x*o-p*i*h+t*x*h+u*i*y-t*c*y)*I,e[12]=U*I,e[13]=(p*M*s-E*x*s+E*i*_-t*M*_-p*i*S+t*x*S)*I,e[14]=(E*c*s-u*M*s-E*i*d+t*M*d+u*i*S-t*c*S)*I,e[15]=(u*x*s-p*c*s+p*i*d-t*x*d-u*i*_+t*c*_)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,u=e.x,c=e.y,d=e.z,h=o*u,p=o*c;return this.set(h*u+i,h*c-s*d,h*d+s*c,0,h*c+s*d,p*c+i,p*d-s*u,0,h*d-s*c,p*d+s*u,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,u){return this.set(1,i,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,u=t._y,c=t._z,d=t._w,h=o+o,p=u+u,x=c+c,_=o*h,y=o*p,E=o*x,M=u*p,S=u*x,v=c*x,L=d*h,C=d*p,D=d*x,U=i.x,R=i.y,I=i.z;return s[0]=(1-(M+v))*U,s[1]=(y+D)*U,s[2]=(E-C)*U,s[3]=0,s[4]=(y-D)*R,s[5]=(1-(_+v))*R,s[6]=(S+L)*R,s[7]=0,s[8]=(E+C)*I,s[9]=(S-L)*I,s[10]=(1-(_+M))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=Wa.set(s[0],s[1],s[2]).length();const u=Wa.set(s[4],s[5],s[6]).length(),c=Wa.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],nr.copy(this);const h=1/o,p=1/u,x=1/c;return nr.elements[0]*=h,nr.elements[1]*=h,nr.elements[2]*=h,nr.elements[4]*=p,nr.elements[5]*=p,nr.elements[6]*=p,nr.elements[8]*=x,nr.elements[9]*=x,nr.elements[10]*=x,t.setFromRotationMatrix(nr),i.x=o,i.y=u,i.z=c,this}makePerspective(e,t,i,s,o,u,c=xr,d=!1){const h=this.elements,p=2*o/(t-e),x=2*o/(i-s),_=(t+e)/(t-e),y=(i+s)/(i-s);let E,M;if(d)E=o/(u-o),M=u*o/(u-o);else if(c===xr)E=-(u+o)/(u-o),M=-2*u*o/(u-o);else if(c===Ec)E=-u/(u-o),M=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=x,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,o,u,c=xr,d=!1){const h=this.elements,p=2/(t-e),x=2/(i-s),_=-(t+e)/(t-e),y=-(i+s)/(i-s);let E,M;if(d)E=1/(u-o),M=u/(u-o);else if(c===xr)E=-2/(u-o),M=-(u+o)/(u-o);else if(c===Ec)E=-1/(u-o),M=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=x,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wa=new ae,nr=new ln,d1=new ae(0,0,0),h1=new ae(1,1,1),gs=new ae,qu=new ae,Ei=new ae,kx=new ln,zx=new Ul;class Sr{constructor(e=0,t=0,i=0,s=Sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],u=s[4],c=s[8],d=s[1],h=s[5],p=s[9],x=s[2],_=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-x,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Ct(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-x,o)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zx.setFromEuler(this),this.setFromQuaternion(zx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sr.DEFAULT_ORDER="XYZ";class lg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p1=0;const Bx=new ae,Xa=new Ul,Ir=new ln,ju=new ae,ol=new ae,m1=new ae,x1=new Ul,Vx=new ae(1,0,0),Gx=new ae(0,1,0),Hx=new ae(0,0,1),Wx={type:"added"},_1={type:"removed"},Ya={type:"childadded",child:null},kd={type:"childremoved",child:null};class Ln extends wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new ae,t=new Sr,i=new Ul,s=new ae(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ln},normalMatrix:{value:new yt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xa.setFromAxisAngle(e,t),this.quaternion.multiply(Xa),this}rotateOnWorldAxis(e,t){return Xa.setFromAxisAngle(e,t),this.quaternion.premultiply(Xa),this}rotateX(e){return this.rotateOnAxis(Vx,e)}rotateY(e){return this.rotateOnAxis(Gx,e)}rotateZ(e){return this.rotateOnAxis(Hx,e)}translateOnAxis(e,t){return Bx.copy(e).applyQuaternion(this.quaternion),this.position.add(Bx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vx,e)}translateY(e){return this.translateOnAxis(Gx,e)}translateZ(e){return this.translateOnAxis(Hx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ir.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ju.copy(e):ju.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ir.lookAt(ol,ju,this.up):Ir.lookAt(ju,ol,this.up),this.quaternion.setFromRotationMatrix(Ir),s&&(Ir.extractRotation(s.matrixWorld),Xa.setFromRotationMatrix(Ir),this.quaternion.premultiply(Xa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(cn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wx),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null):cn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_1),kd.child=e,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wx),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,e,m1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,x1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const x=d[h];o(e.shapes,x)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(o(e.materials,this.material[d]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(o(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),x=u(e.shapes),_=u(e.skeletons),y=u(e.animations),E=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),x.length>0&&(i.shapes=x),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=s,i;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ln.DEFAULT_UP=new ae(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ir=new ae,Nr=new ae,zd=new ae,Fr=new ae,qa=new ae,ja=new ae,Xx=new ae,Bd=new ae,Vd=new ae,Gd=new ae,Hd=new fn,Wd=new fn,Xd=new fn;class Hi{constructor(e=new ae,t=new ae,i=new ae){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ir.subVectors(e,t),s.cross(ir);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){ir.subVectors(s,t),Nr.subVectors(i,t),zd.subVectors(e,t);const u=ir.dot(ir),c=ir.dot(Nr),d=ir.dot(zd),h=Nr.dot(Nr),p=Nr.dot(zd),x=u*h-c*c;if(x===0)return o.set(0,0,0),null;const _=1/x,y=(h*d-c*p)*_,E=(u*p-c*d)*_;return o.set(1-y-E,E,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Fr)===null?!1:Fr.x>=0&&Fr.y>=0&&Fr.x+Fr.y<=1}static getInterpolation(e,t,i,s,o,u,c,d){return this.getBarycoord(e,t,i,s,Fr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Fr.x),d.addScaledVector(u,Fr.y),d.addScaledVector(c,Fr.z),d)}static getInterpolatedAttribute(e,t,i,s,o,u){return Hd.setScalar(0),Wd.setScalar(0),Xd.setScalar(0),Hd.fromBufferAttribute(e,t),Wd.fromBufferAttribute(e,i),Xd.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Hd,o.x),u.addScaledVector(Wd,o.y),u.addScaledVector(Xd,o.z),u}static isFrontFacing(e,t,i,s){return ir.subVectors(i,t),Nr.subVectors(e,t),ir.cross(Nr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ir.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),ir.cross(Nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Hi.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let u,c;qa.subVectors(s,i),ja.subVectors(o,i),Bd.subVectors(e,i);const d=qa.dot(Bd),h=ja.dot(Bd);if(d<=0&&h<=0)return t.copy(i);Vd.subVectors(e,s);const p=qa.dot(Vd),x=ja.dot(Vd);if(p>=0&&x<=p)return t.copy(s);const _=d*x-p*h;if(_<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(i).addScaledVector(qa,u);Gd.subVectors(e,o);const y=qa.dot(Gd),E=ja.dot(Gd);if(E>=0&&y<=E)return t.copy(o);const M=y*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(i).addScaledVector(ja,c);const S=p*E-y*x;if(S<=0&&x-p>=0&&y-E>=0)return Xx.subVectors(o,s),c=(x-p)/(x-p+(y-E)),t.copy(s).addScaledVector(Xx,c);const v=1/(S+M+_);return u=M*v,c=_*v,t.copy(i).addScaledVector(qa,u).addScaledVector(ja,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},$u={h:0,s:0,l:0};function Yd(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Nt.workingColorSpace){if(e=r1(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=Yd(u,o,e+1/3),this.g=Yd(u,o,e),this.b=Yd(u,o,e-1/3)}return Nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Vi){function i(o){o!==void 0&&parseFloat(o)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vi){const i=ug[e.toLowerCase()];return i!==void 0?this.setHex(i,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vi){return Nt.workingToColorSpace(Wn.copy(this),e),Math.round(Ct(Wn.r*255,0,255))*65536+Math.round(Ct(Wn.g*255,0,255))*256+Math.round(Ct(Wn.b*255,0,255))}getHexString(e=Vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(Wn.copy(this),t);const i=Wn.r,s=Wn.g,o=Wn.b,u=Math.max(i,s,o),c=Math.min(i,s,o);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const x=u-c;switch(h=p<=.5?x/(u+c):x/(2-u-c),u){case i:d=(s-o)/x+(s<o?6:0);break;case s:d=(o-i)/x+2;break;case o:d=(i-s)/x+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Vi){Nt.workingToColorSpace(Wn.copy(this),e);const t=Wn.r,i=Wn.g,s=Wn.b;return e!==Vi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+t,vs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vs),e.getHSL($u);const i=Cd(vs.h,$u.h,t),s=Cd(vs.s,$u.s,t),o=Cd(vs.l,$u.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new it;it.NAMES=ug;let g1=0;class pa extends wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=As(),this.name="",this.type="Material",this.blending=oo,this.side=Ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(i.blending=this.blending),this.side!==Ps&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ph&&(i.blendSrc=this.blendSrc),this.blendDst!==mh&&(i.blendDst=this.blendDst),this.blendEquation!==ia&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==za&&(i.stencilFail=this.stencilFail),this.stencilZFail!==za&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==za&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const u=[];for(const c in o){const d=o[c];delete d.metadata,u.push(d)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dp extends pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=j_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _n=new ae,Ku=new lt;let v1=0;class En{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tp,this.updateRanges=[],this.gpuType=Hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ku.fromBufferAttribute(this,t),Ku.applyMatrix3(e),this.setXY(t,Ku.x,Ku.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),s=Bt(s,this.array),o=Bt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tp&&(e.usage=this.usage),e}}class cg extends En{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fg extends En{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ji extends En{constructor(e,t,i){super(new Float32Array(e),t,i)}}let y1=0;const zi=new ln,qd=new Ln,$a=new ae,Ti=new Il,ll=new Il,Dn=new ae;class ri extends wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sg(e)?fg:cg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new yt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,i){return zi.makeTranslation(e,t,i),this.applyMatrix4(zi),this}scale(e,t,i){return zi.makeScale(e,t,i),this.applyMatrix4(zi),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($a).negate(),this.translate($a.x,$a.y,$a.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ji(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Il);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){cn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&cn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){cn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];ll.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(Ti.min,ll.min),Ti.expandByPoint(Dn),Dn.addVectors(Ti.max,ll.max),Ti.expandByPoint(Dn)):(Ti.expandByPoint(ll.min),Ti.expandByPoint(ll.max))}Ti.getCenter(i);let s=0;for(let o=0,u=e.count;o<u;o++)Dn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Dn));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)Dn.fromBufferAttribute(c,h),d&&($a.fromBufferAttribute(e,h),Dn.add($a)),s=Math.max(s,i.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&cn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){cn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let k=0;k<i.count;k++)c[k]=new ae,d[k]=new ae;const h=new ae,p=new ae,x=new ae,_=new lt,y=new lt,E=new lt,M=new ae,S=new ae;function v(k,w,A){h.fromBufferAttribute(i,k),p.fromBufferAttribute(i,w),x.fromBufferAttribute(i,A),_.fromBufferAttribute(o,k),y.fromBufferAttribute(o,w),E.fromBufferAttribute(o,A),p.sub(h),x.sub(h),y.sub(_),E.sub(_);const B=1/(y.x*E.y-E.x*y.y);isFinite(B)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(B),S.copy(x).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(B),c[k].add(M),c[w].add(M),c[A].add(M),d[k].add(S),d[w].add(S),d[A].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let k=0,w=L.length;k<w;++k){const A=L[k],B=A.start,W=A.count;for(let Y=B,oe=B+W;Y<oe;Y+=3)v(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const C=new ae,D=new ae,U=new ae,R=new ae;function I(k){U.fromBufferAttribute(s,k),R.copy(U);const w=c[k];C.copy(w),C.sub(U.multiplyScalar(U.dot(w))).normalize(),D.crossVectors(R,w);const B=D.dot(d[k])<0?-1:1;u.setXYZW(k,C.x,C.y,C.z,B)}for(let k=0,w=L.length;k<w;++k){const A=L[k],B=A.start,W=A.count;for(let Y=B,oe=B+W;Y<oe;Y+=3)I(e.getX(Y+0)),I(e.getX(Y+1)),I(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const s=new ae,o=new ae,u=new ae,c=new ae,d=new ae,h=new ae,p=new ae,x=new ae;if(e)for(let _=0,y=e.count;_<y;_+=3){const E=e.getX(_+0),M=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,M),u.fromBufferAttribute(t,S),p.subVectors(u,o),x.subVectors(s,o),p.cross(x),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),c.add(p),d.add(p),h.add(p),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,y=t.count;_<y;_+=3)s.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),p.subVectors(u,o),x.subVectors(s,o),p.cross(x),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dn.fromBufferAttribute(e,t),Dn.normalize(),e.setXYZ(t,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,x=c.normalized,_=new h.constructor(d.length*p);let y=0,E=0;for(let M=0,S=d.length;M<S;M++){c.isInterleavedBufferAttribute?y=d[M]*c.data.stride+c.offset:y=d[M]*p;for(let v=0;v<p;v++)_[E++]=h[y++]}return new En(_,p,x)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,i=this.index.array,s=this.attributes;for(const c in s){const d=s[c],h=e(d,i);t.setAttribute(c,h)}const o=this.morphAttributes;for(const c in o){const d=[],h=o[c];for(let p=0,x=h.length;p<x;p++){const _=h[p],y=e(_,i);d.push(y)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let x=0,_=h.length;x<_;x++){const y=h[x];p.push(y.toJSON(e.data))}p.length>0&&(s[d]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],x=o[h];for(let _=0,y=x.length;_<y;_++)p.push(x[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const x=u[h];this.addGroup(x.start,x.count,x.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yx=new ln,js=new og,Zu=new Fc,qx=new ae,Qu=new ae,Ju=new ae,ec=new ae,jd=new ae,tc=new ae,jx=new ae,nc=new ae;class Mr extends Ln{constructor(e=new ri,t=new Dp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){tc.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const p=c[d],x=o[d];p!==0&&(jd.fromBufferAttribute(x,e),u?tc.addScaledVector(jd,p):tc.addScaledVector(jd.sub(t),p))}t.add(tc)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zu.copy(i.boundingSphere),Zu.applyMatrix4(o),js.copy(e.ray).recast(e.near),!(Zu.containsPoint(js.origin)===!1&&(js.intersectSphere(Zu,qx)===null||js.origin.distanceToSquared(qx)>(e.far-e.near)**2))&&(Yx.copy(o).invert(),js.copy(e.ray).applyMatrix4(Yx),!(i.boundingBox!==null&&js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,i){let s;const o=this.geometry,u=this.material,c=o.index,d=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,x=o.attributes.normal,_=o.groups,y=o.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=_.length;E<M;E++){const S=_[E],v=u[S.materialIndex],L=Math.max(S.start,y.start),C=Math.min(c.count,Math.min(S.start+S.count,y.start+y.count));for(let D=L,U=C;D<U;D+=3){const R=c.getX(D),I=c.getX(D+1),k=c.getX(D+2);s=ic(this,v,e,i,h,p,x,R,I,k),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(c.count,y.start+y.count);for(let S=E,v=M;S<v;S+=3){const L=c.getX(S),C=c.getX(S+1),D=c.getX(S+2);s=ic(this,u,e,i,h,p,x,L,C,D),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=_.length;E<M;E++){const S=_[E],v=u[S.materialIndex],L=Math.max(S.start,y.start),C=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let D=L,U=C;D<U;D+=3){const R=D,I=D+1,k=D+2;s=ic(this,v,e,i,h,p,x,R,I,k),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let S=E,v=M;S<v;S+=3){const L=S,C=S+1,D=S+2;s=ic(this,u,e,i,h,p,x,L,C,D),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function S1(a,e,t,i,s,o,u,c){let d;if(e.side===hi?d=i.intersectTriangle(u,o,s,!0,c):d=i.intersectTriangle(s,o,u,e.side===Ps,c),d===null)return null;nc.copy(c),nc.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(nc);return h<t.near||h>t.far?null:{distance:h,point:nc.clone(),object:a}}function ic(a,e,t,i,s,o,u,c,d,h){a.getVertexPosition(c,Qu),a.getVertexPosition(d,Ju),a.getVertexPosition(h,ec);const p=S1(a,e,t,i,Qu,Ju,ec,jx);if(p){const x=new ae;Hi.getBarycoord(jx,Qu,Ju,ec,x),s&&(p.uv=Hi.getInterpolatedAttribute(s,c,d,h,x,new lt)),o&&(p.uv1=Hi.getInterpolatedAttribute(o,c,d,h,x,new lt)),u&&(p.normal=Hi.getInterpolatedAttribute(u,c,d,h,x,new ae),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:d,c:h,normal:new ae,materialIndex:0};Hi.getNormal(Qu,Ju,ec,_.normal),p.face=_,p.barycoord=x}return p}class Nl extends ri{constructor(e=1,t=1,i=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:u};const c=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const d=[],h=[],p=[],x=[];let _=0,y=0;E("z","y","x",-1,-1,i,t,e,u,o,0),E("z","y","x",1,-1,i,t,-e,u,o,1),E("x","z","y",1,1,e,i,t,s,u,2),E("x","z","y",1,-1,e,i,-t,s,u,3),E("x","y","z",1,-1,e,t,i,s,o,4),E("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(d),this.setAttribute("position",new ji(h,3)),this.setAttribute("normal",new ji(p,3)),this.setAttribute("uv",new ji(x,2));function E(M,S,v,L,C,D,U,R,I,k,w){const A=D/I,B=U/k,W=D/2,Y=U/2,oe=R/2,ie=I+1,re=k+1;let fe=0,H=0;const de=new ae;for(let $=0;$<re;$++){const O=$*B-Y;for(let J=0;J<ie;J++){const Le=J*A-W;de[M]=Le*L,de[S]=O*C,de[v]=oe,h.push(de.x,de.y,de.z),de[M]=0,de[S]=0,de[v]=R>0?1:-1,p.push(de.x,de.y,de.z),x.push(J/I),x.push(1-$/k),fe+=1}}for(let $=0;$<k;$++)for(let O=0;O<I;O++){const J=_+O+ie*$,Le=_+O+ie*($+1),Pe=_+(O+1)+ie*($+1),Oe=_+(O+1)+ie*$;d.push(J,Le,Oe),d.push(Le,Pe,Oe),H+=6}c.addGroup(y,H,w),y+=H,_+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ni(a){const e={};for(let t=0;t<a.length;t++){const i=_o(a[t]);for(const s in i)e[s]=i[s]}return e}function M1(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function dg(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const bc={clone:_o,merge:ni};var E1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E1,this.fragmentShader=T1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=M1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hg extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=xr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ys=new ae,$x=new lt,Kx=new lt;class Gi extends hg{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ad*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(Ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,t){return this.getViewBounds(e,$x,Kx),t.subVectors(Kx,$x)}setViewOffset(e,t,i,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ad*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;o+=u.offsetX*s/d,t-=u.offsetY*i/h,s*=u.width/d,i*=u.height/h}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ka=-90,Za=1;class w1 extends Ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gi(Ka,Za,e,t);s.layers=this.layers,this.add(s);const o=new Gi(Ka,Za,e,t);o.layers=this.layers,this.add(o);const u=new Gi(Ka,Za,e,t);u.layers=this.layers,this.add(u);const c=new Gi(Ka,Za,e,t);c.layers=this.layers,this.add(c);const d=new Gi(Ka,Za,e,t);d.layers=this.layers,this.add(d);const h=new Gi(Ka,Za,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,u,c,d]=t;for(const h of t)this.remove(h);if(e===xr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,d,h,p]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(x,_,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class pg extends qn{constructor(e=[],t=po,i,s,o,u,c,d,h,p){super(e,t,i,s,o,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b1 extends ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pg(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nl(5,5,5),o=new Yn({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hi,blending:gr});o.uniforms.tEquirect.value=t;const u=new Mr(s,o),c=t.minFilter;return t.minFilter===aa&&(t.minFilter=Wi),new w1(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(o)}}class pl extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A1={type:"move"};class $d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,i),v=this._getHandJoint(h,M);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const p=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],_=p.position.distanceTo(x.position),y=.02,E=.005;h.inputState.pinching&&_>y+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(A1)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new pl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Lp{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=t}clone(){return new Lp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class C1 extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class R1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tp,this.updateRanges=[],this.version=0,this.uuid=As()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=As()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=As()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ti=new ae;class Ac{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pr(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),s=Bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),s=Bt(s,this.array),o=Bt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){wc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new En(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ac(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class mg extends pa{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qa;const ul=new ae,Ja=new ae,eo=new ae,to=new lt,cl=new lt,xg=new ln,rc=new ae,fl=new ae,sc=new ae,Zx=new lt,Kd=new lt,Qx=new lt;class P1 extends Ln{constructor(e=new mg){if(super(),this.isSprite=!0,this.type="Sprite",Qa===void 0){Qa=new ri;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new R1(t,5);Qa.setIndex([0,1,2,0,2,3]),Qa.setAttribute("position",new Ac(i,3,0,!1)),Qa.setAttribute("uv",new Ac(i,2,3,!1))}this.geometry=Qa,this.material=e,this.center=new lt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&cn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ja.setFromMatrixScale(this.matrixWorld),xg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),eo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ja.multiplyScalar(-eo.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const u=this.center;ac(rc.set(-.5,-.5,0),eo,u,Ja,s,o),ac(fl.set(.5,-.5,0),eo,u,Ja,s,o),ac(sc.set(.5,.5,0),eo,u,Ja,s,o),Zx.set(0,0),Kd.set(1,0),Qx.set(1,1);let c=e.ray.intersectTriangle(rc,fl,sc,!1,ul);if(c===null&&(ac(fl.set(-.5,.5,0),eo,u,Ja,s,o),Kd.set(0,1),c=e.ray.intersectTriangle(rc,sc,fl,!1,ul),c===null))return;const d=e.ray.origin.distanceTo(ul);d<e.near||d>e.far||t.push({distance:d,point:ul.clone(),uv:Hi.getInterpolation(ul,rc,fl,sc,Zx,Kd,Qx,new lt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ac(a,e,t,i,s,o){to.subVectors(a,t).addScalar(.5).multiply(i),s!==void 0?(cl.x=o*to.x-s*to.y,cl.y=s*to.x+o*to.y):cl.copy(to),a.copy(e),a.x+=cl.x,a.y+=cl.y,a.applyMatrix4(xg)}class D1 extends qn{constructor(e=null,t=1,i=1,s,o,u,c,d,h=Ci,p=Ci,x,_){super(null,u,c,d,h,p,s,o,x,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zd=new ae,L1=new ae,U1=new yt;class ea{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Zd.subVectors(i,t).cross(L1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||U1.getNormalMatrix(e),s=this.coplanarPoint(Zd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new Fc,I1=new lt(.5,.5),oc=new ae;class Up{constructor(e=new ea,t=new ea,i=new ea,s=new ea,o=new ea,u=new ea){this.planes=[e,t,i,s,o,u]}set(e,t,i,s,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xr,i=!1){const s=this.planes,o=e.elements,u=o[0],c=o[1],d=o[2],h=o[3],p=o[4],x=o[5],_=o[6],y=o[7],E=o[8],M=o[9],S=o[10],v=o[11],L=o[12],C=o[13],D=o[14],U=o[15];if(s[0].setComponents(h-u,y-p,v-E,U-L).normalize(),s[1].setComponents(h+u,y+p,v+E,U+L).normalize(),s[2].setComponents(h+c,y+x,v+M,U+C).normalize(),s[3].setComponents(h-c,y-x,v-M,U-C).normalize(),i)s[4].setComponents(d,_,S,D).normalize(),s[5].setComponents(h-d,y-_,v-S,U-D).normalize();else if(s[4].setComponents(h-d,y-_,v-S,U-D).normalize(),t===xr)s[5].setComponents(h+d,y+_,v+S,U+D).normalize();else if(t===Ec)s[5].setComponents(d,_,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){$s.center.set(0,0,0);const t=I1.distanceTo(e.center);return $s.radius=.7071067811865476+t,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(oc.x=s.normal.x>0?e.max.x:e.min.x,oc.y=s.normal.y>0?e.max.y:e.min.y,oc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ip extends pa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jx=new ln,rp=new og,lc=new Fc,uc=new ae;class Qd extends Ln{constructor(e=new ri,t=new ip){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(s),lc.radius+=o,e.ray.intersectsSphere(lc)===!1)return;Jx.copy(s).invert(),rp.copy(e.ray).applyMatrix4(Jx);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=i.index,x=i.attributes.position;if(h!==null){const _=Math.max(0,u.start),y=Math.min(h.count,u.start+u.count);for(let E=_,M=y;E<M;E++){const S=h.getX(E);uc.fromBufferAttribute(x,S),e_(uc,S,d,s,e,t,this)}}else{const _=Math.max(0,u.start),y=Math.min(x.count,u.start+u.count);for(let E=_,M=y;E<M;E++)uc.fromBufferAttribute(x,E),e_(uc,E,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function e_(a,e,t,i,s,o,u){const c=rp.distanceSqToPoint(a);if(c<t){const d=new ae;rp.closestPointToPoint(a,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class N1 extends qn{constructor(e,t,i,s,o,u,c,d,h){super(e,t,i,s,o,u,c,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _g extends qn{constructor(e,t,i=da,s,o,u,c=Ci,d=Ci,h,p=El,x=1){if(p!==El&&p!==Tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:x};super(_,s,o,u,c,d,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gg extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ip extends ri{constructor(e=1,t=1,i=1,s=32,o=1,u=!1,c=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:u,thetaStart:c,thetaLength:d};const h=this;s=Math.floor(s),o=Math.floor(o);const p=[],x=[],_=[],y=[];let E=0;const M=[],S=i/2;let v=0;L(),u===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(p),this.setAttribute("position",new ji(x,3)),this.setAttribute("normal",new ji(_,3)),this.setAttribute("uv",new ji(y,2));function L(){const D=new ae,U=new ae;let R=0;const I=(t-e)/i;for(let k=0;k<=o;k++){const w=[],A=k/o,B=A*(t-e)+e;for(let W=0;W<=s;W++){const Y=W/s,oe=Y*d+c,ie=Math.sin(oe),re=Math.cos(oe);U.x=B*ie,U.y=-A*i+S,U.z=B*re,x.push(U.x,U.y,U.z),D.set(ie,I,re).normalize(),_.push(D.x,D.y,D.z),y.push(Y,1-A),w.push(E++)}M.push(w)}for(let k=0;k<s;k++)for(let w=0;w<o;w++){const A=M[w][k],B=M[w+1][k],W=M[w+1][k+1],Y=M[w][k+1];(e>0||w!==0)&&(p.push(A,B,Y),R+=3),(t>0||w!==o-1)&&(p.push(B,W,Y),R+=3)}h.addGroup(v,R,0),v+=R}function C(D){const U=E,R=new lt,I=new ae;let k=0;const w=D===!0?e:t,A=D===!0?1:-1;for(let W=1;W<=s;W++)x.push(0,S*A,0),_.push(0,A,0),y.push(.5,.5),E++;const B=E;for(let W=0;W<=s;W++){const oe=W/s*d+c,ie=Math.cos(oe),re=Math.sin(oe);I.x=w*re,I.y=S*A,I.z=w*ie,x.push(I.x,I.y,I.z),_.push(0,A,0),R.x=ie*.5+.5,R.y=re*.5*A+.5,y.push(R.x,R.y),E++}for(let W=0;W<s;W++){const Y=U+W,oe=B+W;D===!0?p.push(oe,oe+1,Y):p.push(oe+1,oe,Y),k+=3}h.addGroup(v,k,D===!0?1:2),v+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ip(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oc extends ri{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,u=t/2,c=Math.floor(i),d=Math.floor(s),h=c+1,p=d+1,x=e/c,_=t/d,y=[],E=[],M=[],S=[];for(let v=0;v<p;v++){const L=v*_-u;for(let C=0;C<h;C++){const D=C*x-o;E.push(D,-L,0),M.push(0,0,1),S.push(C/c),S.push(1-v/d)}}for(let v=0;v<d;v++)for(let L=0;L<c;L++){const C=L+h*v,D=L+h*(v+1),U=L+1+h*(v+1),R=L+1+h*v;y.push(C,D,R),y.push(D,U,R)}this.setIndex(y),this.setAttribute("position",new ji(E,3)),this.setAttribute("normal",new ji(M,3)),this.setAttribute("uv",new ji(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.width,e.height,e.widthSegments,e.heightSegments)}}class F1 extends pa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ig,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class O1 extends pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k1 extends pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vg extends Ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Jd=new ln,t_=new ae,n_=new ae;class z1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=yr,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Up,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;t_.setFromMatrixPosition(e.matrixWorld),t.position.copy(t_),n_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(n_),t.updateMatrixWorld(),Jd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Np extends hg{constructor(e=-1,t=1,i=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,u=i+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class B1 extends z1{constructor(){super(new Np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V1 extends vg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new B1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class G1 extends vg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class H1 extends Gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class W1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function i_(a,e,t,i){const s=X1(i);switch(t){case eg:return a*e;case ng:return a*e/s.components*s.byteLength;case bp:return a*e/s.components*s.byteLength;case Ap:return a*e*2/s.components*s.byteLength;case Cp:return a*e*2/s.components*s.byteLength;case tg:return a*e*3/s.components*s.byteLength;case sr:return a*e*4/s.components*s.byteLength;case Rp:return a*e*4/s.components*s.byteLength;case hc:case pc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case mc:case xc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Ph:return Math.max(a,16)*Math.max(e,8)/4;case Ah:case Rh:return Math.max(a,8)*Math.max(e,8)/2;case Dh:case Lh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Uh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case jh:case $h:case Kh:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Zh:case Qh:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Jh:case ep:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X1(a){switch(a){case yr:case K_:return{byteLength:1,components:1};case Sl:case Z_:case vr:return{byteLength:2,components:1};case Tp:case wp:return{byteLength:2,components:4};case da:case Ep:case Hr:return{byteLength:4,components:1};case Q_:case J_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yg(){let a=null,e=!1,t=null,i=null;function s(o,u){t(o,u),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function Y1(a){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,x=h.byteLength,_=a.createBuffer();a.bindBuffer(d,_),a.bufferData(d,h,p),c.onUploadCallback();let y;if(h instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=a.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=a.SHORT;else if(h instanceof Uint32Array)y=a.UNSIGNED_INT;else if(h instanceof Int32Array)y=a.INT;else if(h instanceof Int8Array)y=a.BYTE;else if(h instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:x}}function i(c,d,h){const p=d.array,x=d.updateRanges;if(a.bindBuffer(h,c),x.length===0)a.bufferSubData(h,0,p);else{x.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<x.length;y++){const E=x[_],M=x[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++_,x[_]=M)}x.length=_+1;for(let y=0,E=x.length;y<E;y++){const M=x[y];a.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(a.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,d),h.version=c.version}}return{get:s,remove:o,update:u}}var q1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_M=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EM="gl_FragColor = linearToOutputTexel( gl_FragColor );",TM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,u3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,f3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,x3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,M3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,R3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,P3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,D3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,F3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,G3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,X3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_E=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,St={alphahash_fragment:q1,alphahash_pars_fragment:j1,alphamap_fragment:$1,alphamap_pars_fragment:K1,alphatest_fragment:Z1,alphatest_pars_fragment:Q1,aomap_fragment:J1,aomap_pars_fragment:eM,batching_pars_vertex:tM,batching_vertex:nM,begin_vertex:iM,beginnormal_vertex:rM,bsdfs:sM,iridescence_fragment:aM,bumpmap_pars_fragment:oM,clipping_planes_fragment:lM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:cM,clipping_planes_vertex:fM,color_fragment:dM,color_pars_fragment:hM,color_pars_vertex:pM,color_vertex:mM,common:xM,cube_uv_reflection_fragment:_M,defaultnormal_vertex:gM,displacementmap_pars_vertex:vM,displacementmap_vertex:yM,emissivemap_fragment:SM,emissivemap_pars_fragment:MM,colorspace_fragment:EM,colorspace_pars_fragment:TM,envmap_fragment:wM,envmap_common_pars_fragment:bM,envmap_pars_fragment:AM,envmap_pars_vertex:CM,envmap_physical_pars_fragment:zM,envmap_vertex:RM,fog_vertex:PM,fog_pars_vertex:DM,fog_fragment:LM,fog_pars_fragment:UM,gradientmap_pars_fragment:IM,lightmap_pars_fragment:NM,lights_lambert_fragment:FM,lights_lambert_pars_fragment:OM,lights_pars_begin:kM,lights_toon_fragment:BM,lights_toon_pars_fragment:VM,lights_phong_fragment:GM,lights_phong_pars_fragment:HM,lights_physical_fragment:WM,lights_physical_pars_fragment:XM,lights_fragment_begin:YM,lights_fragment_maps:qM,lights_fragment_end:jM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:KM,logdepthbuf_pars_vertex:ZM,logdepthbuf_vertex:QM,map_fragment:JM,map_pars_fragment:e3,map_particle_fragment:t3,map_particle_pars_fragment:n3,metalnessmap_fragment:i3,metalnessmap_pars_fragment:r3,morphinstance_vertex:s3,morphcolor_vertex:a3,morphnormal_vertex:o3,morphtarget_pars_vertex:l3,morphtarget_vertex:u3,normal_fragment_begin:c3,normal_fragment_maps:f3,normal_pars_fragment:d3,normal_pars_vertex:h3,normal_vertex:p3,normalmap_pars_fragment:m3,clearcoat_normal_fragment_begin:x3,clearcoat_normal_fragment_maps:_3,clearcoat_pars_fragment:g3,iridescence_pars_fragment:v3,opaque_fragment:y3,packing:S3,premultiplied_alpha_fragment:M3,project_vertex:E3,dithering_fragment:T3,dithering_pars_fragment:w3,roughnessmap_fragment:b3,roughnessmap_pars_fragment:A3,shadowmap_pars_fragment:C3,shadowmap_pars_vertex:R3,shadowmap_vertex:P3,shadowmask_pars_fragment:D3,skinbase_vertex:L3,skinning_pars_vertex:U3,skinning_vertex:I3,skinnormal_vertex:N3,specularmap_fragment:F3,specularmap_pars_fragment:O3,tonemapping_fragment:k3,tonemapping_pars_fragment:z3,transmission_fragment:B3,transmission_pars_fragment:V3,uv_pars_fragment:G3,uv_pars_vertex:H3,uv_vertex:W3,worldpos_vertex:X3,background_vert:Y3,background_frag:q3,backgroundCube_vert:j3,backgroundCube_frag:$3,cube_vert:K3,cube_frag:Z3,depth_vert:Q3,depth_frag:J3,distanceRGBA_vert:eE,distanceRGBA_frag:tE,equirect_vert:nE,equirect_frag:iE,linedashed_vert:rE,linedashed_frag:sE,meshbasic_vert:aE,meshbasic_frag:oE,meshlambert_vert:lE,meshlambert_frag:uE,meshmatcap_vert:cE,meshmatcap_frag:fE,meshnormal_vert:dE,meshnormal_frag:hE,meshphong_vert:pE,meshphong_frag:mE,meshphysical_vert:xE,meshphysical_frag:_E,meshtoon_vert:gE,meshtoon_frag:vE,points_vert:yE,points_frag:SE,shadow_vert:ME,shadow_frag:EE,sprite_vert:TE,sprite_frag:wE},Fe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},hr={basic:{uniforms:ni([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:ni([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new it(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:ni([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:ni([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:ni([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new it(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:ni([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:ni([Fe.points,Fe.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:ni([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:ni([Fe.common,Fe.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:ni([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:ni([Fe.sprite,Fe.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:ni([Fe.common,Fe.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:ni([Fe.lights,Fe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};hr.physical={uniforms:ni([hr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const cc={r:0,b:0,g:0},Ks=new Sr,bE=new ln;function AE(a,e,t,i,s,o,u){const c=new it(0);let d=o===!0?0:1,h,p,x=null,_=0,y=null;function E(C){let D=C.isScene===!0?C.background:null;return D&&D.isTexture&&(D=(C.backgroundBlurriness>0?t:e).get(D)),D}function M(C){let D=!1;const U=E(C);U===null?v(c,d):U&&U.isColor&&(v(U,1),D=!0);const R=a.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,u):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(a.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(C,D){const U=E(D);U&&(U.isCubeTexture||U.mapping===Nc)?(p===void 0&&(p=new Mr(new Nl(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:_o(hr.backgroundCube.uniforms),vertexShader:hr.backgroundCube.vertexShader,fragmentShader:hr.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(R,I,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ks.copy(D.backgroundRotation),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),p.material.uniforms.envMap.value=U,p.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(bE.makeRotationFromEuler(Ks)),p.material.toneMapped=Nt.getTransfer(U.colorSpace)!==zt,(x!==U||_!==U.version||y!==a.toneMapping)&&(p.material.needsUpdate=!0,x=U,_=U.version,y=a.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(h===void 0&&(h=new Mr(new Oc(2,2),new Yn({name:"BackgroundMaterial",uniforms:_o(hr.background.uniforms),vertexShader:hr.background.vertexShader,fragmentShader:hr.background.fragmentShader,side:Ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=U,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=Nt.getTransfer(U.colorSpace)!==zt,U.matrixAutoUpdate===!0&&U.updateMatrix(),h.material.uniforms.uvTransform.value.copy(U.matrix),(x!==U||_!==U.version||y!==a.toneMapping)&&(h.material.needsUpdate=!0,x=U,_=U.version,y=a.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function v(C,D){C.getRGB(cc,dg(a)),i.buffers.color.setClear(cc.r,cc.g,cc.b,D,u)}function L(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,D=1){c.set(C),d=D,v(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,v(c,d)},render:M,addToRenderList:S,dispose:L}}function CE(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=_(null);let o=s,u=!1;function c(A,B,W,Y,oe){let ie=!1;const re=x(Y,W,B);o!==re&&(o=re,h(o.object)),ie=y(A,Y,W,oe),ie&&E(A,Y,W,oe),oe!==null&&e.update(oe,a.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,D(A,B,W,Y),oe!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function d(){return a.createVertexArray()}function h(A){return a.bindVertexArray(A)}function p(A){return a.deleteVertexArray(A)}function x(A,B,W){const Y=W.wireframe===!0;let oe=i[A.id];oe===void 0&&(oe={},i[A.id]=oe);let ie=oe[B.id];ie===void 0&&(ie={},oe[B.id]=ie);let re=ie[Y];return re===void 0&&(re=_(d()),ie[Y]=re),re}function _(A){const B=[],W=[],Y=[];for(let oe=0;oe<t;oe++)B[oe]=0,W[oe]=0,Y[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:Y,object:A,attributes:{},index:null}}function y(A,B,W,Y){const oe=o.attributes,ie=B.attributes;let re=0;const fe=W.getAttributes();for(const H in fe)if(fe[H].location>=0){const $=oe[H];let O=ie[H];if(O===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(O=A.instanceColor)),$===void 0||$.attribute!==O||O&&$.data!==O.data)return!0;re++}return o.attributesNum!==re||o.index!==Y}function E(A,B,W,Y){const oe={},ie=B.attributes;let re=0;const fe=W.getAttributes();for(const H in fe)if(fe[H].location>=0){let $=ie[H];$===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&($=A.instanceColor));const O={};O.attribute=$,$&&$.data&&(O.data=$.data),oe[H]=O,re++}o.attributes=oe,o.attributesNum=re,o.index=Y}function M(){const A=o.newAttributes;for(let B=0,W=A.length;B<W;B++)A[B]=0}function S(A){v(A,0)}function v(A,B){const W=o.newAttributes,Y=o.enabledAttributes,oe=o.attributeDivisors;W[A]=1,Y[A]===0&&(a.enableVertexAttribArray(A),Y[A]=1),oe[A]!==B&&(a.vertexAttribDivisor(A,B),oe[A]=B)}function L(){const A=o.newAttributes,B=o.enabledAttributes;for(let W=0,Y=B.length;W<Y;W++)B[W]!==A[W]&&(a.disableVertexAttribArray(W),B[W]=0)}function C(A,B,W,Y,oe,ie,re){re===!0?a.vertexAttribIPointer(A,B,W,oe,ie):a.vertexAttribPointer(A,B,W,Y,oe,ie)}function D(A,B,W,Y){M();const oe=Y.attributes,ie=W.getAttributes(),re=B.defaultAttributeValues;for(const fe in ie){const H=ie[fe];if(H.location>=0){let de=oe[fe];if(de===void 0&&(fe==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),fe==="instanceColor"&&A.instanceColor&&(de=A.instanceColor)),de!==void 0){const $=de.normalized,O=de.itemSize,J=e.get(de);if(J===void 0)continue;const Le=J.buffer,Pe=J.type,Oe=J.bytesPerElement,te=Pe===a.INT||Pe===a.UNSIGNED_INT||de.gpuType===Ep;if(de.isInterleavedBufferAttribute){const se=de.data,_e=se.stride,Ie=de.offset;if(se.isInstancedInterleavedBuffer){for(let Ue=0;Ue<H.locationSize;Ue++)v(H.location+Ue,se.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ue=0;Ue<H.locationSize;Ue++)S(H.location+Ue);a.bindBuffer(a.ARRAY_BUFFER,Le);for(let Ue=0;Ue<H.locationSize;Ue++)C(H.location+Ue,O/H.locationSize,Pe,$,_e*Oe,(Ie+O/H.locationSize*Ue)*Oe,te)}else{if(de.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)v(H.location+se,de.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let se=0;se<H.locationSize;se++)S(H.location+se);a.bindBuffer(a.ARRAY_BUFFER,Le);for(let se=0;se<H.locationSize;se++)C(H.location+se,O/H.locationSize,Pe,$,O*Oe,O/H.locationSize*se*Oe,te)}}else if(re!==void 0){const $=re[fe];if($!==void 0)switch($.length){case 2:a.vertexAttrib2fv(H.location,$);break;case 3:a.vertexAttrib3fv(H.location,$);break;case 4:a.vertexAttrib4fv(H.location,$);break;default:a.vertexAttrib1fv(H.location,$)}}}}L()}function U(){k();for(const A in i){const B=i[A];for(const W in B){const Y=B[W];for(const oe in Y)p(Y[oe].object),delete Y[oe];delete B[W]}delete i[A]}}function R(A){if(i[A.id]===void 0)return;const B=i[A.id];for(const W in B){const Y=B[W];for(const oe in Y)p(Y[oe].object),delete Y[oe];delete B[W]}delete i[A.id]}function I(A){for(const B in i){const W=i[B];if(W[A.id]===void 0)continue;const Y=W[A.id];for(const oe in Y)p(Y[oe].object),delete Y[oe];delete W[A.id]}}function k(){w(),u=!0,o!==s&&(o=s,h(o.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:k,resetDefaultState:w,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:S,disableUnusedAttributes:L}}function RE(a,e,t){let i;function s(h){i=h}function o(h,p){a.drawArrays(i,h,p),t.update(p,i,1)}function u(h,p,x){x!==0&&(a.drawArraysInstanced(i,h,p,x),t.update(p,i,x))}function c(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,x);let y=0;for(let E=0;E<x;E++)y+=p[E];t.update(y,i,1)}function d(h,p,x,_){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<h.length;E++)u(h[E],p[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,p,0,_,0,x);let E=0;for(let M=0;M<x;M++)E+=p[M]*_[M];t.update(E,i,1)}}this.setMode=s,this.render=o,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function PE(a,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(I){return!(I!==sr&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(I){const k=I===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==yr&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Hr&&!k)}function d(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(vt("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const x=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),L=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),C=a.getParameter(a.MAX_VARYING_VECTORS),D=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),U=E>0,R=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:C,maxFragmentUniforms:D,vertexTextures:U,maxSamples:R}}function DE(a){const e=this;let t=null,i=0,s=!1,o=!1;const u=new ea,c=new yt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const y=x.length!==0||_||i!==0||s;return s=_,i=x.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(x,_){t=p(x,_,0)},this.setState=function(x,_,y){const E=x.clippingPlanes,M=x.clipIntersection,S=x.clipShadows,v=a.get(x);if(!s||E===null||E.length===0||o&&!S)o?p(null):h();else{const L=o?0:i,C=L*4;let D=v.clippingState||null;d.value=D,D=p(E,_,C,y);for(let U=0;U!==C;++U)D[U]=t[U];v.clippingState=D,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(x,_,y,E){const M=x!==null?x.length:0;let S=null;if(M!==0){if(S=d.value,E!==!0||S===null){const v=y+M*4,L=_.matrixWorldInverse;c.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let C=0,D=y;C!==M;++C,D+=4)u.copy(x[C]).applyMatrix4(L,c),u.normal.toArray(S,D),S[D+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function LE(a){let e=new WeakMap;function t(u,c){return c===Eh?u.mapping=po:c===Th&&(u.mapping=mo),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===Eh||c===Th)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new b1(d.height);return h.fromEquirectangularTexture(a,u),e.set(u,h),u.addEventListener("dispose",s),t(h.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const Ms=4,r_=[.125,.215,.35,.446,.526,.582],ra=20,UE=256,dl=new Np,s_=new it;let eh=null,th=0,nh=0,ih=!1;const IE=new ae;class a_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,o={}){const{size:u=256,position:c=IE}=o;eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,s,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wi,minFilter:Wi,generateMipmaps:!1,type:vr,format:sr,colorSpace:xo,depthBuffer:!1},s=o_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o_(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=NE(o)),this._blurMaterial=OE(o,e,t),this._ggxMaterial=FE(o,e,t)}return s}_compileMaterial(e){const t=new Mr(new ri,e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,i,s,o){const d=new Gi(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(s_),x.toneMapping=bs,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mr(new Nl,new Dp({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,S=M.material;let v=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,v=!0):(S.color.copy(s_),v=!0);for(let C=0;C<6;C++){const D=C%3;D===0?(d.up.set(0,h[C],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+p[C],o.y,o.z)):D===1?(d.up.set(0,0,h[C]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+p[C],o.z)):(d.up.set(0,h[C],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+p[C]));const U=this._cubeSize;no(s,D*U,C>2?U:0,U,U),x.setRenderTarget(s),v&&x.render(M,d),x.render(e,d)}x.toneMapping=y,x.autoClear=_,e.background=L}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===po||e.mapping===mo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=u_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l_());const o=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const c=o.uniforms;c.envMap.value=e;const d=this._cubeSize;no(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,dl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[i];c.material=u;const d=u.uniforms,h=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),x=Math.sqrt(h*h-p*p),_=.05+h*.95,y=x*_,{_lodMax:E}=this,M=this._sizeLods[i],S=3*M*(i>E-Ms?i-E+Ms:0),v=4*(this._cubeSize-M);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=E-t,no(o,S,v,3*M,2*M),s.setRenderTarget(o),s.render(c,dl),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=E-i,no(e,S,v,3*M,2*M),s.setRenderTarget(e),s.render(c,dl)}_blur(e,t,i,s,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",o),this._halfBlur(u,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&cn("blur direction must be either latitudinal or longitudinal!");const p=3,x=this._lodMeshes[s];x.material=h;const _=h.uniforms,y=this._sizeLods[i]-1,E=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*ra-1),M=o/E,S=isFinite(o)?1+Math.floor(p*M):ra;S>ra&&vt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ra}`);const v=[];let L=0;for(let I=0;I<ra;++I){const k=I/M,w=Math.exp(-k*k/2);v.push(w),I===0?L+=w:I<S&&(L+=2*w)}for(let I=0;I<v.length;I++)v[I]=v[I]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=v,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:C}=this;_.dTheta.value=E,_.mipInt.value=C-i;const D=this._sizeLods[s],U=3*D*(s>C-Ms?s-C+Ms:0),R=4*(this._cubeSize-D);no(t,U,R,3*D,2*D),d.setRenderTarget(t),d.render(x,dl)}}function NE(a){const e=[],t=[],i=[];let s=a;const o=a-Ms+1+r_.length;for(let u=0;u<o;u++){const c=Math.pow(2,s);e.push(c);let d=1/c;u>a-Ms?d=r_[u-a+Ms-1]:u===0&&(d=0),t.push(d);const h=1/(c-2),p=-h,x=1+h,_=[p,p,x,p,x,x,p,p,x,x,p,x],y=6,E=6,M=3,S=2,v=1,L=new Float32Array(M*E*y),C=new Float32Array(S*E*y),D=new Float32Array(v*E*y);for(let R=0;R<y;R++){const I=R%3*2/3-1,k=R>2?0:-1,w=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];L.set(w,M*E*R),C.set(_,S*E*R);const A=[R,R,R,R,R,R];D.set(A,v*E*R)}const U=new ri;U.setAttribute("position",new En(L,M)),U.setAttribute("uv",new En(C,S)),U.setAttribute("faceIndex",new En(D,v)),i.push(new Mr(U,null)),s>Ms&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function o_(a,e,t){const i=new ar(a,e,t);return i.texture.mapping=Nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function no(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function FE(a,e,t){return new Yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function OE(a,e,t){const i=new Float32Array(ra),s=new ae(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:ra,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function l_(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function u_(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kE(a){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const d=c.mapping,h=d===Eh||d===Th,p=d===po||d===mo;if(h||p){let x=e.get(c);const _=x!==void 0?x.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new a_(a)),x=h?t.fromEquirectangular(c,x):t.fromCubemap(c,x),x.texture.pmremVersion=c.pmremVersion,e.set(c,x),x.texture;if(x!==void 0)return x.texture;{const y=c.image;return h&&y&&y.height>0||p&&y&&s(y)?(t===null&&(t=new a_(a)),x=h?t.fromEquirectangular(c):t.fromCubemap(c),x.texture.pmremVersion=c.pmremVersion,e.set(c,x),c.addEventListener("dispose",o),x.texture):null}}}return c}function s(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function o(c){const d=c.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function zE(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&wl("WebGLRenderer: "+i+" extension not supported."),s}}}function BE(a,e,t,i){const s={},o=new WeakMap;function u(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete s[_.id];const y=o.get(_);y&&(e.remove(y),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(x,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function d(x){const _=x.attributes;for(const y in _)e.update(_[y],a.ARRAY_BUFFER)}function h(x){const _=[],y=x.index,E=x.attributes.position;let M=0;if(y!==null){const L=y.array;M=y.version;for(let C=0,D=L.length;C<D;C+=3){const U=L[C+0],R=L[C+1],I=L[C+2];_.push(U,R,R,I,I,U)}}else if(E!==void 0){const L=E.array;M=E.version;for(let C=0,D=L.length/3-1;C<D;C+=3){const U=C+0,R=C+1,I=C+2;_.push(U,R,R,I,I,U)}}else return;const S=new(sg(_)?fg:cg)(_,1);S.version=M;const v=o.get(x);v&&e.remove(v),o.set(x,S)}function p(x){const _=o.get(x);if(_){const y=x.index;y!==null&&_.version<y.version&&h(x)}else h(x);return o.get(x)}return{get:c,update:d,getWireframeAttribute:p}}function VE(a,e,t){let i;function s(_){i=_}let o,u;function c(_){o=_.type,u=_.bytesPerElement}function d(_,y){a.drawElements(i,y,o,_*u),t.update(y,i,1)}function h(_,y,E){E!==0&&(a.drawElementsInstanced(i,y,o,_*u,E),t.update(y,i,E))}function p(_,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,o,_,0,E);let S=0;for(let v=0;v<E;v++)S+=y[v];t.update(S,i,1)}function x(_,y,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<_.length;v++)h(_[v]/u,y[v],M[v]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,o,_,0,M,0,E);let v=0;for(let L=0;L<E;L++)v+=y[L]*M[L];t.update(v,i,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=x}function GE(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,c){switch(t.calls++,u){case a.TRIANGLES:t.triangles+=c*(o/3);break;case a.LINES:t.lines+=c*(o/2);break;case a.LINE_STRIP:t.lines+=c*(o-1);break;case a.LINE_LOOP:t.lines+=c*o;break;case a.POINTS:t.points+=c*o;break;default:cn("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function HE(a,e,t){const i=new WeakMap,s=new fn;function o(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=p!==void 0?p.length:0;let _=i.get(c);if(_===void 0||_.count!==x){let A=function(){k.dispose(),i.delete(c),c.removeEventListener("dispose",A)};var y=A;_!==void 0&&_.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let D=0;E===!0&&(D=1),M===!0&&(D=2),S===!0&&(D=3);let U=c.attributes.position.count*D,R=1;U>e.maxTextureSize&&(R=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*R*4*x),k=new ag(I,U,R,x);k.type=Hr,k.needsUpdate=!0;const w=D*4;for(let B=0;B<x;B++){const W=v[B],Y=L[B],oe=C[B],ie=U*R*4*B;for(let re=0;re<W.count;re++){const fe=re*w;E===!0&&(s.fromBufferAttribute(W,re),I[ie+fe+0]=s.x,I[ie+fe+1]=s.y,I[ie+fe+2]=s.z,I[ie+fe+3]=0),M===!0&&(s.fromBufferAttribute(Y,re),I[ie+fe+4]=s.x,I[ie+fe+5]=s.y,I[ie+fe+6]=s.z,I[ie+fe+7]=0),S===!0&&(s.fromBufferAttribute(oe,re),I[ie+fe+8]=s.x,I[ie+fe+9]=s.y,I[ie+fe+10]=s.z,I[ie+fe+11]=oe.itemSize===4?s.w:1)}}_={count:x,texture:k,size:new lt(U,R)},i.set(c,_),c.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(a,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const M=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(a,"morphTargetBaseInfluence",M),d.getUniforms().setValue(a,"morphTargetInfluences",h)}d.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:o}}function WE(a,e,t,i){let s=new WeakMap;function o(d){const h=i.render.frame,p=d.geometry,x=e.get(d,p);if(s.get(x)!==h&&(e.update(x),s.set(x,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==h&&(t.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,a.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return x}function u(){s=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:u}}const Sg=new qn,c_=new _g(1,1),Mg=new ag,Eg=new c1,Tg=new pg,f_=[],d_=[],h_=new Float32Array(16),p_=new Float32Array(9),m_=new Float32Array(4);function bo(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let o=f_[s];if(o===void 0&&(o=new Float32Array(s),f_[s]=o),e!==0){i.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,a[u].toArray(o,c)}return o}function Tn(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function wn(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function zc(a,e){let t=d_[e];t===void 0&&(t=new Int32Array(e),d_[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function XE(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function YE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;a.uniform2fv(this.addr,e),wn(t,e)}}function qE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;a.uniform3fv(this.addr,e),wn(t,e)}}function jE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;a.uniform4fv(this.addr,e),wn(t,e)}}function $E(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,i))return;m_.set(i),a.uniformMatrix2fv(this.addr,!1,m_),wn(t,i)}}function KE(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,i))return;p_.set(i),a.uniformMatrix3fv(this.addr,!1,p_),wn(t,i)}}function ZE(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,i))return;h_.set(i),a.uniformMatrix4fv(this.addr,!1,h_),wn(t,i)}}function QE(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function JE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;a.uniform2iv(this.addr,e),wn(t,e)}}function eT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;a.uniform3iv(this.addr,e),wn(t,e)}}function tT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;a.uniform4iv(this.addr,e),wn(t,e)}}function nT(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function iT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;a.uniform2uiv(this.addr,e),wn(t,e)}}function rT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;a.uniform3uiv(this.addr,e),wn(t,e)}}function sT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;a.uniform4uiv(this.addr,e),wn(t,e)}}function aT(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(c_.compareFunction=rg,o=c_):o=Sg,t.setTexture2D(e||o,s)}function oT(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Eg,s)}function lT(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Tg,s)}function uT(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Mg,s)}function cT(a){switch(a){case 5126:return XE;case 35664:return YE;case 35665:return qE;case 35666:return jE;case 35674:return $E;case 35675:return KE;case 35676:return ZE;case 5124:case 35670:return QE;case 35667:case 35671:return JE;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return rT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return aT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return uT}}function fT(a,e){a.uniform1fv(this.addr,e)}function dT(a,e){const t=bo(e,this.size,2);a.uniform2fv(this.addr,t)}function hT(a,e){const t=bo(e,this.size,3);a.uniform3fv(this.addr,t)}function pT(a,e){const t=bo(e,this.size,4);a.uniform4fv(this.addr,t)}function mT(a,e){const t=bo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function xT(a,e){const t=bo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function _T(a,e){const t=bo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function gT(a,e){a.uniform1iv(this.addr,e)}function vT(a,e){a.uniform2iv(this.addr,e)}function yT(a,e){a.uniform3iv(this.addr,e)}function ST(a,e){a.uniform4iv(this.addr,e)}function MT(a,e){a.uniform1uiv(this.addr,e)}function ET(a,e){a.uniform2uiv(this.addr,e)}function TT(a,e){a.uniform3uiv(this.addr,e)}function wT(a,e){a.uniform4uiv(this.addr,e)}function bT(a,e,t){const i=this.cache,s=e.length,o=zc(t,s);Tn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||Sg,o[u])}function AT(a,e,t){const i=this.cache,s=e.length,o=zc(t,s);Tn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Eg,o[u])}function CT(a,e,t){const i=this.cache,s=e.length,o=zc(t,s);Tn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Tg,o[u])}function RT(a,e,t){const i=this.cache,s=e.length,o=zc(t,s);Tn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||Mg,o[u])}function PT(a){switch(a){case 5126:return fT;case 35664:return dT;case 35665:return hT;case 35666:return pT;case 35674:return mT;case 35675:return xT;case 35676:return _T;case 5124:case 35670:return gT;case 35667:case 35671:return vT;case 35668:case 35672:return yT;case 35669:case 35673:return ST;case 5125:return MT;case 36294:return ET;case 36295:return TT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return RT}}class DT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cT(t.type)}}class LT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PT(t.type)}}class UT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const c=s[o];c.setValue(e,t[c.id],i)}}}const rh=/(\w+)(\])?(\[|\.)?/g;function x_(a,e){a.seq.push(e),a.map[e.id]=e}function IT(a,e,t){const i=a.name,s=i.length;for(rh.lastIndex=0;;){const o=rh.exec(i),u=rh.lastIndex;let c=o[1];const d=o[2]==="]",h=o[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===s){x_(t,h===void 0?new DT(c,a,e):new LT(c,a,e));break}else{let x=t.map[c];x===void 0&&(x=new UT(c),x_(t,x)),t=x}}}class _c{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),u=e.getUniformLocation(t,o.name);IT(o,u,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,u=t.length;o!==u;++o){const c=t[o],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function __(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const NT=37297;let FT=0;function OT(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const g_=new yt;function kT(a){Nt._getMatrix(g_,Nt.workingColorSpace,a);const e=`mat3( ${g_.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(a)){case Mc:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function v_(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+OT(a.getShaderSource(e),c)}else return o}function zT(a,e){const t=kT(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function BT(a,e){let t;switch(e){case kS:t="Linear";break;case zS:t="Reinhard";break;case BS:t="Cineon";break;case VS:t="ACESFilmic";break;case HS:t="AgX";break;case WS:t="Neutral";break;case GS:t="Custom";break;default:vt("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fc=new ae;function VT(){Nt.getLuminanceCoefficients(fc);const a=fc.x.toFixed(4),e=fc.y.toFixed(4),t=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GT(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function HT(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function WT(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=a.getActiveAttrib(e,s),u=o.name;let c=1;o.type===a.FLOAT_MAT2&&(c=2),o.type===a.FLOAT_MAT3&&(c=3),o.type===a.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:a.getAttribLocation(e,u),locationSize:c}}return t}function ml(a){return a!==""}function y_(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function S_(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XT=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(a){return a.replace(XT,qT)}const YT=new Map;function qT(a,e){let t=St[e];if(t===void 0){const i=YT.get(e);if(i!==void 0)t=St[i],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sp(t)}const jT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M_(a){return a.replace(jT,$T)}function $T(a,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function E_(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KT(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===_S?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===kr&&(e="SHADOWMAP_TYPE_VSM"),e}function ZT(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QT(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function JT(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case j_:e="ENVMAP_BLENDING_MULTIPLY";break;case FS:e="ENVMAP_BLENDING_MIX";break;case OS:e="ENVMAP_BLENDING_ADD";break}return e}function ew(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function tw(a,e,t,i){const s=a.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=KT(t),h=ZT(t),p=QT(t),x=JT(t),_=ew(t),y=GT(t),E=HT(o),M=s.createProgram();let S,v,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ml).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ml).join(`
`),v.length>0&&(v+=`
`)):(S=[E_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),v=[E_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bs?"#define TONE_MAPPING":"",t.toneMapping!==bs?St.tonemapping_pars_fragment:"",t.toneMapping!==bs?BT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,zT("linearToOutputTexel",t.outputColorSpace),VT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ml).join(`
`)),u=sp(u),u=y_(u,t),u=S_(u,t),c=sp(c),c=y_(c,t),c=S_(c,t),u=M_(u),c=M_(c),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===Ux?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ux?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=L+S+u,D=L+v+c,U=__(s,s.VERTEX_SHADER,C),R=__(s,s.FRAGMENT_SHADER,D);s.attachShader(M,U),s.attachShader(M,R),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(B){if(a.debug.checkShaderErrors){const W=s.getProgramInfoLog(M)||"",Y=s.getShaderInfoLog(U)||"",oe=s.getShaderInfoLog(R)||"",ie=W.trim(),re=Y.trim(),fe=oe.trim();let H=!0,de=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(H=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,M,U,R);else{const $=v_(s,U,"vertex"),O=v_(s,R,"fragment");cn("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ie+`
`+$+`
`+O)}else ie!==""?vt("WebGLProgram: Program Info Log:",ie):(re===""||fe==="")&&(de=!1);de&&(B.diagnostics={runnable:H,programLog:ie,vertexShader:{log:re,prefix:S},fragmentShader:{log:fe,prefix:v}})}s.deleteShader(U),s.deleteShader(R),k=new _c(s,M),w=WT(s,M)}let k;this.getUniforms=function(){return k===void 0&&I(this),k};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(M,NT)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=R,this}let nw=0;class iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rw(e),t.set(e,i)),i}}class rw{constructor(e){this.id=nw++,this.code=e,this.usedTimes=0}}function sw(a,e,t,i,s,o,u){const c=new lg,d=new iw,h=new Set,p=[],x=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function S(w,A,B,W,Y){const oe=W.fog,ie=Y.geometry,re=w.isMeshStandardMaterial?W.environment:null,fe=(w.isMeshStandardMaterial?t:e).get(w.envMap||re),H=fe&&fe.mapping===Nc?fe.image.height:null,de=E[w.type];w.precision!==null&&(y=s.getMaxPrecision(w.precision),y!==w.precision&&vt("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const $=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,O=$!==void 0?$.length:0;let J=0;ie.morphAttributes.position!==void 0&&(J=1),ie.morphAttributes.normal!==void 0&&(J=2),ie.morphAttributes.color!==void 0&&(J=3);let Le,Pe,Oe,te;if(de){const _t=hr[de];Le=_t.vertexShader,Pe=_t.fragmentShader}else Le=w.vertexShader,Pe=w.fragmentShader,d.update(w),Oe=d.getVertexShaderID(w),te=d.getFragmentShaderID(w);const se=a.getRenderTarget(),_e=a.state.buffers.depth.getReversed(),Ie=Y.isInstancedMesh===!0,Ue=Y.isBatchedMesh===!0,ut=!!w.map,Vt=!!w.matcap,ct=!!fe,Dt=!!w.aoMap,z=!!w.lightMap,xt=!!w.bumpMap,pt=!!w.normalMap,Mt=!!w.displacementMap,Ge=!!w.emissiveMap,Pt=!!w.metalnessMap,ke=!!w.roughnessMap,et=w.anisotropy>0,N=w.clearcoat>0,b=w.dispersion>0,K=w.iridescence>0,he=w.sheen>0,xe=w.transmission>0,ce=et&&!!w.anisotropyMap,We=N&&!!w.clearcoatMap,Ae=N&&!!w.clearcoatNormalMap,ze=N&&!!w.clearcoatRoughnessMap,Be=K&&!!w.iridescenceMap,me=K&&!!w.iridescenceThicknessMap,Me=he&&!!w.sheenColorMap,Ke=he&&!!w.sheenRoughnessMap,Xe=!!w.specularMap,Re=!!w.specularColorMap,Qe=!!w.specularIntensityMap,V=xe&&!!w.transmissionMap,be=xe&&!!w.thicknessMap,Ee=!!w.gradientMap,Te=!!w.alphaMap,ge=w.alphaTest>0,ne=!!w.alphaHash,pe=!!w.extensions;let De=bs;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(De=a.toneMapping);const Et={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:Le,fragmentShader:Pe,defines:w.defines,customVertexShaderID:Oe,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Ue,batchingColor:Ue&&Y._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&Y.instanceColor!==null,instancingMorph:Ie&&Y.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:se===null?a.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:xo,alphaToCoverage:!!w.alphaToCoverage,map:ut,matcap:Vt,envMap:ct,envMapMode:ct&&fe.mapping,envMapCubeUVHeight:H,aoMap:Dt,lightMap:z,bumpMap:xt,normalMap:pt,displacementMap:_&&Mt,emissiveMap:Ge,normalMapObjectSpace:pt&&w.normalMapType===jS,normalMapTangentSpace:pt&&w.normalMapType===ig,metalnessMap:Pt,roughnessMap:ke,anisotropy:et,anisotropyMap:ce,clearcoat:N,clearcoatMap:We,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ze,dispersion:b,iridescence:K,iridescenceMap:Be,iridescenceThicknessMap:me,sheen:he,sheenColorMap:Me,sheenRoughnessMap:Ke,specularMap:Xe,specularColorMap:Re,specularIntensityMap:Qe,transmission:xe,transmissionMap:V,thicknessMap:be,gradientMap:Ee,opaque:w.transparent===!1&&w.blending===oo&&w.alphaToCoverage===!1,alphaMap:Te,alphaTest:ge,alphaHash:ne,combine:w.combine,mapUv:ut&&M(w.map.channel),aoMapUv:Dt&&M(w.aoMap.channel),lightMapUv:z&&M(w.lightMap.channel),bumpMapUv:xt&&M(w.bumpMap.channel),normalMapUv:pt&&M(w.normalMap.channel),displacementMapUv:Mt&&M(w.displacementMap.channel),emissiveMapUv:Ge&&M(w.emissiveMap.channel),metalnessMapUv:Pt&&M(w.metalnessMap.channel),roughnessMapUv:ke&&M(w.roughnessMap.channel),anisotropyMapUv:ce&&M(w.anisotropyMap.channel),clearcoatMapUv:We&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:me&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&M(w.sheenRoughnessMap.channel),specularMapUv:Xe&&M(w.specularMap.channel),specularColorMapUv:Re&&M(w.specularColorMap.channel),specularIntensityMapUv:Qe&&M(w.specularIntensityMap.channel),transmissionMapUv:V&&M(w.transmissionMap.channel),thicknessMapUv:be&&M(w.thicknessMap.channel),alphaMapUv:Te&&M(w.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(pt||et),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ie.attributes.uv&&(ut||Te),fog:!!oe,useFog:w.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:_e,skinning:Y.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&B.length>0,shadowMapType:a.shadowMap.type,toneMapping:De,decodeVideoTexture:ut&&w.map.isVideoTexture===!0&&Nt.getTransfer(w.map.colorSpace)===zt,decodeVideoTextureEmissive:Ge&&w.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(w.emissiveMap.colorSpace)===zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Vr,flipSided:w.side===hi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:pe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&w.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Et.vertexUv1s=h.has(1),Et.vertexUv2s=h.has(2),Et.vertexUv3s=h.has(3),h.clear(),Et}function v(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)A.push(B),A.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(L(A,w),C(A,w),A.push(a.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function L(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function C(w,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),A.gradientMap&&c.enable(22),w.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.reversedDepthBuffer&&c.enable(4),A.skinning&&c.enable(5),A.morphTargets&&c.enable(6),A.morphNormals&&c.enable(7),A.morphColors&&c.enable(8),A.premultipliedAlpha&&c.enable(9),A.shadowMapEnabled&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.transmission&&c.enable(15),A.sheen&&c.enable(16),A.opaque&&c.enable(17),A.pointsUvs&&c.enable(18),A.decodeVideoTexture&&c.enable(19),A.decodeVideoTextureEmissive&&c.enable(20),A.alphaToCoverage&&c.enable(21),w.push(c.mask)}function D(w){const A=E[w.type];let B;if(A){const W=hr[A];B=bc.clone(W.uniforms)}else B=w.uniforms;return B}function U(w,A){let B;for(let W=0,Y=p.length;W<Y;W++){const oe=p[W];if(oe.cacheKey===A){B=oe,++B.usedTimes;break}}return B===void 0&&(B=new tw(a,A,w,o),p.push(B)),B}function R(w){if(--w.usedTimes===0){const A=p.indexOf(w);p[A]=p[p.length-1],p.pop(),w.destroy()}}function I(w){d.remove(w)}function k(){d.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:D,acquireProgram:U,releaseProgram:R,releaseShaderCache:I,programs:p,dispose:k}}function aw(){let a=new WeakMap;function e(u){return a.has(u)}function t(u){let c=a.get(u);return c===void 0&&(c={},a.set(u,c)),c}function i(u){a.delete(u)}function s(u,c,d){a.get(u)[c]=d}function o(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function ow(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function T_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function w_(){const a=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function u(x,_,y,E,M,S){let v=a[e];return v===void 0?(v={id:x.id,object:x,geometry:_,material:y,groupOrder:E,renderOrder:x.renderOrder,z:M,group:S},a[e]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=y,v.groupOrder=E,v.renderOrder=x.renderOrder,v.z=M,v.group=S),e++,v}function c(x,_,y,E,M,S){const v=u(x,_,y,E,M,S);y.transmission>0?i.push(v):y.transparent===!0?s.push(v):t.push(v)}function d(x,_,y,E,M,S){const v=u(x,_,y,E,M,S);y.transmission>0?i.unshift(v):y.transparent===!0?s.unshift(v):t.unshift(v)}function h(x,_){t.length>1&&t.sort(x||ow),i.length>1&&i.sort(_||T_),s.length>1&&s.sort(_||T_)}function p(){for(let x=e,_=a.length;x<_;x++){const y=a[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:c,unshift:d,finish:p,sort:h}}function lw(){let a=new WeakMap;function e(i,s){const o=a.get(i);let u;return o===void 0?(u=new w_,a.set(i,[u])):s>=o.length?(u=new w_,o.push(u)):u=o[s],u}function t(){a=new WeakMap}return{get:e,dispose:t}}function uw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new it};break;case"SpotLight":t={position:new ae,direction:new ae,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return a[e.id]=t,t}}}function cw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let fw=0;function dw(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function hw(a){const e=new uw,t=cw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new ae);const s=new ae,o=new ln,u=new ln;function c(h){let p=0,x=0,_=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let y=0,E=0,M=0,S=0,v=0,L=0,C=0,D=0,U=0,R=0,I=0;h.sort(dw);for(let w=0,A=h.length;w<A;w++){const B=h[w],W=B.color,Y=B.intensity,oe=B.distance,ie=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=W.r*Y,x+=W.g*Y,_+=W.b*Y;else if(B.isLightProbe){for(let re=0;re<9;re++)i.probe[re].addScaledVector(B.sh.coefficients[re],Y);I++}else if(B.isDirectionalLight){const re=e.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const fe=B.shadow,H=t.get(B);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,i.directionalShadow[y]=H,i.directionalShadowMap[y]=ie,i.directionalShadowMatrix[y]=B.shadow.matrix,L++}i.directional[y]=re,y++}else if(B.isSpotLight){const re=e.get(B);re.position.setFromMatrixPosition(B.matrixWorld),re.color.copy(W).multiplyScalar(Y),re.distance=oe,re.coneCos=Math.cos(B.angle),re.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),re.decay=B.decay,i.spot[M]=re;const fe=B.shadow;if(B.map&&(i.spotLightMap[U]=B.map,U++,fe.updateMatrices(B),B.castShadow&&R++),i.spotLightMatrix[M]=fe.matrix,B.castShadow){const H=t.get(B);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=ie,D++}M++}else if(B.isRectAreaLight){const re=e.get(B);re.color.copy(W).multiplyScalar(Y),re.halfWidth.set(B.width*.5,0,0),re.halfHeight.set(0,B.height*.5,0),i.rectArea[S]=re,S++}else if(B.isPointLight){const re=e.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity),re.distance=B.distance,re.decay=B.decay,B.castShadow){const fe=B.shadow,H=t.get(B);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,H.shadowCameraNear=fe.camera.near,H.shadowCameraFar=fe.camera.far,i.pointShadow[E]=H,i.pointShadowMap[E]=ie,i.pointShadowMatrix[E]=B.shadow.matrix,C++}i.point[E]=re,E++}else if(B.isHemisphereLight){const re=e.get(B);re.skyColor.copy(B.color).multiplyScalar(Y),re.groundColor.copy(B.groundColor).multiplyScalar(Y),i.hemi[v]=re,v++}}S>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=x,i.ambient[2]=_;const k=i.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==M||k.rectAreaLength!==S||k.hemiLength!==v||k.numDirectionalShadows!==L||k.numPointShadows!==C||k.numSpotShadows!==D||k.numSpotMaps!==U||k.numLightProbes!==I)&&(i.directional.length=y,i.spot.length=M,i.rectArea.length=S,i.point.length=E,i.hemi.length=v,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=D+U-R,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,k.directionalLength=y,k.pointLength=E,k.spotLength=M,k.rectAreaLength=S,k.hemiLength=v,k.numDirectionalShadows=L,k.numPointShadows=C,k.numSpotShadows=D,k.numSpotMaps=U,k.numLightProbes=I,i.version=fw++)}function d(h,p){let x=0,_=0,y=0,E=0,M=0;const S=p.matrixWorldInverse;for(let v=0,L=h.length;v<L;v++){const C=h[v];if(C.isDirectionalLight){const D=i.directional[x];D.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(S),x++}else if(C.isSpotLight){const D=i.spot[y];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const D=i.rectArea[E];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(S),u.identity(),o.copy(C.matrixWorld),o.premultiply(S),u.extractRotation(o),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),E++}else if(C.isPointLight){const D=i.point[_];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(S),_++}else if(C.isHemisphereLight){const D=i.hemi[M];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(S),M++}}}return{setup:c,setupView:d,state:i}}function b_(a){const e=new hw(a),t=[],i=[];function s(p){h.camera=p,t.length=0,i.length=0}function o(p){t.push(p)}function u(p){i.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:u}}function pw(a){let e=new WeakMap;function t(s,o=0){const u=e.get(s);let c;return u===void 0?(c=new b_(a),e.set(s,[c])):o>=u.length?(c=new b_(a),u.push(c)):c=u[o],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _w(a,e,t){let i=new Up;const s=new lt,o=new lt,u=new fn,c=new O1({depthPacking:qS}),d=new k1,h={},p=t.maxTextureSize,x={[Ps]:hi,[hi]:Ps,[Vr]:Vr},_=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:mw,fragmentShader:xw}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new ri;E.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Mr(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=q_;let v=this.type;this.render=function(R,I,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||R.length===0)return;const w=a.getRenderTarget(),A=a.getActiveCubeFace(),B=a.getActiveMipmapLevel(),W=a.state;W.setBlending(gr),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Y=v!==kr&&this.type===kr,oe=v===kr&&this.type!==kr;for(let ie=0,re=R.length;ie<re;ie++){const fe=R[ie],H=fe.shadow;if(H===void 0){vt("WebGLShadowMap:",fe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const de=H.getFrameExtents();if(s.multiply(de),o.copy(H.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/de.x),s.x=o.x*de.x,H.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/de.y),s.y=o.y*de.y,H.mapSize.y=o.y)),H.map===null||Y===!0||oe===!0){const O=this.type!==kr?{minFilter:Ci,magFilter:Ci}:{};H.map!==null&&H.map.dispose(),H.map=new ar(s.x,s.y,O),H.map.texture.name=fe.name+".shadowMap",H.camera.updateProjectionMatrix()}a.setRenderTarget(H.map),a.clear();const $=H.getViewportCount();for(let O=0;O<$;O++){const J=H.getViewport(O);u.set(o.x*J.x,o.y*J.y,o.x*J.z,o.y*J.w),W.viewport(u),H.updateMatrices(fe,O),i=H.getFrustum(),D(I,k,H.camera,fe,this.type)}H.isPointLightShadow!==!0&&this.type===kr&&L(H,k),H.needsUpdate=!1}v=this.type,S.needsUpdate=!1,a.setRenderTarget(w,A,B)};function L(R,I){const k=e.update(M);_.defines.VSM_SAMPLES!==R.blurSamples&&(_.defines.VSM_SAMPLES=R.blurSamples,y.defines.VSM_SAMPLES=R.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ar(s.x,s.y)),_.uniforms.shadow_pass.value=R.map.texture,_.uniforms.resolution.value=R.mapSize,_.uniforms.radius.value=R.radius,a.setRenderTarget(R.mapPass),a.clear(),a.renderBufferDirect(I,null,k,_,M,null),y.uniforms.shadow_pass.value=R.mapPass.texture,y.uniforms.resolution.value=R.mapSize,y.uniforms.radius.value=R.radius,a.setRenderTarget(R.map),a.clear(),a.renderBufferDirect(I,null,k,y,M,null)}function C(R,I,k,w){let A=null;const B=k.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)A=B;else if(A=k.isPointLight===!0?d:c,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const W=A.uuid,Y=I.uuid;let oe=h[W];oe===void 0&&(oe={},h[W]=oe);let ie=oe[Y];ie===void 0&&(ie=A.clone(),oe[Y]=ie,I.addEventListener("dispose",U)),A=ie}if(A.visible=I.visible,A.wireframe=I.wireframe,w===kr?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:x[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const W=a.properties.get(A);W.light=k}return A}function D(R,I,k,w,A){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===kr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,R.matrixWorld);const Y=e.update(R),oe=R.material;if(Array.isArray(oe)){const ie=Y.groups;for(let re=0,fe=ie.length;re<fe;re++){const H=ie[re],de=oe[H.materialIndex];if(de&&de.visible){const $=C(R,de,w,A);R.onBeforeShadow(a,R,I,k,Y,$,H),a.renderBufferDirect(k,null,Y,$,R,H),R.onAfterShadow(a,R,I,k,Y,$,H)}}}else if(oe.visible){const ie=C(R,oe,w,A);R.onBeforeShadow(a,R,I,k,Y,ie,null),a.renderBufferDirect(k,null,Y,ie,R,null),R.onAfterShadow(a,R,I,k,Y,ie,null)}}const W=R.children;for(let Y=0,oe=W.length;Y<oe;Y++)D(W[Y],I,k,w,A)}function U(R){R.target.removeEventListener("dispose",U);for(const k in h){const w=h[k],A=R.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const gw={[xh]:_h,[gh]:Sh,[vh]:Mh,[ho]:yh,[_h]:xh,[Sh]:gh,[Mh]:vh,[yh]:ho};function vw(a,e){function t(){let V=!1;const be=new fn;let Ee=null;const Te=new fn(0,0,0,0);return{setMask:function(ge){Ee!==ge&&!V&&(a.colorMask(ge,ge,ge,ge),Ee=ge)},setLocked:function(ge){V=ge},setClear:function(ge,ne,pe,De,Et){Et===!0&&(ge*=De,ne*=De,pe*=De),be.set(ge,ne,pe,De),Te.equals(be)===!1&&(a.clearColor(ge,ne,pe,De),Te.copy(be))},reset:function(){V=!1,Ee=null,Te.set(-1,0,0,0)}}}function i(){let V=!1,be=!1,Ee=null,Te=null,ge=null;return{setReversed:function(ne){if(be!==ne){const pe=e.get("EXT_clip_control");ne?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),be=ne;const De=ge;ge=null,this.setClear(De)}},getReversed:function(){return be},setTest:function(ne){ne?se(a.DEPTH_TEST):_e(a.DEPTH_TEST)},setMask:function(ne){Ee!==ne&&!V&&(a.depthMask(ne),Ee=ne)},setFunc:function(ne){if(be&&(ne=gw[ne]),Te!==ne){switch(ne){case xh:a.depthFunc(a.NEVER);break;case _h:a.depthFunc(a.ALWAYS);break;case gh:a.depthFunc(a.LESS);break;case ho:a.depthFunc(a.LEQUAL);break;case vh:a.depthFunc(a.EQUAL);break;case yh:a.depthFunc(a.GEQUAL);break;case Sh:a.depthFunc(a.GREATER);break;case Mh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Te=ne}},setLocked:function(ne){V=ne},setClear:function(ne){ge!==ne&&(be&&(ne=1-ne),a.clearDepth(ne),ge=ne)},reset:function(){V=!1,Ee=null,Te=null,ge=null,be=!1}}}function s(){let V=!1,be=null,Ee=null,Te=null,ge=null,ne=null,pe=null,De=null,Et=null;return{setTest:function(_t){V||(_t?se(a.STENCIL_TEST):_e(a.STENCIL_TEST))},setMask:function(_t){be!==_t&&!V&&(a.stencilMask(_t),be=_t)},setFunc:function(_t,nn,Kt){(Ee!==_t||Te!==nn||ge!==Kt)&&(a.stencilFunc(_t,nn,Kt),Ee=_t,Te=nn,ge=Kt)},setOp:function(_t,nn,Kt){(ne!==_t||pe!==nn||De!==Kt)&&(a.stencilOp(_t,nn,Kt),ne=_t,pe=nn,De=Kt)},setLocked:function(_t){V=_t},setClear:function(_t){Et!==_t&&(a.clearStencil(_t),Et=_t)},reset:function(){V=!1,be=null,Ee=null,Te=null,ge=null,ne=null,pe=null,De=null,Et=null}}}const o=new t,u=new i,c=new s,d=new WeakMap,h=new WeakMap;let p={},x={},_=new WeakMap,y=[],E=null,M=!1,S=null,v=null,L=null,C=null,D=null,U=null,R=null,I=new it(0,0,0),k=0,w=!1,A=null,B=null,W=null,Y=null,oe=null;const ie=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,fe=0;const H=a.getParameter(a.VERSION);H.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(H)[1]),re=fe>=1):H.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),re=fe>=2);let de=null,$={};const O=a.getParameter(a.SCISSOR_BOX),J=a.getParameter(a.VIEWPORT),Le=new fn().fromArray(O),Pe=new fn().fromArray(J);function Oe(V,be,Ee,Te){const ge=new Uint8Array(4),ne=a.createTexture();a.bindTexture(V,ne),a.texParameteri(V,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(V,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let pe=0;pe<Ee;pe++)V===a.TEXTURE_3D||V===a.TEXTURE_2D_ARRAY?a.texImage3D(be,0,a.RGBA,1,1,Te,0,a.RGBA,a.UNSIGNED_BYTE,ge):a.texImage2D(be+pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ge);return ne}const te={};te[a.TEXTURE_2D]=Oe(a.TEXTURE_2D,a.TEXTURE_2D,1),te[a.TEXTURE_CUBE_MAP]=Oe(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[a.TEXTURE_2D_ARRAY]=Oe(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),te[a.TEXTURE_3D]=Oe(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),c.setClear(0),se(a.DEPTH_TEST),u.setFunc(ho),xt(!1),pt(Rx),se(a.CULL_FACE),Dt(gr);function se(V){p[V]!==!0&&(a.enable(V),p[V]=!0)}function _e(V){p[V]!==!1&&(a.disable(V),p[V]=!1)}function Ie(V,be){return x[V]!==be?(a.bindFramebuffer(V,be),x[V]=be,V===a.DRAW_FRAMEBUFFER&&(x[a.FRAMEBUFFER]=be),V===a.FRAMEBUFFER&&(x[a.DRAW_FRAMEBUFFER]=be),!0):!1}function Ue(V,be){let Ee=y,Te=!1;if(V){Ee=_.get(be),Ee===void 0&&(Ee=[],_.set(be,Ee));const ge=V.textures;if(Ee.length!==ge.length||Ee[0]!==a.COLOR_ATTACHMENT0){for(let ne=0,pe=ge.length;ne<pe;ne++)Ee[ne]=a.COLOR_ATTACHMENT0+ne;Ee.length=ge.length,Te=!0}}else Ee[0]!==a.BACK&&(Ee[0]=a.BACK,Te=!0);Te&&a.drawBuffers(Ee)}function ut(V){return E!==V?(a.useProgram(V),E=V,!0):!1}const Vt={[ia]:a.FUNC_ADD,[vS]:a.FUNC_SUBTRACT,[yS]:a.FUNC_REVERSE_SUBTRACT};Vt[SS]=a.MIN,Vt[MS]=a.MAX;const ct={[ES]:a.ZERO,[TS]:a.ONE,[wS]:a.SRC_COLOR,[ph]:a.SRC_ALPHA,[DS]:a.SRC_ALPHA_SATURATE,[RS]:a.DST_COLOR,[AS]:a.DST_ALPHA,[bS]:a.ONE_MINUS_SRC_COLOR,[mh]:a.ONE_MINUS_SRC_ALPHA,[PS]:a.ONE_MINUS_DST_COLOR,[CS]:a.ONE_MINUS_DST_ALPHA,[LS]:a.CONSTANT_COLOR,[US]:a.ONE_MINUS_CONSTANT_COLOR,[IS]:a.CONSTANT_ALPHA,[NS]:a.ONE_MINUS_CONSTANT_ALPHA};function Dt(V,be,Ee,Te,ge,ne,pe,De,Et,_t){if(V===gr){M===!0&&(_e(a.BLEND),M=!1);return}if(M===!1&&(se(a.BLEND),M=!0),V!==gS){if(V!==S||_t!==w){if((v!==ia||D!==ia)&&(a.blendEquation(a.FUNC_ADD),v=ia,D=ia),_t)switch(V){case oo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case sa:a.blendFunc(a.ONE,a.ONE);break;case Px:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Dx:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:cn("WebGLState: Invalid blending: ",V);break}else switch(V){case oo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case sa:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Px:cn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dx:cn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:cn("WebGLState: Invalid blending: ",V);break}L=null,C=null,U=null,R=null,I.set(0,0,0),k=0,S=V,w=_t}return}ge=ge||be,ne=ne||Ee,pe=pe||Te,(be!==v||ge!==D)&&(a.blendEquationSeparate(Vt[be],Vt[ge]),v=be,D=ge),(Ee!==L||Te!==C||ne!==U||pe!==R)&&(a.blendFuncSeparate(ct[Ee],ct[Te],ct[ne],ct[pe]),L=Ee,C=Te,U=ne,R=pe),(De.equals(I)===!1||Et!==k)&&(a.blendColor(De.r,De.g,De.b,Et),I.copy(De),k=Et),S=V,w=!1}function z(V,be){V.side===Vr?_e(a.CULL_FACE):se(a.CULL_FACE);let Ee=V.side===hi;be&&(Ee=!Ee),xt(Ee),V.blending===oo&&V.transparent===!1?Dt(gr):Dt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),o.setMask(V.colorWrite);const Te=V.stencilWrite;c.setTest(Te),Te&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ge(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?se(a.SAMPLE_ALPHA_TO_COVERAGE):_e(a.SAMPLE_ALPHA_TO_COVERAGE)}function xt(V){A!==V&&(V?a.frontFace(a.CW):a.frontFace(a.CCW),A=V)}function pt(V){V!==mS?(se(a.CULL_FACE),V!==B&&(V===Rx?a.cullFace(a.BACK):V===xS?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):_e(a.CULL_FACE),B=V}function Mt(V){V!==W&&(re&&a.lineWidth(V),W=V)}function Ge(V,be,Ee){V?(se(a.POLYGON_OFFSET_FILL),(Y!==be||oe!==Ee)&&(a.polygonOffset(be,Ee),Y=be,oe=Ee)):_e(a.POLYGON_OFFSET_FILL)}function Pt(V){V?se(a.SCISSOR_TEST):_e(a.SCISSOR_TEST)}function ke(V){V===void 0&&(V=a.TEXTURE0+ie-1),de!==V&&(a.activeTexture(V),de=V)}function et(V,be,Ee){Ee===void 0&&(de===null?Ee=a.TEXTURE0+ie-1:Ee=de);let Te=$[Ee];Te===void 0&&(Te={type:void 0,texture:void 0},$[Ee]=Te),(Te.type!==V||Te.texture!==be)&&(de!==Ee&&(a.activeTexture(Ee),de=Ee),a.bindTexture(V,be||te[V]),Te.type=V,Te.texture=be)}function N(){const V=$[de];V!==void 0&&V.type!==void 0&&(a.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{a.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function K(){try{a.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function he(){try{a.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function xe(){try{a.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ce(){try{a.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function We(){try{a.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ae(){try{a.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ze(){try{a.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Be(){try{a.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function me(){try{a.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Me(V){Le.equals(V)===!1&&(a.scissor(V.x,V.y,V.z,V.w),Le.copy(V))}function Ke(V){Pe.equals(V)===!1&&(a.viewport(V.x,V.y,V.z,V.w),Pe.copy(V))}function Xe(V,be){let Ee=h.get(be);Ee===void 0&&(Ee=new WeakMap,h.set(be,Ee));let Te=Ee.get(V);Te===void 0&&(Te=a.getUniformBlockIndex(be,V.name),Ee.set(V,Te))}function Re(V,be){const Te=h.get(be).get(V);d.get(be)!==Te&&(a.uniformBlockBinding(be,Te,V.__bindingPointIndex),d.set(be,Te))}function Qe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),p={},de=null,$={},x={},_=new WeakMap,y=[],E=null,M=!1,S=null,v=null,L=null,C=null,D=null,U=null,R=null,I=new it(0,0,0),k=0,w=!1,A=null,B=null,W=null,Y=null,oe=null,Le.set(0,0,a.canvas.width,a.canvas.height),Pe.set(0,0,a.canvas.width,a.canvas.height),o.reset(),u.reset(),c.reset()}return{buffers:{color:o,depth:u,stencil:c},enable:se,disable:_e,bindFramebuffer:Ie,drawBuffers:Ue,useProgram:ut,setBlending:Dt,setMaterial:z,setFlipSided:xt,setCullFace:pt,setLineWidth:Mt,setPolygonOffset:Ge,setScissorTest:Pt,activeTexture:ke,bindTexture:et,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:K,texImage2D:Be,texImage3D:me,updateUBOMapping:Xe,uniformBlockBinding:Re,texStorage2D:Ae,texStorage3D:ze,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:We,scissor:Me,viewport:Ke,reset:Qe}}function yw(a,e,t,i,s,o,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new lt,p=new WeakMap;let x;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return y?new OffscreenCanvas(N,b):Tc("canvas")}function M(N,b,K){let he=1;const xe=et(N);if((xe.width>K||xe.height>K)&&(he=K/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ce=Math.floor(he*xe.width),We=Math.floor(he*xe.height);x===void 0&&(x=E(ce,We));const Ae=b?E(ce,We):x;return Ae.width=ce,Ae.height=We,Ae.getContext("2d").drawImage(N,0,0,ce,We),vt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ce+"x"+We+")."),Ae}else return"data"in N&&vt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),N;return N}function S(N){return N.generateMipmaps}function v(N){a.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?a.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(N,b,K,he,xe=!1){if(N!==null){if(a[N]!==void 0)return a[N];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ce=b;if(b===a.RED&&(K===a.FLOAT&&(ce=a.R32F),K===a.HALF_FLOAT&&(ce=a.R16F),K===a.UNSIGNED_BYTE&&(ce=a.R8)),b===a.RED_INTEGER&&(K===a.UNSIGNED_BYTE&&(ce=a.R8UI),K===a.UNSIGNED_SHORT&&(ce=a.R16UI),K===a.UNSIGNED_INT&&(ce=a.R32UI),K===a.BYTE&&(ce=a.R8I),K===a.SHORT&&(ce=a.R16I),K===a.INT&&(ce=a.R32I)),b===a.RG&&(K===a.FLOAT&&(ce=a.RG32F),K===a.HALF_FLOAT&&(ce=a.RG16F),K===a.UNSIGNED_BYTE&&(ce=a.RG8)),b===a.RG_INTEGER&&(K===a.UNSIGNED_BYTE&&(ce=a.RG8UI),K===a.UNSIGNED_SHORT&&(ce=a.RG16UI),K===a.UNSIGNED_INT&&(ce=a.RG32UI),K===a.BYTE&&(ce=a.RG8I),K===a.SHORT&&(ce=a.RG16I),K===a.INT&&(ce=a.RG32I)),b===a.RGB_INTEGER&&(K===a.UNSIGNED_BYTE&&(ce=a.RGB8UI),K===a.UNSIGNED_SHORT&&(ce=a.RGB16UI),K===a.UNSIGNED_INT&&(ce=a.RGB32UI),K===a.BYTE&&(ce=a.RGB8I),K===a.SHORT&&(ce=a.RGB16I),K===a.INT&&(ce=a.RGB32I)),b===a.RGBA_INTEGER&&(K===a.UNSIGNED_BYTE&&(ce=a.RGBA8UI),K===a.UNSIGNED_SHORT&&(ce=a.RGBA16UI),K===a.UNSIGNED_INT&&(ce=a.RGBA32UI),K===a.BYTE&&(ce=a.RGBA8I),K===a.SHORT&&(ce=a.RGBA16I),K===a.INT&&(ce=a.RGBA32I)),b===a.RGB&&(K===a.UNSIGNED_INT_5_9_9_9_REV&&(ce=a.RGB9_E5),K===a.UNSIGNED_INT_10F_11F_11F_REV&&(ce=a.R11F_G11F_B10F)),b===a.RGBA){const We=xe?Mc:Nt.getTransfer(he);K===a.FLOAT&&(ce=a.RGBA32F),K===a.HALF_FLOAT&&(ce=a.RGBA16F),K===a.UNSIGNED_BYTE&&(ce=We===zt?a.SRGB8_ALPHA8:a.RGBA8),K===a.UNSIGNED_SHORT_4_4_4_4&&(ce=a.RGBA4),K===a.UNSIGNED_SHORT_5_5_5_1&&(ce=a.RGB5_A1)}return(ce===a.R16F||ce===a.R32F||ce===a.RG16F||ce===a.RG32F||ce===a.RGBA16F||ce===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function D(N,b){let K;return N?b===null||b===da||b===Ml?K=a.DEPTH24_STENCIL8:b===Hr?K=a.DEPTH32F_STENCIL8:b===Sl&&(K=a.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===da||b===Ml?K=a.DEPTH_COMPONENT24:b===Hr?K=a.DEPTH_COMPONENT32F:b===Sl&&(K=a.DEPTH_COMPONENT16),K}function U(N,b){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ci&&N.minFilter!==Wi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function R(N){const b=N.target;b.removeEventListener("dispose",R),k(b),b.isVideoTexture&&p.delete(b)}function I(N){const b=N.target;b.removeEventListener("dispose",I),A(b)}function k(N){const b=i.get(N);if(b.__webglInit===void 0)return;const K=N.source,he=_.get(K);if(he){const xe=he[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&w(N),Object.keys(he).length===0&&_.delete(K)}i.remove(N)}function w(N){const b=i.get(N);a.deleteTexture(b.__webglTexture);const K=N.source,he=_.get(K);delete he[b.__cacheKey],u.memory.textures--}function A(N){const b=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let xe=0;xe<b.__webglFramebuffer[he].length;xe++)a.deleteFramebuffer(b.__webglFramebuffer[he][xe]);else a.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)a.deleteFramebuffer(b.__webglFramebuffer[he]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=N.textures;for(let he=0,xe=K.length;he<xe;he++){const ce=i.get(K[he]);ce.__webglTexture&&(a.deleteTexture(ce.__webglTexture),u.memory.textures--),i.remove(K[he])}i.remove(N)}let B=0;function W(){B=0}function Y(){const N=B;return N>=s.maxTextures&&vt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),B+=1,N}function oe(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ie(N,b){const K=i.get(N);if(N.isVideoTexture&&Pt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&K.__version!==N.version){const he=N.image;if(he===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(K,N,b);return}}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,K.__webglTexture,a.TEXTURE0+b)}function re(N,b){const K=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){te(K,N,b);return}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,K.__webglTexture,a.TEXTURE0+b)}function fe(N,b){const K=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){te(K,N,b);return}t.bindTexture(a.TEXTURE_3D,K.__webglTexture,a.TEXTURE0+b)}function H(N,b){const K=i.get(N);if(N.version>0&&K.__version!==N.version){se(K,N,b);return}t.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture,a.TEXTURE0+b)}const de={[wh]:a.REPEAT,[Gr]:a.CLAMP_TO_EDGE,[bh]:a.MIRRORED_REPEAT},$={[Ci]:a.NEAREST,[XS]:a.NEAREST_MIPMAP_NEAREST,[Vu]:a.NEAREST_MIPMAP_LINEAR,[Wi]:a.LINEAR,[wd]:a.LINEAR_MIPMAP_NEAREST,[aa]:a.LINEAR_MIPMAP_LINEAR},O={[$S]:a.NEVER,[t1]:a.ALWAYS,[KS]:a.LESS,[rg]:a.LEQUAL,[ZS]:a.EQUAL,[e1]:a.GEQUAL,[QS]:a.GREATER,[JS]:a.NOTEQUAL};function J(N,b){if(b.type===Hr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Wi||b.magFilter===wd||b.magFilter===Vu||b.magFilter===aa||b.minFilter===Wi||b.minFilter===wd||b.minFilter===Vu||b.minFilter===aa)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(N,a.TEXTURE_WRAP_S,de[b.wrapS]),a.texParameteri(N,a.TEXTURE_WRAP_T,de[b.wrapT]),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,de[b.wrapR]),a.texParameteri(N,a.TEXTURE_MAG_FILTER,$[b.magFilter]),a.texParameteri(N,a.TEXTURE_MIN_FILTER,$[b.minFilter]),b.compareFunction&&(a.texParameteri(N,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(N,a.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ci||b.minFilter!==Vu&&b.minFilter!==aa||b.type===Hr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");a.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Le(N,b){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",R));const he=b.source;let xe=_.get(he);xe===void 0&&(xe={},_.set(he,xe));const ce=oe(b);if(ce!==N.__cacheKey){xe[ce]===void 0&&(xe[ce]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,K=!0),xe[ce].usedTimes++;const We=xe[N.__cacheKey];We!==void 0&&(xe[N.__cacheKey].usedTimes--,We.usedTimes===0&&w(b)),N.__cacheKey=ce,N.__webglTexture=xe[ce].texture}return K}function Pe(N,b,K){return Math.floor(Math.floor(N/K)/b)}function Oe(N,b,K,he){const ce=N.updateRanges;if(ce.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,K,he,b.data);else{ce.sort((me,Me)=>me.start-Me.start);let We=0;for(let me=1;me<ce.length;me++){const Me=ce[We],Ke=ce[me],Xe=Me.start+Me.count,Re=Pe(Ke.start,b.width,4),Qe=Pe(Me.start,b.width,4);Ke.start<=Xe+1&&Re===Qe&&Pe(Ke.start+Ke.count-1,b.width,4)===Re?Me.count=Math.max(Me.count,Ke.start+Ke.count-Me.start):(++We,ce[We]=Ke)}ce.length=We+1;const Ae=a.getParameter(a.UNPACK_ROW_LENGTH),ze=a.getParameter(a.UNPACK_SKIP_PIXELS),Be=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let me=0,Me=ce.length;me<Me;me++){const Ke=ce[me],Xe=Math.floor(Ke.start/4),Re=Math.ceil(Ke.count/4),Qe=Xe%b.width,V=Math.floor(Xe/b.width),be=Re,Ee=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,Qe),a.pixelStorei(a.UNPACK_SKIP_ROWS,V),t.texSubImage2D(a.TEXTURE_2D,0,Qe,V,be,Ee,K,he,b.data)}N.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ae),a.pixelStorei(a.UNPACK_SKIP_PIXELS,ze),a.pixelStorei(a.UNPACK_SKIP_ROWS,Be)}}function te(N,b,K){let he=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=a.TEXTURE_3D);const xe=Le(N,b),ce=b.source;t.bindTexture(he,N.__webglTexture,a.TEXTURE0+K);const We=i.get(ce);if(ce.version!==We.__version||xe===!0){t.activeTexture(a.TEXTURE0+K);const Ae=Nt.getPrimaries(Nt.workingColorSpace),ze=b.colorSpace===Ss?null:Nt.getPrimaries(b.colorSpace),Be=b.colorSpace===Ss||Ae===ze?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let me=M(b.image,!1,s.maxTextureSize);me=ke(b,me);const Me=o.convert(b.format,b.colorSpace),Ke=o.convert(b.type);let Xe=C(b.internalFormat,Me,Ke,b.colorSpace,b.isVideoTexture);J(he,b);let Re;const Qe=b.mipmaps,V=b.isVideoTexture!==!0,be=We.__version===void 0||xe===!0,Ee=ce.dataReady,Te=U(b,me);if(b.isDepthTexture)Xe=D(b.format===Tl,b.type),be&&(V?t.texStorage2D(a.TEXTURE_2D,1,Xe,me.width,me.height):t.texImage2D(a.TEXTURE_2D,0,Xe,me.width,me.height,0,Me,Ke,null));else if(b.isDataTexture)if(Qe.length>0){V&&be&&t.texStorage2D(a.TEXTURE_2D,Te,Xe,Qe[0].width,Qe[0].height);for(let ge=0,ne=Qe.length;ge<ne;ge++)Re=Qe[ge],V?Ee&&t.texSubImage2D(a.TEXTURE_2D,ge,0,0,Re.width,Re.height,Me,Ke,Re.data):t.texImage2D(a.TEXTURE_2D,ge,Xe,Re.width,Re.height,0,Me,Ke,Re.data);b.generateMipmaps=!1}else V?(be&&t.texStorage2D(a.TEXTURE_2D,Te,Xe,me.width,me.height),Ee&&Oe(b,me,Me,Ke)):t.texImage2D(a.TEXTURE_2D,0,Xe,me.width,me.height,0,Me,Ke,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&be&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Te,Xe,Qe[0].width,Qe[0].height,me.depth);for(let ge=0,ne=Qe.length;ge<ne;ge++)if(Re=Qe[ge],b.format!==sr)if(Me!==null)if(V){if(Ee)if(b.layerUpdates.size>0){const pe=i_(Re.width,Re.height,b.format,b.type);for(const De of b.layerUpdates){const Et=Re.data.subarray(De*pe/Re.data.BYTES_PER_ELEMENT,(De+1)*pe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,De,Re.width,Re.height,1,Me,Et)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,me.depth,Me,Re.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ge,Xe,Re.width,Re.height,me.depth,0,Re.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ee&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,me.depth,Me,Ke,Re.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ge,Xe,Re.width,Re.height,me.depth,0,Me,Ke,Re.data)}else{V&&be&&t.texStorage2D(a.TEXTURE_2D,Te,Xe,Qe[0].width,Qe[0].height);for(let ge=0,ne=Qe.length;ge<ne;ge++)Re=Qe[ge],b.format!==sr?Me!==null?V?Ee&&t.compressedTexSubImage2D(a.TEXTURE_2D,ge,0,0,Re.width,Re.height,Me,Re.data):t.compressedTexImage2D(a.TEXTURE_2D,ge,Xe,Re.width,Re.height,0,Re.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ee&&t.texSubImage2D(a.TEXTURE_2D,ge,0,0,Re.width,Re.height,Me,Ke,Re.data):t.texImage2D(a.TEXTURE_2D,ge,Xe,Re.width,Re.height,0,Me,Ke,Re.data)}else if(b.isDataArrayTexture)if(V){if(be&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Te,Xe,me.width,me.height,me.depth),Ee)if(b.layerUpdates.size>0){const ge=i_(me.width,me.height,b.format,b.type);for(const ne of b.layerUpdates){const pe=me.data.subarray(ne*ge/me.data.BYTES_PER_ELEMENT,(ne+1)*ge/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ne,me.width,me.height,1,Me,Ke,pe)}b.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Me,Ke,me.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Xe,me.width,me.height,me.depth,0,Me,Ke,me.data);else if(b.isData3DTexture)V?(be&&t.texStorage3D(a.TEXTURE_3D,Te,Xe,me.width,me.height,me.depth),Ee&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Me,Ke,me.data)):t.texImage3D(a.TEXTURE_3D,0,Xe,me.width,me.height,me.depth,0,Me,Ke,me.data);else if(b.isFramebufferTexture){if(be)if(V)t.texStorage2D(a.TEXTURE_2D,Te,Xe,me.width,me.height);else{let ge=me.width,ne=me.height;for(let pe=0;pe<Te;pe++)t.texImage2D(a.TEXTURE_2D,pe,Xe,ge,ne,0,Me,Ke,null),ge>>=1,ne>>=1}}else if(Qe.length>0){if(V&&be){const ge=et(Qe[0]);t.texStorage2D(a.TEXTURE_2D,Te,Xe,ge.width,ge.height)}for(let ge=0,ne=Qe.length;ge<ne;ge++)Re=Qe[ge],V?Ee&&t.texSubImage2D(a.TEXTURE_2D,ge,0,0,Me,Ke,Re):t.texImage2D(a.TEXTURE_2D,ge,Xe,Me,Ke,Re);b.generateMipmaps=!1}else if(V){if(be){const ge=et(me);t.texStorage2D(a.TEXTURE_2D,Te,Xe,ge.width,ge.height)}Ee&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Me,Ke,me)}else t.texImage2D(a.TEXTURE_2D,0,Xe,Me,Ke,me);S(b)&&v(he),We.__version=ce.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function se(N,b,K){if(b.image.length!==6)return;const he=Le(N,b),xe=b.source;t.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+K);const ce=i.get(xe);if(xe.version!==ce.__version||he===!0){t.activeTexture(a.TEXTURE0+K);const We=Nt.getPrimaries(Nt.workingColorSpace),Ae=b.colorSpace===Ss?null:Nt.getPrimaries(b.colorSpace),ze=b.colorSpace===Ss||We===Ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Be=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let ne=0;ne<6;ne++)!Be&&!me?Me[ne]=M(b.image[ne],!0,s.maxCubemapSize):Me[ne]=me?b.image[ne].image:b.image[ne],Me[ne]=ke(b,Me[ne]);const Ke=Me[0],Xe=o.convert(b.format,b.colorSpace),Re=o.convert(b.type),Qe=C(b.internalFormat,Xe,Re,b.colorSpace),V=b.isVideoTexture!==!0,be=ce.__version===void 0||he===!0,Ee=xe.dataReady;let Te=U(b,Ke);J(a.TEXTURE_CUBE_MAP,b);let ge;if(Be){V&&be&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Te,Qe,Ke.width,Ke.height);for(let ne=0;ne<6;ne++){ge=Me[ne].mipmaps;for(let pe=0;pe<ge.length;pe++){const De=ge[pe];b.format!==sr?Xe!==null?V?Ee&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,0,0,De.width,De.height,Xe,De.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,Qe,De.width,De.height,0,De.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ee&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,0,0,De.width,De.height,Xe,Re,De.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,Qe,De.width,De.height,0,Xe,Re,De.data)}}}else{if(ge=b.mipmaps,V&&be){ge.length>0&&Te++;const ne=et(Me[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Te,Qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(me){V?Ee&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Me[ne].width,Me[ne].height,Xe,Re,Me[ne].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Qe,Me[ne].width,Me[ne].height,0,Xe,Re,Me[ne].data);for(let pe=0;pe<ge.length;pe++){const Et=ge[pe].image[ne].image;V?Ee&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,0,0,Et.width,Et.height,Xe,Re,Et.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,Qe,Et.width,Et.height,0,Xe,Re,Et.data)}}else{V?Ee&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Xe,Re,Me[ne]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Qe,Xe,Re,Me[ne]);for(let pe=0;pe<ge.length;pe++){const De=ge[pe];V?Ee&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,0,0,Xe,Re,De.image[ne]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,Qe,Xe,Re,De.image[ne])}}}S(b)&&v(a.TEXTURE_CUBE_MAP),ce.__version=xe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function _e(N,b,K,he,xe,ce){const We=o.convert(K.format,K.colorSpace),Ae=o.convert(K.type),ze=C(K.internalFormat,We,Ae,K.colorSpace),Be=i.get(b),me=i.get(K);if(me.__renderTarget=b,!Be.__hasExternalTextures){const Me=Math.max(1,b.width>>ce),Ke=Math.max(1,b.height>>ce);xe===a.TEXTURE_3D||xe===a.TEXTURE_2D_ARRAY?t.texImage3D(xe,ce,ze,Me,Ke,b.depth,0,We,Ae,null):t.texImage2D(xe,ce,ze,Me,Ke,0,We,Ae,null)}t.bindFramebuffer(a.FRAMEBUFFER,N),Ge(b)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,xe,me.__webglTexture,0,Mt(b)):(xe===a.TEXTURE_2D||xe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,he,xe,me.__webglTexture,ce),t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ie(N,b,K){if(a.bindRenderbuffer(a.RENDERBUFFER,N),b.depthBuffer){const he=b.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ce=D(b.stencilBuffer,xe),We=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=Mt(b);Ge(b)?c.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ae,ce,b.width,b.height):K?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ae,ce,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,ce,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,We,a.RENDERBUFFER,N)}else{const he=b.textures;for(let xe=0;xe<he.length;xe++){const ce=he[xe],We=o.convert(ce.format,ce.colorSpace),Ae=o.convert(ce.type),ze=C(ce.internalFormat,We,Ae,ce.colorSpace),Be=Mt(b);K&&Ge(b)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Be,ze,b.width,b.height):Ge(b)?c.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Be,ze,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,ze,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ue(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=i.get(b.depthTexture);he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ie(b.depthTexture,0);const xe=he.__webglTexture,ce=Mt(b);if(b.depthTexture.format===El)Ge(b)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,xe,0,ce):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,xe,0);else if(b.depthTexture.format===Tl)Ge(b)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,xe,0,ce):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function ut(N){const b=i.get(N),K=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){const xe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),b.__depthDisposeCallback=xe}b.__boundDepthTexture=he}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const he=N.texture.mipmaps;he&&he.length>0?Ue(b.__webglFramebuffer[0],N):Ue(b.__webglFramebuffer,N)}else if(K){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=a.createRenderbuffer(),Ie(b.__webglDepthbuffer[he],N,!1);else{const xe=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[he];a.bindRenderbuffer(a.RENDERBUFFER,ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,xe,a.RENDERBUFFER,ce)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),Ie(b.__webglDepthbuffer,N,!1);else{const xe=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,xe,a.RENDERBUFFER,ce)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Vt(N,b,K){const he=i.get(N);b!==void 0&&_e(he.__webglFramebuffer,N,N.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),K!==void 0&&ut(N)}function ct(N){const b=N.texture,K=i.get(N),he=i.get(b);N.addEventListener("dispose",I);const xe=N.textures,ce=N.isWebGLCubeRenderTarget===!0,We=xe.length>1;if(We||(he.__webglTexture===void 0&&(he.__webglTexture=a.createTexture()),he.__version=b.version,u.memory.textures++),ce){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let ze=0;ze<b.mipmaps.length;ze++)K.__webglFramebuffer[Ae][ze]=a.createFramebuffer()}else K.__webglFramebuffer[Ae]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=a.createFramebuffer()}else K.__webglFramebuffer=a.createFramebuffer();if(We)for(let Ae=0,ze=xe.length;Ae<ze;Ae++){const Be=i.get(xe[Ae]);Be.__webglTexture===void 0&&(Be.__webglTexture=a.createTexture(),u.memory.textures++)}if(N.samples>0&&Ge(N)===!1){K.__webglMultisampledFramebuffer=a.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const ze=xe[Ae];K.__webglColorRenderbuffer[Ae]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,K.__webglColorRenderbuffer[Ae]);const Be=o.convert(ze.format,ze.colorSpace),me=o.convert(ze.type),Me=C(ze.internalFormat,Be,me,ze.colorSpace,N.isXRRenderTarget===!0),Ke=Mt(N);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ke,Me,N.width,N.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,K.__webglColorRenderbuffer[Ae])}a.bindRenderbuffer(a.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=a.createRenderbuffer(),Ie(K.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ce){t.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),J(a.TEXTURE_CUBE_MAP,b);for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let ze=0;ze<b.mipmaps.length;ze++)_e(K.__webglFramebuffer[Ae][ze],N,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ze);else _e(K.__webglFramebuffer[Ae],N,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(b)&&v(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ae=0,ze=xe.length;Ae<ze;Ae++){const Be=xe[Ae],me=i.get(Be);let Me=a.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Me=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Me,me.__webglTexture),J(Me,Be),_e(K.__webglFramebuffer,N,Be,a.COLOR_ATTACHMENT0+Ae,Me,0),S(Be)&&v(Me)}t.unbindTexture()}else{let Ae=a.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Ae,he.__webglTexture),J(Ae,b),b.mipmaps&&b.mipmaps.length>0)for(let ze=0;ze<b.mipmaps.length;ze++)_e(K.__webglFramebuffer[ze],N,b,a.COLOR_ATTACHMENT0,Ae,ze);else _e(K.__webglFramebuffer,N,b,a.COLOR_ATTACHMENT0,Ae,0);S(b)&&v(Ae),t.unbindTexture()}N.depthBuffer&&ut(N)}function Dt(N){const b=N.textures;for(let K=0,he=b.length;K<he;K++){const xe=b[K];if(S(xe)){const ce=L(N),We=i.get(xe).__webglTexture;t.bindTexture(ce,We),v(ce),t.unbindTexture()}}}const z=[],xt=[];function pt(N){if(N.samples>0){if(Ge(N)===!1){const b=N.textures,K=N.width,he=N.height;let xe=a.COLOR_BUFFER_BIT;const ce=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,We=i.get(N),Ae=b.length>1;if(Ae)for(let Be=0;Be<b.length;Be++)t.bindFramebuffer(a.FRAMEBUFFER,We.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,We.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const ze=N.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Be=0;Be<b.length;Be++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xe|=a.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xe|=a.STENCIL_BUFFER_BIT)),Ae){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,We.__webglColorRenderbuffer[Be]);const me=i.get(b[Be]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,me,0)}a.blitFramebuffer(0,0,K,he,0,0,K,he,xe,a.NEAREST),d===!0&&(z.length=0,xt.length=0,z.push(a.COLOR_ATTACHMENT0+Be),N.depthBuffer&&N.resolveDepthBuffer===!1&&(z.push(ce),xt.push(ce),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,xt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,z))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ae)for(let Be=0;Be<b.length;Be++){t.bindFramebuffer(a.FRAMEBUFFER,We.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.RENDERBUFFER,We.__webglColorRenderbuffer[Be]);const me=i.get(b[Be]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,We.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.TEXTURE_2D,me,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&d){const b=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function Mt(N){return Math.min(s.maxSamples,N.samples)}function Ge(N){const b=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pt(N){const b=u.render.frame;p.get(N)!==b&&(p.set(N,b),N.update())}function ke(N,b){const K=N.colorSpace,he=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==xo&&K!==Ss&&(Nt.getTransfer(K)===zt?(he!==sr||xe!==yr)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):cn("WebGLTextures: Unsupported texture color space:",K)),b}function et(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.setTexture2D=ie,this.setTexture2DArray=re,this.setTexture3D=fe,this.setTextureCube=H,this.rebindTextures=Vt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ge}function Sw(a,e){function t(i,s=Ss){let o;const u=Nt.getTransfer(s);if(i===yr)return a.UNSIGNED_BYTE;if(i===Tp)return a.UNSIGNED_SHORT_4_4_4_4;if(i===wp)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Q_)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===J_)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===K_)return a.BYTE;if(i===Z_)return a.SHORT;if(i===Sl)return a.UNSIGNED_SHORT;if(i===Ep)return a.INT;if(i===da)return a.UNSIGNED_INT;if(i===Hr)return a.FLOAT;if(i===vr)return a.HALF_FLOAT;if(i===eg)return a.ALPHA;if(i===tg)return a.RGB;if(i===sr)return a.RGBA;if(i===El)return a.DEPTH_COMPONENT;if(i===Tl)return a.DEPTH_STENCIL;if(i===ng)return a.RED;if(i===bp)return a.RED_INTEGER;if(i===Ap)return a.RG;if(i===Cp)return a.RG_INTEGER;if(i===Rp)return a.RGBA_INTEGER;if(i===hc||i===pc||i===mc||i===xc)if(u===zt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===hc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===hc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ah||i===Ch||i===Rh||i===Ph)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ah)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ch)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ph)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dh||i===Lh||i===Uh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Dh||i===Lh)return u===zt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Uh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ih||i===Nh||i===Fh||i===Oh||i===kh||i===zh||i===Bh||i===Vh||i===Gh||i===Hh||i===Wh||i===Xh||i===Yh||i===qh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Ih)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qh)return u===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jh||i===$h||i===Kh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===jh)return u===zt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$h)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zh||i===Qh||i===Jh||i===ep)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Zh)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Qh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ep)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ml?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const Mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ew=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Tw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new gg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yn({vertexShader:Mw,fragmentShader:Ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mr(new Oc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ww extends wo{constructor(e,t){super();const i=this;let s=null,o=1,u=null,c="local-floor",d=1,h=null,p=null,x=null,_=null,y=null,E=null;const M=typeof XRWebGLBinding<"u",S=new Tw,v={},L=t.getContextAttributes();let C=null,D=null;const U=[],R=[],I=new lt;let k=null;const w=new Gi;w.viewport=new fn;const A=new Gi;A.viewport=new fn;const B=[w,A],W=new H1;let Y=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let se=U[te];return se===void 0&&(se=new $d,U[te]=se),se.getTargetRaySpace()},this.getControllerGrip=function(te){let se=U[te];return se===void 0&&(se=new $d,U[te]=se),se.getGripSpace()},this.getHand=function(te){let se=U[te];return se===void 0&&(se=new $d,U[te]=se),se.getHandSpace()};function ie(te){const se=R.indexOf(te.inputSource);if(se===-1)return;const _e=U[se];_e!==void 0&&(_e.update(te.inputSource,te.frame,h||u),_e.dispatchEvent({type:te.type,data:te.inputSource}))}function re(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",fe);for(let te=0;te<U.length;te++){const se=R[te];se!==null&&(R[te]=null,U[te].disconnect(se))}Y=null,oe=null,S.reset();for(const te in v)delete v[te];e.setRenderTarget(C),y=null,_=null,x=null,s=null,D=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){o=te,i.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){c=te,i.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return x===null&&M&&(x=new XRWebGLBinding(s,t)),x},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",re),s.addEventListener("inputsourceschange",fe),L.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ie=null,Ue=null;L.depth&&(Ue=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=L.stencil?Tl:El,Ie=L.stencil?Ml:da);const ut={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:o};x=this.getBinding(),_=x.createProjectionLayer(ut),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new ar(_.textureWidth,_.textureHeight,{format:sr,type:yr,depthTexture:new _g(_.textureWidth,_.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const _e={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new ar(y.framebufferWidth,y.framebufferHeight,{format:sr,type:yr,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(c),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function fe(te){for(let se=0;se<te.removed.length;se++){const _e=te.removed[se],Ie=R.indexOf(_e);Ie>=0&&(R[Ie]=null,U[Ie].disconnect(_e))}for(let se=0;se<te.added.length;se++){const _e=te.added[se];let Ie=R.indexOf(_e);if(Ie===-1){for(let ut=0;ut<U.length;ut++)if(ut>=R.length){R.push(_e),Ie=ut;break}else if(R[ut]===null){R[ut]=_e,Ie=ut;break}if(Ie===-1)break}const Ue=U[Ie];Ue&&Ue.connect(_e)}}const H=new ae,de=new ae;function $(te,se,_e){H.setFromMatrixPosition(se.matrixWorld),de.setFromMatrixPosition(_e.matrixWorld);const Ie=H.distanceTo(de),Ue=se.projectionMatrix.elements,ut=_e.projectionMatrix.elements,Vt=Ue[14]/(Ue[10]-1),ct=Ue[14]/(Ue[10]+1),Dt=(Ue[9]+1)/Ue[5],z=(Ue[9]-1)/Ue[5],xt=(Ue[8]-1)/Ue[0],pt=(ut[8]+1)/ut[0],Mt=Vt*xt,Ge=Vt*pt,Pt=Ie/(-xt+pt),ke=Pt*-xt;if(se.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ke),te.translateZ(Pt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ue[10]===-1)te.projectionMatrix.copy(se.projectionMatrix),te.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const et=Vt+Pt,N=ct+Pt,b=Mt-ke,K=Ge+(Ie-ke),he=Dt*ct/N*et,xe=z*ct/N*et;te.projectionMatrix.makePerspective(b,K,he,xe,et,N),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function O(te,se){se===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(se.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let se=te.near,_e=te.far;S.texture!==null&&(S.depthNear>0&&(se=S.depthNear),S.depthFar>0&&(_e=S.depthFar)),W.near=A.near=w.near=se,W.far=A.far=w.far=_e,(Y!==W.near||oe!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),Y=W.near,oe=W.far),W.layers.mask=te.layers.mask|6,w.layers.mask=W.layers.mask&3,A.layers.mask=W.layers.mask&5;const Ie=te.parent,Ue=W.cameras;O(W,Ie);for(let ut=0;ut<Ue.length;ut++)O(Ue[ut],Ie);Ue.length===2?$(W,w,A):W.projectionMatrix.copy(w.projectionMatrix),J(te,W,Ie)};function J(te,se,_e){_e===null?te.matrix.copy(se.matrixWorld):(te.matrix.copy(_e.matrixWorld),te.matrix.invert(),te.matrix.multiply(se.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(se.projectionMatrix),te.projectionMatrixInverse.copy(se.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=np*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(_===null&&y===null))return d},this.setFoveation=function(te){d=te,_!==null&&(_.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(W)},this.getCameraTexture=function(te){return v[te]};let Le=null;function Pe(te,se){if(p=se.getViewerPose(h||u),E=se,p!==null){const _e=p.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let Ie=!1;_e.length!==W.cameras.length&&(W.cameras.length=0,Ie=!0);for(let ct=0;ct<_e.length;ct++){const Dt=_e[ct];let z=null;if(y!==null)z=y.getViewport(Dt);else{const pt=x.getViewSubImage(_,Dt);z=pt.viewport,ct===0&&(e.setRenderTargetTextures(D,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(D))}let xt=B[ct];xt===void 0&&(xt=new Gi,xt.layers.enable(ct),xt.viewport=new fn,B[ct]=xt),xt.matrix.fromArray(Dt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Dt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(z.x,z.y,z.width,z.height),ct===0&&(W.matrix.copy(xt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ie===!0&&W.cameras.push(xt)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){x=i.getBinding();const ct=x.getDepthInformation(_e[0]);ct&&ct.isValid&&ct.texture&&S.init(ct,s.renderState)}if(Ue&&Ue.includes("camera-access")&&M){e.state.unbindTexture(),x=i.getBinding();for(let ct=0;ct<_e.length;ct++){const Dt=_e[ct].camera;if(Dt){let z=v[Dt];z||(z=new gg,v[Dt]=z);const xt=x.getCameraImage(Dt);z.sourceTexture=xt}}}}for(let _e=0;_e<U.length;_e++){const Ie=R[_e],Ue=U[_e];Ie!==null&&Ue!==void 0&&Ue.update(Ie,se,h||u)}Le&&Le(te,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),E=null}const Oe=new yg;Oe.setAnimationLoop(Pe),this.setAnimationLoop=function(te){Le=te},this.dispose=function(){}}}const Zs=new Sr,bw=new ln;function Aw(a,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function i(S,v){v.color.getRGB(S.fogColor.value,dg(a)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function s(S,v,L,C,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?o(S,v):v.isMeshToonMaterial?(o(S,v),x(S,v)):v.isMeshPhongMaterial?(o(S,v),p(S,v)):v.isMeshStandardMaterial?(o(S,v),_(S,v),v.isMeshPhysicalMaterial&&y(S,v,D)):v.isMeshMatcapMaterial?(o(S,v),E(S,v)):v.isMeshDepthMaterial?o(S,v):v.isMeshDistanceMaterial?(o(S,v),M(S,v)):v.isMeshNormalMaterial?o(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&c(S,v)):v.isPointsMaterial?d(S,v,L,C):v.isSpriteMaterial?h(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===hi&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===hi&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),C=L.envMap,D=L.envMapRotation;C&&(S.envMap.value=C,Zs.copy(D),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),S.envMapRotation.value.setFromMatrix4(bw.makeRotationFromEuler(Zs)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function c(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function d(S,v,L,C){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=C*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function _(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===hi&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function M(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Cw(a,e,t,i){let s={},o={},u=[];const c=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,C){const D=C.program;i.uniformBlockBinding(L,D)}function h(L,C){let D=s[L.id];D===void 0&&(E(L),D=p(L),s[L.id]=D,L.addEventListener("dispose",S));const U=C.program;i.updateUBOMapping(L,U);const R=e.render.frame;o[L.id]!==R&&(_(L),o[L.id]=R)}function p(L){const C=x();L.__bindingPointIndex=C;const D=a.createBuffer(),U=L.__size,R=L.usage;return a.bindBuffer(a.UNIFORM_BUFFER,D),a.bufferData(a.UNIFORM_BUFFER,U,R),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,D),D}function x(){for(let L=0;L<c;L++)if(u.indexOf(L)===-1)return u.push(L),L;return cn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const C=s[L.id],D=L.uniforms,U=L.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let R=0,I=D.length;R<I;R++){const k=Array.isArray(D[R])?D[R]:[D[R]];for(let w=0,A=k.length;w<A;w++){const B=k[w];if(y(B,R,w,U)===!0){const W=B.__offset,Y=Array.isArray(B.value)?B.value:[B.value];let oe=0;for(let ie=0;ie<Y.length;ie++){const re=Y[ie],fe=M(re);typeof re=="number"||typeof re=="boolean"?(B.__data[0]=re,a.bufferSubData(a.UNIFORM_BUFFER,W+oe,B.__data)):re.isMatrix3?(B.__data[0]=re.elements[0],B.__data[1]=re.elements[1],B.__data[2]=re.elements[2],B.__data[3]=0,B.__data[4]=re.elements[3],B.__data[5]=re.elements[4],B.__data[6]=re.elements[5],B.__data[7]=0,B.__data[8]=re.elements[6],B.__data[9]=re.elements[7],B.__data[10]=re.elements[8],B.__data[11]=0):(re.toArray(B.__data,oe),oe+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,W,B.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(L,C,D,U){const R=L.value,I=C+"_"+D;if(U[I]===void 0)return typeof R=="number"||typeof R=="boolean"?U[I]=R:U[I]=R.clone(),!0;{const k=U[I];if(typeof R=="number"||typeof R=="boolean"){if(k!==R)return U[I]=R,!0}else if(k.equals(R)===!1)return k.copy(R),!0}return!1}function E(L){const C=L.uniforms;let D=0;const U=16;for(let I=0,k=C.length;I<k;I++){const w=Array.isArray(C[I])?C[I]:[C[I]];for(let A=0,B=w.length;A<B;A++){const W=w[A],Y=Array.isArray(W.value)?W.value:[W.value];for(let oe=0,ie=Y.length;oe<ie;oe++){const re=Y[oe],fe=M(re),H=D%U,de=H%fe.boundary,$=H+de;D+=de,$!==0&&U-$<fe.storage&&(D+=U-$),W.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=D,D+=fe.storage}}}const R=D%U;return R>0&&(D+=U-R),L.__size=D,L.__cache={},this}function M(L){const C={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(C.boundary=4,C.storage=4):L.isVector2?(C.boundary=8,C.storage=8):L.isVector3||L.isColor?(C.boundary=16,C.storage=12):L.isVector4?(C.boundary=16,C.storage=16):L.isMatrix3?(C.boundary=48,C.storage=48):L.isMatrix4?(C.boundary=64,C.storage=64):L.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):vt("WebGLRenderer: Unsupported uniform value type.",L),C}function S(L){const C=L.target;C.removeEventListener("dispose",S);const D=u.indexOf(C.__bindingPointIndex);u.splice(D,1),a.deleteBuffer(s[C.id]),delete s[C.id],delete o[C.id]}function v(){for(const L in s)a.deleteBuffer(s[L]);u=[],s={},o={}}return{bind:d,update:h,dispose:v}}const Rw=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Or=null;function Pw(){return Or===null&&(Or=new D1(Rw,32,32,Ap,vr),Or.minFilter=Wi,Or.magFilter=Wi,Or.wrapS=Gr,Or.wrapT=Gr,Or.generateMipmaps=!1,Or.needsUpdate=!0),Or}class Dw{constructor(e={}){const{canvas:t=n1(),context:i=null,depth:s=!0,stencil:o=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=u;const E=new Set([Rp,Cp,bp]),M=new Set([yr,da,Sl,Ml,Tp,wp]),S=new Uint32Array(4),v=new Int32Array(4);let L=null,C=null;const D=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1;this._outputColorSpace=Vi;let k=0,w=0,A=null,B=-1,W=null;const Y=new fn,oe=new fn;let ie=null;const re=new it(0);let fe=0,H=t.width,de=t.height,$=1,O=null,J=null;const Le=new fn(0,0,H,de),Pe=new fn(0,0,H,de);let Oe=!1;const te=new Up;let se=!1,_e=!1;const Ie=new ln,Ue=new ae,ut=new fn,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Dt(){return A===null?$:1}let z=i;function xt(P,q){return t.getContext(P,q)}try{const P={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mp}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",pe,!1),z===null){const q="webgl2";if(z=xt(q,P),z===null)throw xt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw P("WebGLRenderer: "+P.message),P}let pt,Mt,Ge,Pt,ke,et,N,b,K,he,xe,ce,We,Ae,ze,Be,me,Me,Ke,Xe,Re,Qe,V,be;function Ee(){pt=new zE(z),pt.init(),Qe=new Sw(z,pt),Mt=new PE(z,pt,e,Qe),Ge=new vw(z,pt),Mt.reversedDepthBuffer&&_&&Ge.buffers.depth.setReversed(!0),Pt=new GE(z),ke=new aw,et=new yw(z,pt,Ge,ke,Mt,Qe,Pt),N=new LE(R),b=new kE(R),K=new Y1(z),V=new CE(z,K),he=new BE(z,K,Pt,V),xe=new WE(z,he,K,Pt),Ke=new HE(z,Mt,et),Be=new DE(ke),ce=new sw(R,N,b,pt,Mt,V,Be),We=new Aw(R,ke),Ae=new lw,ze=new pw(pt),Me=new AE(R,N,b,Ge,xe,y,d),me=new _w(R,xe,Mt),be=new Cw(z,Pt,Mt,Ge),Xe=new RE(z,pt,Pt),Re=new VE(z,pt,Pt),Pt.programs=ce.programs,R.capabilities=Mt,R.extensions=pt,R.properties=ke,R.renderLists=Ae,R.shadowMap=me,R.state=Ge,R.info=Pt}Ee();const Te=new ww(R,z);this.xr=Te,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=pt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=pt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(P){P!==void 0&&($=P,this.setSize(H,de,!1))},this.getSize=function(P){return P.set(H,de)},this.setSize=function(P,q,Q=!0){if(Te.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}H=P,de=q,t.width=Math.floor(P*$),t.height=Math.floor(q*$),Q===!0&&(t.style.width=P+"px",t.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(H*$,de*$).floor()},this.setDrawingBufferSize=function(P,q,Q){H=P,de=q,$=Q,t.width=Math.floor(P*Q),t.height=Math.floor(q*Q),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(Y)},this.getViewport=function(P){return P.copy(Le)},this.setViewport=function(P,q,Q,ue){P.isVector4?Le.set(P.x,P.y,P.z,P.w):Le.set(P,q,Q,ue),Ge.viewport(Y.copy(Le).multiplyScalar($).round())},this.getScissor=function(P){return P.copy(Pe)},this.setScissor=function(P,q,Q,ue){P.isVector4?Pe.set(P.x,P.y,P.z,P.w):Pe.set(P,q,Q,ue),Ge.scissor(oe.copy(Pe).multiplyScalar($).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(P){Ge.setScissorTest(Oe=P)},this.setOpaqueSort=function(P){O=P},this.setTransparentSort=function(P){J=P},this.getClearColor=function(P){return P.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(P=!0,q=!0,Q=!0){let ue=0;if(P){let j=!1;if(A!==null){const Ce=A.texture.format;j=E.has(Ce)}if(j){const Ce=A.texture.type,Ne=M.has(Ce),je=Me.getClearColor(),He=Me.getClearAlpha(),st=je.r,Je=je.g,rt=je.b;Ne?(S[0]=st,S[1]=Je,S[2]=rt,S[3]=He,z.clearBufferuiv(z.COLOR,0,S)):(v[0]=st,v[1]=Je,v[2]=rt,v[3]=He,z.clearBufferiv(z.COLOR,0,v))}else ue|=z.COLOR_BUFFER_BIT}q&&(ue|=z.DEPTH_BUFFER_BIT),Q&&(ue|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Me.dispose(),Ae.dispose(),ze.dispose(),ke.dispose(),N.dispose(),b.dispose(),xe.dispose(),V.dispose(),be.dispose(),ce.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",si),Te.removeEventListener("sessionend",qr),tt.stop()};function ge(P){P.preventDefault(),wc("WebGLRenderer: Context Lost."),I=!0}function ne(){wc("WebGLRenderer: Context Restored."),I=!1;const P=Pt.autoReset,q=me.enabled,Q=me.autoUpdate,ue=me.needsUpdate,j=me.type;Ee(),Pt.autoReset=P,me.enabled=q,me.autoUpdate=Q,me.needsUpdate=ue,me.type=j}function pe(P){cn("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function De(P){const q=P.target;q.removeEventListener("dispose",De),Et(q)}function Et(P){_t(P),ke.remove(P)}function _t(P){const q=ke.get(P).programs;q!==void 0&&(q.forEach(function(Q){ce.releaseProgram(Q)}),P.isShaderMaterial&&ce.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,Q,ue,j,Ce){q===null&&(q=Vt);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,je=qt(P,q,Q,ue,j);Ge.setMaterial(ue,Ne);let He=Q.index,st=1;if(ue.wireframe===!0){if(He=he.getWireframeAttribute(Q),He===void 0)return;st=2}const Je=Q.drawRange,rt=Q.attributes.position;let ft=Je.start*st,Ot=(Je.start+Je.count)*st;Ce!==null&&(ft=Math.max(ft,Ce.start*st),Ot=Math.min(Ot,(Ce.start+Ce.count)*st)),He!==null?(ft=Math.max(ft,0),Ot=Math.min(Ot,He.count)):rt!=null&&(ft=Math.max(ft,0),Ot=Math.min(Ot,rt.count));const Qt=Ot-ft;if(Qt<0||Qt===1/0)return;V.setup(j,ue,je,Q,He);let Jt,Ut=Xe;if(He!==null&&(Jt=K.get(He),Ut=Re,Ut.setIndex(Jt)),j.isMesh)ue.wireframe===!0?(Ge.setLineWidth(ue.wireframeLinewidth*Dt()),Ut.setMode(z.LINES)):Ut.setMode(z.TRIANGLES);else if(j.isLine){let nt=ue.linewidth;nt===void 0&&(nt=1),Ge.setLineWidth(nt*Dt()),j.isLineSegments?Ut.setMode(z.LINES):j.isLineLoop?Ut.setMode(z.LINE_LOOP):Ut.setMode(z.LINE_STRIP)}else j.isPoints?Ut.setMode(z.POINTS):j.isSprite&&Ut.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)wl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nt=j._multiDrawStarts,kt=j._multiDrawCounts,bt=j._multiDrawCount,Qn=He?K.get(He).bytesPerElement:1,jr=ke.get(ue).currentProgram.getUniforms();for(let Nn=0;Nn<bt;Nn++)jr.setValue(z,"_gl_DrawID",Nn),Ut.render(nt[Nn]/Qn,kt[Nn])}else if(j.isInstancedMesh)Ut.renderInstances(ft,Qt,j.count);else if(Q.isInstancedBufferGeometry){const nt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,kt=Math.min(Q.instanceCount,nt);Ut.renderInstances(ft,Qt,kt)}else Ut.render(ft,Qt)};function nn(P,q,Q){P.transparent===!0&&P.side===Vr&&P.forceSinglePass===!1?(P.side=hi,P.needsUpdate=!0,In(P,q,Q),P.side=Ps,P.needsUpdate=!0,In(P,q,Q),P.side=Vr):In(P,q,Q)}this.compile=function(P,q,Q=null){Q===null&&(Q=P),C=ze.get(Q),C.init(q),U.push(C),Q.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(C.pushLight(j),j.castShadow&&C.pushShadow(j))}),P!==Q&&P.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(C.pushLight(j),j.castShadow&&C.pushShadow(j))}),C.setupLights();const ue=new Set;return P.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ce=j.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){const je=Ce[Ne];nn(je,Q,j),ue.add(je)}else nn(Ce,Q,j),ue.add(Ce)}),C=U.pop(),ue},this.compileAsync=function(P,q,Q=null){const ue=this.compile(P,q,Q);return new Promise(j=>{function Ce(){if(ue.forEach(function(Ne){ke.get(Ne).currentProgram.isReady()&&ue.delete(Ne)}),ue.size===0){j(P);return}setTimeout(Ce,10)}pt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Kt=null;function Li(P){Kt&&Kt(P)}function si(){tt.stop()}function qr(){tt.start()}const tt=new yg;tt.setAnimationLoop(Li),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(P){Kt=P,Te.setAnimationLoop(P),P===null?tt.stop():tt.start()},Te.addEventListener("sessionstart",si),Te.addEventListener("sessionend",qr),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){cn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(q),q=Te.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,q,A),C=ze.get(P,U.length),C.init(q),U.push(C),Ie.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),te.setFromProjectionMatrix(Ie,xr,q.reversedDepth),_e=this.localClippingEnabled,se=Be.init(this.clippingPlanes,_e),L=Ae.get(P,D.length),L.init(),D.push(L),Te.enabled===!0&&Te.isPresenting===!0){const Ce=R.xr.getDepthSensingMesh();Ce!==null&&ht(Ce,q,-1/0,R.sortObjects)}ht(P,q,0,R.sortObjects),L.finish(),R.sortObjects===!0&&L.sort(O,J),ct=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,ct&&Me.addToRenderList(L,P),this.info.render.frame++,se===!0&&Be.beginShadows();const Q=C.state.shadowsArray;me.render(Q,P,q),se===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=L.opaque,j=L.transmissive;if(C.setupLights(),q.isArrayCamera){const Ce=q.cameras;if(j.length>0)for(let Ne=0,je=Ce.length;Ne<je;Ne++){const He=Ce[Ne];Gt(ue,j,P,He)}ct&&Me.render(P);for(let Ne=0,je=Ce.length;Ne<je;Ne++){const He=Ce[Ne];Ft(L,P,He,He.viewport)}}else j.length>0&&Gt(ue,j,P,q),ct&&Me.render(P),Ft(L,P,q);A!==null&&w===0&&(et.updateMultisampleRenderTarget(A),et.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(R,P,q),V.resetDefaultState(),B=-1,W=null,U.pop(),U.length>0?(C=U[U.length-1],se===!0&&Be.setGlobalState(R.clippingPlanes,C.state.camera)):C=null,D.pop(),D.length>0?L=D[D.length-1]:L=null};function ht(P,q,Q,ue){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)C.pushLight(P),P.castShadow&&C.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||te.intersectsSprite(P)){ue&&ut.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ie);const Ne=xe.update(P),je=P.material;je.visible&&L.push(P,Ne,je,Q,ut.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||te.intersectsObject(P))){const Ne=xe.update(P),je=P.material;if(ue&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ut.copy(P.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ut.copy(Ne.boundingSphere.center)),ut.applyMatrix4(P.matrixWorld).applyMatrix4(Ie)),Array.isArray(je)){const He=Ne.groups;for(let st=0,Je=He.length;st<Je;st++){const rt=He[st],ft=je[rt.materialIndex];ft&&ft.visible&&L.push(P,Ne,ft,Q,ut.z,rt)}}else je.visible&&L.push(P,Ne,je,Q,ut.z,null)}}const Ce=P.children;for(let Ne=0,je=Ce.length;Ne<je;Ne++)ht(Ce[Ne],q,Q,ue)}function Ft(P,q,Q,ue){const{opaque:j,transmissive:Ce,transparent:Ne}=P;C.setupLightsView(Q),se===!0&&Be.setGlobalState(R.clippingPlanes,Q),ue&&Ge.viewport(Y.copy(ue)),j.length>0&&$n(j,q,Q),Ce.length>0&&$n(Ce,q,Q),Ne.length>0&&$n(Ne,q,Q),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Gt(P,q,Q,ue){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;C.state.transmissionRenderTarget[ue.id]===void 0&&(C.state.transmissionRenderTarget[ue.id]=new ar(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?vr:yr,minFilter:aa,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const Ce=C.state.transmissionRenderTarget[ue.id],Ne=ue.viewport||Y;Ce.setSize(Ne.z*R.transmissionResolutionScale,Ne.w*R.transmissionResolutionScale);const je=R.getRenderTarget(),He=R.getActiveCubeFace(),st=R.getActiveMipmapLevel();R.setRenderTarget(Ce),R.getClearColor(re),fe=R.getClearAlpha(),fe<1&&R.setClearColor(16777215,.5),R.clear(),ct&&Me.render(Q);const Je=R.toneMapping;R.toneMapping=bs;const rt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),C.setupLightsView(ue),se===!0&&Be.setGlobalState(R.clippingPlanes,ue),$n(P,Q,ue),et.updateMultisampleRenderTarget(Ce),et.updateRenderTargetMipmap(Ce),pt.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Ot=0,Qt=q.length;Ot<Qt;Ot++){const Jt=q[Ot],{object:Ut,geometry:nt,material:kt,group:bt}=Jt;if(kt.side===Vr&&Ut.layers.test(ue.layers)){const Qn=kt.side;kt.side=hi,kt.needsUpdate=!0,Kn(Ut,Q,ue,nt,kt,bt),kt.side=Qn,kt.needsUpdate=!0,ft=!0}}ft===!0&&(et.updateMultisampleRenderTarget(Ce),et.updateRenderTargetMipmap(Ce))}R.setRenderTarget(je,He,st),R.setClearColor(re,fe),rt!==void 0&&(ue.viewport=rt),R.toneMapping=Je}function $n(P,q,Q){const ue=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Ce=P.length;j<Ce;j++){const Ne=P[j],{object:je,geometry:He,group:st}=Ne;let Je=Ne.material;Je.allowOverride===!0&&ue!==null&&(Je=ue),je.layers.test(Q.layers)&&Kn(je,q,Q,He,Je,st)}}function Kn(P,q,Q,ue,j,Ce){P.onBeforeRender(R,q,Q,ue,j,Ce),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),j.onBeforeRender(R,q,Q,ue,P,Ce),j.transparent===!0&&j.side===Vr&&j.forceSinglePass===!1?(j.side=hi,j.needsUpdate=!0,R.renderBufferDirect(Q,q,ue,j,P,Ce),j.side=Ps,j.needsUpdate=!0,R.renderBufferDirect(Q,q,ue,j,P,Ce),j.side=Vr):R.renderBufferDirect(Q,q,ue,j,P,Ce),P.onAfterRender(R,q,Q,ue,j,Ce)}function In(P,q,Q){q.isScene!==!0&&(q=Vt);const ue=ke.get(P),j=C.state.lights,Ce=C.state.shadowsArray,Ne=j.state.version,je=ce.getParameters(P,j.state,Ce,q,Q),He=ce.getProgramCacheKey(je);let st=ue.programs;ue.environment=P.isMeshStandardMaterial?q.environment:null,ue.fog=q.fog,ue.envMap=(P.isMeshStandardMaterial?b:N).get(P.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,st===void 0&&(P.addEventListener("dispose",De),st=new Map,ue.programs=st);let Je=st.get(He);if(Je!==void 0){if(ue.currentProgram===Je&&ue.lightsStateVersion===Ne)return Zt(P,je),Je}else je.uniforms=ce.getUniforms(P),P.onBeforeCompile(je,R),Je=ce.acquireProgram(je,He),st.set(He,Je),ue.uniforms=je.uniforms;const rt=ue.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(rt.clippingPlanes=Be.uniform),Zt(P,je),ue.needsLights=bn(P),ue.lightsStateVersion=Ne,ue.needsLights&&(rt.ambientLightColor.value=j.state.ambient,rt.lightProbe.value=j.state.probe,rt.directionalLights.value=j.state.directional,rt.directionalLightShadows.value=j.state.directionalShadow,rt.spotLights.value=j.state.spot,rt.spotLightShadows.value=j.state.spotShadow,rt.rectAreaLights.value=j.state.rectArea,rt.ltc_1.value=j.state.rectAreaLTC1,rt.ltc_2.value=j.state.rectAreaLTC2,rt.pointLights.value=j.state.point,rt.pointLightShadows.value=j.state.pointShadow,rt.hemisphereLights.value=j.state.hemi,rt.directionalShadowMap.value=j.state.directionalShadowMap,rt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,rt.spotShadowMap.value=j.state.spotShadowMap,rt.spotLightMatrix.value=j.state.spotLightMatrix,rt.spotLightMap.value=j.state.spotLightMap,rt.pointShadowMap.value=j.state.pointShadowMap,rt.pointShadowMatrix.value=j.state.pointShadowMatrix),ue.currentProgram=Je,ue.uniformsList=null,Je}function Tt(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=_c.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function Zt(P,q){const Q=ke.get(P);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function qt(P,q,Q,ue,j){q.isScene!==!0&&(q=Vt),et.resetTextureUnits();const Ce=q.fog,Ne=ue.isMeshStandardMaterial?q.environment:null,je=A===null?R.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xo,He=(ue.isMeshStandardMaterial?b:N).get(ue.envMap||Ne),st=ue.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Je=!!Q.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),rt=!!Q.morphAttributes.position,ft=!!Q.morphAttributes.normal,Ot=!!Q.morphAttributes.color;let Qt=bs;ue.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Qt=R.toneMapping);const Jt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ut=Jt!==void 0?Jt.length:0,nt=ke.get(ue),kt=C.state.lights;if(se===!0&&(_e===!0||P!==W)){const yn=P===W&&ue.id===B;Be.setState(ue,P,yn)}let bt=!1;ue.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==kt.state.version||nt.outputColorSpace!==je||j.isBatchedMesh&&nt.batching===!1||!j.isBatchedMesh&&nt.batching===!0||j.isBatchedMesh&&nt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&nt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&nt.instancing===!1||!j.isInstancedMesh&&nt.instancing===!0||j.isSkinnedMesh&&nt.skinning===!1||!j.isSkinnedMesh&&nt.skinning===!0||j.isInstancedMesh&&nt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&nt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&nt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&nt.instancingMorph===!1&&j.morphTexture!==null||nt.envMap!==He||ue.fog===!0&&nt.fog!==Ce||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Be.numPlanes||nt.numIntersection!==Be.numIntersection)||nt.vertexAlphas!==st||nt.vertexTangents!==Je||nt.morphTargets!==rt||nt.morphNormals!==ft||nt.morphColors!==Ot||nt.toneMapping!==Qt||nt.morphTargetsCount!==Ut)&&(bt=!0):(bt=!0,nt.__version=ue.version);let Qn=nt.currentProgram;bt===!0&&(Qn=In(ue,q,j));let jr=!1,Nn=!1,$r=!1;const Ht=Qn.getUniforms(),mn=nt.uniforms;if(Ge.useProgram(Qn.program)&&(jr=!0,Nn=!0,$r=!0),ue.id!==B&&(B=ue.id,Nn=!0),jr||W!==P){Ge.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ht.setValue(z,"projectionMatrix",P.projectionMatrix),Ht.setValue(z,"viewMatrix",P.matrixWorldInverse);const mt=Ht.map.cameraPosition;mt!==void 0&&mt.setValue(z,Ue.setFromMatrixPosition(P.matrixWorld)),Mt.logarithmicDepthBuffer&&Ht.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Ht.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),W!==P&&(W=P,Nn=!0,$r=!0)}if(j.isSkinnedMesh){Ht.setOptional(z,j,"bindMatrix"),Ht.setOptional(z,j,"bindMatrixInverse");const yn=j.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ht.setValue(z,"boneTexture",yn.boneTexture,et))}j.isBatchedMesh&&(Ht.setOptional(z,j,"batchingTexture"),Ht.setValue(z,"batchingTexture",j._matricesTexture,et),Ht.setOptional(z,j,"batchingIdTexture"),Ht.setValue(z,"batchingIdTexture",j._indirectTexture,et),Ht.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&Ht.setValue(z,"batchingColorTexture",j._colorsTexture,et));const ai=Q.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Ke.update(j,Q,Qn),(Nn||nt.receiveShadow!==j.receiveShadow)&&(nt.receiveShadow=j.receiveShadow,Ht.setValue(z,"receiveShadow",j.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(mn.envMap.value=He,mn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&q.environment!==null&&(mn.envMapIntensity.value=q.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=Pw()),Nn&&(Ht.setValue(z,"toneMappingExposure",R.toneMappingExposure),nt.needsLights&&Zn(mn,$r),Ce&&ue.fog===!0&&We.refreshFogUniforms(mn,Ce),We.refreshMaterialUniforms(mn,ue,$,de,C.state.transmissionRenderTarget[P.id]),_c.upload(z,Tt(nt),mn,et)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(_c.upload(z,Tt(nt),mn,et),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Ht.setValue(z,"center",j.center),Ht.setValue(z,"modelViewMatrix",j.modelViewMatrix),Ht.setValue(z,"normalMatrix",j.normalMatrix),Ht.setValue(z,"modelMatrix",j.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const yn=ue.uniformsGroups;for(let mt=0,xa=yn.length;mt<xa;mt++){const or=yn[mt];be.update(or,Qn),be.bind(or,Qn)}}return Qn}function Zn(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function bn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,q,Q){const ue=ke.get(P);ue.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),ke.get(P.texture).__webglTexture=q,ke.get(P.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:Q,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,q){const Q=ke.get(P);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0};const An=z.createFramebuffer();this.setRenderTarget=function(P,q=0,Q=0){A=P,k=q,w=Q;let ue=!0,j=null,Ce=!1,Ne=!1;if(P){const He=ke.get(P);if(He.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(z.FRAMEBUFFER,null),ue=!1;else if(He.__webglFramebuffer===void 0)et.setupRenderTarget(P);else if(He.__hasExternalTextures)et.rebindTextures(P,ke.get(P.texture).__webglTexture,ke.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const rt=P.depthTexture;if(He.__boundDepthTexture!==rt){if(rt!==null&&ke.has(rt)&&(P.width!==rt.image.width||P.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(P)}}const st=P.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ne=!0);const Je=ke.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?j=Je[q][Q]:j=Je[q],Ce=!0):P.samples>0&&et.useMultisampledRTT(P)===!1?j=ke.get(P).__webglMultisampledFramebuffer:Array.isArray(Je)?j=Je[Q]:j=Je,Y.copy(P.viewport),oe.copy(P.scissor),ie=P.scissorTest}else Y.copy(Le).multiplyScalar($).floor(),oe.copy(Pe).multiplyScalar($).floor(),ie=Oe;if(Q!==0&&(j=An),Ge.bindFramebuffer(z.FRAMEBUFFER,j)&&ue&&Ge.drawBuffers(P,j),Ge.viewport(Y),Ge.scissor(oe),Ge.setScissorTest(ie),Ce){const He=ke.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,He.__webglTexture,Q)}else if(Ne){const He=q;for(let st=0;st<P.textures.length;st++){const Je=ke.get(P.textures[st]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+st,Je.__webglTexture,Q,He)}}else if(P!==null&&Q!==0){const He=ke.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,He.__webglTexture,Q)}B=-1},this.readRenderTargetPixels=function(P,q,Q,ue,j,Ce,Ne,je=0){if(!(P&&P.isWebGLRenderTarget)){cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=ke.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He){Ge.bindFramebuffer(z.FRAMEBUFFER,He);try{const st=P.textures[je],Je=st.format,rt=st.type;if(!Mt.textureFormatReadable(Je)){cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(rt)){cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-ue&&Q>=0&&Q<=P.height-j&&(P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+je),z.readPixels(q,Q,ue,j,Qe.convert(Je),Qe.convert(rt),Ce))}finally{const st=A!==null?ke.get(A).__webglFramebuffer:null;Ge.bindFramebuffer(z.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(P,q,Q,ue,j,Ce,Ne,je=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=ke.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He)if(q>=0&&q<=P.width-ue&&Q>=0&&Q<=P.height-j){Ge.bindFramebuffer(z.FRAMEBUFFER,He);const st=P.textures[je],Je=st.format,rt=st.type;if(!Mt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ft),z.bufferData(z.PIXEL_PACK_BUFFER,Ce.byteLength,z.STREAM_READ),P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+je),z.readPixels(q,Q,ue,j,Qe.convert(Je),Qe.convert(rt),0);const Ot=A!==null?ke.get(A).__webglFramebuffer:null;Ge.bindFramebuffer(z.FRAMEBUFFER,Ot);const Qt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await i1(z,Qt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ft),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ce),z.deleteBuffer(ft),z.deleteSync(Qt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,q=null,Q=0){const ue=Math.pow(2,-Q),j=Math.floor(P.image.width*ue),Ce=Math.floor(P.image.height*ue),Ne=q!==null?q.x:0,je=q!==null?q.y:0;et.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,Ne,je,j,Ce),Ge.unbindTexture()};const kl=z.createFramebuffer(),zl=z.createFramebuffer();this.copyTextureToTexture=function(P,q,Q=null,ue=null,j=0,Ce=null){Ce===null&&(j!==0?(wl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=j,j=0):Ce=0);let Ne,je,He,st,Je,rt,ft,Ot,Qt;const Jt=P.isCompressedTexture?P.mipmaps[Ce]:P.image;if(Q!==null)Ne=Q.max.x-Q.min.x,je=Q.max.y-Q.min.y,He=Q.isBox3?Q.max.z-Q.min.z:1,st=Q.min.x,Je=Q.min.y,rt=Q.isBox3?Q.min.z:0;else{const ai=Math.pow(2,-j);Ne=Math.floor(Jt.width*ai),je=Math.floor(Jt.height*ai),P.isDataArrayTexture?He=Jt.depth:P.isData3DTexture?He=Math.floor(Jt.depth*ai):He=1,st=0,Je=0,rt=0}ue!==null?(ft=ue.x,Ot=ue.y,Qt=ue.z):(ft=0,Ot=0,Qt=0);const Ut=Qe.convert(q.format),nt=Qe.convert(q.type);let kt;q.isData3DTexture?(et.setTexture3D(q,0),kt=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(et.setTexture2DArray(q,0),kt=z.TEXTURE_2D_ARRAY):(et.setTexture2D(q,0),kt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const bt=z.getParameter(z.UNPACK_ROW_LENGTH),Qn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),jr=z.getParameter(z.UNPACK_SKIP_PIXELS),Nn=z.getParameter(z.UNPACK_SKIP_ROWS),$r=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Jt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Jt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,st),z.pixelStorei(z.UNPACK_SKIP_ROWS,Je),z.pixelStorei(z.UNPACK_SKIP_IMAGES,rt);const Ht=P.isDataArrayTexture||P.isData3DTexture,mn=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){const ai=ke.get(P),yn=ke.get(q),mt=ke.get(ai.__renderTarget),xa=ke.get(yn.__renderTarget);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,mt.__webglFramebuffer),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,xa.__webglFramebuffer);for(let or=0;or<He;or++)Ht&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(P).__webglTexture,j,rt+or),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(q).__webglTexture,Ce,Qt+or)),z.blitFramebuffer(st,Je,Ne,je,ft,Ot,Ne,je,z.DEPTH_BUFFER_BIT,z.NEAREST);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||P.isRenderTargetTexture||ke.has(P)){const ai=ke.get(P),yn=ke.get(q);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,kl),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,zl);for(let mt=0;mt<He;mt++)Ht?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ai.__webglTexture,j,rt+mt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ai.__webglTexture,j),mn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,yn.__webglTexture,Ce,Qt+mt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,yn.__webglTexture,Ce),j!==0?z.blitFramebuffer(st,Je,Ne,je,ft,Ot,Ne,je,z.COLOR_BUFFER_BIT,z.NEAREST):mn?z.copyTexSubImage3D(kt,Ce,ft,Ot,Qt+mt,st,Je,Ne,je):z.copyTexSubImage2D(kt,Ce,ft,Ot,st,Je,Ne,je);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else mn?P.isDataTexture||P.isData3DTexture?z.texSubImage3D(kt,Ce,ft,Ot,Qt,Ne,je,He,Ut,nt,Jt.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(kt,Ce,ft,Ot,Qt,Ne,je,He,Ut,Jt.data):z.texSubImage3D(kt,Ce,ft,Ot,Qt,Ne,je,He,Ut,nt,Jt):P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ce,ft,Ot,Ne,je,Ut,nt,Jt.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ce,ft,Ot,Jt.width,Jt.height,Ut,Jt.data):z.texSubImage2D(z.TEXTURE_2D,Ce,ft,Ot,Ne,je,Ut,nt,Jt);z.pixelStorei(z.UNPACK_ROW_LENGTH,bt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Qn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,jr),z.pixelStorei(z.UNPACK_SKIP_ROWS,Nn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$r),Ce===0&&q.generateMipmaps&&z.generateMipmap(kt),Ge.unbindTexture()},this.initRenderTarget=function(P){ke.get(P).__webglFramebuffer===void 0&&et.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?et.setTextureCube(P,0):P.isData3DTexture?et.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?et.setTexture2DArray(P,0):et.setTexture2D(P,0),Ge.unbindTexture()},this.resetState=function(){k=0,w=0,A=null,Ge.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}const gc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Lw=new Np(-1,1,1,-1,0,1);class Uw extends ri{constructor(){super(),this.setAttribute("position",new ji([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ji([0,2,0,0,2,0],2))}}const Iw=new Uw;class wg{constructor(e){this._mesh=new Mr(Iw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Lw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Nw extends Fl{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Yn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bc.clone(e.uniforms),this.material=new Yn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new wg(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class A_ extends Fl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let u,c;this.inverse?(u=0,c=1):(u=1,c=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,u,4294967295),o.buffers.stencil.setClear(c),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Fw extends Fl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ow{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new lt);this._width=i.width,this._height=i.height,t=new ar(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nw(gc),this.copyPass.material.blending=gr,this.clock=new W1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const u=this.passes[s];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),u.needsSwap){if(i){const c=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}A_!==void 0&&(u instanceof A_?i=!0:u instanceof Fw&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kw extends Fl{constructor(e,t,i=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new it}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let o,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=s}}const zw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new it(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class go extends Fl{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new lt(e.x,e.y):new lt(256,256),this.clearColor=new it(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new ar(o,u,{type:vr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const x=new ar(o,u,{type:vr});x.texture.name="UnrealBloomPass.h"+p,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const _=new ar(o,u,{type:vr});_.texture.name="UnrealBloomPass.v"+p,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),o=Math.round(o/2),u=Math.round(u/2)}const c=zw;this.highPassUniforms=bc.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Yn({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}),this.separableBlurMaterials=[];const d=[6,10,14,18,22];o=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new lt(1/o,1/u),o=Math.round(o/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new ae(1,1,1),new ae(1,1,1),new ae(1,1,1),new ae(1,1,1),new ae(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=bc.clone(gc.uniforms),this.blendMaterial=new Yn({uniforms:this.copyUniforms,vertexShader:gc.vertexShader,fragmentShader:gc.fragmentShader,blending:sa,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new it,this._oldClearAlpha=1,this._basic=new Dp,this._fsQuad=new wg(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new lt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let c=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=c.texture,this.separableBlurMaterials[d].uniforms.direction.value=go.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=go.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this._fsQuad.render(e),c=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Yn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;
					}
					gl_FragColor = vec4( diffuseSum, 1.0 );
				}`})}_getCompositeMaterial(e){return new Yn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}go.BlurDirectionX=new lt(1,0);go.BlurDirectionY=new lt(0,1);function zr(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function bg(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vo={duration:.5,overwrite:!1,delay:0},Fp,kn,tn,Xi=1e8,Xt=1/Xi,ap=Math.PI*2,Bw=ap/4,Vw=0,Ag=Math.sqrt,Gw=Math.cos,Hw=Math.sin,Un=function(e){return typeof e=="string"},dn=function(e){return typeof e=="function"},Xr=function(e){return typeof e=="number"},Op=function(e){return typeof e>"u"},Er=function(e){return typeof e=="object"},pi=function(e){return e!==!1},kp=function(){return typeof window<"u"},dc=function(e){return dn(e)||Un(e)},Cg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jn=Array.isArray,op=/(?:-?\.?\d|\.)+/gi,Rg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,so=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,sh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pg=/[+-]=-?[.\d]+/,Dg=/[^,'"\[\]\s]+/gi,Ww=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,an,dr,lp,zp,Pi={},Cc={},Lg,Ug=function(e){return(Cc=yo(e,Pi))&&gi},Bp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},bl=function(e,t){return!t&&console.warn(e)},Ig=function(e,t){return e&&(Pi[e]=t)&&Cc&&(Cc[e]=t)||Pi},Al=function(){return 0},Xw={suppressEvents:!0,isStart:!0,kill:!1},vc={suppressEvents:!0,kill:!1},Yw={suppressEvents:!0},Vp={},Cs=[],up={},Ng,wi={},ah={},C_=30,yc=[],Gp="",Hp=function(e){var t=e[0],i,s;if(Er(t)||dn(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=yc.length;s--&&!yc[s].targetTest(t););i=yc[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new sv(e[s],i)))||e.splice(s,1);return e},la=function(e){return e._gsap||Hp(Yi(e))[0]._gsap},Fg=function(e,t,i){return(i=e[t])&&dn(i)?e[t]():Op(i)&&e.getAttribute&&e.getAttribute(t)||i},mi=function(e,t){return(e=e.split(",")).forEach(t)||e},pn=function(e){return Math.round(e*1e5)/1e5||0},vn=function(e){return Math.round(e*1e7)/1e7||0},uo=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},qw=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},Rc=function(){var e=Cs.length,t=Cs.slice(0),i,s;for(up={},Cs.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Wp=function(e){return!!(e._initted||e._startAt||e.add)},Og=function(e,t,i,s){Cs.length&&!kn&&Rc(),e.render(t,i,!!(kn&&t<0&&Wp(e))),Cs.length&&!kn&&Rc()},kg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Dg).length<2?t:Un(e)?e.trim():e},zg=function(e){return e},Di=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},jw=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},yo=function(e,t){for(var i in t)e[i]=t[i];return e},R_=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Er(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},Pc=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},gl=function(e){var t=e.parent||an,i=e.keyframes?jw(jn(e.keyframes)):Di;if(pi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},$w=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},Bg=function(e,t,i,s,o){var u=e[s],c;if(o)for(c=t[o];u&&u[o]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=u,t.parent=t._dp=e,t},Bc=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var o=t._prev,u=t._next;o?o._next=u:e[i]===t&&(e[i]=u),u?u._prev=o:e[s]===t&&(e[s]=o),t._next=t._prev=t.parent=null},Ds=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ua=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Kw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},cp=function(e,t,i,s){return e._startAt&&(kn?e._startAt.revert(vc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},Zw=function a(e){return!e||e._ts&&a(e.parent)},P_=function(e){return e._repeat?So(e._tTime,e=e.duration()+e._rDelay)*e:0},So=function(e,t){var i=Math.floor(e=vn(e/t));return e&&i===e?i-1:i},Dc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vc=function(e){return e._end=vn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Xt)||0))},Gc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=vn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vc(e),i._dirty||ua(i,e)),e},Vg=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Dc(e.rawTime(),t),(!t._dur||Ol(0,t.totalDuration(),i)-t._tTime>Xt)&&t.render(i,!0)),ua(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Xt}},mr=function(e,t,i,s){return t.parent&&Ds(t),t._start=vn((Xr(i)?i:i||e!==an?Bi(e,i,t):e._time)+t._delay),t._end=vn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Bg(e,t,"_first","_last",e._sort?"_start":0),fp(t)||(e._recent=t),s||Vg(e,t),e._ts<0&&Gc(e,e._tTime),e},Gg=function(e,t){return(Pi.ScrollTrigger||Bp("scrollTrigger",t))&&Pi.ScrollTrigger.create(t,e)},Hg=function(e,t,i,s,o){if(Yp(e,t,o),!e._initted)return 1;if(!i&&e._pt&&!kn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ng!==bi.frame)return Cs.push(e),e._lazy=[o,s],1},Qw=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},fp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Jw=function(e,t,i,s){var o=e.ratio,u=t<0||!t&&(!e._start&&Qw(e)&&!(!e._initted&&fp(e))||(e._ts<0||e._dp._ts<0)&&!fp(e))?0:1,c=e._rDelay,d=0,h,p,x;if(c&&e._repeat&&(d=Ol(0,e._tDur,t),p=So(d,c),e._yoyo&&p&1&&(u=1-u),p!==So(e._tTime,c)&&(o=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==o||kn||s||e._zTime===Xt||!t&&e._zTime){if(!e._initted&&Hg(e,t,s,i,d))return;for(x=e._zTime,e._zTime=t||(i?Xt:0),i||(i=t&&!x),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&cp(e,t,i,!0),e._onUpdate&&!i&&Ai(e,"onUpdate"),d&&e._repeat&&!i&&e.parent&&Ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&Ds(e,1),!i&&!kn&&(Ai(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},e2=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Mo=function(e,t,i,s){var o=e._repeat,u=vn(t)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=o?o<0?1e10:vn(u*(o+1)+e._rDelay*o):u,c>0&&!s&&Gc(e,e._tTime=e._tDur*c),e.parent&&Vc(e),i||ua(e.parent,e),e},D_=function(e){return e instanceof ii?ua(e):Mo(e,e._dur)},t2={_start:0,endTime:Al,totalDuration:Al},Bi=function a(e,t,i){var s=e.labels,o=e._recent||t2,u=e.duration()>=Xi?o.endTime(!1):e._dur,c,d,h;return Un(t)&&(isNaN(t)||t in s)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?o:i).totalDuration()/100:1)):c<0?(t in s||(s[t]=u),s[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&i&&(d=d/100*(jn(i)?i[0]:i).totalDuration()),c>1?a(e,t.substr(0,c-1),i)+d:u+d)):t==null?u:+t},vl=function(e,t,i){var s=Xr(t[1]),o=(s?2:1)+(e<2?0:1),u=t[o],c,d;if(s&&(u.duration=t[1]),u.parent=i,e){for(c=u,d=i;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=pi(d.vars.inherit)&&d.parent;u.immediateRender=pi(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[o-1]}return new gn(t[0],u,t[o+1])},Us=function(e,t){return e||e===0?t(e):t},Ol=function(e,t,i){return i<e?e:i>t?t:i},Xn=function(e,t){return!Un(e)||!(t=Ww.exec(e))?"":t[1]},n2=function(e,t,i){return Us(i,function(s){return Ol(e,t,s)})},dp=[].slice,Wg=function(e,t){return e&&Er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Er(e[0]))&&!e.nodeType&&e!==dr},i2=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var o;return Un(s)&&!t||Wg(s,1)?(o=i).push.apply(o,Yi(s)):i.push(s)})||i},Yi=function(e,t,i){return tn&&!t&&tn.selector?tn.selector(e):Un(e)&&!i&&(lp||!Eo())?dp.call((t||zp).querySelectorAll(e),0):jn(e)?i2(e,i):Wg(e)?dp.call(e,0):e?[e]:[]},hp=function(e){return e=Yi(e)[0]||bl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Yi(t,i.querySelectorAll?i:i===e?bl("Invalid scope")||zp.createElement("div"):e)}},Xg=function(e){return e.sort(function(){return .5-Math.random()})},Yg=function(e){if(dn(e))return e;var t=Er(e)?e:{each:e},i=ca(t.ease),s=t.from||0,o=parseFloat(t.base)||0,u={},c=s>0&&s<1,d=isNaN(s)||c,h=t.axis,p=s,x=s;return Un(s)?p=x={center:.5,edges:.5,end:1}[s]||0:!c&&d&&(p=s[0],x=s[1]),function(_,y,E){var M=(E||t).length,S=u[M],v,L,C,D,U,R,I,k,w;if(!S){if(w=t.grid==="auto"?0:(t.grid||[1,Xi])[1],!w){for(I=-Xi;I<(I=E[w++].getBoundingClientRect().left)&&w<M;);w<M&&w--}for(S=u[M]=[],v=d?Math.min(w,M)*p-.5:s%w,L=w===Xi?0:d?M*x/w-.5:s/w|0,I=0,k=Xi,R=0;R<M;R++)C=R%w-v,D=L-(R/w|0),S[R]=U=h?Math.abs(h==="y"?D:C):Ag(C*C+D*D),U>I&&(I=U),U<k&&(k=U);s==="random"&&Xg(S),S.max=I-k,S.min=k,S.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(w>M?M-1:h?h==="y"?M/w:w:Math.max(w,M/w))||0)*(s==="edges"?-1:1),S.b=M<0?o-M:o,S.u=Xn(t.amount||t.each)||0,i=i&&M<0?nv(i):i}return M=(S[_]-S.min)/S.max||0,vn(S.b+(i?i(M):M)*S.v)+S.u}},pp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=vn(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(Xr(i)?0:Xn(i))}},qg=function(e,t){var i=jn(e),s,o;return!i&&Er(e)&&(s=i=e.radius||Xi,e.values?(e=Yi(e.values),(o=!Xr(e[0]))&&(s*=s)):e=pp(e.increment)),Us(t,i?dn(e)?function(u){return o=e(u),Math.abs(o-u)<=s?o:u}:function(u){for(var c=parseFloat(o?u.x:u),d=parseFloat(o?u.y:0),h=Xi,p=0,x=e.length,_,y;x--;)o?(_=e[x].x-c,y=e[x].y-d,_=_*_+y*y):_=Math.abs(e[x]-c),_<h&&(h=_,p=x);return p=!s||h<=s?e[p]:u,o||p===u||Xr(u)?p:p+Xn(u)}:pp(e))},jg=function(e,t,i,s){return Us(jn(e)?!t:i===!0?!!(i=0):!s,function(){return jn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},r2=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(o,u){return u(o)},s)}},s2=function(e,t){return function(i){return e(parseFloat(i))+(t||Xn(i))}},a2=function(e,t,i){return Kg(e,t,0,1,i)},$g=function(e,t,i){return Us(i,function(s){return e[~~t(s)]})},o2=function a(e,t,i){var s=t-e;return jn(e)?$g(e,a(0,e.length),t):Us(i,function(o){return(s+(o-e)%s)%s+e})},l2=function a(e,t,i){var s=t-e,o=s*2;return jn(e)?$g(e,a(0,e.length-1),t):Us(i,function(u){return u=(o+(u-e)%o)%o||0,e+(u>s?o-u:u)})},Cl=function(e){for(var t=0,i="",s,o,u,c;~(s=e.indexOf("random(",t));)u=e.indexOf(")",s),c=e.charAt(s+7)==="[",o=e.substr(s+7,u-s-7).match(c?Dg:op),i+=e.substr(t,s-t)+jg(c?o:+o[0],c?0:+o[1],+o[2]||1e-5),t=u+1;return i+e.substr(t,e.length-t)},Kg=function(e,t,i,s,o){var u=t-e,c=s-i;return Us(o,function(d){return i+((d-e)/u*c||0)})},u2=function a(e,t,i,s){var o=isNaN(e+t)?0:function(y){return(1-y)*e+y*t};if(!o){var u=Un(e),c={},d,h,p,x,_;if(i===!0&&(s=1)&&(i=null),u)e={p:e},t={p:t};else if(jn(e)&&!jn(t)){for(p=[],x=e.length,_=x-2,h=1;h<x;h++)p.push(a(e[h-1],e[h]));x--,o=function(E){E*=x;var M=Math.min(_,~~E);return p[M](E-M)},i=t}else s||(e=yo(jn(e)?[]:{},e));if(!p){for(d in t)Xp.call(c,e,d,"get",t[d]);o=function(E){return $p(E,c)||(u?e.p:e)}}}return Us(i,o)},L_=function(e,t,i){var s=e.labels,o=Xi,u,c,d;for(u in s)c=s[u]-t,c<0==!!i&&c&&o>(c=Math.abs(c))&&(d=u,o=c);return d},Ai=function(e,t,i){var s=e.vars,o=s[t],u=tn,c=e._ctx,d,h,p;if(o)return d=s[t+"Params"],h=s.callbackScope||e,i&&Cs.length&&Rc(),c&&(tn=c),p=d?o.apply(h,d):o.call(h),tn=u,p},xl=function(e){return Ds(e),e.scrollTrigger&&e.scrollTrigger.kill(!!kn),e.progress()<1&&Ai(e,"onInterrupt"),e},ao,Zg=[],Qg=function(e){if(e)if(e=!e.name&&e.default||e,kp()||e.headless){var t=e.name,i=dn(e),s=t&&!i&&e.init?function(){this._props=[]}:e,o={init:Al,render:$p,add:Xp,kill:w2,modifier:T2,rawVars:0},u={targetTest:0,get:0,getSetter:jp,aliases:{},register:0};if(Eo(),e!==s){if(wi[t])return;Di(s,Di(Pc(e,o),u)),yo(s.prototype,yo(o,Pc(e,u))),wi[s.prop=t]=s,e.targetTest&&(yc.push(s),Vp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ig(t,s),e.register&&e.register(gi,s,xi)}else Zg.push(e)},Wt=255,_l={aqua:[0,Wt,Wt],lime:[0,Wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Wt],navy:[0,0,128],white:[Wt,Wt,Wt],olive:[128,128,0],yellow:[Wt,Wt,0],orange:[Wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Wt,0,0],pink:[Wt,192,203],cyan:[0,Wt,Wt],transparent:[Wt,Wt,Wt,0]},oh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Wt+.5|0},Jg=function(e,t,i){var s=e?Xr(e)?[e>>16,e>>8&Wt,e&Wt]:0:_l.black,o,u,c,d,h,p,x,_,y,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),_l[e])s=_l[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+o+o+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Wt,s&Wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Wt,e&Wt]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(op),!t)d=+s[0]%360/360,h=+s[1]/100,p=+s[2]/100,u=p<=.5?p*(h+1):p+h-p*h,o=p*2-u,s.length>3&&(s[3]*=1),s[0]=oh(d+1/3,o,u),s[1]=oh(d,o,u),s[2]=oh(d-1/3,o,u);else if(~e.indexOf("="))return s=e.match(Rg),i&&s.length<4&&(s[3]=1),s}else s=e.match(op)||_l.transparent;s=s.map(Number)}return t&&!E&&(o=s[0]/Wt,u=s[1]/Wt,c=s[2]/Wt,x=Math.max(o,u,c),_=Math.min(o,u,c),p=(x+_)/2,x===_?d=h=0:(y=x-_,h=p>.5?y/(2-x-_):y/(x+_),d=x===o?(u-c)/y+(u<c?6:0):x===u?(c-o)/y+2:(o-u)/y+4,d*=60),s[0]=~~(d+.5),s[1]=~~(h*100+.5),s[2]=~~(p*100+.5)),i&&s.length<4&&(s[3]=1),s},ev=function(e){var t=[],i=[],s=-1;return e.split(Rs).forEach(function(o){var u=o.match(so)||[];t.push.apply(t,u),i.push(s+=u.length+1)}),t.c=i,t},U_=function(e,t,i){var s="",o=(e+s).match(Rs),u=t?"hsla(":"rgba(",c=0,d,h,p,x;if(!o)return e;if(o=o.map(function(_){return(_=Jg(_,t,1))&&u+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),i&&(p=ev(e),d=i.c,d.join(s)!==p.c.join(s)))for(h=e.replace(Rs,"1").split(so),x=h.length-1;c<x;c++)s+=h[c]+(~d.indexOf(c)?o.shift()||u+"0,0,0,0)":(p.length?p:o.length?o:i).shift());if(!h)for(h=e.split(Rs),x=h.length-1;c<x;c++)s+=h[c]+o[c];return s+h[x]},Rs=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _l)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),c2=/hsl[a]?\(/,tv=function(e){var t=e.join(" "),i;if(Rs.lastIndex=0,Rs.test(t))return i=c2.test(t),e[1]=U_(e[1],i),e[0]=U_(e[0],i,ev(e[1])),!0},Rl,bi=(function(){var a=Date.now,e=500,t=33,i=a(),s=i,o=1e3/240,u=o,c=[],d,h,p,x,_,y,E=function M(S){var v=a()-s,L=S===!0,C,D,U,R;if((v>e||v<0)&&(i+=v-t),s+=v,U=s-i,C=U-u,(C>0||L)&&(R=++x.frame,_=U-x.time*1e3,x.time=U=U/1e3,u+=C+(C>=o?4:o-C),D=1),L||(d=h(M)),D)for(y=0;y<c.length;y++)c[y](U,_,R,S)};return x={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return _/(1e3/(S||60))},wake:function(){Lg&&(!lp&&kp()&&(dr=lp=window,zp=dr.document||{},Pi.gsap=gi,(dr.gsapVersions||(dr.gsapVersions=[])).push(gi.version),Ug(Cc||dr.GreenSockGlobals||!dr.gsap&&dr||{}),Zg.forEach(Qg)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&x.sleep(),h=p||function(S){return setTimeout(S,u-x.time*1e3+1|0)},Rl=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),Rl=0,h=Al},lagSmoothing:function(S,v){e=S||1/0,t=Math.min(v||33,e)},fps:function(S){o=1e3/(S||240),u=x.time*1e3+o},add:function(S,v,L){var C=v?function(D,U,R,I){S(D,U,R,I),x.remove(C)}:S;return x.remove(S),c[L?"unshift":"push"](C),Eo(),C},remove:function(S,v){~(v=c.indexOf(S))&&c.splice(v,1)&&y>=v&&y--},_listeners:c},x})(),Eo=function(){return!Rl&&bi.wake()},Rt={},f2=/^[\d.\-M][\d.\-,\s]/,d2=/["']/g,h2=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],o=1,u=i.length,c,d,h;o<u;o++)d=i[o],c=o!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[s]=isNaN(h)?h.replace(d2,"").trim():+h,s=d.substr(c+1).trim();return t},p2=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},m2=function(e){var t=(e+"").split("("),i=Rt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[h2(t[1])]:p2(e).split(",").map(kg)):Rt._CE&&f2.test(e)?Rt._CE("",e):i},nv=function(e){return function(t){return 1-e(1-t)}},iv=function a(e,t){for(var i=e._first,s;i;)i instanceof ii?a(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?a(i.timeline,t):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=t)),i=i._next},ca=function(e,t){return e&&(dn(e)?e:Rt[e]||m2(e))||t},ma=function(e,t,i,s){i===void 0&&(i=function(d){return 1-t(1-d)}),s===void 0&&(s=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var o={easeIn:t,easeOut:i,easeInOut:s},u;return mi(e,function(c){Rt[c]=Pi[c]=o,Rt[u=c.toLowerCase()]=i;for(var d in o)Rt[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=Rt[c+"."+d]=o[d]}),o},rv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},lh=function a(e,t,i){var s=t>=1?t:1,o=(i||(e?.3:.45))/(t<1?t:1),u=o/ap*(Math.asin(1/s)||0),c=function(p){return p===1?1:s*Math.pow(2,-10*p)*Hw((p-u)*o)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:rv(c);return o=ap/o,d.config=function(h,p){return a(e,h,p)},d},uh=function a(e,t){t===void 0&&(t=1.70158);var i=function(u){return u?--u*u*((t+1)*u+t)+1:0},s=e==="out"?i:e==="in"?function(o){return 1-i(1-o)}:rv(i);return s.config=function(o){return a(e,o)},s};mi("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;ma(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Rt.Linear.easeNone=Rt.none=Rt.Linear.easeIn;ma("Elastic",lh("in"),lh("out"),lh());(function(a,e){var t=1/e,i=2*t,s=2.5*t,o=function(c){return c<t?a*c*c:c<i?a*Math.pow(c-1.5/e,2)+.75:c<s?a*(c-=2.25/e)*c+.9375:a*Math.pow(c-2.625/e,2)+.984375};ma("Bounce",function(u){return 1-o(1-u)},o)})(7.5625,2.75);ma("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});ma("Circ",function(a){return-(Ag(1-a*a)-1)});ma("Sine",function(a){return a===1?1:-Gw(a*Bw)+1});ma("Back",uh("in"),uh("out"),uh());Rt.SteppedEase=Rt.steps=Pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),o=t?1:0,u=1-Xt;return function(c){return((s*Ol(0,u,c)|0)+o)*i}}};vo.ease=Rt["quad.out"];mi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Gp+=a+","+a+"Params,"});var sv=function(e,t){this.id=Vw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Fg,this.set=t?t.getSetter:jp},Pl=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Mo(this,+t.duration,1,1),this.data=t.data,tn&&(this._ctx=tn,tn.data.push(this)),Rl||bi.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Mo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(Eo(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Gc(this,i),!o._dp||o.parent||Vg(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&mr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Xt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Og(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+P_(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+P_(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*o,s):this._repeat?So(this._tTime,o)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-Xt?0:this._rts;if(this._rts===i)return this;var o=this.parent&&this._ts?Dc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Xt?0:this._rts,this.totalTime(Ol(-Math.abs(this._delay),this.totalDuration(),o),s!==!1),Vc(this),Kw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Eo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Xt&&(this._tTime-=Xt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&mr(s,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(pi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Dc(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Yw);var s=kn;return kn=i,Wp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),kn=s,this},e.globalTime=function(i){for(var s=this,o=arguments.length?i:s.rawTime();s;)o=s._start+o/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):o},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,D_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,D_(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(Bi(this,i),pi(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,pi(s)),this._dur||(this._zTime=-Xt),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Xt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Xt,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,o;return!!(!i||this._ts&&this._initted&&i.isActive()&&(o=i.rawTime(!0))>=s&&o<this.endTime(!0)-Xt)},e.eventCallback=function(i,s,o){var u=this.vars;return arguments.length>1?(s?(u[i]=s,o&&(u[i+"Params"]=o),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},e.then=function(i){var s=this;return new Promise(function(o){var u=dn(i)?i:zg,c=function(){var h=s.then;s.then=null,dn(u)&&(u=u(s))&&(u.then||u===s)&&(s.then=h),o(u),s.then=h};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?c():s._prom=c})},e.kill=function(){xl(this)},a})();Di(Pl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Xt,_prom:0,_ps:!1,_rts:1});var ii=(function(a){bg(e,a);function e(i,s){var o;return i===void 0&&(i={}),o=a.call(this,i)||this,o.labels={},o.smoothChildTiming=!!i.smoothChildTiming,o.autoRemoveChildren=!!i.autoRemoveChildren,o._sort=pi(i.sortChildren),an&&mr(i.parent||an,zr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),i.scrollTrigger&&Gg(zr(o),i.scrollTrigger),o}var t=e.prototype;return t.to=function(s,o,u){return vl(0,arguments,this),this},t.from=function(s,o,u){return vl(1,arguments,this),this},t.fromTo=function(s,o,u,c){return vl(2,arguments,this),this},t.set=function(s,o,u){return o.duration=0,o.parent=this,gl(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new gn(s,o,Bi(this,u),1),this},t.call=function(s,o,u){return mr(this,gn.delayedCall(0,s,o),u)},t.staggerTo=function(s,o,u,c,d,h,p){return u.duration=o,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new gn(s,u,Bi(this,d)),this},t.staggerFrom=function(s,o,u,c,d,h,p){return u.runBackwards=1,gl(u).immediateRender=pi(u.immediateRender),this.staggerTo(s,o,u,c,d,h,p)},t.staggerFromTo=function(s,o,u,c,d,h,p,x){return c.startAt=u,gl(c).immediateRender=pi(c.immediateRender),this.staggerTo(s,o,c,d,h,p,x)},t.render=function(s,o,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=s<=0?0:vn(s),x=this._zTime<0!=s<0&&(this._initted||!h),_,y,E,M,S,v,L,C,D,U,R,I;if(this!==an&&p>d&&s>=0&&(p=d),p!==this._tTime||u||x){if(c!==this._time&&h&&(p+=this._time-c,s+=this._time-c),_=p,D=this._start,C=this._ts,v=!C,x&&(h||(c=this._zTime),(s||!o)&&(this._zTime=s)),this._repeat){if(R=this._yoyo,S=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,o,u);if(_=vn(p%S),p===d?(M=this._repeat,_=h):(U=vn(p/S),M=~~U,M&&M===U&&(_=h,M--),_>h&&(_=h)),U=So(this._tTime,S),!c&&this._tTime&&U!==M&&this._tTime-U*S-this._dur<=0&&(U=M),R&&M&1&&(_=h-_,I=1),M!==U&&!this._lock){var k=R&&U&1,w=k===(R&&M&1);if(M<U&&(k=!k),c=k?0:p%h?h:p,this._lock=1,this.render(c||(I?0:vn(M*S)),o,!h)._lock=0,this._tTime=p,!o&&this.parent&&Ai(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1),c&&c!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,w&&(this._lock=2,c=k?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;iv(this,I)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(L=e2(this,vn(c),vn(_)),L&&(p-=_-(_=L._start))),this._tTime=p,this._time=_,this._act=!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&p&&!o&&!U&&(Ai(this,"onStart"),this._tTime!==p))return this;if(_>=c&&s>=0)for(y=this._first;y;){if(E=y._next,(y._act||_>=y._start)&&y._ts&&L!==y){if(y.parent!==this)return this.render(s,o,u);if(y.render(y._ts>0?(_-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(_-y._start)*y._ts,o,u),_!==this._time||!this._ts&&!v){L=0,E&&(p+=this._zTime=-Xt);break}}y=E}else{y=this._last;for(var A=s<0?s:_;y;){if(E=y._prev,(y._act||A<=y._end)&&y._ts&&L!==y){if(y.parent!==this)return this.render(s,o,u);if(y.render(y._ts>0?(A-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(A-y._start)*y._ts,o,u||kn&&Wp(y)),_!==this._time||!this._ts&&!v){L=0,E&&(p+=this._zTime=A?-Xt:Xt);break}}y=E}}if(L&&!o&&(this.pause(),L.render(_>=c?0:-Xt)._zTime=_>=c?1:-1,this._ts))return this._start=D,Vc(this),this.render(s,o,u);this._onUpdate&&!o&&Ai(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(D===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&Ds(this,1),!o&&!(s<0&&!c)&&(p||c||!d)&&(Ai(this,p===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,o){var u=this;if(Xr(o)||(o=Bi(this,o,s)),!(s instanceof Pl)){if(jn(s))return s.forEach(function(c){return u.add(c,o)}),this;if(Un(s))return this.addLabel(s,o);if(dn(s))s=gn.delayedCall(0,s);else return this}return this!==s?mr(this,s,o):this},t.getChildren=function(s,o,u,c){s===void 0&&(s=!0),o===void 0&&(o=!0),u===void 0&&(u=!0),c===void 0&&(c=-Xi);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof gn?o&&d.push(h):(u&&d.push(h),s&&d.push.apply(d,h.getChildren(!0,o,u)))),h=h._next;return d},t.getById=function(s){for(var o=this.getChildren(1,1,1),u=o.length;u--;)if(o[u].vars.id===s)return o[u]},t.remove=function(s){return Un(s)?this.removeLabel(s):dn(s)?this.killTweensOf(s):(s.parent===this&&Bc(this,s),s===this._recent&&(this._recent=this._last),ua(this))},t.totalTime=function(s,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=vn(bi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),a.prototype.totalTime.call(this,s,o),this._forcing=0,this):this._tTime},t.addLabel=function(s,o){return this.labels[s]=Bi(this,o),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,o,u){var c=gn.delayedCall(0,o||Al,u);return c.data="isPause",this._hasPause=1,mr(this,c,Bi(this,s))},t.removePause=function(s){var o=this._first;for(s=Bi(this,s);o;)o._start===s&&o.data==="isPause"&&Ds(o),o=o._next},t.killTweensOf=function(s,o,u){for(var c=this.getTweensOf(s,u),d=c.length;d--;)Es!==c[d]&&c[d].kill(s,o);return this},t.getTweensOf=function(s,o){for(var u=[],c=Yi(s),d=this._first,h=Xr(o),p;d;)d instanceof gn?qw(d._targets,c)&&(h?(!Es||d._initted&&d._ts)&&d.globalTime(0)<=o&&d.globalTime(d.totalDuration())>o:!o||d.isActive())&&u.push(d):(p=d.getTweensOf(c,o)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(s,o){o=o||{};var u=this,c=Bi(u,s),d=o,h=d.startAt,p=d.onStart,x=d.onStartParams,_=d.immediateRender,y,E=gn.to(u,Di({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:o.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||Xt,onStart:function(){if(u.pause(),!y){var S=o.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());E._dur!==S&&Mo(E,S,0,1).render(E._time,!0,!0),y=1}p&&p.apply(E,x||[])}},o));return _?E.render(0):E},t.tweenFromTo=function(s,o,u){return this.tweenTo(o,Di({startAt:{time:Bi(this,s)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),L_(this,Bi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),L_(this,Bi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Xt)},t.shiftChildren=function(s,o,u){u===void 0&&(u=0);for(var c=this._first,d=this.labels,h;c;)c._start>=u&&(c._start+=s,c._end+=s),c=c._next;if(o)for(h in d)d[h]>=u&&(d[h]+=s);return ua(this)},t.invalidate=function(s){var o=this._first;for(this._lock=0;o;)o.invalidate(s),o=o._next;return a.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var o=this._first,u;o;)u=o._next,this.remove(o),o=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),ua(this)},t.totalDuration=function(s){var o=0,u=this,c=u._last,d=Xi,h,p,x;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(x=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,mr(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(o-=p,(!x&&!u._dp||x&&x.smoothChildTiming)&&(u._start+=p/u._ts,u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>o&&c._ts&&(o=c._end),c=h;Mo(u,u===an&&u._time>o?u._time:o,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(an._ts&&(Og(an,Dc(s,an)),Ng=bi.frame),bi.frame>=C_){C_+=Ri.autoSleep||120;var o=an._first;if((!o||!o._ts)&&Ri.autoSleep&&bi._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||bi.sleep()}}},e})(Pl);Di(ii.prototype,{_lock:0,_hasPause:0,_forcing:0});var x2=function(e,t,i,s,o,u,c){var d=new xi(this._pt,e,t,0,1,fv,null,o),h=0,p=0,x,_,y,E,M,S,v,L;for(d.b=i,d.e=s,i+="",s+="",(v=~s.indexOf("random("))&&(s=Cl(s)),u&&(L=[i,s],u(L,e,t),i=L[0],s=L[1]),_=i.match(sh)||[];x=sh.exec(s);)E=x[0],M=s.substring(h,x.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),E!==_[p++]&&(S=parseFloat(_[p-1])||0,d._pt={_next:d._pt,p:M||p===1?M:",",s:S,c:E.charAt(1)==="="?uo(S,E)-S:parseFloat(E)-S,m:y&&y<4?Math.round:0},h=sh.lastIndex);return d.c=h<s.length?s.substring(h,s.length):"",d.fp=c,(Pg.test(s)||v)&&(d.e=0),this._pt=d,d},Xp=function(e,t,i,s,o,u,c,d,h,p){dn(s)&&(s=s(o||0,e,u));var x=e[t],_=i!=="get"?i:dn(x)?h?e[t.indexOf("set")||!dn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():x,y=dn(x)?h?S2:uv:qp,E;if(Un(s)&&(~s.indexOf("random(")&&(s=Cl(s)),s.charAt(1)==="="&&(E=uo(_,s)+(Xn(_)||0),(E||E===0)&&(s=E))),!p||_!==s||mp)return!isNaN(_*s)&&s!==""?(E=new xi(this._pt,e,t,+_||0,s-(_||0),typeof x=="boolean"?E2:cv,0,y),h&&(E.fp=h),c&&E.modifier(c,this,e),this._pt=E):(!x&&!(t in e)&&Bp(t,s),x2.call(this,e,t,_,s,y,d||Ri.stringFilter,h))},_2=function(e,t,i,s,o){if(dn(e)&&(e=yl(e,o,t,i,s)),!Er(e)||e.style&&e.nodeType||jn(e)||Cg(e))return Un(e)?yl(e,o,t,i,s):e;var u={},c;for(c in e)u[c]=yl(e[c],o,t,i,s);return u},av=function(e,t,i,s,o,u){var c,d,h,p;if(wi[e]&&(c=new wi[e]).init(o,c.rawVars?t[e]:_2(t[e],s,o,u,i),i,s,u)!==!1&&(i._pt=d=new xi(i._pt,o,e,0,1,c.render,c,0,c.priority),i!==ao))for(h=i._ptLookup[i._targets.indexOf(o)],p=c._props.length;p--;)h[c._props[p]]=d;return c},Es,mp,Yp=function a(e,t,i){var s=e.vars,o=s.ease,u=s.startAt,c=s.immediateRender,d=s.lazy,h=s.onUpdate,p=s.runBackwards,x=s.yoyoEase,_=s.keyframes,y=s.autoRevert,E=e._dur,M=e._startAt,S=e._targets,v=e.parent,L=v&&v.data==="nested"?v.vars.targets:S,C=e._overwrite==="auto"&&!Fp,D=e.timeline,U,R,I,k,w,A,B,W,Y,oe,ie,re,fe;if(D&&(!_||!o)&&(o="none"),e._ease=ca(o,vo.ease),e._yEase=x?nv(ca(x===!0?o:x,vo.ease)):0,x&&e._yoyo&&!e._repeat&&(x=e._yEase,e._yEase=e._ease,e._ease=x),e._from=!D&&!!s.runBackwards,!D||_&&!s.stagger){if(W=S[0]?la(S[0]).harness:0,re=W&&s[W.prop],U=Pc(s,Vp),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!y?M.render(-1,!0):M.revert(p&&E?vc:Xw),M._lazy=0),u){if(Ds(e._startAt=gn.set(S,Di({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!M&&pi(d),startAt:null,delay:0,onUpdate:h&&function(){return Ai(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kn||!c&&!y)&&e._startAt.revert(vc),c&&E&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(c=!1),I=Di({overwrite:!1,data:"isFromStart",lazy:c&&!M&&pi(d),immediateRender:c,stagger:0,parent:v},U),re&&(I[W.prop]=re),Ds(e._startAt=gn.set(S,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kn?e._startAt.revert(vc):e._startAt.render(-1,!0)),e._zTime=t,!c)a(e._startAt,Xt,Xt);else if(!t)return}for(e._pt=e._ptCache=0,d=E&&pi(d)||d&&!E,R=0;R<S.length;R++){if(w=S[R],B=w._gsap||Hp(S)[R]._gsap,e._ptLookup[R]=oe={},up[B.id]&&Cs.length&&Rc(),ie=L===S?R:L.indexOf(w),W&&(Y=new W).init(w,re||U,e,ie,L)!==!1&&(e._pt=k=new xi(e._pt,w,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(H){oe[H]=k}),Y.priority&&(A=1)),!W||re)for(I in U)wi[I]&&(Y=av(I,U,e,ie,w,L))?Y.priority&&(A=1):oe[I]=k=Xp.call(e,w,I,"get",U[I],ie,L,0,s.stringFilter);e._op&&e._op[R]&&e.kill(w,e._op[R]),C&&e._pt&&(Es=e,an.killTweensOf(w,oe,e.globalTime(t)),fe=!e.parent,Es=0),e._pt&&d&&(up[B.id]=1)}A&&dv(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!fe,_&&t<=0&&D.render(Xi,!0,!0)},g2=function(e,t,i,s,o,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,x,_,y;if(!h)for(h=e._ptCache[t]=[],_=e._ptLookup,y=e._targets.length;y--;){if(p=_[y][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return mp=1,e.vars[t]="+=0",Yp(e,c),mp=0,d?bl(t+" not eligible for reset"):1;h.push(p)}for(y=h.length;y--;)x=h[y],p=x._pt||x,p.s=(s||s===0)&&!o?s:p.s+(s||0)+u*p.c,p.c=i-p.s,x.e&&(x.e=pn(i)+Xn(x.e)),x.b&&(x.b=p.s+Xn(x.b))},v2=function(e,t){var i=e[0]?la(e[0]).harness:0,s=i&&i.aliases,o,u,c,d;if(!s)return t;o=yo({},t);for(u in s)if(u in o)for(d=s[u].split(","),c=d.length;c--;)o[d[c]]=o[u];return o},y2=function(e,t,i,s){var o=t.ease||s||"power1.inOut",u,c;if(jn(t))c=i[e]||(i[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:o})});else for(u in t)c=i[u]||(i[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:o})},yl=function(e,t,i,s,o){return dn(e)?e.call(t,i,s,o):Un(e)&&~e.indexOf("random(")?Cl(e):e},ov=Gp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",lv={};mi(ov+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return lv[a]=1});var gn=(function(a){bg(e,a);function e(i,s,o,u){var c;typeof s=="number"&&(o.duration=s,s=o,o=null),c=a.call(this,u?s:gl(s))||this;var d=c.vars,h=d.duration,p=d.delay,x=d.immediateRender,_=d.stagger,y=d.overwrite,E=d.keyframes,M=d.defaults,S=d.scrollTrigger,v=d.yoyoEase,L=s.parent||an,C=(jn(i)||Cg(i)?Xr(i[0]):"length"in s)?[i]:Yi(i),D,U,R,I,k,w,A,B;if(c._targets=C.length?Hp(C):bl("GSAP target "+i+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=y,E||_||dc(h)||dc(p)){if(s=c.vars,D=c.timeline=new ii({data:"nested",defaults:M||{},targets:L&&L.data==="nested"?L.vars.targets:C}),D.kill(),D.parent=D._dp=zr(c),D._start=0,_||dc(h)||dc(p)){if(I=C.length,A=_&&Yg(_),Er(_))for(k in _)~ov.indexOf(k)&&(B||(B={}),B[k]=_[k]);for(U=0;U<I;U++)R=Pc(s,lv),R.stagger=0,v&&(R.yoyoEase=v),B&&yo(R,B),w=C[U],R.duration=+yl(h,zr(c),U,w,C),R.delay=(+yl(p,zr(c),U,w,C)||0)-c._delay,!_&&I===1&&R.delay&&(c._delay=p=R.delay,c._start+=p,R.delay=0),D.to(w,R,A?A(U,w,C):0),D._ease=Rt.none;D.duration()?h=p=0:c.timeline=0}else if(E){gl(Di(D.vars.defaults,{ease:"none"})),D._ease=ca(E.ease||s.ease||"none");var W=0,Y,oe,ie;if(jn(E))E.forEach(function(re){return D.to(C,re,">")}),D.duration();else{R={};for(k in E)k==="ease"||k==="easeEach"||y2(k,E[k],R,E.easeEach);for(k in R)for(Y=R[k].sort(function(re,fe){return re.t-fe.t}),W=0,U=0;U<Y.length;U++)oe=Y[U],ie={ease:oe.e,duration:(oe.t-(U?Y[U-1].t:0))/100*h},ie[k]=oe.v,D.to(C,ie,W),W+=ie.duration;D.duration()<h&&D.to({},{duration:h-D.duration()})}}h||c.duration(h=D.duration())}else c.timeline=0;return y===!0&&!Fp&&(Es=zr(c),an.killTweensOf(C),Es=0),mr(L,zr(c),o),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(x||!h&&!E&&c._start===vn(L._time)&&pi(x)&&Zw(zr(c))&&L.data!=="nested")&&(c._tTime=-Xt,c.render(Math.max(0,-p)||0)),S&&Gg(zr(c),S),c}var t=e.prototype;return t.render=function(s,o,u){var c=this._time,d=this._tDur,h=this._dur,p=s<0,x=s>d-Xt&&!p?d:s<Xt?0:s,_,y,E,M,S,v,L,C,D;if(!h)Jw(this,s,o,u);else if(x!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(_=x,C=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+s,o,u);if(_=vn(x%M),x===d?(E=this._repeat,_=h):(S=vn(x/M),E=~~S,E&&E===S?(_=h,E--):_>h&&(_=h)),v=this._yoyo&&E&1,v&&(D=this._yEase,_=h-_),S=So(this._tTime,M),_===c&&!u&&this._initted&&E===S)return this._tTime=x,this;E!==S&&(C&&this._yEase&&iv(C,v),this.vars.repeatRefresh&&!v&&!this._lock&&_!==M&&this._initted&&(this._lock=u=1,this.render(vn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(Hg(this,p?s:_,u,o,x))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==S))return this;if(h!==this._dur)return this.render(s,o,u)}if(this._tTime=x,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=L=(D||this._ease)(_/h),this._from&&(this.ratio=L=1-L),!c&&x&&!o&&!S&&(Ai(this,"onStart"),this._tTime!==x))return this;for(y=this._pt;y;)y.r(L,y.d),y=y._next;C&&C.render(s<0?s:C._dur*C._ease(_/this._dur),o,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!o&&(p&&cp(this,s,o,u),Ai(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!o&&this.parent&&Ai(this,"onRepeat"),(x===this._tDur||!x)&&this._tTime===x&&(p&&!this._onUpdate&&cp(this,s,!0,!0),(s||!h)&&(x===this._tDur&&this._ts>0||!x&&this._ts<0)&&Ds(this,1),!o&&!(p&&!c)&&(x||c||v)&&(Ai(this,x===d?"onComplete":"onReverseComplete",!0),this._prom&&!(x<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),a.prototype.invalidate.call(this,s)},t.resetTo=function(s,o,u,c,d){Rl||bi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Yp(this,h),p=this._ease(h/this._dur),g2(this,s,o,u,c,p,h,d)?this.resetTo(s,o,u,c,1):(Gc(this,0),this.parent||Bg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,o){if(o===void 0&&(o="all"),!s&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?xl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!kn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,o,Es&&Es.vars.overwrite!==!0)._first||xl(this),this.parent&&u!==this.timeline.totalDuration()&&Mo(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=s?Yi(s):c,h=this._ptLookup,p=this._pt,x,_,y,E,M,S,v;if((!o||o==="all")&&$w(c,d))return o==="all"&&(this._pt=0),xl(this);for(x=this._op=this._op||[],o!=="all"&&(Un(o)&&(M={},mi(o,function(L){return M[L]=1}),o=M),o=v2(c,o)),v=c.length;v--;)if(~d.indexOf(c[v])){_=h[v],o==="all"?(x[v]=o,E=_,y={}):(y=x[v]=x[v]||{},E=o);for(M in E)S=_&&_[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&Bc(this,S,"_pt"),delete _[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&p&&xl(this),this},e.to=function(s,o){return new e(s,o,arguments[2])},e.from=function(s,o){return vl(1,arguments)},e.delayedCall=function(s,o,u,c){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:o,onReverseComplete:o,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(s,o,u){return vl(2,arguments)},e.set=function(s,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(s,o)},e.killTweensOf=function(s,o,u){return an.killTweensOf(s,o,u)},e})(Pl);Di(gn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mi("staggerTo,staggerFrom,staggerFromTo",function(a){gn[a]=function(){var e=new ii,t=dp.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var qp=function(e,t,i){return e[t]=i},uv=function(e,t,i){return e[t](i)},S2=function(e,t,i,s){return e[t](s.fp,i)},M2=function(e,t,i){return e.setAttribute(t,i)},jp=function(e,t){return dn(e[t])?uv:Op(e[t])&&e.setAttribute?M2:qp},cv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},E2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},fv=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},$p=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},T2=function(e,t,i,s){for(var o=this._pt,u;o;)u=o._next,o.p===s&&o.modifier(e,t,i),o=u},w2=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Bc(this,t,"_pt"):t.dep||(i=1),t=s;return!i},b2=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},dv=function(e){for(var t=e._pt,i,s,o,u;t;){for(i=t._next,s=o;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:u)?t._prev._next=t:o=t,(t._next=s)?s._prev=t:u=t,t=i}e._pt=o},xi=(function(){function a(t,i,s,o,u,c,d,h,p){this.t=i,this.s=o,this.c=u,this.p=s,this.r=c||cv,this.d=d||this,this.set=h||qp,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,s,o){this.mSet=this.mSet||this.set,this.set=b2,this.m=i,this.mt=o,this.tween=s},a})();mi(Gp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Vp[a]=1});Pi.TweenMax=Pi.TweenLite=gn;Pi.TimelineLite=Pi.TimelineMax=ii;an=new ii({sortChildren:!1,defaults:vo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=tv;var fa=[],Sc={},A2=[],I_=0,C2=0,ch=function(e){return(Sc[e]||A2).map(function(t){return t()})},xp=function(){var e=Date.now(),t=[];e-I_>2&&(ch("matchMediaInit"),fa.forEach(function(i){var s=i.queries,o=i.conditions,u,c,d,h;for(c in s)u=dr.matchMedia(s[c]).matches,u&&(d=1),u!==o[c]&&(o[c]=u,h=1);h&&(i.revert(),d&&t.push(i))}),ch("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),I_=e,ch("matchMedia"))},hv=(function(){function a(t,i){this.selector=i&&hp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=C2++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,s,o){dn(i)&&(o=s,s=i,i=dn);var u=this,c=function(){var h=tn,p=u.selector,x;return h&&h!==u&&h.data.push(u),o&&(u.selector=hp(o)),tn=u,x=s.apply(u,arguments),dn(x)&&u._r.push(x),tn=h,u.selector=p,u.isReverted=!1,x};return u.last=c,i===dn?c(u,function(d){return u.add(null,d)}):i?u[i]=c:c},e.ignore=function(i){var s=tn;tn=null,i(this),tn=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof a?i.push.apply(i,s.getTweens()):s instanceof gn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var o=this;if(i?(function(){for(var c=o.getTweens(),d=o.data.length,h;d--;)h=o.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,x){return x.g-p.g||-1/0}).forEach(function(p){return p.t.revert(i)}),d=o.data.length;d--;)h=o.data[d],h instanceof ii?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof gn)&&h.revert&&h.revert(i);o._r.forEach(function(p){return p(i,o)}),o.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var u=fa.length;u--;)fa[u].id===this.id&&fa.splice(u,1)},e.revert=function(i){this.kill(i||{})},a})(),R2=(function(){function a(t){this.contexts=[],this.scope=t,tn&&tn.data.push(this)}var e=a.prototype;return e.add=function(i,s,o){Er(i)||(i={matches:i});var u=new hv(0,o||this.scope),c=u.conditions={},d,h,p;tn&&!u.selector&&(u.selector=tn.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(h in i)h==="all"?p=1:(d=dr.matchMedia(i[h]),d&&(fa.indexOf(u)<0&&fa.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener(xp):d.addEventListener("change",xp)));return p&&s(u,function(x){return u.add(null,x)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},a})(),Lc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return Qg(s)})},timeline:function(e){return new ii(e)},getTweensOf:function(e,t){return an.getTweensOf(e,t)},getProperty:function(e,t,i,s){Un(e)&&(e=Yi(e)[0]);var o=la(e||{}).get,u=i?zg:kg;return i==="native"&&(i=""),e&&(t?u((wi[t]&&wi[t].get||o)(e,t,i,s)):function(c,d,h){return u((wi[c]&&wi[c].get||o)(e,c,d,h))})},quickSetter:function(e,t,i){if(e=Yi(e),e.length>1){var s=e.map(function(p){return gi.quickSetter(p,t,i)}),o=s.length;return function(p){for(var x=o;x--;)s[x](p)}}e=e[0]||{};var u=wi[t],c=la(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var x=new u;ao._pt=0,x.init(e,i?p+i:p,ao,0,[e]),x.render(1,x),ao._pt&&$p(1,ao)}:c.set(e,d);return u?h:function(p){return h(e,d,i?p+i:p,c,1)}},quickTo:function(e,t,i){var s,o=gi.to(e,Di((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),u=function(d,h,p){return o.resetTo(t,d,h,p)};return u.tween=o,u},isTweening:function(e){return an.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ca(e.ease,vo.ease)),R_(vo,e||{})},config:function(e){return R_(Ri,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,o=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!wi[c]&&!Pi[c]&&bl(t+" effect requires "+c+" plugin.")}),ah[t]=function(c,d,h){return i(Yi(c),Di(d||{},o),h)},u&&(ii.prototype[t]=function(c,d,h){return this.add(ah[t](c,Er(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){Rt[e]=ca(t)},parseEase:function(e,t){return arguments.length?ca(e,t):Rt},getById:function(e){return an.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ii(e),s,o;for(i.smoothChildTiming=pi(e.smoothChildTiming),an.remove(i),i._dp=0,i._time=i._tTime=an._time,s=an._first;s;)o=s._next,(t||!(!s._dur&&s instanceof gn&&s.vars.onComplete===s._targets[0]))&&mr(i,s,s._start-s._delay),s=o;return mr(an,i,0),i},context:function(e,t){return e?new hv(e,t):tn},matchMedia:function(e){return new R2(e)},matchMediaRefresh:function(){return fa.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||xp()},addEventListener:function(e,t){var i=Sc[e]||(Sc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Sc[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:o2,wrapYoyo:l2,distribute:Yg,random:jg,snap:qg,normalize:a2,getUnit:Xn,clamp:n2,splitColor:Jg,toArray:Yi,selector:hp,mapRange:Kg,pipe:r2,unitize:s2,interpolate:u2,shuffle:Xg},install:Ug,effects:ah,ticker:bi,updateRoot:ii.updateRoot,plugins:wi,globalTimeline:an,core:{PropTween:xi,globals:Ig,Tween:gn,Timeline:ii,Animation:Pl,getCache:la,_removeLinkedListItem:Bc,reverting:function(){return kn},context:function(e){return e&&tn&&(tn.data.push(e),e._ctx=tn),tn},suppressOverwrites:function(e){return Fp=e}}};mi("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Lc[a]=gn[a]});bi.add(ii.updateRoot);ao=Lc.to({},{duration:0});var P2=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},D2=function(e,t){var i=e._targets,s,o,u;for(s in t)for(o=i.length;o--;)u=e._ptLookup[o][s],u&&(u=u.d)&&(u._pt&&(u=P2(u,s)),u&&u.modifier&&u.modifier(t[s],e,i[o],s))},fh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,o,u){u._onInit=function(c){var d,h;if(Un(o)&&(d={},mi(o,function(p){return d[p]=1}),o=d),t){d={};for(h in o)d[h]=t(o[h]);o=d}D2(c,o)}}}},gi=Lc.registerPlugin({name:"attr",init:function(e,t,i,s,o){var u,c,d;this.tween=i;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],s,o,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var i=t._pt;i;)kn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},fh("roundProps",pp),fh("modifiers"),fh("snap",qg))||Lc;gn.version=ii.version=gi.version="3.13.0";Lg=1;kp()&&Eo();Rt.Power0;Rt.Power1;Rt.Power2;Rt.Power3;Rt.Power4;Rt.Linear;Rt.Quad;Rt.Cubic;Rt.Quart;Rt.Quint;Rt.Strong;Rt.Elastic;Rt.Back;Rt.SteppedEase;Rt.Bounce;Rt.Sine;Rt.Expo;Rt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var N_,Ts,co,Kp,oa,F_,Zp,L2=function(){return typeof window<"u"},Yr={},ta=180/Math.PI,fo=Math.PI/180,io=Math.atan2,O_=1e8,Qp=/([A-Z])/g,U2=/(left|right|width|margin|padding|x)/i,I2=/[\s,\(]\S/,_r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_p=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},N2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},F2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},O2=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},pv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},mv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},k2=function(e,t,i){return e.style[t]=i},z2=function(e,t,i){return e.style.setProperty(t,i)},B2=function(e,t,i){return e._gsap[t]=i},V2=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},G2=function(e,t,i,s,o){var u=e._gsap;u.scaleX=u.scaleY=i,u.renderTransform(o,u)},H2=function(e,t,i,s,o){var u=e._gsap;u[t]=i,u.renderTransform(o,u)},on="transform",_i=on+"Origin",W2=function a(e,t){var i=this,s=this.target,o=s.style,u=s._gsap;if(e in Yr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=_r[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return i.tfm[c]=Br(s,c)}):this.tfm[e]=u.x?u[e]:Br(s,e),e===_i&&(this.tfm.zOrigin=u.zOrigin);else return _r.transform.split(",").forEach(function(c){return a.call(i,c,t)});if(this.props.indexOf(on)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(_i,t,"")),e=on}(o||t)&&this.props.push(e,t,o[e])},xv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},X2=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,o,u;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?i[e[o]]=e[o+2]:i.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Qp,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Zp(),(!o||!o.isStart)&&!i[on]&&(xv(i),s.zOrigin&&i[_i]&&(i[_i]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},_v=function(e,t){var i={target:e,props:[],revert:X2,save:W2};return e._gsap||gi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},gv,gp=function(e,t){var i=Ts.createElementNS?Ts.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ts.createElement(e);return i&&i.style?i:Ts.createElement(e)},qi=function a(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Qp,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&a(e,To(t)||t,1)||""},k_="O,Moz,ms,Ms,Webkit".split(","),To=function(e,t,i){var s=t||oa,o=s.style,u=5;if(e in o&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(k_[u]+e in o););return u<0?null:(u===3?"ms":u>=0?k_[u]:"")+e},vp=function(){L2()&&window.document&&(N_=window,Ts=N_.document,co=Ts.documentElement,oa=gp("div")||{style:{}},gp("div"),on=To(on),_i=on+"Origin",oa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gv=!!To("perspective"),Zp=gi.core.reverting,Kp=1)},z_=function(e){var t=e.ownerSVGElement,i=gp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),o;s.style.display="block",i.appendChild(s),co.appendChild(i);try{o=s.getBBox()}catch{}return i.removeChild(s),co.removeChild(i),o},B_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},vv=function(e){var t,i;try{t=e.getBBox()}catch{t=z_(e),i=1}return t&&(t.width||t.height)||i||(t=z_(e)),t&&!t.width&&!t.x&&!t.y?{x:+B_(e,["x","cx","x1"])||0,y:+B_(e,["y","cy","y1"])||0,width:0,height:0}:t},yv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vv(e))},ha=function(e,t){if(t){var i=e.style,s;t in Yr&&t!==_i&&(t=on),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(Qp,"-$1").toLowerCase())):i.removeAttribute(t)}},ws=function(e,t,i,s,o,u){var c=new xi(e._pt,t,i,0,1,u?mv:pv);return e._pt=c,c.b=s,c.e=o,e._props.push(i),c},V_={deg:1,rad:1,turn:1},Y2={grid:1,flex:1},Ls=function a(e,t,i,s){var o=parseFloat(i)||0,u=(i+"").trim().substr((o+"").length)||"px",c=oa.style,d=U2.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),x=100,_=s==="px",y=s==="%",E,M,S,v;if(s===u||!o||V_[s]||V_[u])return o;if(u!=="px"&&!_&&(o=a(e,t,i,"px")),v=e.getCTM&&yv(e),(y||u==="%")&&(Yr[t]||~t.indexOf("adius")))return E=v?e.getBBox()[d?"width":"height"]:e[p],pn(y?o/E*x:o/100*E);if(c[d?"width":"height"]=x+(_?u:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,v&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===Ts||!M.appendChild)&&(M=Ts.body),S=M._gsap,S&&y&&S.width&&d&&S.time===bi.time&&!S.uncache)return pn(o/S.width*x);if(y&&(t==="height"||t==="width")){var L=e.style[t];e.style[t]=x+s,E=e[p],L?e.style[t]=L:ha(e,t)}else(y||u==="%")&&!Y2[qi(M,"display")]&&(c.position=qi(e,"position")),M===e&&(c.position="static"),M.appendChild(oa),E=oa[p],M.removeChild(oa),c.position="absolute";return d&&y&&(S=la(M),S.time=bi.time,S.width=M[p]),pn(_?E*o/x:E&&o?x/E*o:0)},Br=function(e,t,i,s){var o;return Kp||vp(),t in _r&&t!=="transform"&&(t=_r[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yr[t]&&t!=="transform"?(o=Ll(e,s),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:Ic(qi(e,_i))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||s||~(o+"").indexOf("calc("))&&(o=Uc[t]&&Uc[t](e,t,i)||qi(e,t)||Fg(e,t)||(t==="opacity"?1:0))),i&&!~(o+"").trim().indexOf(" ")?Ls(e,t,o,i)+i:o},q2=function(e,t,i,s){if(!i||i==="none"){var o=To(t,e,1),u=o&&qi(e,o,1);u&&u!==i?(t=o,i=u):t==="borderColor"&&(i=qi(e,"borderTopColor"))}var c=new xi(this._pt,e.style,t,0,1,fv),d=0,h=0,p,x,_,y,E,M,S,v,L,C,D,U;if(c.b=i,c.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=qi(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[t],e.style[t]=s,s=qi(e,t)||s,M?e.style[t]=M:ha(e,t)),p=[i,s],tv(p),i=p[0],s=p[1],_=i.match(so)||[],U=s.match(so)||[],U.length){for(;x=so.exec(s);)S=x[0],L=s.substring(d,x.index),E?E=(E+1)%5:(L.substr(-5)==="rgba("||L.substr(-5)==="hsla(")&&(E=1),S!==(M=_[h++]||"")&&(y=parseFloat(M)||0,D=M.substr((y+"").length),S.charAt(1)==="="&&(S=uo(y,S)+D),v=parseFloat(S),C=S.substr((v+"").length),d=so.lastIndex-C.length,C||(C=C||Ri.units[t]||D,d===s.length&&(s+=C,c.e+=C)),D!==C&&(y=Ls(e,t,M,C)||0),c._pt={_next:c._pt,p:L||h===1?L:",",s:y,c:v-y,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=d<s.length?s.substring(d,s.length):""}else c.r=t==="display"&&s==="none"?mv:pv;return Pg.test(s)&&(c.e=0),this._pt=c,c},G_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},j2=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=G_[i]||i,t[1]=G_[s]||s,t.join(" ")},$2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,o=t.u,u=i._gsap,c,d,h;if(o==="all"||o===!0)s.cssText="",d=1;else for(o=o.split(","),h=o.length;--h>-1;)c=o[h],Yr[c]&&(d=1,c=c==="transformOrigin"?_i:on),ha(i,c);d&&(ha(i,on),u&&(u.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Ll(i,1),u.uncache=1,xv(s)))}},Uc={clearProps:function(e,t,i,s,o){if(o.data!=="isFromStart"){var u=e._pt=new xi(e._pt,t,i,0,0,$2);return u.u=s,u.pr=-10,u.tween=o,e._props.push(i),1}}},Dl=[1,0,0,1,0,0],Sv={},Mv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},H_=function(e){var t=qi(e,on);return Mv(t)?Dl:t.substr(7).match(Rg).map(pn)},Jp=function(e,t){var i=e._gsap||la(e),s=e.style,o=H_(e),u,c,d,h;return i.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,o=[d.a,d.b,d.c,d.d,d.e,d.f],o.join(",")==="1,0,0,1,0,0"?Dl:o):(o===Dl&&!e.offsetParent&&e!==co&&!i.svg&&(d=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,co.appendChild(e)),o=H_(e),d?s.display=d:ha(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):co.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},yp=function(e,t,i,s,o,u){var c=e._gsap,d=o||Jp(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,x=c.xOffset||0,_=c.yOffset||0,y=d[0],E=d[1],M=d[2],S=d[3],v=d[4],L=d[5],C=t.split(" "),D=parseFloat(C[0])||0,U=parseFloat(C[1])||0,R,I,k,w;i?d!==Dl&&(I=y*S-E*M)&&(k=D*(S/I)+U*(-M/I)+(M*L-S*v)/I,w=D*(-E/I)+U*(y/I)-(y*L-E*v)/I,D=k,U=w):(R=vv(e),D=R.x+(~C[0].indexOf("%")?D/100*R.width:D),U=R.y+(~(C[1]||C[0]).indexOf("%")?U/100*R.height:U)),s||s!==!1&&c.smooth?(v=D-h,L=U-p,c.xOffset=x+(v*y+L*M)-v,c.yOffset=_+(v*E+L*S)-L):c.xOffset=c.yOffset=0,c.xOrigin=D,c.yOrigin=U,c.smooth=!!s,c.origin=t,c.originIsAbsolute=!!i,e.style[_i]="0px 0px",u&&(ws(u,c,"xOrigin",h,D),ws(u,c,"yOrigin",p,U),ws(u,c,"xOffset",x,c.xOffset),ws(u,c,"yOffset",_,c.yOffset)),e.setAttribute("data-svg-origin",D+" "+U)},Ll=function(e,t){var i=e._gsap||new sv(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,o=i.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=qi(e,_i)||"0",p,x,_,y,E,M,S,v,L,C,D,U,R,I,k,w,A,B,W,Y,oe,ie,re,fe,H,de,$,O,J,Le,Pe,Oe;return p=x=_=M=S=v=L=C=D=0,y=E=1,i.svg=!!(e.getCTM&&yv(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[on]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[on]!=="none"?d[on]:"")),s.scale=s.rotate=s.translate="none"),I=Jp(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),h=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",fe=""):fe=!t&&e.getAttribute("data-svg-origin"),yp(e,fe||h,!!fe||i.originIsAbsolute,i.smooth!==!1,I)),U=i.xOrigin||0,R=i.yOrigin||0,I!==Dl&&(B=I[0],W=I[1],Y=I[2],oe=I[3],p=ie=I[4],x=re=I[5],I.length===6?(y=Math.sqrt(B*B+W*W),E=Math.sqrt(oe*oe+Y*Y),M=B||W?io(W,B)*ta:0,L=Y||oe?io(Y,oe)*ta+M:0,L&&(E*=Math.abs(Math.cos(L*fo))),i.svg&&(p-=U-(U*B+R*Y),x-=R-(U*W+R*oe))):(Oe=I[6],Le=I[7],$=I[8],O=I[9],J=I[10],Pe=I[11],p=I[12],x=I[13],_=I[14],k=io(Oe,J),S=k*ta,k&&(w=Math.cos(-k),A=Math.sin(-k),fe=ie*w+$*A,H=re*w+O*A,de=Oe*w+J*A,$=ie*-A+$*w,O=re*-A+O*w,J=Oe*-A+J*w,Pe=Le*-A+Pe*w,ie=fe,re=H,Oe=de),k=io(-Y,J),v=k*ta,k&&(w=Math.cos(-k),A=Math.sin(-k),fe=B*w-$*A,H=W*w-O*A,de=Y*w-J*A,Pe=oe*A+Pe*w,B=fe,W=H,Y=de),k=io(W,B),M=k*ta,k&&(w=Math.cos(k),A=Math.sin(k),fe=B*w+W*A,H=ie*w+re*A,W=W*w-B*A,re=re*w-ie*A,B=fe,ie=H),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,v=180-v),y=pn(Math.sqrt(B*B+W*W+Y*Y)),E=pn(Math.sqrt(re*re+Oe*Oe)),k=io(ie,re),L=Math.abs(k)>2e-4?k*ta:0,D=Pe?1/(Pe<0?-Pe:Pe):0),i.svg&&(fe=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Mv(qi(e,on)),fe&&e.setAttribute("transform",fe))),Math.abs(L)>90&&Math.abs(L)<270&&(o?(y*=-1,L+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,L+=L<=0?180:-180)),t=t||i.uncache,i.x=p-((i.xPercent=p&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+u,i.y=x-((i.yPercent=x&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-x)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+u,i.z=_+u,i.scaleX=pn(y),i.scaleY=pn(E),i.rotation=pn(M)+c,i.rotationX=pn(S)+c,i.rotationY=pn(v)+c,i.skewX=L+c,i.skewY=C+c,i.transformPerspective=D+u,(i.zOrigin=parseFloat(h.split(" ")[2])||!t&&i.zOrigin||0)&&(s[_i]=Ic(h)),i.xOffset=i.yOffset=0,i.force3D=Ri.force3D,i.renderTransform=i.svg?Z2:gv?Ev:K2,i.uncache=0,i},Ic=function(e){return(e=e.split(" "))[0]+" "+e[1]},dh=function(e,t,i){var s=Xn(t);return pn(parseFloat(t)+parseFloat(Ls(e,"x",i+"px",s)))+s},K2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ev(e,t)},Qs="0deg",hl="0px",Js=") ",Ev=function(e,t){var i=t||this,s=i.xPercent,o=i.yPercent,u=i.x,c=i.y,d=i.z,h=i.rotation,p=i.rotationY,x=i.rotationX,_=i.skewX,y=i.skewY,E=i.scaleX,M=i.scaleY,S=i.transformPerspective,v=i.force3D,L=i.target,C=i.zOrigin,D="",U=v==="auto"&&e&&e!==1||v===!0;if(C&&(x!==Qs||p!==Qs)){var R=parseFloat(p)*fo,I=Math.sin(R),k=Math.cos(R),w;R=parseFloat(x)*fo,w=Math.cos(R),u=dh(L,u,I*w*-C),c=dh(L,c,-Math.sin(R)*-C),d=dh(L,d,k*w*-C+C)}S!==hl&&(D+="perspective("+S+Js),(s||o)&&(D+="translate("+s+"%, "+o+"%) "),(U||u!==hl||c!==hl||d!==hl)&&(D+=d!==hl||U?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+Js),h!==Qs&&(D+="rotate("+h+Js),p!==Qs&&(D+="rotateY("+p+Js),x!==Qs&&(D+="rotateX("+x+Js),(_!==Qs||y!==Qs)&&(D+="skew("+_+", "+y+Js),(E!==1||M!==1)&&(D+="scale("+E+", "+M+Js),L.style[on]=D||"translate(0, 0)"},Z2=function(e,t){var i=t||this,s=i.xPercent,o=i.yPercent,u=i.x,c=i.y,d=i.rotation,h=i.skewX,p=i.skewY,x=i.scaleX,_=i.scaleY,y=i.target,E=i.xOrigin,M=i.yOrigin,S=i.xOffset,v=i.yOffset,L=i.forceCSS,C=parseFloat(u),D=parseFloat(c),U,R,I,k,w;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=fo,h*=fo,U=Math.cos(d)*x,R=Math.sin(d)*x,I=Math.sin(d-h)*-_,k=Math.cos(d-h)*_,h&&(p*=fo,w=Math.tan(h-p),w=Math.sqrt(1+w*w),I*=w,k*=w,p&&(w=Math.tan(p),w=Math.sqrt(1+w*w),U*=w,R*=w)),U=pn(U),R=pn(R),I=pn(I),k=pn(k)):(U=x,k=_,R=I=0),(C&&!~(u+"").indexOf("px")||D&&!~(c+"").indexOf("px"))&&(C=Ls(y,"x",u,"px"),D=Ls(y,"y",c,"px")),(E||M||S||v)&&(C=pn(C+E-(E*U+M*I)+S),D=pn(D+M-(E*R+M*k)+v)),(s||o)&&(w=y.getBBox(),C=pn(C+s/100*w.width),D=pn(D+o/100*w.height)),w="matrix("+U+","+R+","+I+","+k+","+C+","+D+")",y.setAttribute("transform",w),L&&(y.style[on]=w)},Q2=function(e,t,i,s,o){var u=360,c=Un(o),d=parseFloat(o)*(c&&~o.indexOf("rad")?ta:1),h=d-s,p=s+h+"deg",x,_;return c&&(x=o.split("_")[1],x==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),x==="cw"&&h<0?h=(h+u*O_)%u-~~(h/u)*u:x==="ccw"&&h>0&&(h=(h-u*O_)%u-~~(h/u)*u)),e._pt=_=new xi(e._pt,t,i,s,h,N2),_.e=p,_.u="deg",e._props.push(i),_},W_=function(e,t){for(var i in t)e[i]=t[i];return e},J2=function(e,t,i){var s=W_({},i._gsap),o="perspective,force3D,transformOrigin,svgOrigin",u=i.style,c,d,h,p,x,_,y,E;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),u[on]=t,c=Ll(i,1),ha(i,on),i.setAttribute("transform",h)):(h=getComputedStyle(i)[on],u[on]=t,c=Ll(i,1),u[on]=h);for(d in Yr)h=s[d],p=c[d],h!==p&&o.indexOf(d)<0&&(y=Xn(h),E=Xn(p),x=y!==E?Ls(i,d,h,E):parseFloat(h),_=parseFloat(p),e._pt=new xi(e._pt,c,d,x,_-x,_p),e._pt.u=E||0,e._props.push(d));W_(c,s)};mi("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",s="Bottom",o="Left",u=(e<3?[t,i,s,o]:[t+o,t+i,s+i,s+o]).map(function(c){return e<2?a+c:"border"+c+a});Uc[e>1?"border"+a:a]=function(c,d,h,p,x){var _,y;if(arguments.length<4)return _=u.map(function(E){return Br(c,E,h)}),y=_.join(" "),y.split(_[0]).length===5?_[0]:y;_=(p+"").split(" "),y={},u.forEach(function(E,M){return y[E]=_[M]=_[M]||_[(M-1)/2|0]}),c.init(d,y,x)}});var Tv={name:"css",register:vp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,o){var u=this._props,c=e.style,d=i.vars.startAt,h,p,x,_,y,E,M,S,v,L,C,D,U,R,I,k;Kp||vp(),this.styles=this.styles||_v(e),k=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(p=t[M],!(wi[M]&&av(M,t,i,s,e,o)))){if(y=typeof p,E=Uc[M],y==="function"&&(p=p.call(i,s,e,o),y=typeof p),y==="string"&&~p.indexOf("random(")&&(p=Cl(p)),E)E(this,e,M,p,i)&&(I=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",Rs.lastIndex=0,Rs.test(h)||(S=Xn(h),v=Xn(p)),v?S!==v&&(h=Ls(e,M,h,v)+v):S&&(p+=S),this.add(c,"setProperty",h,p,s,o,0,0,M),u.push(M),k.push(M,0,c[M]);else if(y!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(i,s,e,o):d[M],Un(h)&&~h.indexOf("random(")&&(h=Cl(h)),Xn(h+"")||h==="auto"||(h+=Ri.units[M]||Xn(Br(e,M))||""),(h+"").charAt(1)==="="&&(h=Br(e,M))):h=Br(e,M),_=parseFloat(h),L=y==="string"&&p.charAt(1)==="="&&p.substr(0,2),L&&(p=p.substr(2)),x=parseFloat(p),M in _r&&(M==="autoAlpha"&&(_===1&&Br(e,"visibility")==="hidden"&&x&&(_=0),k.push("visibility",0,c.visibility),ws(this,c,"visibility",_?"inherit":"hidden",x?"inherit":"hidden",!x)),M!=="scale"&&M!=="transform"&&(M=_r[M],~M.indexOf(",")&&(M=M.split(",")[0]))),C=M in Yr,C){if(this.styles.save(M),y==="string"&&p.substring(0,6)==="var(--"&&(p=qi(e,p.substring(4,p.indexOf(")"))),x=parseFloat(p)),D||(U=e._gsap,U.renderTransform&&!t.parseTransform||Ll(e,t.parseTransform),R=t.smoothOrigin!==!1&&U.smooth,D=this._pt=new xi(this._pt,c,on,0,1,U.renderTransform,U,0,-1),D.dep=1),M==="scale")this._pt=new xi(this._pt,U,"scaleY",U.scaleY,(L?uo(U.scaleY,L+x):x)-U.scaleY||0,_p),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){k.push(_i,0,c[_i]),p=j2(p),U.svg?yp(e,p,0,R,0,this):(v=parseFloat(p.split(" ")[2])||0,v!==U.zOrigin&&ws(this,U,"zOrigin",U.zOrigin,v),ws(this,c,M,Ic(h),Ic(p)));continue}else if(M==="svgOrigin"){yp(e,p,1,R,0,this);continue}else if(M in Sv){Q2(this,U,M,_,L?uo(_,L+p):p);continue}else if(M==="smoothOrigin"){ws(this,U,"smooth",U.smooth,p);continue}else if(M==="force3D"){U[M]=p;continue}else if(M==="transform"){J2(this,p,e);continue}}else M in c||(M=To(M)||M);if(C||(x||x===0)&&(_||_===0)&&!I2.test(p)&&M in c)S=(h+"").substr((_+"").length),x||(x=0),v=Xn(p)||(M in Ri.units?Ri.units[M]:S),S!==v&&(_=Ls(e,M,h,v)),this._pt=new xi(this._pt,C?U:c,M,_,(L?uo(_,L+x):x)-_,!C&&(v==="px"||M==="zIndex")&&t.autoRound!==!1?O2:_p),this._pt.u=v||0,S!==v&&v!=="%"&&(this._pt.b=h,this._pt.r=F2);else if(M in c)q2.call(this,e,M,h,L?L+p:p);else if(M in e)this.add(e,M,h||e[M],L?L+p:p,s,o);else if(M!=="parseTransform"){Bp(M,p);continue}C||(M in c?k.push(M,0,c[M]):typeof e[M]=="function"?k.push(M,2,e[M]()):k.push(M,1,h||e[M])),u.push(M)}}I&&dv(this)},render:function(e,t){if(t.tween._time||!Zp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Br,aliases:_r,getSetter:function(e,t,i){var s=_r[t];return s&&s.indexOf(",")<0&&(t=s),t in Yr&&t!==_i&&(e._gsap.x||Br(e,"x"))?i&&F_===i?t==="scale"?V2:B2:(F_=i||{})&&(t==="scale"?G2:H2):e.style&&!Op(e.style[t])?k2:~t.indexOf("-")?z2:jp(e,t)},core:{_removeProperty:ha,_getMatrix:Jp}};gi.utils.checkPrefix=To;gi.core.getStyleSaver=_v;(function(a,e,t,i){var s=mi(a+","+e+","+t,function(o){Yr[o]=1});mi(e,function(o){Ri.units[o]="deg",Sv[o]=1}),_r[s[13]]=a+","+e,mi(i,function(o){var u=o.split(":");_r[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Ri.units[a]="px"});gi.registerPlugin(Tv);var na=gi.registerPlugin(Tv)||gi;na.core.Tween;const rr=5e3,ro=25,X_=10,eb=`
  attribute float size;
  attribute float alpha;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vSize;
  
  void main() {
    vColor = color;
    vAlpha = alpha;
    vSize = size;
    
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`,tb=`
  uniform float time;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vSize;
  
  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    
    // Enhanced glowing effect with softer, brighter edges
    float alpha = vAlpha * (1.0 - smoothstep(0.0, 0.6, dist));
    
    // Multiple twinkle frequencies for rich sparkle effect
    float twinkle1 = sin(time * 4.0 + vSize * 15.0) * 0.4 + 0.6;
    float twinkle2 = sin(time * 6.5 + vSize * 8.0) * 0.3 + 0.7;
    float twinkle3 = sin(time * 2.0 + vSize * 20.0) * 0.2 + 0.8;
    float combinedTwinkle = (twinkle1 + twinkle2 + twinkle3) / 3.0;
    
    // Preserve original colors while adding sparkle
    // Only apply golden tint to particles that are already gold/yellow
    float isGold = step(0.5, vColor.r + vColor.g - vColor.b); // Detect gold/yellow colors
    vec3 goldenBoost = vec3(1.0, 0.9, 0.6);
    vec3 colorBoost = mix(vColor, vColor * goldenBoost, isGold * 0.6); // Only boost gold colors
    
    vec3 sparkleColor = colorBoost * (1.0 + combinedTwinkle * 0.8);
    
    // Add inner glow for extra shine (white glow, preserves color)
    float innerGlow = 1.0 - smoothstep(0.0, 0.3, dist);
    sparkleColor += vec3(1.0, 1.0, 1.0) * innerGlow * 0.3; // White glow, less intense
    
    alpha *= (0.8 + combinedTwinkle * 0.4);
    
    gl_FragColor = vec4(sparkleColor, alpha);
  }
`;function hh(a,e,t){const i=Math.sin(a*12.9898+e*78.233+t*37.719)*43758.5453;return i-Math.floor(i)}const nb=()=>{const a=At.useRef(null),e=At.useRef(null),[t,i]=At.useState("LOADING"),[s,o]=At.useState("IDLE"),[u,c]=At.useState(null),[d,h]=At.useState("经典圣诞"),p=At.useRef(!1),x=At.useRef(0),_=At.useRef({x:0,y:0}),y=At.useRef({x:0,y:0}),E=At.useRef(0),M=At.useRef(0),S=At.useRef(!1),v=At.useRef(!1),L=At.useRef(!1),C=At.useRef(!1),D=At.useRef(null),U=At.useRef(null),R=At.useRef(null),I=At.useRef(null),k=At.useRef(null),w=At.useRef(null),A=At.useRef(null),B=At.useRef(null),W=At.useRef(null),Y=At.useRef([]),oe=At.useRef(null),ie=At.useRef(null),re=At.useRef(null),fe=At.useRef(null),H=At.useRef(null),de=At.useRef(null);return At.useEffect(()=>{if(!a.current)return;const $=new C1;$.background=new it(0),$.fog=new Lp(0,.02),U.current=$;const O=new Gi(60,window.innerWidth/window.innerHeight,.1,1e3);O.position.set(0,0,35),O.lookAt(0,0,0),R.current=O;const J=new Dw({antialias:!0,powerPreference:"high-performance",alpha:!1});J.setSize(window.innerWidth,window.innerHeight),J.setPixelRatio(Math.min(window.devicePixelRatio,2)),J.setClearColor(0),a.current.appendChild(J.domElement),D.current=J;const Le=new Ow(J),Pe=new kw($,O);Le.addPass(Pe);const Oe=new go(new lt(window.innerWidth,window.innerHeight),2.2,.5,.7);Le.addPass(Oe),I.current=Le;const te=new ri,se=new Float32Array(rr*3),_e=new Float32Array(rr*3),Ie=new Float32Array(rr*3),Ue=new Float32Array(rr*3),ut=new Float32Array(rr*3),Vt=new Float32Array(rr),ct=new Float32Array(rr),Dt=new it(16766720),z=new it(16777215),xt=new it(16739179),pt=new it(5164484),Mt=new it;for(let ne=0;ne<rr;ne++){const pe=ne*3,De=Math.random(),Et=ne/rr;if(De>1-Et*.7){const tt=Math.random()*.5,Ft=Math.floor(tt*12)/12,Gt=1-Ft,$n=Math.pow(1-Ft,1.3),Kn=X_*(Gt*.8+$n*.2),Tt=ne*2.399963229728653,Zt=Kn*Math.sqrt(Math.random());let qt=-ro/2+Ft*ro;const Zn=Zt*.4;qt-=Zn;const bn=(Math.random()-.5)*.6,An=(Math.random()-.5)*(.8+Ft*1.2);Ie[pe]=Math.cos(Tt)*Zt+An*.3,Ie[pe+1]=qt+bn,Ie[pe+2]=Math.sin(Tt)*Zt+An*.3}else{const tt=Math.floor(Et*12)/12,ht=1-tt,Ft=Math.pow(1-tt,1.3),Gt=X_*(ht*.8+Ft*.2),Kn=Math.max(.2,Gt),Tt=ne*2.399963229728653,Zt=Kn*Math.sqrt(Math.random());let qt=-ro/2+tt*ro;const Zn=Zt*.4;qt-=Zn;const bn=(Math.random()-.5)*.6,An=(Math.random()-.5)*(.8+tt*1.2);Ie[pe]=Math.cos(Tt)*Zt+An*.3,Ie[pe+1]=qt+bn,Ie[pe+2]=Math.sin(Tt)*Zt+An*.3}const _t=60,nn=hh(ne,0,0),Kt=hh(0,ne,0),Li=hh(0,0,ne);Ue[pe]=(nn-.5)*_t,Ue[pe+1]=(Kt-.5)*_t,Ue[pe+2]=(Li-.5)*_t,se[pe]=Ue[pe],se[pe+1]=Ue[pe+1],se[pe+2]=Ue[pe+2],_e[pe]=0,_e[pe+1]=0,_e[pe+2]=0;const si=Math.random();si>.7?Mt.copy(z).multiplyScalar(1.3):si>.4?Mt.copy(Dt).multiplyScalar(1.5):si>.25?Mt.copy(xt).multiplyScalar(1.2):Mt.copy(pt),ut[pe]=Mt.r,ut[pe+1]=Mt.g,ut[pe+2]=Mt.b,Vt[ne]=.8+Math.random()*.6,ct[ne]=.7+Math.random()*.3}te.setAttribute("position",new En(se,3).setUsage(bd)),te.setAttribute("color",new En(ut,3)),te.setAttribute("size",new En(Vt,1)),te.setAttribute("alpha",new En(ct,1));const Ge=new Yn({uniforms:{time:{value:0}},vertexShader:eb,fragmentShader:tb,blending:sa,depthWrite:!1,transparent:!0,vertexColors:!0}),Pt=new Qd(te,Ge);k.current=Pt;const ke=new pl;ke.add(Pt),ke.position.y=2,$.add(ke),w.current=ke,oe.current=se,ie.current=_e,re.current=Ie,fe.current=Ue,H.current=Vt,de.current=ct;const et=document.createElement("canvas");et.width=128,et.height=128;const N=et.getContext("2d");if(N){const ne=N.createRadialGradient(64,64,0,64,64,64);ne.addColorStop(0,"rgba(255, 255, 255, 1)"),ne.addColorStop(.3,"rgba(255, 215, 0, 0.9)"),ne.addColorStop(.6,"rgba(255, 215, 0, 0.3)"),ne.addColorStop(1,"rgba(0, 0, 0, 0)"),N.fillStyle=ne,N.fillRect(0,0,128,128)}const b=new N1(et),K=new mg({map:b,blending:sa,transparent:!0}),he=new P1(K);he.scale.set(0,0,1),he.position.set(0,ro/2+.5,0),ke.add(he),A.current=he;const xe=new Ip(1,1.6,9,16),ce=new F1({color:4859153,roughness:.9,metalness:.1}),We=new Mr(xe,ce);We.position.set(0,-ro/2-4.5,0),We.visible=!1,ke.add(We),B.current=We;const Ae=new G1(16777215,.3);$.add(Ae);const ze=new V1(16777215,.5);ze.position.set(5,10,5),$.add(ze);const Be=1e3,me=new ri,Me=new Float32Array(Be*3);for(let ne=0;ne<Be;ne++)Me[ne*3]=(Math.random()-.5)*60,Me[ne*3+1]=Math.random()*40+10,Me[ne*3+2]=(Math.random()-.5)*60;me.setAttribute("position",new En(Me,3).setUsage(bd));const Ke=new ip({size:.3,color:16777215,transparent:!0,opacity:.8,blending:sa}),Xe=new Qd(me,Ke);Xe.visible=!1,$.add(Xe),W.current=Xe;let Re;const Qe=.35,V=.25,be=.9,Ee=.03,Te=()=>{if(Re=requestAnimationFrame(Te),E.current+=.016,!D.current||!I.current)return;const ne=oe.current,pe=ie.current,De=re.current,Et=fe.current,_t=k.current.material;_t.uniforms.time.value=E.current;const nn=p.current,Kt=x.current;for(let tt=0;tt<rr;tt++){const ht=tt*3,Ft=ne[ht],Gt=ne[ht+1],$n=ne[ht+2];let Kn,In,Tt;if(Kt>.01){Kn=De[ht],In=De[ht+1],Tt=De[ht+2];const Zt=Kn-Ft,qt=In-Gt,Zn=Tt-$n,bn=Math.sqrt(Zt*Zt+qt*qt+Zn*Zn);if(bn>.01){const An=Qe*Kt;pe[ht]+=Zt/bn*An,pe[ht+1]+=qt/bn*An,pe[ht+2]+=Zn/bn*An}}else{Kn=Et[ht],In=Et[ht+1],Tt=Et[ht+2];const Zt=Kn-Ft,qt=In-Gt,Zn=Tt-$n,bn=Math.sqrt(Zt*Zt+qt*qt+Zn*Zn);if(bn>.01){const An=V;pe[ht]+=Zt/bn*An,pe[ht+1]+=qt/bn*An,pe[ht+2]+=Zn/bn*An}pe[ht]+=(Math.random()-.5)*Ee,pe[ht+1]+=(Math.random()-.5)*Ee,pe[ht+2]+=(Math.random()-.5)*Ee}pe[ht]*=be,pe[ht+1]*=be,pe[ht+2]*=be,ne[ht]+=pe[ht],ne[ht+1]+=pe[ht+1],ne[ht+2]+=pe[ht+2]}if(te.attributes.position.needsUpdate=!0,A.current){const tt=nn?5+Math.sin(E.current*4)*1.5:0;na.to(A.current.scale,{x:tt,y:tt,duration:.5,ease:"power2.out"})}if(B.current&&(B.current.visible=nn,B.current.rotation.y+=.001),W.current&&W.current.visible){const tt=W.current.geometry.attributes.position.array,ht=tt.length/3;for(let Ft=0;Ft<ht;Ft++){const Gt=Ft*3;tt[Gt+1]-=.05+Math.sin(E.current+Ft)*.02,tt[Gt]+=Math.sin(E.current*.5+Ft)*.02,tt[Gt+1]<-15&&(tt[Gt+1]=40,tt[Gt]=(Math.random()-.5)*60,tt[Gt+2]=(Math.random()-.5)*60)}W.current.geometry.attributes.position.needsUpdate=!0}Y.current.filter(tt=>tt.active).forEach(tt=>{if(tt.age+=.016,tt.age>tt.lifetime){tt.active=!1,tt.particles&&($.remove(tt.particles),tt.particles.geometry.dispose(),tt.particles.material.dispose());return}if(tt.particles){const ht=tt.particles.geometry.attributes.position.array,Ft=tt.velocities,Gt=tt.particles.geometry.attributes.color.array;for(let In=0;In<ht.length/3;In++){const Tt=In*3;ht[Tt]+=Ft[Tt],ht[Tt+1]+=Ft[Tt+1],ht[Tt+2]+=Ft[Tt+2],Ft[Tt+1]-=.015,Ft[Tt]*=.97,Ft[Tt+1]*=.97,Ft[Tt+2]*=.97;const Zt=tt.age/tt.lifetime;if(Zt>.5){const qt=(Zt-.5)*.6;Gt[Tt]=Gt[Tt]*(1-qt)+qt,Gt[Tt+1]=Gt[Tt+1]*(1-qt)+qt,Gt[Tt+2]=Gt[Tt+2]*(1-qt)+qt}}tt.particles.geometry.attributes.position.needsUpdate=!0,tt.particles.geometry.attributes.color.needsUpdate=!0;const $n=tt.age/tt.lifetime,Kn=$n<.7?1:1-($n-.7)/.3;tt.particles.material.opacity=Kn}});const si=_.current.y*1.8,qr=-_.current.x*2.5;nn?na.to(y.current,{x:si,y:qr,duration:.8,ease:"power2.out"}):y.current.y+=.002,w.current&&(w.current.rotation.x=y.current.x,w.current.rotation.y=y.current.y),Le.render()};Te();const ge=()=>{!R.current||!D.current||!I.current||(R.current.aspect=window.innerWidth/window.innerHeight,R.current.updateProjectionMatrix(),D.current.setSize(window.innerWidth,window.innerHeight),I.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",ge),()=>{if(window.removeEventListener("resize",ge),cancelAnimationFrame(Re),D.current){const ne=D.current.domElement;ne&&ne.parentNode&&ne.parentNode.removeChild(ne),D.current.dispose(),D.current=null}I.current&&(I.current.dispose(),I.current=null),te.dispose(),Ge.dispose(),K.dispose(),b.dispose()}},[]),At.useEffect(()=>{let $=null,O=null,J=!0;return(async()=>{try{let Pe=0;const Oe=()=>{var _e;const se=window;return se.Camera||((_e=se.CameraUtils)==null?void 0:_e.Camera)||se.camera_utils&&se.camera_utils.Camera||null};for(;(!window.Hands||!Oe())&&Pe<100;)await new Promise(se=>setTimeout(se,50)),Pe++;if(!J)return;const te=Oe();if(!window.Hands||!te){c("MediaPipe failed to load. Please check connection and refresh."),i("ERROR");return}if($=new window.Hands({locateFile:se=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${se}`}),$.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),$.onResults(se=>{if(J)if(se.multiHandLandmarks&&se.multiHandLandmarks.length>0){const _e=se.multiHandLandmarks[0],Ie=_e[0],Ue=_e[4],ut=_e[8],Vt=_e[12],ct=_e[16],Dt=_e[20],z=_e[9],xt=Math.abs(ut.y-z.y)<.12,pt=Math.abs(Vt.y-z.y)<.12,Mt=Math.abs(ct.y-z.y)<.12,Ge=Math.abs(Dt.y-z.y)<.12,Pt=Math.abs(Ue.y-z.y)<.18,ke=Math.abs(ut.y-z.y)>.15,et=Math.abs(Vt.y-z.y)>.15,N=Math.abs(ct.y-z.y)>.15,b=Math.abs(Dt.y-z.y)>.15,K=[xt,pt,Mt,Ge].filter(ze=>ze).length,he=[ke,et,N,b].filter(ze=>ze).length,xe=K>=3&&Pt,ce=ke&&!et&&!N&&!b,We=ke&&et&&!N&&!b,Ae=ke&&et&&N&&!b;if(ce&&!S.current){S.current=!0;const Be=(M.current+1)%3;if(M.current=Be,h(["经典圣诞","冰雪奇缘","梦幻粉紫"][Be]),k.current){const Me=k.current.geometry.attributes.color.array,Ke=new it(16766720),Xe=new it(16777215),Re=new it(16739179),Qe=new it(5164484),V=new it(4286945),be=new it(12632256),Ee=new it(16738740),Te=new it(9662683);for(let ge=0;ge<rr;ge++){const ne=ge*3,pe=Math.random();let De=new it;Be===0?pe>.7?De.copy(Xe).multiplyScalar(1.3):pe>.4?De.copy(Ke).multiplyScalar(1.5):pe>.25?De.copy(Re).multiplyScalar(1.2):De.copy(Qe):Be===1?pe>.6?De.copy(Xe).multiplyScalar(1.4):pe>.3?De.copy(V).multiplyScalar(1.5):De.copy(be).multiplyScalar(1.3):pe>.6?De.copy(Xe).multiplyScalar(1.4):pe>.3?De.copy(Ee).multiplyScalar(1.5):De.copy(Te).multiplyScalar(1.3),Me[ne]=De.r,Me[ne+1]=De.g,Me[ne+2]=De.b}k.current.geometry.attributes.color.needsUpdate=!0}}else ce||(S.current=!1);if(We&&!v.current&&!C.current?(v.current=!0,C.current=!0,W.current&&(W.current.visible=!0),setTimeout(()=>{C.current=!1,W.current&&(W.current.visible=!1)},1e4)):We||(v.current=!1),Ae&&!L.current){L.current=!0;const ze={x:(z.x-.5)*40,y:(z.y-.5)*-30+10,z:0};[{count:200,speed:.8,size:.8,delay:0},{count:150,speed:.5,size:.6,delay:.1},{count:100,speed:.3,size:.4,delay:.2}].forEach((me,Me)=>{setTimeout(()=>{var pe;const Ke=me.count,Xe=new ri,Re=new Float32Array(Ke*3),Qe=new Float32Array(Ke*3),V=new(void 0)(Ke*3),be=new Float32Array(Ke),Ee=new it,Te=new it;Ee.setHSL(Math.random(),1,.6),Te.setHSL((Math.random()+.3)%1,1,.7);for(let De=0;De<Ke;De++){Re[De*3]=ze.x,Re[De*3+1]=ze.y,Re[De*3+2]=ze.z;const Et=Math.random()*Math.PI*2,_t=Math.acos(2*Math.random()-1),nn=(Math.random()*.4+.8)*me.speed;Qe[De*3]=Math.sin(_t)*Math.cos(Et)*nn,Qe[De*3+1]=Math.sin(_t)*Math.sin(Et)*nn,Qe[De*3+2]=Math.cos(_t)*nn;const Kt=De/Ke,Li=new it().lerpColors(Ee,Te,Kt);V[De*3]=Li.r,V[De*3+1]=Li.g,V[De*3+2]=Li.b,be[De]=me.size*(.8+Math.random()*.4)}Xe.setAttribute("position",new En(Re,3).setUsage(bd)),Xe.setAttribute("color",new En(V,3)),Xe.setAttribute("size",new En(be,1));const ge=new ip({size:me.size,vertexColors:!0,blending:sa,transparent:!0,sizeAttenuation:!0}),ne=new Qd(Xe,ge);(pe=U.current)==null||pe.add(ne),Y.current.push({particles:ne,velocities:Qe,age:0,lifetime:3,active:!0,layerIndex:Me})},me.delay*1e3)}),A.current&&p.current&&na.to(A.current.scale,{x:10,y:10,duration:.2,ease:"power2.out",yoyo:!0,repeat:1})}else Ae||(L.current=!1);if(xe){const ze=K/4;na.to(x,{current:ze,duration:.3,ease:"power2.out"}),p.current=!0,o("PINCHING");const Be=z.x,me=z.y;_.current={x:(Be-.5)*2,y:(me-.5)*2}}else!xe&&!ce&&!We&&!Ae&&(na.to(x,{current:0,duration:.5,ease:"power2.out"}),p.current=!1,o("IDLE"))}else na.to(x,{current:0,duration:.5,ease:"power2.out"}),p.current=!1,o("IDLE")}),e.current){const se=Oe();O=new se(e.current,{onFrame:async()=>{$&&e.current&&await $.send({image:e.current})},width:640,height:480}),await O.start(),J&&i("ACTIVE")}}catch(Pe){console.error(Pe),J&&(i("ERROR"),c("Camera access denied. Please allow camera permissions."))}})(),()=>{J=!1,$&&$.close(),O&&O.stop()}},[]),gt.jsxs("div",{className:"relative w-full h-full bg-black",children:[gt.jsx("div",{ref:a,className:"absolute inset-0 z-0 overflow-hidden"}),gt.jsx("video",{ref:e,className:"hidden",playsInline:!0,muted:!0}),gt.jsxs("div",{className:"absolute top-0 left-0 w-full h-full z-10 pointer-events-none p-6 flex flex-col justify-between",children:[gt.jsxs("div",{className:"flex justify-between items-start w-full",children:[gt.jsxs("div",{className:"bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl",children:[gt.jsx("h1",{className:"text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600",children:"Gesture Christmas Tree"}),gt.jsxs("div",{className:"mt-2 text-sm text-gray-300 font-mono",children:[gt.jsxs("div",{className:"flex items-center gap-2",children:[gt.jsx("span",{className:"text-xl",children:"✊"}),gt.jsx("span",{children:"握拳形成圣诞树并旋转"})]}),gt.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[gt.jsx("span",{className:"text-xl",children:"🖐️"}),gt.jsx("span",{children:"张开手爆炸散开"})]}),gt.jsxs("div",{className:"mt-3 pt-2 border-t border-white/10",children:[gt.jsx("div",{className:"text-xs text-gray-400 mb-1",children:"手指数量："}),gt.jsxs("div",{className:"flex items-center gap-2",children:[gt.jsx("span",{className:"text-xl",children:"☝️"}),gt.jsx("span",{children:"1根手指切换颜色"})]}),gt.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[gt.jsx("span",{className:"text-xl",children:"✌️"}),gt.jsx("span",{children:"2根手指飘雪"})]}),gt.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[gt.jsx("span",{className:"text-xl",children:"🤟"}),gt.jsx("span",{children:"3根手指烟花"})]})]})]})]}),gt.jsxs("div",{className:"flex flex-col gap-2 items-end",children:[gt.jsxs("div",{className:`
                flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md font-bold text-xs tracking-wider shadow-lg
                ${t==="ACTIVE"?"border-green-500/30 bg-green-900/30 text-green-400":""}
                ${t==="LOADING"?"border-blue-500/30 bg-blue-900/30 text-blue-400":""}
                ${t==="ERROR"?"border-red-500/30 bg-red-900/30 text-red-400":""}
              `,children:[gt.jsxs("span",{className:"flex h-3 w-3 relative",children:[gt.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${t==="ACTIVE"?"bg-green-400":t==="LOADING"?"bg-blue-400":"bg-red-400"}`}),gt.jsx("span",{className:`relative inline-flex rounded-full h-3 w-3 ${t==="ACTIVE"?"bg-green-500":t==="LOADING"?"bg-blue-500":"bg-red-500"}`})]}),t==="LOADING"?"INITIALIZING VISION...":t==="ACTIVE"?"VISION ACTIVE":"VISION FAILED"]}),gt.jsxs("div",{className:"px-4 py-2 rounded-full border border-purple-500/30 bg-purple-900/30 backdrop-blur-md font-bold text-xs tracking-wider shadow-lg text-purple-300",children:["当前主题: ",d]})]})]}),gt.jsx("div",{className:`
            absolute top-10 left-1/2 transform -translate-x-1/2
            transition-all duration-500 ease-out pointer-events-none
            ${s==="PINCHING"?"scale-110 opacity-100":"scale-50 opacity-0"}
        `,children:gt.jsx("div",{className:"text-6xl font-black text-yellow-100 drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] tracking-tighter mix-blend-screen",children:"MERRY CHRISTMAS"})}),u&&gt.jsxs("div",{className:"self-center bg-red-950/90 text-white p-6 rounded-xl border border-red-500 shadow-2xl pointer-events-auto max-w-md text-center",children:[gt.jsx("div",{className:"text-4xl mb-2",children:"⚠️"}),gt.jsx("h3",{className:"font-bold text-lg mb-2",children:"System Error"}),gt.jsx("p",{className:"text-red-200 mb-4",children:u}),gt.jsx("button",{onClick:()=>window.location.reload(),className:"bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded transition-colors w-full font-bold",children:"RETRY"})]})]})]})},ib=()=>gt.jsx("div",{className:"relative w-full h-screen bg-black text-white overflow-hidden",children:gt.jsx(nb,{})}),wv=document.getElementById("root");if(!wv)throw new Error("Could not find root element to mount to");const rb=pS.createRoot(wv);rb.render(gt.jsx(oS.StrictMode,{children:gt.jsx(ib,{})}));
